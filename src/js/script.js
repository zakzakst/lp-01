import $ from 'jquery';
import { test } from './_module/test';
import { goTop } from './_module/go-top';
import { headerScripts } from './_module/header';
import { pageLoader } from './_module/page-loader';
import { scrollAnim } from './_module/scroll-anim';
import { formValidate } from './_module/form-validate';

$(function() {
  // test();
  // goTop();
  // headerScripts();
  // pageLoader();
  scrollAnim();
  formValidate();
});
