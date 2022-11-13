const list = ["loadingweb", "welcome", "dashboard", "leaderboard", "scan", "search1", "search2", "notifications", "profile"];

function hideImage(id, color, special1, special2) {
    let iD = document.getElementById(id);
    //iD.src="images/" + destination + ".png";
    document.getElementById("background").style.backgroundColor = color;
    iD.setAttribute("onClick", iD.style.visibility = "hidden");
    iD.style.height = "0vh";
    if (special1) {
        document.getElementById("canvas").style.visibility = "hidden";
        document.getElementById(special1).style.visibility = "visible";
        document.getElementById(special2).style.visibility = "visible";
    }
}

function moveTop(up, down) {
  document.getElementById(up).style.zIndex = "10";
  document.getElementById(down).style.zIndex = "-1";
}

function endDemo() {
    document.getElementById("profile").style.visibility = "hidden";
    document.getElementById("welcome").style.visibility = "visible";
}

function scan(int) {
    const constraints = {
        audio: false,
        video: true
      };
      
      navigator.mediaDevices.getUserMedia(constraints)
        .then((mediaStream) => {
          const video = document.querySelector('video');
          const canvas = document.querySelector("canvas");
          video.srcObject = mediaStream;
          video.onloadedmetadata = () => {
            video.play();
          };
        })
        .catch((err) => {
          console.error(`${err.name}: ${err.message}`);
        });

    if (int === 1) {
        canvas.width = document.getElementById("searchweb").getBoundingClientRect().width;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    	let image_data_url = canvas.toDataURL('image/jpeg');
        video.style.visibility = "hidden";
        hideImage("scanweb", "#e6e6e6");
        document.getElementById("searchweb").style.visibility = "visible";
    }
}

