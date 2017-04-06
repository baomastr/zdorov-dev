var Cackle=Cackle||{};
Cackle.Utils=Cackle.Utils||{getJSON:function(b,d,c){if(d){var a=c?this.createFunc(c,d,true):this.createAnonymFunc(d);
b=b.replace("callback=?","callback="+a)
}this.loadScript(b);
return true
},createAnonymFunc:function(c,b){var a="cackle_"+Math.floor(Math.random()*1000001);
return this.createFunc(a,c,b)
},createFunc:function(a,c,b){window[a]=function(d){if(!b){window[a]=undefined;
try{delete window[a]
}catch(f){}}c(d)
};
return a
},loadScript:function(b){var a=document.createElement("script");
a.src=b;
a.type="text/javascript";
this.appendResource(a);
return a
},appendResource:function(a){(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a)
},urlsToHyperlinks:function(d){var c=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,b=/(^|[^\/])(www\.[\S]+(\b|$))/ig,a=d.replace(c,'<a href="$1" target="_blank">$1</a>');
return a.replace(b,'$1<a href="http://$2" target="_blank" rel="nofollow">$2</a>')
},escapeHtml:function(a){return a?document.createElement("div").appendChild(document.createTextNode(a)).parentNode.innerHTML:""
},escapeHtmlWithLinks:function(a){return this.urlsToHyperlinks(this.escapeHtml(a))
},getBeforeAnchor:function(a){if(a.indexOf("#")>0){return a.substring(0,a.indexOf("#"))
}else{return a.substring(0,a.length)
}},getAfterAnchor:function(a){return a.substring(a.indexOf("#"),a.length)
},getSearchPath:function(c){var b=document.createElement("a");
b.href=c;
var d=this.getSearchPathFromLocation(b);
if(d.indexOf("/")!=0){return"/"+d
}else{return d
}},getSearchPathFromLocation:function(a){return a.pathname+a.search
},getBrowserLang:function(){return(navigator.language||navigator.systemLanguage||navigator.userLanguage||"en").substr(0,2).toLowerCase()
},callbacks:function(a,e,d){if(!a.callback){return
}var c=a.callback[e];
if(c&&c.length>0){for(var b=0;
b<c.length;
b++){c[b](d)
}}},getChannel:function(a){var b;
if(a.channel){return a.channel
}else{if(a.chanParam){return Cackle.getParam(a.chanParam)
}else{if(a.url){b=this.getSearchPath(a.url)
}else{b=this.getSearchPathFromLocation(window.location)
}}}if(a.chanWithoutParams&&b.indexOf("?")>-1){return b.substring(0,b.indexOf("?")||b.length)
}return b
},getUrl:function(a){return decodeURIComponent(a.url||Cackle.Utils.getBeforeAnchor(window.location.href))
},bootstrapWidget:function(c){var b=this;
for(var a=0;
a<cackle_widget.length;
a++){(function(d){var e=Cackle[d.widget],f=d.widget+d.id+(d.container||"");
if(!e){return
}e[f]=e[f]||{};
if(!c&&(e[f].isLoaded||d.isLoaded)){return
}if(e.getBootstrapUrl){e[f].isLoaded=true;
b.getJSON(e.getBootstrapUrl(d),function(g){d.data=(function(h){for(var i in h){return h[i]
}})(g);
if(d.data){d.lang=d.lang||d.data.lang||b.getBrowserLang();
if(d.data.expired){e.expired&&e.expired(d)
}else{e.main(d,Cackle.mcJQ)
}}},"cackle_"+f.replace(/[-:.]/g,""))
}else{if(e.main){e[f].isLoaded=true;
if(!d.lang){d.browserLang=true;
d.lang=b.getBrowserLang()
}e.main(d,Cackle.mcJQ)
}}})(cackle_widget[a])
}}};var Cackle = Cackle || {};

