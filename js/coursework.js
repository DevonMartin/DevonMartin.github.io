var nextDate = new Date();
if (nextDate.getMinutes() % 6 === 0) {
    getCourses()
} else {
    nextDate.setHours(nextDate.getHours() + 1);
    nextDate.setMinutes(0);
    nextDate.setSeconds(0);

    var difference = nextDate - new Date();
    setTimeout(getCourses, difference);
}

async function getCourses() {

    const res = await fetch('https://api.github.com/repos/DevonMartin/CS50x/contents/fin')
    const answer = await res.json()
    var x = answer.length
    var tdhtml = ``

    for (i = 1; i < x; i+=1) {
        tdhtml += `<p class="course-grid">` + (answer[i]['name']) + `</p>`
    }
    document.getElementById("CS50x").innerHTML = tdhtml
}

// NOTE: RUN WITH HTTP://, NOT FILE://
window.addEventListener("load", () => {
    fetch("1b-database.php", { method : "POST" })
    .then(res => res.text()).then((txt) => {
      document.getElementById("demo").innerHTML = txt;
    });
  });