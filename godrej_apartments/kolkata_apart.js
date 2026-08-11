
    // ===== Popup =====
const modal = document.getElementById("enquiryModal");
const closeBtn = document.querySelector(".modal-close");

// Buttons that should open the popup
const popupButtons = document.querySelectorAll(
  ".enquire-btn, .btn-primary, .btn-outline, .offer-link, .highlights-cta a, .location-cta a, .amenities-cta a, .masterplan-cta a, .gallery-cta a"
);

popupButtons.forEach(button => {
  button.addEventListener("click", function(e){
    e.preventDefault();
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  });
});

// Close popup
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  document.body.style.overflow = "";
});

// Close when clicking outside
modal.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }
});

// Close with ESC
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape"){
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }
});
