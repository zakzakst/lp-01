import $ from 'jquery';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function scrollAnim() {
  aboutSectionAnim();
  serviceSectionAnim();
  newsSectionAnim();
  gallerySectionAnim();
}

function aboutSectionAnim() {
  if(!$('.about-section').length) return;
  $('.about-section .columns').each((index, el) => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 70%",
      onEnter: self => {
        $(self.trigger).addClass('is-animated');
        self.kill();
      }
    });
  })
}

function serviceSectionAnim() {
  if(!$('.service-section').length) return;
  // 画像枠を画面に固定
  ScrollTrigger.create({
    trigger: ".service-section .columns",
    start: "top top",
    end: "bottom bottom",
    pin: ".service__img-wrapper"
  });
  // コンテンツ内容によって画像枠に表示させる画像を変更
  $('.service__content').each((index, el) => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: self => {
        const num = self.trigger.dataset.imgTarget;
        serviceImgChange(num);
      },
      onEnterBack: self => {
        const num = self.trigger.dataset.imgTarget;
        serviceImgChange(num);
      }
    });
  });
}

function serviceImgChange(num) {
  const targetId = `js-service-img${num}`;
  const currentImg = $('.service__img-wrapper > .is-active');
  // 対象の画像がすでに表示されている場合は、処理を中止
  if(targetId === currentImg.attr('id')) {
    return;
  }
  currentImg.removeClass('is-active');
  $(`#${targetId}`).addClass('is-active');
}

function newsSectionAnim() {
  if(!$('.news-list').length) return;
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
  if(!$('.gallery').length) return;
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
