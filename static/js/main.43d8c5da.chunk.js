(this["webpackJsonpmodokemdev-website"]=this["webpackJsonpmodokemdev-website"]||[]).push([[0],{35:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=(a(35),a(21)),i=a(22),s=a(10),c=a(30),d=a(29),m=a(12),u=a(3),g=a(7),h=a(15),p={users:[{id:1,name:"ModokemDev"},{id:2,name:"meltinglight"}],projects:[{name:"meeting-API",id:1124,sat:!0,sun:!1,isFavorite:!1,bio:"Meeting API developped with Laravel."},{name:"speakers-app",id:1530,sat:!1,sun:!0,isFavorite:!0,bio:"Speakers App is a Next.js application deployed to GitHub Pages."},{name:"nextjs-blog",id:10803,sat:!0,sun:!1,isFavorite:!1,bio:"Next.js blog app deployed to GitHub Pages using gh-pages."}],languages:[{id:"en",htmlTitle:"Modokemdev | en",name:"English",title:"Welcome to Modokemdev",description:"C# developer at day, Dragon Rider at night."},{id:"fr",htmlTitle:"Modokemdev | fr",name:"Fran\xe7ais",title:"Bienvenue \xe0 Modokemdev",description:"D\xe9veloppeur C# le jour, Dragon Rider la nuit."},{id:"es",htmlTitle:"Modokemdev | es",name:"Espa\xf1ol",title:"Bienvenido a Modokemdev",description:"Desarollador C# de d\xeda, Dragon Rider de noche."}],pageNotFound:[{id:404,htmlTitle:"404 - Page not found",name:"Page not found",title:"404 - Page not found",description:"You are lost!"}]},k=Object(h.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return e})),b=a.p+"static/media/profile.c8178ecc.png",v=a(24);function f(e){var t=e.id;return r.a.createElement(v.SimpleImg,{src:t,animationDuration:"1",width:200,height:200,applyAspectRatio:"true"})}var x=Object(g.b)((function(e){return e}))((function(e){e.name;var t=e.description;return r.a.createElement("div",{className:"md:flex bg-gray-100 dark:bg-gray-900 rounded-xl p-8 md:p-0"},r.a.createElement("div",{className:"bg-gray-100 dark:bg-gray-800 md:w-full md:h-auto md:rounded-xl rounded-xl shadow-2xl mx-auto md:ml-4 md:my-4 md:p-8"},r.a.createElement(f,{id:b}),r.a.createElement("div",{className:"px-4 py-4 md:px-2"},r.a.createElement("div",{className:"font-bold text-xl text-gray-600 dark:text-gray-300 mb-2"},"ModokemDev"),r.a.createElement("p",{className:"text-gray-700 dark:text-gray-400 text-base"},t)),r.a.createElement("div",{className:"px-4 md:px-0 pt-4 pb-4"},r.a.createElement("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},"#photography"),r.a.createElement("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},"#travel"),r.a.createElement("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},"#winter"))),r.a.createElement("div",{className:"pt-6 md:p-8 text-center md:text-left space-y-4"},r.a.createElement("div",{className:"uppercase tracking-wide text-sm text-indigo-600 dark:text-gray-300 font-bold"},"Who am I?"),r.a.createElement("p",{className:"mt-2 mb-2 text-left text-gray-600 dark:text-gray-400"},"My name is ModokemDev. I am enthusiast web developer. I spend some of my time learning technologies, mainly for fun, but also to be a better developer."),r.a.createElement("div",{className:"uppercase tracking-wide text-sm text-indigo-600 dark:text-gray-300 font-bold"},"So what have you been learning?"),r.a.createElement("p",{className:"mt-2 mb-2 text-left text-gray-600 dark:text-gray-400"},"Oh man it's hard to keep track of everything. But here is what I can remember. My first experience was probably at primary school with something called Scratch \ud83d\ude3a. I think it is still around. As a child, I remember my dad giving me a book to learn Visual Basic (Yes, I know ...\ud83d\ude44). The book came with a floppy disk \ud83d\udcbe (I am not that old...). When I was a teenager I took some classes to learn Visual Basic, MySQL and C++. I forgot most of it to be honest. Don't ask me why but I ended up studying chemistry at university. I call this the dark times. I officially started my developer journey when I got into software engineering at university.")))})),y=a(28);function E(e){var t=e.searchQuery,a=e.setSearchQuery;return r.a.createElement("div",{className:"mb-6 "},r.a.createElement("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Search by name",value:t,onChange:function(e){return a(e.target.value)}}))}function w(e){e.id;var t=e.bio,a=e.name;return r.a.createElement("div",{className:"bg-gray-100 dark:bg-gray-800 rounded overflow-hidden shadow-lg p-6"},r.a.createElement("div",{className:"grid grid-cols-4 mb-6"},r.a.createElement("div",{className:"text-black dark:text-white font-bold text-lg col-span-3"},"".concat(a))),r.a.createElement("div",{className:"mb-6"},r.a.createElement(f,{id:b})),r.a.createElement("div",{className:"text-gray-600 dark:text-white"},t))}var M=Object(g.b)((function(e){return{projects:e.projects}}))((function(e){var t=e.projects,a=Object(n.useState)(""),o=Object(y.a)(a,2),l=o[0],i=o[1];return r.a.createElement("div",null,r.a.createElement(E,{searchQuery:l,setSearchQuery:i}),r.a.createElement("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12"},t.filter((function(e){var t="".concat(e.name).toLowerCase();return 0===l.length||t.includes(l.toLocaleLowerCase())})).map((function(e){return r.a.createElement(w,Object.assign({key:e.id},e))}))))})),N=a(25);function j(e){var t=e.id;return r.a.createElement("div",{className:"flex justify-center"},r.a.createElement("div",{class:"h-96 my-3 flex flex-wrap content-center"},r.a.createElement("div",{className:"max-w-sm rounded overflow-hidden shadow-lg"},r.a.createElement("div",{className:"px-6 py-4"},r.a.createElement("h2",{className:"font-bold text-gray-900 dark:text-white mb-2 flex justify-center"},"404 | Page not found"),r.a.createElement("div",{className:"font-bold text-gray-600 dark:text-gray-300"},"The path,"," ",r.a.createElement("span",{className:"bg-gray-200 dark:bg-indigo-600"},"/",t),", did not match any route.")))))}var D=Object(g.b)((function(e,t){var a=void 0===t.match?"en":t.match.params.id,n=e.languages.find((function(e){return e.id===a})),r=!0;return void 0===n&&(n=e.pageNotFound.find((function(e){return 404===e.id})),r=!1),{id:a,language:n,isValidRequest:r}}))((function(e){var t=e.id,a=e.language,n=e.isValidRequest;return r.a.createElement("div",null,r.a.createElement(N.a,null,r.a.createElement("title",null,a.htmlTitle)),n&&r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h2",{className:"font-bold text-xl text-gray-900 dark:text-white mb-2 mt-2 px-6"},a.title),r.a.createElement(x,{key:a.id,id:a.id,name:a.name,description:a.description})),r.a.createElement("div",null,r.a.createElement("h2",{className:"font-bold text-xl text-gray-900 dark:text-white mb-2 mt-2 px-6"},a.title),r.a.createElement(M,null))),!n&&r.a.createElement("div",null,r.a.createElement(j,{id:t})))})),O=function(e){var t=e.isMenuOpen,a=e.onMobileMenuClick;return r.a.createElement("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden"},r.a.createElement("button",{onClick:a,className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-expanded":"false"},r.a.createElement("span",{className:"sr-only"},"Open main menu"),r.a.createElement("svg",{className:"".concat(t?"hidden":"block"," w-6 h-6"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})),r.a.createElement("svg",{className:"".concat(t?"block":"hidden"," w-6 h-6"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))))},I=function(e){var t=e.isDarkMode,a=e.onDarkModeToggle;return r.a.createElement("span",{role:"checkbox","aria-checked":t,tabIndex:"0",onClick:a,className:"".concat(t?"bg-indigo-600":"bg-gray-500"," relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline")},r.a.createElement("span",{"aria-hidden":"true",className:"".concat(t?"translate-x-5":"translate-x-0"," inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200")}))},C=a.p+"static/media/modokemdev-logo.52c732dc.svg",S=a.p+"static/media/modokemdev-logo-mark.05117064.svg",L=a.p+"static/media/modokemdev-logo-mark-black-font.21d892af.svg",T=function(e){var t=e.isDarkMode;return r.a.createElement("div",{className:"flex-shrink-0 flex items-center"},r.a.createElement("img",{className:"block lg:hidden h-8 w-auto",src:C,alt:"Workflow"}),r.a.createElement("img",{className:"hidden lg:block h-8 w-auto",src:t?S:L,alt:"Workflow"}))};var B=Object(g.b)((function(e){return{languages:e.languages}}))((function(e){var t=e.languages,a=e.isMenuOpen,n=e.onMobileMenuClick,o=e.isDarkMode,l=e.onDarkModeToggle;return r.a.createElement("nav",{className:"bg-gray-200 dark:bg-gray-800 rounded-md mb-6"},r.a.createElement("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},r.a.createElement("div",{className:"relative flex items-center justify-between h-16"},r.a.createElement(O,{isMenuOpen:a,onMobileMenuClick:n}),r.a.createElement("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},r.a.createElement(T,{isDarkMode:o}),r.a.createElement("div",{className:"hidden sm:block sm:ml-6"},r.a.createElement("div",{className:"flex space-x-4"},t.map((function(e){return r.a.createElement(m.b,{to:"/".concat(e.id),key:e.id,className:"text-black dark:text-gray-300 hover:text-gray-500 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"},e.name)}))))),r.a.createElement("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},r.a.createElement(I,{isDarkMode:o,onDarkModeToggle:l})))),r.a.createElement("div",{className:"".concat(a?"block":"hidden"," sm:hidden")},r.a.createElement("div",{className:"px-2 pt-2 pb-3 space-y-1"},t.map((function(e){return r.a.createElement(m.b,{to:"/".concat(e.id),key:e.id,className:"text-black dark:text-gray-300 hover:text-gray-500 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"},e.name)})))))})),W=Object(g.b)((function(e){return e}))((function(){return r.a.createElement("div",{className:"bg-gray-200 dark:bg-gray-800 text-black dark:text-gray-300 rounded-md mt-6 p-6 flex justify-center"},"Modokemdev \xa9 2020")})),q=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={isDarkMode:!1,isMenuOpen:!1},e.onDarkModeToggle=e.onDarkModeToggle.bind(Object(s.a)(e)),e.onMobileMenuClick=e.onMobileMenuClick.bind(Object(s.a)(e)),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setInitialDarkMode()}},{key:"setInitialDarkMode",value:function(){"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.querySelector("html").classList.add("dark"):document.querySelector("html").classList.remove("dark"),this.setDarkMode()}},{key:"onMobileMenuClick",value:function(){this.setState({isMenuOpen:!this.state.isMenuOpen})}},{key:"onDarkModeToggle",value:function(){document.querySelector("html").classList.contains("dark")?document.querySelector("html").classList.remove("dark"):document.querySelector("html").classList.add("dark"),this.setDarkMode()}},{key:"setDarkMode",value:function(){this.setState({isDarkMode:document.querySelector("html").classList.contains("dark")})}},{key:"render",value:function(){return r.a.createElement("div",{className:"bg-white dark:bg-black"},r.a.createElement("div",{className:"px-4 py-3"},r.a.createElement(m.a,null,r.a.createElement(g.a,{store:k},r.a.createElement("header",null,r.a.createElement(B,{isDarkMode:this.state.isDarkMode,onDarkModeToggle:this.onDarkModeToggle,isMenuOpen:this.state.isMenuOpen,onMobileMenuClick:this.onMobileMenuClick})),r.a.createElement("main",null,r.a.createElement(u.a,{exact:!0,path:"/",render:function(){return r.a.createElement(D,null)}}),r.a.createElement(u.a,{exact:!0,path:"/:id",render:function(e){var t=e.match;return r.a.createElement(D,{match:t})}})),r.a.createElement(W,null)))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=document.getElementById("root");P.hasChildNodes()?Object(o.hydrate)(r.a.createElement(q,null),P):Object(o.render)(r.a.createElement(q,null),P),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.43d8c5da.chunk.js.map