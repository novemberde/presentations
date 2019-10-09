var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function f(){return s(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function p(t,e){e=""+e,t.data!==e&&(t.data=e)}function h(t,e){(null!=e||t.value)&&(t.value=e)}let $;function g(t){$=t}const y=[],v=[],_=[],b=[],x=Promise.resolve();let w=!1;function E(t){_.push(t)}function C(){const t=new Set;do{for(;y.length;){const t=y.shift();g(t),M(t.$$)}for(;v.length;)v.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];t.has(n)||(n(),t.add(n))}_.length=0}while(y.length);for(;b.length;)b.pop()();w=!1}function M(t){t.fragment&&(t.update(t.dirty),o(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(E))}const S=new Set;function A(t,e){t.$$.dirty||(y.push(t),w||(w=!0,x.then(C)),t.$$.dirty=n()),t.$$.dirty[e]=!0}function j(u,i,l,c,a,s){const f=$;g(u);const d=i.props||{},m=u.$$={fragment:null,ctx:null,props:s,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:null};let p=!1;var h,y,v;m.ctx=l?l(u,d,(t,e,n=e)=>(m.ctx&&a(m.ctx[t],m.ctx[t]=n)&&(m.bound[t]&&m.bound[t](n),p&&A(u,t)),e)):d,m.update(),p=!0,o(m.before_update),m.fragment=c(m.ctx),i.target&&(i.hydrate?m.fragment.l((v=i.target,Array.from(v.childNodes))):m.fragment.c(),i.intro&&((h=u.$$.fragment)&&h.i&&(S.delete(h),h.i(y))),function(t,n,u){const{fragment:i,on_mount:l,on_destroy:c,after_update:a}=t.$$;i.m(n,u),E(()=>{const n=l.map(e).filter(r);c?c.push(...n):o(n),t.$$.on_mount=[]}),a.forEach(E)}(u,i.target,i.anchor),C()),g(f)}class k{$destroy(){var e,n;n=1,(e=this).$$.fragment&&(o(e.$$.on_destroy),e.$$.fragment.d(n),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function N(t,e,n){const o=Object.create(t);return o.item=e[n],o}function O(t){var e,n,o=t.item+"";return{c(){e=a("li"),n=s(o)},m(t,o){l(t,e,o),i(e,n)},p(t,e){t.items&&o!==(o=e.item+"")&&p(n,o)},d(t){t&&c(e)}}}function B(e){var n,r,u,$,g,y,v,_,b,x,w,E,C,M,S,A=Math.round(e.memory/1e6)+"";let j=e.items,k=[];for(let t=0;t<j.length;t+=1)k[t]=O(N(e,j,t));return{c(){n=a("div"),(r=a("h1")).textContent="Svelte",u=f(),$=a("input"),g=f(),y=a("div"),v=s(e.title),_=f(),b=a("div"),x=s("Memory Usage: "),w=s(A),E=s("MB"),C=f(),M=a("ul");for(let t=0;t<k.length;t+=1)k[t].c();var t,o,i;m($,"type","text"),m($,"class","svelte-nomd0u"),m(b,"class","memory svelte-nomd0u"),t="display",o="none",M.style.setProperty(t,o,i?"important":""),m(n,"class","App-header svelte-nomd0u"),S=[d($,"input",e.input_input_handler),d($,"change",e.handleChange)]},m(t,o){l(t,n,o),i(n,r),i(n,u),i(n,$),h($,e.title),i(n,g),i(n,y),i(y,v),i(n,_),i(n,b),i(b,x),i(b,w),i(b,E),i(n,C),i(n,M);for(let t=0;t<k.length;t+=1)k[t].m(M,null)},p(t,e){if(t.title&&$.value!==e.title&&h($,e.title),t.title&&p(v,e.title),t.memory&&A!==(A=Math.round(e.memory/1e6)+"")&&p(w,A),t.items){let n;for(j=e.items,n=0;n<j.length;n+=1){const o=N(e,j,n);k[n]?k[n].p(t,o):(k[n]=O(o),k[n].c(),k[n].m(M,null))}for(;n<k.length;n+=1)k[n].d(1);k.length=j.length}},i:t,o:t,d(t){t&&c(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(k,t),o(S)}}}function L(t,e,n){let o="",r=[],u=0;return setInterval(()=>{n("memory",u=window.performance.memory.usedJSHeapSize)},.5),{title:o,items:r,memory:u,handleChange:function(){const t=[];for(let e=0;e<4e4;e++)t.push(o);n("items",r=t)},input_input_handler:function(){o=this.value,n("title",o)}}}return new class extends k{constructor(t){super(),j(this,t,L,B,u,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
