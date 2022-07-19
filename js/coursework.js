var nextDate = new Date();
if (nextDate.getMinutes() % 1 === 0) {
    initMobileTable()
    getCourses()
} else {
    nextDate.setHours(nextDate.getHours() + 1);
    nextDate.setMinutes(0);
    nextDate.setSeconds(0);

    var difference = nextDate - new Date();
    setTimeout(getCourses, difference);
}

function initMobileTable() {

    // Adjust header for mobile
    var x = window.matchMedia("(max-width: 450px)")
    if (x.matches) { // If media query matches

        document.getElementById('course-table').innerHTML = `
            <div class="container-mobile">
                <div class="course-grid" id="CS50x-header">
                    CS50x - Introduction to Computer Science
                    <div id="CS50x-proj"></div>
                </div>
                <div class="course-grid" id="CS61A-header">
                    CS61A - Structure and Interpretation of Computer Programs
                    <div id="CS61A-proj"></div>
                </div>
            </div>
            <div class="container-mobile">
                <div class="course-grid" id="CS61B-header">
                    CS61B - Data Structures
                    <div id="CS61B-proj"></div>
                </div>
                <div class="course-grid" id="CS61C-header">
                    CS61C - Great Ideas in Computer Architecture
                    <div id="CS61C-proj"></div>
                </div>
            </div>`

        document.getElementById("CS50x-header").innerHTML = `CS50x<div id="CS50x-proj"></div>`
        document.getElementById("CS61A-header").innerHTML = `CS61A<div id="CS61A-proj"></div>`
        document.getElementById("CS61B-header").innerHTML = `CS61B<div id="CS61B-proj"></div>`
        document.getElementById("CS61C-header").innerHTML = `CS61C<div id="CS61C-proj"></div>`
    }
}

async function getCourses() {

    // BEGIN CS50x

    res = await fetch('https://api.github.com/repos/DevonMartin/CS50x/contents/fin')
    answer = await res.json()
    var CS50html = ``
    x = answer.length

    for (i = 1; i < x; i+=1) {
        CS50html += `<div class="course-grid" style="background-color: green;">` + (answer[i]['name']) + `</div>`
    }

    res = await fetch('https://api.github.com/repos/DevonMartin/CS50x/contents/inprog')
    answer = await res.json()
    x = answer.length

    for (i = 1; i < x; i+=1) {
        CS50html += `<div class="course-grid" style="background-color: yellow;">` + (answer[i]['name']) + `</div>`
    }

    res = await fetch('https://api.github.com/repos/DevonMartin/CS50x/contents/todo')
    answer = await res.json()
    x = answer.length

    for (i = 1; i < x; i+=1) {
        CS50html += `<div class="course-grid" style="background-color: red;">` + (answer[i]['name']) + `</div>`
    }
    document.getElementById("CS50x-proj").innerHTML = CS50html

    // END CS50x
    // BEGIN CS61A
    
    res = await fetch('https://api.github.com/repos/DevonMartin/CS61A/contents/fin')
    answer = await res.json()
    var CS61Ahtml = ``
    x = answer.length

    for (i = 1; i < x; i+=1) {
        CS61Ahtml += `<div class="course-grid" style="background-color: green;">` + (answer[i]['name']) + `</div>`
    }

    res = await fetch('https://api.github.com/repos/DevonMartin/CS61A/contents/inprog')
    answer = await res.json()
    x = answer.length

    for (i = 1; i < x; i+=1) {
        CS61Ahtml += `<div class="course-grid" style="background-color: yellow;">` + (answer[i]['name']) + `</div>`
    }

    res = await fetch('https://api.github.com/repos/DevonMartin/CS61A/contents/todo')
    answer = await res.json()
    x = answer.length

    for (i = 1; i < x; i+=1) {
        CS61Ahtml += `<div class="course-grid" style="background-color: red;">` + (answer[i]['name']) + `</div>`
    }
    document.getElementById("CS61A-proj").innerHTML = CS61Ahtml

    // END CS61A
    // START Unstarted Courses

    unstartedHtml = `<div class="course-grid" style="background-color: red;">Not Yet Started</div>`
    document.getElementById("CS61B-proj").innerHTML = unstartedHtml
    document.getElementById("CS61C-proj").innerHTML = unstartedHtml

}