(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/gongsijieshao/add-or-update"],{"4c54":function(e,n,t){"use strict";(function(e){t("0391");r(t("66fd"));var n=r(t("e101"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"673d":function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r}));var a=function(){var e=this,n=e.$createElement;e._self._c},i=[]},ae5b:function(e,n,t){"use strict";t.r(n);var r=t("e703"),a=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=a.a},af82:function(e,n,t){"use strict";var r=t("f6cc"),a=t.n(r);a.a},e101:function(e,n,t){"use strict";t.r(n);var r=t("673d"),a=t("ae5b");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("af82");var u,o=t("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"c667927e",null,!1,r["a"],u);n["default"]=c.exports},e703:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,r,a,i,u){try{var o=e[i](u),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(r,a)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var u=e.apply(n,t);function o(e){i(u,r,a,o,c,"next",e)}function c(e){i(u,r,a,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("e534"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{cross:"",ruleForm:{gongsimingcheng:"",dizhi:"",zhuceshijian:"",zhucejine:"",xiangqing:"",lianxidianhua:"",fengmian:""},user:{},ro:{gongsimingcheng:!1,dizhi:!1,zhuceshijian:!1,zhucejine:!1,xiangqing:!1,lianxidianhua:!1,fengmian:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return u(r.default.mark((function a(){var i,u,o,c;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=e.getStorageSync("nowTable"),a.next=3,t.$api.session(i);case 3:if(u=a.sent,t.user=u.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=13;break}return t.ruleForm.id=n.id,a.next=11,t.$api.info("gongsijieshao",t.ruleForm.id);case 11:u=a.sent,t.ruleForm=u.data;case 13:if(t.cross=n.cross,!n.cross){a.next=49;break}o=e.getStorageSync("crossObj"),a.t0=r.default.keys(o);case 17:if((a.t1=a.t0()).done){a.next=49;break}if(c=a.t1.value,"gongsimingcheng"!=c){a.next=23;break}return t.ruleForm.gongsimingcheng=o[c],t.ro.gongsimingcheng=!0,a.abrupt("continue",17);case 23:if("dizhi"!=c){a.next=27;break}return t.ruleForm.dizhi=o[c],t.ro.dizhi=!0,a.abrupt("continue",17);case 27:if("zhuceshijian"!=c){a.next=31;break}return t.ruleForm.zhuceshijian=o[c],t.ro.zhuceshijian=!0,a.abrupt("continue",17);case 31:if("zhucejine"!=c){a.next=35;break}return t.ruleForm.zhucejine=o[c],t.ro.zhucejine=!0,a.abrupt("continue",17);case 35:if("xiangqing"!=c){a.next=39;break}return t.ruleForm.xiangqing=o[c],t.ro.xiangqing=!0,a.abrupt("continue",17);case 39:if("lianxidianhua"!=c){a.next=43;break}return t.ruleForm.lianxidianhua=o[c],t.ro.lianxidianhua=!0,a.abrupt("continue",17);case 43:if("fengmian"!=c){a.next=47;break}return t.ruleForm.fengmian=o[c],t.ro.fengmian=!0,a.abrupt("continue",17);case 47:a.next=17;break;case 49:t.styleChange();case 50:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},zhuceshijianChange:function(e){this.ruleForm.zhuceshijian=e.target.value,this.$forceUpdate()},fengmianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.fengmian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(r.default.mark((function t(){var a,i,u,o,c,s,l,f,g,d;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.ruleForm.zhucejine||n.$validate.isIntNumer(n.ruleForm.zhucejine)){t.next=3;break}return n.$utils.msg("注册金额应输入整数"),t.abrupt("return");case 3:if(!n.ruleForm.lianxidianhua||n.$validate.isMobile(n.ruleForm.lianxidianhua)){t.next=6;break}return n.$utils.msg("联系电话应输入手机格式"),t.abrupt("return");case 6:if(!n.cross){t.next=22;break}if(o=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==o){t.next=22;break}if(s=e.getStorageSync("crossObj"),o.startsWith("[")){t.next=18;break}for(l in s)l==o&&(s[l]=c);return f=e.getStorageSync("crossTable"),t.next=16,n.$api.update("".concat(f),s);case 16:t.next=22;break;case 18:a=Number(e.getStorageSync("userid")),i=s["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 22:if(!i||!a){t.next=44;break}return n.ruleForm.crossuserid=a,n.ruleForm.crossrefid=i,g={page:1,limit:10,crossuserid:a,crossrefid:i},t.next=28,n.$api.list("gongsijieshao",g);case 28:if(d=t.sent,!(d.data.total>=u)){t.next=34;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 34:if(!n.ruleForm.id){t.next=39;break}return t.next=37,n.$api.update("gongsijieshao",n.ruleForm);case 37:t.next=41;break;case 39:return t.next=41,n.$api.add("gongsijieshao",n.ruleForm);case 41:n.$utils.msgBack("提交成功");case 42:t.next=52;break;case 44:if(!n.ruleForm.id){t.next=49;break}return t.next=47,n.$api.update("gongsijieshao",n.ruleForm);case 47:t.next=51;break;case 49:return t.next=51,n.$api.add("gongsijieshao",n.ruleForm);case 51:n.$utils.msgBack("提交成功");case 52:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},f6cc:function(e,n,t){}},[["4c54","common/runtime","common/vendor"]]]);