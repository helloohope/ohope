import{_ as r,o as l,c as a,a as t,t as i,F as d,r as p,w as c,v as _}from"./index-fbbbfeec.js";const u={data(){return{page_title:"联系我们",information:[{key:"电话",value:"020-89626263"},{key:"邮箱",value:"pengqing@holistic-ltd.com"},{key:"地址",value:"广州市番禺区南村镇汉溪大道东390号四海城商业广场3栋21楼"}],form_title:"Contact Us",target_email:"pengqing@holistic-ltd.com",contact_name:"",contact_mail:"",contact_msg:"",text_name:"请输入姓名",text_mail:"请输入邮箱",text_msg:"请输入内容",text_submit:"提&nbsp;&nbsp;&nbsp;&nbsp;交",text_reset:"重&nbsp;&nbsp;&nbsp;&nbsp;置"}},methods:{handleEmpty(){if(this.contact_name)if(this.contact_mail){if(!this.contact_msg)return this.text_msg}else return this.text_mail;else return this.text_name},handleSubmit(){if(this.handleEmpty()){alert(this.handleEmpty());return}location.href=`mailto:${this.target_email}?subject=${this.contact_name}  ${this.contact_mail}&body=${this.contact_msg}`},handleReset(){this.contact_name="",this.contact_mail="",this.contact_msg=""}},mounted(){}},h={id:"contact"},g={class:"wrap"},f={class:"left"},x={class:"title"},b={class:"right"},v={class:"title"},y={method:"post",action:"#",id:"contact-form"},k=["placeholder"],V=["placeholder"],w=["placeholder"],C=["innerHTML"],L=["innerHTML"];function M(T,s,E,H,e,o){return l(),a("section",h,[t("div",g,[t("div",f,[t("p",x,i(e.page_title),1),(l(!0),a(d,null,p(e.information,(n,m)=>(l(),a("p",{key:m},[t("span",null,i(n.key),1),t("span",null,i(n.value),1)]))),128))]),t("div",b,[t("p",v,i(e.form_title),1),t("form",y,[t("p",null,[c(t("input",{type:"text",name:"contact-name",id:"contact-name",placeholder:e.text_name,"onUpdate:modelValue":s[0]||(s[0]=n=>e.contact_name=n)},null,8,k),[[_,e.contact_name]]),c(t("input",{type:"text",name:"contact-mail",id:"contact-mail",placeholder:e.text_mail,"onUpdate:modelValue":s[1]||(s[1]=n=>e.contact_mail=n)},null,8,V),[[_,e.contact_mail]])]),t("p",null,[c(t("textarea",{name:"contact-msg",id:"contact-msg",placeholder:e.text_msg,"onUpdate:modelValue":s[2]||(s[2]=n=>e.contact_msg=n)},null,8,w),[[_,e.contact_msg]])]),t("p",null,[t("div",{id:"submit",onClick:s[3]||(s[3]=(...n)=>o.handleSubmit&&o.handleSubmit(...n)),innerHTML:e.text_submit},null,8,C),t("div",{id:"reset",onClick:s[4]||(s[4]=(...n)=>o.handleReset&&o.handleReset(...n)),innerHTML:e.text_reset},null,8,L)])])])])])}const U=r(u,[["render",M],["__scopeId","data-v-4f1b9f3a"]]);export{U as default};
