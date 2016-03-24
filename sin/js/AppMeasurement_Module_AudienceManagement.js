function AppMeasurement_Module_AudienceManagement(d){var a=this;a.s=d;var b=window;b.s_c_in||(b.s_c_il=[],b.s_c_in=0);a._il=b.s_c_il;a._in=b.s_c_in;a._il[a._in]=a;b.s_c_in++;a._c="s_m";a.setup=function(c){b.DIL&&c&&(c.disableDefaultRequest=!0,c.disableScriptAttachment=!0,a.instance=b.DIL.create(c),a.tools=b.DIL.tools)};a.isReady=function(){return a.instance?!0:!1};a.getEventCallConfigParams=function(){return a.instance&&a.instance.api&&a.instance.api.getEventCallConfigParams?a.instance.api.getEventCallConfigParams():
{}};a.passData=function(b){a.instance&&a.instance.api&&a.instance.api.passData&&a.instance.api.passData(b)}}
"function"!=typeof DIL&&(DIL=function(a,b){var d=[],c,e;a!==Object(a)&&(a={});var f,h,m,u,s,v,w,q,x,H,I;f=a.partner;h=a.containerNSID;m=a.iframeAttachmentDelay;u=!!a.disableDestinationPublishingIframe;s=a.iframeAkamaiHTTPS;v=a.mappings;w=a.uuidCookie;q=!0===a.enableErrorReporting;x=a.visitorService;H=a.declaredId;I=!0===a.removeFinishedScriptsAndCallbacks;var J,K,E,C;J=!0===a.disableScriptAttachment;K=!0===a.disableDefaultRequest;E=a.afterResultForDefaultRequest;C=a.dpIframeSrc;q&&DIL.errorModule.activate();
var L=!0===window._dil_unit_tests;(c=b)&&d.push(c+"");if(!f||"string"!=typeof f)return c="DIL partner is invalid or not specified in initConfig",DIL.errorModule.handleError({name:"error",message:c,filename:"dil.js"}),Error(c);c="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";if(h||"number"==typeof h)h=parseInt(h,10),!isNaN(h)&&0<=h&&(c="");c&&(h=0,d.push(c),c="");e=DIL.getDil(f,h);if(e instanceof DIL&&e.api.getPartner()==f&&e.api.getContainerNSID()==h)return e;
if(this instanceof DIL)DIL.registerDil(this,f,h);else return new DIL(a,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = "+f+" and containerNSID = "+h);var y={IS_HTTPS:"https:"==document.location.protocol,POST_MESSAGE_ENABLED:!!window.postMessage,COOKIE_MAX_EXPIRATION_DATE:"Tue, 19 Jan 2038 03:14:07 UTC"},F={stuffed:{}},n={},p={firingQueue:[],fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},
callbackPrefix:"demdexRequestCallback",firstRequestHasFired:!1,useJSONP:!0,abortRequests:!1,num_of_jsonp_responses:0,num_of_jsonp_errors:0,num_of_img_responses:0,num_of_img_errors:0,toRemove:[],removed:[],readyToRemove:!1,platformParams:{d_nsid:h+"",d_rtbd:"json",d_jsonv:DIL.jsonVersion+"",d_dst:"1"},nonModStatsParams:{d_rtbd:!0,d_dst:!0,d_cts:!0,d_rs:!0},modStatsParams:null,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:2E3,calledBack:!1,uuid:null,noVisitorAPI:!1,instance:null,releaseType:"no VisitorAPI",
admsProcessingStarted:!1,process:function(g){try{if(!this.admsProcessingStarted){var a=this,l,k,c,b,d;if("function"==typeof g&&"function"==typeof g.getInstance){if(x===Object(x)&&(l=x.namespace)&&"string"==typeof l)k=g.getInstance(l);else{this.releaseType="no namespace";this.releaseRequests();return}if(k===Object(k)&&"function"==typeof k.isAllowed&&"function"==typeof k.getGlobalVisitorID){if(!k.isAllowed()){this.releaseType="VisitorAPI not allowed";this.releaseRequests();return}this.instance=k;this.admsProcessingStarted=
!0;c=function(g){"VisitorAPI"!=a.releaseType&&(a.uuid=g,a.releaseType="VisitorAPI",a.releaseRequests())};L&&(b=x.server)&&"string"==typeof b&&(k.server=b);d=k.getGlobalVisitorID(c);if("string"==typeof d&&d.length){c(d);return}setTimeout(function(){"VisitorAPI"!=a.releaseType&&(a.releaseType="timeout",a.releaseRequests())},this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE);return}this.releaseType="invalid instance"}else this.noVisitorAPI=!0;this.releaseRequests()}}catch(f){this.releaseRequests()}},releaseRequests:function(){this.calledBack=
!0;p.registerRequest()},getGlobalVisitorID:function(){return this.instance?this.instance.getGlobalVisitorID():null}},declaredId:{uuid:null,declaredId:{init:null,request:null},declaredIdCombos:{},dIdAlwaysOn:!1,dIdInRequest:!1,setDeclaredId:function(g,a){var l=t.isPopulatedString,k=encodeURIComponent;if(g===Object(g)&&l(a)){var c=g.dpid,d=g.dpuuid,b=null;if(l(c)&&l(d)){b=k(c)+"$"+k(d);if(!0===this.declaredIdCombos[b])return"setDeclaredId: combo exists for type '"+a+"'";this.declaredIdCombos[b]=!0;
this.declaredId[a]={dpid:c,dpuuid:d};"init"==a?this.dIdAlwaysOn=!0:"request"==a&&(this.dIdInRequest=!0);return"setDeclaredId: succeeded for type '"+a+"'"}}return"setDeclaredId: failed for type '"+a+"'"},getDeclaredIdQueryString:function(){var g=this.declaredId.request,a=this.declaredId.init,l="";null!==g?l="&d_dpid="+g.dpid+"&d_dpuuid="+g.dpuuid:null!==a&&(l="&d_dpid="+a.dpid+"&d_dpuuid="+a.dpuuid);return l},getUUIDQueryString:function(){var g=p.adms,a=t.isPopulatedString,l=!1,k=p.adms.getGlobalVisitorID();
a(this.uuid)?a(k)&&this.uuid!=k&&(this.uuid=k):this.uuid=k||g.uuid;if(this.dIdAlwaysOn||this.dIdInRequest)l=!0,this.dIdInRequest=!1;return a(this.uuid)&&l?"d_uuid="+this.uuid+"&":""}},registerRequest:function(g){var a=this.firingQueue;g===Object(g)&&a.push(g);!this.firing&&a.length&&(this.adms.calledBack?(g=a.shift(),g.src=g.src.replace(/demdex.net\/event\?d_nsid=/,"demdex.net/event?"+this.declaredId.getUUIDQueryString()+"d_nsid="),z.fireRequest(g),this.firstRequestHasFired||"script"!=g.tag||(this.firstRequestHasFired=
!0)):this.processVisitorAPI())},processVisitorAPI:function(){this.adms.process(window.Visitor)},requestRemoval:function(g){if(!I)return"removeFinishedScriptsAndCallbacks is not boolean true";var a=this.toRemove,l,k;g===Object(g)&&(l=g.script,k=g.callbackName,(l===Object(l)&&"SCRIPT"==l.nodeName||"no script created"==l)&&"string"==typeof k&&k.length&&a.push(g));if(this.readyToRemove&&a.length){k=a.shift();l=k.script;k=k.callbackName;"no script created"!=l?(g=l.src,l.parentNode.removeChild(l)):g=l;
window[k]=null;try{delete window[k]}catch(c){}this.removed.push({scriptSrc:g,callbackName:k});DIL.variables.scriptsRemoved.push(g);DIL.variables.callbacksRemoved.push(k);return this.requestRemoval()}return"requestRemoval() processed"}};e=function(){var g="http://fast.",a="?d_nsid="+h+"#"+encodeURIComponent(document.location.href);if("string"===typeof C&&C.length)return C+a;y.IS_HTTPS&&(g=!0===s?"https://fast.":"https://");return g+f+".demdex.net/dest4.html"+a};var A={THROTTLE_START:3E4,throttleTimerSet:!1,
id:"destination_publishing_iframe_"+f+"_"+h,url:e(),iframe:null,iframeHasLoaded:!1,sendingMessages:!1,messages:[],messagesPosted:[],messageSendingInterval:y.POST_MESSAGE_ENABLED?15:100,jsonProcessed:[],attachIframe:function(){var g=this,a=document.createElement("iframe");a.id=this.id;a.style.cssText="display: none; width: 0; height: 0;";a.src=this.url;r.addListener(a,"load",function(){g.iframeHasLoaded=!0;g.requestToProcess()});document.body.appendChild(a);this.iframe=a},requestToProcess:function(g,
a){var l=this;g&&!t.isEmptyObject(g)&&this.process(g,a);this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){l.messageSendingInterval=y.POST_MESSAGE_ENABLED?15:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},process:function(g,a){var l=encodeURIComponent,k,c,d,b,f,e;a===Object(a)&&(e=r.encodeAndBuildRequest([p.declaredId.uuid||"",a.dpid||"",a.dpuuid||""],","));if((k=g.dests)&&k instanceof
Array&&(c=k.length))for(d=0;d<c;d++)b=k[d],b=[l("dests"),l(b.id||""),l(b.y||""),l(b.c||"")],this.addMessage(b.join("|"));if((k=g.ibs)&&k instanceof Array&&(c=k.length))for(d=0;d<c;d++)b=k[d],b=[l("ibs"),l(b.id||""),l(b.tag||""),r.encodeAndBuildRequest(b.url||[],","),l(b.ttl||""),"",e],this.addMessage(b.join("|"));if((k=g.dpcalls)&&k instanceof Array&&(c=k.length))for(d=0;d<c;d++)b=k[d],f=b.callback||{},f=[f.obj||"",f.fn||"",f.key||"",f.tag||"",f.url||""],b=[l("dpm"),l(b.id||""),l(b.tag||""),r.encodeAndBuildRequest(b.url||
[],","),l(b.ttl||""),r.encodeAndBuildRequest(f,","),e],this.addMessage(b.join("|"));this.jsonProcessed.push(g)},addMessage:function(g){var a=encodeURIComponent,a=q?a("---destpub-debug---"):a("---destpub---");this.messages.push(a+g)},sendMessages:function(){var g=this,a;this.messages.length?(a=this.messages.shift(),DIL.xd.postMessage(a,this.url,this.iframe.contentWindow),this.messagesPosted.push(a),setTimeout(function(){g.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1}},G={traits:function(g){t.isValidPdata(g)&&
(n.sids instanceof Array||(n.sids=[]),r.extendArray(n.sids,g));return this},pixels:function(g){t.isValidPdata(g)&&(n.pdata instanceof Array||(n.pdata=[]),r.extendArray(n.pdata,g));return this},logs:function(g){t.isValidLogdata(g)&&(n.logdata!==Object(n.logdata)&&(n.logdata={}),r.extendObject(n.logdata,g));return this},customQueryParams:function(g){t.isEmptyObject(g)||r.extendObject(n,g,p.reservedKeys);return this},signals:function(g,a){var b,d=g;if(!t.isEmptyObject(d)){if(a&&"string"==typeof a)for(b in d=
{},g)g.hasOwnProperty(b)&&(d[a+b]=g[b]);r.extendObject(n,d,p.reservedKeys)}return this},declaredId:function(g){p.declaredId.setDeclaredId(g,"request");return this},result:function(g){"function"==typeof g&&(n.callback=g);return this},afterResult:function(g){"function"==typeof g&&(n.postCallbackFn=g);return this},useImageRequest:function(){n.useImageRequest=!0;return this},clearData:function(){n={};return this},submit:function(){z.submitRequest(n);n={};return this},getPartner:function(){return f},getContainerNSID:function(){return h},
getEventLog:function(){return d},getState:function(){var g={},a={};r.extendObject(g,p,{callbackPrefix:!0,useJSONP:!0,registerRequest:!0});r.extendObject(a,A,{attachIframe:!0,requestToProcess:!0,process:!0,sendMessages:!0});return{pendingRequest:n,otherRequestInfo:g,destinationPublishingInfo:a}},idSync:function(g){if(g!==Object(g)||"string"!=typeof g.dpid||!g.dpid.length)return"Error: config or config.dpid is empty";if("string"!=typeof g.url||!g.url.length)return"Error: config.url is empty";var a=
g.url,b=g.minutesToLive,d=encodeURIComponent,c=p.declaredId,a=a.replace(/^https:/,"").replace(/^http:/,"");if("undefined"==typeof b)b=20160;else if(b=parseInt(b,10),isNaN(b)||0>=b)return"Error: config.minutesToLive needs to be a positive number";c=r.encodeAndBuildRequest([p.adms.getGlobalVisitorID()||c.uuid||"",g.dpid,g.dpuuid||""],",");g=["ibs",d(g.dpid),"img",d(a),b,"",c];A.addMessage(g.join("|"));p.firstRequestHasFired&&A.requestToProcess();return"Successfully queued"},aamIdSync:function(a){if(a!==
Object(a)||"string"!=typeof a.dpuuid||!a.dpuuid.length)return"Error: config or config.dpuuid is empty";a.url="//dpm.demdex.net/ibs:dpid="+a.dpid+"&dpuuid="+a.dpuuid;return this.idSync(a)},passData:function(a){if(t.isEmptyObject(a))return"Error: json is empty or not an object";z.defaultCallback(a);return"json submitted for processing"},getPlatformParams:function(){return p.platformParams},getEventCallConfigParams:function(){var a=p,b=a.modStatsParams,d=a.platformParams,c;if(!b){b={};for(c in d)d.hasOwnProperty(c)&&
!a.nonModStatsParams[c]&&(b[c.replace(/^d_/,"")]=d[c]);a.modStatsParams=b}return b}},z={submitRequest:function(a){p.registerRequest(z.createQueuedRequest(a));return!0},createQueuedRequest:function(a){var b=p,d,c=a.callback,e="img";if(!t.isEmptyObject(v)){var B,q,s;for(B in v)v.hasOwnProperty(B)&&(q=v[B],null!=q&&""!==q&&B in a&&!(q in a||q in p.reservedKeys)&&(s=a[B],null!=s&&""!==s&&(a[q]=s)))}t.isValidPdata(a.sids)||(a.sids=[]);t.isValidPdata(a.pdata)||(a.pdata=[]);t.isValidLogdata(a.logdata)||
(a.logdata={});a.logdataArray=r.convertObjectToKeyValuePairs(a.logdata,"=",!0);a.logdataArray.push("_ts="+(new Date).getTime());"function"!=typeof c&&(c=this.defaultCallback);if(b.useJSONP=!a.useImageRequest||"boolean"!=typeof a.useImageRequest)e="script",d=b.callbackPrefix+"_"+f+"_"+h+"_"+(new Date).getTime();return{tag:e,src:z.makeRequestSrc(a,d),internalCallbackName:d,callbackFn:c,postCallbackFn:a.postCallbackFn,useImageRequest:a.useImageRequest,requestData:a}},defaultCallback:function(a,b){var d,
c,f,e,h,q,s,v,m;if((d=a.stuff)&&d instanceof Array&&(c=d.length))for(f=0;f<c;f++)if((e=d[f])&&e===Object(e)){h=e.cn;q=e.cv;s=e.ttl;if("undefined"==typeof s||""===s)s=Math.floor(r.getMaxCookieExpiresInMinutes()/60/24);v=e.dmn||"."+document.domain.replace(/^www\./,"");m=e.type;h&&(q||"number"==typeof q)&&("var"!=m&&(s=parseInt(s,10))&&!isNaN(s)&&r.setCookie(h,q,1440*s,"/",v,!1),F.stuffed[h]=q)}d=a.uuid;c=p.declaredId;f=t.isPopulatedString;f(d)&&(f(c.uuid)||(c.uuid=d),t.isEmptyObject(w)||(c=w.path,"string"==
typeof c&&c.length||(c="/"),f=parseInt(w.days,10),isNaN(f)&&(f=100),r.setCookie(w.name||"aam_did",d,1440*f,c,w.domain||"."+document.domain.replace(/^www\./,""),!0===w.secure)));u||p.abortRequests||A.requestToProcess(a,b)},makeRequestSrc:function(a,b){a.sids=t.removeEmptyArrayValues(a.sids||[]);a.pdata=t.removeEmptyArrayValues(a.pdata||[]);var d=p,c=d.platformParams,e=r.encodeAndBuildRequest(a.sids,","),h=r.encodeAndBuildRequest(a.pdata,","),q=(a.logdataArray||[]).join("&");delete a.logdataArray;var s=
y.IS_HTTPS?"https://":"http://",v=d.declaredId.getDeclaredIdQueryString(),m;m=[];var n,w,x,u;for(n in a)if(!(n in d.reservedKeys)&&a.hasOwnProperty(n))if(w=a[n],n=encodeURIComponent(n),w instanceof Array)for(x=0,u=w.length;x<u;x++)m.push(n+"="+encodeURIComponent(w[x]));else m.push(n+"="+encodeURIComponent(w));m=m.length?"&"+m.join("&"):"";return s+f+".demdex.net/event?d_nsid="+c.d_nsid+v+(e.length?"&d_sid="+e:"")+(h.length?"&d_px="+h:"")+(q.length?"&d_ld="+encodeURIComponent(q):"")+m+(d.useJSONP?
"&d_rtbd="+c.d_rtbd+"&d_jsonv="+c.d_jsonv+"&d_dst="+c.d_dst+"&d_cb="+(b||""):"")},fireRequest:function(a){if("img"==a.tag)this.fireImage(a);else if("script"==a.tag){var b=p.declaredId,b=b.declaredId.request||b.declaredId.init||{};this.fireScript(a,{dpid:b.dpid||"",dpuuid:b.dpuuid||""})}},fireImage:function(a){var b=p,f,e;b.abortRequests||(b.firing=!0,f=new Image(0,0),b.sent.push(a),f.onload=function(){b.firing=!1;b.fired.push(a);b.num_of_img_responses++;b.registerRequest()},e=function(f){c="imgAbortOrErrorHandler received the event of type "+
f.type;d.push(c);b.abortRequests=!0;b.firing=!1;b.errored.push(a);b.num_of_img_errors++;b.registerRequest()},f.addEventListener?(f.addEventListener("error",e,!1),f.addEventListener("abort",e,!1)):f.attachEvent&&(f.attachEvent("onerror",e),f.attachEvent("onabort",e)),f.src=a.src)},fireScript:function(a,b){var e=this,k=p,h,q,s=a.src,m=a.postCallbackFn,v="function"==typeof m,n=a.internalCallbackName;k.abortRequests||(k.firing=!0,window[n]=function(e){try{e!==Object(e)&&(e={});var l=a.callbackFn;k.firing=
!1;k.fired.push(a);k.num_of_jsonp_responses++;l(e,b);v&&m(e,b)}catch(h){h.message="DIL jsonp callback caught error with message "+h.message;c=h.message;d.push(c);h.filename=h.filename||"dil.js";h.partner=f;DIL.errorModule.handleError(h);try{l({error:h.name+"|"+h.message}),v&&m({error:h.name+"|"+h.message})}catch(s){}}finally{k.requestRemoval({script:q,callbackName:n}),k.registerRequest()}},J?(k.firing=!1,k.requestRemoval({script:"no script created",callbackName:n})):(q=document.createElement("script"),
q.addEventListener&&q.addEventListener("error",function(b){k.requestRemoval({script:q,callbackName:n});c="jsonp script tag error listener received the event of type "+b.type+" with src "+s;e.handleScriptError(c,a)},!1),q.type="text/javascript",q.src=s,h=DIL.variables.scriptNodeList[0],h.parentNode.insertBefore(q,h)),k.sent.push(a),k.declaredId.declaredId.request=null)},handleScriptError:function(a,b){var c=p;d.push(a);c.abortRequests=!0;c.firing=!1;c.errored.push(b);c.num_of_jsonp_errors++;c.registerRequest()}},
t={isValidPdata:function(a){return a instanceof Array&&this.removeEmptyArrayValues(a).length?!0:!1},isValidLogdata:function(a){return!this.isEmptyObject(a)},isEmptyObject:function(a){if(a!==Object(a))return!0;for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},removeEmptyArrayValues:function(a){for(var b=0,c=a.length,d,f=[],b=0;b<c;b++)d=a[b],"undefined"!=typeof d&&null!=d&&f.push(d);return f},isPopulatedString:function(a){return"string"==typeof a&&a.length}},r={addListener:function(){if(document.addEventListener)return function(a,
b,d){a.addEventListener(b,function(a){"function"==typeof d&&d(a)},!1)};if(document.attachEvent)return function(a,b,d){a.attachEvent("on"+b,function(a){"function"==typeof d&&d(a)})}}(),convertObjectToKeyValuePairs:function(a,b,d){var c=[];b=b||"=";var f,e;for(f in a)e=a[f],"undefined"!=typeof e&&null!=e&&c.push(f+b+(d?encodeURIComponent(e):e));return c},encodeAndBuildRequest:function(a,b){return this.map(a,function(a){return encodeURIComponent(a)}).join(b)},map:function(a,b){if(Array.prototype.map)return a.map(b);
if(void 0===a||null===a)throw new TypeError;var d=Object(a),c=d.length>>>0;if("function"!==typeof b)throw new TypeError;for(var f=Array(c),e=0;e<c;e++)e in d&&(f[e]=b.call(b,d[e],e,d));return f},filter:function(a,b){if(!Array.prototype.filter){if(void 0===a||null===a)throw new TypeError;var d=Object(a),c=d.length>>>0;if("function"!==typeof b)throw new TypeError;for(var f=[],e=0;e<c;e++)if(e in d){var h=d[e];b.call(b,h,e,d)&&f.push(h)}return f}return a.filter(b)},getCookie:function(a){a+="=";var b=
document.cookie.split(";"),d,c,e;d=0;for(c=b.length;d<c;d++){for(e=b[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(a))return decodeURIComponent(e.substring(a.length,e.length))}return null},setCookie:function(a,b,d,c,e,f){var h=new Date;d&&(d*=6E4);document.cookie=a+"="+encodeURIComponent(b)+(d?";expires="+(new Date(h.getTime()+d)).toUTCString():"")+(c?";path="+c:"")+(e?";domain="+e:"")+(f?";secure":"")},extendArray:function(a,b){return a instanceof Array&&b instanceof Array?(Array.prototype.push.apply(a,
b),!0):!1},extendObject:function(a,b,d){var c;if(a===Object(a)&&b===Object(b)){for(c in b)!b.hasOwnProperty(c)||!t.isEmptyObject(d)&&c in d||(a[c]=b[c]);return!0}return!1},getMaxCookieExpiresInMinutes:function(){return((new Date(y.COOKIE_MAX_EXPIRATION_DATE)).getTime()-(new Date).getTime())/1E3/60}};"error"==f&&0==h&&r.addListener(window,"load",function(){DIL.windowLoaded=!0});var D=function(){N();u||p.abortRequests||A.attachIframe();p.readyToRemove=!0;p.requestRemoval()},N=function(){u||setTimeout(function(){K||
p.firstRequestHasFired||p.adms.admsProcessingStarted||p.adms.calledBack||("function"==typeof E?G.afterResult(E).submit():G.submit())},DIL.constants.TIME_TO_DEFAULT_REQUEST)},M=document;"error"!=f&&(DIL.windowLoaded?D():"complete"!=M.readyState&&"loaded"!=M.readyState?r.addListener(window,"load",D):DIL.isAddedPostWindowLoadWasCalled?r.addListener(window,"load",D):(m="number"==typeof m?parseInt(m,10):0,0>m&&(m=0),setTimeout(D,m||DIL.constants.TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT)));p.declaredId.setDeclaredId(H,
"init");this.api=G;this.getStuffedVariable=function(a){var b=F.stuffed[a];b||"number"==typeof b||(b=r.getCookie(a))||"number"==typeof b||(b="");return b};this.validators=t;this.helpers=r;this.constants=y;this.log=d;L&&(this.pendingRequest=n,this.requestController=p,this.setDestinationPublishingUrl=e,this.destinationPublishing=A,this.requestProcs=z,this.variables=F)},function(){var a=document,b;null==a.readyState&&a.addEventListener&&(a.readyState="loading",a.addEventListener("DOMContentLoaded",b=
function(){a.removeEventListener("DOMContentLoaded",b,!1);a.readyState="complete"},!1))}(),DIL.extendStaticPropertiesAndMethods=function(a){var b;if(a===Object(a))for(b in a)a.hasOwnProperty(b)&&(this[b]=a[b])},DIL.extendStaticPropertiesAndMethods({version:"4.8",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:50,TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT:500},variables:{scriptNodeList:document.getElementsByTagName("script"),scriptsRemoved:[],callbacksRemoved:[]},windowLoaded:!1,dils:{},isAddedPostWindowLoadWasCalled:!1,
isAddedPostWindowLoad:function(a){this.isAddedPostWindowLoadWasCalled=!0;this.windowLoaded="function"==typeof a?!!a():"boolean"==typeof a?a:!0},create:function(a){try{return new DIL(a)}catch(b){return(new Image(0,0)).src="http://error.demdex.net/event?d_nsid=0&d_px=14137&d_ld=name%3Derror%26filename%3Ddil.js%26partner%3Dno_partner%26message%3DError%2520in%2520attempt%2520to%2520create%2520DIL%2520instance%2520with%2520DIL.create()%26_ts%3D"+(new Date).getTime(),Error("Error in attempt to create DIL instance with DIL.create()")}},
registerDil:function(a,b,d){b=b+"$"+d;b in this.dils||(this.dils[b]=a)},getDil:function(a,b){var d;"string"!=typeof a&&(a="");b||(b=0);d=a+"$"+b;return d in this.dils?this.dils[d]:Error("The DIL instance with partner = "+a+" and containerNSID = "+b+" was not found")},dexGetQSVars:function(a,b,d){b=this.getDil(b,d);return b instanceof this?b.getStuffedVariable(a):""},xd:{postMessage:function(a,b,d){var c=1;b&&(window.postMessage?d.postMessage(a,b.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):b&&(d.location=
b.replace(/#.*$/,"")+"#"+ +new Date+c++ +"&"+a))}}}),DIL.errorModule=function(){var a=DIL.create({partner:"error",containerNSID:0,disableDestinationPublishingIframe:!0}),b={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020},d=!1;return{activate:function(){d=!0},handleError:function(c){if(!d)return"DIL error module has not been activated";c!==Object(c)&&
(c={});var e=c.name?(new String(c.name)).toLowerCase():"",f=[];c={name:e,filename:c.filename?c.filename+"":"",partner:c.partner?c.partner+"":"no_partner",site:c.site?c.site+"":document.location.href,message:c.message?c.message+"":""};f.push(e in b?b[e]:b.noerrortypedefined);a.api.pixels(f).logs(c).useImageRequest().submit();return"DIL error report sent"},pixelMap:b}}(),DIL.tools={},DIL.modules={helpers:{handleModuleError:function(a,b,d){var c="";b=b||"Error caught in DIL module/submodule: ";a===Object(a)?
c=b+(a.message||"err has no message"):(c=b+"err is not a valid object",a={});a.message=c;d instanceof DIL&&(a.partner=d.api.getPartner());DIL.errorModule.handleError(a);return this.errorMessage=c}}});
DIL.tools.getSearchReferrer=function(a,b){var d=DIL.getDil("error"),c=DIL.tools.decomposeURI(a||document.referrer),e="",f="",h={queryParam:"q"};return(e=d.helpers.filter([b===Object(b)?b:{},{hostPattern:/aol\./},{hostPattern:/ask\./},{hostPattern:/bing\./},{hostPattern:/google\./},{hostPattern:/yahoo\./,queryParam:"p"}],function(a){return!(!a.hasOwnProperty("hostPattern")||!c.hostname.match(a.hostPattern))}).shift())?{valid:!0,name:c.hostname,keywords:(d.helpers.extendObject(h,e),f=h.queryPattern?
(e=(""+c.search).match(h.queryPattern))?e[1]:"":c.uriParams[h.queryParam],decodeURIComponent(f||"").replace(/\+|%20/g," "))}:{valid:!1,name:"",keywords:""}};
DIL.tools.decomposeURI=function(a){var b=DIL.getDil("error"),d=document.createElement("a");d.href=a||document.referrer;return{hash:d.hash,host:d.host.split(":").shift(),hostname:d.hostname,href:d.href,pathname:d.pathname.replace(/^\//,""),protocol:d.protocol,search:d.search,uriParams:function(a,d){b.helpers.map(d.split("&"),function(b){b=b.split("=");a[b.shift()]=b.shift()});return a}({},d.search.replace(/^(\/|\?)?|\/$/g,""))}};
DIL.tools.getMetaTags=function(){var a={},b=document.getElementsByTagName("meta"),d,c,e,f,h;d=0;for(e=arguments.length;d<e;d++)if(f=arguments[d],null!==f)for(c=0;c<b.length;c++)if(h=b[c],h.name==f){a[f]=h.content;break}return a};
DIL.modules.siteCatalyst={dil:null,handle:DIL.modules.helpers.handleModuleError,init:function(a,b,d){try{var c=this,e={name:"DIL Site Catalyst Module Error"},f=function(a){e.message=a;DIL.errorModule.handleError(e);return a};this.dil=null;if(b instanceof DIL)this.dil=b;else return f("dilInstance is not a valid instance of DIL");e.partner=b.api.getPartner();if(a!==Object(a))return f("siteCatalystReportingSuite is not an object");window.AppMeasurement_Module_DIL=a.m_DIL=function(a){var b="function"===
typeof a.m_i?a.m_i("DIL"):this;if(b!==Object(b))return f("m is not an object");b.trackVars=c.constructTrackVars(d);b.d=0;b.s=a;b._t=function(){var a,b,d=","+this.trackVars+",",c=this.s,e,h=[];e=[];var m={},u=!1;if(c!==Object(c))return f("Error in m._t function: s is not an object");if(this.d){if("function"==typeof c.foreachVar)c.foreachVar(function(a,b){m[a]=b;u=!0},this.trackVars);else{if(!(c.va_t instanceof Array))return f("Error in m._t function: s.va_t is not an array");if(c.lightProfileID)(a=
c.lightTrackVars)&&(a=","+a+","+c.vl_mr+",");else if(c.pe||c.linkType)a=c.linkTrackVars,c.pe&&(b=c.pe.substring(0,1).toUpperCase()+c.pe.substring(1),c[b]&&(a=c[b].trackVars)),a&&(a=","+a+","+c.vl_l+","+c.vl_l2+",");if(a){b=0;for(h=a.split(",");b<h.length;b++)0<=d.indexOf(","+h[b]+",")&&e.push(h[b]);e.length&&(d=","+e.join(",")+",")}e=0;for(b=c.va_t.length;e<b;e++)a=c.va_t[e],0<=d.indexOf(","+a+",")&&null!=c[a]&&""!==c[a]&&(m[a]=c[a],u=!0)}u&&this.d.api.signals(m,"c_").submit()}}};a.loadModule("DIL");
a.DIL.d=b;return e.message?e.message:"DIL.modules.siteCatalyst.init() completed with no errors"}catch(h){return this.handle(h,"DIL.modules.siteCatalyst.init() caught error with message ",this.dil)}},constructTrackVars:function(a){var b=[],d,c,e,f,h;if(a===Object(a)){d=a.names;if(d instanceof Array&&(e=d.length))for(c=0;c<e;c++)f=d[c],"string"==typeof f&&f.length&&b.push(f);a=a.iteratedNames;if(a instanceof Array&&(e=a.length))for(c=0;c<e;c++)if(d=a[c],d===Object(d)&&(f=d.name,h=parseInt(d.maxIndex,
10),"string"==typeof f&&f.length&&!isNaN(h)&&0<=h))for(d=0;d<=h;d++)b.push(f+d);if(b.length)return b.join(",")}return this.constructTrackVars({names:"pageName channel campaign products events pe pev1 pev2 pev3".split(" "),iteratedNames:[{name:"prop",maxIndex:75},{name:"eVar",maxIndex:75}]})}};
DIL.modules.GA={dil:null,arr:null,tv:null,errorMessage:"",defaultTrackVars:["_setAccount","_setCustomVar","_addItem","_addTrans","_trackSocial"],defaultTrackVarsObj:null,signals:{},hasSignals:!1,handle:DIL.modules.helpers.handleModuleError,init:function(a,b,d){try{this.tv=this.arr=this.dil=null;this.errorMessage="";this.signals={};this.hasSignals=!1;var c={name:"DIL GA Module Error"},e="";b instanceof DIL?(this.dil=b,c.partner=this.dil.api.getPartner()):(e="dilInstance is not a valid instance of DIL",
c.message=e,DIL.errorModule.handleError(c));a instanceof Array&&a.length?this.arr=a:(e="gaArray is not an array or is empty",c.message=e,DIL.errorModule.handleError(c));this.tv=this.constructTrackVars(d);this.errorMessage=e}catch(f){this.handle(f,"DIL.modules.GA.init() caught error with message ",this.dil)}finally{return this}},constructTrackVars:function(a){var b=[],d,c,e,f;if(this.defaultTrackVarsObj!==Object(this.defaultTrackVarsObj)){e=this.defaultTrackVars;f={};d=0;for(c=e.length;d<c;d++)f[e[d]]=
!0;this.defaultTrackVarsObj=f}else f=this.defaultTrackVarsObj;if(a===Object(a)){a=a.names;if(a instanceof Array&&(c=a.length))for(d=0;d<c;d++)e=a[d],"string"==typeof e&&e.length&&e in f&&b.push(e);if(b.length)return b}return this.defaultTrackVars},constructGAObj:function(a){var b={};a=a instanceof Array?a:this.arr;var d,c,e,f;d=0;for(c=a.length;d<c;d++)e=a[d],e instanceof Array&&e.length&&(e=[],f=a[d],e instanceof Array&&f instanceof Array&&Array.prototype.push.apply(e,f),f=e.shift(),"string"==typeof f&&
f.length&&(b[f]instanceof Array||(b[f]=[]),b[f].push(e)));return b},addToSignals:function(a,b){if("string"!=typeof a||""===a||null==b||""===b)return!1;this.signals[a]instanceof Array||(this.signals[a]=[]);this.signals[a].push(b);return this.hasSignals=!0},constructSignals:function(){var a=this.constructGAObj(),b={_setAccount:function(a){this.addToSignals("c_accountId",a)},_setCustomVar:function(a,b,c,d){"string"==typeof b&&b.length&&this.addToSignals("c_"+b,c)},_addItem:function(a,b,c,d,e,f){this.addToSignals("c_itemOrderId",
a);this.addToSignals("c_itemSku",b);this.addToSignals("c_itemName",c);this.addToSignals("c_itemCategory",d);this.addToSignals("c_itemPrice",e);this.addToSignals("c_itemQuantity",f)},_addTrans:function(a,b,c,d,e,f,h,m){this.addToSignals("c_transOrderId",a);this.addToSignals("c_transAffiliation",b);this.addToSignals("c_transTotal",c);this.addToSignals("c_transTax",d);this.addToSignals("c_transShipping",e);this.addToSignals("c_transCity",f);this.addToSignals("c_transState",h);this.addToSignals("c_transCountry",
m)},_trackSocial:function(a,b,c,d){this.addToSignals("c_socialNetwork",a);this.addToSignals("c_socialAction",b);this.addToSignals("c_socialTarget",c);this.addToSignals("c_socialPagePath",d)}},d=this.tv,c,e,f,h,m,u;c=0;for(e=d.length;c<e;c++)if(f=d[c],a.hasOwnProperty(f)&&b.hasOwnProperty(f)&&(u=a[f],u instanceof Array))for(h=0,m=u.length;h<m;h++)b[f].apply(this,u[h])},submit:function(){try{if(""!==this.errorMessage)return this.errorMessage;this.constructSignals();return this.hasSignals?(this.dil.api.signals(this.signals).submit(),
"Signals sent: "+this.dil.helpers.convertObjectToKeyValuePairs(this.signals,"=",!0)+this.dil.log):"No signals present"}catch(a){return this.handle(a,"DIL.modules.GA.submit() caught error with message ",this.dil)}},Stuffer:{LIMIT:5,dil:null,cookieName:null,delimiter:null,errorMessage:"",handle:DIL.modules.helpers.handleModuleError,callback:null,v:function(){return!1},init:function(a,b,d){try{this.callback=this.dil=null,this.errorMessage="",a instanceof DIL?(this.dil=a,this.v=this.dil.validators.isPopulatedString,
this.cookieName=this.v(b)?b:"aam_ga",this.delimiter=this.v(d)?d:"|"):this.handle({message:"dilInstance is not a valid instance of DIL"},"DIL.modules.GA.Stuffer.init() error: ")}catch(c){this.handle(c,"DIL.modules.GA.Stuffer.init() caught error with message ",this.dil)}finally{return this}},process:function(a){var b,d,c,e,f,h;h=!1;var m=1;if(a===Object(a)&&(b=a.stuff)&&b instanceof Array&&(d=b.length))for(a=0;a<d;a++)if((c=b[a])&&c===Object(c)&&(e=c.cn,f=c.cv,e==this.cookieName&&this.v(f))){h=!0;break}if(h){b=
f.split(this.delimiter);"undefined"==typeof window._gaq&&(window._gaq=[]);c=window._gaq;a=0;for(d=b.length;a<d&&!(h=b[a].split("="),f=h[0],h=h[1],this.v(f)&&this.v(h)&&c.push(["_setCustomVar",m++,f,h,1]),m>this.LIMIT);a++);this.errorMessage=1<m?"No errors - stuffing successful":"No valid values to stuff"}else this.errorMessage="Cookie name and value not found in json";if("function"==typeof this.callback)return this.callback()},submit:function(){try{var a=this;if(""!==this.errorMessage)return this.errorMessage;
this.dil.api.afterResult(function(b){a.process(b)}).submit();return"DIL.modules.GA.Stuffer.submit() successful"}catch(b){return this.handle(b,"DIL.modules.GA.Stuffer.submit() caught error with message ",this.dil)}}}};
DIL.modules.Peer39={aid:"",dil:null,optionals:null,errorMessage:"",calledBack:!1,script:null,scriptsSent:[],returnedData:[],handle:DIL.modules.helpers.handleModuleError,init:function(a,b,d){try{this.dil=null;this.errorMessage="";this.calledBack=!1;this.optionals=d===Object(d)?d:{};d={name:"DIL Peer39 Module Error"};var c=[],e="";this.isSecurePageButNotEnabled(document.location.protocol)&&(e="Module has not been enabled for a secure page",c.push(e),d.message=e,DIL.errorModule.handleError(d));b instanceof
DIL?(this.dil=b,d.partner=this.dil.api.getPartner()):(e="dilInstance is not a valid instance of DIL",c.push(e),d.message=e,DIL.errorModule.handleError(d));"string"==typeof a&&a.length?this.aid=a:(e="aid is not a string or is empty",c.push(e),d.message=e,DIL.errorModule.handleError(d));this.errorMessage=c.join("\n")}catch(f){this.handle(f,"DIL.modules.Peer39.init() caught error with message ",this.dil)}finally{return this}},isSecurePageButNotEnabled:function(a){return"https:"==a&&!0!==this.optionals.enableHTTPS?
!0:!1},constructSignals:function(){var a=this,b=this.constructScript(),d=DIL.variables.scriptNodeList[0];window["afterFinished_"+this.aid]=function(){try{var b=a.processData(p39_KVP_Short("c_p","|").split("|"));b.hasSignals&&a.dil.api.signals(b.signals).submit()}catch(d){}finally{a.calledBack=!0,"function"==typeof a.optionals.afterResult&&a.optionals.afterResult()}};d.parentNode.insertBefore(b,d);this.scriptsSent.push(b);return"Request sent to Peer39"},processData:function(a){var b,d,c,e,f={},h=!1;
this.returnedData.push(a);if(a instanceof Array)for(b=0,d=a.length;b<d;b++)c=a[b].split("="),e=c[0],c=c[1],e&&isFinite(c)&&!isNaN(parseInt(c,10))&&(f[e]instanceof Array||(f[e]=[]),f[e].push(c),h=!0);return{hasSignals:h,signals:f}},constructScript:function(){var a=document.createElement("script"),b=this.optionals,d=b.scriptId,c=b.scriptSrc,b=b.scriptParams;a.id="string"==typeof d&&d.length?d:"peer39ScriptLoader";a.type="text/javascript";"string"==typeof c&&c.length?a.src=c:(a.src=(this.dil.constants.IS_HTTPS?
"https:":"http:")+"//stags.peer39.net/"+this.aid+"/trg_"+this.aid+".js","string"==typeof b&&b.length&&(a.src+="?"+b));return a},submit:function(){try{return""!==this.errorMessage?this.errorMessage:this.constructSignals()}catch(a){return this.handle(a,"DIL.modules.Peer39.submit() caught error with message ",this.dil)}}};

var hoge = DIL.create({
      partner : "sing",
      containerNSID : 0
});

// DIL SC Module
s = s_gi(s_account); // You must specify a SC reporting suite!

DIL.modules.siteCatalyst.init(s, hoge, {
names: ['pageName', 'channel', 'campaign', 'products', 'events', 'pe', 'referrer', 'server', 'purchaseID', 'zip', 'state'],
        	iteratedNames: [{
               name: 'eVar',
               maxIndex: 75
        	}, {
               name: 'prop',
               maxIndex: 75
        	}, {
               name: 'pev',
               maxIndex: 3
        	}, {
               name: 'hier',
               maxIndex: 4
        	}]
});