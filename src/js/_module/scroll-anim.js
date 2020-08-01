import $ from 'jquery';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function scrollAnim() {
  newsSectionAnim();
}

function newsSectionAnim() {
  ScrollTrigger.create({
    trigger: ".section--news",
    start: "top 70%",
    onEnter: self => {
      $('.news-item').addClass('is-animated');
      self.kill();
    }
  });
}
