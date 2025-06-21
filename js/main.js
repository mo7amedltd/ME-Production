// add class aclive to header on scroll

let header = document.querySelector("header")

window.onscroll = function(){
    if (this.scrollY >= 50) {
        header.classList.add("active")
    }else{
        header.classList.remove("active")
    }
}

let nav_links = document.getElementById("links");

function Open_colose_Menu() {
    nav_links.classList.toggle("active")
}

function toggleFaq(element) {
  element.classList.toggle("active");
}


function animateCounter(id, endValue, duration = 2000) {
    const element = document.getElementById(id);
    let startValue = 0;
    const increment = endValue / (duration / 16);
  
    const counter = setInterval(() => {
      startValue += increment;
      if (startValue >= endValue) {
        startValue = endValue;
        clearInterval(counter);
      }
      element.textContent = Math.floor(startValue).toLocaleString();
    }, 16);
}
  
  window.addEventListener('load', () => {
    animateCounter('counter-channels', 4);
    animateCounter('counter-views', 130994445);
    animateCounter('counter-years', 10);
  });


  function scrollVideos(direction) {
    const container = document.querySelector(".videos-strip-container");
    const scrollAmount = 320; // حسب عرض الفيديو
    container.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  }
  
  