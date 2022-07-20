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
        <div class="bkgr-2 clean-box">
            <p>This is my text-based recreation of the MMORPG RuneScape in the programming language C. My README.md file on GitHub, linked to below, details the technicals of the program.</p>
            <p>Requirements for game progression are kept track of on a per-character basis in a local database. Upon account creation, a unique ID is associated with the username and password, and the ID is also linked to all character data which is created and stored simultaneously. From that point on, certain actions in the game will require a check of stored data to perform, and certain actions will need to update stored data. This is all done programatically thorugh implemented SQLite 3.</p>
            <p>The game is meant to be as accurate of a recreation of the original game, in text format, as possible. Minor details were not left out. For example, the three different possible texts displayed to a user when searching a bookshelf in the spawn room, which most people in the original game never even take the time to explore, are all included in my remake. The idea is that players similar to myself who played the original game exensively as a child will get hit with the same nostalgia that I did while exploring the game to make this project.</p>
            <p>Below is a video demo of the game and a link to my GitHub post of RuneScape in C. Please feel free to download the source code and explore the game yourself.</p>
            <div class="video-player-container">
                <iframe class="video-player" src="https://youtube.com/embed/h1mt6AdUYqM"></iframe>
            </div>
            <p><a href="https://github.com/DevWantsBTC/RuneScape-in-C" target="_blank">
                    <img src="pics/github logo.png" alt="GitHub Logo" width="40" height="40">
                </a>
            </p>
        </div>`

    let phone = `
    <div class="bkgr-2 clean-box">
        <p>This is my text-based recreation of the MMORPG RuneScape in the programming language C. My README.md file on GitHub, linked to below, details the technicals of the program.</p>
        <p>Requirements for game progression are kept track of on a per-character basis in a local database. Upon account creation, a unique ID is associated with the username and password, and the ID is also linked to all character data which is created and stored simultaneously. From that point on, certain actions in the game will require a check of stored data to perform, and certain actions will need to update stored data. This is all done programatically thorugh implemented SQLite 3.</p>
        <p>The game is meant to be as accurate of a recreation of the original game, in text format, as possible. Minor details were not left out. For example, the three different possible texts displayed to a user when searching a bookshelf in the spawn room, which most people in the original game never even take the time to explore, are all included in my remake. The idea is that players similar to myself who played the original game exensively as a child will get hit with the same nostalgia that I did while exploring the game to make this project.</p>
        <p>Below is a YouTube link to a demo of the game and a link to my GitHub post of RuneScape in C. Please feel free to download the source code and explore the game yourself.</p>
        <p>
            <a href="https://github.com/DevWantsBTC/RuneScape-in-C" style="text-decoration: none;" target="_blank">
                <img src="pics/github logo.png" alt="GitHub Logo" width="40" height="40">
            </a>
            <a href="https://www.youtube.com/watch?v=h1mt6AdUYqM" target="_blank">
                <img src="pics/youtube logo.png" alt="YouTube Logo" width="40" height="40">
            </a>
        </p>
    </div>`

    projToggle(id, comp, phone)
}
