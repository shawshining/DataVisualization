webpackJsonp([1],{"+C1S":function(t,e){},"2OiD":function(t,e){},E5AM:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{staticClass:"router-view"})],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App",mounted:function(){},created:function(){},methods:{}},r,!1,function(t){a("+C1S")},null,null).exports,o=a("9rMa"),s=a("/ocq"),l=a("a3Yh"),c=a.n(l),u=a("aA9S"),d=a.n(u),m=a("aozt"),p=a.n(m);function f(t){return new Promise(function(e,a){window.onload=function(){e(BMap)};var n=document.createElement("script");n.type="text/javascript",n.src="//api.map.baidu.com/api?v=2.0&ak="+t+"&callback=init",n.onerror=a,document.head.appendChild(n)})}var h={props:{legendArr:{type:Array,default:[]},myChart:Object,name:String},created:function(){this.init()},data:function(){return{styleArr:[],color:this.$store.state.color}},methods:{init:function(){var t=this;this.color.forEach(function(e){t.styleArr.push({background:e,border:"1px solid"+e})})},highlight:function(t){},donwplay:function(t){},legendToggle:function(t){t.selected=!t.selected,this.changeStyle()},changeStyle:function(){var t=this;this.legendArr.forEach(function(e,a){e.selected?(t.styleArr[a].background=t.color[a],t.styleArr[a].border="1px solid"+t.color[a]):(t.styleArr[a].background="transparent",t.styleArr[a].border="1px solid #9C8C84")})}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("h1",[t._v(t._s(t.name))]),t._v(" "),a("div",{staticClass:"legend-wrapper"},[a("ul",t._l(t.legendArr,function(e,n){return a("li",{style:t.styleArr[n],on:{mouseout:function(e){t.donwplay(n)},mouseover:function(e){t.highlight(n)},click:function(a){t.legendToggle(e)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])}))])])},staticRenderFns:[]};var g=a("VU/8")(h,v,!1,function(t){a("E5AM")},null,null).exports,_={props:{isChecked:{type:Boolean,default:!0}}},y={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"v-checkbox",class:{checked:this.isChecked}})},staticRenderFns:[]};var E={data:function(){return{startDate:"2017.04.01",endDate:"2017.05.27",pro_filter_flag:!1,pro_list:[],option:{},resetOption:{},preClass:"",showProduct:!1,showTime:!1}},methods:{},components:{checkbox:a("VU/8")(_,y,!1,function(t){a("vKDi")},null,null).exports}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter"},[a("div",{staticClass:"startTime"},[a("span",{staticClass:"timeText"},[t._v("起始时间")]),t._v(" "),a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}}),t._v(" "),a("div",{staticClass:"myCalendar"})],1),t._v(" "),a("div",{staticClass:"endTime"},[a("span",{staticClass:"timeText"},[t._v("截止时间")]),t._v(" "),a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}}),t._v(" "),a("div",{staticClass:"myCalendar"})],1)])},staticRenderFns:[]};var A=a("VU/8")(E,b,!1,function(t){a("rDdZ")},null,null).exports,D={data:function(){return{map:null,mPoint:null}},methods:{createMap:function(){this.map=new BMap.Map("allmap"),this.$emit("map",this.map),this.mPoint=new BMap.Point(116.404,39.915),this.$emit("point",this.mPoint);this.map.setMapStyle({styleJson:[{featureType:"all",elementType:"all",stylers:{lightness:10,saturation:-100}}]}),this.map.enableContinuousZoom(),this.map.addControl(new BMap.MapTypeControl),this.map.addControl(new BMap.NavigationControl),this.map.enableScrollWheelZoom(),this.map.centerAndZoom(this.mPoint,13),this.map.addControl(new BMap.OverviewMapControl)}}},T={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"allmap"}})},staticRenderFns:[]};var M=a("VU/8")(D,T,!1,function(t){a("Two5")},null,null).exports,S={data:function(){return{map:null,mPoint:null,ak:"ZUONbpqGBsYGXNIYHicvbAbM",name:"点值地图视觉优化之邮贴图",legendArr:this.$store.state.arr,rectangle_overlay:null,resX:null,resY:null}},components:{"v-header":g,"v-filter":A,"v-map":M},mounted:function(){var t=this;f(this.ak).then(function(e){t.$refs.useMap.createMap(),t.getData()}),this.init()},methods:{init:function(){this.legendArr.forEach(function(t){t.selected=!0})},onMap:function(t){this.map=t},onPoint:function(t){this.mPoint=t},dragSymbol:function(){this.rectangle_overlay=new BMap.Marker(new BMap.Point(this.mPoint.lng,this.mPoint.lat),{icon:new BMap.Symbol(BMap_Symbol_SHAPE_RECTANGLE,{scale:35,strokeWeight:2,strokeColor:"#3D59AB",strokeStyle:"solid",fillColor:"#3D59AB",fillOpacity:.2})}),this.map.addOverlay(this.rectangle_overlay),this.rectangle_overlay.enableDragging();var t=this.map.getBounds(),e=t.getSouthWest(),a=t.getNorthEast(),n=this.map.pointToPixel(e),r=this.map.pointToPixel(a);this.resX=(a.lng-e.lng)/(r.x-n.x),this.resY=(a.lat-e.lat)/(r.y-n.y)},getData:function(){var t=this;p.a.get("static/data/troubleData.json").then(function(e){var a=e.data[0],n=a.TBL_FAULT_LOG,r=a.TBL_NETNODE_INFO;r=t.getNewArr(r);var i=t.getGeoData(r,n),o=t.getNetNode(i),s=[];s[0]=t.getAlarmData(i,"频繁报警"),s[1]=t.getAlarmData(i,"专项巡检"),s[2]=t.getAlarmData(i,"1106关机").concat(t.getAlarmData(i,"1106电话关机")).concat(t.getAlarmData(i,"关机")),s[3]=t.getAlarmData(i,"不在线"),s[4]=t.getAlarmData(i,"IP对讲故障").concat(t.getAlarmData(i,"硬盘故障")).concat(t.getAlarmData(i,"对讲设备不在线,")),s[5]=t.getAlarmData(i,"巡检").concat(t.getAlarmData(i,"巡检安装")),s[6]=t.getAlarmData(i,"报警设备不在线,").concat(t.getAlarmData(i,"报警设备不在线,11106电话无法接通")),s[7]=t.getAlarmData(i,"1106电话空号").concat(t.getAlarmData(i,"1106空号")).concat(t.getAlarmData(i,"1106卡已被用")).concat(t.getAlarmData(i,"1106故障")),s[8]=t.getAlarmData(i,"DVR不在线,").concat(t.getAlarmData(i,"dvr不在线")).concat(t.getAlarmData(i,"DVR故障")),o.forEach(function(e,a){var n=e.lng,r=e.lat,i=new BMap.Point(n,r),o={};if(a<300){var s=new BMap.Icon("static/img/ceshi1.svg",new BMap.Size(14,14));o=new BMap.Marker(i,{icon:s})}else if(a>300&&a<600){var l=new BMap.Icon("static/img/ceshi2.svg",new BMap.Size(14,14));o=new BMap.Marker(i,{icon:l})}else{var c=new BMap.Icon("static/img/ceshi3.svg",new BMap.Size(14,14));o=new BMap.Marker(i,{icon:c})}t.map.addOverlay(o)}),t.dragSymbol();for(var l=new Array(9),c=0;c<l.length;c++)l[c]=new Array;for(var u=[],d=new Array(9),m=0;m<l.length;m++)d[m]={};for(var p=new Array(9),f=0;f<p.length;f++)p[f]={};for(var h=["设备停机","视频丢失","电池测试故障","接触故障","主机停机","设备运行数","设备恢复数","感应器故障","长距离无限发射故障"],v=t.delSpaceDom(),g=0;g<9;g++)d[g]=echarts.init(v[g]),p[g]=t.createOpt(h[g],l[g],u),d[g].setOption(p[g]);t.rectangle_overlay.addEventListener("dragend",function(){for(var e=t.rectangle_overlay.getPosition().lng-160*t.resX,a=t.rectangle_overlay.getPosition().lat-80*t.resY,n=t.rectangle_overlay.getPosition().lng+160*t.resX,r=t.rectangle_overlay.getPosition().lat+80*t.resY,i=0;i<9;i++)l[i].push(t.checkPoint(s[i],r,a,e,n));for(var o=0;o<9;o++)d[o].setOption(p[o]);u.push(l[0].length)})})},getGeoData:function(t,e){return e.map(function(a,n){return d()(t[n],e[n])})},getNewArr:function(t){return t.map(function(t,e){var a={baidu_address:"",dimension:null,longitude:null,area:null,net_node_name:""};for(var n in a)a[n]=t[n];return a})},getNetNode:function(t){return t.map(function(e,a){var n=t[a].longitude,r=t[a].dimension;return new BMap.Point(n,r)})},checkPoint:function(t,e,a,n,r){var i=[];return t.forEach(function(t,o){var s=t.dimension,l=t.longitude;s>=e&&s<=a&&l>=n&&l<=r&&i.push(t)}),i.length||0},getAlarmData:function(t,e){return t.filter(function(t){return t.FAULT_SYMPTOM===e})},delSpaceDom:function(){for(var t=document.getElementById("container"),e=t.childNodes,a=0;a<e.length;a++)"#text"==e[a].nodeName&&t.removeChild(e[a]);return t.childNodes},createDataZoom:function(){return[c()({type:"slider",xAxisIndex:0,filterMode:"empty",handleSize:6,height:10,left:"18%",right:"12%",bottom:3,start:0,end:100,handleColor:"#ddd",handleStyle:{borderColor:"#cacaca",borderWidth:"1",shadowBlur:2,background:"#ddd",shadowColor:"#ddd"},fillerColor:"#3D59AB",backgroundColor:"#ddd",showDataShadow:!1,showDetail:!1,handleIcon:"M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z"},"filterMode","filter"),{type:"inside",show:!0,xAxisIndex:[0],start:1,end:100}]},createOpt:function(t,e,a){return{title:{text:t,x:"center",textStyle:{padding:5,fontSize:"6px",fontStyle:"normal",fontWeight:"bold"}},tooltip:{trigger:"axis"},grid:{left:"2%",right:"10%",top:"12%",bottom:"10%",containLabel:!0},toolbox:{show:!0,feature:{magicType:{show:!0,title:"切换",type:["line","bar"]}},itemSize:13},xAxis:{type:"category",splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},data:a},yAxis:{type:"value",splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1}},dataZoom:this.createDataZoom(),series:[{data:e,type:"line",itemStyle:{normal:{color:"#3D59AB"},labelLine:{normal:{show:!1}}},smooth:!0}]}}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"content"}},[a("v-header",{attrs:{name:t.name,legendArr:t.legendArr}}),t._v(" "),a("v-filter"),t._v(" "),a("div",{attrs:{id:"main"}},[a("v-map",{ref:"useMap",on:{map:t.onMap,point:t.onPoint}})],1),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"container"}},[a("div",{attrs:{id:"box1"}}),t._v(" "),a("div",{attrs:{id:"box2"}}),t._v(" "),a("div",{attrs:{id:"box3"}}),t._v(" "),a("div",{attrs:{id:"box4"}}),t._v(" "),a("div",{attrs:{id:"box5"}}),t._v(" "),a("div",{attrs:{id:"box6"}}),t._v(" "),a("div",{attrs:{id:"box7"}}),t._v(" "),a("div",{attrs:{id:"box8"}}),t._v(" "),a("div",{attrs:{id:"box9"}})])}]};var x=a("VU/8")(S,w,!1,function(t){a("cOWw")},null,null).exports,C={data:function(){return{ak:"ZUONbpqGBsYGXNIYHicvbAbM",name:"点值地图视觉优化之平行坐标图",legendArr:[],rawData:[],mapData:[],myChart:null}},components:{"v-header":g,"v-filter":A},mounted:function(){var t=this;this.getData(),f(this.ak).then(function(e){t.myChart=echarts.init(document.getElementById("container"));var a=t.createOpt(t.rawData,["baidu_address","MONTH","REPORT_TIME","FINISH_TIME","CUSTOMER_NAME","FAULT_SYMPTOM","ADDRESS","AREA","TASK_STATE","DEGREE_OF_ACUTE"],t.mapData);t.myChart.setOption(a)})},methods:{getData:function(){var t=this;p.a.get("static/data/troubleData.json").then(function(e){var a=e.data[0],n=a.TBL_FAULT_LOG,r=a.TBL_NETNODE_INFO;r=t.getNewArr(r);var i=t.getGeoData(r,n),o=t.getNewData(i),s=t.getGeoCoor(r);t.rawData=t.getRawData(o),t.mapData=t.makeMapData(s,t.rawData)})},getGeoData:function(t,e){return e.map(function(a,n){return d()(t[n],e[n])})},getNewData:function(t){return t.filter(function(t){return new RegExp("区").test(t.baidu_address)&&t.REPORT_TIME&&t.FINISH_TIME&&t.FAULT_SYMPTOM&&t.CUSTOMER_NAME&&t.area&&t.TASK_STATE&&t.DEGREE_OF_ACUTE})},getNewArr:function(t){return t.map(function(t,e){var a={baidu_address:"",dimension:null,longitude:null,area:null};for(var n in a)a[n]=t[n];return a})},getGeoCoor:function(t){var e={};return t&&t.forEach(function(t){var a=[],n=t.baidu_address;a.push(t.longitude,t.dimension),e[n]=a}),e},getRawData:function(t){return t.map(function(t,e){var a=[];return a.push(t.baidu_address,t.REPORT_TIME.slice(5,7),t.REPORT_TIME.slice(8,10),t.FINISH_TIME.slice(8,10),t.CUSTOMER_NAME,t.FAULT_SYMPTOM,t.baidu_address.match(/市(\S*?)区/)[1]+"区",t.area,t.TASK_STATE,t.DEGREE_OF_ACUTE),a})},makeMapData:function(t,e){return e.map(function(a,n){var r=t[e[n][0]];if(r)return{name:e[n][0],value:r.concat(e[n].slice(1))}})},createOpt:function(t,e,a){var n,r;return{title:{left:"center",top:5,itemGap:0,textStyle:{color:"#3D59AB"},z:200},tooltip:{trigger:"item",formatter:function(t){var e=(t.value+"").split(".");return e=e[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+"."+e[1],t.seriesName+"<br/>"+t.name+" : "+e}},toolbox:{show:!0,left:"right",iconStyle:{normal:{borderColor:"#3D59AB"}},feature:{},z:202},brush:{geoIndex:0,brushLink:"all",inBrush:{opacity:1,symbolSize:14},outOfBrush:{color:"#000",opacity:.2},z:0},bmap:{center:[116.404,39.875],zoom:12,silent:!0,left:"6%",top:40,bottom:"54%",right:"14%",mapStyle:{styleJson:[{featureType:"all",elementType:"all",stylers:{lightness:10,saturation:-100}}]}},parallelAxis:[{dim:1,name:e[1],inverse:!0,min:4,max:5,nameLocation:"end"},{dim:2,name:e[2],inverse:!0,max:31,nameLocation:"end"},{dim:3,name:e[3],inverse:!0,max:31,nameLocation:"end"},{dim:4,name:e[4],type:"category",data:["交通银行","平安银行","中国银行","建设银行","招商银行","中信银行","民生银行","光大银行","广发银行","工商银行","农村商业银行","邮储"]},{dim:5,name:e[5],type:"category",data:["报警设备不在线,","DVR不在线,","掉电","无状态报告","观摩演示","巡检","磁盘故障","1106电话已关机","专项巡检","频繁报警"]},{dim:6,name:e[6],type:"category",data:["昌平区","丰台区","海淀区","东城区","宣武区","崇文区","怀柔区","朝阳区","顺义区","通州区","西城区","平谷区","门头沟区","石景山区","房山区","大兴区"]},{dim:7,name:e[7]},{dim:8,name:e[8]},{dim:9,name:e[9]}],visualMap:{show:!0,min:10,max:30,dimension:2,inRange:{color:["#fec42c","#80F1BE","#dd4444"].reverse()}},grid:[{show:!0,left:0,right:0,top:"58%",bottom:0,borderColor:"transparent",backgroundColor:"#404a59",z:99},{show:!0,left:0,right:0,top:0,height:38,borderColor:"transparent",backgroundColor:"#F5F5F5",z:199}],parallel:{top:"60%",left:60,right:60,bottom:85,axisExpandable:!0,axisExpandCenter:15,axisExpandCount:10,axisExpandWidth:60,axisExpandTriggerOn:"mousemove",z:100,parallelAxisDefault:(n={type:"value",nameLocation:"start",nameGap:20,nameTextStyle:{color:"#fff",fontSize:10},axisLine:{lineStyle:{color:"#aaa"}},axisTick:{lineStyle:{color:"#777"}},axisLabel:{textStyle:{color:"#fff"}},nameTruncate:{maxWidth:170},splitNumber:3,tooltip:{show:!0}},c()(n,"axisLine",{lineStyle:{width:1,color:"rgba(255,255,255,0.3)"}}),c()(n,"axisTick",{show:!1}),c()(n,"splitLine",{show:!1}),c()(n,"z",100),n)},series:[(r={name:"各ATM机故障点",type:"scatter",coordinateSystem:"bmap",symbolSize:8,data:a,activeOpacity:1,label:{normal:{formatter:"{b}",position:"right",show:!1},emphasis:{show:!0}}},c()(r,"symbolSize",10),c()(r,"itemStyle",{normal:{borderColor:"#fff",color:"#3D59AB"}}),r),{name:"parallel",type:"parallel",smooth:!0,lineStyle:{normal:{color:"#3D59AB",width:.5}},z:300,blendMode:"lighter",data:t}]}}}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"main"}},[e("v-header",{attrs:{name:this.name,legendArr:this.legendArr}}),this._v(" "),e("v-filter"),this._v(" "),e("div",{attrs:{id:"container"}})],1)},staticRenderFns:[]};var I=a("VU/8")(C,O,!1,function(t){a("2OiD")},null,null).exports,N={data:function(){return{myChart:{}}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;p.a.get("static/data/troubleData.json").then(function(e){var a=e.data[0].TBL_FAULT_LOG,n=t.removePerson(a);n=t.accumulatedPerson(n);var r=t.pieRawData(n);t.myChart=echarts.init(document.getElementById("pie"));var i=t.createPieOpt(r);t.myChart.setOption(i)})},removePerson:function(t){return t.map(function(t){var e={name:""};return t.RECEIVE_TASK_PERSON&&(e.name=t.RECEIVE_TASK_PERSON),e})},accumulatedPerson:function(t){var e={};return t.forEach(function(t){t.name&&"ceshi"!=t.name&&(e[t.name]?e[t.name]++:e[t.name]=1)}),e},pieRawData:function(t){var e=[],a={},n=0;for(var r in t){n++;var i={name:"",value:null};i.name=r,i.value=t[r],e.push(i),a[r]=n<6}return{arr:e,selected:a}},createPieOpt:function(t){return{title:{text:"接警人员接警数占比",x:"left",textStyle:{fontWeight:"bold",fontSize:15}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{type:"scroll",orient:"vertical",right:10,top:20,bottom:20,selected:t.selected},series:[{name:"姓名",type:"pie",radius:"55%",center:["40%","50%"],data:t.arr,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}}},R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"main"}},[e("div",{attrs:{id:"pie"}})])}]};var B=a("VU/8")(N,R,!1,function(t){a("vjtK")},null,null).exports,P={data:function(){return{myChart:{}}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;p.a.get("static/data/troubleData.json").then(function(e){var a=e.data[0].TBL_FAULT_LOG,n=t.removefourData(a);n=t.mapData(n);var r=t.removefiveData(a);r=t.mapData(r);var i=t.removemixedData(a);i=t.mapmixedData(i),t.myChart=echarts.init(document.getElementById("scatter"));var o=t.createScatterOpt(n,r,i);t.myChart.setOption(o)})},removefourData:function(t){return t.filter(function(t){return t.REPORT_TIME&&"04"===t.REPORT_TIME.slice(5,7)&&t.FINISH_TIME&&"04"===t.FINISH_TIME.slice(5,7)})},removefiveData:function(t){return t.filter(function(t){return t.REPORT_TIME&&"05"===t.REPORT_TIME.slice(5,7)&&t.FINISH_TIME&&"05"===t.FINISH_TIME.slice(5,7)})},removemixedData:function(t){return t.filter(function(t){return t.REPORT_TIME&&"04"===t.REPORT_TIME.slice(5,7)&&t.FINISH_TIME&&"05"===t.FINISH_TIME.slice(5,7)})},mapData:function(t){return t.map(function(t){return[t.REPORT_TIME.slice(8,10),t.FINISH_TIME.slice(8,10),Number(t.FINISH_TIME.slice(8,10))-Number(t.REPORT_TIME.slice(8,10)),t.FAULT_SYMPTOM]})},mapmixedData:function(t){return t.map(function(t){return[t.REPORT_TIME.slice(8,10),t.FINISH_TIME.slice(8,10),30-Number(t.REPORT_TIME.slice(8,10))+Number(t.FINISH_TIME.slice(8,10)),t.FAULT_SYMPTOM]})},createScatterOpt:function(t,e,a){return{title:{text:"ATM机故障报修时间和完成时间",left:"left",textStyle:{fontWeight:"bold",fontSize:15}},legend:{right:10,data:["9月份","10月份","9月份报修10月份完成"]},xAxis:{splitLine:{show:!1}},yAxis:{splitLine:{show:!1},scale:!0},series:[{name:"9月份",data:t,type:"scatter",symbolSize:function(t){return t[2]},label:{emphasis:{show:!0,formatter:function(t){return t.data[3]},position:"top"}},itemStyle:{normal:{shadowBlur:10,shadowColor:"#F5F5F5",shadowOffsetY:5,color:"#fec42c"}}},{name:"10月份",data:e,type:"scatter",symbolSize:function(t){return t[2]},label:{emphasis:{show:!0,formatter:function(t){return t.data[3]},position:"top"}},itemStyle:{normal:{shadowBlur:10,shadowColor:"rgba(25, 100, 150, 0.5)",shadowOffsetY:5,color:"#80F1BE"}}},{name:"9月份报修10月份完成",data:a,type:"scatter",symbolSize:function(t){return t[2]},label:{emphasis:{show:!0,formatter:function(t){return t.data[3]},position:"top"}},itemStyle:{normal:{shadowBlur:10,shadowColor:"rgba(120, 36, 50, 0.5)",shadowOffsetY:5,color:"#dd4444"}}}]}}}},k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"main"}},[e("div",{attrs:{id:"scatter"}})])}]};var F=a("VU/8")(P,k,!1,function(t){a("nMZS")},null,null).exports,L={data:function(){return{myChart:{}}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;p.a.get("static/data/troubleData.json").then(function(e){var a=e.data[0].TBL_FAULT_LOG,n=t.getCustomerName(a),r=t.removeDuplicatedName(n),i=t.treemapData(r);t.myChart=echarts.init(document.getElementById("treemap"));var o=t.createTreemapOpt(i);t.myChart.setOption(o)})},getCustomerName:function(t){return t.map(function(t){var e={CUSTOMER_NAME:""};for(var a in e)e[a]=t[a];return e})},removeDuplicatedName:function(t){var e={};return t.forEach(function(t){e[t.CUSTOMER_NAME]?e[t.CUSTOMER_NAME]++:e[t.CUSTOMER_NAME]=1}),e},treemapData:function(t){var e=[];for(var a in t){var n={name:"",value:null};n.name=a,n.value=t[a],e.push(n)}return e},createTreemapOpt:function(t){return{title:{text:"客户银行数量情况",left:"left",textStyle:{fontWeight:"bold",fontSize:15}},tooltip:{},series:[{name:"option",type:"treemap",visibleMin:300,data:t,leafDepth:2,levels:[{itemStyle:{normal:{borderColor:"#555",borderWidth:4,gapWidth:4}}},{colorSaturation:[.3,.6],itemStyle:{normal:{borderColorSaturation:.7,gapWidth:1,borderWidth:2}}},{colorSaturation:[.3,.5],itemStyle:{normal:{borderColorSaturation:.6,gapWidth:1}}},{colorSaturation:[.3,.5]}]}]}}}},U={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"main"}},[e("div",{attrs:{id:"treemap"}})])}]};var z=a("VU/8")(L,U,!1,function(t){a("cxlp")},null,null).exports,G={data:function(){return{map:null,mPoint:null,ak:"ZUONbpqGBsYGXNIYHicvbAbM",name:"北京市ATM机故障聚合分布"}},components:{"v-map":M},mounted:function(){var t=this;f(this.ak).then(function(e){t.$refs.useMap.createMap(),t.getData()})},methods:{getData:function(){var t=this;p.a.get("static/data/troubleData.json").then(function(e){var a=e.data[0],n=a.TBL_FAULT_LOG,r=a.TBL_NETNODE_INFO;r=t.getNewArr(r);var i=t.getGeoData(r,n),o={markers:t.getNetNode(i),gridSize:100,isAverangeCenter:!0};new BMapLib.MarkerClusterer(t.map,o)})},onMap:function(t){this.map=t},onPoint:function(t){this.mPoint=t},getGeoData:function(t,e){return e.map(function(a,n){return d()(t[n],e[n])})},getNewArr:function(t){return t.map(function(t,e){var a={baidu_address:"",dimension:null,longitude:null,area:null,net_node_name:""};for(var n in a)a[n]=t[n];return a})},getNetNode:function(t){return t.map(function(e,a){var n=t[a].longitude,r=t[a].dimension,i=new BMap.Point(n,r);return new BMap.Marker(i)})}}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"main"}},[e("div",{attrs:{id:"title"}},[e("h2",[this._v(this._s(this.name))])]),this._v(" "),e("v-map",{ref:"useMap",on:{map:this.onMap,point:this.onPoint}})],1)},staticRenderFns:[]};var H=a("VU/8")(G,$,!1,function(t){a("saZ9")},null,null).exports,Y={data:function(){return{items:[],name:"点值地图视觉优化之多视图协同可视化",legendArr:this.$store.state.areaArr}},mounted:function(){this.init()},methods:{init:function(){this.items=document.querySelectorAll(".flex-container .item");for(var t=0;t<this.items.length;t++)this.items[t].dataset.order=t+1;this.legendArr.forEach(function(t){t.selected=!0})},clickChart:function(t){var e=document.querySelector(".flex-container .active"),a=e.dataset.order,n=this.items[t-1];a!==t&&(e.classList.remove("active"),n.classList.add("active"),this.setStyle(n,e))},setStyle:function(t,e){var a=t.style.transform,n=e.style.transform;t.style.transform=n,e.style.transform=a}},components:{treemap:z,scatter:F,pie:B,multipleMap:H,"v-header":g,"v-filter":A}},W={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[a("v-header",{attrs:{name:t.name,legendArr:t.legendArr}}),t._v(" "),a("v-filter"),t._v(" "),a("div",{staticClass:"flex-container column"},[a("div",{staticClass:"item one",staticStyle:{transform:"translate(-22.4%,-33.5%) scale(0.33)"},on:{click:function(e){t.clickChart("1")}}},[a("treemap")],1),t._v(" "),a("div",{staticClass:"item two",staticStyle:{transform:"translate(-22.4%,0.5%) scale(0.33)"},on:{click:function(e){t.clickChart("2")}}},[a("scatter")],1),t._v(" "),a("div",{staticClass:"item three",staticStyle:{transform:"translate(-22.4%,34.5%) scale(0.33)"},on:{click:function(e){t.clickChart("3")}}},[a("pie")],1),t._v(" "),a("div",{staticClass:"item four active",staticStyle:{transform:"translate(43.7%, 0) scale(1)"},on:{click:function(e){t.clickChart("4")}}},[a("multipleMap")],1)])],1)},staticRenderFns:[]};var V=a("VU/8")(Y,W,!1,function(t){a("nmtD")},null,null).exports;n.default.use(s.a);var Z=new s.a({routes:[{path:"/sort",component:x},{path:"/parallelBD",component:I},{path:"/pie",component:B},{path:"/scatter",component:F},{path:"/treemap",component:z},{path:"/multipleMap",component:H},{path:"/dashboard",component:V},{path:"/",redirect:"/dashboard"}],linkActiveClass:"active"}),j=(a("qbEQ"),a("epGn"));n.default.component(j.DatePicker.name,j.DatePicker),n.default.use(o.a);var K=new o.a.Store({state:{color:["#9CC2B0","#C98769","#6D9EA8","#9CC2B0","#C98769"],arr:[{name:"中国银行"},{name:"建设银行"},{name:"邮储银行"}],areaArr:[{name:"石景山区"},{name:"西城区"},{name:"东城区"},{name:"朝阳区"},{name:"通州区"}]}});new n.default({el:"#app",router:Z,store:K,components:{App:i},template:"<App/>"}),console.log("env","production")},Two5:function(t,e){},cOWw:function(t,e){},cxlp:function(t,e){},nMZS:function(t,e){},nmtD:function(t,e){},qbEQ:function(t,e){},rDdZ:function(t,e){},saZ9:function(t,e){},vKDi:function(t,e){},vjtK:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1cdcf66cec722eabfb7c.js.map