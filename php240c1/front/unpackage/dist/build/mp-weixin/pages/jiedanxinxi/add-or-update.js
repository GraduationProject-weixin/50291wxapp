(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jiedanxinxi/add-or-update"],{"0ed1":function(e,n,r){"use strict";r.d(n,"b",(function(){return i})),r.d(n,"c",(function(){return a})),r.d(n,"a",(function(){return t}));var t={wPicker:function(){return Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(r.bind(null,"e534"))}},i=function(){var e=this,n=e.$createElement;e._self._c},a=[]},"3c53":function(e,n,r){"use strict";(function(e){r("0391");t(r("66fd"));var n=t(r("65e4"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])},"65e4":function(e,n,r){"use strict";r.r(n);var t=r("0ed1"),i=r("ffb5");for(var a in i)"default"!==a&&function(e){r.d(n,e,(function(){return i[e]}))}(a);r("c308");var u,o=r("f0c5"),s=Object(o["a"])(i["default"],t["b"],t["c"],!1,null,"1fc4bc3e",null,!1,t["a"],u);n["default"]=s.exports},7731:function(e,n,r){},ac4c:function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=i(r("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,n,r,t,i,a,u){try{var o=e[a](u),s=o.value}catch(c){return void r(c)}o.done?n(s):Promise.resolve(s).then(t,i)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var u=e.apply(n,r);function o(e){a(u,t,i,o,s,"next",e)}function s(e){a(u,t,i,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("e534"))}.bind(null,r)).catch(r.oe)},s={data:function(){return{cross:"",ruleForm:{biaoti:"",tupian:"",fuwujiage:"",xuqiuneirong:"",beizhu:"",fabushijian:"",kehuzhanghao:"",kehuxingming:"",kehushouji:"",dizhi:"",yuangonggonghao:"",yuangongxingming:"",jiedanshijian:"",ispay:"",userid:""},user:{},ro:{biaoti:!1,tupian:!1,fuwujiage:!1,xuqiuneirong:!1,beizhu:!1,fabushijian:!1,kehuzhanghao:!1,kehuxingming:!1,kehushouji:!1,dizhi:!1,yuangonggonghao:!1,yuangongxingming:!1,jiedanshijian:!1,ispay:!1,userid:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var r=this;return u(t.default.mark((function i(){var a,u,o,s;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return r.ruleForm.jiedanshijian=r.$utils.getCurDateTime(),a=e.getStorageSync("nowTable"),i.next=4,r.$api.session(a);case 4:if(u=i.sent,r.user=u.data,r.ruleForm.yuangonggonghao=r.user.yuangonggonghao,r.ro.yuangonggonghao=!0,r.ruleForm.yuangongxingming=r.user.yuangongxingming,r.ro.yuangongxingming=!0,r.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(r.ruleForm.refid=n.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=18;break}return r.ruleForm.id=n.id,i.next=16,r.$api.info("jiedanxinxi",r.ruleForm.id);case 16:u=i.sent,r.ruleForm=u.data;case 18:if(r.cross=n.cross,!n.cross){i.next=82;break}o=e.getStorageSync("crossObj"),i.t0=t.default.keys(o);case 22:if((i.t1=i.t0()).done){i.next=82;break}if(s=i.t1.value,"biaoti"!=s){i.next=28;break}return r.ruleForm.biaoti=o[s],r.ro.biaoti=!0,i.abrupt("continue",22);case 28:if("tupian"!=s){i.next=32;break}return r.ruleForm.tupian=o[s],r.ro.tupian=!0,i.abrupt("continue",22);case 32:if("fuwujiage"!=s){i.next=36;break}return r.ruleForm.fuwujiage=o[s],r.ro.fuwujiage=!0,i.abrupt("continue",22);case 36:if("xuqiuneirong"!=s){i.next=40;break}return r.ruleForm.xuqiuneirong=o[s],r.ro.xuqiuneirong=!0,i.abrupt("continue",22);case 40:if("beizhu"!=s){i.next=44;break}return r.ruleForm.beizhu=o[s],r.ro.beizhu=!0,i.abrupt("continue",22);case 44:if("fabushijian"!=s){i.next=48;break}return r.ruleForm.fabushijian=o[s],r.ro.fabushijian=!0,i.abrupt("continue",22);case 48:if("kehuzhanghao"!=s){i.next=52;break}return r.ruleForm.kehuzhanghao=o[s],r.ro.kehuzhanghao=!0,i.abrupt("continue",22);case 52:if("kehuxingming"!=s){i.next=56;break}return r.ruleForm.kehuxingming=o[s],r.ro.kehuxingming=!0,i.abrupt("continue",22);case 56:if("kehushouji"!=s){i.next=60;break}return r.ruleForm.kehushouji=o[s],r.ro.kehushouji=!0,i.abrupt("continue",22);case 60:if("dizhi"!=s){i.next=64;break}return r.ruleForm.dizhi=o[s],r.ro.dizhi=!0,i.abrupt("continue",22);case 64:if("yuangonggonghao"!=s){i.next=68;break}return r.ruleForm.yuangonggonghao=o[s],r.ro.yuangonggonghao=!0,i.abrupt("continue",22);case 68:if("yuangongxingming"!=s){i.next=72;break}return r.ruleForm.yuangongxingming=o[s],r.ro.yuangongxingming=!0,i.abrupt("continue",22);case 72:if("jiedanshijian"!=s){i.next=76;break}return r.ruleForm.jiedanshijian=o[s],r.ro.jiedanshijian=!0,i.abrupt("continue",22);case 76:if("userid"!=s){i.next=80;break}return r.ruleForm.userid=o[s],r.ro.userid=!0,i.abrupt("continue",22);case 80:i.next=22;break;case 82:r.styleChange();case 83:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},jiedanshijianConfirm:function(e){console.log(e),this.ruleForm.jiedanshijian=e.result,this.$forceUpdate()},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(t.default.mark((function r(){var i,a,u,o,s,c,g,l,f,d;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n.ruleForm.biaoti){r.next=3;break}return n.$utils.msg("标题不能为空"),r.abrupt("return");case 3:if(n.ruleForm.tupian){r.next=6;break}return n.$utils.msg("图片不能为空"),r.abrupt("return");case 6:if(n.ruleForm.xuqiuneirong){r.next=9;break}return n.$utils.msg("需求内容不能为空"),r.abrupt("return");case 9:if(!n.ruleForm.kehushouji||n.$validate.isMobile(n.ruleForm.kehushouji)){r.next=12;break}return n.$utils.msg("客户手机应输入手机格式"),r.abrupt("return");case 12:if(n.ruleForm.dizhi){r.next=15;break}return n.$utils.msg("地址不能为空"),r.abrupt("return");case 15:if(!n.cross){r.next=31;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){r.next=31;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){r.next=27;break}for(g in c)g==o&&(c[g]=s);return l=e.getStorageSync("crossTable"),r.next=25,n.$api.update("".concat(l),c);case 25:r.next=31;break;case 27:i=Number(e.getStorageSync("userid")),a=c["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 31:if(!a||!i){r.next=53;break}return n.ruleForm.crossuserid=i,n.ruleForm.crossrefid=a,f={page:1,limit:10,crossuserid:i,crossrefid:a},r.next=37,n.$api.list("jiedanxinxi",f);case 37:if(d=r.sent,!(d.data.total>=u)){r.next=43;break}return n.$utils.msg(e.getStorageSync("tips")),r.abrupt("return",!1);case 43:if(!n.ruleForm.id){r.next=48;break}return r.next=46,n.$api.update("jiedanxinxi",n.ruleForm);case 46:r.next=50;break;case 48:return r.next=50,n.$api.add("jiedanxinxi",n.ruleForm);case 50:n.$utils.msgBack("提交成功");case 51:r.next=61;break;case 53:if(!n.ruleForm.id){r.next=58;break}return r.next=56,n.$api.update("jiedanxinxi",n.ruleForm);case 56:r.next=60;break;case 58:return r.next=60,n.$api.add("jiedanxinxi",n.ruleForm);case 60:n.$utils.msgBack("提交成功");case 61:case"end":return r.stop()}}),r)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,r=n.getFullYear(),t=n.getMonth()+1,i=n.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),t=t>9?t:"0"+t,i=i>9?i:"0"+i,"".concat(r,"-").concat(t,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,r("543d")["default"])},c308:function(e,n,r){"use strict";var t=r("7731"),i=r.n(t);i.a},ffb5:function(e,n,r){"use strict";r.r(n);var t=r("ac4c"),i=r.n(t);for(var a in t)"default"!==a&&function(e){r.d(n,e,(function(){return t[e]}))}(a);n["default"]=i.a}},[["3c53","common/runtime","common/vendor"]]]);