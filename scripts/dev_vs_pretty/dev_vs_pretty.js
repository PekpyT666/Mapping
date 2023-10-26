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

let map

let sharedNameDtoP = "Convert types from DEV to PRETTY";
const devToPretty = tiled.registerAction("devToPretty", function () {
    map = tiled.activeAsset;
    map.macro(sharedNameDtoP, function () {
        for (let l = 0; l < map.layerCount; l++) {
            currentLayer = map.layerAt(l);
            if (currentLayer.objects != null) {                    //на случай , если слой не будет иметь объектов вообще
                currentLayer.objects.forEach(function (iteratedObject) {
                    switch (iteratedObject.type) {
                        case "obj_key": iteratedObject.type = "Key"; break;
                        case "obj_key_steel": iteratedObject.type = "Key Steel"; break;
                        case "obj_key_brass": iteratedObject.type = "Key Brass"; break;
                        case "obj_key_copper": iteratedObject.type = "Key Copper"; break;
                        case "obj_door_steel": iteratedObject.type = "Door Steel"; break;
                        case "obj_door_brass": iteratedObject.type = "Door Brass"; break;
                        case "obj_door_copper": iteratedObject.type = "Door Copper"; break;
                        case "obj_door": iteratedObject.type = "Door"; break;
                        case "obj_monster_wandering": iteratedObject.type = "Monster Wandering"; break;
                        case "obj_monster_lost": iteratedObject.type = "Monster Lost"; break;
                        case "obj_monster_howling": iteratedObject.type = "Monster Howling"; break;
                        case "obj_monster_horror": iteratedObject.type = "Monster Horror"; break;
                        case "obj_monster_flyingwraith": iteratedObject.type = "Monster Flying Wraith"; break;
                        case "obj_monster_wraith": iteratedObject.type = "Monster Wraith"; break;
                        case "obj_monster_nightmare": iteratedObject.type = "Monster Nightmare"; break;
                        case "obj_monster_nightmarish": iteratedObject.type = "Monster Nightmarish"; break;
                        case "obj_monster_impendent": iteratedObject.type = "Monster Impendent"; break;
                        case "obj_monster_lantern": iteratedObject.type = "Monster Lantern"; break;
                        case "obj_monster_phantom": iteratedObject.type = "Monster Phantom"; break;
                        case "obj_monster_exhausted": iteratedObject.type = "Monster Exhausted"; break;
                        case "obj_item_bandage": iteratedObject.type = "Item Bandage"; break;
                        case "obj_item_bandage_blue": iteratedObject.type = "Item Bandage Blue"; break;
                        case "obj_item_bandage_black": iteratedObject.type = "Item Bandage Black"; break;
                        case "obj_item_fireball": iteratedObject.type = "Item Fireball"; break;
                        case "obj_item_knife": iteratedObject.type = "Item Knife"; break;
                        case "obj_item_map": iteratedObject.type = "Item Map"; break;
                        case "obj_item_medkit": iteratedObject.type = "Item Medkit"; break;
                        case "obj_item_medkit_blue": iteratedObject.type = "Item Medkit Blue"; break;
                        case "obj_item_medkit_black": iteratedObject.type = "Item Medkit Black"; break;
                        case "obj_item_megahealth": iteratedObject.type = "Item Megahealth"; break;
                        case "obj_item_needles": iteratedObject.type = "Item Needles"; break;
                        case "obj_item_nuke": iteratedObject.type = "Item Nuke"; break;
                        case "obj_item_plant": iteratedObject.type = "Item Plant"; break;
                        case "obj_item_plasma": iteratedObject.type = "Item Plasma"; break;
                        case "obj_item_protection": iteratedObject.type = "Item Protection"; break;
                        case "obj_item_quad": iteratedObject.type = "Item Quad"; break;
                        case "obj_item_shaft": iteratedObject.type = "Item Shaft"; break;
                        case "obj_item_sorcery": iteratedObject.type = "Item Sorcery"; break;
                        case "obj_item_teleport": iteratedObject.type = "Item Teleport"; break;
                        case "obj_item_vision": iteratedObject.type = "Item Vision"; break;
                        case "obj_item_wrench": iteratedObject.type = "Item Wrench"; break;
                        case "ent_activator": iteratedObject.type = "Entity Activator"; break;
                        case "ent_breakable": iteratedObject.type = "Entity Breakable"; break;
                        case "ent_button": iteratedObject.type = "Entity Button"; break;
                        case "ent_calculator": iteratedObject.type = "Entity Calculator"; break;
                        case "ent_cinematic": iteratedObject.type = "Entity Cinematic"; break;
                        case "ent_comparator": iteratedObject.type = "Entity Comparator"; break;
                        case "ent_console": iteratedObject.type = "Entity Console"; break;
                        case "ent_constant": iteratedObject.type = "Entity Constant"; break;
                        case "ent_counter": iteratedObject.type = "Entity Counter"; break;
                        case "ent_decor": iteratedObject.type = "Entity Decor"; break;
                        case "ent_destroyer": iteratedObject.type = "Entity Destroyer"; break;
                        case "ent_dialogue": iteratedObject.type = "Entity Dialogue"; break;
                        case "ent_dice": iteratedObject.type = "Entity Dice"; break;
                        case "ent_display": iteratedObject.type = "Entity Display"; break;
                        case "ent_door": iteratedObject.type = "Entity Door"; break;
                        case "ent_fade": iteratedObject.type = "Entity Fade"; break;
                        case "ent_fog": iteratedObject.type = "Entity Fog"; break;
                        case "ent_grabber": iteratedObject.type = "Entity Grabber"; break;
                        case "ent_hurt": iteratedObject.type = "Entity Hurt"; break;
                        case "ent_interact": iteratedObject.type = "Entity Interact"; break;
                        case "ent_light": iteratedObject.type = "Entity Light"; break;
                        case "ent_log": iteratedObject.type = "Entity Log"; break;
                        case "ent_movement": iteratedObject.type = "Entity Movement"; break;
                        case "ent_multidestroyer": iteratedObject.type = "Entity Multidestroyer"; break;
                        case "ent_multimanager": iteratedObject.type = "Entity Multimanager"; break;
                        case "ent_multiprogrammer": iteratedObject.type = "Entity Multiprogrammer"; break;
                        case "ent_node": iteratedObject.type = "Entity Node"; break;
                        case "ent_prefaber": iteratedObject.type = "Entity Prefaber"; break;
                        case "ent_portal": iteratedObject.type = "Entity Portal"; break;
                        case "ent_programmer": iteratedObject.type = "Entity Programmer"; break;
                        case "ent_randomizer": iteratedObject.type = "Entity Randomizer"; break;
                        case "ent_reader": iteratedObject.type = "Entity Reader"; break;
                        case "ent_rotating": iteratedObject.type = "Entity Rotating"; break;
                        case "ent_save": iteratedObject.type = "Entity Save"; break;
                        case "ent_secret": iteratedObject.type = "Entity Secret"; break;
                        case "ent_sequencer": iteratedObject.type = "Entity Sequencer"; break;
                        case "ent_sound": iteratedObject.type = "Entity Sound"; break;
                        case "ent_sound_3d": iteratedObject.type = "Entity Sound 3D"; break;
                        case "ent_spawner": iteratedObject.type = "Entity Spawner"; break;
                        case "ent_switch": iteratedObject.type = "Entity Switch"; break;
                        case "ent_trigger": iteratedObject.type = "Entity Trigger"; break;
                        case "ent_waypoint": iteratedObject.type = "Entity Waypoint"; break;
                        case "ent_writer": iteratedObject.type = "Entity Writer"; break;
                        case "ent_window": iteratedObject.type = "Entity Window"; break;
                        case "ent_forceload_area": iteratedObject.type = "Entity Active Area"; break;
                        case "ent_forceload_type": iteratedObject.type = "Entity Active Type"; break;
                        case "obj_material_bog": iteratedObject.type = "Material Bog"; break;
                        case "obj_material_concrete": iteratedObject.type = "Material Concrete"; break;
                        case "obj_material_grass": iteratedObject.type = "Material Grass"; break;
                        case "obj_material_lattice": iteratedObject.type = "Material Lattice"; break;
                        case "obj_material_metal": iteratedObject.type = "Material Metal"; break;
                        case "obj_material_snow": iteratedObject.type = "Material Snow"; break;
                        case "obj_material_wood": iteratedObject.type = "Material Wood"; break;
                        case "obj_material_carpet": iteratedObject.type = "Material Carpet"; break;
                        case "obj_material_rubber": iteratedObject.type = "Material Rubber"; break;
                        case "obj_arcadeVoid": iteratedObject.type = "Level End"; break;
                        case "obj_Player": iteratedObject.type = "Player"; break;
                        case "obj_sigil": iteratedObject.type = "Save Point"; break;
                        case "obj_trigger_autosave": iteratedObject.type = "Trigger Autosave"; break;
                        case "obj_wall": iteratedObject.type = "World Wall"; break;
                        case "obj_voidwall": iteratedObject.type = "World Wall Pit"; break;
                        case "obj_halfwall": iteratedObject.type = "World Wall Transparent"; break;
                        case "obj_checkbox": iteratedObject.type = "World Play Zone"; break;
                        case "obj_light_huge": iteratedObject.type = "Light Huge"; break;
                        case "obj_light_big": iteratedObject.type = "Light Big"; break;
                        case "obj_light_small": iteratedObject.type = "Light Small"; break;
                        case "obj_light_tiny": iteratedObject.type = "Light Tiny"; break;
                        case "obj_trigger_secret": iteratedObject.type = "Trigger Secret"; break;
                        case "obj_map_pointer_zone": iteratedObject.type = "Map Pointer Zone"; break;
                    }
                });
            }
        }
    });
});

