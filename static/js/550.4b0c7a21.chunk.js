"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[550],{9550:function(e,s,n){n.r(s),n.d(s,{default:function(){return z}});var a=n(2791),t=n(364),r=n(8931),i=n(4942),c=n(9439),o=n(9230),d=n(1523),l=n(2271),u=n(5814),m=n(1694),h=n.n(m),g=n(3328),_=n(6128),x="Messages_messagesWrapper__GmzfQ",f="Messages_avatar__CDvwB",j="Messages_messageContainer__Lz+14",v="Messages_deleted__R0Sbd",p="Messages_messageBlock__pGIH5",M="Messages_author__vTxJx",N="Messages_message__BBOz6",Z="Messages_iconWrapper__UJ90K",C="Messages_icon__oOTpf",k="Messages_recovery__i8PDO",y=n(184),F=(0,a.memo)((function(e){var s=e.message,n=e.userName,a=e.photo,r=e.userId,m=e.id,x=e.deleted,F=e.deletedMessage,I=(0,t.I0)(),O=(0,o.$G)().t,w=x&&F?F.split("."):[],b=(0,c.Z)(w,2),A=b[0],E=b[1];return(0,y.jsxs)("div",{className:h()(j,(0,i.Z)({},v,x)),children:[(0,y.jsxs)("div",{className:p,children:[!x&&(0,y.jsx)(d.OL,{to:"/profile/"+r,children:(0,y.jsx)("img",{src:null!==a&&void 0!==a?a:g,alt:n,className:f})}),(0,y.jsxs)("div",{children:[!x&&(0,y.jsx)(d.OL,{to:"/profile/"+r,children:(0,y.jsx)("div",{className:M,children:n})}),!x&&(0,y.jsx)("div",{className:N,children:s}),x&&(0,y.jsxs)("div",{className:N,children:[(0,y.jsx)("span",{children:A}),"."," ",(0,y.jsx)("span",{className:k,onClick:function(){I(_.ON.restoreMessageActionCreator(m))},role:"button",children:E})]})]})]}),!x&&(0,y.jsx)("div",{className:Z,children:(0,y.jsx)(u.Z,{title:O("chat.delete"),arrow:!0,placement:"bottom-start",children:(0,y.jsx)(l.Z,{onClick:function(){I(_.ON.deleteMessageActionCreator(m))},className:C})})})]})})),I=(0,a.memo)((function(){var e=(0,t.v9)((function(e){return e.chat.messages})),s=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e;null===(e=s.current)||void 0===e||e.scrollIntoView()}),[e]),(0,y.jsxs)("div",{className:x,children:[e.map((function(e){var s=e.id,n=e.userId,a=e.message,t=e.photo,r=e.userName,i=e.deleted,c=e.deletedMessage;return(0,y.jsx)(F,{userId:n,message:a,photo:t,userName:r,id:s,deleted:i,deletedMessage:c},s)})),(0,y.jsx)("div",{ref:s})]})})),O=n(1686),w=n(8805),b=n(4420),A=n(8254),E=n(3811),G=n(7205),B=n(8955),D="AddMessageForm_addMessageForm__Ex7F4",K="AddMessageForm_emojiContainer__GgOEq",L=function(){var e=(0,a.useState)(""),s=(0,c.Z)(e,2),n=s[0],r=s[1],i=(0,t.v9)((function(e){return e.chat.status})),d=(0,t.I0)(),l=(0,o.$G)().t,u=function(){n&&(d((0,_.q2)(n)),r(""))},m=(0,a.useState)(!1),h=(0,c.Z)(m,2),g=h[0],x=h[1];return(0,y.jsxs)("div",{className:D,children:[(0,y.jsx)(b.Z,{placeholder:l("chat.enter"),multiline:!0,maxRows:4,value:n,onChange:function(e){return r(e.currentTarget.value)},fullWidth:!0,onKeyDown:function(e){e.ctrlKey&&"Enter"===e.key?r("".concat(n,"\r\n")):"Enter"!==e.key||e.shiftKey||(e.preventDefault(),u())},autoFocus:!0,endAdornment:(0,y.jsx)(A.Z,{position:"end",children:(0,y.jsx)(E.Z,{onClick:function(){x((function(e){return!e}))},edge:"end",children:(0,y.jsx)(w.Z,{})})})}),g&&(0,y.jsx)("div",{className:K,children:(0,y.jsx)(B.ZP,{onEmojiClick:function(e){r(n+e.emoji)},autoFocusSearch:!1})}),(0,y.jsx)(G.Z,{onClick:u,disabled:"ready"!==i||!n.trim().length,variant:"contained",endIcon:(0,y.jsx)(O.Z,{}),children:l("chat.send")})]})},S=n(423),z=(0,a.memo)((function(){var e=(0,t.v9)((function(e){return e.auth})).isAuth,s=(0,t.v9)((function(e){return e.chat.status}));return e?(0,y.jsxs)(y.Fragment,{children:["pending"===s&&(0,y.jsx)(S.Z,{isFetching:"pending"===s}),"ready"===s&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(I,{}),(0,y.jsx)(L,{})]})]}):(0,y.jsx)(r.l_,{to:"/Login"})}))},3328:function(e,s,n){e.exports=n.p+"static/media/avatar.5a2d86a614875de76929.png"}}]);
//# sourceMappingURL=550.4b0c7a21.chunk.js.map