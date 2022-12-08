(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{20:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),r=c(21),i=c.n(r),l=c(22),j=c(23),n=c(24),o=c(26),b=c(5),d=c(2),m=(c(20),c(0));var h=function(){return Object(m.jsx)("nav",{className:"navbar",children:Object(m.jsxs)("ul",{className:"flex-row",children:[Object(m.jsx)("li",{className:"mx-2",children:Object(m.jsx)(b.b,{to:"/about",children:"About Me"})}),Object(m.jsx)("li",{className:"mx-2",children:Object(m.jsx)(b.b,{to:"/portfolio",children:"Portfolio"})}),Object(m.jsx)("li",{className:"mx-2",children:Object(m.jsx)(b.b,{to:"/contact",children:"Contact"})}),Object(m.jsx)("li",{className:"mx-2",children:Object(m.jsx)(b.b,{to:"/resume",children:" Resume"})})]})})};var x=function(){return Object(m.jsxs)("header",{className:"flex-row px-1",children:[Object(m.jsx)("div",{className:"logo",children:Object(m.jsx)("h1",{children:Object(m.jsx)(b.b,{to:"/",children:"Paul Lovato"})})}),Object(m.jsx)(h,{})]})},p=c.p+"static/media/Real-Paul.c0102492.jpg";var O=function(){return Object(m.jsxs)("section",{className:"home my-5",children:[Object(m.jsxs)("div",{className:"title",children:[Object(m.jsx)("h2",{children:"Hi, I'm Paul"}),Object(m.jsx)("p",{children:"Welcome to my React Portfolio!"}),Object(m.jsx)(b.b,{to:"portfolio",children:Object(m.jsx)("button",{children:"View my Projects"})})]}),Object(m.jsx)("div",{className:"portrait",children:Object(m.jsx)("img",{src:p,alt:"self portrait"})})]})};var u=function(){return Object(m.jsxs)("section",{className:"about",children:[Object(m.jsx)("h1",{id:"about",children:"My About me"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})},g=c(12),v=c(17),N=c(18);var f=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(N.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(""),i=Object(N.a)(r,2),l=i[0],j=i[1],n=c.name,o=c.email,b=c.message,d=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."));l||(s(Object(v.a)(Object(v.a)({},c),{},Object(g.a)({},e.target.name,e.target.value))),console.log("Handle Form",c))};return Object(m.jsxs)("section",{children:[Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:" Paul Lovato "}),Object(m.jsx)("h2",{children:" Jr. Developer "})]}),Object(m.jsx)("h1",{"data-testid":"h1tag",children:"Contact Me"}),Object(m.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),l||console.log("Submit Form",c)},children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(m.jsx)("input",{type:"text",name:"name",defaultValue:n,onBlur:d})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(m.jsx)("input",{type:"email",name:"email",defaultValue:o,onBlur:d})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(m.jsx)("textarea",{name:"message",rows:"5",defaultValue:b,onBlur:d})]}),l&&Object(m.jsx)("div",{children:Object(m.jsx)("p",{className:"error-text",children:l})}),Object(m.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})},k=c.p+"static/media/runy-buddy.851663db.png",w=c.p+"static/media/weather-d.6060b6bc.png",y=c.p+"static/media/note-taker.baa045f4.png",S=c.p+"static/media/time-quiz.9bb794de.png",D=c.p+"static/media/wrk-day.3c2a6ab0.png",C=c.p+"static/media/magic-trav.b713db58.png";function P(){var e=[{projectName:"Run Buddy",projectDescription:"HTML/CSS",projectImg:k},{projectName:"Time Quiz",projectDescription:"HTML/CSS/BootStrap/JavaScript",projectImg:S},{projectName:"Weather Dashboard",projectDescription:"HTML/CSS",projectImg:w},{projectName:"Note Taker",projectDescription:"Express.js/JSON",projectImg:y},{projectName:"Work Day Scheduler",projectDescription:"Express.js/JSON",projectImg:D},{projectName:"Magic Traveler",projectDescription:"Express.js/JSON",projectImg:C}];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"d-flex flex-row ",children:[Object(m.jsxs)("div",{className:"col-lg-4 card bg-dark text-white",children:[Object(m.jsx)("h5",{className:"card-title",children:e[0].projectName}),Object(m.jsx)("p",{className:"card-text",children:e[0].projectDescription}),Object(m.jsx)("img",{className:"card-img",src:e[0].projectImg,alt:"Card image"}),Object(m.jsxs)("div",{className:"card-img-overlay",children:[Object(m.jsx)("a",{href:"https://github.com/Plovato97/Run-Buddy",target:"_blank",children:Object(m.jsx)("button",{children:"GitHub"})}),Object(m.jsx)("a",{href:"http://plovato97.github.io/run-buddy",target:"_blank",children:Object(m.jsx)("button",{children:"Website"})})]})]}),Object(m.jsxs)("div",{className:"col-lg-4 card bg-dark text-white",children:[Object(m.jsx)("h5",{className:"card-title",children:e[1].projectName}),Object(m.jsx)("p",{className:"card-text",children:e[1].projectDescription}),Object(m.jsx)("img",{className:"card-img",src:e[1].projectImg,alt:"Card image"}),Object(m.jsxs)("div",{className:"card-img-overlay",children:[Object(m.jsx)("a",{href:"https://github.com/Plovato97/Time-Quiz",target:"_blank",children:Object(m.jsx)("button",{children:"GitHub"})}),Object(m.jsx)("a",{href:"https://plovato97.github.io/Time-Quiz/",target:"_blank",children:Object(m.jsx)("button",{children:"Website"})})]})]}),Object(m.jsxs)("div",{className:"col-lg-4 card bg-dark text-white",children:[Object(m.jsx)("h5",{className:"card-title",children:e[2].projectName}),Object(m.jsx)("p",{className:"card-text",children:e[2].projectDescription}),Object(m.jsx)("img",{className:"card-img",src:e[2].projectImg,alt:"Card image"}),Object(m.jsxs)("div",{className:"card-img-overlay",children:[Object(m.jsx)("a",{href:"https://github.com/Plovato97/weather-dash",target:"_blank",children:Object(m.jsx)("button",{children:"GitHub"})}),Object(m.jsx)("a",{href:"https://plovato97.github.io/weather-dash/",target:"_blank",children:Object(m.jsx)("button",{children:"Website"})})]})]}),Object(m.jsxs)("div",{className:"col-lg-4 card bg-dark text-white",children:[Object(m.jsx)("h5",{className:"card-title",children:e[3].projectName}),Object(m.jsx)("p",{className:"card-text",children:e[3].projectDescription}),Object(m.jsx)("img",{className:"card-img",src:e[3].projectImg,alt:"Card image"}),Object(m.jsxs)("div",{className:"card-img-overlay",children:[Object(m.jsx)("a",{href:"https://github.com/Plovato97/Notes-Taker",target:"_blank",children:Object(m.jsx)("button",{children:"GitHub"})}),Object(m.jsx)("a",{href:"https://note-taking-pl.herokuapp.com/",target:"_blank",children:Object(m.jsx)("button",{children:"Website"})})]})]}),Object(m.jsxs)("div",{className:"col-lg-4 card bg-dark text-white",children:[Object(m.jsx)("h5",{className:"card-title",children:e[4].projectName}),Object(m.jsx)("p",{className:"card-text",children:e[4].projectDescription}),Object(m.jsx)("img",{className:"card-img",src:e[4].projectImg,alt:"Card image"}),Object(m.jsxs)("div",{className:"card-img-overlay",children:[Object(m.jsx)("a",{href:"https://github.com/Plovato97/Day-Scheduler",target:"_blank",children:Object(m.jsx)("button",{children:"GitHub"})}),Object(m.jsx)("a",{href:"https://plovato97.github.io/Day-Scheduler/",target:"_blank",children:Object(m.jsx)("button",{children:"Website"})})]})]}),Object(m.jsxs)("div",{className:"col-lg-4 card bg-dark text-white",children:[Object(m.jsx)("h5",{className:"card-title",children:e[5].projectName}),Object(m.jsx)("p",{className:"card-text",children:e[5].projectDescription}),Object(m.jsx)("img",{className:"card-img",src:e[5].projectImg,alt:"Card image"}),Object(m.jsxs)("div",{className:"card-img-overlay",children:[Object(m.jsx)("a",{href:"https://github.com/Plovato97/Magic-trav",target:"_blank",children:Object(m.jsx)("button",{children:"GitHub"})}),Object(m.jsx)("a",{href:"https://plovato97.github.io/Magic-trav/",target:"_blank",children:Object(m.jsx)("button",{children:"Website"})})]})]})]})})}var I=c(14);var M=function(){return Object(m.jsx)("div",{className:"footer-div",children:Object(m.jsx)("footer",{children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("a",{href:"https://github.com/plovato97",target:"blank",children:Object(m.jsx)("li",{children:Object(m.jsx)(I.a,{})})}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/paul-lovato-003531227/",target:"blank",children:Object(m.jsx)("li",{children:Object(m.jsx)(I.c,{})})}),Object(m.jsx)("a",{href:"https://www.instagram.com/mightyline97/?hl=en",target:"blank",children:Object(m.jsx)("li",{children:Object(m.jsx)(I.b,{})})})]})})})},B=c.p+"static/media/Resume.fa2870ba.pdf";function F(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{children:["Programming Languages",Object(m.jsx)("br",{}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("p",{className:"skills",children:"HTML5"}),Object(m.jsx)("p",{className:"skills",children:"CSS3"}),Object(m.jsx)("p",{className:"skills",children:"JavaScript ES6+"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]}),"Front End",Object(m.jsx)("br",{}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("p",{className:"skills",children:"Material Ui"}),Object(m.jsx)("p",{className:"skills",children:"Bootstrap"}),Object(m.jsx)("p",{className:"skills",children:"jQuery"}),Object(m.jsx)("p",{className:"skills",children:"Bulma"})]}),Object(m.jsx)("br",{}),"Back End",Object(m.jsx)("br",{}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("p",{className:"skills",children:"Node.js"}),Object(m.jsx)("p",{className:"skills",children:"Express.js"}),Object(m.jsx)("p",{className:"skills",children:"React"}),Object(m.jsx)("p",{className:"skills",children:"MongoDB"}),Object(m.jsx)("p",{className:"skills",children:"MySQL"}),Object(m.jsx)("p",{className:"skills",children:"NoSQl"}),Object(m.jsx)("p",{className:"skills",children:"API"})]})]}),Object(m.jsx)("h2",{className:"h2",children:"Download my resume"}),Object(m.jsx)("button",{className:"resume-btn",onClick:function(e){e.preventDefault(),window.open(B)},children:"Click Here!"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]})}var H=function(e){Object(n.a)(c,e);var t=Object(o.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(m.jsx)(b.a,{basename:"/",children:Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(x,{}),Object(m.jsxs)("main",{children:[Object(m.jsx)(d.a,{exact:!0,path:"/",component:O}),Object(m.jsx)(d.a,{exact:!0,path:"/about",component:u}),Object(m.jsx)(d.a,{exact:!0,path:"/contact",component:f}),Object(m.jsx)(d.a,{exact:!0,path:"/portfolio",component:P}),Object(m.jsx)(d.a,{exact:!0,path:"/resume",component:F})]}),Object(m.jsx)(M,{})]})})}}]),c}(a.Component),L=H;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),r(e),i(e)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(L,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),T()}},[[40,1,2]]]);
//# sourceMappingURL=main.d0e5de45.chunk.js.map