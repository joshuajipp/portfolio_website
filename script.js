function iconChanger(anchor) {
    
    if (anchor.classList[1] === "bx-moon") {
      anchor.className = "bx bx-sun";
    } else {
      anchor.className = "bx bx-moon";
    }
  }


document.querySelector('.header__moon').onclick = function () {
    document.querySelector('body').classList.toggle('is-black');
}

document.querySelector('.header__mob-menu').onclick = function () {
    document.querySelector('.header-menu').classList.toggle('is-active');
}
