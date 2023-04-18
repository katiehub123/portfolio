---
layout: layout.html
title: Character Design
---
<div class="leftPage">
               <div class="content singlePage">
               <div class="titleOfContent">
               <h1>Mr. Ray</h1>
               <p>an 8-bit PSA about Animal Cruelty</p>
               </div>
               <p>Mr. Ray is a virtual helper who will walk you through an adventure to choose the right product. By choosing the right product, you will save Mr. Ray and his friend from bad chemicals. "Helping Mr. Ray" is an interactive ad designed by Humane Society International. I hope with this ad, you will understand more about animal cruelty and why you should join the non-animal testing movement.</p>
               </div>  
               <div id="animation_container" style="margin:auto;padding-top:5vh">
		<canvas id="canvas" width="1680" height="1400" style="position: absolute; display: block; background-color:rgba(250, 165, 70, 1.00);"></canvas>
		<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:336px; height:280px; position: absolute; left: 0px; top: 0px; display: block;">
		</div>
	</div>
</div>
<div class="rightPage">
     <div class="collection">
          <img src="../img/banner/bannerAd1.png">
          <img src="../img/banner/bannerAd2.png">
          <img src="../img/banner/bannerAd3.png">
          <img src="../img/banner/bannerAd4.png">
          <img src="../img/banner/bannerAd5.png">
     </div>
</div>

<script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
<script src="../js/bannerAd.js"></script>
<script>
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("1B9C3BB1A47247F8B623768E39395794");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.installPlugin(createjs.Sound);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.bannerAd();
	stage = new lib.Stage(canvas);
	stage.enableMouseOver();	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
function playSound(id, loop, offset) {
	return createjs.Sound.play(id, {'interrupt':createjs.Sound.INTERRUPT_EARLY, 'loop': loop, 'offset': offset});}
window.onload = init;
</script>