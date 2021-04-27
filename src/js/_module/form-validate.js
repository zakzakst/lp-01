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
    if ($el.val()) return;
    // 入力欄の挙動
    showAlert($el);
    // エラーフラグを立てる
    errFlg = true;
  });

  if(errFlg) {
    alert('送信NG');
    e.preventDefault();
    return;
  }

  alert('送信OK');
}

function showAlert($el) {
  let $target;
  if ($el.prop('tagName') === 'SELECT') {
    $target = $el.closest('.select');
  } else {
    $target = $el;
  }
  $target.addClass('is-danger');
  const easeVal = 'rough({strength: 30, points: 8, randomize: false})'
  gsap.timeline()
    .to($target, {
      duration: .3,
      x: 2,
      ease: easeVal
    })
    .set($target, {
      x: 0
    });
  // アラート文言の表示
  const thisField = $target.closest('.field').find('.help');
  thisField.show();
}

function formClearErr(e) {
  const $el = $(e.target);
  if($el.val()) {
    let $target;
    if ($el.prop('tagName') === 'SELECT') {
      $target = $el.closest('.select');
    } else {
      $target = $el;
    }
    // 入力欄のエラースタイル削除
    $target.removeClass('is-danger');
    // アラート文言の非表示
    const thisField = $target.closest('.field').find('.help');
    thisField.hide();
  }
}
