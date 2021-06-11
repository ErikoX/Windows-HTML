
/* --- This is for displaying programs ---
This makes programs openable through the taskbar.
It works by getting the div (the taskbar icon)'s
id which is their program name. */

function openup(pressed) {
    id = pressed.id
    document.getElementById("program-" + id).style = "display: block;"
}

function closeprogram(program) {
    document.getElementById("program-" + program).style = "display: none;"
}