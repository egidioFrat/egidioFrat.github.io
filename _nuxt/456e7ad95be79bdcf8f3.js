(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{154:function(t,n){var e=Object.prototype.hasOwnProperty;function r(object,t,n){var r=object[t];e.call(object,t)&&function(t,n){return t===n||t!=t&&n!=n}(r,n)&&(void 0!==n||t in object)||(object[t]=n)}t.exports=function(t,n){return function(t,n,e){for(var r=-1,o=t.length,c=n.length,l={};++r<o;){var f=r<c?n[r]:void 0;e(l,t[r],f)}return l}(t||[],n||[],r)}},251:function(t,n,e){"use strict";e.r(n);e(25),e(24);var r=e(3),o=e(155),c=e.n(o),l=e(154),f=e.n(l),h={layout:"default",head:{title:"about settanta, modern furniture",meta:[{hid:"description",name:"description",content:"An aesthetic trip to Oluce, Gianfranco Frattini, Willy Rizzo, italian, Tobia Scarpa, Emilio Pucci, through ancient artifacts"}],bodyAttrs:{class:"page-about"}},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var n,e,r,o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("https://sheets.googleapis.com/v4/spreadsheets/1YCfnhn1mV__8Yan4kqRcZVRC7JZA3ZMeeihZq8Q7YKo/values/about!A1:B50?key=AIzaSyBCL9IShJzo5MrEojaYHbfD1SlGPw13dJo");case 2:for(i in n=t.sent,e=n.data.values,r=e.shift(),o=[],e)o.push(f()(r,e[i]));return t.abrupt("return",{about:o});case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},d=e(10),component=Object(d.a)(h,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"a"},[e("div",{staticClass:"l"},[e("main",{staticClass:"b"},[e("div",{staticClass:"f"},[e("h1",{staticClass:"y"},[t._v("about")]),t._v(" "),t._l(t.about,function(n){return e("p",{key:n.index,domProps:{innerHTML:t._s(n.content)}})})],2)])])])},[],!1,null,null,null);n.default=component.exports}}]);