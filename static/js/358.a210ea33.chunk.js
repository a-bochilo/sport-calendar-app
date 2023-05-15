"use strict";(self.webpackChunksport_calendar_app=self.webpackChunksport_calendar_app||[]).push([[358],{1358:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var i,r=t(9439),a=t(2791),o=t(7689),s=t(1889),d=t(4395),c=t(890),l=t(3400),u=t(9952),h=t(6488),f=t(7892),p=t.n(f),x=t(8910),g=t(4552),m=t(6587),S=t(1385),w=t(1413),Z=t(7630),j=t(9953),v=t(8008),B=t(1009),C=t(8778),y=t(8256),W=t(184),D=function(e,n){return{width:n,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),overflowX:"hidden"}},k=function(e,n){return{transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:n}},Y=(0,Z.ZP)("div")((function(e){var n=e.theme;return(0,w.Z)({display:"flex",alignItems:"center",justifyContent:"flex-end",height:"60px",padding:n.spacing(0,1)},n.mixins.toolbar)})),P=(0,Z.ZP)(j.ZP,{shouldForwardProp:function(e){switch(e){case"isSideBarOpen":case"openedSideBarWidth":case"closedSideBarWidth":return!1;default:return!0}}})((function(e){var n=e.theme,t=e.open,i=e.openedSideBarWidth,r=e.closedSideBarWidth;return(0,w.Z)((0,w.Z)({color:"white",flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box"},t&&(0,w.Z)((0,w.Z)({},D(n,i)),{},{"& .MuiDrawer-paper":D(n,i)})),!t&&(0,w.Z)((0,w.Z)({},k(n,r)),{},{"& .MuiDrawer-paper":k(n,r)}))})),b=function(e){var n=e.isSideBarOpen,t=e.openedSideBarWidth,i=e.closedSideBarWidth,r=e.setIsSideBarOpen,a=e.children,o=function(){r(!0)},s=function(){r(!1)},d=function(){return(0,W.jsx)(Y,{children:n?(0,W.jsx)(l.Z,{onClick:s,children:(0,W.jsx)(B.Z,{htmlColor:(0,C.sy)({theme:y.Z})})}):(0,W.jsx)(l.Z,{color:"inherit","aria-label":"open drawer",onClick:o,edge:"start",children:(0,W.jsx)(v.Z,{htmlColor:(0,C.sy)({theme:y.Z})})})})};return(0,W.jsxs)(P,{variant:"permanent",open:n,openedSideBarWidth:t,closedSideBarWidth:i,children:[(0,W.jsx)(d,{}),a]})},M=t(168),O=(0,Z.ZP)(s.ZP,{shouldForwardProp:function(e){switch(e){case"isSideBarOpen":case"openedSideBarWidth":case"closedSideBarWidth":return!1;default:return!0}}})((function(e){var n=e.theme,t=e.isSideBarOpen,i=e.openedSideBarWidth,r=e.closedSideBarWidth;return(0,w.Z)({marginLeft:r,width:"calc(100% - ".concat(r,"px)"),transition:n.transitions.create(["width","margin"],{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingScreen})},t&&{marginLeft:i,width:"calc(100% - ".concat(i,"px)"),transition:n.transitions.create(["width","margin"],{easing:n.transitions.easing.sharp,duration:n.transitions.duration.enteringScreen})})}));O=(0,Z.ZP)(O)(i||(i=(0,M.Z)(["\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > .MuiGrid-container {\n    flex-grow: 1;\n  }\n"])));var G=function(e){return(0,W.jsx)(O,(0,w.Z)({},e))},I=t(1652),_=t(3634),z=t(9848),L=function(e){var n=e.chosenDate,t=e.handleChooseDate;return(0,W.jsx)(I._,{dateAdapter:_.y,children:(0,W.jsx)(z.W,{value:p()(n),onChange:function(e){return t(e)}})})},E=function(){var e=(0,x.CG)(m.w),n=(0,a.useState)(!0),t=(0,r.Z)(n,2),i=t[0],f=t[1],w=(0,x.TL)(),Z=(0,o.s0)(),j=(0,a.useRef)(!0);(0,a.useEffect)((function(){j.current&&(e||w((0,g.G)(p()().format("YYYY-MM-DD"))),navigator.geolocation.getCurrentPosition((function(e){var n={latitude:e.coords.latitude,longitude:e.coords.longitude};w((0,S._)(n))})),j.current=!1)}),[]);var v=(0,a.useCallback)((function(e){e&&(w((0,g.G)(e.format("YYYY-MM-DD"))),Z("/training-list/".concat(e.format("YYYY-MM-DD"))))}),[w,Z]);return(0,W.jsxs)(s.ZP,{container:!0,sx:{flexGrow:1},component:"main",children:[(0,W.jsx)(b,{isSideBarOpen:i,openedSideBarWidth:350,closedSideBarWidth:50,setIsSideBarOpen:f,children:i?(0,W.jsx)(L,{chosenDate:e,handleChooseDate:v}):null}),(0,W.jsxs)(G,{item:!0,isSideBarOpen:i,openedSideBarWidth:350,closedSideBarWidth:50,children:[(0,W.jsxs)(d.Z,{color:"primary",position:"sticky",component:"header",sx:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",height:"65px"},children:[(0,W.jsx)(c.Z,{variant:"h4",component:"h1",sx:{display:"flex",flexGrow:1,justifyContent:"center"},children:"Sport Calendar"}),(0,W.jsx)(l.Z,{onClick:function(){return Z("/profile")},sx:{mr:2,color:"white"},children:(0,W.jsx)(u.Z,{fontSize:"large"})}),(0,W.jsx)(l.Z,{onClick:function(){window.localStorage.removeItem("token"),Z("/")},sx:{mr:6,color:"white"},children:(0,W.jsx)(h.Z,{fontSize:"large"})})]}),(0,W.jsx)(s.ZP,{container:!0,spacing:1,sx:{flexGrow:1,justifyContent:"center",alignItems:"center"},children:(0,W.jsx)(o.j3,{})})]})]})}},6587:function(e,n,t){t.d(n,{w:function(){return i}});var i=function(e){return e.date.chosenDate}},8778:function(e,n,t){t.d(n,{E4:function(){return r},TI:function(){return a},jS:function(){return o},sy:function(){return i}});var i=function(e){return e.theme.palette.primary.main},r=function(e){return e.theme.palette.primary.light},a=function(e){return e.theme.palette.primary.backgroundColor},o=function(e){return e.theme.palette.error.main}}}]);
//# sourceMappingURL=358.a210ea33.chunk.js.map