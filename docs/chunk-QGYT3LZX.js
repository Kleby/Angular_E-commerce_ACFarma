import{a as C1,b as I3,c as U3,d as P,j as U2,n as q3,p as L1,r as q2}from"./chunk-YVO2R5V7.js";import{A as H3,Aa as t2,Ba as x3,Ca as N3,Da as b3,Ea as y3,Fa as w3,G as z3,Ga as S3,Ha as k3,Ia as c2,Ib as M1,Ja as A3,Ma as V2,N as u3,Oa as G,Q as j,Ra as T3,Sa as P3,T as u2,V as z1,Vb as O3,W as B2,X as V3,Xa as a2,a as H2,aa as p3,b as m3,ba as d3,ca as y,cb as R3,d as v1,da as O2,fa as D,g as h1,ga as u1,gb as D3,ha as M3,ia as Z,ka as V1,m as v3,ma as M,n as H1,na as F,qa as p1,r as z2,ra as C3,sa as L3,sb as E3,ta as g3,ua as I2,xb as F3,y as h3,ya as d1,yb as B3,za as o2}from"./chunk-HUCQMTP6.js";var d2=class{},M2=class{},B=class c{constructor(a){this.normalizedNames=new Map,this.lazyUpdate=null,a?typeof a=="string"?this.lazyInit=()=>{this.headers=new Map,a.split(`
`).forEach(s=>{let e=s.indexOf(":");if(e>0){let r=s.slice(0,e),i=r.toLowerCase(),n=s.slice(e+1).trim();this.maybeSetNormalizedName(r,i),this.headers.has(i)?this.headers.get(i).push(n):this.headers.set(i,[n])}})}:typeof Headers<"u"&&a instanceof Headers?(this.headers=new Map,a.forEach((s,e)=>{this.setHeaderEntries(e,s)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(a).forEach(([s,e])=>{this.setHeaderEntries(s,e)})}:this.headers=new Map}has(a){return this.init(),this.headers.has(a.toLowerCase())}get(a){this.init();let s=this.headers.get(a.toLowerCase());return s&&s.length>0?s[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(a){return this.init(),this.headers.get(a.toLowerCase())||null}append(a,s){return this.clone({name:a,value:s,op:"a"})}set(a,s){return this.clone({name:a,value:s,op:"s"})}delete(a,s){return this.clone({name:a,value:s,op:"d"})}maybeSetNormalizedName(a,s){this.normalizedNames.has(s)||this.normalizedNames.set(s,a)}init(){this.lazyInit&&(this.lazyInit instanceof c?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(a=>this.applyUpdate(a)),this.lazyUpdate=null))}copyFrom(a){a.init(),Array.from(a.headers.keys()).forEach(s=>{this.headers.set(s,a.headers.get(s)),this.normalizedNames.set(s,a.normalizedNames.get(s))})}clone(a){let s=new c;return s.lazyInit=this.lazyInit&&this.lazyInit instanceof c?this.lazyInit:this,s.lazyUpdate=(this.lazyUpdate||[]).concat([a]),s}applyUpdate(a){let s=a.name.toLowerCase();switch(a.op){case"a":case"s":let e=a.value;if(typeof e=="string"&&(e=[e]),e.length===0)return;this.maybeSetNormalizedName(a.name,s);let r=(a.op==="a"?this.headers.get(s):void 0)||[];r.push(...e),this.headers.set(s,r);break;case"d":let i=a.value;if(!i)this.headers.delete(s),this.normalizedNames.delete(s);else{let n=this.headers.get(s);if(!n)return;n=n.filter(o=>i.indexOf(o)===-1),n.length===0?(this.headers.delete(s),this.normalizedNames.delete(s)):this.headers.set(s,n)}break}}setHeaderEntries(a,s){let e=(Array.isArray(s)?s:[s]).map(i=>i.toString()),r=a.toLowerCase();this.headers.set(r,e),this.maybeSetNormalizedName(a,r)}forEach(a){this.init(),Array.from(this.normalizedNames.keys()).forEach(s=>a(this.normalizedNames.get(s),this.headers.get(s)))}};var N1=class{encodeKey(a){return W3(a)}encodeValue(a){return W3(a)}decodeKey(a){return decodeURIComponent(a)}decodeValue(a){return decodeURIComponent(a)}};function H6(c,a){let s=new Map;return c.length>0&&c.replace(/^\?/,"").split("&").forEach(r=>{let i=r.indexOf("="),[n,o]=i==-1?[a.decodeKey(r),""]:[a.decodeKey(r.slice(0,i)),a.decodeValue(r.slice(i+1))],t=s.get(n)||[];t.push(o),s.set(n,t)}),s}var z6=/%(\d[a-f0-9])/gi,u6={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function W3(c){return encodeURIComponent(c).replace(z6,(a,s)=>u6[s]??a)}function W2(c){return`${c}`}var $=class c{constructor(a={}){if(this.updates=null,this.cloneFrom=null,this.encoder=a.encoder||new N1,a.fromString){if(a.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=H6(a.fromString,this.encoder)}else a.fromObject?(this.map=new Map,Object.keys(a.fromObject).forEach(s=>{let e=a.fromObject[s],r=Array.isArray(e)?e.map(W2):[W2(e)];this.map.set(s,r)})):this.map=null}has(a){return this.init(),this.map.has(a)}get(a){this.init();let s=this.map.get(a);return s?s[0]:null}getAll(a){return this.init(),this.map.get(a)||null}keys(){return this.init(),Array.from(this.map.keys())}append(a,s){return this.clone({param:a,value:s,op:"a"})}appendAll(a){let s=[];return Object.keys(a).forEach(e=>{let r=a[e];Array.isArray(r)?r.forEach(i=>{s.push({param:e,value:i,op:"a"})}):s.push({param:e,value:r,op:"a"})}),this.clone(s)}set(a,s){return this.clone({param:a,value:s,op:"s"})}delete(a,s){return this.clone({param:a,value:s,op:"d"})}toString(){return this.init(),this.keys().map(a=>{let s=this.encoder.encodeKey(a);return this.map.get(a).map(e=>s+"="+this.encoder.encodeValue(e)).join("&")}).filter(a=>a!=="").join("&")}clone(a){let s=new c({encoder:this.encoder});return s.cloneFrom=this.cloneFrom||this,s.updates=(this.updates||[]).concat(a),s}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(a=>this.map.set(a,this.cloneFrom.map.get(a))),this.updates.forEach(a=>{switch(a.op){case"a":case"s":let s=(a.op==="a"?this.map.get(a.param):void 0)||[];s.push(W2(a.value)),this.map.set(a.param,s);break;case"d":if(a.value!==void 0){let e=this.map.get(a.param)||[],r=e.indexOf(W2(a.value));r!==-1&&e.splice(r,1),e.length>0?this.map.set(a.param,e):this.map.delete(a.param)}else{this.map.delete(a.param);break}}}),this.cloneFrom=this.updates=null)}};var b1=class{constructor(){this.map=new Map}set(a,s){return this.map.set(a,s),this}get(a){return this.map.has(a)||this.map.set(a,a.defaultValue()),this.map.get(a)}delete(a){return this.map.delete(a),this}has(a){return this.map.has(a)}keys(){return this.map.keys()}};function V6(c){switch(c){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function j3(c){return typeof ArrayBuffer<"u"&&c instanceof ArrayBuffer}function G3(c){return typeof Blob<"u"&&c instanceof Blob}function _3(c){return typeof FormData<"u"&&c instanceof FormData}function p6(c){return typeof URLSearchParams<"u"&&c instanceof URLSearchParams}var p2=class c{constructor(a,s,e,r){this.url=s,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=a.toUpperCase();let i;if(V6(this.method)||r?(this.body=e!==void 0?e:null,i=r):i=e,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers??=new B,this.context??=new b1,!this.params)this.params=new $,this.urlWithParams=s;else{let n=this.params.toString();if(n.length===0)this.urlWithParams=s;else{let o=s.indexOf("?"),t=o===-1?"?":o<s.length-1?"&":"";this.urlWithParams=s+t+n}}}serializeBody(){return this.body===null?null:j3(this.body)||G3(this.body)||_3(this.body)||p6(this.body)||typeof this.body=="string"?this.body:this.body instanceof $?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||_3(this.body)?null:G3(this.body)?this.body.type||null:j3(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof $?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(a={}){let s=a.method||this.method,e=a.url||this.url,r=a.responseType||this.responseType,i=a.body!==void 0?a.body:this.body,n=a.withCredentials!==void 0?a.withCredentials:this.withCredentials,o=a.reportProgress!==void 0?a.reportProgress:this.reportProgress,t=a.headers||this.headers,f=a.params||this.params,l=a.context??this.context;return a.setHeaders!==void 0&&(t=Object.keys(a.setHeaders).reduce((m,H)=>m.set(H,a.setHeaders[H]),t)),a.setParams&&(f=Object.keys(a.setParams).reduce((m,H)=>m.set(H,a.setParams[H]),f)),new c(s,e,i,{params:f,headers:t,context:l,reportProgress:o,responseType:r,withCredentials:n})}},X=function(c){return c[c.Sent=0]="Sent",c[c.UploadProgress=1]="UploadProgress",c[c.ResponseHeader=2]="ResponseHeader",c[c.DownloadProgress=3]="DownloadProgress",c[c.Response=4]="Response",c[c.User=5]="User",c}(X||{}),C2=class{constructor(a,s=g2.Ok,e="OK"){this.headers=a.headers||new B,this.status=a.status!==void 0?a.status:s,this.statusText=a.statusText||e,this.url=a.url||null,this.ok=this.status>=200&&this.status<300}},j2=class c extends C2{constructor(a={}){super(a),this.type=X.ResponseHeader}clone(a={}){return new c({headers:a.headers||this.headers,status:a.status!==void 0?a.status:this.status,statusText:a.statusText||this.statusText,url:a.url||this.url||void 0})}},L2=class c extends C2{constructor(a={}){super(a),this.type=X.Response,this.body=a.body!==void 0?a.body:null}clone(a={}){return new c({body:a.body!==void 0?a.body:this.body,headers:a.headers||this.headers,status:a.status!==void 0?a.status:this.status,statusText:a.statusText||this.statusText,url:a.url||this.url||void 0})}},_=class extends C2{constructor(a){super(a,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${a.url||"(unknown url)"}`:this.message=`Http failure response for ${a.url||"(unknown url)"}: ${a.status} ${a.statusText}`,this.error=a.error||null}},g2=function(c){return c[c.Continue=100]="Continue",c[c.SwitchingProtocols=101]="SwitchingProtocols",c[c.Processing=102]="Processing",c[c.EarlyHints=103]="EarlyHints",c[c.Ok=200]="Ok",c[c.Created=201]="Created",c[c.Accepted=202]="Accepted",c[c.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",c[c.NoContent=204]="NoContent",c[c.ResetContent=205]="ResetContent",c[c.PartialContent=206]="PartialContent",c[c.MultiStatus=207]="MultiStatus",c[c.AlreadyReported=208]="AlreadyReported",c[c.ImUsed=226]="ImUsed",c[c.MultipleChoices=300]="MultipleChoices",c[c.MovedPermanently=301]="MovedPermanently",c[c.Found=302]="Found",c[c.SeeOther=303]="SeeOther",c[c.NotModified=304]="NotModified",c[c.UseProxy=305]="UseProxy",c[c.Unused=306]="Unused",c[c.TemporaryRedirect=307]="TemporaryRedirect",c[c.PermanentRedirect=308]="PermanentRedirect",c[c.BadRequest=400]="BadRequest",c[c.Unauthorized=401]="Unauthorized",c[c.PaymentRequired=402]="PaymentRequired",c[c.Forbidden=403]="Forbidden",c[c.NotFound=404]="NotFound",c[c.MethodNotAllowed=405]="MethodNotAllowed",c[c.NotAcceptable=406]="NotAcceptable",c[c.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",c[c.RequestTimeout=408]="RequestTimeout",c[c.Conflict=409]="Conflict",c[c.Gone=410]="Gone",c[c.LengthRequired=411]="LengthRequired",c[c.PreconditionFailed=412]="PreconditionFailed",c[c.PayloadTooLarge=413]="PayloadTooLarge",c[c.UriTooLong=414]="UriTooLong",c[c.UnsupportedMediaType=415]="UnsupportedMediaType",c[c.RangeNotSatisfiable=416]="RangeNotSatisfiable",c[c.ExpectationFailed=417]="ExpectationFailed",c[c.ImATeapot=418]="ImATeapot",c[c.MisdirectedRequest=421]="MisdirectedRequest",c[c.UnprocessableEntity=422]="UnprocessableEntity",c[c.Locked=423]="Locked",c[c.FailedDependency=424]="FailedDependency",c[c.TooEarly=425]="TooEarly",c[c.UpgradeRequired=426]="UpgradeRequired",c[c.PreconditionRequired=428]="PreconditionRequired",c[c.TooManyRequests=429]="TooManyRequests",c[c.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",c[c.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",c[c.InternalServerError=500]="InternalServerError",c[c.NotImplemented=501]="NotImplemented",c[c.BadGateway=502]="BadGateway",c[c.ServiceUnavailable=503]="ServiceUnavailable",c[c.GatewayTimeout=504]="GatewayTimeout",c[c.HttpVersionNotSupported=505]="HttpVersionNotSupported",c[c.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",c[c.InsufficientStorage=507]="InsufficientStorage",c[c.LoopDetected=508]="LoopDetected",c[c.NotExtended=510]="NotExtended",c[c.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",c}(g2||{});function g1(c,a){return{body:a,headers:c.headers,context:c.context,observe:c.observe,params:c.params,reportProgress:c.reportProgress,responseType:c.responseType,withCredentials:c.withCredentials,transferCache:c.transferCache}}var d6=(()=>{let a=class a{constructor(e){this.handler=e}request(e,r,i={}){let n;if(e instanceof p2)n=e;else{let f;i.headers instanceof B?f=i.headers:f=new B(i.headers);let l;i.params&&(i.params instanceof $?l=i.params:l=new $({fromObject:i.params})),n=new p2(e,r,i.body!==void 0?i.body:null,{headers:f,context:i.context,params:l,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache})}let o=H1(n).pipe(H3(f=>this.handler.handle(f)));if(e instanceof p2||i.observe==="events")return o;let t=o.pipe(h3(f=>f instanceof L2));switch(i.observe||"body"){case"body":switch(n.responseType){case"arraybuffer":return t.pipe(z2(f=>{if(f.body!==null&&!(f.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return f.body}));case"blob":return t.pipe(z2(f=>{if(f.body!==null&&!(f.body instanceof Blob))throw new Error("Response is not a Blob.");return f.body}));case"text":return t.pipe(z2(f=>{if(f.body!==null&&typeof f.body!="string")throw new Error("Response is not a string.");return f.body}));case"json":default:return t.pipe(z2(f=>f.body))}case"response":return t;default:throw new Error(`Unreachable: unhandled observe type ${i.observe}}`)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:new $().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,i={}){return this.request("PATCH",e,g1(i,r))}post(e,r,i={}){return this.request("POST",e,g1(i,r))}put(e,r,i={}){return this.request("PUT",e,g1(i,r))}};a.\u0275fac=function(r){return new(r||a)(M(d2))},a.\u0275prov=y({token:a,factory:a.\u0275fac});let c=a;return c})(),M6=/^\)\]\}',?\n/,C6="X-Request-URL";function $3(c){if(c.url)return c.url;let a=C6.toLocaleLowerCase();return c.headers.get(a)}var x1=(()=>{let a=class a{constructor(){this.fetchImpl=F(y1,{optional:!0})?.fetch??fetch.bind(globalThis),this.ngZone=F(a2)}handle(e){return new h1(r=>{let i=new AbortController;return this.doRequest(e,i.signal,r).then(w1,n=>r.error(new _({error:n}))),()=>i.abort()})}doRequest(e,r,i){return v1(this,null,function*(){let n=this.createRequestInit(e),o;try{let p=this.fetchImpl(e.urlWithParams,H2({signal:r},n));L6(p),i.next({type:X.Sent}),o=yield p}catch(p){i.error(new _({error:p,status:p.status??0,statusText:p.statusText,url:e.urlWithParams,headers:p.headers}));return}let t=new B(o.headers),f=o.statusText,l=$3(o)??e.urlWithParams,m=o.status,H=null;if(e.reportProgress&&i.next(new j2({headers:t,status:m,statusText:f,url:l})),o.body){let p=o.headers.get("content-length"),S=[],z=o.body.getReader(),u=0,C,x,d=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>v1(this,null,function*(){for(;;){let{done:k,value:A}=yield z.read();if(k)break;if(S.push(A),u+=A.length,e.reportProgress){x=e.responseType==="text"?(x??"")+(C??=new TextDecoder).decode(A,{stream:!0}):void 0;let n2=()=>i.next({type:X.DownloadProgress,total:p?+p:void 0,loaded:u,partialText:x});d?d.run(n2):n2()}}}));let b=this.concatChunks(S,u);try{let k=o.headers.get("Content-Type")??"";H=this.parseBody(e,b,k)}catch(k){i.error(new _({error:k,headers:new B(o.headers),status:o.status,statusText:o.statusText,url:$3(o)??e.urlWithParams}));return}}m===0&&(m=H?g2.Ok:0),m>=200&&m<300?(i.next(new L2({body:H,headers:t,status:m,statusText:f,url:l})),i.complete()):i.error(new _({error:H,headers:t,status:m,statusText:f,url:l}))})}parseBody(e,r,i){switch(e.responseType){case"json":let n=new TextDecoder().decode(r).replace(M6,"");return n===""?null:JSON.parse(n);case"text":return new TextDecoder().decode(r);case"blob":return new Blob([r],{type:i});case"arraybuffer":return r.buffer}}createRequestInit(e){let r={},i=e.withCredentials?"include":void 0;if(e.headers.forEach((n,o)=>r[n]=o.join(",")),r.Accept??="application/json, text/plain, */*",!r["Content-Type"]){let n=e.detectContentTypeHeader();n!==null&&(r["Content-Type"]=n)}return{body:e.serializeBody(),method:e.method,headers:r,credentials:i}}concatChunks(e,r){let i=new Uint8Array(r),n=0;for(let o of e)i.set(o,n),n+=o.length;return i}};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=y({token:a,factory:a.\u0275fac});let c=a;return c})(),y1=class{};function w1(){}function L6(c){c.then(w1,w1)}function g6(c,a){return a(c)}function x6(c,a,s){return(e,r)=>g3(s,()=>a(e,i=>c(i,r)))}var J3=new D(""),N6=new D(""),Q3=new D("");var X3=(()=>{let a=class a extends d2{constructor(e,r){super(),this.backend=e,this.injector=r,this.chain=null,this.pendingTasks=F(R3);let i=F(Q3,{optional:!0});this.backend=i??e}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(J3),...this.injector.get(N6,[])]));this.chain=i.reduceRight((n,o)=>x6(n,o,this.injector),g6)}let r=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(z3(()=>this.pendingTasks.remove(r)))}};a.\u0275fac=function(r){return new(r||a)(M(M2),M(L3))},a.\u0275prov=y({token:a,factory:a.\u0275fac});let c=a;return c})();var b6=/^\)\]\}',?\n/;function y6(c){return"responseURL"in c&&c.responseURL?c.responseURL:/^X-Request-URL:/m.test(c.getAllResponseHeaders())?c.getResponseHeader("X-Request-URL"):null}var Y3=(()=>{let a=class a{constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new j(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?v3(r.\u0275loadImpl()):H1(null)).pipe(u3(()=>new h1(n=>{let o=r.build();if(o.open(e.method,e.urlWithParams),e.withCredentials&&(o.withCredentials=!0),e.headers.forEach((z,u)=>o.setRequestHeader(z,u.join(","))),e.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){let z=e.detectContentTypeHeader();z!==null&&o.setRequestHeader("Content-Type",z)}if(e.responseType){let z=e.responseType.toLowerCase();o.responseType=z!=="json"?z:"text"}let t=e.serializeBody(),f=null,l=()=>{if(f!==null)return f;let z=o.statusText||"OK",u=new B(o.getAllResponseHeaders()),C=y6(o)||e.url;return f=new j2({headers:u,status:o.status,statusText:z,url:C}),f},m=()=>{let{headers:z,status:u,statusText:C,url:x}=l(),d=null;u!==g2.NoContent&&(d=typeof o.response>"u"?o.responseText:o.response),u===0&&(u=d?g2.Ok:0);let b=u>=200&&u<300;if(e.responseType==="json"&&typeof d=="string"){let k=d;d=d.replace(b6,"");try{d=d!==""?JSON.parse(d):null}catch(A){d=k,b&&(b=!1,d={error:A,text:d})}}b?(n.next(new L2({body:d,headers:z,status:u,statusText:C,url:x||void 0})),n.complete()):n.error(new _({error:d,headers:z,status:u,statusText:C,url:x||void 0}))},H=z=>{let{url:u}=l(),C=new _({error:z,status:o.status||0,statusText:o.statusText||"Unknown Error",url:u||void 0});n.error(C)},V=!1,p=z=>{V||(n.next(l()),V=!0);let u={type:X.DownloadProgress,loaded:z.loaded};z.lengthComputable&&(u.total=z.total),e.responseType==="text"&&o.responseText&&(u.partialText=o.responseText),n.next(u)},S=z=>{let u={type:X.UploadProgress,loaded:z.loaded};z.lengthComputable&&(u.total=z.total),n.next(u)};return o.addEventListener("load",m),o.addEventListener("error",H),o.addEventListener("timeout",H),o.addEventListener("abort",H),e.reportProgress&&(o.addEventListener("progress",p),t!==null&&o.upload&&o.upload.addEventListener("progress",S)),o.send(t),n.next({type:X.Sent}),()=>{o.removeEventListener("error",H),o.removeEventListener("abort",H),o.removeEventListener("load",m),o.removeEventListener("timeout",H),e.reportProgress&&(o.removeEventListener("progress",p),t!==null&&o.upload&&o.upload.removeEventListener("progress",S)),o.readyState!==o.DONE&&o.abort()}})))}};a.\u0275fac=function(r){return new(r||a)(M(q2))},a.\u0275prov=y({token:a,factory:a.\u0275fac});let c=a;return c})(),Z3=new D(""),w6="XSRF-TOKEN",S6=new D("",{providedIn:"root",factory:()=>w6}),k6="X-XSRF-TOKEN",A6=new D("",{providedIn:"root",factory:()=>k6}),G2=class{},T6=(()=>{let a=class a{constructor(e,r,i){this.doc=e,this.platform=r,this.cookieName=i,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=U2(e,this.cookieName),this.lastCookieString=e),this.lastToken}};a.\u0275fac=function(r){return new(r||a)(M(P),M(Z),M(S6))},a.\u0275prov=y({token:a,factory:a.\u0275fac});let c=a;return c})();function P6(c,a){let s=c.url.toLowerCase();if(!F(Z3)||c.method==="GET"||c.method==="HEAD"||s.startsWith("http://")||s.startsWith("https://"))return a(c);let e=F(G2).getToken(),r=F(A6);return e!=null&&!c.headers.has(r)&&(c=c.clone({headers:c.headers.set(r,e)})),a(c)}var c4=function(c){return c[c.Interceptors=0]="Interceptors",c[c.LegacyInterceptors=1]="LegacyInterceptors",c[c.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",c[c.NoXsrfProtection=3]="NoXsrfProtection",c[c.JsonpSupport=4]="JsonpSupport",c[c.RequestsMadeViaParent=5]="RequestsMadeViaParent",c[c.Fetch=6]="Fetch",c}(c4||{});function R6(c,a){return{\u0275kind:c,\u0275providers:a}}function t5(...c){let a=[d6,Y3,X3,{provide:d2,useExisting:X3},{provide:M2,useExisting:Y3},{provide:J3,useValue:P6,multi:!0},{provide:Z3,useValue:!0},{provide:G2,useClass:T6}];for(let s of c)a.push(...s.\u0275providers);return p1(a)}function f5(){return R6(c4.Fetch,[x1,{provide:M2,useExisting:x1},{provide:Q3,useExisting:x1}])}var A1=class extends U3{constructor(){super(...arguments),this.supportsDOMEvents=!0}},T1=class c extends A1{static makeCurrent(){I3(new c)}onAndCancel(a,s,e){return a.addEventListener(s,e),()=>{a.removeEventListener(s,e)}}dispatchEvent(a,s){a.dispatchEvent(s)}remove(a){a.parentNode&&a.parentNode.removeChild(a)}createElement(a,s){return s=s||this.getDefaultDocument(),s.createElement(a)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(a){return a.nodeType===Node.ELEMENT_NODE}isShadowRoot(a){return a instanceof DocumentFragment}getGlobalEventTarget(a,s){return s==="window"?window:s==="document"?a:s==="body"?a.body:null}getBaseHref(a){let s=E6();return s==null?null:F6(s)}resetBaseElement(){x2=null}getUserAgent(){return window.navigator.userAgent}getCookie(a){return U2(document.cookie,a)}},x2=null;function E6(){return x2=x2||document.querySelector("base"),x2?x2.getAttribute("href"):null}function F6(c){return new URL(c,document.baseURI).pathname}var B6=(()=>{let a=class a{build(){return new XMLHttpRequest}};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=y({token:a,factory:a.\u0275fac});let c=a;return c})(),P1=new D(""),s4=(()=>{let a=class a{constructor(e,r){this._zone=r,this._eventNameToPlugin=new Map,e.forEach(i=>{i.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,r,i){return this._findPluginFor(r).addEventListener(e,r,i)}getZone(){return this._zone}_findPluginFor(e){let r=this._eventNameToPlugin.get(e);if(r)return r;if(r=this._plugins.find(n=>n.supports(e)),!r)throw new j(5101,!1);return this._eventNameToPlugin.set(e,r),r}};a.\u0275fac=function(r){return new(r||a)(M(P1),M(a2))},a.\u0275prov=y({token:a,factory:a.\u0275fac});let c=a;return c})(),_2=class{constructor(a){this._doc=a}},S1="ng-app-id",i4=(()=>{let a=class a{constructor(e,r,i,n={}){this.doc=e,this.appId=r,this.nonce=i,this.platformId=n,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=L1(n),this.resetHostNodes()}addStyles(e){for(let r of e)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(e){for(let r of e)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let e=this.styleNodesInDOM;e&&(e.forEach(r=>r.remove()),e.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(e){this.hostNodes.add(e);for(let r of this.getAllStyles())this.addStyleToHost(e,r)}removeHost(e){this.hostNodes.delete(e)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(e){for(let r of this.hostNodes)this.addStyleToHost(r,e)}onStyleRemoved(e){let r=this.styleRef;r.get(e)?.elements?.forEach(i=>i.remove()),r.delete(e)}collectServerRenderedStyles(){let e=this.doc.head?.querySelectorAll(`style[${S1}="${this.appId}"]`);if(e?.length){let r=new Map;return e.forEach(i=>{i.textContent!=null&&r.set(i.textContent,i)}),r}return null}changeUsageCount(e,r){let i=this.styleRef;if(i.has(e)){let n=i.get(e);return n.usage+=r,n.usage}return i.set(e,{usage:r,elements:[]}),r}getStyleElement(e,r){let i=this.styleNodesInDOM,n=i?.get(r);if(n?.parentNode===e)return i.delete(r),n.removeAttribute(S1),n;{let o=this.doc.createElement("style");return this.nonce&&o.setAttribute("nonce",this.nonce),o.textContent=r,this.platformIsServer&&o.setAttribute(S1,this.appId),e.appendChild(o),o}}addStyleToHost(e,r){let i=this.getStyleElement(e,r),n=this.styleRef,o=n.get(r)?.elements;o?o.push(i):n.set(r,{elements:[i],usage:1})}resetHostNodes(){let e=this.hostNodes;e.clear(),e.add(this.doc.head)}};a.\u0275fac=function(r){return new(r||a)(M(P),M(u1),M(V1,8),M(Z))},a.\u0275prov=y({token:a,factory:a.\u0275fac});let c=a;return c})(),k1={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},D1=/%COMP%/g,n4="%COMP%",O6=`_nghost-${n4}`,I6=`_ngcontent-${n4}`,U6=!0,q6=new D("",{providedIn:"root",factory:()=>U6});function W6(c){return I6.replace(D1,c)}function j6(c){return O6.replace(D1,c)}function o4(c,a){return a.map(s=>s.replace(D1,c))}var a4=(()=>{let a=class a{constructor(e,r,i,n,o,t,f,l=null){this.eventManager=e,this.sharedStylesHost=r,this.appId=i,this.removeStylesOnCompDestroy=n,this.doc=o,this.platformId=t,this.ngZone=f,this.nonce=l,this.rendererByCompId=new Map,this.platformIsServer=L1(t),this.defaultRenderer=new N2(e,o,f,this.platformIsServer)}createRenderer(e,r){if(!e||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===u2.ShadowDom&&(r=m3(H2({},r),{encapsulation:u2.Emulated}));let i=this.getOrCreateRenderer(e,r);return i instanceof $2?i.applyToHost(e):i instanceof b2&&i.applyStyles(),i}getOrCreateRenderer(e,r){let i=this.rendererByCompId,n=i.get(r.id);if(!n){let o=this.doc,t=this.ngZone,f=this.eventManager,l=this.sharedStylesHost,m=this.removeStylesOnCompDestroy,H=this.platformIsServer;switch(r.encapsulation){case u2.Emulated:n=new $2(f,l,r,this.appId,m,o,t,H);break;case u2.ShadowDom:return new R1(f,l,e,r,o,t,this.nonce,H);default:n=new b2(f,l,r,m,o,t,H);break}i.set(r.id,n)}return n}ngOnDestroy(){this.rendererByCompId.clear()}};a.\u0275fac=function(r){return new(r||a)(M(s4),M(i4),M(u1),M(q6),M(P),M(Z),M(a2),M(V1))},a.\u0275prov=y({token:a,factory:a.\u0275fac});let c=a;return c})(),N2=class{constructor(a,s,e,r){this.eventManager=a,this.doc=s,this.ngZone=e,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(a,s){return s?this.doc.createElementNS(k1[s]||s,a):this.doc.createElement(a)}createComment(a){return this.doc.createComment(a)}createText(a){return this.doc.createTextNode(a)}appendChild(a,s){(e4(a)?a.content:a).appendChild(s)}insertBefore(a,s,e){a&&(e4(a)?a.content:a).insertBefore(s,e)}removeChild(a,s){a&&a.removeChild(s)}selectRootElement(a,s){let e=typeof a=="string"?this.doc.querySelector(a):a;if(!e)throw new j(-5104,!1);return s||(e.textContent=""),e}parentNode(a){return a.parentNode}nextSibling(a){return a.nextSibling}setAttribute(a,s,e,r){if(r){s=r+":"+s;let i=k1[r];i?a.setAttributeNS(i,s,e):a.setAttribute(s,e)}else a.setAttribute(s,e)}removeAttribute(a,s,e){if(e){let r=k1[e];r?a.removeAttributeNS(r,s):a.removeAttribute(`${e}:${s}`)}else a.removeAttribute(s)}addClass(a,s){a.classList.add(s)}removeClass(a,s){a.classList.remove(s)}setStyle(a,s,e,r){r&(V2.DashCase|V2.Important)?a.style.setProperty(s,e,r&V2.Important?"important":""):a.style[s]=e}removeStyle(a,s,e){e&V2.DashCase?a.style.removeProperty(s):a.style[s]=""}setProperty(a,s,e){a!=null&&(a[s]=e)}setValue(a,s){a.nodeValue=s}listen(a,s,e){if(typeof a=="string"&&(a=C1().getGlobalEventTarget(this.doc,a),!a))throw new Error(`Unsupported event target ${a} for event ${s}`);return this.eventManager.addEventListener(a,s,this.decoratePreventDefault(e))}decoratePreventDefault(a){return s=>{if(s==="__ngUnwrap__")return a;(this.platformIsServer?this.ngZone.runGuarded(()=>a(s)):a(s))===!1&&s.preventDefault()}}};function e4(c){return c.tagName==="TEMPLATE"&&c.content!==void 0}var R1=class extends N2{constructor(a,s,e,r,i,n,o,t){super(a,i,n,t),this.sharedStylesHost=s,this.hostEl=e,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let f=o4(r.id,r.styles);for(let l of f){let m=document.createElement("style");o&&m.setAttribute("nonce",o),m.textContent=l,this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(a){return a===this.hostEl?this.shadowRoot:a}appendChild(a,s){return super.appendChild(this.nodeOrShadowRoot(a),s)}insertBefore(a,s,e){return super.insertBefore(this.nodeOrShadowRoot(a),s,e)}removeChild(a,s){return super.removeChild(this.nodeOrShadowRoot(a),s)}parentNode(a){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(a)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},b2=class extends N2{constructor(a,s,e,r,i,n,o,t){super(a,i,n,o),this.sharedStylesHost=s,this.removeStylesOnCompDestroy=r,this.styles=t?o4(t,e.styles):e.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},$2=class extends b2{constructor(a,s,e,r,i,n,o,t){let f=r+"-"+e.id;super(a,s,e,i,n,o,t,f),this.contentAttr=W6(f),this.hostAttr=j6(f)}applyToHost(a){this.applyStyles(),this.setAttribute(a,this.hostAttr,"")}createElement(a,s){let e=super.createElement(a,s);return super.setAttribute(e,this.contentAttr,""),e}},G6=(()=>{let a=class a extends _2{constructor(e){super(e)}supports(e){return!0}addEventListener(e,r,i){return e.addEventListener(r,i,!1),()=>this.removeEventListener(e,r,i)}removeEventListener(e,r,i){return e.removeEventListener(r,i)}};a.\u0275fac=function(r){return new(r||a)(M(P))},a.\u0275prov=y({token:a,factory:a.\u0275fac});let c=a;return c})(),r4=["alt","control","meta","shift"],_6={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},$6={alt:c=>c.altKey,control:c=>c.ctrlKey,meta:c=>c.metaKey,shift:c=>c.shiftKey},X6=(()=>{let a=class a extends _2{constructor(e){super(e)}supports(e){return a.parseEventName(e)!=null}addEventListener(e,r,i){let n=a.parseEventName(r),o=a.eventCallback(n.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>C1().onAndCancel(e,n.domEventName,o))}static parseEventName(e){let r=e.toLowerCase().split("."),i=r.shift();if(r.length===0||!(i==="keydown"||i==="keyup"))return null;let n=a._normalizeKey(r.pop()),o="",t=r.indexOf("code");if(t>-1&&(r.splice(t,1),o="code."),r4.forEach(l=>{let m=r.indexOf(l);m>-1&&(r.splice(m,1),o+=l+".")}),o+=n,r.length!=0||n.length===0)return null;let f={};return f.domEventName=i,f.fullKey=o,f}static matchEventFullKeyCode(e,r){let i=_6[e.key]||e.key,n="";return r.indexOf("code.")>-1&&(i=e.code,n="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),r4.forEach(o=>{if(o!==i){let t=$6[o];t(e)&&(n+=o+".")}}),n+=i,n===r)}static eventCallback(e,r,i){return n=>{a.matchEventFullKeyCode(n,e)&&i.runGuarded(()=>r(n))}}static _normalizeKey(e){return e==="esc"?"escape":e}};a.\u0275fac=function(r){return new(r||a)(M(P))},a.\u0275prov=y({token:a,factory:a.\u0275fac});let c=a;return c})();function P5(c,a){return O3(H2({rootComponent:c},Y6(a)))}function Y6(c){return{appProviders:[...c0,...c?.providers??[]],platformProviders:Z6}}function K6(){T1.makeCurrent()}function J6(){return new d1}function Q6(){return d3(document),document}var Z6=[{provide:Z,useValue:q3},{provide:M3,useValue:K6,multi:!0},{provide:P,useFactory:Q6,deps:[]}];var c0=[{provide:C3,useValue:"root"},{provide:d1,useFactory:J6,deps:[]},{provide:P1,useClass:G6,multi:!0,deps:[P,a2,Z]},{provide:P1,useClass:X6,multi:!0,deps:[P]},a4,i4,s4,{provide:T3,useExisting:a4},{provide:q2,useClass:B6,deps:[]},[]];var R5=(()=>{let a=class a{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}};a.\u0275fac=function(r){return new(r||a)(M(P))},a.\u0275prov=y({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})();var E1=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=y({token:a,factory:function(r){let i=null;return r?i=new(r||a):i=M(a0),i},providedIn:"root"});let c=a;return c})(),a0=(()=>{let a=class a extends E1{constructor(e){super(),this._doc=e}sanitize(e,r){if(r==null)return null;switch(e){case c2.NONE:return r;case c2.HTML:return t2(r,"HTML")?o2(r):k3(this._doc,String(r)).toString();case c2.STYLE:return t2(r,"Style")?o2(r):r;case c2.SCRIPT:if(t2(r,"Script"))return o2(r);throw new j(5200,!1);case c2.URL:return t2(r,"URL")?o2(r):S3(String(r));case c2.RESOURCE_URL:if(t2(r,"ResourceURL"))return o2(r);throw new j(5201,!1);default:throw new j(5202,!1)}}bypassSecurityTrustHtml(e){return x3(e)}bypassSecurityTrustStyle(e){return N3(e)}bypassSecurityTrustScript(e){return b3(e)}bypassSecurityTrustUrl(e){return y3(e)}bypassSecurityTrustResourceUrl(e){return w3(e)}};a.\u0275fac=function(r){return new(r||a)(M(P))},a.\u0275prov=y({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})();function t4(c,a){var s=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),s.push.apply(s,e)}return s}function v(c){for(var a=1;a<arguments.length;a++){var s=arguments[a]!=null?arguments[a]:{};a%2?t4(Object(s),!0).forEach(function(e){w(c,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(s)):t4(Object(s)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(s,e))})}return c}function i1(c){"@babel/helpers - typeof";return i1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},i1(c)}function r0(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function f4(c,a){for(var s=0;s<a.length;s++){var e=a[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,e.key,e)}}function s0(c,a,s){return a&&f4(c.prototype,a),s&&f4(c,s),Object.defineProperty(c,"prototype",{writable:!1}),c}function w(c,a,s){return a in c?Object.defineProperty(c,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[a]=s,c}function Q1(c,a){return n0(c)||t0(c,a)||R4(c,a)||l0()}function D2(c){return i0(c)||o0(c)||R4(c)||f0()}function i0(c){if(Array.isArray(c))return U1(c)}function n0(c){if(Array.isArray(c))return c}function o0(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function t0(c,a){var s=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(s!=null){var e=[],r=!0,i=!1,n,o;try{for(s=s.call(c);!(r=(n=s.next()).done)&&(e.push(n.value),!(a&&e.length===a));r=!0);}catch(t){i=!0,o=t}finally{try{!r&&s.return!=null&&s.return()}finally{if(i)throw o}}return e}}function R4(c,a){if(c){if(typeof c=="string")return U1(c,a);var s=Object.prototype.toString.call(c).slice(8,-1);if(s==="Object"&&c.constructor&&(s=c.constructor.name),s==="Map"||s==="Set")return Array.from(c);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return U1(c,a)}}function U1(c,a){(a==null||a>c.length)&&(a=c.length);for(var s=0,e=new Array(a);s<a;s++)e[s]=c[s];return e}function f0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l4=function(){},Z1={},D4={},E4=null,F4={mark:l4,measure:l4};try{typeof window<"u"&&(Z1=window),typeof document<"u"&&(D4=document),typeof MutationObserver<"u"&&(E4=MutationObserver),typeof performance<"u"&&(F4=performance)}catch{}var m0=Z1.navigator||{},m4=m0.userAgent,v4=m4===void 0?"":m4,K=Z1,g=D4,h4=E4,X2=F4,E5=!!K.document,q=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",B4=~v4.indexOf("MSIE")||~v4.indexOf("Trident/"),Y2,K2,J2,Q2,Z2,O="___FONT_AWESOME___",q1=16,O4="fa",I4="svg-inline--fa",s2="data-fa-i2svg",W1="data-fa-pseudo-element",v0="data-fa-pseudo-element-pending",c3="data-prefix",a3="data-icon",H4="fontawesome-i2svg",h0="async",H0=["HTML","HEAD","STYLE","SCRIPT"],U4=function(){try{return!0}catch{return!1}}(),L="classic",N="sharp",e3=[L,N];function E2(c){return new Proxy(c,{get:function(s,e){return e in s?s[e]:s[L]}})}var k2=E2((Y2={},w(Y2,L,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),w(Y2,N,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Y2)),A2=E2((K2={},w(K2,L,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),w(K2,N,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),K2)),T2=E2((J2={},w(J2,L,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),w(J2,N,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),J2)),z0=E2((Q2={},w(Q2,L,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),w(Q2,N,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Q2)),u0=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,q4="fa-layers-text",V0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,p0=E2((Z2={},w(Z2,L,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),w(Z2,N,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Z2)),W4=[1,2,3,4,5,6,7,8,9,10],d0=W4.concat([11,12,13,14,15,16,17,18,19,20]),M0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],e2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},P2=new Set;Object.keys(A2[L]).map(P2.add.bind(P2));Object.keys(A2[N]).map(P2.add.bind(P2));var C0=[].concat(e3,D2(P2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",e2.GROUP,e2.SWAP_OPACITY,e2.PRIMARY,e2.SECONDARY]).concat(W4.map(function(c){return"".concat(c,"x")})).concat(d0.map(function(c){return"w-".concat(c)})),w2=K.FontAwesomeConfig||{};function L0(c){var a=g.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function g0(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}g&&typeof g.querySelector=="function"&&(z4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],z4.forEach(function(c){var a=Q1(c,2),s=a[0],e=a[1],r=g0(L0(s));r!=null&&(w2[e]=r)}));var z4,j4={styleDefault:"solid",familyDefault:"classic",cssPrefix:O4,replacementClass:I4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};w2.familyPrefix&&(w2.cssPrefix=w2.familyPrefix);var v2=v(v({},j4),w2);v2.autoReplaceSvg||(v2.observeMutations=!1);var h={};Object.keys(j4).forEach(function(c){Object.defineProperty(h,c,{enumerable:!0,set:function(s){v2[c]=s,S2.forEach(function(e){return e(h)})},get:function(){return v2[c]}})});Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(a){v2.cssPrefix=a,S2.forEach(function(s){return s(h)})},get:function(){return v2.cssPrefix}});K.FontAwesomeConfig=h;var S2=[];function x0(c){return S2.push(c),function(){S2.splice(S2.indexOf(c),1)}}var Y=q1,E={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function N0(c){if(!(!c||!q)){var a=g.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var s=g.head.childNodes,e=null,r=s.length-1;r>-1;r--){var i=s[r],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(e=i)}return g.head.insertBefore(a,e),c}}var b0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function R2(){for(var c=12,a="";c-- >0;)a+=b0[Math.random()*62|0];return a}function h2(c){for(var a=[],s=(c||[]).length>>>0;s--;)a[s]=c[s];return a}function r3(c){return c.classList?h2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function G4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function y0(c){return Object.keys(c||{}).reduce(function(a,s){return a+"".concat(s,'="').concat(G4(c[s]),'" ')},"").trim()}function t1(c){return Object.keys(c||{}).reduce(function(a,s){return a+"".concat(s,": ").concat(c[s].trim(),";")},"")}function s3(c){return c.size!==E.size||c.x!==E.x||c.y!==E.y||c.rotate!==E.rotate||c.flipX||c.flipY}function w0(c){var a=c.transform,s=c.containerWidth,e=c.iconWidth,r={transform:"translate(".concat(s/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),o="rotate(".concat(a.rotate," 0 0)"),t={transform:"".concat(i," ").concat(n," ").concat(o)},f={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:t,path:f}}function S0(c){var a=c.transform,s=c.width,e=s===void 0?q1:s,r=c.height,i=r===void 0?q1:r,n=c.startCentered,o=n===void 0?!1:n,t="";return o&&B4?t+="translate(".concat(a.x/Y-e/2,"em, ").concat(a.y/Y-i/2,"em) "):o?t+="translate(calc(-50% + ".concat(a.x/Y,"em), calc(-50% + ").concat(a.y/Y,"em)) "):t+="translate(".concat(a.x/Y,"em, ").concat(a.y/Y,"em) "),t+="scale(".concat(a.size/Y*(a.flipX?-1:1),", ").concat(a.size/Y*(a.flipY?-1:1),") "),t+="rotate(".concat(a.rotate,"deg) "),t}var k0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function _4(){var c=O4,a=I4,s=h.cssPrefix,e=h.replacementClass,r=k0;if(s!==c||e!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(s,"-")).replace(n,"--".concat(s,"-")).replace(o,".".concat(e))}return r}var u4=!1;function F1(){h.autoAddCss&&!u4&&(N0(_4()),u4=!0)}var A0={mixout:function(){return{dom:{css:_4,insertCss:F1}}},hooks:function(){return{beforeDOMElementCreation:function(){F1()},beforeI2svg:function(){F1()}}}},I=K||{};I[O]||(I[O]={});I[O].styles||(I[O].styles={});I[O].hooks||(I[O].hooks={});I[O].shims||(I[O].shims=[]);var R=I[O],$4=[],T0=function c(){g.removeEventListener("DOMContentLoaded",c),n1=1,$4.map(function(a){return a()})},n1=!1;q&&(n1=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),n1||g.addEventListener("DOMContentLoaded",T0));function P0(c){q&&(n1?setTimeout(c,0):$4.push(c))}function F2(c){var a=c.tag,s=c.attributes,e=s===void 0?{}:s,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?G4(c):"<".concat(a," ").concat(y0(e),">").concat(i.map(F2).join(""),"</").concat(a,">")}function V4(c,a,s){if(c&&c[a]&&c[a][s])return{prefix:a,iconName:s,icon:c[a][s]}}var R0=function(a,s){return function(e,r,i,n){return a.call(s,e,r,i,n)}},B1=function(a,s,e,r){var i=Object.keys(a),n=i.length,o=r!==void 0?R0(s,r):s,t,f,l;for(e===void 0?(t=1,l=a[i[0]]):(t=0,l=e);t<n;t++)f=i[t],l=o(l,a[f],f,a);return l};function D0(c){for(var a=[],s=0,e=c.length;s<e;){var r=c.charCodeAt(s++);if(r>=55296&&r<=56319&&s<e){var i=c.charCodeAt(s++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),s--)}else a.push(r)}return a}function j1(c){var a=D0(c);return a.length===1?a[0].toString(16):null}function E0(c,a){var s=c.length,e=c.charCodeAt(a),r;return e>=55296&&e<=56319&&s>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function p4(c){return Object.keys(c).reduce(function(a,s){var e=c[s],r=!!e.icon;return r?a[e.iconName]=e.icon:a[s]=e,a},{})}function G1(c,a){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=s.skipHooks,r=e===void 0?!1:e,i=p4(a);typeof R.hooks.addPack=="function"&&!r?R.hooks.addPack(c,p4(a)):R.styles[c]=v(v({},R.styles[c]||{}),i),c==="fas"&&G1("fa",a)}var c1,a1,e1,f2=R.styles,F0=R.shims,B0=(c1={},w(c1,L,Object.values(T2[L])),w(c1,N,Object.values(T2[N])),c1),i3=null,X4={},Y4={},K4={},J4={},Q4={},O0=(a1={},w(a1,L,Object.keys(k2[L])),w(a1,N,Object.keys(k2[N])),a1);function I0(c){return~C0.indexOf(c)}function U0(c,a){var s=a.split("-"),e=s[0],r=s.slice(1).join("-");return e===c&&r!==""&&!I0(r)?r:null}var Z4=function(){var a=function(i){return B1(f2,function(n,o,t){return n[t]=B1(o,i,{}),n},{})};X4=a(function(r,i,n){if(i[3]&&(r[i[3]]=n),i[2]){var o=i[2].filter(function(t){return typeof t=="number"});o.forEach(function(t){r[t.toString(16)]=n})}return r}),Y4=a(function(r,i,n){if(r[n]=n,i[2]){var o=i[2].filter(function(t){return typeof t=="string"});o.forEach(function(t){r[t]=n})}return r}),Q4=a(function(r,i,n){var o=i[2];return r[n]=n,o.forEach(function(t){r[t]=n}),r});var s="far"in f2||h.autoFetchSvg,e=B1(F0,function(r,i){var n=i[0],o=i[1],t=i[2];return o==="far"&&!s&&(o="fas"),typeof n=="string"&&(r.names[n]={prefix:o,iconName:t}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:o,iconName:t}),r},{names:{},unicodes:{}});K4=e.names,J4=e.unicodes,i3=f1(h.styleDefault,{family:h.familyDefault})};x0(function(c){i3=f1(c.styleDefault,{family:h.familyDefault})});Z4();function n3(c,a){return(X4[c]||{})[a]}function q0(c,a){return(Y4[c]||{})[a]}function r2(c,a){return(Q4[c]||{})[a]}function c6(c){return K4[c]||{prefix:null,iconName:null}}function W0(c){var a=J4[c],s=n3("fas",c);return a||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function J(){return i3}var o3=function(){return{prefix:null,iconName:null,rest:[]}};function f1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.family,e=s===void 0?L:s,r=k2[e][c],i=A2[e][c]||A2[e][r],n=c in R.styles?c:null;return i||n||null}var d4=(e1={},w(e1,L,Object.keys(T2[L])),w(e1,N,Object.keys(T2[N])),e1);function l1(c){var a,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=s.skipLookups,r=e===void 0?!1:e,i=(a={},w(a,L,"".concat(h.cssPrefix,"-").concat(L)),w(a,N,"".concat(h.cssPrefix,"-").concat(N)),a),n=null,o=L;(c.includes(i[L])||c.some(function(f){return d4[L].includes(f)}))&&(o=L),(c.includes(i[N])||c.some(function(f){return d4[N].includes(f)}))&&(o=N);var t=c.reduce(function(f,l){var m=U0(h.cssPrefix,l);if(f2[l]?(l=B0[o].includes(l)?z0[o][l]:l,n=l,f.prefix=l):O0[o].indexOf(l)>-1?(n=l,f.prefix=f1(l,{family:o})):m?f.iconName=m:l!==h.replacementClass&&l!==i[L]&&l!==i[N]&&f.rest.push(l),!r&&f.prefix&&f.iconName){var H=n==="fa"?c6(f.iconName):{},V=r2(f.prefix,f.iconName);H.prefix&&(n=null),f.iconName=H.iconName||V||f.iconName,f.prefix=H.prefix||f.prefix,f.prefix==="far"&&!f2.far&&f2.fas&&!h.autoFetchSvg&&(f.prefix="fas")}return f},o3());return(c.includes("fa-brands")||c.includes("fab"))&&(t.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(t.prefix="fad"),!t.prefix&&o===N&&(f2.fass||h.autoFetchSvg)&&(t.prefix="fass",t.iconName=r2(t.prefix,t.iconName)||t.iconName),(t.prefix==="fa"||n==="fa")&&(t.prefix=J()||"fas"),t}var j0=function(){function c(){r0(this,c),this.definitions={}}return s0(c,[{key:"add",value:function(){for(var s=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(o){s.definitions[o]=v(v({},s.definitions[o]||{}),n[o]),G1(o,n[o]);var t=T2[L][o];t&&G1(t,n[o]),Z4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(s,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var n=r[i],o=n.prefix,t=n.iconName,f=n.icon,l=f[2];s[o]||(s[o]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(s[o][m]=f)}),s[o][t]=f}),s}}]),c}(),M4=[],l2={},m2={},G0=Object.keys(m2);function _0(c,a){var s=a.mixoutsTo;return M4=c,l2={},Object.keys(m2).forEach(function(e){G0.indexOf(e)===-1&&delete m2[e]}),M4.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(s[n]=r[n]),i1(r[n])==="object"&&Object.keys(r[n]).forEach(function(o){s[n]||(s[n]={}),s[n][o]=r[n][o]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(n){l2[n]||(l2[n]=[]),l2[n].push(i[n])})}e.provides&&e.provides(m2)}),s}function _1(c,a){for(var s=arguments.length,e=new Array(s>2?s-2:0),r=2;r<s;r++)e[r-2]=arguments[r];var i=l2[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(e))}),a}function i2(c){for(var a=arguments.length,s=new Array(a>1?a-1:0),e=1;e<a;e++)s[e-1]=arguments[e];var r=l2[c]||[];r.forEach(function(i){i.apply(null,s)})}function U(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return m2[c]?m2[c].apply(null,a):void 0}function $1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,s=c.prefix||J();if(a)return a=r2(s,a)||a,V4(a6.definitions,s,a)||V4(R.styles,s,a)}var a6=new j0,$0=function(){h.autoReplaceSvg=!1,h.observeMutations=!1,i2("noAuto")},X0={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return q?(i2("beforeI2svg",a),U("pseudoElements2svg",a),U("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=a.autoReplaceSvgRoot;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,P0(function(){K0({autoReplaceSvgRoot:s}),i2("watch",a)})}},Y0={icon:function(a){if(a===null)return null;if(i1(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:r2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var s=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=f1(a[0]);return{prefix:e,iconName:r2(e,s)||s}}if(typeof a=="string"&&(a.indexOf("".concat(h.cssPrefix,"-"))>-1||a.match(u0))){var r=l1(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||J(),iconName:r2(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=J();return{prefix:i,iconName:r2(i,a)||a}}}},T={noAuto:$0,config:h,dom:X0,parse:Y0,library:a6,findIconDefinition:$1,toHtml:F2},K0=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=a.autoReplaceSvgRoot,e=s===void 0?g:s;(Object.keys(R.styles).length>0||h.autoFetchSvg)&&q&&h.autoReplaceSvg&&T.dom.i2svg({node:e})};function m1(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return F2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(q){var e=g.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function J0(c){var a=c.children,s=c.main,e=c.mask,r=c.attributes,i=c.styles,n=c.transform;if(s3(n)&&s.found&&!e.found){var o=s.width,t=s.height,f={x:o/t/2,y:.5};r.style=t1(v(v({},i),{},{"transform-origin":"".concat(f.x+n.x/16,"em ").concat(f.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function Q0(c){var a=c.prefix,s=c.iconName,e=c.children,r=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(h.cssPrefix,"-").concat(s):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},r),{},{id:n}),children:e}]}]}function t3(c){var a=c.icons,s=a.main,e=a.mask,r=c.prefix,i=c.iconName,n=c.transform,o=c.symbol,t=c.title,f=c.maskId,l=c.titleId,m=c.extra,H=c.watchable,V=H===void 0?!1:H,p=e.found?e:s,S=p.width,z=p.height,u=r==="fak",C=[h.replacementClass,i?"".concat(h.cssPrefix,"-").concat(i):""].filter(function(W){return m.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(m.classes).join(" "),x={children:[],attributes:v(v({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(z)})},d=u&&!~m.classes.indexOf("fa-fw")?{width:"".concat(S/z*16*.0625,"em")}:{};V&&(x.attributes[s2]=""),t&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(l||R2())},children:[t]}),delete x.attributes.title);var b=v(v({},x),{},{prefix:r,iconName:i,main:s,mask:e,maskId:f,transform:n,symbol:o,styles:v(v({},d),m.styles)}),k=e.found&&s.found?U("generateAbstractMask",b)||{children:[],attributes:{}}:U("generateAbstractIcon",b)||{children:[],attributes:{}},A=k.children,n2=k.attributes;return b.children=A,b.attributes=n2,o?Q0(b):J0(b)}function C4(c){var a=c.content,s=c.width,e=c.height,r=c.transform,i=c.title,n=c.extra,o=c.watchable,t=o===void 0?!1:o,f=v(v(v({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});t&&(f[s2]="");var l=v({},n.styles);s3(r)&&(l.transform=S0({transform:r,startCentered:!0,width:s,height:e}),l["-webkit-transform"]=l.transform);var m=t1(l);m.length>0&&(f.style=m);var H=[];return H.push({tag:"span",attributes:f,children:[a]}),i&&H.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),H}function Z0(c){var a=c.content,s=c.title,e=c.extra,r=v(v(v({},e.attributes),s?{title:s}:{}),{},{class:e.classes.join(" ")}),i=t1(e.styles);i.length>0&&(r.style=i);var n=[];return n.push({tag:"span",attributes:r,children:[a]}),s&&n.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),n}var O1=R.styles;function X1(c){var a=c[0],s=c[1],e=c.slice(4),r=Q1(e,1),i=r[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(e2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(e2.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(e2.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:s,icon:n}}var c8={found:!1,width:512,height:512};function a8(c,a){!U4&&!h.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function Y1(c,a){var s=a;return a==="fa"&&h.styleDefault!==null&&(a=J()),new Promise(function(e,r){var i={found:!1,width:512,height:512,icon:U("missingIconAbstract")||{}};if(s==="fa"){var n=c6(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&O1[a]&&O1[a][c]){var o=O1[a][c];return e(X1(o))}a8(c,a),e(v(v({},c8),{},{icon:h.showMissingIcons&&c?U("missingIconAbstract")||{}:{}}))})}var L4=function(){},K1=h.measurePerformance&&X2&&X2.mark&&X2.measure?X2:{mark:L4,measure:L4},y2='FA "6.5.1"',e8=function(a){return K1.mark("".concat(y2," ").concat(a," begins")),function(){return e6(a)}},e6=function(a){K1.mark("".concat(y2," ").concat(a," ends")),K1.measure("".concat(y2," ").concat(a),"".concat(y2," ").concat(a," begins"),"".concat(y2," ").concat(a," ends"))},f3={begin:e8,end:e6},r1=function(){};function g4(c){var a=c.getAttribute?c.getAttribute(s2):null;return typeof a=="string"}function r8(c){var a=c.getAttribute?c.getAttribute(c3):null,s=c.getAttribute?c.getAttribute(a3):null;return a&&s}function s8(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(h.replacementClass)}function i8(){if(h.autoReplaceSvg===!0)return s1.replace;var c=s1[h.autoReplaceSvg];return c||s1.replace}function n8(c){return g.createElementNS("http://www.w3.org/2000/svg",c)}function o8(c){return g.createElement(c)}function r6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.ceFn,e=s===void 0?c.tag==="svg"?n8:o8:s;if(typeof c=="string")return g.createTextNode(c);var r=e(c.tag);Object.keys(c.attributes||[]).forEach(function(n){r.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){r.appendChild(r6(n,{ceFn:e}))}),r}function t8(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var s1={replace:function(a){var s=a[0];if(s.parentNode)if(a[1].forEach(function(r){s.parentNode.insertBefore(r6(r),s)}),s.getAttribute(s2)===null&&h.keepOriginalSource){var e=g.createComment(t8(s));s.parentNode.replaceChild(e,s)}else s.remove()},nest:function(a){var s=a[0],e=a[1];if(~r3(s).indexOf(h.replacementClass))return s1.replace(a);var r=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(o,t){return t===h.replacementClass||t.match(r)?o.toSvg.push(t):o.toNode.push(t),o},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",i.toNode.join(" "))}var n=e.map(function(o){return F2(o)}).join(`
`);s.setAttribute(s2,""),s.innerHTML=n}};function x4(c){c()}function s6(c,a){var s=typeof a=="function"?a:r1;if(c.length===0)s();else{var e=x4;h.mutateApproach===h0&&(e=K.requestAnimationFrame||x4),e(function(){var r=i8(),i=f3.begin("mutate");c.map(r),i(),s()})}}var l3=!1;function i6(){l3=!0}function J1(){l3=!1}var o1=null;function N4(c){if(h4&&h.observeMutations){var a=c.treeCallback,s=a===void 0?r1:a,e=c.nodeCallback,r=e===void 0?r1:e,i=c.pseudoElementsCallback,n=i===void 0?r1:i,o=c.observeMutationsRoot,t=o===void 0?g:o;o1=new h4(function(f){if(!l3){var l=J();h2(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!g4(m.addedNodes[0])&&(h.searchPseudoElements&&n(m.target),s(m.target)),m.type==="attributes"&&m.target.parentNode&&h.searchPseudoElements&&n(m.target.parentNode),m.type==="attributes"&&g4(m.target)&&~M0.indexOf(m.attributeName))if(m.attributeName==="class"&&r8(m.target)){var H=l1(r3(m.target)),V=H.prefix,p=H.iconName;m.target.setAttribute(c3,V||l),p&&m.target.setAttribute(a3,p)}else s8(m.target)&&r(m.target)})}}),q&&o1.observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function f8(){o1&&o1.disconnect()}function l8(c){var a=c.getAttribute("style"),s=[];return a&&(s=a.split(";").reduce(function(e,r){var i=r.split(":"),n=i[0],o=i.slice(1);return n&&o.length>0&&(e[n]=o.join(":").trim()),e},{})),s}function m8(c){var a=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",r=l1(r3(c));return r.prefix||(r.prefix=J()),a&&s&&(r.prefix=a,r.iconName=s),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=q0(r.prefix,c.innerText)||n3(r.prefix,j1(c.innerText))),!r.iconName&&h.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function v8(c){var a=h2(c.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),s=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return h.autoA11y&&(s?a["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(e||R2()):(a["aria-hidden"]="true",a.focusable="false")),a}function h8(){return{iconName:null,title:null,titleId:null,prefix:null,transform:E,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function b4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},s=m8(c),e=s.iconName,r=s.prefix,i=s.rest,n=v8(c),o=_1("parseNodeAttributes",{},c),t=a.styleParser?l8(c):[];return v({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:E,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:t,attributes:n}},o)}var H8=R.styles;function n6(c){var a=h.autoReplaceSvg==="nest"?b4(c,{styleParser:!1}):b4(c);return~a.extra.classes.indexOf(q4)?U("generateLayersText",c,a):U("generateSvgReplacementMutation",c,a)}var Q=new Set;e3.map(function(c){Q.add("fa-".concat(c))});Object.keys(k2[L]).map(Q.add.bind(Q));Object.keys(k2[N]).map(Q.add.bind(Q));Q=D2(Q);function y4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!q)return Promise.resolve();var s=g.documentElement.classList,e=function(m){return s.add("".concat(H4,"-").concat(m))},r=function(m){return s.remove("".concat(H4,"-").concat(m))},i=h.autoFetchSvg?Q:e3.map(function(l){return"fa-".concat(l)}).concat(Object.keys(H8));i.includes("fa")||i.push("fa");var n=[".".concat(q4,":not([").concat(s2,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(s2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var o=[];try{o=h2(c.querySelectorAll(n))}catch{}if(o.length>0)e("pending"),r("complete");else return Promise.resolve();var t=f3.begin("onTree"),f=o.reduce(function(l,m){try{var H=n6(m);H&&l.push(H)}catch(V){U4||V.name==="MissingIcon"&&console.error(V)}return l},[]);return new Promise(function(l,m){Promise.all(f).then(function(H){s6(H,function(){e("active"),e("complete"),r("pending"),typeof a=="function"&&a(),t(),l()})}).catch(function(H){t(),m(H)})})}function z8(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;n6(c).then(function(s){s&&s6([s],a)})}function u8(c){return function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:$1(a||{}),r=s.mask;return r&&(r=(r||{}).icon?r:$1(r||{})),c(e,v(v({},s),{},{mask:r}))}}var V8=function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=s.transform,r=e===void 0?E:e,i=s.symbol,n=i===void 0?!1:i,o=s.mask,t=o===void 0?null:o,f=s.maskId,l=f===void 0?null:f,m=s.title,H=m===void 0?null:m,V=s.titleId,p=V===void 0?null:V,S=s.classes,z=S===void 0?[]:S,u=s.attributes,C=u===void 0?{}:u,x=s.styles,d=x===void 0?{}:x;if(a){var b=a.prefix,k=a.iconName,A=a.icon;return m1(v({type:"icon"},a),function(){return i2("beforeDOMElementCreation",{iconDefinition:a,params:s}),h.autoA11y&&(H?C["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(p||R2()):(C["aria-hidden"]="true",C.focusable="false")),t3({icons:{main:X1(A),mask:t?X1(t.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:k,transform:v(v({},E),r),symbol:n,title:H,maskId:l,titleId:p,extra:{attributes:C,styles:d,classes:z}})})}},p8={mixout:function(){return{icon:u8(V8)}},hooks:function(){return{mutationObserverCallbacks:function(s){return s.treeCallback=y4,s.nodeCallback=z8,s}}},provides:function(a){a.i2svg=function(s){var e=s.node,r=e===void 0?g:e,i=s.callback,n=i===void 0?function(){}:i;return y4(r,n)},a.generateSvgReplacementMutation=function(s,e){var r=e.iconName,i=e.title,n=e.titleId,o=e.prefix,t=e.transform,f=e.symbol,l=e.mask,m=e.maskId,H=e.extra;return new Promise(function(V,p){Promise.all([Y1(r,o),l.iconName?Y1(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var z=Q1(S,2),u=z[0],C=z[1];V([s,t3({icons:{main:u,mask:C},prefix:o,iconName:r,transform:t,symbol:f,maskId:m,title:i,titleId:n,extra:H,watchable:!0})])}).catch(p)})},a.generateAbstractIcon=function(s){var e=s.children,r=s.attributes,i=s.main,n=s.transform,o=s.styles,t=t1(o);t.length>0&&(r.style=t);var f;return s3(n)&&(f=U("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),e.push(f||i.icon),{children:e,attributes:r}}}},d8={mixout:function(){return{layer:function(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return m1({type:"layer"},function(){i2("beforeDOMElementCreation",{assembler:s,params:e});var n=[];return s(function(o){Array.isArray(o)?o.map(function(t){n=n.concat(t.abstract)}):n=n.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers")].concat(D2(i)).join(" ")},children:n}]})}}}},M8={mixout:function(){return{counter:function(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,n=e.classes,o=n===void 0?[]:n,t=e.attributes,f=t===void 0?{}:t,l=e.styles,m=l===void 0?{}:l;return m1({type:"counter",content:s},function(){return i2("beforeDOMElementCreation",{content:s,params:e}),Z0({content:s.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(h.cssPrefix,"-layers-counter")].concat(D2(o))}})})}}}},C8={mixout:function(){return{text:function(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?E:r,n=e.title,o=n===void 0?null:n,t=e.classes,f=t===void 0?[]:t,l=e.attributes,m=l===void 0?{}:l,H=e.styles,V=H===void 0?{}:H;return m1({type:"text",content:s},function(){return i2("beforeDOMElementCreation",{content:s,params:e}),C4({content:s,transform:v(v({},E),i),title:o,extra:{attributes:m,styles:V,classes:["".concat(h.cssPrefix,"-layers-text")].concat(D2(f))}})})}}},provides:function(a){a.generateLayersText=function(s,e){var r=e.title,i=e.transform,n=e.extra,o=null,t=null;if(B4){var f=parseInt(getComputedStyle(s).fontSize,10),l=s.getBoundingClientRect();o=l.width/f,t=l.height/f}return h.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([s,C4({content:s.innerHTML,width:o,height:t,transform:i,title:r,extra:n,watchable:!0})])}}},L8=new RegExp('"',"ug"),w4=[1105920,1112319];function g8(c){var a=c.replace(L8,""),s=E0(a,0),e=s>=w4[0]&&s<=w4[1],r=a.length===2?a[0]===a[1]:!1;return{value:j1(r?a[0]:a),isSecondary:e||r}}function S4(c,a){var s="".concat(v0).concat(a.replace(":","-"));return new Promise(function(e,r){if(c.getAttribute(s)!==null)return e();var i=h2(c.children),n=i.filter(function(A){return A.getAttribute(W1)===a})[0],o=K.getComputedStyle(c,a),t=o.getPropertyValue("font-family").match(V0),f=o.getPropertyValue("font-weight"),l=o.getPropertyValue("content");if(n&&!t)return c.removeChild(n),e();if(t&&l!=="none"&&l!==""){var m=o.getPropertyValue("content"),H=~["Sharp"].indexOf(t[2])?N:L,V=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(t[2])?A2[H][t[2].toLowerCase()]:p0[H][f],p=g8(m),S=p.value,z=p.isSecondary,u=t[0].startsWith("FontAwesome"),C=n3(V,S),x=C;if(u){var d=W0(S);d.iconName&&d.prefix&&(C=d.iconName,V=d.prefix)}if(C&&!z&&(!n||n.getAttribute(c3)!==V||n.getAttribute(a3)!==x)){c.setAttribute(s,x),n&&c.removeChild(n);var b=h8(),k=b.extra;k.attributes[W1]=a,Y1(C,V).then(function(A){var n2=t3(v(v({},b),{},{icons:{main:A,mask:o3()},prefix:V,iconName:x,extra:k,watchable:!0})),W=g.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(W,c.firstChild):c.appendChild(W),W.outerHTML=n2.map(function(f6){return F2(f6)}).join(`
`),c.removeAttribute(s),e()}).catch(r)}else e()}else e()})}function x8(c){return Promise.all([S4(c,"::before"),S4(c,"::after")])}function N8(c){return c.parentNode!==document.head&&!~H0.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(W1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function k4(c){if(q)return new Promise(function(a,s){var e=h2(c.querySelectorAll("*")).filter(N8).map(x8),r=f3.begin("searchPseudoElements");i6(),Promise.all(e).then(function(){r(),J1(),a()}).catch(function(){r(),J1(),s()})})}var b8={hooks:function(){return{mutationObserverCallbacks:function(s){return s.pseudoElementsCallback=k4,s}}},provides:function(a){a.pseudoElements2svg=function(s){var e=s.node,r=e===void 0?g:e;h.searchPseudoElements&&k4(r)}}},A4=!1,y8={mixout:function(){return{dom:{unwatch:function(){i6(),A4=!0}}}},hooks:function(){return{bootstrap:function(){N4(_1("mutationObserverCallbacks",{}))},noAuto:function(){f8()},watch:function(s){var e=s.observeMutationsRoot;A4?J1():N4(_1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},T4=function(a){var s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),n=i[0],o=i.slice(1).join("-");if(n&&o==="h")return e.flipX=!0,e;if(n&&o==="v")return e.flipY=!0,e;if(o=parseFloat(o),isNaN(o))return e;switch(n){case"grow":e.size=e.size+o;break;case"shrink":e.size=e.size-o;break;case"left":e.x=e.x-o;break;case"right":e.x=e.x+o;break;case"up":e.y=e.y-o;break;case"down":e.y=e.y+o;break;case"rotate":e.rotate=e.rotate+o;break}return e},s)},w8={mixout:function(){return{parse:{transform:function(s){return T4(s)}}}},hooks:function(){return{parseNodeAttributes:function(s,e){var r=e.getAttribute("data-fa-transform");return r&&(s.transform=T4(r)),s}}},provides:function(a){a.generateAbstractTransformGrouping=function(s){var e=s.main,r=s.transform,i=s.containerWidth,n=s.iconWidth,o={transform:"translate(".concat(i/2," 256)")},t="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(t," ").concat(f," ").concat(l)},H={transform:"translate(".concat(n/2*-1," -256)")},V={outer:o,inner:m,path:H};return{tag:"g",attributes:v({},V.outer),children:[{tag:"g",attributes:v({},V.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:v(v({},e.icon.attributes),V.path)}]}]}}}},I1={x:0,y:0,width:"100%",height:"100%"};function P4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function S8(c){return c.tag==="g"?c.children:[c]}var k8={hooks:function(){return{parseNodeAttributes:function(s,e){var r=e.getAttribute("data-fa-mask"),i=r?l1(r.split(" ").map(function(n){return n.trim()})):o3();return i.prefix||(i.prefix=J()),s.mask=i,s.maskId=e.getAttribute("data-fa-mask-id"),s}}},provides:function(a){a.generateAbstractMask=function(s){var e=s.children,r=s.attributes,i=s.main,n=s.mask,o=s.maskId,t=s.transform,f=i.width,l=i.icon,m=n.width,H=n.icon,V=w0({transform:t,containerWidth:m,iconWidth:f}),p={tag:"rect",attributes:v(v({},I1),{},{fill:"white"})},S=l.children?{children:l.children.map(P4)}:{},z={tag:"g",attributes:v({},V.inner),children:[P4(v({tag:l.tag,attributes:v(v({},l.attributes),V.path)},S))]},u={tag:"g",attributes:v({},V.outer),children:[z]},C="mask-".concat(o||R2()),x="clip-".concat(o||R2()),d={tag:"mask",attributes:v(v({},I1),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,u]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:S8(H)},d]};return e.push(b,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(C,")")},I1)}),{children:e,attributes:r}}}},A8={provides:function(a){var s=!1;K.matchMedia&&(s=K.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:v(v({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=v(v({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:v(v({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return s||o.children.push({tag:"animate",attributes:v(v({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(o),e.push({tag:"path",attributes:v(v({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:v(v({},n),{},{values:"1;0;0;0;0;1;"})}]}),s||e.push({tag:"path",attributes:v(v({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},T8={hooks:function(){return{parseNodeAttributes:function(s,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return s.symbol=i,s}}}},P8=[A0,p8,d8,M8,C8,b8,y8,w8,k8,A8,T8];_0(P8,{mixoutsTo:T});var F5=T.noAuto,B5=T.config,O5=T.library,I5=T.dom,o6=T.parse,U5=T.findIconDefinition,q5=T.toHtml,t6=T.icon,W5=T.layer,R8=T.text,D8=T.counter;var E8=["*"],F8=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},B8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},O8=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(s=>a[s]?s:null).filter(s=>s)},I8=c=>c.prefix!==void 0&&c.iconName!==void 0,U8=(c,a)=>I8(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},q8=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=y({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),W8=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...e){for(let r of e){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let i of r.icon[2])typeof i=="string"&&(this.definitions[r.prefix][i]=r)}}addIconPacks(...e){for(let r of e){let i=Object.keys(r).map(n=>r[n]);this.addIcons(...i)}}getIconDefinition(e,r){return e in this.definitions&&r in this.definitions[e]?this.definitions[e][r]:null}};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=y({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),j8=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(r){return new(r||a)},a.\u0275dir=V3({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[I2]});let c=a;return c})(),G8=(()=>{let a=class a{constructor(e,r){this.renderer=e,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};a.\u0275fac=function(r){return new(r||a)(G(P3),G(p3))},a.\u0275cmp=z1({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[I2,M1],ngContentSelectors:E8,decls:1,vars:0,template:function(r,i){r&1&&(F3(),B3(0))},encapsulation:2});let c=a;return c})(),Y5=(()=>{let a=class a{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,r,i,n,o){this.sanitizer=e,this.config=r,this.iconLibrary=i,this.stackItem=n,this.classes=[],o!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){B8();return}if(e){let r=this.icon!=null?this.icon:this.config.fallbackIcon,i=this.findIconDefinition(r);if(i!=null){let n=this.buildParams();this.renderIcon(i,n)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let r=U8(e,this.config.defaultPrefix);if("icon"in r)return r;let i=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return i??(F8(r),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?o6.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...O8(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,r){let i=t6(e,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))}};a.\u0275fac=function(r){return new(r||a)(G(E1),G(q8),G(W8),G(j8,8),G(G8,8))},a.\u0275cmp=z1({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,i){r&2&&(E3("innerHTML",i.renderedIconHTML,A3),D3("title",i.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[I2,M1],decls:0,vars:0,template:function(r,i){},encapsulation:2});let c=a;return c})();var K5=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=B2({type:a}),a.\u0275inj=O2({});let c=a;return c})();var Q5={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]};var Z5={prefix:"fas",iconName:"sack-dollar",icon:[512,512,[128176],"f81d","M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z"]};var c7={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]};var a7={prefix:"fas",iconName:"basket-shopping",icon:[576,512,["shopping-basket"],"f291","M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"]};var e7={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]};var r7={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]};var s7={prefix:"fas",iconName:"truck-fast",icon:[640,512,["shipping-fast"],"f48b","M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"]};export{t5 as a,f5 as b,a4 as c,P5 as d,R5 as e,W8 as f,Y5 as g,K5 as h,Q5 as i,Z5 as j,c7 as k,a7 as l,e7 as m,r7 as n,s7 as o};
//# sourceMappingURL=chunk-QGYT3LZX.js.map
