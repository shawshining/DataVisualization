webpackJsonp([1],{"0ka3":function(t,e){},"1Ed2":function(t,e){},"32II":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("MVMM"),i={name:"App",mounted:function(){console.log(111)},created:function(){},methods:{}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{staticClass:"router-view"})],1)},staticRenderFns:[]};var s=a("Z0/y")(i,r,!1,function(t){a("tvP/")},null,null).exports,o=a("9rMa"),l=a("zO6J"),c=a("a3Yh"),f=a.n(c),d=a("aA9S"),m=a.n(d),u=a("aozt"),h=a.n(u);function p(t){return new Promise(function(e,a){window.onload=function(){e(BMap)};var n=document.createElement("script");n.type="text/javascript",n.src="//api.map.baidu.com/api?v=2.0&ak="+t+"&callback=init",n.onerror=a,document.head.appendChild(n)})}var v={props:{legendArr:{type:Array,default:[]},myChart:Object,name:String},created:function(){this.init()},data:function(){return{styleArr:[],color:this.$store.state.color}},methods:{init:function(){var t=this;this.color.forEach(function(e){t.styleArr.push({background:e,border:"1px solid"+e})})},highlight:function(t){},donwplay:function(t){},legendToggle:function(t){t.selected=!t.selected,this.changeStyle()},changeStyle:function(){var t=this,e=0;this.legendArr.forEach(function(a,n){a.selected?(e++,t.styleArr[n].background=t.color[n],t.styleArr[n].border="1px solid"+t.color[n]):(t.styleArr[n].background="transparent",t.styleArr[n].border="1px solid #9C8C84")}),this.$emit("listenNum",e)}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("h1",[t._v(t._s(t.name))]),t._v(" "),a("div",{staticClass:"legend-wrapper"},[a("ul",t._l(t.legendArr,function(e,n){return a("li",{key:n,style:t.styleArr[n],on:{mouseout:function(e){t.donwplay(n)},mouseover:function(e){t.highlight(n)},click:function(a){t.legendToggle(e)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])}))])])},staticRenderFns:[]};var D=a("Z0/y")(v,g,!1,function(t){a("OF5O")},"data-v-7ea74c50",null).exports,y={props:{isChecked:{type:Boolean,default:!0}}},T={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"v-checkbox",class:{checked:this.isChecked}})},staticRenderFns:[]};var A={data:function(){return{startDate:"2017.04.01",endDate:"2017.05.27",pro_filter_flag:!1,pro_list:[],option:{},resetOption:{},preClass:"",showProduct:!1,showTime:!1}},methods:{startDateChange:function(t){this.startDate=t,this.$emit("listenstartDate",this.startDate)},endDateChange:function(t){this.endDate=t,this.$emit("listenendDate",this.endDate)}},components:{checkbox:a("Z0/y")(y,T,!1,function(t){a("xMeB")},null,null).exports}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter"},[a("div",{staticClass:"startTime"},[a("span",{staticClass:"timeText"},[t._v("起始时间")]),t._v(" "),a("el-date-picker",{attrs:{type:"date",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",placeholder:"选择日期"},on:{change:t.startDateChange},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}}),t._v(" "),a("div",{staticClass:"myCalendar"})],1),t._v(" "),a("div",{staticClass:"endTime"},[a("span",{staticClass:"timeText"},[t._v("截止时间")]),t._v(" "),a("el-date-picker",{attrs:{type:"date",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",placeholder:"选择日期"},on:{change:t.endDateChange},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}}),t._v(" "),a("div",{staticClass:"myCalendar"})],1)])},staticRenderFns:[]};var M=a("Z0/y")(A,_,!1,function(t){a("jyvz"),a("VQXY")},"data-v-a31db692",null).exports,E={data:function(){return{map:null,mPoint:null}},methods:{createMap:function(){this.map=new BMap.Map("allmap"),this.$emit("map",this.map),this.mPoint=new BMap.Point(116.404,39.915),this.$emit("point",this.mPoint);this.map.setMapStyle({styleJson:[{featureType:"all",elementType:"all",stylers:{lightness:10,saturation:-100}}]}),this.map.enableContinuousZoom(),this.map.addControl(new BMap.MapTypeControl),this.map.addControl(new BMap.NavigationControl),this.map.enableScrollWheelZoom(),this.map.centerAndZoom(this.mPoint,13),this.map.addControl(new BMap.OverviewMapControl)}}},b={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"allmap"}})},staticRenderFns:[]};var w=a("Z0/y")(E,b,!1,function(t){a("XQmA")},"data-v-f1c9957a",null).exports,S={data:function(){return{map:null,mPoint:null,ak:"ZUONbpqGBsYGXNIYHicvbAbM",name:"点值地图视觉优化之邮贴图",legendArr:this.$store.state.arr,rectangle_overlay:null,resX:null,resY:null,diffTime:{startTime:"2017-04-12",endTime:"2017-05-27"},numArr:3,diffData:null,diffNum:null}},components:{"v-header":D,"v-filter":M,"v-map":w},mounted:function(){var t=this;p(this.ak).then(function(e){t.$refs.useMap.createMap(),t.getData()}),this.init(),this.showstartDate(),this.showendDate()},watch:{diffTime:{handler:function(t){var e=t.startTime?t.startTime:"2017-04-12",a=t.endTime?t.endTime:"2017-05-27";if("2017-04-12"===e&&"2017-05-27"===a)this.diffData=1;else if(e>a)this.diffData=0;else if(e.slice(0,4)<"2017"&&a.slice(0,4)>"2017")this.diffData=1;else{e.slice(0,4),a.slice(0,4);if("2017"!==e.slice(0,4)&&"2017"===a.slice(0,4))a.slice(5,7)<=5?this.diffData=2:this.diffData=3;else if("2017"!==a.slice(0,4)&&"2017"===e.slice(0,4))e.slice(5,7)<=5?this.diffData=2:this.diffData=3;else{var n=parseInt(a.slice(5,7))-parseInt(e.slice(5,7));this.diffData=n<=5?2:3}}this.getData()},deep:!0},diffNum:function(t){this.numArr=t||this.numArr,this.getData()}},methods:{init:function(){this.legendArr.forEach(function(t){t.selected=!0})},onMap:function(t){this.map=t},onPoint:function(t){this.mPoint=t},showstartDate:function(t){this.diffTime.startTime=t},showendDate:function(t){this.diffTime.endTime=t},showNum:function(t){this.diffNum=t},dragSymbol:function(){this.rectangle_overlay=new BMap.Marker(new BMap.Point(this.mPoint.lng,this.mPoint.lat),{icon:new BMap.Symbol(BMap_Symbol_SHAPE_RECTANGLE,{scale:35,strokeWeight:2,strokeColor:"#3D59AB",strokeStyle:"solid",fillColor:"#3D59AB",fillOpacity:.2})}),this.map.addOverlay(this.rectangle_overlay),this.rectangle_overlay.enableDragging();var t=this.map.getBounds(),e=t.getSouthWest(),a=t.getNorthEast(),n=this.map.pointToPixel(e),i=this.map.pointToPixel(a);this.resX=(a.lng-e.lng)/(i.x-n.x),this.resY=(a.lat-e.lat)/(i.y-n.y)},getData:function(){var t=this;h.a.get("static/data/troubleData.json").then(function(e){var a=e.data[0],n=a.TBL_FAULT_LOG,i=a.TBL_NETNODE_INFO;i=t.getNewArr(i);var r=t.getGeoData(i,n);Array.prototype.random=function(){var t=Math.floor(Math.random()*this.length);return this.splice(t,1)[0]};var s=0,o=[];if(0===t.diffData)r=[];else if(2===t.diffData){if(t.numArr)for(var l=500-100*(3-t.numArr);s++<l;)o.push(r.random());else o=[];r=o}else if(3===t.diffData){if(t.numArr)for(var c=700-100*(3-t.numArr);s++<c;)o.push(r.random());else o=[];r=o}else{if(t.numArr)for(var f=r.length-100*(3-t.numArr);s++<f;)o.push(r.random());else o=[];r=o}var d=t.getNetNode(r),m=[];m[0]=t.getAlarmData(r,"频繁报警"),m[1]=t.getAlarmData(r,"专项巡检"),m[2]=t.getAlarmData(r,"1106关机").concat(t.getAlarmData(r,"1106电话关机")).concat(t.getAlarmData(r,"关机")),m[3]=t.getAlarmData(r,"不在线"),m[4]=t.getAlarmData(r,"IP对讲故障").concat(t.getAlarmData(r,"硬盘故障")).concat(t.getAlarmData(r,"对讲设备不在线,")),m[5]=t.getAlarmData(r,"巡检").concat(t.getAlarmData(r,"巡检安装")),m[6]=t.getAlarmData(r,"报警设备不在线,").concat(t.getAlarmData(r,"报警设备不在线,11106电话无法接通")),m[7]=t.getAlarmData(r,"1106电话空号").concat(t.getAlarmData(r,"1106空号")).concat(t.getAlarmData(r,"1106卡已被用")).concat(t.getAlarmData(r,"1106故障")),m[8]=t.getAlarmData(r,"DVR不在线,").concat(t.getAlarmData(r,"dvr不在线")).concat(t.getAlarmData(r,"DVR故障")),d.forEach(function(e,a){var n=e.lng,i=e.lat,r=new BMap.Point(n,i),s={};if(a<300){var o=new BMap.Icon("static/img/ceshi1.svg",new BMap.Size(14,14));s=new BMap.Marker(r,{icon:o})}else if(a>300&&a<600){var l=new BMap.Icon("static/img/ceshi2.svg",new BMap.Size(14,14));s=new BMap.Marker(r,{icon:l})}else{var c=new BMap.Icon("static/img/ceshi3.svg",new BMap.Size(14,14));s=new BMap.Marker(r,{icon:c})}t.map.addOverlay(s)}),!t.rectangle_overlay&&t.dragSymbol();for(var u=new Array(9),h=0;h<u.length;h++)u[h]=new Array;for(var p=[],v=new Array(9),g=0;g<u.length;g++)v[g]={};for(var D=new Array(9),y=0;y<D.length;y++)D[y]={};for(var T=["设备停机","视频丢失","电池测试故障","接触故障","主机停机","设备运行数","设备恢复数","感应器故障","长距离无限发射故障"],A=t.delSpaceDom(),_=0;_<9;_++)v[_]=echarts.init(A[_]),D[_]=t.createOpt(T[_],u[_],p),v[_].setOption(D[_]);t.rectangle_overlay.addEventListener("dragend",function(){for(var e=t.rectangle_overlay.getPosition().lng-160*t.resX,a=t.rectangle_overlay.getPosition().lat-80*t.resY,n=t.rectangle_overlay.getPosition().lng+160*t.resX,i=t.rectangle_overlay.getPosition().lat+80*t.resY,r=0;r<9;r++)u[r].push(t.checkPoint(m[r],i,a,e,n));for(var s=0;s<9;s++)v[s].setOption(D[s]);p.push(u[0].length)})})},getGeoData:function(t,e){return e.map(function(a,n){return m()(t[n],e[n])})},getNewArr:function(t){return t.map(function(t,e){var a={baidu_address:"",dimension:null,longitude:null,area:null,net_node_name:""};for(var n in a)a[n]=t[n];return a})},getNetNode:function(t){return t.map(function(e,a){var n=t[a].longitude,i=t[a].dimension;return new BMap.Point(n,i)})},checkPoint:function(t,e,a,n,i){var r=[];return t.forEach(function(t,s){var o=t.dimension,l=t.longitude;o>=e&&o<=a&&l>=n&&l<=i&&r.push(t)}),r.length||0},getAlarmData:function(t,e){return t.filter(function(t){return t.FAULT_SYMPTOM===e})},delSpaceDom:function(){for(var t=document.getElementById("container"),e=t.childNodes,a=0;a<e.length;a++)"#text"==e[a].nodeName&&t.removeChild(e[a]);return t.childNodes},createDataZoom:function(){return[f()({type:"slider",xAxisIndex:0,filterMode:"empty",handleSize:6,height:10,left:"18%",right:"12%",bottom:3,start:0,end:100,handleColor:"#ddd",handleStyle:{borderColor:"#cacaca",borderWidth:"1",shadowBlur:2,background:"#ddd",shadowColor:"#ddd"},fillerColor:"#3D59AB",backgroundColor:"#ddd",showDataShadow:!1,showDetail:!1,handleIcon:"M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z"},"filterMode","filter"),{type:"inside",show:!0,xAxisIndex:[0],start:1,end:100}]},createOpt:function(t,e,a){return{title:{text:t,x:"center",textStyle:{padding:5,fontSize:"6px",fontStyle:"normal",fontWeight:"bold"}},tooltip:{trigger:"axis"},grid:{left:"2%",right:"10%",top:"12%",bottom:"10%",containLabel:!0},toolbox:{show:!0,feature:{magicType:{show:!0,title:"切换",type:["line","bar"]}},itemSize:13},xAxis:{type:"category",splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},data:a},yAxis:{type:"value",splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1}},dataZoom:this.createDataZoom(),series:[{data:e,type:"line",itemStyle:{normal:{color:"#3D59AB"},labelLine:{normal:{show:!1}}},smooth:!0}]}}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"content"}},[a("v-header",{attrs:{name:t.name,legendArr:t.legendArr},on:{listenNum:t.showNum}}),t._v(" "),a("v-filter",{on:{listenstartDate:t.showstartDate,listenendDate:t.showendDate}}),t._v(" "),a("div",{attrs:{id:"main"}},[a("v-map",{ref:"useMap",on:{map:t.onMap,point:t.onPoint}})],1),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"container"}},[a("div",{attrs:{id:"box1"}}),t._v(" "),a("div",{attrs:{id:"box2"}}),t._v(" "),a("div",{attrs:{id:"box3"}}),t._v(" "),a("div",{attrs:{id:"box4"}}),t._v(" "),a("div",{attrs:{id:"box5"}}),t._v(" "),a("div",{attrs:{id:"box6"}}),t._v(" "),a("div",{attrs:{id:"box7"}}),t._v(" "),a("div",{attrs:{id:"box8"}}),t._v(" "),a("div",{attrs:{id:"box9"}})])}]};var x=a("Z0/y")(S,C,!1,function(t){a("RugZ")},"data-v-6c172a64",null).exports,N={data:function(){return{ak:"ZUONbpqGBsYGXNIYHicvbAbM",name:"点值地图视觉优化之平行坐标图",legendArr:[],rawData:[],mapData:[],myChart:null}},components:{"v-header":D,"v-filter":M},mounted:function(){var t=this;this.getData(),p(this.ak).then(function(e){t.myChart=echarts.init(document.getElementById("container"));var a=t.createOpt(t.rawData,["baidu_address","MONTH","REPORT_TIME","FINISH_TIME","CUSTOMER_NAME","FAULT_SYMPTOM","ADDRESS","AREA","TASK_STATE","DEGREE_OF_ACUTE"],t.mapData);t.myChart.setOption(a)})},methods:{getData:function(){var t=this;h.a.get("static/data/troubleData.json").then(function(e){var a=e.data[0],n=a.TBL_FAULT_LOG,i=a.TBL_NETNODE_INFO;i=t.getNewArr(i);var r=t.getGeoData(i,n),s=t.getNewData(r),o=t.getGeoCoor(i);t.rawData=t.getRawData(s),t.mapData=t.makeMapData(o,t.rawData)})},getGeoData:function(t,e){return e.map(function(a,n){return m()(t[n],e[n])})},getNewData:function(t){return t.filter(function(t){return new RegExp("区").test(t.baidu_address)&&t.REPORT_TIME&&t.FINISH_TIME&&t.FAULT_SYMPTOM&&t.CUSTOMER_NAME&&t.area&&t.TASK_STATE&&t.DEGREE_OF_ACUTE})},getNewArr:function(t){return t.map(function(t,e){var a={baidu_address:"",dimension:null,longitude:null,area:null};for(var n in a)a[n]=t[n];return a})},getGeoCoor:function(t){var e={};return t&&t.forEach(function(t){var a=[],n=t.baidu_address;a.push(t.longitude,t.dimension),e[n]=a}),e},getRawData:function(t){return t.map(function(t,e){var a=[];return a.push(t.baidu_address,t.REPORT_TIME.slice(5,7),t.REPORT_TIME.slice(8,10),t.FINISH_TIME.slice(8,10),t.CUSTOMER_NAME,t.FAULT_SYMPTOM,t.baidu_address.match(/市(\S*?)区/)[1]+"区",t.area,t.TASK_STATE,t.DEGREE_OF_ACUTE),a})},makeMapData:function(t,e){return e.map(function(a,n){var i=t[e[n][0]];if(i)return{name:e[n][0],value:i.concat(e[n].slice(1))}})},createOpt:function(t,e,a){var n,i;return{title:{left:"center",top:5,itemGap:0,textStyle:{color:"#3D59AB"},z:200},tooltip:{trigger:"item",formatter:function(t){var e=(t.value+"").split(".");return e=e[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+"."+e[1],t.seriesName+"<br/>"+t.name+" : "+e}},toolbox:{show:!0,left:"right",iconStyle:{normal:{borderColor:"#3D59AB"}},feature:{},z:202},brush:{geoIndex:0,brushLink:"all",inBrush:{opacity:1,symbolSize:14},outOfBrush:{color:"#000",opacity:.2},z:0},bmap:{center:[116.404,39.875],zoom:12,silent:!0,left:"6%",top:40,bottom:"54%",right:"14%",mapStyle:{styleJson:[{featureType:"all",elementType:"all",stylers:{lightness:10,saturation:-100}}]}},parallelAxis:[{dim:1,name:e[1],inverse:!0,min:4,max:5,nameLocation:"end"},{dim:2,name:e[2],inverse:!0,max:31,nameLocation:"end"},{dim:3,name:e[3],inverse:!0,max:31,nameLocation:"end"},{dim:4,name:e[4],type:"category",data:["交通银行","平安银行","中国银行","建设银行","招商银行","中信银行","民生银行","光大银行","广发银行","工商银行","农村商业银行","邮储"]},{dim:5,name:e[5],type:"category",data:["报警设备不在线,","DVR不在线,","掉电","无状态报告","观摩演示","巡检","磁盘故障","1106电话已关机","专项巡检","频繁报警"]},{dim:6,name:e[6],type:"category",data:["昌平区","丰台区","海淀区","东城区","宣武区","崇文区","怀柔区","朝阳区","顺义区","通州区","西城区","平谷区","门头沟区","石景山区","房山区","大兴区"]},{dim:7,name:e[7]},{dim:8,name:e[8]},{dim:9,name:e[9]}],visualMap:{show:!0,min:10,max:30,dimension:2,inRange:{color:["#fec42c","#80F1BE","#dd4444"].reverse()}},grid:[{show:!0,left:0,right:0,top:"58%",bottom:0,borderColor:"transparent",backgroundColor:"#404a59",z:99},{show:!0,left:0,right:0,top:0,height:38,borderColor:"transparent",backgroundColor:"#F5F5F5",z:199}],parallel:{top:"60%",left:60,right:60,bottom:85,axisExpandable:!0,axisExpandCenter:15,axisExpandCount:10,axisExpandWidth:60,axisExpandTriggerOn:"mousemove",z:100,parallelAxisDefault:(n={type:"value",nameLocation:"start",nameGap:20,nameTextStyle:{color:"#fff",fontSize:10},axisLine:{lineStyle:{color:"#aaa"}},axisTick:{lineStyle:{color:"#777"}},axisLabel:{textStyle:{color:"#fff"}},nameTruncate:{maxWidth:170},splitNumber:3,tooltip:{show:!0}},f()(n,"axisLine",{lineStyle:{width:1,color:"rgba(255,255,255,0.3)"}}),f()(n,"axisTick",{show:!1}),f()(n,"splitLine",{show:!1}),f()(n,"z",100),n)},series:[(i={name:"各ATM机故障点",type:"scatter",coordinateSystem:"bmap",symbolSize:8,data:a,activeOpacity:1,label:{normal:{formatter:"{b}",position:"right",show:!1},emphasis:{show:!0}}},f()(i,"symbolSize",10),f()(i,"itemStyle",{normal:{borderColor:"#fff",color:"#3D59AB"}}),i),{name:"parallel",type:"parallel",smooth:!0,lineStyle:{normal:{color:"#3D59AB",width:.5}},z:300,blendMode:"lighter",data:t}]}}}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"main"}},[e("v-header",{attrs:{name:this.name,legendArr:this.legendArr}}),this._v(" "),e("v-filter"),this._v(" "),e("div",{attrs:{id:"container"}})],1)},staticRenderFns:[]};var O=a("Z0/y")(N,I,!1,function(t){a("1Ed2")},"data-v-2c9f000e",null).exports,R={data:function(){return{myChart:{},diffData:null,numArr:5}},props:{diffTime:{startTime:"",endTime:""},diffNum:null},mounted:function(){this.getData()},watch:{diffTime:{handler:function(t){var e=t.startTime?t.startTime:"2017-04-12",a=t.endTime?t.endTime:"2017-05-27";if("2017-04-12"===e&&"2017-05-27"===a)this.diffData=1;else if(e>a)this.diffData=0;else if(e.slice(0,4)<"2017"&&a.slice(0,4)>"2017")this.diffData=1;else{e.slice(0,4),a.slice(0,4);if("2017"!==e.slice(0,4)&&"2017"===a.slice(0,4))a.slice(5,7)<=5?this.diffData=2:this.diffData=3;else if("2017"!==a.slice(0,4)&&"2017"===e.slice(0,4))e.slice(5,7)<=5?this.diffData=2:this.diffData=3;else{var n=parseInt(a.slice(5,7))-parseInt(e.slice(5,7));this.diffData=n<=5?2:3}}this.getData()},deep:!0},diffNum:function(t){this.numArr=t,this.getData()}},methods:{getData:function(){var t=this;h.a.get("static/data/troubleData.json").then(function(e){var a=e.data[0].TBL_FAULT_LOG;Array.prototype.random=function(){var t=Math.floor(Math.random()*this.length);return this.splice(t,1)[0]};var n=0,i=[];if(0===t.diffData)a=[];else if(2===t.diffData){if(t.numArr)for(var r=600-100*(5-t.numArr);n++<r;)i.push(a.random());else i=[];a=i}else if(3===t.diffData){if(t.numArr)for(var s=900-100*(5-t.numArr);n++<s;)i.push(a.random());else i=[];a=i}else{if(t.numArr)if(5===t.numArr)i=a;else for(var o=a.length-100*(5-t.numArr);n++<o;)i.push(a.random());else i=[];a=i}var l=t.removePerson(a);l=t.accumulatedPerson(l);var c=t.pieRawData(l);t.myChart=echarts.init(document.getElementById("pie"));var f=t.createPieOpt(c);t.myChart.setOption(f)})},removePerson:function(t){return t.map(function(t){var e={name:""};return t.RECEIVE_TASK_PERSON&&(e.name=t.RECEIVE_TASK_PERSON),e})},accumulatedPerson:function(t){var e={};return t.forEach(function(t){t.name&&"ceshi"!=t.name&&(e[t.name]?e[t.name]++:e[t.name]=1)}),e},pieRawData:function(t){var e=[],a={},n=0;for(var i in t){n++;var r={name:"",value:null};r.name=i,r.value=t[i],e.push(r),a[i]=n<6}return{arr:e,selected:a}},createPieOpt:function(t){return{title:{text:"接警人员接警数占比",x:"left",textStyle:{fontWeight:"bold",fontSize:15}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{type:"scroll",orient:"vertical",right:10,top:20,bottom:20,selected:t.selected},series:[{name:"姓名",type:"pie",radius:"55%",center:["40%","50%"],data:t.arr,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}}},B={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"main"}},[e("div",{attrs:{id:"pie"}})])}]};var k=a("Z0/y")(R,B,!1,function(t){a("ncQN")},"data-v-30dbc0e2",null).exports,P={data:function(){return{myChart:{},diffData:null,numArr:5}},props:{diffTime:{startTime:"",endTime:""},diffNum:null},mounted:function(){this.getData()},watch:{diffTime:{handler:function(t){var e=t.startTime?t.startTime:"2017-04-12",a=t.endTime?t.endTime:"2017-05-27";if("2017-04-12"===e&&"2017-05-27"===a)this.diffData=1;else if(e>a)this.diffData=0;else if(e.slice(0,4)<"2017"&&a.slice(0,4)>"2017")this.diffData=1;else{e.slice(0,4),a.slice(0,4);if("2017"!==e.slice(0,4)&&"2017"===a.slice(0,4))a.slice(5,7)<=5?this.diffData=2:this.diffData=3;else if("2017"!==a.slice(0,4)&&"2017"===e.slice(0,4))e.slice(5,7)<=5?this.diffData=2:this.diffData=3;else{var n=parseInt(a.slice(5,7))-parseInt(e.slice(5,7));this.diffData=n<=5?2:3}}this.getData()},deep:!0},diffNum:function(t){this.numArr=t,this.getData()}},methods:{getData:function(){var t=this;h.a.get("static/data/troubleData.json").then(function(e){var a=e.data[0].TBL_FAULT_LOG;Array.prototype.random=function(){var t=Math.floor(Math.random()*this.length);return this.splice(t,1)[0]};var n=0,i=[];if(0===t.diffData)a=[];else if(2===t.diffData){if(t.numArr)for(var r=600-100*(5-t.numArr);n++<r;)i.push(a.random());else i=[];a=i}else if(3===t.diffData){if(t.numArr)for(var s=900-100*(5-t.numArr);n++<s;)i.push(a.random());else i=[];a=i}else{if(t.numArr)if(5===t.numArr)i=a;else for(var o=a.length-100*(5-t.numArr);n++<o;)i.push(a.random());else i=[];a=i}var l=t.removefourData(a);l=t.mapData(l);var c=t.removefiveData(a);c=t.mapData(c);var f=t.removemixedData(a);f=t.mapmixedData(f),t.myChart=echarts.init(document.getElementById("scatter"));var d=t.createScatterOpt(l,c,f);t.myChart.setOption(d)})},removefourData:function(t){return t.filter(function(t){return t.REPORT_TIME&&"04"===t.REPORT_TIME.slice(5,7)&&t.FINISH_TIME&&"04"===t.FINISH_TIME.slice(5,7)})},removefiveData:function(t){return t.filter(function(t){return t.REPORT_TIME&&"05"===t.REPORT_TIME.slice(5,7)&&t.FINISH_TIME&&"05"===t.FINISH_TIME.slice(5,7)})},removemixedData:function(t){return t.filter(function(t){return t.REPORT_TIME&&"04"===t.REPORT_TIME.slice(5,7)&&t.FINISH_TIME&&"05"===t.FINISH_TIME.slice(5,7)})},mapData:function(t){return t.map(function(t){return[t.REPORT_TIME.slice(8,10),t.FINISH_TIME.slice(8,10),Number(t.FINISH_TIME.slice(8,10))-Number(t.REPORT_TIME.slice(8,10)),t.FAULT_SYMPTOM]})},mapmixedData:function(t){return t.map(function(t){return[t.REPORT_TIME.slice(8,10),t.FINISH_TIME.slice(8,10),30-Number(t.REPORT_TIME.slice(8,10))+Number(t.FINISH_TIME.slice(8,10)),t.FAULT_SYMPTOM]})},createScatterOpt:function(t,e,a){return{title:{text:"ATM机故障报修时间和完成时间",left:"left",textStyle:{fontWeight:"bold",fontSize:15}},legend:{right:10,data:["9月份","10月份","9月份报修10月份完成"]},xAxis:{splitLine:{show:!1}},yAxis:{splitLine:{show:!1},scale:!0},series:[{name:"9月份",data:t,type:"scatter",symbolSize:function(t){return t[2]},label:{emphasis:{show:!0,formatter:function(t){return t.data[3]},position:"top"}},itemStyle:{normal:{shadowBlur:10,shadowColor:"#F5F5F5",shadowOffsetY:5,color:"#fec42c"}}},{name:"10月份",data:e,type:"scatter",symbolSize:function(t){return t[2]},label:{emphasis:{show:!0,formatter:function(t){return t.data[3]},position:"top"}},itemStyle:{normal:{shadowBlur:10,shadowColor:"rgba(25, 100, 150, 0.5)",shadowOffsetY:5,color:"#80F1BE"}}},{name:"9月份报修10月份完成",data:a,type:"scatter",symbolSize:function(t){return t[2]},label:{emphasis:{show:!0,formatter:function(t){return t.data[3]},position:"top"}},itemStyle:{normal:{shadowBlur:10,shadowColor:"rgba(120, 36, 50, 0.5)",shadowOffsetY:5,color:"#dd4444"}}}]}}}},F={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"main"}},[e("div",{attrs:{id:"scatter"}})])}]};var L=a("Z0/y")(P,F,!1,function(t){a("32II")},"data-v-d5724f6c",null).exports,z={data:function(){return{myChart:{},diffData:null,numArr:5}},props:{diffTime:{startTime:"",endTime:""},diffNum:null},mounted:function(){this.getData()},watch:{diffTime:{handler:function(t){var e=t.startTime?t.startTime:"2017-04-12",a=t.endTime?t.endTime:"2017-05-27";if("2017-04-12"===e&&"2017-05-27"===a)this.diffData=1;else if(e>a)this.diffData=0;else if(e.slice(0,4)<"2017"&&a.slice(0,4)>"2017")this.diffData=1;else{e.slice(0,4),a.slice(0,4);if("2017"!==e.slice(0,4)&&"2017"===a.slice(0,4))a.slice(5,7)<=5?this.diffData=2:this.diffData=3;else if("2017"!==a.slice(0,4)&&"2017"===e.slice(0,4))e.slice(5,7)<=5?this.diffData=2:this.diffData=3;else{var n=parseInt(a.slice(5,7))-parseInt(e.slice(5,7));this.diffData=n<=5?2:3}}this.getData()},deep:!0},diffNum:function(t){this.numArr=t,this.getData()}},methods:{getData:function(){var t=this;h.a.get("static/data/troubleData.json").then(function(e){var a=e.data[0].TBL_FAULT_LOG;Array.prototype.random=function(){var t=Math.floor(Math.random()*this.length);return this.splice(t,1)[0]};var n=0,i=[];if(0===t.diffData)a=[];else if(2===t.diffData){if(t.numArr)for(var r=600-100*(5-t.numArr);n++<r;)i.push(a.random());else i=[];a=i}else if(3===t.diffData){if(t.numArr)for(var s=900-100*(5-t.numArr);n++<s;)i.push(a.random());else i=[];a=i}else{if(t.numArr)if(5===t.numArr)i=a;else for(var o=a.length-100*(5-t.numArr);n++<o;)i.push(a.random());else i=[];a=i}var l=t.getCustomerName(a),c=t.removeDuplicatedName(l),f=t.treemapData(c);t.myChart=echarts.init(document.getElementById("treemap"));var d=t.createTreemapOpt(f);t.myChart.setOption(d)})},getCustomerName:function(t){return t.map(function(t){var e={CUSTOMER_NAME:""};for(var a in e)e[a]=t[a];return e})},removeDuplicatedName:function(t){var e={};return t.forEach(function(t){e[t.CUSTOMER_NAME]?e[t.CUSTOMER_NAME]++:e[t.CUSTOMER_NAME]=1}),e},treemapData:function(t){var e=[];for(var a in t){var n={name:"",value:null};n.name=a,n.value=t[a],e.push(n)}return e},createTreemapOpt:function(t){return{title:{text:"客户银行数量情况",left:"left",textStyle:{fontWeight:"bold",fontSize:15}},tooltip:{},series:[{name:"option",type:"treemap",visibleMin:300,data:t,leafDepth:2,levels:[{itemStyle:{normal:{borderColor:"#555",borderWidth:4,gapWidth:4}}},{colorSaturation:[.3,.6],itemStyle:{normal:{borderColorSaturation:.7,gapWidth:1,borderWidth:2}}},{colorSaturation:[.3,.5],itemStyle:{normal:{borderColorSaturation:.6,gapWidth:1}}},{colorSaturation:[.3,.5]}]}]}}}},$={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"main"}},[e("div",{attrs:{id:"treemap"}})])}]};var G=a("Z0/y")(z,$,!1,function(t){a("aK0M")},"data-v-0809839c",null).exports,U={data:function(){return{map:null,mPoint:null,ak:"ZUONbpqGBsYGXNIYHicvbAbM",name:"北京市ATM机故障聚合分布",diffData:null,numArr:5}},props:{diffTime:{startTime:"",endTime:""},diffNum:null},components:{"v-map":w},mounted:function(){var t=this;p(this.ak).then(function(e){t.$refs.useMap.createMap(),t.getData()})},watch:{diffTime:{handler:function(t){var e=t.startTime?t.startTime:"2017-04-12",a=t.endTime?t.endTime:"2017-05-27";if("2017-04-12"===e&&"2017-05-27"===a)this.diffData=1;else if(e>a)this.diffData=0;else if(e.slice(0,4)<"2017"&&a.slice(0,4)>"2017")this.diffData=1;else{e.slice(0,4),a.slice(0,4);if("2017"!==e.slice(0,4)&&"2017"===a.slice(0,4))a.slice(5,7)<=5?this.diffData=2:this.diffData=3;else if("2017"!==a.slice(0,4)&&"2017"===e.slice(0,4))e.slice(5,7)<=5?this.diffData=2:this.diffData=3;else{var n=parseInt(a.slice(5,7))-parseInt(e.slice(5,7));this.diffData=n<=5?2:3}}this.getData()},deep:!0},diffNum:function(t){this.numArr=t,this.getData()}},methods:{getData:function(){var t=this;h.a.get("static/data/troubleData.json").then(function(e){var a=e.data[0],n=a.TBL_FAULT_LOG,i=a.TBL_NETNODE_INFO;i=t.getNewArr(i);var r=t.getGeoData(i,n);Array.prototype.random=function(){var t=Math.floor(Math.random()*this.length);return this.splice(t,1)[0]};var s=0,o=[];if(0===t.diffData)r=[];else if(2===t.diffData){if(t.numArr)for(var l=600-100*(5-t.numArr);s++<l;)o.push(r.random());else o=[];r=o}else if(3===t.diffData){if(t.numArr)for(var c=900-100*(5-t.numArr);s++<c;)o.push(r.random());else o=[];r=o}else{if(t.numArr)for(var f=r.length-100*(5-t.numArr);s++<f;)o.push(r.random());else o=[];r=o}var d=t.getNetNode(r);if(d.length){var m={markers:d,gridSize:100,isAverangeCenter:!0};new BMapLib.MarkerClusterer(t.map,m)}})},onMap:function(t){this.map=t},onPoint:function(t){this.mPoint=t},getGeoData:function(t,e){return e.map(function(a,n){return m()(t[n],e[n])})},getNewArr:function(t){return t.map(function(t,e){var a={baidu_address:"",dimension:null,longitude:null,area:null,net_node_name:""};for(var n in a)a[n]=t[n];return a})},getNetNode:function(t){return t.map(function(e,a){var n=t[a].longitude,i=t[a].dimension,r=new BMap.Point(n,i);return new BMap.Marker(r)})}}},Z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"main"}},[e("div",{attrs:{id:"title"}},[e("h2",[this._v(this._s(this.name))])]),this._v(" "),e("v-map",{ref:"useMap",on:{map:this.onMap,point:this.onPoint}})],1)},staticRenderFns:[]};var Y=a("Z0/y")(U,Z,!1,function(t){a("fnS3")},"data-v-628b5841",null).exports,H={data:function(){return{items:[],name:"点值地图视觉优化之多视图协同可视化",legendArr:this.$store.state.areaArr,timeDiff:{startTime:"2017-04-12",endTime:"2017-05-27"},num:null}},mounted:function(){this.init(),this.showstartDate(),this.showendDate()},methods:{init:function(){this.items=document.querySelectorAll(".flex-container .item");for(var t=0;t<this.items.length;t++)this.items[t].dataset.order=t+1;this.legendArr.forEach(function(t){t.selected=!0})},clickChart:function(t){var e=document.querySelector(".flex-container .active"),a=e.dataset.order,n=this.items[t-1];a!==t&&(e.classList.remove("active"),n.classList.add("active"),this.setStyle(n,e))},setStyle:function(t,e){var a=t.style.transform,n=e.style.transform;t.style.transform=n,e.style.transform=a},showstartDate:function(t){this.timeDiff.startTime=t},showendDate:function(t){this.timeDiff.endTime=t},showNum:function(t){this.num=t}},components:{treemap:G,scatter:L,pie:k,multipleMap:Y,"v-header":D,"v-filter":M}},W={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[a("v-header",{attrs:{name:t.name,legendArr:t.legendArr},on:{listenNum:t.showNum}}),t._v(" "),a("v-filter",{on:{listenstartDate:t.showstartDate,listenendDate:t.showendDate}}),t._v(" "),a("div",{staticClass:"flex-container column"},[a("div",{staticClass:"item one",staticStyle:{transform:"translate(-22.4%,-33.5%) scale(0.33)"},on:{click:function(e){t.clickChart("1")}}},[a("treemap",{attrs:{diffTime:t.timeDiff,diffNum:t.num}})],1),t._v(" "),a("div",{staticClass:"item two",staticStyle:{transform:"translate(-22.4%,0.5%) scale(0.33)"},on:{click:function(e){t.clickChart("2")}}},[a("scatter",{attrs:{diffTime:t.timeDiff,diffNum:t.num}})],1),t._v(" "),a("div",{staticClass:"item three",staticStyle:{transform:"translate(-22.4%,34.5%) scale(0.33)"},on:{click:function(e){t.clickChart("3")}}},[a("pie",{attrs:{diffTime:t.timeDiff,diffNum:t.num}})],1),t._v(" "),a("div",{staticClass:"item four active",staticStyle:{transform:"translate(43.7%, 0) scale(1)"},on:{click:function(e){t.clickChart("4")}}},[a("multipleMap",{attrs:{diffTime:t.timeDiff,diffNum:t.num}})],1)])],1)},staticRenderFns:[]};var X=a("Z0/y")(H,W,!1,function(t){a("n6ko"),a("lkTS")},"data-v-6c3e659d",null).exports;n.default.use(l.a);var j=new l.a({routes:[{path:"/sort",component:x},{path:"/parallelBD",component:O},{path:"/pie",component:k},{path:"/scatter",component:L},{path:"/treemap",component:G},{path:"/multipleMap",component:Y},{path:"/dashboard",component:X},{path:"/",redirect:"/dashboard"}],linkActiveClass:"active"}),V=(a("0ka3"),a("dVeB"));n.default.component(V.DatePicker.name,V.DatePicker),n.default.use(o.a);var K=new o.a.Store({state:{color:["#9CC2B0","#C98769","#6D9EA8","#9CC2B0","#C98769"],arr:[{name:"中国银行"},{name:"建设银行"},{name:"邮储银行"}],areaArr:[{name:"石景山区"},{name:"西城区"},{name:"东城区"},{name:"朝阳区"},{name:"通州区"}]}});new n.default({el:"#app",router:j,store:K,components:{App:s},template:"<App/>"}),console.log("env","production")},OF5O:function(t,e){},RugZ:function(t,e){},VQXY:function(t,e){},XQmA:function(t,e){},aK0M:function(t,e){},fnS3:function(t,e){},jyvz:function(t,e){},lkTS:function(t,e){},n6ko:function(t,e){},ncQN:function(t,e){},"tvP/":function(t,e){},xMeB:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c6dce74343c2782ba698.js.map