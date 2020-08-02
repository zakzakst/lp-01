import $ from 'jquery';
import { gsap } from "gsap";

export function openAnim() {
  setTimeout(() => {
    $('.hero__ttl, .hero__subttl').addClass('is-animated');
  }, 1000);
}
