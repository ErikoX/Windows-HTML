function settingsgeneratesave() {
    var savestate = {}
    files = document.getElementById("filesarea").children
    for (var i = 0; i < files.length; i++) {
        var file = files[i]
        var content = file.getAttribute("content")
        var filename = file.getAttribute("filename")
        var type = file.getAttribute("type")
        var left = file.style.left
        var top = file.style.top
        savestate[filename] = {}
        savestate[filename]["content"] = content
        savestate[filename]["filename"] = filename
        savestate[filename]["type"] = type
        savestate[filename]["left"] = left
        savestate[filename]["top"] = top
        
        
    }
    var savestatestr = btoa(JSON.stringify(savestate))
    document.getElementById("settingssavestate").value = savestatestr
}

function settingsloadsave() {
    var savestateobj = atob(document.getElementById("settingssavestate").value)
    savestate = JSON.parse(savestateobj)
    document.getElementById("filesarea").innerHTML = "";
    for (var key in savestate) {
        file = instantFile(savestate[key]["filename"], savestate[key]["content"])
        file.style.top = savestate[key]["top"]
        file.style.left = savestate[key]["left"]
    }

}