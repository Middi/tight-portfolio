var modal=document.querySelector(".modal"),modalBg=document.querySelector(".modal-bg"),closeButton=document.querySelector(".close-button"),closeBg=document.querySelector(".modal-bg"),openImg=document.getElementsByClassName("open-modal");closeButton.addEventListener("click",function(){modal.classList.toggle("closed"),modalBg.classList.toggle("closed")}),closeBg.addEventListener("click",function(){modal.classList.toggle("closed"),modalBg.classList.toggle("closed")});for(var i=0;i<openImg.length;i++)openImg[i].addEventListener("click",function(e){e.preventDefault(),modal.classList.toggle("closed"),modalBg.classList.toggle("closed")});