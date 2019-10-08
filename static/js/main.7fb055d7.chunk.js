(window["webpackJsonpnational-parks-prototype"]=window["webpackJsonpnational-parks-prototype"]||[]).push([[0],{36:function(e,t,a){e.exports=a(68)},41:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(31),s=a.n(i),c=(a(41),a(2)),l=a.n(c),o=a(6),u=a(4),m=a(5),d=a(8),h=a(7),p=a(9),f=(a(43),a(44),a(45),a(15)),k=a(13),b=a.n(k),v="https://national-parks-mm.herokuapp.com",g="http://localhost:4741",E="localhost"===window.location.hostname?g:v,N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={park:{}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()("".concat(E,"/parks/").concat(this.props.target));case 2:t=e.sent,this.setState({park:t.data.park});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.park;return r.a.createElement("div",{className:"park-modal"},r.a.createElement("div",{className:"single-park-flex"},r.a.createElement("div",{className:"park-image-container"},r.a.createElement("img",{src:e.image,alt:"temp",className:"modal-image"})),r.a.createElement("div",{className:"park-info"},r.a.createElement("h3",{className:"modal-header"},e.name),r.a.createElement("h6",{className:"modal-sub-header"},r.a.createElement("i",null,e.location)),r.a.createElement("div",{className:"modal-resp"},r.a.createElement("p",{className:"info thirty-padding-top est"},r.a.createElement("b",null,"Established: "),e.established),r.a.createElement("p",{className:"info area"},r.a.createElement("b",null,"Area: "),e.area),r.a.createElement("p",{className:"info vis"},r.a.createElement("b",null,"Total Visitors: "),e.rec_visitors)),r.a.createElement("p",{className:"modal-park-desc"},e.description))))}}]),t}(n.Component),O=a(32),y=new(function(){function e(t){Object(u.a)(this,e),this.auth0=new O.a.WebAuth({domain:"dev-0r9j-iz3.auth0.com",audience:"https://dev-0r9j-iz3.auth0.com/userinfo",clientID:"1HbLQ6nRcscQnN2UY5i79et3CRBQq3zQ",redirectUri:"https://mmarsden89.github.io/national-park-prototype/#/callback",responseType:"id_token",scope:"openid profile"}),this.getProfile=this.getProfile.bind(this),this.handleAuthentication=this.handleAuthentication.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.signIn=this.signIn.bind(this),this.signOut=this.signOut.bind(this)}return Object(m.a)(e,[{key:"getProfile",value:function(){return this.profile}},{key:"getIdToken",value:function(){return this.idToken}},{key:"isAuthenticated",value:function(){return(new Date).getTime()<this.expiresAt}},{key:"signIn",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var e=this;return new Promise((function(t,a){e.auth0.parseHash((function(n,r){return n?a(n):r&&r.idToken?(e.setSession(r),void t()):a(n)}))}))}},{key:"setSession",value:function(e){this.idToken=e.idToken,this.profile=e.idTokenPayload,this.expiresAt=1e3*e.idTokenPayload.exp}},{key:"signOut",value:function(){this.auth0.logout({returnTo:"https://mmarsden89.github.io/national-park-prototype/",clientID:"1HbLQ6nRcscQnN2UY5i79et3CRBQq3zQ"})}},{key:"silentAuth",value:function(){var e=this;return new Promise((function(t,a){e.auth0.checkSession({},(function(n,r){if(n)return a(n);e.setSession(r),t()}))}))}}]),e}()),j=a(11),w=a(12),A=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).openModal=function(e){a.setState({modal:!a.state.modal,selectedTarget:e.currentTarget.id})},a.closeModal=function(){a.state.modal&&a.setState({modal:!1})},a.handleVisit=function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.id,e.next=3,b()({url:E+"/Users/".concat(a.state.user.nickname),method:"PATCH",data:{user:{list:n}}});case 3:a.getUser();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.visited=function(){var e=a.state.parks.filter((function(e){return a.state.user.list.includes(e._id)}));a.setState({filter:e})},a.notVisited=function(){var e=a.state.parks.filter((function(e){return!a.state.user.list.includes(e._id)}));a.setState({filter:e})},a.all=function(){a.setState({filter:a.state.parks})},a.state={parks:[],filter:[],modal:!1,selectedTarget:"",user:{list:[]}},a.getUser=a.getUser.bind(Object(f.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()("".concat(E,"/parks"));case 2:t=e.sent,this.setState({parks:t.data.parks,filter:t.data.parks}),a={list:[]},this.setState({user:a}),this.getUser();case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y.isAuthenticated()){e.next=8;break}return clearInterval(window.interval),e.next=4,b()("".concat(E,"/users/").concat(y.getProfile().nickname));case 4:(t=e.sent).data.User.length<1?this.createUser().then(this.getUser):this.setState({user:t.data.User[0]}),e.next=9;break;case 8:window.interval=setInterval(this.getUser,1e3);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createUser",value:function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()({url:E+"/users",method:"POST",data:{user:{nickname:y.getProfile().nickname}}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.filter,a=this.state.user.list,n=r.a.createElement("div",{className:"filler"}),i=r.a.createElement("div",{className:"filter-buttons-div"},r.a.createElement("button",{onClick:this.all,className:"filter-buttons"},"All"),r.a.createElement("button",{onClick:this.visited,className:"filter-buttons"},"Visted"),r.a.createElement("button",{onClick:this.notVisited,className:"filter-buttons"},"Not-Visited")),s=t.map((function(t){return r.a.createElement("div",{key:t._id,id:t._id,className:"parks"},y.isAuthenticated()?a.includes(t._id)?r.a.createElement(j.a,{icon:w.b,onClick:e.handleVisit,id:t._id,className:"plusOrMinus"}):r.a.createElement(j.a,{icon:w.c,onClick:e.handleVisit,id:t._id,className:"plusOrMinus"}):null,r.a.createElement("div",{className:"park-container",onClick:e.openModal,id:t._id},r.a.createElement("img",{src:t.thumbnail,alt:"thumbnail of "+t.name,className:"park-thumbnail"}),r.a.createElement("div",{className:"info-grid"},r.a.createElement("p",{className:"park-name"},t.name," National Park"),r.a.createElement("p",{className:"info"}," ",r.a.createElement("b",null,"Location:")," ",t.location," ",r.a.createElement("b",null,"Founded:")," ",t.established),r.a.createElement("p",{className:"info"}," ",r.a.createElement("b",null,"Total Area:")," ",t.area," ",r.a.createElement("b",null,"Total Visitors:")," ",t.rec_visitors),r.a.createElement("p",{className:"info desc"},t.description))))}));return r.a.createElement("div",{className:"container",onClick:this.closeModal},y.isAuthenticated()?i:n,s,this.state.modal?r.a.createElement(N,{target:this.state.selectedTarget}):null)}}]),t}(n.Component),x=a(70),S=a(72),T=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header-app"},r.a.createElement("img",{src:"https://img.pngio.com/forest-silhouette-png-101-images-in-collection-page-2-forest-silhouette-png-1400_471.png",alt:"",className:"image-header"}),r.a.createElement("h1",{className:"logo-text"},"NATIONAL PARKS"))}}]),t}(n.Component);var C=Object(S.a)((function(e){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container"},!y.isAuthenticated()&&r.a.createElement(j.a,{icon:w.d,className:"signout",onClick:y.signIn}),y.isAuthenticated()&&r.a.createElement("div",{className:"profile-area"},r.a.createElement("label",{className:"nickname"},y.getProfile().nickname),r.a.createElement(j.a,{icon:w.e,onClick:function(){y.signOut(),e.history.replace("/")},className:"signout"}))),r.a.createElement("div",{className:"gradient"}))})),U=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.handleAuthentication();case 2:this.props.history.replace("/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"callback-load"},r.a.createElement("p",null,"Loading profile..."))}}]),t}(n.Component),P=Object(S.a)(U),_=a(35),I=a.n(_);var M=function(){return r.a.createElement(I.a,{showUnder:160,duration:1500,easing:"easeInOutCubic",style:{transitionDuration:"1s"}},r.a.createElement(j.a,{icon:w.a,className:"scrollUp"}))},V=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={checkingSession:!0},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("/callback"!==this.props.location.pathname){e.next=3;break}return this.setState({checkingSession:!1}),e.abrupt("return");case 3:return e.prev=3,e.next=6,y.silentAuth();case 6:this.forceUpdate(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),"login_required"!==e.t0.error&&console.log(e.t0.error);case 12:this.setState({checkingSession:!1});case 13:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,null),r.a.createElement(M,null),r.a.createElement("div",{className:"App-body"},r.a.createElement(T,null),r.a.createElement(A,null),r.a.createElement(x.a,{exact:!0,path:"/callback",component:P})))}}]),t}(n.Component),D=Object(S.a)(V),Q=a(71),z=r.a.createElement(Q.a,null,r.a.createElement(D,null));s.a.render(z,document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.7fb055d7.chunk.js.map