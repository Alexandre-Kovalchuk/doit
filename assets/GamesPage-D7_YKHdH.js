import{g as i,r as d,h as m,o as r,c as n,a,b as _,i as u,F as g,d as h,e as p,t as v}from"./index-AYVXgdVG.js";function f(o,t,s){return o.filter(c=>c[t].toLowerCase().includes(s.toLowerCase()))}const x={class:"main"},G={class:"game"},w={class:"container"},b={class:"game__row"},k=a("h1",{class:"game__title"},"Games",-1),B={class:"game__inp"},L={class:"game__card"},S={class:"game__card-txt"},D={__name:"GamesPage",setup(o){const t=Object.values(i()).flat(),s=d(""),c=m(()=>f(t,"txt",s.value));return(y,l)=>(r(),n("main",x,[a("section",G,[a("div",w,[a("div",b,[k,a("div",B,[_(u,{name:"name",placeholder:"Search the game",value:s.value,"onUpdate:value":l[0]||(l[0]=e=>s.value=e)},null,8,["value"])])]),a("div",L,[(r(!0),n(g,null,h(c.value,e=>(r(),n("div",{key:e.id,class:"game__card-item"},[_(p,{srcset:e.webp,src:e.img,alt:e.txt},null,8,["srcset","src","alt"]),a("p",S,v(e.txt),1)]))),128))])])])]))}};export{D as default};