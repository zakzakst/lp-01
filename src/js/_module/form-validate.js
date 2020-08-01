import $ from 'jquery';
import { gsap } from "gsap";
import { RoughEase } from "gsap/EasePack";

gsap.registerPlugin(RoughEase);

export function formValidate() {
  $('#js-contact-form').on('submit', e => {
    formCheck(e);
  });

  $('.js-contact-check').on('input', e => {
    formClearErr(e)
  });
}

function formCheck(e) {
  let errFlg = false;
  const checkEl = $('.js-contact-check');

  checkEl.each((index, el) => {
    // 入力欄に値が入っていない時エラーを表示
    const $el = $(el);
    if($el.val()) { return; }
    // 入力欄の挙動
    $el.addClass('is-danger');
    const easeVal = 'rough({strength: 30, points: 8, randomize: false})'
    gsap.timeline()
      .to($el, {
        duration: .3,
        x: 2,
        ease: easeVal
      })
      .set($el, {
        x: 0
      });
    // アラート文言の表示
    const thisField = $el.closest('.field').find('.help');
    thisField.show();
    // エラーフラグを立てる
    errFlg = true;
  });

  if(errFlg) {
    e.preventDefault();
  }
}

function formClearErr(e) {
  const $el = $(e.target);
  if($el.val()) {
    // 入力欄のエラースタイル削除
    $el.removeClass('is-danger');
    // アラート文言の非表示
    const thisField = $el.closest('.field').find('.help');
    thisField.hide();
  }
}
