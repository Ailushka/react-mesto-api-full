(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{28:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(19),o=n.n(s),i=n(8),r=(n(28),n(22)),l=n(2),u=n(3),j=n.p+"static/media/logo.03b78ada.svg",m=n(0);var d=function(e){var t=e.currentUserEmail,n=e.onLogOut,a=Object(u.h)();return Object(m.jsx)("header",{className:"header container",children:Object(m.jsxs)("div",{className:"header__content",children:[Object(m.jsx)("img",{className:"header__logo",src:j,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 Mesto Russia"}),Object(m.jsxs)("ul",{className:"user-nav",children:[Object(m.jsx)("li",{className:"user-nav__item user-nav__item_type_email",children:"/"===a.pathname?t:""}),Object(m.jsxs)("li",{className:"user-nav__item user-nav__item_type_sign",onClick:"/"===a.pathname?n:function(){},children:[Object(m.jsx)(u.b,{path:"/sign-in",children:Object(m.jsx)(i.b,{to:"/sign-up",className:"user-nav__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(m.jsx)(u.b,{path:"/sign-up",children:Object(m.jsx)(i.b,{to:"/sign-in",className:"user-nav__link",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(m.jsx)(u.b,{exact:!0,path:"/",children:Object(m.jsx)(i.b,{to:"/sign-in",className:"user-nav__link",children:"\u0412\u044b\u0445\u043e\u0434"})})]})]})]})})},b=c.a.createContext();var h=function(e){var t=e.card,n=e.onCardClick,c=e.onCardLike,s=e.onCardDelete,o=Object(a.useContext)(b),i=t.owner._id===o._id,r="button ".concat(i?"button_type_delete":""),l=t.likes.some((function(e){return e._id===o._id})),u="button button_type_like ".concat(l?"button_clicked":"");return Object(m.jsxs)("li",{className:"gallery__item",children:[Object(m.jsx)("img",{className:"gallery__item-image",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(m.jsx)("button",{type:"button",className:r,onClick:function(){s(t)},"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),Object(m.jsxs)("div",{className:"gallery__item-info",children:[Object(m.jsx)("h2",{className:"gallery__item-title",children:t.name}),Object(m.jsxs)("div",{className:"gallery__item-likes",children:[Object(m.jsx)("button",{type:"button",className:u,onClick:function(){c(t)},"aria-label":"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f"}),Object(m.jsx)("span",{className:"gallery__item-like-counter",children:t.likes.length})]})]})]})};var p=function(e){var t=e.onEditAvatar,n=e.onEditProfile,c=e.onAddPlace,s=e.cards,o=e.onCardClick,i=e.onCardLike,r=e.onCardDelete,l=Object(a.useContext)(b);return Object(m.jsxs)("main",{className:"main",children:[Object(m.jsxs)("section",{className:"profile container",children:[Object(m.jsx)("div",{className:"profile__overlay",onClick:t,children:Object(m.jsx)("img",{className:"profile__avatar",alt:"\u0424\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f",src:l.avatar})}),Object(m.jsxs)("div",{className:"profile__text",children:[Object(m.jsx)("h1",{className:"profile__name",children:l.name}),Object(m.jsx)("button",{type:"button",className:"button button_type_edit","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:n}),Object(m.jsx)("p",{className:"profile__job",children:l.about})]}),Object(m.jsx)("button",{type:"button",className:"button button_type_add","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onClick:c})]}),Object(m.jsx)("section",{className:"gallery container",children:Object(m.jsx)("ul",{className:"gallery__list",children:s.map((function(e){return Object(m.jsx)(h,{card:e,onCardClick:o,onCardLike:i,onCardDelete:r},e._id)}))})})]})};var _=function(){return Object(m.jsx)("footer",{className:"footer container",children:Object(m.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})};var f=function(e){var t=e.name,n=e.isOpen,a=e.onSubmit,c=e.title,s=e.children,o=e.buttonTitle,i=e.onClose,r="popup popup_type_".concat(t," ").concat(n?"popup_opened":"");return Object(m.jsx)("div",{className:r,children:Object(m.jsxs)("div",{className:"popup__container",children:[Object(m.jsxs)("form",{className:"form form_type_".concat(t),name:t,onSubmit:a,children:[Object(m.jsx)("h2",{className:"form__title",children:c}),s,Object(m.jsx)("button",{className:"button button_type_save",type:"submit",children:o})]}),Object(m.jsx)("button",{className:"button button_type_close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:i})]})})};var O=function(e){var t=e.card,n=e.onClose,a="popup ".concat(t?"popup_opened":"");return Object(m.jsx)("div",{className:a,children:Object(m.jsxs)("div",{className:"popup__image-container",children:[Object(m.jsx)("img",{className:"popup__image",src:t&&t.link,alt:t&&t.name}),Object(m.jsx)("h3",{className:"popup__image-title",children:t&&t.name}),Object(m.jsx)("button",{className:"button button_type_close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:n})]})})};var g=function(e){var t=e.onUpdateUser,n=e.isOpen,c=e.onClose,s=Object(a.useContext)(b),o=Object(a.useState)(""),i=Object(l.a)(o,2),r=i[0],u=i[1],j=Object(a.useState)(""),d=Object(l.a)(j,2),h=d[0],p=d[1];return Object(a.useEffect)((function(){u(s.name||""),p(s.about||"")}),[s]),Object(m.jsx)(f,{isOpen:n,onClose:c,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile-form",buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),t({name:r,about:h})},children:Object(m.jsxs)("fieldset",{className:"form__content form__user-info",children:[Object(m.jsx)("input",{className:"form__item form__item_type_name",value:r,onChange:function(e){u(e.target.value)},type:"text",name:"name",minLength:"2",maxLength:"40",id:"user-name",required:!0}),Object(m.jsx)("span",{id:"user-name-error",className:"form__item-error"}),Object(m.jsx)("input",{className:"form__item form__item_type_job",value:h,onChange:function(e){p(e.target.value)},type:"text",name:"job",minLength:"2",maxLength:"200",id:"user-job",required:!0}),Object(m.jsx)("span",{id:"user-job-error",className:"form__item-error"})]})})};var x=function(e){var t=e.onUpdateAvatar,n=e.isOpen,c=e.onClose,s=Object(a.useRef)();return Object(m.jsxs)(f,{isOpen:n,onClose:c,title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar-update-form",buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),t({avatar:s.current.value})},children:[Object(m.jsx)("input",{className:"form__item form__item_type_avatar-update",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",id:"avatar-update",required:!0,ref:s}),Object(m.jsx)("span",{id:"avatar-update-error",className:"form__item-error"})]})};var v=function(e){var t=e.onAddPlace,n=e.isOpen,c=e.onClose,s=Object(a.useState)(""),o=Object(l.a)(s,2),i=o[0],r=o[1],u=Object(a.useState)(""),j=Object(l.a)(u,2),d=j[0],b=j[1];return Object(m.jsx)(f,{isOpen:n,onClose:c,title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-form",buttonTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onSubmit:function(e){e.preventDefault(),t({name:i,link:d}),r(""),b("")},children:Object(m.jsxs)("fieldset",{className:"form__content form__add-card",children:[Object(m.jsx)("input",{className:"form__item form__item_type_card-name",value:i,onChange:function(e){r(e.target.value)},type:"text",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",id:"card-name",required:!0}),Object(m.jsx)("span",{id:"card-name-error",className:"form__item-error"}),Object(m.jsx)("input",{className:"form__item form__item_type_card-link",value:d,onChange:function(e){b(e.target.value)},type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"card-link",required:!0}),Object(m.jsx)("span",{id:"card-link-error",className:"form__item-error"})]})})};var N=function(e){var t=e.onRegister,n=Object(a.useState)(""),c=Object(l.a)(n,2),s=c[0],o=c[1],r=Object(a.useState)(""),u=Object(l.a)(r,2),j=u[0],d=u[1];return Object(m.jsxs)("section",{className:"sign",children:[Object(m.jsxs)("form",{className:"form form_type_sign-up",onSubmit:function(e){e.preventDefault(),t(s,j)},children:[Object(m.jsx)("h2",{className:"sign__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(m.jsxs)("fieldset",{className:"form__content form__sign",children:[Object(m.jsx)("input",{className:"sign__item",value:s,onChange:function(e){o(e.target.value)},type:"email",name:"email",id:"email",placeholder:"Email",required:!0}),Object(m.jsx)("input",{className:"sign__item",value:j,onChange:function(e){d(e.target.value)},type:"password",name:"password",id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0})]}),Object(m.jsx)("button",{type:"submit",className:"sign__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(m.jsxs)("div",{className:"sign__login",children:[Object(m.jsx)("p",{className:"sign__login-text",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),Object(m.jsx)(i.b,{to:"/sign-in",className:"sign__login-link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var y=function(e){var t=e.onLogin,n=Object(a.useState)(""),c=Object(l.a)(n,2),s=c[0],o=c[1],i=Object(a.useState)(""),r=Object(l.a)(i,2),u=r[0],j=r[1];return Object(m.jsx)("section",{className:"sign",children:Object(m.jsxs)("form",{className:"form form_type_sign-in",onSubmit:function(e){e.preventDefault(),t(s,u)},children:[Object(m.jsx)("h2",{className:"sign__title",children:"\u0412\u0445\u043e\u0434"}),Object(m.jsxs)("fieldset",{className:"form__content form__sign",children:[Object(m.jsx)("input",{className:"sign__item",value:s,onChange:function(e){o(e.target.value)},type:"email",name:"email",id:"email",placeholder:"Email",required:!0}),Object(m.jsx)("input",{className:"sign__item",value:u,onChange:function(e){j(e.target.value)},type:"password",name:"password",id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0})]}),Object(m.jsx)("button",{type:"submit",className:"sign__button",children:"\u0412\u043e\u0439\u0442\u0438"})]})})},k=n.p+"static/media/success.1b6082f8.svg",C=n.p+"static/media/fail.df8eddf6.svg";var S=function(e){var t=e.isOpen,n=e.status,a=e.onClose,c="popup ".concat(t?"popup_opened":"");return Object(m.jsx)("div",{className:c,children:Object(m.jsxs)("div",{className:"infotooltip",children:[Object(m.jsx)("img",{className:"infotooltip__image",src:n?k:C,alt:n?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),Object(m.jsx)("p",{className:"infotooltip__status",children:n?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),Object(m.jsx)("button",{className:"button button_type_close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:a})]})})},w=n(23),E=n(21);var T=function(e){var t=e.component,n=Object(E.a)(e,["component"]);return Object(m.jsx)(u.b,{children:function(){return n.loggedIn?Object(m.jsx)(t,Object(w.a)({},n)):Object(m.jsx)(u.a,{to:"/sign-up"})}})},L=n(13),R=n(14),I=new(function(){function e(t,n){Object(L.a)(this,e),this._url=t,this._password=n}return Object(R.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{authorization:this._password}}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:{authorization:this._password}}).then(this._checkResponse)}},{key:"patchUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._password,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"postCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._password,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._password}}).then(this._checkResponse)}},{key:"toggleLikeCardStatus",value:function(e,t){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:{authorization:this._password}}).then(this._checkResponse)}},{key:"patchUserAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._password,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())("https://mesto.nomoreparties.co/v1/cohort-20","aeac4cc4-9284-4753-bb8f-afa2eb1b5233"),P=new(function(){function e(t){Object(L.a)(this,e),this._url=t}return Object(R.a)(e,[{key:"signup",value:function(e,t){return fetch("".concat(this._url,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(this._checkResponse)}},{key:"signin",value:function(e,t){return fetch("".concat(this._url,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(this._checkResponse)}},{key:"getContent",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(this._checkResponse).then((function(e){return e}))}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())("https://auth.nomoreparties.co");var U=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),o=Object(l.a)(s,2),i=o[0],j=o[1],h=Object(a.useState)(!1),k=Object(l.a)(h,2),C=k[0],w=k[1],E=Object(a.useState)(!1),L=Object(l.a)(E,2),R=L[0],U=L[1],A=Object(a.useState)(null),D=Object(l.a)(A,2),q=D[0],z=D[1],J=Object(a.useState)({}),G=Object(l.a)(J,2),M=G[0],B=G[1],H=Object(a.useState)([]),F=Object(l.a)(H,2),Y=F[0],K=F[1],Q=Object(a.useState)(!1),V=Object(l.a)(Q,2),W=V[0],X=V[1],Z=Object(a.useState)(""),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ne=Object(a.useState)(!1),ae=Object(l.a)(ne,2),ce=ae[0],se=ae[1],oe=Object(u.g)();function ie(){c(!1),j(!1),w(!1),z(null),U(!1)}return Object(a.useEffect)((function(){I.getUserInfo().then((function(e){B(e)})).catch((function(e){return console.log(e)}))}),[]),Object(a.useEffect)((function(){I.getInitialCards().then((function(e){K(e)})).catch((function(e){return console.log(e)}))}),[]),Object(a.useEffect)((function(){!function(){if(localStorage.getItem("jwt")){var e=localStorage.getItem("jwt");e&&P.getContent(e).then((function(e){e&&te(e.data.email),X(!0),oe.push("/")})).catch((function(e){localStorage.removeItem("jwt"),console.log(e)}))}}()})),Object(m.jsxs)(b.Provider,{value:M,children:[Object(m.jsx)(d,{currentUserEmail:ee,onLogOut:function(){localStorage.removeItem("jwt"),oe.push("/sign-in")}}),Object(m.jsxs)(u.d,{children:[Object(m.jsx)(T,{exact:!0,path:"/",loggedIn:W,component:p,cards:Y,onEditProfile:function(){c(!0)},onAddPlace:function(){j(!0)},onEditAvatar:function(){w(!0)},onCardClick:function(e){z(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===M._id}));I.toggleLikeCardStatus(e._id,!t).then((function(t){K((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))}))},onCardDelete:function(e){I.deleteCard(e._id).then(K(Y.filter((function(t){return t._id!==e._id})))).catch((function(e){return console.log(e)}))}}),Object(m.jsx)(T,{exact:!0,path:"/",loggedIn:W,component:_}),Object(m.jsx)(u.b,{path:"/sign-up",children:Object(m.jsx)(N,{onRegister:function(e,t){P.signup(t,e).then((function(e){U(!0),e?(se(!0),oe.push("/sign-in")):se(!1)})).catch((function(e){return console.log(e)}))}})}),Object(m.jsx)(u.b,{path:"/sign-in",children:Object(m.jsx)(y,{onLogin:function(e,t){P.signin(t,e).then((function(t){t?(X(!0),te(e),localStorage.setItem("jwt",t.token),oe.push("/")):(U(!0),se(!1))})).catch((function(e){return console.log(e)}))}})}),Object(m.jsx)(u.b,{children:W?Object(m.jsx)(u.a,{to:"/"}):Object(m.jsx)(u.a,{to:"/sign-up"})})]}),Object(m.jsx)(S,{status:ce,isOpen:R,onClose:ie}),Object(m.jsx)(g,{isOpen:n,onClose:ie,onUpdateUser:function(e){I.patchUserInfo(e).then((function(e){return B(e)})).then(ie).catch((function(e){return console.log(e)}))}}),Object(m.jsx)(v,{isOpen:i,onClose:ie,onAddPlace:function(e){I.postCard(e).then((function(e){K([].concat(Object(r.a)(Y),[e]))})).then(ie).catch((function(e){return console.log(e)}))}}),Object(m.jsx)(O,{card:q,onClose:ie}),Object(m.jsx)(f,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"confirm-form",buttonTitle:"\u0414\u0430"}),Object(m.jsx)(x,{isOpen:C,onClose:ie,onUpdateAvatar:function(e){I.patchUserAvatar(e).then((function(e){return B(e)})).then(ie).catch((function(e){return console.log(e)}))}})]})};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(U,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.4b558311.chunk.js.map