export const videoPlayer = () => {
  const video = document.querySelector(".viewer");

  const togglePlay = () => {
    const controls = document.querySelector(".video__controls");
    if (video.paused) {
      video.play();
      video.setAttribute("controls", true);
    } else {
      video.pause();
      video.setAttribute("controls", false);
    }

    controls.classList.add("is-hidden");
  };

  const icon = document.querySelector(".video__button-play");
  icon.addEventListener("click", function () {
    togglePlay();
  });
};

export default videoPlayer;
