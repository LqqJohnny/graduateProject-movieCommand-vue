!function(e,i){"function"==typeof require&&"object"==typeof module&&module&&"object"==typeof exports&&exports?i(require("./iSlider")):"function"==typeof define&&define.amd?define(["./iSlider"],function(e){i(e)}):i(e.iSlider)}(window?window:this,function(e){"use strict";e&&e.regPlugin("button",function(){for(var e=this,i=[],t=[],n=0;n<2;n++)i[n]=document.createElement("div"),i[n].className="islider-btn-outer",t[n]=document.createElement("div"),t[n].className="islider-btn-inner",0===n?(i[n].className+=" left",i[n].dir=-1):(i[n].className+=" right",i[n].dir=1),i[n].addEventListener("click",function(){var i=parseInt(this.getAttribute("dir"),10);e.slideTo(e.slideIndex+i)}),i[n].appendChild(t[n]),e.wrap.appendChild(i[n],e.wrap.nextSibling)})});
