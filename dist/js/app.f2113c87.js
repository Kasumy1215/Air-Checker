(function(t){function e(e){for(var n,s,o=e[0],c=e[1],u=e[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,o=1;o<r.length;o++){var c=r[o];0!==i[c]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},i={app:0},a=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),i=r.n(n);i.a},"34ec":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"d-flex justify-content-end",attrs:{id:"app"}},[r("h1",{staticClass:"header"},[t._v("Air 👀 Checker")]),r("h3",[t._v("You are "+t._s(t.selectedValue)+".")]),r("user",{attrs:{items:t.items,showEmptyItem:!0,disabled:!1,ignoreCase:!0,emptyItemValue:"SAMPLE_EMPTY_VALUE",emptyItemText:"",placeholder:"Please select...",name:"user-action",idKey:"id",valueKey:"name",textKey:"name",filterTargetKey:"name"},model:{value:t.selectedValue,callback:function(e){t.selectedValue=e},expression:"selectedValue"}}),r("currentweather",{attrs:{currentTemperature:t.currentTemperature,currentHumidity:t.currentHumidity,currentCO2:t.currentCO2}}),r("checker",{attrs:{currentTemperature:t.currentTemperature,currentHumidity:t.currentHumidity,currentCO2:t.currentCO2}})],1)},a=[],s=r("bc3a"),o=r.n(s),c=r("4328"),u=r.n(c),l=o.a.create({baseURL:"https://api.netatmo.com",headers:{"Content-Type":"application/x-www-form-urlencoded"}}),p={client_id:"5e3f9fb9777bfcacee720342",client_secret:"rSB31YIylu619sKu9gRj8wX8BPAFeP9I3jzeg",username:"kasumy1215@gmail.com",password:"19881215_nknKSM",grant_type:"password"};o()({method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},url:"https://api.netatmo.com/oauth2/token",data:u.a.stringify(p)}).then((function(t){console.log("Success"),console.log(t.data)})).catch((function(){console.log("Failure")}));var d=function(){return l.post("/oauth2/token",u.a.stringify(p)).then((function(t){return console.log("getAccessToken Success"),t.data.access_token})).catch((function(){console.log("getAccessToken Fail")}))},m=function(t){var e={access_token:t};return l.post("api/getstationsdata",u.a.stringify(e)).then((function(t){return console.log("getstationsdata Success"),t})).catch((function(){console.log("getstationsdata Fail")}))};d().then((function(t){return m(t)})).then((function(t){var e=t.data.body.devices[0].dashboard_data;return console.log(e),e}));var f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"current-weather"},[r("h3",[t._v("Temperature 🌡️ "+t._s(t.currentTemperature)+" °C")]),r("h3",[t._v("Humidity 🧪 "+t._s(t.currentHumidity)+" %")]),r("h3",[t._v("CO2 💨 "+t._s(t.currentCO2)+" ppm")])])},h=[],g={name:"CurrentWeather",props:["currentTemperature","currentHumidity","currentCO2"]},y=g,v=r("2877"),A=Object(v["a"])(y,f,h,!1,null,null,null),b=A.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{id:"checker"}},[r("b-row",[r("b-col",{staticClass:"icon-box",attrs:{id:"temp"}},[r("p",{staticClass:"temp"},[t._v("Temperature")]),t.currentTemperature<20?r("div",[r("img",{staticClass:"icon",attrs:{src:"https://1.bp.blogspot.com/-SD2SLEBhKbs/Wm1y1HxnzXI/AAAAAAABJ7w/2wWMAg_JodMxomuStn9QuVMD3OCuUapfwCLcBGAs/s800/snowman_yukidaruma_sandan.png",alt:"warmer"}}),r("p",[t._v("Cold!")])]):t.currentTemperature>26?r("div",[r("img",{staticClass:"icon",attrs:{src:"https://1.bp.blogspot.com/-iRYEw5CioiY/UYns8PZ51sI/AAAAAAAARbk/b0ryOTxxRBs/s800/taiyou.png",alt:"cooler"}}),r("p",[t._v("Hot!")])]):r("div",[r("img",{staticClass:"icon",attrs:{src:"https://4.bp.blogspot.com/-AEWA4yV514Q/Whu2W36W6_I/AAAAAAABIhA/OI6lwSbjdy0abvsGIRZ9CpzU4tur74D_gCLcBGAs/s800/kazetooshi_house_good.png",alt:"good"}}),r("p",[t._v("Good Temp!")])])]),r("b-col",{staticClass:"icon-box",attrs:{id:"humi",border:"dark"}},[r("p",{staticClass:"humi"},[t._v("Humidity")]),t.currentHumidity>70?r("div",[r("img",{staticClass:"icon",attrs:{src:"https://2.bp.blogspot.com/-Q9FceITXyzg/VpjBvZ4gc-I/AAAAAAAA28g/TS3PM4z_Cx0/s800/shikke_atsui.png",alt:"dry"}}),r("p",[t._v("Humid!")])]):t.currentHumidity<40?r("div",[r("img",{staticClass:"icon",attrs:{src:"https://2.bp.blogspot.com/-YsE9qUK3NiU/VfS6QTJOiLI/AAAAAAAAxOw/6Xovg6TNcqI/s800/hair_edage_kansou.png",alt:"moist"}}),r("p",[t._v("Dry!")])]):r("div",[r("img",{staticClass:"icon",attrs:{src:"https://3.bp.blogspot.com/-e1fFAGLQaq4/UzAK7QZqsPI/AAAAAAAAea4/gepz0wMfmkQ/s800/biyou_tsurutsuru.png",alt:"good"}}),r("p",[t._v("Optimal Humidity!")])])]),r("b-col",{staticClass:"icon-box",attrs:{id:"CO2"}},[r("p",{staticClass:"CO2"},[t._v("CO2")]),t.currentCO2>=1e3?r("div",[r("img",{staticClass:"icon",attrs:{src:"https://1.bp.blogspot.com/-PWoqcqACMtE/UR2iwNiZCQI/AAAAAAAAMx0/alx5ukNo5Bw/s1600/open_close_window.png",alt:"air-out"}}),r("p",[t._v("Too much CO2!")])]):r("div",[r("img",{staticClass:"icon",attrs:{src:"https://4.bp.blogspot.com/-nwgj7Uh-ooI/WGnPaIeQD1I/AAAAAAABA6M/Y8TUclXA93Q5WTT81nd4DdJep5fV1H8ywCLcB/s800/room_living_clean.png",alt:"good"}}),r("p",[t._v("Good Air!")])])])],1)],1)},C=[],w={name:"Checker",props:["currentTemperature","currentHumidity","currentCO2"]},x=w,T=(r("c202"),Object(v["a"])(x,_,C,!1,null,null,null)),k=T.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"wrapper",staticClass:"user"},[r("input",{attrs:{type:"hidden",name:t.name},domProps:{value:t.value}}),r("input",{ref:"textBox",staticClass:"action-display-textbox",attrs:{type:"text",disabled:t.disabled,placeholder:t.placeholder,readonly:"readonly"},domProps:{value:t.displayText},on:{click:t.textBoxClicked}}),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}],staticClass:"action-list"},[r("div",{staticClass:"action-filter-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filterString,expression:"filterString"}],ref:"filterTextBox",staticClass:"action-filter-textbox",attrs:{type:"text",placeholder:"Filter..."},domProps:{value:t.filterString},on:{input:function(e){e.target.composing||(t.filterString=e.target.value)}}})]),r("ul",[t.showEmptyItem?r("li",{staticClass:"action-item",attrs:{value:t.emptyItemValue},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.itemClicked(null)}}},[t._v(" "+t._s(t.emptyItemText||" ")+" ")]):t._e(),t._l(t.filteredItems,(function(e){return r("li",{key:"item_"+(t.idKey?e[t.idKey]:e),staticClass:"action-item",attrs:{value:t.valueKey?e[t.valueKey]:e},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.itemClicked(e)}}},[t._v(" "+t._s(t.textKey?e[t.textKey]:e)+" ")])})),0===t.filteredItems.length?r("li",[t._v("No Items")]):t._e()],2)])])},S=[],I=(r("4de4"),r("7db0"),r("a9e3"),r("4d63"),r("ac1f"),r("25f0"),{name:"User",data:function(){return{filterString:null,showList:!1}},props:{name:{type:String,default:""},value:{type:[String,Number,Boolean,Date],default:null},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},showEmptyItem:{type:Boolean,default:!1},emptyItemText:{type:String,default:null},emptyItemValue:{type:String,default:null},items:{type:Array,default:null},idKey:{type:String,default:null},valueKey:{type:String,default:null},textKey:{type:String,default:null},filterTargetKey:{type:String,default:null},ignoreCase:{type:Boolean,default:!0}},computed:{filteredItems:function(){var t=this;if(!this.filterString)return this.items;if(!this.items||0===this.items.length)return[];var e=this.ignoreCase?"i":"",r=new RegExp(this.filterString,e);return this.items.filter((function(e){var n=t.filterTargetKey?e[t.filterTargetKey]:JSON.stringify(e);return r.test(n)}))},selectedItem:function(){var t=this;return this.items.find((function(e){return t.value===(t.valueKey?e[t.valueKey]:e)}))},displayText:function(){var t=this.selectedItem;return t?this.textKey?t[this.textKey]:t:""}},methods:{textBoxClicked:function(){this.disabled||(this.showList=!this.showList)},itemClicked:function(t){if(t){var e=this.valueKey?t[this.valueKey]:t;this.$emit("input",e)}else this.$emit("input",this.emptyItemValue||null);this.reset()},reset:function(){this.showList=!1,this.filterString=""}},watch:{showList:function(t){var e=this;this.$nextTick((function(){t&&e.$refs.filterTextBox.focus()}))}},mounted:function(){var t=this;document.addEventListener("click",(function(e){var r=(e.target||e.srcElement).closest(".user");r!==t.$refs.wrapper&&t.reset()}))}}),K=I,P=(r("ce6d"),Object(v["a"])(K,O,S,!1,null,"72f05b25",null)),B=P.exports,j={name:"App",components:{currentweather:b,checker:k,user:B},data:function(){return{currentTemperature:0,currentHumidity:0,currentCO2:0,selectedValue:null,items:[{id:1,name:"Doing WorkOut 💪"},{id:2,name:"Studying 🏫"},{id:3,name:"Working at Desk 👔"},{id:4,name:"Working Physicaly 💪"},{id:5,name:"Relaxing 😃"},{id:6,name:"Sleeping 🛌"}]}},created:function(){console.log("--------created------------"),this.getCurrentData()},methods:{getCurrentData:function(){var t=this;console.log("--------methods--------"),d().then((function(t){return console.log("Yay"),m(t)})).then((function(e){var r=e.data.body.devices[0].dashboard_data;console.log("currentData = ".concat(r)),t.currentTemperature=r.Temperature,t.currentHumidity=r.Humidity,t.currentCO2=r.CO2}))}}},H=j,E=(r("034f"),Object(v["a"])(H,i,a,!1,null,null,null)),L=E.exports,M=r("5f5b");n["default"].use(M["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(L)}}).$mount("#app")},"6fa5":function(t,e,r){},"85ec":function(t,e,r){},c202:function(t,e,r){"use strict";var n=r("6fa5"),i=r.n(n);i.a},ce6d:function(t,e,r){"use strict";var n=r("34ec"),i=r.n(n);i.a}});
//# sourceMappingURL=app.f2113c87.js.map