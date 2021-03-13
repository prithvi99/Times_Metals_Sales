const inputs = document.querySelectorAll(".input");





// const mainMenu = document.querySelector('.nav-ul');
// const closeMenu = document.querySelector('.closeMenu');
// const openMenu = document.querySelector('.openMenu');
//
// openMenu.addEventListener('click', show);
// closeMenu.addEventListener('click', close);
//
// function show(){
//   mainMenu.style.display="flex";
//   mainMenu.style.top="0";
// }
// function close(){
//   mainMenu.style.top="-100%";
// }

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
