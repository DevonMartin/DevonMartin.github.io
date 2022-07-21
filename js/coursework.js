function sizeTable() {

    // Adjust header for mobile
    var x = window.matchMedia("(max-width: 450px)")
    if (x.matches) { // If media query matches

        document.getElementById('coursework-container').className = ("container container-2-col")
    } else {
        document.getElementById('coursework-container').className = ("container container-4-col")
    }
}

async function getCourses() {

    // BEGIN CS50x

    res = await fetch('https://api.github.com/repos/DevonMartin/CS50x/contents/fin')
    answer = await res.json()
    var CS50html = ``
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
    document.getElementById("CS50x-proj").innerHTML = CS50html

    // END CS50x
    // BEGIN CS61A
    
    res = await fetch('https://api.github.com/repos/DevonMartin/CS61A/contents/fin')
    answer = await res.json()
    var CS61Ahtml = ``
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
    document.getElementById("CS61A-proj").innerHTML = CS61Ahtml

    // // END CS61A
    // START Unstarted Courses

    unstartedHtml = `<div class="course-grid course-bkgr-red">Not Yet Started</div>`
    document.getElementById("CS61B-proj").innerHTML = unstartedHtml
    document.getElementById("CS61C-proj").innerHTML = unstartedHtml

    // END Unstarted Courses

}

function getCoursesTesting() {
    document.getElementById("CS50x-proj").innerHTML = `<div class="course-grid course-bkgr-red">test</div>`
    document.getElementById("CS61A-proj").innerHTML = `<div class="course-grid course-bkgr-red">test</div>`
    unstartedHtml = `<div class="course-grid course-bkgr-red">Not Yet Started</div>`
    document.getElementById("CS61B-proj").innerHTML = unstartedHtml
    document.getElementById("CS61C-proj").innerHTML = unstartedHtml
}

sizeTable()

if (true) {
    getCourses()
} else {
    getCoursesTesting()
}

window.addEventListener('resize', function(event) {
    sizeTable()
}, true);