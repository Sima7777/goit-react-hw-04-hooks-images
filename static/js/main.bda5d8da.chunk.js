(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2bkPr"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},24:function(e,t,a){e.exports={Button:"Button_Button__3R1xi"}},25:function(e,t,a){e.exports={Loader:"Loader_Loader__17sQZ"}},27:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2AxMb"}},32:function(e,t,a){},33:function(e,t,a){},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l",SearchFormButton:"Searchbar_SearchFormButton__21S85",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__8f9cn",SearchFormInput:"Searchbar_SearchFormInput__VhsfU"}},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),s=(a(32),a(13)),u=a(4),i=(a(33),a(5)),l=a.n(i),m=a(1);var b=function(e){var t=e.onSubmit;return Object(m.jsx)("header",{className:l.a.Searchbar,children:Object(m.jsxs)("form",{className:l.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(e.target.elements[1].value)},children:[Object(m.jsx)("button",{type:"submit",className:l.a.SearchFormButton,children:Object(m.jsx)("span",{className:l.a.SearchFormButtonLabel,children:"Search"})}),Object(m.jsx)("input",{className:l.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},h=a(10),j=a.n(h),d=a(22),f=a(11),p=a.n(f);p.a.defaults.baseURL="https://pixabay.com/api/";var O=function(){var e=Object(d.a)(j.a.mark((function e(t,a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"&key=21751722-1c715179d2c000e30188b4b67&image_type=photo&orientation=horizontal&per_page=12",e.next=3,p.a.get("?q=".concat(t,"&page=").concat(a,"&").concat("&key=21751722-1c715179d2c000e30188b4b67&image_type=photo&orientation=horizontal&per_page=12"));case 3:return n=e.sent,e.abrupt("return",n.data.hits);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),g=a(23),x=a.n(g);var v=function(e){var t=e.children;return Object(m.jsx)("ul",{className:x.a.ImageGallery,children:t})},_=a(12),S=a.n(_);var y=function(e){var t=e.webformatURL,a=e.tags,n=e.onImgClick;return Object(m.jsx)("li",{className:S.a.ImageGalleryItem,children:Object(m.jsx)("img",{src:t,alt:a,className:S.a.ImageGalleryItemImage,onClick:n})})},I=a(24),w=a.n(I);var k=function(e){var t=e.handleMoreBtnClick;return Object(m.jsx)("button",{type:"submit",name:"more",className:w.a.Button,onClick:t,children:"Load more"})};var F=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},L=a(25),B=a.n(L),G=a(26),C=a.n(G);a(74);var N=function(){return Object(m.jsx)(C.a,{className:B.a.Loader,type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:2e3,visible:!0})},R=a(27),E=a.n(R);function U(e){var t=e.onClose,a=e.children,r=document.querySelector("#modal-root");Object(n.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return Object(c.createPortal)(Object(m.jsx)("div",{className:E.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(m.jsx)("div",{children:a})}),r)}function D(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("idle"),o=Object(u.a)(c,2),i=o[0],l=o[1],h=Object(n.useState)([]),j=Object(u.a)(h,2),d=j[0],f=j[1],p=Object(n.useState)(null),g=Object(u.a)(p,2),x=g[0],_=g[1],S=Object(n.useState)(null),I=Object(u.a)(S,2),w=I[0],L=I[1],B=Object(n.useState)(null),G=Object(u.a)(B,2),C=G[0],R=G[1],E=Object(n.useState)(!1),D=Object(u.a)(E,2),M=D[0],H=D[1],J=Object(n.useRef)(!0);Object(n.useEffect)((function(){J.current||""===a?J.current=!1:(l("pending"),O(a,x).then((function(e){f((function(t){return[].concat(Object(s.a)(t),Object(s.a)(e))})),F(),l("resolved")})).catch((function(e){return l("rejected")})))}),[x,a]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(b,{onSubmit:function(e){r(e),_(1)}}),Object(m.jsx)(v,{children:d.map((function(e){var t=e.id,a=e.webformatURL,n=e.tags,r=e.largeImageURL;return Object(m.jsx)(y,{webformatURL:a,tags:n,onImgClick:function(){return function(e,t){L(e),R(t),H(!0)}(r,n)}},t)}))}),"resolved"===i&&Object(m.jsx)(k,{handleMoreBtnClick:function(e){e.preventDefault(),_((function(e){return e+1}))}}),"pending"===i&&Object(m.jsx)(N,{}),M&&Object(m.jsx)(U,{onClose:function(){H(!1)},children:Object(m.jsx)("img",{style:{maxWidth:"calc(100vw - 48px)",maxHeight:"calc(100vh - 24px)"},src:w,alt:C})})]})}a(75);o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.bda5d8da.chunk.js.map