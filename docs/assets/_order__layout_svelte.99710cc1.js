import{S as h,i as w,s as v,d as i,b as C,a as g,e as d,f,h as p,j as O,u as R,k as x,l as L,t as b,m as S,p as E,x as j,n as u,q as B,r as N,w as q}from"./index.a920b4c2.js";const z="F:/Svelte/svelte-module-poc/src/pages/order/_layout.svelte";function m(r){let e,s;const a=r[1].default,t=C(a,r,r[0],null),n={c:function(){e=d("section"),t&&t.c(),f(e,"id","order"),p(e,z,1,0,36)},l:function(c){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(c,l){O(c,e,l),t&&t.m(e,null),s=!0},p:function(c,[l]){t&&t.p&&(!s||l&1)&&R(t,a,c,c[0],s?L(a,c[0],l,null):x(c[0]),null)},i:function(c){s||(b(t,c),s=!0)},o:function(c){S(t,c),s=!1},d:function(c){c&&E(e),t&&t.d(c)}};return i("SvelteRegisterBlock",{block:n,id:m.name,type:"component",source:"",ctx:r}),n}function F(r,e,s){let{$$slots:a={},$$scope:t}=e;g("Layout",a,["default"]);const n=[];return Object.keys(e).forEach(o=>{!~n.indexOf(o)&&o.slice(0,2)!=="$$"&&o!=="slot"&&console.warn(`<Layout> was created with unknown prop '${o}'`)}),r.$$set=o=>{"$$scope"in o&&s(0,t=o.$$scope)},[t,a]}class G extends h{constructor(e){super(e),w(this,e,F,m,v,{}),i("SvelteRegisterComponent",{component:this,tagName:"Layout",options:e,id:m.name})}}const W=G;const y="F:/Svelte/svelte-module-poc/src/components/Orders/Orders.svelte";function _(r){let e,s;const a={c:function(){e=d("div"),s=d("span"),s.textContent="This is Order Component",f(s,"class","text s-sKzJsGEMsHWc"),p(s,y,1,2,22),f(e,"class","order s-sKzJsGEMsHWc"),p(e,y,0,0,0)},l:function(n){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(n,o){O(n,e,o),j(e,s)},p:u,i:u,o:u,d:function(n){n&&E(e)}};return i("SvelteRegisterBlock",{block:a,id:_.name,type:"component",source:"",ctx:r}),a}function H(r,e){let{$$slots:s={},$$scope:a}=e;g("Orders",s,[]);const t=[];return Object.keys(e).forEach(n=>{!~t.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&console.warn(`<Orders> was created with unknown prop '${n}'`)}),[]}class k extends h{constructor(e){super(e),w(this,e,H,_,v,{}),i("SvelteRegisterComponent",{component:this,tagName:"Orders",options:e,id:_.name})}}function $(r){let e,s;e=new k({$$inline:!0});const a={c:function(){B(e.$$.fragment)},l:function(n){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(n,o){N(e,n,o),s=!0},p:u,i:function(n){s||(b(e.$$.fragment,n),s=!0)},o:function(n){S(e.$$.fragment,n),s=!1},d:function(n){q(e,n)}};return i("SvelteRegisterBlock",{block:a,id:$.name,type:"component",source:"",ctx:r}),a}function J(r,e,s){let{$$slots:a={},$$scope:t}=e;g("Order",a,[]);const n=[];return Object.keys(e).forEach(o=>{!~n.indexOf(o)&&o.slice(0,2)!=="$$"&&o!=="slot"&&console.warn(`<Order> was created with unknown prop '${o}'`)}),r.$capture_state=()=>({Orders:k}),[]}class K extends h{constructor(e){super(e),w(this,e,J,$,v,{}),i("SvelteRegisterComponent",{component:this,tagName:"Order",options:e,id:$.name})}}const D=K;export{W as _order__layout,D as _order_index};
//# sourceMappingURL=_order__layout_svelte.99710cc1.js.map
