"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[755],{2580:function(a,t,e){e.d(t,{Z:function(){return l}});var i=e(3292),n=e(5618),c="Logo_logo__KFQFe",s="Logo_image__CojYR",r="Logo_tradeMark__8NOcZ",o=e(184),l=function(a){var t=a.color;return(0,o.jsxs)("div",{className:c,style:{color:t},children:[(0,o.jsx)(i.Z,{className:s,fontSize:"medium"}),(0,o.jsx)("span",{className:r,children:" \u041f\u043e\u0431\u0430\u0447 \xa9 2023"}),(0,o.jsx)(n.Z,{})]})}},1755:function(a,t,e){e.r(t),e.d(t,{default:function(){return J}});var i=e(9230),n=e(364),c=e(8931),s=e(3292),r=e(2580),o=e(286),l="LoginAside_aside__nwoOz",d="LoginAside_logo__-3X6j",h="LoginAside_image__rU17P",u="LoginAside_near__t1CaP",v="LoginAside_social__huNEq",m="LoginAside_item__r-tWD",x=e(184),p=function(){var a=(0,o.u)().asideData;return(0,x.jsxs)("aside",{className:l,children:[(0,x.jsxs)("div",{className:d,children:[(0,x.jsx)(s.Z,{className:h,fontSize:"large"}),(0,x.jsx)("span",{className:u,children:"\u043f\u043e\u0431\u0430\u0447"})]}),(0,x.jsx)("ul",{className:v,children:a.map((function(a){var t=a.icon,e=a.text;return(0,x.jsxs)("li",{className:m,children:[t,e]},e)}))}),(0,x.jsx)(r.Z,{color:"var(--red-main)"})]})},j=e(1413),f=e(9439),g=e(2791),_=e(7205),Z=e(2506),z=e(45),b=e(3303),M=function(a){var t=a.captchaImageUrl,e=a.value,i=a.setValue;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("img",{src:t,alt:"captcha",width:"180px",height:"90px"}),(0,x.jsx)(Z.gN,{fullWidth:!0,placeholder:"captcha",name:"captcha",id:"captcha",type:"text",label:"captcha",component:z.n,disabled:!t,value:e,onChange:function(a){return i(a.target.value)}})]})},w=e(233),N=(0,w.Z)((0,x.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff"),C=(0,w.Z)((0,x.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility"),L=e(8254),y=e(3811),V=function(a){var t=a.showPassword,e=a.handleClickShowPassword,i=a.handleMouseDownPassword;return(0,x.jsx)(L.Z,{position:"end",children:(0,x.jsx)(y.Z,{onClick:e,onMouseDown:i,edge:"end",children:t?(0,x.jsx)(N,{}):(0,x.jsx)(C,{})})})},S=e(5814),k="SignUpRedirect_redirect__OGRHd",H="SignUpRedirect_registration__bW3Cn",P=function(){var a=(0,i.$G)().t;return(0,x.jsxs)("div",{className:k,children:[(0,x.jsx)("span",{children:a("login.account")}),(0,x.jsx)(S.Z,{title:a("login.redirect"),arrow:!0,placement:"bottom",children:(0,x.jsx)("a",{href:"https://social-network.samuraijs.com/signUp",className:H,target:"_blank",rel:"noreferrer",children:a("login.registration")})})]})},A=e(8095),D="Login_container__aFJTh",F="Login_login__hfHuW",q="Login_loginForm__cMtN3",R="Login_title__38s5G",O="Login_field__SpLKj",U="Login_error__FQZiN",G="Login_submit__c9s6a",W={email:"",password:"",rememberMe:!1,captcha:""},I=function(a){var t=a.onSubmit,e=(0,g.useState)(!1),c=(0,f.Z)(e,2),s=c[0],r=c[1],o=function(){return r((function(a){return!a}))},l=function(a){a.preventDefault()},d=(0,n.v9)((function(a){return a.auth})),h=d.error,u=d.captchaImageUrl,v=(0,i.$G)().t,m=(0,g.useState)(""),p=(0,f.Z)(m,2),w=p[0],N=p[1];return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(Z.J9,{onSubmit:function(a){t((0,j.Z)((0,j.Z)({},a),{},{captcha:w})),N("")},initialValues:W,validationSchema:A.k,children:function(a){var t=a.errors,e=a.dirty;return(0,x.jsxs)(Z.l0,{children:[(0,x.jsx)("div",{className:O,children:(0,x.jsx)(Z.gN,{fullWidth:!0,name:"email",id:"email",label:"Email",placeholder:"Email",component:z.n,disabled:!1})}),(0,x.jsx)("div",{className:O,children:(0,x.jsx)(Z.gN,{fullWidth:!0,placeholder:"Password",name:"password",id:"password",type:s?"text":"password",label:"Password",component:z.n,disabled:!1,InputProps:{endAdornment:(0,x.jsx)(V,{showPassword:s,handleClickShowPassword:o,handleMouseDownPassword:l})}})}),u&&(0,x.jsx)(M,{captchaImageUrl:u,value:w,setValue:N}),t&&(0,x.jsx)("div",{className:U,children:h}),(0,x.jsx)("div",{className:O,children:(0,x.jsx)(Z.gN,{type:"checkbox",component:b.$,name:"rememberMe",Label:{label:v("login.remember")}})}),(0,x.jsx)("div",{className:G,children:(0,x.jsx)(_.Z,{variant:"contained",color:"primary",type:"submit",disabled:!!t.email||!!t.password||!e||!!u&&!w.trim(),children:v("login.enter")})}),(0,x.jsx)(P,{})]})}})})},$=e(8641),J=function(){var a=(0,n.I0)(),t=(0,n.v9)((function(a){return a.auth})),e=t.isAuth,s=t.userId,r=(0,i.$G)().t,o="/Profile/".concat(s);return e?(0,x.jsx)(c.l_,{to:o}):(0,x.jsxs)("div",{className:D,children:[(0,x.jsx)(p,{}),(0,x.jsx)("div",{className:F,children:(0,x.jsxs)("div",{className:q,children:[(0,x.jsxs)("h1",{className:R,children:[" ",r("login.title")]}),(0,x.jsx)(I,{onSubmit:function(t){var e=t.email,i=t.password,n=t.rememberMe,c=t.captcha;a((0,$.Rv)(e,i,n,c))}})]})})]})}},286:function(a,t,e){e.d(t,{u:function(){return j}});var i=e(9230),n=e(9332),c=e(3164),s=e(2759),r=e(7939),o=e(5504),l=e(8243),d=e(5479),h=e(2129),u=e(7750),v=e(5399),m=e(3372),x=e(7122),p=e(184),j=function(){var a=(0,i.$G)().i18n;return{navBarData:[{path:"",icon:(0,p.jsx)(n.Z,{}),text:a.t("navbar.profile")},{path:"/Dialogs",icon:(0,p.jsx)(h.Z,{}),text:a.t("navbar.dialogs")},{path:"/Photos",icon:(0,p.jsx)(v.Z,{}),text:a.t("navbar.photos")},{path:"/Settings",icon:(0,p.jsx)(x.Z,{}),text:a.t("navbar.settings")},{path:"/Users",icon:(0,p.jsx)(l.Z,{}),text:a.t("navbar.users")},{path:"/Friends",icon:(0,p.jsx)(d.Z,{}),text:a.t("navbar.friends")},{path:"/Chat",icon:(0,p.jsx)(c.Z,{}),text:a.t("navbar.chat")}],asideData:[{icon:(0,p.jsx)(s.Z,{}),text:a.t("aside.social")},{icon:(0,p.jsx)(u.Z,{}),text:a.t("aside.friend")},{icon:(0,p.jsx)(c.Z,{}),text:a.t("aside.private")},{icon:(0,p.jsx)(r.Z,{}),text:a.t("aside.chat")},{icon:(0,p.jsx)(o.Z,{}),text:a.t("aside.upload")},{icon:(0,p.jsx)(m.Z,{}),text:a.t("aside.post")}]}}},8095:function(a,t,e){e.d(t,{hJ:function(){return u},jM:function(){return l},k:function(){return h},qY:function(){return d}});var i=e(9439),n=e(5024),c=e(132),s=n.Z.t,r=c.Z_().trim().nullable().matches(/(^(\w[a-z\d-]*\.)+[a-z]{2,}$)/i,s("validation.domain")),o=c.Z_().trim().max(25,s("validation.long")).required(s("validation.required")),l=c.Ry().shape({newPost:c.Z_().min(3,"Too Short!").max(30,"Too Long Post, maximum length 30 symbols!")}),d=c.Ry().shape({fullName:c.Z_().trim().max(15,s("validation.long")).required(s("validation.required")),aboutMe:o,lookingForAJob:c.O7(),lookingForAJobDescription:o,contacts:c.Ry().shape({facebook:r,github:r,vk:r,instagram:r,twitter:r,website:r,youtube:r,mainLink:r})}),h=c.Ry().shape({email:c.Z_().max(25,s("validation.long")).required(s("validation.required")).email(s("validation.email")),password:c.Z_().max(15,s("validation.long")).required(s("validation.required"))}),u=function a(t,e){return Object.entries(t).some((function(t){var n=(0,i.Z)(t,2),c=n[0],s=n[1],r=e[c];return"string"===typeof s?s.trim()!==("string"===typeof r?r.trim():""):"boolean"===typeof s?s!==("boolean"===typeof r&&r):"object"===typeof s&&(s&&a(s,r||{}))}))}},9332:function(a,t,e){var i=e(4836);t.Z=void 0;var n=i(e(5649)),c=e(184),s=(0,n.default)((0,c.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"}),"AccountBox");t.Z=s},3164:function(a,t,e){var i=e(4836);t.Z=void 0;var n=i(e(5649)),c=e(184),s=(0,n.default)((0,c.jsx)("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"}),"ChatBubbleOutline");t.Z=s},2759:function(a,t,e){var i=e(4836);t.Z=void 0;var n=i(e(5649)),c=e(184),s=(0,n.default)((0,c.jsx)("path",{d:"M11 14H9c0-4.97 4.03-9 9-9v2c-3.87 0-7 3.13-7 7zm7-3V9c-2.76 0-5 2.24-5 5h2c0-1.66 1.34-3 3-3zM7 4c0-1.11-.89-2-2-2s-2 .89-2 2 .89 2 2 2 2-.89 2-2zm4.45.5h-2C9.21 5.92 7.99 7 6.5 7h-3C2.67 7 2 7.67 2 8.5V11h6V8.74c1.86-.59 3.25-2.23 3.45-4.24zM19 17c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm1.5 1h-3c-1.49 0-2.71-1.08-2.95-2.5h-2c.2 2.01 1.59 3.65 3.45 4.24V22h6v-2.5c0-.83-.67-1.5-1.5-1.5z"}),"ConnectWithoutContact");t.Z=s},7939:function(a,t,e){var i=e(4836);t.Z=void 0;var n=i(e(5649)),c=e(184),s=(0,n.default)([(0,c.jsx)("path",{d:"m10.1 15.9 1.42-1.42C8.79 12.05 7 10.41 7 8.85 7 7.8 7.8 7 8.85 7c1.11 0 1.54.65 2.68 2h.93c1.12-1.31 1.53-2 2.68-2 .87 0 1.55.54 1.77 1.32.35-.04.68-.06 1-.06.36 0 .7.03 1.03.08C18.7 6.43 17.13 5 15.15 5c-.12 0-.23.03-.35.04.12-.33.2-.67.2-1.04 0-1.66-1.34-3-3-3S9 2.34 9 4c0 .37.08.71.2 1.04-.12-.01-.23-.04-.35-.04C6.69 5 5 6.69 5 8.85c0 2.42 2.04 4.31 5.1 7.05z"},"0"),(0,c.jsx)("path",{d:"M22.5 16.24c-.32-.18-.66-.29-1-.35.07-.1.15-.18.21-.28 1.08-1.87.46-4.18-1.41-5.26-2.09-1.21-4.76-.39-8.65.9l.52 1.94c3.47-1.14 5.79-1.88 7.14-1.1.91.53 1.2 1.61.68 2.53-.56.96-1.33 1-3.07 1.32l-.47.81c.58 1.62.97 2.33.39 3.32-.53.91-1.61 1.2-2.53.68-.06-.03-.11-.09-.17-.13-.3.67-.64 1.24-1.03 1.73.07.04.13.09.2.14 1.87 1.08 4.18.46 5.26-1.41.06-.1.09-.21.14-.32.22.27.48.51.8.69 1.43.83 3.27.34 4.1-1.1s.32-3.29-1.11-4.11z"},"1"),(0,c.jsx)("path",{d:"M12.32 14.01c-.74 3.58-1.27 5.95-2.62 6.73-.91.53-2 .24-2.53-.68-.56-.96-.2-1.66.39-3.32l-.46-.81c-1.7-.31-2.5-.33-3.07-1.32-.53-.91-.24-2 .68-2.53.09-.05.19-.08.29-.11-.35-.56-.64-1.17-.82-1.85-.16.07-.32.14-.48.23-1.87 1.08-2.49 3.39-1.41 5.26.06.1.14.18.21.28-.34.06-.68.17-1 .35-1.43.83-1.93 2.66-1.1 4.1s2.66 1.93 4.1 1.1c.32-.18.58-.42.8-.69.05.11.08.22.14.32 1.08 1.87 3.39 2.49 5.26 1.41 2.09-1.21 2.71-3.93 3.55-7.94l-1.93-.53z"},"2")],"Diversity2");t.Z=s},3292:function(a,t,e){var i=e(4836);t.Z=void 0;var n=i(e(5649)),c=e(184),s=(0,n.default)([(0,c.jsx)("path",{d:"M6.32 13.01c.96.02 1.85.5 2.45 1.34C9.5 15.38 10.71 16 12 16s2.5-.62 3.23-1.66c.6-.84 1.49-1.32 2.45-1.34-.72-1.22-3.6-2-5.68-2-2.07 0-4.96.78-5.68 2.01zM4 13c1.66 0 3-1.34 3-3S5.66 7 4 7s-3 1.34-3 3 1.34 3 3 3zm16 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8-3c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"},"0"),(0,c.jsx)("path",{d:"M21 14h-3.27c-.77 0-1.35.45-1.68.92-.04.06-1.36 2.08-4.05 2.08-1.43 0-3.03-.64-4.05-2.08-.39-.55-1-.92-1.68-.92H3c-1.1 0-2 .9-2 2v4h7v-2.26c1.15.8 2.54 1.26 4 1.26s2.85-.46 4-1.26V20h7v-4c0-1.1-.9-2-2-2z"},"1")],"Diversity3");t.Z=s},5504:function(a,t,e){var i=e(4836);t.Z=void 0;var n=i(e(5649)),c=e(184),s=(0,n.default)((0,c.jsx)("path",{d:"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"}),"Face");t.Z=s},8243:function(a,t,e){var i=e(4836);t.Z=void 0;var n=i(e(5649)),c=e(184),s=(0,n.default)((0,c.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}),"Group");t.Z=s},5479:function(a,t,e){var i=e(4836);t.Z=void 0;var n=i(e(5649)),c=e(184),s=(0,n.default)((0,c.jsx)("path",{d:"M16.48 10.41c-.39.39-1.04.39-1.43 0l-4.47-4.46-7.05 7.04-.66-.63c-1.17-1.17-1.17-3.07 0-4.24l4.24-4.24c1.17-1.17 3.07-1.17 4.24 0L16.48 9c.39.39.39 1.02 0 1.41zm.7-2.12c.78.78.78 2.05 0 2.83-1.27 1.27-2.61.22-2.83 0l-3.76-3.76-5.57 5.57c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.42 0l4.62-4.62.71.71-4.62 4.62c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.42 0l4.62-4.62.71.71-4.62 4.62c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.62-4.62.71.71-4.62 4.62c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l8.32-8.34c1.17-1.17 1.17-3.07 0-4.24l-4.24-4.24c-1.15-1.15-3.01-1.17-4.18-.06l4.47 4.47z"}),"Handshake");t.Z=s},2129:function(a,t,e){var i=e(4836);t.Z=void 0;var n=i(e(5649)),c=e(184),s=(0,n.default)((0,c.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"}),"MailOutline");t.Z=s},5399:function(a,t,e){var i=e(4836);t.Z=void 0;var n=i(e(5649)),c=e(184),s=(0,n.default)((0,c.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}),"Photo");t.Z=s},3372:function(a,t,e){var i=e(4836);t.Z=void 0;var n=i(e(5649)),c=e(184),s=(0,n.default)([(0,c.jsx)("path",{d:"M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7.22z"},"0"),(0,c.jsx)("path",{d:"M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3V2zM7 9h8v2H7zm0 3v2h8v-2h-3zm0 3h8v2H7z"},"1")],"PostAdd");t.Z=s},7122:function(a,t,e){var i=e(4836);t.Z=void 0;var n=i(e(5649)),c=e(184),s=(0,n.default)((0,c.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");t.Z=s}}]);
//# sourceMappingURL=755.1d6a3459.chunk.js.map