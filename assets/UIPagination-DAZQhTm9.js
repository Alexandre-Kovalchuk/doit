import{r as b,h as g,o as l,c,a as r,b as i,m as o,F as v,d as f,n as k,t as m}from"./index-AYVXgdVG.js";function x(t,s){const e=b(1),a=g(()=>{const n=(e.value-1)*t,P=n+t;return s.slice(n,P)}),u=g(()=>Math.ceil(s.length/t));function d(n){n>0&&n<=u.value&&(e.value=n)}return{paginatedData:a,currentPage:e,totalPages:u,setPage:d}}const w={class:"pagination"},C={class:"pagination__row"},$=["onClick"],N={__name:"UIPagination",props:{totalPages:{type:Number,required:!0},setPage:{type:Function,required:!0},currentPage:{type:Number,required:!0}},setup(t){return(s,e)=>(l(),c("div",w,[r("div",C,[r("button",{class:"pagination__arrow-left",onClick:e[0]||(e[0]=a=>t.setPage(t.currentPage-1))},[i(o,{id:"double-arrow"})]),r("button",{class:"pagination__arrow-left",onClick:e[1]||(e[1]=a=>t.setPage(t.currentPage-1))},[i(o,{id:"pagination-arrow"})]),(l(!0),c(v,null,f(t.totalPages,a=>(l(),c("span",{class:k(["pagination__number",{pagination__number_act:a===t.currentPage}]),key:a,onClick:u=>t.setPage(t.currentPage=a)},m(a),11,$))),128)),r("button",{class:"pagination__arrow-right",onClick:e[2]||(e[2]=a=>t.setPage(t.currentPage+1))},[i(o,{id:"pagination-arrow"})]),r("button",{class:"pagination__arrow-right",onClick:e[3]||(e[3]=a=>t.setPage(t.currentPage+1))},[i(o,{id:"double-arrow"})])])]))}};export{N as _,x as p};
