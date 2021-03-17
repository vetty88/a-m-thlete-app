(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,n){e.exports=n(57)},32:function(e,t,n){},51:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(23),c=n.n(l),o=n(8),i=n(1),u=n(16),s=n(10);n(32);var m=function(e){return r.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var E=function(e){var t=e.children;return r.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},f=n(11),p=n.n(f),d=function(){return p.a.get("/api/competitions")},v=function(e){return p.a.get("/api/competitions/"+e)},h=function(e){return p.a.delete("/api/competitions/"+e)},b=function(e){return p.a.post("/api/competitions",e)};function g(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function N(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function O(e){var t=e.size,n=e.children;return r.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},n)}n(51);function j(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function y(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}function w(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({className:"form-control"},e)))}function C(e){return r.a.createElement("div",{className:"form-group"},"Event Types:",r.a.createElement("select",Object.assign({id:"eventTypeOptions",className:"form-control"},e),r.a.createElement("option",{value:"Dressage"},"Dressage"),r.a.createElement("option",{value:"Horse Trials"},"Horse Trials"),r.a.createElement("option",{value:"Showing"},"Showing"),r.a.createElement("option",{value:"Show Jumping"},"Show Jumping")))}function T(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function k(e){return r.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var x=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)({}),i=Object(s.a)(c,2),f=i[0],p=i[1];function v(){d().then((function(e){return l(e.data)})).catch((function(e){return console.log(e)}))}function x(e){var t=e.target,n=t.name,a=t.value;p(Object(u.a)(Object(u.a)({},f),{},{[n]:a}))}return Object(a.useEffect)((function(){v()}),[]),r.a.createElement(g,{fluid:!0},r.a.createElement(N,null,r.a.createElement(O,{size:"md-6"},r.a.createElement(E,null,r.a.createElement("h1",null,"What Competitions Should I Enter?")),r.a.createElement("form",null,r.a.createElement(w,{onChange:x,name:"eventName",placeholder:"EventName (required)"}),r.a.createElement(w,{onChange:x,name:"horse",placeholder:"Horse (required)"}),r.a.createElement(C,{onClick:x,name:"eventType",placeholder:"EventType (required)"}),r.a.createElement(T,{onChange:x,name:"resultNotes",placeholder:"Result Notes (Optional)"}),r.a.createElement(k,{disabled:!(f.horse&&f.eventName),onClick:function(e){e.preventDefault(),f.eventName&&f.horse&&b({eventName:f.eventName,horse:f.horse,eventType:f.eventType,resultNotes:f.resultNotes}).then((function(e){return v()})).catch((function(e){return console.log(e)}))}},"Submit Competition"))),r.a.createElement(O,{size:"md-6 sm-12"},r.a.createElement(E,null,r.a.createElement("h1",null,"Competitions On My List")),n.length?r.a.createElement(j,null,n.map((function(e){return r.a.createElement(y,{key:e._id},r.a.createElement(o.b,{to:"/competitions/"+e._id},r.a.createElement("strong",null,e.eventName," with ",e.horse)),r.a.createElement(m,{onClick:function(){return t=e._id,void h(t).then((function(e){return v()})).catch((function(e){return console.log(e)}));var t}}))}))):r.a.createElement("h3",null,"No Results to Display"))))};var S=function(e){var t=Object(a.useState)({}),n=Object(s.a)(t,2),l=n[0],c=n[1],u=Object(i.f)().id;return Object(a.useEffect)((function(){v(u).then((function(e){return c(e.data)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement(g,{fluid:!0},r.a.createElement(N,null,r.a.createElement(O,{size:"md-12"},r.a.createElement(E,null,r.a.createElement("h1",null,l.eventName," (",l.eventType,") with ",l.horse)))),r.a.createElement(N,null,r.a.createElement(O,{size:"md-10 md-offset-1"},r.a.createElement("article",null,"Event:",r.a.createElement("p",null,l.eventType),"Results:",r.a.createElement("p",null,l.resultNotes)))),r.a.createElement(N,null,r.a.createElement(O,{size:"md-2"},r.a.createElement(o.b,{to:"/"},"\u2190 Back to Horses"))))};var z=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"React Equestrian Competitions"))};var q=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"React Equestrian Competitions"))};var R=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(q,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:["/","/competitions"]},r.a.createElement(x,null)),r.a.createElement(i.a,{exact:!0,path:"/competitions/:id"},r.a.createElement(S,null)),r.a.createElement(i.a,null,r.a.createElement(z,null)))))};c.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.97fad81c.chunk.js.map