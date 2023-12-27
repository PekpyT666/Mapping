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


let processRawSavedMap = function (map, is_call_from_menu) {
    if (map.property("tiled_save_flag") == true || is_call_from_menu) {
        map.macro("Process raw saved map", function () {
            if (tiled.confirm(((is_call_from_menu) ? "" : "It seems that you open this saved map for the first time .\n") + "Do you want Tiled to autoexecute a few scripts to make this map look good ?\n\nScripts that will be executed :\n\"Convert types from DEV to PRETTY\" --> \"Make all objects visible\" --> \"Remove properties with default values (objects)" + ((is_call_from_menu) ? "" : "\"\n\nYou can execute them latter with button \"Process raw saved map\" from \"Map\" menu ."), "Execute all scripts to make saved map more readable ?")) {
                tiled.trigger("devToPretty");
                tiled.trigger("Make all objects visible");
                tiled.trigger("Remove properties with default values (objects)");
            }
            map.setProperty("tiled_save_flag", false);
        });
    }
}


tiled.activeAssetChanged.connect(processRawSavedMap);


const automate_dump_tools = tiled.registerAction("Process raw saved map", function () {
    processRawSavedMap(tiled.activeAsset, true);
});

automate_dump_tools.text = "Process raw saved map";
automate_dump_tools.iconVisibleInMenu = false;
tiled.extendMenu("Map", [
    { separator: true },
    { action: "Process raw saved map", before: "MapProperties" },
    { separator: true }
]);