var nextDate = new Date();
if (nextDate.getMinutes() % 1 === 0) {
    getCourses()
} else {
    nextDate.setHours(nextDate.getHours() + 1);
    nextDate.setMinutes(0);
    nextDate.setSeconds(0);

    var difference = nextDate - new Date();
    setTimeout(getCourses, difference);
}

async function getCourses() {

    // BEGIN CS50x

    res = await fetch('https://api.github.com/repos/DevonMartin/CS50x/contents/fin')
    answer = await res.json()
    x = answer.length
    CS50len = x
    var CS50html = ``

    for (i = 1; i < x; i+=1) {
        CS50html += `<div class="course-grid" style="background-color: green;">` + (answer[i]['name']) + `</div>`
    }

    res = await fetch('https://api.github.com/repos/DevonMartin/CS50x/contents/inprog')
    answer = await res.json()
    x = answer.length
    CS50len += x

    for (i = 1; i < x; i+=1) {
        CS50html += `<div class="course-grid" style="background-color: yellow;">` + (answer[i]['name']) + `</div>`
    }

    res = await fetch('https://api.github.com/repos/DevonMartin/CS50x/contents/todo')
    answer = await res.json()
    x = answer.length
    CS50len += x

    for (i = 1; i < x; i+=1) {
        CS50html += `<div class="course-grid" style="background-color: red;">` + (answer[i]['name']) + `</div>`
    }
    document.getElementById("CS50x").innerHTML = CS50html

    // END CS50x
    // BEGIN CS61A
    
    res = await fetch('https://api.github.com/repos/DevonMartin/CS61A/contents/fin')
    answer = await res.json()
    x = answer.length
    CS61Alen = x
    var CS61Ahtml = ``

    for (i = 1; i < x; i+=1) {
        CS61Ahtml += `<div class="course-grid" style="background-color: green;">` + (answer[i]['name']) + `</div>`
    }

    res = await fetch('https://api.github.com/repos/DevonMartin/CS61A/contents/inprog')
    answer = await res.json()
    x = answer.length
    CS61Alen += x

    for (i = 1; i < x; i+=1) {
        CS61Ahtml += `<div class="course-grid" style="background-color: yellow;">` + (answer[i]['name']) + `</div>`
    }

    res = await fetch('https://api.github.com/repos/DevonMartin/CS61A/contents/todo')
    answer = await res.json()
    x = answer.length
    CS61Alen += x

    for (i = 1; i < x; i+=1) {
        CS61Ahtml += `<div class="course-grid" style="background-color: red;">` + (answer[i]['name']) + `</div>`
    }
    // for (i = 0; i < CS50len - CS61Alen; i+=1) {
    //     CS61Ahtml += `<div class="course-grid" style="border-color:white">&zwnj;</div>`
    // }
    document.getElementById("CS61A").innerHTML = CS61Ahtml

    // END CS61A
    // START Unstarted Courses

    unstartedHtml = `<div class="course-grid" style="background-color: red;">Not Yet Started</div>`
    document.getElementById("CS61B").innerHTML = unstartedHtml
    document.getElementById("CS61C").innerHTML = unstartedHtml

}