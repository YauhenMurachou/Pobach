"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[346],{9286:function(e,s,n){n.r(s),n.d(s,{default:function(){return w}});var r=n(9439),i=n(2791),t=n(9230),a=n(364),o=n(8931),u=n(9193),l=n(9937),c=n(5183),d=n(6526),h=n(8620),f=n(823),g=n(423),p=n(8627),v=n(4487),x=n(6315),j=n(3635),m="Friends_wrapper__2EdIQ",S="Friends_header__MBbvf",_="Friends_itemWrapper__QfSbn",Z=n(184),w=function(){var e=(0,a.I0)(),s=(0,i.useState)(1),n=(0,r.Z)(s,2),w=n[0],P=n[1],F=(0,i.useState)(!1),b=(0,r.Z)(F,2),C=b[0],I=b[1],k=(0,i.useState)(!1),O=(0,r.Z)(k,2),U=O[0],V=O[1],y=(0,i.useState)(),z=(0,r.Z)(y,2),A=z[0],E=z[1],N=(0,a.v9)((function(e){return{isAuth:e.auth,isFetching:e.users.isFetching,pageSize:e.users.pageSize,friends:e.users.users,followingInProgress:e.users.followingInProgressUsers}})),R=N.isAuth,B=N.isFetching,L=N.friends,Q=N.followingInProgress,$=N.pageSize,D=(0,t.$G)().t;(0,i.useEffect)((function(){(0,j.R)(e,w,100,void 0,!0)}),[e]);var G=(0,j.L)(L.length,$),M=(0,p.R)(j.R,w,$,!0),W=M.setSearchValue,q=M.searchValue;return R?B?(0,Z.jsx)(g.Z,{isFetching:B}):(0,Z.jsx)("div",{className:m,children:!B&&(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("div",{className:S,children:["All friends(",L.length,")"]}),(0,Z.jsx)(l.Z,{placeholder:D("users.search"),setSearchValue:W,searchValue:q,isSearch:!!q}),(0,Z.jsx)("ul",{className:_,children:L.map((function(s,n){return(0,Z.jsx)(f.Z,{user:s,followUsers:function(){e((0,x.$s)(s.id))},unfollowUsers:function(){return n=s.id,void e((0,x.BO)(n));var n},followingInProgress:Q,handleDialogOpen:function(){return function(s){I(!0),E(s),e((0,v.dp)({id:null===s||void 0===s?void 0:s.id}))}(s)}},n+s.toString())}))}),G>1&&(0,Z.jsx)(c.Z,{pagesCount:G,currentPage:w,handlePageChange:function(s){e((0,x.Uk)(s,$,void 0,!0))},setPage:P}),!!q&&!L.length&&(0,Z.jsx)(h.Z,{text:D("users.nothing")}),(0,Z.jsx)(d.Z,{isOpen:C,handleClose:function(){I(!1)},setPopperOpen:V,companion:A}),(0,Z.jsx)(u.Z,{isOpen:U,placement:"bottom-start",anchorEl:document.body,handleClose:function(){return V(!1)},companion:A})]})}):(0,Z.jsx)(o.l_,{to:"/Login"})}}}]);
//# sourceMappingURL=346.213b813d.chunk.js.map