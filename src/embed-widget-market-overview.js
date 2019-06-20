!function(){"use strict";var t;var e=((t={})["color-brand"]="#2196f3",t["color-gull-gray"]="#9db2bd",t["color-scooter"]="#38acdb",t["color-curious-blue"]="#299dcd",t);var r=document.createElement("a");function i(t){r.href=t,r.host||(r.href=r.href);var e=r.host;r.pathname;return"http:"===r.protocol&&(e=e.replace(/:80$/,"")),"https:"===r.protocol&&(e=e.replace(/:443$/,"")),{host:e,pathname:("/"===r.pathname[0]?"":"/")+r.pathname,href:r.href}}var n,o,a={events:{width:510,height:600,colorTheme:"light",isTransparent:!1,hideImportanceIndicator:!1,autosize:!1},hotlists:{width:400,height:600,isTransparent:!1},screener:{width:1100,height:512,defaultColumn:"overview",defaultScreen:"general",market:"forex",showToolbar:!0,colorTheme:"light",transparency:!1},tickers:{colorTheme:"light",isTransparent:!1},financials:{width:480,height:830,autosize:!1,symbol:"NASDAQ:AAPL",colorTheme:"light",isTransparent:!1,displayMode:"regular",largeChartUrl:""},"crypto-mkt-screener":{width:1e3,height:490,defaultColumn:"overview",market:"crypto",screener_type:"crypto_mkt",displayCurrency:"USD",colorTheme:"light",transparency:!1},"forex-cross-rates":{width:770,height:400,currencies:["EUR","USD","JPY","GBP","CHF","AUD","CAD","NZD","CNY"],frameElementId:null},"forex-heat-map":{width:770,height:400,currencies:["EUR","USD","JPY","GBP","CHF","AUD","CAD","NZD","CNY"],frameElementId:null},"market-overview":{width:400,height:650,isTransparent:!1},"market-quotes":{width:770,height:450},"mini-symbol-overview":{width:350,height:220,symbol:"FX:EURUSD",dateRange:"12m",colorTheme:"light",trendLineColor:"#37a6ef",underLineColor:"#e3f2fd",isTransparent:!1,autosize:!1,largeChartUrl:""},"single-quote":{width:350,symbol:"FX:EURUSD",colorTheme:"light",isTransparent:!1},"symbol-profile":{width:480,height:650,symbol:"NASDAQ:AAPL",colorTheme:"light",isTransparent:!1},"symbol-info":{width:1e3,symbol:"NASDAQ:AAPL",colorTheme:"light",isTransparent:!1},"technical-analysis":{interval:"1m",width:425,colorTheme:"light",isTransparent:!1,height:450,symbol:"NASDAQ:AAPL",showIntervalTabs:!0},"ticker-tape":{colorTheme:"light",isTransparent:!1,displayMode:"adaptive"}};!function(t){!function(t){t.SetSymbol="set-symbol",t.SetInterval="set-interval"}(t.Names||(t.Names={}))}(n||(n={})),function(t){!function(t){t.SymbolClick="tv-widget-symbol-click",t.WidgetLoad="tv-widget-load",t.ResizeIframe="tv-widget-resize-iframe"}(t.Names||(t.Names={}))}(o||(o={}));var s=["locale","symbol"],l=function(){var t=this;this._getScriptsInfo().forEach(function(e){t._replaceScript(e)})},c={widgetId:{configurable:!0},widgetUtmName:{configurable:!0},defaultSettings:{configurable:!0},propertiesToWorkWith:{configurable:!0},propertiesToSkipInHash:{configurable:!0},propertiesToAddToGetParams:{configurable:!0}};c.widgetId.get=function(){throw new Error("Method must be overridden")},c.widgetUtmName.get=function(){return this.widgetId},c.defaultSettings.get=function(){return a[this.widgetId]},c.propertiesToWorkWith.get=function(){return[]},l.prototype.filterRawSettings=function(t){var e=this,r={};return Object.keys(t).forEach(function(i){-1!==e.propertiesToWorkWith.indexOf(i)&&(r[i]=t[i])}),r},c.propertiesToSkipInHash.get=function(){return["customer","locale"]},c.propertiesToAddToGetParams.get=function(){return["locale"]},l.prototype._getScriptsInfo=function(){var t=function(){if(document.currentScript)return document.currentScript.src;for(var t=document.getElementsByTagName("script"),e=0;e<t.length;e++)if("interactive"===t[e].readyState)return t[e].src;try{throw new Error}catch(t){var r=/\((.*?):\d+:\d+\)\s*$/m.exec(t.stack);if(r)return r[1]}return null}();if(!t)return console.error("Could not self-replace the script, widget embedding has been aborted"),[];for(var e=i(t),r=e.host,n=e.href,o=document.getElementsByTagName("script"),a=[],s=0;s<o.length;s++){var l=o.item(s);l.src&&i(l.src).href===n&&a.push(l)}var c,h=(void 0===(c=r)&&(c=location.host),-1!==["i18n.tradingview.com","partial.tradingview.com","www.tradingview.com","wwwcn.tradingview.com"].indexOf(c)||-1!==["d33t3vvu2t2yu5.cloudfront.net","dwq4do82y8xi7.cloudfront.net","s.tradingview.com","s3.tradingview.com"].indexOf(c)||c.match(/^[a-z]{2}\.tradingview\.com/)||c.match(/prod-[^.]+.tradingview.com/)?"battle":-1!==c.indexOf("tradingview.com")?"staging":c.match(/webcharts/)?"staging_local":(c.match(/^localhost(:\d+)?$/),"local"));return a.map(function(t){return{scriptHost:r,scriptEnv:h,scriptElement:t}})},l.prototype._replaceScript=function(t){var r=this,i=t.scriptEnv,n=t.scriptHost,a=t.scriptElement;this.script=a;var s=this._scriptContentToJSON(),l=function(t){if(null===t)return null;var e=t.querySelector("#tradingview-copyright"),r=t.querySelector("#tradingview-quotes"),i=e||r;return i&&t.removeChild(i),i}(this.script.parentNode),c=!!this.script.parentNode.querySelector(".tradingview-widget-copyright");this.hasCopyright=l||c,s&&(this.settings=this.filterRawSettings(s)),s&&this._isValidSettings()||(console.error("Invalid settings provided, fall back to defaults"),this.settings=this.filterRawSettings(this.defaultSettings));var h,d=isNaN(this.settings.height)?this.settings.height:this.settings.height+"px",p=isNaN(this.settings.width)?this.settings.width:this.settings.width+"px",g=this.script.parentNode.classList.contains("tradingview-widget-container");this.script.parentNode&&g?this.iframeContainer=this.script.parentNode:this.iframeContainer=document.createElement("div"),this.iframeContainer.style.width=p,this.iframeContainer.style.height=d,this.iframeContainer.appendChild(((h=document.createElement("style")).innerHTML="\n\t.tradingview-widget-copyright {\n\t\tfont-size: 13px !important;\n\t\tline-height: 32px !important;\n\t\ttext-align: center !important;\n\t\tvertical-align: middle !important;\n\t\tfont-family: 'Trebuchet MS', Arial, sans-serif !important;\n\t\tcolor: "+e["color-gull-gray"]+" !important;\n\t}\n\n\t.tradingview-widget-copyright .blue-text {\n\t\tcolor: "+e["color-brand"]+" !important;\n\t}\n\n\t.tradingview-widget-copyright a {\n\t\ttext-decoration: none !important;\n\t\tcolor: "+e["color-gull-gray"]+" !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited {\n\t\tcolor: "+e["color-gull-gray"]+" !important;\n\t}\n\n\t.tradingview-widget-copyright a:hover .blue-text {\n\t\tcolor: "+e["color-scooter"]+" !important;\n\t}\n\n\t.tradingview-widget-copyright a:active .blue-text {\n\t\tcolor: "+e["color-curious-blue"]+" !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited .blue-text {\n\t\tcolor: "+e["color-brand"]+" !important;\n\t}\n\t",h));var m=l&&!this.settings.whitelabel,u=this.hasCopyright?"calc("+d+" - 32px)":d;this.settings.utm_source=location.hostname,this.settings.utm_medium=c?"widget_new":"widget",this.settings.utm_campaign=this.widgetUtmName,this.iframe=this._createIframe(u,p,n,i,a.id);var f=this.iframeContainer.querySelector(".tradingview-widget-container__widget");if(f?(this.script.parentNode.replaceChild(this.iframe,f),this.script.parentNode.removeChild(this.script)):g?(this.iframeContainer.appendChild(this.iframe),this.script.parentNode.removeChild(this.script)):(this.iframeContainer.appendChild(this.iframe),this.script.parentNode.replaceChild(this.iframeContainer,this.script)),function(t,e,r){var i=e.contentWindow;if(!i)return console.error("Cannot listen to the event from the provided iframe, contentWindow is not available"),function(){};function n(e){e.source&&e.source===i&&e.data&&e.data.name&&e.data.name===t&&r(e.data.data)}window.addEventListener("message",n,!1)}(o.Names.ResizeIframe,this.iframe,function(t){t.width&&(r.iframe.style.width=t.width+"px",r.iframeContainer.style.width=t.width+"px"),r.iframe.style.height=t.height+"px",r.iframeContainer.style.height=t.height+(r.hasCopyright?32:0)+"px"}),m){var w=document.createElement("div");w.style.height="32px",w.style.lineHeight="32px",w.style.width=p,w.style.textAlign="center",w.style.verticalAlign="middle",w.innerHTML=l.innerHTML,this.iframeContainer.appendChild(w)}},l.prototype._iframeSrcBase=function(t,e){var r="https://s.tradingview.com";return"local"===e?r="http://"+t:"staging"===e&&(r=-1!==t.indexOf("beta.tradingview.com")?"https://betacdn.tradingview.com":"https://"+t),r+="/embed-widget/"+this.widgetId+"/",this.settings.customer&&-1!==this.propertiesToSkipInHash.indexOf("customer")&&(r+=this.settings.customer+"/"),r},l.prototype._isValidSettings=function(){var t=function(t){if(void 0===t)return!0;var e=parseInt(t)+"%"==t+"";return parseInt(t)+""==t+""||e||"auto"===t};return t(this.settings.width)&&t(this.settings.height)},l.prototype._buildGetQueryString=function(){var t=this.propertiesToAddToGetParams.filter(function(t){return-1!==s.indexOf(t)});return 0===t.length?"":"?"+function(t){var e=[];for(var r in t)t.hasOwnProperty(r)&&null!=t[r]&&e.push({key:r,pair:encodeURIComponent(r)+"="+encodeURIComponent(t[r])});return e.sort(function(t,e){return t.key>e.key?1:t.key<e.key?-1:0}).map(function(t){return t.pair}).join("&")}(function(t,e){for(var r=Object.create(Object.getPrototypeOf(t)),i=0,n=e;i<n.length;i++){var o=n[i];Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r}(this.settings,t))},l.prototype._buildHashString=function(t){var e=this,r={};return t&&(r.frameElementId=t),Object.keys(this.settings).forEach(function(t){-1===e.propertiesToSkipInHash.indexOf(t)&&(r[t]=e.settings[t])}),Object.keys(r).length>0?"#"+encodeURIComponent(JSON.stringify(r)):""},l.prototype._scriptContentToJSON=function(){var t=this.script.innerHTML.trim();try{return JSON.parse(t)}catch(t){return console.error("Widget settings parse error: "+t),null}},l.prototype._createIframe=function(t,e,r,i,n){var o=document.createElement("iframe");n&&(o.id=n),this.settings.enableScrolling||o.setAttribute("scrolling","no"),o.setAttribute("allowtransparency",!0),o.setAttribute("frameborder",0),o.style.boxSizing="border-box",o.style.height=t,o.style.width=e;var a=this._iframeSrcBase(r,i)+this._buildGetQueryString()+this._buildHashString(n);return o.setAttribute("src",a),o},Object.defineProperties(l.prototype,c),new(function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={widgetId:{configurable:!0},propertiesToWorkWith:{configurable:!0}};return r.widgetId.get=function(){return"market-overview"},r.propertiesToWorkWith.get=function(){return["arrowOnValue","belowLineFillColorFalling","belowLineFillColorGrowing","changeDownColor","changeNeutralColor","changeUpColor","customer","disableLastFallingFlash","disableLastGrowingFlash","gridLineColor","height","hideAbsoluteChange","indexNameBold","indexNonClickable","isTransparent","colorTheme","largeChartUrl","lastColor","lastFallingFlashColor","lastGrowingFlashColor","locale","onlyDescription","paintLastWithChangeColors","plotLineColorFalling","plotLineColorGrowing","scaleFontColor","showChart","symbolActiveColor","symbolDescriptionColor","symbolSeparatorColor","symbolShortNameColor","tabActiveColor","tabInactiveColor","tabSliderColor","tabs","tickerColorFalling","tickerColorGrowing","valueBold","valueTitleMarked","whitelabel","width"]},e.prototype._createIframeWrap=function(){return t.prototype._createIframeWrap.call(this,this.settings.whitelabel)},Object.defineProperties(e.prototype,r),e}(l))}();