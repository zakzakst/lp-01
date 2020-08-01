import $ from 'jquery';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function scrollAnim() {
  newsSectionAnim();
  gallerySectionAnim();
}

function newsSectionAnim() {
  ScrollTrigger.create({
    trigger: ".news-list",
    start: "top 70%",
    onEnter: self => {
      $('.news-item').addClass('is-animated');
      self.kill();
    }
  });
}

function gallerySectionAnim() {
  ScrollTrigger.create({
    trigger: ".gallery",
    start: "top 70%",
    onEnter: self => {
      const grid = getGalleryItemGrid();
      gsap.to('.gallery > li', {
        opacity: 1,
        stagger: {
          each: 0.2,
          grid: grid
        }
      });
      self.kill();
    }
  });
}

function getGalleryItemGrid() {
  return [3, 4];
}
