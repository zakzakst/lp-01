import $ from 'jquery';
import { gsap } from "gsap";

export function headerScripts() {
  $('#js-header-btn').on('click', e => {
    e.preventDefault();
    const headerBtn = $('#js-header-btn');
    if(headerBtn.hasClass('is-active')) {
      headerMenuClose();
    } else {
      headerMenuOpen();
    }
  });
}

function headerMenuOpen() {
  $('#js-header-btn').addClass('is-active');
  const tl = gsap.timeline();
  tl.set('#js-header-menu', {
    display: 'block'
  })
  .to('.menu__bg-item', {
    duration: .2,
    width: '26%',
    stagger: {
      each: 0.1
    }
  })
  .to('.menu__nav-item', {
    delay: .2,
    duration: .3,
    x: 0,
    opacity: 1
  });
}

function headerMenuClose() {
  $('#js-header-btn').removeClass('is-active');
  const tl = gsap.timeline();
  tl.set('.menu__bg-item', {
    width: '25%'
  })
  .to('.menu__nav-item', {
    duration: .3,
    x: 20,
    opacity: 0
  })
  .to('.menu__bg-item', {
    delay: .2,
    duration: .2,
    scaleX: 0,
    stagger: {
      each: 0.1
    }
  })
  .set(['#js-header-menu', '.menu__bg-item', '.menu__nav-item'], {
    clearProps: 'all'
  });
}
