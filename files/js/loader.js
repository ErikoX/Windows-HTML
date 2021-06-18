
console.log("----------------------")
console.log("     WINDOWS HTML     ")
console.log("----------------------")
console.log("Loading Programs......")

apps = ["editor", "settings"]

/* --- This is loading all the programs ---
-> Actual loading
All html files from files/apps will go into
#programs in the desktop.html */

loaded = 0

for (var i = 0; i < apps.length; i++) {
    var xhr= new XMLHttpRequest();
    // Loading the files
    var app = apps[i]

    var html = "files/apps/" + app + ".html"

    xhr.open('GET', html, false);
    xhr.onreadystatechange= function() {
    
        if (this.readyState!==4) return;
        if (this.status!==200) return;
        // Now adding it to the #programs
        var resp = this.responseText;

        console.log("Loading " + app + "...")
        
        document.getElementById('programs').innerHTML += resp;

        // Loading the js, css and hide the program
        
        loadmore(app)


    };
    setTimeout(function(){
        
    }, 2000);
    xhr.send();
    

    
    
}

function loadmore(app) {
    var loadjs = document.createElement("script")
    loadjs.src = "files/apps/js/" + app + ".js"
    document.head.appendChild(loadjs)

    var loadcss = document.createElement("link")
    loadcss.href = "files/apps/css/" + app + ".css"
    loadcss.rel = "stylesheet"
    document.head.appendChild(loadcss)

    var id = "program-" + app
    var stylechange = document.getElementById(id)
    stylechange.style = "display: none;"

    console.log(document.getElementById(id))

    setTimeout(function() {
        dragElement(document.getElementById(id), "-header");
    }, 3000)
    

    loaded += 1
    console.log("Loaded!")
}


