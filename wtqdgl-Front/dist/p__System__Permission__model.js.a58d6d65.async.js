(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"0vyv":function(e,t,r){"use strict";var n=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(r("p0pE")),a=n(r("d6i3")),u=r("wOPn"),i=(r("+n12"),{namespace:"SysPermissionModel",state:{tree:[],select:[],total:0,permission:{},permissions:[]},effects:{eSysPermissionTree:a.default.mark(function e(t,r){var n,s,i,c;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,s=r.call,i=r.put,e.next=4,s(u.getAllPermissionTree,n);case 4:return c=e.sent,e.next=7,i({type:"rSysPermissionTree",payload:c});case 7:case"end":return e.stop()}},e)}),eAddSysPermission:a.default.mark(function e(t,r){var n,s,i;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,s=r.call,e.next=4,s(u.addSysPermission,n);case 4:return i=e.sent,e.abrupt("return",i);case 6:case"end":return e.stop()}},e)}),eUpdateSysPermission:a.default.mark(function e(t,r){var n,s,i;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,s=r.call,e.next=4,s(u.updateSysPermission,n);case 4:return i=e.sent,e.abrupt("return",i);case 6:case"end":return e.stop()}},e)}),eGetSysPermission:a.default.mark(function e(t,r){var n,s,i,c;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,s=r.call,i=r.put,e.next=4,s(u.getSysPermission,n.id);case 4:if(c=e.sent,!c.success){e.next=9;break}return e.next=8,i({type:"rGetSysPermission",payload:c});case 8:return e.abrupt("return",!0);case 9:return e.abrupt("return",!1);case 10:case"end":return e.stop()}},e)}),eDeleteSysPermissionById:a.default.mark(function e(t,r){var n,s,i;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,s=r.call,e.next=4,s(u.deleteSysPermission,n.id);case 4:return i=e.sent,e.abrupt("return",i);case 6:case"end":return e.stop()}},e)}),eGetSysPermissionList:a.default.mark(function e(t,r){var n,s,i;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=r.call,s=r.put,e.next=3,n(u.getSysPermissionList);case 3:if(i=e.sent,!i.success){e.next=8;break}return e.next=7,s({type:"rGetSysPermissionList",payload:i});case 7:return e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}},e)})},reducers:{rSysPermissionTree:function(e,t){var r=t.payload,n=r.data,a=r.success;if(a){for(var u=[],i=0;i<n.length;i++){var c={};c.id=parseInt(n[i].id),c.value=n[i].id,c.title=n[i].name,c.key=n[i].name,c.children=[];for(var o=n[i].children||[],l=0;l<o.length;l++){var p={};p.id=parseInt(o[l].id),p.value=o[l].id,p.title=o[l].name,p.key=o[l].name,c.children.push(p)}u.push(c)}var d=[{id:0,key:"\u65e0",value:"0",title:"\u65e0"}].concat(u);return(0,s.default)({},e,{tree:n,select:d})}return e},rGetPermissionList:function(e,t){var r=t.payload,n=r.data,a=r.success;return a?(0,s.default)({},e,{permissions:n}):e},rGetSysPermission:function(e,t){var r=t.payload,n=r.data,a=r.success;return a?(0,s.default)({},e,{permission:n}):e}}}),c=i;t.default=c},wOPn:function(e,t,r){"use strict";var n=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.getPageList=i,t.getAllPermissionTree=o,t.addSysPermission=p,t.updateSysPermission=f,t.deleteSysPermission=m,t.getSysPermission=w,t.getSysPermissionList=v;var s=n(r("d6i3")),a=n(r("1l/V")),u=n(r("t3Un"));function i(e){return c.apply(this,arguments)}function c(){return c=(0,a.default)(s.default.mark(function e(t){return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.default)("/api/sysPermission/getPageList",{method:"POST",data:t}));case 1:case"end":return e.stop()}},e)})),c.apply(this,arguments)}function o(){return l.apply(this,arguments)}function l(){return l=(0,a.default)(s.default.mark(function e(){return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.default)("/api/sysPermission/getAllMenuTree",{method:"POST"}));case 1:case"end":return e.stop()}},e)})),l.apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return d=(0,a.default)(s.default.mark(function e(t){return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.default)("/api/sysPermission/add",{method:"POST",data:t}));case 1:case"end":return e.stop()}},e)})),d.apply(this,arguments)}function f(e){return y.apply(this,arguments)}function y(){return y=(0,a.default)(s.default.mark(function e(t){return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.default)("/api/sysPermission/update",{method:"POST",data:t}));case 1:case"end":return e.stop()}},e)})),y.apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return h=(0,a.default)(s.default.mark(function e(t){return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.default)("/api/sysPermission/delete/".concat(t),{method:"POST"}));case 1:case"end":return e.stop()}},e)})),h.apply(this,arguments)}function w(e){return P.apply(this,arguments)}function P(){return P=(0,a.default)(s.default.mark(function e(t){return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.default)("/api/sysPermission/info/".concat(t)));case 1:case"end":return e.stop()}},e)})),P.apply(this,arguments)}function v(){return S.apply(this,arguments)}function S(){return S=(0,a.default)(s.default.mark(function e(){return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.default)("/api/sysPermission/getAllMenuTree",{method:"POST"}));case 1:case"end":return e.stop()}},e)})),S.apply(this,arguments)}}}]);