!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){t(1),t(2),t(3),t(4),e.exports=t(5)},function(e,n){Phaser.GameObjects.Sprite},function(e,n){Phaser.Scene},function(e,n){Phaser.Scene},function(e,n){Phaser.Scene},function(e,n){Math.max(document.documentElement.clientWidth,window.innerWidth||0),Math.max(document.documentElement.clientHeight,window.innerHeight||0);var t={type:Phaser.WEBGL,width:350,height:700,scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},backgroundColor:"black",physics:{default:"arcade",arcade:{gravity:{x:0,y:0}}},scene:[SceneMainMenu,SceneMain,SceneGameOver],pixelArt:!0,roundPixels:!0};new Phaser.Game(t)}]);