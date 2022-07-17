function css() {
    document.getElementById("picwheel-header").innerHTML = "HTML";
    document.getElementById("header-png").setAttribute("src", "pics/header-css.png");
    document.getElementById("picwheel-header").setAttribute("onclick", "html()");
}

function html() {
    document.getElementById("picwheel-header").innerHTML = "CSS";
    document.getElementById("header-png").setAttribute("src", "pics/header-html.png");
    document.getElementById("picwheel-header").setAttribute("onclick", "css()");   
}