devToPretty.text = sharedNameDtoP;
devToPretty.icon = "conv.png"

tiled.extendMenu("Map", [
    { separator: true },
    { action: "devToPretty", before: "MapProperties" }
]);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let sharedNamePtoD = "Convert types from PRETTY to DEV";
const prettyToDev = tiled.registerAction("prettyToDev", function () {
    map = tiled.activeAsset;
    map.macro(sharedNamePtoD, function () {
        for (let l = 0; l < map.layerCount; l++) {
            currentLayer = map.layerAt(l);
            if (currentLayer.objects != null) {                    //на случай , если слой не будет иметь объектов вообще
                currentLayer.objects.forEach(function (iteratedObject) {
                    switch (iteratedObject.type) {
                        case "Key": iteratedObject.type = "obj_key"; break;
                        case "Key Steel": iteratedObject.type = "obj_key_steel"; break;
                        case "Key Brass": iteratedObject.type = "obj_key_brass"; break;
                        case "Key Copper": iteratedObject.type = "obj_key_copper"; break;
                        case "Door Steel": iteratedObject.type = "obj_door_steel"; break;
                        case "Door Brass": iteratedObject.type = "obj_door_brass"; break;
                        case "Door Copper": iteratedObject.type = "obj_door_copper"; break;
                        case "Door": iteratedObject.type = "obj_door"; break;
                        case "Monster Wandering": iteratedObject.type = "obj_monster_wandering"; break;
                        case "Monster Lost": iteratedObject.type = "obj_monster_lost"; break;
                        case "Monster Howling": iteratedObject.type = "obj_monster_howling"; break;
                        case "Monster Horror": iteratedObject.type = "obj_monster_horror"; break;
                        case "Monster Flying Wraith": iteratedObject.type = "obj_monster_flyingwraith"; break;
                        case "Monster Wraith": iteratedObject.type = "obj_monster_wraith"; break;
                        case "Monster Nightmare": iteratedObject.type = "obj_monster_nightmare"; break;
                        case "Monster Nightmarish": iteratedObject.type = "obj_monster_nightmarish"; break;
                        case "Monster Impendent": iteratedObject.type = "obj_monster_impendent"; break;
                        case "Monster Lantern": iteratedObject.type = "obj_monster_lantern"; break;
                        case "Monster Phantom": iteratedObject.type = "obj_monster_phantom"; break;
                        case "Monster Exhausted": iteratedObject.type = "obj_monster_exhausted"; break;
                        case "Item Bandage": iteratedObject.type = "obj_item_bandage"; break;
                        case "Item Bandage Blue": iteratedObject.type = "obj_item_bandage_blue"; break;
                        case "Item Bandage Black": iteratedObject.type = "obj_item_bandage_black"; break;
                        case "Item Fireball": iteratedObject.type = "obj_item_fireball"; break;
                        case "Item Knife": iteratedObject.type = "obj_item_knife"; break;
                        case "Item Map": iteratedObject.type = "obj_item_map"; break;
                        case "Item Medkit": iteratedObject.type = "obj_item_medkit"; break;
                        case "Item Medkit Blue": iteratedObject.type = "obj_item_medkit_blue"; break;
                        case "Item Medkit Black": iteratedObject.type = "obj_item_medkit_black"; break;
                        case "Item Megahealth": iteratedObject.type = "obj_item_megahealth"; break;
                        case "Item Needles": iteratedObject.type = "obj_item_needles"; break;
                        case "Item Nuke": iteratedObject.type = "obj_item_nuke"; break;
                        case "Item Plant": iteratedObject.type = "obj_item_plant"; break;
                        case "Item Plasma": iteratedObject.type = "obj_item_plasma"; break;
                        case "Item Protection": iteratedObject.type = "obj_item_protection"; break;
                        case "Item Quad": iteratedObject.type = "obj_item_quad"; break;
                        case "Item Shaft": iteratedObject.type = "obj_item_shaft"; break;
                        case "Item Sorcery": iteratedObject.type = "obj_item_sorcery"; break;
                        case "Item Teleport": iteratedObject.type = "obj_item_teleport"; break;
                        case "Item Vision": iteratedObject.type = "obj_item_vision"; break;
                        case "Item Wrench": iteratedObject.type = "obj_item_wrench"; break;
                        case "Entity Activator": iteratedObject.type = "ent_activator"; break;
                        case "Entity Breakable": iteratedObject.type = "ent_breakable"; break;
                        case "Entity Button": iteratedObject.type = "ent_button"; break;
                        case "Entity Calculator": iteratedObject.type = "ent_calculator"; break;
                        case "Entity Cinematic": iteratedObject.type = "ent_cinematic"; break;
                        case "Entity Comparator": iteratedObject.type = "ent_comparator"; break;
                        case "Entity Console": iteratedObject.type = "ent_console"; break;
                        case "Entity Constant": iteratedObject.type = "ent_constant"; break;
                        case "Entity Counter": iteratedObject.type = "ent_counter"; break;
                        case "Entity Decor": iteratedObject.type = "ent_decor"; break;
                        case "Entity Destroyer": iteratedObject.type = "ent_destroyer"; break;
                        case "Entity Dialogue": iteratedObject.type = "ent_dialogue"; break;
                        case "Entity Dice": iteratedObject.type = "ent_dice"; break;
                        case "Entity Display": iteratedObject.type = "ent_display"; break;
                        case "Entity Door": iteratedObject.type = "ent_door"; break;
                        case "Entity Fade": iteratedObject.type = "ent_fade"; break;
                        case "Entity Fog": iteratedObject.type = "ent_fog"; break;
                        case "Entity Grabber": iteratedObject.type = "ent_grabber"; break;
                        case "Entity Hurt": iteratedObject.type = "ent_hurt"; break;
                        case "Entity Interact": iteratedObject.type = "ent_interact"; break;
                        case "Entity Light": iteratedObject.type = "ent_light"; break;
                        case "Entity Log": iteratedObject.type = "ent_log"; break;
                        case "Entity Movement": iteratedObject.type = "ent_movement"; break;
                        case "Entity Multidestroyer": iteratedObject.type = "ent_multidestroyer"; break;
                        case "Entity Multimanager": iteratedObject.type = "ent_multimanager"; break;
                        case "Entity Multiprogrammer": iteratedObject.type = "ent_multiprogrammer"; break;
                        case "Entity Node": iteratedObject.type = "ent_node"; break;
                        case "Entity Prefaber": iteratedObject.type = "ent_prefaber"; break;
                        case "Entity Portal": iteratedObject.type = "ent_portal"; break;
                        case "Entity Programmer": iteratedObject.type = "ent_programmer"; break;
                        case "Entity Randomizer": iteratedObject.type = "ent_randomizer"; break;
                        case "Entity Reader": iteratedObject.type = "ent_reader"; break;
                        case "Entity Rotating": iteratedObject.type = "ent_rotating"; break;
                        case "Entity Save": iteratedObject.type = "ent_save"; break;
                        case "Entity Secret": iteratedObject.type = "ent_secret"; break;
                        case "Entity Sequencer": iteratedObject.type = "ent_sequencer"; break;
                        case "Entity Sound": iteratedObject.type = "ent_sound"; break;
                        case "Entity Sound 3D": iteratedObject.type = "ent_sound_3d"; break;
                        case "Entity Spawner": iteratedObject.type = "ent_spawner"; break;
                        case "Entity Switch": iteratedObject.type = "ent_switch"; break;
                        case "Entity Trigger": iteratedObject.type = "ent_trigger"; break;
                        case "Entity Waypoint": iteratedObject.type = "ent_waypoint"; break;
                        case "Entity Writer": iteratedObject.type = "ent_writer"; break;
                        case "Entity Window": iteratedObject.type = "ent_window"; break;
                        case "Entity Active Area": iteratedObject.type = "ent_forceload_area"; break;
                        case "Entity Active Type": iteratedObject.type = "ent_forceload_type"; break;
                        case "Material Bog": iteratedObject.type = "obj_material_bog"; break;
                        case "Material Concrete": iteratedObject.type = "obj_material_concrete"; break;
                        case "Material Grass": iteratedObject.type = "obj_material_grass"; break;
                        case "Material Lattice": iteratedObject.type = "obj_material_lattice"; break;
                        case "Material Metal": iteratedObject.type = "obj_material_metal"; break;
                        case "Material Snow": iteratedObject.type = "obj_material_snow"; break;
                        case "Material Wood": iteratedObject.type = "obj_material_wood"; break;
                        case "Material Carpet": iteratedObject.type = "obj_material_carpet"; break;
                        case "Material Rubber": iteratedObject.type = "obj_material_rubber"; break;
                        case "Level End": iteratedObject.type = "obj_arcadeVoid"; break;
                        case "Player": iteratedObject.type = "obj_Player"; break;
                        case "Save Point": iteratedObject.type = "obj_sigil"; break;
                        case "Trigger Autosave": iteratedObject.type = "obj_trigger_autosave"; break;
                        case "World Wall": iteratedObject.type = "obj_wall"; break;
                        case "World Wall Pit": iteratedObject.type = "obj_voidwall"; break;
                        case "World Wall Transparent": iteratedObject.type = "obj_halfwall"; break;
                        case "World Play Zone": iteratedObject.type = "obj_checkbox"; break;
                        case "Light Huge": iteratedObject.type = "obj_light_huge"; break;
                        case "Light Big": iteratedObject.type = "obj_light_big"; break;
                        case "Light Small": iteratedObject.type = "obj_light_small"; break;
                        case "Light Tiny": iteratedObject.type = "obj_light_tiny"; break;
                        case "Trigger Secret": iteratedObject.type = "obj_trigger_secret"; break;
                        case "Map Pointer Zone": iteratedObject.type = "obj_map_pointer_zone"; break;
                    }
                });
            }
        }
    });
});

prettyToDev.text = sharedNamePtoD;
prettyToDev.icon = "conv.png"

tiled.extendMenu("Map", [
    { action: "prettyToDev", before: "MapProperties" },
    { separator: true }
]);