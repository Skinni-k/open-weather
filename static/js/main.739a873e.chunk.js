(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),i=(a(85),a(86),a(25)),l=a(11),u=a(45),s=a.n(u),d=function(){return r.a.createElement("div",{className:s.a.header},r.a.createElement(i.b,{className:s.a.Link,to:"/",exact:"true"},r.a.createElement("h1",null,"Weather Forecast")))},m=a(48),p=a.n(m),h=a(65),b=a(6),f=a(33),g=a.n(f),v=a(49),_=a.n(v),E=a(150),O=a(154),j=a(156),w=a(155),y=a(157),S=a(22),T=a.n(S),x=function(e){var t=e.place,a=e.longitude,n=e.latitude,c=e.weather,o=e.humidity,i=e.lowTemp,l=e.highTemp,u=e.sunrise,s=e.sunset;return r.a.createElement(E.a,{className:" ".concat(T.a.MuiPaperRounded," ")},r.a.createElement(O.a,null,r.a.createElement(w.a,{className:T.a.media,image:function(e){return"Rain"===e?"https://www.theharlemvalleynews.net/wp-content/uploads/2015/03/rain_showers.png":"Snow"===e?"https://freesvg.org/img/sivvus_weather_symbols_5.png":"Clear"===e?"https://png.vector.me/files/images/1/6/166202/symbols_weather_clear_sunny.jpg":"Clouds"===e?"https://www.clipartkey.com/mpngs/m/19-197515_showing-post-media-for-cool-and-cloudy-weather.png":void 0}(c),title:"Weather"}),r.a.createElement(j.a,null,r.a.createElement(y.a,{className:T.a.cardTitle,gutterBottom:!0,variant:"h5",component:"h3"},t," - ",a,", ",n),r.a.createElement(y.a,{component:"p"},"Humidity - ",o,"\xb0C"),r.a.createElement(y.a,{component:"p"},"Low Temp. - ",i,"\xb0C"),r.a.createElement(y.a,{component:"p"},"High Temp. - ",l,"\xb0C"),r.a.createElement(y.a,{component:"p"},"Sunrise - ",u),r.a.createElement(y.a,{component:"p"},"Sunset - ",s))))},F=function(e){var t=e.indexValue,a=e.cardList,n=e.place,c=e.longitude,o=e.latitude,l=e.weather,u=e.humidity,s=e.lowTemp,d=e.highTemp,m=e.sunrise,p=e.sunset,h=Object(b.a)(m,3),f=h[0],g=h[1],v=h[2],_=Object(b.a)(p,3),E=_[0],O=_[1],j=_[2],w=[{when:"Today."},{when:"Tomorrow",style:T.a.root1},{when:"overmorrow",style:T.a.root2},{when:"Two days later",style:T.a.root3},{when:"Three Days Later",style:T.a.root4},{when:"Four Days Later",style:T.a.root5}];return r.a.createElement("div",null,a?r.a.createElement(i.b,{key:w.indexValue,className:T.a.Link,exact:"true",to:{pathname:"/id=".concat(t),state:{place:n,longitude:c,latitude:o,weather:l,humidity:u,lowTemp:s,highTemp:d,sunrise:m,sunset:p}}},r.a.createElement("div",{className:w[t].style},r.a.createElement(x,{place:n,longitude:c,latitude:o,weather:l,humidity:u,lowTemp:s,highTemp:d,sunrise:"".concat(f," ").concat(g," ").concat(v," "),sunset:"".concat(E," ").concat(O," ").concat(j," ")}))):r.a.createElement(x,{place:n,longitude:c,latitude:o,weather:l,humidity:u,lowTemp:s,highTemp:d,sunrise:"".concat(f," ").concat(g," ").concat(v," "),sunset:"".concat(E," ").concat(O," ").concat(j," ")}))},C=a(159),k=a(161),L=a(41),N=a.n(L),D=a(160),B=a(4),R=Object(B.a)({root:{"& label.Mui-focused":{color:"#000",fontSize:"20px",fontWeight:"bold"},"& .MuiOutlinedInput-root":{"& fieldset":{border:"3px solid #000",borderRadius:"10px"},"&.Mui-focused fieldset":{border:"3px solid #FFF",borderColor:"white"}}}})(C.a),H=function(e){var t=e.onValueChange,a=e.onSubmitHandler,n=e.placeList,c=e.onPlaceSelect;return r.a.createElement(D.b,{injectFirst:!0},r.a.createElement("div",null,r.a.createElement("form",{className:N.a.form,onSubmit:a},r.a.createElement(k.a,{className:N.a.searchBar,freeSolo:!0,options:n,getOptionLabel:function(e){return e.display_name},onChange:c,renderInput:function(e){return r.a.createElement(R,Object.assign({},e,{onChange:t,label:"Enter Location",variant:"outlined",id:"custom-css-outlined-input",required:!0}))}}),r.a.createElement("button",{className:N.a.submitButton},"SEARCH")),r.a.createElement("div",null)))},M=a(71),q=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),i=Object(b.a)(o,2),l=i[0],u=i[1],s=Object(n.useState)([]),d=Object(b.a)(s,2),m=d[0],f=d[1],v=Object(n.useState)(""),E=Object(b.a)(v,2),O=E[0],j=E[1],w=Object(n.useState)(""),y=Object(b.a)(w,2),S=y[0],T=y[1],x=Object(n.useState)(!1),C=Object(b.a)(x,2),k=C[0],L=C[1],N=Object(n.useRef)(!0),D=Object(M.debounce)((function(e){g.a.get("https://api.locationiq.com/v1/autocomplete.php?key=".concat("b600f7b8e65061&q","&q=").concat(e)).then((function(e){u(e.data)})).catch((function(e){window.alert("ENTER CORRECT LOCATION")}))}),400);Object(n.useLayoutEffect)((function(){N.current?N.current=!1:B()}),[O&&S]);var B=function(){var e=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(S,"&lon=").concat(O,"&units=metric&appid=").concat("0c696ec6fa2c35f0d62d8c3423ffdf67")).then((function(e){f(e.data.daily)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(e){var t=new Date(parseInt(e+"000"));return[t.toString().substring(0,3),t.toString().substring(4,15),t.toString().substring(16,24)]};return r.a.createElement("div",null,r.a.createElement(H,{onValueChange:function(e){e.target.value.length>3&&D(e.target.value)},placeList:l,onPlaceSelect:function(e,t){null!==t?(j(t.lon),T(t.lat),c(t.display_place)):L(!1)},onSubmitHandler:function(e){e.preventDefault(),O.length>0&&O.length>0?L(!0):window.alert("Please Select location from dropdown")}}),r.a.createElement("div",{className:_.a.cards},k?[1,2,3,4,5].map((function(e){var t,n,c,o,i,l,u,s,d,p,h,b,f;return r.a.createElement(F,{key:e,indexValue:e,cardList:!0,place:null===a||void 0===a?void 0:a.toString(),longitude:null===O||void 0===O?void 0:O.toString(),latitude:null===S||void 0===S?void 0:S.toString(),weather:null===(t=m[e])||void 0===t||null===(n=t.weather[0])||void 0===n||null===(c=n.main)||void 0===c?void 0:c.toString(),humidity:null===(o=m[e])||void 0===o||null===(i=o.humidity)||void 0===i?void 0:i.toString(),lowTemp:null===(l=m[e])||void 0===l||null===(u=l.temp)||void 0===u||null===(s=u.min)||void 0===s?void 0:s.toString(),highTemp:null===(d=m[e])||void 0===d||null===(p=d.temp)||void 0===p||null===(h=p.max)||void 0===h?void 0:h.toString(),sunrise:R(null===(b=m[e])||void 0===b?void 0:b.sunrise),sunset:R(null===(f=m[e])||void 0===f?void 0:f.sunset)})})):r.a.createElement(r.a.Fragment,null)),r.a.createElement("div",{className:_.a.credit}," ",r.a.createElement("p",null," ","Made By"," ",r.a.createElement("a",{href:"https://www.linkedin.com/in/kevin-dewinter/",target:"_blank",rel:"noopener noreferrer"}," ","Kevin Dewinter"," ")," ")))},A=a(42),I=a.n(A),P=a(50),W=a.n(P),V=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){var e=setTimeout((function(){c(!0)}),5e3);return function(){return clearTimeout(e)}}),[]);return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(l.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("h1",{className:W.a.errorTitle},"404: Page Not Found"),r.a.createElement(i.b,{className:W.a.Link,exact:"true",onClick:function(){c(!0)},to:"/"}," Click Here to Go back to Homepage")))},G=a(72),J=a.n(G),K=a(44),U=a.n(K),z=function(e){var t=Object(b.a)(e.graphData,4),a=t[0],n=t[1],c=t[2],o={colors:["#aaeeee","#82D071","#F45B5B"],chart:{backgroundColor:{linearGradient:{x1:0,y1:0,x2:1,y2:1},stops:[[0,"#2a2a2b"],[1,"#3e3e40"]]},borderColor:"salmon",borderRadius:20,borderWidth:2,type:"line"},yAxis:{title:{text:"Temperature",style:{color:"#FFF"}}},xAxis:{categories:t[3],lineColor:"#FFF",lineWidth:1,plotOptions:{series:{colors:["#0F5474","#82D071","#F45B5B"]}},gridLineColor:"#000",title:{text:"Time",style:{color:"#FFF"}}},legend:{backgroundColor:"rgba(0, 0, 0, 0.5)",itemStyle:{color:"#FFFFFF"},itemHoverStyle:{color:"#E0E0E3"},itemHiddenStyle:{color:"#606063"},title:{text:"LEGEND",style:{color:"pink"}}},series:[{name:"Low Temperature",data:a},{name:"Avg. Temperature",data:n},{name:"High Temperature",data:c}]};return r.a.createElement(J.a,{highcharts:U.a,options:o})},Z=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),i=Object(b.a)(o,2),u=i[0],s=i[1],d=Object(n.useState)(""),m=Object(b.a)(d,2),p=m[0],h=m[1],f=Object(n.useState)(""),v=Object(b.a)(f,2),_=v[0],E=v[1],O=Object(n.useState)(""),j=Object(b.a)(O,2),w=j[0],y=j[1],S=Object(n.useState)(""),T=Object(b.a)(S,2),x=T[0],C=T[1],k=Object(n.useState)(""),L=Object(b.a)(k,2),N=L[0],D=L[1],B=Object(n.useState)(""),R=Object(b.a)(B,2),H=R[0],M=R[1],q=Object(n.useState)(""),A=Object(b.a)(q,2),P=A[0],W=A[1],G=Object(n.useState)([]),J=Object(b.a)(G,2),K=J[0],U=J[1],Z=Object(n.useState)([]),X=Object(b.a)(Z,2),Y=X[0],Q=X[1],$=Object(n.useState)([]),ee=Object(b.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useState)([]),re=Object(b.a)(ne,2),ce=re[0],oe=re[1],ie=Object(n.useState)([]),le=Object(b.a)(ie,2),ue=le[0],se=le[1],de=Object(n.useState)([]),me=Object(b.a)(de,2),pe=me[0],he=me[1],be=Object(n.useState)(!1),fe=Object(b.a)(be,2),ge=fe[0],ve=fe[1],_e=Object(n.useState)(!1),Ee=Object(b.a)(_e,2),Oe=Ee[0],je=Ee[1],we=Object(n.useState)({}),ye=Object(b.a)(we,2),Se=ye[0],Te=ye[1],xe=Object(l.g)();Object(n.useEffect)((function(){void 0!==xe.state?(h(xe.state.place),E(xe.state.longitude),y(xe.state.latitude),C(xe.state.weather),D(xe.state.humidity),M(xe.state.lowTemp),W(xe.state.highTemp),U(xe.state.sunrise),Q(xe.state.sunset)):je(!0)}),[]),Object(n.useEffect)((function(){w.length>0&&Fe()}),[w]);var Fe=function(){g.a.get("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(w,"&lon=").concat(_,"&units=metric&appid=").concat("0c696ec6fa2c35f0d62d8c3423ffdf67")).then((function(e){c(e.data.list)}))};Object(n.useEffect)((function(){if(a.length>0&&K.length>0){var e=K[1].substr(4,2);Ce(e)}}),[a]);var Ce=function(e){var t=e,n=a.filter((function(e){var a="".concat(e.dt_txt," UTC");return new Date(a).getDate()==t}));s(n)};Object(n.useEffect)((function(){u.length>0&&ke()}),[u]);var ke=function(){var e=u.map((function(e){return e.main.temp_min})),t=u.map((function(e){return e.main.temp})),a=u.map((function(e){return e.main.temp_max})),n=u.map((function(e){var t="".concat(e.dt_txt," UTC");return new Date(t).getHours()}));he(n),ae(e),oe(t),se(a)};return Object(n.useEffect)((function(){te.length>0&&ce.length>0&&ue.length>0&&pe.length>0&&(Te([te,ce,ue,pe]),ve(!0))}),[ue]),r.a.createElement(r.a.Fragment,null,Oe?r.a.createElement(V,null):r.a.createElement(r.a.Fragment,null,x.length>0?r.a.createElement("div",{className:I.a.individualCard},r.a.createElement("p",{className:I.a.day},"".concat(K[0]," - ").concat(K[1])),r.a.createElement(F,{cardList:!1,place:p,longitude:_,latitude:w,weather:x,humidity:N,lowTemp:H,highTemp:P,sunrise:K,sunset:Y})):r.a.createElement(r.a.Fragment,null),ge&&Se.length>0?r.a.createElement("div",{className:I.a.chart},r.a.createElement(z,{graphData:Se})):r.a.createElement(r.a.Fragment,null)))};var X=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/",exact:!0,component:q}),r.a.createElement(l.b,{path:"/id=:id",exact:!0,component:Z}),r.a.createElement(l.b,{component:V}))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root"))},22:function(e,t,a){e.exports={media:"card_media__1tsul",MuiPaperRounded:"card_MuiPaperRounded__EJUVq",Link:"card_Link__G1tTK",cardTitle:"card_cardTitle__1bBMb",root1:"card_root1__XEgei",root2:"card_root2__2vxum",root3:"card_root3__3SxR1",root4:"card_root4__372mF",root5:"card_root5__22y1F"}},41:function(e,t,a){e.exports={form:"search_form__319NM",searchBar:"search_searchBar__3GAgf",submitButton:"search_submitButton__wZlpx"}},42:function(e,t,a){e.exports={individualCard:"individualDay_individualCard__38Bq-",day:"individualDay_day__2Cgy-",chart:"individualDay_chart__qev0z"}},45:function(e,t,a){e.exports={header:"header_header__jZoER",Link:"header_Link__1i9qg"}},49:function(e,t,a){e.exports={cards:"home_cards__1hIpn",hidden:"home_hidden__b1W_b",wait:"home_wait__125d6",credit:"home_credit__224R9"}},50:function(e,t,a){e.exports={Link:"error_Link__3W0hx",errorTitle:"error_errorTitle__1IYKE"}},80:function(e,t,a){e.exports=a(110)},85:function(e,t,a){},86:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.739a873e.chunk.js.map