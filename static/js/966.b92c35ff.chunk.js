"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[966],{3620:function(e,t,n){var l=n(2791),r=n(9230),a=n(7750),o=n(3368),c=n(7205),s=n(184),i=(0,l.memo)((function(e){var t=e.followingInProgress,n=e.unfollowUsers,l=e.followUsers,i=e.user,d=(0,r.$G)().t;return(0,s.jsx)("div",{children:i.followed?(0,s.jsx)(c.Z,{variant:"contained",startIcon:(0,s.jsx)(o.Z,{}),disabled:t.some((function(e){return e===i.id})),onClick:function(){n(i.id)},color:"info",children:d("users.unfollow")}):(0,s.jsx)(c.Z,{variant:"contained",startIcon:(0,s.jsx)(a.Z,{}),disabled:t.some((function(e){return e===i.id})),onClick:function(){l(i.id)},children:d("users.follow")})})}));t.Z=i},9193:function(e,t,n){n.d(t,{Z:function(){return m}});var l=n(2791),r=n(9230),a=n(1523),o=n(9823),c=n(3811),s=n(3245),i=n(1694),d=n.n(i),u={wrapper:"Popper_wrapper__NNT0+",closeIcon:"Popper_closeIcon__iuj+x",title:"Popper_title__welaX",bottomStart:"Popper_bottomStart__a2H6i",bottomEnd:"Popper_bottomEnd__4iDVR"},p=n(184),f={"bottom-start":"bottomStart","bottom-end":"bottomEnd",auto:"","auto-start":"","auto-end":"",top:"",bottom:"",right:"",left:"","top-start":"","top-end":"","right-start":"","right-end":"","left-start":"","left-end":""},m=function(e){var t=e.anchorEl,n=e.isOpen,i=e.placement,m=e.handleClose,h=e.companion;(0,l.useEffect)((function(){var e;return n&&(e=setTimeout((function(){m()}),6e3)),function(){return clearTimeout(e)}}),[n]);var E=(0,r.$G)().t,v=h||{},_=v.name,x=v.id,j="/Dialogs/".concat(x),g="/profile/".concat(x);return(0,p.jsxs)(s.Z,{open:n,anchorEl:t,placement:i,className:d()(u.wrapper,u[f[i]]),children:[(0,p.jsxs)("div",{className:u.title,children:[(0,p.jsx)("span",{children:E("popper.done")}),(0,p.jsx)("span",{className:u.closeIcon,children:(0,p.jsx)(c.Z,{onClick:m,children:(0,p.jsx)(o.Z,{})})})]}),(0,p.jsx)("div",{children:(0,p.jsxs)("div",{children:[(0,p.jsx)(a.OL,{to:j,children:E("popper.message")}),E("popper.sent")," ",(0,p.jsx)(a.OL,{to:g,children:_})]})})]})}},9937:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(2791),r=n(1703),a=n(8530),o=n(8254),c="SearchField_wrapper__-qG+l",s=n(184),i=(0,l.memo)((function(e){var t=e.placeholder,n=e.searchValue,l=e.setSearchValue,i=e.isSearch;return(0,s.jsx)("div",{className:c,children:(0,s.jsx)(a.Z,{onChange:function(e){l(e.target.value)},value:n,placeholder:t,fullWidth:!0,type:"search",size:"small",InputProps:{startAdornment:(0,s.jsx)(o.Z,{position:"start",children:(0,s.jsx)(r.Z,{})})},sx:{bgcolor:"var(--white-main)"},autoFocus:i})})}))},5183:function(e,t,n){n.d(t,{Z:function(){return o}});var l=n(4585),r="UsersPagination_pagination__-8OX3",a=n(184),o=function(e){var t=e.pagesCount,n=e.currentPage,o=e.setPage,c=e.handlePageChange;return(0,a.jsx)("div",{className:r,children:(0,a.jsx)(l.Z,{count:t,showFirstButton:!0,showLastButton:!0,page:n,onChange:function(e,t){o(t),c(t)},shape:"rounded"})})}},8620:function(e,t,n){n.d(t,{Z:function(){return Z}});var l,r,a,o,c,s,i,d,u,p=n(2791),f=["title","titleId"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},m.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function E(e,t){var n=e.title,E=e.titleId,v=h(e,f);return p.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 1020 696",ref:t,"aria-labelledby":E},v),n?p.createElement("title",{id:E},n):null,l||(l=p.createElement("path",{stroke:"#D2D8DF",strokeLinecap:"round",strokeWidth:2.921,d:"m111.97 323.513 2.022 7.051"})),r||(r=p.createElement("g",{stroke:"#D2D8DF",strokeLinecap:"round",strokeWidth:2.921},p.createElement("path",{d:"m97.225 331.873 7.462 4.279M95.01 349.593l8.146-2.336M105.7 363.919l4.061-7.583"}))),a||(a=p.createElement("path",{stroke:"#D2D8DF",strokeLinecap:"round",strokeWidth:2.921,d:"m122.753 361.116-2.021-7.05M133.153 353.046l-6.049-3.353M139.182 338.6l-7.051 2.021M129.768 323.496l-3.353 6.049M186.055 182.729l2.022 7.051M170.966 209.946l7.05-2.022M197.506 222.682l-2.022-7.05M210.923 198.49l-7.05 2.021M765.417 293.931c5.617-1.611 11.478 1.639 13.089 7.257 1.612 5.62-1.638 11.481-7.254 13.091-5.617 1.611-11.477-1.637-13.089-7.257"})),o||(o=p.createElement("path",{fill:"#EBECEE",fillRule:"evenodd",d:"M785.496 188.278c5.5-3.615 12.64-13.656 12.504-22.218 3.957 6.468 14.486 12.44 22.017 10.961-7.434 5.303-12.85 16.274-12.144 23.472-2.852-6.725-16.441-12.817-22.377-12.215ZM191.112 455.217c2.751-1.808 6.319-6.827 6.251-11.108 1.978 3.232 7.242 6.219 11.008 5.481-3.717 2.649-6.423 8.135-6.072 11.734-1.426-3.362-8.22-6.409-11.187-6.107Z",clipRule:"evenodd"})),c||(c=p.createElement("path",{fill:"#D1D8DF",fillRule:"evenodd",d:"M153.424 112.213a8.205 8.205 0 1 1-15.774 4.523 8.206 8.206 0 1 1 15.774-4.523Z",clipRule:"evenodd"})),s||(s=p.createElement("path",{fill:"#EBECEE",fillRule:"evenodd",d:"M686.16-17.621c2.088 7.282-2.123 14.879-9.401 16.966-7.283 2.088-14.877-2.123-16.965-9.406-2.089-7.282 2.12-14.878 9.403-16.966 7.278-2.087 14.875 2.123 16.963 9.406Z",clipRule:"evenodd"})),i||(i=p.createElement("path",{stroke:"#D2D8DF",strokeLinecap:"round",strokeWidth:2.921,d:"M436.731 543.908a6.857 6.857 0 1 1-13.182 3.78 6.859 6.859 0 0 1 4.699-8.484 6.858 6.858 0 0 1 8.483 4.704ZM282.374 20.388a8.205 8.205 0 1 1-15.774 4.523 8.206 8.206 0 0 1 5.625-10.15 8.206 8.206 0 0 1 10.149 5.627ZM654.932 560.361c-4.49 3.363-10.856 2.447-14.219-2.042-3.363-4.491-2.451-10.861 2.042-14.222 4.487-3.363 10.854-2.45 14.216 2.042 3.365 4.491 2.451 10.859-2.039 14.222Z",clipRule:"evenodd"})),d||(d=p.createElement("g",{fillRule:"evenodd",clipRule:"evenodd"},p.createElement("path",{fill:"#E0E2EE",d:"M598.465 374.769 405.74 430.032c-13.565 3.89-27.862-4.063-31.765-17.674l-78.808-274.835c-3.903-13.611 4.009-27.926 17.574-31.815l192.725-55.264c13.571-3.89 27.866 4.056 31.769 17.667l78.808 274.836c3.903 13.61-4.008 27.93-17.578 31.822Z"}),p.createElement("path",{fill:"#E8EBF2",d:"M585.385 391.237 392.659 446.5c-13.565 3.89-27.862-4.063-31.764-17.674l-78.808-274.835c-3.903-13.611 4.009-27.926 17.574-31.815l192.725-55.263c13.571-3.892 27.866 4.055 31.769 17.666l78.808 274.836c3.902 13.61-4.008 27.931-17.578 31.822Z"}),p.createElement("path",{fill:"#D8DBEA",d:"m572.04 405.102-193.123 55.377c-13.593 3.898-27.9-4.002-31.787-17.556l-78.481-273.698c-3.887-13.554 4.061-27.83 17.654-31.727L479.427 82.12c13.599-3.899 27.904 3.995 31.79 17.55l78.482 273.697c3.886 13.555-4.06 27.835-17.659 31.735Z"}),p.createElement("path",{fill:"#F1F2F7",d:"m572.04 405.102-193.123 55.377c-13.593 3.898-27.9-4.002-31.787-17.556l-78.481-273.698c-3.887-13.554 4.061-27.83 17.654-31.727L479.427 82.12c13.599-3.899 27.904 3.995 31.79 17.55l78.482 273.697c3.886 13.555-4.06 27.835-17.659 31.735Z"}),p.createElement("path",{fill:"#E0E2EE",d:"M475.505 173.49 332.86 214.393c-4.074 1.168-8.318-1.048-9.43-4.924-1.112-3.88 1.312-8.009 5.386-9.177l142.646-40.903c4.073-1.168 8.317 1.048 9.43 4.929 1.111 3.876-1.313 8.004-5.387 9.172ZM487.634 215.793l-142.646 40.903c-4.073 1.168-8.317-1.048-9.429-4.923-1.112-3.881 1.312-8.01 5.386-9.178l142.645-40.903c4.074-1.168 8.318 1.048 9.431 4.929 1.111 3.876-1.313 8.004-5.387 9.172ZM499.762 258.096l-142.645 40.903c-4.074 1.168-8.318-1.048-9.429-4.923-1.112-3.876 1.312-8.01 5.385-9.178l142.646-40.903c4.073-1.168 8.319 1.054 9.43 4.929 1.112 3.876-1.313 8.004-5.387 9.172ZM511.896 300.4l-142.645 40.903c-4.074 1.168-8.318-1.048-9.429-4.924-1.113-3.88 1.312-8.009 5.385-9.177l142.646-40.903c4.073-1.168 8.317 1.048 9.43 4.929 1.112 3.875-1.313 8.004-5.387 9.172ZM455.838 362.255l-74.427 21.341c-4.091 1.173-8.349-1.039-9.461-4.914-1.112-3.881 1.327-8.014 5.418-9.187l74.427-21.341c4.091-1.173 8.349 1.039 9.462 4.919 1.111 3.876-1.328 8.009-5.419 9.182Z"}),p.createElement("path",{fill:"#fff",fillOpacity:.1,d:"M590.378 264.506c-20.346 36.698-63.581 52.577-101.953 39.751-4.918-1.689-9.74-3.788-14.419-6.381a81.7 81.7 0 0 1-6.968-4.299c-4.486-3.095-8.637-6.578-12.302-10.354a81.777 81.777 0 0 1-15.448-21.322c-12.468-24.473-12.937-54.529 1.37-80.324 14.337-25.869 40.093-41.35 67.445-43.796a84.62 84.62 0 0 1 26.271 1.799c5.167 1.159 10.261 2.85 15.269 5.012a81.562 81.562 0 0 1 7.333 3.631c4.685 2.592 9.067 5.548 13.054 8.844 31.218 25.731 40.656 70.811 20.348 107.439Z"}),p.createElement("path",{fill:"#E0E2EE",d:"M580.791 261.178c-21.164 38.189-69.256 51.973-107.445 30.809-38.141-21.142-51.933-69.237-30.762-107.423 21.142-38.141 69.233-51.931 107.374-30.789 38.184 21.166 51.975 69.262 30.833 107.403Zm-19.946-127.026c-49.012-27.168-110.736-9.468-137.904 39.544-27.164 49.005-9.487 110.777 39.52 137.946 44.604 24.715 99.835 12.26 129.893-27.153a102.99 102.99 0 0 0 8.082-12.41c2.441-4.411 4.53-8.901 6.237-13.43 17.494-46.382-1.228-99.774-45.828-124.497Z"}),p.createElement("path",{fill:"url(#a)",d:"m791.472 372.687-1.141 2.058c-7.544 13.619-24.868 18.586-38.488 11.037l-125.695-69.674 28.593-51.583 125.695 69.674c13.62 7.55 18.586 24.868 11.036 38.488Z"}),p.createElement("path",{fill:"#E0E2EE",d:"m607.922 255.059 37.143 20.589-14.618 26.364-37.138-20.591c2.995-3.932 5.745-8.166 8.248-12.664a103.911 103.911 0 0 0 6.365-13.698Z"}),p.createElement("path",{fill:"#EF545F",d:"m778.626 333.417-28.412 51.249-9.229-5.121 28.407-51.247 9.234 5.119Z"}),p.createElement("path",{fill:"url(#b)",d:"m657.349 265.269-29.188 52.658-7.824-4.336 29.189-52.658 7.823 4.336Z"}),p.createElement("path",{fill:"#fff",fillOpacity:.5,d:"m527.415 149.189-71.584 129.134a73.35 73.35 0 0 1-13.881-19.17l61.85-111.582c7.841-.677 15.77-.176 23.615 1.618ZM567.157 163.608l-79.152 133.466c-4.619-1.443-9.142-3.262-13.524-5.526-2.256-1.166-4.428-2.403-6.519-3.766l80.112-135.103a76.024 76.024 0 0 1 6.881 3.164c4.381 2.265 8.483 4.859 12.202 7.765Z"}))),u||(u=p.createElement("defs",null,p.createElement("linearGradient",{id:"a",x1:666.617,x2:562.688,y1:182.274,y2:369.766,gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#FF8960"}),p.createElement("stop",{offset:1,stopColor:"#FF62A5"})),p.createElement("linearGradient",{id:"b",x1:625.365,x2:591.84,y1:242.426,y2:302.908,gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#FF404E"}),p.createElement("stop",{offset:1,stopColor:"#FF62A5"})))))}var v=p.forwardRef(E),_=(n.p,"EmptyState_wrapper__OUfQZ"),x="EmptyState_icon__z3phz",j="EmptyState_text__yXAf0",g=n(184),Z=function(e){var t=e.text;return(0,g.jsxs)("div",{className:_,children:[(0,g.jsx)(v,{className:x}),(0,g.jsx)("div",{className:j,children:t})]})}},6526:function(e,t,n){n.d(t,{Z:function(){return f}});var l=n(9230),r=n(364),a=n(1523),o=n(9823),c=n(3811),s=n(4688),i=n(386),d=n(4487),u={modal:"DialogModal_modal__D3ncR",title:"DialogModal_title__Sn9ce",closeIcon:"DialogModal_closeIcon__mFPcP"},p=n(184),f=function(e){var t=e.isOpen,n=e.handleClose,f=e.companion,m=e.setPopperOpen,h=(0,r.I0)(),E=(0,l.$G)().t,v=f||{},_=v.name,x=v.id,j="/Dialogs/".concat(x);return(0,p.jsx)("div",{className:u.wrapper,children:(0,p.jsx)(s.Z,{open:t,onClose:n,className:u.modal,children:(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{className:u.title,children:[(0,p.jsx)("h5",{children:E("dialogModal.newMessage")}),(0,p.jsxs)("div",{children:[E("dialogModal.redirect"),(0,p.jsx)(a.OL,{to:j,onClick:function(){return function(e){h((0,d.Bl)({id:e}))}(x)},children:_})]}),(0,p.jsx)("span",{className:u.closeIcon,children:(0,p.jsx)(c.Z,{onClick:n,children:(0,p.jsx)(o.Z,{})})})]}),(0,p.jsx)("div",{children:_}),(0,p.jsx)(i.Z,{onSubmit:function(e){h((0,d.Zm)({id:x,body:e.newMessage})),e.newMessage="",n(),m(!0)}})]})})})}},823:function(e,t,n){n.d(t,{Z:function(){return w}});var l=n(4942),r=n(2791),a=n(9230),o=n(1523),c=n(6048),s=n(5814),i=n(1694),d=n.n(i),u=n(3620),p=n(3328),f="UserItem_item__yNGTv",m="UserItem_avatarWrapper__hjRPH",h="UserItem_avatar__iNJFQ",E="UserItem_infoWrapper__eqyyI",v="UserItem_name__Q3gyf",_="UserItem_status__6kilW",x="UserItem_id__IQMNt",j="UserItem_message__v20o5",g="UserItem_disabled__J1I49",Z=n(184),w=(0,r.memo)((function(e){var t=e.followingInProgress,n=e.unfollowUsers,r=e.followUsers,i=e.user,w=e.handleDialogOpen,M=(0,a.$G)().t,b=i.id,y=i.photos,I=i.name,O=i.status,k=i.followed;return(0,Z.jsxs)("li",{className:f,children:[(0,Z.jsxs)("div",{className:m,children:[(0,Z.jsx)(o.OL,{to:"/profile/"+b,children:(0,Z.jsx)("img",{src:y&&null!=y.small?y.small:p,className:h,alt:"avatar"})}),(0,Z.jsxs)("div",{className:E,children:[(0,Z.jsx)(o.OL,{to:"/profile/"+b,className:v,children:I}),O&&(0,Z.jsxs)("div",{className:_,children:[(0,Z.jsx)(c.Z,{}),(0,Z.jsx)("div",{children:O})]}),(0,Z.jsxs)("span",{className:x,children:[" id: ",b," "]}),(0,Z.jsx)(s.Z,{title:k?"":M("users.onlyFriend"),placement:"bottom-start",children:(0,Z.jsx)(o.OL,{to:"#",className:d()(j,(0,l.Z)({},g,!k)),onClick:k?w:void 0,children:M("users.message")})})]})]}),(0,Z.jsx)(u.Z,{followingInProgress:t,unfollowUsers:n,followUsers:r,user:i})]})}))},8627:function(e,t,n){n.d(t,{R:function(){return o}});var l=n(9439),r=n(2791),a=n(364),o=function(e,t,n,o){var c=(0,r.useState)(!1),s=(0,l.Z)(c,2),i=s[0],d=s[1],u=(0,r.useState)(""),p=(0,l.Z)(u,2),f=p[0],m=p[1],h=(0,a.I0)(),E=function(e,t){var n=(0,r.useState)(e),a=(0,l.Z)(n,2),o=a[0],c=a[1];return(0,r.useEffect)((function(){var n=setTimeout((function(){return c(e)}),null!==t&&void 0!==t?t:400);return function(){clearTimeout(n)}}),[e,t]),o}(f,500);return(0,r.useEffect)((function(){d(!1),m("")}),[]),(0,r.useEffect)((function(){e&&(f.trim().length>=2||!f.length)&&e(h,t,n,f,o)}),[E]),{toggleSearch:function(){return d((function(e){return!e}))},isSearch:i,setSearchValue:m,searchValue:f}}},3635:function(e,t,n){n.d(t,{L:function(){return r},R:function(){return a}});var l=n(6315),r=function(e,t){return Math.ceil(e/t)},a=function(e,t,n,r,a){return e((0,l.Uk)(t,n,r,a))}},3328:function(e,t,n){e.exports=n.p+"static/media/avatar.5a2d86a614875de76929.png"}}]);
//# sourceMappingURL=966.b92c35ff.chunk.js.map