const detectCollision = (rect1, rect2) => {
  if (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  ) {
    return true;
  }

  return false;
};

export const scrollHeader = () => {
  let scrollpos = window.scrollY;
  // const header = document.querySelector(".header__top");
  const apply = document.getElementById("apply");
  const form = document.getElementById("form");
  // const headerHeight = header.offsetHeight;
  // let headerRect = header.getBoundingClientRect();
  let formRect = form.getBoundingClientRect();
  let applyRect = apply.getBoundingClientRect();
  // let hasCollisionHeader = detectCollision(headerRect, formRect);
  let hasCollisionApply = detectCollision(applyRect, formRect);

  const hideOnCollision = (element, classname) =>
    element.classList.add(classname);
  const showOutOfCollision = (element, classname) =>
    element.classList.remove(classname);

  window.addEventListener("scroll", () => {
    scrollpos = window.scrollY;
    // headerRect = header.getBoundingClientRect();
    formRect = form.getBoundingClientRect();
    applyRect = apply.getBoundingClientRect();
    // hasCollisionHeader = detectCollision(headerRect, formRect);
    hasCollisionApply = detectCollision(applyRect, formRect);
    // const formOffsetTop = form.getBoundingClientRect().top;

    // if (formOffsetTop > headerHeight && !hasCollisionHeader) {
    // 	showOutOfCollision(header, 'animate__fadeOutUp');
    // } else {
    // 	hideOnCollision(header, 'animate__fadeOutUp');
    // }

    setTimeout(function () {
      if (!hasCollisionApply) {
        showOutOfCollision(apply, "animate__fadeOutDown");
        apply.classList.add("no-focus");
      } else {
        hideOnCollision(apply, "animate__fadeOutDown");
        apply.classList.remove("no-focus");
      }
    }, 1000);
  });
};

export default scrollHeader;