Cackle.PostMessage = Cackle.PostMessage || {

    xdm: {},

    channel: {},

    xhr: function(host) {
        if (this.xdm[host] && this.iframe(host)) {
            return this.xdm[host];
        } else {
            return (this.xdm[host] = this.create(host));
        }
    },

    iframe: function(host) {
        return document.getElementById('easyXDM_' + this.channel[host] + '_provider');
    },

    create: function(host) {
        var handler = this;
        this.loadEasyXDM();
        return new easyXDM.Rpc({
            remote: host + '/xdm/index.html',
            onReady: function() {
                var iframe = document.getElementById('easyXDM_' + this.channel + '_provider');
                iframe.setAttribute('style', 'position:absolute!important;top:-2000px!important;left:0!important;');
                handler.channel[host] = this.channel;
            }
        },{
            remote: {
                request: {}
            },
            serializer: {
                stringify: function(obj) {
                    var clone = {
                        id: obj.id,
                        jsonrpc: obj.jsonrpc,
                        method: obj.method,
                        params: obj.params[0]
                    };
                    return handler.stringify(clone);
                },
                parse: function(string) {
                    return JSON.parse(string);
                }
            }
        });
    },

    //TODO: coz if loaded many times occurs error: undefined is not a function
    //TODO: check this behavior on production with loaded widget from 'a' and 'b'
    loadEasyXDM: function() {
        (function(N,d,p,K,k,H){var b=this;var n=Math.floor(Math.random()*10000);var q=Function.prototype;var Q=/^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/;var R=/[\-\w]+\/\.\.\//;var F=/([^:])\/\//g;var I="";var o={};var M=N.easyXDM;var U="easyXDM_";var E;var y=false;var i;var h;function C(X,Z){var Y=typeof X[Z];return Y=="function"||(!!(Y=="object"&&X[Z]))||Y=="unknown"}function u(X,Y){return !!(typeof(X[Y])=="object"&&X[Y])}function r(X){return Object.prototype.toString.call(X)==="[object Array]"}function c(){var Z="Shockwave Flash",ad="application/x-shockwave-flash";if(!t(navigator.plugins)&&typeof navigator.plugins[Z]=="object"){var ab=navigator.plugins[Z].description;if(ab&&!t(navigator.mimeTypes)&&navigator.mimeTypes[ad]&&navigator.mimeTypes[ad].enabledPlugin){i=ab.match(/\d+/g)}}if(!i){var Y;try{Y=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");i=Array.prototype.slice.call(Y.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/),1);Y=null}catch(ac){}}if(!i){return false}var X=parseInt(i[0],10),aa=parseInt(i[1],10);h=X>9&&aa>0;return true}var v,x;if(C(N,"addEventListener")){v=function(Z,X,Y){Z.addEventListener(X,Y,false)};x=function(Z,X,Y){Z.removeEventListener(X,Y,false)}}else{if(C(N,"attachEvent")){v=function(X,Z,Y){X.attachEvent("on"+Z,Y)};x=function(X,Z,Y){X.detachEvent("on"+Z,Y)}}else{throw new Error("Browser not supported")}}var W=false,J=[],L;if("readyState" in d){L=d.readyState;W=L=="complete"||(~navigator.userAgent.indexOf("AppleWebKit/")&&(L=="loaded"||L=="interactive"))}else{W=!!d.body}function s(){if(W){return}W=true;for(var X=0;X<J.length;X++){J[X]()}J.length=0}if(!W){if(C(N,"addEventListener")){v(d,"DOMContentLoaded",s)}else{v(d,"readystatechange",function(){if(d.readyState=="complete"){s()}});if(d.documentElement.doScroll&&N===top){var g=function(){if(W){return}try{d.documentElement.doScroll("left")}catch(X){K(g,1);return}s()};g()}}v(N,"load",s)}function G(Y,X){if(W){Y.call(X);return}J.push(function(){Y.call(X)})}function m(){var Z=parent;if(I!==""){for(var X=0,Y=I.split(".");X<Y.length;X++){Z=Z[Y[X]]}}return Z.easyXDM}function e(X){N.easyXDM=M;I=X;if(I){U="easyXDM_"+I.replace(".","_")+"_"}return o}function z(X){return X.match(Q)[3]}function f(X){return X.match(Q)[4]||""}function j(Z){var X=Z.toLowerCase().match(Q);var aa=X[2],ab=X[3],Y=X[4]||"";if((aa=="http:"&&Y==":80")||(aa=="https:"&&Y==":443")){Y=""}return aa+"//"+ab+Y}function B(X){X=X.replace(F,"$1/");if(!X.match(/^(http||https):\/\//)){var Y=(X.substring(0,1)==="/")?"":p.pathname;if(Y.substring(Y.length-1)!=="/"){Y=Y.substring(0,Y.lastIndexOf("/")+1)}X=p.protocol+"//"+p.host+Y+X}while(R.test(X)){X=X.replace(R,"")}return X}function P(X,aa){var ac="",Z=X.indexOf("#");if(Z!==-1){ac=X.substring(Z);X=X.substring(0,Z)}var ab=[];for(var Y in aa){if(aa.hasOwnProperty(Y)){ab.push(Y+"="+H(aa[Y]))}}return X+(y?"#":(X.indexOf("?")==-1?"?":"&"))+ab.join("&")+ac}var S=(function(X){X=X.substring(1).split("&");var Z={},aa,Y=X.length;while(Y--){aa=X[Y].split("=");Z[aa[0]]=k(aa[1])}return Z}(/xdm_e=/.test(p.search)?p.search:p.hash));function t(X){return typeof X==="undefined"}var O=function(){var Y={};var Z={a:[1,2,3]},X='{"a":[1,2,3]}';if(typeof JSON!="undefined"&&typeof JSON.stringify==="function"&&JSON.stringify(Z).replace((/\s/g),"")===X){return JSON}if(Object.toJSON){if(Object.toJSON(Z).replace((/\s/g),"")===X){Y.stringify=Object.toJSON}}if(typeof String.prototype.evalJSON==="function"){Z=X.evalJSON();if(Z.a&&Z.a.length===3&&Z.a[2]===3){Y.parse=function(aa){return aa.evalJSON()}}}if(Y.stringify&&Y.parse){O=function(){return Y};return Y}return null};function T(X,Y,Z){var ab;for(var aa in Y){if(Y.hasOwnProperty(aa)){if(aa in X){ab=Y[aa];if(typeof ab==="object"){T(X[aa],ab,Z)}else{if(!Z){X[aa]=Y[aa]}}}else{X[aa]=Y[aa]}}}return X}function a(){var Y=d.body.appendChild(d.createElement("form")),X=Y.appendChild(d.createElement("input"));X.name=U+"TEST"+n;E=X!==Y.elements[X.name];d.body.removeChild(Y)}function A(Y){if(t(E)){a()}var ac;if(E){ac=d.createElement('<iframe name="'+Y.props.name+'"/>')}else{ac=d.createElement("IFRAME");ac.name=Y.props.name}ac.id=ac.name=Y.props.name;delete Y.props.name;if(typeof Y.container=="string"){Y.container=d.getElementById(Y.container)}if(!Y.container){T(ac.style,{position:"absolute",top:"-2000px",left:"0px"});Y.container=d.body}var ab=Y.props.src;Y.props.src="javascript:false";T(ac,Y.props);ac.border=ac.frameBorder=0;ac.allowTransparency=true;Y.container.appendChild(ac);if(Y.onLoad){v(ac,"load",Y.onLoad)}if(Y.usePost){var aa=Y.container.appendChild(d.createElement("form")),X;aa.target=ac.name;aa.action=ab;aa.method="POST";if(typeof(Y.usePost)==="object"){for(var Z in Y.usePost){if(Y.usePost.hasOwnProperty(Z)){if(E){X=d.createElement('<input name="'+Z+'"/>')}else{X=d.createElement("INPUT");X.name=Z}X.value=Y.usePost[Z];aa.appendChild(X)}}}aa.submit();aa.parentNode.removeChild(aa)}else{ac.src=ab}Y.props.src=ab;return ac}function V(aa,Z){if(typeof aa=="string"){aa=[aa]}var Y,X=aa.length;while(X--){Y=aa[X];Y=new RegExp(Y.substr(0,1)=="^"?Y:("^"+Y.replace(/(\*)/g,".$1").replace(/\?/g,".")+"$"));if(Y.test(Z)){return true}}return false}function l(Z){var ae=Z.protocol,Y;Z.isHost=Z.isHost||t(S.xdm_p);y=Z.hash||false;if(!Z.props){Z.props={}}if(!Z.isHost){Z.channel=S.xdm_c.replace(/["'<>\\]/g,"");Z.secret=S.xdm_s;Z.remote=S.xdm_e.replace(/["'<>\\]/g,"");ae=S.xdm_p;if(Z.acl&&!V(Z.acl,Z.remote)){throw new Error("Access denied for "+Z.remote)}}else{Z.remote=B(Z.remote);Z.channel=Z.channel||"default"+n++;Z.secret=Math.random().toString(16).substring(2);if(t(ae)){if(j(p.href)==j(Z.remote)){ae="4"}else{if(C(N,"postMessage")||C(d,"postMessage")){ae="1"}else{if(Z.swf&&C(N,"ActiveXObject")&&c()){ae="6"}else{if(navigator.product==="Gecko"&&"frameElement" in N&&navigator.userAgent.indexOf("WebKit")==-1){ae="5"}else{if(Z.remoteHelper){ae="2"}else{ae="0"}}}}}}}Z.protocol=ae;switch(ae){case"0":T(Z,{interval:100,delay:2000,useResize:true,useParent:false,usePolling:false},true);if(Z.isHost){if(!Z.local){var ac=p.protocol+"//"+p.host,X=d.body.getElementsByTagName("img"),ad;var aa=X.length;while(aa--){ad=X[aa];if(ad.src.substring(0,ac.length)===ac){Z.local=ad.src;break}}if(!Z.local){Z.local=N}}var ab={xdm_c:Z.channel,xdm_p:0};if(Z.local===N){Z.usePolling=true;Z.useParent=true;Z.local=p.protocol+"//"+p.host+p.pathname+p.search;ab.xdm_e=Z.local;ab.xdm_pa=1}else{ab.xdm_e=B(Z.local)}if(Z.container){Z.useResize=false;ab.xdm_po=1}Z.remote=P(Z.remote,ab)}else{T(Z,{channel:S.xdm_c,remote:S.xdm_e,useParent:!t(S.xdm_pa),usePolling:!t(S.xdm_po),useResize:Z.useParent?false:Z.useResize})}Y=[new o.stack.HashTransport(Z),new o.stack.ReliableBehavior({}),new o.stack.QueueBehavior({encode:true,maxLength:4000-Z.remote.length}),new o.stack.VerifyBehavior({initiate:Z.isHost})];break;case"1":Y=[new o.stack.PostMessageTransport(Z)];break;case"2":if(Z.isHost){Z.remoteHelper=B(Z.remoteHelper)}Y=[new o.stack.NameTransport(Z),new o.stack.QueueBehavior(),new o.stack.VerifyBehavior({initiate:Z.isHost})];break;case"3":Y=[new o.stack.NixTransport(Z)];break;case"4":Y=[new o.stack.SameOriginTransport(Z)];break;case"5":Y=[new o.stack.FrameElementTransport(Z)];break;case"6":if(!i){c()}Y=[new o.stack.FlashTransport(Z)];break}Y.push(new o.stack.QueueBehavior({lazy:Z.lazy,remove:true}));return Y}function D(aa){var ab,Z={incoming:function(ad,ac){this.up.incoming(ad,ac)},outgoing:function(ac,ad){this.down.outgoing(ac,ad)},callback:function(ac){this.up.callback(ac)},init:function(){this.down.init()},destroy:function(){this.down.destroy()}};for(var Y=0,X=aa.length;Y<X;Y++){ab=aa[Y];T(ab,Z,true);if(Y!==0){ab.down=aa[Y-1]}if(Y!==X-1){ab.up=aa[Y+1]}}return ab}function w(X){X.up.down=X.down;X.down.up=X.up;X.up=X.down=null}T(o,{version:"2.4.19.3",query:S,stack:{},apply:T,getJSONObject:O,whenReady:G,noConflict:e});o.DomHelper={on:v,un:x,requiresJSON:function(X){if(!u(N,"JSON")){d.write('<script type="text/javascript" src="'+X+'"><\/script>')}}};(function(){var X={};o.Fn={set:function(Y,Z){X[Y]=Z},get:function(Z,Y){if(!X.hasOwnProperty(Z)){return}var aa=X[Z];if(Y){delete X[Z]}return aa}}}());o.Socket=function(Y){var X=D(l(Y).concat([{incoming:function(ab,aa){Y.onMessage(ab,aa)},callback:function(aa){if(Y.onReady){Y.onReady(aa)}}}])),Z=j(Y.remote);this.origin=j(Y.remote);this.destroy=function(){X.destroy()};this.postMessage=function(aa){X.outgoing(aa,Z)};X.init()};o.Rpc=function(Z,Y){if(Y.local){for(var ab in Y.local){if(Y.local.hasOwnProperty(ab)){var aa=Y.local[ab];if(typeof aa==="function"){Y.local[ab]={method:aa}}}}}var X=D(l(Z).concat([new o.stack.RpcBehavior(this,Y),{callback:function(ac){if(Z.onReady){Z.onReady(ac)}}}]));this.origin=j(Z.remote);this.destroy=function(){X.destroy()};X.init()};o.stack.SameOriginTransport=function(Y){var Z,ab,aa,X;return(Z={outgoing:function(ad,ae,ac){aa(ad);if(ac){ac()}},destroy:function(){if(ab){ab.parentNode.removeChild(ab);ab=null}},onDOMReady:function(){X=j(Y.remote);if(Y.isHost){T(Y.props,{src:P(Y.remote,{xdm_e:p.protocol+"//"+p.host+p.pathname,xdm_c:Y.channel,xdm_p:4}),name:U+Y.channel+"_provider"});ab=A(Y);o.Fn.set(Y.channel,function(ac){aa=ac;K(function(){Z.up.callback(true)},0);return function(ad){Z.up.incoming(ad,X)}})}else{aa=m().Fn.get(Y.channel,true)(function(ac){Z.up.incoming(ac,X)});K(function(){Z.up.callback(true)},0)}},init:function(){G(Z.onDOMReady,Z)}})};o.stack.FlashTransport=function(aa){var ac,X,ab,ad,Y,ae;function af(ah,ag){K(function(){ac.up.incoming(ah,ad)},0)}function Z(ah){var ag=aa.swf+"?host="+aa.isHost;var aj="easyXDM_swf_"+Math.floor(Math.random()*10000);o.Fn.set("flash_loaded"+ah.replace(/[\-.]/g,"_"),function(){o.stack.FlashTransport[ah].swf=Y=ae.firstChild;var ak=o.stack.FlashTransport[ah].queue;for(var al=0;al<ak.length;al++){ak[al]()}ak.length=0});if(aa.swfContainer){ae=(typeof aa.swfContainer=="string")?d.getElementById(aa.swfContainer):aa.swfContainer}else{ae=d.createElement("div");T(ae.style,h&&aa.swfNoThrottle?{height:"20px",width:"20px",position:"fixed",right:0,top:0}:{height:"1px",width:"1px",position:"absolute",overflow:"hidden",right:0,top:0});d.body.appendChild(ae)}var ai="callback=flash_loaded"+H(ah.replace(/[\-.]/g,"_"))+"&proto="+b.location.protocol+"&domain="+H(z(b.location.href))+"&port="+H(f(b.location.href))+"&ns="+H(I);ae.innerHTML="<object height='20' width='20' type='application/x-shockwave-flash' id='"+aj+"' data='"+ag+"'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='"+ag+"'></param><param name='flashvars' value='"+ai+"'></param><embed type='application/x-shockwave-flash' FlashVars='"+ai+"' allowScriptAccess='always' wmode='transparent' src='"+ag+"' height='1' width='1'></embed></object>"}return(ac={outgoing:function(ah,ai,ag){Y.postMessage(aa.channel,ah.toString());if(ag){ag()}},destroy:function(){try{Y.destroyChannel(aa.channel)}catch(ag){}Y=null;if(X){X.parentNode.removeChild(X);X=null}},onDOMReady:function(){ad=aa.remote;o.Fn.set("flash_"+aa.channel+"_init",function(){K(function(){ac.up.callback(true)})});o.Fn.set("flash_"+aa.channel+"_onMessage",af);aa.swf=B(aa.swf);var ah=z(aa.swf);var ag=function(){o.stack.FlashTransport[ah].init=true;Y=o.stack.FlashTransport[ah].swf;Y.createChannel(aa.channel,aa.secret,j(aa.remote),aa.isHost);if(aa.isHost){if(h&&aa.swfNoThrottle){T(aa.props,{position:"fixed",right:0,top:0,height:"20px",width:"20px"})}T(aa.props,{src:P(aa.remote,{xdm_e:j(p.href),xdm_c:aa.channel,xdm_p:6,xdm_s:aa.secret}),name:U+aa.channel+"_provider"});X=A(aa)}};if(o.stack.FlashTransport[ah]&&o.stack.FlashTransport[ah].init){ag()}else{if(!o.stack.FlashTransport[ah]){o.stack.FlashTransport[ah]={queue:[ag]};Z(ah)}else{o.stack.FlashTransport[ah].queue.push(ag)}}},init:function(){G(ac.onDOMReady,ac)}})};o.stack.PostMessageTransport=function(aa){var ac,ad,Y,Z;function X(ae){if(ae.origin){return j(ae.origin)}if(ae.uri){return j(ae.uri)}if(ae.domain){return p.protocol+"//"+ae.domain}throw"Unable to retrieve the origin of the event"}function ab(af){var ae=X(af);if(ae==Z&&af.data.substring(0,aa.channel.length+1)==aa.channel+" "){ac.up.incoming(af.data.substring(aa.channel.length+1),ae)}}return(ac={outgoing:function(af,ag,ae){Y.postMessage(aa.channel+" "+af,ag||Z);if(ae){ae()}},destroy:function(){x(N,"message",ab);if(ad){Y=null;ad.parentNode.removeChild(ad);ad=null}},onDOMReady:function(){Z=j(aa.remote);if(aa.isHost){var ae=function(af){if(af.data==aa.channel+"-ready"){Y=("postMessage" in ad.contentWindow)?ad.contentWindow:ad.contentWindow.document;x(N,"message",ae);v(N,"message",ab);K(function(){ac.up.callback(true)},0)}};v(N,"message",ae);T(aa.props,{src:P(aa.remote,{xdm_e:j(p.href),xdm_c:aa.channel,xdm_p:1}),name:U+aa.channel+"_provider"});ad=A(aa)}else{v(N,"message",ab);Y=("postMessage" in N.parent)?N.parent:N.parent.document;Y.postMessage(aa.channel+"-ready",Z);K(function(){ac.up.callback(true)},0)}},init:function(){G(ac.onDOMReady,ac)}})};o.stack.FrameElementTransport=function(Y){var Z,ab,aa,X;return(Z={outgoing:function(ad,ae,ac){aa.call(this,ad);if(ac){ac()}},destroy:function(){if(ab){ab.parentNode.removeChild(ab);ab=null}},onDOMReady:function(){X=j(Y.remote);if(Y.isHost){T(Y.props,{src:P(Y.remote,{xdm_e:j(p.href),xdm_c:Y.channel,xdm_p:5}),name:U+Y.channel+"_provider"});ab=A(Y);ab.fn=function(ac){delete ab.fn;aa=ac;K(function(){Z.up.callback(true)},0);return function(ad){Z.up.incoming(ad,X)}}}else{if(d.referrer&&j(d.referrer)!=S.xdm_e){N.top.location=S.xdm_e}aa=N.frameElement.fn(function(ac){Z.up.incoming(ac,X)});Z.up.callback(true)}},init:function(){G(Z.onDOMReady,Z)}})};o.stack.NameTransport=function(ab){var ac;var ae,ai,aa,ag,ah,Y,X;function af(al){var ak=ab.remoteHelper+(ae?"#_3":"#_2")+ab.channel;ai.contentWindow.sendMessage(al,ak)}function ad(){if(ae){if(++ag===2||!ae){ac.up.callback(true)}}else{af("ready");ac.up.callback(true)}}function aj(ak){ac.up.incoming(ak,Y)}function Z(){if(ah){K(function(){ah(true)},0)}}return(ac={outgoing:function(al,am,ak){ah=ak;af(al)},destroy:function(){ai.parentNode.removeChild(ai);ai=null;if(ae){aa.parentNode.removeChild(aa);aa=null}},onDOMReady:function(){ae=ab.isHost;ag=0;Y=j(ab.remote);ab.local=B(ab.local);if(ae){o.Fn.set(ab.channel,function(al){if(ae&&al==="ready"){o.Fn.set(ab.channel,aj);ad()}});X=P(ab.remote,{xdm_e:ab.local,xdm_c:ab.channel,xdm_p:2});T(ab.props,{src:X+"#"+ab.channel,name:U+ab.channel+"_provider"});aa=A(ab)}else{ab.remoteHelper=ab.remote;o.Fn.set(ab.channel,aj)}var ak=function(){var al=ai||this;x(al,"load",ak);o.Fn.set(ab.channel+"_load",Z);(function am(){if(typeof al.contentWindow.sendMessage=="function"){ad()}else{K(am,50)}}())};ai=A({props:{src:ab.local+"#_4"+ab.channel},onLoad:ak})},init:function(){G(ac.onDOMReady,ac)}})};o.stack.HashTransport=function(Z){var ac;var ah=this,af,aa,X,ad,am,ab,al;var ag,Y;function ak(ao){if(!al){return}var an=Z.remote+"#"+(am++)+"_"+ao;((af||!ag)?al.contentWindow:al).location=an}function ae(an){ad=an;ac.up.incoming(ad.substring(ad.indexOf("_")+1),Y)}function aj(){if(!ab){return}var an=ab.location.href,ap="",ao=an.indexOf("#");if(ao!=-1){ap=an.substring(ao)}if(ap&&ap!=ad){ae(ap)}}function ai(){aa=setInterval(aj,X)}return(ac={outgoing:function(an,ao){ak(an)},destroy:function(){N.clearInterval(aa);if(af||!ag){al.parentNode.removeChild(al)}al=null},onDOMReady:function(){af=Z.isHost;X=Z.interval;ad="#"+Z.channel;am=0;ag=Z.useParent;Y=j(Z.remote);if(af){T(Z.props,{src:Z.remote,name:U+Z.channel+"_provider"});if(ag){Z.onLoad=function(){ab=N;ai();ac.up.callback(true)}}else{var ap=0,an=Z.delay/50;(function ao(){if(++ap>an){throw new Error("Unable to reference listenerwindow")}try{ab=al.contentWindow.frames[U+Z.channel+"_consumer"]}catch(aq){}if(ab){ai();ac.up.callback(true)}else{K(ao,50)}}())}al=A(Z)}else{ab=N;ai();if(ag){al=parent;ac.up.callback(true)}else{T(Z,{props:{src:Z.remote+"#"+Z.channel+new Date(),name:U+Z.channel+"_consumer"},onLoad:function(){ac.up.callback(true)}});al=A(Z)}}},init:function(){G(ac.onDOMReady,ac)}})};o.stack.ReliableBehavior=function(Y){var aa,ac;var ab=0,X=0,Z="";return(aa={incoming:function(af,ad){var ae=af.indexOf("_"),ag=af.substring(0,ae).split(",");af=af.substring(ae+1);if(ag[0]==ab){Z="";if(ac){ac(true)}}if(af.length>0){aa.down.outgoing(ag[1]+","+ab+"_"+Z,ad);if(X!=ag[1]){X=ag[1];aa.up.incoming(af,ad)}}},outgoing:function(af,ad,ae){Z=af;ac=ae;aa.down.outgoing(X+","+(++ab)+"_"+af,ad)}})};o.stack.QueueBehavior=function(Z){var ac,ad=[],ag=true,aa="",af,X=0,Y=false,ab=false;function ae(){if(Z.remove&&ad.length===0){w(ac);return}if(ag||ad.length===0||af){return}ag=true;var ah=ad.shift();ac.down.outgoing(ah.data,ah.origin,function(ai){ag=false;if(ah.callback){K(function(){ah.callback(ai)},0)}ae()})}return(ac={init:function(){if(t(Z)){Z={}}if(Z.maxLength){X=Z.maxLength;ab=true}if(Z.lazy){Y=true}else{ac.down.init()}},callback:function(ai){ag=false;var ah=ac.up;ae();ah.callback(ai)},incoming:function(ak,ai){if(ab){var aj=ak.indexOf("_"),ah=parseInt(ak.substring(0,aj),10);aa+=ak.substring(aj+1);if(ah===0){if(Z.encode){aa=k(aa)}ac.up.incoming(aa,ai);aa=""}}else{ac.up.incoming(ak,ai)}},outgoing:function(al,ai,ak){if(Z.encode){al=H(al)}var ah=[],aj;if(ab){while(al.length!==0){aj=al.substring(0,X);al=al.substring(aj.length);ah.push(aj)}while((aj=ah.shift())){ad.push({data:ah.length+"_"+aj,origin:ai,callback:ah.length===0?ak:null})}}else{ad.push({data:al,origin:ai,callback:ak})}if(Y){ac.down.init()}else{ae()}},destroy:function(){af=true;ac.down.destroy()}})};o.stack.VerifyBehavior=function(ab){var ac,aa,Y,Z=false;function X(){aa=Math.random().toString(16).substring(2);ac.down.outgoing(aa)}return(ac={incoming:function(af,ad){var ae=af.indexOf("_");if(ae===-1){if(af===aa){ac.up.callback(true)}else{if(!Y){Y=af;if(!ab.initiate){X()}ac.down.outgoing(af)}}}else{if(af.substring(0,ae)===Y){ac.up.incoming(af.substring(ae+1),ad)}}},outgoing:function(af,ad,ae){ac.down.outgoing(aa+"_"+af,ad,ae)},callback:function(ad){if(ab.initiate){X()}}})};o.stack.RpcBehavior=function(ad,Y){var aa,af=Y.serializer||O();var ae=0,ac={};function X(ag){ag.jsonrpc="2.0";aa.down.outgoing(af.stringify(ag))}function ab(ag,ai){var ah=Array.prototype.slice;return function(){var aj=arguments.length,al,ak={method:ai};if(aj>0&&typeof arguments[aj-1]==="function"){if(aj>1&&typeof arguments[aj-2]==="function"){al={success:arguments[aj-2],error:arguments[aj-1]};ak.params=ah.call(arguments,0,aj-2)}else{al={success:arguments[aj-1]};ak.params=ah.call(arguments,0,aj-1)}ac[""+(++ae)]=al;ak.id=ae}else{ak.params=ah.call(arguments,0)}if(ag.namedParams&&ak.params.length===1){ak.params=ak.params[0]}X(ak)}}function Z(an,am,ai,al){if(!ai){if(am){X({id:am,error:{code:-32601,message:"Procedure not found."}})}return}var ak,ah;if(am){ak=function(ao){ak=q;X({id:am,result:ao})};ah=function(ao,ap){ah=q;var aq={id:am,error:{code:-32099,message:ao}};if(ap){aq.error.data=ap}X(aq)}}else{ak=ah=q}if(!r(al)){al=[al]}try{var ag=ai.method.apply(ai.scope,al.concat([ak,ah]));if(!t(ag)){ak(ag)}}catch(aj){ah(aj.message)}}return(aa={incoming:function(ah,ag){var ai=af.parse(ah);if(ai.method){if(Y.handle){Y.handle(ai,X)}else{Z(ai.method,ai.id,Y.local[ai.method],ai.params)}}else{var aj=ac[ai.id];if(ai.error){if(aj.error){aj.error(ai.error)}}else{if(aj.success){aj.success(ai.result)}}delete ac[ai.id]}},init:function(){if(Y.remote){for(var ag in Y.remote){if(Y.remote.hasOwnProperty(ag)){ad[ag]=ab(Y.remote[ag],ag)}}}aa.down.init()},destroy:function(){for(var ag in Y.remote){if(Y.remote.hasOwnProperty(ag)&&ad.hasOwnProperty(ag)){delete ad[ag]}}aa.down.destroy()}})};b.easyXDM=o})(window,document,location,window.setTimeout,decodeURIComponent,encodeURIComponent);
    },

    get: function(xhrhost, url, data, success, complete) {
        this.send(xhrhost, url, 'GET', data, success, complete);
    },

    post: function(xhrhost, url, data, success, complete) {
        if (Cackle.auth && Cackle.auth.provider == 'sso' && /Safari/.test(navigator.userAgent) && /Apple/.test(navigator.vendor)) {
            var p3pCookie = Cackle.getCookie('mc-sso-p3p');
            if (p3pCookie) {
                this.postP3P(p3pCookie, url, data, success, complete);
                return;
            }
        }
        this.doPost(url, data, success, complete);
    },

    //In iOS (Safari) SSO auth don't set cookie according P3P policy
    //This is workaround for set cookie into window.popup
    postP3P: function(p3pCookie, url, data, success, complete) {
        var handler = this,
            p3pJson = JSON.parse(p3pCookie),
            win = Cackle.Fastjs.popup(p3pJson.url, 1, 1, p3pJson.params, 1000000, 1000000);

        function check() {
            if (!win || win.closed != false) {
                Cackle.Cookie.erase('mc-sso-p3p');
                handler.doPost(url, data, success, complete);
            } else {
                setTimeout(check, 10);
            }
        }
        setTimeout(check, 10);
    },

    doPost: function(url, data, success, complete) {
        url = url.replace(/https?.*cackle.me/, Cackle.origin);
        this.send(Cackle.origin, url, 'POST', data, success, complete);
    },

    send: function(xhrhost, url, type, data, success, complete) {
        if (data) {
            for (d in data) {
                if (data.hasOwnProperty(d)) {
                    var val = data[d];
                    if (typeof val == 'string') {
                        data[d] = this.escape(val);
                    }
                }
            }
        }
        this.xhr(xhrhost).request({url: url, method: type, headers: {'Accept': 'application/json;'}, data: data},
            function(res) {
                if (success) {
                    if (res.data) {
                        var json;
                        try { json = JSON.parse(res.data); } catch (e) {}
                        success(json || res.data);
                    } else {
                        success();
                    }
                }
                if (complete) complete();
            }, function(res) {
                if (complete) complete();
            }
        );
    },

    escape: function(str) {
        var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            meta = {'\b': '\\b', '\t': '\\t', '\n': '\\n', '\f': '\\f', '\r': '\\r', '"' : '\\"', '\\': '\\\\'};

        escapable.lastIndex = 0;
        return escapable.test(str) ?
            str.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) : str;
    },

    stringify: function (obj) {
        var t = typeof (obj);
        if (t != "object" || obj === null) {
            if (t == "string"){obj = '"'+obj+'"';}
            return String(obj);
        }
        else {
            var n, v, json = [], arr = (obj && obj.constructor == Array);
            for (n in obj) {
                if (obj.hasOwnProperty(n)) {
                    v = obj[n]; t = typeof(v);
                    if (t == "string"){v = '"'+v+'"';}else if (t == "object" && v !== null){v = this.stringify(v);}
                    json.push((arr ? "" : '"' + n + '":') + String(v));
                }
            }
            return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
        }
    }
};/* Laura Doktorova https://github.com/olado/doT */
(function(){function o(){var a={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},b=/&(?!#?\w+;)|<|>|"|'|\//g;return function(){return this?this.replace(b,function(c){return a[c]||c}):this}}function p(a,b,c){return(typeof b==="string"?b:b.toString()).replace(a.define||i,function(l,e,f,g){if(e.indexOf("def.")===0)e=e.substring(4);if(!(e in c))if(f===":"){a.defineParams&&g.replace(a.defineParams,function(n,h,d){c[e]={arg:h,text:d}});e in c||(c[e]=g)}else(new Function("def","def['"+
e+"']="+g))(c);return""}).replace(a.use||i,function(l,e){if(a.useParams)e=e.replace(a.useParams,function(g,n,h,d){if(c[h]&&c[h].arg&&d){g=(h+":"+d).replace(/'|\\/g,"_");c.__exp=c.__exp||{};c.__exp[g]=c[h].text.replace(RegExp("(^|[^\\w$])"+c[h].arg+"([^\\w$])","g"),"$1"+d+"$2");return n+"def.__exp['"+g+"']"}});var f=(new Function("def","return "+e))(c);return f?p(a,f,c):f})}function m(a){return a.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}var j={version:"1.0.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,
interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:true,append:true,selfcontained:false},template:undefined,
compile:undefined},q;q=function(){return this||(0,eval)("this")}();q.doT=j;String.prototype.encodeHTML=o();var r={append:{start:"'+(",end:")+'",endencode:"||'').toString().encodeHTML()+'"},split:{start:"';out+=(",end:");out+='",endencode:"||'').toString().encodeHTML();out+='"}},i=/$^/;j.template=function(a,b,c){b=b||j.templateSettings;var l=b.append?r.append:
r.split,e,f=0,g;a=b.use||b.define?p(b,a,c||{}):a;a=("var out='"+(b.strip?a.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):a).replace(/'|\\/g,"\\$&").replace(b.interpolate||i,function(h,d){return l.start+m(d)+l.end}).replace(b.encode||i,function(h,d){e=true;return l.start+m(d)+l.endencode}).replace(b.conditional||i,function(h,d,k){return d?k?"';}else if("+m(k)+"){out+='":"';}else{out+='":k?"';if("+m(k)+"){out+='":"';}out+='"}).replace(b.iterate||i,function(h,
d,k,s){if(!d)return"';} } out+='";f+=1;g=s||"i"+f;d=m(d);return"';var arr"+f+"="+d+";if(arr"+f+"){var "+k+","+g+"=-1,l"+f+"=arr"+f+".length-1;while("+g+"<l"+f+"){"+k+"=arr"+f+"["+g+"+=1];out+='"}).replace(b.evaluate||i,function(h,d){return"';"+m(d)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,"").replace(/(\s|;|\}|^|\{)out\+=''\+/g,"$1out+=");if(e&&b.selfcontained)a="String.prototype.encodeHTML=("+
o.toString()+"());"+a;try{return new Function(b.varname,a)}catch(n){typeof console!=="undefined"&&console.log("Could not create a template function: "+a);throw n;}};j.compile=function(a,b){return j.template(a,null,b)}})();
Cackle.SVGIcon = Cackle.SVGIcon || (function() {

    var icon = function(width, height, color, path, box) {
        return '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + width + '" height="' + height + '" viewBox="' + (box || '0 0 1792 1792') + '"><path d="' + path + '"' + (color ? ' fill="' + color + '"' : '') + '/></svg>';
    };

    var social = function(width, height, vbox, trans, path) {
        return '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + width + '" height="' + height + '" viewBox="' + vbox + '"><g transform="translate(' + trans + ') scale(0.05,-0.05)"><path fill="#fff" d="' + path + '"></path></g></svg>';
    };

    var path = {
        star_o: 'M1201 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z',
        star_half: 'M1250 957l257-250-356-52-66-10-30-60-159-322v963l59 31 318 168-60-355-12-66zm452-262l-363 354 86 500q5 33-6 51.5t-34 18.5q-17 0-40-12l-449-236-449 236q-23 12-40 12-23 0-34-18.5t-6-51.5l86-500-364-354q-32-32-23-59.5t54-34.5l502-73 225-455q20-41 49-41 28 0 49 41l225 455 502 73q45 7 54 34.5t-24 59.5z',
        star: 'M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'
    };

    return {
        path: path,
        star_o: icon(22, 22, '#ccc', path.star_o),
        star_half: icon(22, 22, '#F58A02', path.star_half),
        star: icon(22, 22, '#F58A02', path.star)
    };
})();Cackle.CommentCount=Cackle.CommentCount||{MESSAGES:{ru:{no:"Нет комментариев",one:"Один комментарий",comments:function(a){return Cackle.CommentCount.variant(Math.round(a),"комментарий","комментария","комментариев")
}},en:{no:"No comments",one:"One comment",comments:function(a){return"comments"
}},uk:{no:"Немає коментарів",one:"Один коментар",comments:function(a){return Cackle.CommentCount.variant(Math.round(a),"коментар","коментаря","коментарів")
}},ro:{no:"Nu sunt comentarii",one:"Un comentariu",comments:function(a){return Cackle.CommentCount.variant(Math.round(a),"comentariu","comentarii","comentarii")
}},lv:{no:"Nav komentāru",one:"Viens komentārs",comments:function(a){return"komentāri"
}},lt:{no:"Komentarų nėra",one:"Vienas komentaras",comments:function(a){return"komentarai"
}},kk:{no:"Пікірлер жоқ",one:"Бір пікір",comments:function(a){return"пікір"
}},ka:{no:"კომენტარი არარის",one:"ერთი კომენტარი",comments:function(a){return"კომენტარი"
}},hy:{no:"Մեկնաբանություն չկա",one:"Մեկ մեկնաբանություն",comments:function(a){return"մեկնաբանություն"
}},fr:{no:"Pas de commentaires",one:"Un commentaire",comments:function(a){return"commentaires"
}},es:{no:"No hay comentarios",one:"Un comentario",comments:function(a){return"comentarios"
}},el:{no:"Κανένα σχόλιο",one:"Ένα σχόλιο",comments:function(a){return"σχόλια"
}},de:{no:"Noch keine Kommentare",one:"Ein Kommentar",comments:function(a){return"Kommentar"
}},be:{no:"Няма каментароў",one:"Адзін каментар",comments:function(a){return Cackle.CommentCount.variant(Math.round(a),"каментар","каментара","каментарыяў")
}},it:{no:"Non ci sono commenti",one:"1 commento",comments:function(a){return"commenti"
}},bg:{no:"Няма коментари",one:"1 коментар",comments:function(a){return Cackle.CommentCount.variant(Math.round(a),"коментар","коментари","коментари")
}},pt:{noComments:"Não há comentários",oneComment:"1 comentário",comments:function(a,b){return Cackle.CommentCount.variant(Math.round(a),"comentário","comentário","comentários",b)
}},id:{noComments:"Tidak ada komentar",oneComment:"Satu komentar",comments:function(a,b){return"komentar"
}},hi:{noComments:"कोई टिप्पणी नही",oneComment:"एक टिप्पणी",comments:function(a,b){return Cackle.CommentCount.variant(Math.round(a),"टिप्पणी","टिप्पणियाँ","टिप्पणियाँ",b)
}}},stars:'<style>.mc-stars svg {vertical-align:middle;}</style><span class="mc-stars">{{~[1, 2, 3, 4, 5] :c}}{{?it.r >= c}}<span class="wp-star" data-star="{{=c}}">{{=it.svg.star}}</span>{{??}}{{?c - it.r < 1}}<span class="wp-star" data-star="{{=c}}">{{=it.svg.star_half}}</span>{{??}}<span class="wp-star" data-star="{{=c}}">{{=it.svg.star_o}}</span>{{?}}{{?}}{{~}}</span>',mcAnchors:[],main:function(b){var c=this,a=b.host+"/widget/"+b.id+"/count";
Cackle.PostMessage.post(b.host,a,this.getParams(b),function(d){b.data=(function(e){for(var f in e){return e[f]
}})(d);
if(b.data){b.lang=b.browserLang?b.data.lang||b.lang:b.lang
}c.render(b)
})
},getParams:function(g){var j={},n=0,k=document.querySelectorAll(".cackle-comment-count");
if(k&&k.length>0){for(var m=0;
m<k.length;
m++){var f=k[m],o=!1,d=f.getAttribute("data-cackle-url"),h=f.getAttribute("data-cackle-channel");
if(h){o=h
}else{if(d){o=Cackle.Utils.getSearchPath(d)
}}if(o){this.mcAnchors[n]=f;
j[n]=o;
n+=1
}}}else{var c=document.getElementsByTagName("A"),b="#"+(g.container||"mc-container"),p="cackle-channel",e="data-cackle-channel";
for(var m=0;
m<c.length;
m++){var l=c[m],a=l.getAttribute("href");
if(a&&a.indexOf(b)>-1){var o;
if(l.hasAttribute&&(l.hasAttribute(p)||l.hasAttribute(e))){o=l.getAttribute(p)||l.getAttribute(e)
}else{o=Cackle.Utils.getSearchPath(a.replace(b,""))
}this.mcAnchors[n]=l;
j[n]=o;
n+=1
}}}j.len=n;
return j
},render:function(f){var d=f.data,o=f.no||d.setting.noComment,g=f.one||d.setting.oneComment,n=f.mult||d.setting.numComment||"{num} {comments}",a=f.lang,m=d.counts.split(",");
for(var e=0;
e<m.length;
e++){var b=m[e];
if(b){var c=b.split(":"),k=c[0],j=c[1],h=c[2],l=c[3];
if(f.html){this.mcAnchors[k].innerHTML=this.temp(a,f.html,j,h,l)
}else{if(j==0){this.mcAnchors[k].innerHTML=o?o:this.MESSAGES[a].no
}else{if(j==1){this.mcAnchors[k].innerHTML=g?g:this.MESSAGES[a].one
}else{this.mcAnchors[k].innerHTML=this.temp(a,n,j,h,l)
}}}}}},temp:function(c,e,h,f,i){var g=this.MESSAGES[c].comments(h),a=i/f||0,d=a?a.toFixed(1):a,b=(doT.template(this.stars))({r:d,svg:Cackle.SVGIcon});
var j=e.replace(/\{num\}/g,h).replace(/\{comments\}/g,g).replace(/\{rating\}/g,d).replace(/\{stars\}/g,b);
return(doT.template(j))({num:h,comments:g,rating:d,stars:b})
},variant:function(e,d,c,b){var a=e%10;
if((a==1)&&((e==1)||(e>20))){return d
}else{if((a>1)&&(a<5)&&((e>20)||(e<10))){return c
}else{return b
}}}};
Cackle.Utils.bootstrapWidget();