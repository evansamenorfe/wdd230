
function toggleMenu(){
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("humburgerbtn").classList.toggle("open");
}

const x = document.getElementById('humburgerbtn');
x.onclick  = toggleMenu;

