import $ from 'jquery';
import { goTop } from './_module/go-top';
import { headerScripts } from './_module/header';
import { pageLoader } from './_module/page-loader';
import { openAnim } from './_module/open-anim';
import { scrollAnim } from './_module/scroll-anim';
import { formValidate } from './_module/form-validate';

$(function() {
  goTop();
  headerScripts();
  // pageLoader();
  openAnim();
  scrollAnim();
  formValidate();
});
