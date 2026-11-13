(()=>{var Wf=Object.defineProperty;var Xf=(i,t)=>{for(var e in t)Wf(i,e,{get:t[e],enumerable:!0})};var qf=0,Ph=1,Yf=2;var ku=1,Zc=2,gi=3,Vi=0,an=1,Fe=2,si=0,Hi=1,Ks=2,Ih=3,Lh=4,Zf=5,us=100,$f=101,Jf=102,Kf=103,Qf=104,jf=200,td=201,ed=202,nd=203,Al=204,Rl=205,id=206,sd=207,rd=208,od=209,ad=210,ld=211,cd=212,hd=213,ud=214,Cl=0,Pl=1,Il=2,Qs=3,Ll=4,Dl=5,Ul=6,Nl=7,$c=0,fd=1,dd=2,ri=0,pd=1,md=2,gd=3,xd=4,_d=5,vd=6,yd=7;var Hu=300,js=301,tr=302,Fl=303,Ol=304,wa=306,Gi=1e3,ps=1001,Bl=1002,An=1003,Md=1004;var yo=1005;var fn=1006,Za=1007;var ms=1008;var Mi=1009,Vu=1010,Gu=1011,Vr=1012,Jc=1013,gs=1014,ii=1015,pn=1016,Kc=1017,Qc=1018,er=1020,Wu=35902,Xu=1021,qu=1022,dn=1023,Yu=1024,Zu=1025,Zs=1026,nr=1027,Qr=1028,jc=1029,$u=1030,th=1031;var eh=1033,qo=33776,Yo=33777,Zo=33778,$o=33779,zl=35840,kl=35841,Hl=35842,Vl=35843,Gl=36196,Wl=37492,Xl=37496,ql=37808,Yl=37809,Zl=37810,$l=37811,Jl=37812,Kl=37813,Ql=37814,jl=37815,tc=37816,ec=37817,nc=37818,ic=37819,sc=37820,rc=37821,Jo=36492,oc=36494,ac=36495,Ju=36283,lc=36284,cc=36285,hc=36286;var Ko=2300,uc=2301,$a=2302,Dh=2400,Uh=2401,Nh=2402;var Sd=3200,nh=3201;var ih=0,bd=1,ni="",$e="srgb",cr="srgb-linear",Ta="linear",we="srgb";var Is=7680;var Fh=519,Ed=512,wd=513,Td=514,Ku=515,Ad=516,Rd=517,Cd=518,Pd=519,Oh=35044;var Bh="300 es",vi=2e3,Qo=2001,Wi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zh=1234567,Or=Math.PI/180,Gr=180/Math.PI;function hr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Ve(i,t,e){return Math.max(t,Math.min(e,i))}function sh(i,t){return(i%t+t)%t}function Id(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ld(i,t,e){return i!==t?(e-i)/(t-i):0}function Br(i,t,e){return(1-e)*i+e*t}function Dd(i,t,e,n){return Br(i,t,1-Math.exp(-e*n))}function Ud(i,t=1){return t-Math.abs(sh(i,t*2)-t)}function Nd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Fd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Od(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Bd(i,t){return i+Math.random()*(t-i)}function zd(i){return i*(.5-Math.random())}function kd(i){i!==void 0&&(zh=i);let t=zh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hd(i){return i*Or}function Vd(i){return i*Gr}function Gd(i){return(i&i-1)===0&&i!==0}function Wd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Xd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qd(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),f=r((t-n)/2),m=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*f,l*m,a*c);break;case"YZY":i.set(l*m,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*m,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var rh={DEG2RAD:Or,RAD2DEG:Gr,generateUUID:hr,clamp:Ve,euclideanModulo:sh,mapLinear:Id,inverseLerp:Ld,lerp:Br,damp:Dd,pingpong:Ud,smoothstep:Nd,smootherstep:Fd,randInt:Od,randFloat:Bd,randFloatSpread:zd,seededRandom:kd,degToRad:Hd,radToDeg:Vd,isPowerOfTwo:Gd,ceilPowerOfTwo:Wd,floorPowerOfTwo:Xd,setQuaternionFromProperEuler:qd,normalize:hn,denormalize:qs},ot=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},te=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],m=n[2],p=n[5],g=n[8],y=s[0],d=s[3],u=s[6],x=s[1],v=s[4],_=s[7],C=s[2],A=s[5],T=s[8];return r[0]=o*y+a*x+l*C,r[3]=o*d+a*v+l*A,r[6]=o*u+a*_+l*T,r[1]=c*y+h*x+f*C,r[4]=c*d+h*v+f*A,r[7]=c*u+h*_+f*T,r[2]=m*y+p*x+g*C,r[5]=m*d+p*v+g*A,r[8]=m*u+p*_+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,m=a*l-h*r,p=c*r-o*l,g=e*f+n*m+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=f*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=m*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=p*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ja.makeScale(t,e)),this}rotate(t){return this.premultiply(Ja.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ja=new te;function Qu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function jo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yd(){let i=jo("canvas");return i.style.display="block",i}var kh={};function Nr(i){i in kh||(kh[i]=!0,console.warn(i))}function Zd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function $d(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Jd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var me={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===we&&(i.r=yi(i.r),i.g=yi(i.g),i.b=yi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===we&&(i.r=$s(i.r),i.g=$s(i.g),i.b=$s(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ni?Ta:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hh=[.64,.33,.3,.6,.15,.06],Vh=[.2126,.7152,.0722],Gh=[.3127,.329],Wh=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);me.define({[cr]:{primaries:Hh,whitePoint:Gh,transfer:Ta,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:Vh,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:Hh,whitePoint:Gh,transfer:we,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:Vh,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}});var Ls,fc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ls===void 0&&(Ls=jo("canvas")),Ls.width=t.width,Ls.height=t.height;let n=Ls.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ls}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=jo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yi(e[n]/255)*255):e[n]=yi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Kd=0,ta=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=hr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ka(s[o].image)):r.push(Ka(s[o]))}else r=Ka(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ka(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Qd=0,xn=class i extends Wi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ps,s=ps,r=fn,o=ms,a=dn,l=Mi,c=i.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=hr(),this.name="",this.source=new ta(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gi:t.x=t.x-Math.floor(t.x);break;case ps:t.x=t.x<0?0:1;break;case Bl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gi:t.y=t.y-Math.floor(t.y);break;case ps:t.y=t.y<0?0:1;break;case Bl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Hu;xn.DEFAULT_ANISOTROPY=1;var Te=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],m=l[1],p=l[5],g=l[9],y=l[2],d=l[6],u=l[10];if(Math.abs(h-m)<.01&&Math.abs(f-y)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+m)<.1&&Math.abs(f+y)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,_=(p+1)/2,C=(u+1)/2,A=(h+m)/4,T=(f+y)/4,b=(g+d)/4;return v>_&&v>C?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=A/n,r=T/n):_>C?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=A/s,r=b/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=T/r,s=b/r),this.set(n,s,r,e),this}let x=Math.sqrt((d-g)*(d-g)+(f-y)*(f-y)+(m-h)*(m-h));return Math.abs(x)<.001&&(x=1),this.x=(d-g)/x,this.y=(f-y)/x,this.z=(m-h)/x,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dc=class extends Wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new xn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ta(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends dc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ea=class extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pc=class extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Je=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],m=r[o+0],p=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=m,t[e+1]=p,t[e+2]=g,t[e+3]=y;return}if(f!==y||l!==m||c!==p||h!==g){let d=1-a,u=l*m+c*p+h*g+f*y,x=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){let C=Math.sqrt(v),A=Math.atan2(C,u*x);d=Math.sin(d*A)/C,a=Math.sin(a*A)/C}let _=a*x;if(l=l*d+m*_,c=c*d+p*_,h=h*d+g*_,f=f*d+y*_,d===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=C,c*=C,h*=C,f*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],m=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*f+l*p-c*m,t[e+1]=l*g+h*m+c*f-a*p,t[e+2]=c*g+h*p+a*m-l*f,t[e+3]=h*g-a*f-l*m-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),m=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=m*h*f+c*p*g,this._y=c*p*f-m*h*g,this._z=c*h*g+m*p*f,this._w=c*h*f-m*p*g;break;case"YXZ":this._x=m*h*f+c*p*g,this._y=c*p*f-m*h*g,this._z=c*h*g-m*p*f,this._w=c*h*f+m*p*g;break;case"ZXY":this._x=m*h*f-c*p*g,this._y=c*p*f+m*h*g,this._z=c*h*g+m*p*f,this._w=c*h*f-m*p*g;break;case"ZYX":this._x=m*h*f-c*p*g,this._y=c*p*f+m*h*g,this._z=c*h*g-m*p*f,this._w=c*h*f+m*p*g;break;case"YZX":this._x=m*h*f+c*p*g,this._y=c*p*f+m*h*g,this._z=c*h*g-m*p*f,this._w=c*h*f-m*p*g;break;case"XZY":this._x=m*h*f-c*p*g,this._y=c*p*f-m*h*g,this._z=c*h*g+m*p*f,this._w=c*h*f+m*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],m=n+a+f;if(m>0){let p=.5/Math.sqrt(m+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>f){let p=2*Math.sqrt(1+n-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){let p=2*Math.sqrt(1+a-n-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,m=Math.sin(e*h)/c;return this._w=o*f+this._w*m,this._x=n*f+this._x*m,this._y=s*f+this._y*m,this._z=r*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qa.copy(this).projectOnVector(t),this.sub(Qa)}reflect(t){return this.sub(Qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qa=new U,qh=new Je,Si=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mo.copy(n.boundingBox)),Mo.applyMatrix4(t.matrixWorld),this.union(Mo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rr),So.subVectors(this.max,Rr),Ds.subVectors(t.a,Rr),Us.subVectors(t.b,Rr),Ns.subVectors(t.c,Rr),Ni.subVectors(Us,Ds),Fi.subVectors(Ns,Us),ss.subVectors(Ds,Ns);let e=[0,-Ni.z,Ni.y,0,-Fi.z,Fi.y,0,-ss.z,ss.y,Ni.z,0,-Ni.x,Fi.z,0,-Fi.x,ss.z,0,-ss.x,-Ni.y,Ni.x,0,-Fi.y,Fi.x,0,-ss.y,ss.x,0];return!ja(e,Ds,Us,Ns,So)||(e=[1,0,0,0,1,0,0,0,1],!ja(e,Ds,Us,Ns,So))?!1:(bo.crossVectors(Ni,Fi),e=[bo.x,bo.y,bo.z],ja(e,Ds,Us,Ns,So))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ui=[new U,new U,new U,new U,new U,new U,new U,new U],Vn=new U,Mo=new Si,Ds=new U,Us=new U,Ns=new U,Ni=new U,Fi=new U,ss=new U,Rr=new U,So=new U,bo=new U,rs=new U;function ja(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){rs.fromArray(i,r);let a=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=t.dot(rs),c=e.dot(rs),h=n.dot(rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var jd=new Si,Cr=new U,tl=new U,Xi=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):jd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cr.subVectors(t,this.center);let e=Cr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Cr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cr.copy(t.center).add(tl)),this.expandByPoint(Cr.copy(t.center).sub(tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},fi=new U,el=new U,Eo=new U,Oi=new U,nl=new U,wo=new U,il=new U,na=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){el.copy(t).add(e).multiplyScalar(.5),Eo.copy(e).sub(t).normalize(),Oi.copy(this.origin).sub(el);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Eo),a=Oi.dot(this.direction),l=-Oi.dot(Eo),c=Oi.lengthSq(),h=Math.abs(1-o*o),f,m,p,g;if(h>0)if(f=o*l-a,m=o*a-l,g=r*h,f>=0)if(m>=-g)if(m<=g){let y=1/h;f*=y,m*=y,p=f*(f+o*m+2*a)+m*(o*f+m+2*l)+c}else m=r,f=Math.max(0,-(o*m+a)),p=-f*f+m*(m+2*l)+c;else m=-r,f=Math.max(0,-(o*m+a)),p=-f*f+m*(m+2*l)+c;else m<=-g?(f=Math.max(0,-(-o*r+a)),m=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+m*(m+2*l)+c):m<=g?(f=0,m=Math.min(Math.max(-r,-l),r),p=m*(m+2*l)+c):(f=Math.max(0,-(o*r+a)),m=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+m*(m+2*l)+c);else m=o>0?-r:r,f=Math.max(0,-(o*m+a)),p=-f*f+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(el).addScaledVector(Eo,m),p}intersectSphere(t,e){fi.subVectors(t.center,this.origin);let n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,m=this.origin;return c>=0?(n=(t.min.x-m.x)*c,s=(t.max.x-m.x)*c):(n=(t.max.x-m.x)*c,s=(t.min.x-m.x)*c),h>=0?(r=(t.min.y-m.y)*h,o=(t.max.y-m.y)*h):(r=(t.max.y-m.y)*h,o=(t.min.y-m.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-m.z)*f,l=(t.max.z-m.z)*f):(a=(t.max.z-m.z)*f,l=(t.min.z-m.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,e,n,s,r){nl.subVectors(e,t),wo.subVectors(n,t),il.crossVectors(nl,wo);let o=this.direction.dot(il),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,t);let l=a*this.direction.dot(wo.crossVectors(Oi,wo));if(l<0)return null;let c=a*this.direction.dot(nl.cross(Oi));if(c<0||l+c>o)return null;let h=-a*Oi.dot(il);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class i{constructor(t,e,n,s,r,o,a,l,c,h,f,m,p,g,y,d){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,f,m,p,g,y,d)}set(t,e,n,s,r,o,a,l,c,h,f,m,p,g,y,d){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=m,u[3]=p,u[7]=g,u[11]=y,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Fs.setFromMatrixColumn(t,0).length(),r=1/Fs.setFromMatrixColumn(t,1).length(),o=1/Fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let m=o*h,p=o*f,g=a*h,y=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=m-y*c,e[9]=-a*l,e[2]=y-m*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let m=l*h,p=l*f,g=c*h,y=c*f;e[0]=m+y*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=y+m*a,e[10]=o*l}else if(t.order==="ZXY"){let m=l*h,p=l*f,g=c*h,y=c*f;e[0]=m-y*a,e[4]=-o*f,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=y-m*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let m=o*h,p=o*f,g=a*h,y=a*f;e[0]=l*h,e[4]=g*c-p,e[8]=m*c+y,e[1]=l*f,e[5]=y*c+m,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let m=o*l,p=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-m*f,e[8]=g*f+p,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*f+g,e[10]=m-y*f}else if(t.order==="XZY"){let m=o*l,p=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=m*f+y,e[5]=o*h,e[9]=p*f-g,e[2]=g*f-p,e[6]=a*h,e[10]=y*f+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tp,t,ep)}lookAt(t,e,n){let s=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),Bi.crossVectors(n,En),Bi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Bi.crossVectors(n,En)),Bi.normalize(),To.crossVectors(En,Bi),s[0]=Bi.x,s[4]=To.x,s[8]=En.x,s[1]=Bi.y,s[5]=To.y,s[9]=En.y,s[2]=Bi.z,s[6]=To.z,s[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],m=n[9],p=n[13],g=n[2],y=n[6],d=n[10],u=n[14],x=n[3],v=n[7],_=n[11],C=n[15],A=s[0],T=s[4],b=s[8],M=s[12],S=s[1],I=s[5],F=s[9],R=s[13],V=s[2],G=s[6],W=s[10],Y=s[14],H=s[3],it=s[7],ct=s[11],vt=s[15];return r[0]=o*A+a*S+l*V+c*H,r[4]=o*T+a*I+l*G+c*it,r[8]=o*b+a*F+l*W+c*ct,r[12]=o*M+a*R+l*Y+c*vt,r[1]=h*A+f*S+m*V+p*H,r[5]=h*T+f*I+m*G+p*it,r[9]=h*b+f*F+m*W+p*ct,r[13]=h*M+f*R+m*Y+p*vt,r[2]=g*A+y*S+d*V+u*H,r[6]=g*T+y*I+d*G+u*it,r[10]=g*b+y*F+d*W+u*ct,r[14]=g*M+y*R+d*Y+u*vt,r[3]=x*A+v*S+_*V+C*H,r[7]=x*T+v*I+_*G+C*it,r[11]=x*b+v*F+_*W+C*ct,r[15]=x*M+v*R+_*Y+C*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],m=t[10],p=t[14],g=t[3],y=t[7],d=t[11],u=t[15];return g*(+r*l*f-s*c*f-r*a*m+n*c*m+s*a*p-n*l*p)+y*(+e*l*p-e*c*m+r*o*m-s*o*p+s*c*h-r*l*h)+d*(+e*c*f-e*a*p-r*o*f+n*o*p+r*a*h-n*c*h)+u*(-s*a*h-e*l*f+e*a*m+s*o*f-n*o*m+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],m=t[10],p=t[11],g=t[12],y=t[13],d=t[14],u=t[15],x=f*d*c-y*m*c+y*l*p-a*d*p-f*l*u+a*m*u,v=g*m*c-h*d*c-g*l*p+o*d*p+h*l*u-o*m*u,_=h*y*c-g*f*c+g*a*p-o*y*p-h*a*u+o*f*u,C=g*f*l-h*y*l-g*a*m+o*y*m+h*a*d-o*f*d,A=e*x+n*v+s*_+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return t[0]=x*T,t[1]=(y*m*r-f*d*r-y*s*p+n*d*p+f*s*u-n*m*u)*T,t[2]=(a*d*r-y*l*r+y*s*c-n*d*c-a*s*u+n*l*u)*T,t[3]=(f*l*r-a*m*r-f*s*c+n*m*c+a*s*p-n*l*p)*T,t[4]=v*T,t[5]=(h*d*r-g*m*r+g*s*p-e*d*p-h*s*u+e*m*u)*T,t[6]=(g*l*r-o*d*r-g*s*c+e*d*c+o*s*u-e*l*u)*T,t[7]=(o*m*r-h*l*r+h*s*c-e*m*c-o*s*p+e*l*p)*T,t[8]=_*T,t[9]=(g*f*r-h*y*r-g*n*p+e*y*p+h*n*u-e*f*u)*T,t[10]=(o*y*r-g*a*r+g*n*c-e*y*c-o*n*u+e*a*u)*T,t[11]=(h*a*r-o*f*r-h*n*c+e*f*c+o*n*p-e*a*p)*T,t[12]=C*T,t[13]=(h*y*s-g*f*s+g*n*m-e*y*m-h*n*d+e*f*d)*T,t[14]=(g*a*s-o*y*s-g*n*l+e*y*l+o*n*d-e*a*d)*T,t[15]=(o*f*s-h*a*s+h*n*l-e*f*l-o*n*m+e*a*m)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,m=r*c,p=r*h,g=r*f,y=o*h,d=o*f,u=a*f,x=l*c,v=l*h,_=l*f,C=n.x,A=n.y,T=n.z;return s[0]=(1-(y+u))*C,s[1]=(p+_)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(p-_)*A,s[5]=(1-(m+u))*A,s[6]=(d+x)*A,s[7]=0,s[8]=(g+v)*T,s[9]=(d-x)*T,s[10]=(1-(m+y))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Fs.set(s[0],s[1],s[2]).length(),o=Fs.set(s[4],s[5],s[6]).length(),a=Fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Gn.copy(this);let c=1/r,h=1/o,f=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=f,Gn.elements[9]*=f,Gn.elements[10]*=f,e.setFromRotationMatrix(Gn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=vi){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),m=(n+s)/(n-s),p,g;if(a===vi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Qo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=vi){let l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(o-r),m=(e+t)*c,p=(n+s)*h,g,y;if(a===vi)g=(o+r)*f,y=-2*f;else if(a===Qo)g=r*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Fs=new U,Gn=new se,tp=new U(0,0,0),ep=new U(1,1,1),Bi=new U,To=new U,En=new U,Yh=new se,Zh=new Je,Ge=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],m=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ge.DEFAULT_ORDER="XYZ";var ia=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},np=0,$h=new U,Os=new Je,di=new se,Ao=new U,Pr=new U,ip=new U,sp=new Je,Jh=new U(1,0,0),Kh=new U(0,1,0),Qh=new U(0,0,1),jh={type:"added"},rp={type:"removed"},Bs={type:"childadded",child:null},sl={type:"childremoved",child:null},ln=class i extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new Ge,n=new Je,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new te}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.multiply(Os),this}rotateOnWorldAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.premultiply(Os),this}rotateX(t){return this.rotateOnAxis(Jh,t)}rotateY(t){return this.rotateOnAxis(Kh,t)}rotateZ(t){return this.rotateOnAxis(Qh,t)}translateOnAxis(t,e){return $h.copy(t).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jh,t)}translateY(t){return this.translateOnAxis(Kh,t)}translateZ(t){return this.translateOnAxis(Qh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ao.copy(t):Ao.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Pr,Ao,this.up):di.lookAt(Ao,Pr,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(di),this.quaternion.premultiply(Os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jh),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rp),sl.child=t,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jh),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,t,ip),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,sp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),m=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),m.length>0&&(n.skeletons=m),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ln.DEFAULT_UP=new U(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=new U,pi=new U,rl=new U,mi=new U,zs=new U,ks=new U,tu=new U,ol=new U,al=new U,ll=new U,cl=new Te,hl=new Te,ul=new Te,fs=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Wn.subVectors(t,e),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Wn.subVectors(s,e),pi.subVectors(n,e),rl.subVectors(t,e);let o=Wn.dot(Wn),a=Wn.dot(pi),l=Wn.dot(rl),c=pi.dot(pi),h=pi.dot(rl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let m=1/f,p=(c*l-a*h)*m,g=(o*h-a*l)*m;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return cl.setScalar(0),hl.setScalar(0),ul.setScalar(0),cl.fromBufferAttribute(t,e),hl.fromBufferAttribute(t,n),ul.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(cl,r.x),o.addScaledVector(hl,r.y),o.addScaledVector(ul,r.z),o}static isFrontFacing(t,e,n,s){return Wn.subVectors(n,e),pi.subVectors(t,e),Wn.cross(pi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Wn.cross(pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;zs.subVectors(s,n),ks.subVectors(r,n),ol.subVectors(t,n);let l=zs.dot(ol),c=ks.dot(ol);if(l<=0&&c<=0)return e.copy(n);al.subVectors(t,s);let h=zs.dot(al),f=ks.dot(al);if(h>=0&&f<=h)return e.copy(s);let m=l*f-h*c;if(m<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(zs,o);ll.subVectors(t,r);let p=zs.dot(ll),g=ks.dot(ll);if(g>=0&&p<=g)return e.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ks,a);let d=h*g-p*f;if(d<=0&&f-h>=0&&p-g>=0)return tu.subVectors(r,s),a=(f-h)/(f-h+(p-g)),e.copy(s).addScaledVector(tu,a);let u=1/(d+y+m);return o=y*u,a=m*u,e.copy(n).addScaledVector(zs,o).addScaledVector(ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function fl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=sh(t,1),e=Ve(e,0,1),n=Ve(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fl(o,r,t+1/3),this.g=fl(o,r,t),this.b=fl(o,r,t-1/3)}return me.toWorkingColorSpace(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let n=ju[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return me.fromWorkingColorSpace(rn.copy(this),t),Math.round(Ve(rn.r*255,0,255))*65536+Math.round(Ve(rn.g*255,0,255))*256+Math.round(Ve(rn.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(rn.copy(this),e);let n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=$e){me.fromWorkingColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,s=rn.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zi),this.setHSL(zi.h+t,zi.s+e,zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zi),t.getHSL(Ro);let n=Br(zi.h,Ro.h,e),s=Br(zi.s,Ro.s,e),r=Br(zi.l,Ro.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Tt;Tt.NAMES=ju;var op=0,bi=class extends Wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=hr(),this.name="",this.blending=Hi,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=Rl,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==Vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Al&&(n.blendSrc=this.blendSrc),this.blendDst!==Rl&&(n.blendDst=this.blendDst),this.blendEquation!==us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},qi=class extends bi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},_i=ap();function ap(){let i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function lp(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Ve(i,-65504,65504),_i.floatView[0]=i;let t=_i.uint32View[0],e=t>>23&511;return _i.baseTable[e]+((t&8388607)>>_i.shiftTable[e])}function cp(i){let t=i>>10;return _i.uint32View[0]=_i.mantissaTable[_i.offsetTable[t]+(i&1023)]+_i.exponentTable[t],_i.floatView[0]}var tf={toHalfFloat:lp,fromHalfFloat:cp},He=new U,Co=new ot,de=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oh,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Co.fromBufferAttribute(this,e),Co.applyMatrix3(t),this.setXY(e,Co.x,Co.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=hn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),s=hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),s=hn(s,this.array),r=hn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oh&&(t.usage=this.usage),t}};var sa=class extends de{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ra=class extends de{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ht=class extends de{constructor(t,e,n){super(new Float32Array(t),e,n)}},hp=0,Un=new se,dl=new ln,Hs=new U,wn=new Si,Ir=new Si,Ze=new U,_e=class i extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qu(t)?ra:sa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Un.makeRotationFromQuaternion(t),this.applyMatrix4(Un),this}rotateX(t){return Un.makeRotationX(t),this.applyMatrix4(Un),this}rotateY(t){return Un.makeRotationY(t),this.applyMatrix4(Un),this}rotateZ(t){return Un.makeRotationZ(t),this.applyMatrix4(Un),this}translate(t,e,n){return Un.makeTranslation(t,e,n),this.applyMatrix4(Un),this}scale(t,e,n){return Un.makeScale(t,e,n),this.applyMatrix4(Un),this}lookAt(t){return dl.lookAt(t),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ht(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(wn.min,Ir.min),wn.expandByPoint(Ze),Ze.addVectors(wn.max,Ir.max),wn.expandByPoint(Ze)):(wn.expandByPoint(Ir.min),wn.expandByPoint(Ir.max))}wn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ze.fromBufferAttribute(a,c),l&&(Hs.fromBufferAttribute(t,c),Ze.add(Hs)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new de(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new U,l[b]=new U;let c=new U,h=new U,f=new U,m=new ot,p=new ot,g=new ot,y=new U,d=new U;function u(b,M,S){c.fromBufferAttribute(n,b),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,S),m.fromBufferAttribute(r,b),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),h.sub(c),f.sub(c),p.sub(m),g.sub(m);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(I),d.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),a[b].add(y),a[M].add(y),a[S].add(y),l[b].add(d),l[M].add(d),l[S].add(d))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let b=0,M=x.length;b<M;++b){let S=x[b],I=S.start,F=S.count;for(let R=I,V=I+F;R<V;R+=3)u(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let v=new U,_=new U,C=new U,A=new U;function T(b){C.fromBufferAttribute(s,b),A.copy(C);let M=a[b];v.copy(M),v.sub(C.multiplyScalar(C.dot(M))).normalize(),_.crossVectors(A,M);let I=_.dot(l[b])<0?-1:1;o.setXYZW(b,v.x,v.y,v.z,I)}for(let b=0,M=x.length;b<M;++b){let S=x[b],I=S.start,F=S.count;for(let R=I,V=I+F;R<V;R+=3)T(t.getX(R+0)),T(t.getX(R+1)),T(t.getX(R+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new de(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,p=n.count;m<p;m++)n.setXYZ(m,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,f=new U;if(t)for(let m=0,p=t.count;m<p;m+=3){let g=t.getX(m+0),y=t.getX(m+1),d=t.getX(m+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,d),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,d),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let m=0,p=e.count;m<p;m+=3)s.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,m=new c.constructor(l.length*h),p=0,g=0;for(let y=0,d=l.length;y<d;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let u=0;u<h;u++)m[g++]=c[p++]}return new de(m,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let m=c[h],p=t(m,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,m=c.length;f<m;f++){let p=c[f];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let m=0,p=f.length;m<p;m++)h.push(f[m].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},eu=new se,os=new na,Po=new Xi,nu=new U,Io=new U,Lo=new U,Do=new U,pl=new U,Uo=new U,iu=new U,No=new U,Me=class extends ln{constructor(t=new _e,e=new qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(pl.fromBufferAttribute(f,t),o?Uo.addScaledVector(pl,h):Uo.addScaledVector(pl.sub(e),h))}e.add(Uo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(r),os.copy(t.ray).recast(t.near),!(Po.containsPoint(os.origin)===!1&&(os.intersectSphere(Po,nu)===null||os.origin.distanceToSquared(nu)>(t.far-t.near)**2))&&(eu.copy(r).invert(),os.copy(t.ray).applyMatrix4(eu),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,os)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,m=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=m.length;g<y;g++){let d=m[g],u=o[d.materialIndex],x=Math.max(d.start,p.start),v=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let _=x,C=v;_<C;_+=3){let A=a.getX(_),T=a.getX(_+1),b=a.getX(_+2);s=Fo(this,u,t,n,c,h,f,A,T,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let d=g,u=y;d<u;d+=3){let x=a.getX(d),v=a.getX(d+1),_=a.getX(d+2);s=Fo(this,o,t,n,c,h,f,x,v,_),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=m.length;g<y;g++){let d=m[g],u=o[d.materialIndex],x=Math.max(d.start,p.start),v=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let _=x,C=v;_<C;_+=3){let A=_,T=_+1,b=_+2;s=Fo(this,u,t,n,c,h,f,A,T,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let d=g,u=y;d<u;d+=3){let x=d,v=d+1,_=d+2;s=Fo(this,o,t,n,c,h,f,x,v,_),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function up(i,t,e,n,s,r,o,a){let l;if(t.side===an?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Vi,a),l===null)return null;No.copy(a),No.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(No);return c<e.near||c>e.far?null:{distance:c,point:No.clone(),object:i}}function Fo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Io),i.getVertexPosition(l,Lo),i.getVertexPosition(c,Do);let h=up(i,t,e,n,Io,Lo,Do,iu);if(h){let f=new U;fs.getBarycoord(iu,Io,Lo,Do,f),s&&(h.uv=fs.getInterpolatedAttribute(s,a,l,c,f,new ot)),r&&(h.uv1=fs.getInterpolatedAttribute(r,a,l,c,f,new ot)),o&&(h.normal=fs.getInterpolatedAttribute(o,a,l,c,f,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let m={a,b:l,c,normal:new U,materialIndex:0};fs.getNormal(Io,Lo,Do,m.normal),h.face=m,h.barycoord=f}return h}var Ei=class i extends _e{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],m=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(f,2));function g(y,d,u,x,v,_,C,A,T,b,M){let S=_/T,I=C/b,F=_/2,R=C/2,V=A/2,G=T+1,W=b+1,Y=0,H=0,it=new U;for(let ct=0;ct<W;ct++){let vt=ct*I-R;for(let Zt=0;Zt<G;Zt++){let xe=Zt*S-F;it[y]=xe*x,it[d]=vt*v,it[u]=V,c.push(it.x,it.y,it.z),it[y]=0,it[d]=0,it[u]=A>0?1:-1,h.push(it.x,it.y,it.z),f.push(Zt/T),f.push(1-ct/b),Y+=1}}for(let ct=0;ct<b;ct++)for(let vt=0;vt<T;vt++){let Zt=m+vt+G*ct,xe=m+vt+G*(ct+1),K=m+(vt+1)+G*(ct+1),ht=m+(vt+1)+G*ct;l.push(Zt,xe,ht),l.push(xe,K,ht),H+=6}a.addGroup(p,H,M),p+=H,m+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ir(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function un(i){let t={};for(let e=0;e<i.length;e++){let n=ir(i[e]);for(let s in n)t[s]=n[s]}return t}function fp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ef(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var oi={clone:ir,merge:un},dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ne=class extends bi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dp,this.fragmentShader=pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ir(t.uniforms),this.uniformsGroups=fp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},oa=class extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ki=new U,su=new ot,ru=new ot,on=class extends oa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,su,ru),e.subVectors(ru,su)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Or*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Vs=-90,Gs=1,mc=class extends ln{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(Vs,Gs,t,e);s.layers=this.layers,this.add(s);let r=new on(Vs,Gs,t,e);r.layers=this.layers,this.add(r);let o=new on(Vs,Gs,t,e);o.layers=this.layers,this.add(o);let a=new on(Vs,Gs,t,e);a.layers=this.layers,this.add(a);let l=new on(Vs,Gs,t,e);l.layers=this.layers,this.add(l);let c=new on(Vs,Gs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===vi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),m=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,m,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},aa=class extends xn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:js,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},gc=class extends en{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new aa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ei(5,5,5),r=new Ne({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:si});r.uniforms.tEquirect.value=e;let o=new Me(s,r),a=e.minFilter;return e.minFilter===ms&&(e.minFilter=fn),new mc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ml=new U,mp=new U,gp=new te,xi=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ml.subVectors(n,e).cross(mp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ml),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||gp.getNormalMatrix(t),s=this.coplanarPoint(ml).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},as=new Xi,Oo=new U,Wr=class{constructor(t=new xi,e=new xi,n=new xi,s=new xi,r=new xi,o=new xi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vi){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],m=s[7],p=s[8],g=s[9],y=s[10],d=s[11],u=s[12],x=s[13],v=s[14],_=s[15];if(n[0].setComponents(l-r,m-c,d-p,_-u).normalize(),n[1].setComponents(l+r,m+c,d+p,_+u).normalize(),n[2].setComponents(l+o,m+h,d+g,_+x).normalize(),n[3].setComponents(l-o,m-h,d-g,_-x).normalize(),n[4].setComponents(l-a,m-f,d-y,_-v).normalize(),e===vi)n[5].setComponents(l+a,m+f,d+y,_+v).normalize();else if(e===Qo)n[5].setComponents(a,f,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Oo.x=s.normal.x>0?t.max.x:t.min.x,Oo.y=s.normal.y>0?t.max.y:t.min.y,Oo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let m=0;for(let p=1;p<f.length;p++){let g=f[m],y=f[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++m,f[m]=y)}f.length=m+1;for(let p=0,g=f.length;p<g;p++){let y=f[p];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var qn=class i extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,m=e/l,p=[],g=[],y=[],d=[];for(let u=0;u<h;u++){let x=u*m-o;for(let v=0;v<c;v++){let _=v*f-r;g.push(_,-x,0),y.push(0,0,1),d.push(v/a),d.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<a;x++){let v=x+c*u,_=x+c*(u+1),C=x+1+c*(u+1),A=x+1+c*u;p.push(v,_,A),p.push(_,C,A)}this.setIndex(p),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(y,3)),this.setAttribute("uv",new Ht(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},_p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ep=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ip=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",$p=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_m=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ym=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Am=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,km=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,e0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,n0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,i0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,r0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,a0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,u0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,f0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,g0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,x0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,E0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,w0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,T0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,L0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,F0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,B0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,z0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,V0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,q0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:_p,alphahash_pars_fragment:vp,alphamap_fragment:yp,alphamap_pars_fragment:Mp,alphatest_fragment:Sp,alphatest_pars_fragment:bp,aomap_fragment:Ep,aomap_pars_fragment:wp,batching_pars_vertex:Tp,batching_vertex:Ap,begin_vertex:Rp,beginnormal_vertex:Cp,bsdfs:Pp,iridescence_fragment:Ip,bumpmap_pars_fragment:Lp,clipping_planes_fragment:Dp,clipping_planes_pars_fragment:Up,clipping_planes_pars_vertex:Np,clipping_planes_vertex:Fp,color_fragment:Op,color_pars_fragment:Bp,color_pars_vertex:zp,color_vertex:kp,common:Hp,cube_uv_reflection_fragment:Vp,defaultnormal_vertex:Gp,displacementmap_pars_vertex:Wp,displacementmap_vertex:Xp,emissivemap_fragment:qp,emissivemap_pars_fragment:Yp,colorspace_fragment:Zp,colorspace_pars_fragment:$p,envmap_fragment:Jp,envmap_common_pars_fragment:Kp,envmap_pars_fragment:Qp,envmap_pars_vertex:jp,envmap_physical_pars_fragment:hm,envmap_vertex:tm,fog_vertex:em,fog_pars_vertex:nm,fog_fragment:im,fog_pars_fragment:sm,gradientmap_pars_fragment:rm,lightmap_pars_fragment:om,lights_lambert_fragment:am,lights_lambert_pars_fragment:lm,lights_pars_begin:cm,lights_toon_fragment:um,lights_toon_pars_fragment:fm,lights_phong_fragment:dm,lights_phong_pars_fragment:pm,lights_physical_fragment:mm,lights_physical_pars_fragment:gm,lights_fragment_begin:xm,lights_fragment_maps:_m,lights_fragment_end:vm,logdepthbuf_fragment:ym,logdepthbuf_pars_fragment:Mm,logdepthbuf_pars_vertex:Sm,logdepthbuf_vertex:bm,map_fragment:Em,map_pars_fragment:wm,map_particle_fragment:Tm,map_particle_pars_fragment:Am,metalnessmap_fragment:Rm,metalnessmap_pars_fragment:Cm,morphinstance_vertex:Pm,morphcolor_vertex:Im,morphnormal_vertex:Lm,morphtarget_pars_vertex:Dm,morphtarget_vertex:Um,normal_fragment_begin:Nm,normal_fragment_maps:Fm,normal_pars_fragment:Om,normal_pars_vertex:Bm,normal_vertex:zm,normalmap_pars_fragment:km,clearcoat_normal_fragment_begin:Hm,clearcoat_normal_fragment_maps:Vm,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:Wm,opaque_fragment:Xm,packing:qm,premultiplied_alpha_fragment:Ym,project_vertex:Zm,dithering_fragment:$m,dithering_pars_fragment:Jm,roughnessmap_fragment:Km,roughnessmap_pars_fragment:Qm,shadowmap_pars_fragment:jm,shadowmap_pars_vertex:t0,shadowmap_vertex:e0,shadowmask_pars_fragment:n0,skinbase_vertex:i0,skinning_pars_vertex:s0,skinning_vertex:r0,skinnormal_vertex:o0,specularmap_fragment:a0,specularmap_pars_fragment:l0,tonemapping_fragment:c0,tonemapping_pars_fragment:h0,transmission_fragment:u0,transmission_pars_fragment:f0,uv_pars_fragment:d0,uv_pars_vertex:p0,uv_vertex:m0,worldpos_vertex:g0,background_vert:x0,background_frag:_0,backgroundCube_vert:v0,backgroundCube_frag:y0,cube_vert:M0,cube_frag:S0,depth_vert:b0,depth_frag:E0,distanceRGBA_vert:w0,distanceRGBA_frag:T0,equirect_vert:A0,equirect_frag:R0,linedashed_vert:C0,linedashed_frag:P0,meshbasic_vert:I0,meshbasic_frag:L0,meshlambert_vert:D0,meshlambert_frag:U0,meshmatcap_vert:N0,meshmatcap_frag:F0,meshnormal_vert:O0,meshnormal_frag:B0,meshphong_vert:z0,meshphong_frag:k0,meshphysical_vert:H0,meshphysical_frag:V0,meshtoon_vert:G0,meshtoon_frag:W0,points_vert:X0,points_frag:q0,shadow_vert:Y0,shadow_frag:Z0,sprite_vert:$0,sprite_frag:J0},dt={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Tn={basic:{uniforms:un([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:un([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:un([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:un([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:un([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:un([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:un([dt.points,dt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:un([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:un([dt.common,dt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:un([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:un([dt.sprite,dt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:un([dt.common,dt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:un([dt.lights,dt.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Tn.physical={uniforms:un([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var Bo={r:0,b:0,g:0},ls=new Ge,K0=new se;function Q0(i,t,e,n,s,r,o){let a=new Tt(0),l=r===!0?0:1,c,h,f=null,m=0,p=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function y(x){let v=!1,_=g(x);_===null?u(a,l):_&&_.isColor&&(u(_,1),v=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(x,v){let _=g(v);_&&(_.isCubeTexture||_.mapping===wa)?(h===void 0&&(h=new Me(new Ei(1,1,1),new Ne({name:"BackgroundCubeMaterial",uniforms:ir(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ls.copy(v.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(K0.makeRotationFromEuler(ls)),h.material.toneMapped=me.getTransfer(_.colorSpace)!==we,(f!==_||m!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=_,m=_.version,p=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Me(new qn(2,2),new Ne({name:"BackgroundMaterial",uniforms:ir(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=me.getTransfer(_.colorSpace)!==we,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||m!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=_,m=_.version,p=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,v){x.getRGB(Bo,ef(i)),n.buffers.color.setClear(Bo.r,Bo.g,Bo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(a,l)},render:y,addToRenderList:d}}function j0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,o=!1;function a(S,I,F,R,V){let G=!1,W=f(R,F,I);r!==W&&(r=W,c(r.object)),G=p(S,R,F,V),G&&g(S,R,F,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,_(S,I,F,R),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function f(S,I,F){let R=F.wireframe===!0,V=n[S.id];V===void 0&&(V={},n[S.id]=V);let G=V[I.id];G===void 0&&(G={},V[I.id]=G);let W=G[R];return W===void 0&&(W=m(l()),G[R]=W),W}function m(S){let I=[],F=[],R=[];for(let V=0;V<e;V++)I[V]=0,F[V]=0,R[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:R,object:S,attributes:{},index:null}}function p(S,I,F,R){let V=r.attributes,G=I.attributes,W=0,Y=F.getAttributes();for(let H in Y)if(Y[H].location>=0){let ct=V[H],vt=G[H];if(vt===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor)),ct===void 0||ct.attribute!==vt||vt&&ct.data!==vt.data)return!0;W++}return r.attributesNum!==W||r.index!==R}function g(S,I,F,R){let V={},G=I.attributes,W=0,Y=F.getAttributes();for(let H in Y)if(Y[H].location>=0){let ct=G[H];ct===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor));let vt={};vt.attribute=ct,ct&&ct.data&&(vt.data=ct.data),V[H]=vt,W++}r.attributes=V,r.attributesNum=W,r.index=R}function y(){let S=r.newAttributes;for(let I=0,F=S.length;I<F;I++)S[I]=0}function d(S){u(S,0)}function u(S,I){let F=r.newAttributes,R=r.enabledAttributes,V=r.attributeDivisors;F[S]=1,R[S]===0&&(i.enableVertexAttribArray(S),R[S]=1),V[S]!==I&&(i.vertexAttribDivisor(S,I),V[S]=I)}function x(){let S=r.newAttributes,I=r.enabledAttributes;for(let F=0,R=I.length;F<R;F++)I[F]!==S[F]&&(i.disableVertexAttribArray(F),I[F]=0)}function v(S,I,F,R,V,G,W){W===!0?i.vertexAttribIPointer(S,I,F,V,G):i.vertexAttribPointer(S,I,F,R,V,G)}function _(S,I,F,R){y();let V=R.attributes,G=F.getAttributes(),W=I.defaultAttributeValues;for(let Y in G){let H=G[Y];if(H.location>=0){let it=V[Y];if(it===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(it=S.instanceColor)),it!==void 0){let ct=it.normalized,vt=it.itemSize,Zt=t.get(it);if(Zt===void 0)continue;let xe=Zt.buffer,K=Zt.type,ht=Zt.bytesPerElement,Ct=K===i.INT||K===i.UNSIGNED_INT||it.gpuType===Jc;if(it.isInterleavedBufferAttribute){let pt=it.data,zt=pt.stride,Jt=it.offset;if(pt.isInstancedInterleavedBuffer){for(let $t=0;$t<H.locationSize;$t++)u(H.location+$t,pt.meshPerAttribute);S.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let $t=0;$t<H.locationSize;$t++)d(H.location+$t);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let $t=0;$t<H.locationSize;$t++)v(H.location+$t,vt/H.locationSize,K,ct,zt*ht,(Jt+vt/H.locationSize*$t)*ht,Ct)}else{if(it.isInstancedBufferAttribute){for(let pt=0;pt<H.locationSize;pt++)u(H.location+pt,it.meshPerAttribute);S.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let pt=0;pt<H.locationSize;pt++)d(H.location+pt);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let pt=0;pt<H.locationSize;pt++)v(H.location+pt,vt/H.locationSize,K,ct,vt*ht,vt/H.locationSize*pt*ht,Ct)}}else if(W!==void 0){let ct=W[Y];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(H.location,ct);break;case 3:i.vertexAttrib3fv(H.location,ct);break;case 4:i.vertexAttrib4fv(H.location,ct);break;default:i.vertexAttrib1fv(H.location,ct)}}}}x()}function C(){b();for(let S in n){let I=n[S];for(let F in I){let R=I[F];for(let V in R)h(R[V].object),delete R[V];delete I[F]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;let I=n[S.id];for(let F in I){let R=I[F];for(let V in R)h(R[V].object),delete R[V];delete I[F]}delete n[S.id]}function T(S){for(let I in n){let F=n[I];if(F[S.id]===void 0)continue;let R=F[S.id];for(let V in R)h(R[V].object),delete R[V];delete F[S.id]}}function b(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:d,disableUnusedAttributes:x}}function tg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];e.update(p,n,1)}function l(c,h,f,m){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],m[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,m,0,f);let g=0;for(let y=0;y<f;y++)g+=h[y]*m[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function eg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==dn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let b=T===pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Mi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ii&&!b)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,m=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:m,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:d,maxAttributes:u,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:C,maxSamples:A}}function ng(i){let t=this,e=null,n=0,s=!1,r=!1,o=new xi,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){let p=f.length!==0||m||n!==0||s;return s=m,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,m){e=h(f,m,0)},this.setState=function(f,m,p){let g=f.clippingPlanes,y=f.clipIntersection,d=f.clipShadows,u=i.get(f);if(!s||g===null||g.length===0||r&&!d)r?h(null):c();else{let x=r?0:n,v=x*4,_=u.clippingState||null;l.value=_,_=h(g,m,v,p);for(let C=0;C!==v;++C)_[C]=e[C];u.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,m,p,g){let y=f!==null?f.length:0,d=null;if(y!==0){if(d=l.value,g!==!0||d===null){let u=p+y*4,x=m.matrixWorldInverse;a.getNormalMatrix(x),(d===null||d.length<u)&&(d=new Float32Array(u));for(let v=0,_=p;v!==y;++v,_+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(d,_),d[_+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,d}}function ig(i){let t=new WeakMap;function e(o,a){return a===Fl?o.mapping=js:a===Ol&&(o.mapping=tr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Fl||a===Ol)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new gc(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var sr=class extends oa{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ys=4,ou=[.125,.215,.35,.446,.526,.582],ds=20,gl=new sr,au=new Tt,xl=null,_l=0,vl=0,yl=!1,hs=(1+Math.sqrt(5))/2,Ws=1/hs,lu=[new U(-hs,Ws,0),new U(hs,Ws,0),new U(-Ws,0,hs),new U(Ws,0,hs),new U(0,hs,-Ws),new U(0,hs,Ws),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],rr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){xl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xl,_l,vl),this._renderer.xr.enabled=yl,t.scissorTest=!1,zo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===js||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:pn,format:dn,colorSpace:cr,depthBuffer:!1},s=cu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sg(r)),this._blurMaterial=rg(r,t,e)}return s}_compileMaterial(t){let e=new Me(this._lodPlanes[0],t);this._renderer.compile(e,gl)}_sceneToCubeUV(t,e,n,s){let a=new on(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(au),h.toneMapping=ri,h.autoClear=!1;let p=new qi({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new Me(new Ei,p),y=!1,d=t.background;d?d.isColor&&(p.color.copy(d),t.background=null,y=!0):(p.color.copy(au),y=!0);for(let u=0;u<6;u++){let x=u%3;x===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):x===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let v=this._cubeSize;zo(s,x*v,u>2?v:0,v,v),h.setRenderTarget(s),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=m,h.autoClear=f,t.background=d}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===js||t.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Me(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;zo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,gl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=lu[(s-r-1)%lu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Me(this._lodPlanes[s],c),m=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ds-1),y=r/g,d=isFinite(r)?1+Math.floor(h*y):ds;d>ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ds}`);let u=[],x=0;for(let T=0;T<ds;++T){let b=T/y,M=Math.exp(-b*b/2);u.push(M),T===0?x+=M:T<d&&(x+=2*M)}for(let T=0;T<u.length;T++)u[T]=u[T]/x;m.envMap.value=t.texture,m.samples.value=d,m.weights.value=u,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);let{_lodMax:v}=this;m.dTheta.value=g,m.mipInt.value=v-n;let _=this._sizeLods[s],C=3*_*(s>v-Ys?s-v+Ys:0),A=4*(this._cubeSize-_);zo(e,C,A,3*_,2*_),l.setRenderTarget(e),l.render(f,gl)}};function sg(i){let t=[],e=[],n=[],s=i,r=i-Ys+1+ou.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ys?l=ou[o-i+Ys-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,m=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,y=3,d=2,u=1,x=new Float32Array(y*g*p),v=new Float32Array(d*g*p),_=new Float32Array(u*g*p);for(let A=0;A<p;A++){let T=A%3*2/3-1,b=A>2?0:-1,M=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];x.set(M,y*g*A),v.set(m,d*g*A);let S=[A,A,A,A,A,A];_.set(S,u*g*A)}let C=new _e;C.setAttribute("position",new de(x,y)),C.setAttribute("uv",new de(v,d)),C.setAttribute("faceIndex",new de(_,u)),t.push(C),s>Ys&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function cu(i,t,e){let n=new en(i,t,e);return n.texture.mapping=wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function rg(i,t,e){let n=new Float32Array(ds),s=new U(0,1,0);return new Ne({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function hu(){return new Ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function uu(){return new Ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function oh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function og(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Fl||l===Ol,h=l===js||l===tr;if(c||h){let f=t.get(a),m=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return e===null&&(e=new rr(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new rr(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ag(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Nr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function lg(i,t,e,n){let s={},r=new WeakMap;function o(f){let m=f.target;m.index!==null&&t.remove(m.index);for(let g in m.attributes)t.remove(m.attributes[g]);for(let g in m.morphAttributes){let y=m.morphAttributes[g];for(let d=0,u=y.length;d<u;d++)t.remove(y[d])}m.removeEventListener("dispose",o),delete s[m.id];let p=r.get(m);p&&(t.remove(p),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(f,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,e.memory.geometries++),m}function l(f){let m=f.attributes;for(let g in m)t.update(m[g],i.ARRAY_BUFFER);let p=f.morphAttributes;for(let g in p){let y=p[g];for(let d=0,u=y.length;d<u;d++)t.update(y[d],i.ARRAY_BUFFER)}}function c(f){let m=[],p=f.index,g=f.attributes.position,y=0;if(p!==null){let x=p.array;y=p.version;for(let v=0,_=x.length;v<_;v+=3){let C=x[v+0],A=x[v+1],T=x[v+2];m.push(C,A,A,T,T,C)}}else if(g!==void 0){let x=g.array;y=g.version;for(let v=0,_=x.length/3-1;v<_;v+=3){let C=v+0,A=v+1,T=v+2;m.push(C,A,A,T,T,C)}}else return;let d=new(Qu(m)?ra:sa)(m,1);d.version=y;let u=r.get(f);u&&t.remove(u),r.set(f,d)}function h(f){let m=r.get(f);if(m){let p=f.index;p!==null&&m.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function cg(i,t,e){let n;function s(m){n=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function l(m,p){i.drawElements(n,p,r,m*o),e.update(p,n,1)}function c(m,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,m*o,g),e.update(p,n,g))}function h(m,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,m,0,g);let d=0;for(let u=0;u<g;u++)d+=p[u];e.update(d,n,1)}function f(m,p,g,y){if(g===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<m.length;u++)c(m[u]/o,p[u],y[u]);else{d.multiDrawElementsInstancedWEBGL(n,p,0,r,m,0,y,0,g);let u=0;for(let x=0;x<g;x++)u+=p[x]*y[x];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function hg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ug(i,t,e){let n=new WeakMap,s=new Te;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,m=n.get(a);if(m===void 0||m.count!==f){let M=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",M)};m!==void 0&&m.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),y===!0&&(v=3);let _=a.attributes.position.count*v,C=1;_>t.maxTextureSize&&(C=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let A=new Float32Array(_*C*4*f),T=new ea(A,_,C,f);T.type=ii,T.needsUpdate=!0;let b=v*4;for(let S=0;S<f;S++){let I=d[S],F=u[S],R=x[S],V=_*C*4*S;for(let G=0;G<I.count;G++){let W=G*b;p===!0&&(s.fromBufferAttribute(I,G),A[V+W+0]=s.x,A[V+W+1]=s.y,A[V+W+2]=s.z,A[V+W+3]=0),g===!0&&(s.fromBufferAttribute(F,G),A[V+W+4]=s.x,A[V+W+5]=s.y,A[V+W+6]=s.z,A[V+W+7]=0),y===!0&&(s.fromBufferAttribute(R,G),A[V+W+8]=s.x,A[V+W+9]=s.y,A[V+W+10]=s.z,A[V+W+11]=R.itemSize===4?s.w:1)}}m={count:f,texture:T,size:new ot(_,C)},n.set(a,m),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function fg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let m=l.skeleton;s.get(m)!==c&&(m.update(),s.set(m,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var la=class extends xn{constructor(t,e,n,s,r,o,a,l,c,h=Zs){if(h!==Zs&&h!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zs&&(n=gs),n===void 0&&h===nr&&(n=er),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:An,this.minFilter=l!==void 0?l:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},sf=new xn,fu=new la(1,1),rf=new ea,of=new pc,af=new aa,du=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),xu=new Float32Array(4);function ur(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=du[s];if(r===void 0&&(r=new Float32Array(s),du[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Aa(i,t){let e=pu[t];e===void 0&&(e=new Int32Array(t),pu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),Xe(e,t)}}function mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),Xe(e,t)}}function gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),Xe(e,t)}}function xg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;xu.set(n),i.uniformMatrix2fv(this.addr,!1,xu),Xe(e,n)}}function _g(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;gu.set(n),i.uniformMatrix3fv(this.addr,!1,gu),Xe(e,n)}}function vg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;mu.set(n),i.uniformMatrix4fv(this.addr,!1,mu),Xe(e,n)}}function yg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),Xe(e,t)}}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),Xe(e,t)}}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),Xe(e,t)}}function Eg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),Xe(e,t)}}function Tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),Xe(e,t)}}function Ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),Xe(e,t)}}function Rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fu.compareFunction=Ku,r=fu):r=sf,e.setTexture2D(t||r,s)}function Cg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||of,s)}function Pg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||af,s)}function Ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||rf,s)}function Lg(i){switch(i){case 5126:return dg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return xg;case 35675:return _g;case 35676:return vg;case 5124:case 35670:return yg;case 35667:case 35671:return Mg;case 35668:case 35672:return Sg;case 35669:case 35673:return bg;case 5125:return Eg;case 36294:return wg;case 36295:return Tg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Ig}}function Dg(i,t){i.uniform1fv(this.addr,t)}function Ug(i,t){let e=ur(t,this.size,2);i.uniform2fv(this.addr,e)}function Ng(i,t){let e=ur(t,this.size,3);i.uniform3fv(this.addr,e)}function Fg(i,t){let e=ur(t,this.size,4);i.uniform4fv(this.addr,e)}function Og(i,t){let e=ur(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Bg(i,t){let e=ur(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zg(i,t){let e=ur(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kg(i,t){i.uniform1iv(this.addr,t)}function Hg(i,t){i.uniform2iv(this.addr,t)}function Vg(i,t){i.uniform3iv(this.addr,t)}function Gg(i,t){i.uniform4iv(this.addr,t)}function Wg(i,t){i.uniform1uiv(this.addr,t)}function Xg(i,t){i.uniform2uiv(this.addr,t)}function qg(i,t){i.uniform3uiv(this.addr,t)}function Yg(i,t){i.uniform4uiv(this.addr,t)}function Zg(i,t,e){let n=this.cache,s=t.length,r=Aa(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||sf,r[o])}function $g(i,t,e){let n=this.cache,s=t.length,r=Aa(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||of,r[o])}function Jg(i,t,e){let n=this.cache,s=t.length,r=Aa(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||af,r[o])}function Kg(i,t,e){let n=this.cache,s=t.length,r=Aa(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||rf,r[o])}function Qg(i){switch(i){case 5126:return Dg;case 35664:return Ug;case 35665:return Ng;case 35666:return Fg;case 35674:return Og;case 35675:return Bg;case 35676:return zg;case 5124:case 35670:return kg;case 35667:case 35671:return Hg;case 35668:case 35672:return Vg;case 35669:case 35673:return Gg;case 5125:return Wg;case 36294:return Xg;case 36295:return qg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return Kg}}var xc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lg(e.type)}},_c=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qg(e.type)}},vc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ml=/(\w+)(\])?(\[|\.)?/g;function _u(i,t){i.seq.push(t),i.map[t.id]=t}function jg(i,t,e){let n=i.name,s=n.length;for(Ml.lastIndex=0;;){let r=Ml.exec(n),o=Ml.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){_u(e,c===void 0?new xc(a,i,t):new _c(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new vc(a),_u(e,f)),e=f}}}var Js=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);jg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function vu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var tx=37297,ex=0;function nx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var yu=new te;function ix(i){me._getMatrix(yu,me.workingColorSpace,i);let t=`mat3( ${yu.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case Ta:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Mu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+nx(i.getShaderSource(t),o)}else return s}function sx(i,t){let e=ix(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rx(i,t){let e;switch(t){case pd:e="Linear";break;case md:e="Reinhard";break;case gd:e="Cineon";break;case xd:e="ACESFilmic";break;case vd:e="AgX";break;case yd:e="Neutral";break;case _d:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ko=new U;function ox(){me.getLuminanceCoefficients(ko);let i=ko.x.toFixed(4),t=ko.y.toFixed(4),e=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ax(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function lx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Fr(i){return i!==""}function Su(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(i){return i.replace(hx,fx)}var ux=new Map;function fx(i,t){let e=Qt[t];if(e===void 0){let n=ux.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return yc(e)}var dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eu(i){return i.replace(dx,px)}function px(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function mx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ku?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gi&&(t="SHADOWMAP_TYPE_VSM"),t}function gx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case js:case tr:t="ENVMAP_TYPE_CUBE";break;case wa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xx(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===tr&&(t="ENVMAP_MODE_REFRACTION"),t}function _x(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $c:t="ENVMAP_BLENDING_MULTIPLY";break;case fd:t="ENVMAP_BLENDING_MIX";break;case dd:t="ENVMAP_BLENDING_ADD";break}return t}function vx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function yx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=mx(e),c=gx(e),h=xx(e),f=_x(e),m=vx(e),p=ax(e),g=lx(r),y=s.createProgram(),d,u,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fr).join(`
`),d.length>0&&(d+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fr).join(`
`),u.length>0&&(u+=`
`)):(d=[wu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),u=[wu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Qt.tonemapping_pars_fragment:"",e.toneMapping!==ri?rx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,sx("linearToOutputTexel",e.outputColorSpace),ox(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fr).join(`
`)),o=yc(o),o=Su(o,e),o=bu(o,e),a=yc(a),a=Su(a,e),a=bu(a,e),o=Eu(o),a=Eu(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,u=["#define varying in",e.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let v=x+d+o,_=x+u+a,C=vu(s,s.VERTEX_SHADER,v),A=vu(s,s.FRAGMENT_SHADER,_);s.attachShader(y,C),s.attachShader(y,A),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function T(I){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(y).trim(),R=s.getShaderInfoLog(C).trim(),V=s.getShaderInfoLog(A).trim(),G=!0,W=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,C,A);else{let Y=Mu(s,C,"vertex"),H=Mu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+Y+`
`+H)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(R===""||V==="")&&(W=!1);W&&(I.diagnostics={runnable:G,programLog:F,vertexShader:{log:R,prefix:d},fragmentShader:{log:V,prefix:u}})}s.deleteShader(C),s.deleteShader(A),b=new Js(s,y),M=cx(s,y)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(y,tx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ex++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=A,this}var Mx=0,Mc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Sc(t),e.set(t,n)),n}},Sc=class{constructor(t){this.id=Mx++,this.code=t,this.usedTimes=0}};function Sx(i,t,e,n,s,r,o){let a=new ia,l=new Mc,c=new Set,h=[],f=s.logarithmicDepthBuffer,m=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return c.add(M),M===0?"uv":`uv${M}`}function d(M,S,I,F,R){let V=F.fog,G=R.geometry,W=M.isMeshStandardMaterial?F.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||W),H=Y&&Y.mapping===wa?Y.image.height:null,it=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let ct=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,vt=ct!==void 0?ct.length:0,Zt=0;G.morphAttributes.position!==void 0&&(Zt=1),G.morphAttributes.normal!==void 0&&(Zt=2),G.morphAttributes.color!==void 0&&(Zt=3);let xe,K,ht,Ct;if(it){let ce=Tn[it];xe=ce.vertexShader,K=ce.fragmentShader}else xe=M.vertexShader,K=M.fragmentShader,l.update(M),ht=l.getVertexShaderID(M),Ct=l.getFragmentShaderID(M);let pt=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),Jt=R.isInstancedMesh===!0,$t=R.isBatchedMesh===!0,Le=!!M.map,le=!!M.matcap,ue=!!Y,z=!!M.aoMap,tn=!!M.lightMap,re=!!M.bumpMap,Vt=!!M.normalMap,Nt=!!M.displacementMap,ve=!!M.emissiveMap,Bt=!!M.metalnessMap,P=!!M.roughnessMap,E=M.anisotropy>0,q=M.clearcoat>0,tt=M.dispersion>0,st=M.iridescence>0,Q=M.sheen>0,Lt=M.transmission>0,gt=E&&!!M.anisotropyMap,bt=q&&!!M.clearcoatMap,ne=q&&!!M.clearcoatNormalMap,lt=q&&!!M.clearcoatRoughnessMap,yt=st&&!!M.iridescenceMap,kt=st&&!!M.iridescenceThicknessMap,Xt=Q&&!!M.sheenColorMap,Et=Q&&!!M.sheenRoughnessMap,Pt=!!M.specularMap,Wt=!!M.specularColorMap,pe=!!M.specularIntensityMap,B=Lt&&!!M.transmissionMap,mt=Lt&&!!M.thicknessMap,$=!!M.gradientMap,et=!!M.alphaMap,_t=M.alphaTest>0,xt=!!M.alphaHash,Ft=!!M.extensions,be=ri;M.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(be=i.toneMapping);let Be={shaderID:it,shaderType:M.type,shaderName:M.name,vertexShader:xe,fragmentShader:K,defines:M.defines,customVertexShaderID:ht,customFragmentShaderID:Ct,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:$t,batchingColor:$t&&R._colorsTexture!==null,instancing:Jt,instancingColor:Jt&&R.instanceColor!==null,instancingMorph:Jt&&R.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:cr,alphaToCoverage:!!M.alphaToCoverage,map:Le,matcap:le,envMap:ue,envMapMode:ue&&Y.mapping,envMapCubeUVHeight:H,aoMap:z,lightMap:tn,bumpMap:re,normalMap:Vt,displacementMap:m&&Nt,emissiveMap:ve,normalMapObjectSpace:Vt&&M.normalMapType===bd,normalMapTangentSpace:Vt&&M.normalMapType===ih,metalnessMap:Bt,roughnessMap:P,anisotropy:E,anisotropyMap:gt,clearcoat:q,clearcoatMap:bt,clearcoatNormalMap:ne,clearcoatRoughnessMap:lt,dispersion:tt,iridescence:st,iridescenceMap:yt,iridescenceThicknessMap:kt,sheen:Q,sheenColorMap:Xt,sheenRoughnessMap:Et,specularMap:Pt,specularColorMap:Wt,specularIntensityMap:pe,transmission:Lt,transmissionMap:B,thicknessMap:mt,gradientMap:$,opaque:M.transparent===!1&&M.blending===Hi&&M.alphaToCoverage===!1,alphaMap:et,alphaTest:_t,alphaHash:xt,combine:M.combine,mapUv:Le&&y(M.map.channel),aoMapUv:z&&y(M.aoMap.channel),lightMapUv:tn&&y(M.lightMap.channel),bumpMapUv:re&&y(M.bumpMap.channel),normalMapUv:Vt&&y(M.normalMap.channel),displacementMapUv:Nt&&y(M.displacementMap.channel),emissiveMapUv:ve&&y(M.emissiveMap.channel),metalnessMapUv:Bt&&y(M.metalnessMap.channel),roughnessMapUv:P&&y(M.roughnessMap.channel),anisotropyMapUv:gt&&y(M.anisotropyMap.channel),clearcoatMapUv:bt&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:ne&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Et&&y(M.sheenRoughnessMap.channel),specularMapUv:Pt&&y(M.specularMap.channel),specularColorMapUv:Wt&&y(M.specularColorMap.channel),specularIntensityMapUv:pe&&y(M.specularIntensityMap.channel),transmissionMapUv:B&&y(M.transmissionMap.channel),thicknessMapUv:mt&&y(M.thicknessMap.channel),alphaMapUv:et&&y(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Vt||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!G.attributes.uv&&(Le||et),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:zt,skinning:R.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Zt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:Le&&M.map.isVideoTexture===!0&&me.getTransfer(M.map.colorSpace)===we,decodeVideoTextureEmissive:ve&&M.emissiveMap.isVideoTexture===!0&&me.getTransfer(M.emissiveMap.colorSpace)===we,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Fe,flipSided:M.side===an,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ft&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&M.extensions.multiDraw===!0||$t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function u(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)S.push(I),S.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(x(S,M),v(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function x(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){let S=g[M.type],I;if(S){let F=Tn[S];I=oi.clone(F.uniforms)}else I=M.uniforms;return I}function C(M,S){let I;for(let F=0,R=h.length;F<R;F++){let V=h[F];if(V.cacheKey===S){I=V,++I.usedTimes;break}}return I===void 0&&(I=new yx(i,S,M,r),h.push(I)),I}function A(M){if(--M.usedTimes===0){let S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function T(M){l.remove(M)}function b(){l.dispose()}return{getParameters:d,getProgramCacheKey:u,getUniforms:_,acquireProgram:C,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:b}}function bx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ex(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Tu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Au(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,m,p,g,y,d){let u=i[t];return u===void 0?(u={id:f.id,object:f,geometry:m,material:p,groupOrder:g,renderOrder:f.renderOrder,z:y,group:d},i[t]=u):(u.id=f.id,u.object=f,u.geometry=m,u.material=p,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=y,u.group=d),t++,u}function a(f,m,p,g,y,d){let u=o(f,m,p,g,y,d);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):e.push(u)}function l(f,m,p,g,y,d){let u=o(f,m,p,g,y,d);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function c(f,m){e.length>1&&e.sort(f||Ex),n.length>1&&n.sort(m||Tu),s.length>1&&s.sort(m||Tu)}function h(){for(let f=t,m=i.length;f<m;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function wx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Au,i.set(n,[o])):s>=r.length?(o=new Au,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Tx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Tt};break;case"SpotLight":e={position:new U,direction:new U,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Ax(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Rx=0;function Cx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Px(i){let t=new Tx,e=Ax(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new se,o=new se;function a(c){let h=0,f=0,m=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,y=0,d=0,u=0,x=0,v=0,_=0,C=0,A=0,T=0;c.sort(Cx);for(let M=0,S=c.length;M<S;M++){let I=c[M],F=I.color,R=I.intensity,V=I.distance,G=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=F.r*R,f+=F.g*R,m+=F.b*R;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],R);T++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Y=I.shadow,H=e.get(I);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=G,n.directionalShadowMatrix[p]=I.shadow.matrix,x++}n.directional[p]=W,p++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(F).multiplyScalar(R),W.distance=V,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[y]=W;let Y=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,Y.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[y]=Y.matrix,I.castShadow){let H=e.get(I);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[y]=H,n.spotShadowMap[y]=G,_++}y++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(F).multiplyScalar(R),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[d]=W,d++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let Y=I.shadow,H=e.get(I);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=I.shadow.matrix,v++}n.point[g]=W,g++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(R),W.groundColor.copy(I.groundColor).multiplyScalar(R),n.hemi[u]=W,u++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=m;let b=n.hash;(b.directionalLength!==p||b.pointLength!==g||b.spotLength!==y||b.rectAreaLength!==d||b.hemiLength!==u||b.numDirectionalShadows!==x||b.numPointShadows!==v||b.numSpotShadows!==_||b.numSpotMaps!==C||b.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=d,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,b.directionalLength=p,b.pointLength=g,b.spotLength=y,b.rectAreaLength=d,b.hemiLength=u,b.numDirectionalShadows=x,b.numPointShadows=v,b.numSpotShadows=_,b.numSpotMaps=C,b.numLightProbes=T,n.version=Rx++)}function l(c,h){let f=0,m=0,p=0,g=0,y=0,d=h.matrixWorldInverse;for(let u=0,x=c.length;u<x;u++){let v=c[u];if(v.isDirectionalLight){let _=n.directional[f];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(d),f++}else if(v.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(d),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(d),p++}else if(v.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(d),o.identity(),r.copy(v.matrixWorld),r.premultiply(d),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let _=n.point[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(d),m++}else if(v.isHemisphereLight){let _=n.hemi[y];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(d),y++}}}return{setup:a,setupView:l,state:n}}function Ru(i){let t=new Px(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ix(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ru(i),t.set(s,[a])):r>=o.length?(a=new Ru(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Xr=class extends bi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},bc=class extends bi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ux(i,t,e){let n=new Wr,s=new ot,r=new ot,o=new Te,a=new Xr({depthPacking:nh}),l=new bc,c={},h=e.maxTextureSize,f={[Vi]:an,[an]:Vi,[Fe]:Fe},m=new Ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Lx,fragmentShader:Dx}),p=m.clone();p.defines.HORIZONTAL_PASS=1;let g=new _e;g.setAttribute("position",new de(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Me(g,m),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let u=this.type;this.render=function(A,T,b){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;let M=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),F=i.state;F.setBlending(si),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let R=u!==gi&&this.type===gi,V=u===gi&&this.type!==gi;for(let G=0,W=A.length;G<W;G++){let Y=A[G],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let it=H.getFrameExtents();if(s.multiply(it),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,H.mapSize.y=r.y)),H.map===null||R===!0||V===!0){let vt=this.type!==gi?{minFilter:An,magFilter:An}:{};H.map!==null&&H.map.dispose(),H.map=new en(s.x,s.y,vt),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let ct=H.getViewportCount();for(let vt=0;vt<ct;vt++){let Zt=H.getViewport(vt);o.set(r.x*Zt.x,r.y*Zt.y,r.x*Zt.z,r.y*Zt.w),F.viewport(o),H.updateMatrices(Y,vt),n=H.getFrustum(),_(T,b,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===gi&&x(H,b),H.needsUpdate=!1}u=this.type,d.needsUpdate=!1,i.setRenderTarget(M,S,I)};function x(A,T){let b=t.update(y);m.defines.VSM_SAMPLES!==A.blurSamples&&(m.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,m.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new en(s.x,s.y)),m.uniforms.shadow_pass.value=A.map.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,b,m,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,b,p,y,null)}function v(A,T,b,M){let S=null,I=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)S=I;else if(S=b.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let F=S.uuid,R=T.uuid,V=c[F];V===void 0&&(V={},c[F]=V);let G=V[R];G===void 0&&(G=S.clone(),V[R]=G,T.addEventListener("dispose",C)),S=G}if(S.visible=T.visible,S.wireframe=T.wireframe,M===gi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:f[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let F=i.properties.get(S);F.light=b}return S}function _(A,T,b,M,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===gi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);let R=t.update(A),V=A.material;if(Array.isArray(V)){let G=R.groups;for(let W=0,Y=G.length;W<Y;W++){let H=G[W],it=V[H.materialIndex];if(it&&it.visible){let ct=v(A,it,M,S);A.onBeforeShadow(i,A,T,b,R,ct,H),i.renderBufferDirect(b,null,R,ct,A,H),A.onAfterShadow(i,A,T,b,R,ct,H)}}}else if(V.visible){let G=v(A,V,M,S);A.onBeforeShadow(i,A,T,b,R,G,null),i.renderBufferDirect(b,null,R,G,A,null),A.onAfterShadow(i,A,T,b,R,G,null)}}let F=A.children;for(let R=0,V=F.length;R<V;R++)_(F[R],T,b,M,S)}function C(A){A.target.removeEventListener("dispose",C);for(let b in c){let M=c[b],S=A.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}var Nx={[Cl]:Pl,[Il]:Ul,[Ll]:Nl,[Qs]:Dl,[Pl]:Cl,[Ul]:Il,[Nl]:Ll,[Dl]:Qs};function Fx(i,t){function e(){let B=!1,mt=new Te,$=null,et=new Te(0,0,0,0);return{setMask:function(_t){$!==_t&&!B&&(i.colorMask(_t,_t,_t,_t),$=_t)},setLocked:function(_t){B=_t},setClear:function(_t,xt,Ft,be,Be){Be===!0&&(_t*=be,xt*=be,Ft*=be),mt.set(_t,xt,Ft,be),et.equals(mt)===!1&&(i.clearColor(_t,xt,Ft,be),et.copy(mt))},reset:function(){B=!1,$=null,et.set(-1,0,0,0)}}}function n(){let B=!1,mt=!1,$=null,et=null,_t=null;return{setReversed:function(xt){if(mt!==xt){let Ft=t.get("EXT_clip_control");mt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);let be=_t;_t=null,this.setClear(be)}mt=xt},getReversed:function(){return mt},setTest:function(xt){xt?pt(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(xt){$!==xt&&!B&&(i.depthMask(xt),$=xt)},setFunc:function(xt){if(mt&&(xt=Nx[xt]),et!==xt){switch(xt){case Cl:i.depthFunc(i.NEVER);break;case Pl:i.depthFunc(i.ALWAYS);break;case Il:i.depthFunc(i.LESS);break;case Qs:i.depthFunc(i.LEQUAL);break;case Ll:i.depthFunc(i.EQUAL);break;case Dl:i.depthFunc(i.GEQUAL);break;case Ul:i.depthFunc(i.GREATER);break;case Nl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=xt}},setLocked:function(xt){B=xt},setClear:function(xt){_t!==xt&&(mt&&(xt=1-xt),i.clearDepth(xt),_t=xt)},reset:function(){B=!1,$=null,et=null,_t=null,mt=!1}}}function s(){let B=!1,mt=null,$=null,et=null,_t=null,xt=null,Ft=null,be=null,Be=null;return{setTest:function(ce){B||(ce?pt(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(ce){mt!==ce&&!B&&(i.stencilMask(ce),mt=ce)},setFunc:function(ce,gn,Sn){($!==ce||et!==gn||_t!==Sn)&&(i.stencilFunc(ce,gn,Sn),$=ce,et=gn,_t=Sn)},setOp:function(ce,gn,Sn){(xt!==ce||Ft!==gn||be!==Sn)&&(i.stencilOp(ce,gn,Sn),xt=ce,Ft=gn,be=Sn)},setLocked:function(ce){B=ce},setClear:function(ce){Be!==ce&&(i.clearStencil(ce),Be=ce)},reset:function(){B=!1,mt=null,$=null,et=null,_t=null,xt=null,Ft=null,be=null,Be=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},m=new WeakMap,p=[],g=null,y=!1,d=null,u=null,x=null,v=null,_=null,C=null,A=null,T=new Tt(0,0,0),b=0,M=!1,S=null,I=null,F=null,R=null,V=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,Y=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=Y>=2);let it=null,ct={},vt=i.getParameter(i.SCISSOR_BOX),Zt=i.getParameter(i.VIEWPORT),xe=new Te().fromArray(vt),K=new Te().fromArray(Zt);function ht(B,mt,$,et){let _t=new Uint8Array(4),xt=i.createTexture();i.bindTexture(B,xt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<$;Ft++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(mt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return xt}let Ct={};Ct[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),Ct[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ct[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(i.DEPTH_TEST),o.setFunc(Qs),re(!1),Vt(Ph),pt(i.CULL_FACE),z(si);function pt(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function zt(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Jt(B,mt){return f[B]!==mt?(i.bindFramebuffer(B,mt),f[B]=mt,B===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=mt),B===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function $t(B,mt){let $=p,et=!1;if(B){$=m.get(mt),$===void 0&&($=[],m.set(mt,$));let _t=B.textures;if($.length!==_t.length||$[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,Ft=_t.length;xt<Ft;xt++)$[xt]=i.COLOR_ATTACHMENT0+xt;$.length=_t.length,et=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,et=!0);et&&i.drawBuffers($)}function Le(B){return g!==B?(i.useProgram(B),g=B,!0):!1}let le={[us]:i.FUNC_ADD,[$f]:i.FUNC_SUBTRACT,[Jf]:i.FUNC_REVERSE_SUBTRACT};le[Kf]=i.MIN,le[Qf]=i.MAX;let ue={[jf]:i.ZERO,[td]:i.ONE,[ed]:i.SRC_COLOR,[Al]:i.SRC_ALPHA,[ad]:i.SRC_ALPHA_SATURATE,[rd]:i.DST_COLOR,[id]:i.DST_ALPHA,[nd]:i.ONE_MINUS_SRC_COLOR,[Rl]:i.ONE_MINUS_SRC_ALPHA,[od]:i.ONE_MINUS_DST_COLOR,[sd]:i.ONE_MINUS_DST_ALPHA,[ld]:i.CONSTANT_COLOR,[cd]:i.ONE_MINUS_CONSTANT_COLOR,[hd]:i.CONSTANT_ALPHA,[ud]:i.ONE_MINUS_CONSTANT_ALPHA};function z(B,mt,$,et,_t,xt,Ft,be,Be,ce){if(B===si){y===!0&&(zt(i.BLEND),y=!1);return}if(y===!1&&(pt(i.BLEND),y=!0),B!==Zf){if(B!==d||ce!==M){if((u!==us||_!==us)&&(i.blendEquation(i.FUNC_ADD),u=us,_=us),ce)switch(B){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ks:i.blendFunc(i.ONE,i.ONE);break;case Ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ks:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}x=null,v=null,C=null,A=null,T.set(0,0,0),b=0,d=B,M=ce}return}_t=_t||mt,xt=xt||$,Ft=Ft||et,(mt!==u||_t!==_)&&(i.blendEquationSeparate(le[mt],le[_t]),u=mt,_=_t),($!==x||et!==v||xt!==C||Ft!==A)&&(i.blendFuncSeparate(ue[$],ue[et],ue[xt],ue[Ft]),x=$,v=et,C=xt,A=Ft),(be.equals(T)===!1||Be!==b)&&(i.blendColor(be.r,be.g,be.b,Be),T.copy(be),b=Be),d=B,M=!1}function tn(B,mt){B.side===Fe?zt(i.CULL_FACE):pt(i.CULL_FACE);let $=B.side===an;mt&&($=!$),re($),B.blending===Hi&&B.transparent===!1?z(si):z(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let et=B.stencilWrite;a.setTest(et),et&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ve(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function re(B){S!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),S=B)}function Vt(B){B!==qf?(pt(i.CULL_FACE),B!==I&&(B===Ph?i.cullFace(i.BACK):B===Yf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),I=B}function Nt(B){B!==F&&(W&&i.lineWidth(B),F=B)}function ve(B,mt,$){B?(pt(i.POLYGON_OFFSET_FILL),(R!==mt||V!==$)&&(i.polygonOffset(mt,$),R=mt,V=$)):zt(i.POLYGON_OFFSET_FILL)}function Bt(B){B?pt(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function P(B){B===void 0&&(B=i.TEXTURE0+G-1),it!==B&&(i.activeTexture(B),it=B)}function E(B,mt,$){$===void 0&&(it===null?$=i.TEXTURE0+G-1:$=it);let et=ct[$];et===void 0&&(et={type:void 0,texture:void 0},ct[$]=et),(et.type!==B||et.texture!==mt)&&(it!==$&&(i.activeTexture($),it=$),i.bindTexture(B,mt||Ct[B]),et.type=B,et.texture=mt)}function q(){let B=ct[it];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function lt(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Xt(B){xe.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),xe.copy(B))}function Et(B){K.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),K.copy(B))}function Pt(B,mt){let $=c.get(mt);$===void 0&&($=new WeakMap,c.set(mt,$));let et=$.get(B);et===void 0&&(et=i.getUniformBlockIndex(mt,B.name),$.set(B,et))}function Wt(B,mt){let et=c.get(mt).get(B);l.get(mt)!==et&&(i.uniformBlockBinding(mt,et,B.__bindingPointIndex),l.set(mt,et))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,ct={},f={},m=new WeakMap,p=[],g=null,y=!1,d=null,u=null,x=null,v=null,_=null,C=null,A=null,T=new Tt(0,0,0),b=0,M=!1,S=null,I=null,F=null,R=null,V=null,xe.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pt,disable:zt,bindFramebuffer:Jt,drawBuffers:$t,useProgram:Le,setBlending:z,setMaterial:tn,setFlipSided:re,setCullFace:Vt,setLineWidth:Nt,setPolygonOffset:ve,setScissorTest:Bt,activeTexture:P,bindTexture:E,unbindTexture:q,compressedTexImage2D:tt,compressedTexImage3D:st,texImage2D:yt,texImage3D:kt,updateUBOMapping:Pt,uniformBlockBinding:Wt,texStorage2D:ne,texStorage3D:lt,texSubImage2D:Q,texSubImage3D:Lt,compressedTexSubImage2D:gt,compressedTexSubImage3D:bt,scissor:Xt,viewport:Et,reset:pe}}function Cu(i,t,e,n){let s=Ox(n);switch(e){case Xu:return i*t;case Yu:return i*t;case Zu:return i*t*2;case Qr:return i*t/s.components*s.byteLength;case jc:return i*t/s.components*s.byteLength;case $u:return i*t*2/s.components*s.byteLength;case th:return i*t*2/s.components*s.byteLength;case qu:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case eh:return i*t*4/s.components*s.byteLength;case qo:case Yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zo:case $o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kl:case Vl:return Math.max(i,16)*Math.max(t,8)/4;case zl:case Hl:return Math.max(i,8)*Math.max(t,8)/2;case Gl:case Wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jo:case oc:case ac:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ju:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case cc:case hc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ox(i){switch(i){case Mi:case Vu:return{byteLength:1,components:1};case Vr:case Gu:case pn:return{byteLength:2,components:1};case Kc:case Qc:return{byteLength:2,components:4};case gs:case Jc:case ii:return{byteLength:4,components:1};case Wu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Bx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap,f,m=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return p?new OffscreenCanvas(P,E):jo("canvas")}function y(P,E,q){let tt=1,st=Bt(P);if((st.width>q||st.height>q)&&(tt=q/Math.max(st.width,st.height)),tt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Q=Math.floor(tt*st.width),Lt=Math.floor(tt*st.height);f===void 0&&(f=g(Q,Lt));let gt=E?g(Q,Lt):f;return gt.width=Q,gt.height=Lt,gt.getContext("2d").drawImage(P,0,0,Q,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+Q+"x"+Lt+")."),gt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),P;return P}function d(P){return P.generateMipmaps}function u(P){i.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,E,q,tt,st=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=E;if(E===i.RED&&(q===i.FLOAT&&(Q=i.R32F),q===i.HALF_FLOAT&&(Q=i.R16F),q===i.UNSIGNED_BYTE&&(Q=i.R8)),E===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(Q=i.R8UI),q===i.UNSIGNED_SHORT&&(Q=i.R16UI),q===i.UNSIGNED_INT&&(Q=i.R32UI),q===i.BYTE&&(Q=i.R8I),q===i.SHORT&&(Q=i.R16I),q===i.INT&&(Q=i.R32I)),E===i.RG&&(q===i.FLOAT&&(Q=i.RG32F),q===i.HALF_FLOAT&&(Q=i.RG16F),q===i.UNSIGNED_BYTE&&(Q=i.RG8)),E===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(Q=i.RG8UI),q===i.UNSIGNED_SHORT&&(Q=i.RG16UI),q===i.UNSIGNED_INT&&(Q=i.RG32UI),q===i.BYTE&&(Q=i.RG8I),q===i.SHORT&&(Q=i.RG16I),q===i.INT&&(Q=i.RG32I)),E===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),q===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),q===i.UNSIGNED_INT&&(Q=i.RGB32UI),q===i.BYTE&&(Q=i.RGB8I),q===i.SHORT&&(Q=i.RGB16I),q===i.INT&&(Q=i.RGB32I)),E===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),q===i.UNSIGNED_INT&&(Q=i.RGBA32UI),q===i.BYTE&&(Q=i.RGBA8I),q===i.SHORT&&(Q=i.RGBA16I),q===i.INT&&(Q=i.RGBA32I)),E===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),E===i.RGBA){let Lt=st?Ta:me.getTransfer(tt);q===i.FLOAT&&(Q=i.RGBA32F),q===i.HALF_FLOAT&&(Q=i.RGBA16F),q===i.UNSIGNED_BYTE&&(Q=Lt===we?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function _(P,E){let q;return P?E===null||E===gs||E===er?q=i.DEPTH24_STENCIL8:E===ii?q=i.DEPTH32F_STENCIL8:E===Vr&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===gs||E===er?q=i.DEPTH_COMPONENT24:E===ii?q=i.DEPTH_COMPONENT32F:E===Vr&&(q=i.DEPTH_COMPONENT16),q}function C(P,E){return d(P)===!0||P.isFramebufferTexture&&P.minFilter!==An&&P.minFilter!==fn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function A(P){let E=P.target;E.removeEventListener("dispose",A),b(E),E.isVideoTexture&&h.delete(E)}function T(P){let E=P.target;E.removeEventListener("dispose",T),S(E)}function b(P){let E=n.get(P);if(E.__webglInit===void 0)return;let q=P.source,tt=m.get(q);if(tt){let st=tt[E.__cacheKey];st.usedTimes--,st.usedTimes===0&&M(P),Object.keys(tt).length===0&&m.delete(q)}n.remove(P)}function M(P){let E=n.get(P);i.deleteTexture(E.__webglTexture);let q=P.source,tt=m.get(q);delete tt[E.__cacheKey],o.memory.textures--}function S(P){let E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(E.__webglFramebuffer[tt]))for(let st=0;st<E.__webglFramebuffer[tt].length;st++)i.deleteFramebuffer(E.__webglFramebuffer[tt][st]);else i.deleteFramebuffer(E.__webglFramebuffer[tt]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[tt])}else{if(Array.isArray(E.__webglFramebuffer))for(let tt=0;tt<E.__webglFramebuffer.length;tt++)i.deleteFramebuffer(E.__webglFramebuffer[tt]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let tt=0;tt<E.__webglColorRenderbuffer.length;tt++)E.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[tt]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let q=P.textures;for(let tt=0,st=q.length;tt<st;tt++){let Q=n.get(q[tt]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(q[tt])}n.remove(P)}let I=0;function F(){I=0}function R(){let P=I;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),I+=1,P}function V(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function G(P,E){let q=n.get(P);if(P.isVideoTexture&&Nt(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){let tt=P.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(q,P,E);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+E)}function W(P,E){let q=n.get(P);if(P.version>0&&q.__version!==P.version){K(q,P,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+E)}function Y(P,E){let q=n.get(P);if(P.version>0&&q.__version!==P.version){K(q,P,E);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+E)}function H(P,E){let q=n.get(P);if(P.version>0&&q.__version!==P.version){ht(q,P,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+E)}let it={[Gi]:i.REPEAT,[ps]:i.CLAMP_TO_EDGE,[Bl]:i.MIRRORED_REPEAT},ct={[An]:i.NEAREST,[Md]:i.NEAREST_MIPMAP_NEAREST,[yo]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[Za]:i.LINEAR_MIPMAP_NEAREST,[ms]:i.LINEAR_MIPMAP_LINEAR},vt={[Ed]:i.NEVER,[Pd]:i.ALWAYS,[wd]:i.LESS,[Ku]:i.LEQUAL,[Td]:i.EQUAL,[Cd]:i.GEQUAL,[Ad]:i.GREATER,[Rd]:i.NOTEQUAL};function Zt(P,E){if(E.type===ii&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===fn||E.magFilter===Za||E.magFilter===yo||E.magFilter===ms||E.minFilter===fn||E.minFilter===Za||E.minFilter===yo||E.minFilter===ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,it[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,it[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,it[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ct[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ct[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,vt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===An||E.minFilter!==yo&&E.minFilter!==ms||E.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function xe(P,E){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",A));let tt=E.source,st=m.get(tt);st===void 0&&(st={},m.set(tt,st));let Q=V(E);if(Q!==P.__cacheKey){st[Q]===void 0&&(st[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),st[Q].usedTimes++;let Lt=st[P.__cacheKey];Lt!==void 0&&(st[P.__cacheKey].usedTimes--,Lt.usedTimes===0&&M(E)),P.__cacheKey=Q,P.__webglTexture=st[Q].texture}return q}function K(P,E,q){let tt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(tt=i.TEXTURE_3D);let st=xe(P,E),Q=E.source;e.bindTexture(tt,P.__webglTexture,i.TEXTURE0+q);let Lt=n.get(Q);if(Q.version!==Lt.__version||st===!0){e.activeTexture(i.TEXTURE0+q);let gt=me.getPrimaries(me.workingColorSpace),bt=E.colorSpace===ni?null:me.getPrimaries(E.colorSpace),ne=E.colorSpace===ni||gt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let lt=y(E.image,!1,s.maxTextureSize);lt=ve(E,lt);let yt=r.convert(E.format,E.colorSpace),kt=r.convert(E.type),Xt=v(E.internalFormat,yt,kt,E.colorSpace,E.isVideoTexture);Zt(tt,E);let Et,Pt=E.mipmaps,Wt=E.isVideoTexture!==!0,pe=Lt.__version===void 0||st===!0,B=Q.dataReady,mt=C(E,lt);if(E.isDepthTexture)Xt=_(E.format===nr,E.type),pe&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,Xt,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Xt,lt.width,lt.height,0,yt,kt,null));else if(E.isDataTexture)if(Pt.length>0){Wt&&pe&&e.texStorage2D(i.TEXTURE_2D,mt,Xt,Pt[0].width,Pt[0].height);for(let $=0,et=Pt.length;$<et;$++)Et=Pt[$],Wt?B&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Et.width,Et.height,yt,kt,Et.data):e.texImage2D(i.TEXTURE_2D,$,Xt,Et.width,Et.height,0,yt,kt,Et.data);E.generateMipmaps=!1}else Wt?(pe&&e.texStorage2D(i.TEXTURE_2D,mt,Xt,lt.width,lt.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt.width,lt.height,yt,kt,lt.data)):e.texImage2D(i.TEXTURE_2D,0,Xt,lt.width,lt.height,0,yt,kt,lt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Wt&&pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Xt,Pt[0].width,Pt[0].height,lt.depth);for(let $=0,et=Pt.length;$<et;$++)if(Et=Pt[$],E.format!==dn)if(yt!==null)if(Wt){if(B)if(E.layerUpdates.size>0){let _t=Cu(Et.width,Et.height,E.format,E.type);for(let xt of E.layerUpdates){let Ft=Et.data.subarray(xt*_t/Et.data.BYTES_PER_ELEMENT,(xt+1)*_t/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,xt,Et.width,Et.height,1,yt,Ft)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,lt.depth,yt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Xt,Et.width,Et.height,lt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,lt.depth,yt,kt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Xt,Et.width,Et.height,lt.depth,0,yt,kt,Et.data)}else{Wt&&pe&&e.texStorage2D(i.TEXTURE_2D,mt,Xt,Pt[0].width,Pt[0].height);for(let $=0,et=Pt.length;$<et;$++)Et=Pt[$],E.format!==dn?yt!==null?Wt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Et.width,Et.height,yt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Xt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?B&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Et.width,Et.height,yt,kt,Et.data):e.texImage2D(i.TEXTURE_2D,$,Xt,Et.width,Et.height,0,yt,kt,Et.data)}else if(E.isDataArrayTexture)if(Wt){if(pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Xt,lt.width,lt.height,lt.depth),B)if(E.layerUpdates.size>0){let $=Cu(lt.width,lt.height,E.format,E.type);for(let et of E.layerUpdates){let _t=lt.data.subarray(et*$/lt.data.BYTES_PER_ELEMENT,(et+1)*$/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,lt.width,lt.height,1,yt,kt,_t)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,yt,kt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Xt,lt.width,lt.height,lt.depth,0,yt,kt,lt.data);else if(E.isData3DTexture)Wt?(pe&&e.texStorage3D(i.TEXTURE_3D,mt,Xt,lt.width,lt.height,lt.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,yt,kt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Xt,lt.width,lt.height,lt.depth,0,yt,kt,lt.data);else if(E.isFramebufferTexture){if(pe)if(Wt)e.texStorage2D(i.TEXTURE_2D,mt,Xt,lt.width,lt.height);else{let $=lt.width,et=lt.height;for(let _t=0;_t<mt;_t++)e.texImage2D(i.TEXTURE_2D,_t,Xt,$,et,0,yt,kt,null),$>>=1,et>>=1}}else if(Pt.length>0){if(Wt&&pe){let $=Bt(Pt[0]);e.texStorage2D(i.TEXTURE_2D,mt,Xt,$.width,$.height)}for(let $=0,et=Pt.length;$<et;$++)Et=Pt[$],Wt?B&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,yt,kt,Et):e.texImage2D(i.TEXTURE_2D,$,Xt,yt,kt,Et);E.generateMipmaps=!1}else if(Wt){if(pe){let $=Bt(lt);e.texStorage2D(i.TEXTURE_2D,mt,Xt,$.width,$.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,kt,lt)}else e.texImage2D(i.TEXTURE_2D,0,Xt,yt,kt,lt);d(E)&&u(tt),Lt.__version=Q.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ht(P,E,q){if(E.image.length!==6)return;let tt=xe(P,E),st=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+q);let Q=n.get(st);if(st.version!==Q.__version||tt===!0){e.activeTexture(i.TEXTURE0+q);let Lt=me.getPrimaries(me.workingColorSpace),gt=E.colorSpace===ni?null:me.getPrimaries(E.colorSpace),bt=E.colorSpace===ni||Lt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let ne=E.isCompressedTexture||E.image[0].isCompressedTexture,lt=E.image[0]&&E.image[0].isDataTexture,yt=[];for(let et=0;et<6;et++)!ne&&!lt?yt[et]=y(E.image[et],!0,s.maxCubemapSize):yt[et]=lt?E.image[et].image:E.image[et],yt[et]=ve(E,yt[et]);let kt=yt[0],Xt=r.convert(E.format,E.colorSpace),Et=r.convert(E.type),Pt=v(E.internalFormat,Xt,Et,E.colorSpace),Wt=E.isVideoTexture!==!0,pe=Q.__version===void 0||tt===!0,B=st.dataReady,mt=C(E,kt);Zt(i.TEXTURE_CUBE_MAP,E);let $;if(ne){Wt&&pe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Pt,kt.width,kt.height);for(let et=0;et<6;et++){$=yt[et].mipmaps;for(let _t=0;_t<$.length;_t++){let xt=$[_t];E.format!==dn?Xt!==null?Wt?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t,0,0,xt.width,xt.height,Xt,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t,Pt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t,0,0,xt.width,xt.height,Xt,Et,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t,Pt,xt.width,xt.height,0,Xt,Et,xt.data)}}}else{if($=E.mipmaps,Wt&&pe){$.length>0&&mt++;let et=Bt(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Pt,et.width,et.height)}for(let et=0;et<6;et++)if(lt){Wt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,yt[et].width,yt[et].height,Xt,Et,yt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Pt,yt[et].width,yt[et].height,0,Xt,Et,yt[et].data);for(let _t=0;_t<$.length;_t++){let Ft=$[_t].image[et].image;Wt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t+1,0,0,Ft.width,Ft.height,Xt,Et,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t+1,Pt,Ft.width,Ft.height,0,Xt,Et,Ft.data)}}else{Wt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Xt,Et,yt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Pt,Xt,Et,yt[et]);for(let _t=0;_t<$.length;_t++){let xt=$[_t];Wt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t+1,0,0,Xt,Et,xt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t+1,Pt,Xt,Et,xt.image[et])}}}d(E)&&u(i.TEXTURE_CUBE_MAP),Q.__version=st.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ct(P,E,q,tt,st,Q){let Lt=r.convert(q.format,q.colorSpace),gt=r.convert(q.type),bt=v(q.internalFormat,Lt,gt,q.colorSpace),ne=n.get(E),lt=n.get(q);if(lt.__renderTarget=E,!ne.__hasExternalTextures){let yt=Math.max(1,E.width>>Q),kt=Math.max(1,E.height>>Q);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,Q,bt,yt,kt,E.depth,0,Lt,gt,null):e.texImage2D(st,Q,bt,yt,kt,0,Lt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Vt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,st,lt.__webglTexture,0,re(E)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,st,lt.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(P,E,q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){let tt=E.depthTexture,st=tt&&tt.isDepthTexture?tt.type:null,Q=_(E.stencilBuffer,st),Lt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=re(E);Vt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,Q,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,Q,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Q,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,P)}else{let tt=E.textures;for(let st=0;st<tt.length;st++){let Q=tt[st],Lt=r.convert(Q.format,Q.colorSpace),gt=r.convert(Q.type),bt=v(Q.internalFormat,Lt,gt,Q.colorSpace),ne=re(E);q&&Vt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,bt,E.width,E.height):Vt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,bt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,bt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let tt=n.get(E.depthTexture);tt.__renderTarget=E,(!tt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);let st=tt.__webglTexture,Q=re(E);if(E.depthTexture.format===Zs)Vt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(E.depthTexture.format===nr)Vt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Jt(P){let E=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let tt=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),tt){let st=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,tt.removeEventListener("dispose",st)};tt.addEventListener("dispose",st),E.__depthDisposeCallback=st}E.__boundDepthTexture=tt}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");zt(E.__webglFramebuffer,P)}else if(q){E.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[tt]),E.__webglDepthbuffer[tt]===void 0)E.__webglDepthbuffer[tt]=i.createRenderbuffer(),pt(E.__webglDepthbuffer[tt],P,!1);else{let st=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),pt(E.__webglDepthbuffer,P,!1);else{let tt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(P,E,q){let tt=n.get(P);E!==void 0&&Ct(tt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Jt(P)}function Le(P){let E=P.texture,q=n.get(P),tt=n.get(E);P.addEventListener("dispose",T);let st=P.textures,Q=P.isWebGLCubeRenderTarget===!0,Lt=st.length>1;if(Lt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=E.version,o.memory.textures++),Q){q.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[gt]=[];for(let bt=0;bt<E.mipmaps.length;bt++)q.__webglFramebuffer[gt][bt]=i.createFramebuffer()}else q.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let gt=0;gt<E.mipmaps.length;gt++)q.__webglFramebuffer[gt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let gt=0,bt=st.length;gt<bt;gt++){let ne=n.get(st[gt]);ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Vt(P)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let gt=0;gt<st.length;gt++){let bt=st[gt];q.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[gt]);let ne=r.convert(bt.format,bt.colorSpace),lt=r.convert(bt.type),yt=v(bt.internalFormat,ne,lt,bt.colorSpace,P.isXRRenderTarget===!0),kt=re(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,yt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,q.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,E);for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0)for(let bt=0;bt<E.mipmaps.length;bt++)Ct(q.__webglFramebuffer[gt][bt],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,bt);else Ct(q.__webglFramebuffer[gt],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);d(E)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let gt=0,bt=st.length;gt<bt;gt++){let ne=st[gt],lt=n.get(ne);e.bindTexture(i.TEXTURE_2D,lt.__webglTexture),Zt(i.TEXTURE_2D,ne),Ct(q.__webglFramebuffer,P,ne,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),d(ne)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(gt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,tt.__webglTexture),Zt(gt,E),E.mipmaps&&E.mipmaps.length>0)for(let bt=0;bt<E.mipmaps.length;bt++)Ct(q.__webglFramebuffer[bt],P,E,i.COLOR_ATTACHMENT0,gt,bt);else Ct(q.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,gt,0);d(E)&&u(gt),e.unbindTexture()}P.depthBuffer&&Jt(P)}function le(P){let E=P.textures;for(let q=0,tt=E.length;q<tt;q++){let st=E[q];if(d(st)){let Q=x(P),Lt=n.get(st).__webglTexture;e.bindTexture(Q,Lt),u(Q),e.unbindTexture()}}}let ue=[],z=[];function tn(P){if(P.samples>0){if(Vt(P)===!1){let E=P.textures,q=P.width,tt=P.height,st=i.COLOR_BUFFER_BIT,Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(P),gt=E.length>1;if(gt)for(let bt=0;bt<E.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let bt=0;bt<E.length;bt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[bt]);let ne=n.get(E[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,q,tt,0,0,q,tt,st,i.NEAREST),l===!0&&(ue.length=0,z.length=0,ue.push(i.COLOR_ATTACHMENT0+bt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ue.push(Q),z.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let bt=0;bt<E.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[bt]);let ne=n.get(E[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,ne,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function re(P){return Math.min(s.maxSamples,P.samples)}function Vt(P){let E=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Nt(P){let E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function ve(P,E){let q=P.colorSpace,tt=P.format,st=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==cr&&q!==ni&&(me.getTransfer(q)===we?(tt!==dn||st!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}function Bt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=$t,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Vt}function zx(i,t){function e(n,s=ni){let r,o=me.getTransfer(s);if(n===Mi)return i.UNSIGNED_BYTE;if(n===Kc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vu)return i.BYTE;if(n===Gu)return i.SHORT;if(n===Vr)return i.UNSIGNED_SHORT;if(n===Jc)return i.INT;if(n===gs)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===pn)return i.HALF_FLOAT;if(n===Xu)return i.ALPHA;if(n===qu)return i.RGB;if(n===dn)return i.RGBA;if(n===Yu)return i.LUMINANCE;if(n===Zu)return i.LUMINANCE_ALPHA;if(n===Zs)return i.DEPTH_COMPONENT;if(n===nr)return i.DEPTH_STENCIL;if(n===Qr)return i.RED;if(n===jc)return i.RED_INTEGER;if(n===$u)return i.RG;if(n===th)return i.RG_INTEGER;if(n===eh)return i.RGBA_INTEGER;if(n===qo||n===Yo||n===Zo||n===$o)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zl||n===kl||n===Hl||n===Vl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gl||n===Wl||n===Xl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gl||n===Wl)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ql||n===Yl||n===Zl||n===$l||n===Jl||n===Kl||n===Ql||n===jl||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ql)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$l)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ec)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ic)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jo||n===oc||n===ac)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Jo)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ju||n===lc||n===cc||n===hc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ec=class extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Xn=class extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},kx={type:"move"},zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let d=e.getJointPose(y,n),u=this._getHandJoint(c,y);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],m=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&m>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Xn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Hx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,wc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new xn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ne({vertexShader:Hx,fragmentShader:Vx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tc=class extends Wi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,m=null,p=null,g=null,y=new wc,d=e.getContextAttributes(),u=null,x=null,v=[],_=[],C=new ot,A=null,T=new on;T.viewport=new Te;let b=new on;b.viewport=new Te;let M=[T,b],S=new Ec,I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ht=v[K];return ht===void 0&&(ht=new zr,v[K]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(K){let ht=v[K];return ht===void 0&&(ht=new zr,v[K]=ht),ht.getGripSpace()},this.getHand=function(K){let ht=v[K];return ht===void 0&&(ht=new zr,v[K]=ht),ht.getHandSpace()};function R(K){let ht=_.indexOf(K.inputSource);if(ht===-1)return;let Ct=v[ht];Ct!==void 0&&(Ct.update(K.inputSource,K.frame,c||o),Ct.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",G);for(let K=0;K<v.length;K++){let ht=_[K];ht!==null&&(_[K]=null,v[K].disconnect(ht))}I=null,F=null,y.reset(),t.setRenderTarget(u),p=null,m=null,f=null,s=null,x=null,xe.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",V),s.addEventListener("inputsourceschange",G),d.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let ht={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new en(p.framebufferWidth,p.framebufferHeight,{format:dn,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let ht=null,Ct=null,pt=null;d.depth&&(pt=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=d.stencil?nr:Zs,Ct=d.stencil?er:gs);let zt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};f=new XRWebGLBinding(s,e),m=f.createProjectionLayer(zt),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),x=new en(m.textureWidth,m.textureHeight,{format:dn,type:Mi,depthTexture:new la(m.textureWidth,m.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),xe.setContext(s),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(K){for(let ht=0;ht<K.removed.length;ht++){let Ct=K.removed[ht],pt=_.indexOf(Ct);pt>=0&&(_[pt]=null,v[pt].disconnect(Ct))}for(let ht=0;ht<K.added.length;ht++){let Ct=K.added[ht],pt=_.indexOf(Ct);if(pt===-1){for(let Jt=0;Jt<v.length;Jt++)if(Jt>=_.length){_.push(Ct),pt=Jt;break}else if(_[Jt]===null){_[Jt]=Ct,pt=Jt;break}if(pt===-1)break}let zt=v[pt];zt&&zt.connect(Ct)}}let W=new U,Y=new U;function H(K,ht,Ct){W.setFromMatrixPosition(ht.matrixWorld),Y.setFromMatrixPosition(Ct.matrixWorld);let pt=W.distanceTo(Y),zt=ht.projectionMatrix.elements,Jt=Ct.projectionMatrix.elements,$t=zt[14]/(zt[10]-1),Le=zt[14]/(zt[10]+1),le=(zt[9]+1)/zt[5],ue=(zt[9]-1)/zt[5],z=(zt[8]-1)/zt[0],tn=(Jt[8]+1)/Jt[0],re=$t*z,Vt=$t*tn,Nt=pt/(-z+tn),ve=Nt*-z;if(ht.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ve),K.translateZ(Nt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),zt[10]===-1)K.projectionMatrix.copy(ht.projectionMatrix),K.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let Bt=$t+Nt,P=Le+Nt,E=re-ve,q=Vt+(pt-ve),tt=le*Le/P*Bt,st=ue*Le/P*Bt;K.projectionMatrix.makePerspective(E,q,tt,st,Bt,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function it(K,ht){ht===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ht.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ht=K.near,Ct=K.far;y.texture!==null&&(y.depthNear>0&&(ht=y.depthNear),y.depthFar>0&&(Ct=y.depthFar)),S.near=b.near=T.near=ht,S.far=b.far=T.far=Ct,(I!==S.near||F!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,F=S.far),T.layers.mask=K.layers.mask|2,b.layers.mask=K.layers.mask|4,S.layers.mask=T.layers.mask|b.layers.mask;let pt=K.parent,zt=S.cameras;it(S,pt);for(let Jt=0;Jt<zt.length;Jt++)it(zt[Jt],pt);zt.length===2?H(S,T,b):S.projectionMatrix.copy(T.projectionMatrix),ct(K,S,pt)};function ct(K,ht,Ct){Ct===null?K.matrix.copy(ht.matrixWorld):(K.matrix.copy(Ct.matrixWorld),K.matrix.invert(),K.matrix.multiply(ht.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ht.projectionMatrix),K.projectionMatrixInverse.copy(ht.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Gr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(m===null&&p===null))return l},this.setFoveation=function(K){l=K,m!==null&&(m.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let vt=null;function Zt(K,ht){if(h=ht.getViewerPose(c||o),g=ht,h!==null){let Ct=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let pt=!1;Ct.length!==S.cameras.length&&(S.cameras.length=0,pt=!0);for(let Jt=0;Jt<Ct.length;Jt++){let $t=Ct[Jt],Le=null;if(p!==null)Le=p.getViewport($t);else{let ue=f.getViewSubImage(m,$t);Le=ue.viewport,Jt===0&&(t.setRenderTargetTextures(x,ue.colorTexture,m.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(x))}let le=M[Jt];le===void 0&&(le=new on,le.layers.enable(Jt),le.viewport=new Te,M[Jt]=le),le.matrix.fromArray($t.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray($t.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Le.x,Le.y,Le.width,Le.height),Jt===0&&(S.matrix.copy(le.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pt===!0&&S.cameras.push(le)}let zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){let Jt=f.getDepthInformation(Ct[0]);Jt&&Jt.isValid&&Jt.texture&&y.init(t,Jt,s.renderState)}}for(let Ct=0;Ct<v.length;Ct++){let pt=_[Ct],zt=v[Ct];pt!==null&&zt!==void 0&&zt.update(pt,ht,c||o)}vt&&vt(K,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),g=null}let xe=new nf;xe.setAnimationLoop(Zt),this.setAnimationLoop=function(K){vt=K},this.dispose=function(){}}},cs=new Ge,Gx=new se;function Wx(i,t){function e(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function n(d,u){u.color.getRGB(d.fogColor.value,ef(i)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function s(d,u,x,v,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(d,u):u.isMeshToonMaterial?(r(d,u),f(d,u)):u.isMeshPhongMaterial?(r(d,u),h(d,u)):u.isMeshStandardMaterial?(r(d,u),m(d,u),u.isMeshPhysicalMaterial&&p(d,u,_)):u.isMeshMatcapMaterial?(r(d,u),g(d,u)):u.isMeshDepthMaterial?r(d,u):u.isMeshDistanceMaterial?(r(d,u),y(d,u)):u.isMeshNormalMaterial?r(d,u):u.isLineBasicMaterial?(o(d,u),u.isLineDashedMaterial&&a(d,u)):u.isPointsMaterial?l(d,u,x,v):u.isSpriteMaterial?c(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,e(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===an&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,e(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===an&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,e(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,e(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);let x=t.get(u),v=x.envMap,_=x.envMapRotation;v&&(d.envMap.value=v,cs.copy(_),cs.x*=-1,cs.y*=-1,cs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),d.envMapRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(cs)),d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap&&(d.lightMap.value=u.lightMap,d.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,d.lightMapTransform)),u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,d.aoMapTransform))}function o(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform))}function a(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function l(d,u,x,v){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*x,d.scale.value=v*.5,u.map&&(d.map.value=u.map,e(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function c(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function h(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function f(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function m(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,d.roughnessMapTransform)),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function p(d,u,x){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===an&&d.clearcoatNormalScale.value.negate())),u.dispersion>0&&(d.dispersion.value=u.dispersion),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,u){u.matcap&&(d.matcap.value=u.matcap)}function y(d,u){let x=t.get(u).light;d.referencePosition.value.setFromMatrixPosition(x.matrixWorld),d.nearDistance.value=x.shadow.camera.near,d.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){let _=v.program;n.uniformBlockBinding(x,_)}function c(x,v){let _=s[x.id];_===void 0&&(g(x),_=h(x),s[x.id]=_,x.addEventListener("dispose",d));let C=v.program;n.updateUBOMapping(x,C);let A=t.render.frame;r[x.id]!==A&&(m(x),r[x.id]=A)}function h(x){let v=f();x.__bindingPointIndex=v;let _=i.createBuffer(),C=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(x){let v=s[x.id],_=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,T=_.length;A<T;A++){let b=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,S=b.length;M<S;M++){let I=b[M];if(p(I,A,M,C)===!0){let F=I.__offset,R=Array.isArray(I.value)?I.value:[I.value],V=0;for(let G=0;G<R.length;G++){let W=R[G],Y=y(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,F+V,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,V),V+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,v,_,C){let A=x.value,T=v+"_"+_;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{let b=C[T];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return C[T]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function g(x){let v=x.uniforms,_=0,C=16;for(let T=0,b=v.length;T<b;T++){let M=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,I=M.length;S<I;S++){let F=M[S],R=Array.isArray(F.value)?F.value:[F.value];for(let V=0,G=R.length;V<G;V++){let W=R[V],Y=y(W),H=_%C,it=H%Y.boundary,ct=H+it;_+=it,ct!==0&&C-ct<Y.storage&&(_+=C-ct),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=Y.storage}}}let A=_%C;return A>0&&(_+=C-A),x.__size=_,x.__cache={},this}function y(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function d(x){let v=x.target;v.removeEventListener("dispose",d);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function u(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var ca=class{constructor(t={}){let{canvas:e=Yd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:m=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),y=new Int32Array(4),d=null,u=null,x=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=ri,this.toneMappingExposure=1;let _=this,C=!1,A=0,T=0,b=null,M=-1,S=null,I=new Te,F=new Te,R=null,V=new Tt(0),G=0,W=e.width,Y=e.height,H=1,it=null,ct=null,vt=new Te(0,0,W,Y),Zt=new Te(0,0,W,Y),xe=!1,K=new Wr,ht=!1,Ct=!1,pt=new se,zt=new se,Jt=new U,$t=new Te,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},le=!1;function ue(){return b===null?H:1}let z=n;function tn(w,O){return e.getContext(w,O)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",xt,!1),z===null){let O="webgl2";if(z=tn(O,w),z===null)throw tn(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let re,Vt,Nt,ve,Bt,P,E,q,tt,st,Q,Lt,gt,bt,ne,lt,yt,kt,Xt,Et,Pt,Wt,pe,B;function mt(){re=new ag(z),re.init(),Wt=new zx(z,re),Vt=new eg(z,re,t,Wt),Nt=new Fx(z,re),Vt.reverseDepthBuffer&&m&&Nt.buffers.depth.setReversed(!0),ve=new hg(z),Bt=new bx,P=new Bx(z,re,Nt,Bt,Vt,Wt,ve),E=new ig(_),q=new og(_),tt=new xp(z),pe=new j0(z,tt),st=new lg(z,tt,ve,pe),Q=new fg(z,st,tt,ve),Xt=new ug(z,Vt,P),lt=new ng(Bt),Lt=new Sx(_,E,q,re,Vt,pe,lt),gt=new Wx(_,Bt),bt=new wx,ne=new Ix(re),kt=new Q0(_,E,q,Nt,Q,p,l),yt=new Ux(_,Q,Vt),B=new Xx(z,ve,Vt,Nt),Et=new tg(z,re,ve),Pt=new cg(z,re,ve),ve.programs=Lt.programs,_.capabilities=Vt,_.extensions=re,_.properties=Bt,_.renderLists=bt,_.shadowMap=yt,_.state=Nt,_.info=ve}mt();let $=new Tc(_,z);this.xr=$,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let w=re.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=re.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(W,Y,!1))},this.getSize=function(w){return w.set(W,Y)},this.setSize=function(w,O,k=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,Y=O,e.width=Math.floor(w*H),e.height=Math.floor(O*H),k===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(W*H,Y*H).floor()},this.setDrawingBufferSize=function(w,O,k){W=w,Y=O,H=k,e.width=Math.floor(w*k),e.height=Math.floor(O*k),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(vt)},this.setViewport=function(w,O,k,L){w.isVector4?vt.set(w.x,w.y,w.z,w.w):vt.set(w,O,k,L),Nt.viewport(I.copy(vt).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(Zt)},this.setScissor=function(w,O,k,L){w.isVector4?Zt.set(w.x,w.y,w.z,w.w):Zt.set(w,O,k,L),Nt.scissor(F.copy(Zt).multiplyScalar(H).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(w){Nt.setScissorTest(xe=w)},this.setOpaqueSort=function(w){it=w},this.setTransparentSort=function(w){ct=w},this.getClearColor=function(w){return w.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(w=!0,O=!0,k=!0){let L=0;if(w){let D=!1;if(b!==null){let Z=b.texture.format;D=Z===eh||Z===th||Z===jc}if(D){let Z=b.texture.type,rt=Z===Mi||Z===gs||Z===Vr||Z===er||Z===Kc||Z===Qc,St=kt.getClearColor(),wt=kt.getClearAlpha(),Gt=St.r,qt=St.g,Rt=St.b;rt?(g[0]=Gt,g[1]=qt,g[2]=Rt,g[3]=wt,z.clearBufferuiv(z.COLOR,0,g)):(y[0]=Gt,y[1]=qt,y[2]=Rt,y[3]=wt,z.clearBufferiv(z.COLOR,0,y))}else L|=z.COLOR_BUFFER_BIT}O&&(L|=z.DEPTH_BUFFER_BIT),k&&(L|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),bt.dispose(),ne.dispose(),Bt.dispose(),E.dispose(),q.dispose(),Q.dispose(),pe.dispose(),B.dispose(),Lt.dispose(),$.dispose(),$.removeEventListener("sessionstart",Cs),$.removeEventListener("sessionend",vo),ti.stop()};function et(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let w=ve.autoReset,O=yt.enabled,k=yt.autoUpdate,L=yt.needsUpdate,D=yt.type;mt(),ve.autoReset=w,yt.enabled=O,yt.autoUpdate=k,yt.needsUpdate=L,yt.type=D}function xt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ft(w){let O=w.target;O.removeEventListener("dispose",Ft),be(O)}function be(w){Be(w),Bt.remove(w)}function Be(w){let O=Bt.get(w).programs;O!==void 0&&(O.forEach(function(k){Lt.releaseProgram(k)}),w.isShaderMaterial&&Lt.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,k,L,D,Z){O===null&&(O=Le);let rt=D.isMesh&&D.matrixWorld.determinant()<0,St=Re(w,O,k,L,D);Nt.setMaterial(L,rt);let wt=k.index,Gt=1;if(L.wireframe===!0){if(wt=st.getWireframeAttribute(k),wt===void 0)return;Gt=2}let qt=k.drawRange,Rt=k.attributes.position,Kt=qt.start*Gt,Ee=(qt.start+qt.count)*Gt;Z!==null&&(Kt=Math.max(Kt,Z.start*Gt),Ee=Math.min(Ee,(Z.start+Z.count)*Gt)),wt!==null?(Kt=Math.max(Kt,0),Ee=Math.min(Ee,wt.count)):Rt!=null&&(Kt=Math.max(Kt,0),Ee=Math.min(Ee,Rt.count));let Pe=Ee-Kt;if(Pe<0||Pe===1/0)return;pe.setup(D,L,St,k,wt);let Ye,fe=Et;if(wt!==null&&(Ye=tt.get(wt),fe=Pt,fe.setIndex(Ye)),D.isMesh)L.wireframe===!0?(Nt.setLineWidth(L.wireframeLinewidth*ue()),fe.setMode(z.LINES)):fe.setMode(z.TRIANGLES);else if(D.isLine){let It=L.linewidth;It===void 0&&(It=1),Nt.setLineWidth(It*ue()),D.isLineSegments?fe.setMode(z.LINES):D.isLineLoop?fe.setMode(z.LINE_LOOP):fe.setMode(z.LINE_STRIP)}else D.isPoints?fe.setMode(z.POINTS):D.isSprite&&fe.setMode(z.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)fe.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))fe.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let It=D._multiDrawStarts,hi=D._multiDrawCounts,ye=D._multiDrawCount,Hn=wt?tt.get(wt).bytesPerElement:1,Ps=Bt.get(L).currentProgram.getUniforms();for(let bn=0;bn<ye;bn++)Ps.setValue(z,"_gl_DrawID",bn),fe.render(It[bn]/Hn,hi[bn])}else if(D.isInstancedMesh)fe.renderInstances(Kt,Pe,D.count);else if(k.isInstancedBufferGeometry){let It=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,hi=Math.min(k.instanceCount,It);fe.renderInstances(Kt,Pe,hi)}else fe.render(Kt,Pe)};function ce(w,O,k){w.transparent===!0&&w.side===Fe&&w.forceSinglePass===!1?(w.side=an,w.needsUpdate=!0,At(w,O,k),w.side=Vi,w.needsUpdate=!0,At(w,O,k),w.side=Fe):At(w,O,k)}this.compile=function(w,O,k=null){k===null&&(k=w),u=ne.get(k),u.init(O),v.push(u),k.traverseVisible(function(D){D.isLight&&D.layers.test(O.layers)&&(u.pushLight(D),D.castShadow&&u.pushShadow(D))}),w!==k&&w.traverseVisible(function(D){D.isLight&&D.layers.test(O.layers)&&(u.pushLight(D),D.castShadow&&u.pushShadow(D))}),u.setupLights();let L=new Set;return w.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let Z=D.material;if(Z)if(Array.isArray(Z))for(let rt=0;rt<Z.length;rt++){let St=Z[rt];ce(St,k,D),L.add(St)}else ce(Z,k,D),L.add(Z)}),v.pop(),u=null,L},this.compileAsync=function(w,O,k=null){let L=this.compile(w,O,k);return new Promise(D=>{function Z(){if(L.forEach(function(rt){Bt.get(rt).currentProgram.isReady()&&L.delete(rt)}),L.size===0){D(w);return}setTimeout(Z,10)}re.get("KHR_parallel_shader_compile")!==null?Z():setTimeout(Z,10)})};let gn=null;function Sn(w){gn&&gn(w)}function Cs(){ti.stop()}function vo(){ti.start()}let ti=new nf;ti.setAnimationLoop(Sn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(w){gn=w,$.setAnimationLoop(w),w===null?ti.stop():ti.start()},$.addEventListener("sessionstart",Cs),$.addEventListener("sessionend",vo),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(O),O=$.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,O,b),u=ne.get(w,v.length),u.init(O),v.push(u),zt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),K.setFromProjectionMatrix(zt),Ct=this.localClippingEnabled,ht=lt.init(this.clippingPlanes,Ct),d=bt.get(w,x.length),d.init(),x.push(d),$.enabled===!0&&$.isPresenting===!0){let Z=_.xr.getDepthSensingMesh();Z!==null&&N(Z,O,-1/0,_.sortObjects)}N(w,O,0,_.sortObjects),d.finish(),_.sortObjects===!0&&d.sort(it,ct),le=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,le&&kt.addToRenderList(d,w),this.info.render.frame++,ht===!0&&lt.beginShadows();let k=u.state.shadowsArray;yt.render(k,w,O),ht===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();let L=d.opaque,D=d.transmissive;if(u.setupLights(),O.isArrayCamera){let Z=O.cameras;if(D.length>0)for(let rt=0,St=Z.length;rt<St;rt++){let wt=Z[rt];ft(L,D,w,wt)}le&&kt.render(w);for(let rt=0,St=Z.length;rt<St;rt++){let wt=Z[rt];j(d,w,wt,wt.viewport)}}else D.length>0&&ft(L,D,w,O),le&&kt.render(w),j(d,w,O);b!==null&&(P.updateMultisampleRenderTarget(b),P.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(_,w,O),pe.resetDefaultState(),M=-1,S=null,v.pop(),v.length>0?(u=v[v.length-1],ht===!0&&lt.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,x.pop(),x.length>0?d=x[x.length-1]:d=null};function N(w,O,k,L){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){L&&$t.setFromMatrixPosition(w.matrixWorld).applyMatrix4(zt);let rt=Q.update(w),St=w.material;St.visible&&d.push(w,rt,St,k,$t.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){let rt=Q.update(w),St=w.material;if(L&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),$t.copy(w.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),$t.copy(rt.boundingSphere.center)),$t.applyMatrix4(w.matrixWorld).applyMatrix4(zt)),Array.isArray(St)){let wt=rt.groups;for(let Gt=0,qt=wt.length;Gt<qt;Gt++){let Rt=wt[Gt],Kt=St[Rt.materialIndex];Kt&&Kt.visible&&d.push(w,rt,Kt,k,$t.z,Rt)}}else St.visible&&d.push(w,rt,St,k,$t.z,null)}}let Z=w.children;for(let rt=0,St=Z.length;rt<St;rt++)N(Z[rt],O,k,L)}function j(w,O,k,L){let D=w.opaque,Z=w.transmissive,rt=w.transparent;u.setupLightsView(k),ht===!0&&lt.setGlobalState(_.clippingPlanes,k),L&&Nt.viewport(I.copy(L)),D.length>0&&Ut(D,O,k),Z.length>0&&Ut(Z,O,k),rt.length>0&&Ut(rt,O,k),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function ft(w,O,k,L){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[L.id]===void 0&&(u.state.transmissionRenderTarget[L.id]=new en(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?pn:Mi,minFilter:ms,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));let Z=u.state.transmissionRenderTarget[L.id],rt=L.viewport||I;Z.setSize(rt.z,rt.w);let St=_.getRenderTarget();_.setRenderTarget(Z),_.getClearColor(V),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),le&&kt.render(k);let wt=_.toneMapping;_.toneMapping=ri;let Gt=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),u.setupLightsView(L),ht===!0&&lt.setGlobalState(_.clippingPlanes,L),Ut(w,k,L),P.updateMultisampleRenderTarget(Z),P.updateRenderTargetMipmap(Z),re.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Rt=0,Kt=O.length;Rt<Kt;Rt++){let Ee=O[Rt],Pe=Ee.object,Ye=Ee.geometry,fe=Ee.material,It=Ee.group;if(fe.side===Fe&&Pe.layers.test(L.layers)){let hi=fe.side;fe.side=an,fe.needsUpdate=!0,Ot(Pe,k,L,Ye,fe,It),fe.side=hi,fe.needsUpdate=!0,qt=!0}}qt===!0&&(P.updateMultisampleRenderTarget(Z),P.updateRenderTargetMipmap(Z))}_.setRenderTarget(St),_.setClearColor(V,G),Gt!==void 0&&(L.viewport=Gt),_.toneMapping=wt}function Ut(w,O,k){let L=O.isScene===!0?O.overrideMaterial:null;for(let D=0,Z=w.length;D<Z;D++){let rt=w[D],St=rt.object,wt=rt.geometry,Gt=L===null?rt.material:L,qt=rt.group;St.layers.test(k.layers)&&Ot(St,O,k,wt,Gt,qt)}}function Ot(w,O,k,L,D,Z){w.onBeforeRender(_,O,k,L,D,Z),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),D.onBeforeRender(_,O,k,L,w,Z),D.transparent===!0&&D.side===Fe&&D.forceSinglePass===!1?(D.side=an,D.needsUpdate=!0,_.renderBufferDirect(k,O,L,D,w,Z),D.side=Vi,D.needsUpdate=!0,_.renderBufferDirect(k,O,L,D,w,Z),D.side=Fe):_.renderBufferDirect(k,O,L,D,w,Z),w.onAfterRender(_,O,k,L,D,Z)}function At(w,O,k){O.isScene!==!0&&(O=Le);let L=Bt.get(w),D=u.state.lights,Z=u.state.shadowsArray,rt=D.state.version,St=Lt.getParameters(w,D.state,Z,O,k),wt=Lt.getProgramCacheKey(St),Gt=L.programs;L.environment=w.isMeshStandardMaterial?O.environment:null,L.fog=O.fog,L.envMap=(w.isMeshStandardMaterial?q:E).get(w.envMap||L.environment),L.envMapRotation=L.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Gt===void 0&&(w.addEventListener("dispose",Ft),Gt=new Map,L.programs=Gt);let qt=Gt.get(wt);if(qt!==void 0){if(L.currentProgram===qt&&L.lightsStateVersion===rt)return ie(w,St),qt}else St.uniforms=Lt.getUniforms(w),w.onBeforeCompile(St,_),qt=Lt.acquireProgram(St,wt),Gt.set(wt,qt),L.uniforms=St.uniforms;let Rt=L.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Rt.clippingPlanes=lt.uniform),ie(w,St),L.needsLights=Mt(w),L.lightsStateVersion=rt,L.needsLights&&(Rt.ambientLightColor.value=D.state.ambient,Rt.lightProbe.value=D.state.probe,Rt.directionalLights.value=D.state.directional,Rt.directionalLightShadows.value=D.state.directionalShadow,Rt.spotLights.value=D.state.spot,Rt.spotLightShadows.value=D.state.spotShadow,Rt.rectAreaLights.value=D.state.rectArea,Rt.ltc_1.value=D.state.rectAreaLTC1,Rt.ltc_2.value=D.state.rectAreaLTC2,Rt.pointLights.value=D.state.point,Rt.pointLightShadows.value=D.state.pointShadow,Rt.hemisphereLights.value=D.state.hemi,Rt.directionalShadowMap.value=D.state.directionalShadowMap,Rt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Rt.spotShadowMap.value=D.state.spotShadowMap,Rt.spotLightMatrix.value=D.state.spotLightMatrix,Rt.spotLightMap.value=D.state.spotLightMap,Rt.pointShadowMap.value=D.state.pointShadowMap,Rt.pointShadowMatrix.value=D.state.pointShadowMatrix),L.currentProgram=qt,L.uniformsList=null,qt}function jt(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=Js.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function ie(w,O){let k=Bt.get(w);k.outputColorSpace=O.outputColorSpace,k.batching=O.batching,k.batchingColor=O.batchingColor,k.instancing=O.instancing,k.instancingColor=O.instancingColor,k.instancingMorph=O.instancingMorph,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function Re(w,O,k,L,D){O.isScene!==!0&&(O=Le),P.resetTextureUnits();let Z=O.fog,rt=L.isMeshStandardMaterial?O.environment:null,St=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:cr,wt=(L.isMeshStandardMaterial?q:E).get(L.envMap||rt),Gt=L.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,qt=!!k.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),Rt=!!k.morphAttributes.position,Kt=!!k.morphAttributes.normal,Ee=!!k.morphAttributes.color,Pe=ri;L.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Pe=_.toneMapping);let Ye=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,fe=Ye!==void 0?Ye.length:0,It=Bt.get(L),hi=u.state.lights;if(ht===!0&&(Ct===!0||w!==S)){let Dn=w===S&&L.id===M;lt.setState(L,w,Dn)}let ye=!1;L.version===It.__version?(It.needsLights&&It.lightsStateVersion!==hi.state.version||It.outputColorSpace!==St||D.isBatchedMesh&&It.batching===!1||!D.isBatchedMesh&&It.batching===!0||D.isBatchedMesh&&It.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&It.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&It.instancing===!1||!D.isInstancedMesh&&It.instancing===!0||D.isSkinnedMesh&&It.skinning===!1||!D.isSkinnedMesh&&It.skinning===!0||D.isInstancedMesh&&It.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&It.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&It.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&It.instancingMorph===!1&&D.morphTexture!==null||It.envMap!==wt||L.fog===!0&&It.fog!==Z||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==lt.numPlanes||It.numIntersection!==lt.numIntersection)||It.vertexAlphas!==Gt||It.vertexTangents!==qt||It.morphTargets!==Rt||It.morphNormals!==Kt||It.morphColors!==Ee||It.toneMapping!==Pe||It.morphTargetsCount!==fe)&&(ye=!0):(ye=!0,It.__version=L.version);let Hn=It.currentProgram;ye===!0&&(Hn=At(L,O,D));let Ps=!1,bn=!1,Tr=!1,De=Hn.getUniforms(),ei=It.uniforms;if(Nt.useProgram(Hn.program)&&(Ps=!0,bn=!0,Tr=!0),L.id!==M&&(M=L.id,bn=!0),Ps||S!==w){Nt.buffers.depth.getReversed()?(pt.copy(w.projectionMatrix),$d(pt),Jd(pt),De.setValue(z,"projectionMatrix",pt)):De.setValue(z,"projectionMatrix",w.projectionMatrix),De.setValue(z,"viewMatrix",w.matrixWorldInverse);let Di=De.map.cameraPosition;Di!==void 0&&Di.setValue(z,Jt.setFromMatrixPosition(w.matrixWorld)),Vt.logarithmicDepthBuffer&&De.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&De.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,bn=!0,Tr=!0)}if(D.isSkinnedMesh){De.setOptional(z,D,"bindMatrix"),De.setOptional(z,D,"bindMatrixInverse");let Dn=D.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),De.setValue(z,"boneTexture",Dn.boneTexture,P))}D.isBatchedMesh&&(De.setOptional(z,D,"batchingTexture"),De.setValue(z,"batchingTexture",D._matricesTexture,P),De.setOptional(z,D,"batchingIdTexture"),De.setValue(z,"batchingIdTexture",D._indirectTexture,P),De.setOptional(z,D,"batchingColorTexture"),D._colorsTexture!==null&&De.setValue(z,"batchingColorTexture",D._colorsTexture,P));let Ar=k.morphAttributes;if((Ar.position!==void 0||Ar.normal!==void 0||Ar.color!==void 0)&&Xt.update(D,k,Hn),(bn||It.receiveShadow!==D.receiveShadow)&&(It.receiveShadow=D.receiveShadow,De.setValue(z,"receiveShadow",D.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(ei.envMap.value=wt,ei.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),L.isMeshStandardMaterial&&L.envMap===null&&O.environment!==null&&(ei.envMapIntensity.value=O.environmentIntensity),bn&&(De.setValue(z,"toneMappingExposure",_.toneMappingExposure),It.needsLights&&Ce(ei,Tr),Z&&L.fog===!0&&gt.refreshFogUniforms(ei,Z),gt.refreshMaterialUniforms(ei,L,H,Y,u.state.transmissionRenderTarget[w.id]),Js.upload(z,jt(It),ei,P)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(Js.upload(z,jt(It),ei,P),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&De.setValue(z,"center",D.center),De.setValue(z,"modelViewMatrix",D.modelViewMatrix),De.setValue(z,"normalMatrix",D.normalMatrix),De.setValue(z,"modelMatrix",D.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){let Dn=L.uniformsGroups;for(let Di=0,Ui=Dn.length;Di<Ui;Di++){let Ch=Dn[Di];B.update(Ch,Hn),B.bind(Ch,Hn)}}return Hn}function Ce(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Mt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,O,k){Bt.get(w.texture).__webglTexture=O,Bt.get(w.depthTexture).__webglTexture=k;let L=Bt.get(w);L.__hasExternalTextures=!0,L.__autoAllocateDepthBuffer=k===void 0,L.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){let k=Bt.get(w);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,k=0){b=w,A=O,T=k;let L=!0,D=null,Z=!1,rt=!1;if(w){let wt=Bt.get(w);if(wt.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(z.FRAMEBUFFER,null),L=!1;else if(wt.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(wt.__hasExternalTextures)P.rebindTextures(w,Bt.get(w.texture).__webglTexture,Bt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Rt=w.depthTexture;if(wt.__boundDepthTexture!==Rt){if(Rt!==null&&Bt.has(Rt)&&(w.width!==Rt.image.width||w.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}let Gt=w.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(rt=!0);let qt=Bt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qt[O])?D=qt[O][k]:D=qt[O],Z=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?D=Bt.get(w).__webglMultisampledFramebuffer:Array.isArray(qt)?D=qt[k]:D=qt,I.copy(w.viewport),F.copy(w.scissor),R=w.scissorTest}else I.copy(vt).multiplyScalar(H).floor(),F.copy(Zt).multiplyScalar(H).floor(),R=xe;if(Nt.bindFramebuffer(z.FRAMEBUFFER,D)&&L&&Nt.drawBuffers(w,D),Nt.viewport(I),Nt.scissor(F),Nt.setScissorTest(R),Z){let wt=Bt.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,wt.__webglTexture,k)}else if(rt){let wt=Bt.get(w.texture),Gt=O||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,wt.__webglTexture,k||0,Gt)}M=-1},this.readRenderTargetPixels=function(w,O,k,L,D,Z,rt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&rt!==void 0&&(St=St[rt]),St){Nt.bindFramebuffer(z.FRAMEBUFFER,St);try{let wt=w.texture,Gt=wt.format,qt=wt.type;if(!Vt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-L&&k>=0&&k<=w.height-D&&z.readPixels(O,k,L,D,Wt.convert(Gt),Wt.convert(qt),Z)}finally{let wt=b!==null?Bt.get(b).__webglFramebuffer:null;Nt.bindFramebuffer(z.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(w,O,k,L,D,Z,rt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&rt!==void 0&&(St=St[rt]),St){let wt=w.texture,Gt=wt.format,qt=wt.type;if(!Vt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-L&&k>=0&&k<=w.height-D){Nt.bindFramebuffer(z.FRAMEBUFFER,St);let Rt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Rt),z.bufferData(z.PIXEL_PACK_BUFFER,Z.byteLength,z.STREAM_READ),z.readPixels(O,k,L,D,Wt.convert(Gt),Wt.convert(qt),0);let Kt=b!==null?Bt.get(b).__webglFramebuffer:null;Nt.bindFramebuffer(z.FRAMEBUFFER,Kt);let Ee=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Zd(z,Ee,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Rt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Z),z.deleteBuffer(Rt),z.deleteSync(Ee),Z}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,k=0){w.isTexture!==!0&&(Nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);let L=Math.pow(2,-k),D=Math.floor(w.image.width*L),Z=Math.floor(w.image.height*L),rt=O!==null?O.x:0,St=O!==null?O.y:0;P.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,k,0,0,rt,St,D,Z),Nt.unbindTexture()},this.copyTextureToTexture=function(w,O,k=null,L=null,D=0){w.isTexture!==!0&&(Nr("WebGLRenderer: copyTextureToTexture function signature has changed."),L=arguments[0]||null,w=arguments[1],O=arguments[2],D=arguments[3]||0,k=null);let Z,rt,St,wt,Gt,qt,Rt,Kt,Ee,Pe=w.isCompressedTexture?w.mipmaps[D]:w.image;k!==null?(Z=k.max.x-k.min.x,rt=k.max.y-k.min.y,St=k.isBox3?k.max.z-k.min.z:1,wt=k.min.x,Gt=k.min.y,qt=k.isBox3?k.min.z:0):(Z=Pe.width,rt=Pe.height,St=Pe.depth||1,wt=0,Gt=0,qt=0),L!==null?(Rt=L.x,Kt=L.y,Ee=L.z):(Rt=0,Kt=0,Ee=0);let Ye=Wt.convert(O.format),fe=Wt.convert(O.type),It;O.isData3DTexture?(P.setTexture3D(O,0),It=z.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(P.setTexture2DArray(O,0),It=z.TEXTURE_2D_ARRAY):(P.setTexture2D(O,0),It=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,O.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,O.unpackAlignment);let hi=z.getParameter(z.UNPACK_ROW_LENGTH),ye=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Hn=z.getParameter(z.UNPACK_SKIP_PIXELS),Ps=z.getParameter(z.UNPACK_SKIP_ROWS),bn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Pe.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pe.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,wt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Gt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,qt);let Tr=w.isDataArrayTexture||w.isData3DTexture,De=O.isDataArrayTexture||O.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let ei=Bt.get(w),Ar=Bt.get(O),Dn=Bt.get(ei.__renderTarget),Di=Bt.get(Ar.__renderTarget);Nt.bindFramebuffer(z.READ_FRAMEBUFFER,Dn.__webglFramebuffer),Nt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Ui=0;Ui<St;Ui++)Tr&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bt.get(w).__webglTexture,D,qt+Ui),w.isDepthTexture?(De&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bt.get(O).__webglTexture,D,Ee+Ui),z.blitFramebuffer(wt,Gt,Z,rt,Rt,Kt,Z,rt,z.DEPTH_BUFFER_BIT,z.NEAREST)):De?z.copyTexSubImage3D(It,D,Rt,Kt,Ee+Ui,wt,Gt,Z,rt):z.copyTexSubImage2D(It,D,Rt,Kt,Ee+Ui,wt,Gt,Z,rt);Nt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else De?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(It,D,Rt,Kt,Ee,Z,rt,St,Ye,fe,Pe.data):O.isCompressedArrayTexture?z.compressedTexSubImage3D(It,D,Rt,Kt,Ee,Z,rt,St,Ye,Pe.data):z.texSubImage3D(It,D,Rt,Kt,Ee,Z,rt,St,Ye,fe,Pe):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,D,Rt,Kt,Z,rt,Ye,fe,Pe.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,D,Rt,Kt,Pe.width,Pe.height,Ye,Pe.data):z.texSubImage2D(z.TEXTURE_2D,D,Rt,Kt,Z,rt,Ye,fe,Pe);z.pixelStorei(z.UNPACK_ROW_LENGTH,hi),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ye),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Hn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ps),z.pixelStorei(z.UNPACK_SKIP_IMAGES,bn),D===0&&O.generateMipmaps&&z.generateMipmap(It),Nt.unbindTexture()},this.copyTextureToTexture3D=function(w,O,k=null,L=null,D=0){return w.isTexture!==!0&&(Nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,L=arguments[1]||null,w=arguments[2],O=arguments[3],D=arguments[4]||0),Nr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,k,L,D)},this.initRenderTarget=function(w){Bt.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),Nt.unbindTexture()},this.resetState=function(){A=0,T=0,b=null,Nt.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}},ha=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var qr=class extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ge,this.environmentIntensity=1,this.environmentRotation=new Ge,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Yi=class extends xn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=An,h=An,f,m){super(null,o,a,l,c,h,s,r,f,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zi=class extends de{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Xs=new se,Pu=new se,Ho=[],Iu=new Si,qx=new se,Lr=new Me,Dr=new Xi,wi=class extends Me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xs),Iu.copy(t.boundingBox).applyMatrix4(Xs),this.boundingBox.union(Iu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xs),Dr.copy(t.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Dr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(n),t.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xs),Pu.multiplyMatrices(n,Xs),Lr.matrixWorld=Pu,Lr.raycast(t,Ho);for(let o=0,a=Ho.length;o<a;o++){let l=Ho[o];l.instanceId=r,l.object=this,e.push(l)}Ho.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Zi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yi(new Float32Array(s*this.count),s,this.count,Qr,ii));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ac=class extends bi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Lu=new se,Rc=new na,Vo=new Xi,Go=new U,ua=class extends ln{constructor(t=new _e,e=new Ac){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(s),Vo.radius+=r,t.ray.intersectsSphere(Vo)===!1)return;Lu.copy(s).invert(),Rc.copy(t.ray).applyMatrix4(Lu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let m=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=m,y=p;g<y;g++){let d=c.getX(g);Go.fromBufferAttribute(f,d),Du(Go,d,l,s,t,e,this)}}else{let m=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=m,y=p;g<y;g++)Go.fromBufferAttribute(f,g),Du(Go,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Du(i,t,e,n,s,r,o){let a=Rc.distanceSqToPoint(i);if(a<e){let l=new U;Rc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ti=class extends xn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],m=n[s+1]-h,p=(o-h)/m;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ot:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new U,s=[],r=[],o=[],a=new U,l=new se;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),m=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),m<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ve(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Ve(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Yr=class extends Nn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ot){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),m=l-this.aX,p=c-this.aY;l=m*h-p*f+this.aX,c=m*f+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Cc=class extends Yr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ah(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let m=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+f)+(l-a)/f;m*=h,p*=h,s(o,a,m,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Wo=new U,Sl=new ah,bl=new ah,El=new ah,Zr=class extends Nn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Wo.subVectors(s[0],s[1]).add(s[0]),c=Wo);let f=s[a%r],m=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Wo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Wo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),p),y=Math.pow(f.distanceToSquared(m),p),d=Math.pow(m.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),d<1e-4&&(d=y),Sl.initNonuniformCatmullRom(c.x,f.x,m.x,h.x,g,y,d),bl.initNonuniformCatmullRom(c.y,f.y,m.y,h.y,g,y,d),El.initNonuniformCatmullRom(c.z,f.z,m.z,h.z,g,y,d)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(c.x,f.x,m.x,h.x,this.tension),bl.initCatmullRom(c.y,f.y,m.y,h.y,this.tension),El.initCatmullRom(c.z,f.z,m.z,h.z,this.tension));return n.set(Sl.calc(l),bl.calc(l),El.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Uu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Yx(i,t){let e=1-i;return e*e*t}function Zx(i,t){return 2*(1-i)*i*t}function $x(i,t){return i*i*t}function kr(i,t,e,n){return Yx(i,t)+Zx(i,e)+$x(i,n)}function Jx(i,t){let e=1-i;return e*e*e*t}function Kx(i,t){let e=1-i;return 3*e*e*i*t}function Qx(i,t){return 3*(1-i)*i*i*t}function jx(i,t){return i*i*i*t}function Hr(i,t,e,n,s){return Jx(i,t)+Kx(i,e)+Qx(i,n)+jx(i,s)}var fa=class extends Nn{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hr(t,s.x,r.x,o.x,a.x),Hr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Pc=class extends Nn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hr(t,s.x,r.x,o.x,a.x),Hr(t,s.y,r.y,o.y,a.y),Hr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},da=class extends Nn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ic=class extends Nn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends Nn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(kr(t,s.x,r.x,o.x),kr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lc=class extends Nn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(kr(t,s.x,r.x,o.x),kr(t,s.y,r.y,o.y),kr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ma=class extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Uu(a,l.x,c.x,h.x,f.x),Uu(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ot().fromArray(s))}return this}},Nu=Object.freeze({__proto__:null,ArcCurve:Cc,CatmullRomCurve3:Zr,CubicBezierCurve:fa,CubicBezierCurve3:Pc,EllipseCurve:Yr,LineCurve:da,LineCurve3:Ic,QuadraticBezierCurve:pa,QuadraticBezierCurve3:Lc,SplineCurve:ma}),Dc=class extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Nu[s.type]().fromJSON(s))}return this}},Uc=class extends Dc{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new da(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new pa(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new fa(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ma(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Yr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},or=class i extends _e{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ve(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,f=new U,m=new ot,p=new U,g=new U,y=new U,d=0,u=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:d=t[x+1].x-t[x].x,u=t[x+1].y-t[x].y,p.x=u*1,p.y=-d,p.z=u*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:d=t[x+1].x-t[x].x,u=t[x+1].y-t[x].y,p.x=u*1,p.y=-d,p.z=u*0,g.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(g)}for(let x=0;x<=e;x++){let v=n+x*h*s,_=Math.sin(v),C=Math.cos(v);for(let A=0;A<=t.length-1;A++){f.x=t[A].x*_,f.y=t[A].y,f.z=t[A].x*C,o.push(f.x,f.y,f.z),m.x=x/e,m.y=A/(t.length-1),a.push(m.x,m.y);let T=l[3*A+0]*_,b=l[3*A+1],M=l[3*A+0]*C;c.push(T,b,M)}}for(let x=0;x<e;x++)for(let v=0;v<t.length-1;v++){let _=v+x*t.length,C=_,A=_+t.length,T=_+t.length+1,b=_+1;r.push(C,A,b),r.push(T,b,A)}this.setIndex(r),this.setAttribute("position",new Ht(o,3)),this.setAttribute("uv",new Ht(a,2)),this.setAttribute("normal",new Ht(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},ga=class i extends or{constructor(t=1,e=1,n=4,s=8){let r=new Uc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},xa=class i extends _e{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new U,h=new ot;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,m=3;f<=e;f++,m+=3){let p=n+f/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[m]/t+1)/2,h.y=(o[m+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Ht(o,3)),this.setAttribute("normal",new Ht(a,3)),this.setAttribute("uv",new Ht(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Rn=class i extends _e{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],m=[],p=[],g=0,y=[],d=n/2,u=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ht(f,3)),this.setAttribute("normal",new Ht(m,3)),this.setAttribute("uv",new Ht(p,2));function x(){let _=new U,C=new U,A=0,T=(e-t)/n;for(let b=0;b<=r;b++){let M=[],S=b/r,I=S*(e-t)+t;for(let F=0;F<=s;F++){let R=F/s,V=R*l+a,G=Math.sin(V),W=Math.cos(V);C.x=I*G,C.y=-S*n+d,C.z=I*W,f.push(C.x,C.y,C.z),_.set(G,T,W).normalize(),m.push(_.x,_.y,_.z),p.push(R,1-S),M.push(g++)}y.push(M)}for(let b=0;b<s;b++)for(let M=0;M<r;M++){let S=y[M][b],I=y[M+1][b],F=y[M+1][b+1],R=y[M][b+1];(t>0||M!==0)&&(h.push(S,I,R),A+=3),(e>0||M!==r-1)&&(h.push(I,F,R),A+=3)}c.addGroup(u,A,0),u+=A}function v(_){let C=g,A=new ot,T=new U,b=0,M=_===!0?t:e,S=_===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,d*S,0),m.push(0,S,0),p.push(.5,.5),g++;let I=g;for(let F=0;F<=s;F++){let V=F/s*l+a,G=Math.cos(V),W=Math.sin(V);T.x=M*W,T.y=d*S,T.z=M*G,f.push(T.x,T.y,T.z),m.push(0,S,0),A.x=G*.5+.5,A.y=W*.5*S+.5,p.push(A.x,A.y),g++}for(let F=0;F<s;F++){let R=C+F,V=I+F;_===!0?h.push(V,V+1,R):h.push(V+1,V,R),b+=3}c.addGroup(u,b,_===!0?1:2),u+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ar=class i extends Rn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Nc=class i extends _e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Ht(r,3)),this.setAttribute("normal",new Ht(r.slice(),3)),this.setAttribute("uv",new Ht(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let v=new U,_=new U,C=new U;for(let A=0;A<e.length;A+=3)p(e[A+0],v),p(e[A+1],_),p(e[A+2],C),l(v,_,C,x)}function l(x,v,_,C){let A=C+1,T=[];for(let b=0;b<=A;b++){T[b]=[];let M=x.clone().lerp(_,b/A),S=v.clone().lerp(_,b/A),I=A-b;for(let F=0;F<=I;F++)F===0&&b===A?T[b][F]=M:T[b][F]=M.clone().lerp(S,F/I)}for(let b=0;b<A;b++)for(let M=0;M<2*(A-b)-1;M++){let S=Math.floor(M/2);M%2===0?(m(T[b][S+1]),m(T[b+1][S]),m(T[b][S])):(m(T[b][S+1]),m(T[b+1][S+1]),m(T[b+1][S]))}}function c(x){let v=new U;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(x),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){let x=new U;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];let _=d(x)/2/Math.PI+.5,C=u(x)/Math.PI+.5;o.push(_,1-C)}g(),f()}function f(){for(let x=0;x<o.length;x+=6){let v=o[x+0],_=o[x+2],C=o[x+4],A=Math.max(v,_,C),T=Math.min(v,_,C);A>.9&&T<.1&&(v<.2&&(o[x+0]+=1),_<.2&&(o[x+2]+=1),C<.2&&(o[x+4]+=1))}}function m(x){r.push(x.x,x.y,x.z)}function p(x,v){let _=x*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function g(){let x=new U,v=new U,_=new U,C=new U,A=new ot,T=new ot,b=new ot;for(let M=0,S=0;M<r.length;M+=9,S+=6){x.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),A.set(o[S+0],o[S+1]),T.set(o[S+2],o[S+3]),b.set(o[S+4],o[S+5]),C.copy(x).add(v).add(_).divideScalar(3);let I=d(C);y(A,S+0,x,I),y(T,S+2,v,I),y(b,S+4,_,I)}}function y(x,v,_,C){C<0&&x.x===1&&(o[v]=x.x-1),_.x===0&&_.z===0&&(o[v]=C/2/Math.PI+.5)}function d(x){return Math.atan2(x.z,-x.x)}function u(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var _a=class i extends Nc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Yn=class i extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new U,m=new U,p=[],g=[],y=[],d=[];for(let u=0;u<=n;u++){let x=[],v=u/n,_=0;u===0&&o===0?_=.5/e:u===n&&l===Math.PI&&(_=-.5/e);for(let C=0;C<=e;C++){let A=C/e;f.x=-t*Math.cos(s+A*r)*Math.sin(o+v*a),f.y=t*Math.cos(o+v*a),f.z=t*Math.sin(s+A*r)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),m.copy(f).normalize(),y.push(m.x,m.y,m.z),d.push(A+_,1-v),x.push(c++)}h.push(x)}for(let u=0;u<n;u++)for(let x=0;x<e;x++){let v=h[u][x+1],_=h[u][x],C=h[u+1][x],A=h[u+1][x+1];(u!==0||o>0)&&p.push(v,_,A),(u!==n-1||l<Math.PI)&&p.push(_,C,A)}this.setIndex(p),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(y,3)),this.setAttribute("uv",new Ht(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var $i=class i extends _e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new U,f=new U,m=new U;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let y=g/s*r,d=p/n*Math.PI*2;f.x=(t+e*Math.cos(d))*Math.cos(y),f.y=(t+e*Math.cos(d))*Math.sin(y),f.z=e*Math.sin(d),a.push(f.x,f.y,f.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),m.subVectors(f,h).normalize(),l.push(m.x,m.y,m.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let y=(s+1)*p+g-1,d=(s+1)*(p-1)+g-1,u=(s+1)*(p-1)+g,x=(s+1)*p+g;o.push(y,d,x),o.push(d,u,x)}this.setIndex(o),this.setAttribute("position",new Ht(a,3)),this.setAttribute("normal",new Ht(l,3)),this.setAttribute("uv",new Ht(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ke=class extends bi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ih,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var $r=class extends bi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ih,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Xo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function t_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var lr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fc=class extends lr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dh,endingEnd:Dh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uh:r=t,a=2*e-n;break;case Nh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uh:o=t,l=2*n-e;break;case Nh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,m=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),y=g*g,d=y*g,u=-m*d+2*m*y-m*g,x=(1+m)*d+(-1.5-2*m)*y+(-.5+m)*g+1,v=(-1-p)*d+(1.5+p)*y+.5*g,_=p*d-p*y;for(let C=0;C!==a;++C)r[C]=u*o[h+C]+x*o[c+C]+v*o[l+C]+_*o[f+C];return r}},Oc=class extends lr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),f=1-h;for(let m=0;m!==a;++m)r[m]=o[c+m]*f+o[l+m]*h;return r}},Bc=class extends lr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Zn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xo(e,this.TimeBufferType),this.values=Xo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Xo(t.times,Array),values:Xo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Bc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Oc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ko:e=this.InterpolantFactoryMethodDiscrete;break;case uc:e=this.InterpolantFactoryMethodLinear;break;case $a:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ko;case this.InterpolantFactoryMethodLinear:return uc;case this.InterpolantFactoryMethodSmooth:return $a}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&t_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$a,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,m=f-n,p=f+n;for(let g=0;g!==n;++g){let y=e[f+g];if(y!==e[m+g]||y!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,m=o*n;for(let p=0;p!==n;++p)e[m+p]=e[f+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=uc;var xs=class extends Zn{constructor(t,e,n){super(t,e,n)}};xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Ko;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var zc=class extends Zn{};zc.prototype.ValueTypeName="color";var kc=class extends Zn{};kc.prototype.ValueTypeName="number";var Hc=class extends lr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Je.slerpFlat(r,0,o,c-a,o,c,l);return r}},va=class extends Zn{InterpolantFactoryMethodLinear(t){return new Hc(this.times,this.values,this.getValueSize(),t)}};va.prototype.ValueTypeName="quaternion";va.prototype.InterpolantFactoryMethodSmooth=void 0;var _s=class extends Zn{constructor(t,e,n){super(t,e,n)}};_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Ko;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var Vc=class extends Zn{};Vc.prototype.ValueTypeName="vector";var Gc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,m=c.length;f<m;f+=2){let p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},e_=new Gc,Wc=class{constructor(t){this.manager=t!==void 0?t:e_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Wc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jr=class extends ln{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ya=class extends Jr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},wl=new se,Fu=new U,Ou=new U,Ma=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wr,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Fu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fu),Ou.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ou),e.updateMatrixWorld(),wl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Bu=new se,Ur=new U,Tl=new U,Xc=class extends Ma{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new Te(2,1,1,1),new Te(0,1,1,1),new Te(3,1,1,1),new Te(1,1,1,1),new Te(3,0,1,1),new Te(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ur.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ur),Tl.copy(n.position),Tl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Tl),n.updateMatrixWorld(),s.makeTranslation(-Ur.x,-Ur.y,-Ur.z),Bu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bu)}},Sa=class extends Jr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Xc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},qc=class extends Ma{constructor(){super(new sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kr=class extends Jr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new qc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ba=class extends _e{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Ea=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=zu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function zu(){return performance.now()}var lh="\\[\\]\\.:\\/",n_=new RegExp("["+lh+"]","g"),ch="[^"+lh+"]",i_="[^"+lh.replace("\\.","")+"]",s_=/((?:WC+[\/:])*)/.source.replace("WC",ch),r_=/(WCOD+)?/.source.replace("WCOD",i_),o_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),a_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),l_=new RegExp("^"+s_+r_+o_+a_+"$"),c_=["material","materials","bones","map"],Yc=class{constructor(t,e,n){let s=n||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(n_,"")}static parseTrackName(t){let e=l_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);c_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=Yc;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var O_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var gh={};Xf(gh,{CELL:()=>eo,FH:()=>Ji,FIELDS:()=>hf,FN:()=>$n,FN1:()=>Jn,H:()=>Kn,KNOLL:()=>ji,N:()=>ai,N1:()=>Se,PI:()=>ut,S:()=>ge,SUN:()=>Ki,TARN:()=>vn,W:()=>mn,addBox:()=>mr,bakeMaps:()=>ph,baseH:()=>Ia,boxes:()=>Da,circles:()=>Ae,clamp:()=>yn,collide:()=>f_,dWater:()=>La,distPath:()=>dr,distRiver:()=>Ri,fbm:()=>Ms,fieldAt:()=>io,fjW:()=>no,fjX:()=>ts,floorH:()=>d_,forestD:()=>bs,gauss:()=>vs,groundH:()=>Oe,initWorld:()=>dh,isTouch:()=>Cn,lerp:()=>oe,makeTextures:()=>mh,pbrTex:()=>_n,platH:()=>pf,platforms:()=>pr,rawH:()=>df,ridged:()=>cf,rnd:()=>ae,rr:()=>J,shoreX:()=>Pa,slopeAt:()=>Ss,sstep:()=>Dt,tf:()=>ee,tn:()=>Fn,vnoise:()=>On,waterLevel:()=>es,worley:()=>uh});var ut=Math.PI,yn=rh.clamp,oe=rh.lerp,Cn=typeof matchMedia<"u"&&matchMedia("(pointer:coarse)").matches||"ontouchstart"in window,hh=20261;function ae(){return hh=Math.imul(hh,1664525)+1013904223>>>0,hh/4294967296}var J=(i,t)=>i+ae()*(t-i),to=new Uint8Array(512);{let i=[];for(let t=0;t<256;t++)i[t]=t;for(let t=255;t>0;t--){let e=ae()*(t+1)|0,n=i[t];i[t]=i[e],i[e]=n}for(let t=0;t<512;t++)to[t]=i[t&255]}var Ra=(i,t)=>to[to[i&255]+t&255]/255;function On(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=Ra(e,n),c=Ra(e+1,n),h=Ra(e,n+1),f=Ra(e+1,n+1);return l+(c-l)*o+(h-l)*a+(l-c-h+f)*o*a}function Ms(i,t,e){let n=0,s=.5,r=1,o=0;for(let a=0;a<e;a++)n+=s*On(i*r,t*r),o+=s,s*=.5,r*=2.03;return n/o}function cf(i,t){let e=0,n=.5,s=1,r=0;for(let o=0;o<5;o++){let a=1-Math.abs(On(i*s,t*s)*2-1);e+=n*a*a,r+=n,n*=.5,s*=2.1}return e/r}function Dt(i,t,e){let n=yn((e-i)/(t-i),0,1);return n*n*(3-2*n)}var vs=i=>Math.exp(-i*i);function Qi(i,t,e,n,s){return i=(i%e+e)%e,t=(t%n+n)%n,to[to[i+s&255]+t+s*7&255]/255}function Fn(i,t,e,n,s=0){let r=Math.floor(i),o=Math.floor(t),a=i-r,l=t-o,c=a*a*(3-2*a),h=l*l*(3-2*l),f=Qi(r,o,e,n,s),m=Qi(r+1,o,e,n,s),p=Qi(r,o+1,e,n,s),g=Qi(r+1,o+1,e,n,s);return f+(m-f)*c+(p-f)*h+(f-m-p+g)*c*h}function ee(i,t,e,n,s,r=0,o=.5){let a=0,l=.5,c=0;for(let h=0;h<s;h++)a+=l*Fn(i*e,t*n,e,n,r+h*13),c+=l,l*=o,e*=2,n*=2;return a/c}var Ca=[0,0,0];function uh(i,t,e,n=0){let s=i*e,r=t*e,o=Math.floor(s),a=Math.floor(r),l=9,c=9,h=0;for(let f=-1;f<=1;f++)for(let m=-1;m<=1;m++){let p=o+m,g=a+f,y=p+Qi(p,g,e,e,n+3),d=g+Qi(p,g,e,e,n+11),u=Math.hypot(y-s,d-r);u<l?(c=l,l=u,h=Qi(p,g,e,e,n+23)):u<c&&(c=u)}return Ca[0]=l,Ca[1]=c,Ca[2]=h,Ca}var ge=800,ai=400,Se=ai+1,eo=ge/ai,$n=800,Jn=$n+1,vn={x:10,z:-310,r:62,level:76},ji={x:72,z:-45},hf=[[14,37,-104,-86,1],[39,62,-104,-86,2],[14,37,-124,-106,3],[39,62,-124,-106,1]],ts=i=>-.55*(i-50)+28*Math.sin((i-50)*.011),no=i=>34+34*Dt(50,320,i),lf=i=>22*Math.sin((30-i)*.012),h_=i=>95-45*Dt(0,-200,i),Pa=(i,t)=>ts(i)-no(i)/.876-t;function La(i,t){return t>=50?Math.abs(i-ts(t))*.876-no(t):Math.hypot(i,t-50)-34}var uf=i=>2.6+24*Dt(20,-220,i)+50*Dt(-230,-247,i),u_=[[-140,335,26,9],[-168,352,18,7],[-128,362,13,6],[-196,318,9,5]],ys={x:Pa(272,26),z:272},jr=[];function fh(i,t,e,n){let s=1e9,r=0,o=0;for(let a=0;a<i.length-1;a++){let l=i[a][0],c=i[a][1],h=i[a+1][0]-l,f=i[a+1][1]-c,m=yn(((t-l)*h+(e-c)*f)/(h*h+f*f),0,1),p=Math.hypot(t-l-h*m,e-c-f*m);p<s&&(s=p,r=a,o=m)}return n.d=s,n.i=r,n.t=o,n}var cn={d:0,i:0,t:0};function Ia(i,t){let e=La(i,t),n=t>=50?Math.sign(i-ts(t)):Math.sign(i-lf(t)),s=t>-246?Math.abs(i-lf(t))-h_(t)+Math.max(0,-238-t)*4:1e9;s=Math.min(s,Math.hypot(i-vn.x,t-vn.z)-vn.r)+Dt(0,80,t)*160;let r=n<0?26+10*Math.sin(t*.03)+26*vs((t-272)/26):7,o=e-r+Dt(30,-30,t)*200,a=Math.min(s,o),l=a+(Ms(i*.028+3,t*.028+8,3)-.5)*24*Dt(0,16,a),c=Dt(45,5,t),h=oe(2.6,uf(t),c)+(Ms(i*.04,t*.04,3)-.5)*1.5*c,f=e<0?Math.max(-18,e*.5):h*Dt(0,9,e);if(l>0){let p=1-.5*Dt(290,400,t),g=cf(i*.009+20,t*.009+11),y=n<0?Dt(-175,-140,t)*Dt(95,60,t):0,d=(n>0?84:62)*Dt(0,30,l),u=55*Dt(28,150,l)+g*150*Dt(45,230,l),x=37*Dt(0,22,l)+(Ms(i*.05,t*.05,2)-.5)*5*Dt(22,40,l)+60*Dt(118,150,l)+40*Dt(150,260,l)+g*150*Dt(150,300,l);f+=oe(d+u,x,y)*p+(Ms(i*.07,t*.07,2)-.5)*10*Dt(8,40,l)*(1-y*Dt(22,30,l)*Dt(125,110,l))}f+=13*Dt(27,13,Math.hypot(i-ji.x,t-ji.z)),f+=5*vs(Math.hypot(i-36,t+192)/15)+3*vs(Math.hypot(i-52,t+204)/6)+2.6*vs(Math.hypot(i-22,t+206)/5),f+=9*vs(Math.hypot(i-ys.x,t-ys.z)/13);for(let p of u_){let g=Math.hypot(i-p[0],t-p[1]);g<p[3]*1.6&&(f=Math.max(f,-4+(p[2]+4)*Dt(p[3]*1.5,p[3]*.3,g)+(On(i*.4,t*.4)-.5)*3))}let m=Math.hypot(i-vn.x,t-vn.z);f=oe(f,Math.min(f,vn.level-3.5),Dt(38,22,m));for(let p of jr)if(fh(p.pts,i,t,cn),cn.d<13){let g=oe(p.h[cn.i],p.h[cn.i+1],cn.t);f=oe(f,g+.35,Dt(12,6,cn.d)*.85),f=oe(f,Math.min(f,g-.9),Dt(p.w+3,p.w-1,cn.d))}return f}var ff=[];function df(i,t){let e=Ia(i,t);for(let n of ff)fh(n.pts,i,t,cn),cn.d<9&&(e=oe(e,oe(n.h[cn.i],n.h[cn.i+1],cn.t),Dt(8.5,3.5,cn.d)));return e}var Ji=new Float32Array(Jn*Jn),Kn=new Float32Array(Se*Se);function Oe(i,t){let e=yn((i+ge/2)/eo,0,ai-.001),n=yn((t+ge/2)/eo,0,ai-.001),s=e|0,r=n|0,o=e-s,a=n-r,l=r*Se+s,c=Kn[l],h=Kn[l+1],f=Kn[l+Se],m=Kn[l+Se+1];return o+a<=1?c+(h-c)*o+(f-c)*a:m+(f-m)*(1-o)+(h-m)*(1-a)}function Ss(i,t){return Math.hypot(Oe(i+1.5,t)-Oe(i-1.5,t),Oe(i,t+1.5)-Oe(i,t-1.5))/(2*1.5)}var es=(i,t)=>t<-246&&Math.hypot(i-vn.x,t-vn.z)<45?vn.level:0,mn={},Ki=new U(-.43,.4,.88).normalize();function dh(){let i=c=>oe(2.6,uf(c),Dt(45,5,c))-.45,t=[[-25,-229],[-30,-200],[-22,-165],[-30,-130],[-38,-95],[-42,-55],[-36,-20],[-28,8],[-22,26]];jr.push({pts:t,h:t.map((c,h)=>h===t.length-1?0:h===t.length-2?.9:i(c[1])),w:3.6});let e=[[-6,-288],[-18,-268],[-25,-251]];jr.push({pts:e,h:[vn.level,vn.level,vn.level-.2],w:3}),mn.RIVERS=jr;let n=c=>{let h=Ia(c[0][0],c[0][1]),f=Ia(c[c.length-1][0],c[c.length-1][1]),m=0,p=[0];for(let g=1;g<c.length;g++)m+=Math.hypot(c[g][0]-c[g-1][0],c[g][1]-c[g-1][1]),p.push(m);return{pts:c,h:p.map(g=>oe(h,f,g/m))}},s=[[40,-22],[56,-17],[74,-25],[81,-38]],r=[[-58,-50],[-84,-20],[-86,-62],[-108,-34]],o=[[36,-214],[8,-228],[42,-240],[10,-252],[34,-265]];ff.push(n(s),n(r),n(o));let a=ge/$n;for(let c=0;c<Jn;c++)for(let h=0;h<Jn;h++)Ji[c*Jn+h]=df(-ge/2+h*a,-ge/2+c*a);for(let c=0;c<Se;c++)for(let h=0;h<Se;h++)Kn[c*Se+h]=Ji[c*2*Jn+h*2];mn.dockZ=20;for(let c=0;c<60;c+=.5)if(Oe(10,c)<.9){mn.dockZ=c;break}mn.BEACON=ys,mn.wreck={x:Pa(165,4),z:165};let l=(c,h)=>[Pa(c,h),c];mn.PATHS=[[[10,12],[10,-30],[4,-75],[2,-135],[14,-180],[-6,-214],[-14,-223]],[[10,-30],[-33,-50]],[[-49,-50],[-58,-50]],r,[[-108,-34],[-150,-60]],[[-108,-34],[-114,16],[-110,54]],[[10,-30],[40,-22]],s,[[2,-135],[30,-136]],[[14,-180],[36,-190]],[[14,-186],[36,-214]],o,[[34,-265],[50,-298],[42,-340],[10,-362]],[[10,6],[-14,12],[-36,22],l(62,15),l(110,15),l(165,15),l(220,15),[ys.x+4,ys.z-8]],[[10,-30],[30,-34]]],mn.LM=[{n:"The Mead Hall",x:72,z:-45,r:13},{n:"The Village Hearth",x:10,z:-30,r:8},{n:"The Smithy",x:34,z:-36,r:6.5},{n:"The Harbour",x:10,z:32,r:10},{n:"River Bridge",x:-41,z:-50,r:7},{n:"The Runestone",x:-58,z:-43,r:6},{n:"The Farmstead",x:28,z:-132,r:12},{n:"The Old Ash",x:36,z:-192,r:11},{n:"Thundering Falls",x:-18,z:-221,r:12},{n:"The Hanging Tarn",x:36,z:-280,r:13},{n:"Glacier's Edge",x:10,z:-362,r:10},{n:"Hunter's Cabin",x:-150,z:-60,r:10},{n:"The Stone Circle",x:-110,z:54,r:11},{n:"The Wreck",x:mn.wreck.x-6,z:165,r:11},{n:"The Sea Beacon",x:ys.x,z:ys.z,r:11}]}function dr(i,t){let e=1e9;for(let n of mn.PATHS)for(let s=0;s<n.length-1;s++){let r=n[s][0],o=n[s][1],a=n[s+1][0]-r,l=n[s+1][1]-o,c=yn(((i-r)*a+(t-o)*l)/(a*a+l*l),0,1),h=Math.hypot(i-r-a*c,t-o-l*c);h<e&&(e=h)}return e}function Ri(i,t){let e=1e9;for(let n of jr)fh(n.pts,i,t,cn),cn.d<e&&(e=cn.d);return e}function io(i,t){for(let e of hf)if(i>e[0]&&i<e[1]&&t>e[2]&&t<e[3])return e[4];return 0}function bs(i,t){let e=Ms(i*.02+31,t*.02+17,3),n=Oe(i,t),s=Dt(8,30,n)*Dt(100,70,n),r=vs(Math.hypot(i-10,t+30)/80),o=Dt(-60,-230,t)*.25;return Dt(.36,.58,e*.7+.1+s*.42+o-r*.35)}var Ae=[],Da=[],pr=[];function mr(i,t,e,n,s){Da.push({x:i,z:t,c:Math.cos(e),s:Math.sin(e),hx:n,hz:s})}function f_(i,t){for(let e=0;e<2;e++){for(let n of Da){let s=i.x-n.x,r=i.z-n.z;if(Math.abs(s)>34||Math.abs(r)>34)continue;let o=s*n.c-r*n.s,a=s*n.s+r*n.c,l=n.hx+t-Math.abs(o),c=n.hz+t-Math.abs(a);l>0&&c>0&&(l<c?o=(o<0?-1:1)*(n.hx+t):a=(a<0?-1:1)*(n.hz+t),i.x=n.x+o*n.c+a*n.s,i.z=n.z-o*n.s+a*n.c)}for(let n of Ae){let s=i.x-n.x,r=i.z-n.z,o=n.r+t;if(s>o||s<-o||r>o||r<-o)continue;let a=s*s+r*r;if(a<o*o&&a>1e-6){let l=Math.sqrt(a);i.x=n.x+s/l*o,i.z=n.z+r/l*o}}}}function pf(i,t){let e=-1e9;for(let n of pr){let s=i-n.x,r=t-n.z,o=s*n.c+r*n.s,a=-s*n.s+r*n.c;if(Math.abs(o)<=n.hl&&Math.abs(a)<=n.hw){let l=o/n.hl,c=oe(n.h0,n.h1,(l+1)/2)+n.arch*(1-l*l);c>e&&(e=c)}}return e}var d_=(i,t)=>Math.max(Oe(i,t),pf(i,t));function ph(){let i=new Uint8Array($n*$n*4),t=ge/$n,e=new Float32Array(Se*Se),n=Math.hypot(Ki.x,Ki.z),s=Ki.y/n,r=5,o=Ki.x/n*r,a=Ki.z/n*r;for(let u=0;u<Se;u++)for(let x=0;x<Se;x++){let v=-ge/2+x*eo,_=-ge/2+u*eo,C=Kn[u*Se+x]+.5,A=1;for(let T=1;T<150;T++){let b=v+o*T,M=_+a*T;if(b>ge/2||b<-ge/2||M>ge/2||M<-ge/2)break;let S=C+T*r*s;if(S>330)break;let I=(S-Oe(b,M))/(T*.22+1.5)+.35;if(I<A&&(A=I,A<=0)){A=0;break}}e[u*Se+x]=A}for(let u=0;u<$n;u++)for(let x=0;x<$n;x++){let v=u*Jn+x,_=-(Ji[v+1]-Ji[Math.max(v-1,u*Jn)])/(2*t),C=-(Ji[Math.min(v+Jn,Ji.length-1)]-Ji[Math.max(v-Jn,x)])/(2*t),A=Math.hypot(_,1,C),T=(u*$n+x)*4;i[T]=(_/A*.5+.5)*255,i[T+1]=(C/A*.5+.5)*255;let b=x/2,M=u/2,S=Math.min(b|0,ai-1),I=Math.min(M|0,ai-1),F=b-S,R=M-I,V=oe(oe(e[I*Se+S],e[I*Se+S+1],F),oe(e[(I+1)*Se+S],e[(I+1)*Se+S+1],F),R);i[T+2]=yn(V,0,1)*255,i[T+3]=255}let l=new Yi(i,$n,$n,dn);l.magFilter=l.minFilter=fn,l.needsUpdate=!0;let c=1024,h=new Uint8Array(c*c*4),f=ge/c;for(let u=0;u<c;u++)for(let x=0;x<c;x++){let v=-ge/2+(x+.5)*f,_=-ge/2+(u+.5)*f,C=(u*c+x)*4,A=Math.hypot(v-10,_+30),T=On(v*.35,_*.35),b=Ms(v*.08+5,_*.08,3),M=Dt(2.8,1,dr(v,_)+(T-.5)*1.6);M=Math.max(M,Dt(34,6,A+(b-.5)*34)*.85);let S=io(v,_);h[C]=M*255,h[C+1]=bs(v,_)*255,h[C+2]=S===0?0:S===1?85:S===2?170:255,h[C+3]=Ri(v,_)<4.5?0:255}let m=(u,x,v,_)=>{let C=Math.max(0,Math.floor((u-v+ge/2)/f)),A=Math.min(c-1,Math.ceil((u+v+ge/2)/f)),T=Math.max(0,Math.floor((x-v+ge/2)/f)),b=Math.min(c-1,Math.ceil((x+v+ge/2)/f));for(let M=T;M<=b;M++)for(let S=C;S<=A;S++)_(-ge/2+(S+.5)*f,-ge/2+(M+.5)*f,(M*c+S)*4)};for(let u of Da)m(u.x,u.z,Math.hypot(u.hx,u.hz)+3,(x,v,_)=>{let C=x-u.x,A=v-u.z,T=Math.abs(C*u.c-A*u.s)-u.hx,b=Math.abs(C*u.s+A*u.c)-u.hz,M=Math.max(T,b);M<.5&&(h[_+3]=0),h[_]=Math.max(h[_],Dt(2.4,.4,M+(On(x*.6,v*.6)-.5)*1.2)*235)});for(let u of Ae)u.r>.6&&m(u.x,u.z,u.r+1.5,(x,v,_)=>{let C=Math.hypot(x-u.x,v-u.z)-u.r;C<.3&&(h[_+3]=0),h[_]=Math.max(h[_],Dt(1.4,.2,C)*200)});let p=new Yi(h,c,c,dn);p.magFilter=p.minFilter=fn,p.needsUpdate=!0;let g=new Uint16Array(Se*Se);for(let u=0;u<g.length;u++)g[u]=tf.toHalfFloat(Kn[u]);let y=new Yi(g,Se,Se,Qr,pn);y.magFilter=y.minFilter=fn,y.needsUpdate=!0;let d=u=>{let x=new Uint8Array(Se*Se*4);for(let _=0;_<Se*Se;_++)x[_*4]=yn((u-Kn[_])/6,0,1)*255,x[_*4+3]=255;let v=new Yi(x,Se,Se,dn);return v.magFilter=v.minFilter=fn,v.needsUpdate=!0,v};return{tNrm:l,tCtrl:p,tH:y,tDepth:d(0),tDepthTarn:d(vn.level)}}function _n(i,t,e,n={}){let s=new Float32Array(i*i),r=[0,0,0];for(let g=0;g<i;g++)for(let y=0;y<i;y++)s[g*i+y]=t((y+.5)/i,(g+.5)/i);let o=()=>{let g=document.createElement("canvas");return g.width=g.height=i,g},a=(n.str||2)*i/256,l={},c=(g,y,d)=>{g.getContext("2d").putImageData(y,0,0);let u=new Ti(g);return u.wrapS=u.wrapT=Gi,u.anisotropy=8,u.colorSpace=d?$e:ni,u};if(e){let g=o(),y=g.getContext("2d").createImageData(i,i),d=y.data;for(let u=0;u<i;u++)for(let x=0;x<i;x++){let v=u*i+x;e((x+.5)/i,(u+.5)/i,s[v],r),d[v*4]=yn(r[0],0,1)*255,d[v*4+1]=yn(r[1],0,1)*255,d[v*4+2]=yn(r[2],0,1)*255,d[v*4+3]=255}l.map=c(g,y,!0)}let h=o(),f=h.getContext("2d").createImageData(i,i),m=f.data,p=i-1;for(let g=0;g<i;g++)for(let y=0;y<i;y++){let d=(s[g*i+(y+1&p)]-s[g*i+(y-1&p)])*a,u=(s[(g+1&p)*i+y]-s[(g-1&p)*i+y])*a,x=Math.hypot(d,u,1),v=(g*i+y)*4;m[v]=(-d/x*.5+.5)*255,m[v+1]=(u/x*.5+.5)*255,m[v+2]=(1/x*.5+.5)*255,m[v+3]=255}return l.normalMap=c(h,f,!1),l}var ke=(i,t,e,n)=>{i[0]=t[0]+(e[0]-t[0])*n,i[1]=t[1]+(e[1]-t[1])*n,i[2]=t[2]+(e[2]-t[2])*n},Ai=(i,t)=>{i[0]*=t,i[1]*=t,i[2]*=t};function mh(){let i={},t=Cn?256:512;i.grass=_n(t,(n,s)=>ee(n,s,8,8,4)*.5+ee(n,s,64,64,2,5)*.5,(n,s,r,o)=>{ke(o,[.2,.25,.08],[.36,.4,.14],ee(n,s,4,4,3,9)),Ai(o,.7+.6*Fn(n*128,s*128,128,128,2));let a=Dt(.55,.7,ee(n,s,16,16,2,31));ke(o,o,[.38,.32,.16],a*.6)},{str:2.5}),i.dirt=_n(t,(n,s)=>ee(n,s,8,8,5,3)*.75+ee(n,s,48,48,2,6)*.25,(n,s,r,o)=>{ke(o,[.33,.27,.21],[.5,.43,.34],ee(n,s,6,6,4,17)),Ai(o,.75+.45*r)},{str:3}),i.rock=_n(t,(n,s)=>{let r=0,o=.5,a=4;for(let l=0;l<5;l++){let c=1-Math.abs(Fn(n*a,s*a,a,a,40+l)*2-1);r+=o*c*c,o*=.5,a*=2}return r*.9+ee(n,s,32,32,3,51)*.3-Dt(.72,.8,Fn(n*2,s*14,2,14,55))*.35},(n,s,r,o)=>{ke(o,[.3,.29,.28],[.5,.48,.45],ee(n,s,5,5,4,61)),ke(o,o,[.42,.36,.29],Dt(.5,.75,ee(n,s,3,3,3,71))*.5),Ai(o,.55+.65*r);let a=Dt(.72,.8,ee(n,s,12,12,3,81));ke(o,o,[.52,.54,.36],a*.5)},{str:4}),i.sand=_n(256,(n,s)=>.5+.3*Math.sin((s*14+ee(n,s,4,4,2,90)*3)*2*ut)*.5+ee(n,s,64,64,2,93)*.3,(n,s,r,o)=>{ke(o,[.4,.39,.37],[.58,.55,.5],ee(n,s,8,8,3,95)),Ai(o,.85+.25*Fn(n*128,s*128,128,128,97))},{str:1.5});let e=(n,s)=>ee(n,s,4,40,3,101)*.6+ee(n,s,16,128,2,105)*.25-Dt(.7,.78,Fn(n*3,s*36,3,36,109))*.5+.2;i.wood=_n(t,e,(n,s,r,o)=>{ke(o,[.3,.25,.2],[.5,.43,.35],ee(n,s,4,40,3,101)),ke(o,o,[.47,.46,.44],Dt(.35,.7,ee(n,s,3,5,3,113))*.7),Ai(o,.65+.55*r)},{str:3}),i.plank=_n(t,(n,s)=>{let r=n*6%1;return .7-(Dt(.05,0,r)+Dt(.95,1,r))*.7+ee(n,s,48,3,3,120+Math.floor(n*6))*.3-Dt(.74,.8,Fn(n*30,s*3,30,3,127))*.3},(n,s,r,o)=>{let a=Math.floor(n*6),l=Qi(a,3,6,8,131);ke(o,[.28,.23,.18],[.47,.4,.32],ee(n,s,48,3,3,120+a)*.6+l*.4),ke(o,o,[.44,.43,.41],Dt(.35,.7,ee(n,s,4,4,2,133))*.65),Ai(o,.45+.75*r)},{str:3}),i.thatch=_n(t,(n,s)=>{let r=ee(n,s,96,4,2,140),o=s*4%1;return r*.55+(1-o)*.45*(.7+.3*Fn(n*24,s*4,24,4,143))},(n,s,r,o)=>{ke(o,[.4,.33,.18],[.7,.6,.36],ee(n,s,96,4,2,140)),ke(o,o,[.36,.34,.28],Dt(.45,.7,ee(n,s,4,4,3,147))*.6),ke(o,o,[.28,.34,.15],Dt(.62,.78,ee(n,s,6,6,3,151))*.5),Ai(o,.5+.65*r)},{str:4}),i.stone=_n(t,(n,s)=>{let r=uh(n,s,5,160);return Dt(0,.2,r[1]-r[0])*(.65+.35*r[2])+ee(n,s,32,32,3,163)*.18},(n,s,r,o)=>{let a=uh(n,s,5,160);ke(o,[.34,.33,.31],[.56,.54,.5],a[2]),ke(o,o,[.45,.4,.33],ee(n,s,6,6,3,167)*.5),Ai(o,.35+.8*Dt(0,.15,a[1]-a[0])),Ai(o,.8+.4*ee(n,s,32,32,3,163))},{str:4}),i.cloth=_n(256,(n,s)=>.5+.22*Math.sin(n*2*ut*48)*Math.sin(s*2*ut*48)+ee(n,s,16,16,3,170)*.3,(n,s,r,o)=>{let a=.78+.3*r*ee(n,s,8,8,3,173);o[0]=o[1]=o[2]=a},{str:2}),i.metal=_n(256,(n,s)=>ee(n,s,12,12,4,180),(n,s,r,o)=>{let a=.6+.5*r;o[0]=o[1]=o[2]=a,ke(o,o,[.45,.28,.16],Dt(.62,.8,ee(n,s,6,6,3,183))*.5)},{str:1.2}),i.bark=_n(256,(n,s)=>{let r=0,o=.5,a=10,l=2;for(let c=0;c<4;c++){let h=1-Math.abs(Fn(n*a,s*l,a,l,190+c)*2-1);r+=o*h,o*=.5,a*=2,l*=2}return r},(n,s,r,o)=>{ke(o,[.16,.12,.09],[.36,.28,.2],r),ke(o,o,[.3,.33,.22],Dt(.6,.8,ee(n,s,4,4,3,197))*.35)},{str:5}),i.birch=_n(256,(n,s)=>ee(n,s,4,24,3,200)*.5+Dt(.7,.8,Fn(n*3,s*30,3,30,203))*.5,(n,s,r,o)=>{ke(o,[.74,.72,.66],[.9,.88,.82],ee(n,s,6,6,3,207));let a=Dt(.7,.8,Fn(n*3,s*30,3,30,203))+Dt(.68,.8,ee(n,s,3,5,3,209));ke(o,o,[.1,.09,.08],yn(a,0,1)*.9)},{str:2}),i.water=_n(256,(n,s)=>ee(n,s,5,5,5,220,.58),null,{str:5}).normalMap;{let s=document.createElement("canvas");s.width=s.height=256;let r=s.getContext("2d"),o=r.createImageData(256,256),a=o.data;for(let l=0;l<256;l++)for(let c=0;c<256;c++){let h=c/256,f=l/256,m=(l*256+c)*4;a[m]=ee(h,f,4,4,5,230)*255,a[m+1]=ee(h,f,8,8,4,240)*255,a[m+2]=ee(h,f,16,16,3,250)*255,a[m+3]=255}r.putImageData(o,0,0),i.noise=new Ti(s),i.noise.wrapS=i.noise.wrapT=Gi}return i}var Ua={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Qn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},p_=new sr(-1,1,1,-1,0,1),xh=class extends _e{constructor(){super(),this.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ht([0,2,0,0,2,0],2))}},m_=new xh,gr=class{constructor(t){this._mesh=new Me(m_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,p_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var xr=class extends Qn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ne?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=oi.clone(t.uniforms),this.material=new Ne({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new gr(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var so=class extends Qn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Na=class extends Qn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Fa=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new ot);this._width=n.width,this._height=n.height,e=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xr(Ua),this.copyPass.material.blending=si,this.clock=new Ea}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}so!==void 0&&(o instanceof so?n=!0:o instanceof Na&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Oa=class extends Qn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Tt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var mf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Tt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var _r=class i extends Qn{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ot(t.x,t.y):new ot(256,256),this.clearColor=new Tt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new en(r,o,{type:pn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let m=new en(r,o,{type:pn});m.texture.name="UnrealBloomPass.h"+f,m.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(m);let p=new en(r,o,{type:pn});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=mf;this.highPassUniforms=oi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ne({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new ot(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ua;this.copyUniforms=oi.clone(h.uniforms),this.blendMaterial=new Ne({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ks,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Tt,this.oldClearAlpha=1,this.basic=new qi,this.fsQuad=new gr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ot(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ne({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ne({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};_r.BlurDirectionX=new ot(1,0);_r.BlurDirectionY=new ot(0,1);var vr={value:null},g_=i=>`vec3(${i.x.toFixed(5)},${i.y.toFixed(5)},${i.z.toFixed(5)})`,gf=new Tt(1,.78,.52),xf=`
#ifndef ATMOS_INC
#define ATMOS_INC
const vec3 A_SUN = ${g_(Ki)};
vec3 skyColor(vec3 d){
  float y = max(d.y, 0.0);
  float s = max(dot(d, A_SUN), 0.0);
  vec3 zen = vec3(.055,.16,.42), hor = vec3(.42,.52,.66);
  vec3 c = mix(hor, zen, pow(y, .42));
  float band = exp(-y*5.0);
  c = mix(c, vec3(1.0,.60,.33), band*(.18+.62*s*s));
  c += vec3(1.0,.50,.20)*pow(s,8.0)*.32;
  c += vec3(1.0,.78,.48)*pow(s,120.0)*1.1;
  return c*.86;
}
vec3 fogApply(vec3 col, vec3 v, float camY){
  float fd = length(v); vec3 dir = v/max(fd,1e-4);
  float b = .028; float ry = dir.y; ry = abs(ry) < .003 ? .003 : ry;
  float fa = .0030*exp(-max(camY,0.0)*b)*(1.0-exp(-fd*ry*b))/(ry*b) + fd*.00035;
  float f = 1.0-exp(-fa);
  vec3 fc = skyColor(normalize(vec3(dir.x, .035+max(dir.y,0.0)*.6, dir.z)));
  return mix(col, fc*.92, clamp(f,0.0,1.0));
}
#endif
`;function _f(){let i=Qt;i.fog_pars_vertex=`#ifdef USE_FOG
 varying vec3 vFogDir;
#endif`,i.fog_vertex=`#ifdef USE_FOG
 vFogDir = transpose(mat3(viewMatrix))*mvPosition.xyz;
#endif`,i.fog_pars_fragment=`#ifdef USE_FOG
 uniform vec3 fogColor; uniform float fogDensity; varying vec3 vFogDir; uniform sampler2D uSunVis;
 float sunVis(){ vec3 wp=cameraPosition+vFogDir; return smoothstep(.05,.75,texture2D(uSunVis,wp.xz/${ge}.0+.5).b); }
${xf}
#endif`,i.lights_fragment_begin=i.lights_fragment_begin.replace("getDirectionalLightInfo( directionalLight, directLight );",`getDirectionalLightInfo( directionalLight, directLight );
#if defined( USE_FOG ) && ( UNROLLED_LOOP_INDEX == 0 )
 directLight.color *= sunVis();
#endif`);for(let t in Tn)Tn[t].uniforms.uSunVis=vr;i.fog_fragment=`#ifdef USE_FOG
 gl_FragColor.rgb = fogApply(gl_FragColor.rgb, vFogDir, cameraPosition.y);
#endif`}function _h(i,t){let e={uT:{value:0},tNoise:{value:i.noise},uClouds:{value:1},uEnv:{value:t?1:0}},n=new Ne({side:an,depthWrite:!1,depthTest:!1,fog:!1,uniforms:e,vertexShader:"varying vec3 vD; void main(){ vD=position; vec4 p=projectionMatrix*mat4(mat3(modelViewMatrix))*vec4(position,1.); gl_Position=p.xyww; }",fragmentShader:`precision highp float; varying vec3 vD; uniform float uT,uClouds,uEnv; uniform sampler2D tNoise;${xf}
    float cl(vec2 p){ vec4 a=texture2D(tNoise,p*.11+vec2(uT*.0012,0.)); vec4 b=texture2D(tNoise,p*.37+vec2(uT*.0021,uT*.0007));
      return a.r*.62+b.g*.28+texture2D(tNoise,p*1.3).b*.10; }
    void main(){ vec3 d=normalize(vD); vec3 col=skyColor(d);
      float s=max(dot(d,A_SUN),0.);
      col+=vec3(1.,.82,.55)*smoothstep(.99955,.99985,s)*38.*(1.-uEnv);
      if(d.y>.005 && uClouds>.5){
        vec2 p=d.xz/(d.y+.09)*.55; float c=cl(p);
        float dens=smoothstep(.50,.74,c); float fade=smoothstep(.005,.14,d.y);
        vec2 toS=normalize(A_SUN.xz)*.05; float c2=cl(p+toS);
        float lit=clamp(.5+(c-c2)*5.,0.,1.);
        vec3 shade=vec3(.30,.31,.40)*1.0, bright=mix(vec3(1.15,.80,.56),vec3(1.5,1.02,.66),pow(s,3.))*1.25;
        vec3 cc=mix(shade,bright,lit*(.35+.65*(1.-dens*.6)));
        cc+=vec3(1.4,.8,.4)*pow(s,10.)*(1.-dens)*.9;
        col=mix(col,cc,dens*fade*.94);
      }
      if(uEnv>.5) col=mix(vec3(.10,.11,.07),col,smoothstep(-.12,.03,d.y));
      gl_FragColor=vec4(col,1.); }`}),s=new Me(new Yn(10,32,16),n);return s.frustumCulled=!1,s.renderOrder=-100,{mesh:s,u:e}}function vf(i,t){let e=new qn(ge,ge,ai,ai);e.rotateX(-ut/2);let n=e.attributes.position,s=e.attributes.normal;for(let a=0;a<n.count;a++)n.setY(a,Kn[a]),s.setXYZ(a,0,1,0);e.computeBoundingSphere();let r=new Ke({roughness:1,metalness:0});r.onBeforeCompile=a=>{Object.assign(a.uniforms,{tGrass:{value:i.grass.map},tGrassN:{value:i.grass.normalMap},tDirt:{value:i.dirt.map},tDirtN:{value:i.dirt.normalMap},tRock:{value:i.rock.map},tRockN:{value:i.rock.normalMap},tSand:{value:i.sand.map},tCtrl:{value:t.tCtrl},tNrm:{value:t.tNrm}}),a.vertexShader=`varying vec3 vWPos;
`+a.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vWPos=(modelMatrix*vec4(transformed,1.)).xyz;`),a.fragmentShader=`varying vec3 vWPos; uniform sampler2D tGrass,tGrassN,tDirt,tDirtN,tRock,tRockN,tSand,tCtrl,tNrm; vec3 tNw; float tRgh;
`+a.fragmentShader.replace("#include <map_fragment>",`
      vec2 wuv=vWPos.xz/${ge}.0+.5; vec4 ctrl=texture2D(tCtrl,wuv); vec4 nt=texture2D(tNrm,wuv);
      vec3 Nw; Nw.xz=nt.rg*2.-1.; Nw.y=sqrt(max(1.-dot(Nw.xz,Nw.xz),0.));
      float h=vWPos.y, slope=1.-Nw.y, dist=length(vWPos-cameraPosition), lodf=smoothstep(12.,80.,dist);
      vec2 uvA=vWPos.xz*.42, uvB=vWPos.xz*.047;
      float macro=texture2D(tRock,vWPos.xz*.0037).g, macro2=texture2D(tDirt,vWPos.xz*.011).r;
      vec3 gA=texture2D(tGrass,uvA).rgb, gB=texture2D(tGrass,uvB).rgb;
      vec3 grass=mix(gA,gB,.3+.55*lodf)*mix(vec3(.85,1.0,.60),vec3(1.55,1.15,.62),smoothstep(.2,.62,macro))*(.8+.5*macro2);
      vec3 dA=texture2D(tDirt,uvA*.7).rgb; vec3 dirt=mix(dA,texture2D(tDirt,uvB).rgb,lodf*.7)*(.85+.4*macro2);
      vec3 tw=pow(abs(Nw),vec3(6.)); tw/=tw.x+tw.y+tw.z; float rs=.14;
      vec3 rock=texture2D(tRock,vWPos.zy*rs).rgb*tw.x+texture2D(tRock,vWPos.xz*rs).rgb*tw.y+texture2D(tRock,vWPos.xy*rs).rgb*tw.z;
      rock=mix(rock,texture2D(tRock,vWPos.xz*.021).rgb*1.1,lodf*.6)*mix(vec3(.86,.86,.88),vec3(1.12,1.02,.90),macro);
      { float st=sin(h*.55+macro*9.+macro2*5.)*.5+.5; rock*=.72+.5*st*st; rock=mix(rock,rock*vec3(.55,.52,.5),smoothstep(.55,.9,texture2D(tDirt,vec2(vWPos.x+vWPos.z,h*.25)*.02).r)*.6); }
      vec3 sand=texture2D(tSand,uvA*.5).rgb*(.8+.5*texture2D(tDirt,uvA*.3).g); float det=gA.g*2.2;
      float wDirt=smoothstep(.32,.62,ctrl.r+(det-.5)*.35);
      vec3 col=mix(grass,grass*vec3(.50,.56,.40)+dirt*.22,ctrl.g*.85);
      float fid=ctrl.b; float wWheat=smoothstep(.2,.3,fid)*(1.-smoothstep(.45,.55,fid)), wSoil=smoothstep(.55,.62,fid);
      float fur=.75+.25*sin(vWPos.x*5.2);
      col=mix(col,dirt*vec3(.62,.52,.44)*fur,wSoil); col=mix(col,dirt*vec3(1.0,.85,.55),wWheat*.85);
      col=mix(col,dirt,wDirt);
      col=mix(col,mix(grass*vec3(1.05,.92,.70),rock,.45),smoothstep(62.,92.,h)*.8);
      float wSand=smoothstep(2.0,1.0,h+(det-.5)*.9); col=mix(col,sand,wSand);
      float wet=smoothstep(.5,-.15,h); col*=mix(1.,.5,wet);
      float wRock=smoothstep(.22,.42,slope+(det-.5)*.12); col=mix(col,rock,wRock);
      float wSnow=smoothstep(96.,122.,h+macro*46.)*smoothstep(.66,.34,slope); col=mix(col,vec3(.86,.90,.97),wSnow);
      diffuseColor.rgb=col;
      tRgh=mix(.96,.28,wet*(1.-wRock)); tRgh=mix(tRgh,.55,wSnow);
      vec2 dn=mix(texture2D(tGrassN,uvA).xy,texture2D(tDirtN,uvA*.7).xy,max(wDirt,max(wSand,wSoil)))*2.-1.;
      dn=mix(dn,(texture2D(tRockN,vWPos.xz*rs).xy*2.-1.)*1.6,wRock);
      dn*=(1.-wSnow*.8)*mix(1.,.25,lodf)*mix(1.,.3,wet);
      dn.x+=wSoil*cos(vWPos.x*5.2)*.5;
      tNw=normalize(vec3(Nw.x+dn.x*.7,Nw.y,Nw.z-dn.y*.7));`).replace("#include <roughnessmap_fragment>","float roughnessFactor=tRgh;").replace("#include <normal_fragment_maps>","normal=normalize((viewMatrix*vec4(tNw,0.)).xyz);")};let o=new Me(e,r);return o.receiveShadow=!0,o}function vh(i,t,e,n){let s=oi.merge([dt.fog,{uT:{value:0},tN:{value:null},tDepth:{value:null},tNoise:{value:null}}]);s.tN.value=i.water,s.tDepth.value=t,s.tNoise.value=i.noise,s.uSunVis=vr;let r=new Ne({transparent:!0,depthWrite:!1,fog:!0,uniforms:s,vertexShader:`varying vec3 vW; 
#include <fog_pars_vertex>
 void main(){ vec4 w=modelMatrix*vec4(position,1.); vW=w.xyz; vec4 mvPosition=viewMatrix*w; gl_Position=projectionMatrix*mvPosition;
#include <fog_vertex>
 }`,fragmentShader:`precision highp float; varying vec3 vW; uniform float uT; uniform sampler2D tN,tDepth,tNoise;
    #include <fog_pars_fragment>
    void main(){ vec2 p=vW.xz; float t=uT;
      vec2 uv=(p+${ge/2}.0)/${ge}.0; float dep=1.; if(uv.x>0.&&uv.x<1.&&uv.y>0.&&uv.y<1.) dep=texture2D(tDepth,uv).r;
      vec3 V=cameraPosition-vW; float dist=length(V); V/=dist;
      vec2 n1=texture2D(tN,p*.045+vec2(t*.012,t*.008)).xy*2.-1., n2=texture2D(tN,p*.11+vec2(-t*.02,t*.014)).xy*2.-1.,
           n3=texture2D(tN,p*.31+vec2(t*.03,-t*.036)).xy*2.-1.;
      float calm=mix(.35,1.,smoothstep(.0,.5,dep));
      vec2 nn=(n1*.9+n2*.6+n3*.45*smoothstep(90.,10.,dist))*calm*.42;
      vec3 n=normalize(vec3(nn.x,1.,nn.y));
      float fr=.02+.98*pow(1.-max(dot(n,V),0.),5.);
      vec3 R=reflect(-V,n); R.y=abs(R.y)+.02; R=normalize(R);
      vec3 sky=skyColor(R);
      float sp=pow(max(dot(R,A_SUN),0.),700.)*90.+pow(max(dot(R,A_SUN),0.),90.)*2.2;
      vec3 deep=vec3(.008,.045,.065), shallow=vec3(.06,.20,.17);
      vec3 base=mix(shallow,deep,smoothstep(0.,.5,dep));
      base+=vec3(.02,.07,.06)*max(dot(n,A_SUN),0.);
      float sv=sunVis(); vec3 col=mix(base*(.5+.5*sv),sky,fr)+vec3(1.,.78,.5)*sp*sv;
      float fn=texture2D(tNoise,p*.09+vec2(t*.02,0.)).g;
      float wave=sin(dep*70.-t*1.6+fn*6.)*.5+.5;
      float foam=smoothstep(.085,.0,dep)*step(.003,dep)*smoothstep(.35,.75,wave*.6+fn*.6);
      foam+=smoothstep(.03,.0,dep)*step(.003,dep)*.6;
      col=mix(col,vec3(.85,.82,.78)*1.1,clamp(foam,0.,1.)*.75);
      float a=mix(.55,.98,smoothstep(0.,.3,dep)); a=max(a,fr); a=max(a,clamp(foam,0.,1.));
      gl_FragColor=vec4(col,a);
      #include <fog_fragment>
    }`}),o=new Me(e||new qn(5e3,5e3).rotateX(-ut/2),r);return o.position.y=n||0,o.frustumCulled=!1,o.renderOrder=5,{mesh:o,u:s}}var x_={uniforms:{tDiffuse:{value:null},uExp:{value:1},uT:{value:0},uSunUV:{value:new U}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.,1.); }",fragmentShader:`precision highp float; varying vec2 vUv; uniform sampler2D tDiffuse; uniform float uExp,uT; uniform vec3 uSunUV;
  vec3 aces(vec3 v){ v=mat3(.59719,.07600,.02840,.35458,.90834,.13383,.04823,.01566,.83777)*v;
    vec3 a=v*(v+.0245786)-.000090537, b=v*(.983729*v+.4329510)+.238081; v=a/b;
    return clamp(mat3(1.60475,-.10208,-.00327,-.53108,1.10813,-.07276,-.07367,-.00605,1.07602)*v,0.,1.); }
  float hsh(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453); }
  void main(){ vec3 c=texture2D(tDiffuse,vUv).rgb;
    // soft light shafts toward the sun when it is on screen
    if(uSunUV.z>0.){ vec2 d=(uSunUV.xy-vUv); float l=length(d*vec2(1.6,1.)); float g=smoothstep(1.1,0.,l); c+=vec3(1.,.62,.32)*g*g*.045*uSunUV.z; }
    c*=uExp; c=aces(c);
    float l=dot(c,vec3(.2126,.7152,.0722));
    c=mix(vec3(l),c,1.04);
    c=mix(c,c*vec3(1.04,1.0,.94),smoothstep(.25,.9,l)); c=mix(c,c*vec3(.94,.99,1.07),smoothstep(.35,0.,l));
    c=(c-.5)*1.02+.5;
    vec2 q=vUv-.5; c*=1.-dot(q,q)*.55;
    c=pow(max(c,0.),vec3(1./2.2));
    c+=(hsh(vUv*vec2(1920.,1080.)+uT)-.5)*.018;
    gl_FragColor=vec4(c,1.); }`};function yf(i,t,e){let n=i.getDrawingBufferSize(new ot),s=new en(n.x,n.y,{type:pn,samples:4}),r=new Fa(i,s);r.addPass(new Oa(t,e));let o=new _r(new ot(n.x/2,n.y/2),.32,.75,1.05);r.addPass(o);let a=new xr(x_);return r.addPass(a),{composer:r,bloom:o,fin:a}}function yr(i,t,e){let n=new _e;n.setAttribute("position",new de(new Float32Array(i*3),3)),n.setAttribute("aSize",new de(new Float32Array(i),1)),n.setAttribute("aAlpha",new de(new Float32Array(i),1));let s=new Ne({transparent:!0,depthWrite:!1,blending:e?Ks:Hi,uniforms:{uScale:{value:500},uCol:{value:t}},vertexShader:"attribute float aSize,aAlpha; varying float vA; uniform float uScale; void main(){ vA=aAlpha; vec4 mv=modelViewMatrix*vec4(position,1.); gl_PointSize=min(aSize*uScale/-mv.z,300.); gl_Position=projectionMatrix*mv; }",fragmentShader:"precision mediump float; varying float vA; uniform vec3 uCol; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,.05,d); gl_FragColor=vec4(uCol,a*a*vA); }"}),r=new ua(n,s);return r.frustumCulled=!1,r.renderOrder=8,r}function Mf(i,t){let e=[],n=[],s=[],r=0;for(let h of t){let f=new Zr(h.pts.map((g,y)=>new U(g[0],h.h[y],g[1])),!1,"catmullrom",.5),m=Math.ceil(f.getLength()/1.5),p=f.getSpacedPoints(m);for(let g=0;g<=m;g++){let y=p[g],d=p[Math.max(0,g-1)],u=p[Math.min(m,g+1)],x=u.x-d.x,v=u.z-d.z,_=Math.hypot(x,v)||1;x/=_,v/=_;let C=h.w+1.4,A=Math.min(y.y,h.h[0])+0;for(let T=0;T<3;T++){let b=T-1;e.push(y.x-v*b*C,A+(T===1?.02:-.05),y.z+x*b*C),n.push(T/2,g*1.5/7)}if(g<m){let T=r+g*3;s.push(T,T+3,T+1,T+1,T+3,T+4,T+1,T+4,T+2,T+2,T+4,T+5)}}r+=(m+1)*3}let o=new _e;o.setAttribute("position",new Ht(e,3)),o.setAttribute("uv",new Ht(n,2)),o.setIndex(s);let a=oi.merge([dt.fog,{uT:{value:0},tN:{value:null},tNoise:{value:null}}]);a.tN.value=i.water,a.tNoise.value=i.noise,a.uSunVis=vr;let l=new Ne({transparent:!0,depthWrite:!1,fog:!0,uniforms:a,vertexShader:`varying vec3 vW; varying vec2 vUv;
#include <fog_pars_vertex>
 void main(){ vUv=uv; vec4 w=modelMatrix*vec4(position,1.); vW=w.xyz; vec4 mvPosition=viewMatrix*w; gl_Position=projectionMatrix*mvPosition;
#include <fog_vertex>
 }`,fragmentShader:`precision highp float; varying vec3 vW; varying vec2 vUv; uniform float uT; uniform sampler2D tN,tNoise;
    #include <fog_pars_fragment>
    void main(){ vec2 f=vec2(vUv.x*1.1,vUv.y-uT*.42);
      vec2 nn=(texture2D(tN,f*.6).xy*2.-1.)+(texture2D(tN,f*1.7+.37).xy*2.-1.)*.7; vec3 n=normalize(vec3(nn.x*.35,1.,nn.y*.35));
      vec3 V=normalize(cameraPosition-vW); float fr=.03+.97*pow(1.-max(dot(n,V),0.),5.);
      vec3 R=reflect(-V,n); R.y=abs(R.y)+.03; R=normalize(R); float sv=sunVis();
      float e=1.-abs(vUv.x*2.-1.);
      vec3 col=mix(vec3(.035,.085,.075)*(.5+.5*sv),skyColor(R),fr)+vec3(1.,.8,.5)*pow(max(dot(R,A_SUN),0.),300.)*30.*sv;
      float fo=texture2D(tNoise,vec2(vUv.x*.9,vUv.y*.22-uT*.11)).r*.6+texture2D(tNoise,vec2(vUv.x*2.3,vUv.y*.6-uT*.3)).g*.4;
      float foam=smoothstep(.56,.74,fo)*.55+smoothstep(.22,.05,e)*smoothstep(.4,.6,fo)*.6;
      col=mix(col,vec3(.8,.84,.86)*(.45+.75*sv),clamp(foam,0.,1.));
      gl_FragColor=vec4(col,smoothstep(0.,.3,e)*.9);
      #include <fog_fragment>
    }`}),c=new Me(o,l);return c.frustumCulled=!1,c.renderOrder=6,{mesh:c,u:a}}function Sf(i,t){let e=[],n=[],s=[],r=0;for(let h of t){let f=h.n||14,m=Math.hypot(h.x1-h.x0,h.z1-h.z0),p=(h.x1-h.x0)/m,g=(h.z1-h.z0)/m,y=0,d=0;for(let u=0;u<=f;u++){let x=u/f,v=oe(h.x0,h.x1,x),_=oe(h.z0,h.z1,x),C=Oe(v,_)+.5+Math.sin(x*ut)*(h.bulge||1.2);u&&(y+=Math.hypot(m/f,C-d)),d=C;let A=oe(h.w0,h.w1,x);if(e.push(v+g*A,C,_-p*A,v,C+.3,_,v-g*A,C,_+p*A),n.push(0,y/14,.5,y/14,1,y/14),u<f){let T=r+u*3;s.push(T,T+1,T+3,T+1,T+4,T+3,T+1,T+2,T+4,T+2,T+5,T+4)}}r+=(f+1)*3}let o=new _e;o.setAttribute("position",new Ht(e,3)),o.setAttribute("uv",new Ht(n,2)),o.setIndex(s);let a=oi.merge([dt.fog,{uT:{value:0},tNoise:{value:null}}]);a.tNoise.value=i.noise,a.uSunVis=vr;let l=new Ne({transparent:!0,depthWrite:!1,fog:!0,side:Fe,uniforms:a,vertexShader:`varying vec2 vUv;
#include <fog_pars_vertex>
 void main(){ vUv=uv; vec4 mvPosition=modelViewMatrix*vec4(position,1.); gl_Position=projectionMatrix*mvPosition;
#include <fog_vertex>
 }`,fragmentShader:`precision highp float; varying vec2 vUv; uniform float uT; uniform sampler2D tNoise;
    #include <fog_pars_fragment>
    void main(){ float n=texture2D(tNoise,vec2(vUv.x*.7,vUv.y*.25-uT*.42)).r*.55+texture2D(tNoise,vec2(vUv.x*2.2,vUv.y*.7-uT*.95)).g*.45;
      float e=smoothstep(0.,.35,1.-abs(vUv.x*2.-1.)); float a=smoothstep(.22,.5,n*e+e*.3);
      float sv=sunVis(); vec3 col=mix(vec3(.42,.52,.58),vec3(1.0,1.0,1.02),smoothstep(.38,.72,n))*(.42+.95*sv)*mix(vec3(1.),vec3(1.1,.95,.8),sv);
      gl_FragColor=vec4(col,a*.94);
      #include <fog_fragment>
    }`}),c=new Me(o,l);return c.frustumCulled=!1,c.renderOrder=7,{mesh:c,u:a}}var ka={value:0},Ba=(i,t,e)=>new Tt(i,t,e);function ao(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function ro(i){let t=new Ti(i);return t.colorSpace=$e,t.anisotropy=4,t}var za=(i,t,e)=>`rgb(${i|0},${t|0},${e|0})`;function __(i,t){let e=ao(i,t),n=e.getContext("2d");n.lineCap="round";let s=(o,a,l,c,h,f)=>{let m=l-o,p=c-a,g=Math.hypot(m,p),y=m/g,d=p/g;for(let u=0;u<f;u++){let x=u/f,v=o+m*x,_=a+p*x;for(let C of[-1,1]){let A=C*J(.3,1.3),T=Math.cos(A),b=Math.sin(A),M=h*J(.5,1.1)*(1-x*.35),S=ae(),I=.55+.45*x;n.strokeStyle=za((40+38*S)*I,(66+44*S)*I,(42+24*S)*I),n.lineWidth=J(1.8,3),n.beginPath(),n.moveTo(v,_),n.lineTo(v+(y*T-d*b)*M,_+(y*b+d*T)*M),n.stroke()}}},r=t/2;for(let o=0;o<22;o++){let a=o/22,l=6+a*i*.86,c=t*.5*(1-a*.8)*(.55+.45*Math.min(1,a*4+.3));for(let h of[-1,1]){let f=h*(1-a*.35),m=l+Math.cos(f)*c,p=r+Math.sin(f)*c;n.strokeStyle="#2a3a2c",n.lineWidth=t*.045*(1-a*.5),n.beginPath(),n.moveTo(l,r),n.lineTo(m,p),n.stroke(),s(l,r,m,p,t*.055,Math.max(8,c/2.6|0)),s(l,r,m,p,t*.04,Math.max(8,c/3|0))}}return n.strokeStyle="#2a3a2c",n.lineWidth=t*.06,n.beginPath(),n.moveTo(0,r),n.lineTo(i*.93,r),n.stroke(),s(0,r,i*.97,r,t*.055,150),e}function v_(i){let n=ao(128,256),s=n.getContext("2d");s.strokeStyle="#33261a",s.lineWidth=5,s.beginPath(),s.moveTo(128/2,256),s.lineTo(128/2,20),s.stroke();for(let a=0;a<15;a++){let l=a/14,c=oe(256*.86,14,l),h=oe(128*.5,9,Math.pow(l,.9));for(let f of[-1,1])for(let m=0;m<2;m++)s.save(),s.translate(128/2,c+m*5),s.scale(f,1),s.rotate(.32+J(-.1,.1)-m*.25),s.drawImage(i,0,-h*.42,h*1.02,h*.84),s.restore()}s.save(),s.translate(128/2,26),s.rotate(-ut/2),s.drawImage(i,0,-9,26,18),s.restore(),s.globalCompositeOperation="source-atop";let r=s.createLinearGradient(0,0,0,256);r.addColorStop(0,"rgba(255,255,220,.10)"),r.addColorStop(1,"rgba(0,0,0,.42)"),s.fillStyle=r,s.fillRect(0,0,128,256);let o=s.createLinearGradient(0,0,128,0);return o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(.5,"rgba(0,0,0,.28)"),o.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=o,s.fillRect(0,0,128,256),n}function y_(i){let t=ao(i,i),e=t.getContext("2d"),n=i/2;e.strokeStyle="#4a3a28",e.lineWidth=2;for(let s=0;s<7;s++){let r=J(0,6.28);e.beginPath(),e.moveTo(n,n),e.lineTo(n+Math.cos(r)*n*.8,n+Math.sin(r)*n*.8),e.stroke()}for(let s=0;s<230;s++){let r=J(0,6.28),o=Math.sqrt(ae())*n*.92,a=n+Math.cos(r)*o,l=n+Math.sin(r)*o,c=ae(),h=.5+.5*(s/230);e.fillStyle=za((70+80*c)*h,(118+70*c)*h,(26+30*c)*h),e.beginPath(),e.ellipse(a,l,i*.05,i*.03,J(0,3.14),0,6.3),e.fill()}return t}function M_(i){let n=ao(128,256),s=n.getContext("2d");s.strokeStyle="#d8d4c8",s.lineWidth=6,s.beginPath(),s.moveTo(128/2,256),s.lineTo(128/2+3,60),s.stroke(),s.strokeStyle="#22201c",s.lineWidth=2;for(let o=0;o<9;o++){let a=J(130,250);s.beginPath(),s.moveTo(128/2-3,a),s.lineTo(128/2+2,a+1),s.stroke()}for(let o=0;o<26;o++){let a=J(0,6.28),l=Math.sqrt(ae()),c=128/2+Math.cos(a)*l*42,h=82+Math.sin(a)*l*72,f=J(36,58);s.drawImage(i,c-f/2,h-f/2,f,f)}s.globalCompositeOperation="source-atop";let r=s.createLinearGradient(0,0,0,256*.7);return r.addColorStop(0,"rgba(255,255,200,.12)"),r.addColorStop(1,"rgba(0,0,0,.35)"),s.fillStyle=r,s.fillRect(0,0,128,256),n}function S_(){let e=ao(128,64),n=e.getContext("2d");n.lineCap="round";for(let s=0;s<46;s++){let r=J(8,120),o=J(4,40),a=J(-14,14),l=ae(),c=n.createLinearGradient(0,64,0,o);c.addColorStop(0,za(60+40*l,80+40*l,40)),c.addColorStop(1,za(200+55*l,215+40*l,150+40*l)),n.strokeStyle=c,n.lineWidth=J(2.2,4),n.beginPath(),n.moveTo(r,64),n.quadraticCurveTo(r+a*.3,(64+o)/2,r+a,o),n.stroke()}return e}var ns=class{constructor(){this.p=[],this.n=[],this.u=[],this.c=[],this.w=[],this.i=[]}v(t,e,n,s,r,o,a,l,c,h){this.p.push(t,e,n);let f=Math.hypot(s,r,o)||1;return this.n.push(s/f,r/f,o/f),this.u.push(a,l),this.c.push(c,c,c),this.w.push(h),this.p.length/3-1}quad(t,e,n,s){this.i.push(t,e,n,t,n,s)}geo(){let t=new _e;return t.setAttribute("position",new Ht(this.p,3)),t.setAttribute("normal",new Ht(this.n,3)),t.setAttribute("uv",new Ht(this.u,2)),t.setAttribute("color",new Ht(this.c,3)),t.setAttribute("aW",new Ht(this.w,1)),t.setIndex(this.i),t}};function bf(i,t,e,n,s){let r=new ns,o=8,a=6;for(let l=0;l<=a;l++){let c=l/a,h=c*i,f=oe(t,e,Math.pow(c,.8))*(l===0?1.5:1),m=Math.sin(c*2.2)*s,p=Math.cos(c*1.7)*s-s;for(let g=0;g<=o;g++){let y=g/o*2*ut;r.v(m+Math.cos(y)*f,h,p+Math.sin(y)*f,Math.cos(y),.1,Math.sin(y),g/o*2,c*n,1,c*c*.012*i)}}for(let l=0;l<a;l++)for(let c=0;c<o;c++){let h=l*(o+1)+c;r.quad(h,h+o+1,h+o+2,h+1)}return r.geo()}function oo(i,t,e,n,s,r,o,a,l){let c=[[t[0]-n[0],t[1]-n[1],t[2]-n[2]],[t[0]+n[0],t[1]+n[1],t[2]+n[2]],[e[0]+n[0],e[1]+n[1],e[2]+n[2]],[e[0]-n[0],e[1]-n[1],e[2]-n[2]]],h=[[0,0],[0,1],[1,1],[1,0]],f=[];for(let m=0;m<4;m++){let p=c[m],g=Math.hypot(p[0],p[2])||1,y=m>=2;f.push(i.v(p[0],p[1],p[2],p[0]/g*(1-l),l+.15,p[2]/g*(1-l),h[m][0],h[m][1],y?r:s,y?a:o))}i.quad(f[0],f[1],f[2],f[3])}function b_(){let i=new ns,t=15,e=2.6,n=12.6;for(let s=0;s<t;s++){let r=s/(t-1),o=oe(e,n,r),a=oe(2.7,.6,Math.pow(r,.85)),l=r<.5?6:5,c=ae()*6.28,h=oe(.55,.2,r);for(let f=0;f<l;f++){let m=c+f/l*2*ut+J(-.2,.2),p=Math.cos(m),g=Math.sin(m),y=a*J(.85,1.1),d=[p*.05,o,g*.05],u=[p*y,o-h*y,g*y],x=y*.56;oo(i,d,u,[-g*x,J(-.12,.12)*x,p*x],.42+.25*r,.95,.01+r*.05,.05+y*.05+r*.05,.5),f%2===0&&oo(i,[d[0],d[1]+x*.25,d[2]],[u[0]*.92,u[1]+x*.1,u[2]*.92],[0,x*.75,0],.42+.25*r,.9,.01+r*.05,.05+y*.05+r*.05,.35)}}for(let s=0;s<3;s++){let r=s*ut/3,o=Math.cos(r),a=Math.sin(r);oo(i,[0,11.6,0],[0,14.2,0],[o*.75,0,a*.75],.8,1,.08,.16,.5)}return i.geo()}function E_(){let i=new ns;for(let e=0;e<34;e++){let n=J(0,6.28),s=J(-.5,1.2),r=J(.6,2.5),o=Math.cos(n)*Math.cos(s)*r,a=Math.sin(n)*Math.cos(s)*r,l=7.4+Math.sin(s)*r*1.5,c=J(.9,1.5),h=J(0,6.28),f=Math.cos(h),m=Math.sin(h),p=J(-.8,.8),g=yn(.45+r*.22+(l-6)*.05,.4,1),y=[o-f*c*Math.cos(p),l-Math.sin(p)*c,a-m*c*Math.cos(p)],d=[o+f*c*Math.cos(p),l+Math.sin(p)*c,a+m*c*Math.cos(p)],u=7.4,x=new ns;oo(i,[y[0],y[1]-u,y[2]],[d[0],d[1]-u,d[2]],[-m*c,J(-.3,.3),f*c],g,g,.08,.14,.25)}let t=i.geo();return t.translate(0,7.4,0),t}function Ef(i,t,e){let n=new ns;for(let s=0;s<2;s++){let r=s*ut/2,o=Math.cos(r),a=Math.sin(r),l=n.v(-o*i/2,e,-a*i/2,-o*.8,.55,-a*.8,0,0,1,0),c=n.v(o*i/2,e,a*i/2,o*.8,.55,a*.8,1,0,1,0),h=n.v(o*i/2,e+t,a*i/2,o*.8,.55,a*.8,1,1,1,.1),f=n.v(-o*i/2,e+t,-a*i/2,-o*.8,.55,-a*.8,0,1,1,.1);n.quad(l,c,h,f)}return n.geo()}function w_(){let i=new ns;for(let t=0;t<7;t++){let e=t/7*6.28+J(-.3,.3),n=J(.25,.6),s=J(.45,.7),r=Math.cos(e),o=Math.sin(e),a=J(.3,.7);oo(i,[r*n-r*s,a-s*.4,o*n-o*s],[r*n+r*s,a+s*.5,o*n+o*s],[-o*s,0,r*s],.55,1,.01,.05,.5)}return i.geo()}function wf(i,t={}){let e=t.trans===void 0?.8:t.trans;delete t.trans;let n=new Ke(Object.assign({map:i,alphaTest:.3,alphaToCoverage:!0,side:Fe,vertexColors:!0,roughness:.8,metalness:0},t));return n.onBeforeCompile=s=>{s.uniforms.uT=ka,s.vertexShader=`attribute float aW; uniform float uT;
`+s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec3 wp0=(instanceMatrix*vec4(transformed,1.)).xyz;
      #else
        vec3 wp0=transformed;
      #endif
      float ph=uT*1.3+wp0.x*.21+wp0.z*.17; float sw=sin(ph)+.5*sin(ph*2.3+1.3);
      transformed.x+=sw*aW*.9; transformed.z+=cos(ph*.8)*aW*.6; transformed.y+=sin(ph*3.1+wp0.y*2.)*aW*.3;`),s.fragmentShader=s.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
 normal=normalize(vNormal);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        { vec3 sv=normalize((viewMatrix*vec4(A_SUN,0.)).xyz); float bl=pow(max(dot(-normalize(vViewPosition),sv),0.),3.);
          totalEmissiveRadiance+=diffuseColor.rgb*vec3(2.2,1.5,.6)*bl*${e.toFixed(2)}; }`)},n}var Tf=i=>new Xr({depthPacking:nh,map:i,alphaTest:.4});function Af(i,t,e){let n=__(512,256),s=y_(128),r=ro(n),o=ro(v_(n)),a=ro(s),l=ro(M_(s)),c=new Ke({map:t.bark.map,normalMap:t.bark.normalMap,roughness:.95}),h=new Ke({map:t.birch.map,normalMap:t.birch.normalMap,roughness:.8}),f=wf(r,{color:Ba(.8,.86,.8),trans:.3}),m=wf(a,{trans:.8,color:Ba(.85,.85,.8)}),p=(F,R)=>{let V=new $r({map:F,alphaTest:.4,alphaToCoverage:!0,side:Fe,color:R});return V.onBeforeCompile=G=>{G.fragmentShader=G.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
 normal=normalize(vNormal);`)},V},g=[{near:[[bf(13,.34,.05,6,.12),c,null],[b_(),f,Tf(r)]],far:[Ef(7.2,14.4,-.2),p(o,Ba(.62,.68,.62))],cap:Cn?260:420,R:Cn?62:78},{near:[[bf(8.6,.2,.04,4,.25),h,null],[E_(),m,Tf(a)]],far:[Ef(6.4,12.8,-1.6),p(l,Ba(.95,.95,.85))],cap:Cn?90:150,R:Cn?62:78}],y=[],d=new se,u=new Je,x=new Ge,v=new U,_=new U,C=Cn?2e3:3200;for(let F=0;F<4e4&&y.length<C;F++){let R=J(-395,395),V=J(-395,395),G=Oe(R,V);if(G<2||G>112||!e(R,V,2.5))continue;let W=bs(R,V);if(ae()>W*.95+.02||G>85&&ae()<(G-85)/27||Ss(R,V)>.8||dr(R,V)<3.8||Ri(R,V)<6)continue;let Y=G<16&&ae()<.62||ae()<.05?1:0,H=Y?J(.75,1.25):J(.6,1.35),it=H*J(.9,1.2);x.set(J(-.04,.04),J(0,6.28),J(-.04,.04)),d.compose(v.set(R,G-.25,V),u.setFromEuler(x),_.set(H,it,H));let ct;if(Y){let vt=ae();ct=vt<.3?[1.25,.95,.35]:vt<.45?[1.2,.7,.3]:[J(.8,1),1,J(.7,.9)]}else{let vt=J(.75,1.1);ct=[vt,vt,vt*J(.85,1)]}y.push({m:new Float32Array(d.elements),x:R,z:V,sp:Y,col:ct}),Ae.push({x:R,z:V,r:(Y?.22:.3)*H})}let A=[y.filter(F=>!F.sp).length,y.filter(F=>F.sp).length];g.forEach((F,R)=>{F.nearIM=F.near.map(([V,G,W],Y)=>{let H=new wi(V,G,F.cap);return H.frustumCulled=!1,H.castShadow=!0,H.receiveShadow=!0,W&&(H.customDepthMaterial=W),Y===1&&(H.instanceColor=new Zi(new Float32Array(F.cap*3).fill(1),3)),i.add(H),H}),F.farIM=new wi(F.far[0],F.far[1],Math.max(1,A[R])),F.farIM.frustumCulled=!1,F.farIM.instanceColor=new Zi(new Float32Array(Math.max(1,A[R])*3).fill(1),3),i.add(F.farIM)});let T=1e9,b=1e9;function M(F,R,V){if(!V&&Math.hypot(F-T,R-b)<2.5)return;T=F,b=R;let G=[0,0],W=[0,0];for(let Y of y){let H=g[Y.sp];if(Math.hypot(Y.x-F,Y.z-R)<H.R&&G[Y.sp]<H.cap){let ct=G[Y.sp]++;H.nearIM[0].instanceMatrix.array.set(Y.m,ct*16),H.nearIM[1].instanceMatrix.array.set(Y.m,ct*16),H.nearIM[1].instanceColor.array.set(Y.col,ct*3)}{let ct=W[Y.sp]++;V&&(H.farIM.instanceMatrix.array.set(Y.m,ct*16),H.farIM.instanceColor.array.set(Y.col,ct*3))}}g.forEach((Y,H)=>{for(let it of Y.nearIM)it.count=G[H],it.instanceMatrix.needsUpdate=!0;Y.nearIM[1].instanceColor.needsUpdate=!0,V&&(Y.farIM.count=W[H],Y.farIM.instanceMatrix.needsUpdate=!0,Y.farIM.instanceColor.needsUpdate=!0)})}{let F=[];for(let G=0;G<3e4&&F.length<(Cn?600:1100);G++){let W=J(-390,390),Y=J(-390,390),H=Oe(W,Y);H<1.5||H>95||!e(W,Y,1)||dr(W,Y)<2.5||Ss(W,Y)>.75||ae()>bs(W,Y)*.8+.12||F.push([W,H-.05,Y,J(.8,2)])}let R=new wi(w_(),m,F.length),V=new Tt;F.forEach((G,W)=>{x.set(0,J(0,6.28),0),d.compose(v.set(G[0],G[1],G[2]),u.setFromEuler(x),_.set(G[3],G[3]*J(.8,1.2),G[3])),R.setMatrixAt(W,d);let Y=J(.45,.8);R.setColorAt(W,V.setRGB(Y*J(.8,1.1),Y,Y*.7))}),R.frustumCulled=!1,R.receiveShadow=!0,i.add(R)}let S=new _a(1,3);{let F=S.attributes.position;for(let R=0;R<F.count;R++){let V=F.getX(R),G=F.getY(R),W=F.getZ(R),Y=.72+.5*On(V*1.4+5.2+G*1.1,W*1.4+1.1-G*.8)+.12*On(V*4+G*3,W*4-G*2);F.setXYZ(R,V*Y,G*Y*.8,W*Y)}S.computeVertexNormals()}let I=new Ke({map:t.rock.map,normalMap:t.rock.normalMap,normalScale:new ot(1.5,1.5),roughness:.9});I.onBeforeCompile=F=>{F.fragmentShader=F.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
    { vec3 wn=inverseTransformDirection(normal,viewMatrix); diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.10,.15,.04),smoothstep(.45,.85,wn.y)*.75); }`)},t.rock.map.repeat.set(1,1);{let F=[];for(let G=0;G<3e4&&F.length<420;G++){let W=J(-390,390),Y=J(-390,390),H=Oe(W,Y);if(H<-1.2||H>130||!e(W,Y,1)||dr(W,Y)<3)continue;let it=Ss(W,Y);if(it>1.1)continue;let ct=Ri(W,Y)<9,vt=ct?.9:H<1.6?.7:it>.45?.5:H>60?.35:.06;if(ae()>vt)continue;let Zt=it>.45||H>60?J(.8,3.4):ct?J(.3,1.3):J(.3,1.6);F.push([W,H-Zt*.25,Y,Zt]),Zt>.7&&Ae.push({x:W,z:Y,r:Zt*.85})}let R=new wi(S,I,F.length),V=new Tt;F.forEach((G,W)=>{x.set(J(-.4,.4),J(0,6.28),J(-.4,.4)),d.compose(v.set(G[0],G[1],G[2]),u.setFromEuler(x),_.set(G[3]*J(.8,1.4),G[3]*J(.6,1),G[3])),R.setMatrixAt(W,d);let Y=J(.7,1.05);R.setColorAt(W,V.setRGB(Y,Y*.98,Y*.95))}),R.frustumCulled=!1,R.castShadow=!0,R.receiveShadow=!0,i.add(R)}return{updateLOD:M,rockGeo:S,rockM:I}}function Rf(i,t){let e={uPl:{value:new U},uT:ka,tH:{value:t.tH},tCtrl:{value:t.tCtrl},tNrm:{value:t.tNrm}},n=(a,l,c)=>{let h=new ba;c?(h.setAttribute("position",new Ht([-.5,0,0,.5,0,0,.5,1,0,-.5,1,0],3)),h.setIndex([0,1,2,0,2,3]),h.setAttribute("uv",new Ht([0,0,1,0,1,1,0,1],2))):(h.setAttribute("position",new Ht([-.5,0,0,.5,0,0,-.36,.5,0,.36,.5,0,0,1,0],3)),h.setIndex([0,1,2,1,3,2,2,3,4]),h.setAttribute("uv",new Ht([0,0,1,0,0,.5,1,.5,.5,1],2)));let f=new Float32Array(a*4);for(let g=0;g<a;g++)f[g*4]=ae()*l,f[g*4+1]=ae()*l,f[g*4+2]=ae(),f[g*4+3]=ae();h.setAttribute("aI",new Zi(f,4)),h.instanceCount=a;let m=new $r({side:Fe,map:c||null,alphaTest:c?.4:0,alphaToCoverage:!!c});m.onBeforeCompile=g=>{Object.assign(g.uniforms,e),g.uniforms.uTile={value:l},g.vertexShader=`attribute vec4 aI; uniform vec3 uPl; uniform float uT,uTile; uniform sampler2D tH,tCtrl,tNrm; varying float vG; varying vec3 vTint;
`+g.vertexShader.replace("#include <beginnormal_vertex>",`
        vec2 wp=mod(aI.xy-uPl.xz+uTile*.5,uTile)-uTile*.5+uPl.xz; vec2 wuv=wp/${ge}.0+.5;
        float gh=texture2D(tH,wuv).r; vec4 ctrl=texture2D(tCtrl,wuv); vec4 nt=texture2D(tNrm,wuv);
        vec3 gN; gN.xz=nt.rg*2.-1.; gN.y=sqrt(max(1.-dot(gN.xz,gN.xz),0.));
        float dPl=length(wp-uPl.xz); float fade=1.-smoothstep(uTile*.36,uTile*.49,dPl);
        float fid=ctrl.b; float wheat=step(.2,fid)*step(fid,.5), soil=step(.55,fid)*step(fid,.8), crop=step(.85,fid);
        float dens=ctrl.a*(1.-smoothstep(.25,.55,ctrl.r))*smoothstep(1.7,2.6,gh)*(1.-smoothstep(84.,100.,gh))*step(gN.y,2.)*smoothstep(.72,.86,gN.y)*(1.-ctrl.g*.55);
        dens=mix(dens,ctrl.a,wheat); dens=mix(dens,ctrl.a*step(.5,fract(wp.x*.8)),crop); dens*=1.-soil;
        float keep=step(aI.z,dens)*fade;
        float pch=sin(wp.x*.31+sin(wp.y*.17)*2.)*sin(wp.y*.27+1.3)*.5+.5; float hg=mix(.14,.5,aI.w*aI.w)*mix(.45,1.2,pch)*${c?"1.5":"1.0"}; hg=mix(hg,mix(.85,1.05,aI.w),wheat); hg=mix(hg,.32,crop);
        float wd=${c?"1.3":"mix(.028,.055,aI.z)"}; wd=mix(wd,wd*1.3,wheat);
        float ang=aI.w*37.7; vec2 rt=vec2(cos(ang),sin(ang));
        float ph=uT*1.7+wp.x*.31+wp.y*.23; float wv=sin(ph)+.6*sin(ph*2.1+wp.y*.5)+.3*sin(ph*4.3);
        float y=position.y; vec2 bend=vec2(.9,.45)*(wv*.07+.05)*y*y*hg*2.2+rt*(aI.z-.5)*.25*y*y*hg;
        vec2 away=wp-uPl.xz; float pd=length(away); bend+=away/max(pd,.01)*smoothstep(1.1,.15,pd)*.45*y*hg;
        vec3 gPos=vec3(wp.x+rt.x*position.x*wd+bend.x, gh-.04+y*hg*keep-length(bend)*.35*y, wp.y+rt.y*position.x*wd+bend.y);
        gPos=mix(vec3(wp.x,gh-1.,wp.y),gPos,keep);
        vG=y; float mv=texture2D(tNrm,wuv*9.).b*.0+fract(aI.z*7.3);
        vec3 lush=vec3(.085,.15,.03), dry=vec3(.30,.24,.075);
        vTint=mix(lush,dry,smoothstep(.25,.9,fract(aI.w*13.1)*.45+ctrl.r*.8+(1.-pch)*.45))*(.75+.5*mv);
        vTint=mix(vTint,vec3(.80,.52,.16)*(.8+.4*mv),wheat); vTint=mix(vTint,vec3(.20,.40,.08),crop);
        vec3 objectNormal=gN;`).replace("#include <begin_vertex>","vec3 transformed=gPos;"),g.fragmentShader=`varying float vG; varying vec3 vTint;
`+g.fragmentShader.replace("#include <color_fragment>","diffuseColor.rgb*=vTint*mix(.28,1.25,vG*vG*.6+vG*.4);").replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        { vec3 sv=normalize((viewMatrix*vec4(A_SUN,0.)).xyz); float bl=pow(max(dot(-normalize(vViewPosition),sv),0.),2.);
          totalEmissiveRadiance+=diffuseColor.rgb*vec3(2.,1.5,.6)*bl*vG*.4; }`)};let p=new Me(h,m);return p.frustumCulled=!1,p.receiveShadow=!0,i.add(p),p},s=ro(S_()),r=n(Cn?8e4:18e4,Cn?22:30,null),o=n(Cn?26e3:6e4,Cn?100:150,s);return{U:e,near:r,far:o}}var Ts=[],Mn=[],X={},Df,li,Xa=new se,yh=new Je,Cf=new Ge,Pf=new U,Ha=new U,Qe=new Tt,Va=new U,If=new Je,T_=new U(1,0,0),Uf=i=>{let t=i.attributes.uv;for(let e=0;e<t.count;e++){let n=t.getX(e),s=t.getY(e);t.setXY(e,s,n)}return i},he=new Ei(1,1,1),ze=Uf(new Rn(1,1,1,12)),ho=Uf(new Rn(.5,.5,1,10)).rotateZ(ut/2),Pn=new Yn(1,14,10),A_=new ar(1,1,4),ws=new Rn(1,1,1,20);function Nf(i,t,e,n){let s=new _e;return s.setAttribute("position",new de(i,3)),s.setAttribute("normal",new de(t,3)),s.setAttribute("uv",new de(e,2)),n&&s.setAttribute("color",new de(n,3)),s}function Ga(i,t){let e=new Float32Array(t),n=0;for(let s of i)e.set(s,n),n+=s.length;return e}var qa=new Map,zn=new se,nn=!0;function nt(i,t,e){if(e=e||{},Pf.fromArray(e.p||[0,0,0]),e.q)yh.copy(e.q);else{let p=e.r||[0,0,0];Cf.set(p[0],p[1],p[2]),yh.setFromEuler(Cf)}let n=e.s;n===void 0?Ha.set(1,1,1):typeof n=="number"?Ha.set(n,n,n):Ha.fromArray(n),Xa.compose(Pf,yh,Ha).premultiply(zn);let s=i.index?i.toNonIndexed():i.clone();s.applyMatrix4(Xa);let r=qa.get(t);r||(r={A:[],B:[],U:[],K:[],n:0},qa.set(t,r));let o=s.attributes.position.array,a=s.attributes.uv.array,l=o.length/3,c=a;if(e.uv){c=new Float32Array(a.length);for(let p=0;p<a.length;p++)c[p]=a[p]*e.uv[p&1]}if(Qe.set(e.c===void 0?16777215:e.c).convertSRGBToLinear(),t===X.log||t===X.plank||t===X.thatch||t===X.stone||t===X.hull){let p=Math.max(Qe.r,Qe.g,Qe.b,.001);Qe.multiplyScalar(oe(1,1.1/p,.85));let g=(Qe.r+Qe.g+Qe.b)/3;Qe.r=oe(Qe.r,g,.45),Qe.g=oe(Qe.g,g,.45),Qe.b=oe(Qe.b,g,.45)}e.k&&Qe.multiplyScalar(e.k);let h=new Float32Array(l*3),f=zn.elements[13],m=nn&&e.ao!==!1;for(let p=0;p<l;p++){let g=m?oe(.38,1,Dt(-.1,1.3,o[p*3+1]-f)):1;h[p*3]=Qe.r*g,h[p*3+1]=Qe.g*g,h[p*3+2]=Qe.b*g}r.A.push(o),r.B.push(s.attributes.normal.array),r.U.push(c),r.K.push(h),r.n+=l}function Yt(i,t,e,n,s){s=s||{},Va.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]);let r=Va.length();Va.multiplyScalar(1/r),If.setFromUnitVectors(T_,Va),nt(s.round?ho:he,i,{p:[(t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2],q:If.clone(),s:[r,n,s.th2||n],c:s.c,k:s.k,uv:s.uv||[r/2.5,s.round?1:n*2],ao:s.ao})}function R_(){for(let[i,t]of qa){let e=Nf(Ga(t.A,t.n*3),Ga(t.B,t.n*3),Ga(t.U,t.n*2),Ga(t.K,t.n*3)),n=new Me(e,i);n.castShadow=i!==X.ember,n.receiveShadow=!0,Df.add(n)}qa.clear()}function qe(i,t,e,n){zn.makeRotationY(e||0).setPosition(i,Oe(i,t)+(n||0),t)}var Bn=(i,t,e)=>new U(i,t,e).applyMatrix4(zn),is=(i,t,e,n)=>Math.atan2(-(n-t),e-i);function co(i,t,e,n,s){let r=[],o=[],a=[];for(let c=0;c<=e;c++)for(let h=0;h<=t;h++){let f=i(h/t,c/e);r.push(f[0],f[1],f[2]),o.push(h/t*n,c/e*s)}for(let c=0;c<e;c++)for(let h=0;h<t;h++){let f=c*(t+1)+h,m=f+t+1;a.push(f,m,f+1,m,m+1,f+1)}let l=new _e;return l.setAttribute("position",new Ht(r,3)),l.setAttribute("uv",new Ht(o,2)),l.setIndex(a),l.computeVertexNormals(),l}function Ff(i,t,e,n,s,r,o){let a=Math.min(.35,i*.018),l=t/2,c=Math.hypot(e,l),h=l/c,f=e/c,m=o||ae()*50;for(let p of[-1,1]){let g=(x,v)=>{let _=(x-.5)*i,C=a*Math.sin(ut*x)*v,A=(On(x*9+m,v*4+p*3)-.5)*.14;return[_,v*e-C+A*h+(v===0?(On(x*14+m,1)-.5)*.1:0),p*(l*(1-v)+A*f*.5)]},y=(x,v)=>{let _=g(x,v);return[_[0],_[1]-n*h*1.2,_[2]-p*n*f*.6]},d=p>0,u=(x,v,_,C,A,T,b)=>nt(co(T?(M,S)=>x(1-M,S):x,v,_,C,A),X.thatch,{p:[0,s,0],c:r,k:b,ao:!1});u(g,12,5,i/2.4,c/2.4,d),u(y,6,2,i/2.4,c/2.4,!d,.45),u((x,v)=>v<.5?g(x,0):y(x,0),12,1,i/2.4,.15,!d,.7);for(let x of[0,1])u((v,_)=>v<.5?g(x,_):y(x,_),1,5,.15,c/2.4,x?!d:d,.7)}for(let p=0;p<6;p++){let g=p/6,y=(p+1)/6,d=s+e-a*Math.sin(ut*g)+.02,u=s+e-a*Math.sin(ut*y)+.02;Yt(X.thatch,[(g-.5)*i-.1,d,0],[(y-.5)*i+.1,u,0],.46,{round:!0,c:r,k:.85,ao:!1,uv:[1,2]})}}function C_(i,t){let e=i/2;return Nf(new Float32Array([0,0,-e,0,0,e,0,t,0]),new Float32Array([-1,0,0,-1,0,0,-1,0,0]),new Float32Array([0,0,i/2.2,0,i/4.4,t/2.2]))}var P_=new $i(.34,.055,6,12,ut*1.35);function Es(i,t,e,n,s,r){r=r||{},qe(i,t,e,.05);let o=r.tint||16777215,a=r.r||.17,l=r.n||7,c=l*a*1.85,h=.32;nt(he,X.stone,{p:[0,-.6,0],s:[n+.5,1.9,s+.5],uv:[n/2.4,.8],ao:!1,k:.8});for(let T=0;T<l;T++){let b=h+a+T*a*1.85;for(let M of[-1,1])Yt(X.log,[-n/2-J(.35,.6),b,M*s/2],[n/2+J(.35,.6),b,M*s/2],a*2*J(.93,1.06),{round:!0,c:o,k:J(.8,1.05)}),Yt(X.log,[M*n/2,b+a*.9,-s/2-J(.35,.6)],[M*n/2,b+a*.9,s/2+J(.35,.6)],a*2*J(.93,1.06),{round:!0,c:o,k:J(.8,1.05)})}nt(he,X.dark,{p:[0,h+c/2,0],s:[n-a,c,s-a],ao:!1});let f=h+c+a*.9,m=r.roofH||s*.62;for(let T of[-1,1])nt(C_(s,m),X.plank,{p:[T*n/2,f,0],r:[0,T>0?ut:0,0],c:o,k:.8,ao:!1}),Yt(X.log,[T*(n/2+.02),f+m*.45,-s*.27],[T*(n/2+.02),f+m*.45,s*.27],.16,{c:o,k:.7,ao:!1});let p=.75,g=s+2*p,y=m*g/s,d=f-p*(2*m/s)+.1,u=n+1.5;Ff(u,g,y,.34,d,r.roof||16777215);let x=Math.hypot(y,g/2),v=x+1;for(let T of[-1,1])for(let b of[-1,1]){let M=y/x,S=-b*(g/2)/x,I=T*(u/2+.07);nt(he,X.log,{p:[I,d+M*v/2-.12,b*g/2+S*v/2],r:[Math.atan2(S,M),0,0],s:[.09,v,.3],uv:[.3,v/2.5],c:9073752,ao:!1}),nt(P_,X.log,{p:[I,d+M*v-.05,b*g/2+S*v-b*.3],r:[0,b>0?ut/2:-ut/2,0],c:8020552,ao:!1})}let _=n/2+a+.05,C=Math.min(2.05,c-.1),A=r.dw||1.15;nt(he,X.plank,{p:[_,h+C/2,0],s:[.1,C,A],uv:[A/2.4,C/2.4],c:7232068,r:[0,0,0]});for(let T of[.35,.8])nt(he,X.metal,{p:[_+.06,h+C*T,0],s:[.02,.07,A*.92],c:3815996,ao:!1});nt(Pn,X.metal,{p:[_+.08,h+C*.52,A*.32],s:.05,c:3815996,ao:!1});for(let T of[-1,1])nt(he,X.plank,{p:[_+.02,h+C/2+.05,T*(A/2+.11)],s:[.24,C+.15,.22],uv:[.2,1],c:9073752});return nt(he,X.log,{p:[_+.02,h+C+.2,0],s:[.26,.26,A+.7],r:[0,ut/2,0].map((T,b)=>0),uv:[.3,.2],c:9073752,ao:!1}),nt(li,X.stone,{p:[_+.55,.08,0],s:[.6,.2,.9],c:11907754}),mr(i,t,e,n/2+.45,s/2+.6),r.smoke!==!1&&Ts.push(Bn(r.sx||0,d+y+.1,0)),ae()<.85&&(uo(n/2-1.2,s/2+.8),ae()<.5&&uo(n/2-2.1,s/2+.85)),ae()<.85&&I_(-n/4,-(s/2+.78)),ae()<.6&&(Yt(X.log,[n/4,.05,s/2+.7],[n/4+.25,2.2,s/2+.3],.05,{round:!0}),Yt(X.log,[n/4+.4,.05,s/2+.7],[n/4+.5,2,s/2+.3],.05,{round:!0})),{ry:d,rh2:y,gy:f,wallH:c,base:h}}function uo(i,t){let e=J(.85,1.05);nt(ze,X.plank,{p:[i,.45*e,t],s:[.3*e,.9*e,.3*e],uv:[.4,1.2],c:10125408}),nt(ze,X.plank,{p:[i,.45*e,t],s:[.335*e,.5*e,.335*e],uv:[.4,1.2],c:10125408});for(let n of[.2,.45,.7])nt(ze,X.metal,{p:[i,n*e,t],s:[.345*e,.045,.345*e],c:3026480})}function I_(i,t){for(let e=0;e<4;e++)for(let n=0;n<6-e;n++)nt(ho,X.log,{p:[i+J(-.05,.05),.13+e*.22,t-.65+n*.25+e*.12],s:[1.1,.25,.25],uv:[.4,.5],c:12625020,k:J(.75,1.05)})}function Lf(i,t,e){nt(he,X.plank,{p:[i,e/2,t],s:[e,e,e],r:[0,J(0,1),0],uv:[e/2,e/2],c:11047024})}function Mh(i,t){nt(Pn,X.cloth,{p:[i,.28,t],s:[.3,.34,.26],c:10521184}),nt(Pn,X.cloth,{p:[i,.6,t],s:[.1,.08,.1],c:9073740})}function Mr(i,t,e){qe(i,t,0),nt(ze,X.log,{p:[0,e/2,0],s:[.06,e,.06],c:5916210}),nt(ze,X.metal,{p:[0,e+.05,0],s:[.13,.2,.13],c:2763308,ao:!1}),nt(Pn,X.ember,{p:[0,e+.2,0],s:[.11,.12,.11],c:16777215,ao:!1}),Mn.push({p:Bn(0,e+.22,0),s:.45}),Ae.push({x:i,z:t,r:.15})}function Sr(i,t,e,n,s){qe(i,t,s===void 0?J(0,6):s),nt(li,X.rock,{p:[0,e*.42,0],s:[n,e*.62,n*.55],r:[J(-.08,.08),0,J(-.08,.08)]}),Ae.push({x:i,z:t,r:n*.75})}function lo(i,t,e,n){zn.identity(),nn=!1;let s=Math.hypot(e-i,n-t),r=Math.max(1,Math.round(s/2.6)),o=null;for(let a=0;a<=r;a++){let l=oe(i,e,a/r)+J(-.05,.05),c=oe(t,n,a/r)+J(-.05,.05),h=Oe(l,c);nt(ze,X.log,{p:[l,h+.55,c],s:[.07,1.35,.07],r:[J(-.05,.05),0,J(-.05,.05)],c:9075302}),o&&(Yt(X.log,[o[0],o[1]+.5,o[2]],[l,h+.42,c],.08,{round:!0,c:10127988}),Yt(X.log,[o[0],o[1]+.9,o[2]],[l,h+1,c],.08,{round:!0,c:10127988})),o=[l,h,c]}nn=!0,mr((i+e)/2,(t+n)/2,Math.atan2(-(n-t),e-i),s/2,.12)}var Wa,Of;function Sh(i,t,e,n){zn.makeRotationY(e).setPosition(i,.5,t),nn=!1,nt(Wa,X.hull,{c:6965808}),nt(he,X.plank,{p:[0,-.42,0],s:[11.5,.06,2.1],uv:[5,1],c:10126440});for(let r=-4;r<=4;r++)nt(he,X.log,{p:[r*1.15,-.18,0],s:[.26,.07,2.6-Math.abs(r)*.14],r:[0,ut/2,0].map(()=>0),c:9073238});if(nt(ze,X.log,{p:[0,3.9,0],s:[.12,9,.12],uv:[4,1],c:10126440}),Yt(X.log,[0,8,-3.3],[0,8,3.3],.14,{round:!0,c:10126440}),n)nt(Of,X.sail,{p:[.15,5.35,0]});else for(let r=0;r<5;r++)nt(Pn,X.cloth,{p:[0,7.78,-2.4+r*1.2],s:[.24,.22,.68],c:13615778});for(let r of[-1,1]){let o=[[r*8.3,1.7,0],[r*8.75,2.5,0],[r*8.95,3.2,0],[r*8.8,3.75,0],[r*8.45,3.95,0]];for(let a=0;a<4;a++)Yt(X.log,o[a],o[a+1],.22-a*.025,{round:!0,c:6965808});nt(Pn,X.log,{p:[r*8.2,3.9,0],s:[.3,.15,.13],c:6965808}),Yt(X.dark,[0,8.3,0],[r*8.4,2.1,0],.035,{round:!0,c:4865066});for(let a of[-1,1])Yt(X.dark,[0,8.2,0],[r*1.5,.1,a*1.5],.03,{round:!0,c:4865066})}let s=[9054752,13081140,2902640,14208436,2302755];for(let r=-4;r<=4;r++){let o=r*1.15/8.5,a=1.55*Math.pow(1-o*o,.55),l=2*Math.pow(Math.abs(o),4);for(let c of[-1,1])nt(ws,X.shield,{p:[r*1.15,l-.12,c*(a+.06)],r:[ut/2,0,0],s:[.4,.05,.4],c:s[(r+4+(c>0?2:0))%5]}),nt(Pn,X.metal,{p:[r*1.15,l-.12,c*(a+.1)],s:[.08,.08,.05],c:8948366})}nn=!0}function Bf(i,t,e,n){Df=i,li=e;let s=(d,u)=>new Ke(Object.assign({map:d&&d.map,normalMap:d&&d.normalMap,vertexColors:!0,roughness:.92,metalness:0},u)),r=(d,u,x)=>{let v=document.createElement("canvas");v.width=d,v.height=u,x(v.getContext("2d"),d,u);let _=new Ti(v);return _.colorSpace=$e,_.wrapS=_.wrapT=Gi,_.anisotropy=4,_},o=r(256,256,(d,u,x)=>{for(let v=0;v<8;v++)d.fillStyle=v%2?"#d9ccac":"#8f2f22",d.fillRect(v*32,0,32,x);for(let v=0;v<400;v++)d.fillStyle=`rgba(40,30,20,${J(.02,.08)})`,d.fillRect(J(0,u),J(0,x),J(10,60),J(2,14))}),a=r(128,128,(d,u,x)=>{d.fillStyle="#7a6046",d.fillRect(0,0,u,x);for(let v=0;v<4;v++)d.fillStyle=v%2?"#f2f2f2":"#8a8a8a",d.beginPath(),d.moveTo(64,64),d.arc(64,64,62,v*ut/2,(v+1)*ut/2),d.fill();for(let v=0;v<9;v++)d.fillStyle="rgba(30,20,10,.3)",d.fillRect(v*14+3,0,1.5,x);for(let v=0;v<60;v++)d.fillStyle=`rgba(60,45,30,${J(.1,.35)})`,d.fillRect(J(0,u),J(0,x),J(2,14),J(1,3));d.strokeStyle="#2e241a",d.lineWidth=8,d.beginPath(),d.arc(64,64,59,0,7),d.stroke()}),l=r(128,256,(d,u,x)=>{d.fillStyle="#7a7770",d.fillRect(0,0,u,x);for(let v=0;v<2500;v++)d.fillStyle=ae()<.5?"rgba(20,20,20,.2)":"rgba(230,230,220,.14)",d.fillRect(J(0,u),J(0,x),2,2);d.strokeStyle="#7a2218",d.lineWidth=14,d.lineCap="round",d.beginPath(),d.moveTo(24,240),d.bezierCurveTo(6,120,20,28,64,24),d.bezierCurveTo(108,28,122,120,104,240),d.stroke(),d.strokeStyle="#cfc4ae",d.lineWidth=2;for(let v=0;v<34;v++){let _=v/33,C,A;if(_<.4)C=19-_*6,A=234-_/.4*170;else if(_<.6){let T=ut+(_-.4)/.2*ut;C=64+Math.cos(T)*42,A=62+Math.sin(T)*36}else C=107,A=64+(_-.6)/.4*170;d.beginPath(),d.moveTo(C,A-5),d.lineTo(C+J(-2,2),A+5),d.moveTo(C,A-J(0,5)),d.lineTo(C+4,A+J(-3,3)),d.stroke()}d.strokeStyle="#7a2218",d.lineWidth=5,d.beginPath(),d.moveTo(64,74),d.lineTo(64,200),d.moveTo(44,104),d.lineTo(84,104),d.moveTo(46,146),d.lineTo(82,172),d.stroke()});Object.assign(X,{log:s(t.wood),plank:s(t.plank),thatch:s(t.thatch,{side:Fe,roughness:1}),stone:s(t.stone),rock:n,dark:s(null,{color:394500,roughness:1}),cloth:s({map:t.cloth.map,normalMap:t.cloth.normalMap},{side:Fe}),sail:s({map:o,normalMap:t.cloth.normalMap},{side:Fe}),hull:s(t.wood,{side:Fe,roughness:.8}),metal:s({map:t.metal.map,normalMap:t.metal.normalMap},{roughness:.45,metalness:.85}),shield:s({map:a,normalMap:t.plank.normalMap}),rune:s({map:l,normalMap:t.rock.normalMap}),ember:new qi({vertexColors:!0,color:new Tt(5,1.5,.25)}),shieldTex:a}),X.rock=n,X.stone.normalScale=new ot(1.6,1.6),X.thatch.normalScale=new ot(1.5,1.5);let c=mn.dockZ,h=[10,-30];X.bark=s(t.bark,{roughness:1});let f=(d,u,x)=>{zn.identity(),nn=!1;let v=Math.cos(x),_=Math.sin(x),C=[];for(let A of[-1,1]){let T=d+v*A*2.9,b=u+_*A*2.9,M=Oe(T,b);nt(ze,X.log,{p:[T,M+2.5,b],s:[.34,5.6,.34],uv:[2.5,1.2]}),C.push([T,M+4.5,b]),Ae.push({x:T,z:b,r:.42})}Yt(X.log,C[0],C[1],.4,{round:!0}),Yt(X.log,[C[0][0],C[0][1]+.55,C[0][2]],[C[1][0],C[1][1]+.55,C[1][2]],.3,{}),nn=!0;for(let A of[-1,1])Mr(d+v*A*3.8,u+_*A*3.8,2.2)};{let d=[-.44,.9],u=ji.x-d[0]*5,x=ji.z-d[1]*5,v=15,_=is(u,x,u+d[0],x+d[1]);Es(u,x,_,v,8.8,{tint:14206116,r:.2,n:8,sx:-2,roofH:6.2,dw:1.9});let C=v/2,A=[];for(let b of[-1,1]){nt(ze,X.log,{p:[C+1.7,1.9,b*2.2],s:[.24,3.8,.24],uv:[2,1]}),nt(Pn,X.metal,{p:[C+1.7,3.95,b*2.2],s:.2,c:13214794,ao:!1}),nt(he,X.cloth,{p:[C+.45,3.4,b*3.2],s:[.03,2.6,.9],c:9054752,ao:!1}),nt(he,X.cloth,{p:[C+.47,3.4,b*3.2],s:[.03,.7,.5],c:14267482,ao:!1});let M=Bn(C+1.7,0,b*2.2);Ae.push({x:M.x,z:M.z,r:.32}),A.push(Bn(C+3.2,0,b*3.6))}Yt(X.log,[C+1.7,3.7,-2.5],[C+1.7,3.7,2.5],.26,{ao:!1}),nt(co((b,M)=>[C+.4+M*1.9,4.9-M*1,(b-.5)*5.6],2,2,2.4,.9),X.thatch,{ao:!1});let T=[10105382,13805114,3431046,14734780];for(let b=0;b<5;b++)for(let M of[-1,1])nt(ws,X.shield,{p:[-5+b*2.5,2.1,M*(4.4+.26)],r:[ut/2,0,0],s:[.42,.05,.42],c:T[(b+(M>0?1:0))%4],ao:!1}),nt(Pn,X.metal,{p:[-5+b*2.5,2.1,M*(4.4+.3)],s:[.09,.09,.05],c:8948366,ao:!1});for(let b of A)Mr(b.x,b.z,2.2);for(let b=0;b<46;b++){let M=b/46*2*ut,S=Math.cos(M),I=Math.sin(M);if(S*d[0]+I*d[1]>.8||S>.5&&I>.1)continue;let R=ji.x+S*14.5,V=ji.z+I*14.5;qe(R,V,-M),nt(li,X.rock,{p:[0,.25,0],s:[.55,.5,.95],r:[J(-.2,.2),0,J(-.2,.2)]}),Ae.push({x:R,z:V,r:.7})}}let m=[[-6,-12],[30,-6],[-16,-50],[32,-58],[6,-72],[-20,-29],[50,-80]],p=[16777215,15128252,13482908,15918800,14076078,16777215,14732976],g=[16777215,10135656,15260864,13223066,9083484,16777215,14536880];m.forEach((d,u)=>Es(d[0],d[1],is(d[0],d[1],h[0],h[1]),J(9.5,12),J(5.2,6),{tint:p[u],roof:g[u]})),Es(34,22,is(34,22,30,44),9,5,{smoke:!1,n:6,roof:13223066}),Es(-17,6,is(-17,6,-12,30),8,4.8,{smoke:!1,n:6,tint:13482908}),qe(h[0],h[1],0);for(let d=0;d<12;d++){let u=d/12*2*ut;nt(li,X.rock,{p:[Math.cos(u)*1.2,.1,Math.sin(u)*1.2],s:[.34,.26,.28],r:[0,u,0]})}for(let d=0;d<5;d++){let u=d*ut/5;Yt(X.log,[Math.cos(u)*.75,.12,Math.sin(u)*.75],[-Math.cos(u)*.5,.5,-Math.sin(u)*.5],.2,{round:!0,c:4864560,k:.25,ao:!1})}nt(ws,X.ember,{p:[0,.1,0],s:[.8,.12,.8],c:16777215,k:.5,ao:!1});for(let d=0;d<4;d++){let u=d*ut/2+.5,x=3.3,v=Math.cos(u),_=Math.sin(u);Yt(X.log,[v*x-_*1.3,.26,_*x+v*1.3],[v*x+_*1.3,.26,_*x-v*1.3],.46,{round:!0}),Ae.push({x:h[0]+v*x,z:h[1]+_*x,r:.75})}Ae.push({x:h[0],z:h[1],r:1.45}),Mn.push({p:Bn(0,.35,0),s:1.25});for(let d of[-1,1])Yt(X.log,[d*1.5,0,-.25],[d*1.5,1.5,0],.07,{round:!0}),Yt(X.log,[d*1.5,0,.25],[d*1.5,1.5,0],.07,{round:!0});Yt(X.metal,[-1.6,1.48,0],[1.6,1.48,0],.04,{round:!0,c:3026480}),nt(Pn,X.metal,{p:[0,1.15,0],s:[.3,.26,.3],c:1973792,ao:!1}),qe(1,-20,0);for(let d=0;d<3;d++)for(let u=0;u<12;u++){let x=(u+d*.5)/12*2*ut;nt(li,X.rock,{p:[Math.cos(x)*.95,.15+d*.3,Math.sin(x)*.95],s:[.3,.2,.26],r:[0,-x,0]})}nt(ws,X.dark,{p:[0,.7,0],s:[.8,.1,.8],c:660504});for(let d of[-1,1])nt(ze,X.log,{p:[d*1.05,1.4,0],s:[.09,2.8,.09]});Yt(X.log,[-1.15,2.2,0],[1.15,2.2,0],.18,{round:!0}),Yt(X.dark,[0,2.2,0],[0,.9,0],.03,{round:!0,c:6969920}),nt(co((d,u)=>[(d-.5)*3,3.3-Math.abs(u-.5)*1.3,(u-.5)*2.1],2,2,1.4,1),X.thatch,{ao:!1}),nt(ze,X.plank,{p:[1.6,.25,.5],s:[.22,.5,.22]}),Ae.push({x:1,z:-20,r:1.3});{let x=is(34,-36,h[0],h[1]);qe(34,-36,x);for(let C of[-2.7,2.7])for(let A of[-2.1,2.1]){nt(ze,X.log,{p:[C,1.35,A],s:[.13,2.7,.13]});let T=Bn(C,0,A);Ae.push({x:T.x,z:T.z,r:.25})}for(let C of[-2.1,2.1])Yt(X.log,[-2.9,2.6,C],[2.9,2.6,C],.2,{round:!0,ao:!1});Ff(6.9,5.8,2.2,.3,2.62,13616288);for(let C=0;C<7;C++)Yt(X.log,[-2.7,.3+C*.33,-2.2],[-2.7,.3+C*.33,2.2],.32,{round:!0,k:J(.8,1)});nt(he,X.stone,{p:[-1.5,.5,-.6],s:[1.5,1,1.7],uv:[.7,.5]}),nt(he,X.ember,{p:[-1.5,1.02,-.6],s:[.95,.06,1.15],c:16777215,k:.55,ao:!1}),nt(he,X.stone,{p:[-1.95,1.9,-.6],s:[.7,1.8,1],uv:[.4,.8],ao:!1}),nt(ze,X.log,{p:[.3,.3,.4],s:[.3,.6,.3]}),nt(he,X.metal,{p:[.3,.74,.4],s:[.62,.2,.2],c:4540494,ao:!1}),nt(he,X.metal,{p:[.3,.64,.4],s:[.3,.12,.15],c:4540494,ao:!1}),uo(1.7,-1.4),nt(he,X.plank,{p:[1.3,.85,1.5],s:[1.7,.07,.7]});for(let C of[.6,2])nt(he,X.plank,{p:[C,.42,1.5],s:[.1,.84,.6]});nt(he,X.metal,{p:[1.2,.91,1.5],s:[.9,.03,.07],r:[0,.3,0],c:10132898,ao:!1}),nt(he,X.metal,{p:[.9,.91,1.6],s:[.5,.03,.12],r:[0,-.5,0],c:7830144,ao:!1});let v=Bn(-1.6,0,-.6);Ae.push({x:v.x,z:v.z,r:1.15});let _=Bn(.3,0,.4);Ae.push({x:_.x,z:_.z,r:.45}),Mn.push({p:Bn(-1.5,1.12,-.6),s:.6}),Ts.push(Bn(-1.9,3,-.6))}let y=(d,u,x,v)=>{qe(d,u,x);for(let _ of[-1.4,1.4])for(let C of[-.9,.9])nt(ze,X.log,{p:[_,1.15,C],s:[.055,2.3,.055]});nt(co((_,C)=>[(_-.5)*3.3,2.5-C*.5-Math.sin(_*ut)*.12,(C-.5)*2.3],6,3,2,2),X.cloth,{c:v,ao:!1}),nt(he,X.plank,{p:[0,.85,0],s:[2.8,.07,1.2],uv:[1.2,.5]});for(let _ of[-1.2,1.2])nt(he,X.plank,{p:[_,.42,0],s:[.1,.84,1.1]});for(let _=0;_<6;_++)nt(Pn,X.cloth,{p:[-1.1+_*.44,.97,J(-.3,.3)],s:[.17,.12,.17],c:[11883578,13214266,9083466,14207136,8018490,11160138][_],ao:!1});Lf(1.9,.2,.6),Mh(-1.9,.3),Mh(-2.2,-.2),mr(d,u,x,1.5,.75)};y(19,-22,-.5,9058858),y(0,-40,.9,3561594);{qe(20,-44,.7),nt(he,X.plank,{p:[0,.85,0],s:[2.4,.08,1.2],uv:[1,.5]});for(let d of[-1,1])nt(he,X.plank,{p:[0,1.1,d*.6],s:[2.4,.45,.06],uv:[1,.2]}),nt(ws,X.plank,{p:[.2,.5,d*.78],r:[ut/2,0,0],s:[.5,.09,.5]}),nt(ws,X.metal,{p:[.2,.5,d*.84],r:[ut/2,0,0],s:[.1,.05,.1],c:3026480});Yt(X.log,[1.2,.85,.4],[3,.25,.4],.08,{round:!0}),Yt(X.log,[1.2,.85,-.4],[3,.25,-.4],.08,{round:!0});for(let d=0;d<3;d++)nt(ho,X.thatch,{p:[-.5+d*.5,1.2,J(-.1,.1)],r:[0,ut/2,0],s:[1,.55,.55],c:14732426,ao:!1});mr(20,-44,.7,1.4,.8)}f(4,-84,0),Mr(12,4,2.1),Mr(-36,-46,2),Mr(-46,-54,2),zn.identity(),nn=!1;{let d=c-3,u=c+28,x=1.15;for(let v=d;v<u;v+=.34)nt(he,X.plank,{p:[10+J(-.04,.04),x-.07+J(-.012,.012),v+.16],s:[3.3,.09,.31],uv:[.17,1.4],k:J(.75,1.05),r:[0,J(-.01,.01),0]});for(let v=3.6;v<16.4;v+=.34)nt(he,X.plank,{p:[v+.16,x-.07+J(-.012,.012),u+1.5],s:[.31,.09,3.3],uv:[.17,1.4],k:J(.75,1.05)});for(let v of[-1.45,1.45])Yt(X.log,[10+v,x-.22,d],[10+v,x-.22,u],.2,{k:.7});for(let v=d+2;v<=u+2;v+=4)for(let _ of[-1.6,1.6])nt(ze,X.log,{p:[10+_,-1.4,v],s:[.17,6.2,.17],uv:[3,1],k:.7});for(let v of[-6.3,6.3])for(let _ of[0,3])nt(ze,X.log,{p:[10+v,-1.4,u+_],s:[.17,6.4,.17],uv:[3,1],k:.7});pr.push({x:10,z:(d+u)/2,c:0,s:1,hl:(u-d)/2,hw:1.6,h0:x,h1:x,arch:0}),pr.push({x:10,z:u+1.5,c:1,s:0,hl:6.5,hw:1.6,h0:x,h1:x,arch:0}),zn.makeTranslation(15.3,x,u+.9),uo(0,0),uo(.7,.3),Lf(-1,.2,.6),Mh(-1.8,.1);for(let v=0;v<7;v++)nt(new $i(.3,.04,5,12),X.cloth,{p:[-9.5,.03+v*.05,.6],r:[ut/2,0,0],c:10126944,ao:!1});nn=!0;for(let v of[20,25]){qe(v,c-8,.3);for(let _ of[-1.5,1.5])Yt(X.log,[_,0,-.5],[_,2,0],.08,{round:!0}),Yt(X.log,[_,0,.5],[_,2,0],.08,{round:!0});Yt(X.log,[-1.7,2,0],[1.7,2,0],.07,{round:!0});for(let _=0;_<10;_++)nt(Pn,X.cloth,{p:[-1.4+_*.31,1.68,0],s:[.035,.26,.09],c:11578010,ao:!1})}}Wa=(()=>{let x=[],v=[],_=[];for(let A=0;A<=30;A++){let T=A/30*2-1,b=1-T*T,M=1.55*Math.pow(b,.55),S=.95*Math.pow(b,.35),I=2*Math.pow(Math.abs(T),4);for(let F=0;F<=12;F++){let R=(F/12-.5)*ut;x.push(T*8.5,-S*Math.cos(R)+I,M*Math.sin(R)),v.push(T*3,F/12*1.2)}}for(let A=0;A<30;A++)for(let T=0;T<12;T++){let b=A*13+T,M=b+12+1;_.push(b,M,b+1,M,M+1,b+1)}let C=new _e;return C.setAttribute("position",new Ht(x,3)),C.setAttribute("uv",new Ht(v,2)),C.setIndex(_),C.computeVertexNormals(),C})(),Of=(()=>{let d=new qn(6.4,5.2,10,6),u=d.attributes.position;for(let x=0;x<u.count;x++)u.setZ(x,.9*Math.cos(u.getX(x)/6.4*ut)*(.55+.45*(.5-u.getY(x)/5.2))+Math.sin(u.getY(x)*2.2)*.05);return d.computeVertexNormals(),d.rotateY(ut/2),d})(),Sh(4.2,c+16,ut/2,!1),Sh(16,c+18,-ut/2,!1),Sh(ts(150)-6,150,1.05,!0);{let u=c-3.5;zn.makeRotationY(.5).multiply(Xa.makeRotationX(.22)).setPosition(26,Oe(26,u)+.42,u),nn=!1,nt(Wa,X.hull,{s:[.42,.55,.5]}),nn=!0,Ae.push({x:26,z:u,r:1.4})}{let d=mn.wreck;zn.makeRotationY(.9).multiply(Xa.makeRotationX(.5)).setPosition(d.x-5,Oe(d.x-5,d.z)+.7,d.z),nn=!1,nt(Wa,X.hull,{c:9077880,k:.7}),Yt(X.log,[0,-.3,0],[.6,4.2,1.2],.22,{round:!0,k:.6});for(let u=-3;u<=3;u++)nt(he,X.log,{p:[u*1.3,-.2,0],s:[.2,.07,2.4],k:.6});nn=!0,Ae.push({x:d.x-5,z:d.z,r:2.6})}{let v=Oe(-49.5,-50),_=Oe(-41+8.5,-50),C=.8;zn.identity(),nn=!1,pr.push({x:-41,z:-50,c:1,s:0,hl:8.5,hw:1.5,h0:v+.05,h1:_+.05,arch:C});let A=b=>oe(v,_,(b+1)/2)+C*(1-b*b);for(let b=-8.5;b<8.5;b+=.36){let M=(b+.18)/8.5,S=(A(M+.01)-A(M-.01))/(.02*8.5);nt(he,X.plank,{p:[-41+b+.18,A(M)-.06,-50],s:[.33,.1,3.1],r:[0,0,Math.atan(S)],uv:[.17,1.5],k:J(.75,1.05)})}let T=6;for(let b=0;b<T;b++){let M=b/T*2-1,S=(b+1)/T*2-1;for(let I of[-1,1]){let F=-50+I*1.45;Yt(X.log,[-41+M*8.5,A(M)-.25,-50+I*1.1],[-41+S*8.5,A(S)-.25,-50+I*1.1],.22,{k:.7}),Yt(X.log,[-41+M*8.5,A(M)+1,F],[-41+S*8.5,A(S)+1,F],.12,{round:!0}),nt(ze,X.log,{p:[-41+M*8.5,A(M)+.45,F],s:[.07,1.25,.07]}),(b===2||b===4)&&nt(ze,X.log,{p:[-41+M*8.5,A(M)-1.6,F],s:[.2,3.2,.2],uv:[2,1],k:.7})}}for(let b of[-1,1])nt(ze,X.log,{p:[-41+8.5,A(1)+.45,-50+b*1.45],s:[.07,1.25,.07]});nn=!0}qe(-58,-43,-.9),nt(he,X.rune,{p:[0,1.5,0],s:[1.5,3.2,.4],r:[.05,0,.03],uv:[1,1]}),nt(li,X.rock,{p:[0,.1,0],s:[1.3,.4,.9]}),Ae.push({x:-58,z:-43,r:.9}),Es(30,-140,is(30,-140,30,-120),11,5.6,{roof:10135656}),Es(50,-142,is(50,-142,50,-120),8,5,{smoke:!1,tint:13482908,n:6}),lo(12,-84,64,-84),lo(64,-84,64,-126),lo(64,-126,40,-126),lo(34,-126,12,-126),lo(12,-126,12,-84);for(let d of[[18,-132],[21,-134.5],[40,-133],[14,-136],[16,-133]])qe(d[0],d[1],J(0,3)),nt(ho,X.thatch,{p:[0,.62,0],s:[1.3,1.25,1.25],uv:[2,1],c:15126666}),Ae.push({x:d[0],z:d[1],r:.85});{qe(36,-192,0),nn=!1;let x=0,v=(_,C,A,T,b)=>{let M=[_[0]+C[0]*A,_[1]+C[1]*A,_[2]+C[2]*A];if(Yt(X.bark,_,M,T*2,{round:!0,uv:[A/3,2],k:1.3}),nt(Pn,X.bark,{p:M,s:T*1.02,k:1.3}),b<=0)return;let S=b>2?3:2;for(let I=0;I<S;I++){let F=J(0,6.28),R=J(.5,.95),V=[C[0]+Math.cos(F)*R,C[1]+J(-.1,.45),C[2]+Math.sin(F)*R],G=Math.hypot(V[0],V[1],V[2]);v(M,[V[0]/G,V[1]/G,V[2]/G],A*J(.62,.82),T*.6,b-1),b===2&&x++%3===0&&nt(he,X.cloth,{p:[M[0],M[1]-.7,M[2]],s:[.12,1.3,.02],r:[0,J(0,3),0],c:[10103328,14267482,14734780][x%3]})}};Yt(X.bark,[0,-1,0],[.3,4,.2],3.4,{round:!0,uv:[2,3],k:1.3}),v([.3,4,.2],[.08,1,.05],4.5,1.35,4);for(let _=0;_<7;_++){let C=_/7*6.28+.3;Yt(X.bark,[Math.cos(C)*1.1,1.3,Math.sin(C)*1.1],[Math.cos(C)*4,-.5,Math.sin(C)*4],1,{round:!0,k:1.3})}nn=!0,Ae.push({x:36,z:-192,r:2.3});for(let _=0;_<9;_++){let C=_/9*2*ut;Sr(36+Math.cos(C)*9,-192+Math.sin(C)*9,J(1.2,2.2),J(.5,.8),-C)}Sr(52,-197,1.6,.6),Sr(22,-200,1.4,.55)}for(let d=0;d<9;d++){let u=d/9*2*ut;Sr(-110+Math.cos(u)*7.5,54+Math.sin(u)*7.5,J(2.8,3.9),J(.9,1.2),-u)}qe(-110,54,.4),nt(li,X.rock,{p:[0,.3,0],s:[1.7,.45,1.05]}),Ae.push({x:-110,z:54,r:1.3});{let d=mn.BEACON.x,u=mn.BEACON.z;qe(d,u,.3);for(let x of[-1,1])for(let v of[-1,1])Yt(X.log,[x*2.1,-.3,v*2.1],[x*1.35,7,v*1.35],.32,{round:!0}),Yt(X.log,[x*1.5,7,v*1.5],[x*1.5,9.2,v*1.5],.14,{round:!0,ao:!1});for(let x of[-1,1])Yt(X.log,[x*2,1,-2],[x*1.5,5.5,1.5],.13,{round:!0}),Yt(X.log,[-2,1,x*2],[1.5,5.5,x*1.5],.13,{round:!0});for(let x=0;x<11;x++)nt(he,X.plank,{p:[-1.8+x*.36,7,0],s:[.33,.1,3.9],uv:[.17,1.6],k:J(.8,1),ao:!1});for(let x of[-1,1])Yt(X.log,[-1.8,8,x*1.8],[1.8,8,x*1.8],.1,{round:!0,ao:!1}),Yt(X.log,[x*1.8,8,-1.8],[x*1.8,8,1.8],.1,{round:!0,ao:!1});nt(A_,X.thatch,{p:[0,10.1,0],s:[3.1,2,3.1],r:[0,ut/4,0],uv:[2,1],ao:!1}),Yt(X.log,[2.4,0,-.4],[1.9,7,-.4],.09,{round:!0}),Yt(X.log,[2.4,0,.4],[1.9,7,.4],.09,{round:!0});for(let x=1;x<14;x++){let v=x/14;nt(ho,X.log,{p:[oe(2.4,1.9,v),v*7,0],r:[0,ut/2,0],s:[.8,.06,.06],ao:!1})}Ae.push({x:d,z:u,r:2.7}),qe(d+5,u+5,0);for(let x=0;x<3;x++)for(let v=0;v<10;v++){let _=(v+x*.5)/10*2*ut;nt(li,X.rock,{p:[Math.cos(_)*.95,.15+x*.3,Math.sin(_)*.95],s:[.36,.22,.3],r:[0,-_,0]})}nt(ws,X.ember,{p:[0,.95,0],s:[.8,.1,.8],c:16777215,k:.5,ao:!1});for(let x=0;x<4;x++)Yt(X.log,[Math.cos(x*1.6)*.7,1,Math.sin(x*1.6)*.7],[-Math.cos(x*1.6)*.5,1.6,-Math.sin(x*1.6)*.5],.18,{round:!0,k:.25,ao:!1});Mn.push({p:Bn(0,1.3,0),s:1.5}),Ts.push(Bn(0,2.6,0)),Ae.push({x:d+5,z:u+5,r:1.35})}Es(-150,-60,is(-150,-60,-140,-52),7,4.6,{tint:12100744,roof:9083484,n:6});{qe(-143,-64,.4);for(let d of[-1.2,1.2])nt(ze,X.log,{p:[d,1,0],s:[.05,2,.05]});Yt(X.log,[-1.4,1.95,0],[1.4,1.95,0],.08,{round:!0});for(let d=0;d<3;d++)nt(he,X.cloth,{p:[-.8+d*.8,1.25,0],s:[.6,1.1,.04],c:[8018490,10126440,5916208][d],ao:!1});qe(-141,-55,0),nt(ze,X.log,{p:[0,.3,0],s:[.35,.6,.35],uv:[.5,2]}),Yt(X.log,[.1,.6,0],[.5,1.2,.1],.05,{round:!0}),nt(he,X.metal,{p:[.14,.66,0],s:[.2,.14,.04],ao:!1}),Ae.push({x:-141,z:-55,r:.5}),Mr(-143,-50,1.9)}{qe(10,-362,0);let d=0;[1.6,1.2,.9,.62,.42].forEach(u=>{nt(li,X.rock,{p:[J(-.1,.1),d+u*.4,J(-.1,.1)],s:[u,u*.6,u*.9],r:[0,J(0,3),0],ao:!1}),d+=u*.72}),nt(ze,X.log,{p:[0,d+1.2,0],s:[.05,3,.05],ao:!1}),nt(co((u,x)=>[u*1+.05,d+2.6-x*.75-u*.12,Math.sin(u*5)*.07],5,2,1,1),X.cloth,{c:10103328,ao:!1}),Ae.push({x:10,z:-362,r:1.6})}Sr(40,-284,2.4,.8,.3),Sr(43,-280,1.5,.6,1.2),R_()}var zf=new se,L_=new Je,kf=new Ge,D_=new U,Hf=new U,Pi=new Tt,at={sph:new Yn(1,16,12),box:new Ei(1,1,1),cyl:new Rn(1,1,1,14),cap:new ga(1,1,5,12),dome:new Yn(1,16,8,0,2*ut,0,ut/2),cone:new ar(1,1,12),ring:new $i(1,.1,6,20),arc:new $i(1,.09,6,14,ut),disc:new Rn(1,1,1,24),avent:new Rn(1,1.15,1,14,1,!0,ut*.75,ut*1.5),tunic:new or([[.275,.58],[.25,.72],[.215,.92],[.2,1.02],[.205,1.2],[.215,1.38],[.19,1.49],[.09,1.56],[.07,1.6]].map(i=>new ot(i[0],i[1])),18),dress:new or([[.32,.08],[.28,.4],[.23,.8],[.19,1.02],[.2,1.2],[.2,1.38],[.18,1.49],[.085,1.56],[.065,1.6]].map(i=>new ot(i[0],i[1])),18)},Eh=class{constructor(t,e,n,s){this.g=new Xn,this.g.position.set(e,n,s),t.add(this.g),this.parts={c:[],m:[],f:[]}}add(t,e,n,s,r,o){let a=t.index?t.toNonIndexed():t.clone();r=r||[0,0,0],kf.set(r[0],r[1],r[2],r[3]||"XYZ"),Hf.set(...typeof s=="number"?[s,s,s]:s),zf.compose(D_.set(...n),L_.setFromEuler(kf),Hf),a.applyMatrix4(zf),Pi.set(e).convertSRGBToLinear(),o!=="m"&&Pi.multiplyScalar(1.7);let l=a.attributes.position.count,c=new Float32Array(l*3);for(let h=0;h<l;h++)c[h*3]=Pi.r,c[h*3+1]=Pi.g,c[h*3+2]=Pi.b;return a.setAttribute("color",new de(c,3)),this.parts[o||"c"].push(a),this}bake(t,e){for(let n of["c","m","f"]){let s=this.parts[n];if(!s.length)continue;let r=0;s.forEach(p=>r+=p.attributes.position.count);let o=new Float32Array(r*3),a=new Float32Array(r*3),l=new Float32Array(r*2),c=new Float32Array(r*3),h=0;for(let p of s)o.set(p.attributes.position.array,h*3),a.set(p.attributes.normal.array,h*3),l.set(p.attributes.uv.array,h*2),c.set(p.attributes.color.array,h*3),h+=p.attributes.position.count;let f=new _e;f.setAttribute("position",new de(o,3)),f.setAttribute("normal",new de(a,3)),f.setAttribute("uv",new de(l,2)),f.setAttribute("color",new de(c,3));let m=new Me(f,t[n]);m.castShadow=e,m.receiveShadow=!0,this.g.add(m)}this.parts=null}},po=null;function Gf(i,t){let e=i.cloth.normalMap.clone();e.repeat.set(5,5),e.needsUpdate=!0;let n=i.bark.normalMap.clone();n.repeat.set(3,2),n.needsUpdate=!0,po={c:new Ke({vertexColors:!0,roughness:.88,normalMap:e,normalScale:new ot(.9,.9),side:Fe}),m:new Ke({vertexColors:!0,roughness:.5,metalness:.6,normalMap:i.metal.normalMap,normalScale:new ot(.5,.5)}),f:new Ke({vertexColors:!0,roughness:1,normalMap:n,normalScale:new ot(2.4,2.4),side:Fe}),shield:new Ke({map:t,normalMap:i.plank.normalMap,roughness:.8})}}var fo=10254178,jn=3811354,br=12106946,ci=5593182,bh=3812384,Vf=6965808,Ci=12098122,je=(i,t)=>i+ae()*(t-i),As=(i,t,e)=>new Tt(i).lerp(new Tt(t),e).getHex();function Rs(i,t){let e=new Xn;i.add(e);let n=[],s=(b,M,S,I)=>{let F=new Eh(b,M,S,I);return n.push(F),F},r=s(e,0,0,0),o=t.tunic,a=t.pants||4864810,l=t.hair,c=(b,M,S,I,F,R,V,G,W,Y,H)=>{for(let it=0;it<F;it++){let ct=G+(W-G)*(it+.5+Y)/F;b.add(at.box,As(7828590,11841702,ae()),[Math.sin(ct)*S,M,Math.cos(ct)*I],[R,V,.013],[H,ct,0,"YXZ"],"m")}};t.dress?r.add(at.dress,o,[0,0,0],[1,1,.72]):r.add(at.tunic,o,[0,0,0],[1,1,.72]);for(let b of[-1,1])r.add(at.sph,o,[b*.2,1.46,0],[.1,.09,.1]);if(t.trim&&r.add(at.ring,t.trim,[0,.6,0],[.272,.2,.2],[ut/2,0,0]),t.lamellar?([[1.42,.222],[1.335,.226],[1.25,.222],[1.165,.216],[1.085,.212]].forEach((b,M)=>c(r,b[0],b[1],b[1]*.72+.006,17,.078,.105,0,2*ut,M%2*.5,.1)),[[.935,.236],[.855,.252],[.775,.268]].forEach((b,M)=>c(r,b[0],b[1],b[1]*.72+.008,19,.082,.11,0,2*ut,M%2*.5,-.16)),r.add(at.ring,jn,[0,1.02,0],[.228,.168,.32],[ut/2,0,0]),r.add(at.disc,Ci,[0,1.02,.176],[.042,.012,.042],[ut/2,0,0],"m").add(at.ring,ci,[0,1.02,.184],[.03,.03,.08],null,"m"),r.add(at.ring,4863268,[0,.975,0],[.236,.176,.26],[ut/2+.06,0,.1]),r.add(at.disc,ci,[.085,.955,.178],[.036,.012,.036],[ut/2,0,0],"m").add(at.ring,Ci,[.085,.955,.186],[.022,.022,.1],null,"m"),r.add(at.box,4863268,[.05,.87,.19],[.032,.17,.012],[.08,0,.06]).add(at.box,jn,[-.1,.9,.185],[.03,.12,.012],[.08,0,-.05]),r.add(at.box,jn,[.15,.93,.13],[.085,.11,.05],[0,.5,0])):(r.add(at.ring,jn,[0,1.03,0],[.205,.15,.2],[ut/2,0,0]),r.add(at.box,Ci,[0,1.03,.152],[.05,.045,.015],null,"m"),r.add(at.box,jn,[.13,.95,.12],[.09,.11,.05])),t.fur){r.add(at.sph,bh,[0,1.52,-.03],[.31,.1,.2]);for(let b of[-1,1])r.add(at.sph,bh,[b*.21,1.5,0],[.13,.1,.15]);r.add(at.sph,bh,[0,1.47,-.13],[.24,.13,.1])}if(t.furCloak){let b=()=>As(5918790,9207916,ae());for(let M=0;M<16;M++){let S=M/16*2*ut,I=Math.cos(S)>.55;r.add(at.sph,b(),[Math.sin(S)*.25*je(.9,1.08),1.5+(I?-.05:.02)+je(-.04,.04),Math.cos(S)*.17-.02],[je(.08,.15),je(.07,.12),je(.08,.14)],[je(-.5,.5),je(0,3),je(-.5,.5)],"f")}r.add(at.sph,b(),[0,1.47,-.15],[.3,.17,.13],null,"f").add(at.sph,b(),[.2,1.44,-.05],[.16,.17,.17],null,"f").add(at.sph,b(),[-.2,1.46,-.06],[.14,.13,.15],null,"f").add(at.sph,b(),[.17,1.36,.1],[.09,.12,.06],null,"f").add(at.sph,b(),[-.15,1.4,.1],[.08,.08,.05],null,"f").add(at.sph,b(),[0,1.3,-.19],[.3,.2,.08],null,"f");for(let M=0;M<110;M++){let S=je(0,2*ut),I=je(.8,1.18),F=1.5+je(-.2,.1),R=Math.cos(S)<-.2?je(0,.16):0;r.add(at.cone,As(7234130,11839634,ae()),[Math.sin(S)*.3*I,F-R,Math.cos(S)*.21*I-.03-R*.3],[je(.016,.03),je(.1,.2),je(.016,.03)],[je(1.2,2.3),S+je(-.4,.4),0,"YXZ"],"f")}}if(r.add(at.cyl,fo,[0,1.6,0],[.055,.09,.055]),t.axe&&(r.add(at.cyl,Vf,[-.24,.78,.02],[.016,.62,.016],[.25,0,0]),r.add(at.box,br,[-.24,.54,-.02],[.02,.17,.13],[.25,0,0],"m")),t.sword){r.add(at.box,jn,[.25,.7,-.06],[.03,.72,.062],[-.38,0,.1]),r.add(at.box,Ci,[.26,.38,-.2],[.034,.07,.066],[-.38,0,.1],"m");for(let b of[.25,.5])r.add(at.box,Ci,[.25+.02*b,.7+(.5-b)*.5,-.06-(.5-b)*.2],[.034,.02,.068],[-.38,0,.1],"m");r.add(at.box,br,[.228,1.07,.08],[.03,.04,.19],[-.38,0,.1],"m"),r.add(at.cyl,Vf,[.222,1.14,.108],[.016,.12,.016],[-.38,0,.1]),r.add(at.sph,Ci,[.216,1.205,.132],.03,null,"m")}if(t.daneAxe){let b=[-.884,0,0];r.add(at.cyl,5914664,[-.266,1.62,0],[.017,1.3,.017],b),r.add(at.box,12896462,[-.27,1.895,-.455],[.012,.15,.13],b,"m").add(at.box,9080210,[-.27,1.935,-.385],[.03,.1,.06],b,"m").add(at.box,12896462,[-.27,1.79,-.445],[.011,.1,.06],[-.884-.35,0,0],"m").add(at.box,12896462,[-.27,1.955,-.53],[.011,.06,.07],[-.884+.45,0,0],"m");for(let M of[-.05,0,.05])r.add(at.ring,jn,[-.2655,1.375+M*.82,.31-M],[.02,.02,.2],[ut/2-.884,0,0])}let h=s(r.g,0,1.71,0);h.add(at.sph,fo,[0,0,0],[.098,.12,.108]),h.add(at.box,fo,[0,-.01,.105],[.026,.05,.03]),h.add(at.sph,1709072,[.038,.02,.096],.012).add(at.sph,1709072,[-.038,.02,.096],.012),h.add(at.box,t.braids?As(l,2760728,.4):l,[0,.044,.1],[.1,.014,.014],[.25,0,0]);for(let b of[-1,1])h.add(at.sph,fo,[b*.098,0,0],[.014,.03,.02]);let f=null,m=null;if(t.braids){h.add(at.sph,9071190,[0,.012,-.016],[.097,.117,.1]),h.add(at.cone,l,[0,-.2,.07],[.082,.3,.062],[ut+.2,0,0],"f").add(at.sph,l,[0,-.075,.075],[.092,.07,.062],null,"f");for(let b of[-1,1])h.add(at.sph,l,[b*.062,-.06,.05],[.04,.07,.05],null,"f").add(at.cap,l,[b*.03,-.035,.108],[.012,.022,.012],[0,0,b*1.1],"f");h.add(at.cap,l,[0,-.3,.1],[.02,.05,.02],[.15,0,0],"f").add(at.ring,Ci,[0,-.26,.095],[.024,.024,.12],[ut/2,0,0],"m"),m=s(h.g,0,0,0);for(let b=0;b<12;b++){let M=-.75+b*.27,S=Math.cos(M)*.118,I=-Math.sin(M)*.106;m.add(at.sph,l,[0,S,I],[.026,.02,.024],null,"f");for(let F of[-1,1])m.add(at.sph,As(l,2760728,.25),[F*.034,S*.96,I*.97],[.018,.016,.02],null,"f")}for(let b=0;b<7;b++)m.add(at.sph,l,[0,-.07-b*.042,-.1-Math.sin(b*.5)*.012],[.022-b*.0015,.026,.022-b*.0015],null,"f");m.add(at.ring,Ci,[0,-.33,-.105],[.018,.018,.14],[ut/2,0,0],"m")}else if(t.dress||(h.add(at.cone,l,[0,-.15,.06],[.075,.2,.06],[ut+.25,0,0]),h.add(at.sph,l,[0,-.07,.07],[.085,.06,.06])),h.add(at.sph,l,[0,.01,-.03],[.11,.125,.11]),t.longHair&&(h.add(at.cap,l,[0,-.2,-.085],[.07,.16,.045]),t.dress))for(let b of[-1,1])h.add(at.cap,l,[b*.085,-.2,.03],[.022,.16,.022]);if(t.helmet){f=s(h.g,0,0,0),f.add(at.dome,br,[0,.03,0],[.118,.13,.128],null,"m").add(at.ring,ci,[0,.03,0],[.119,.129,.14],[ut/2,0,0],"m"),f.add(at.arc,ci,[0,.03,0],[.12,.132,.14],[0,ut/2,0],"m").add(at.arc,ci,[0,.03,0],[.12,.132,.14],null,"m");for(let b=0;b<8;b++){let M=b/8*2*ut+.39;f.add(at.sph,Ci,[Math.sin(M)*.121,.034,Math.cos(M)*.131],.008,null,"m")}f.add(at.box,ci,[0,-.03,.125],[.024,.12,.014],null,"m");for(let b of[-1,1])f.add(at.arc,ci,[b*.042,.012,.114],[.033,.03,.06],[ut,0,0],"m").add(at.box,br,[b*.1,-.055,.035],[.012,.1,.085],[0,b*.25,b*.12],"m");f.add(at.avent,4474700,[0,-.07,-.005],[.114,.19,.122],null,"m")}let p=b=>{let M=s(r.g,b*.265,1.46,0);M.add(at.cap,t.sleeve||o,[0,-.15,0],[.062,.1,.062]),t.lamellar&&(c(M,-.03,.092,.092,6,.062,.09,b*ut/2-1.5,b*ut/2+1.5,0,-.25),c(M,-.105,.086,.086,6,.06,.09,b*ut/2-1.5,b*ut/2+1.5,.5,-.2));let S=s(M.g,0,-.3,0);if(S.add(at.cap,t.sleeve||o,[0,-.1,0],[.05,.07,.05]).add(at.sph,fo,[0,-.285,0],[.04,.058,.03]),t.lamellar){S.add(at.cyl,4863268,[0,-.165,0],[.06,.16,.06]).add(at.ring,ci,[0,-.09,0],[.062,.062,.12],[ut/2,0,0],"m").add(at.ring,ci,[0,-.24,0],[.06,.06,.12],[ut/2,0,0],"m");for(let I=0;I<6;I++){let F=I/6*2*ut;S.add(at.sph,br,[Math.sin(F)*.061,-.13-I%2*.07,Math.cos(F)*.061],.009,null,"m")}}else S.add(at.cyl,jn,[0,-.17,0],[.054,.13,.054]);return[M,S]},[g,y]=p(1),[d,u]=p(-1),x=b=>{let M=s(e,b*.1,.93,0);M.add(at.cap,a,[0,-.21,0],[.09,.15,.09]);let S=s(M.g,0,-.43,0);S.add(at.cap,a,[0,-.17,0],[.072,.12,.072]);for(let I=0;I<5;I++)S.add(at.ring,t.wraps||9075292,[0,-.12-I*.055,0],[.07,.07,.16],[ut/2+(I%2?.28:-.28),0,0]);if(S.add(at.cap,jn,[0,-.45,.04],[.057,.072,.05],[ut/2,0,0]).add(at.cyl,jn,[0,-.38,0],[.066,.13,.066]),t.furCloak)for(let I=0;I<7;I++){let F=I/7*2*ut;S.add(at.sph,As(5918790,9207916,ae()),[Math.sin(F)*.066,-.31,Math.cos(F)*.066],[.03,.035,.03],null,"f")}return[M,S]},[v,_]=x(1),[C,A]=x(-1),T=null;if(t.cloak||t.furCloak){let b=!!t.furCloak,M=b?.96:.66,S=b?1.22:1,I=b?10:6,F=b?11:8,R=new qn(M,S,I,F);R.translate(0,-S/2,0);let V=R.attributes.position,G=new Float32Array(V.count*3),W=new Tt;if(b){let H=[];for(let it=0;it<=I;it++)H.push(je(-.11,.05));for(let it=0;it<V.count;it++){let ct=it%(I+1),vt=Math.floor(it/(I+1));vt>=F-1&&V.setY(it,V.getY(it)+H[ct]*(vt===F?1:.4)),W.set(As(5589824,9734255,ae()*.7+(ct%3===0?.3:0))).convertSRGBToLinear().multiplyScalar(1.7*(.75+.35*vt/F)),G[it*3]=W.r,G[it*3+1]=W.g,G[it*3+2]=W.b}}else{Pi.set(t.cloak).convertSRGBToLinear().multiplyScalar(1.7);for(let H=0;H<G.length;H+=3)G[H]=Pi.r,G[H+1]=Pi.g,G[H+2]=Pi.b}R.setAttribute("color",new de(G,3));let Y=new Me(R,b?po.f:po.c);Y.position.set(0,b?1.5:1.53,-.02),Y.castShadow=!0,Y.receiveShadow=!0,Y.frustumCulled=!1,r.g.add(Y),T={mesh:Y,base:R.attributes.position.array.slice(),wide:b?.55:.9}}if(t.shield){let b=s(r.g,0,1.22,-.27);b.add(at.ring,ci,[0,0,0],[.41,.41,.25],null,"m").add(at.sph,br,[0,0,-.03],[.085,.085,.06],null,"m"),b.add(at.box,jn,[0,.1,.1],[.05,.7,.02],[0,0,.7]);let M=new Me(at.disc,po.shield.clone());M.material.color.set(t.shield).convertSRGBToLinear(),M.scale.set(.41,.04,.41),M.rotation.x=ut/2,M.castShadow=!0,b.g.add(M)}for(let b of n)b.bake(po,!0);return t.scale&&e.scale.setScalar(t.scale),{g:e,body:r.g,head:h.g,armL:g.g,armR:d.g,elbowL:y.g,elbowR:u.g,legL:v.g,legR:C.g,kneeL:_.g,kneeR:A.g,cloak:T,helm:f&&f.g,braid:m&&m.g,carry:!!t.daneAxe,phase:ae()*6,sw:0,lean:0}}function wh(i,t,e,n,s){let r=Math.min(1,t/7),o=t>.15;o&&(i.phase+=e*(3.3+t*1.1)),i.sw+=((o?.36+.55*r:0)-i.sw)*Math.min(1,e*9);let a=Math.sin(i.phase),l=Math.cos(i.phase),c=i.sw;i.legL.rotation.x=a*c-c*.08,i.legR.rotation.x=-a*c-c*.08,i.kneeL.rotation.x=Math.max(0,-l)*c*1.6+c*.12,i.kneeR.rotation.x=Math.max(0,l)*c*1.6+c*.12,i.armL.rotation.x=-a*c*.8,i.armR.rotation.x=i.carry?-.35+l*c*.03:a*c*.8,i.armL.rotation.z=.1+c*.05,i.armR.rotation.z=-.1-c*.05;let h=-(.16+r*.9)*(c>.01?1:.7)-Math.sin(n*.9+i.phase)*.02;if(i.elbowL.rotation.x=h-Math.max(0,a)*c*.3,i.elbowR.rotation.x=i.carry?-1.9:h-Math.max(0,-a)*c*.3,i.body.position.y=Math.abs(l)*.05*c*1.5-.03*c+Math.sin(n*1.4+i.phase)*.004,i.body.rotation.x=r*.14,i.body.rotation.y=a*c*.13,i.lean+=((s||0)*r*.5-i.lean)*Math.min(1,e*6),i.body.rotation.z=-i.lean+l*c*.03,i.head.rotation.y=Math.sin(n*.45+i.phase*.3)*.32*(1-c*1.1>0?1-c*1.1:0)-a*c*.1,i.head.rotation.x=-r*.1+Math.sin(n*.7+i.phase)*.03,i.cloak){let f=i.cloak.mesh.geometry.attributes.position,m=i.cloak.base,p=.06+r*.5;for(let g=0;g<f.count;g++){let y=m[g*3],d=m[g*3+1],u=-d,x=-.16-y*y*i.cloak.wide*(1-u*.5)+Math.max(0,.14-u)*y*y*5.5*(i.cloak.wide<.8?1:0),v=Math.sin(n*5.5+u*6+y*4+i.phase)*.035*u*(.4+r)+Math.sin(i.phase*2+u*4)*.03*c*u;f.setXYZ(g,y*(1+u*.25),d*Math.cos(p*u*.8)+0,x-Math.sin(p*u)*u*.9-v+(u<.05,0))}f.needsUpdate=!0,i.cloak.mesh.geometry.computeVertexNormals()}}var{PI:In,clamp:Ln,lerp:Th,rnd:mo,rr:kn,sstep:go,groundH:Ii,floorH:xo,platH:Ya,collide:Ah,W:Li,SUN:Er,isTouch:_o,TARN:Rh,KNOLL:wr}=gh,Ie=i=>document.getElementById(i),U_=()=>new Promise(i=>setTimeout(i,16));window.addEventListener("error",i=>{let t=Ie("err");t&&(t.textContent="Error: "+i.message)});async function N_(){let i=async(N,j)=>{Ie("ld").textContent=N,Ie("bar").style.width=j*100+"%",await U_()};await i("Raising the mountains",.05),dh();let t=Ie("c"),e=new ca({canvas:t,antialias:!1,powerPreference:"high-performance",stencil:!1}),n=0,s=Math.min(window.devicePixelRatio||1,1.5),r=[1,.85,.7,.58];e.setPixelRatio(s),e.shadowMap.enabled=!0,e.shadowMap.type=Zc,e.toneMapping=ri,_f();let o=new qr;o.fog=new ha(8952234,.003);let a=new on(58,1,.15,4e3);await i("Weaving cloth, hewing timber",.15);let l=mh();await i("Lighting the sky",.3);let c=_h(l,!1);o.add(c.mesh);{let N=new qr,j=_h(l,!0);N.add(j.mesh);let ft=new rr(e);o.environment=ft.fromScene(N,0,.1,100).texture,ft.dispose(),o.environmentIntensity=.55}o.add(new ya(new Tt(.5,.66,1),new Tt(.38,.33,.24),3.3));{let N=new Kr(new Tt(.55,.68,1),.9);N.position.set(-Er.x,.7,-Er.z),o.add(N)}let h=new Kr(gf,5.2);o.add(h),o.add(h.target),h.castShadow=!0;let f=_o?2048:4096;h.shadow.mapSize.set(f,f);{let N=h.shadow.camera;N.left=-46,N.right=46,N.top=46,N.bottom=-46,N.near=10,N.far=420}h.shadow.bias=-4e-4,h.shadow.normalBias=.09,h.shadow.radius=2.5,await i("Raising the village",.4);let m=Li.LM.map(N=>[N.x,N.z,N.r+3]).concat([[48,-160,15],[10,-32,52],[30,-142,14],[50,-142,10],[34,22,9],[-17,6,9],[50,-80,10],[wr.x,wr.z,17]]),p=(N,j,ft)=>{for(let Ut of m)if(Math.hypot(N-Ut[0],j-Ut[1])<Ut[2]+ft)return!1;return!(N>10&&N<66&&j>-128&&j<-82)},g=new Xn;o.add(g);let y={rockGeo:null,rockM:null},d=Af(g,l,p);await i("Raising the village",.55),Bf(g,l,d.rockGeo,d.rockM),await i("Surveying the land",.68);let u=ph();vr.value=u.tNrm,await i("Sowing the meadows",.82);let x=vf(l,u);o.add(x);let v=vh(l,u.tDepth);o.add(v.mesh);let _=vh(l,u.tDepthTarn,new xa(50,40).rotateX(-In/2),Rh.level);_.mesh.position.x=Rh.x,_.mesh.position.z=Rh.z,o.add(_.mesh);let C=Mf(l,Li.RIVERS);o.add(C.mesh);let A=ts(150)+no(150)/.876,T=[{x0:-25,z0:-251,x1:-25,z1:-230.5,w0:2.6,w1:4.6,n:16},{x0:A+46,z0:146,x1:A+2,z1:152,w0:1.6,w1:3.2,n:26,bulge:.6},{x0:16,z0:-396,x1:14,z1:-372,w0:2,w1:3,n:16,bulge:.6}],b=Sf(l,T);o.add(b.mesh);let M=Rf(o,u);Gf(l,X.shieldTex);let S=Rs(o,{tunic:3426650,sleeve:5919300,hair:8280636,helmet:!0,braids:!0,lamellar:!0,furCloak:!0,daneAxe:!0,sword:!0,pants:4867128,wraps:10127978});S.helm.visible=!1;let I=()=>{S.helm.visible=!S.helm.visible,S.braid.visible=!S.helm.visible};Ie("helm").addEventListener("pointerdown",N=>{I(),N.preventDefault(),N.stopPropagation()});let F={x:wr.x-.44*9.5,z:wr.z+.9*9.5};Ah(F,.35);let R={x:F.x,z:F.z,y:xo(F.x,F.z),vy:0,speed:0,head:Math.atan2(-.44,.9),grounded:!0,turn:0},V=[{v:Rs(o,{tunic:3098720,hair:5914148,pants:3813928,scale:.97,cloak:4864554}),x:4,z:-26},{v:Rs(o,{tunic:6969904,hair:13152378,longHair:!0,dress:!0,trim:9054752,scale:.92}),x:16,z:-36},{v:Rs(o,{tunic:6962722,hair:8008214,fur:!0,pants:3813928,axe:!0}),x:28,z:-30},{v:Rs(o,{tunic:4086334,hair:3023384,longHair:!0,dress:!0,trim:12098122,scale:.9}),x:2,z:-44},{v:Rs(o,{tunic:5523002,hair:10130568,pants:4864810,cloak:3812922,scale:.95}),x:12,z:-8}];V.forEach(N=>{N.tx=N.x,N.tz=N.z,N.wait=kn(0,4),N.head=kn(0,6),N.speed=0,N.stuck=0});let G=[];for(let N=0;N<12;N++)G.push({x:48+kn(-9,9),z:-160+kn(-9,9),h:kn(0,6),wait:kn(0,6),s:kn(.85,1.1)});G.forEach(N=>{N.tx=N.x,N.tz=N.z});let W=(()=>{let N=[],j=(L,D,Z,rt)=>N.push([L,D,Z,rt]),ft=new Yn(1,10,8),Ut=new Rn(1,1,1,6);j(ft,[0,.58,0],[.3,.28,.46],14209212);for(let L=0;L<9;L++)j(ft,[kn(-.2,.2),.6+kn(-.1,.16),kn(-.38,.38)],[.17,.15,.18],14209212);j(ft,[0,.72,.52],[.11,.12,.17],2367002);for(let L of[-1,1]){j(ft,[L*.12,.76,.46],[.06,.025,.035],2367002);for(let D of[-1,1])j(Ut,[L*.14,.2,D*.27],[.035,.42,.035],2367002)}let Ot=0,At=N.map(([L,D,Z,rt])=>{let St=L.toNonIndexed();return St.applyMatrix4(new se().compose(new U(...D),new Je,new U(...Z))),Ot+=St.attributes.position.count,[St,new Tt(rt).convertSRGBToLinear()]}),jt=new Float32Array(Ot*3),ie=new Float32Array(Ot*3),Re=new Float32Array(Ot*3),Ce=new Float32Array(Ot*2),Mt=0;for(let[L,D]of At){jt.set(L.attributes.position.array,Mt*3),ie.set(L.attributes.normal.array,Mt*3),Ce.set(L.attributes.uv.array,Mt*2);for(let Z=0;Z<L.attributes.position.count;Z++)Re[(Mt+Z)*3]=D.r,Re[(Mt+Z)*3+1]=D.g,Re[(Mt+Z)*3+2]=D.b;Mt+=L.attributes.position.count}let w=new _e;w.setAttribute("position",new de(jt,3)),w.setAttribute("normal",new de(ie,3)),w.setAttribute("color",new de(Re,3)),w.setAttribute("uv",new de(Ce,2));let O=l.cloth.normalMap.clone();O.repeat.set(3,3),O.needsUpdate=!0;let k=new wi(w,new Ke({vertexColors:!0,roughness:1,normalMap:O,normalScale:new ot(2,2)}),G.length);return k.frustumCulled=!1,k.castShadow=!0,k.receiveShadow=!0,o.add(k),k})(),Y=new Sa(new Tt(1,.45,.14),60,26,2);Y.position.set(10,Ii(10,-30)+1.3,-30),o.add(Y);let H=9,it=16,ct=_o?90:160,vt=yr(Ts.length*H,new U(.42,.37,.34),!1),Zt=yr(Mn.length*it,new U(3.2,1.25,.28),!0),xe=yr(Mn.length*6,new U(6,2.4,.5),!0),K=yr(ct,new U(1.6,1.1,.6),!0),ht=14,Ct=yr(T.length*ht,new U(.75,.8,.85),!1),pt=T.map(N=>new U(N.x1,Math.max(Ii(N.x1,N.z1),es(N.x1,N.z1))+.5,N.z1));o.add(vt,Zt,xe,K,Ct);let zt=new Float32Array(ct*4);for(let N=0;N<zt.length;N++)zt[N]=mo();function Jt(N){let j=vt.geometry,ft=j.attributes.position.array,Ut=j.attributes.aSize.array,Ot=j.attributes.aAlpha.array,At=0;for(let Mt=0;Mt<Ts.length;Mt++){let w=Ts[Mt];for(let O=0;O<H;O++,At++){let L=(N*.7+O/H*7+Mt*1.37)%7,D=L/7;ft[At*3]=w.x+L*L*.16+Math.sin(L*1.6+O*2.1+Mt)*.2,ft[At*3+1]=w.y+L*1.2,ft[At*3+2]=w.z+Math.cos(L*1.3+O*1.7)*.2-L*L*.07,Ut[At]=.7+L*.9,Ot[At]=.34*Math.sin(In*Math.min(1,D*1.15))*(1-D*.6)}}j.attributes.position.needsUpdate=j.attributes.aSize.needsUpdate=j.attributes.aAlpha.needsUpdate=!0,j=Zt.geometry,ft=j.attributes.position.array,Ut=j.attributes.aSize.array,Ot=j.attributes.aAlpha.array,At=0;for(let Mt=0;Mt<Mn.length;Mt++){let w=Mn[Mt].p,O=Mn[Mt].s;for(let k=0;k<it;k++,At++){let L=.7+k*37%10*.035,D=(N+k*.173+Mt*.41)%L,Z=D/L,rt=k*2.4+Mt;ft[At*3]=w.x+Math.cos(rt)*.36*O*(1-Z)+Math.sin(N*7+k)*.03,ft[At*3+1]=w.y+Z*1.5*O,ft[At*3+2]=w.z+Math.sin(rt)*.36*O*(1-Z),Ut[At]=(.8-.55*Z)*O,Ot[At]=.5*(1-Z)*Math.min(1,Z*7)}}j.attributes.position.needsUpdate=j.attributes.aSize.needsUpdate=j.attributes.aAlpha.needsUpdate=!0,j=xe.geometry,ft=j.attributes.position.array,Ut=j.attributes.aSize.array,Ot=j.attributes.aAlpha.array,At=0;for(let Mt=0;Mt<Mn.length;Mt++){let w=Mn[Mt].p,O=Mn[Mt].s;for(let k=0;k<6;k++,At++){let L=1.6+k*.23,D=(N*.9+k*.61+Mt*.77)%L,Z=D/L,rt=k*1.9+Mt+Math.floor(N*.9/L)*2.3;ft[At*3]=w.x+Math.cos(rt)*(.1+Z*.7)*O+Z*Z*.5,ft[At*3+1]=w.y+(Z*3.2-Z*Z*1.1)*O,ft[At*3+2]=w.z+Math.sin(rt)*(.1+Z*.7)*O,Ut[At]=.05*(O>.5?1:.6),Ot[At]=(1-Z)*(O>.5?1:.5)}}j.attributes.position.needsUpdate=j.attributes.aSize.needsUpdate=j.attributes.aAlpha.needsUpdate=!0,j=Ct.geometry,ft=j.attributes.position.array,Ut=j.attributes.aSize.array,Ot=j.attributes.aAlpha.array,At=0;for(let Mt=0;Mt<pt.length;Mt++){let w=pt[Mt],O=Mt===0?1:.7;for(let k=0;k<ht;k++,At++){let D=(N*.5+k/ht*6+Mt)%6,Z=D/6,rt=k*2.4;ft[At*3]=w.x+Math.cos(rt)*(1+D*1.3)*O,ft[At*3+1]=w.y+D*1.5*O+Math.sin(rt*3)*.5,ft[At*3+2]=w.z+Math.sin(rt)*(1+D*1.3)*O+D*.6,Ut[At]=(5+D*2.2)*O,Ot[At]=.2*Math.sin(In*Z)}}j.attributes.position.needsUpdate=j.attributes.aSize.needsUpdate=j.attributes.aAlpha.needsUpdate=!0,j=K.geometry,ft=j.attributes.position.array,Ut=j.attributes.aSize.array,Ot=j.attributes.aAlpha.array;let jt=14,ie=a.position.x,Re=a.position.y,Ce=a.position.z;for(let Mt=0;Mt<ct;Mt++){let w=zt[Mt*4]*jt*2+Math.sin(N*.3+Mt)*.6+N*.25,O=zt[Mt*4+1]*6+Math.sin(N*.4+Mt*1.7)*.4,k=zt[Mt*4+2]*jt*2+Math.cos(N*.27+Mt*.7)*.6,L=((w-ie)%(2*jt)+2*jt)%(2*jt)-jt,D=((k-Ce)%(2*jt)+2*jt)%(2*jt)-jt,Z=((O-Re)%6+6)%6-2;ft[Mt*3]=ie+L,ft[Mt*3+1]=Re+Z,ft[Mt*3+2]=Ce+D,Ut[Mt]=.022+zt[Mt*4+3]*.03,Ot[Mt]=(.25+.35*Math.sin(N*1.3+Mt*2.1))*(1-Math.hypot(L,D)/jt)*.55}j.attributes.position.needsUpdate=j.attributes.aSize.needsUpdate=j.attributes.aAlpha.needsUpdate=!0}let $t=yf(e,o,a);$t.fin.uniforms.uExp.value=1.75;let Le=Ie("map"),le=Le.getContext("2d"),ue=224,z=400,tn=document.createElement("canvas");tn.width=tn.height=ue;{let N=tn.getContext("2d"),j=N.createImageData(ue,ue),ft=j.data;for(let Ot=0;Ot<ue;Ot++)for(let At=0;At<ue;At++){let jt=(At/ue*2-1)*z,ie=(Ot/ue*2-1)*z,Re=Ii(jt,ie),Ce,Mt,w;if(Re<es(jt,ie)){let L=Ln((es(jt,ie)-Re)/8,0,1);Ce=58-30*L,Mt=100-40*L,w=118-30*L}else if(Re<1.2)Ce=150,Mt=146,w=136;else if(Re>130)Ce=236,Mt=238,w=242;else if(Ss(jt,ie)>.8||Re>95){let L=Ln((Re-40)/100,0,1);Ce=104+60*L,Mt=102+60*L,w=98+70*L}else{let L=bs(jt,ie);Ce=104-50*L,Mt=128-45*L,w=62-28*L;let D=io(jt,ie);D===1?(Ce=180,Mt=152,w=78):D&&(Ce=104,Mt=88,w=56)}let O=Ln(1+(Ii(jt-3,ie-3)-Ii(jt+3,ie+3))*.06,.6,1.35),k=(Ot*ue+At)*4;ft[k]=Ln(Ce*O,0,255),ft[k+1]=Ln(Mt*O,0,255),ft[k+2]=Ln(w*O,0,255),ft[k+3]=255}N.putImageData(j,0,0);let Ut=(Ot,At)=>[(Ot/z+1)*ue/2,(At/z+1)*ue/2];N.strokeStyle="rgba(120,95,60,.9)",N.lineWidth=1.6,N.lineJoin="round";for(let Ot of Li.PATHS)N.beginPath(),Ot.forEach((At,jt)=>{let ie=Ut(At[0],At[1]);jt?N.lineTo(ie[0],ie[1]):N.moveTo(ie[0],ie[1])}),N.stroke();N.strokeStyle="rgba(90,150,170,.9)",N.lineWidth=1.4;for(let Ot of Li.RIVERS)N.beginPath(),Ot.pts.forEach((At,jt)=>{let ie=Ut(At[0],At[1]);jt?N.lineTo(ie[0],ie[1]):N.moveTo(ie[0],ie[1])}),N.stroke()}function re(){let N=le;N.drawImage(tn,0,0);let j=(Ut,Ot)=>[(Ut/z+1)*ue/2,(Ot/z+1)*ue/2];for(let Ut of Li.LM){let Ot=j(Ut.x,Ut.z);N.beginPath(),N.arc(Ot[0],Ot[1],4.5,0,7),Ut.found?(N.fillStyle="#f1c75b",N.fill(),N.strokeStyle="#3a2a10",N.lineWidth=1.2,N.stroke()):(N.strokeStyle="rgba(255,255,255,.9)",N.lineWidth=1.6,N.stroke())}let ft=j(R.x,R.z);N.save(),N.translate(ft[0],ft[1]),N.rotate(In-R.head),N.beginPath(),N.moveTo(0,-10),N.lineTo(6.5,7),N.lineTo(0,3.5),N.lineTo(-6.5,7),N.closePath(),N.fillStyle="#fff",N.fill(),N.strokeStyle="#201810",N.lineWidth=1.6,N.stroke(),N.restore()}let Vt={},Nt=In-.455,ve=.1,Bt=!1,P=!1,E={id:null,ox:0,oy:0,x:0,y:0},q={id:null,lx:0,ly:0},tt=Ie("joy"),st=Ie("knob");window.addEventListener("keydown",N=>{Vt[N.code]=!0,N.code==="Space"&&(Bt=!0),N.code==="KeyH"&&P&&I(),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(N.code)>=0&&N.preventDefault()}),window.addEventListener("keyup",N=>{Vt[N.code]=!1}),window.addEventListener("blur",()=>{for(let N in Vt)Vt[N]=!1}),t.addEventListener("pointerdown",N=>{if(P){try{t.setPointerCapture(N.pointerId)}catch{}N.pointerType!=="mouse"&&N.clientX<window.innerWidth*.45&&E.id===null?(E.id=N.pointerId,E.ox=N.clientX,E.oy=N.clientY,E.x=E.y=0,tt.style.display="block",tt.style.left=N.clientX-60+"px",tt.style.top=N.clientY-60+"px",st.style.transform="translate(0,0)"):q.id===null&&(q.id=N.pointerId,q.lx=N.clientX,q.ly=N.clientY),N.preventDefault()}}),t.addEventListener("pointermove",N=>{if(N.pointerId===E.id){let j=N.clientX-E.ox,ft=N.clientY-E.oy,Ut=Math.hypot(j,ft),Ot=50;Ut>Ot&&(j*=Ot/Ut,ft*=Ot/Ut),E.x=j/Ot,E.y=-ft/Ot,st.style.transform="translate("+j+"px,"+ft+"px)"}else if(N.pointerId===q.id){let j=N.pointerType==="mouse"?.0045:.006;Nt-=(N.clientX-q.lx)*j,ve=Ln(ve+(N.clientY-q.ly)*j*.8,-.2,1.25),q.lx=N.clientX,q.ly=N.clientY}});let Q=N=>{N.pointerId===E.id&&(E.id=null,E.x=E.y=0,tt.style.display="none"),N.pointerId===q.id&&(q.id=null)};t.addEventListener("pointerup",Q),t.addEventListener("pointercancel",Q),t.addEventListener("contextmenu",N=>N.preventDefault()),document.addEventListener("touchmove",N=>N.preventDefault(),{passive:!1}),document.addEventListener("gesturestart",N=>N.preventDefault()),Ie("jump").addEventListener("pointerdown",N=>{Bt=!0,N.preventDefault(),N.stopPropagation()}),Ie("how").textContent=_o?"Left thumb to walk (push further to run) \xB7 drag on the right to look around.":"WASD or arrows to walk \xB7 Shift to run \xB7 Space to jump \xB7 H for helmet \xB7 drag the mouse to look around.";let Lt=null;function gt(){try{let N=window.AudioContext||window.webkitAudioContext;if(!N)return;let j=new N,ft=j.createBuffer(1,j.sampleRate*3,j.sampleRate),Ut=ft.getChannelData(0);for(let At=0;At<Ut.length;At++)Ut[At]=Math.random()*2-1;let Ot=(At,jt,ie)=>{let Re=j.createBufferSource();Re.buffer=ft,Re.loop=!0,Re.playbackRate.value=.7+Math.random()*.6;let Ce=j.createBiquadFilter();Ce.type=At,Ce.frequency.value=jt,Ce.Q.value=ie;let Mt=j.createGain();return Mt.gain.value=0,Re.connect(Ce),Ce.connect(Mt),Mt.connect(j.destination),Re.start(),{g:Mt,fl:Ce}};Lt={ac:j,wind:Ot("bandpass",420,.6),sea:Ot("lowpass",520,.3),fire:Ot("highpass",2600,.5),step:Ot("bandpass",900,1.2),stepPh:0}}catch{}}function bt(N,j){if(!Lt)return;let ft=Lt,Ut=ft.ac.currentTime;ft.wind.g.gain.setTargetAtTime(.035+.03*Math.sin(N*.23)+.02*Math.sin(N*.61)+Ln(R.y/60,0,1)*.06,Ut,.3),ft.wind.fl.frequency.setTargetAtTime(380+160*Math.sin(N*.17),Ut,.5);let Ot=go(45,2,La(R.x,R.z))*go(40,8,R.y)+go(16,3,Ri(R.x,R.z))*.55+go(70,8,Math.hypot(R.x+25,R.z+232))*1.3;ft.sea.g.gain.setTargetAtTime(Ln(Ot,0,1)*(.09+.06*Math.sin(N*.7)),Ut,.4);let At=1e9;for(let ie of Mn)At=Math.min(At,Math.hypot(R.x-ie.p.x,R.z-ie.p.z)/ie.s);ft.fire.g.gain.setTargetAtTime(go(12,1,At)*(.02+.05*Math.random()*Math.random()),Ut,.03);let jt=Math.floor(S.phase/In);jt!==ft.stepPh&&R.speed>.5&&R.grounded&&(ft.stepPh=jt,ft.step.fl.frequency.setValueAtTime(Ya(R.x,R.z)>-100?520:1100+Math.random()*500,Ut),ft.step.g.gain.cancelScheduledValues(Ut),ft.step.g.gain.setValueAtTime(.09,Ut),ft.step.g.gain.exponentialRampToValueAtTime(8e-4,Ut+.13))}Ie("go").addEventListener("click",()=>{P=!0,Ie("start").style.opacity="0",setTimeout(()=>{Ie("start").style.display="none"},700),_o&&(Ie("jump").style.display="block"),Ie("helm").style.display="block",gt();let N=Ie("hint");N.textContent="Hollow rings on the map mark places yet unfound",setTimeout(()=>{N.style.opacity="0"},9e3)});function ne(){let N=window.innerWidth||800,j=window.innerHeight||600,ft=s*r[n];e.setPixelRatio(ft),e.setSize(N,j,!1),$t.composer.setPixelRatio(ft),$t.composer.setSize(N,j),a.aspect=N/j,a.fov=N<j?70:58,a.updateProjectionMatrix();let Ut=j*ft/(2*Math.tan(a.fov*In/360));for(let Ot of[vt,Zt,xe,K,Ct])Ot.material.uniforms.uScale.value=Ut}window.addEventListener("resize",ne),window.addEventListener("orientationchange",()=>setTimeout(ne,250)),ne();let lt=0,yt=0,kt=(N,j,ft)=>{Ie("toastS").textContent=N,Ie("toastB").textContent=j,Ie("toast").style.opacity="1",yt=ft||4};function Xt(){for(let N of Li.LM)!N.found&&Math.hypot(R.x-N.x,R.z-N.z)<N.r&&(N.found=!0,lt++,Ie("count").textContent="Discovered "+lt+" / "+Li.LM.length,lt===Li.LM.length?kt("All of Fjordheim is known to you","Saga Complete",9):kt("Discovered",N.n,4))}function Et(){let N=R.x,j=R.z,ft=R.y;return Math.hypot(N-wr.x,j-wr.z)<18&&ft>15?"Hall Crag":Ya(N,j)>-100&&j>0?"The harbour":j<-250?"The high cirque":j<-205&&ft>30?"The headwall trail":Ri(N,j)<7?"Riverbank":j>40?ft<14?"The fjord shore":"The west cliffs":ft>30?"The pine bench":Math.hypot(N-10,j+30)<55?"Fjordheim village":io(N,j)||N>8&&N<68&&j>-150&&j<-80?"The farmlands":j<-150?"The upper valley":"The valley meadows"}let Pt={x:0,z:0},Wt=new U,pe=new U,B=new se,mt=new Je,$=new Ge,et=new U,_t=new U,xt=0,Ft=0,be=0,Be=R.y+1.45,ce=0,gn=0;function Sn(N,j){Pt.x=N,Pt.z=j,Ah(Pt,.35),Pt.x=Ln(Pt.x,-392,392),Pt.z=Ln(Pt.z,-392,392);let ft=Ii(Pt.x,Pt.z),Ut=Ya(Pt.x,Pt.z);if(ft<es(Pt.x,Pt.z)-.75&&Ut<-100)return!1;let Ot=xo(R.x,R.z),At=Math.max(ft,Ut),jt=Math.hypot(Pt.x-R.x,Pt.z-R.z);return jt>1e-4&&(At-Ot)/jt>1.35&&R.grounded||At-R.y>.75?!1:(R.x=Pt.x,R.z=Pt.z,!0)}let Cs=(N,j,ft)=>{let Ut=j-N;for(;Ut>In;)Ut-=2*In;for(;Ut<-In;)Ut+=2*In;return N+Ut*ft};function vo(N){Ft+=N;let j=E.x,ft=E.y,Ut=!1,Ot=!1;(Vt.KeyW||Vt.ArrowUp)&&(ft+=1,Ot=!0),(Vt.KeyS||Vt.ArrowDown)&&(ft-=1,Ot=!0),(Vt.KeyD||Vt.ArrowRight)&&(j+=1,Ot=!0),(Vt.KeyA||Vt.ArrowLeft)&&(j-=1,Ot=!0),(Vt.ShiftLeft||Vt.ShiftRight)&&(Ut=!0),P||(j=ft=0,Nt+=N*.05);let At=Math.min(1,Math.hypot(j,ft)),jt=0;if(At>.08){let L=-Math.sin(Nt),D=-Math.cos(Nt),Z=-D,rt=L,St=L*ft+Z*j,wt=D*ft+rt*j,Gt=Math.hypot(St,wt);St/=Gt,wt/=Gt;let qt=Ot?Ut?7.5:4.2:At>.92?7.5:Th(1.3,4.6,At);(Ii(R.x,R.z)<es(R.x,R.z)-.1||Ri(R.x,R.z)<3.4)&&Ya(R.x,R.z)<-100&&(qt*=.6);let Rt=Cs(R.head,Math.atan2(St,wt),Math.min(1,N*10));jt=Ln((Rt-R.head)/Math.max(N,.001)*.15,-1,1),R.head=Rt,R.speed+=(qt-R.speed)*Math.min(1,N*6);let Kt=R.speed*N,Ee=Math.sin(R.head),Pe=Math.cos(R.head),Ye=Th(St,Ee,.4),fe=Th(wt,Pe,.4),It=Math.hypot(Ye,fe)||1;Sn(R.x+Ye/It*Kt,R.z+fe/It*Kt)||!Sn(R.x+Ye/It*Kt,R.z)&&!Sn(R.x,R.z+fe/It*Kt)&&(R.speed*=.5)}else R.speed+=(0-R.speed)*Math.min(1,N*9);let ie=xo(R.x,R.z);Bt&&R.grounded&&P&&(R.vy=6.2,R.grounded=!1),Bt=!1,R.grounded?R.y-ie>.45?(R.grounded=!1,R.vy=0):R.y+=(ie-R.y)*Math.min(1,N*18):(R.vy-=20*N,R.y+=R.vy*N,R.y<=ie&&(R.y=ie,R.vy=0,R.grounded=!0)),S.g.position.set(R.x,R.y,R.z),S.g.rotation.y=R.head,wh(S,R.grounded?R.speed:2,N,Ft,jt);for(let L of V){if(L.wait>0){if(L.wait-=N,L.speed+=(0-L.speed)*Math.min(1,N*6),L.wait<=0){let Z=mo()*2*In,rt=4+mo()*20;L.tx=10+Math.cos(Z)*rt,L.tz=-32+Math.sin(Z)*rt,L.stuck=0}}else{let Z=L.tx-L.x,rt=L.tz-L.z;if(Math.hypot(Z,rt)<.6||L.stuck>1.5)L.wait=kn(2,8);else{L.speed+=(1.3-L.speed)*Math.min(1,N*4),L.head=Cs(L.head,Math.atan2(Z,rt),Math.min(1,N*5));let wt=L.x,Gt=L.z;Pt.x=L.x+Math.sin(L.head)*L.speed*N,Pt.z=L.z+Math.cos(L.head)*L.speed*N,Ah(Pt,.35);let qt=Pt.x-R.x,Rt=Pt.z-R.z,Kt=Math.hypot(qt,Rt);Kt<.8&&Kt>.001&&(Pt.x=R.x+qt/Kt*.8,Pt.z=R.z+Rt/Kt*.8),L.x=Pt.x,L.z=Pt.z,Math.hypot(L.x-wt,L.z-Gt)<L.speed*N*.4&&(L.stuck+=N)}}L.v.g.position.set(L.x,Ii(L.x,L.z),L.z),L.v.g.rotation.y=L.head;let D=Math.hypot(L.x-a.position.x,L.z-a.position.z)<70;L.v.g.visible=D,D&&wh(L.v,L.speed,N,Ft,0)}for(let L=0;L<G.length;L++){let D=G[L];if(D.wait>0){if(D.wait-=N,D.wait<=0){let Z=mo()*2*In,rt=mo()*15;D.tx=48+Math.cos(Z)*rt*.7,D.tz=-160+Math.sin(Z)*rt*.7}}else{let Z=D.tx-D.x,rt=D.tz-D.z;Math.hypot(Z,rt)<.4?D.wait=kn(3,12):(D.h=Cs(D.h,Math.atan2(Z,rt),Math.min(1,N*3)),D.x+=Math.sin(D.h)*.55*N,D.z+=Math.cos(D.h)*.55*N)}$.set(0,D.h,0),B.compose(et.set(D.x,Ii(D.x,D.z),D.z),mt.setFromEuler($),_t.set(D.s,D.s,D.s)),W.setMatrixAt(L,B)}W.instanceMatrix.needsUpdate=!0,Be+=(R.y+1.45-Be)*Math.min(1,N*10),Math.abs(Be-(R.y+1.45))>3&&(Be=R.y+1.45),Wt.set(R.x,Be,R.z);let Re=ve,Ce=window.__camD||5;for(let L=0;L<16;L++){let D=Math.cos(Re);a.position.set(Wt.x+Math.sin(Nt)*D*Ce,Wt.y+Math.sin(Re)*Ce,Wt.z+Math.cos(Nt)*D*Ce);let Z=Math.max(xo(a.position.x,a.position.z),es(a.position.x,a.position.z))+.4;if(a.position.y>=Z||Re>1.4)break;Re+=.05}a.lookAt(Wt.x,Wt.y+.15,Wt.z);let Mt=Math.round(R.x/3)*3,w=Math.round(R.z/3)*3;h.target.position.set(Mt,R.y,w),h.position.set(Mt+Er.x*200,R.y+Er.y*200,w+Er.z*200),c.u.uT.value=Ft,v.u.uT.value=Ft,_.u.uT.value=Ft,C.u.uT.value=Ft,b.u.uT.value=Ft,ka.value=Ft,M.U.uPl.value.set(R.x,R.y,R.z),d.updateLOD(R.x,R.z,be===0),Y.intensity=55+Math.sin(Ft*13)*9+Math.sin(Ft*7.3)*8+Math.sin(Ft*23)*4,Jt(Ft),pe.copy(a.position).addScaledVector(Er,500).project(a);let O=$t.fin.uniforms,k=pe.z<1?1:0;O.uSunUV.value.set(pe.x*.5+.5,pe.y*.5+.5,k*Ln(1.4-Math.hypot(pe.x,pe.y)*.7,0,1)),O.uT.value=Ft%10,P&&(Xt(),yt>0&&(yt-=N,yt<=0&&(Ie("toast").style.opacity="0")),bt(Ft,N)),be%4===0&&re(),be%30===0&&(Ie("place").textContent=Et()),be++}function ti(N){requestAnimationFrame(ti);let j=(N-xt)/1e3||.016,ft=Math.min(.05,j);xt=N,vo(ft),$t.composer.render(ft),be>90&&!window.__noAdapt&&(j>.034?ce++:j<.019?gn++:ce=Math.max(0,ce-1),ce>45&&n<r.length-1&&(n++,ce=0,gn=0,ne()))}Ie("count").textContent="Discovered 0 / "+Li.LM.length,await i("Setting out",1),Ie("loading").style.display="none",Ie("intro").style.display="block",window.__game={toggleHelm:I,pl:R,scene:o,renderer:e,floorH:xo,setCam:(N,j)=>{Nt=N,ve=j},post:$t,sun:h,fin:$t.fin,q:()=>n},requestAnimationFrame(ti)}N_().catch(i=>{let t=Ie("err");t&&(t.textContent="Error: "+(i&&i.message)),console.error(i)});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
