const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// prompt user to select a media stream, pass to video element then play

async function selectMediaStream(params) {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    alert(error);
  }
}

button.addEventListener("click", async () => {
  // disable button
  button.disabled = true;
  // start picture in picture
  await videoElement.requestPictureInPicture();
  // Reset the button
  button.disabled = false;
});

// on load
selectMediaStream();
