(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var o=n(2),a=n(6),r=(n(0),n(140)),i={title:"Installation",sidebar_label:"Installation"},c={id:"meteor-app/installation",title:"Installation",description:"HACC Hui Meteor Application",source:"@site/docs/meteor-app/installation.md",permalink:"/docs/meteor-app/installation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/meteor-app/installation.md",sidebar_label:"Installation",sidebar:"someSidebar",previous:{title:"Motivation",permalink:"/docs/overview/motivation"},next:{title:"Creating HACC Hui Slackbot",permalink:"/docs/slackbot/create-hacc-hui-slackbot"}},l=[{value:"HACC Hui Meteor Application",id:"hacc-hui-meteor-application",children:[]},{value:"Additional Tools",id:"additional-tools",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"hacc-hui-meteor-application"},"HACC Hui Meteor Application"),Object(r.b)("p",null,"First, download and install ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.meteor.com/"}),"Meteor"),". "),Object(r.b)("p",null,"Second, download the HACC Hui source code from ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/HACC-Hui/HACC-Hui"}),"https://github.com/HACC-Hui/HACC-Hui"),"."),Object(r.b)("p",null,"Next, cd to the ",Object(r.b)("inlineCode",{parentName:"p"},"HACC-Hui/app/")," directory and invoke ",Object(r.b)("inlineCode",{parentName:"p"},"meteor npm install"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"HACC-Hui/app $ meteor npm install\n")),Object(r.b)("p",null,"This will download and install the third-party libraries required to run this system. If you are not in the ",Object(r.b)("inlineCode",{parentName:"p"},"app")," directory and you run ",Object(r.b)("inlineCode",{parentName:"p"},"meteor npm install"),". You will see something like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"HACC-Hui $ meteor npm install\nnpm WARN saveError ENOENT: no such file or directory, open 'HACC-Hui\\package.json'\nnpm WARN enoent ENOENT: no such file or directory, open 'HACC-Hui\\package.json'\nnpm WARN HACC-Hui No description\nnpm WARN HACC-Hui No repository field.\nnpm WARN HACC-Hui No README data\nnpm WARN HACC-Hui No license field.\n\nup to date in 0.426s\nfound 0 vulnerabilities\n\nHACC-Hui $\n")),Object(r.b)("p",null,"Copy the ",Object(r.b)("inlineCode",{parentName:"p"},"example.env")," file to ",Object(r.b)("inlineCode",{parentName:"p"},".env"),". This is necessary for the Bolt slackbot. Don't worry about the values for the token and signing secret. We'll change them later."),Object(r.b)("p",null,"To make sure the database starts from an empty state, run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"HACC-Hui/app$ meteor reset\nProject reset.\nHACC-Hui/app $\n")),Object(r.b)("p",null,"To run the system, invoke this command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"HACC-Hui/app$ meteor npm run start\n\n\n> hacc-hui@ start ~/HACC-Hui/app\n> cross-env METEOR_NO_RELEASE_CHECK=1 meteor --settings ../config/settings.development.json --port 3400\n\n[[[[[ ~/HACC-Hui/app ]]]]]\n\n=> Started proxy.                             \n=> Started MongoDB.                           \nW20200616-12:49:22.460(-10)? (STDERR) Note: you are using a pure-JavaScript implementation of bcrypt.\nW20200616-12:49:22.509(-10)? (STDERR) While this implementation will work correctly, it is known to be\nW20200616-12:49:22.509(-10)? (STDERR) approximately three times slower than the native implementation.\nW20200616-12:49:22.510(-10)? (STDERR) In order to use the native implementation instead, run\nW20200616-12:49:22.510(-10)? (STDERR) \nW20200616-12:49:22.510(-10)? (STDERR)   meteor npm install --save bcrypt\nW20200616-12:49:22.510(-10)? (STDERR) \nW20200616-12:49:22.511(-10)? (STDERR) in the root directory of your application.\nI20200616-12:49:23.862(-10)? Creating the default user(s)\nI20200616-12:49:23.862(-10)?   Creating user admin@foo.com.\nI20200616-12:49:24.130(-10)?   Creating user john@foo.com.\nI20200616-12:49:25.314(-10)? \u26a1\ufe0f Bolt app is running on port 3000!\nI20200616-12:49:25.480(-10)? Loading database from file database/2020-06-16-11-34-22.json, dumped an hour ago.\nI20200616-12:49:25.481(-10)? Defining 0 AdministratorCollection documents.\nI20200616-12:49:25.481(-10)? Have 0 documents.\nI20200616-12:49:25.481(-10)? Defining 3 InterestCollection documents.\nI20200616-12:49:25.546(-10)? Have 3 documents.\nI20200616-12:49:25.547(-10)? Defining 3 SkillCollection documents.\nI20200616-12:49:25.606(-10)? Have 3 documents.\nI20200616-12:49:25.606(-10)? Defining 3 ToolCollection documents.\nI20200616-12:49:25.663(-10)? Have 3 documents.\nI20200616-12:49:25.664(-10)? Defining 4 ChallengeCollection documents.\nI20200616-12:49:25.828(-10)? Have 4 documents.\nI20200616-12:49:25.829(-10)? Defining 0 DeveloperCollection documents.\nI20200616-12:49:25.830(-10)? Have 0 documents.\nI20200616-12:49:25.831(-10)? Defining 0 TeamCollection documents.\nI20200616-12:49:25.831(-10)? Have 0 documents.\nI20200616-12:49:25.832(-10)? Defining 0 SlackUserCollection documents.\nI20200616-12:49:25.832(-10)? Have 0 documents.\nI20200616-12:49:25.832(-10)? Finished loading database.\n=> Started your app.\n\n=> App running at: http://localhost:3400/\n\n")),Object(r.b)("p",null,'This will invoke the "start" script in ',Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/HACC-Hui/HACC-Hui/blob/master/app/package.json"}),"package.json"),", which initializes the database (if empty) with sample data.  Go to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://localhost:3400"}),"http://localhost:3400")," to confirm that the system is running:"),Object(r.b)("img",{src:"/img/developer/HACC-Hui-landing.png",width:"100%"}),Object(r.b)("p",null,"Do not worry about the warning about the pure-JavaScript implementation of bcrypt."),Object(r.b)("h2",{id:"additional-tools"},"Additional Tools"),Object(r.b)("p",null,"During development, you are going to need ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://ngrok.com/"}),"ngrok")," to forward the Slack events and messages to the HACC Hui Slackbot. Create a free account and download ",Object(r.b)("inlineCode",{parentName:"p"},"ngrok")," for your development machine."))}s.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);