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

let dots = "";
let processOfDelirium = null;


function magik(parameters) {
    let map = tiled.activeAsset;

    dots += ".";
    if (dots === "....") dots = ".";

    let selectedMapPathName = map.fileName;

    tiled.log("Starting D'LIRIUM with map \"" + selectedMapPathName + "\"");
    tiled.log("Please wait " + dots);

    let exePath = tiled.applicationDirPath + "\\..\\..\\Delirium.exe";
    let workDir = tiled.applicationDirPath + "\\..\\..";

    parameters.push("-map");
    parameters.push(selectedMapPathName);

    if (File.exists("ext:dev.dev")) {

        let configR = new TextFile("ext:dev.dev", TextFile.ReadOnly);
        let exePathDev = configR.readLine();
        let workDirDev = configR.readLine();
        configR.close();

        let latestPathDev;
        let arrOfDataPaths = File.directoryEntries(workDirDev, 1/*only directories*/, 1/*sort by time*/);
        if (arrOfDataPaths[0] === "." || arrOfDataPaths[0] === "..") {
            if (arrOfDataPaths[1] === "." || arrOfDataPaths[1] === "..") {
                latestPathDev = arrOfDataPaths[2];
            } else {
                latestPathDev = arrOfDataPaths[1];
            }
        } else {
            latestPathDev = arrOfDataPaths[0];
        }

        if (latestPathDev === undefined) {
            tiled.log("Error while starting devbuild !");
        } else {
            exePath = exePathDev;
            workDir = workDirDev + "\\" + latestPathDev;
            tiled.log("Found latest devbuild in " + latestPathDev);
            dataPath = workDir + "\\" + "Delirium.win";

            parameters.push("-game");
            parameters.push(dataPath);
        }

    }

    if (processOfDelirium !== null) {
        processOfDelirium.kill();
        processOfDelirium.close();
    }
    processOfDelirium = new Process;
    processOfDelirium.workingDirectory = workDir;

    if (File.exists(processOfDelirium.workingDirectory + "\\Delirium.exe")) {
        processOfDelirium.start(exePath, parameters);
    } else {
        tiled.warn("Can't find " + processOfDelirium.workingDirectory + "\\Delirium.exe")
    }

}


const startDelirium = tiled.registerAction("Start D'LIRIUM with this map", function () {

    magik([]);

});

startDelirium.text = "Start D'LIRIUM with this map";
startDelirium.icon = "start.png";
startDelirium.shortcut = "F5";
tiled.extendMenu("Map", [
    { separator: true },
    { action: "Start D'LIRIUM with this map", before: "ResizeMap" }
]);


const startDeliriumDeveloper = tiled.registerAction("Start D'LIRIUM with this map (developer)", function () {
    magik(["-developer"]);
});

startDeliriumDeveloper.text = "Start D'LIRIUM with this map (developer)";
startDeliriumDeveloper.icon = "start_d.png";
startDeliriumDeveloper.shortcut = "Ctrl+F5";
tiled.extendMenu("Map", [
    { action: "Start D'LIRIUM with this map (developer)", before: "ResizeMap" }
]);


const startDeliriumVerbose = tiled.registerAction("Start D'LIRIUM with this map (verbose)", function () {
    magik(["-verbose"]);
});

startDeliriumVerbose.text = "Start D'LIRIUM with this map (verbose)";
startDeliriumVerbose.icon = "start_v.png";
startDeliriumVerbose.shortcut = "Shift+F5";
tiled.extendMenu("Map", [
    { action: "Start D'LIRIUM with this map (verbose)", before: "ResizeMap" }
]);


const startDeliriumDeveloperVerbose = tiled.registerAction("Start D'LIRIUM with this map (developer and verbose)", function () {
    magik(["-developer", "-verbose"]);
});

startDeliriumDeveloperVerbose.text = "Start D'LIRIUM with this map (developer and verbose)";
startDeliriumDeveloperVerbose.icon = "start_dv.png";
startDeliriumDeveloperVerbose.shortcut = "Ctrl+Shift+F5";
tiled.extendMenu("Map", [
    { action: "Start D'LIRIUM with this map (developer and verbose)", before: "ResizeMap" },
    { separator: true }
]);