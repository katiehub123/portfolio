// JavaScript y'all
let rights = document.querySelectorAll('.right div');
let lefts = document.querySelectorAll('.left div');
let call = 0;
function inView() {
     let wh = window.innerHeight;
     rights.forEach(x => {
          let dims = x.getBoundingClientRect();
          let top = dims.top;
          let bottom = dims.bottom;
          let rdata = x.dataset.right;
          let left = document.getElementById(rdata);
          if (top <= (wh/2) && bottom > (wh/2)) {
               left.classList.add('inview');
          }
     })
}

function show() {
     let wh = window.innerHeight;
     rights.forEach(x => {
          let dims = x.getBoundingClientRect();
          let top = dims.top;
          let bottom = dims.bottom;
          let rdata = x.dataset.right;
          let left = document.getElementById(rdata);
          let inview = left.classList.contains('inview');
          if (inview) {
               return;
          }
          if (top <= (wh/2) && bottom > (wh/2)) {
               call++;
               left.style.zIndex = call;
               left.classList.add('show');
               lefts.forEach(l => {
                    setTimeout(() => {l.classList.remove('inview');}, 500)
                    
               })
          } else {
               left.classList.remove('show');
          }
     })
}
inView();
window.addEventListener('scroll', show);

// 1. get our targets and put them in variables: an element with the class “button”, and an element with the class “drawer”
let button = document.querySelector('.nav');
let drawer = document.querySelector('.menu');

// 2. describe our function, which is to toggle the class “open” on the drawer element
function toggleClass() {
drawer.classList.toggle('open');
}

// 3. create an event listener on the button element that runs our function when a user clicks the it
button.addEventListener('click', toggleClass);