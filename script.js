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

const modelViewer = document.querySelector("model-viewer");
modelViewer.addEventListener("load", () =>{
  console.log(modelViewer.availableAnimations);
});

const hotspotButton = document.querySelector(".hotspot-pilz");
const sprechblase = document.querySelector(".sprechblase");

hotspotButton.addEventListener("click", () => {
  modelViewer.animationName = "rechter ArmAction";
  modelViewer.play
  sprechblase.classList.add("visible");
});