function projToggle(id, comp, phone) {
    let proj = document.getElementById(id)
    if (window.screen.width > 450) {
        proj.innerHTML = comp
    } else {
        proj.innerHTML = phone
    }
    if (proj.style.display === "none") {
        proj.style.display = "inline"
    } else {
        proj.style.display = "none"
    }
}

function RSToggle() {

    let id = "RS"
    let comp = `
        <p>This is my text-based recreation of the MMORPG RuneScape in the programming language C.</p>
        <p><iframe max-width="auto" max-height="auto" width="720" height="405"
        src="https://youtube.com/embed/h1mt6AdUYqM">
        </iframe></p>
        <p><a href="https://github.com/DevWantsBTC/RuneScape-in-C" target="_blank">
                <img src="pics/github logo.png" alt="GitHub Logo" width="40" height="40">
            </a>
        </p>`

    let phone = `
        <p>This is my text-based recreation of the MMORPG RuneScape in the programming language C.</p>
        <p>
            <a href="https://github.com/DevWantsBTC/RuneScape-in-C" style="text-decoration: none;" target="_blank">
                <img src="pics/github logo.png" alt="GitHub Logo" width="40" height="40">
            </a>
            <a href="https://www.youtube.com/watch?v=h1mt6AdUYqM" target="_blank">
                <img src="pics/youtube logo.png" alt="YouTube Logo" width="40" height="40">
            </a>
        </p>`

    projToggle(id, comp, phone)
}
