import{S as s,i as e,s as l,e as t,B as a,j as n,c as o,a as f,C as c,l as r,d as i,b as h,L as u,N as d,g as b,h as g,D as p,n as k,M as m}from"./index.502c1ca4.js";function v(s,e,l){const t=Object.create(s);return t.label=e[l],t.index=l,t}function x(s){var e,l,k,m,v=s.label+"";function x(){return s.click_handler(s)}return{c(){e=t("button"),l=a(v),k=n(),this.h()},l(s){e=o(s,"BUTTON",{class:!0},!1);var t=f(e);l=c(t,v),k=r(t),t.forEach(i),this.h()},h(){h(e,"class","svelte-gzkkw9"),u(e,"selected",s.offset===s.index),m=d(e,"click",x)},m(s,t){b(s,e,t),g(e,l),g(e,k)},p(t,a){s=a,t.labels&&v!==(v=s.label+"")&&p(l,v),t.offset&&u(e,"selected",s.offset===s.index)},d(s){s&&i(e),m()}}}function w(s){var e;let l=s.labels,a=[];for(let e=0;e<l.length;e+=1)a[e]=x(v(s,l,e));return{c(){e=t("div");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){e=o(s,"DIV",{class:!0},!1);var l=f(e);for(let s=0;s<a.length;s+=1)a[s].l(l);l.forEach(i),this.h()},h(){h(e,"class","toggle svelte-gzkkw9")},m(s,l){b(s,e,l);for(let s=0;s<a.length;s+=1)a[s].m(e,null)},p(s,t){if(s.offset||s.labels){let n;for(l=t.labels,n=0;n<l.length;n+=1){const o=v(t,l,n);a[n]?a[n].p(s,o):(a[n]=x(o),a[n].c(),a[n].m(e,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=l.length}},i:k,o:k,d(s){s&&i(e),m(a,s)}}}function j(s,e,l){let{labels:t,offset:a=0}=e;return s.$set=s=>{"labels"in s&&l("labels",t=s.labels),"offset"in s&&l("offset",a=s.offset)},{labels:t,offset:a,click_handler:({index:s})=>l("offset",a=s)}}class E extends s{constructor(s){super(),e(this,s,j,w,l,["labels","offset"])}}const O="https://unpkg.com/svelte@3",S="https://unpkg.com/rollup@1/dist/rollup.browser.js",_="window.MAPBOX_ACCESS_TOKEN = undefined;";export{E as S,_ as m,S as r,O as s};