(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(135)),c={title:"Creating HACC Hui Slackbot",sidebar_label:"Creating HACC Hui bot"},i={id:"slackbot/create-hacc-hui-slackbot",title:"Creating HACC Hui Slackbot",description:"Create a new App for Slack",source:"@site/docs\\slackbot\\create-hacc-hui-slackbot.md",permalink:"/docs/slackbot/create-hacc-hui-slackbot",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/slackbot/create-hacc-hui-slackbot.md",sidebar_label:"Creating HACC Hui bot",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/meteor-app/installation"},next:{title:"Running HACC Hui",permalink:"/docs/meteor-app/running-hacc-hui"}},p=[{value:"Create a new App for Slack",id:"create-a-new-app-for-slack",children:[]}],l={rightToc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"create-a-new-app-for-slack"},"Create a new App for Slack"),Object(o.b)("p",null,"Go to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://api.slack.com/"}),"api.slack.com")," and click on ",Object(o.b)("inlineCode",{parentName:"p"},"Start Building"),". This creates a new Slack App."),Object(o.b)("img",{src:"/img/developer/new-slack-app.png",width:"100%"}),Object(o.b)("p",null,"Name your app. We're going to use hacchui."),Object(o.b)("img",{src:"/img/developer/slack-app-name.png",width:"100%"}),Object(o.b)("p",null,"Then choose your Slack Workspace. We highly recommend that you choose a development workspace. We don't want to be interacting with actual developers yet."),Object(o.b)("img",{src:"/img/developer/choose-workspace.png",width:"100%"}),Object(o.b)("p",null,"Click ",Object(o.b)("inlineCode",{parentName:"p"},"Create App")),Object(o.b)("img",{src:"/img/developer/new-app-basics-page.png",width:"100%"}),Object(o.b)("p",null,"Now we are going to add the Permissions out slackbot needs. Click on ",Object(o.b)("inlineCode",{parentName:"p"},"OAuth & Permissions"),". Scroll down to Scopes."),Object(o.b)("img",{src:"/img/developer/bot-scopes.png",width:"100%"}),Object(o.b)("p",null,"Click ",Object(o.b)("inlineCode",{parentName:"p"},"Add an OAuth Scope"),". Then add ",Object(o.b)("inlineCode",{parentName:"p"},"app_mentions:read"),", ",Object(o.b)("inlineCode",{parentName:"p"},"chat:write"),", ",Object(o.b)("inlineCode",{parentName:"p"},"im:history"),", ",Object(o.b)("inlineCode",{parentName:"p"},"im:read"),", ",Object(o.b)("inlineCode",{parentName:"p"},"im:write"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"users.profile:read"),". This should give our slackbot enough permissions to interact with the participants and administrators."),Object(o.b)("img",{src:"/img/developer/selected-scopes.png",width:"100%"}),Object(o.b)("p",null,"Now click ",Object(o.b)("inlineCode",{parentName:"p"},"Event Subscriptions"),"."),Object(o.b)("img",{src:"/img/developer/bot-event-subscription.png",width:"100%"}),Object(o.b)("p",null,"Enable events. We'll fill out the Request URL later. See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../meteor-app/running-hacc-hui"}),"Running HACC Hui"),"."),Object(o.b)("p",null,"Lastly, install your app. "),Object(o.b)("p",null,"After you install the app, copy the Bot User OAuth Access Token from the ",Object(o.b)("inlineCode",{parentName:"p"},"Install App")," page and the Signing Secret from the ",Object(o.b)("inlineCode",{parentName:"p"},"Basic Information")," page into the HACC Hui app's ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file. Here's an example .env file: "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-.env"}),"SLACK_BOT_TOKEN=# your slackbot token xoxb-#####-####-####\nSLACK_SIGNING_SECRET=# your slackbot signing secret\n")))}b.isMDXComponent=!0},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);