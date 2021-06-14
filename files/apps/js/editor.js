function editorsave() {
    if(document.getElementById("dropdown-editor").style.display == "none") {
        document.getElementById("dropdown-editor").style.display = "block"
    } else {
        document.getElementById("dropdown-editor").style.display = "none"
    }
}

function editorfilesave() {
    var source = document.getElementById("textarea-editor").value
    var filename = document.getElementById("editor-filename").value
    if(filename == "") {
        alert("(X) Please set a file name!")
        return
    }
    if (document.getElementById("USERFILE--" + filename)) {
        overwriteFile(filename, source)
    } else {
        instantFile(filename, source)
    }
    
    editorsave()
}

function customeditor(file) {
    var content = file.getAttribute("content")
    var name = file.getAttribute("filename")
    if (document.getElementById("program-editor").style.display == "none") {
        openbyname("editor")
    }
    document.getElementById("textarea-editor").value = content
    document.getElementById("editor-filename").value = name
}