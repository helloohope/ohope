import{_ as d,o as s,c as o,a as t,t as e,F as a,r,n as f,b as k,p as x,d as $,e as w,f as S}from"./index-def8b886.js";const b={data(){return{}},props:{time_line:Object}},p=n=>(x("data-v-9843c7c0"),n=n(),$(),n),I={class:"timeline_title"},L={class:"title"},T={class:"title_small"},V={class:"timeline_body"},B={class:"item_true"},j={class:"item_year"},z={class:"item_text"},C=p(()=>t("div",null,null,-1)),F=p(()=>t("div",null,null,-1)),N={class:"item_true"},O={class:"item_year"},D={class:"item_text"},E={class:"item_img shadow"},q=["src"];function A(n,m,c,u,l,y){return s(),o("div",{id:"timeline",style:k({backgroundImage:"url("+c.time_line.bg+")"})},[t("div",I,[t("p",L,e(c.time_line.title),1),t("p",T,e(c.time_line.title_small),1)]),t("ul",V,[(s(!0),o(a,null,r(c.time_line.list,(i,_)=>(s(),o("li",{key:_,class:f(["timeline_item",_%2===0?"item_left":"item_right"])},[_%2===0?(s(),o(a,{key:0},[t("div",B,[t("p",j,e(i.year),1),t("p",z,e(i.text),1)]),C],64)):(s(),o(a,{key:1},[F,t("div",N,[t("p",O,e(i.year),1),t("p",D,e(i.text),1)])],64)),t("span",E,[t("img",{src:i.url,alt:""},null,8,q)])],2))),128))])],4)}const G=d(b,[["render",A],["__scopeId","data-v-9843c7c0"]]);const H={data(){return{story:this.router_view.story}},props:{router_view:Object},components:{storyTimeLine:G}},J={id:"intro"},K={class:"wrap"},M={class:"intro"},P={class:"slogan"},Q={class:"slogan2"},R={class:"title"};function U(n,m,c,u,l,y){const i=w("storyTimeLine");return s(),o("section",J,[t("div",K,[t("div",M,[t("p",P,e(l.story.slogan),1),t("p",Q,e(l.story.slogan2),1),S(i,{time_line:l.story.time_line},null,8,["time_line"]),(s(!0),o(a,null,r(l.story.content,(_,h)=>(s(),o("div",{class:"content",key:h},[t("p",R,e(_.title),1),(s(!0),o(a,null,r(_.description,(v,g)=>(s(),o("p",{class:"description",key:g},e(v),1))),128))]))),128))])])])}const X=d(H,[["render",U],["__scopeId","data-v-a123fa1a"]]);export{X as default};
