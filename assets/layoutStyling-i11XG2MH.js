import{g as Qt,r as v,b as Pt,c as Zt,d as W,t as y,F as mt,R as ht,e as Mt,f as te,A as C,s as et}from"./index-2jz_ODTa.js";var nt={exports:{}},_t={},Ct={exports:{}},ee="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ne=ee,re=ne;function Nt(){}function Et(){}Et.resetWarningCache=Nt;var oe=function(){function t(r,o,a,i,u,d){if(d!==re){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Et,resetWarningCache:Nt};return n.PropTypes=n,n};Ct.exports=oe();var Wt=Ct.exports;function Bt(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=Bt(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Dt(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=Bt(t))&&(r&&(r+=" "),r+=e);return r}const ae=Object.freeze(Object.defineProperty({__proto__:null,clsx:Dt,default:Dt},Symbol.toStringTag,{value:"Module"})),ie=Qt(ae);var g={},B={};Object.defineProperty(B,"__esModule",{value:!0});B.dontSetMe=de;B.findInArray=se;B.int=ce;B.isFunction=le;B.isNum=ue;function se(t,e){for(let n=0,r=t.length;n<r;n++)if(e.apply(e,[t[n],n,t]))return t[n]}function le(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Function]"}function ue(t){return typeof t=="number"&&!isNaN(t)}function ce(t){return parseInt(t,10)}function de(t,e,n){if(t[e])return new Error("Invalid prop ".concat(e," passed to ").concat(n," - do not set this, set it on the child."))}var X={};Object.defineProperty(X,"__esModule",{value:!0});X.browserPrefixToKey=kt;X.browserPrefixToStyle=fe;X.default=void 0;X.getPrefix=Rt;const ct=["Moz","Webkit","O","ms"];function Rt(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const n=(t=window.document)===null||t===void 0||(t=t.documentElement)===null||t===void 0?void 0:t.style;if(!n||e in n)return"";for(let r=0;r<ct.length;r++)if(kt(e,ct[r])in n)return ct[r];return""}function kt(t,e){return e?"".concat(e).concat(pe(t)):t}function fe(t,e){return e?"-".concat(e.toLowerCase(),"-").concat(t):t}function pe(t){let e="",n=!0;for(let r=0;r<t.length;r++)n?(e+=t[r].toUpperCase(),n=!1):t[r]==="-"?n=!0:e+=t[r];return e}X.default=Rt();Object.defineProperty(g,"__esModule",{value:!0});g.addClassName=$t;g.addEvent=me;g.addUserSelectStyles=Me;g.createCSSTransform=De;g.createSVGTransform=Te;g.getTouch=Oe;g.getTouchIdentifier=Pe;g.getTranslation=vt;g.innerHeight=we;g.innerWidth=xe;g.matchesSelector=It;g.matchesSelectorAndParentsTo=ge;g.offsetXYFromParent=Se;g.outerHeight=ye;g.outerWidth=be;g.removeClassName=Xt;g.removeEvent=ve;g.removeUserSelectStyles=_e;var P=B,Tt=he(X);function At(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(At=function(r){return r?n:e})(t)}function he(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=At(e);if(n&&n.has(t))return n.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(a!=="default"&&Object.prototype.hasOwnProperty.call(t,a)){var i=o?Object.getOwnPropertyDescriptor(t,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=t[a]}return r.default=t,n&&n.set(t,r),r}let Q="";function It(t,e){return Q||(Q=(0,P.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,P.isFunction)(t[n])})),(0,P.isFunction)(t[Q])?t[Q](e):!1}function ge(t,e,n){let r=t;do{if(It(r,e))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function me(t,e,n,r){if(!t)return;const o={capture:!0,...r};t.addEventListener?t.addEventListener(e,n,o):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n}function ve(t,e,n,r){if(!t)return;const o={capture:!0,...r};t.removeEventListener?t.removeEventListener(e,n,o):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=null}function ye(t){let e=t.clientHeight;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,P.int)(n.borderTopWidth),e+=(0,P.int)(n.borderBottomWidth),e}function be(t){let e=t.clientWidth;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,P.int)(n.borderLeftWidth),e+=(0,P.int)(n.borderRightWidth),e}function we(t){let e=t.clientHeight;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,P.int)(n.paddingTop),e-=(0,P.int)(n.paddingBottom),e}function xe(t){let e=t.clientWidth;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,P.int)(n.paddingLeft),e-=(0,P.int)(n.paddingRight),e}function Se(t,e,n){const o=e===e.ownerDocument.body?{left:0,top:0}:e.getBoundingClientRect(),a=(t.clientX+e.scrollLeft-o.left)/n,i=(t.clientY+e.scrollTop-o.top)/n;return{x:a,y:i}}function De(t,e){const n=vt(t,e,"px");return{[(0,Tt.browserPrefixToKey)("transform",Tt.default)]:n}}function Te(t,e){return vt(t,e,"")}function vt(t,e,n){let{x:r,y:o}=t,a="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(e){const i="".concat(typeof e.x=="string"?e.x:e.x+n),u="".concat(typeof e.y=="string"?e.y:e.y+n);a="translate(".concat(i,", ").concat(u,")")+a}return a}function Oe(t,e){return t.targetTouches&&(0,P.findInArray)(t.targetTouches,n=>e===n.identifier)||t.changedTouches&&(0,P.findInArray)(t.changedTouches,n=>e===n.identifier)}function Pe(t){if(t.targetTouches&&t.targetTouches[0])return t.targetTouches[0].identifier;if(t.changedTouches&&t.changedTouches[0])return t.changedTouches[0].identifier}function Me(t){if(!t)return;let e=t.getElementById("react-draggable-style-el");e||(e=t.createElement("style"),e.type="text/css",e.id="react-draggable-style-el",e.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,e.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,t.getElementsByTagName("head")[0].appendChild(e)),t.body&&$t(t.body,"react-draggable-transparent-selection")}function _e(t){if(t)try{if(t.body&&Xt(t.body,"react-draggable-transparent-selection"),t.selection)t.selection.empty();else{const e=(t.defaultView||window).getSelection();e&&e.type!=="Caret"&&e.removeAllRanges()}}catch{}}function $t(t,e){t.classList?t.classList.add(e):t.className.match(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)")))||(t.className+=" ".concat(e))}function Xt(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)"),"g"),"")}var R={};Object.defineProperty(R,"__esModule",{value:!0});R.canDragX=Ee;R.canDragY=We;R.createCoreData=Re;R.createDraggableData=ke;R.getBoundPosition=Ce;R.getControlPosition=Be;R.snapToGrid=Ne;var O=B,L=g;function Ce(t,e,n){if(!t.props.bounds)return[e,n];let{bounds:r}=t.props;r=typeof r=="string"?r:Ae(r);const o=yt(t);if(typeof r=="string"){const{ownerDocument:a}=o,i=a.defaultView;let u;if(r==="parent"?u=o.parentNode:u=a.querySelector(r),!(u instanceof i.HTMLElement))throw new Error('Bounds selector "'+r+'" could not find an element.');const d=u,h=i.getComputedStyle(o),D=i.getComputedStyle(d);r={left:-o.offsetLeft+(0,O.int)(D.paddingLeft)+(0,O.int)(h.marginLeft),top:-o.offsetTop+(0,O.int)(D.paddingTop)+(0,O.int)(h.marginTop),right:(0,L.innerWidth)(d)-(0,L.outerWidth)(o)-o.offsetLeft+(0,O.int)(D.paddingRight)-(0,O.int)(h.marginRight),bottom:(0,L.innerHeight)(d)-(0,L.outerHeight)(o)-o.offsetTop+(0,O.int)(D.paddingBottom)-(0,O.int)(h.marginBottom)}}return(0,O.isNum)(r.right)&&(e=Math.min(e,r.right)),(0,O.isNum)(r.bottom)&&(n=Math.min(n,r.bottom)),(0,O.isNum)(r.left)&&(e=Math.max(e,r.left)),(0,O.isNum)(r.top)&&(n=Math.max(n,r.top)),[e,n]}function Ne(t,e,n){const r=Math.round(e/t[0])*t[0],o=Math.round(n/t[1])*t[1];return[r,o]}function Ee(t){return t.props.axis==="both"||t.props.axis==="x"}function We(t){return t.props.axis==="both"||t.props.axis==="y"}function Be(t,e,n){const r=typeof e=="number"?(0,L.getTouch)(t,e):null;if(typeof e=="number"&&!r)return null;const o=yt(n),a=n.props.offsetParent||o.offsetParent||o.ownerDocument.body;return(0,L.offsetXYFromParent)(r||t,a,n.props.scale)}function Re(t,e,n){const r=!(0,O.isNum)(t.lastX),o=yt(t);return r?{node:o,deltaX:0,deltaY:0,lastX:e,lastY:n,x:e,y:n}:{node:o,deltaX:e-t.lastX,deltaY:n-t.lastY,lastX:t.lastX,lastY:t.lastY,x:e,y:n}}function ke(t,e){const n=t.props.scale;return{node:e.node,x:t.state.x+e.deltaX/n,y:t.state.y+e.deltaY/n,deltaX:e.deltaX/n,deltaY:e.deltaY/n,lastX:t.state.x,lastY:t.state.y}}function Ae(t){return{left:t.left,top:t.top,right:t.right,bottom:t.bottom}}function yt(t){const e=t.findDOMNode();if(!e)throw new Error("<DraggableCore>: Unmounted during event!");return e}var rt={},ot={};Object.defineProperty(ot,"__esModule",{value:!0});ot.default=Ie;function Ie(){}Object.defineProperty(rt,"__esModule",{value:!0});rt.default=void 0;var dt=Xe(v),T=bt(Wt),$e=bt(Pt),w=g,A=R,ft=B,z=bt(ot);function bt(t){return t&&t.__esModule?t:{default:t}}function Yt(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(Yt=function(r){return r?n:e})(t)}function Xe(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=Yt(e);if(n&&n.has(t))return n.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(a!=="default"&&Object.prototype.hasOwnProperty.call(t,a)){var i=o?Object.getOwnPropertyDescriptor(t,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=t[a]}return r.default=t,n&&n.set(t,r),r}function S(t,e,n){return e=Ye(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ye(t){var e=je(t,"string");return typeof e=="symbol"?e:String(e)}function je(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}const N={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let I=N.mouse,at=class extends dt.Component{constructor(){super(...arguments),S(this,"dragging",!1),S(this,"lastX",NaN),S(this,"lastY",NaN),S(this,"touchIdentifier",null),S(this,"mounted",!1),S(this,"handleDragStart",e=>{if(this.props.onMouseDown(e),!this.props.allowAnyClick&&typeof e.button=="number"&&e.button!==0)return!1;const n=this.findDOMNode();if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:r}=n;if(this.props.disabled||!(e.target instanceof r.defaultView.Node)||this.props.handle&&!(0,w.matchesSelectorAndParentsTo)(e.target,this.props.handle,n)||this.props.cancel&&(0,w.matchesSelectorAndParentsTo)(e.target,this.props.cancel,n))return;e.type==="touchstart"&&e.preventDefault();const o=(0,w.getTouchIdentifier)(e);this.touchIdentifier=o;const a=(0,A.getControlPosition)(e,o,this);if(a==null)return;const{x:i,y:u}=a,d=(0,A.createCoreData)(this,i,u);(0,z.default)("DraggableCore: handleDragStart: %j",d),(0,z.default)("calling",this.props.onStart),!(this.props.onStart(e,d)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,w.addUserSelectStyles)(r),this.dragging=!0,this.lastX=i,this.lastY=u,(0,w.addEvent)(r,I.move,this.handleDrag),(0,w.addEvent)(r,I.stop,this.handleDragStop))}),S(this,"handleDrag",e=>{const n=(0,A.getControlPosition)(e,this.touchIdentifier,this);if(n==null)return;let{x:r,y:o}=n;if(Array.isArray(this.props.grid)){let u=r-this.lastX,d=o-this.lastY;if([u,d]=(0,A.snapToGrid)(this.props.grid,u,d),!u&&!d)return;r=this.lastX+u,o=this.lastY+d}const a=(0,A.createCoreData)(this,r,o);if((0,z.default)("DraggableCore: handleDrag: %j",a),this.props.onDrag(e,a)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const d=document.createEvent("MouseEvents");d.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(d)}return}this.lastX=r,this.lastY=o}),S(this,"handleDragStop",e=>{if(!this.dragging)return;const n=(0,A.getControlPosition)(e,this.touchIdentifier,this);if(n==null)return;let{x:r,y:o}=n;if(Array.isArray(this.props.grid)){let d=r-this.lastX||0,h=o-this.lastY||0;[d,h]=(0,A.snapToGrid)(this.props.grid,d,h),r=this.lastX+d,o=this.lastY+h}const a=(0,A.createCoreData)(this,r,o);if(this.props.onStop(e,a)===!1||this.mounted===!1)return!1;const u=this.findDOMNode();u&&this.props.enableUserSelectHack&&(0,w.removeUserSelectStyles)(u.ownerDocument),(0,z.default)("DraggableCore: handleDragStop: %j",a),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,u&&((0,z.default)("DraggableCore: Removing handlers"),(0,w.removeEvent)(u.ownerDocument,I.move,this.handleDrag),(0,w.removeEvent)(u.ownerDocument,I.stop,this.handleDragStop))}),S(this,"onMouseDown",e=>(I=N.mouse,this.handleDragStart(e))),S(this,"onMouseUp",e=>(I=N.mouse,this.handleDragStop(e))),S(this,"onTouchStart",e=>(I=N.touch,this.handleDragStart(e))),S(this,"onTouchEnd",e=>(I=N.touch,this.handleDragStop(e)))}componentDidMount(){this.mounted=!0;const e=this.findDOMNode();e&&(0,w.addEvent)(e,N.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const e=this.findDOMNode();if(e){const{ownerDocument:n}=e;(0,w.removeEvent)(n,N.mouse.move,this.handleDrag),(0,w.removeEvent)(n,N.touch.move,this.handleDrag),(0,w.removeEvent)(n,N.mouse.stop,this.handleDragStop),(0,w.removeEvent)(n,N.touch.stop,this.handleDragStop),(0,w.removeEvent)(e,N.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,w.removeUserSelectStyles)(n)}}findDOMNode(){var e,n;return(e=this.props)!==null&&e!==void 0&&e.nodeRef?(n=this.props)===null||n===void 0||(n=n.nodeRef)===null||n===void 0?void 0:n.current:$e.default.findDOMNode(this)}render(){return dt.cloneElement(dt.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};rt.default=at;S(at,"displayName","DraggableCore");S(at,"propTypes",{allowAnyClick:T.default.bool,children:T.default.node.isRequired,disabled:T.default.bool,enableUserSelectHack:T.default.bool,offsetParent:function(t,e){if(t[e]&&t[e].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:T.default.arrayOf(T.default.number),handle:T.default.string,cancel:T.default.string,nodeRef:T.default.object,onStart:T.default.func,onDrag:T.default.func,onStop:T.default.func,onMouseDown:T.default.func,scale:T.default.number,className:ft.dontSetMe,style:ft.dontSetMe,transform:ft.dontSetMe});S(at,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return d.default}}),t.default=void 0;var e=Y(v),n=D(Wt),r=D(Pt),o=D(ie),a=g,i=R,u=B,d=D(rt),h=D(ot);function D(s){return s&&s.__esModule?s:{default:s}}function G(s){if(typeof WeakMap!="function")return null;var l=new WeakMap,f=new WeakMap;return(G=function(c){return c?f:l})(s)}function Y(s,l){if(!l&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var f=G(l);if(f&&f.has(s))return f.get(s);var c={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in s)if(p!=="default"&&Object.prototype.hasOwnProperty.call(s,p)){var _=m?Object.getOwnPropertyDescriptor(s,p):null;_&&(_.get||_.set)?Object.defineProperty(c,p,_):c[p]=s[p]}return c.default=s,f&&f.set(s,c),c}function $(){return $=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var f=arguments[l];for(var c in f)Object.prototype.hasOwnProperty.call(f,c)&&(s[c]=f[c])}return s},$.apply(this,arguments)}function M(s,l,f){return l=it(l),l in s?Object.defineProperty(s,l,{value:f,enumerable:!0,configurable:!0,writable:!0}):s[l]=f,s}function it(s){var l=st(s,"string");return typeof l=="symbol"?l:String(l)}function st(s,l){if(typeof s!="object"||s===null)return s;var f=s[Symbol.toPrimitive];if(f!==void 0){var c=f.call(s,l||"default");if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(s)}class E extends e.Component{static getDerivedStateFromProps(l,f){let{position:c}=l,{prevPropsPosition:m}=f;return c&&(!m||c.x!==m.x||c.y!==m.y)?((0,h.default)("Draggable: getDerivedStateFromProps %j",{position:c,prevPropsPosition:m}),{x:c.x,y:c.y,prevPropsPosition:{...c}}):null}constructor(l){super(l),M(this,"onDragStart",(f,c)=>{if((0,h.default)("Draggable: onDragStart: %j",c),this.props.onStart(f,(0,i.createDraggableData)(this,c))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),M(this,"onDrag",(f,c)=>{if(!this.state.dragging)return!1;(0,h.default)("Draggable: onDrag: %j",c);const m=(0,i.createDraggableData)(this,c),p={x:m.x,y:m.y,slackX:0,slackY:0};if(this.props.bounds){const{x:b,y:k}=p;p.x+=this.state.slackX,p.y+=this.state.slackY;const[j,F]=(0,i.getBoundPosition)(this,p.x,p.y);p.x=j,p.y=F,p.slackX=this.state.slackX+(b-p.x),p.slackY=this.state.slackY+(k-p.y),m.x=p.x,m.y=p.y,m.deltaX=p.x-this.state.x,m.deltaY=p.y-this.state.y}if(this.props.onDrag(f,m)===!1)return!1;this.setState(p)}),M(this,"onDragStop",(f,c)=>{if(!this.state.dragging||this.props.onStop(f,(0,i.createDraggableData)(this,c))===!1)return!1;(0,h.default)("Draggable: onDragStop: %j",c);const p={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:b,y:k}=this.props.position;p.x=b,p.y=k}this.setState(p)}),this.state={dragging:!1,dragged:!1,x:l.position?l.position.x:l.defaultPosition.x,y:l.position?l.position.y:l.defaultPosition.y,prevPropsPosition:{...l.position},slackX:0,slackY:0,isElementSVG:!1},l.position&&!(l.onDrag||l.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var l,f;return(l=(f=this.props)===null||f===void 0||(f=f.nodeRef)===null||f===void 0?void 0:f.current)!==null&&l!==void 0?l:r.default.findDOMNode(this)}render(){const{axis:l,bounds:f,children:c,defaultPosition:m,defaultClassName:p,defaultClassNameDragging:_,defaultClassNameDragged:b,position:k,positionOffset:j,scale:F,...lt}=this.props;let H={},K=null;const q=!!!k||this.state.dragging,J=k||m,x={x:(0,i.canDragX)(this)&&q?this.state.x:J.x,y:(0,i.canDragY)(this)&&q?this.state.y:J.y};this.state.isElementSVG?K=(0,a.createSVGTransform)(x,j):H=(0,a.createCSSTransform)(x,j);const U=(0,o.default)(c.props.className||"",p,{[_]:this.state.dragging,[b]:this.state.dragged});return e.createElement(d.default,$({},lt,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),e.cloneElement(e.Children.only(c),{className:U,style:{...c.props.style,...H},transform:K}))}}t.default=E,M(E,"displayName","Draggable"),M(E,"propTypes",{...d.default.propTypes,axis:n.default.oneOf(["both","x","y","none"]),bounds:n.default.oneOfType([n.default.shape({left:n.default.number,right:n.default.number,top:n.default.number,bottom:n.default.number}),n.default.string,n.default.oneOf([!1])]),defaultClassName:n.default.string,defaultClassNameDragging:n.default.string,defaultClassNameDragged:n.default.string,defaultPosition:n.default.shape({x:n.default.number,y:n.default.number}),positionOffset:n.default.shape({x:n.default.oneOfType([n.default.number,n.default.string]),y:n.default.oneOfType([n.default.number,n.default.string])}),position:n.default.shape({x:n.default.number,y:n.default.number}),className:u.dontSetMe,style:u.dontSetMe,transform:u.dontSetMe}),M(E,"defaultProps",{...d.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(_t);const{default:jt,DraggableCore:Ue}=_t;nt.exports=jt;nt.exports.default=jt;nt.exports.DraggableCore=Ue;var Le=nt.exports;const Fe=Zt(Le);var Ut=W.button.withConfig({displayName:"Button",componentId:"sc-1wi1b4u-0"})([`
  background-color: material;
  padding: 7 20 5;
  border: none;
  color: materialText;

  font-size: 12px;

  box-shadow: inset 1px 1px 0px 1px `,`,
    inset 0 0 0 1px `,`,
    1px 1px 0 0px `,`;

  &:disabled {
    color: materialTextDisabled;
  }

  &:focus {
    outline: `,"px dotted ",`;
    outline-offset: -`,`px;

    box-shadow: inset 1px 1px 0px 1px `,`,
      inset -0.5px -0.5px 0px 1px `,`,
      1px 1px 0 1px `,`;
  }

  &:active {
    padding: 8 20 4;

    outline: `,"px dotted ",`;
    outline-offset: -`,`px;

    box-shadow: inset 0 0 0 1px `,`,
      0 0 0 1px `,`;
  }
