
(async () => {

    const res = await fetch('https://api.github.com/repos/DevonMartin/CS50x/contents/fin')
    const answer = await res.json()
    var x = answer.length
    var coursework = []

    for (i = 1; i < x; i+=1) {
        coursework.push(answer[i]['name'])
    }

    console.log(coursework)
  })()