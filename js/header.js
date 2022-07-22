var ogBody = document.body.innerHTML

function buildHeader() {
    // Adjust header for mobile
    var x = window.matchMedia("(max-width: 450px)")
    if (x.matches) { // If media query matches
        document.body.innerHTML = `
        <nav id="side-id" class="side-nav bkgr-2-no-border">
            <ul class="side-ul">
                <li class="side-li"><a class="side-a" href="about-me.html">About Me</a></li>
                <li class="side-li"><a class="side-a" href="contact-me.html">Contact Me</a></li>
            </ul>
        </nav>
        <nav class="mobile-topbar bkgr-2">
            <a class="mobile-logo" href="index.html"><img src="pics/mobile banner.png" alt="Banner for devonmartin.net" height="45" width="45"></a>
            <span class="side-span" id="side-nav-button" onclick="openNav()">
                &#9776;
            </span>
        </nav>
        ` + ogBody;
    } else {
        document.body.innerHTML = `
        <nav class="top-nav">
            <ul class="top-ul bkgr-2">
                <li class="top-logo"><a class="top-a top-logo" href="index.html"><img src="pics/banner.png" alt="Banner for devonmartin.net" height="52" width="126"></a></li>
                <li class="top-li"><a class="top-a" href="contact-me.html">Contact Me</a></li>
                <li class="top-li"><a class="top-a" href="about-me.html">About Me</a></li>
            </ul>
        </nav>
        ` + ogBody;
    }
}

function openNav() {
    document.getElementById("side-id").style.width = "100%";
    document.getElementById("side-nav-button").innerHTML = "&times;";
    document.getElementById("side-nav-button").setAttribute("onClick", "javascript: closeNav();");
}
  
function closeNav() {
    document.getElementById("side-id").style.width = "0";
    document.getElementById("side-nav-button").innerHTML = "&#9776;";
    document.getElementById("side-nav-button").setAttribute("onClick", "javascript: openNav();");
}


buildHeader()

window.addEventListener('resize', function(event) {
    buildHeader()
}, true);