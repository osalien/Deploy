(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{ctxI:function(e,t,r){"use strict";var a=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.getPageList=c,t.addSysUser=i,t.updateSysUser=d,t.deleteSysUser=f,t.getSysUser=h,t.getRoleList=v,t.getAllDepartmentTree=x;var n=a(r("d6i3")),u=a(r("1l/V")),s=a(r("t3Un"));function c(e){return l.apply(this,arguments)}function l(){return l=(0,u.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("/api/sysUser/getPageList",{method:"POST",data:t}));case 1:case"end":return e.stop()}},e)})),l.apply(this,arguments)}function i(e){return p.apply(this,arguments)}function p(){return p=(0,u.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("/api/sysUser/add",{method:"POST",data:t}));case 1:case"end":return e.stop()}},e)})),p.apply(this,arguments)}function d(e){return o.apply(this,arguments)}function o(){return o=(0,u.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("/api/sysUser/update",{method:"POST",data:t}));case 1:case"end":return e.stop()}},e)})),o.apply(this,arguments)}function f(e){return y.apply(this,arguments)}function y(){return y=(0,u.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("/api/sysUser/delete/".concat(t),{method:"POST"}));case 1:case"end":return e.stop()}},e)})),y.apply(this,arguments)}function h(e){return w.apply(this,arguments)}function w(){return w=(0,u.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("/api/sysUser/info/".concat(t)));case 1:case"end":return e.stop()}},e)})),w.apply(this,arguments)}function v(){return m.apply(this,arguments)}function m(){return m=(0,u.default)(n.default.mark(function e(){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("/api/sysRole/getAllRoleList",{method:"POST"}));case 1:case"end":return e.stop()}},e)})),m.apply(this,arguments)}function x(){return U.apply(this,arguments)}function U(){return U=(0,u.default)(n.default.mark(function e(){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("/api/sysDepartment/getAllDepartmentTree",{method:"POST"}));case 1:case"end":return e.stop()}},e)})),U.apply(this,arguments)}},ngY7:function(e,t,r){"use strict";var a=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("p0pE")),u=a(r("d6i3")),s=r("ctxI"),c=(r("+n12"),{namespace:"SysUserModel",state:{records:[],total:0,user:{},roles:[],departments:[]},effects:{eSysUserPage:u.default.mark(function e(t,r){var a,n,c,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,c=r.put,e.next=4,n(s.getPageList,a);case 4:return l=e.sent,e.next=7,c({type:"rSysUserPage",payload:l});case 7:case"end":return e.stop()}},e)}),eAddSysUser:u.default.mark(function e(t,r){var a,n,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,e.next=4,n(s.addSysUser,a);case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}},e)}),eUpdateSysUser:u.default.mark(function e(t,r){var a,n,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,e.next=4,n(s.updateSysUser,a);case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}},e)}),eGetSysUser:u.default.mark(function e(t,r){var a,n,c,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,c=r.put,e.next=4,n(s.getSysUser,a.id);case 4:if(l=e.sent,!l.success){e.next=9;break}return e.next=8,c({type:"rGetSysUser",payload:l});case 8:return e.abrupt("return",!0);case 9:return e.abrupt("return",!1);case 10:case"end":return e.stop()}},e)}),eDeleteSysUserById:u.default.mark(function e(t,r){var a,n,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,e.next=4,n(s.deleteSysUser,a.id);case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}},e)}),eGetRoleList:u.default.mark(function e(t,r){var a,n,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=r.call,n=r.put,e.next=3,a(s.getRoleList);case 3:return c=e.sent,e.next=6,n({type:"rGetRoleList",payload:c});case 6:case"end":return e.stop()}},e)}),eGetAllDepartmentTree:u.default.mark(function e(t,r){var a,n,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=r.call,n=r.put,e.next=3,a(s.getAllDepartmentTree);case 3:return c=e.sent,e.next=6,n({type:"rGetAllDepartmentTree",payload:c});case 6:case"end":return e.stop()}},e)})},reducers:{rSysUserPage:function(e,t){var r=t.payload,a=r.data,u=r.success;if(u){var s=a.records,c=a.total;return(0,n.default)({},e,{records:s,total:c})}return e},rGetRoleList:function(e,t){var r=t.payload,a=r.data,u=r.success;return u?(0,n.default)({},e,{roles:a}):e},rGetAllDepartmentTree:function(e,t){var r=t.payload,a=r.data,u=r.success;if(u){for(var s=[],c=0;c<a.length;c++){var l={};l.id=parseInt(a[c].id),l.value=a[c].id,l.title=a[c].name,l.key=a[c].name,l.children=[];for(var i=a[c].children||[],p=0;p<i.length;p++){var d={};d.id=parseInt(i[p].id),d.value=i[p].id,d.title=i[p].name,d.key=i[p].name,d.children=[];for(var o=i[p].children||[],f=0;f<o.length;f++){var y={};y.id=parseInt(o[f].id),y.value=o[f].id,y.title=o[f].name,y.key=o[f].name,d.children.push(y)}l.children.push(d)}s.push(l)}return(0,n.default)({},e,{departments:s})}return e},rGetSysUser:function(e,t){var r=t.payload,a=r.data,u=r.success;return u?(0,n.default)({},e,{user:a}):e}}}),l=c;t.default=l}}]);