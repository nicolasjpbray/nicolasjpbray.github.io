var songs = [
        {
            "bandName" : "Fleetwood Mac", 
            "songImage" : "fleetwood_greatest_hits.jpg", 
            "albumTitle" : "Greatest Hits",
            "songName" : "Albatross"
        }, 
        {
            "bandName" : "Simon & Garfunkel", 
            "songImage" : "simon_garfunkel_bridge.jpg", 
            "albumTitle" : "Bridge Over Troubled Water",
            "songName" : "Bridge over Troubled Water"
        }, 
        {
            "bandName" : "The Beatles", 
            "songImage" : "beatles_abbey.jpg", 
            "albumTitle" : "Abbey Road",
            "songName" : "Carry That Weight"
        }, 
        {
            "bandName" : "The Beatles", 
            "songImage" : "beatles_let_it_be.jpg", 
            "albumTitle" : "Let It Be",
            "songName" : "Dig A Pony"
        }, 
        {
            "bandName" : "King Crimson", 
            "songImage" : "king_crimson.jpg", 
            "albumTitle" : "In the Court of the Crimson King",
            "songName" : "Epitaph"
        }, 
        {
            "bandName" : "Harry Nilsson", 
            "songImage" : "nilsson.jpg", 
            "albumTitle" : "Everybody's Talkin': The Very Best of Harry Nilsson",
            "songName" : "Everybody's Talkin'"
        }, 
        {
            "bandName" : "Fleetwood Mac", 
            "songImage" : "fleetwood_greatest_hits.jpg", 
            "albumTitle" : "Greatest Hits",
            "songName" : "Go Your Own Way"
        }, 
        {
            "bandName" : "The Beatles", 
            "songImage" : "beatles_white_album.jpg", 
            "albumTitle" : "The Beatles (White Album)",
            "songName" : "Helter Skelter"
        }, 
        {
            "bandName" : "Deep Purple", 
            "songImage" : "deep_purple_japan.jpg", 
            "albumTitle" : "Made in Japan",
            "songName" : "Highway Star"
        }, 
        {
            "bandName" : "The Beatles", 
            "songImage" : "beatles_abbey.jpg", 
            "albumTitle" : "Abbey Road",
            "songName" : "I Want You (She's So Heavy)"
        }, 
        {
            "bandName" : "The Beatles", 
            "songImage" : "beatles_white_album.jpg", 
            "albumTitle" : "The Beatles (White Album)",
            "songName" : "I'm So Tired"
        }, 
        {
            "bandName" : "Janis Joplin", 
            "songImage" : "joplin_greatest_hits.jpg", 
            "albumTitle" : "Janis Joplin's Greatest Hits",
            "songName" : "Me & Bobby McGee"
        }, 
        {
            "bandName" : "Janis Joplin", 
            "songImage" : "joplin_greatest_hits.jpg", 
            "albumTitle" : "Janis Joplin's Greatest Hits",
            "songName" : "Piece Of My Heart"
        }, 
        {
            "bandName" : "Fleetwood Mac", 
            "songImage" : "fleetwood_greatest_hits.jpg", 
            "albumTitle" : "Greatest Hits",
            "songName" : "Rhiannon"
        }, 
        {
            "bandName" : "The Beatles", 
            "songImage" : "beatles_white_album.jpg", 
            "albumTitle" : "The Beatles (White Album)",
            "songName" : "Rocky Racoon"
        }, 
        {
            "bandName" : "The Beatles", 
            "songImage" : "beatles_abbey.jpg", 
            "albumTitle" : "Abbey Road",
            "songName" : "She Came In Through The Bathroom"
        }, 
        {
            "bandName" : "Deep Purple", 
            "songImage" : "deep_purple_japan.jpg", 
            "albumTitle" : "Made in Japan",
            "songName" : "Smoke on the Water"
        }, 
        {
            "bandName" : "Janis Joplin", 
            "songImage" : "joplin_greatest_hits.jpg",
            "albumTitle" : "Janis Joplin's Greatest Hits",
            "songName" : "Summertime"
        }, 
        {
            "bandName" : "Simon & Garfunkel", 
            "songImage" : "simon_garfunkel_bridge.jpg", 
            "albumTitle" : "Bridge Over Troubled Water",
            "songName" : "The Boxer"
        }, 
        {
            "bandName" : "Genesis", 
            "songImage" : "genesis_lamb.jpg", 
            "albumTitle" : "The Lamb Lies Down on Broadway",
            "songName" : "The Carpet Crawlers"
        }, 
        {
            "bandName" : "Genesis", 
            "songImage" : "genesis_lamb.jpg", 
            "albumTitle" : "The Lamb Lies Down on Broadway",
            "songName" : "The Lamb Lies Down on Broadway"
        }, 
        {
            "bandName" : "Pink FLoyd", 
            "songImage" : "pink_floyd_dark_side.jpg", 
            "albumTitle" : "Dark Side of the Moon",
            "songName" : "Time"
        }, 
        {
            "bandName" : "Fleetwood Mac", 
            "songImage" : "fleetwood_greatest_hits.jpg", 
            "albumTitle" : "Greatest Hits",
            "songName" : "Tusk"
        }, 
        {
            "bandName" : "The Beatles", 
            "songImage" : "beatles_white_album.jpg", 
            "albumTitle" : "The Beatles (White Album)",
            "songName" : "While My Guitar Gently Weeps"
        }, 
        {
            "bandName" : "Joe Cocker", 
            "songImage" : "cocker_happy.jpg", 
            "albumTitle" : "Cocker Happy",
            "songName" : "With a Little Help from My Friends"
        }
    ];

    var playingSong = songs[0];
    var counter = 0;
    let juke = document.querySelector('#juke');
    let playButton = document.querySelector('#toggleButton');
    let albumCover = document.querySelector('#song--image');
    let songName = document.querySelector('h2');
    let bandName = document.querySelector('h3');
    let theToggle = 0;

    function togglePlay () {
        let audioPlayer = document.querySelector('#player');
        if(theToggle==0) {
            theToggle++;
            songName.innerHTML = "\"" + playingSong.songName + "\"";
            bandName.innerHTML = playingSong.bandName;
            albumCover.innerHTML = "<img src=\"images/" + playingSong.songImage + "\">";
            juke.innerHTML = "<audio controls autoplay src=\"music/" + playingSong.songName + ".m4a\" id=\"player\" type='audio/m4a'></audio>";
            playButton.innerHTML = "||";
        } else {
            if(theToggle%2==0) {
                theToggle++;
                audioPlayer.play();
                playButton.innerHTML = "||";
            } else {
                theToggle++;
                audioPlayer.pause();
                playButton.innerHTML = "|>";
            }  
        }   
    }

    function nextSong() {
        if(theToggle%2==0) { theToggle++; }
        if(counter<24) { counter++; } else { counter = 0; }
        playingSong = songs[counter];
        songName.innerHTML = "\"" + playingSong.songName + "\"";
        bandName.innerHTML = playingSong.bandName;
        albumCover.innerHTML = "<img src=\"images/" + playingSong.songImage + "\">";
        juke.innerHTML = "<audio controls autoplay src=\"music/" + playingSong.songName + ".m4a\" id=\"player\" type='audio/m4a'></audio>";
        playButton.innerHTML = "||";
    }

    function prevSong() {
        if(theToggle%2==0) { theToggle++; }
        if(counter > 0) { counter--; } else { counter = 24; }
        playingSong = songs[counter];
        songName.innerHTML = "\"" + playingSong.songName + "\"";
        bandName.innerHTML = playingSong.bandName;
        albumCover.innerHTML = "<img src=\"images/" + playingSong.songImage + "\">";
        juke.innerHTML = "<audio controls autoplay src=\"music/" + playingSong.songName + ".m4a\" id=\"player\" type='audio/m4a'></audio>";
        playButton.innerHTML = "||";
    }