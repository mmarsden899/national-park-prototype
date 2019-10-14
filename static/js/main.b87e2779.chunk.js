(window["webpackJsonpnational-parks-prototype"]=window["webpackJsonpnational-parks-prototype"]||[]).push([[0],{36:function(e,t,a){e.exports=a(69)},41:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},65:function(e,t,a){e.exports=a.p+"static/media/forest.ba63b6bd.png"},69:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(31),i=a.n(r),c=(a(41),a(2)),o=a.n(c),l=a(9),u=a(3),p=a(4),h=a(7),m=a(6),d=a(8),f=(a(43),a(44),a(45),a(15)),k=a(13),b=a.n(k),v="https://national-parks-mm.herokuapp.com",g="http://localhost:4741",E="localhost"===window.location.hostname?g:v,O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={park:{}},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()("".concat(E,"/parks/").concat(this.props.target));case 2:t=e.sent,this.setState({park:t.data.park});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.park;return s.a.createElement("div",{className:"park-modal"},s.a.createElement("div",{className:"single-park-flex"},s.a.createElement("div",{className:"park-image-container"},s.a.createElement("img",{src:e.image,alt:"temp",className:"modal-image"})),s.a.createElement("div",{className:"park-info"},s.a.createElement("h3",{className:"modal-header"},e.name),s.a.createElement("h6",{className:"modal-sub-header"},s.a.createElement("i",null,e.location)),s.a.createElement("div",{className:"modal-resp"},s.a.createElement("p",{className:"info thirty-padding-top est"},s.a.createElement("b",null,"Established: "),e.established),s.a.createElement("p",{className:"info area"},s.a.createElement("b",null,"Area: "),e.area),s.a.createElement("p",{className:"info vis"},s.a.createElement("b",null,"Total Visitors: "),e.rec_visitors)),s.a.createElement("p",{className:"modal-park-desc"},e.description))))}}]),t}(n.Component),y=a(32),N=(0,a(70).createBrowserHistory)({basename:"/national-park-prototype"}),j=new(function(){function e(){Object(u.a)(this,e),this.auth0=new y.a.WebAuth({domain:"dev-0r9j-iz3.auth0.com",audience:"https://dev-0r9j-iz3.auth0.com/userinfo",clientID:"1HbLQ6nRcscQnN2UY5i79et3CRBQq3zQ",redirectUri:"https://mmarsden89.github.io/national-park-prototype/callback",responseType:"id_token",scope:"openid profile"}),this.getProfile=this.getProfile.bind(this),this.handleAuthentication=this.handleAuthentication.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.signIn=this.signIn.bind(this),this.signOut=this.signOut.bind(this)}return Object(p.a)(e,[{key:"getProfile",value:function(){return this.profile}},{key:"getIdToken",value:function(){return this.idToken}},{key:"isAuthenticated",value:function(){var e=JSON.parse(localStorage.getItem("expires_at"));return(new Date).getTime()<this.expiresAt&&(new Date).getTime()<e}},{key:"signIn",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var e=this;this.auth0.parseHash((function(t,a){a||a.idToken?e.setSession(a):t&&N.replace("/")})),N.replace("/")}},{key:"setSession",value:function(e){this.idToken=e.idToken,this.profile=e.idTokenPayload,this.accessToken=e.accessToken,this.expiresAt=1e3*e.idTokenPayload.exp,localStorage.setItem("profile",e.idTokenPayload),localStorage.setItem("access_token",e.accessToken),localStorage.setItem("id_token",e.idToken),localStorage.setItem("expires_at",1e3*e.idTokenPayload.exp)}},{key:"signOut",value:function(){this.auth0.logout({returnTo:"https://mmarsden89.github.io/national-park-prototype",clientID:"1HbLQ6nRcscQnN2UY5i79et3CRBQq3zQ"}),localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),N.replace("/")}},{key:"silentAuth",value:function(){var e=this;return new Promise((function(t,a){e.auth0.checkSession({},(function(n,s){if(n)return a(n);e.setSession(s),t()}))}))}}]),e}()),x=a(10),w=a(11),A=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).openModal=function(e){a.setState({modal:!a.state.modal,selectedTarget:e.currentTarget.id})},a.closeModal=function(){a.state.modal&&a.setState({modal:!1})},a.handleVisit=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.id,s=a.state.user.list.indexOf(n),-1!==a.state.user.list?a.state.user.list.splice(s,1):a.state.user.list.push(n),e.next=5,b()({url:E+"/Users/".concat(a.props.auth.getProfile().nickname),method:"PATCH",data:{user:{list:n}}});case 5:a.getUser();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.visited=function(){var e=a.state.parks.filter((function(e){return a.state.user.list.includes(e._id)}));a.setState({filter:e})},a.notVisited=function(){var e=a.state.parks.filter((function(e){return!a.state.user.list.includes(e._id)}));a.setState({filter:e})},a.all=function(){a.setState({filter:a.state.parks})},a.state={parks:[],filter:[],modal:!1,selectedTarget:"",user:{list:[]}},a.getUser=a.getUser.bind(Object(f.a)(a)),a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("hm"),e.next=3,b()("".concat(E,"/parks"));case 3:return t=e.sent,this.setState({parks:t.data.parks,filter:t.data.parks}),e.next=7,this.getUser();case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"shouldComponentUpdate",value:function(e,t){return console.log(t.user,this.state.user),t.user!==this.state.user||e!==this.props}},{key:"getUser",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(this.props.auth.isAuthenticated()),!this.props.auth.isAuthenticated()){e.next=6;break}return e.next=4,b()("".concat(E,"/users/").concat(this.props.auth.getProfile().nickname));case 4:(t=e.sent).data.User.length<1?this.createUser().then(this.getUser):this.setState({user:t.data.User[0]});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createUser",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()({url:E+"/users",method:"POST",data:{user:{nickname:this.props.auth.getProfile().nickname}}});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.filter,a=this.state.user.list,n=s.a.createElement("div",{className:"filler"}),r=s.a.createElement("div",{className:"filter-buttons-div"},s.a.createElement("button",{onClick:this.all,className:"filter-buttons"},"All"),s.a.createElement("button",{onClick:this.visited,className:"filter-buttons"},"Visted"),s.a.createElement("button",{onClick:this.notVisited,className:"filter-buttons"},"Not-Visited")),i=t.map((function(t){return s.a.createElement("div",{key:t._id,id:t._id,className:"parks"},e.props.auth.isAuthenticated()?a.includes(t._id)?s.a.createElement(x.a,{icon:w.b,onClick:e.handleVisit,id:t._id,className:"plusOrMinus"}):s.a.createElement(x.a,{icon:w.c,onClick:e.handleVisit,id:t._id,className:"plusOrMinus"}):null,s.a.createElement("div",{className:"park-container",onClick:e.openModal,id:t._id},s.a.createElement("img",{src:t.thumbnail,alt:"thumbnail of "+t.name,className:"park-thumbnail"}),s.a.createElement("div",{className:"info-grid"},s.a.createElement("p",{className:"park-name"},t.name," National Park"),s.a.createElement("p",{className:"info"}," ",s.a.createElement("b",null,"Location:")," ",t.location," ",s.a.createElement("b",null,"Founded:")," ",t.established),s.a.createElement("p",{className:"info"}," ",s.a.createElement("b",null,"Total Area:")," ",t.area," ",s.a.createElement("b",null,"Total Visitors:")," ",t.rec_visitors),s.a.createElement("p",{className:"info desc"},t.description))))}));return s.a.createElement("div",{className:"container",onClick:this.closeModal},this.props.auth.isAuthenticated()?r:n,i,this.state.modal?s.a.createElement(O,{target:this.state.selectedTarget}):null)}}]),t}(n.Component),S=a(72),T=a(73),C=a(65),U=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"header-app"},s.a.createElement("img",{src:C,alt:"",className:"image-header"}),s.a.createElement("h1",{className:"logo-text"},"NATIONAL PARKS"))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={authenticated:!1},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){j.isAuthenticated()&&this.setState({authenticated:!0})}},{key:"shouldComponentUpdate",value:function(e,t){return t!==this.state||e!==this.props}},{key:"signOut",value:function(){j.signOut()}},{key:"render",value:function(){return s.a.createElement("nav",{className:"navbar"},s.a.createElement("div",{className:"navbar-container"},!this.props.auth.isAuthenticated()&&s.a.createElement(x.a,{icon:w.d,className:"signout",onClick:j.signIn}),this.props.auth.isAuthenticated()&&s.a.createElement("div",{className:"profile-area"},s.a.createElement("label",{className:"nickname"},this.props.auth.getProfile().nickname),s.a.createElement(x.a,{icon:w.e,onClick:function(){j.signOut()},className:"signout"}))),s.a.createElement("div",{className:"gradient"}))}}]),t}(n.Component),I=Object(T.a)(_),P=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.handleAuthentication();case 2:N.replace("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",{className:"callback-load"},s.a.createElement("p",null,"Loading profile..."))}}]),t}(n.Component),M=Object(T.a)(P),D=a(35),V=a.n(D);var Q=function(){return s.a.createElement(V.a,{showUnder:160,duration:1500,easing:"easeInOutCubic",style:{transitionDuration:"1s"}},s.a.createElement(x.a,{icon:w.a,className:"scrollUp"}))},z=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={checkingSession:!0},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("/callback"!==this.props.location.pathname){e.next=3;break}return this.setState({checkingSession:!1}),e.abrupt("return");case 3:return e.prev=3,e.next=6,j.silentAuth();case 6:this.forceUpdate(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),"login_required"!==e.t0.error&&console.log(e.t0.error);case 12:this.setState({checkingSession:!1});case 13:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(I,{auth:j}),s.a.createElement(Q,null),s.a.createElement("div",{className:"App-body"},s.a.createElement(U,null),s.a.createElement(A,{auth:j}),s.a.createElement(S.a,{path:"/callback",render:function(e){return j.handleAuthentication(e),s.a.createElement(M,e)}})))}}]),t}(n.Component),H=Object(T.a)(z),L=a(74),R=s.a.createElement(L.a,{history:N},s.a.createElement(H,null));i.a.render(R,document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.b87e2779.chunk.js.map