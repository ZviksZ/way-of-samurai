(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[4],{294:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return r}))},295:function(e,t,n){e.exports=n.p+"static/media/default_ava.aca5023d.jpg"},296:function(e,t,n){e.exports={mainLeft:"Users_mainLeft__376Gn",userItem:"Users_userItem__vaSMY",wrap:"Users_wrap__2v1X1",avatar:"Users_avatar__7UMIK"}},300:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage___Iw7Q",pagination:"Paginator_pagination__3QWFe",paginator:"Paginator_paginator__1AL1O",pageNumber:"Paginator_pageNumber__3u1mu"}},301:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var u=a.apply(null,r);u&&e.push(u)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},305:function(e,t,n){"use strict";n.r(t);var r=n(49),a=n(50),o=n(52),u=n(51),i=n(53),l=n(0),s=n.n(l),c=n(18),f=n(8);function p(e,t){return e===t}function g(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}function m(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var v=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];var o=0,u=r.pop(),i=m(r),l=e.apply(void 0,[function(){return o++,u.apply(null,arguments)}].concat(n)),s=e((function(){for(var e=[],t=i.length,n=0;n<t;n++)e.push(i[n].apply(null,arguments));return l.apply(null,e)}));return s.resultFunc=u,s.dependencies=i,s.recomputations=function(){return o},s.resetRecomputations=function(){return o=0},s}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,n=null,r=null;return function(){return g(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}));var h=v((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),d=function(e){return e.usersPage.pageSize},y=function(e){return e.usersPage.totalUsersCount},P=function(e){return e.usersPage.currentPage},w=function(e){return e.usersPage.isFetching},b=function(e){return e.usersPage.followingInProgress},E=n(129),_=n(54),C=n(20),j=n(294),N=n(300),S=n.n(N),I=n(301),O=n.n(I),U=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,o=e.portionSize,u=void 0===o?10:o,i=Math.ceil(t/n),c=[],f=1;f<=i;f++)c.push(f);var p=Math.ceil(i/u),g=Object(l.useState)(1),m=Object(j.a)(g,2),v=m[0],h=m[1],d=(v-1)*u+1,y=v*u;return s.a.createElement("div",{className:S.a.pagination},v>1&&s.a.createElement("button",{onClick:function(){h(v-1)}},"PREV"),c.filter((function(e){return e>=d&&e<=y})).map((function(e){return s.a.createElement("span",{className:O()(Object(C.a)({},S.a.selectedPage,r===e),S.a.pageNumber),key:e,onClick:function(){a(e)}},e)})),p>v&&s.a.createElement("button",{onClick:function(){h(v+1)}},"NEXT"))},k=n(9),A=n(296),z=n.n(A),x=n(295),F=n.n(x),L=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,a=e.unfollow;return s.a.createElement("div",{className:z.a.userItem},s.a.createElement("div",{className:z.a.mainLeft},s.a.createElement(k.b,{to:"/profile/".concat(t.id),activeClassName:z.a.activeLink},s.a.createElement("img",{src:null!=t.photos.small?t.photos.small:F.a,className:z.a.avatar,alt:""})),t.followed?s.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}}," Unfollow"):s.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}}," Follow")),s.a.createElement("div",{className:z.a.wrap},s.a.createElement("div",{className:z.a.left},s.a.createElement("h3",null,t.name),s.a.createElement("p",null,t.status)),s.a.createElement("div",{className:z.a.right},s.a.createElement("div",{className:""},"user.location.country"),s.a.createElement("div",{className:""},"user.location.city"))))},M=function(e){return s.a.createElement("div",null,s.a.createElement(U,{currentPage:e.currentPage,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,onPageChanged:e.onPageChanged}),s.a.createElement("div",{className:z.a.userList},e.users.map((function(t){return s.a.createElement(L,{key:t.id,user:t,followingInProgress:e.followingInProgress,follow:e.follow,unfollow:e.unfollow})}))))},q=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.requestUsers(e,t)},n}return Object(i.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.props.isFetching?s.a.createElement(_.a,null):null,s.a.createElement(M,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,follow:this.props.follow,unfollow:this.props.unfollow,users:this.props.users,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress}))}}]),t}(l.Component);t.default=Object(f.d)(Object(c.b)((function(e){return{users:h(e),pageSize:d(e),totalUsersCount:y(e),currentPage:P(e),isFetching:w(e),followingInProgress:b(e)}}),{follow:E.b,unfollow:E.e,setCurrentPage:E.d,requestUsers:E.c}))(q)}}]);
//# sourceMappingURL=4.fb4d186a.chunk.js.map