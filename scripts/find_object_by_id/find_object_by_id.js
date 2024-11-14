/// <reference types="@mapeditor/tiled-api" />

/*
 * find_object_by_id.js 
 *
 * This extension adds a 'Find Object by ID' action to the Map
 * menu, which can be used to quickly jump to and select an object when you
 * know its ID.
 * 
 * This extension is a part of Tiled scripting examples.
 * You can find more of them on https://github.com/mapeditor/tiled-extensions.git
 */

function findObjectById(thing, id) {
	for (let i = thing.layerCount - 1; i >= 0; i--) {
		const layer = thing.layerAt(i);

		if (layer.isGroupLayer) {
			const obj = findObjectById(layer, id);
			if (obj) {
				return obj;
			}
		} else if (layer.isObjectLayer) {
			for (const obj of layer.objects) {
				if (obj.id == id) {
					return obj;
				}
			}
		}
	}

	return null;
}

const jumpToObject = tiled.registerAction("Find Object by ID", function (/* action */) {
	const map = tiled.activeAsset;
	if (!map.isTileMap) {
		tiled.alert("Not a tile map!");
		return;
	}

	let id = tiled.prompt("Please enter an object ID:");
	if (id == "") {
		return;
	}

	id = Number(id);

	const object = findObjectById(map, id);
	if (!object) {
		tiled.alert("Failed to find object with ID " + id);
		return;
	}

	const pos = map.pixelToScreen ? map.pixelToScreen(object.pos) : object.pos;
	tiled.mapEditor.currentMapView.centerOn(pos.x, pos.y);

	map.selectedObjects = [object];
});

jumpToObject.text = "Find Object by ID";
// jumpToObject.shortcut = "Ctrl+Shift+F";
jumpToObject.icon = "ext:find.png";

tiled.extendMenu("Map", [
	{ separator: true },
	{ action: "Find Object by ID", before: "MapProperties" },
	{ separator: true }
]);