`],y("colors.borderLightest"),y("colors.borderDark"),y("colors.borderDarkest"),y("space.1"),y("colors.materialText"),y("space.5"),y("colors.borderLightest"),y("colors.borderDark"),y("colors.borderDarkest"),y("space.1"),y("colors.borderDarkest"),y("space.5"),y("colors.borderDark"),y("colors.borderDarkest"));Ut.defaultProps={children:"Ok"};const wt=Ut;var He=W.ul.withConfig({displayName:"TitleBar__OptionsBox",componentId:"sc-5cvtvn-0"})([`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
`]),Lt=W(wt).attrs({as:"li"}).withConfig({displayName:"TitleBar__Option",componentId:"sc-5cvtvn-1"})([`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 2;
  padding: 0;

  width: 17px;
  height: 14px;

  min-width: 0;
  font-weight: 600;
  font-size: 10;

  &:active {
    padding: 1 0 0 1;

    outline: none;
  }

  &:first-child {
    margin-right: 0;
  }

  &:focus {
    box-shadow: inset 1px 1px 0px 1px `,`,
      inset -1px -1px 0px 1px `,`;
  }
`],y("colors.borderLightest"),y("colors.borderDark"));Lt.displayName="Option";var qe=W(mt).withConfig({displayName:"TitleBar__TitleBarBackground",componentId:"sc-5cvtvn-2"})([`
  height: 18;
  margin-bottom: 2;

  padding: 2;

  display: flex;

  box-shadow: none;

  img {
    width: 15;
    height: 14;
    margin-right: 4;
  }

  background: `,`;
