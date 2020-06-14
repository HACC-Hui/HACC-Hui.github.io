(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{108:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return h}));var n=a(2),i=a(6),o=(a(0),a(122)),r={title:"Developer Stories",sidebar_label:"Developer Stories"},l={id:"requirements/developers",title:"Developer Stories",description:"HACC Hui Registration",source:"@site/docs/requirements/developers.md",permalink:"/docs/requirements/developers",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/requirements/developers.md",sidebar_label:"Developer Stories",sidebar:"someSidebar",previous:{title:"Administrator Stories",permalink:"/docs/requirements/administrators"},next:{title:"Future Development",permalink:"/docs/requirements/future"}},s=[{value:"HACC Hui Registration",id:"hacc-hui-registration",children:[]},{value:"Developer profile configuration",id:"developer-profile-configuration",children:[]},{value:"Suggest a tool or skill",id:"suggest-a-tool-or-skill",children:[]},{value:"Team Creation",id:"team-creation",children:[]},{value:"Team Matching (Developer initiated)",id:"team-matching-developer-initiated",children:[]},{value:"Joining a team",id:"joining-a-team",children:[]},{value:"Direct Invitations",id:"direct-invitations",children:[]},{value:"Leaving a team",id:"leaving-a-team",children:[]},{value:"Delete Account",id:"delete-account",children:[]},{value:"Team Invitation prior to registration",id:"team-invitation-prior-to-registration",children:[]}],c={rightToc:s};function h(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"hacc-hui-registration"},"HACC Hui Registration"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"As a developer, I want to register with HACC Hui to join a great team.")),Object(o.b)("p",null,"In order for a participant to login to the HACC Hui system as a developer, they must also obtain their credentials, which they do in the same way as an administrator. After logging into the Slack workspace, they go to the ",Object(o.b)("inlineCode",{parentName:"p"},"hacchui")," personal DM channel and type:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"register me \n\nThe slackbot responds:\n\nWelcome to HACC Hui!  Here are your credentials:\nHost: https://hacchui.com\nUsername: mercedez\nPassword: foo-bar-jingo\n")),Object(o.b)("p",null,'This user (Mercedez) can now login to HACC Hui using their phone or laptop browser. Since the username "mercedez" was not specified as an administrator, this user will login in the role of "developer". '),Object(o.b)("h3",{id:"developer-profile-configuration"},"Developer profile configuration"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"As a developer, I want to login to HACC Hui and develop my profile, so I can be matched with the best open team.")),Object(o.b)("p",null,"Once a developer logs in, they are taken to a profile page. This allows them to fill out a form to specify the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Skills: What skills would they like to be associated with.  For each skill, they can specify "Experienced", "Novice", "Don\'t know, but would like to learn".'),Object(o.b)("li",{parentName:"ul"},'Tools: What tools would they like to be associated with.  For each tool, they can specify "Experienced", "Novice", "Don\'t know, but would like to learn".'),Object(o.b)("li",{parentName:"ul"},"Challenges: What challenges are they interested in working on.  This is a checkbox: they must specify at least one, but can specify up to all of the challenges. "),Object(o.b)("li",{parentName:"ul"},"LinkedIn: the URL to the developer's LinkedIn account, if they have one. (Optional)."),Object(o.b)("li",{parentName:"ul"},"GitHub: the URL to the developer's GitHub account, if they have one. (Optional)"),Object(o.b)("li",{parentName:"ul"},"Website: the URL to the developer's home page or professional portfolio, if they have one. (Optional)."),Object(o.b)("li",{parentName:"ul"},"About me: A very short free text field that allows the developer to say a little something about themselves. Limited to, say, 200 characters. (Optional). ")),Object(o.b)("p",null,"Like any form, the developer presses submit to save their changes, and the app updates the page to indicate their current profile. "),Object(o.b)("p",null,"Developer profile configuration is optional, though I think we should encourage it because it provides us with really useful information about the background and interests of developers at HACC."),Object(o.b)("h3",{id:"suggest-a-tool-or-skill"},"Suggest a tool or skill"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"As a developer, I want to suggest a new skill or tool to improve HACC Hui matching.")),Object(o.b)("p",null,"If there is a skill or tool that the developer wants to be associated with, they can fill out a form to suggest it to the administrators on this page. This generates a Slack DM to the admins with the suggestion, and the user who requested it.  If they approve, they can login to the system to update the set of tools or skills, and then DM the developer to say it's now added. Or they can DM the user to explain why this request is redundant or out of scope for the challenge."),Object(o.b)("h3",{id:"team-creation"},"Team Creation"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"As a developer, I want to create a team, so we can solve a challenge and win the HACC.")),Object(o.b)("p",null,'Developers can also create teams.  The developer that creates a team is the "owner" of that team within HACC Hui.  Team owners control who is on the team. '),Object(o.b)("p",null,'To create a team, a developer visits the "Team Creation" page.  This page enables the developer to fill out a form with the following fields:'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The name of the team. Must be unique across all defined team names, as this string constitutes a unique ID.  Must be all lower case, and consist of only letters and digits.  This means no spaces or special characters. "),Object(o.b)("li",{parentName:"ul"},"Challenges: The challenge (or challenges) of interest for this team."),Object(o.b)("li",{parentName:"ul"},"Skills: The skills desired for this team that are currently unmet by its team members. "),Object(o.b)("li",{parentName:"ul"},"Tools: The tools desired for this team that are currently unmet by its members. "),Object(o.b)("li",{parentName:"ul"},"About us: A very short description of the team's personality or orientation. Limited to 200 characters."),Object(o.b)("li",{parentName:"ul"},'Availability: Whether or not this team is "open" (available for matching with other developers looking for a team) or "closed" (not available for matching). ')),Object(o.b)("p",null,"When the user presses submit, then the app creates the team as long as the team name is an acceptable unique ID."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"As a team owner, I want to update the team to reflect the current status.")),Object(o.b)("p",null,"Once a team is created, the challenge, skills, tools, and availability can be edited. The team name cannot be changed."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"As a team owner, I want to delete the team.")),Object(o.b)("p",null,"A team can be deleted. However, once a team name has been defined, it can never be used again, even if the team associated with that name is deleted."),Object(o.b)("p",null,"A developer can create multiple teams. "),Object(o.b)("h3",{id:"team-matching-developer-initiated"},"Team Matching (Developer initiated)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"As a developer, I want to see which team is the best fit for me.")),Object(o.b)("p",null,'Any developer can go to their "Team Finder" page, which provides a list of all open teams in the system. This page enables the developer to sort the list by various criteria, enabling them to find teams that appear relevant to their skills, tools, and challenges. '),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"As a developer, I want to indicate I'm interested in joining a team.")),Object(o.b)("p",null,'The developer can click a button associated with one or more teams labeled "Interested in joining". Clicking this button results in a Slack DM being sent to all the current members of that team indicating that someone is interested in joining their team. '),Object(o.b)("p",null,'The current team members can then go into HACC Hui to a page called "Interested Developers", where that developer is listed along with their profile details, including their Slack username.  This should be followed by a discussion among the current team members, which will be conducted outside of HACC Hui (they can use phone, text, Slack, whatever).  The current team members can also DM the prospective team member in Slack to talk more about their interests and needs.'),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"As a team owner, I want to issue an invitation to a developer to join our team.")),Object(o.b)("p",null,'If the team decides that they want the prospective member in their team, then the team owner can issue an "invitation". '),Object(o.b)("h3",{id:"joining-a-team"},"Joining a team"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"As a developer, I want to see all the team invitations and decide if I want to join that team.")),Object(o.b)("p",null,'When a developer has been invited to join an existing team by its owner, then this invitation will show up in a page called "Team Invitations".   The team name, profile information, and current membership is displayed, along with two buttons: "Accept" or "Decline".  '),Object(o.b)("p",null,"The developer can accept or decline invitations.  When they click a button, a Slack DM is generated to the team leader indicating that their invitation has been accepted or declined."),Object(o.b)("p",null,"A developer can be a member of multiple teams, although we should caution participants that this is generally a bad idea. "),Object(o.b)("h3",{id:"direct-invitations"},"Direct Invitations"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"As a team owner, I want to invite all the team members to join the team.")),Object(o.b)("p",null,'It is possible for a team owner to perform a "direct invite" of a Slack user. This is for the situation in which a team is already established prior to the HACC.  In this case, the team will agree on one member to act as the team owner in HACC Hui, create the team, then provide the Slack usernames of all the remaining team members to the Direct Invite form. '),Object(o.b)("p",null,"A direct invite results in a Slack DM being sent to the invited member. The team will show up on their Team Invitations page.  They can accept or decline as noted above. "),Object(o.b)("p",null,"If the team owner misspells a Slack username, the system should inform him/her of the error."),Object(o.b)("h3",{id:"leaving-a-team"},"Leaving a team"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"As a developer, I want to be able to leave a team at any time.")),Object(o.b)("p",null,'At any time, a developer can choose to leave one or more teams.  Their profile page will list the teams that they are currently members of, along with a button to "Leave this team". If they click it, a Slack DM will be sent to the team owner informing them that the team member left.'),Object(o.b)("p",null,"If this is done in error, the team owner can re-invite them, and the team member can accept the invitation again. "),Object(o.b)("h3",{id:"delete-account"},"Delete Account"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"As a developer, I want to be able to delete my HACC Hui account at any time.")),Object(o.b)("p",null,'A developer has the ability to delete their account at any time. As part of the deletion process, we can ask the developer why they are leaving in order to improve the HACC experience for next year.  Possible responses could be: "No challenge was interesting", "Couldn\'t find a team I liked being on", etc as well as a free text "Other".'),Object(o.b)("h3",{id:"team-invitation-prior-to-registration"},"Team Invitation prior to registration"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"As a team owner, I want to be able to create my team with members, but some members might not be registered with HACC Hui.")),Object(o.b)("p",null,"A very common situation could be the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A team is formed prior to the HACC."),Object(o.b)("li",{parentName:"ul"},"All team members join the HACC Slack, so they have Slack usernames, but one or more of the team members have not gone to the ",Object(o.b)("inlineCode",{parentName:"li"},"hacchui")," personal DM channel to register. ")),Object(o.b)("p",null,"One team member creates their team, then performs a Direct Invite of all the remaining team members. "),Object(o.b)("p",null,"Since the ",Object(o.b)("inlineCode",{parentName:"p"},"hacchui")," slackbot cannot communicate with some team members to tell them their credentials, it should inform the team leader of the invitations that did not succeed and indicate that those team members must register with the ",Object(o.b)("inlineCode",{parentName:"p"},"hacchui")," slackbot."))}h.isMDXComponent=!0},122:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),h=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=h(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=h(a),p=n,u=m["".concat(r,".").concat(p)]||m[p]||b[p]||o;return a?i.a.createElement(u,l(l({ref:t},c),{},{components:a})):i.a.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);