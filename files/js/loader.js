console.log("Loading Scripts...");

function addScript(file) {
    var script = document.getElementById("script");
    script.src = "files/js/";
    document.body.appendChild(script);
}


function getScript() {
    var url = window.location.pathname;
    var spliturl = url.split("/")
    var call = spliturl[-1].split(".")[0]
    addScript(call)
}

getScript()