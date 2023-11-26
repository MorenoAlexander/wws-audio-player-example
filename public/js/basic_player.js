const possiblefiles = ["rave_digger.mp3", "running_out.mp3", "80s_vibe.mp3"]

const playlist = ["80s_vibe.mp3"]


const audioPlayer = document.querySelector("#audioPlayer");

async function dequeueAndPlayNext() {
  if (playlist.length > 0) {
    const filename = playlist.shift()
    audioPlayer.src = `/public/audio/${filename}`;
    await audioPlayer.play();
  }
}

audioPlayer.addEventListener('ended', function () {
  console.log("Song ended");
  dequeueAndPlayNext();
})



setInterval(() => {
  playlist.push(possiblefiles[Math.floor(Math.random() % (2))])
}, 4000);

(function () {

  dequeueAndPlayNext().then(() => console.log("Started playback queue"))
})()
