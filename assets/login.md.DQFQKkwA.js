import{d,a6 as p,h as m,c as o,J as f,w as h,E as _,o as t,b as g,m as s,F as v,G as x,a7 as w}from"./chunks/framework.BLzts7SN.js";import{c as n}from"./chunks/theme.gnsfD7fe.js";const y={class:"flex flex-col max-w-60 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"},b=["value","onInput","placeholder"],S=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","navbar":false,"footer":false},"headers":[],"relativePath":"login.md","filePath":"login.md","lastUpdated":1709714411000}'),C={name:"login.md"},E=d({...C,setup(k){const l=p(),e=m({username:"",password:""}),r=()=>{localStorage.setItem(e.value.username,e.value.password),localStorage.getItem(n.storage.key)===n.storage.value&&l.go(n.routes.home)};return(B,I)=>{const c=_("ClientOnly");return t(),o("div",null,[f(c,null,{default:h(()=>[(t(),g(w,{to:"body"},[s("div",y,[(t(!0),o(v,null,x(e.value,(u,a)=>(t(),o("input",{class:"ring-2 ring-caution mb-2 p-2 rounded caret-caution text-caution placeholder:text-disable focus:shadow-inner focus:shadow-caution",type:"text",key:a,value:u,onInput:i=>e.value[a]=i.target.value,placeholder:a},null,40,b))),128)),s("button",{class:"ring-2 ring-caution p-2 rounded text-caution hover:shadow-inner hover:shadow-caution",onClick:r},"Login")])]))]),_:1})])}}});export{S as __pageData,E as default};
