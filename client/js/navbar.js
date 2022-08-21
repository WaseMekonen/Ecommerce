const burgerMenu =document.getElementById("burgerMenu");
const menu = document.getElementById("menu");


burgerMenu.onclick = ()=>{
    if( menu.className =="hide-menu"){
        menu.className ="";
    }
    else{
        menu.className="hide-menu";
    }
}
