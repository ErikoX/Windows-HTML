function load() {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            resp = xmlHttp.responseText;
        }
    };

    xmlHttp.open("GET", test_page, true); // true for asynchronous
    xmlHttp.send(null);
    
}

function display() {
    
}