(window["webpackJsonpnational-parks-prototype"]=window["webpackJsonpnational-parks-prototype"]||[]).push([[0],{36:function(e,t,a){e.exports=a(68)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(31),s=a.n(i),c=(a(41),a(4)),l=a(5),o=a(8),u=a(6),m=a(7),d=(a(42),a(43),a(44),a(2)),p=a.n(d),h=a(10),f=a(15),k=a(13),b=a.n(k),v="https://national-parks-mm.herokuapp.com",E="http://localhost:4741",g="localhost"===window.location.hostname?E:v,N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={park:{}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()("".concat(g,"/parks/").concat(this.props.target));case 2:t=e.sent,this.setState({park:t.data.park});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.park;return r.a.createElement("div",{className:"park-modal"},r.a.createElement("div",{className:"single-park-flex"},r.a.createElement("div",{className:"park-image-container"},r.a.createElement("img",{src:e.image,alt:"temp",className:"modal-image"})),r.a.createElement("div",{className:"park-info"},r.a.createElement("h3",{className:"modal-header"},e.name),r.a.createElement("h6",{className:"modal-sub-header"},r.a.createElement("i",null,e.location)),r.a.createElement("div",{className:"modal-resp"},r.a.createElement("p",{className:"info thirty-padding-top est"},r.a.createElement("b",null,"Established: "),e.established),r.a.createElement("p",{className:"info area"},r.a.createElement("b",null,"Area: "),e.area),r.a.createElement("p",{className:"info vis"},r.a.createElement("b",null,"Total Visitors: "),e.rec_visitors)),r.a.createElement("p",{className:"modal-park-desc"},e.description))))}}]),t}(n.Component),O=a(32),j=new(function(){function e(){Object(c.a)(this,e),this.auth0=new O.a.WebAuth({domain:"dev-0r9j-iz3.auth0.com",audience:"https://dev-0r9j-iz3.auth0.com/userinfo",clientID:"1HbLQ6nRcscQnN2UY5i79et3CRBQq3zQ",redirectUri:"http://localhost:3000/callback",responseType:"id_token",scope:"openid profile"}),this.getProfile=this.getProfile.bind(this),this.handleAuthentication=this.handleAuthentication.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.signIn=this.signIn.bind(this),this.signOut=this.signOut.bind(this)}return Object(l.a)(e,[{key:"getProfile",value:function(){return this.profile}},{key:"getIdToken",value:function(){return this.idToken}},{key:"isAuthenticated",value:function(){return(new Date).getTime()<this.expiresAt}},{key:"signIn",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var e=this;return new Promise((function(t,a){e.auth0.parseHash((function(n,r){return n?a(n):r&&r.idToken?(e.idToken=r.idToken,e.profile=r.idTokenPayload,e.expiresAt=1e3*r.idTokenPayload.exp,void t()):a(n)}))}))}},{key:"signOut",value:function(){this.idToken=null,this.profile=null,this.expiresAt=null}}]),e}()),y=a(11),w=a(12),A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).openModal=function(e){a.setState({modal:!a.state.modal,selectedTarget:e.currentTarget.id})},a.closeModal=function(){a.state.modal&&a.setState({modal:!1})},a.handleVisit=function(){var e=Object(h.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.id,e.next=3,b()({url:g+"/Users/".concat(a.state.user.nickname),method:"PATCH",data:{user:{list:n}}});case 3:a.getUser();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.visited=function(){var e=a.state.parks.filter((function(e){return a.state.user.list.includes(e._id)}));a.setState({filter:e})},a.notVisited=function(){var e=a.state.parks.filter((function(e){return!a.state.user.list.includes(e._id)}));a.setState({filter:e})},a.all=function(){a.setState({filter:a.state.parks})},a.state={parks:[],filter:[],modal:!1,selectedTarget:"",user:{list:[]}},a.getUser=a.getUser.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()("".concat(g,"/parks"));case 2:t=e.sent,this.setState({parks:t.data.parks,filter:t.data.parks}),a={list:[]},this.setState({user:a}),this.getUser();case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j.isAuthenticated()){e.next=5;break}return e.next=3,b()("".concat(g,"/users/").concat(j.getProfile().nickname));case 3:(t=e.sent).data.User.length<1?this.createUser().then(this.getUser):this.setState({user:t.data.User[0]});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createUser",value:function(){var e=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()({url:g+"/users",method:"POST",data:{user:{nickname:j.getProfile().nickname}}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.filter,a=this.state.user.list,n=r.a.createElement("div",{className:"filler"}),i=r.a.createElement("div",{className:"filter-buttons-div"},r.a.createElement("button",{onClick:this.all,className:"filter-buttons"},"All"),r.a.createElement("button",{onClick:this.visited,className:"filter-buttons"},"Visted"),r.a.createElement("button",{onClick:this.notVisited,className:"filter-buttons"},"Not-Visited")),s=t.map((function(t){return r.a.createElement("div",{key:t._id,id:t._id,className:"parks"},j.isAuthenticated()?a.includes(t._id)?r.a.createElement(y.a,{icon:w.b,onClick:e.handleVisit,id:t._id,className:"plusOrMinus"}):r.a.createElement(y.a,{icon:w.c,onClick:e.handleVisit,id:t._id,className:"plusOrMinus"}):null,r.a.createElement("div",{className:"park-container",onClick:e.openModal,id:t._id},r.a.createElement("img",{src:t.thumbnail,alt:"thumbnail of "+t.name,className:"park-thumbnail"}),r.a.createElement("div",{className:"info-grid"},r.a.createElement("p",{className:"park-name"},t.name," National Park"),r.a.createElement("p",{className:"info"}," ",r.a.createElement("b",null,"Location:")," ",t.location," ",r.a.createElement("b",null,"Founded:")," ",t.established),r.a.createElement("p",{className:"info"}," ",r.a.createElement("b",null,"Total Area:")," ",t.area," ",r.a.createElement("b",null,"Total Visitors:")," ",t.rec_visitors),r.a.createElement("p",{className:"info desc"},t.description))))}));return r.a.createElement("div",{className:"container",onClick:this.closeModal},j.isAuthenticated()?i:n,s,this.state.modal?r.a.createElement(N,{target:this.state.selectedTarget}):null)}}]),t}(n.Component),x=a(70),T=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header-app"},r.a.createElement("img",{src:"https://img.pngio.com/forest-silhouette-png-101-images-in-collection-page-2-forest-silhouette-png-1400_471.png",alt:"",className:"image-header"}),r.a.createElement("h1",{className:"logo-text"},"NATIONAL PARKS"))}}]),t}(n.Component),C=a(72);var U=Object(C.a)((function(e){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container"},!j.isAuthenticated()&&r.a.createElement(y.a,{icon:w.d,className:"signout",onClick:j.signIn}),j.isAuthenticated()&&r.a.createElement("div",{className:"profile-area"},r.a.createElement("label",{className:"nickname"},j.getProfile().nickname),r.a.createElement(y.a,{icon:w.e,onClick:function(){j.signOut(),e.history.replace("/")},className:"signout"}))),r.a.createElement("div",{className:"gradient"}))})),P=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.handleAuthentication();case 2:this.props.history.replace("/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"callback-load"},r.a.createElement("p",null,"Loading profile..."))}}]),t}(n.Component),_=Object(C.a)(P),S=a(35),I=a.n(S);var M=function(){return r.a.createElement(I.a,{showUnder:160,duration:1500,easing:"easeInOutCubic",style:{transitionDuration:"1s"}},r.a.createElement(y.a,{icon:w.a,className:"scrollUp"}))},V=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(U,null),r.a.createElement(M,null),r.a.createElement("div",{className:"App-body"},r.a.createElement(x.a,{exact:!0,path:"/",render:function(){return r.a.createElement(T,null)}}),r.a.createElement(x.a,{exact:!0,path:"/",render:function(){return r.a.createElement(A,null)}})),r.a.createElement(x.a,{exact:!0,path:"/callback",component:_}))}}]),t}(n.Component),D=a(71),z=r.a.createElement(D.a,null,r.a.createElement(V,null));s.a.render(z,document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.36e043eb.chunk.js.map