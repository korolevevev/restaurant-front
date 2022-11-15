(this["webpackJsonpdealership-front"]=this["webpackJsonpdealership-front"]||[]).push([[0],{108:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(57),l=c.n(n),r=(c(66),c(7)),i=(c(67),c(13)),o=c.n(i),j=c(2),d=function(e){var t=e.setAuth,c=Object(s.useState)(""),a=Object(r.a)(c,2),n=a[0],l=a[1],i=Object(s.useState)(""),o=Object(r.a)(i,2),d=o[0],b=o[1],h=Object(s.useState)(!1),u=Object(r.a)(h,2),O=u[0],m=u[1];return Object(j.jsx)("div",{className:"auth",children:Object(j.jsx)("div",{className:"row justify-content-center",children:Object(j.jsxs)("div",{className:"col-4",children:[Object(j.jsx)("div",{className:"form-group mb-3",children:Object(j.jsx)("input",{value:n,onChange:function(e){l(e.target.value)},type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"\u041b\u043e\u0433\u0438\u043d"})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{value:d,onChange:function(e){b(e.target.value)},type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"})}),Object(j.jsx)("button",{onClick:function(){"admin"===n&&"kaifprovenance"===d?(t(!0),localStorage.setItem("login","admin")):m(!0)},type:"button",className:"btn btn-light btn-lg mt-3 col-4",children:"\u0412\u043e\u0439\u0442\u0438"}),O&&Object(j.jsx)("div",{className:"text-danger mt-2",children:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c \u0438\u043b\u0438 \u043b\u043e\u0433\u0438\u043d"})]})})})},b=c(3);function h(e,t){switch(t.type){case"ADD_DATA_DISH":return Object(b.a)(Object(b.a)({},e),{},{dishes:t.payload});case"ADD_DATA_ORDERS":return Object(b.a)(Object(b.a)({},e),{},{orders:t.payload});case"ADD_DATA_THIS_ORDER":return Object(b.a)(Object(b.a)({},e),{},{thisOrder:t.payload});case"ADD_DATA_TO_CREATE_PAGE":return Object(b.a)(Object(b.a)({},e),{},{createPage:t.payload});case"ADD_DATA_TO_BILLS":return Object(b.a)(Object(b.a)({},e),{},{dishList:t.payload});default:return e}}var u=c(4),O=function(e){var t=e.el,c=e.dispatch,s=Object(u.e)();return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.dish}),Object(j.jsx)("td",{children:t.category}),Object(j.jsx)("td",{children:t.description}),Object(j.jsx)("td",{children:t.calories}),Object(j.jsx)("td",{children:t.weight}),Object(j.jsx)("td",{children:t.price}),Object(j.jsx)("td",{children:t.allergic?"\u0414\u0430":"\u041d\u0435\u0442"}),Object(j.jsx)("td",{className:"mx-auto",children:Object(j.jsx)("svg",{onClick:function(){return o.a.delete("api/dishes/".concat(t.id)).then((function(){return o.a.get("api/dishes/").then((function(e){c({type:"ADD_DATA_DISH",payload:e.data})}))}))},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-x",viewBox:"0 0 16 16",children:Object(j.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})})}),Object(j.jsx)("td",{className:"mx-auto",children:Object(j.jsx)("svg",{onClick:function(){c({type:"ADD_DATA_TO_CREATE_PAGE",payload:Object(b.a)({},t)}),s.push("/newdish")},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-pencil",viewBox:"0 0 16 16",children:Object(j.jsx)("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})})})]})},m=c(6),x=function(e){var t=e.state,c=e.dispatch,a=e.onDelete,n=Object(s.useState)(),l=Object(r.a)(n,2),i=l[0],o=l[1],d=Object(s.useState)(!1),b=Object(r.a)(d,2),h=b[0],u=b[1];Object(s.useEffect)((function(){o(t)}),[t]);return Object(j.jsxs)("div",{className:"text-white",children:[Object(j.jsx)(m.b,{to:"/newdish",children:Object(j.jsx)("button",{type:"button",className:"btn btn-light mt-5",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0431\u043b\u044e\u0434\u043e"})}),Object(j.jsx)("div",{class:"row my-4",children:Object(j.jsx)("div",{className:"col-3",children:Object(j.jsx)("input",{disabled:!t,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0431\u043b\u044e\u0434\u0430",className:"form-control",type:"text",onChange:function(e){var c=e.target.value;if(c&&""!==c){var s=[];t.forEach((function(e){-1!==e.dish.toLowerCase().indexOf(c.toLowerCase())&&s.push(e)})),o(s)}else o(t)}})})}),Object(j.jsxs)("div",{className:"row d-flex justify-content-end",children:[Object(j.jsx)("button",{style:{marginRight:"5px"},disabled:!t,type:"button",className:"btn-sm btn-light col-2",onClick:function(){i.sort((function(e,t){return e.price>t.price?1:-1})),console.log(i),u(!h)},children:"\u0426\u0435\u043d\u0430: \u043d\u0438\u0437\u043a\u0430\u044f -> \u0432\u044b\u0441\u043e\u043a\u0430\u044f"}),Object(j.jsx)("button",{disabled:!t,type:"button",className:"btn btn-light ml-auto col-2",onClick:function(){i.sort((function(e,t){return e.price<t.price?1:-1})),console.log(i),u(!h)},children:"\u0426\u0435\u043d\u0430: \u0432\u044b\u0441\u043e\u043a\u0430\u044f -> \u043d\u0438\u0437\u043a\u0430\u044f"})]}),Object(j.jsxs)("table",{className:"table table-hover table-dark mt-2",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"\u0411\u043b\u044e\u0434\u043e"}),Object(j.jsx)("th",{scope:"col",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"}),Object(j.jsx)("th",{scope:"col",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0431\u043b\u044e\u0434\u0430"}),Object(j.jsx)("th",{scope:"col",children:"\u041a\u0430\u043b\u043e\u0440\u0438\u0439\u043d\u043e\u0441\u0442\u044c, \u043a\u043a\u0430\u043b"}),Object(j.jsx)("th",{scope:"col",children:"\u0412\u0435\u0441, \u0433"}),Object(j.jsx)("th",{scope:"col",children:"\u0426\u0435\u043d\u0430, \u0440\u0443\u0431"}),Object(j.jsx)("th",{scope:"col",children:"\u0410\u043b\u043b\u0435\u0440\u0433\u0438\u044f"}),Object(j.jsx)("th",{scope:"col"}),Object(j.jsx)("th",{scope:"col"})]})}),Object(j.jsx)("tbody",{children:i&&i.map((function(e){return Object(j.jsx)(O,{onDelete:a,dispatch:c,el:e},e.id)}))})]})]})},p=function(e){var t=e.setAuth;return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(m.b,{className:"navbar-brand",to:"/",children:Object(j.jsx)("img",{width:"60px",src:"kaif.jpg"})}),Object(j.jsxs)("div",{className:"navbar-collapse",id:"navbarSupportedContent",children:[Object(j.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(m.b,{className:"nav-link",to:"/dishes",children:"\u041c\u0435\u043d\u044e"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(m.b,{className:"nav-link",to:"/orders",children:"\u0417\u0430\u043a\u0430\u0437\u044b"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(m.b,{className:"nav-link",to:"/info",children:"\u041e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435"})})]}),Object(j.jsx)("div",{style:{marginLeft:"auto"},children:Object(j.jsx)(m.b,{className:"nav-link text-light",to:"/",onClick:function(){localStorage.setItem("login",""),t(!1)},children:"\u0412\u044b\u0439\u0442\u0438"})})]})]})})},f=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{className:"text-white mt-3",children:"\u0421\u0434\u0435\u043b\u0430\u043d\u043e: \u0418\u043b\u044c\u044f \u041a\u043e\u0440\u043e\u043b\u0451\u0432"}),Object(j.jsx)("a",{href:"https://github.com/korolevevev/restaurant-front/",className:"text-white mt-3",children:"Github \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434"}),Object(j.jsx)("a",{href:"https://github.com/korolevevev/restaurant-back/",className:"text-white mt-3",children:"Github \u0431\u044d\u043a\u0435\u043d\u0434"})]})},v=function(e){var t=e.el,c=e.dispatch,s=Object(u.e)();return console.log(t),Object(j.jsxs)("tr",{onClick:function(){s.push("/bills"),c({type:"ADD_DATA_TO_BILLS",payload:t})},children:[Object(j.jsx)("td",{children:t.table_id}),Object(j.jsx)("td",{children:t.waiter_name}),Object(j.jsx)("td",{children:t.customer_name}),Object(j.jsx)("td",{children:t.total})]})},g=function(e){var t=e.state,c=e.dispatch;return Object(j.jsxs)("div",{className:"text-white",children:[Object(j.jsx)(m.b,{to:"/neworder",children:Object(j.jsx)("button",{type:"button",className:"btn btn-light my-5",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})}),Object(j.jsxs)("table",{className:"table table-hover table-dark",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"\u041d\u043e\u043c\u0435\u0440 \u0441\u0442\u043e\u043b\u0430"}),Object(j.jsx)("th",{scope:"col",children:"\u041f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u044c"}),Object(j.jsx)("th",{scope:"col",children:"\u041e\u0444\u0438\u0446\u0438\u0430\u043d\u0442"}),Object(j.jsx)("th",{scope:"col",children:"\u041e\u0431\u0449\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430"})]})}),Object(j.jsx)("tbody",{children:t&&t.map((function(e){return Object(j.jsx)(v,{dispatch:c,el:e},e.id)}))})]})]})},N=function(e){var t=e.state,c=e.dispatch,a=Object(u.e)();console.log(!t);var n=Object(s.useState)({dish:"",category:"",description:"",calories:"",weight:"",price:"",allergic:!1}),l=Object(r.a)(n,2),i=l[0],d=l[1];i.dish&&i.category&&i.description&&i.calories&&i.weight&&i.price&&i.allergic;return Object(j.jsxs)("div",{className:"row justify-content-center mt-5",children:[Object(j.jsx)("h2",{className:"row text-white justify-content-center",children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u0431\u043b\u044e\u0434\u0430 \u0432 \u043c\u0435\u043d\u044e"}),Object(j.jsx)("div",{className:"row justify-content-center",children:Object(j.jsxs)("div",{className:" col-4 form-group",children:[Object(j.jsx)("label",{htmlFor:"model",children:"\u0411\u043b\u044e\u0434\u043e"}),Object(j.jsx)("input",{type:"text",className:"form-control mt-1",id:"model",placeholder:"\u0411\u0440\u0430\u0443\u043d\u0438",onChange:function(e){d(Object(b.a)(Object(b.a)({},i),{},{dish:e.target.value}))},value:i.dish})]})}),Object(j.jsx)("div",{className:"row mt-2 justify-content-center",children:Object(j.jsxs)("div",{className:" col-4 form-group",children:[Object(j.jsx)("label",{htmlFor:"color",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"}),Object(j.jsx)("input",{type:"text",className:"form-control mt-1",id:"color",placeholder:"\u0414\u0435\u0441\u0435\u0440\u0442\u044b",value:i.category,onChange:function(e){d(Object(b.a)(Object(b.a)({},i),{},{category:e.target.value}))}})]})}),Object(j.jsx)("div",{className:"row mt-2 justify-content-center",children:Object(j.jsxs)("div",{className:" col-4 form-group",children:[Object(j.jsx)("label",{htmlFor:"color",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(j.jsx)("input",{type:"text",className:"form-control mt-1",id:"color",placeholder:"\u0428\u043e\u043a\u043e\u043b\u0430\u0434\u043d\u043e\u0435 \u043f\u0438\u0440\u043e\u0436\u043d\u043e\u0435 \u043f\u043e\u0434 \u0441\u043e\u0443\u0441\u043e\u043c \xab\u0421\u043e\u043b\u0435\u043d\u0430\u044f \u043a\u0430\u0440\u0430\u043c\u0435\u043b\u044c\xbb",value:i.description,onChange:function(e){d(Object(b.a)(Object(b.a)({},i),{},{description:e.target.value}))}})]})}),Object(j.jsx)("div",{className:"row mt-2 justify-content-center",children:Object(j.jsxs)("div",{className:" col-4 form-group",children:[Object(j.jsx)("label",{children:"\u0426\u0435\u043d\u0430, \u0440\u0443\u0431"}),Object(j.jsx)("input",{type:"number",className:"form-control mt-1",placeholder:"590",value:i.price,onChange:function(e){d(Object(b.a)(Object(b.a)({},i),{},{price:e.target.value}))}}),!(i.price>0&&i.price<=3e3)&&Object(j.jsx)("div",{style:{color:"grey",fontSize:"10px"},children:"\u041d\u0435 \u0431\u043e\u043b\u0435\u0435 3 000"})]})}),Object(j.jsx)("div",{className:"row mt-2 justify-content-center",children:Object(j.jsxs)("div",{className:" col-4 form-group",children:[Object(j.jsx)("label",{children:"\u0412\u0435\u0441, \u0433"}),Object(j.jsx)("input",{type:"number",className:"form-control mt-1",placeholder:"75",value:i.weight,onChange:function(e){d(Object(b.a)(Object(b.a)({},i),{},{weight:e.target.value}))}})]})}),Object(j.jsx)("div",{className:"row mt-2 justify-content-center",children:Object(j.jsxs)("div",{className:" col-4 form-group",children:[Object(j.jsx)("label",{children:"\u041a\u0430\u043b\u043e\u0440\u0438\u0439\u043d\u043e\u0441\u0442\u044c, \u043a\u043a\u0430\u043b"}),Object(j.jsx)("input",{type:"number",className:"form-control mt-1",placeholder:"355",value:i.calories,onChange:function(e){d(Object(b.a)(Object(b.a)({},i),{},{calories:e.target.value}))}}),!(i.calories>0&&i.calories<=1e4)&&Object(j.jsx)("div",{style:{color:"grey",fontSize:"10px"},children:" \u041d\u0435 \u0431\u043e\u043b\u0435\u0435 10 000"})]})}),Object(j.jsx)("div",{className:"row mt-3 justify-content-center",children:Object(j.jsxs)("div",{className:" col-4 form-group",children:[Object(j.jsx)("input",{type:"checkbox",className:"form-check-input",checked:i.allergic,onChange:function(e){d(Object(b.a)(Object(b.a)({},i),{},{allergic:e.target.checked}))},id:"exampleCheck1"}),Object(j.jsx)("label",{className:"form-check-label",htmlFor:"exampleCheck1",children:"\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u0430\u043b\u043b\u0435\u0440\u0433\u0435\u043d\u043e\u0432"})]})}),Object(j.jsx)("div",{className:"row mt-5 justify-content-center",children:Object(j.jsx)("button",{onClick:function(){o.a.post("http://localhost:3000/api/dishes",i).then((function(e){c({type:"ADD_DATA_DISH",payload:e.data})})),alert("\u0411\u043b\u044e\u0434\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e"),a.push("/dishes")},type:"button",className:"btn btn-light col-3 btn-sm",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043c\u0435\u043d\u044e"})}),Object(j.jsx)("div",{children:Object(j.jsx)("p",{})})]})},y=function(e){e.state;var t=e.dispatch,c=Object(u.e)(),a=Object(s.useState)({customer_name:"",customer_surname:"",table_id:"",total:"",waiter_name:"",waiter_surname:""}),n=Object(r.a)(a,2),l=n[0],i=n[1];return Object(j.jsxs)("div",{className:"row justify-content-center mt-5",children:[Object(j.jsx)("h2",{className:"row text-white justify-content-center",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0437\u0430\u043a\u0430\u0437"}),Object(j.jsx)("div",{className:"row justify-content-center",children:Object(j.jsxs)("div",{className:" col-4 form-group",children:[Object(j.jsx)("label",{htmlFor:"name",children:"\u0418\u043c\u044f \u043e\u0444\u0438\u0446\u0438\u0430\u043d\u0442\u0430"}),Object(j.jsx)("input",{type:"text",className:"form-control mt-1",id:"name",placeholder:"\u0418\u043c\u044f \u043e\u0444\u0438\u0446\u0438\u0430\u043d\u0442\u0430a",onChange:function(e){i(Object(b.a)(Object(b.a)({},l),{},{customer_name:e.target.value}))},value:l.customer_name})]})}),Object(j.jsx)("div",{className:"row justify-content-center",children:Object(j.jsxs)("div",{className:" col-4 form-group",children:[Object(j.jsx)("label",{htmlFor:"name",children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0444\u0438\u0446\u0438\u0430\u043d\u0442\u0430"}),Object(j.jsx)("input",{type:"text",className:"form-control mt-1",id:"name",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0444\u0438\u0446\u0438\u0430\u043d\u0442\u0430",onChange:function(e){i(Object(b.a)(Object(b.a)({},l),{},{customer_surname:e.target.value}))},value:l.customer_surname})]})}),Object(j.jsx)("div",{className:"row justify-content-center",children:Object(j.jsxs)("div",{className:" col-4 form-group",children:[Object(j.jsx)("label",{htmlFor:"name",children:"\u0418\u043c\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430"}),Object(j.jsx)("input",{type:"text",className:"form-control mt-1",id:"name",placeholder:"\u0418\u043c\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430",onChange:function(e){i(Object(b.a)(Object(b.a)({},l),{},{waiter_name:e.target.value}))},value:l.waiter_name})]})}),Object(j.jsx)("div",{className:"row justify-content-center",children:Object(j.jsxs)("div",{className:" col-4 form-group",children:[Object(j.jsx)("label",{htmlFor:"name",children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430"}),Object(j.jsx)("input",{type:"text",className:"form-control mt-1",id:"name",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430",onChange:function(e){i(Object(b.a)(Object(b.a)({},l),{},{waiter_surname:e.target.value}))},value:l.waiter_surname})]})}),Object(j.jsx)("div",{className:"row mt-2 justify-content-center",children:Object(j.jsxs)("div",{className:" col-4 form-group",children:[Object(j.jsx)("label",{htmlFor:"address",children:"\u041d\u043e\u043c\u0435\u0440 \u0441\u0442\u043e\u043b\u0430"}),Object(j.jsx)("input",{type:"text",className:"form-control mt-1",id:"address",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0441\u0442\u043e\u043b\u0430",value:l.table_id,onChange:function(e){i(Object(b.a)(Object(b.a)({},l),{},{table_id:e.target.value}))}})]})}),Object(j.jsx)("div",{className:"row mt-2 justify-content-center",children:Object(j.jsxs)("div",{className:" col-4 form-group",children:[Object(j.jsx)("label",{children:"\u0418\u0442\u043e\u0433\u043e"}),Object(j.jsx)("input",{type:"text",className:"form-control mt-1",placeholder:"12000",value:l.total,onChange:function(e){i(Object(b.a)(Object(b.a)({},l),{},{total:e.target.value}))}})]})}),Object(j.jsx)("div",{className:"row mt-5 justify-content-center",children:Object(j.jsx)("button",{onClick:function(){o.a.post("http://localhost:3000/api/orders",l).then((function(e){t({type:"ADD_DATA_ORDERS",payload:e.data})})),alert("\u0417\u0430\u043a\u0430\u0437 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d!"),c.push("/orders")},type:"button",className:"btn btn-light col-3 btn-sm",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0437\u0430\u043a\u0430\u0437"})})]})},w=c(17);var _=function(e){var t=e.el,c=Object(u.e)();if(!t.dishList)return c.push("/bill"),alert("\u0417\u0430\u043a\u0430\u0437 \u043f\u0443\u0441\u0442"),null;var s=[];return t.dishList?(s=t.dishList.map((function(e){return{x:e.dish,y:e.price}})),console.log(s)):c.push("/carshowroom"),Object(j.jsxs)("div",{className:"text-white mt-5",children:[Object(j.jsxs)("h3",{children:["\u0427\u0435\u043a \u043f\u043e \u0437\u0430\u043a\u0430\u0437\u0443 ",t.id]}),t.dishList.map((function(e){return Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2",children:e.dish}),Object(j.jsxs)("div",{className:"col-2",children:[e.price," \u0440\u0443\u0431."]})]})})),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col",children:["\u041d\u043e\u043c\u0435\u0440 \u0441\u0442\u043e\u043b\u0430: ",t.table_id]})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col",children:["\u041e\u043f\u043b\u0430\u0447\u0435\u043d: ",t.paid?"\u0414\u0430":"\u041d\u0435\u0442"]})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col",children:["\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",t.total]})}),Object(j.jsx)("div",{style:{backgroundColor:"black",borderRadius:"10px"},children:Object(j.jsxs)(w.e,{xType:"ordinal",width:1e3,height:500,children:[Object(j.jsx)(w.c,{}),Object(j.jsx)(w.a,{}),Object(j.jsx)(w.d,{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0431\u043b\u044e\u0434\u0430",style:{stroke:"#fafafa"}}),Object(j.jsx)(w.f,{title:"\u0426\u0435\u043d\u0430, \u0440\u0443\u0431",style:{stroke:"#fafafa"}}),Object(j.jsx)(w.b,{data:s,style:{stroke:"violet",strokeWidth:1}})]})})]})};var D=function(){var e=Object(s.useReducer)(h,{dishList:[]}),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!1),l=Object(r.a)(n,2),i=l[0],b=l[1];window.state=c,Object(s.useEffect)((function(){"admin"===localStorage.getItem("login")&&b(!0),o.a.get("http://localhost:3000/api/orders/").then((function(e){a({type:"ADD_DATA_ORDERS",payload:e.data})})),o.a.get("http://localhost:3000/api/dishes/").then((function(e){a({type:"ADD_DATA_DISH",payload:e.data}),console.log(e)}))}),[]);var O="admin"===!localStorage.getItem("login")||!i;return Object(j.jsxs)("div",{className:"App",children:[!O&&Object(j.jsx)(p,{setAuth:b}),Object(j.jsxs)("div",{className:"container",children:[O?Object(j.jsx)(d,{setAuth:b}):Object(j.jsx)(u.a,{path:"/dishes",render:function(){return Object(j.jsx)(x,{dispatch:a,state:c.dishes})}}),!O&&Object(j.jsx)(u.a,{path:"/newdish",exact:!0,render:function(){return Object(j.jsx)(N,{dispatch:a,state:c.orders})}}),!O&&Object(j.jsx)(u.a,{path:"/neworder",exact:!0,render:function(){return Object(j.jsx)(y,{dispatch:a})}}),!O&&Object(j.jsx)(u.a,{path:"/orders",exact:!0,render:function(){return Object(j.jsx)(g,{dispatch:a,state:c.orders})}}),!O&&Object(j.jsx)(u.a,{path:"/bills",render:function(){return Object(j.jsx)(_,{el:c.dishList})}}),!O&&Object(j.jsx)(u.a,{path:"/info",render:function(){return Object(j.jsx)(f,{})}}),!O&&Object(j.jsx)(u.a,{path:"/",exact:!0,render:function(){return Object(j.jsx)("div",{className:"row justify-content-center",children:Object(j.jsxs)("div",{className:"col-6",children:[Object(j.jsx)("h2",{className:"text-white mt-5 text-center",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e-\u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430"}),Object(j.jsx)("img",{width:"600px",src:"./kaif.jpg",alt:""})]})})}})]})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,110)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),s(e),a(e),n(e),l(e)}))};l.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(m.a,{basename:"/restaurant-front",children:Object(j.jsx)(D,{})})}),document.getElementById("root")),A()},66:function(e,t,c){},67:function(e,t,c){}},[[108,1,2]]]);
//# sourceMappingURL=main.30a71592.chunk.js.map