import{_,A as w}from"./AnimatedText-D54Uj49d.js";/* empty css                                                                 */import{C as h,r as v,s as j,D as z,d as m,e as l,f as r,A as x,F as f,m as C,p as M,E as A,t as y,h as u}from"./index-CRtST-Pn.js";import{R as B}from"./References-CfbzqXo3.js";import"./references-D7XCkUV6.js";/* empty css                                                                   *//**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),I=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,s)=>s?s.toUpperCase():a.toLowerCase()),V=e=>{const t=I(e);return t.charAt(0).toUpperCase()+t.slice(1)},S=(...e)=>e.filter((t,a,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===a).join(" ").trim();/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=({size:e,strokeWidth:t=2,absoluteStrokeWidth:a,color:s,iconNode:o,name:i,class:n,...p},{slots:k})=>h("svg",{...c,width:e||c.width,height:e||c.height,stroke:s||c.stroke,"stroke-width":a?Number(t)*24/Number(e):t,class:S("lucide",...i?[`lucide-${g(V(i))}-icon`,`lucide-${g(i)}`]:["lucide-icon"]),...p},[...o.map(b=>h(...b)),...k.default?[k.default()]:[]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=(e,t)=>(a,{slots:s})=>h(R,{...a,iconNode:t,name:e},s);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=d("briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=d("building-2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=d("truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=d("wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]),U={class:"max-w-7xl mx-auto"},D={class:"text-xl font-semibold text-gray-800 mb-2"},E={class:"text-gray-600 text-sm"},K={__name:"Services",setup(e){const t=[{icon:$,title:"Projektovanje i proizvodnja",description:"Razvijamo i izrađujemo industrijske dizalice po meri vaših potreba."},{icon:H,title:"Isporuka i montaža",description:"Bezbedna dostava i profesionalna ugradnja opreme širom regiona."},{icon:L,title:"Servis i održavanje",description:"Brz i efikasan servis sa obezbeđenim rezervnim delovima."},{icon:q,title:"Izrada kranskih staza",description:"Konstrukcija i instalacija kranskih staza za sve vrste dizalica."}],a=v(null),s=v(!1);return j(()=>{const o=new IntersectionObserver(([i])=>{i.isIntersecting&&(s.value=!0)},{threshold:.2});a.value&&o.observe(a.value)}),z(()=>{}),(o,i)=>(l(),m("section",{ref_key:"sectionRef",ref:a,class:"bg-white py-24 px-6 md:px-12 lg:px-20 transition-all duration-1000 ease-in-out"},[r("div",U,[r("div",{class:x(["text-center transition-all duration-1000",s.value?"opacity-100 translate-y-0":"opacity-0 translate-y-10"])},i[0]||(i[0]=[r("h2",{class:"text-4xl font-bold text-gray-800 mb-4"},"Naše usluge",-1),r("p",{class:"text-gray-600 text-lg max-w-2xl mx-auto mb-12"}," SAVAPEX nudi kompletna rešenja za industrijsku dizalnu tehniku – od ideje do realizacije. ",-1)]),2),r("div",{class:x(["grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 transition-all duration-1000",s.value?"opacity-100 translate-y-0":"opacity-0 translate-y-10"])},[(l(),m(f,null,C(t,(n,p)=>r("div",{key:p,class:"bg-slate-50 border border-slate-200 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"},[(l(),M(A(n.icon),{class:"w-12 h-12 mx-auto text-brandOrange mb-4"})),r("h3",D,y(n.title),1),r("p",E,y(n.description),1)])),64))],2)])],512))}},N=_(K,[["__scopeId","data-v-dce6eec2"]]),G={__name:"ServicesView",setup(e){return(t,a)=>(l(),m(f,null,[u(w,{title:"Usluge koje pružamo",subtitle:"Kompletna usluga za vaš biznis"}),u(N),u(B)],64))}};export{G as default};
