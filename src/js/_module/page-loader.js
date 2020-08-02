import $ from 'jquery';
import { gsap } from "gsap";

export function pageLoader() {
  $(window).on('load', () => {
    openAnim();
  });
}

function openAnim() {
  const tl = gsap.timeline({
    onComplete() {
      $('#js-page-loader').remove();
      setTimeout(() => {
        $('.hero__ttl, .hero__subttl').addClass('is-animated');
      }, 400);
    }
  });
  tl.to('.page-loader__content', {
    duration: .3,
    opacity: 0
  })
  .to('.page-loader__bg-item', {
    delay: .7,
    duration: .3,
    width: 0,
    stagger: {
      each: .1
    }
  });
}
