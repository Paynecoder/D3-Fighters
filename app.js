const radios = document.getElementsByClassName("radio");
var checked_id = 0;

function left() {

    if (checked_id > 0) {
        checked_id -= 1
        document.getElementById("radio-" + checked_id).checked = true;

    }


}

function right() {

    if (checked_id < radios.length) {
        checked_id += 1
        document.getElementById("radio-" + checked_id).checked = true;

    }


}