const faqItems = document.querySelectorAll(".faq-item");
document.addEventListener("DOMContentLoaded", () => {

  faqItems.forEach(item => {
    const header = item.querySelector(".faq-item-header");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");


    answer.style.display = "none";

    header.addEventListener("click", () => {
      const isOpen = answer.style.display === "block";

      faqItems.forEach(el => {
        el.querySelector(".faq-answer").style.display = "none";
        el.querySelector(".faq-icon").src = "./imgs/faq/1.svg"; 
      });

      if (!isOpen) {
        answer.style.display = "block";   
        icon.src = "./imgs/faq/2.svg"; 
      } else {
        answer.style.display = "none";    
        icon.src = "./imgs/faq/1.svg";     
      }
    });
  });
});


