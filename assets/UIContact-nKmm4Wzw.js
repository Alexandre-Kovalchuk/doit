import{a as u,o,c as e,b as t,t as c,f as a,d as n,s as _,F as i,h as r,D as p}from"./index-C8EtTmBa.js";const d=[{location:[{text:"2440, Daisy Dr undefined Pembroke Pines, Arizona"}],phone:[{text:"Headquater"},{phoneNumber:"(+48) 517 429 774"}],mess:[{text:"Support",email:"@doit.gg"},{text:"Organizer",email:"@doit.gg"},{text:"Sponsorship",email:"@doit.gg"}]}],m={class:"contact"},v={class:"contact__title"},x={class:"contact__content"},g={class:"contact__location"},b={class:"contact__svg"},f={class:"contact__text"},N={class:"contact__phone"},k={class:"contact__svg"},w={class:"contact__row contact__row_phone"},D={class:"contact__text"},y={href:"tel: {{ item.phoneNumber}} ",class:"contact__number"},B={class:"contact__mess"},P={class:"contact__svg"},S={class:"contact__row contact__row_mess"},F={__name:"UIContact",setup(V){const l=u().path;return(z,A)=>(o(),e("div",m,[t("h1",v,c(a(l)==="/about"?"About us":"Contact us"),1),t("div",x,[t("div",g,[t("div",b,[n(_,{id:"location"})]),(o(!0),e(i,null,r(a(d)[0].location,s=>(o(),e("p",f,c(s.text),1))),256))]),t("div",N,[t("div",k,[n(_,{id:"phone"})]),(o(!0),e(i,null,r(a(d)[0].phone,s=>(o(),e("div",w,[t("p",D,c(s.text),1),t("a",y,c(s.phoneNumber),1)]))),256))]),t("div",B,[t("div",P,[n(_,{id:"mess"})]),t("div",S,[(o(!0),e(i,null,r(a(d)[0].mess,(s,h)=>(o(),e("p",{class:"contact__sub-text",key:h},[p(c(s.text),1),t("span",null,c(s.email),1)]))),128))])])])]))}};export{F as _};
