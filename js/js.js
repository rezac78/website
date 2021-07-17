var ourTeamText = document.getElementById('ourTeamText');

var typewriter = new Typewriter(ourTeamText, {
    loop: true
});

typewriter.typeString('اعضای تیم ها')
    .pauseFor(2500)
    .deleteAll()
    .start();