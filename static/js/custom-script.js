

//Favicon
function changeFavicon(img) {
  let favicon = document.querySelector('link[rel="shortcut icon"]');
  
  if(!favicon){

    favicon = document.createElement('link');
    favicon.setAttribute('rel', 'shortcut icon');
    let head = document.querySelector('head');
    head.appendChild(favicon);
  }
  else {
    favicon.setAttribute('href', img);
  }
 
  favicon.setAttribute('type', 'image/png');
  favicon.setAttribute('data-head-react', 'true');
  favicon.setAttribute('href', img);
}
changeFavicon('https://i-techno.com.ar/templates/rt_epsilon/images/mow/favicon.png');

//Font Awesom
function insertFontAwesom(fontSrc) {
  
  let fontAwScript = document.createElement('script');
  fontAwScript.setAttribute('src', fontSrc);
  fontAwScript.setAttribute('crossorigin', 'anonymous');

  let head = document.querySelector('head');
  head.appendChild(fontAwScript);
  
}
insertFontAwesom('https://kit.fontawesome.com/a9410861d7.js');



// Countdown Function
const countdownDays = document.getElementById("countdown-day");
const countdownHours = document.getElementById("countdown-hours");
const countdownMin = document.getElementById("countdown-minutes");
const countdownSec = document.getElementById("countdown-seconds");

const counContainer = document.getElementById('countdown-container');
const countSectionOne =  document.getElementById('countdown-section__one');
const countSectionTwo =  document.getElementById('countdown-section__two');
const navMainContent = document.querySelector('.nav-main-content')


const finalDay = new Date("Sept 28 2020 00:00:00").getTime();

const timeRemaining = setInterval(() => {
  let today = new Date().getTime();
  let remaining = finalDay - today;
  
  if (remaining < 0) {
    clearInterval(timeRemaining);
    counContainer.innerHTML = "HOT SALE! 50% OFF";
    
    if(document.location.pathname !== "/" && window.screen.width <= 600){
        navMainContent.classList.add('nav-main-content-noCount')
    }
  }
  if (remaining > 0) {
    countSectionOne.classList.remove('noDisplay');
    countSectionTwo.classList.remove('noDisplay');

    let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remaining % (1000 * 60)) / 1000);

 
    const formatCountdown = (items) => {

          const eachNumber = items.toString().split('')
        
          if(items < 10) {
          
            return eachNumber.map( item => {
              return `<span class="countdown-date">0</span><span class="countdown-date">${item}</span>`
            })
          }
          else {
            
            return  eachNumber.map( item => {
              return `<span class="countdown-date">${item}</span>`
            }).join('')
          }
    
    }

    countdownDays.innerHTML= formatCountdown(days);
    countdownHours.innerHTML= formatCountdown(hours);
    countdownMin.innerHTML= formatCountdown(minutes);
    countdownSec.innerHTML= formatCountdown(seconds);
}
  
}, 1000);


/*Home Footer -  Instagram, campaing & newsletter*/
const customFooter = document.getElementById('custom-footer')
const homeFooter = document.getElementById("home-footer");

const isHomePage = () => {

  if(document.location.pathname === "/" ){
    homeFooter.classList.remove('noDisplay')
    customFooter.appendChild(homeFooter)
  }
  if(document.location.pathname !== "/" ) {
   
    customFooter.removeChild(homeFooter)
  }
  
};
isHomePage();




