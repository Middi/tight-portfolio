function detectmob() {
  if (window.innerWidth <= 465) {
    return true;
  } else {
    return false;
  }
}


// MODAL

if (!detectmob()) {

  // Grab from DOM
  var modal = document.querySelector(".modal");
  var modalBg = document.querySelector(".modal-bg");
  var closeButton = document.querySelector(".close-button");
  var closeBg = document.querySelector(".modal-bg");
  var openImg = document.getElementsByClassName("open-modal");

  // Event listeners
  closeButton.addEventListener("click", function () {
    modal.classList.toggle("closed");
    modalBg.classList.toggle("closed");
  });

  closeBg.addEventListener("click", function () {
    modal.classList.toggle("closed");
    modalBg.classList.toggle("closed");
  });

  // Iterate through and add event listeners to open-img
  for (var i = 0; i < openImg.length; i++) {
    openImg[i].addEventListener('click', function (e) {
e.preventDefault();

      modal.classList.toggle("closed");
      modalBg.classList.toggle("closed");
    });
  }
}

