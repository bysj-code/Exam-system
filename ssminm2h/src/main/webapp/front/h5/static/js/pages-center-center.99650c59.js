(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-center"],{"27ae":function(e,t,i){"use strict";i.r(t);var n=i("55b4"),a=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},"55b4":function(e,t,i){"use strict";var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var a=n(i("3b8d")),r=n(i("2971")),o={data:function(){return{isH5Plus:!0,user:{},tableName:"",role:"",menuList:[]}},onLoad:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){var t,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.role=uni.getStorageSync("role"),t=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(t);case 4:i=e.sent,this.user=i.data,this.tableName=t,n=r.default.list(),this.menuList=n;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onShow:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){var t,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.role=uni.getStorageSync("role"),t=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(t);case 4:i=e.sent,this.user=i.data,this.tableName=t,n=r.default.list(),this.menuList=n;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{onPageTap:function(e){uni.navigateTo({url:e,fail:function(){uni.switchTab({url:e})}})}}};t.default=o},"99f8":function(e,t,i){"use strict";var n=i("be0a"),a=i.n(n);a.a},be0a:function(e,t,i){var n=i("edf4");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("1c5e0f92",n,!0,{sourceMap:!1,shadowMode:!1})},d2c0:function(e,t,i){"use strict";i.r(t);var n=i("ef49"),a=i("27ae");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("99f8");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"0cc59021",null,!1,n["a"],o);t["default"]=c.exports},edf4:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-0cc59021]{background-color:#f1f1f1}.content[data-v-0cc59021]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}.header[data-v-0cc59021]{background-color:#ff6364;width:100%;height:30vw;padding:0 4%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header.status[data-v-0cc59021]{padding-top:0}.header .userinfo[data-v-0cc59021]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header .userinfo .face[data-v-0cc59021]{-webkit-flex-shrink:0;flex-shrink:0;width:15vw;height:15vw;overflow:hidden}.header .userinfo .face uni-image[data-v-0cc59021]{width:100%;height:100%}.header .userinfo .info[data-v-0cc59021]{-webkit-flex-flow:wrap;flex-flow:wrap;padding-left:%?30?%}.header .userinfo .info .username[data-v-0cc59021]{width:100%;color:#fff;font-size:%?40?%;margin:%?8?% 0}.header .userinfo .info .integral[data-v-0cc59021]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?8?%;color:#fff;background-color:rgba(0,0,0,.1);border-radius:%?20?%;font-size:%?24?%;margin:%?8?% 0}.header .setting[data-v-0cc59021]{-webkit-flex-shrink:0;flex-shrink:0}.header .setting uni-image[data-v-0cc59021]{width:100%;height:100%}.hover[data-v-0cc59021]{background-color:#eee}.orders[data-v-0cc59021]{background-color:#ff6364;width:100%;height:11vw;padding:0 4%;margin-bottom:calc(11vw + %?40?%);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;border-radius:0 0 100% 100%;margin-top:%?-1?%}.orders .box[data-v-0cc59021]{width:100%;padding:0 1%;height:22vw;background-color:#fefefe;border-radius:%?24?%;box-shadow:0 0 %?20?% rgba(0,0,0,.15);margin-bottom:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.orders .box .label[data-v-0cc59021]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-flow:wrap;flex-flow:wrap;width:100%;height:16vw;color:#666;font-size:%?26?%}.orders .box .label .icon[data-v-0cc59021]{position:relative;width:7vw;height:7vw;margin:0 1vw}.orders .box .label .icon .badge[data-v-0cc59021]{position:absolute;width:4vw;height:4vw;background-color:#ec6d2c;top:-1vw;right:-1vw;border-radius:100%;font-size:%?20?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:10}.orders .box .label .icon uni-image[data-v-0cc59021]{width:7vw;height:7vw;z-index:9}.list[data-v-0cc59021]{width:100%;border-bottom:solid %?26?% #f1f1f1}.list .li[data-v-0cc59021]{width:100%;height:%?100?%;padding:0 4%;border-bottom:solid %?1?% #e7e7e7;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;font-size:%?33?%}.list .li.noborder[data-v-0cc59021]{border-bottom:0}.list .li .icon[data-v-0cc59021]{-webkit-flex-shrink:0;flex-shrink:0;width:%?50?%;height:%?50?%}.list .li .icon uni-image[data-v-0cc59021]{width:%?50?%;height:%?50?%}.list .li .text[data-v-0cc59021]{padding-left:%?20?%;width:100%;color:#666}.list .li .to[data-v-0cc59021]{-webkit-flex-shrink:0;flex-shrink:0;width:%?40?%;height:%?40?%}body.?%PAGE?%[data-v-0cc59021]{background-color:#f1f1f1}',""]),e.exports=t},ef49:function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"header",class:{status:e.isH5Plus},style:{backgroundColor:"rgba(0, 153, 204, 1)",height:"300rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageTap("../user-info/user-info")}}},["yonghu"==e.tableName?i("v-uni-view",{staticClass:"userinfo"},[i("v-uni-view",{staticClass:"face",style:{width:"88rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",borderRadius:"100%",height:"88rpx"}},[i("v-uni-image",{attrs:{src:e.user.zhaopian?e.user.zhaopian:"/static/center/face.jpeg"}})],1),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"username",style:{boxShadow:"0 0 16rpx rgba(255,255,255,0)",borderRadius:"2rpx",color:"rgba(255, 255, 0, 1)",textAlign:"left",borderWidth:"2rpx",width:"240rpx",lineHeight:"36rpx",fontSize:"24rpx",borderStyle:"solid solid  solid solid "}},[e._v(e._s(e.user.zhanghao))])],1)],1):e._e(),i("v-uni-view",{staticClass:"setting",style:{color:"#fff",fontSize:"32rpx"}},[i("v-uni-view",{staticClass:"cuIcon-settings"})],1)],1),i("v-uni-view",{staticClass:"list"},[e._l(e.menuList,(function(t){return i("v-uni-view",{key:t.roleName},e._l(t.backMenu,(function(n,a){return e.role==t.roleName?i("v-uni-view",{key:a},e._l(n.child,(function(t,n){return i("v-uni-view",{key:n},["yifahuodingdan"!=t.tableName&&"yituikuandingdan"!=t.tableName&&"yiquxiaodingdan"!=t.tableName&&"weizhifudingdan"!=t.tableName&&"yizhifudingdan"!=t.tableName&&"yiwanchengdingdan"!=t.tableName?i("v-uni-view",{staticClass:"li",style:{backgroundColor:"rgba(255, 255, 0, 0.34)",borderColor:"#ccc",lineHeight:"80rpx",borderStyle:"none none solid none",borderWidth:"2rpx 2rpx 2rpx 2rpx"},attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onPageTap("../"+t.tableName+"/list?userid="+e.user.id)}}},[i("v-uni-view",{staticClass:"text",style:{color:"rgba(0, 153, 204, 1)",fontSize:"28rpx"}},[e._v(e._s(t.menu))]),i("v-uni-view",{staticClass:"cuIcon-right",style:{color:"rgba(0, 153, 204, 1)",fontSize:"28rpx"}})],1):e._e()],1)})),1):e._e()})),1)})),i("v-uni-view",{staticClass:"li",style:{backgroundColor:"rgba(255, 255, 0, 0.34)",borderColor:"#ccc",lineHeight:"80rpx",borderStyle:"none none solid none",borderWidth:"2rpx 2rpx 2rpx 2rpx"},attrs:{"hover-class":"hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageTap("../forum-add-or-update/forum-add-or-update")}}},[i("v-uni-view",{staticClass:"text",style:{color:"rgba(0, 153, 204, 1)",fontSize:"28rpx"}},[e._v("我要发贴")]),i("v-uni-view",{staticClass:"cuIcon-right",style:{color:"rgba(0, 153, 204, 1)",fontSize:"28rpx"}})],1),i("v-uni-view",{staticClass:"li",style:{backgroundColor:"rgba(255, 255, 0, 0.34)",borderColor:"#ccc",lineHeight:"80rpx",borderStyle:"none none solid none",borderWidth:"2rpx 2rpx 2rpx 2rpx"},attrs:{"hover-class":"hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageTap("../forum-my/forum-my")}}},[i("v-uni-view",{staticClass:"text",style:{color:"rgba(0, 153, 204, 1)",fontSize:"28rpx"}},[e._v("我的发贴")]),i("v-uni-view",{staticClass:"cuIcon-right",style:{color:"rgba(0, 153, 204, 1)",fontSize:"28rpx"}})],1),i("v-uni-view",{staticClass:"li",style:{backgroundColor:"rgba(255, 255, 0, 0.34)",borderColor:"#ccc",lineHeight:"80rpx",borderStyle:"none none solid none",borderWidth:"2rpx 2rpx 2rpx 2rpx"},attrs:{"hover-class":"hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageTap("../messages/list")}}},[i("v-uni-view",{staticClass:"text",style:{color:"rgba(0, 153, 204, 1)",fontSize:"28rpx"}},[e._v("留言板")]),i("v-uni-view",{staticClass:"cuIcon-right",style:{color:"rgba(0, 153, 204, 1)",fontSize:"28rpx"}})],1)],2)],1)},r=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}))}}]);