`],function(t){var e=t.active,n=t.theme;return e?n.colors.headerBackground:n.colors.headerNotActiveBackground}),ze=W.div.withConfig({displayName:"TitleBar__Title",componentId:"sc-5cvtvn-3"})([`
  flex-grow: 1;
  font-weight: bold;
  line-height: 1.4em;
  margin: 0;
  font-size: 1em;
`]),Ve=function(e,n){var r=e.children,o=e.title,a=o===void 0?"UNKNOWN.EXE":o,i=e.icon,u=e.active,d=u===void 0?!0:u,h=e.className;return ht.createElement(qe,{active:d,color:d?"headerText":"headerNotActiveText",ref:n},i&&i,ht.createElement(ze,{className:h},a),r)},Ge=Object.assign(ht.forwardRef(Ve),{Option:Lt,OptionsBox:He});const Z=Ge;var Ke=["hasWindowButton","buttons","buttonsAlignment","children","closeModal","defaultPosition","positionOffset","height","icon","menu","title","width"];function gt(){return gt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gt.apply(this,arguments)}function pt(t,e){return tn(t)||Ze(t,e)||Qe(t,e)||Je()}function Je(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qe(t,e){if(t){if(typeof t=="string")return Ot(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ot(t,e)}}function Ot(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Ze(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,o,a,i,u=[],d=!0,h=!1;try{if(a=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;d=!1}else for(;!(d=(r=a.call(n)).done)&&(u.push(r.value),u.length!==e);d=!0);}catch(D){h=!0,o=D}finally{try{if(!d&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(h)throw o}}return u}}function tn(t){if(Array.isArray(t))return t}function en(t,e){if(t==null)return{};var n=nn(t,e),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function nn(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,a;for(a=0;a<r.length;a++)o=r[a],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}var rn=W.div.withConfig({displayName:"Modal__ModalWrapper",componentId:"sc-4ouk59-0"})([`
  display: flex;
  flex-direction: column;

  position: fixed;

  padding: 2 2 8;

  top: 50px;

  background-color: material;

  box-shadow: inset 1px 1px 0px 1px `,`,
    inset 0 0 0 1px `,`,
    1px 1px 0 1px `,`;

  `,`
  `,`
