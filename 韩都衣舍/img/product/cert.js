(function(){var m=function(){};m.prototype={constructor:m,certInit:!1,certDetail:"http://si.trsututn.org/info?sn=",certDetailPage:"http://si.trustutn.org/website/cert/",init:function(a){if(!a)return this.certInit=!1;if(this.certInit)return this.certInit;try{this.certInit=!0}catch(c){this.certInit=!1}return this.certInit},isInit:function(){return this.certInit},hideCert:function(a,c){this.getById("_pingansec_"+c+"_"+a).innerHTML=""},initPagePath:function(a){switch(a){case "p2p":this.certDetailPage=
this.certDetailPage.replace("/cert/","/p2p/cert/");break;case "hospital":this.certDetailPage=this.certDetailPage.replace("/cert/","/hospital/cert/")}},showCert:function(a,c,b){if(!this.isInit())this.hideCert(a,c);else if("string"!=typeof a||"string"!=typeof c)this.hideCert(a,c);else if(this.trim(a)&&this.trim(c)){this.initPagePath(a);var g="_pingansec_"+c+"_"+a;c=this.trim(c);var f="",h=0,d=0,e={},k={},m="",l="fixed";this.isIE6()&&(l="absolute");k.zIndex="9999";switch(c){case "bottomleft":f=g+"_pop";
h=120;d=103;e.dispaly="none";e.border="0";e.position=l;e.bottom="18px";e._bottom="18px";e.left="80px";e.zIndex="9999";e.backgroundColor="transparent";k.border="0";k.bottom="0px";k.left="0";m=this.certDetailPage+"bottom_pop.jsp?sn="+b;break;case "bottomright":f=g+"_pop";h=120;d=103;e.dispaly="none";e.border="0";e.position=l;e.bottom="18px";e._bottom="18px";e.right="78px";e.zIndex="9999";e.backgroundColor="transparent";k.border="0";k.bottom="0px";k.right="-20px";m=this.certDetailPage+"bottom_pop.jsp?sn="+
b;break;case "rightside":h=320;d=255;k.border="none";k.top="15%";k.right="0";break;case "leftside":h=320;d=255;k.border="none";k.top="15%";k.left="0";break;case "bottomimagelarge":k.border="0";h=140;d=55;l="";break;case "bottomimagesmall":k.border="0",h=120,d=50,l=""}k.backgroundColor="transparent";k.position=l;if(l=this.getById(g)){b&&this.createLink(this.certDetail+b);a=this.createIframe(g+"_iframe",this.certDetailPage+a+"_"+c+".jsp?sn="+b,h,d,"inline",k);b=null;if(f)switch(f+="_iframe",b=this.createIframe(f,
m,254,227,"none",e),c){case "bottomright":this.bind(a,"mouseover","window.pinganCert.show(document.getElementById('"+f+"'))");this.bind(a,"mouseout","window.pinganCert.hide(document.getElementById('"+f+"'))");this.bind(b,"mouseover","window.pinganCert.show(document.getElementById('"+f+"'))");this.bind(b,"mouseout","window.pinganCert.hide(document.getElementById('"+f+"'))");break;case "bottomleft":this.bind(a,"mouseover","window.pinganCert.show(document.getElementById('"+f+"'))"),this.bind(a,"mouseout",
"window.pinganCert.hide(document.getElementById('"+f+"'))"),this.bind(b,"mouseover","window.pinganCert.show(document.getElementById('"+f+"'))"),this.bind(b,"mouseout","window.pinganCert.hide(document.getElementById('"+f+"'))")}l.innerHTML="";l.appendChild(a);b&&l.appendChild(b)}}},isIE6:function(){return 0<navigator.userAgent.indexOf("MSIE 6.0")?!0:!1},show:function(a){null!=a&&(a.style.display="")},hide:function(a){null!=a&&(a.style.display="none")},trim:function(a){return null==a?"":a.replace(/(^\s*)|(\s*$)/g,
"")},getById:function(a){return a?document.getElementById(a):null},attr:function(a,c,b){a&&a.setAttribute(c,b)},removeAttr:function(a,c){a&&a.removeAttriute(c)},createLink:function(a,c){var b=document.createElement("A");this.attr(b,"href",a);this.attr(b,"target","_blank");if(c){var g=document.createTextNode(c);b.appendChild(g)}return b},createIframe:function(a,c,b,g,f,h){var d=document.createElement("iframe");this.attr(d,"id",a);this.attr(d,"src",c);this.attr(d,"width",b+"px");this.attr(d,"height",
g+"px");this.attr(d,"scrolling","no");this.attr(d,"marginwidth","0");this.attr(d,"marginheight","0");this.attr(d,"allowTransparency","true");this.attr(d,"border","0");this.attr(d,"frameBorder","0");this.attr(d,"bottom","0");this.bind(d,"contextmenu","return false;");d.style.cssText="border: 0 none;";h.display=f;this.css(d,null,h);return d},scrollDirection:{add:function(a,c){var b=Number(a)+Number(c);isNaN(parseFloat(b))||(b=b.toFixed(1));return b},sub:function(a,c){var b=Number(a)-Number(c);isNaN(parseFloat(b))||
(b=b.toFixed(1));return b},right:function(a,c,b,g,f,h,d,e){c=this.add(c,b);e.css(a,g,"-"+c+"px");b=parseFloat(h+".0");c>=b&&(clearInterval(e.scrollQueue[d]),delete e.scrollQueue[d],delete e.setNewCss[d],e.css(a,g,"-"+f));return c},left:function(a,c,b,g,f,h,d,e){c=this.add(c,b);e.css(a,g,c+"px");0<=c&&(clearInterval(e.scrollQueue[d]),delete e.scrollQueue[d],delete e.setNewCss[d],e.css(a,g,"0"));return c}},setNewCss:{},scrollQueue:{},scroll:function(a,c,b,g){var f=this,h=f.css(a,"width");if(a&&!f.scrollQueue[b]&&
f.css(a,c)&&(!h||f.css(a,c)!==h)&&f.scrollDirection[b]){var d=h.replace("px","");g=f.css(a,c).replace("px","");var e=g=parseInt(g);f.scrollQueue[b]=setInterval(function(){e=f.scrollDirection[b](a,e,12.7,c,h,d,b,f)},1)}},css:function(a,c,b){if(2==arguments.length){var g;g=a.currentStyle?a.currentStyle[c]:getComputedStyle(a,!1)[c];return g}if(3==arguments.length)if("string"===typeof b)a.style[c]=b;else if("object"===typeof b&&null==c)for(g in b)a.style[g]=b[g]},bind:function(a,c,b){var g=function(){eval(b)};
a.addEventListener?a.addEventListener(c,g,!1):a.attachEvent&&a.attachEvent("on"+c,g)}};window.pinganCert=new m})(window,document);