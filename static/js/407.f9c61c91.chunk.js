"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[407],{4688:function(e,n,t){t.d(n,{Z:function(){return te}});var o=t(9439),r=t(3366),i=t(7462),a=t(2791),s=t(7563),c=t(9723),l=t(8956),u=t(8949),d=t(4419),f=t(6174),v=t(5671),p=t(3144),m=t(3433),h=t(7979),b=t(6211);function g(e,n){n?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Z(e){return parseInt((0,h.Z)(e).getComputedStyle(e).paddingRight,10)||0}function E(e){var n=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),t="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return n||t}function y(e,n,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,i=[n,t].concat((0,m.Z)(o));[].forEach.call(e.children,(function(e){var n=-1===i.indexOf(e),t=!E(e);n&&t&&g(e,r)}))}function x(e,n){var t=-1;return e.some((function(e,o){return!!n(e)&&(t=o,!0)})),t}function k(e,n){var t=[],o=e.container;if(!n.disableScrollLock){if(function(e){var n=(0,c.Z)(e);return n.body===e?(0,h.Z)(e).innerWidth>n.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(o)){var r=(0,b.Z)((0,c.Z)(o));t.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight="".concat(Z(o)+r,"px");var i=(0,c.Z)(o).querySelectorAll(".mui-fixed");[].forEach.call(i,(function(e){t.push({value:e.style.paddingRight,property:"padding-right",el:e}),e.style.paddingRight="".concat(Z(e)+r,"px")}))}var a;if(o.parentNode instanceof DocumentFragment)a=(0,c.Z)(o).body;else{var s=o.parentElement,l=(0,h.Z)(o);a="HTML"===(null==s?void 0:s.nodeName)&&"scroll"===l.getComputedStyle(s).overflowY?s:o}t.push({value:a.style.overflow,property:"overflow",el:a},{value:a.style.overflowX,property:"overflow-x",el:a},{value:a.style.overflowY,property:"overflow-y",el:a}),a.style.overflow="hidden"}return function(){t.forEach((function(e){var n=e.value,t=e.el,o=e.property;n?t.style.setProperty(o,n):t.style.removeProperty(o)}))}}var R=function(){function e(){(0,v.Z)(this,e),this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}return(0,p.Z)(e,[{key:"add",value:function(e,n){var t=this.modals.indexOf(e);if(-1!==t)return t;t=this.modals.length,this.modals.push(e),e.modalRef&&g(e.modalRef,!1);var o=function(e){var n=[];return[].forEach.call(e.children,(function(e){"true"===e.getAttribute("aria-hidden")&&n.push(e)})),n}(n);y(n,e.mount,e.modalRef,o,!0);var r=x(this.containers,(function(e){return e.container===n}));return-1!==r?(this.containers[r].modals.push(e),t):(this.containers.push({modals:[e],container:n,restore:null,hiddenSiblings:o}),t)}},{key:"mount",value:function(e,n){var t=x(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),o=this.containers[t];o.restore||(o.restore=k(o,n))}},{key:"remove",value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=this.modals.indexOf(e);if(-1===t)return t;var o=x(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),r=this.containers[o];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(t,1),0===r.modals.length)r.restore&&r.restore(),e.modalRef&&g(e.modalRef,n),y(r.container,e.mount,e.modalRef,r.hiddenSiblings,!1),this.containers.splice(o,1);else{var i=r.modals[r.modals.length-1];i.modalRef&&g(i.modalRef,!1)}return t}},{key:"isTopModal",value:function(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}]),e}(),P=t(184),w=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function T(e){var n=[],t=[];return Array.from(e.querySelectorAll(w)).forEach((function(e,o){var r=function(e){var n=parseInt(e.getAttribute("tabindex"),10);return Number.isNaN(n)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:n}(e);-1!==r&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;var n=function(n){return e.ownerDocument.querySelector('input[type="radio"]'.concat(n))},t=n('[name="'.concat(e.name,'"]:checked'));return t||(t=n('[name="'.concat(e.name,'"]'))),t!==e}(e))}(e)&&(0===r?n.push(e):t.push({documentOrder:o,tabIndex:r,node:e}))})),t.sort((function(e,n){return e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex})).map((function(e){return e.node})).concat(n)}function S(){return!0}var M=function(e){var n=e.children,t=e.disableAutoFocus,o=void 0!==t&&t,r=e.disableEnforceFocus,i=void 0!==r&&r,l=e.disableRestoreFocus,u=void 0!==l&&l,d=e.getTabbable,f=void 0===d?T:d,v=e.isEnabled,p=void 0===v?S:v,m=e.open,h=a.useRef(),b=a.useRef(null),g=a.useRef(null),Z=a.useRef(null),E=a.useRef(null),y=a.useRef(!1),x=a.useRef(null),k=(0,s.Z)(n.ref,x),R=a.useRef(null);a.useEffect((function(){m&&x.current&&(y.current=!o)}),[o,m]),a.useEffect((function(){if(m&&x.current){var e=(0,c.Z)(x.current);return x.current.contains(e.activeElement)||(x.current.hasAttribute("tabIndex")||x.current.setAttribute("tabIndex",-1),y.current&&x.current.focus()),function(){u||(Z.current&&Z.current.focus&&(h.current=!0,Z.current.focus()),Z.current=null)}}}),[m]),a.useEffect((function(){if(m&&x.current){var e=(0,c.Z)(x.current),n=function(n){var t=x.current;if(null!==t)if(e.hasFocus()&&!i&&p()&&!h.current){if(!t.contains(e.activeElement)){if(n&&E.current!==n.target||e.activeElement!==E.current)E.current=null;else if(null!==E.current)return;if(!y.current)return;var o=[];if(e.activeElement!==b.current&&e.activeElement!==g.current||(o=f(x.current)),o.length>0){var r,a,s=Boolean((null==(r=R.current)?void 0:r.shiftKey)&&"Tab"===(null==(a=R.current)?void 0:a.key)),c=o[0],l=o[o.length-1];s?l.focus():c.focus()}else t.focus()}}else h.current=!1},t=function(n){R.current=n,!i&&p()&&"Tab"===n.key&&e.activeElement===x.current&&n.shiftKey&&(h.current=!0,g.current.focus())};e.addEventListener("focusin",n),e.addEventListener("keydown",t,!0);var o=setInterval((function(){"BODY"===e.activeElement.tagName&&n()}),50);return function(){clearInterval(o),e.removeEventListener("focusin",n),e.removeEventListener("keydown",t,!0)}}}),[o,i,u,p,m,f]);var w=function(e){null===Z.current&&(Z.current=e.relatedTarget),y.current=!0};return(0,P.jsxs)(a.Fragment,{children:[(0,P.jsx)("div",{tabIndex:m?0:-1,onFocus:w,ref:b,"data-testid":"sentinelStart"}),a.cloneElement(n,{ref:k,onFocus:function(e){null===Z.current&&(Z.current=e.relatedTarget),y.current=!0,E.current=e.target;var t=n.props.onFocus;t&&t(e)}}),(0,P.jsx)("div",{tabIndex:m?0:-1,onFocus:w,ref:g,"data-testid":"sentinelEnd"})]})},C=t(5878),F=t(1217);function A(e){return(0,F.Z)("MuiModal",e)}(0,C.Z)("MuiModal",["root","hidden"]);var I=t(7271),N=["children","classes","closeAfterTransition","component","components","componentsProps","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited"];var O=new R,L=a.forwardRef((function(e,n){var t,v=e.children,p=e.classes,m=e.closeAfterTransition,h=void 0!==m&&m,b=e.component,Z=void 0===b?"div":b,E=e.components,y=void 0===E?{}:E,x=e.componentsProps,k=void 0===x?{}:x,R=e.container,w=e.disableAutoFocus,T=void 0!==w&&w,S=e.disableEnforceFocus,C=void 0!==S&&S,F=e.disableEscapeKeyDown,L=void 0!==F&&F,B=e.disablePortal,D=void 0!==B&&B,j=e.disableRestoreFocus,z=void 0!==j&&j,K=e.disableScrollLock,q=void 0!==K&&K,H=e.hideBackdrop,W=void 0!==H&&H,U=e.keepMounted,Y=void 0!==U&&U,X=e.manager,_=void 0===X?O:X,G=e.onBackdropClick,V=e.onClose,J=e.onKeyDown,Q=e.open,$=e.onTransitionEnter,ee=e.onTransitionExited,ne=(0,r.Z)(e,N),te=a.useState(!0),oe=(0,o.Z)(te,2),re=oe[0],ie=oe[1],ae=a.useRef({}),se=a.useRef(null),ce=a.useRef(null),le=(0,s.Z)(ce,n),ue=function(e){return!!e.children&&e.children.props.hasOwnProperty("in")}(e),de=null==(t=e["aria-hidden"])||t,fe=function(){return ae.current.modalRef=ce.current,ae.current.mountNode=se.current,ae.current},ve=function(){_.mount(fe(),{disableScrollLock:q}),ce.current.scrollTop=0},pe=(0,l.Z)((function(){var e=function(e){return"function"===typeof e?e():e}(R)||(0,c.Z)(se.current).body;_.add(fe(),e),ce.current&&ve()})),me=a.useCallback((function(){return _.isTopModal(fe())}),[_]),he=(0,l.Z)((function(e){se.current=e,e&&(Q&&me()?ve():g(ce.current,de))})),be=a.useCallback((function(){_.remove(fe(),de)}),[_,de]);a.useEffect((function(){return function(){be()}}),[be]),a.useEffect((function(){Q?pe():ue&&h||be()}),[Q,be,ue,h,pe]);var ge=(0,i.Z)({},e,{classes:p,closeAfterTransition:h,disableAutoFocus:T,disableEnforceFocus:C,disableEscapeKeyDown:L,disablePortal:D,disableRestoreFocus:z,disableScrollLock:q,exited:re,hideBackdrop:W,keepMounted:Y}),Ze=function(e){var n=e.open,t=e.exited,o=e.classes,r={root:["root",!n&&t&&"hidden"]};return(0,d.Z)(r,A,o)}(ge),Ee={};void 0===v.props.tabIndex&&(Ee.tabIndex="-1"),ue&&(Ee.onEnter=(0,u.Z)((function(){ie(!1),$&&$()}),v.props.onEnter),Ee.onExited=(0,u.Z)((function(){ie(!0),ee&&ee(),h&&be()}),v.props.onExited));var ye=y.Root||Z,xe=(0,I.Z)({elementType:ye,externalSlotProps:k.root,externalForwardedProps:ne,additionalProps:{ref:le,role:"presentation",onKeyDown:function(e){J&&J(e),"Escape"===e.key&&me()&&(L||(e.stopPropagation(),V&&V(e,"escapeKeyDown")))}},className:Ze.root,ownerState:ge}),ke=y.Backdrop,Re=(0,I.Z)({elementType:ke,externalSlotProps:k.backdrop,additionalProps:{"aria-hidden":!0,onClick:function(e){e.target===e.currentTarget&&(G&&G(e),V&&V(e,"backdropClick"))},open:Q},ownerState:ge});return Y||Q||ue&&!re?(0,P.jsx)(f.Z,{ref:he,container:R,disablePortal:D,children:(0,P.jsxs)(ye,(0,i.Z)({},xe,{children:[!W&&ke?(0,P.jsx)(ke,(0,i.Z)({},Re)):null,(0,P.jsx)(M,{disableEnforceFocus:C,disableAutoFocus:T,disableRestoreFocus:z,isEnabled:me,open:Q,children:a.cloneElement(v,Ee)})]}))}):null})),B=t(1503),D=t(627),j=t(9367),z=t(5873),K=t(8182),q=t(6752),H=t(4142),W=t(6780),U=t(7933),Y=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],X={entering:{opacity:1},entered:{opacity:1}},_=a.forwardRef((function(e,n){var t=(0,H.Z)(),o={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},s=e.addEndListener,c=e.appear,l=void 0===c||c,u=e.children,d=e.easing,f=e.in,v=e.onEnter,p=e.onEntered,m=e.onEntering,h=e.onExit,b=e.onExited,g=e.onExiting,Z=e.style,E=e.timeout,y=void 0===E?o:E,x=e.TransitionComponent,k=void 0===x?q.ZP:x,R=(0,r.Z)(e,Y),w=a.useRef(null),T=(0,U.Z)(u.ref,n),S=(0,U.Z)(w,T),M=function(e){return function(n){if(e){var t=w.current;void 0===n?e(t):e(t,n)}}},C=M(m),F=M((function(e,n){(0,W.n)(e);var o=(0,W.C)({style:Z,timeout:y,easing:d},{mode:"enter"});e.style.webkitTransition=t.transitions.create("opacity",o),e.style.transition=t.transitions.create("opacity",o),v&&v(e,n)})),A=M(p),I=M(g),N=M((function(e){var n=(0,W.C)({style:Z,timeout:y,easing:d},{mode:"exit"});e.style.webkitTransition=t.transitions.create("opacity",n),e.style.transition=t.transitions.create("opacity",n),h&&h(e)})),O=M(b);return(0,P.jsx)(k,(0,i.Z)({appear:l,in:f,nodeRef:w,onEnter:F,onEntered:A,onEntering:C,onExit:N,onExited:O,onExiting:I,addEndListener:function(e){s&&s(w.current,e)},timeout:y},R,{children:function(e,n){return a.cloneElement(u,(0,i.Z)({style:(0,i.Z)({opacity:0,visibility:"exited"!==e||f?void 0:"hidden"},X[e],Z,u.props.style),ref:S},n))}}))}));function G(e){return(0,F.Z)("MuiBackdrop",e)}(0,C.Z)("MuiBackdrop",["root","invisible"]);var V=["children","component","components","componentsProps","className","invisible","open","transitionDuration","TransitionComponent"],J=(0,j.ZP)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.invisible&&n.invisible]}})((function(e){var n=e.ownerState;return(0,i.Z)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},n.invisible&&{backgroundColor:"transparent"})})),Q=a.forwardRef((function(e,n){var t,o,a=(0,z.Z)({props:e,name:"MuiBackdrop"}),s=a.children,c=a.component,l=void 0===c?"div":c,u=a.components,f=void 0===u?{}:u,v=a.componentsProps,p=void 0===v?{}:v,m=a.className,h=a.invisible,b=void 0!==h&&h,g=a.open,Z=a.transitionDuration,E=a.TransitionComponent,y=void 0===E?_:E,x=(0,r.Z)(a,V),k=(0,i.Z)({},a,{component:l,invisible:b}),R=function(e){var n=e.classes,t={root:["root",e.invisible&&"invisible"]};return(0,d.Z)(t,G,n)}(k);return(0,P.jsx)(y,(0,i.Z)({in:g,timeout:Z},x,{children:(0,P.jsx)(J,{"aria-hidden":!0,as:null!=(t=f.Root)?t:l,className:(0,K.Z)(R.root,m),ownerState:(0,i.Z)({},k,null==(o=p.root)?void 0:o.ownerState),classes:R,ref:n,children:s})}))})),$=["BackdropComponent","BackdropProps","closeAfterTransition","children","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","theme"],ee=(0,j.ZP)("div",{name:"MuiModal",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,!t.open&&t.exited&&n.hidden]}})((function(e){var n=e.theme,t=e.ownerState;return(0,i.Z)({position:"fixed",zIndex:(n.vars||n).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})})),ne=(0,j.ZP)(Q,{name:"MuiModal",slot:"Backdrop",overridesResolver:function(e,n){return n.backdrop}})({zIndex:-1}),te=a.forwardRef((function(e,n){var t,s,c=(0,z.Z)({name:"MuiModal",props:e}),l=c.BackdropComponent,u=void 0===l?ne:l,d=c.BackdropProps,f=c.closeAfterTransition,v=void 0!==f&&f,p=c.children,m=c.component,h=c.components,b=void 0===h?{}:h,g=c.componentsProps,Z=void 0===g?{}:g,E=c.disableAutoFocus,y=void 0!==E&&E,x=c.disableEnforceFocus,k=void 0!==x&&x,R=c.disableEscapeKeyDown,w=void 0!==R&&R,T=c.disablePortal,S=void 0!==T&&T,M=c.disableRestoreFocus,C=void 0!==M&&M,F=c.disableScrollLock,A=void 0!==F&&F,I=c.hideBackdrop,N=void 0!==I&&I,O=c.keepMounted,j=void 0!==O&&O,K=c.theme,q=(0,r.Z)(c,$),H=a.useState(!0),W=(0,o.Z)(H,2),U=W[0],Y=W[1],X={closeAfterTransition:v,disableAutoFocus:y,disableEnforceFocus:k,disableEscapeKeyDown:w,disablePortal:S,disableRestoreFocus:C,disableScrollLock:A,hideBackdrop:N,keepMounted:j},_=(0,i.Z)({},c,X,{exited:U}),G=function(e){return e.classes}(_),V=null!=(t=null!=(s=b.Root)?s:m)?t:ee;return(0,P.jsx)(L,(0,i.Z)({components:(0,i.Z)({Root:V,Backdrop:u},b),componentsProps:{root:function(){return(0,i.Z)({},(0,B.Z)(Z.root,_),!(0,D.Z)(V)&&{as:m,theme:K})},backdrop:function(){return(0,i.Z)({},d,(0,B.Z)(Z.backdrop,_))}},onTransitionEnter:function(){return Y(!1)},onTransitionExited:function(){return Y(!0)},ref:n},q,{classes:G},X,{children:p}))}))},6650:function(e,n,t){t.d(n,{Z:function(){return b}});var o=t(3366),r=t(7462),i=t(2791),a=t(8182),s=t(4419),c=t(2065),l=t(9367),u=t(5873),d=t(1217);function f(e){return(0,d.Z)("MuiPaper",e)}(0,t(5878).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var v=t(184),p=["className","component","elevation","square","variant"],m=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},h=(0,l.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],!t.square&&n.rounded,"elevation"===t.variant&&n["elevation".concat(t.elevation)]]}})((function(e){var n,t=e.theme,o=e.ownerState;return(0,r.Z)({backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow")},!o.square&&{borderRadius:t.shape.borderRadius},"outlined"===o.variant&&{border:"1px solid ".concat((t.vars||t).palette.divider)},"elevation"===o.variant&&(0,r.Z)({boxShadow:(t.vars||t).shadows[o.elevation]},!t.vars&&"dark"===t.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,c.Fq)("#fff",m(o.elevation)),", ").concat((0,c.Fq)("#fff",m(o.elevation)),")")},t.vars&&{backgroundImage:null==(n=t.vars.overlays)?void 0:n[o.elevation]}))})),b=i.forwardRef((function(e,n){var t=(0,u.Z)({props:e,name:"MuiPaper"}),i=t.className,c=t.component,l=void 0===c?"div":c,d=t.elevation,m=void 0===d?1:d,b=t.square,g=void 0!==b&&b,Z=t.variant,E=void 0===Z?"elevation":Z,y=(0,o.Z)(t,p),x=(0,r.Z)({},t,{component:l,elevation:m,square:g,variant:E}),k=function(e){var n=e.square,t=e.elevation,o=e.variant,r=e.classes,i={root:["root",o,!n&&"rounded","elevation"===o&&"elevation".concat(t)]};return(0,s.Z)(i,f,r)}(x);return(0,v.jsx)(h,(0,r.Z)({as:l,ownerState:x,className:(0,a.Z)(k.root,i),ref:n},y))}))},4407:function(e,n,t){t.d(n,{ZP:function(){return S}});var o=t(7462),r=t(3366),i=t(2791),a=t(8182),s=t(4419),c=t(9367),l=t(5873),u=t(2977),d=t(5783),f=t(8195),v=t(7933),p=t(8085),m=t(4688),h=t(6650),b=t(1217);function g(e){return(0,b.Z)("MuiPopover",e)}(0,t(5878).Z)("MuiPopover",["root","paper"]);var Z=t(184),E=["onEntering"],y=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function x(e,n){var t=0;return"number"===typeof n?t=n:"center"===n?t=e.height/2:"bottom"===n&&(t=e.height),t}function k(e,n){var t=0;return"number"===typeof n?t=n:"center"===n?t=e.width/2:"right"===n&&(t=e.width),t}function R(e){return[e.horizontal,e.vertical].map((function(e){return"number"===typeof e?"".concat(e,"px"):e})).join(" ")}function P(e){return"function"===typeof e?e():e}var w=(0,c.ZP)(m.Z,{name:"MuiPopover",slot:"Root",overridesResolver:function(e,n){return n.root}})({}),T=(0,c.ZP)(h.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:function(e,n){return n.paper}})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),S=i.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiPopover"}),c=t.action,m=t.anchorEl,h=t.anchorOrigin,b=void 0===h?{vertical:"top",horizontal:"left"}:h,S=t.anchorPosition,M=t.anchorReference,C=void 0===M?"anchorEl":M,F=t.children,A=t.className,I=t.container,N=t.elevation,O=void 0===N?8:N,L=t.marginThreshold,B=void 0===L?16:L,D=t.open,j=t.PaperProps,z=void 0===j?{}:j,K=t.transformOrigin,q=void 0===K?{vertical:"top",horizontal:"left"}:K,H=t.TransitionComponent,W=void 0===H?p.Z:H,U=t.transitionDuration,Y=void 0===U?"auto":U,X=t.TransitionProps,_=(X=void 0===X?{}:X).onEntering,G=(0,r.Z)(t.TransitionProps,E),V=(0,r.Z)(t,y),J=i.useRef(),Q=(0,v.Z)(J,z.ref),$=(0,o.Z)({},t,{anchorOrigin:b,anchorReference:C,elevation:O,marginThreshold:B,PaperProps:z,transformOrigin:q,TransitionComponent:W,transitionDuration:Y,TransitionProps:G}),ee=function(e){var n=e.classes;return(0,s.Z)({root:["root"],paper:["paper"]},g,n)}($),ne=i.useCallback((function(){if("anchorPosition"===C)return S;var e=P(m),n=(e&&1===e.nodeType?e:(0,d.Z)(J.current).body).getBoundingClientRect();return{top:n.top+x(n,b.vertical),left:n.left+k(n,b.horizontal)}}),[m,b.horizontal,b.vertical,S,C]),te=i.useCallback((function(e){return{vertical:x(e,q.vertical),horizontal:k(e,q.horizontal)}}),[q.horizontal,q.vertical]),oe=i.useCallback((function(e){var n={width:e.offsetWidth,height:e.offsetHeight},t=te(n);if("none"===C)return{top:null,left:null,transformOrigin:R(t)};var o=ne(),r=o.top-t.vertical,i=o.left-t.horizontal,a=r+n.height,s=i+n.width,c=(0,f.Z)(P(m)),l=c.innerHeight-B,u=c.innerWidth-B;if(r<B){var d=r-B;r-=d,t.vertical+=d}else if(a>l){var v=a-l;r-=v,t.vertical+=v}if(i<B){var p=i-B;i-=p,t.horizontal+=p}else if(s>u){var h=s-u;i-=h,t.horizontal+=h}return{top:"".concat(Math.round(r),"px"),left:"".concat(Math.round(i),"px"),transformOrigin:R(t)}}),[m,C,ne,te,B]),re=i.useCallback((function(){var e=J.current;if(e){var n=oe(e);null!==n.top&&(e.style.top=n.top),null!==n.left&&(e.style.left=n.left),e.style.transformOrigin=n.transformOrigin}}),[oe]);i.useEffect((function(){D&&re()})),i.useImperativeHandle(c,(function(){return D?{updatePosition:function(){re()}}:null}),[D,re]),i.useEffect((function(){if(D){var e=(0,u.Z)((function(){re()})),n=(0,f.Z)(m);return n.addEventListener("resize",e),function(){e.clear(),n.removeEventListener("resize",e)}}}),[m,D,re]);var ie=Y;"auto"!==Y||W.muiSupportAuto||(ie=void 0);var ae=I||(m?(0,d.Z)(P(m)).body:void 0);return(0,Z.jsx)(w,(0,o.Z)({BackdropProps:{invisible:!0},className:(0,a.Z)(ee.root,A),container:ae,open:D,ref:n,ownerState:$},V,{children:(0,Z.jsx)(W,(0,o.Z)({appear:!0,in:D,onEntering:function(e,n){_&&_(e,n),re()},timeout:ie},G,{children:(0,Z.jsx)(T,(0,o.Z)({elevation:O},z,{ref:Q,className:(0,a.Z)(ee.paper,z.className),children:F}))}))}))}))},6211:function(e,n,t){function o(e){var n=e.documentElement.clientWidth;return Math.abs(window.innerWidth-n)}t.d(n,{Z:function(){return o}})}}]);
//# sourceMappingURL=407.f9c61c91.chunk.js.map