`],y("colors.borderLightest"),y("colors.borderDark"),y("colors.borderDarkest"),function(t){var e=t.width,n=t.height;return`
    width: `.concat(e?"".concat(e,"px"):"auto",`;
    height: `).concat(n?"".concat(n,"px"):"auto",`;
  `)},function(t){var e=t.active;return e?Mt([`
          z-index: modal;
        `]):""}),on=W.div.withConfig({displayName:"Modal__Content",componentId:"sc-4ouk59-1"})([`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  padding: 6;
`]),an=W.div.withConfig({displayName:"Modal__ButtonWrapper",componentId:"sc-4ouk59-2"})([`
  display: flex;
  flex-direction: row;
  justify-content: `,`;

  padding: 0 6 6 6;

  & `,` {
    margin-right: 6;
    min-width: 70px;

    &:last-child {
      margin-right: 0;
    }
  }
`],function(t){var e=t.buttonsAlignment,n=e===void 0?"center":e;return n},wt),sn=W.ul.withConfig({displayName:"Modal__MenuWrapper",componentId:"sc-4ouk59-3"})([`
  display: flex;
  flex-direction: row;

  list-style: none;
  margin: 0;
  padding-left: 0;
  padding-bottom: 3;

  border-bottom-style: solid;
  border-width: 1;
  border-bottom-color: borderDark;

  box-shadow: 0 1px 0 0 `,`;
