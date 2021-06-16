menu = document.querySelector("#ctx");
document.addEventListener("click", handler);

function handler(e) {
    e = e || window.event;

    pageX = e.pageX;
    pageY = e.pageY;

    if (pageX === undefined) {
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

}


let menuVisible = false;

const toggleMenu = command => {
    menu.style.display = command === "show" ? "block" : "none";
    menuVisible = !menuVisible;
};

const setPosition = ({ top, left }) => {
    menu = document.querySelector("#ctx");
    menu.style.left = `${left}px`;
    menu.style.top = `${top+12}px`;
    toggleMenu("show");
};

window.addEventListener("click", e => {
    if(menuVisible)toggleMenu("hide");

    //onclick="createfile()"
    li = document.getElementById("cf");
    li.innerHTML = "Create File"
    li.setAttribute("onclick", "createfile()")
});

function addli(ele) {
  
  li = document.getElementById("cf");
  li.innerHTML = "Delete File"
  elem = ele.children[0].id
  li.setAttribute("onclick", "delfile(document.getElementById(\"" + elem + "\"))")
  
  
}


window.addEventListener("contextmenu", e => {
  pageX = e.pageX;
  pageY = e.pageY;
  e.preventDefault();
  const origin = {
    left: e.pageX,
    top: e.pageY-90
  };
  setPosition(origin);
  return false;
});