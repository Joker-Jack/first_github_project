/**
 * State-based routing for AngularJS
 * @version v0.2.14
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

typeof module!="undefined"&&typeof exports!="undefined"&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){function d(a,b){return P(new(P(function(){},{prototype:a})),b)}function e(a){return O(arguments,function(b){b!==a&&O(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return O(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;d=d<0?Math.ceil(d):Math.floor(d),d<0&&(d+=c);for(;d<c;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e=f(c,d),i,j={},k=[];for(var l in e){if(!e[l].params)continue;i=g(e[l].params);if(!i.length)continue;for(var m in i){if(h(k,i[m])>=0)continue;k.push(i[m]),j[i[m]]=a[i[m]]}}return P({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return O(a,function(a){c[a]=b[a]}),c}function l(a,b){var c={};return O(a,function(a){c[a[b]]=a}),c}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return O(c,function(c){c in a&&(b[c]=a[c])}),b}function n(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)h(c,d)==-1&&(b[d]=a[d]);return b}function o(a,b){var c=N(a)?[]:{};return O(a,function(a,d){c[d]=K(b)?b(a):a[b]}),c}function p(a,b){var c=N(a),d=c?[]:{};return O(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function q(a,b){var c=N(a)?[]:{};return O(a,function(a,d){c[d]=b(a,d)}),c}function r(a,b){var d=1,f=2,i={},j=[],k=i,l=P(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function m(a,c){if(s[c]===f)return;r.push(c);if(s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));s[c]=d;if(L(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);O(e,function(a){a!==c&&i.hasOwnProperty(a)&&m(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}function o(a){return M(a)&&a.then&&a.$$promises}if(!M(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return O(i,m),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,m.resolve(t))}function i(a){r.$$failure=a,m.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(J(r.$$failure))return;try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;O(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}o(d)&&g===c&&(g=f,f=d,d=null);if(!d)d=k;else if(!M(d))throw new Error("'locals' must be an object");if(!f)f=l;else if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()");var m=a.defer(),r=m.promise,s=r.$$promises={},t=P({},d),u=1+q.length/3,v=!1;if(J(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,n(f.$$inheritedValues,p)),P(s,f.$$promises),f.$$values?(v=e(t,n(f.$$values,p)),r.$$inheritedValues=n(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=n(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;w<x;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function s(a,b,c){this.fromConfig=function(a,b,c){return J(a.template)?this.fromString(a.template,b):J(a.templateUrl)?this.fromUrl(a.templateUrl,b):J(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return K(a)?a(b):a},this.fromUrl=function(c,d){return K(c)&&(c=c(d)),c==null?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function t(a,b,e){function f(b,c,d,e){q.push(b);if(o[b])return o[b];if(!/^\w+(-+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new R.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:e=["?(",")?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k,m;return g=e[2]||e[3],k=b.params[g],i=a.substring(l,e.index),h=f?e[4]:e[4]||(e[1]=="*"?".*":null),j=R.type(h||"string")||d(R.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)}),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=P({params:{}},M(b)?b:{});var i=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,j=/([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k="^",l=0,m,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new R.ParamSet,q=[];this.source=a;var r,s,t;while(m=i.exec(a)){r=h(m,!1);if(r.segment.indexOf("?")>=0)break;s=f(r.id,r.type,r.cfg,"path"),k+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),l=i.lastIndex}t=a.substring(l);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);t=t.substring(0,u),this.sourcePath=a.substring(0,l+u);if(v.length>0){l=0;while(m=j.exec(v))r=h(m,!0),s=f(r.id,r.type,r.cfg,"search"),l=i.lastIndex}}else this.sourcePath=a,this.sourceSearch="";k+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(k,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function u(a){P(this,a)}function v(){function a(a){return a!=null?a.toString().replace(/\//g,"%2F"):a}function e(a){return a!=null?a.toString().replace(/%2F/g,"/"):a}function f(a){return this.pattern.test(a)}function i(){return{strict:n,caseInsensitive:m}}function j(a){return K(a)||N(a)&&K(a[a.length-1])}function k(){while(w.length){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(r[a.name],x.invoke(a.def))}}function l(a){P(this,a||{})}R=this;var m=!1,n=!0,o=!1,r={},s=!0,w=[],x,y={string:{encode:a,decode:e,is:function(a){return typeof a=="string"},pattern:/[^/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return J(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return parseInt(a,10)!==0},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^/]*/},any:{encode:b.identity,decode:b.identity,is:b.identity,equals:b.equals,pattern:/.*/}};v.$$getDefaultValue=function(a){if(!j(a.value))return a.value;if(!x)throw new Error("Injectable functions cannot be called at configuration time");return x.invoke(a.value)},this.caseInsensitive=function(a){return J(a)&&(m=a),m},this.strictMode=function(a){return J(a)&&(n=a),n},this.defaultSquashPolicy=function(a){if(!J(a))return o;if(a!==!0&&a!==!1&&!L(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return o=a,a},this.compile=function(a,b){return new t(a,P(i(),b))},this.isMatcher=function(a){if(!M(a))return!1;var b=!0;return O(t.prototype,function(c,d){K(c)&&(b=b&&J(a[d])&&K(a[d]))}),b},this.type=function(a,b,c){if(!J(b))return r[a];if(r.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return r[a]=new u(P({name:a},b)),c&&(w.push({name:a,def:c}),s||k()),this},O(y,function(a,b){r[b]=new u(P({name:b},a))}),r=d(r,{}),this.$get=["$injector",function(a){return x=a,s=!1,k(),O(y,function(a,b){r[b]||(r[b]=new u(a))}),this}],this.Param=function(a,b,d,e){function f(a){var b=M(a)?g(a):[],c=h(b,"value")===-1&&h(b,"type")===-1&&h(b,"squash")===-1&&h(b,"array")===-1;return c&&(a={value:a}),a.$$fn=j(a.value)?a.value:function(){return a.value},a}function i(b,c,d){if(b.type&&c)throw new Error("Param '"+a+"' has two type configurations.");return c?c:b.type?b.type instanceof u?b.type:new u(b.type):d==="config"?r.any:r.string}function k(){var b={array:e==="search"?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return P(b,c,d).array}function l(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!J(c)||c==null)return o;if(c===!0||L(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function m(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=N(a.replace)?a.replace:[],L(e)&&f.push({from:e,to:c}),g=q(f,function(a){return a.from}),p(i,function(a){return h(g,a.from)===-1}).concat(f)}function n(){if(!x)throw new Error("Injectable functions cannot be called at configuration time");var a=x.invoke(d.$$fn);if(a!==null&&a!==c&&!v.type.is(a))throw new Error("Default value ("+a+") for parameter '"+v.id+"' is not an instance of Type ("+v.type.name+")");return a}function s(a){function b(a){return function(b){return b.from===a}}function c(a){var c=q(p(v.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),J(a)?v.type.$normalize(a):n()}function t(){return"{Param:"+a+" "+b+" squash: '"+z+"' optional: "+y+"}"}var v=this;d=f(d),b=i(d,b,e);var w=k();b=w?b.$asArray(w,e==="search"):b,b.name==="string"&&!w&&e==="path"&&d.value===c&&(d.value="");var y=d.value!==c,z=l(d,y),A=m(d,w,y,z);P(this,{id:a,type:b,location:e,array:w,squash:z,replace:A,isOptional:y,value:s,dynamic:c,config:d,toString:t})},l.prototype={$$new:function(){return d(this,P(new l,{$$parent:this}))},$$keys:function(){var a=[],b=[],c=this,d=g(l.prototype);while(c)b.push(c),c=c.$$parent;return b.reverse(),O(b,function(b){O(g(b),function(b){h(a,b)===-1&&h(d,b)===-1&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return O(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return O(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d=this.$$keys(),e,f,g,h,i;for(e=0;e<d.length;e++){f=this[d[e]],g=a[d[e]];if(!(g!==c&&g!==null||!f.isOptional))break;h=f.type.$normalize(g);if(!f.type.is(h))return!1;i=f.type.encode(h);if(b.isString(i)&&!f.type.pattern.exec(i))return!1}return!0},$$parent:c},this.ParamSet=l}function w(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return b!=null?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b[c==="$"?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return J(d)?d:!0}function h(d,e,f,g){function h(a,b,c){return o==="/"?a:b?o.slice(0,-1)+a:c?o.slice(1)+a:a}function m(a){function b(a){var b=a(f,d);return b?(L(b)&&d.replace().url(b),!0):!1}if(a&&a.defaultPrevented)return;var e=q&&d.url()===q;q=c;if(e)return!0;var g=i.length,h;for(h=0;h<g;h++)if(b(i[h]))return;j&&b(j)}function n(){return l=l||e.$on("$locationChangeSuccess",m),l}var o=g.baseHref(),p=d.url(),q;return k||n(),{sync:function(){m()},listen:function(){return n()},update:function(a){if(a){p=d.url();return}if(d.url()===p)return;d.url(p),d.replace()},push:function(a,b,e){var f=a.format(b||{});f!==null&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),q=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled);var i=c.format(e);f=f||{},!g&&i!==null&&(i="#"+a.hashPrefix()+i),i!==null&&e&&e["#"]&&(i+="#"+e["#"]),i=h(i,g,f.absolute);if(!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=k===80||k===443?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i=[],j=null,k=!1,l;this.rule=function(a){if(!K(a))throw new Error("'rule' must be a function");return i.push(a),this},this.otherwise=function(a){if(L(a)){var b=a;a=function(){return b}}else if(!K(a))throw new Error("'rule' must be a function");return j=a,this},this.when=function(a,b){var c,h=L(b);L(a)&&(a=d.compile(a));if(!h&&!K(b)&&!N(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),P(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:L(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),P(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),k=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser"]}function x(a,e){function f(a){return a.indexOf(".")===0||a.indexOf("^")===0}function l(a,b){if(!a)return c;var d=L(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=l(b);var h=e.split("."),i=0,j=h.length,k=b;for(;i<j;i++){if(h[i]===""&&i===0){k=b;continue}if(h[i]==="^"){if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent;continue}break}h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var m=x[e];return m&&(d||!d&&(m===a||m.self===a))?m:c}function m(a,b){z[a]||(z[a]=[]),z[a].push(b)}function n(a){var b=z[a]||[];while(b.length)o(b.shift())}function o(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!L(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(x.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=c.indexOf(".")!==-1?c.substring(0,c.lastIndexOf(".")):L(b.parent)?b.parent:M(b.parent)&&L(b.parent.name)?b.parent.name:"";if(e&&!x[e])return m(e,b.self);for(var f in B)K(B[f])&&(b[f]=B[f](b,B.$delegates[f]));return x[c]=b,!b[A]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){(y.$current.navigable!=b||!j(a,c))&&y.transitionTo(b,a,{inherit:!0,location:!1})}]),n(c),b}function p(a){return a.indexOf("*")>-1}function r(a){var b=a.split("."),c=y.$current.name.split(".");for(var d=0,e=b.length;d<e;d++)b[d]==="*"&&(c[d]="*");return b[0]==="**"&&(c=c.slice(h(c,b[1])),c.unshift("**")),b[b.length-1]==="**"&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length?!1:c.join("")===b.join("")}function s(a,b){return L(a)&&!J(b)?B[a]:!K(b)||!L(a)?this:(B[a]&&!B.$delegates[a]&&(B.$delegates[a]=B[a]),B[a]=b,this)}function t(a,b){return M(a)?b=a:b.name=a,o(b),this}function u(a,e,f,h,m,n,o,s,t){function u(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return o.update(),D;if(!g.retry)return null;if(f.$retry)return o.update(),E;var h=y.transition=e.when(g.retry);return h.then(function(){return h!==y.transition?B:(b.options.$retry=!0,y.transitionTo(b.to,b.toParams,b.options))},function(){return D}),o.update(),h}function z(a,c,d,g,i,j){var l=d?c:k(a.params.$$keys(),c),n={$stateParams:l};i.resolve=m.resolve(a.resolve,n,i.resolve,a);var o=[i.resolve.then(function(a){i.globals=a})];return g&&o.push(g),O(a.views,function(c,d){var e=c.resolve&&c.resolve!==a.resolve?c.resolve:{};e.$template=[function(){return f.load(d,{view:c,locals:n,params:l,notify:j.notify})||""}],o.push(m.resolve(e,n,i.resolve,a).then(function(f){if(K(c.controllerProvider)||N(c.controllerProvider)){var g=b.extend({},e,n,f);f.$$controller=h.invoke(c.controllerProvider,null,g)}else f.$$controller=c.controller;f.$$state=a,f.$$controllerAs=c.controllerAs,i[d]=f}))}),e.all(o).then(function(a){return i})}var B=e.reject(new Error("transition superseded")),C=e.reject(new Error("transition prevented")),D=e.reject(new Error("transition aborted")),E=e.reject(new Error("transition failed"));return w.locals={resolve:null,globals:{$stateParams:{}}},y={params:{},current:w.self,$current:w,transition:null},y.reload=function(a){return y.transitionTo(y.current,n,{reload:a||!0,inherit:!1,notify:!0})},y.go=function(a,b,c){return y.transitionTo(a,b,P({inherit:!0,relative:y.$current},c))},y.transitionTo=function(b,c,f){c=c||{},f=P({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g=y.$current,j=y.params,m=g.path,p,q=l(b,f.relative),r=c["#"];if(!J(q)){var s={to:b,toParams:c,options:f},t=u(s,g.self,j,f);if(t)return t;b=s.to,c=s.toParams,f=s.options,q=l(b,f.relative);if(!J(q))throw f.relative?new Error("Could not resolve '"+b+"' from state '"+f.relative+"'"):new Error("No such state '"+b+"'")}if(q[A])throw new Error("Cannot transition to abstract state '"+b+"'");f.inherit&&(c=i(n,c||{},y.$current,q));if(!q.params.$$validates(c))return E;c=q.params.$$values(c),b=q;var x=b.path,D=0,F=x[D],G=w.locals,H=[],I=!1;if(!f.reload)while(F&&F===m[D]&&F.ownParams.$$equals(c,j))G=H[D]=F.locals,D++,F=x[D];else if(L(f.reload)||M(f.reload)){if(M(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var K=f.reload===!0?m[0]:l(f.reload);if(f.reload&&!K)throw new Error("No such reload state '"+(L(f.reload)?f.reload:f.reload.name)+"'");I=!0;while(F&&F===m[D]&&F!==K)G=H[D]=F.locals,D++,F=x[D]}if(!I&&v(b,g,G,f))return b.self.reloadOnSearch!==!1&&o.update(),y.transition=null,e.when(y.current);c=k(b.params.$$keys(),c||{});if(f.notify&&a.$broadcast("$stateChangeStart",b.self,c,g.self,j).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,g.self,j),o.update(),C;var N=e.when(G);for(var O=D;O<x.length;O++,F=x[O])G=H[O]=d(G),N=z(F,c,F===b,N,G,f);var R=y.transition=N.then(function(){var d,e,i;if(y.transition!==R)return B;for(d=m.length-1;d>=D;d--)i=m[d],i.self.onExit&&h.invoke(i.self.onExit,i.self,i.locals.globals),i.locals=null;for(d=D;d<x.length;d++)e=x[d],e.locals=H[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return r&&(c["#"]=r),y.transition!==R?B:(y.$current=b,y.current=b.self,y.params=c,Q(y.params,n),y.transition=null,f.location&&b.navigable&&o.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:f.location==="replace"}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,g.self,j),o.update(!0),y.current)},function(d){return y.transition!==R?B:(y.transition=null,p=a.$broadcast("$stateChangeError",b.self,c,g.self,j,d),p.defaultPrevented||o.update(),e.reject(d))});return R},y.is=function(a,b,d){d=P({relative:y.$current},d||{});var e=l(a,d.relative);return J(e)?y.$current!==e?!1:b?j(e.params.$$values(b),n):!0:c},y.includes=function(a,b,d){d=P({relative:y.$current},d||{});if(L(a)&&p(a)){if(!r(a))return!1;a=y.$current.name}var e=l(a,d.relative);return J(e)?J(y.$current.includes[e.name])?b?j(e.params.$$values(b),n,g(b)):!0:!1:c},y.href=function(a,b,d){d=P({lossy:!0,inherit:!0,absolute:!1,relative:y.$current},d||{});var e=l(a,d.relative);if(!J(e))return null;d.inherit&&(b=i(n,b||{},y.$current,e));var f=e&&d.lossy?e.navigable:e;return!f||f.url===c||f.url===null?null:o.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute})},y.get=function(a,b){if(arguments.length===0)return q(g(x),function(a){return x[a].self});var c=l(a,b||y.$current);return c&&c.self?c.self:null},y}function v(a,b,c,d){if(a===b&&(c===b.locals&&!d.reload||a.self.reloadOnSearch===!1))return!0}var w,x={},y,z={},A="abstract",B={parent:function(a){if(J(a.parent)&&a.parent)return l(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?l(b[1]):w},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=P({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(L(b))return b.charAt(0)=="^"?e.compile(b.substring(1),c):(a.parent.navigable||w).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new R.ParamSet;return O(a.params||{},function(a,c){b[c]||(b[c]=new R.Param(c,null,a,"config"))}),b},params:function(a){return a.parent&&a.parent.params?P(a.parent.params.$$new(),a.ownParams):new R.ParamSet},views:function(a){var b={};return O(J(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?P({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};w=o({name:"",url:"^",views:null,"abstract":!0}),w.navigable=null,this.decorator=s,this.state=t,this.$get=u,u.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function y(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=P(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function z(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function A(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(j)return{enter:function(a,b,c){var d=j.enter(a,null,b,c);d&&d.then&&d.then(c)},leave:function(a,b){var c=j.leave(a,b);c&&c.then&&c.then(b)}};if(i){var d=i&&i(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var h=f(),i=h("$animator"),j=h("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){l&&(l.remove(),l=null),n&&(n.$destroy(),n=null),m&&(r.leave(m,function(){l=null}),l=m,m=null)}function k(g){var k,l=C(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if(!g&&s===o)return;k=c.$new(),o=a.$current.locals[l];var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit("$viewContentAnimationEnded"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit("$viewContentLoaded"),n.$eval(p)}var l,m,n,o,p=i.onload||"",q=i.autoscroll,r=g(i,c);c.$on("$stateChangeSuccess",function(){k(!1)}),c.$on("$viewContentLoading",function(){k(!1)}),k(!0)}}};return k}function B(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=C(e,h,g,d),k=i&&i.locals[j];if(!k)return;g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e,k.$element=g;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}function C(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function D(a,b){var c=a.match(/^\s*({[^}]*})\s*$/),d;c&&(a=b+"("+c[1]+")"),d=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/);if(!d||d.length!==4)throw new Error("Invalid state ref '"+a+"'");return{state:d[1],paramExpr:d[3]||null}}function E(a){var b=a.parent().inheritedData("$uiView");if(b&&b.state&&b.state.name)return b.state}function F(a,c){var d=["location","inherit","reload","absolute"];return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(e,f,g,h){var i=D(g.uiSref,a.current.name),j=null,k=null,l=E(f)||a.$current,m=Object.prototype.toString.call(f.prop("href"))==="[object SVGAnimatedString]"?"xlink:href":"href",n=null,o=f.prop("tagName").toUpperCase()==="A",p=f[0].nodeName==="FORM",q=p?"action":m,r=!0,s={relative:l,inherit:!0},t=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in t&&(s[a]=t[a])});var u=function(c){c&&(j=b.copy(c));if(!r)return;n=a.href(i.state,j,s);var d=h[1]||h[0];d&&d.$$addStateInfo(i.state,j);if(n===null)return r=!1,!1;g.$set(q,n)};i.paramExpr&&(e.$watch(i.paramExpr,function(a,b){a!==j&&u(a)},!0),j=b.copy(e.$eval(i.paramExpr))),u();if(p)return;f.bind("click",function(b){var d=b.which||b.button;if(!(d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target"))){var e=c(function(){a.go(i.state,j,s)});b.preventDefault();var g=o&&!n?1:0;b.preventDefault=function(){g--<=0&&c.cancel(e)}}})}}}function G(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(b,d,e){function f(){g()?d.addClass(j):d.removeClass(j)}function g(){for(var a=0;a<i.length;a++)if(h(i[a].state,i[a].params))return!0;return!1}function h(b,c){return typeof e.uiSrefActiveEq!="undefined"?a.is(b.name,c):a.includes(b.name,c)}var i=[],j;j=c(e.uiSrefActiveEq||e.uiSrefActive||"",!1)(b),this.$$addStateInfo=function(b,c){var e=a.get(b,E(d));i.push({state:e||{name:b},params:c}),f()},b.$on("$stateChangeSuccess",f)}]}}function H(a){var b=function(b){return a.is(b)};return b.$stateful=!0,b}function I(a){var b=function(b){return a.includes(b)};return b.$stateful=!0,b}var J=b.isDefined,K=b.isFunction,L=b.isString,M=b.isObject,N=b.isArray,O=b.forEach,P=b.extend,Q=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),r.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",r),s.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",s);var R;t.prototype.concat=function(a,b){var c={caseInsensitive:R.caseInsensitive(),strict:R.strictMode(),squash:R.defaultSquashPolicy()};return new t(this.sourcePath+a+this.sourceSearch,P(c,b),this)},t.prototype.toString=function(){return this.source},t.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=q(d,b);return q(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e=this.parameters(),f=e.length,g=this.segments.length-1,h={},i,j,k,l;if(g!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(i=0;i<g;i++){l=e[i];var m=this.params[l],n=d[i+1];for(j=0;j<m.replace;j++)m.replace[j].from===n&&(n=m.replace[j].to);n&&m.array===!0&&(n=c(n)),h[l]=m.value(n)}for(;i<f;i++)l=e[i],h[l]=this.params[l].value(b[l]);return h},t.prototype.parameters=function(a){return J(a)?this.params[a]||null:this.$$paramNames},t.prototype.validates=function(a){return this.params.$$validates(a)},t.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;f<i;f++){var k=f<h,l=d[f],m=e[l],n=m.value(a[l]),o=m.isOptional&&m.type.equals(m.value(),n),p=o?m.squash:!1,r=m.type.encode(n);if(k){var s=c[f+1];if(p===!1)r!=null&&(N(r)?j+=q(r,b).join("-"):j+=encodeURIComponent(r)),j+=s;else if(p===!0){var t=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(t)[1]}else L(p)&&(j+=p+s)}else{if(r==null||o&&p!==!1)continue;N(r)||(r=[r]),r=q(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},u.prototype.is=function(a,b){return!0},u.prototype.encode=function(a,b){return a},u.prototype.decode=function(a,b){return a},u.prototype.equals=function(a,b){return a==b},u.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},u.prototype.pattern=/.*/,u.prototype.toString=function(){return"{Type:"+this.name+"}"},u.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},u.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return N(a)?a:J(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return b==="auto"?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){c=e(c);var d=q(c,a);return b===!0?p(d,g).length===0:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if(a==="auto"&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",v),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),w.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",w),x.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",x),y.$inject=[],b.module("ui.router.state").provider("$view",y),b.module("ui.router.state").provider("$uiViewScroll",z),A.$inject=["$state","$injector","$uiViewScroll","$interpolate"],B.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",A),b.module("ui.router.state").directive("uiView",B),F.$inject=["$state","$timeout"],G.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",F).directive("uiSrefActive",G).directive("uiSrefActiveEq",G),H.$inject=["$state"],I.$inject=["$state"],b.module("ui.router.state").filter("isState",H).filter("includedByState",I)}(window,window.angular)