`],y("colors.borderLighter")),Ft=W.li.withConfig({displayName:"Modal__MenuItem",componentId:"sc-4ouk59-4"})([`
  position: relative;
  padding-left: 6;
  padding-right: 6;

  user-select: none;

  ul {
    position: absolute;
    left: 0;
    color: `,`;
  }

  `,`;
`],y("colors.materialText"),function(t){var e=t.active;return e&&Mt([`
      background-color: primary;
      color: materialTextInvert;
    `])});Ft.displayName="MenuItem";var ln=function(e,n){var r=e.hasWindowButton,o=r===void 0?!0:r,a=e.buttons,i=e.buttonsAlignment,u=e.children,d=e.closeModal,h=e.defaultPosition,D=e.positionOffset,G=e.height,Y=e.icon,$=e.menu,M=e.title,it=e.width,st=en(e,Ke),E=v.useContext(te),s=E.addWindows,l=E.removeWindow,f=E.updateWindow,c=E.setActiveWindow,m=E.activeWindow,p=v.useState(null),_=pt(p,2),b=_[0],k=_[1],j=v.useState(""),F=pt(j,2),lt=F[0],H=F[1],K=v.useState(!1),ut=pt(K,2),q=ut[0],J=ut[1];return v.useEffect(function(){if(b)f(b,{icon:Y,title:M,hasButton:o});else{var x=s({icon:Y,title:M,hasButton:o});x&&(k(x),c(x))}},[b,Y,M,o]),v.useEffect(function(){return function(){b&&l(b)}},[b]),v.useEffect(function(){return J(b===m)},[b,m]),v.createElement(Fe,{handle:".draggable",defaultPosition:h,positionOffset:D,onMouseDown:b?function(){return c(b)}:void 0},v.createElement(rn,gt({width:it,height:G},st,{active:q,ref:n}),v.createElement(Z,{active:q,icon:Y,title:M,className:"draggable"},v.createElement(Z.OptionsBox,null,v.createElement(Z.Option,null,"?"),v.createElement(Z.Option,{onClick:d},"X"))),$&&$.length>0&&v.createElement(sn,null,$.map(function(x){var U=x.name,Jt=x.list,St=lt===U;return v.createElement(Ft,{key:U,onMouseDown:function(){return H(U)},active:St},U,St&&Jt)})),v.createElement(on,{onClick:function(){return H("")}},u),a&&a.length>0&&v.createElement(an,{buttonsAlignment:i},a.map(function(x){return v.createElement(wt,{key:x.value,onClick:x.onClick,value:x.value},x.value)}))))},xt=v.forwardRef(ln);xt.displayName="Modal";xt.defaultProps={icon:void 0,title:"Modal",buttonsAlignment:"flex-end",children:null,defaultPosition:{x:0,y:0},buttons:[],menu:[],width:void 0,height:void 0,closeModal:function(){}};const un=xt;function V(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function Ht(){var t=V([`
          @media (min-width: `,`) {
            `,`
          }
        `]);return Ht=function(){return t},t}function qt(){var t=V([`
          @media (max-width: `,`) {
            `,`
          }
        `]);return qt=function(){return t},t}function zt(){var t=V([`
    @media (min-width: `,`) and
      (max-width: `,`) {
      `,`
    }
  `]);return zt=function(){return t},t}function Vt(){var t=V([`
    @media (min-width: `,`) {
      `,`
    }
  `]);return Vt=function(){return t},t}function Gt(){var t=V([`
    @media (max-width: `,`) {
      `,`
    }
  `]);return Gt=function(){return t},t}var cn={huge:"1440px",large:"1170px",medium:"768px",small:"450px"};function tt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e[t]?e[t]:parseInt(t)?t:(console.error("styled-media-query: No valid breakpoint or size specified for media."),"0")}function dn(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:cn,e=function(i){return function(){return C(Gt(),tt(i,t),C.apply(void 0,arguments))}},n=function(i){return function(){return C(Vt(),tt(i,t),C.apply(void 0,arguments))}},r=function(i,u){return function(){return C(zt(),tt(i,t),tt(u,t),C.apply(void 0,arguments))}},o=Object.keys(t).reduce(function(a,i){var u=t[i];return a.to[i]=function(){return console.warn("styled-media-query: Use media.lessThan('".concat(i,"') instead of old media.to.").concat(i," (Probably we'll deprecate it)")),C(qt(),u,C.apply(void 0,arguments))},a.from[i]=function(){return console.warn("styled-media-query: Use media.greaterThan('".concat(i,"') instead of old media.from.").concat(i," (Probably we'll deprecate it)")),C(Ht(),u,C.apply(void 0,arguments))},a},{to:{},from:{}});return Object.assign({lessThan:e,greaterThan:n,between:r},o)}var Kt=dn();et.section``;const gn=et(un)`
  display: flex;
  margin: 0 10rem 10rem 10rem;
  width: 80vh;
  ${Kt.lessThan("medium")`
    flex-direction: column;
    margin: 1rem 1rem 0 0.5rem;
    top: 0;
    width: fill-available;
  `}
  ${t=>t.isMobile&&C`
      top: 0;
    `}
`,mn=et(mt)`
  overflow-y: auto;
  max-height: 70vh;
  margin: auto;
  ${Kt.lessThan("large")`
  max-height: 70vh;
  `}
`,vn=et(mt)`
  background: #fff;
  boxshadow: in;
  height: 100%;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;export{wt as B,mn as a,gn as l,vn as t};
