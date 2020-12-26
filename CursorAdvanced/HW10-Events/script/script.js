const keys = document.querySelectorAll(".key");
const audio = new Audio();
const tracks = ['audio/do.mp3', "audio/re.mp3", "audio/mi.mp3", "audio/fa.mp3", "audio/sol.mp3",  "audio/lja.mp3", "audio/si.mp3"];
audio.autoplay = false;
document.addEventListener('keydown', playMusicKey);



function playMusicKey(e) {
  switch (e.code){
    case 'KeyA':
      keys.forEach(key => key.classList.remove("key-active"));
      keys[0].classList.add("key-active");
      audio.src = tracks[0];
      audio.play();
      break;
    case 'KeyS':
      keys.forEach(key => key.classList.remove("key-active"));
      keys[1].classList.add("key-active");
      audio.src = tracks[1];
      audio.play();
      break;
    case 'KeyD':
      keys.forEach(key => key.classList.remove("key-active"));
      keys[2].classList.add("key-active");
      audio.src = tracks[2];
      audio.play();
      break;
    case 'KeyF':
      keys.forEach(key => key.classList.remove("key-active"));
      keys[3].classList.add("key-active");
      audio.src = tracks[3];
      audio.play();
      break;
    case 'KeyG':
      keys.forEach(key => key.classList.remove("key-active"));
      keys[4].classList.add("key-active");
      audio.src = tracks[4];
      audio.play();
      break;
    case 'KeyH':
      keys.forEach(key => key.classList.remove("key-active"));
      keys[5].classList.add("key-active");
      audio.src = tracks[5];
      audio.play();
      break;
    case 'KeyJ':
      keys.forEach(key => key.classList.remove("key-active"));
      keys[6].classList.add("key-active");
      audio.src = tracks[6];
      audio.play();
      break;
   } 
  }

function playMusicClick() {
  keys.forEach(function(dot, i) {
    dot.addEventListener("click", function() {
      switch (i) {
        case 0:
          keys.forEach(key => key.classList.remove("key-active"));
          keys[0].classList.add("key-active");
          audio.src = tracks[0];
          audio.play();
          console.log(0);
          break;
        case 1:
            keys.forEach(key => key.classList.remove("key-active"));
            keys[1].classList.add("key-active");
            audio.src = tracks[1];
            audio.play();
            break;
        case 2:
            keys.forEach(key => key.classList.remove("key-active"));
            keys[2].classList.add("key-active");
            audio.src = tracks[2];
            audio.play();
            break;
        case 3:
            keys.forEach(key => key.classList.remove("key-active"));
            keys[3].classList.add("key-active");
            audio.src = tracks[3];
            audio.play();
            break;
        case 4:
            keys.forEach(key => key.classList.remove("key-active"));
            keys[4].classList.add("key-active");
            audio.src = tracks[4];
            audio.play();
            break;
        case 5:
            keys.forEach(key => key.classList.remove("key-active"));
            keys[5].classList.add("key-active");
            audio.src = tracks[5];
            audio.play();
            break;
        case 6:
            keys.forEach(key => key.classList.remove("key-active"));
            keys[6].classList.add("key-active");
            audio.src = tracks[6];
            audio.play();
            break;
      } 
    });
  });
  }
  playMusicClick();


