(function() {
    var slides = document.querySelectorAll('.slide');
    var controls = document.querySelectorAll('.slider__control');
    var numOfSlides = slides.length;
    var slidingAT = 1000; // sync this with scss variable
    var slidingBlocked = false;
  
    Array.prototype.slice.call(slides).forEach(function(el, index) {
      var i = index + 1;
      el.classList.add('slide-' + i);
      el.dataset.slide = i;
    });
  
    Array.prototype.slice.call(controls).forEach(function(el) {
      el.addEventListener('click', controlClickHandler);
    });
  
    function controlClickHandler() {
      if (slidingBlocked) return;
      slidingBlocked = true;
  
      var control = this;
      var isRight = control.classList.contains('m--right');
      var curActive = document.querySelector('.slide.s--active');
      var index = +curActive.dataset.slide;
      isRight ? index++ : index--;
      if (index < 1) index = numOfSlides;
      if (index > numOfSlides) index = 1;
      var newActive = document.querySelector('.slide-' + index);
  
      control.classList.add('a--rotation');
      curActive.classList.remove('s--active', 's--active-prev');
      document.querySelector('.slide.s--prev').classList.remove('s--prev');
  
      newActive.classList.add('s--active');
      if (!isRight) newActive.classList.add('s--active-prev');
  
      var prevIndex = index - 1;
      if (prevIndex < 1) prevIndex = numOfSlides;
  
      document.querySelector('.slide-' + prevIndex).classList.add('s--prev');
  
      setTimeout(function() {
        control.classList.remove('a--rotation');
        slidingBlocked = false;
      }, slidingAT * 0.25);
    }
  })();




  /* this is the another part */
  var countDownDate = new Date("July 25, 2023 00:00:00").getTime();
  var x = setInterval(function(){
    var now = new Date().getTime();
    var distance =countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000 *60 *60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) /(1000*60));
    var seconds = Math.floor((distance % (1000 * 60 ))/1000);
   
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  if(distance<0){
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
  },1000);