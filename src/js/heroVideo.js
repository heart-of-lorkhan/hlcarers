export const heroVideo = () => {
  const intFrameWidth = window.innerWidth;
  const video = document.querySelector(".hero__video");
  const heroInfo = document.querySelector(".hero__info");

  if (intFrameWidth < 640) {
    return;
  }
  video.setAttribute("src", "video/social-campaign-devon-cornwall.mp4");
  video.play();
  video.addEventListener(
    "ended",
    function () {
      heroInfo.classList.add("animate__fadeInUp");
      heroInfo.classList.add("animate__animated");
    },
    false
  );
};

export default heroVideo;
