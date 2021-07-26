var inp = document.getElementById("createfileinput")
console.log(inp)
console.log("AFTERLOADING..")
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
console.log("Executed")