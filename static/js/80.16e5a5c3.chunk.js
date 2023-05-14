"use strict";(self.webpackChunksport_calendar_app=self.webpackChunksport_calendar_app||[]).push([[80],{7479:function(e,n,t){t.d(n,{Z:function(){return H}});var i=t(9439),r=t(4942),o=t(7462),u=t(3366),a=t(2791),l=t(8182),c=t(4419),s=t(7630),p=t(1046),d=t(2071),f=t(9683),h=t(3031),v=t(3433),m=t(168),b=t(5660),g=t(2554),Z=t(184);var y=function(e){var n=e.className,t=e.classes,r=e.pulsate,o=void 0!==r&&r,u=e.rippleX,c=e.rippleY,s=e.rippleSize,p=e.in,d=e.onExited,f=e.timeout,h=a.useState(!1),v=(0,i.Z)(h,2),m=v[0],b=v[1],g=(0,l.Z)(n,t.ripple,t.rippleVisible,o&&t.ripplePulsate),y={width:s,height:s,top:-s/2+c,left:-s/2+u},R=(0,l.Z)(t.child,m&&t.childLeaving,o&&t.childPulsate);return p||m||b(!0),a.useEffect((function(){if(!p&&null!=d){var e=setTimeout(d,f);return function(){clearTimeout(e)}}}),[d,p,f]),(0,Z.jsx)("span",{className:g,style:y,children:(0,Z.jsx)("span",{className:R})})},R=t(5878);var x,E,M,T,k,w,C,P,V=(0,R.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),S=["center","classes","className"],L=(0,g.F4)(k||(k=x||(x=(0,m.Z)(["\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"])))),D=(0,g.F4)(w||(w=E||(E=(0,m.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"])))),F=(0,g.F4)(C||(C=M||(M=(0,m.Z)(["\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"])))),j=(0,s.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),B=(0,s.ZP)(y,{name:"MuiTouchRipple",slot:"Ripple"})(P||(P=T||(T=(0,m.Z)(["\n  opacity: 0;\n  position: absolute;\n\n  &."," {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  &."," {\n    animation-duration: ","ms;\n  }\n\n  & ."," {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & ."," {\n    opacity: 0;\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  & ."," {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ",";\n    animation-duration: 2500ms;\n    animation-timing-function: ",";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"]))),V.rippleVisible,L,550,(function(e){return e.theme.transitions.easing.easeInOut}),V.ripplePulsate,(function(e){return e.theme.transitions.duration.shorter}),V.child,V.childLeaving,D,550,(function(e){return e.theme.transitions.easing.easeInOut}),V.childPulsate,F,(function(e){return e.theme.transitions.easing.easeInOut})),N=a.forwardRef((function(e,n){var t=(0,p.Z)({props:e,name:"MuiTouchRipple"}),r=t.center,c=void 0!==r&&r,s=t.classes,d=void 0===s?{}:s,f=t.className,h=(0,u.Z)(t,S),m=a.useState([]),g=(0,i.Z)(m,2),y=g[0],R=g[1],x=a.useRef(0),E=a.useRef(null);a.useEffect((function(){E.current&&(E.current(),E.current=null)}),[y]);var M=a.useRef(!1),T=a.useRef(null),k=a.useRef(null),w=a.useRef(null);a.useEffect((function(){return function(){clearTimeout(T.current)}}),[]);var C=a.useCallback((function(e){var n=e.pulsate,t=e.rippleX,i=e.rippleY,r=e.rippleSize,o=e.cb;R((function(e){return[].concat((0,v.Z)(e),[(0,Z.jsx)(B,{classes:{ripple:(0,l.Z)(d.ripple,V.ripple),rippleVisible:(0,l.Z)(d.rippleVisible,V.rippleVisible),ripplePulsate:(0,l.Z)(d.ripplePulsate,V.ripplePulsate),child:(0,l.Z)(d.child,V.child),childLeaving:(0,l.Z)(d.childLeaving,V.childLeaving),childPulsate:(0,l.Z)(d.childPulsate,V.childPulsate)},timeout:550,pulsate:n,rippleX:t,rippleY:i,rippleSize:r},x.current)])})),x.current+=1,E.current=o}),[d]),P=a.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},i=n.pulsate,r=void 0!==i&&i,o=n.center,u=void 0===o?c||n.pulsate:o,a=n.fakeElement,l=void 0!==a&&a;if("mousedown"===(null==e?void 0:e.type)&&M.current)M.current=!1;else{"touchstart"===(null==e?void 0:e.type)&&(M.current=!0);var s,p,d,f=l?null:w.current,h=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(u||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)s=Math.round(h.width/2),p=Math.round(h.height/2);else{var v=e.touches&&e.touches.length>0?e.touches[0]:e,m=v.clientX,b=v.clientY;s=Math.round(m-h.left),p=Math.round(b-h.top)}if(u)(d=Math.sqrt((2*Math.pow(h.width,2)+Math.pow(h.height,2))/3))%2===0&&(d+=1);else{var g=2*Math.max(Math.abs((f?f.clientWidth:0)-s),s)+2,Z=2*Math.max(Math.abs((f?f.clientHeight:0)-p),p)+2;d=Math.sqrt(Math.pow(g,2)+Math.pow(Z,2))}null!=e&&e.touches?null===k.current&&(k.current=function(){C({pulsate:r,rippleX:s,rippleY:p,rippleSize:d,cb:t})},T.current=setTimeout((function(){k.current&&(k.current(),k.current=null)}),80)):C({pulsate:r,rippleX:s,rippleY:p,rippleSize:d,cb:t})}}),[c,C]),L=a.useCallback((function(){P({},{pulsate:!0})}),[P]),D=a.useCallback((function(e,n){if(clearTimeout(T.current),"touchend"===(null==e?void 0:e.type)&&k.current)return k.current(),k.current=null,void(T.current=setTimeout((function(){D(e,n)})));k.current=null,R((function(e){return e.length>0?e.slice(1):e})),E.current=n}),[]);return a.useImperativeHandle(n,(function(){return{pulsate:L,start:P,stop:D}}),[L,P,D]),(0,Z.jsx)(j,(0,o.Z)({className:(0,l.Z)(V.root,d.root,f),ref:w},h,{children:(0,Z.jsx)(b.Z,{component:null,exit:!0,children:y})}))})),I=N,O=t(1217);function z(e){return(0,O.Z)("MuiButtonBase",e)}var K,X=(0,R.Z)("MuiButtonBase",["root","disabled","focusVisible"]),U=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],A=(0,s.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:function(e,n){return n.root}})((K={display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"}},(0,r.Z)(K,"&.".concat(X.disabled),{pointerEvents:"none",cursor:"default"}),(0,r.Z)(K,"@media print",{colorAdjust:"exact"}),K)),Y=a.forwardRef((function(e,n){var t=(0,p.Z)({props:e,name:"MuiButtonBase"}),r=t.action,s=t.centerRipple,v=void 0!==s&&s,m=t.children,b=t.className,g=t.component,y=void 0===g?"button":g,R=t.disabled,x=void 0!==R&&R,E=t.disableRipple,M=void 0!==E&&E,T=t.disableTouchRipple,k=void 0!==T&&T,w=t.focusRipple,C=void 0!==w&&w,P=t.LinkComponent,V=void 0===P?"a":P,S=t.onBlur,L=t.onClick,D=t.onContextMenu,F=t.onDragLeave,j=t.onFocus,B=t.onFocusVisible,N=t.onKeyDown,O=t.onKeyUp,K=t.onMouseDown,X=t.onMouseLeave,Y=t.onMouseUp,H=t.onTouchEnd,W=t.onTouchMove,_=t.onTouchStart,q=t.tabIndex,G=void 0===q?0:q,J=t.TouchRippleProps,Q=t.touchRippleRef,$=t.type,ee=(0,u.Z)(t,U),ne=a.useRef(null),te=a.useRef(null),ie=(0,d.Z)(te,Q),re=(0,h.Z)(),oe=re.isFocusVisibleRef,ue=re.onFocus,ae=re.onBlur,le=re.ref,ce=a.useState(!1),se=(0,i.Z)(ce,2),pe=se[0],de=se[1];x&&pe&&de(!1),a.useImperativeHandle(r,(function(){return{focusVisible:function(){de(!0),ne.current.focus()}}}),[]);var fe=a.useState(!1),he=(0,i.Z)(fe,2),ve=he[0],me=he[1];a.useEffect((function(){me(!0)}),[]);var be=ve&&!M&&!x;function ge(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:k;return(0,f.Z)((function(i){return n&&n(i),!t&&te.current&&te.current[e](i),!0}))}a.useEffect((function(){pe&&C&&!M&&ve&&te.current.pulsate()}),[M,C,pe,ve]);var Ze=ge("start",K),ye=ge("stop",D),Re=ge("stop",F),xe=ge("stop",Y),Ee=ge("stop",(function(e){pe&&e.preventDefault(),X&&X(e)})),Me=ge("start",_),Te=ge("stop",H),ke=ge("stop",W),we=ge("stop",(function(e){ae(e),!1===oe.current&&de(!1),S&&S(e)}),!1),Ce=(0,f.Z)((function(e){ne.current||(ne.current=e.currentTarget),ue(e),!0===oe.current&&(de(!0),B&&B(e)),j&&j(e)})),Pe=function(){var e=ne.current;return y&&"button"!==y&&!("A"===e.tagName&&e.href)},Ve=a.useRef(!1),Se=(0,f.Z)((function(e){C&&!Ve.current&&pe&&te.current&&" "===e.key&&(Ve.current=!0,te.current.stop(e,(function(){te.current.start(e)}))),e.target===e.currentTarget&&Pe()&&" "===e.key&&e.preventDefault(),N&&N(e),e.target===e.currentTarget&&Pe()&&"Enter"===e.key&&!x&&(e.preventDefault(),L&&L(e))})),Le=(0,f.Z)((function(e){C&&" "===e.key&&te.current&&pe&&!e.defaultPrevented&&(Ve.current=!1,te.current.stop(e,(function(){te.current.pulsate(e)}))),O&&O(e),L&&e.target===e.currentTarget&&Pe()&&" "===e.key&&!e.defaultPrevented&&L(e)})),De=y;"button"===De&&(ee.href||ee.to)&&(De=V);var Fe={};"button"===De?(Fe.type=void 0===$?"button":$,Fe.disabled=x):(ee.href||ee.to||(Fe.role="button"),x&&(Fe["aria-disabled"]=x));var je=(0,d.Z)(n,le,ne);var Be=(0,o.Z)({},t,{centerRipple:v,component:y,disabled:x,disableRipple:M,disableTouchRipple:k,focusRipple:C,tabIndex:G,focusVisible:pe}),Ne=function(e){var n=e.disabled,t=e.focusVisible,i=e.focusVisibleClassName,r=e.classes,o={root:["root",n&&"disabled",t&&"focusVisible"]},u=(0,c.Z)(o,z,r);return t&&i&&(u.root+=" ".concat(i)),u}(Be);return(0,Z.jsxs)(A,(0,o.Z)({as:De,className:(0,l.Z)(Ne.root,b),ownerState:Be,onBlur:we,onClick:L,onContextMenu:ye,onFocus:Ce,onKeyDown:Se,onKeyUp:Le,onMouseDown:Ze,onMouseLeave:Ee,onMouseUp:xe,onDragLeave:Re,onTouchEnd:Te,onTouchMove:ke,onTouchStart:Me,ref:je,tabIndex:x?-1:G,type:$},Fe,ee,{children:[m,be?(0,Z.jsx)(I,(0,o.Z)({ref:ie,center:v},J)):null]}))})),H=Y},9683:function(e,n,t){var i=t(8956);n.Z=i.Z},3031:function(e,n,t){t.d(n,{Z:function(){return d}});var i,r=t(2791),o=!0,u=!1,a={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(e){e.metaKey||e.altKey||e.ctrlKey||(o=!0)}function c(){o=!1}function s(){"hidden"===this.visibilityState&&u&&(o=!0)}function p(e){var n=e.target;try{return n.matches(":focus-visible")}catch(t){}return o||function(e){var n=e.type,t=e.tagName;return!("INPUT"!==t||!a[n]||e.readOnly)||"TEXTAREA"===t&&!e.readOnly||!!e.isContentEditable}(n)}var d=function(){var e=r.useCallback((function(e){var n;null!=e&&((n=e.ownerDocument).addEventListener("keydown",l,!0),n.addEventListener("mousedown",c,!0),n.addEventListener("pointerdown",c,!0),n.addEventListener("touchstart",c,!0),n.addEventListener("visibilitychange",s,!0))}),[]),n=r.useRef(!1);return{isFocusVisibleRef:n,onFocus:function(e){return!!p(e)&&(n.current=!0,!0)},onBlur:function(){return!!n.current&&(u=!0,window.clearTimeout(i),i=window.setTimeout((function(){u=!1}),100),n.current=!1,!0)},ref:e}}},5660:function(e,n,t){t.d(n,{Z:function(){return h}});var i=t(3366),r=t(7462),o=t(7326),u=t(4578),a=t(2791),l=t(5545);function c(e,n){var t=Object.create(null);return e&&a.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=function(e){return n&&(0,a.isValidElement)(e)?n(e):e}(e)})),t}function s(e,n,t){return null!=t[n]?t[n]:e.props[n]}function p(e,n,t){var i=c(e.children),r=function(e,n){function t(t){return t in n?n[t]:e[t]}e=e||{},n=n||{};var i,r=Object.create(null),o=[];for(var u in e)u in n?o.length&&(r[u]=o,o=[]):o.push(u);var a={};for(var l in n){if(r[l])for(i=0;i<r[l].length;i++){var c=r[l][i];a[r[l][i]]=t(c)}a[l]=t(l)}for(i=0;i<o.length;i++)a[o[i]]=t(o[i]);return a}(n,i);return Object.keys(r).forEach((function(o){var u=r[o];if((0,a.isValidElement)(u)){var l=o in n,c=o in i,p=n[o],d=(0,a.isValidElement)(p)&&!p.props.in;!c||l&&!d?c||!l||d?c&&l&&(0,a.isValidElement)(p)&&(r[o]=(0,a.cloneElement)(u,{onExited:t.bind(null,u),in:p.props.in,exit:s(u,"exit",e),enter:s(u,"enter",e)})):r[o]=(0,a.cloneElement)(u,{in:!1}):r[o]=(0,a.cloneElement)(u,{onExited:t.bind(null,u),in:!0,exit:s(u,"exit",e),enter:s(u,"enter",e)})}})),r}var d=Object.values||function(e){return Object.keys(e).map((function(n){return e[n]}))},f=function(e){function n(n,t){var i,r=(i=e.call(this,n,t)||this).handleExited.bind((0,o.Z)(i));return i.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},i}(0,u.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var t,i,r=n.children,o=n.handleExited;return{children:n.firstRender?(t=e,i=o,c(t.children,(function(e){return(0,a.cloneElement)(e,{onExited:i.bind(null,e),in:!0,appear:s(e,"appear",t),enter:s(e,"enter",t),exit:s(e,"exit",t)})}))):p(e,r,o),firstRender:!1}},t.handleExited=function(e,n){var t=c(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var t=(0,r.Z)({},n.children);return delete t[e.key],{children:t}})))},t.render=function(){var e=this.props,n=e.component,t=e.childFactory,r=(0,i.Z)(e,["component","childFactory"]),o=this.state.contextValue,u=d(this.state.children).map(t);return delete r.appear,delete r.enter,delete r.exit,null===n?a.createElement(l.Z.Provider,{value:o},u):a.createElement(l.Z.Provider,{value:o},a.createElement(n,r,u))},n}(a.Component);f.propTypes={},f.defaultProps={component:"div",childFactory:function(e){return e}};var h=f}}]);
//# sourceMappingURL=80.16e5a5c3.chunk.js.map