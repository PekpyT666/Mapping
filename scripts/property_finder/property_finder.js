/// <reference types="@mapeditor/tiled-api" />
/*
MIT License

Copyright (c) 2023 Grif_on

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

//Intended for use in Tiled 1.8.6

let shared_name_find_value = "Find objects with value";
let shared_name_find_property = "Find objects with property";
let shared_name_find_value_in_property = "Find objects with value in property";
let shared_name_option_only_on_visible_layers = "finder - Only on visible layers";
let shared_name_option_also_include_object_types_defaults = "finder - Also include default properties/values";


let previous_value = "";
let previous_property_name = "";


function parseString(input) {
    let processed_value;
    if (input.charAt(0) === "\"" && (input.charAt(input.length - 1) === "\"" && input.length !== 1)) {
        processed_value = input.slice(1, input.length - 1);
    } else {
        switch (input.toLowerCase()) {
            case "true":
                return true;
            case "false":
                return false;
            default:
                break;
        }
        processed_value = Number(input);
        if (isNaN(processed_value) || !isFinite(processed_value)) {
            processed_value = input;
        }
    }
    return processed_value;
}

function centerCameraOnObjectArray(objects) {
    let map = tiled.activeAsset;
    let min_x = 999999999;
    let max_x = -999999999;
    let min_y = 999999999;
    let max_y = -999999999;
    objects.forEach(object => {
        const pos = map.pixelToScreen(object.pos);
        if (pos.x < min_x) min_x = pos.x;
        if (pos.x > max_x) max_x = pos.x;
        if (pos.y < min_y) min_y = pos.y;
        if (pos.y > max_y) max_y = pos.y;
    });
    let x = (min_x + max_x) / 2;
    let y = (min_y + max_y) / 2;
    if (objects.length > 0) {
        tiled.mapEditor.currentMapView.centerOn(x, y);
    } else {
        tiled.alert("Nothing found", "Finder");
    }
    //tiled.mapEditor.currentMapView.scale = 1;
}


const find_value = tiled.registerAction(shared_name_find_value, function () {
    let new_value = tiled.prompt("What value should object have in any of it properties ?\nValue will be treated as number or boolean if it can be converted to them respectively ,\notherwise it will be treated as string .\nIf you don't want auto conversion then just wrap around input with \"\"\n(e.g. \"\" --> empty string , \"1\" --> string with number one and \"true\" --> string with word true) .", previous_value, "Value ?");
    if (new_value === "") return; //Note - "Cancel" empty string and user empty string are different (since "" !== "\"\"")

    previous_value = new_value;

    new_value = parseString(new_value);

    let map = tiled.activeAsset;
    map.selectedObjects = [];
    let targeted_objects = [];
    for (let i = 0; i < map.layerCount; i++) {
        current_layer = map.layerAt(i);
        if (option_only_on_visible_layers.checked && !current_layer.visible) continue;
        if (current_layer.isObjectLayer) {                          //игнорировать необъектные слои
            if (current_layer.objects != null) {                    //на случай , если слой не будет иметь объектов вообще
                current_layer.objects.forEach(function (processed_object) {
                    let properties = (option_also_include_object_types_defaults.checked) ? processed_object.resolvedProperties() : processed_object.properties();
                    for (const [key, value] of Object.entries(properties)) {
                        if (typeof (value) === "object") {
                            if (value.value === new_value) {
                                processed_object.selected = true;
                                targeted_objects.push(processed_object);
                            }
                        } else {
                            if (value === new_value) {
                                processed_object.selected = true;
                                targeted_objects.push(processed_object);
                            }
                        }
                    }
                });
            }
        }
    }
    centerCameraOnObjectArray(targeted_objects);
});

find_value.text = shared_name_find_value;
find_value.icon = "find_v.png";
find_value.shortcut = "Ctrl+F";

tiled.extendMenu("Map", [
    { separator: true },
    { action: shared_name_find_value, before: "SelectNextTileset" }
]);




const find_property = tiled.registerAction(shared_name_find_property, function () {
    let new_property_name = tiled.prompt("\n\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎                                               What property should object have ?                                               ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n\n", previous_property_name, "Property ?");
    if (new_property_name === "") return;

    previous_property_name = new_property_name;

    let map = tiled.activeAsset;
    map.selectedObjects = [];
    let targeted_objects = [];
    for (let i = 0; i < map.layerCount; i++) {
        current_layer = map.layerAt(i);
        if (option_only_on_visible_layers.checked && !current_layer.visible) continue;
        if (current_layer.isObjectLayer) {                          //игнорировать необъектные слои
            if (current_layer.objects != null) {                    //на случай , если слой не будет иметь объектов вообще
                current_layer.objects.forEach(function (processed_object) {
                    let properties = (option_also_include_object_types_defaults.checked) ? processed_object.resolvedProperties() : processed_object.properties();
                    for (const [key, value] of Object.entries(properties)) {
                        if (key === new_property_name) {
                            processed_object.selected = true;
                            targeted_objects.push(processed_object);
                        }
                    }
                });
            }
        }
    }
    centerCameraOnObjectArray(targeted_objects);
});

find_property.text = shared_name_find_property;
find_property.icon = "find_p.png";
find_property.shortcut = "Ctrl+Alt+F";

tiled.extendMenu("Map", [
    { action: shared_name_find_property, before: "SelectNextTileset" }
]);




const find_value_in_property = tiled.registerAction(shared_name_find_value_in_property, function () {
    let new_value = tiled.prompt("What value should object have ?\nValue will be treated as number or boolean if it can be converted to them respectively ,\notherwise it will be treated as string .\nIf you don't want auto conversion then just wrap around input with \"\"\n(e.g. \"\" --> empty string , \"1\" --> string with number one and \"true\" --> string with word true) .", previous_value, "Value ?");
    if (new_value === "") return; //Note - "Cancel" empty string and user empty string are different (since "" !== "\"\"")

    let new_property_name = tiled.prompt("\n\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎                                 In which property object should have supplied value ?                                 ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n\n", previous_property_name, "Property ?");
    if (new_property_name === "") return;

    previous_value = new_value;
    previous_property_name = new_property_name;

    new_value = parseString(new_value);

    let map = tiled.activeAsset;
    map.selectedObjects = [];
    let targeted_objects = [];
    for (let i = 0; i < map.layerCount; i++) {
        current_layer = map.layerAt(i);
        if (option_only_on_visible_layers.checked && !current_layer.visible) continue;
        if (current_layer.isObjectLayer) {                          //игнорировать необъектные слои
            if (current_layer.objects != null) {                    //на случай , если слой не будет иметь объектов вообще
                current_layer.objects.forEach(function (processed_object) {
                    let value = (option_also_include_object_types_defaults.checked) ? processed_object.resolvedProperty(new_property_name) : processed_object.property(new_property_name);
                    if (typeof (value) === "object") {
                        if (value.value === new_value) {
                            processed_object.selected = true;
                            targeted_objects.push(processed_object);
                        }
                    } else {
                        if (value === new_value) {
                            processed_object.selected = true;
                            targeted_objects.push(processed_object);
                        }
                    }
                });
            }
        }
    }
    centerCameraOnObjectArray(targeted_objects);
});

find_value_in_property.text = shared_name_find_value_in_property;
find_value_in_property.icon = "find_v_in_p.png";
find_value_in_property.shortcut = "Ctrl+Shift+F";

tiled.extendMenu("Map", [
    { action: shared_name_find_value_in_property, before: "SelectNextTileset" }
]);



const option_only_on_visible_layers = tiled.registerAction(shared_name_option_only_on_visible_layers, function () { });

option_only_on_visible_layers.text = shared_name_option_only_on_visible_layers;
option_only_on_visible_layers.checkable = true;
option_only_on_visible_layers.checked = false;
option_only_on_visible_layers.iconVisibleInMenu = false;
tiled.extendMenu("Map", [
    { action: shared_name_option_only_on_visible_layers, before: "SelectNextTileset" }
]);



const option_also_include_object_types_defaults = tiled.registerAction(shared_name_option_also_include_object_types_defaults, function () { });

option_also_include_object_types_defaults.text = shared_name_option_also_include_object_types_defaults;
option_also_include_object_types_defaults.checkable = true;
option_also_include_object_types_defaults.checked = false;
option_also_include_object_types_defaults.iconVisibleInMenu = false;
tiled.extendMenu("Map", [
    { action: shared_name_option_also_include_object_types_defaults, before: "SelectNextTileset" },
    { separator: true }
]);