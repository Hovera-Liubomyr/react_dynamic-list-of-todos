(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1),i=(c(10),c(11),c(3)),o=c.n(i),d=c(0),r=function(e){var t=e.todos,c=e.onClickTodo,s=void 0===c?function(){}:c,a=e.clickTodo,n=void 0===a?null:a;return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){var t=e.id,c=e.title,a=e.completed;return Object(d.jsxs)("tr",{"data-cy":"todo",className:o()({"has-background-info-light":(null===n||void 0===n?void 0:n.id)===t}),children:[Object(d.jsx)("td",{className:"is-vcentered",children:t}),Object(d.jsx)("td",{className:"is-vcentered",children:a&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:o()({"has-text-success":a,"has-text-danger":!a}),children:c})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:o()("far",{"fa-eye":(null===n||void 0===n?void 0:n.id)!==t,"fa-eye-slash":(null===n||void 0===n?void 0:n.id)===t})})})})})]})}))})]})},j=function(e){var t=e.onFilterSelect,c=e.filterValue,s=e.onQueryChange,a=e.queryValue,n=e.onQueryDelete;return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:t,children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"active",children:"Active"}),Object(d.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:s}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),a&&Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:n})})]})]})},u=(c(13),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})});function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var h,m=function(e){var t=e.todo,c=e.onCloseModal,s=void 0===c?function(){}:c,a=Object(l.useState)(null),i=Object(n.a)(a,2),o=i[0],r=i[1];return Object(l.useEffect)((function(){var e;(e=t.userId,b("/users/".concat(e))).then(r)}),[t.userId]),Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),o?Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:s})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(d.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(d.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(o.email),children:o.name})]})]})]}):Object(d.jsx)(u,{})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(h||(h={}));var O=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(h.All),i=Object(n.a)(a,2),o=i[0],O=i[1],x=Object(l.useState)(""),f=Object(n.a)(x,2),v=f[0],p=f[1],N=Object(l.useState)(null),y=Object(n.a)(N,2),g=y[0],k=y[1];Object(l.useEffect)((function(){b("/todos").then(s)}),[]);var C=Object(l.useMemo)((function(){return function(){switch(o){case h.Completed:return c.filter((function(e){return e.completed}));case h.Active:return c.filter((function(e){return!e.completed}));default:return c}}().filter((function(e){return e.title.toLowerCase().includes(v.trim().toLowerCase())}))||[]}),[c,o,v]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(j,{onFilterSelect:function(e){O(e.target.value)},filterValue:o,onQueryChange:function(e){p(e.target.value)},queryValue:v,onQueryDelete:function(){p("")}})}),Object(d.jsx)("div",{className:"block",children:c.length?Object(d.jsx)(r,{todos:C,onClickTodo:k,clickTodo:g}):Object(d.jsx)(u,{})})]})})}),g&&Object(d.jsx)(m,{todo:g,onCloseModal:function(){return k(null)}})]})};a.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.40613b09.chunk.js.map