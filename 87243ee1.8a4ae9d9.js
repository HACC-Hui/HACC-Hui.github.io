(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{121:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),i=a(6),r=(a(0),a(140)),o={title:"Administrator Stories",sidebar_label:"Admin Stories"},s={id:"requirements/administrators",title:"Administrator Stories",description:"HACC Hui Registration",source:"@site/docs/requirements/administrators.md",permalink:"/docs/requirements/administrators",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/requirements/administrators.md",sidebar_label:"Admin Stories",sidebar:"someSidebar",previous:{title:"Installer Stories",permalink:"/docs/requirements/installers"},next:{title:"Participant Stories",permalink:"/docs/requirements/participants"}},c=[{value:"HACC Hui Registration",id:"hacc-hui-registration",children:[]},{value:"HACC Hui Configuration",id:"hacc-hui-configuration",children:[]},{value:"Team Formation Status",id:"team-formation-status",children:[]},{value:"Analytics Page",id:"analytics-page",children:[]}],l={rightToc:c};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"hacc-hui-registration"},"HACC Hui Registration"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"US-A1: As an administrator, I want to register with HACC Hui so I can get my credentials.")),Object(r.b)("p",null,"Once the installer stands up HACC Hui, one or more administrators configure it for this year's challenge. To do this, they must first obtain their credentials to login to the system.  The HACC Hui Slackbot supplies these credentials to them. The administrator signs in to the HACC Slack workspace, opens ",Object(r.b)("inlineCode",{parentName:"p"},"hacchui")," direct message channel, and types:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"register me \n\nThe slackbot responds:\n\nWelcome to HACC Hui!  Here are your credentials:\nHost: https://hacchui.com\nUsername: philipmjohnson\nPassword: eggplant-davis-frisco\n")),Object(r.b)("p",null,'What has happened is that the slackbot has communicated with the HACC Hui application and told it to register a new user account with the username "philipmjohnson" (this is the admin\'s Slack username which the bot had access to) and provided an initial randomly generated password (eggplant-davis-frisco). '),Object(r.b)("h3",{id:"hacc-hui-configuration"},"HACC Hui Configuration"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"US-A2: As an administrator, I want to login to HACC Hui and configure the application.")),Object(r.b)("p",null,"Now that the administrator has obtained their credentials, they can login to the HACC Hui application through their phone or laptop browser and perform basic configuration. Because the system has been configured to know which logins are administrators, the system will provide this user with admin capabilities, including the capability to configure the system for a specific year.  This involves specifying:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The names of the challenges for this year's HACC"),Object(r.b)("li",{parentName:"ul"},'The initial set of "skills" that users can select'),Object(r.b)("li",{parentName:"ul"},'The initial set of "tools" that the users can select.')),Object(r.b)("p",null,'The set of challenges, skills, and tools can be expanded at any time by administrators. By requiring participants to choose from a pre-specified list of skills, tools, and challenges, HACC Hui can easily perform "matching". The matching process is vastly more complicated if participants can specify skills and tools using free text. '),Object(r.b)("h3",{id:"team-formation-status"},"Team Formation Status"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"US-A3: As an administrator, I want to learn the team formation status to better understand the situation.")),Object(r.b)("p",null,'All admins have access to a page called "Team Formation Status".  This page provides the current status of all created teams: their names, members, invitations, skills and interests, whether they are open or closed, etc. '),Object(r.b)("p",null,"On this page the administrator can assign the team's GitHub repository."),Object(r.b)("p",null,"The purpose of this page is to provide HACC administrators some real-time insight into the status of team formation, including: how many teams have been created, how many participants have found a team, how many teams are still looking for members, etc. "),Object(r.b)("p",null,"The intent is that administrators will check this page on a daily basis during the first week of the HACC to see how team formation is proceeding, and to use this information to formulate messages to the HACC Slack workspace to help team formation move along. "),Object(r.b)("h3",{id:"analytics-page"},"Analytics Page"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"US-A4: As an administrator, I want to see analytics of user interactions to improve team formation process in future years.")),Object(r.b)("p",null,'HACC Hui Administrators will have access to a page called "Analytics".  This page will interpret instrumentation (logging) data collected through user interaction with the system in order to answer questions about the team formation process.  The questions are intended to enable HACC Administrators (along with the results of surveys of participants) to improve the team formation process in future years. HACC Hui analytics might also be useful to identify emergent problems with team formation during the current HACC.'),Object(r.b)("p",null,"Here are some questions that could be answered through an Analytics page."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"How many (and what percentage) of participants have signed their participation agreements. Are there any team members who are non-compliant?")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'How many (and what percentage) of participants who register with Slack actually attempt to form a team? The number of participants who attempt to form a team is simply the number of participants who /invited the hacchui slackbot.  The percentage is the number of participants who /invited hacchui divided by the total number of participants in Slack.  (The total number of participants is the total number of users in the workspace minus the number of people in the organizing committee, who cannot be a participant.) We want to minimize this first stage of "attrition", whereby someone who joins the Slack workspace for some reason bails without even trying to form a team.')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'How many (and what percentage) of participants try and fail to join a team? Some people might /invite the hacchui slackbot, but never get invited (or never accept an invitation to join) a team. This can be calculated in the obvious way: the number of registered users of HaccHui who are not members of any team. We want to minimize this second stage of "attrition". ')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'How many (and what percentage) of teams are "pre-formed" prior to the HACC?  We can use logging data to approximate this number by looking for teams in which all members were "direct invited" and which were never "open" for matching. The percentage is just the proportion of the total number of teams. ')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"How many (and what percentage) of teams used HACC Hui matching? We can use logging data to find out how many teams invited at least one person based on a match. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'How many (and what percentage) of participants used HACC Hui matching? We can use logging data to find out how many HACC Hui users set up a profile and clicked the "Interested in Joining" for at least one team. ')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"How many participants leave HACC Hui? This is the number of users who explicitly delete their account.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"What are the skills and tools of HACC Hui users and what are the levels of expertise?  This analyzes the profiles of HACC Hui users to provide anonymous aggregate statistics about skills and tools. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"What skills and interests are needed by teams? This analyzes Team Profile logging data to find out what skills and tools teams look for."))),Object(r.b)("p",null,"The next page discusses the participant user stories."))}p.isMDXComponent=!0},140:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return b}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(a),h=n,b=m["".concat(o,".").concat(h)]||m[h]||u[h]||r;return a?i.a.createElement(b,s(s({ref:t},l),{},{components:a})):i.a.createElement(b,s({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);