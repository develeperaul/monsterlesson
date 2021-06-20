(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],g=0,d=[];g<o.length;g++)i=o[g],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("McvTopBar"),a("router-view")],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-light"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"globalFeed"}}},[t._v(" MediumClone ")]),a("ul",{staticClass:"nav navbar-nav pull-xs-right"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"globalFeed"},"active-class":"active",exact:""}},[t._v(" Home ")])],1),t.isLogedIn?[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"createArticle"},"active-class":"active"}},[a("i",{staticClass:"ion-compose"}),t._v("   New Article ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"settings"},"active-class":"active"}},[a("i",{staticClass:"ion-gear-a"}),t._v("   Settings ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"userProfile",params:{slug:t.currentUser.username}},"active-class":"active"}},[a("img",{staticClass:"user-pic",attrs:{src:t.currentUser.image}}),t._v("   "+t._s(t.currentUser.username)+" ")])],1)]:t._e(),t.isAnonymous?[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"login"},"active-class":"active"}},[t._v(" Sign in ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"register"},"active-class":"active"}},[t._v(" Sign up ")])],1)]:t._e()],2)],1)])},o=[],c=a("5530"),l=a("ade3"),u=(a("d3b7"),a("bc3a")),g=a.n(u),d=function(t){try{return JSON.parse(localStorage.getItem(t))}catch(e){console.log("Error getting from localStorage",e)}},m=function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(a){console.log("Error saving data in localStorage",a)}};g.a.defaults.baseURL="https://conduit.productionready.io/api",g.a.interceptors.request.use((function(t){var e=d("accessToken"),a=e?"Token ".concat(e):"";return t.headers.Authorization=a,t}));var p,v,f,h,b,_,C=g.a,S=function(t){return C.post("/users",{user:t})},O=function(t){return C.post("/users/login",{user:t})},F=function(){return C.get("/user")},j={register:S,login:O,getCurrentUser:F},M={isLoading:!1,isSubmitting:!1,currentUser:null,validationErrors:null,isLogedIn:null},L={registerStart:"[auth] registerStart",registerSuccess:"[auth] registerSuccess",registerFailure:"[auth] registerFailure",loginStart:"[auth] loginStart",loginSuccess:"[auth] loginSuccess",loginFailure:"[auth] loginFailure",getCurrentUserStart:"[auth] getCurrentUserStart",getCurrentUserSuccess:"[auth] getCurrentUserSuccess",getCurrentUserFailure:"[auth] getCurrentUserFailure"},P={register:"[auth] register",login:"[auth] login",getCurrentUser:"[auth] getCurrentUser"},y={currentUser:"[auth] currentUser",isLogedIn:"[auth] isLogedIn",isAnonymous:"[auth] isAnonymous"},T=(p={},Object(l["a"])(p,y.currentUser,(function(t){return t.currentUser})),Object(l["a"])(p,y.isLogedIn,(function(t){return Boolean(t.isLogedIn)})),Object(l["a"])(p,y.isAnonymous,(function(t){return!1===t.isLogedIn})),p),w=(v={},Object(l["a"])(v,L.registerStart,(function(t){t.isSubmitting=!0,t.validationErrors=null})),Object(l["a"])(v,L.registerSuccess,(function(t,e){t.isSubmitting=!1,t.currentUser=e,t.isLogedIn=!0})),Object(l["a"])(v,L.loginFailure,(function(t,e){t.isSubmitting=!1,t.validationErrors=e})),Object(l["a"])(v,L.loginStart,(function(t){t.isSubmitting=!0,t.validationErrors=null})),Object(l["a"])(v,L.loginSuccess,(function(t,e){t.isSubmitting=!1,t.currentUser=e,t.isLogedIn=!0})),Object(l["a"])(v,L.loginFailure,(function(t,e){t.isSubmitting=!1,t.validationErrors=e})),Object(l["a"])(v,L.getCurrentUserStart,(function(t){t.isLoading=!0})),Object(l["a"])(v,L.getCurrentUserSuccess,(function(t,e){t.isLoading=!1,t.currentUser=e,t.isLogedIn=!0})),Object(l["a"])(v,L.getCurrentUserFailure,(function(t){t.isLoading=!1,t.isLogedIn=!1,t.currentUser=null})),v),U=(f={},Object(l["a"])(f,P.register,(function(t,e){return new Promise((function(a){t.commit(L.registerStart),j.register(e).then((function(e){t.commit(L.registerSuccess,e.data.user),m("accessToken",e.data.user.token),a(e.data.user)})).catch((function(e){t.commit(L.registerFailure,e.response.data.errors),console.log("result errors",e)}))}))})),Object(l["a"])(f,P.login,(function(t,e){return new Promise((function(a){t.commit(L.loginStart),j.login(e).then((function(e){t.commit(L.loginSuccess,e.data.user),m("accessToken",e.data.user.token),a(e.data.user)})).catch((function(e){t.commit(L.loginFailure,e.response.data.errors),console.log("result errors",e)}))}))})),Object(l["a"])(f,P.getCurrentUser,(function(t){return new Promise((function(e){t.commit(L.getCurrentUserStart),j.getCurrentUser().then((function(a){t.commit(L.getCurrentUserSuccess,a.data.user),e(a.data.user)})).catch((function(){t.commit(L.getCurrentUserFailure)}))}))})),f),k={state:M,mutations:w,actions:U,getters:T},E=a("2f62"),x={name:"McvTopBar",computed:Object(c["a"])({},Object(E["b"])({currentUser:y.currentUser,isLogedIn:y.isLogedIn,isAnonymous:y.isAnonymous}))},A=x,$=a("2877"),N=Object($["a"])(A,i,o,!1,null,null,null),R=N.exports,I={name:"McvApp",components:{McvTopBar:R},mounted:function(){this.$store.dispatch(P.getCurrentUser)}},B=I,q=Object($["a"])(B,n,s,!1,null,null,null),V=q.exports,D=a("8c4f"),G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-page"},[a("McvBanner"),a("div",{staticClass:"container page"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-9"},[a("McvFeedToggler"),a("McvFeed",{attrs:{apiURL:t.apiURL}})],1),a("div",{staticClass:"col-md-3"},[a("McvPopularTag",{attrs:{apiURL:t.apiURL}})],1)])])],1)},J=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isLoading?a("McvLoading"):t._e(),t.error?a("McvMessage"):t._e(),t.feed?a("div",[t._l(t.feed.articles,(function(e,r){return a("div",{key:r,staticClass:"article-preview"},[a("div",{staticClass:"article-meta"},[a("router-link",{attrs:{to:{name:"userProfile",params:{slug:e.author.username}}}},[a("img",{attrs:{src:e.author.image}})]),a("div",{staticClass:"info"},[a("router-link",{staticClass:"author",attrs:{to:{name:"userProfile",params:{slug:e.author.username}}}},[t._v(" "+t._s(e.author.username)+" ")]),a("span",{staticClass:"date"},[t._v(t._s(e.createdAt))])],1),a("div",{staticClass:"pull-xs-right"},[t._v(" ADD TO FAVORITES ")])],1),a("router-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:e.slug}}}},[a("h1",[t._v(t._s(e.title))]),a("p",[t._v(t._s(e.description))]),a("span",[t._v("Read more ...")]),t._v(" TAG LIST ")])],1)})),a("McvPagination",{attrs:{total:t.feed.articlesCount,limit:t.limit,currentPage:t.currentPage,url:t.BaseUrl}})],2):t._e()],1)},Y=[],z=(a("a9e3"),a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"pagination"},t._l(t.pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.currentPage===e}},[a("router-link",{staticClass:"page-link",attrs:{to:{path:t.url,query:{page:e}}}},[t._v(" "+t._s(e)+" ")])],1)})),0)}),K=[],Q=a("2909"),W=(a("d81d"),a("ddb0"),function(t,e){return Object(Q["a"])(Array(e).keys()).map((function(e){return e+t}))}),X={name:"McvPagination",props:{total:{type:Number,required:!0},limit:{type:Number,required:!0},currentPage:{type:Number,required:!0},url:{type:String,required:!0}},computed:{pages:function(){var t=Math.ceil(this.total/this.limit);return W(1,t)}}},Z=X,tt=Object($["a"])(Z,z,K,!1,null,null,null),et=tt.exports,at=function(t){return C.get(t)},rt={getFeed:at},nt={data:null,isLoading:!1,error:null},st={getFeedStart:"[feed] getFeedStart",getFeedSuccess:"[feed] getFeedSuccess",getFeedFailure:"[feed] getFeedFailure"},it={getFeed:"[feed] getFeed"},ot=(h={},Object(l["a"])(h,st.getFeedStart,(function(t){t.isLoading=!0,t.data=null})),Object(l["a"])(h,st.getFeedSuccess,(function(t,e){t.isLoading=!1,t.data=e})),Object(l["a"])(h,st.getFeedFailure,(function(t){t.isLoading=!1})),h),ct=Object(l["a"])({},it.getFeed,(function(t,e){var a=e.apiURL;return new Promise((function(e){t.commit(st.getFeedStart),rt.getFeed(a).then((function(a){t.commit(st.getFeedSuccess,a.data),console.log(e)})).catch((function(){t.commit(st.getFeedFailure)}))}))})),lt={state:nt,actions:ct,mutations:ot},ut=10,gt=a("72bf"),dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" ...Loading ")])},mt=[],pt={name:"McvLoading"},vt=pt,ft=Object($["a"])(vt,dt,mt,!1,null,null,null),ht=ft.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" "+t._s(t.massage)+" ")])},_t=[],Ct={name:"McvMessage",props:{message:{required:!1,type:String,default:"Something went wrong"}}},St=Ct,Ot=Object($["a"])(St,bt,_t,!1,null,null,null),Ft=Ot.exports,jt={name:"McvFeed",components:{McvPagination:et,McvLoading:ht,McvMessage:Ft},props:{apiURL:{required:!0,type:String}},data:function(){return{limit:ut}},computed:Object(c["a"])(Object(c["a"])({},Object(E["c"])({isLoading:function(t){return t.feed.isLoading},feed:function(t){return t.feed.data},error:function(t){return t.feed.error}})),{},{currentPage:function(){return Number(this.$route.query.page||"1")},BaseUrl:function(){return this.$route.path},offset:function(){return this.currentPage*ut-ut}}),methods:{fetchFeed:function(){var t=Object(gt["parseUrl"])(this.apiURL),e=Object(gt["stringify"])(Object(c["a"])({limit:ut,offset:this.offset},t.query));console.log(e);var a="".concat(t.url,"?").concat(e);this.$store.dispatch(it.getFeed,{apiURL:a})}},mounted:function(){this.fetchFeed()},watch:{currentPage:function(){this.fetchFeed()}}},Mt=jt,Lt=Object($["a"])(Mt,H,Y,!1,null,null,null),Pt=Lt.exports,yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isLoading?a("div",[t._v("...Loading")]):t._e(),t.error?a("div",[t._v(" Something bad happened ")]):t._e(),t.popularTags?a("div",{staticClass:"sidebar"},[a("p",[t._v("Popular Tags")]),a("div",{staticClass:"tag-list"},t._l(t.popularTags,(function(e){return a("router-link",{key:e,staticClass:"tag-default tag-pill",attrs:{to:{name:"tag",params:{slug:e}}}},[t._v(" "+t._s(e)+" ")])})),1)]):t._e()])},Tt=[],wt=function(){return C.get("tags").then((function(t){return t.data.tags}))},Ut={getPopularTags:wt},kt={data:null,isLoading:!1,error:null},Et={getPopularTagsStart:"[popularTags] getPopularTagsStart",getPopularTagsSuccess:"[popularTags] getPopularTagsSuccess",getPopularTagsFailure:"[popularTags] getPopularTagsFailure"},xt={getPopularTags:"[popularTags] getPopularTags"},At=(b={},Object(l["a"])(b,Et.getPopularTagsStart,(function(t){t.isLoading=!0,t.data=null})),Object(l["a"])(b,Et.getPopularTagsSuccess,(function(t,e){t.isLoading=!1,t.data=e})),Object(l["a"])(b,Et.getPopularTagsFailure,(function(t){t.isLoading=!1})),b),$t=Object(l["a"])({},xt.getPopularTags,(function(t){return new Promise((function(e){t.commit(Et.getPopularTagsStart),Ut.getPopularTags().then((function(a){t.commit(Et.getPopularTagsSuccess,a),e(a)})).catch((function(){t.commit(Et.getPopularTagsFailure)}))}))})),Nt={state:kt,actions:$t,mutations:At},Rt={name:"McvPopularTag",computed:Object(c["a"])({},Object(E["c"])({isLoading:function(t){return t.popularTags.isLoading},error:function(t){return t.popularTags.error},popularTags:function(t){return t.popularTags.data}})),mounted:function(){this.$store.dispatch(xt.getPopularTags)}},It=Rt,Bt=Object($["a"])(It,yt,Tt,!1,null,null,null),qt=Bt.exports,Vt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Dt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner"},[a("div",{staticClass:"container"},[a("h1",[t._v("Medium Clone")]),a("p",[t._v("A place to share knowledge")])])])}],Gt={name:"McvBanner"},Jt=Gt,Ht=Object($["a"])(Jt,Vt,Dt,!1,null,null,null),Yt=Ht.exports,zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"feed-toggle"},[a("ul",{staticClass:"nav nav-pills outline-active"},[t.isLogedIn?a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",class:{active:"yourFeed"===t.routName},attrs:{to:{name:"yourFeed"}}},[t._v(" YourFeed ")])],1):t._e(),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",class:{active:"globalFeed"===t.routName},attrs:{to:{name:"globalFeed"}}},[t._v(" GlobalFeed ")])],1),t.tagName?a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",class:{active:"tag"===t.routName},attrs:{to:{name:"tag"}}},[a("i",{staticClass:"ion-pound"}),t._v(" "+t._s(t.tagName)+" ")])],1):t._e()])])},Kt=[],Qt=(a("b0c0"),{name:"McvFeedToggler",props:{tagName:{type:String,required:!1}},computed:Object(c["a"])(Object(c["a"])({},Object(E["b"])({isLogedIn:y.isLogedIn})),{},{routName:function(){return this.$route.name}})}),Wt=Qt,Xt=Object($["a"])(Wt,zt,Kt,!1,null,null,null),Zt=Xt.exports,te={name:"McvGlobaLFeed",components:{McvFeed:Pt,McvPopularTag:qt,McvBanner:Yt,McvFeedToggler:Zt},data:function(){return{apiURL:"/articles"}}},ee=te,ae=Object($["a"])(ee,G,J,!1,null,null,null),re=ae.exports,ne=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-page"},[a("McvBanner"),a("div",{staticClass:"container page"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-9"},[a("McvFeedToggler"),a("McvFeed",{attrs:{apiURL:t.apiURL}})],1),a("div",{staticClass:"col-md-3"},[a("McvPopularTag",{attrs:{apiURL:t.apiURL}})],1)])])],1)},se=[],ie={name:"McvYouFeed",components:{McvFeed:Pt,McvPopularTag:qt,McvBanner:Yt,McvFeedToggler:Zt},data:function(){return{apiURL:"/articles/feed"}}},oe=ie,ce=Object($["a"])(oe,ne,se,!1,null,null,null),le=ce.exports,ue=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-page"},[a("McvBanner"),a("div",{staticClass:"container page"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-9"},[a("McvFeedToggler",{attrs:{tagName:t.tagName}}),a("McvFeed",{attrs:{apiURL:t.apiURL}})],1),a("div",{staticClass:"col-md-3"},[a("McvPopularTag")],1)])])],1)},ge=[],de={name:"McvTagFeed",components:{McvFeed:Pt,McvPopularTag:qt,McvBanner:Yt,McvFeedToggler:Zt},computed:{tagName:function(){return this.$route.params.slug},apiURL:function(){return"./articles?tag=".concat(this.tagName)}}},me=de,pe=Object($["a"])(me,ue,ge,!1,null,null,null),ve=pe.exports,fe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auth-page ng-scope"},[a("div",{staticClass:"container page"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[a("h1",{staticClass:"text-xs-center ng-binding"},[t._v("Sign up")]),a("p",{staticClass:"text-xs-center"},[a("router-link",{attrs:{to:{name:"login"}}},[t._v(" Need an account? ")])],1),t.validationErrors?a("McvValidationError",{attrs:{validationErrors:t.validationErrors}}):t._e(),a("form",{staticClass:"ng-pristine ng-valid ng-valid-email",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[a("fieldset",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),a("fieldset",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("fieldset",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("button",{staticClass:"btn btn-lg btn-primary pull-xs-right",attrs:{disabled:t.isSubmitting}},[t._v("Sign up ")])]),t._v(" "+t._s(t.isSubmitting)+" ")],1)])])])},he=[],be=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"error-messages"},t._l(t.errorMessages,(function(e){return a("li",{key:e},[t._v(" "+t._s(e)+" ")])})),0)},_e=[],Ce=(a("b64b"),a("a15b"),{name:"McvValidationError",props:{validationErrors:{type:Object,required:!0}},computed:{errorMessages:function(){var t=this;return Object.keys(this.validationErrors).map((function(e){var a=t.validationErrors[e].join(", ");return"".concat(e," ").concat(a)}))}}}),Se=Ce,Oe=Object($["a"])(Se,be,_e,!1,null,null,null),Fe=Oe.exports,je={name:"McvRegister",components:{McvValidationError:Fe},data:function(){return{email:"",password:"",username:""}},computed:Object(c["a"])({},Object(E["c"])({isSubmitting:function(t){return t.auth.isSubmitting},validationErrors:function(t){return t.auth.validationErrors}})),methods:{onSubmit:function(){var t=this;console.log("submited"),this.$store.dispatch(P.register,{email:this.email,username:this.username,password:this.password}).then((function(e){console.log("successfully register user",e),t.$router.push({name:"globalFeed"})}))}}},Me=je,Le=Object($["a"])(Me,fe,he,!1,null,null,null),Pe=Le.exports,ye=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auth-page ng-scope"},[a("div",{staticClass:"container page"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[a("h1",{staticClass:"text-xs-center ng-binding"},[t._v("Sign in")]),a("p",{staticClass:"text-xs-center"},[a("router-link",{attrs:{to:{name:"register"}}},[t._v(" Need an account? ")])],1),t.validationErrors?a("McvValidationError",{attrs:{validationErrors:t.validationErrors}}):t._e(),a("form",{staticClass:"ng-pristine ng-valid ng-valid-email",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[a("fieldset",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("fieldset",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("button",{staticClass:"btn btn-lg btn-primary pull-xs-right",attrs:{disabled:t.isSubmitting}},[t._v("Sign in ")])]),t._v(" "+t._s(t.isSubmitting)+" ")],1)])])])},Te=[],we={name:"McvRegister",components:{McvValidationError:Fe},data:function(){return{email:"",password:""}},computed:Object(c["a"])({},Object(E["c"])({isSubmitting:function(t){return t.auth.isSubmitting},validationErrors:function(t){return t.auth.validationErrors}})),methods:{onSubmit:function(){var t=this;console.log("submited"),this.$store.dispatch(P.login,{email:this.email,password:this.password}).then((function(){console.log("Hi Ural"),t.$router.push({name:"globalFeed"})}))}}},Ue=we,ke=Object($["a"])(Ue,ye,Te,!1,null,null,null),Ee=ke.exports,xe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"banner"},[t.article?a("div",{staticClass:"container"},[a("h1",[t._v(t._s(t.article.title))]),a("div",{staticClass:"article-meta"},[a("router-link",{attrs:{to:{name:"userProfile",params:{slug:t.article.author.username}}}},[a("img",{attrs:{src:t.article.author.image}})]),a("div",{staticClass:"info"},[a("router-link",{attrs:{to:{name:"userProfile",params:{slug:t.article.author.username}}}},[t._v(" "+t._s(t.article.author.username)+" ")]),a("span",{staticClass:"date"},[t._v(" "+t._s(t.article.createdAt)+" ")])],1),a("span",[a("router-link",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{to:{name:"editArticle",params:{slug:t.article.slug}}}},[a("i",{staticClass:"ion-edit"}),t._v(" Edit Article ")]),t._m(0)],1)],1)]):t._e()]),a("div",{staticClass:"container page"},[t.isLoading?a("McvLoading"):t._e(),t.error?a("McvMessage"):t._e(),a("div",{staticClass:"col-xs-12"},[a("div",[a("p",[t._v(" "+t._s(t.article.body)+" ")])]),t._v(" TAGLIST ")])],1)])},Ae=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn btn-outline-danger btn-sm"},[a("i",{staticClass:"ion-trash-a"}),t._v(" Delete Article ")])}],$e=function(t){return C.get("articles/".concat(t)).then((function(t){return t.data.article}))},Ne={getArticle:$e},Re={data:null,isLoading:!1,error:null},Ie={getArticleStart:"[article] getArticleStart",getArticleSuccess:"[article] getArticleSuccess",getArticleFailure:"[article] getArticleFailure"},Be={getArticle:"[article] getArticle"},qe=(_={},Object(l["a"])(_,Ie.getArticleStart,(function(t){t.isLoading=!0,t.data=null})),Object(l["a"])(_,Ie.getArticleSuccess,(function(t,e){t.isLoading=!1,t.data=e})),Object(l["a"])(_,Ie.getArticleFailure,(function(t){t.isLoading=!1})),_),Ve=Object(l["a"])({},Be.getArticle,(function(t,e){var a=e.slug;return new Promise((function(e){t.commit(Ie.getArticleStart),Ne.getArticle(a).then((function(a){t.commit(Ie.getArticleSuccess,a),e(a)})).catch((function(){t.commit(Ie.getArticleFailure)}))}))})),De={state:Re,actions:Ve,mutations:qe},Ge={name:"McvArticle",components:{McvLoading:ht,McvMessage:Ft},computed:Object(c["a"])({},Object(E["c"])({isLoading:function(t){return t.article.isLoading},error:function(t){return t.article.error},article:function(t){return t.article.data}})),mounted:function(){this.$store.dispatch(Be.getArticle,{slug:this.$route.params.slug})}},Je=Ge,He=Object($["a"])(Je,xe,Ae,!1,null,null,null),Ye=He.exports;r["a"].use(D["a"]);var ze=[{path:"/register",name:"register",component:Pe},{path:"/login",name:"login",component:Ee},{path:"/",name:"globalFeed",component:re},{path:"/feed",name:"yourFeed",component:le},{path:"/tags/:slug",name:"tag",component:ve},{path:"/articles/new",name:"createArticles",component:re},{path:"/articles/:slug",name:"article",component:Ye},{path:"/articles/:slug/edit",name:"editArticle",component:re},{path:"/settings",name:"settings",component:re},{path:"/profile/:slug",name:"userProfile",component:re},{path:"/profile/:slug/favorites",name:"userProfileFavorites",component:re}],Ke=new D["a"]({routes:ze}),Qe=Ke;r["a"].use(E["a"]);var We=new E["a"].Store({state:{},mutations:{},actions:{},modules:{auth:k,feed:lt,popularTags:Nt,article:De}});r["a"].config.productionTip=!1,new r["a"]({router:Qe,store:We,render:function(t){return t(V)}}).$mount("#app")}});
//# sourceMappingURL=app.d7a00c1a.js.map