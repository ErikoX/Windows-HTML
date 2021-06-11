
console.log("----------------------")
console.log("     WINDOWS HTML     ")
console.log("----------------------")
console.log("Loading Programs......")

apps = ["editor"]

/* --- This is loading all the programs ---
-> Actual loading
All html files from files/apps will go into
#programs in the desktop.html */


for (var i = 0; i < apps.length; i++) {

    var xhr= new XMLHttpRequest();
    // Loading the files

    app = apps[i]

    html = "files/apps/" + apps[i] + ".html"
    xhr.open('GET', html, true);
    xhr.onreadystatechange= function() {

        if (this.readyState!==4) return;
        if (this.status!==200) return;

        // Now adding it to the #programs
        resp = this.responseText;

        console.log("Loading " + app + "...")
        
        document.getElementById('programs').innerHTML += resp;

        // Loading the js, css and hide the program
        var loadjs = document.createElement("script")
        loadjs.src = "files/apps/js/" + app + ".js"
        document.head.appendChild(loadjs)

        var loadcss = document.createElement("link")
        loadcss.href = "files/apps/css/" + app + ".css"
        document.head.appendChild(loadcss)

        id = "program-" + app
        stylechange = document.getElementById(id)
        stylechange.style = "display: none;"

        console.log("Loaded!")


    };
    xhr.send();
}