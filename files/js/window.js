// Random Number Generation
function randInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

createfileblock = false

// Open a loaded program (Only used in Taskbar, use openbyname() to start programs in the console)
function openup(pressed) {
    id = pressed.id
    document.getElementById("program-" + id).style = "display: block; top: 16px; left: 16px;"
}

// Close a opened program
function closedown(program) {
    document.getElementById("program-" + program).style = "display: none;"
}

// Open a loaded program by name
function openbyname(program) {
    document.getElementById("program-" + program).style = "display: block; top: 16px; left: 16px;"
}

// Instantly create a file with filename and content (Use in console)
function instantFile(name, content) {
    var file = document.getElementById("desktopfiletemplate").cloneNode(true)
    file.id = "USERFILE--" + name
    file.children[1].innerHTML = name
    file.style.display = "block"
    file.setAttribute("type", "file")
    file.setAttribute("filename", name)
    file.setAttribute("content", content)
    document.getElementById("filesarea").appendChild(file)
    file.setAttribute("ondblclick", "customeditor(this)")

    width = randInt(window.innerWidth - 30);
    if (width < 0) {
        width = 20
    }
    file.style.left = width + "px";
    height = randInt(window.innerHeight - 160);
    if (height < 0) {
        height = 60
    }
    if (height > 600) {
        height = 500
    }
    file.style.top = height + "px";
    dragElement(document.getElementById("USERFILE--" + name), "")
    return document.getElementById("USERFILE--" + name)
}

// Overwrite a file's content.
function overwriteFile(name, content) {
    file = document.getElementById("USERFILE--" + name)
    file.setAttribute("content", content)
}

function createfile() {
    console.log(pageX)
    console.log(pageY)

    if (createfileblock != true) {
        createfileblock = true
        var file = document.getElementById("createfiletemplate").cloneNode(true)
        file.childNodes[2].remove()
        document.getElementById("filesarea").appendChild(file)
        file.style.left = pageX
        file.style.top = pageY
        file.style.display = "block"
    } else {
        alert("You can't create 2 files at the same time!")
    }

}

// Bad, do not use thanks
function movefile(filename, x, y) {
    file = document.getElementById("USERFILE--" + filename)
    file.style.left = x
    file.style.top = y
}

function presss(element) {
    if (event.key == "Enter") {
        console.log("Enter")

        file = element.parentNode
        fname = element.value
        if (fname == "") {
            return alert("Please specify a file name!")
        }
        element.remove()
        filename = document.createElement("p")
        file.setAttribute("type", "file")
        file.setAttribute("filename", fname)
        file.setAttribute("content", "")
        filename.innerHTML = fname
        file.appendChild(filename)
        file.id = "USERFILE--" + fname
        file.setAttribute("ondblclick", "customeditor(this)")
        dragElement(document.getElementById("USERFILE--" + fname), "")
        createfileblock = false
    }
}


function addloader() {
    var js = document.createElement("script")
    js.src = "files/js/loader.js"
    document.head.appendChild(js)
}

addloader()
