function sizeTable() {

    // Adjust header for mobile
    var x = window.matchMedia("(max-width: 450px)")
    if (x.matches) { // If media query matches
        document.getElementById('coursework-container').className = ("coursework-container grid-2-col")
    } else {
        document.getElementById('coursework-container').className = ("coursework-container grid-4-col")
    }
}

var CS50html = ``
var CS61Ahtml = ``
async function getCourses() {

    console.log('better not be testing!!!')

    // BEGIN CS50x

    res = await fetch('https://api.github.com/repos/DevonMartin/CS50x/contents/fin')
    answer = await res.json()
    x = answer.length

    for (i = 1; i < x; i+=1) {
        CS50html += `<a href="` + (answer[i]['html_url']) + `" target="_blank"><div class="course-grid course-bkgr-green">` + (answer[i]['name']) + `</div></a>`
    }

    res = await fetch('https://api.github.com/repos/DevonMartin/CS50x/contents/inprog')
    answer = await res.json()
    x = answer.length

    for (i = 1; i < x; i+=1) {
        CS50html += `<a href="` + (answer[i]['html_url']) + `" target="_blank"><div class="course-grid course-bkgr-yellow">` + (answer[i]['name']) + `</div></a>`
    }

    res = await fetch('https://api.github.com/repos/DevonMartin/CS50x/contents/todo')
    answer = await res.json()
    x = answer.length

    for (i = 1; i < x; i+=1) {
        CS50html += `<a href="` + (answer[i]['html_url']) + `" target="_blank"><div class="course-grid course-bkgr-red">` + (answer[i]['name']) + `</div>`
    }

    // END CS50x
    // BEGIN CS61A
    
    res = await fetch('https://api.github.com/repos/DevonMartin/CS61A/contents/fin')
    answer = await res.json()
    x = answer.length

    for (i = 1; i < x; i+=1) {
        CS61Ahtml += `<a href="` + (answer[i]['html_url']) + `" target="_blank"><div class="course-grid course-bkgr-green">` + (answer[i]['name']) + `</div></a>`
    }

    res = await fetch('https://api.github.com/repos/DevonMartin/CS61A/contents/inprog')
    answer = await res.json()
    x = answer.length

    for (i = 1; i < x; i+=1) {
        CS61Ahtml += `<a href="` + (answer[i]['html_url']) + `" target="_blank"><div class="course-grid course-bkgr-yellow">` + (answer[i]['name']) + `</div></a>`
    }

    res = await fetch('https://api.github.com/repos/DevonMartin/CS61A/contents/todo')
    answer = await res.json()
    x = answer.length

    for (i = 1; i < x; i+=1) {
        CS61Ahtml += `<a href="` + (answer[i]['html_url']) + `" target="_blank"><div class="course-grid course-bkgr-red">` + (answer[i]['name']) + `</div>`
    }

    // // END CS61A

    loadCourses()
}

let unstartedHtml = `<div class="course-grid course-bkgr-red">Not Yet Started</div>`

function loadCourses() {
    document.getElementById("CS50x-proj").innerHTML = CS50html
    document.getElementById("CS61A-proj").innerHTML = CS61Ahtml
    document.getElementById("CS61B-proj").innerHTML = unstartedHtml
    document.getElementById("CS61C-proj").innerHTML = unstartedHtml
}

function loadCoursesTesting() {
    for (i = 0; i < 25; i+=1) {
        ['CS50x-proj', 'CS61A-proj', 'CS61B-proj', 'CS61C-proj'].forEach(function(id) {
            document.getElementById(id).innerHTML += unstartedHtml
        });
    }
}

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



testing = false;

if (testing) {
    loadCoursesTesting()
} else {
    getCourses();
}

var ogBody = document.body.innerHTML
buildHeader();
sizeTable();

window.addEventListener('resize', () => {
    buildHeader();
    sizeTable();
    if (testing) {
        loadCoursesTesting();
    } else {
            loadCourses()
    }
}, true);