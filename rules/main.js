var modalRules = document.querySelector("#proceed-btn");
var modalBox = document.querySelector(".modal-container");
var modalCloseBtn = document.querySelector(".btn-modal-close");

modalRules.addEventListener("click", () => {
    modalBox.style = "visibility: visible; background: rgba(240, 248, 255, 0.58); display: flex; justify-content: center; align-items: center; align-content: center;";
    document.body.style.overflow = "hidden";
})

modalCloseBtn.addEventListener("click", () => {
    modalBox.style = "visibility: hidden";
    modalBox.style.display = "none";
    document.body.style.overflow = "auto";
});