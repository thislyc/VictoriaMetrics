(this.webpackJsonpvmui=this.webpackJsonpvmui||[]).push([[0],{172:function(e,t,n){},181:function(e,t,n){},182:function(e,t,n){},185:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),i=n(24),o=n.n(i),s=(n(172),n(13)),l=n(257),u=n(255),j=Object(r.createContext)({showInfoMessage:function(){}}),d=function(){return Object(r.useContext)(j)},b=function(e){var t=e.children,n=Object(r.useState)({}),c=Object(s.a)(n,2),i=c[0],o=c[1],d=Object(r.useState)(!1),b=Object(s.a)(d,2),O=b[0],h=b[1],f=Object(r.useState)(void 0),p=Object(s.a)(f,2),x=p[0],v=p[1];Object(r.useEffect)((function(){x&&(o({message:x,key:(new Date).getTime()}),h(!0))}),[x]);return Object(a.jsxs)(j.Provider,{value:{showInfoMessage:v},children:[Object(a.jsx)(l.a,{open:O,autoHideDuration:4e3,onClose:function(e,t){"clickaway"!==t&&(v(void 0),h(!1))},children:Object(a.jsx)(u.a,{children:i.message})},i.key),t]})},O=n(248),h=n(238),f=n(252),p=n(83),x=n(231),v=n(240),m=n(219),y=n(221),g=n(222),E=n(260),_=n(151),T=n(128),S=n.n(T),A=n(16),C=n(12),w=n(32),I=n.n(w),R=n(124),U=n.n(R),D=n(125),H=n.n(D);I.a.extend(U.a),I.a.extend(H.a);var k,M=window.screen.availWidth/2,L=1e3,N=1578e8,Y="YYYY-MM-DD[T]HH:mm:ss",q=[{long:"days",short:"d",possible:"day"},{long:"weeks",short:"w",possible:"week"},{long:"months",short:"M",possible:"mon"},{long:"years",short:"y",possible:"year"},{long:"hours",short:"h",possible:"hour"},{long:"minutes",short:"m",possible:"min"},{long:"seconds",short:"s",possible:"sec"},{long:"milliseconds",short:"ms",possible:"millisecond"}],B=q.map((function(e){return e.short})),P=function(e){var t=e.match(/\d+/g),n=e.match(/[a-zA-Z]+/g);if(n&&t&&B.includes(n[0]))return Object(A.a)({},n[0],t[0])},Q=function(e,t){var n=(t||new Date).valueOf()/1e3,a=e.trim().split(" ").reduce((function(e,t){var n=P(t);return n?Object(C.a)(Object(C.a)({},e),n):Object(C.a)({},e)}),{}),r=I.a.duration(a).asSeconds();return{start:n-r,end:n,step:Math.ceil(r/M),date:z(t||new Date)}},z=function(e){return I()(e).utc().format(Y)},F=function(e){var t=Math.floor(e%1e3),n=Math.floor(e/1e3%60),a=Math.floor(e/1e3/60%60),r=Math.floor(e/1e3/3600%24),c=Math.floor(e/864e5),i=["d","h","m","s","ms"];return[c,r,a,n,t].map((function(e,t){return e?"".concat(e).concat(i[t]):""})).filter((function(e){return e})).join(" ")},G=function(e){return new Date(1e3*e)},W=function(e,t){t?window.localStorage.setItem(e,JSON.stringify({value:t})):X([e])},V=function(e){var t=window.localStorage.getItem(e);if(null!==t)try{var n;return null===(n=JSON.parse(t))||void 0===n?void 0:n.value}catch(a){return t}},X=function(e){return e.forEach((function(e){return window.localStorage.removeItem(e)}))},J=["BASIC_AUTH_DATA","BEARER_AUTH_DATA"],K=n(126),Z=n.n(K),$=n(109),ee=n.n($),te={query:"g0.expr","time.duration":"g0.range_input","time.period.date":"g0.end_input","time.period.step":"g0.step_input",stacked:"g0.stacked"},ne=function(e){var t=new Map(Object.entries(te)),n=[];t.forEach((function(t,a){encodeURIComponent(t);var r=ee()(e,a,"");if(r){var c=encodeURIComponent(r);n.push("".concat(t,"=").concat(c))}})),function(e){var t=window;if(t){var n="".concat(t.location.protocol,"//").concat(t.location.host).concat(t.location.pathname,"?").concat(e);t.history.pushState({path:n},"",n)}}(n.join("&"))},ae=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.location.search,a=Z.a.parse(n,{ignoreQueryPrefix:!0});return ee()(a,e,t||"")},re=ae("g0.range_input","1h"),ce=(k=ae("g0.end_input",new Date(I()().utc().format(Y))),I()(k).utcOffset(0,!0).local().format(Y)),ie=ae("g0.expr",V("LAST_QUERY")||"\n"),oe={serverUrl:window.location.href.replace(/\/(?:prometheus\/)?(?:graph|vmui)\/.*/,"/prometheus/"),displayType:"chart",query:ie,queryHistory:{index:0,values:[ie]},time:{duration:re,period:Q(re,new Date(ce))},queryControls:{autoRefresh:!1,autocomplete:V("AUTOCOMPLETE")||!1,nocache:V("NO_CACHE")||!1}};function se(e,t){switch(t.type){case"SET_DISPLAY_TYPE":return Object(C.a)(Object(C.a)({},e),{},{displayType:t.payload});case"SET_SERVER":return Object(C.a)(Object(C.a)({},e),{},{serverUrl:t.payload});case"SET_QUERY":return Object(C.a)(Object(C.a)({},e),{},{query:t.payload});case"SET_QUERY_HISTORY_INDEX":return Object(C.a)(Object(C.a)({},e),{},{queryHistory:Object(C.a)(Object(C.a)({},e.queryHistory),{},{index:t.payload})});case"SET_QUERY_HISTORY_VALUES":return Object(C.a)(Object(C.a)({},e),{},{queryHistory:Object(C.a)(Object(C.a)({},e.queryHistory),{},{values:t.payload})});case"SET_DURATION":return Object(C.a)(Object(C.a)({},e),{},{time:Object(C.a)(Object(C.a)({},e.time),{},{duration:t.payload,period:Q(t.payload,G(e.time.period.end))})});case"SET_UNTIL":return Object(C.a)(Object(C.a)({},e),{},{time:Object(C.a)(Object(C.a)({},e.time),{},{period:Q(e.time.duration,t.payload)})});case"SET_PERIOD":var n=function(e){var t=e.to.valueOf()-e.from.valueOf();return F(t)}(t.payload);return Object(C.a)(Object(C.a)({},e),{},{queryControls:Object(C.a)(Object(C.a)({},e.queryControls),{},{autoRefresh:!1}),time:Object(C.a)(Object(C.a)({},e.time),{},{duration:n,period:Q(n,t.payload.to)})});case"TOGGLE_AUTOREFRESH":return Object(C.a)(Object(C.a)({},e),{},{queryControls:Object(C.a)(Object(C.a)({},e.queryControls),{},{autoRefresh:!e.queryControls.autoRefresh})});case"TOGGLE_AUTOCOMPLETE":return Object(C.a)(Object(C.a)({},e),{},{queryControls:Object(C.a)(Object(C.a)({},e.queryControls),{},{autocomplete:!e.queryControls.autocomplete})});case"NO_CACHE":return Object(C.a)(Object(C.a)({},e),{},{queryControls:Object(C.a)(Object(C.a)({},e.queryControls),{},{nocache:!e.queryControls.nocache})});case"RUN_QUERY":return Object(C.a)(Object(C.a)({},e),{},{time:Object(C.a)(Object(C.a)({},e.time),{},{period:Q(e.time.duration,G(e.time.period.end))})});case"RUN_QUERY_TO_NOW":return Object(C.a)(Object(C.a)({},e),{},{time:Object(C.a)(Object(C.a)({},e.time),{},{period:Q(e.time.duration)})});default:throw new Error}}var le=Object(r.createContext)({}),ue=function(){return Object(r.useContext)(le).state},je=function(){return Object(r.useContext)(le).dispatch},de=Object.entries(oe).reduce((function(e,t){var n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(C.a)(Object(C.a)({},e),{},Object(A.a)({},a,ae(a)||r))}),{}),be=function(e){var t=e.children,n=Object(r.useReducer)(se,de),c=Object(s.a)(n,2),i=c[0],o=c[1];Object(r.useEffect)((function(){ne(i)}),[i]);var l=Object(r.useMemo)((function(){return{state:i,dispatch:o}}),[i,o]);return Object(a.jsx)(le.Provider,{value:l,children:t})},Oe=function(e){return Object(a.jsxs)(f.a,{position:"relative",display:"inline-flex",children:[Object(a.jsx)(m.a,Object(C.a)({variant:"determinate"},e)),Object(a.jsx)(f.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:Object(a.jsx)(p.a,{variant:"caption",component:"div",children:"".concat(e.label,"s")})})]})},he=n(220),fe=Object(he.a)({colorizing:{color:"white"}}),pe=function(){var e=fe(),t=je(),n=ue().queryControls.autoRefresh,i=Object(r.useState)(5),o=Object(s.a)(i,2),l=o[0],u=o[1],j=Object(r.useState)(),d=Object(s.a)(j,2),b=d[0],O=d[1],h=c.a.useState(100),p=Object(s.a)(h,2),x=p[0],v=p[1];Object(r.useEffect)((function(){var e;return n&&(O((new Date).valueOf()),e=setInterval((function(){O((new Date).valueOf()),t({type:"RUN_QUERY_TO_NOW"})}),1e3*l)),function(){e&&clearInterval(e)}}),[l,n]),Object(r.useEffect)((function(){var e=setInterval((function(){if(n&&b){var e=((new Date).valueOf()-b)/1e3,t=Math.floor(e/l*100);v(t)}}),16);return function(){clearInterval(e)}}),[n,b,l]);var m=function(){u((function(e){switch(e){case 1:return 2;case 2:return 5;case 5:return 1;default:return 5}}))};return Object(a.jsxs)(f.a,{display:"flex",alignItems:"center",children:[Object(a.jsx)(y.a,{control:Object(a.jsx)(g.a,{size:"small",className:e.colorizing,checked:n,onChange:function(){t({type:"TOGGLE_AUTOREFRESH"})}}),label:"Auto-refresh"}),n&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Oe,{className:e.colorizing,label:l,value:x,onClick:function(){m()}}),Object(a.jsx)(E.a,{title:"Change delay refresh",children:Object(a.jsx)(f.a,{ml:1,children:Object(a.jsx)(_.a,{onClick:function(){m()},children:Object(a.jsx)(S.a,{style:{color:"white"}})})})})]})]})},xe=n(131),ve=n.n(xe),me=n(129),ye=n.n(me),ge=n(130),Ee=n.n(ge),_e=n(224),Te=n(264),Se=n(10),Ae=Object(Se.a)({root:{padding:6,color:"white","&.Mui-selected":{color:"white"}}})(_e.a),Ce=function(){var e=ue().displayType,t=je();return Object(a.jsxs)(Te.a,{value:e,exclusive:!0,onChange:function(n,a){return t({type:"SET_DISPLAY_TYPE",payload:null!==a&&void 0!==a?a:e})},children:[Object(a.jsxs)(Ae,{value:"chart","aria-label":"display as chart",children:[Object(a.jsx)(ye.a,{}),"\xa0Query Range as Chart"]}),Object(a.jsxs)(Ae,{value:"code","aria-label":"display as code",children:[Object(a.jsx)(Ee.a,{}),"\xa0Instant Query as JSON"]}),Object(a.jsxs)(Ae,{value:"table","aria-label":"display as table",children:[Object(a.jsx)(ve.a,{}),"\xa0Instant Query as Table"]})]})},we=n(132),Ie=n.n(we),Re=(n(180),n(133)),Ue=n.n(Re),De=(n(181),n(182),{yaxis:{limits:{enable:!1,range:[0,0]}}});function He(e,t){switch(t.type){case"TOGGLE_ENABLE_YAXIS_LIMITS":return Object(C.a)(Object(C.a)({},e),{},{yaxis:Object(C.a)(Object(C.a)({},e.yaxis),{},{limits:Object(C.a)(Object(C.a)({},e.yaxis.limits),{},{enable:!e.yaxis.limits.enable})})});case"SET_YAXIS_LIMITS":return Object(C.a)(Object(C.a)({},e),{},{yaxis:Object(C.a)(Object(C.a)({},e.yaxis),{},{limits:Object(C.a)(Object(C.a)({},e.yaxis.limits),{},{range:t.payload})})});default:throw new Error}}var ke=Object(r.createContext)({}),Me=function(){return Object(r.useContext)(ke).state},Le=function(){return Object(r.useContext)(ke).dispatch},Ne=function(e){var t=e.children,n=Object(r.useReducer)(He,De),c=Object(s.a)(n,2),i=c[0],o=c[1],l=Object(r.useMemo)((function(){return{state:i,dispatch:o}}),[i,o]);return Object(a.jsx)(ke.Provider,{value:l,children:t})},Ye=n(25),qe=function(e){for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);for(var a="#",r=0;r<3;r++){a+=("00"+(t>>8*r&255).toString(16)).substr(-2)}return a},Be=n(102),Pe=function(e){if(0===Object.keys(e.metric).length)return"Query result";var t=e.metric,n=t.__name__,a=Object(Be.a)(t,["__name__"]);return"".concat(n||""," {").concat(Object.entries(a).map((function(e){return"".concat(e[0],": ").concat(e[1])})).join(", "),"}")},Qe=function(e){var t,n=e.u,a=e.tooltipIdx,r=e.data,c=e.series,i=e.tooltip,o=e.tooltipOffset,s=a.seriesIdx,l=a.dataIdx,u=n.data[s][l],j=n.data[0][l],d=(null===(t=r[s-1])||void 0===t?void 0:t.metric)||{},b=qe(c[s].label||""),O=n.over.getBoundingClientRect(),h=O.width,f=O.height,p=n.valToPos(u||0,"y"),x=n.valToPos(j,"x"),v=i.getBoundingClientRect(),m=v.width,y=v.height,g=x+m>=h,E=p+y>=f;i.style.display="grid",i.style.top="".concat(o.top+p+10-(E?y+10:0),"px"),i.style.left="".concat(o.left+x+10-(g?m+20:0),"px");var _=I()(new Date(1e3*j)).format("YYYY-MM-DD HH:mm:ss:SSS (Z)"),T=Object.keys(d).filter((function(e){return"__name__"!==e})).map((function(e){return"<div><b>".concat(e,"</b>: ").concat(d[e],"</div>")})).join(""),S='<div class="u-tooltip__marker" style="background: '.concat(b,'"></div>');i.innerHTML="<div>".concat(_,'</div>\n                       <div class="u-tooltip-data">\n                         ').concat(S).concat(d.__name__||"",": <b>").concat(u,'</b>\n                       </div>\n                       <div class="u-tooltip__info">').concat(T,"</div>")},ze=function(e){var t=e.data,n=void 0===t?[]:t,c=je(),i=ue().time.period,o=Object(r.useState)({min:i.start,max:i.end}),l=Object(s.a)(o,2),u=l[0],j=l[1],d=Object(r.useRef)(null),b=Object(r.useState)(!1),O=Object(s.a)(b,2),h=O[0],f=O[1],p=Object(r.useState)(0),x=Object(s.a)(p,2),v=x[0],m=x[1],y={seriesIdx:1,dataIdx:0},g={left:0,top:0},E=Me().yaxis,_=Le(),T=Object(r.useMemo)((function(){for(var e=function(e){var t=e.map((function(e){return e.values.map((function(e){return e[0]}))})).flat().sort((function(e,t){return e-t}));return[t[0],t[t.length-1]]}(n),t=Object(s.a)(e,2),a=t[0],r=t[1],c=[],o=a;o<r;o+=i.step||1)c.push(o);return c}),[n]),S=Object(r.useMemo)((function(){return function(e){return[{}].concat(Object(Ye.a)(e.map((function(e){return{label:Pe(e),width:1.5,stroke:qe(Pe(e))}}))))}(n)}),[n]),A=Object(r.useMemo)((function(){return function(e,t){return[t].concat(Object(Ye.a)(e.map((function(e){return t.map((function(t){var n=e.values.find((function(e){return e[0]===t}));return n?+n[1]:null}))}))))}(n,T)}),[n]),C=document.createElement("div");C.className="u-tooltip";Object(r.useEffect)((function(){var e;e=function(e){var t=e.map((function(e){return e.values.map((function(e){return+e[1]}))})).flat().sort((function(e,t){return e-t}));return[t[0],t[t.length-1]]}(n),E.limits.enable&&!E.limits.range.every((function(e){return!e}))||_({type:"SET_YAXIS_LIMITS",payload:e})}),[n]),Object(r.useEffect)((function(){j({min:i.start,max:i.end})}),[i]),Object(r.useEffect)((function(){var e=(i.end-i.start)/3,t=e/(u.max-u.min);(u.max>i.end+e||u.min<i.start-e||t>=.7)&&c({type:"SET_PERIOD",payload:{from:new Date(1e3*u.min),to:new Date(1e3*u.max)}})}),[u]);var w={width:d.current?d.current.offsetWidth:400,height:500,series:S,plugins:[{hooks:{ready:function(e){var t;g.left=parseFloat(e.over.style.left),g.top=parseFloat(e.over.style.top),null===(t=e.root.querySelector(".u-wrap"))||void 0===t||t.appendChild(C),e.over.addEventListener("mousedown",(function(t){if(0===t.button){f(!0),t.preventDefault();var n=t.clientX,a=function(t){t.preventDefault();var a=(e.posToVal(1,"x")-e.posToVal(0,"x"))*(t.clientX-n),r=(e.scales.x.min||1)-a,c=(e.scales.x.max||1)-a;e.setScale("x",{min:r,max:c}),j({min:r,max:c})};document.addEventListener("mousemove",a),document.addEventListener("mouseup",(function e(){f(!1),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",e)}))}})),e.over.addEventListener("wheel",(function(t){if(t.ctrlKey||t.metaKey){t.preventDefault();var n=e.over.getBoundingClientRect().width;e.cursor.left&&e.cursor.left>0&&m(e.cursor.left);var a=e.posToVal(v,"x"),r=(e.scales.x.max||0)-(e.scales.x.min||0),c=t.deltaY<0?.85*r:r/.85,i=a-v/n*c,o=i+c;e.batch((function(){e.setScale("x",{min:i,max:o}),j({min:i,max:o})}))}}))},setCursor:function(e){y.dataIdx!==e.cursor.idx&&(y.dataIdx=e.cursor.idx||0,y.seriesIdx&&y.dataIdx&&Qe({u:e,tooltipIdx:y,data:n,series:S,tooltip:C,tooltipOffset:g}))},setSeries:function(e,t){y.seriesIdx!==t&&(y.seriesIdx=t||0,t&&y.dataIdx?Qe({u:e,tooltipIdx:y,data:n,series:S,tooltip:C,tooltipOffset:g}):C.style.display="none")}}}],cursor:{drag:{x:!1,y:!1},focus:{prox:30}},axes:[{space:80},{show:!0,font:"10px Arial",values:function(e,t){return t.map((function(e){return e>1e3?Ue()(e).format("0.0a"):e}))}}],scales:{x:{range:function(){return[u.min,u.max]}},y:{range:function(e,t,n){return E.limits.enable?E.limits.range:[t,n]}}}};return Object(a.jsx)("div",{ref:d,style:{pointerEvents:h?"none":"auto"},children:A&&Object(a.jsx)(Ie.a,{options:w,data:A})})},Fe=function(e){var t=e.data,n=void 0===t?[]:t;return Object(a.jsx)(a.Fragment,{children:n.length>0?Object(a.jsx)(ze,{data:n}):Object(a.jsx)("div",{style:{textAlign:"center"},children:"No data to show"})})},Ge=n(225),We=n(149),Ve=n(226),Xe=n(227),Je=n(228),Ke=n(229),Ze=n(230),$e=Object(he.a)({deemphasized:{opacity:.4}}),et=function(e){var t=e.data,n=$e(),c=function(e){return Object(r.useMemo)((function(){var t={};return e.forEach((function(e){return Object.entries(e.metric).forEach((function(e){return t[e[0]]?t[e[0]].options.add(e[1]):t[e[0]]={options:new Set([e[1]])}}))})),Object.entries(t).map((function(e){return{key:e[0],variations:e[1].options.size}})).sort((function(e,t){return e.variations-t.variations}))}),[e])}(t),i=Object(r.useMemo)((function(){return null===t||void 0===t?void 0:t.map((function(e){return{metadata:c.map((function(t){return e.metric[t.key]||"-"})),value:e.value[1]}}))}),[c,t]);return Object(a.jsx)(a.Fragment,{children:i.length>0?Object(a.jsx)(Ge.a,{component:We.a,children:Object(a.jsxs)(Ve.a,{"aria-label":"simple table",children:[Object(a.jsx)(Xe.a,{children:Object(a.jsxs)(Je.a,{children:[c.map((function(e,t){return Object(a.jsx)(Ke.a,{style:{textTransform:"capitalize"},children:e.key},t)})),Object(a.jsx)(Ke.a,{align:"right",children:"Value"})]})}),Object(a.jsx)(Ze.a,{children:i.map((function(e,t){return Object(a.jsxs)(Je.a,{children:[e.metadata.map((function(e,r){var c=i[t-1]&&i[t-1].metadata[r];return Object(a.jsx)(Ke.a,{className:c===e?n.deemphasized:void 0,children:e},r)})),Object(a.jsx)(Ke.a,{align:"right",children:e.value})]},t)}))})]})}):Object(a.jsx)("div",{style:{textAlign:"center"},children:"No data to show"})})},tt=n(258),nt=n(246),at=n(247),rt=n(243),ct=n(253),it=n(3),ot=n(9),st=n(97),lt=n(145),ut=n(146),jt=function(e){var t=e.query,n=e.queryHistory,c=e.setHistoryIndex,i=e.setQuery,o=e.runQuery,l=e.server,u=e.oneLiner,j=void 0!==u&&u,d=e.autocomplete,b=Object(r.useRef)(null),O=Object(r.useState)(),h=Object(s.a)(O,2),f=h[0],p=h[1];Object(r.useEffect)((function(){return b.current&&p(new ot.d({parent:b.current})),function(){return null===f||void 0===f?void 0:f.destroy()}}),[]),Object(r.useEffect)((function(){var e=new lt.a;e.activateCompletion(d),e.setComplete({url:l});var n=ot.d.updateListener.of((function(e){e.docChanged&&i(e.state.doc.toJSON().map((function(e){return e.trim()})).join(""))}));null===f||void 0===f||f.setState(it.e.create({doc:t,extensions:[ut.a,Object(ot.k)(st.a),n,e.asExtension()]}))}),[l,f,d,n]);return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{ref:b,className:j?"one-line-scroll":void 0,onKeyUp:function(e){var t=e.key,n=e.ctrlKey,a=e.metaKey,r=n||a;"Enter"===t&&r?o():"ArrowUp"===t&&r?c(-1):"ArrowDown"===t&&r&&c(1)}})})},dt=n(234),bt=n(251),Ot=function(){return Object(a.jsx)(Ge.a,{component:We.a,children:Object(a.jsxs)(Ve.a,{"aria-label":"simple table",size:"small",children:[Object(a.jsx)(Xe.a,{children:Object(a.jsxs)(Je.a,{children:[Object(a.jsx)(Ke.a,{children:"Long"}),Object(a.jsx)(Ke.a,{children:"Short"})]})}),Object(a.jsx)(Ze.a,{children:q.map((function(e,t){return Object(a.jsxs)(Je.a,{children:[Object(a.jsx)(Ke.a,{component:"th",scope:"row",children:e.long}),Object(a.jsx)(Ke.a,{children:e.short})]},t)}))})]})})},ht=Object(he.a)({inlineBtn:{"&:hover":{cursor:"pointer"}}}),ft=function(e){var t=e.handler,n=e.text,r=ht();return Object(a.jsx)(x.a,{component:"span",className:r.inlineBtn,onClick:t,children:n})},pt=function(e){var t=e.setDuration,n=Object(r.useState)(!1),i=Object(s.a)(n,2),o=i[0],l=i[1],u=c.a.useState(null),j=Object(s.a)(u,2),d=j[0],b=j[1],O=Object(r.useState)(),h=Object(s.a)(O,2),x=h[0],v=h[1],m=ue().time,y=m.period.end,g=m.duration,E=je(),_=Object(r.useState)(g),T=Object(s.a)(_,2),S=T[0],A=T[1];Object(r.useEffect)((function(){A(g)}),[g]),Object(r.useEffect)((function(){v(function(e){return I()(e).format(Y)}(G(y)))}),[y]),Object(r.useEffect)((function(){if(!o){var e=function(e){var t=e.trim().split(" ").reduce((function(e,t){var n=P(t);return n?Object(C.a)(Object(C.a)({},e),n):Object(C.a)({},e)}),{}),n=I.a.duration(t).asMilliseconds();return n<L?F(L):n>N?F(N):e}(S);A(e),t(e)}}),[S,o]);var w=function(){b(null)},R=Boolean(d);return Object(a.jsxs)(f.a,{m:1,flexDirection:"row",display:"flex",children:[Object(a.jsxs)(f.a,{px:1,children:[Object(a.jsx)(f.a,{children:Object(a.jsx)(ct.a,{label:"Duration",value:S,onChange:function(e){A(e.target.value)},fullWidth:!0,onBlur:function(){l(!1)},onFocus:function(){l(!0)}})}),Object(a.jsx)(f.a,{my:2,children:Object(a.jsxs)(p.a,{variant:"body2",children:["Possible options",Object(a.jsx)("span",{"aria-owns":R?"mouse-over-popover":void 0,"aria-haspopup":"true",style:{cursor:"pointer"},onMouseEnter:function(e){b(e.currentTarget)},onMouseLeave:w,children:":\xa0"}),Object(a.jsx)(dt.a,{open:R,anchorEl:d,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},style:{pointerEvents:"none"},onClose:w,disableRestoreFocus:!0,children:Object(a.jsx)(Ot,{})}),Object(a.jsx)(ft,{handler:function(){return A("5m")},text:"5m"}),",\xa0",Object(a.jsx)(ft,{handler:function(){return A("1h")},text:"1h"}),",\xa0",Object(a.jsx)(ft,{handler:function(){return A("1h 30m")},text:"1h 30m"})]})})]}),Object(a.jsxs)(f.a,{px:1,children:[Object(a.jsx)(f.a,{children:Object(a.jsx)(bt.a,{variant:"inline",ampm:!1,label:"Until",value:x,onChange:function(e){return E({type:"SET_UNTIL",payload:e})},onError:console.log,format:"DD/MM/YYYY HH:mm:ss"})}),Object(a.jsx)(f.a,{my:2,children:Object(a.jsxs)(p.a,{variant:"body2",children:["Will be changed to current time for auto-refresh mode.\xa0",Object(a.jsx)(ft,{handler:function(){return E({type:"RUN_QUERY_TO_NOW"})},text:"Switch to now"})]})})]})]})},xt=n(136),vt=n.n(xt),mt=n(138),yt=n.n(mt),gt=n(244),Et=n(263),_t=n(262),Tt=n(241),St=n(245),At=n(254),Ct=n(236),wt=n(233),It=n(261),Rt=n(232),Ut=n(239),Dt=n(256),Ht=n(235),kt=n(242),Mt=n(237),Lt=function(e){var t=e.children,n=e.value,r=e.index,c=Object(Be.a)(e,["children","value","index"]);return Object(a.jsx)("div",Object(C.a)(Object(C.a)({role:"tabpanel",hidden:n!==r,id:"auth-config-tabpanel-".concat(r),"aria-labelledby":"auth-config-tab-".concat(r)},c),{},{children:n===r&&Object(a.jsx)(f.a,{py:2,children:t})}))},Nt=n(134),Yt=n.n(Nt),qt=n(135),Bt=n.n(qt),Pt={authMethod:"NO_AUTH",saveAuthLocally:!1},Qt=V("AUTH_TYPE"),zt=V("BASIC_AUTH_DATA"),Ft=V("BEARER_AUTH_DATA"),Gt=Object(C.a)(Object(C.a)({},Pt),{},{authMethod:Qt||Pt.authMethod,basicData:zt,bearerData:Ft,saveAuthLocally:!(!zt&&!Ft)}),Wt=function(){X(J)};function Vt(e,t){switch(t.type){case"SET_BASIC_AUTH":return t.payload.checkbox?W("BASIC_AUTH_DATA",t.payload.value):Wt(),W("AUTH_TYPE","BASIC_AUTH"),Object(C.a)(Object(C.a)({},e),{},{authMethod:"BASIC_AUTH",basicData:t.payload.value});case"SET_BEARER_AUTH":return t.payload.checkbox?W("BEARER_AUTH_DATA",t.payload.value):Wt(),W("AUTH_TYPE","BEARER_AUTH"),Object(C.a)(Object(C.a)({},e),{},{authMethod:"BEARER_AUTH",bearerData:t.payload.value});case"SET_NO_AUTH":return!t.payload.checkbox&&Wt(),W("AUTH_TYPE","NO_AUTH"),Object(C.a)(Object(C.a)({},e),{},{authMethod:"NO_AUTH"});default:throw new Error}}var Xt=Object(r.createContext)({}),Jt=function(){return Object(r.useContext)(Xt).state},Kt=function(e){var t=e.children,n=Object(r.useReducer)(Vt,Gt),c=Object(s.a)(n,2),i=c[0],o=c[1],l=Object(r.useMemo)((function(){return{state:i,dispatch:o}}),[i,o]);return Object(a.jsx)(Xt.Provider,{value:l,children:t})},Zt=Object(he.a)((function(){return Object(_t.a)({tabsContent:{height:"200px"}})})),$t="Bearer ",en=[{title:"No auth",id:"NO_AUTH"},{title:"Basic Auth",id:"BASIC_AUTH"},{title:"Bearer Token",id:"BEARER_AUTH"}],tn=function(e){var t=Zt(),n=e.onClose,c=e.open,i=Jt(),o=i.saveAuthLocally,l=i.basicData,u=i.bearerData,j=i.authMethod,d=Object(r.useContext)(Xt).dispatch,b=Object(r.useState)(o),O=Object(s.a)(b,2),h=O[0],x=O[1],v=Object(r.useState)(l||{password:"",login:""}),m=Object(s.a)(v,2),g=m[0],E=m[1],_=Object(r.useState)((null===u||void 0===u?void 0:u.token)||$t),T=Object(s.a)(_,2),S=T[0],A=T[1],w=Object(r.useState)(en.findIndex((function(e){return e.id===j}))||0),I=Object(s.a)(w,2),R=I[0],U=I[1],D=function(){n()};return Object(a.jsxs)(Et.a,{onClose:D,"aria-labelledby":"simple-dialog-title",open:c,children:[Object(a.jsx)(gt.a,{id:"simple-dialog-title",children:"Request Auth Settings"}),Object(a.jsxs)(Tt.a,{children:[Object(a.jsx)(St.a,{children:"This affects Authorization header sent to the server you specify. Not shown in URL and can be optionally stored on a client side"}),Object(a.jsx)(At.a,{value:R,onChange:function(e,t){U(t)},indicatorColor:"primary",textColor:"primary",children:en.map((function(e){return Object(a.jsx)(Ct.a,{label:e.title},e.id)}))}),Object(a.jsxs)(f.a,{p:0,display:"flex",flexDirection:"column",className:t.tabsContent,children:[Object(a.jsxs)(f.a,{flexGrow:1,children:[Object(a.jsx)(Lt,{value:R,index:0,children:Object(a.jsx)(p.a,{style:{fontStyle:"italic"},children:"No Authorization Header"})}),Object(a.jsxs)(Lt,{value:R,index:1,children:[Object(a.jsxs)(wt.a,{margin:"dense",fullWidth:!0,children:[Object(a.jsx)(It.a,{htmlFor:"basic-login",children:"User"}),Object(a.jsx)(Rt.a,{id:"basic-login",startAdornment:Object(a.jsx)(Ut.a,{position:"start",children:Object(a.jsx)(Yt.a,{})}),required:!0,onChange:function(e){return E((function(t){return Object(C.a)(Object(C.a)({},t),{},{login:e.target.value||""})}))},value:(null===g||void 0===g?void 0:g.login)||""})]}),Object(a.jsxs)(wt.a,{margin:"dense",fullWidth:!0,children:[Object(a.jsx)(It.a,{htmlFor:"basic-pass",children:"Password"}),Object(a.jsx)(Rt.a,{id:"basic-pass",startAdornment:Object(a.jsx)(Ut.a,{position:"start",children:Object(a.jsx)(Bt.a,{})}),onChange:function(e){return E((function(t){return Object(C.a)(Object(C.a)({},t),{},{password:e.target.value||""})}))},value:(null===g||void 0===g?void 0:g.password)||""})]})]}),Object(a.jsx)(Lt,{value:R,index:2,children:Object(a.jsx)(ct.a,{id:"bearer-auth",label:"Bearer token",multiline:!0,fullWidth:!0,value:S,onChange:function(e){var t=e.target.value;t.startsWith($t)?A(t):A($t)},InputProps:{onPaste:function(e){var t=e.clipboardData.getData("text/plain");t.startsWith($t)?A(t):A($t+t),e.preventDefault()}},rowsMax:6})})]}),Object(a.jsxs)(wt.a,{children:[Object(a.jsx)(y.a,{control:Object(a.jsx)(Dt.a,{checked:h,onChange:function(){return x((function(e){return!e}))},name:"checkedB",color:"primary"}),label:"Persist Auth Data Locally"}),Object(a.jsx)(Ht.a,{children:h?"Auth Data and the Selected method will be saved to LocalStorage":"Auth Data won't be saved. All previously saved Auth Data will be removed"})]})]})]}),Object(a.jsx)(kt.a,{children:Object(a.jsx)(Mt.a,{onClick:function(){switch(R){case 0:d({type:"SET_NO_AUTH",payload:{checkbox:h}});break;case 1:d({type:"SET_BASIC_AUTH",payload:{checkbox:h,value:g}});break;case 2:d({type:"SET_BEARER_AUTH",payload:{checkbox:h,value:{token:S}}})}D()},color:"primary",children:"Apply"})})]})},nn=n(137),an=n.n(nn),rn=n(223),cn=n(110),on=n.n(cn),sn=function(){var e=ue(),t=e.serverUrl,n=e.query,c=e.queryHistory,i=e.time.duration,o=e.queryControls,l=o.autocomplete,u=o.nocache,j=je(),d=Me().yaxis,b=Le(),O=Object(r.useState)(!1),h=Object(s.a)(O,2),x=h[0],v=h[1],m=Object(r.useState)(!0),T=Object(s.a)(m,2),S=T[0],A=T[1],C=Object(r.useRef)(null),w=function(){var e=c.values;n!==e[e.length-1]&&(j({type:"RUN_QUERY"}),j({type:"SET_QUERY_HISTORY_INDEX",payload:e.length}),j({type:"SET_QUERY_HISTORY_VALUES",payload:[].concat(Object(Ye.a)(e),[n])}))},I=function(e){n!==e&&j({type:"SET_QUERY",payload:e})};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(tt.a,{expanded:S,onChange:function(){return A((function(e){return!e}))},children:[Object(a.jsxs)(nt.a,{expandIcon:Object(a.jsx)(vt.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:[Object(a.jsx)(f.a,{mr:2,children:Object(a.jsx)(p.a,{variant:"h6",component:"h2",children:"Query Configuration"})}),Object(a.jsx)(f.a,{flexGrow:1,onClick:function(e){return e.stopPropagation()},onFocusCapture:function(e){return e.stopPropagation()},children:Object(a.jsx)(rn.a,{disablePortal:!S,container:C.current,children:Object(a.jsxs)(f.a,{display:"flex",alignItems:"center",children:[Object(a.jsx)(f.a,{width:"100%",children:Object(a.jsx)(jt,{server:t,query:n,oneLiner:!S,autocomplete:l,queryHistory:c,setHistoryIndex:function(e){var t=c.index+e;t<-1||t>c.values.length||(j({type:"SET_QUERY_HISTORY_INDEX",payload:t}),I(c.values[t]||""))},runQuery:w,setQuery:I})}),Object(a.jsx)(E.a,{title:"Execute Query",children:Object(a.jsx)(_.a,{onClick:w,children:Object(a.jsx)(an.a,{})})})]})})})]}),Object(a.jsx)(at.a,{children:Object(a.jsxs)(rt.a,{container:!0,spacing:2,children:[Object(a.jsx)(rt.a,{item:!0,xs:12,md:6,children:Object(a.jsxs)(f.a,{display:"grid",gridGap:16,children:[Object(a.jsxs)(f.a,{display:"flex",alignItems:"center",children:[Object(a.jsx)(ct.a,{variant:"outlined",fullWidth:!0,label:"Server URL",value:t,inputProps:{style:{fontFamily:"Monospace"}},onChange:function(e){var t=e.target.value;j({type:"SET_SERVER",payload:t})}}),Object(a.jsx)(f.a,{children:Object(a.jsx)(E.a,{title:"Request Auth Settings",children:Object(a.jsx)(_.a,{onClick:function(){return v(!0)},children:Object(a.jsx)(yt.a,{})})})})]}),Object(a.jsx)(f.a,{flexGrow:1,children:Object(a.jsx)("div",{ref:C})})]})}),Object(a.jsx)(rt.a,{item:!0,xs:8,md:6,children:Object(a.jsx)(f.a,{style:{borderRadius:"4px",borderColor:"#b9b9b9",borderStyle:"solid",borderWidth:"1px",height:"100%"},children:Object(a.jsx)(pt,{setDuration:function(e){return j({type:"SET_DURATION",payload:e})},duration:i})})}),Object(a.jsx)(rt.a,{item:!0,xs:12,children:Object(a.jsxs)(f.a,{px:1,display:"flex",alignItems:"center",minHeight:52,children:[Object(a.jsx)(f.a,{children:Object(a.jsx)(y.a,{control:Object(a.jsx)(g.a,{size:"small",checked:l,onChange:function(){j({type:"TOGGLE_AUTOCOMPLETE"}),W("AUTOCOMPLETE",!l)}}),label:"Enable autocomplete"})}),Object(a.jsx)(f.a,{ml:4,children:Object(a.jsx)(y.a,{control:Object(a.jsx)(g.a,{size:"small",checked:!u,onChange:function(){j({type:"NO_CACHE"}),W("NO_CACHE",!u)}}),label:"Enable cache"})}),Object(a.jsxs)(f.a,{ml:4,display:"flex",alignItems:"center",children:[Object(a.jsx)(y.a,{control:Object(a.jsx)(g.a,{size:"small",checked:d.limits.enable,onChange:function(){b({type:"TOGGLE_ENABLE_YAXIS_LIMITS"})}}),label:"fix the limits for y-axis"}),d.limits.enable&&Object(a.jsxs)(f.a,{display:"grid",gridTemplateColumns:"120px 120px",gridGap:10,children:[Object(a.jsx)(ct.a,{label:"Min",type:"number",size:"small",variant:"outlined",defaultValue:d.limits.range[0],onChange:on()((function(e){var t=e.target.value;b({type:"SET_YAXIS_LIMITS",payload:[+t,d.limits.range[1]]})}),750)}),Object(a.jsx)(ct.a,{label:"Max",type:"number",size:"small",variant:"outlined",defaultValue:d.limits.range[1],onChange:on()((function(e){var t=e.target.value;b({type:"SET_YAXIS_LIMITS",payload:[d.limits.range[0],+t]})}),750)})]})]})]})})]})})]}),Object(a.jsx)(tn,{open:x,onClose:function(){return v(!1)}})]})},ln=n(111),un=n.n(ln),jn=n(139),dn=function(){var e=ue(),t=e.query,n=e.displayType,a=e.serverUrl,c=e.time.period,i=e.queryControls.nocache,o=Jt(),l=o.basicData,u=o.bearerData,j=o.authMethod,d=Object(r.useState)(!1),b=Object(s.a)(d,2),O=b[0],h=b[1],f=Object(r.useState)(),p=Object(s.a)(f,2),x=p[0],v=p[1],m=Object(r.useState)(),y=Object(s.a)(m,2),g=y[0],E=y[1],_=Object(r.useState)(),T=Object(s.a)(_,2),S=T[0],A=T[1];Object(r.useEffect)((function(){S&&(v(void 0),E(void 0))}),[S]);var w=Object(r.useMemo)((function(){if(c){if(!a)return void A("Please enter Server URL");if(!t.trim())return void A("Please enter a valid Query and execute it");if(function(e){var t;try{t=new URL(e)}catch(n){return!1}return"http:"===t.protocol||"https:"===t.protocol}(a)){var e=(c.end-c.start)/2,r=Object(C.a)(Object(C.a)({},c),{},{start:c.start-e,end:c.end+e});return"chart"===n?function(e,t,n,a){return"".concat(e,"/api/v1/query_range?query=").concat(encodeURIComponent(t),"&start=").concat(n.start,"&end=").concat(n.end,"&step=").concat(n.step).concat(a?"&nocache=1":"")}(a,t,r,i):function(e,t,n){return"".concat(e,"/api/v1/query?query=").concat(encodeURIComponent(t),"&start=").concat(n.start,"&end=").concat(n.end,"&step=").concat(n.step)}(a,t,c)}A("Please provide a valid URL")}}),[a,c,n]);return Object(r.useEffect)((function(){Object(jn.a)(un.a.mark((function e(){var a,r,c,i;return un.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w){e.next=38;break}return a=new Headers,"BASIC_AUTH"===j&&a.set("Authorization","Basic "+btoa("".concat((null===l||void 0===l?void 0:l.login)||"",":").concat((null===l||void 0===l?void 0:l.password)||""))),"BEARER_AUTH"===j&&a.set("Authorization",(null===u||void 0===u?void 0:u.token)||""),h(!0),e.prev=5,e.next=8,fetch(w,{headers:a});case 8:if(!(r=e.sent).ok){e.next=18;break}return W("LAST_QUERY",t),e.next=13,r.json();case 13:c=e.sent,A(void 0),"chart"===n?v(c.data.result):E(c.data.result),e.next=32;break;case 18:return e.t0=A,e.next=21,r.json();case 21:if(e.t2=i=e.sent,e.t1=null===e.t2,e.t1){e.next=25;break}e.t1=void 0===i;case 25:if(!e.t1){e.next=29;break}e.t3=void 0,e.next=30;break;case 29:e.t3=i.error;case 30:e.t4=e.t3,(0,e.t0)(e.t4);case 32:e.next=37;break;case 34:e.prev=34,e.t5=e.catch(5),A(e.t5.message);case 37:h(!1);case 38:case"end":return e.stop()}}),e,null,[[5,34]])})))()}),[w,a,n]),{fetchUrl:w,isLoading:O,graphData:x,liveData:g,error:S}},bn=function(e){var t=e.data,n=d().showInfoMessage,c=Object(r.useMemo)((function(){return JSON.stringify(t,null,2)}),[t]);return Object(a.jsxs)(f.a,{position:"relative",children:[Object(a.jsx)(f.a,{flexDirection:"column",justifyContent:"flex-end",display:"flex",style:{position:"fixed",right:"16px"},children:Object(a.jsx)(Mt.a,{variant:"outlined",onClick:function(e){navigator.clipboard.writeText(c),n("Formatted JSON has been copied"),e.preventDefault()},children:"Copy JSON"})}),Object(a.jsx)("pre",{children:c})]})},On=n(140),hn=n.n(On),fn=function(e){var t=e.url,n=d().showInfoMessage;return Object(a.jsx)(f.a,{pl:2,py:1,flexShrink:0,display:"flex",children:Object(a.jsx)(E.a,{title:"Copy Query URL",children:Object(a.jsx)(_.a,{size:"small",onClick:function(e){t&&(navigator.clipboard.writeText(t),n("Value has been copied"),e.preventDefault())},children:Object(a.jsx)(hn.a,{style:{color:"white"}})})})})},pn=function(){var e=ue(),t=e.displayType,n=e.time.period,r=dn(),c=r.fetchUrl,i=r.isLoading,o=r.liveData,s=r.graphData,l=r.error;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O.a,{position:"static",children:Object(a.jsxs)(h.a,{children:[Object(a.jsxs)(f.a,{display:"flex",children:[Object(a.jsxs)(p.a,{variant:"h5",children:[Object(a.jsx)("span",{style:{fontWeight:"bolder"},children:"VM"}),Object(a.jsx)("span",{style:{fontWeight:"lighter"},children:"UI"})]}),Object(a.jsx)("div",{style:{fontSize:"10px",marginTop:"-2px"},children:Object(a.jsx)("div",{children:"BETA"})})]}),Object(a.jsx)("div",{style:{fontSize:"10px",position:"absolute",top:"40px",opacity:".4"},children:Object(a.jsx)(x.a,{color:"inherit",href:"https://github.com/VictoriaMetrics/VictoriaMetrics/issues/new",target:"_blank",children:"Create an issue"})}),Object(a.jsx)(f.a,{ml:4,flexGrow:1,children:Object(a.jsx)(pe,{})}),Object(a.jsx)(Ce,{}),Object(a.jsx)(fn,{url:c})]})}),Object(a.jsxs)(f.a,{p:2,display:"grid",gridTemplateRows:"auto 1fr",gridGap:"20px",style:{minHeight:"calc(100vh - 64px)"},children:[Object(a.jsx)(f.a,{children:Object(a.jsx)(sn,{})}),Object(a.jsxs)(f.a,{height:"100%",children:[i&&Object(a.jsx)(v.a,{in:i,style:{transitionDelay:i?"300ms":"0ms"},children:Object(a.jsx)(f.a,{alignItems:"center",justifyContent:"center",flexDirection:"column",display:"flex",style:{width:"100%",maxWidth:"calc(100vw - 32px)",position:"absolute",height:"50%",background:"linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7), rgba(255,255,255,0))"},children:Object(a.jsx)(m.a,{})})}),Object(a.jsxs)(f.a,{height:"100%",p:3,bgcolor:"#fff",children:[l&&Object(a.jsx)(u.a,{color:"error",severity:"error",style:{fontSize:"14px"},children:l}),s&&n&&"chart"===t&&Object(a.jsx)(Fe,{data:s}),o&&"code"===t&&Object(a.jsx)(bn,{data:o}),o&&"table"===t&&Object(a.jsx)(et,{data:o})]})]})]})]})},xn=n(144),vn=n(250),mn=n(249),yn=n(30),gn=n(141),En=function(){var e=Object(xn.a)({typography:{fontSize:10}});return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(mn.a,{})," ",Object(a.jsxs)(yn.a,{utils:gn.a,children:[" ",Object(a.jsxs)(vn.a,{theme:e,children:["  ",Object(a.jsxs)(be,{children:[" ",Object(a.jsxs)(Kt,{children:[" ",Object(a.jsxs)(Ne,{children:[" ",Object(a.jsxs)(b,{children:[" ",Object(a.jsx)(pn,{})]})]})]})]})]})]})]})},_n=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,266)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(En,{})}),document.getElementById("root")),_n()}},[[185,1,2]]]);