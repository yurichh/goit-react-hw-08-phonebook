"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[498],{3498:function(n,t,e){e.r(t),e.d(t,{default:function(){return F}});var a=e(4942),r=e(1413),s=e(9439),i=e(2791),c=e(5984),o=e(1686),l=e.n(o),u=e(4420),d=e(3553),m=function(n){return n.contacts.items},h=function(n){return n.contacts.isLoading},x=function(n){return n.contacts.error},f=(0,d.P1)([m,function(n){return n.filter}],(function(n,t){var e=t.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(e)}))})),p=e(3634),j=e(5602),v=e(3874),g=e(5903),w=e(3329),Z=function(){var n=(0,u.I0)(),t=(0,u.v9)(m),e=(0,i.useState)({name:"",number:""}),o=(0,s.Z)(e,2),d=o[0],h=o[1],x=function(e){var a;d.name&&d.number?(a=e.name,t.some((function(n){return n.name.toLowerCase()===a.toLowerCase()}))?l().Notify.warning("".concat(e.name," is already in contacts"),{position:"center-top",distance:"50px",fontSize:"40px",width:"600px"}):(n((0,p.uK)(e)),h({name:"",number:""}))):l().Notify.warning("Something missed",{position:"center-top",distance:"100px",fontSize:"40px",width:"600px"})},f=function(n){var t=n.target,e=t.name,s=t.value;h((function(n){return(0,r.Z)((0,r.Z)({},n),{},(0,a.Z)({},e,s))}))};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("h1",{className:"title",children:"Phonebook"}),(0,w.jsxs)("form",{action:"submit",className:"add-form",autoComplete:"on",children:[(0,w.jsxs)(j.Z,{sx:{width:200,maxWidth:"100%"},children:[(0,w.jsx)(v.Z,{required:!0,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:d.name,fullWidth:!0,name:"name",label:"Name ",variant:"standard",onChange:f}),(0,w.jsx)(v.Z,{required:!0,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",value:d.number,fullWidth:!0,name:"number",type:"tel",label:"Number",variant:"standard",onChange:f,style:{marginBottom:15}})]}),(0,w.jsx)(g.Z,{variant:"outlined",color:"success",size:"small",type:"submit",onClick:function(n){n.preventDefault();var t=(0,r.Z)((0,r.Z)({},d),{},{id:(0,c.x0)()});x(t)},children:"Add contact"})]})]})},b=e(1634),N=function(){var n=(0,u.I0)();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("h2",{className:"title",children:"Contacts"}),(0,w.jsx)(j.Z,{sx:{width:500,maxWidth:"100%"},children:(0,w.jsx)(v.Z,{fullWidth:!0,width:"200px",id:"input-with-sx",label:"Find contacts by name",variant:"standard",onChange:function(t){var e=t.target.value;n((0,b.M)(e))}})})]})},C=e(3433),y=function(n){var t=n.contactData,e=(0,u.I0)(),a=t.id,r=t.name,s=t.number;return(0,w.jsxs)("li",{className:"contacts-item",children:[(0,w.jsxs)("p",{className:"contacts-item-name",children:[r," :",(0,w.jsx)("span",{className:"contacts-item-number",children:s})]}),(0,w.jsx)(j.Z,{sx:{width:200,maxWidth:"100%"},children:(0,w.jsx)(g.Z,{variant:"outlined",fullWidth:!0,color:"error",size:"small",onClick:function(){e((0,p.zY)(a))},children:"Delete contact"})})]})},z=function(){var n=(0,u.v9)(f),t=(0,u.v9)(h),e=(0,C.Z)(n).reverse();return t?(0,w.jsx)("span",{className:"loader2"}):(0,w.jsx)("ul",{className:"contacts-list",children:e.map((function(n){return(0,w.jsx)(y,{contactData:n},n.id)}))})},k=function(){var n=(0,u.I0)(),t=(0,u.v9)(m);return console.log("contacts",t),(0,i.useEffect)((function(){n((0,p.yF)())}),[n]),(0,w.jsx)("section",{className:"contacts-wrapper",children:0===t.length&&(0,w.jsx)("h1",{style:{marginTop:80,fontSize:44},children:"Ooops... No contacts here"})||(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(N,{}),(0,w.jsx)(z,{})]})})},W=function(n){var t=n.error;return(0,w.jsxs)("div",{style:{textAlign:"center",fontSize:40,marginTop:250},children:["Ooops... We can't get any contacts",(0,w.jsx)("p",{style:{marginTop:30},children:t})]})},F=function(){var n=(0,u.v9)(x);return n?(0,w.jsx)(W,{error:n}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(Z,{}),(0,w.jsx)(k,{})]})}}}]);
//# sourceMappingURL=498.4312007c.chunk.js.map