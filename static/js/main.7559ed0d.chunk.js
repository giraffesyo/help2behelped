(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,n,t){e.exports=t(42)},37:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(19),o=t.n(c),u=t(2),i=t(3),l=t(5),s=t(4),m=t(6),f=t(44),p=t(46),b=t(45),d=(t(29),t(43)),h=function(e){function n(){return Object(u.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,{to:"/home"},"Click here to login"))}}]),n}(r.a.PureComponent),j=t(9),O=t(8);function v(){var e=Object(j.a)(["\n  background-color: #fff;\n  border: 0;\n  color: blue !important;\n"]);return v=function(){return e},e}function E(){var e=Object(j.a)(["\n  width: 50%;\n  margin: 0.5rem 0;\n  input {\n    padding: 0.5rem;\n  }\n"]);return E=function(){return e},e}function g(){var e=Object(j.a)(["\n  background-color: green;\n"]);return g=function(){return e},e}function y(){var e=Object(j.a)(["\n  background-color: black;\n"]);return y=function(){return e},e}function k(){var e=Object(j.a)(["\n  padding: 1rem;\n  button {\n    color: white;\n    padding: 0.5rem;\n    border-radius: 5%;\n    margin-left: auto;\n    margin-right: 0.25rem;\n    min-width: 45%;\n  }\n"]);return k=function(){return e},e}function w(){var e=Object(j.a)(["\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"]);return w=function(){return e},e}var x=O.a.div(w()),C=O.a.div(k()),P=O.a.button(y()),S=O.a.button(g()),F=O.a.div(E()),z=O.a.button(v()),H=function(e){function n(){var e,t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).handleSignUp=function(e){console.log(e)},t.handleLogin=function(e){console.log(e)},t.handleForgotPassword=function(e){console.log("we are clicking the forget password"),console.log(e)},t}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this.handleSignUp,n=this.handleLogin,t=this.handleForgotPassword;return r.a.createElement(x,null,r.a.createElement("h1",null,"Help 2 Be Helped"),r.a.createElement(C,null,r.a.createElement(F,null,r.a.createElement("input",{placeholder:"username"})),r.a.createElement(F,null,r.a.createElement("input",{placeholder:"password"})),r.a.createElement(S,{onClick:e},"Register"),r.a.createElement(P,{onClick:n},"Login"),r.a.createElement(z,{onClick:t},"Forgot password?")))}}]),n}(r.a.PureComponent),L=t(12);function B(){var e=Object(j.a)(["\n  flex-basis: 0.25;\n  color: white;\n  font-size: 2rem;\n  padding: 0.25rem;\n"]);return B=function(){return e},e}function J(){var e=Object(j.a)(["\n  background: #323232;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-around;\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n"]);return J=function(){return e},e}var U=O.a.nav(J()),A=O.a.div(B()),I=function(e){function n(){return Object(u.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(U,null,r.a.createElement(d.a,{to:"/home"},r.a.createElement(A,null,r.a.createElement(L.c,null))),r.a.createElement(d.a,{to:"/search"},r.a.createElement(A,null,r.a.createElement(L.e,null))),r.a.createElement(d.a,{to:"/offer"},r.a.createElement(A,null,r.a.createElement(L.d,null))),r.a.createElement(d.a,{to:"/settings"},r.a.createElement(A,null,r.a.createElement(L.b,null))))}}]),n}(r.a.PureComponent),R=(t(37),function(e){function n(){return Object(u.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.children,r.a.createElement(I,null))}}]),n}(r.a.PureComponent)),q=[{received:"Petcare",price:"2",distance:"0.8"},{received:"Hangout",price:"1",distance:"0.8"}];function D(){var e=Object(j.a)(["\n  color: ",";\n"]);return D=function(){return e},e}function G(){var e=Object(j.a)(["\n  font-size: 1rem;\n  padding: 0.5rem 0;\n  font-weight: 700;\n  text-align: center;\n  color: ",";\n"]);return G=function(){return e},e}function K(){var e=Object(j.a)(["\n  position: absolute;\n  left: 1rem;\n  top: 0.5rem;\n  font-size: 0.75rem;\n"]);return K=function(){return e},e}function M(){var e=Object(j.a)(["\n  background-color: ",";\n  flex-basis: 1;\n  border-radius: 25px;\n  margin: 1rem;\n  padding: 1rem;\n  position: relative;\n"]);return M=function(){return e},e}var N=O.a.div(M(),"#e5e9ed"),Q=O.a.div(K()),T=O.a.div(G(),"#60a084"),V=O.a.span(D(),"#b267e6"),W=function(e){function n(){return Object(u.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){console.log(this.props);var e=this.props,n=e.received,t=e.price,a=e.distance;return r.a.createElement(N,null,r.a.createElement(Q,null,a," miles from you"),r.a.createElement(T,null,"Someone received ",n," for"," ",r.a.createElement(V,null,r.a.createElement(L.a,null),t," favor points")))}}]),n}(r.a.PureComponent),X=function(e){function n(){return Object(u.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return q.map(function(e,n){var t=e.received,a=e.price,c=e.distance;return r.a.createElement(W,{distance:c,price:a,received:t,key:"liveshout-"+n})})}}]),n}(r.a.PureComponent),Y=function(e){function n(){return Object(u.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(R,null,r.a.createElement(X,null))}}]),n}(r.a.PureComponent),Z=function(e){function n(){return Object(u.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(R,null,"Offer")}}]),n}(r.a.PureComponent),$=function(e){function n(){return Object(u.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(R,null,"Settings")}}]),n}(r.a.PureComponent),_=function(e){function n(){return Object(u.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(R,null,"Search")}}]),n}(r.a.PureComponent),ee=function(e){function n(){return Object(u.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(f.a,{basename:"/help2behelped"},r.a.createElement(p.a,null,r.a.createElement(b.a,{exact:!0,path:"/search",component:_}),r.a.createElement(b.a,{exact:!0,path:"/offer",component:Z}),r.a.createElement(b.a,{exact:!0,path:"/settings",component:$}),r.a.createElement(b.a,{exact:!0,path:"/home",component:Y}),r.a.createElement(b.a,{exact:!0,path:"/login",component:H}),r.a.createElement(b.a,{exact:!0,path:"/",component:h})))}}]),n}(r.a.PureComponent);t(40);o.a.render(r.a.createElement(ee,null),document.getElementById("root"))}},[[24,2,1]]]);
//# sourceMappingURL=main.7559ed0d.chunk.js.map