const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-lRfHP3w1.js","assets/web-kFgp8PVL.js","assets/index-BYniia50.css"])))=>i.map(i=>d[i]);
import{c as v,a as X,s as W,b as N,d as Ue,u as he,e as pe,o as Y,r as me,f as P,g as ge,h as k,i as Q,j as Me,k as je,l as we,m as Fe,n as We,p as qe,S as ye,q as Be,t as ze,w as I,x as j,y as ve,z as F,A as U,B as He,C as Ke,E as Ve,D as Ze}from"./web-kFgp8PVL.js";const H="Invariant Violation",{setPrototypeOf:Ge=function(e,n){return e.__proto__=n,e}}=Object;class ee extends Error{framesToPop=1;name=H;constructor(n=H){super(typeof n=="number"?`${H}: ${n} (see https://github.com/apollographql/invariant-packages)`:n),Ge(this,ee.prototype)}}function K(e,n){if(!e)throw new ee(n)}const Je=/^[A-Za-z]:\//;function Xe(e=""){return e&&e.replace(/\\/g,"/").replace(Je,n=>n.toUpperCase())}const Ye=/^[/\\]{2}/,Qe=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,et=/^[A-Za-z]:$/,tt=function(e){if(e.length===0)return".";e=Xe(e);const n=e.match(Ye),t=G(e),r=e[e.length-1]==="/";return e=nt(e,!t),e.length===0?t?"/":r?"./":".":(r&&(e+="/"),et.test(e)&&(e+="/"),n?t?`//${e}`:`//./${e}`:t&&!G(e)?`/${e}`:e)},be=function(...e){if(e.length===0)return".";let n;for(const t of e)t&&t.length>0&&(n===void 0?n=t:n+=`/${t}`);return n===void 0?".":tt(n.replace(/\/\/+/g,"/"))};function nt(e,n){let t="",r=0,o=-1,a=0,i=null;for(let s=0;s<=e.length;++s){if(s<e.length)i=e[s];else{if(i==="/")break;i="/"}if(i==="/"){if(!(o===s-1||a===1))if(a===2){if(t.length<2||r!==2||t[t.length-1]!=="."||t[t.length-2]!=="."){if(t.length>2){const c=t.lastIndexOf("/");c===-1?(t="",r=0):(t=t.slice(0,c),r=t.length-1-t.lastIndexOf("/")),o=s,a=0;continue}else if(t.length>0){t="",r=0,o=s,a=0;continue}}n&&(t+=t.length>0?"/..":"..",r=2)}else t.length>0?t+=`/${e.slice(o+1,s)}`:t=e.slice(o+1,s),r=s-o-1;o=s,a=0}else i==="."&&a!==-1?++a:a=-1}return t}const G=function(e){return Qe.test(e)};function rt(e){return`virtual:${e}`}function ot(e){return e.handler?.endsWith(".html")?G(e.handler)?e.handler:be(e.root,e.handler):`$vinxi/handler/${e.name}`}const at=new Proxy({},{get(e,n){return K(typeof n=="string","Bundler name should be a string"),{name:n,type:"client",handler:rt(ot({name:n})),baseURL:"/_build",chunks:new Proxy({},{get(t,r){K(typeof r=="string","Chunk expected");let o=be("/_build",r+".mjs");return{import(){return import(o)},output:{path:o}}}}),inputs:new Proxy({},{get(t,r){K(typeof r=="string","Input must be string");let o=window.manifest[r].output;return{async import(){return import(o)},async assets(){return window.manifest[r].assets},output:{path:o}}}})}}});globalThis.MANIFEST=at;const Ee=X(),st=["title","meta"],ae=[],se=["name","http-equiv","content","charset","media"].concat(["property"]),ie=(e,n)=>{const t=Object.fromEntries(Object.entries(e.props).filter(([r])=>n.includes(r)).sort());return(Object.hasOwn(t,"name")||Object.hasOwn(t,"property"))&&(t.name=t.name||t.property,delete t.property),e.tag+JSON.stringify(t)};function it(){if(!W.context){const t=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(t,r=>r.parentNode.removeChild(r))}const e=new Map;function n(t){if(t.ref)return t.ref;let r=document.querySelector(`[data-sm="${t.id}"]`);return r?(r.tagName.toLowerCase()!==t.tag&&(r.parentNode&&r.parentNode.removeChild(r),r=document.createElement(t.tag)),r.removeAttribute("data-sm")):r=document.createElement(t.tag),r}return{addTag(t){if(st.indexOf(t.tag)!==-1){const a=t.tag==="title"?ae:se,i=ie(t,a);e.has(i)||e.set(i,[]);let s=e.get(i),c=s.length;s=[...s,t],e.set(i,s);let l=n(t);t.ref=l,N(l,t.props);let u=null;for(var r=c-1;r>=0;r--)if(s[r]!=null){u=s[r];break}return l.parentNode!=document.head&&document.head.appendChild(l),u&&u.ref&&u.ref.parentNode&&document.head.removeChild(u.ref),c}let o=n(t);return t.ref=o,N(o,t.props),o.parentNode!=document.head&&document.head.appendChild(o),-1},removeTag(t,r){const o=t.tag==="title"?ae:se,a=ie(t,o);if(t.ref){const i=e.get(a);if(i){if(t.ref.parentNode){t.ref.parentNode.removeChild(t.ref);for(let s=r-1;s>=0;s--)i[s]!=null&&document.head.appendChild(i[s].ref)}i[r]=null,e.set(a,i)}else t.ref.parentNode&&t.ref.parentNode.removeChild(t.ref)}}}}const lt=e=>{const n=it();return v(Ee.Provider,{value:n,get children(){return e.children}})},ct=(e,n,t)=>(ut({tag:e,props:n,setting:t,id:Ue(),get name(){return n.name||n.property}}),null);function ut(e){const n=he(Ee);if(!n)throw new Error("<MetaProvider /> should be in the tree");pe(()=>{const t=n.addTag(e);Y(()=>n.removeTag(e,t))})}const dt=e=>ct("title",e,{escape:!0,close:!0});function Re(){let e=new Set;function n(o){return e.add(o),()=>e.delete(o)}let t=!1;function r(o,a){if(t)return!(t=!1);const i={to:o,options:a,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(const s of e)s.listener({...i,from:s.location,retry:c=>{c&&(t=!0),s.navigate(o,{...a,resolve:!1})}});return!i.defaultPrevented}return{subscribe:n,confirm:r}}let J;function te(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),J=window.history.state._depth}te();function ft(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function ht(e,n){let t=!1;return()=>{const r=J;te();const o=r==null?null:J-r;if(t){t=!1;return}o&&n(o)?(t=!0,window.history.go(-o)):e()}}const pt=/^(?:[a-z0-9]+:)?\/\//i,mt=/^\/+|(\/)\/+$/g,Pe="http://sr";function D(e,n=!1){const t=e.replace(mt,"$1");return t?n||/^[?#]/.test(t)?t:"/"+t:""}function q(e,n,t){if(pt.test(n))return;const r=D(e),o=t&&D(t);let a="";return!o||n.startsWith("/")?a=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?a=r+o:a=o,(a||"/")+D(n,!a)}function gt(e,n){return D(e).replace(/\/*(\*.*)?$/g,"")+D(n)}function Ce(e){const n={};return e.searchParams.forEach((t,r)=>{r in n?Array.isArray(n[r])?n[r].push(t):n[r]=[n[r],t]:n[r]=t}),n}function wt(e,n,t){const[r,o]=e.split("/*",2),a=r.split("/").filter(Boolean),i=a.length;return s=>{const c=s.split("/").filter(Boolean),l=c.length-i;if(l<0||l>0&&o===void 0&&!n)return null;const u={path:i?"":"/",params:{}},f=p=>t===void 0?void 0:t[p];for(let p=0;p<i;p++){const m=a[p],E=m[0]===":",d=E?c[p]:c[p].toLowerCase(),h=E?m.slice(1):m.toLowerCase();if(E&&V(d,f(h)))u.params[h]=d;else if(E||!V(d,h))return null;u.path+=`/${d}`}if(o){const p=l?c.slice(-l).join("/"):"";if(V(p,f(o)))u.params[o]=p;else return null}return u}}function V(e,n){const t=r=>r===e;return n===void 0?!0:typeof n=="string"?t(n):typeof n=="function"?n(e):Array.isArray(n)?n.some(t):n instanceof RegExp?n.test(e):!1}function yt(e){const[n,t]=e.pattern.split("/*",2),r=n.split("/").filter(Boolean);return r.reduce((o,a)=>o+(a.startsWith(":")?2:3),r.length-(t===void 0?0:1))}function Ae(e){const n=new Map,t=ge();return new Proxy({},{get(r,o){return n.has(o)||me(t,()=>n.set(o,P(()=>e()[o]))),n.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Se(e){let n=/(\/?\:[^\/]+)\?/.exec(e);if(!n)return[e];let t=e.slice(0,n.index),r=e.slice(n.index+n[0].length);const o=[t,t+=n[1]];for(;n=/^(\/\:[^\/]+)\?/.exec(r);)o.push(t+=n[1]),r=r.slice(n[0].length);return Se(r).reduce((a,i)=>[...a,...o.map(s=>s+i)],[])}const vt=100,bt=X(),$e=X();function Et(e,n=""){const{component:t,preload:r,load:o,children:a,info:i}=e,s=!a||Array.isArray(a)&&!a.length,c={key:e,component:t,preload:r||o,info:i};return xe(e.path).reduce((l,u)=>{for(const f of Se(u)){const p=gt(n,f);let m=s?p:p.split("/*",1)[0];m=m.split("/").map(E=>E.startsWith(":")||E.startsWith("*")?E:encodeURIComponent(E)).join("/"),l.push({...c,originalPath:u,pattern:m,matcher:wt(m,!s,e.matchFilters)})}return l},[])}function Rt(e,n=0){return{routes:e,score:yt(e[e.length-1])*1e4-n,matcher(t){const r=[];for(let o=e.length-1;o>=0;o--){const a=e[o],i=a.matcher(t);if(!i)return null;r.unshift({...i,route:a})}return r}}}function xe(e){return Array.isArray(e)?e:[e]}function Le(e,n="",t=[],r=[]){const o=xe(e);for(let a=0,i=o.length;a<i;a++){const s=o[a];if(s&&typeof s=="object"){s.hasOwnProperty("path")||(s.path="");const c=Et(s,n);for(const l of c){t.push(l);const u=Array.isArray(s.children)&&s.children.length===0;if(s.children&&!u)Le(s.children,l.pattern,t,r);else{const f=Rt([...t],r.length);r.push(f)}t.pop()}}}return t.length?r:r.sort((a,i)=>i.score-a.score)}function Z(e,n){for(let t=0,r=e.length;t<r;t++){const o=e[t].matcher(n);if(o)return o}return[]}function Pt(e,n,t){const r=new URL(Pe),o=P(u=>{const f=e();try{return new URL(f,r)}catch{return console.error(`Invalid path ${f}`),u}},r,{equals:(u,f)=>u.href===f.href}),a=P(()=>o().pathname),i=P(()=>o().search,!0),s=P(()=>o().hash),c=()=>"",l=Q(i,()=>Ce(o()));return{get pathname(){return a()},get search(){return i()},get hash(){return s()},get state(){return n()},get key(){return c()},query:t?t(l):Ae(l)}}let $;function Ct(){return $}function At(e,n,t,r={}){const{signal:[o,a],utils:i={}}=e,s=i.parsePath||(g=>g),c=i.renderPath||(g=>g),l=i.beforeLeave||Re(),u=q("",r.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!o().value&&a({value:u,replace:!0,scroll:!1});const[f,p]=k(!1);let m;const E=(g,w)=>{w.value===d()&&w.state===b()||(m===void 0&&p(!0),$=g,m=w,Me(()=>{m===w&&(h(m.value),y(m.state),We(),S[1](R=>R.filter(x=>x.pending)))}).finally(()=>{m===w&&je(()=>{$=void 0,g==="navigate"&&Ie(m),p(!1),m=void 0})}))},[d,h]=k(o().value),[b,y]=k(o().state),A=Pt(d,b,i.queryWrapper),C=[],S=k([]),T=P(()=>typeof r.transformUrl=="function"?Z(n(),r.transformUrl(A.pathname)):Z(n(),A.pathname)),ne=()=>{const g=T(),w={};for(let R=0;R<g.length;R++)Object.assign(w,g[R].params);return w},Te=i.paramsWrapper?i.paramsWrapper(ne,n):Ae(ne),re={pattern:u,path:()=>u,outlet:()=>null,resolvePath(g){return q(u,g)}};return pe(Q(o,g=>E("native",g),{defer:!0})),{base:re,location:A,params:Te,isRouting:f,renderPath:c,parsePath:s,navigatorFactory:ke,matches:T,beforeLeave:l,preloadRoute:De,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:S};function Oe(g,w,R){we(()=>{if(typeof w=="number"){w&&(i.go?i.go(w):console.warn("Router integration does not support relative routing"));return}const x=!w||w[0]==="?",{replace:B,resolve:L,scroll:z,state:O}={replace:!1,resolve:!x,scroll:!0,...R},M=L?g.resolvePath(w):q(x&&A.pathname||"",w);if(M===void 0)throw new Error(`Path '${w}' is not a routable path`);if(C.length>=vt)throw new Error("Too many redirects");const oe=d();(M!==oe||O!==b())&&(Fe||l.confirm(M,R)&&(C.push({value:oe,replace:B,scroll:z,state:b()}),E("navigate",{value:M,state:O})))})}function ke(g){return g=g||he($e)||re,(w,R)=>Oe(g,w,R)}function Ie(g){const w=C[0];w&&(a({...g,replace:w.replace,scroll:w.scroll}),C.length=0)}function De(g,w){const R=Z(n(),g.pathname),x=$;$="preload";for(let B in R){const{route:L,params:z}=R[B];L.component&&L.component.preload&&L.component.preload();const{preload:O}=L;w&&O&&me(t(),()=>O({params:z,location:{pathname:g.pathname,search:g.search,hash:g.hash,query:Ce(g),state:null,key:""},intent:"preload"}))}$=x}}function St(e,n,t,r){const{base:o,location:a,params:i}=e,{pattern:s,component:c,preload:l}=r().route,u=P(()=>r().path);c&&c.preload&&c.preload();const f=l?l({params:i,location:a,intent:$||"initial"}):void 0;return{parent:n,pattern:s,path:u,outlet:()=>c?v(c,{params:i,location:a,data:f,get children(){return t()}}):t(),resolvePath(m){return q(o.path(),m,u())}}}const $t=e=>n=>{const{base:t}=n,r=qe(()=>n.children),o=P(()=>Le(r(),n.base||""));let a;const i=At(e,o,()=>a,{base:t,singleFlight:n.singleFlight,transformUrl:n.transformUrl});return e.create&&e.create(i),v(bt.Provider,{value:i,get children(){return v(xt,{routerState:i,get root(){return n.root},get preload(){return n.rootPreload||n.rootLoad},get children(){return[P(()=>(a=ge())&&null),v(Lt,{routerState:i,get branches(){return o()}})]}})}})};function xt(e){const n=e.routerState.location,t=e.routerState.params,r=P(()=>e.preload&&we(()=>{e.preload({params:t,location:n,intent:Ct()||"initial"})}));return v(ye,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:o=>v(o,{params:t,location:n,get data(){return r()},get children(){return e.children}})})}function Lt(e){const n=[];let t;const r=P(Q(e.routerState.matches,(o,a,i)=>{let s=a&&o.length===a.length;const c=[];for(let l=0,u=o.length;l<u;l++){const f=a&&a[l],p=o[l];i&&f&&p.route.key===f.route.key?c[l]=i[l]:(s=!1,n[l]&&n[l](),Be(m=>{n[l]=m,c[l]=St(e.routerState,c[l-1]||e.routerState.base,le(()=>r()[l+1]),()=>e.routerState.matches()[l])}))}return n.splice(o.length).forEach(l=>l()),i&&s?i:(t=c[0],c)}));return le(()=>r()&&t)()}const le=e=>()=>v(ye,{get when(){return e()},keyed:!0,children:n=>v($e.Provider,{value:n,get children(){return n.outlet()}})});function Nt([e,n],t,r){return[e,o=>n(r(o))]}function _t(e){let n=!1;const t=o=>typeof o=="string"?{value:o}:o,r=Nt(k(t(e.get()),{equals:(o,a)=>o.value===a.value&&o.state===a.state}),void 0,o=>(!n&&e.set(o),W.registry&&!W.done&&(W.done=!0),o));return e.init&&Y(e.init((o=e.get())=>{n=!0,r[1](t(o)),n=!1})),$t({signal:r,create:e.create,utils:e.utils})}function Tt(e,n,t){return e.addEventListener(n,t),()=>e.removeEventListener(n,t)}function Ot(e,n){const t=e&&document.getElementById(e);t?t.scrollIntoView():n&&window.scrollTo(0,0)}const kt=new Map;function It(e=!0,n=!1,t="/_server",r){return o=>{const a=o.base.path(),i=o.navigatorFactory(o.base);let s,c;function l(d){return d.namespaceURI==="http://www.w3.org/2000/svg"}function u(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)return;const h=d.composedPath().find(T=>T instanceof Node&&T.nodeName.toUpperCase()==="A");if(!h||n&&!h.hasAttribute("link"))return;const b=l(h),y=b?h.href.baseVal:h.href;if((b?h.target.baseVal:h.target)||!y&&!h.hasAttribute("state"))return;const C=(h.getAttribute("rel")||"").split(/\s+/);if(h.hasAttribute("download")||C&&C.includes("external"))return;const S=b?new URL(y,document.baseURI):new URL(y);if(!(S.origin!==window.location.origin||a&&S.pathname&&!S.pathname.toLowerCase().startsWith(a.toLowerCase())))return[h,S]}function f(d){const h=u(d);if(!h)return;const[b,y]=h,A=o.parsePath(y.pathname+y.search+y.hash),C=b.getAttribute("state");d.preventDefault(),i(A,{resolve:!1,replace:b.hasAttribute("replace"),scroll:!b.hasAttribute("noscroll"),state:C?JSON.parse(C):void 0})}function p(d){const h=u(d);if(!h)return;const[b,y]=h;r&&(y.pathname=r(y.pathname)),o.preloadRoute(y,b.getAttribute("preload")!=="false")}function m(d){clearTimeout(s);const h=u(d);if(!h)return c=null;const[b,y]=h;c!==b&&(r&&(y.pathname=r(y.pathname)),s=setTimeout(()=>{o.preloadRoute(y,b.getAttribute("preload")!=="false"),c=b},20))}function E(d){if(d.defaultPrevented)return;let h=d.submitter&&d.submitter.hasAttribute("formaction")?d.submitter.getAttribute("formaction"):d.target.getAttribute("action");if(!h)return;if(!h.startsWith("https://action/")){const y=new URL(h,Pe);if(h=o.parsePath(y.pathname+y.search),!h.startsWith(t))return}if(d.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const b=kt.get(h);if(b){d.preventDefault();const y=new FormData(d.target,d.submitter);b.call({r:o,f:d.target},d.target.enctype==="multipart/form-data"?y:new URLSearchParams(y))}}ze(["click","submit"]),document.addEventListener("click",f),e&&(document.addEventListener("mousemove",m,{passive:!0}),document.addEventListener("focusin",p,{passive:!0}),document.addEventListener("touchstart",p,{passive:!0})),document.addEventListener("submit",E),Y(()=>{document.removeEventListener("click",f),e&&(document.removeEventListener("mousemove",m),document.removeEventListener("focusin",p),document.removeEventListener("touchstart",p)),document.removeEventListener("submit",E)})}}function Dt(e){const n=()=>{const r=window.location.pathname.replace(/^\/+/,"/")+window.location.search,o=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:r+window.location.hash,state:o}},t=Re();return _t({get:n,set({value:r,replace:o,scroll:a,state:i}){o?window.history.replaceState(ft(i),"",r):window.history.pushState(i,"",r),Ot(decodeURIComponent(window.location.hash.slice(1)),a),te()},init:r=>Tt(window,"popstate",ht(r,o=>{if(o&&o<0)return!t.confirm(o);{const a=n();return!t.confirm(a.value,{state:a.state})}})),create:It(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:t}})(e)}function Ut(e){e.forEach(n=>{if(!n.attrs.href)return;let t=document.head.querySelector(`link[href="${n.attrs.href}"]`);t||(t=document.createElement("link"),t.setAttribute("rel","preload"),t.setAttribute("as","style"),t.setAttribute("href",n.attrs.href),document.head.appendChild(t))})}var Mt=U("<style>"),jt=U("<link>"),Ft=U("<script> "),Wt=U("<noscript>");const qt={style:e=>(()=>{var n=I(Mt);return N(n,j(()=>e.attrs),!1,!0),ve(n,()=>e.children),F(),n})(),link:e=>(()=>{var n=I(jt);return N(n,j(()=>e.attrs),!1,!1),F(),n})(),script:e=>e.attrs.src?(()=>{var n=I(Ft);return N(n,j(()=>e.attrs,{get id(){return e.key}}),!1,!0),F(),n})():null,noscript:e=>(()=>{var n=I(Wt);return N(n,j(()=>e.attrs),!1,!0),F(),n})()};function Bt(e,n){let{tag:t,attrs:{key:r,...o}={key:void 0},children:a}=e;return qt[t]({attrs:{...o,nonce:n},key:r,children:a})}function zt(e,n,t,r="default"){return He(async()=>{{const a=(await e.import())[r],s=(await n.inputs?.[e.src].assets()).filter(l=>l.tag==="style"||l.attrs.rel==="stylesheet");return typeof window<"u"&&Ut(s),{default:l=>[...s.map(u=>Bt(u)),v(a,l)]}}})}const _={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function Ht(e={}){const n={options:e,rootNode:Ne(),staticRoutesMap:{}},t=r=>e.strictTrailingSlash?r:r.replace(/\/$/,"")||"/";if(e.routes)for(const r in e.routes)ce(n,t(r),e.routes[r]);return{ctx:n,lookup:r=>Kt(n,t(r)),insert:(r,o)=>ce(n,t(r),o),remove:r=>Vt(n,t(r))}}function Kt(e,n){const t=e.staticRoutesMap[n];if(t)return t.data;const r=n.split("/"),o={};let a=!1,i=null,s=e.rootNode,c=null;for(let l=0;l<r.length;l++){const u=r[l];s.wildcardChildNode!==null&&(i=s.wildcardChildNode,c=r.slice(l).join("/"));const f=s.children.get(u);if(f===void 0){if(s&&s.placeholderChildren.length>1){const p=r.length-l;s=s.placeholderChildren.find(m=>m.maxDepth===p)||null}else s=s.placeholderChildren[0]||null;if(!s)break;s.paramName&&(o[s.paramName]=u),a=!0}else s=f}return(s===null||s.data===null)&&i!==null&&(s=i,o[s.paramName||"_"]=c,a=!0),s?a?{...s.data,params:a?o:void 0}:s.data:null}function ce(e,n,t){let r=!0;const o=n.split("/");let a=e.rootNode,i=0;const s=[a];for(const c of o){let l;if(l=a.children.get(c))a=l;else{const u=Zt(c);l=Ne({type:u,parent:a}),a.children.set(c,l),u===_.PLACEHOLDER?(l.paramName=c==="*"?`_${i++}`:c.slice(1),a.placeholderChildren.push(l),r=!1):u===_.WILDCARD&&(a.wildcardChildNode=l,l.paramName=c.slice(3)||"_",r=!1),s.push(l),a=l}}for(const[c,l]of s.entries())l.maxDepth=Math.max(s.length-c,l.maxDepth||0);return a.data=t,r===!0&&(e.staticRoutesMap[n]=a),a}function Vt(e,n){let t=!1;const r=n.split("/");let o=e.rootNode;for(const a of r)if(o=o.children.get(a),!o)return t;if(o.data){const a=r.at(-1)||"";o.data=null,Object.keys(o.children).length===0&&o.parent&&(o.parent.children.delete(a),o.parent.wildcardChildNode=null,o.parent.placeholderChildren=[]),t=!0}return t}function Ne(e={}){return{type:e.type||_.NORMAL,maxDepth:0,parent:e.parent||null,children:new Map,data:e.data||null,paramName:e.paramName||null,wildcardChildNode:null,placeholderChildren:[]}}function Zt(e){return e.startsWith("**")?_.WILDCARD:e[0]===":"||e==="*"?_.PLACEHOLDER:_.NORMAL}const Gt="modulepreload",Jt=function(e){return"/_build/"+e},ue={},Xt=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=i?.nonce||i?.getAttribute("nonce");o=Promise.allSettled(t.map(c=>{if(c=Jt(c),c in ue)return;ue[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":Gt,l||(f.as="script"),f.crossOrigin="",f.href=c,s&&f.setAttribute("nonce",s),document.head.appendChild(f),l)return new Promise((p,m)=>{f.addEventListener("load",p),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return o.then(i=>{for(const s of i||[])s.status==="rejected"&&a(s.reason);return n().catch(a)})},_e=[{page:!0,$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>Xt(()=>import("./index-lRfHP3w1.js"),__vite__mapDeps([0,1,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/index.tsx?pick=default&pick=$css"].output.path)},path:"/",filePath:"/Users/pradnyabhukan/Desktop/VSCodeWorkspace/Frontend-fridays/Clipboard landing page/Clipboard/src/routes/index.tsx"}],Yt=Qt(_e.filter(e=>e.page));function Qt(e){function n(t,r,o,a){const i=Object.values(t).find(s=>o.startsWith(s.id+"/"));return i?(n(i.children||(i.children=[]),r,o.slice(i.id.length)),t):(t.push({...r,id:o,path:o.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"")}),t)}return e.sort((t,r)=>t.path.length-r.path.length).reduce((t,r)=>n(t,r,r.path,r.path),[])}function en(e){return e.$HEAD||e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}Ht({routes:_e.reduce((e,n)=>{if(!en(n))return e;let t=n.path.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"").replace(/\*([^/]*)/g,(r,o)=>`**:${o}`).split("/").map(r=>r.startsWith(":")||r.startsWith("*")?r:encodeURIComponent(r)).join("/");if(/:[^/]*\?/g.test(t))throw new Error(`Optional parameters are not supported in API routes: ${t}`);if(e[t])throw new Error(`Duplicate API routes for "${t}" found at "${e[t].route.path}" and "${n.path}"`);return e[t]={route:n},e},{})});function tn(){function e(t){return{...t,...t.$$route?t.$$route.require().route:void 0,info:{...t.$$route?t.$$route.require().route.info:{},filesystem:!0},component:t.$component&&zt(t.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:t.children?t.children.map(e):void 0}}return Yt.map(e)}let de;const nn=()=>de||(de=tn());function rn(){return v(Dt,{root:e=>v(lt,{get children(){return[v(dt,{children:"Clipboard"}),v(Ke,{get children(){return e.children}})]}}),get children(){return v(nn,{})}})}const on=e=>null;var an=U("<span style=font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;>");const sn=e=>{const n="Error | Uncaught Client Exception";return v(Ve,{fallback:t=>(console.error(t),[(()=>{var r=I(an);return ve(r,n),r})(),v(on,{code:500})]),get children(){return e.children}})};function ln(e,n){return Ze(e,n)}function fe(e){return e.children}function cn(){return v(fe,{get children(){return v(fe,{get children(){return v(sn,{get children(){return v(rn,{})}})}})}})}ln(()=>v(cn,{}),document.getElementById("app"));const fn=void 0;export{fn as default};
