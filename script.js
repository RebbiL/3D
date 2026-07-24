// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};

document.querySelector('model-viewer').addEventListener('progress', onProgress);

const modelViewer = document.querySelector("#vordergrund");
const animation = ["rechter ArmAction","SurfSphere.001Action.002"];
let aktuellerIndex = 0;

const hotspotButton = document.querySelector(".hotspot-pilz");
const sprechblase = document.querySelector(".sprechblase");
const sound = new Audio("./hintergrundmusik.mp3");

hotspotButton.addEventListener("click", () => {
  modelViewer.currentTime = 0;
  modelViewer.animationName = animation[aktuellerIndex];
  modelViewer.play();
  sprechblase.classList.add("visible");
  aktuellerIndex = (aktuellerIndex +1)% animation.length
  sound.currentTime = 0;
  sound.play().catch(error => {
    console.error("The sound could not be played:", error);
  });
});



modelViewer.addEventListener("click", () => {

});
