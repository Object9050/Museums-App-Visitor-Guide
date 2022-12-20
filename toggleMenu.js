// Function to toggle the visibility of the menu list on click
var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "145px"
    }
    else {
        menuList.style.maxHeight = "0px"
    }
}

