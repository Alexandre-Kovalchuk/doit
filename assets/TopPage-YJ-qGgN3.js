import{r as u,o as a,c as e,a as o,b as m,u as s,D as w,F as l,d as i,w as x,_ as O,t as n,n as Y,m as f,k as C,l as v}from"./index-AYVXgdVG.js";import{p as P,_ as W}from"./UIPagination-DAZQhTm9.js";const B=["2019"," 2020","2021","2022","2023","2024"],F=[{name:"Total Tournaments:",txt:"157,260,352"},{name:"Total Prize money",txt:"$157,260,352.09"},{name:"Total Players:",txt:"322"}],k=[{desktop:[{name:"Top Countries",label:"Top Countries"},{name:"Top Players",label:"Top Players"},{name:"Top Teams",label:"Top Teams"},{name:"Top Games",label:"Top Games"}],mobile:[{name:"Countries",label:"Countries"},{name:"Players",label:"Players"},{name:"Teams",label:"Teams"},{name:"Games",label:"Games"}]}],h=["Rank","Country & Nickname","NAME","Total (year)","Total (OVERAl)"],N=[{id:1,country:"ukraine",nickname:"twtv Rykomastery",name:"Albert Fox",totalYear:"$800,652.82",totalOveral:"$542,986.37"},{id:2,country:"poland",nickname:"lazymeercat616",name:"Morris Watson",totalYear:"$9303.98",totalOveral:"$7433.16"},{id:3,country:"greece",nickname:"smallsnake312",name:"Shane Alexander",totalYear:"$3553.25",totalOveral:"$8778.93"},{id:4,country:"english",nickname:"ticklishostrich764",name:"Kristin Flores",totalYear:"$4734.57",totalOveral:"$3949.90"},{id:5,country:"lithuania",nickname:"brownbird866",name:"Stella Wilson",totalYear:"$4915.73",totalOveral:"$8672.51"},{id:6,country:"croatia",nickname:"purpleleopard757",name:"Claire Black",totalYear:"$7269.50",totalOveral:"$7631.11"},{id:7,country:"ukraine",nickname:"whiteswan331",name:"Calvin Miles",totalYear:"$6577.43",totalOveral:"$6270.13"},{id:8,country:"poland",nickname:"beautifullion765",name:"Greg Simmmons",totalYear:"$6691.64",totalOveral:"$6751.18"},{id:9,country:"greece",nickname:"silverfrog195",name:"Beth Fisher",totalYear:"$3400.64",totalOveral:"$9125.74"},{id:10,country:"english",nickname:"redkoala509",name:"Lee Williamson",totalYear:"$5184.63",totalOveral:"$4182.41"},{id:11,country:"ukraine",nickname:"twtv Rykomastery",name:"Albert Fox",totalYear:"$800,652.82",totalOveral:"$542,986.37"},{id:12,country:"poland",nickname:"lazymeercat616",name:"Morris Watson",totalYear:"$9303.98",totalOveral:"$7433.16"},{id:13,country:"greece",nickname:"smallsnake312",name:"Shane Alexander",totalYear:"$3553.25",totalOveral:"$8778.93"},{id:14,country:"english",nickname:"ticklishostrich764",name:"Kristin Flores",totalYear:"$4734.57",totalOveral:"$3949.90"},{id:15,country:"lithuania",nickname:"brownbird866",name:"Stella Wilson",totalYear:"$4915.73",totalOveral:"$8672.51"},{id:16,country:"croatia",nickname:"purpleleopard757",name:"Claire Black",totalYear:"$7269.50",totalOveral:"$7631.11"},{id:17,country:"ukraine",nickname:"whiteswan331",name:"Calvin Miles",totalYear:"$6577.43",totalOveral:"$6270.13"},{id:18,country:"poland",nickname:"beautifullion765",name:"Greg Simmmons",totalYear:"$6691.64",totalOveral:"$6751.18"},{id:19,country:"greece",nickname:"silverfrog195",name:"Beth Fisher",totalYear:"$3400.64",totalOveral:"$9125.74"},{id:20,country:"english",nickname:"redkoala509",name:"Lee Williamson",totalYear:"$5184.63",totalOveral:"$4182.41"}],A={class:"main"},M={class:"top"},S={class:"container"},G={class:"top__content"},z={class:"top__head"},D=o("h1",{class:"top__title"},"Top of",-1),E={class:"top__row"},V={class:"top__row-name"},L={class:"top__row-txt"},R={class:"top__tabs"},K={class:"top__tabs-head"},H={class:"top__tabs-item"},j={class:"top__tabs-item"},q={class:"top__tabs-body"},I={class:"top__tabs-item"},J={class:"top__tabs-rank"},Q={class:"top__tabs-country"},U={class:"top__tabs-nickname"},X={key:0,class:"top__tabs-text_span"},Z={key:0,class:"top__tabs-name"},tt={class:"top__tabs-item"},at={class:"top__tabs-total"},et={class:"top__tabs-total top__tabs-total_sub"},ot={class:"top__tabs-pagination"},rt={__name:"TopPage",setup(st){const d=u(window.innerWidth<=767),c=u(window.innerWidth<=576),p=u("Top Players"),y=b=>{p.value=b},{paginatedData:r,totalPages:$,currentPage:g,setPage:T}=P(10,N);return window.addEventListener("resize",()=>{d.value=window.innerWidth<=767,c.value=window.innerWidth<=576}),(b,nt)=>(a(),e("main",A,[o("section",M,[o("div",S,[o("div",G,[o("div",z,[D,m(w,{options:s(B),label:"2019"},null,8,["options"])]),o("div",E,[(a(!0),e(l,null,i(s(F),(t,_)=>(a(),e("div",{class:"top__row-item",key:_},[o("p",V,n(t.name),1),o("p",L,n(t.txt),1)]))),128))]),o("div",R,[m(O,{"selected-tab":p.value,names:c.value?s(k)[0].mobile:s(k)[0].desktop,onChangeTab:y},{default:x(()=>[o("div",K,[o("div",H,[(a(!0),e(l,null,i(s(h).slice(0,3),(t,_)=>(a(),e("h3",{class:Y(["top__tabs-title",t==="NAME"?"top__tabs-title_name":""]),key:_},n(c.value&&t==="Country & Nickname"?"Player":t),3))),128))]),o("div",j,[(a(!0),e(l,null,i(s(h).slice(3,5),(t,_)=>(a(),e("h3",{class:"top__tabs-title",key:_},n(d.value?t.slice(7,-1):t),1))),128))])]),o("div",q,[o("div",I,[o("div",J,[(a(!0),e(l,null,i(s(r),t=>(a(),e("p",{class:"top__tabs-text",key:t.id},n(t.id),1))),128))]),o("div",Q,[(a(!0),e(l,null,i(s(r),t=>(a(),e("div",{class:"top__tabs-icon",key:t.id},[m(f,{id:t.country},null,8,["id"])]))),128))]),o("div",U,[(a(!0),e(l,null,i(s(r),t=>(a(),e("p",{class:"top__tabs-text top__tabs-text_nickname",key:t.id},[C(n(t.nickname)+" ",1),d.value?(a(),e("span",X,n(t.name),1)):v("",!0)]))),128))]),d.value?v("",!0):(a(),e("div",Z,[(a(!0),e(l,null,i(s(r),t=>(a(),e("p",{class:"top__tabs-text",key:t.id},n(t.name),1))),128))]))]),o("div",tt,[o("div",at,[(a(!0),e(l,null,i(s(r),t=>(a(),e("p",{class:"top__tabs-text top__tabs-text_total",key:t.id},n(c.value?"$800K":t.totalYear),1))),128))]),o("div",et,[(a(!0),e(l,null,i(s(r),t=>(a(),e("p",{class:"top__tabs-text top__tabs-text_total",key:t.id},n(c.value?"$1.22k":t.totalOveral),1))),128))])])]),o("div",ot,[m(W,{"current-page":s(g),"set-page":s(T),"total-pages":s($)},null,8,["current-page","set-page","total-pages"])])]),_:1},8,["selected-tab","names"])])])])])]))}};export{rt as default};