/*
 * The MIT License (MIT)
 *
 * Copyright (c) [2015] [Illumer Organization]
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var judgementDate = new Date(2015, 8, 22, 8, 0, 0).getTime();
var countdownLoading = true;

function numberPadding(num, padding) {
  var strnum = String(num);
  while(strnum.length < padding) strnum = "0" + strnum;
  return strnum;
}

function updateTimeDiff(value) {
  if(countdownLoading) {
    countdownLoading=false;
    $(".footer-countdown").css("opacity","1");
  }
  value = Math.round(value / 1000 / 60); // Ignore millsec & sec
  $("#cd-min").html(numberPadding(value % 60, 2));
  value = Math.round(value / 60);
  $("#cd-hour").html(numberPadding(value % 24, 2));
  value = Math.round(value / 24);
  $("#cd-day").html(numberPadding(value, 2));
}

$(document).ready(function () {
  'use strict';
  $(".access-home-btn").click(function (e) {
    window.open("http://www.illumer.org/", "hachathon-child");
  });
  
  window.setInterval(function() {
    var diff = judgementDate - Date.now();
    updateTimeDiff(diff);
  },1000);
  
  $(".banner-join-btn").click(function(e) {
    window.open("http://www.huodongxing.com/event/2293991042000", "hackathon-child");
  });
});
