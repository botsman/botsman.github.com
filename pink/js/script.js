(function() {
  var nav = document.querySelector('.page-header__nav');
  var burger = document.querySelector('.page-header__menu-burger');
  var menu = document.querySelector('.page-header__menu');

  var feedbackContainer = document.querySelector('.feedback__items');
  var leftArrow = document.querySelector('.feedback__slider-controls-button--left');
  var rightArrow = document.querySelector('.feedback__slider-controls-button--right');
  var translateValue = 0;


  burger.addEventListener('click', function() {
    menu.classList.toggle('page-header__menu--popup');
    nav.classList.toggle('page-header__nav--clicked');
  })

  function translate() {
    var isLeft = [].indexOf.call(this.classList, 'feedback__slider-controls-button--left') != -1 ? true: false;
    if (isLeft) {
      translateValue += 100 / 3;
    }
    else {
      translateValue -= 100 / 3;
    }

    if (translateValue > 0) {
      translateValue = - 100 * 2 / 3;
    } else if (Math.round(translateValue) < -67) {
      translateValue = 0;
    }
    feedbackContainer.style.transform = 'translateX(' + translateValue + '%)';
  }


  window.onload = function() {
    if (this.innerWidth > 1199) {
      leftArrow.addEventListener('click', translate);
      rightArrow.addEventListener('click', translate);
    }
  };

  window.addEventListener('resize', function () {
    if (this.innerWidth > 1199) {
      menu.classList.remove('page-header__menu--popup');
      nav.classList.remove('page-header__nav--clicked');

      leftArrow.addEventListener('click', translate);
      rightArrow.addEventListener('click', translate);
    } else {
      leftArrow.removeEventListener('click', translate);
      rightArrow.removeEventListener('click', translate);

      feedbackContainer.style.transform = '';
    }
  })


})()