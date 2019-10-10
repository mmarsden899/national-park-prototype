(window["webpackJsonpnational-parks-prototype"]=window["webpackJsonpnational-parks-prototype"]||[]).push([[0],{36:function(e,t,a){e.exports=a(69)},41:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},65:function(e,t,a){e.exports=a.p+"static/media/forest.ba63b6bd.png"},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(31),s=a.n(i),c=(a(41),a(2)),o=a.n(c),l=a(9),u=a(3),h=a(4),m=a(7),p=a(6),d=a(8),f=(a(43),a(44),a(45),a(15)),b=a(13),k=a.n(b),v="https://national-parks-mm.herokuapp.com",E="http://localhost:4741",g="localhost"===window.location.hostname?E:v,O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={park:{}},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()("".concat(g,"/parks/").concat(this.props.target));case 2:t=e.sent,this.setState({park:t.data.park});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.park;return r.a.createElement("div",{className:"park-modal"},r.a.createElement("div",{className:"single-park-flex"},r.a.createElement("div",{className:"park-image-container"},r.a.createElement("img",{src:e.image,alt:"temp",className:"modal-image"})),r.a.createElement("div",{className:"park-info"},r.a.createElement("h3",{className:"modal-header"},e.name),r.a.createElement("h6",{className:"modal-sub-header"},r.a.createElement("i",null,e.location)),r.a.createElement("div",{className:"modal-resp"},r.a.createElement("p",{className:"info thirty-padding-top est"},r.a.createElement("b",null,"Established: "),e.established),r.a.createElement("p",{className:"info area"},r.a.createElement("b",null,"Area: "),e.area),r.a.createElement("p",{className:"info vis"},r.a.createElement("b",null,"Total Visitors: "),e.rec_visitors)),r.a.createElement("p",{className:"modal-park-desc"},e.description))))}}]),t}(n.Component),N=a(10),j=a(11),y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).openModal=function(e){a.setState({modal:!a.state.modal,selectedTarget:e.currentTarget.id})},a.closeModal=function(){a.state.modal&&a.setState({modal:!1})},a.handleVisit=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.id,e.next=3,k()({url:g+"/Users/".concat(a.state.user.nickname),method:"PATCH",data:{user:{list:n}}});case 3:a.getUser();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.visited=function(){var e=a.state.parks.filter((function(e){return a.state.user.list.includes(e._id)}));a.setState({filter:e})},a.notVisited=function(){var e=a.state.parks.filter((function(e){return!a.state.user.list.includes(e._id)}));a.setState({filter:e})},a.all=function(){a.setState({filter:a.state.parks})},a.state={parks:[],filter:[],modal:!1,selectedTarget:"",user:{list:[]}},a.getUser=a.getUser.bind(Object(f.a)(a)),a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()("".concat(g,"/parks"));case 2:t=e.sent,this.setState({parks:t.data.parks,filter:t.data.parks}),a={list:[]},this.setState({user:a}),this.getUser();case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.auth.isAuthenticated()){e.next=8;break}return clearInterval(window.interval),e.next=4,k()("".concat(g,"/users/").concat(this.props.auth.getProfile().nickname));case 4:(t=e.sent).data.User.length<1?this.createUser().then(this.getUser):this.setState({user:t.data.User[0]}),e.next=9;break;case 8:window.interval=setInterval(this.getUser,1e3);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createUser",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()({url:g+"/users",method:"POST",data:{user:{nickname:this.props.auth.getProfile().nickname}}});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.filter,a=this.state.user.list,n=r.a.createElement("div",{className:"filler"}),i=r.a.createElement("div",{className:"filter-buttons-div"},r.a.createElement("button",{onClick:this.all,className:"filter-buttons"},"All"),r.a.createElement("button",{onClick:this.visited,className:"filter-buttons"},"Visted"),r.a.createElement("button",{onClick:this.notVisited,className:"filter-buttons"},"Not-Visited")),s=t.map((function(t){return r.a.createElement("div",{key:t._id,id:t._id,className:"parks"},e.props.auth.isAuthenticated()?a.includes(t._id)?r.a.createElement(N.a,{icon:j.b,onClick:e.handleVisit,id:t._id,className:"plusOrMinus"}):r.a.createElement(N.a,{icon:j.c,onClick:e.handleVisit,id:t._id,className:"plusOrMinus"}):null,r.a.createElement("div",{className:"park-container",onClick:e.openModal,id:t._id},r.a.createElement("img",{src:t.thumbnail,alt:"thumbnail of "+t.name,className:"park-thumbnail"}),r.a.createElement("div",{className:"info-grid"},r.a.createElement("p",{className:"park-name"},t.name," National Park"),r.a.createElement("p",{className:"info"}," ",r.a.createElement("b",null,"Location:")," ",t.location," ",r.a.createElement("b",null,"Founded:")," ",t.established),r.a.createElement("p",{className:"info"}," ",r.a.createElement("b",null,"Total Area:")," ",t.area," ",r.a.createElement("b",null,"Total Visitors:")," ",t.rec_visitors),r.a.createElement("p",{className:"info desc"},t.description))))}));return r.a.createElement("div",{className:"container",onClick:this.closeModal},this.props.auth.isAuthenticated()?i:n,s,this.state.modal?r.a.createElement(O,{target:this.state.selectedTarget}):null)}}]),t}(n.Component),w=a(72),A=a(73),x=a(65),C=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header-app"},r.a.createElement("img",{src:x,alt:"",className:"image-header"}),r.a.createElement("h1",{className:"logo-text"},"NATIONAL PARKS"))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e!==this.props}},{key:"signOut",value:function(){this.props.auth.signOut()}},{key:"render",value:function(){var e=this.props.auth;return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container"},!e.isAuthenticated()&&r.a.createElement(N.a,{icon:j.d,className:"signout",onClick:e.signIn}),e.isAuthenticated()&&r.a.createElement("div",{className:"profile-area"},r.a.createElement("label",{className:"nickname"},e.getProfile().nickname),r.a.createElement(N.a,{icon:j.e,onClick:function(){e.signOut()},className:"signout"}))),r.a.createElement("div",{className:"gradient"}))}}]),t}(n.Component),T=Object(A.a)(S),U=(0,a(70).createBrowserHistory)({basename:"/national-park-prototype"}),P=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.auth.handleAuthentication();case 2:U.replace("/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"callback-load"},r.a.createElement("p",null,"Loading profile..."))}}]),t}(n.Component),I=Object(A.a)(P),_=a(34),M=a.n(_);var V=function(){return r.a.createElement(M.a,{showUnder:160,duration:1500,easing:"easeInOutCubic",style:{transitionDuration:"1s"}},r.a.createElement(N.a,{icon:j.a,className:"scrollUp"}))},D=a(35),Q=new(function(){function e(){Object(u.a)(this,e),this.auth0=new D.a.WebAuth({domain:"dev-0r9j-iz3.auth0.com",audience:"https://dev-0r9j-iz3.auth0.com/userinfo",clientID:"1HbLQ6nRcscQnN2UY5i79et3CRBQq3zQ",redirectUri:"https://mmarsden89.github.io/national-park-prototype/callback",responseType:"id_token",scope:"openid profile"}),this.getProfile=this.getProfile.bind(this),this.handleAuthentication=this.handleAuthentication.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.signIn=this.signIn.bind(this),this.signOut=this.signOut.bind(this)}return Object(h.a)(e,[{key:"getProfile",value:function(){return this.profile}},{key:"getIdToken",value:function(){return this.idToken}},{key:"isAuthenticated",value:function(){return(new Date).getTime()<this.expiresAt}},{key:"signIn",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var e=this;return new Promise((function(t,a){e.auth0.parseHash((function(n,r){return n?a(n):r&&r.idToken?(e.setSession(r),void t()):a(n)})),U.replace("/")}))}},{key:"setSession",value:function(e){this.idToken=e.idToken,this.profile=e.idTokenPayload,this.expiresAt=1e3*e.idTokenPayload.exp}},{key:"signOut",value:function(){this.auth0.logout({returnTo:"https://mmarsden89.github.io/national-park-prototype",clientID:"1HbLQ6nRcscQnN2UY5i79et3CRBQq3zQ"}),U.replace("/")}},{key:"silentAuth",value:function(){var e=this;return new Promise((function(t,a){e.auth0.checkSession({},(function(n,r){if(n)return a(n);e.setSession(r),t()}))}))}}]),e}()),z=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={checkingSession:!0},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.location.pathname.includes("/callback")){e.next=3;break}return this.setState({checkingSession:!1}),e.abrupt("return");case 3:return e.prev=3,e.next=6,Q.silentAuth();case 6:this.forceUpdate(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),"login_required"!==e.t0.error&&console.log(e.t0.error);case 12:this.setState({checkingSession:!1});case 13:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(T,{auth:Q}),r.a.createElement(V,null),r.a.createElement("div",{className:"App-body"},r.a.createElement(C,{auth:Q}),r.a.createElement(y,{auth:Q}),r.a.createElement(w.a,{path:"/callback",render:function(e){return r.a.createElement(I,Object.assign({},e,{auth:Q}))}})))}}]),t}(n.Component),H=Object(A.a)(z),L=a(74),R=r.a.createElement(L.a,{history:U},r.a.createElement(H,null));s.a.render(R,document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.8f84cbb2.chunk.js.map