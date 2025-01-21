/*
  Changing behaviour of call me button depending on if mobile or not
*/
function callMeButtonBehaviour() {

  
  document.querySelector('[data-test="callMeButton"]').addEventListener("click", (event) => {

    event.preventDefault();

    console.log(window.location.href);

    
    window.location.href = /Mobi|Android|iPhone/i.test(navigator.userAgent) ? event.target.href : '/contact/';
  });
}

callMeButtonBehaviour();

if (typeof module === 'object') {
  module.exports = callMeButtonBehaviour;
}
