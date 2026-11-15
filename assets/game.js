(()=>{var qu=0,$l=1,Yu=2;var Eh=1,$u=2,In=3,ni=0,Ye=1,an=2;var jn=0,Mn=1,ii=2,Zl=3,Kl=4,Zu=5,xi=100,Ku=101,Ju=102,Jl=103,jl=104,ju=200,Qu=201,td=202,ed=203,bo=204,So=205,nd=206,id=207,sd=208,rd=209,ad=210,od=211,ld=212,cd=213,hd=214,ud=0,dd=1,fd=2,Cr=3,pd=4,md=5,gd=6,xd=7,ul=0,yd=1,_d=2,Qn=0,vd=1,Md=2,bd=3,dl=4,Sd=5,Ed=6;var Th=300,is=301,ss=302,Is=303,Eo=304,oa=306,rs=1e3,gn=1001,To=1002,Ce=1003,Ql=1004;var za=1005;var rn=1006,Td=1007;var Si=1008;var ti=1009,wd=1010,Ad=1011,fl=1012,wh=1013,Kn=1014,Jn=1015,Ds=1016,Ah=1017,Rh=1018,vi=1020,Rd=1021,xn=1023,Cd=1024,Pd=1025,Mi=1026,as=1027,Ld=1028,Ch=1029,Id=1030,Ph=1031,Lh=1033,Oa=33776,Fa=33777,Ba=33778,Ha=33779,tc=35840,ec=35841,nc=35842,ic=35843,Ih=36196,sc=37492,rc=37496,ac=37808,oc=37809,lc=37810,cc=37811,hc=37812,uc=37813,dc=37814,fc=37815,pc=37816,mc=37817,gc=37818,xc=37819,yc=37820,_c=37821,Ga=36492,vc=36494,Mc=36495,Dd=36283,bc=36284,Sc=36285,Ec=36286;var Pr=2300,Lr=2301,Va=2302,Tc=2400,wc=2401,Ac=2402;var Dh=3e3,bi=3001,Ud=3200,Nd=3201,pl=0,kd=1,on="",jt="srgb",kn="srgb-linear",ml="display-p3",la="display-p3-linear",Ir="linear",oe="srgb",Dr="rec709",Ur="p3";var Di=7680;var Rc=519,zd=512,Od=513,Fd=514,Uh=515,Bd=516,Hd=517,Gd=518,Vd=519,wo=35044;var Cc="300 es",Ao=1035,Nn=2e3,Nr=2001,si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Wa=Math.PI/180,kr=180/Math.PI;function ei(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Pe(i,t,e){return Math.max(t,Math.min(e,i))}function Wd(i,t){return(i%t+t)%t}function Xa(i,t,e){return(1-e)*i+e*t}function Pc(i){return(i&i-1)===0&&i!==0}function Ro(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var lt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],v=s[1],y=s[4],T=s[7],L=s[2],A=s[5],R=s[8];return r[0]=o*x+a*v+l*L,r[3]=o*m+a*y+l*A,r[6]=o*d+a*T+l*R,r[1]=c*x+h*v+u*L,r[4]=c*m+h*y+u*A,r[7]=c*d+h*T+u*R,r[2]=f*x+p*v+g*L,r[5]=f*m+p*y+g*A,r[8]=f*d+p*T+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(qa.makeScale(t,e)),this}rotate(t){return this.premultiply(qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},qa=new Yt;function Nh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xd(){let i=zr("canvas");return i.style.display="block",i}var Lc={};function Rs(i){i in Lc||(Lc[i]=!0,console.warn(i))}var Ic=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dc=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),er={[kn]:{transfer:Ir,primaries:Dr,toReference:i=>i,fromReference:i=>i},[jt]:{transfer:oe,primaries:Dr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[la]:{transfer:Ir,primaries:Ur,toReference:i=>i.applyMatrix3(Dc),fromReference:i=>i.applyMatrix3(Ic)},[ml]:{transfer:oe,primaries:Ur,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Dc),fromReference:i=>i.applyMatrix3(Ic).convertLinearToSRGB()}},qd=new Set([kn,la]),ee={enabled:!0,_workingColorSpace:kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!qd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=er[t].toReference,s=er[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return er[i].primaries},getTransfer:function(i){return i===on?Ir:er[i].transfer}};function es(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ya(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ui,Or=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ui===void 0&&(Ui=zr("canvas")),Ui.width=t.width,Ui.height=t.height;let n=Ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=es(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(es(e[n]/255)*255):e[n]=es(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Yd=0,Fr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=ei(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($a(s[o].image)):r.push($a(s[o]))}else r=$a(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function $a(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Or.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $d=0,ln=class i extends si{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=gn,s=gn,r=rn,o=Si,a=xn,l=ti,c=i.DEFAULT_ANISOTROPY,h=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=ei(),this.name="",this.source=new Fr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===bi?jt:on),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rs:t.x=t.x-Math.floor(t.x);break;case gn:t.x=t.x<0?0:1;break;case To:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rs:t.y=t.y-Math.floor(t.y);break;case gn:t.y=t.y<0?0:1;break;case To:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===jt?bi:Dh}set encoding(t){Rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===bi?jt:on}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Th;ln.DEFAULT_ANISOTROPY=1;var ce=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,T=(p+1)/2,L=(d+1)/2,A=(h+f)/4,R=(u+x)/4,H=(g+m)/4;return y>T&&y>L?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=R/n):T>L?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=A/s,r=H/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=R/r,s=H/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((c+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Co=class extends si{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Rs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===bi?jt:on),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Fr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends Co{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Br=class extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Po=class extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ri=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==p||h!==g){let m=1-a,d=l*f+c*p+h*g+u*x,v=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){let L=Math.sqrt(y),A=Math.atan2(L,d*v);m=Math.sin(m*A)/L,a=Math.sin(a*A)/L}let T=a*v;if(l=l*m+f*T,c=c*m+p*T,h=h*m+g*T,u=u*m+x*T,m===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-a*p,t[e+2]=c*g+h*p+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Za.copy(this).projectOnVector(t),this.sub(Za)}reflect(t){return this.sub(Za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Za=new w,Uc=new ri,Ei=class{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,fn):fn.fromBufferAttribute(r,o),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(t.matrixWorld),this.union(nr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vs),ir.subVectors(this.max,vs),Ni.subVectors(t.a,vs),ki.subVectors(t.b,vs),zi.subVectors(t.c,vs),Xn.subVectors(ki,Ni),qn.subVectors(zi,ki),di.subVectors(Ni,zi);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-di.z,di.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,di.z,0,-di.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-di.y,di.x,0];return!Ka(e,Ni,ki,zi,ir)||(e=[1,0,0,0,1,0,0,0,1],!Ka(e,Ni,ki,zi,ir))?!1:(sr.crossVectors(Xn,qn),e=[sr.x,sr.y,sr.z],Ka(e,Ni,ki,zi,ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},An=[new w,new w,new w,new w,new w,new w,new w,new w],fn=new w,nr=new Ei,Ni=new w,ki=new w,zi=new w,Xn=new w,qn=new w,di=new w,vs=new w,ir=new w,sr=new w,fi=new w;function Ka(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){fi.fromArray(i,r);let a=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=t.dot(fi),c=e.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Zd=new Ei,Ms=new w,Ja=new w,os=class{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Zd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ms.subVectors(t,this.center);let e=Ms.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ms,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ms.copy(t.center).add(Ja)),this.expandByPoint(Ms.copy(t.center).sub(Ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Rn=new w,ja=new w,rr=new w,Yn=new w,Qa=new w,ar=new w,to=new w,Hr=class{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ja.copy(t).add(e).multiplyScalar(.5),rr.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(ja);let r=t.distanceTo(e)*.5,o=-this.direction.dot(rr),a=Yn.dot(this.direction),l=-Yn.dot(rr),c=Yn.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ja).addScaledVector(rr,f),p}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);let n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,s,r){Qa.subVectors(e,t),ar.subVectors(n,t),to.crossVectors(Qa,ar);let o=this.direction.dot(to),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,t);let l=a*this.direction.dot(ar.crossVectors(Yn,ar));if(l<0)return null;let c=a*this.direction.dot(Qa.cross(Yn));if(c<0||l+c>o)return null;let h=-a*Yn.dot(to);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,f,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,p,g,x,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,p,g,x,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Oi.setFromMatrixColumn(t,0).length(),r=1/Oi.setFromMatrixColumn(t,1).length(),o=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,p=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,p=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,p=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kd,t,Jd)}lookAt(t,e,n){let s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),$n.crossVectors(n,je),$n.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),$n.crossVectors(n,je)),$n.normalize(),or.crossVectors(je,$n),s[0]=$n.x,s[4]=or.x,s[8]=je.x,s[1]=$n.y,s[5]=or.y,s[9]=je.y,s[2]=$n.z,s[6]=or.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],v=n[3],y=n[7],T=n[11],L=n[15],A=s[0],R=s[4],H=s[8],M=s[12],E=s[1],B=s[5],W=s[9],et=s[13],I=s[2],U=s[6],V=s[10],Y=s[14],q=s[3],X=s[7],J=s[11],tt=s[15];return r[0]=o*A+a*E+l*I+c*q,r[4]=o*R+a*B+l*U+c*X,r[8]=o*H+a*W+l*V+c*J,r[12]=o*M+a*et+l*Y+c*tt,r[1]=h*A+u*E+f*I+p*q,r[5]=h*R+u*B+f*U+p*X,r[9]=h*H+u*W+f*V+p*J,r[13]=h*M+u*et+f*Y+p*tt,r[2]=g*A+x*E+m*I+d*q,r[6]=g*R+x*B+m*U+d*X,r[10]=g*H+x*W+m*V+d*J,r[14]=g*M+x*et+m*Y+d*tt,r[3]=v*A+y*E+T*I+L*q,r[7]=v*R+y*B+T*U+L*X,r[11]=v*H+y*W+T*V+L*J,r[15]=v*M+y*et+T*Y+L*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*p-n*l*p)+x*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+d*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],v=u*m*c-x*f*c+x*l*p-a*m*p-u*l*d+a*f*d,y=g*f*c-h*m*c-g*l*p+o*m*p+h*l*d-o*f*d,T=h*x*c-g*u*c+g*a*p-o*x*p-h*a*d+o*u*d,L=g*u*l-h*x*l-g*a*f+o*x*f+h*a*m-o*u*m,A=e*v+n*y+s*T+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return t[0]=v*R,t[1]=(x*f*r-u*m*r-x*s*p+n*m*p+u*s*d-n*f*d)*R,t[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*d+n*l*d)*R,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*p-n*l*p)*R,t[4]=y*R,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*R,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*d-e*l*d)*R,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*p+e*l*p)*R,t[8]=T*R,t[9]=(g*u*r-h*x*r-g*n*p+e*x*p+h*n*d-e*u*d)*R,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*d+e*a*d)*R,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*R,t[12]=L*R,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*m+e*u*m)*R,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*m-e*a*m)*R,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,x=o*h,m=o*u,d=a*u,v=l*c,y=l*h,T=l*u,L=n.x,A=n.y,R=n.z;return s[0]=(1-(x+d))*L,s[1]=(p+T)*L,s[2]=(g-y)*L,s[3]=0,s[4]=(p-T)*A,s[5]=(1-(f+d))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(g+y)*R,s[9]=(m-v)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Oi.set(s[0],s[1],s[2]).length(),o=Oi.set(s[4],s[5],s[6]).length(),a=Oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);let c=1/r,h=1/o,u=1/a;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,e.setFromRotationMatrix(pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Nn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,g;if(a===Nn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Nr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Nn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,p=(n+s)*h,g,x;if(a===Nn)g=(o+r)*u,x=-2*u;else if(a===Nr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Oi=new w,pn=new xe,Kd=new w(0,0,0),Jd=new w(1,1,1),$n=new w,or=new w,je=new w,Nc=new xe,kc=new ri,Gr=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kc.setFromEuler(this),this.setFromQuaternion(kc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gr.DEFAULT_ORDER="XYZ";var Vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jd=0,zc=new w,Fi=new ri,Cn=new xe,lr=new w,bs=new w,Qd=new w,tf=new ri,Oc=new w(1,0,0),Fc=new w(0,1,0),Bc=new w(0,0,1),ef={type:"added"},nf={type:"removed"},Se=class i extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new w,e=new Gr,n=new ri,s=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new Yt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(Oc,t)}rotateY(t){return this.rotateOnAxis(Fc,t)}rotateZ(t){return this.rotateOnAxis(Bc,t)}translateOnAxis(t,e){return zc.copy(t).applyQuaternion(this.quaternion),this.position.add(zc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oc,t)}translateY(t){return this.translateOnAxis(Fc,t)}translateZ(t){return this.translateOnAxis(Bc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lr.copy(t):lr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(bs,lr,this.up):Cn.lookAt(lr,bs,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ef)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nf)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,t,Qd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,tf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Se.DEFAULT_UP=new w(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=new w,Pn=new w,eo=new w,Ln=new w,Bi=new w,Hi=new w,Hc=new w,no=new w,io=new w,so=new w,cr=!1,_i=class i{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),Pn.subVectors(n,e),eo.subVectors(t,e);let o=mn.dot(mn),a=mn.dot(Pn),l=mn.dot(eo),c=Pn.dot(Pn),h=Pn.dot(eo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(t,e,n,s,r,o,a,l){return cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cr=!0),this.getInterpolation(t,e,n,s,r,o,a,l)}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l)}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),Pn.subVectors(t,e),mn.cross(Pn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),mn.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cr=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Bi.subVectors(s,n),Hi.subVectors(r,n),no.subVectors(t,n);let l=Bi.dot(no),c=Hi.dot(no);if(l<=0&&c<=0)return e.copy(n);io.subVectors(t,s);let h=Bi.dot(io),u=Hi.dot(io);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Bi,o);so.subVectors(t,r);let p=Bi.dot(so),g=Hi.dot(so);if(g>=0&&p<=g)return e.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Hi,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Hc.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Hc,a);let d=1/(m+x+f);return o=x*d,a=f*d,e.copy(n).addScaledVector(Bi,o).addScaledVector(Hi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},hr={h:0,s:0,l:0};function ro(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=jt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Wd(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ro(o,r,t+1/3),this.g=ro(o,r,t),this.b=ro(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=jt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=jt){let n=kh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}copyLinearToSRGB(t){return this.r=Ya(t.r),this.g=Ya(t.g),this.b=Ya(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=jt){return ee.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Pe(Ue.r*255,0,255))*65536+Math.round(Pe(Ue.g*255,0,255))*256+Math.round(Pe(Ue.b*255,0,255))}getHexString(t=jt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ue.copy(this),e);let n=Ue.r,s=Ue.g,r=Ue.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=jt){ee.fromWorkingColorSpace(Ue.copy(this),t);let e=Ue.r,n=Ue.g,s=Ue.b;return t!==jt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(hr);let n=Xa(Zn.h,hr.h,e),s=Xa(Zn.s,hr.s,e),r=Xa(Zn.l,hr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ue=new zt;zt.NAMES=kh;var sf=0,bn=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=Mn,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bo,this.blendDst=So,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mn&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bo&&(n.blendSrc=this.blendSrc),this.blendDst!==So&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},tn=class extends bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var _e=new w,ur=new lt,be=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ur.fromBufferAttribute(this,e),ur.applyMatrix3(t),this.setXY(e,ur.x,ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Un(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Un(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Un(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wo&&(t.usage=this.usage),t}};var Wr=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Xr=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ve=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}};var rf=0,sn=new xe,ao=new Se,Gi=new w,Qe=new Ei,Ss=new Ei,Re=new w,Ne=class i extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nh(t)?Xr:Wr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return ao.lookAt(t),ao.updateMatrix(),this.applyMatrix4(ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ve(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(t){let n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ss.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(Qe.min,Ss.min),Qe.expandByPoint(Re),Re.addVectors(Qe.max,Ss.max),Qe.expandByPoint(Re)):(Qe.expandByPoint(Ss.min),Qe.expandByPoint(Ss.max))}Qe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Re.fromBufferAttribute(a,c),l&&(Gi.fromBufferAttribute(t,c),Re.add(Gi)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new w,h[E]=new w;let u=new w,f=new w,p=new w,g=new lt,x=new lt,m=new lt,d=new w,v=new w;function y(E,B,W){u.fromArray(s,E*3),f.fromArray(s,B*3),p.fromArray(s,W*3),g.fromArray(o,E*2),x.fromArray(o,B*2),m.fromArray(o,W*2),f.sub(u),p.sub(u),x.sub(g),m.sub(g);let et=1/(x.x*m.y-m.x*x.y);isFinite(et)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(et),v.copy(p).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(et),c[E].add(d),c[B].add(d),c[W].add(d),h[E].add(v),h[B].add(v),h[W].add(v))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let E=0,B=T.length;E<B;++E){let W=T[E],et=W.start,I=W.count;for(let U=et,V=et+I;U<V;U+=3)y(n[U+0],n[U+1],n[U+2])}let L=new w,A=new w,R=new w,H=new w;function M(E){R.fromArray(r,E*3),H.copy(R);let B=c[E];L.copy(B),L.sub(R.multiplyScalar(R.dot(B))).normalize(),A.crossVectors(H,B);let et=A.dot(h[E])<0?-1:1;l[E*4]=L.x,l[E*4+1]=L.y,l[E*4+2]=L.z,l[E*4+3]=et}for(let E=0,B=T.length;E<B;++E){let W=T[E],et=W.start,I=W.count;for(let U=et,V=et+I;U<V;U+=3)M(n[U+0]),M(n[U+1]),M(n[U+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new w,r=new w,o=new w,a=new w,l=new w,c=new w,h=new w,u=new w;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new be(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gc=new xe,pi=new Hr,dr=new os,Vc=new w,Vi=new w,Wi=new w,Xi=new w,oo=new w,fr=new w,pr=new lt,mr=new lt,gr=new lt,Wc=new w,Xc=new w,qc=new w,xr=new w,yr=new w,bt=class extends Se{constructor(t=new Ne,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){fr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(oo.fromBufferAttribute(u,t),o?fr.addScaledVector(oo,h):fr.addScaledVector(oo.sub(e),h))}e.add(fr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(dr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(dr,Vc)===null||pi.origin.distanceToSquared(Vc)>(t.far-t.near)**2))&&(Gc.copy(r).invert(),pi.copy(t.ray).applyMatrix4(Gc),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let T=v,L=y;T<L;T+=3){let A=a.getX(T),R=a.getX(T+1),H=a.getX(T+2);s=_r(this,d,t,n,c,h,u,A,R,H),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let v=a.getX(m),y=a.getX(m+1),T=a.getX(m+2);s=_r(this,o,t,n,c,h,u,v,y,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=v,L=y;T<L;T+=3){let A=T,R=T+1,H=T+2;s=_r(this,d,t,n,c,h,u,A,R,H),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let v=m,y=m+1,T=m+2;s=_r(this,o,t,n,c,h,u,v,y,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function af(i,t,e,n,s,r,o,a){let l;if(t.side===Ye?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ni,a),l===null)return null;yr.copy(a),yr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(yr);return c<e.near||c>e.far?null:{distance:c,point:yr.clone(),object:i}}function _r(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Vi),i.getVertexPosition(l,Wi),i.getVertexPosition(c,Xi);let h=af(i,t,e,n,Vi,Wi,Xi,xr);if(h){s&&(pr.fromBufferAttribute(s,a),mr.fromBufferAttribute(s,l),gr.fromBufferAttribute(s,c),h.uv=_i.getInterpolation(xr,Vi,Wi,Xi,pr,mr,gr,new lt)),r&&(pr.fromBufferAttribute(r,a),mr.fromBufferAttribute(r,l),gr.fromBufferAttribute(r,c),h.uv1=_i.getInterpolation(xr,Vi,Wi,Xi,pr,mr,gr,new lt),h.uv2=h.uv1),o&&(Wc.fromBufferAttribute(o,a),Xc.fromBufferAttribute(o,l),qc.fromBufferAttribute(o,c),h.normal=_i.getInterpolation(xr,Vi,Wi,Xi,Wc,Xc,qc,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new w,materialIndex:0};_i.getNormal(Vi,Wi,Xi,u.normal),h.face=u}return h}var ke=class i extends Ne{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(u,2));function g(x,m,d,v,y,T,L,A,R,H,M){let E=T/R,B=L/H,W=T/2,et=L/2,I=A/2,U=R+1,V=H+1,Y=0,q=0,X=new w;for(let J=0;J<V;J++){let tt=J*B-et;for(let dt=0;dt<U;dt++){let G=dt*E-W;X[x]=G*v,X[m]=tt*y,X[d]=I,c.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[d]=A>0?1:-1,h.push(X.x,X.y,X.z),u.push(dt/R),u.push(1-J/H),Y+=1}}for(let J=0;J<H;J++)for(let tt=0;tt<R;tt++){let dt=f+tt+U*J,G=f+tt+U*(J+1),$=f+(tt+1)+U*(J+1),ht=f+(tt+1)+U*J;l.push(dt,G,ht),l.push(G,$,ht),q+=6}a.addGroup(p,q,M),p+=q,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ls(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){let t={};for(let e=0;e<i.length;e++){let n=ls(i[e]);for(let s in n)t[s]=n[s]}return t}function of(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function zh(i){return i.getRenderTarget()===null?i.outputColorSpace:ee.workingColorSpace}var lf={clone:ls,merge:Ve},cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cf,this.fragmentShader=hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=of(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},qr=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Me=class extends qr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=kr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Wa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(Wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Wa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},qi=-90,Yi=1,Lo=class extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Me(qi,Yi,t,e);s.layers=this.layers,this.add(s);let r=new Me(qi,Yi,t,e);r.layers=this.layers,this.add(r);let o=new Me(qi,Yi,t,e);o.layers=this.layers,this.add(o);let a=new Me(qi,Yi,t,e);a.layers=this.layers,this.add(a);let l=new Me(qi,Yi,t,e);l.layers=this.layers,this.add(l);let c=new Me(qi,Yi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Yr=class extends ln{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:is,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Io=class extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Rs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===bi?jt:on),this.texture=new Yr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ke(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:jn});r.uniforms.tEquirect.value=e;let o=new bt(s,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=rn),new Lo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},lo=new w,uf=new w,df=new Yt,Dn=class{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=lo.subVectors(n,e).cross(uf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(lo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||df.getNormalMatrix(t),s=this.coplanarPoint(lo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},mi=new os,vr=new w,Us=class{constructor(t=new Dn,e=new Dn,n=new Dn,s=new Dn,r=new Dn,o=new Dn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],v=s[13],y=s[14],T=s[15];if(n[0].setComponents(l-r,f-c,m-p,T-d).normalize(),n[1].setComponents(l+r,f+c,m+p,T+d).normalize(),n[2].setComponents(l+o,f+h,m+g,T+v).normalize(),n[3].setComponents(l-o,f-h,m-g,T-v).normalize(),n[4].setComponents(l-a,f-u,m-x,T-y).normalize(),e===Nn)n[5].setComponents(l+a,f+u,m+x,T+y).normalize();else if(e===Nr)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(vr.x=s.normal.x>0?t.max.x:t.min.x,vr.y=s.normal.y>0?t.max.y:t.min.y,vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(vr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Oh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ff(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,f=c.usage,p=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),c.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let f=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),p.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){let d=g[x];e?i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var cn=class i extends Ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,p=[],g=[],x=[],m=[];for(let d=0;d<h;d++){let v=d*f-o;for(let y=0;y<c;y++){let T=y*u-r;g.push(T,-v,0),x.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){let y=v+c*d,T=v+c*(d+1),L=v+1+c*(d+1),A=v+1+c*d;p.push(y,T,A),p.push(T,L,A)}this.setIndex(p),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(x,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mf=`#ifdef USE_ALPHAHASH
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
#endif`,gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vf=`#ifdef USE_AOMAP
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
#endif`,Mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Sf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Af=`#ifdef USE_IRIDESCENCE
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
#endif`,Rf=`#ifdef USE_BUMPMAP
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
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zf=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Of=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ff=`vec3 transformedNormal = objectNormal;
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
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,qf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ep=`#ifdef USE_GRADIENTMAP
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
}`,np=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ap=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,op=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dp=`PhysicalMaterial material;
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
#endif`,fp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,pp=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
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
#endif`,gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Mp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ep=`#if defined( USE_POINTS_UV )
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
#endif`,Tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ap=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kp=`#ifdef USE_NORMALMAP
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
#endif`,zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,am=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,om=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lm=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pm=`uniform sampler2D t2D;
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`#include <common>
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
}`,vm=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,Mm=`#define DISTANCE
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
}`,bm=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Am=`#include <common>
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
}`,Rm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Cm=`#define LAMBERT
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
}`,Pm=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Lm=`#define MATCAP
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
}`,Im=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Dm=`#define NORMAL
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
}`,Um=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nm=`#define PHONG
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
}`,km=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,zm=`#define STANDARD
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
}`,Om=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Fm=`#define TOON
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
}`,Bm=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Hm=`uniform float size;
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
}`,Gm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Vm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Wm=`uniform vec3 color;
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
}`,Xm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,qm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ht={alphahash_fragment:pf,alphahash_pars_fragment:mf,alphamap_fragment:gf,alphamap_pars_fragment:xf,alphatest_fragment:yf,alphatest_pars_fragment:_f,aomap_fragment:vf,aomap_pars_fragment:Mf,batching_pars_vertex:bf,batching_vertex:Sf,begin_vertex:Ef,beginnormal_vertex:Tf,bsdfs:wf,iridescence_fragment:Af,bumpmap_pars_fragment:Rf,clipping_planes_fragment:Cf,clipping_planes_pars_fragment:Pf,clipping_planes_pars_vertex:Lf,clipping_planes_vertex:If,color_fragment:Df,color_pars_fragment:Uf,color_pars_vertex:Nf,color_vertex:kf,common:zf,cube_uv_reflection_fragment:Of,defaultnormal_vertex:Ff,displacementmap_pars_vertex:Bf,displacementmap_vertex:Hf,emissivemap_fragment:Gf,emissivemap_pars_fragment:Vf,colorspace_fragment:Wf,colorspace_pars_fragment:Xf,envmap_fragment:qf,envmap_common_pars_fragment:Yf,envmap_pars_fragment:$f,envmap_pars_vertex:Zf,envmap_physical_pars_fragment:op,envmap_vertex:Kf,fog_vertex:Jf,fog_pars_vertex:jf,fog_fragment:Qf,fog_pars_fragment:tp,gradientmap_pars_fragment:ep,lightmap_fragment:np,lightmap_pars_fragment:ip,lights_lambert_fragment:sp,lights_lambert_pars_fragment:rp,lights_pars_begin:ap,lights_toon_fragment:lp,lights_toon_pars_fragment:cp,lights_phong_fragment:hp,lights_phong_pars_fragment:up,lights_physical_fragment:dp,lights_physical_pars_fragment:fp,lights_fragment_begin:pp,lights_fragment_maps:mp,lights_fragment_end:gp,logdepthbuf_fragment:xp,logdepthbuf_pars_fragment:yp,logdepthbuf_pars_vertex:_p,logdepthbuf_vertex:vp,map_fragment:Mp,map_pars_fragment:bp,map_particle_fragment:Sp,map_particle_pars_fragment:Ep,metalnessmap_fragment:Tp,metalnessmap_pars_fragment:wp,morphcolor_vertex:Ap,morphnormal_vertex:Rp,morphtarget_pars_vertex:Cp,morphtarget_vertex:Pp,normal_fragment_begin:Lp,normal_fragment_maps:Ip,normal_pars_fragment:Dp,normal_pars_vertex:Up,normal_vertex:Np,normalmap_pars_fragment:kp,clearcoat_normal_fragment_begin:zp,clearcoat_normal_fragment_maps:Op,clearcoat_pars_fragment:Fp,iridescence_pars_fragment:Bp,opaque_fragment:Hp,packing:Gp,premultiplied_alpha_fragment:Vp,project_vertex:Wp,dithering_fragment:Xp,dithering_pars_fragment:qp,roughnessmap_fragment:Yp,roughnessmap_pars_fragment:$p,shadowmap_pars_fragment:Zp,shadowmap_pars_vertex:Kp,shadowmap_vertex:Jp,shadowmask_pars_fragment:jp,skinbase_vertex:Qp,skinning_pars_vertex:tm,skinning_vertex:em,skinnormal_vertex:nm,specularmap_fragment:im,specularmap_pars_fragment:sm,tonemapping_fragment:rm,tonemapping_pars_fragment:am,transmission_fragment:om,transmission_pars_fragment:lm,uv_pars_fragment:cm,uv_pars_vertex:hm,uv_vertex:um,worldpos_vertex:dm,background_vert:fm,background_frag:pm,backgroundCube_vert:mm,backgroundCube_frag:gm,cube_vert:xm,cube_frag:ym,depth_vert:_m,depth_frag:vm,distanceRGBA_vert:Mm,distanceRGBA_frag:bm,equirect_vert:Sm,equirect_frag:Em,linedashed_vert:Tm,linedashed_frag:wm,meshbasic_vert:Am,meshbasic_frag:Rm,meshlambert_vert:Cm,meshlambert_frag:Pm,meshmatcap_vert:Lm,meshmatcap_frag:Im,meshnormal_vert:Dm,meshnormal_frag:Um,meshphong_vert:Nm,meshphong_frag:km,meshphysical_vert:zm,meshphysical_frag:Om,meshtoon_vert:Fm,meshtoon_frag:Bm,points_vert:Hm,points_frag:Gm,shadow_vert:Vm,shadow_frag:Wm,sprite_vert:Xm,sprite_frag:qm},it={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},vn={basic:{uniforms:Ve([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ve([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ve([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ve([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ve([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ve([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ve([it.points,it.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ve([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ve([it.common,it.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ve([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ve([it.sprite,it.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ve([it.common,it.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ve([it.lights,it.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};vn.physical={uniforms:Ve([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Mr={r:0,b:0,g:0};function Ym(i,t,e,n,s,r,o){let a=new zt(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(m,d){let v=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=(d.backgroundBlurriness>0?e:t).get(y)),y===null?x(a,l):y&&y.isColor&&(x(y,1),v=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===oa)?(h===void 0&&(h=new bt(new ke(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:ls(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=ee.getTransfer(y.colorSpace)!==oe,(u!==y||f!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new bt(new cn(2,2),new On({name:"BackgroundMaterial",uniforms:ls(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=ee.getTransfer(y.colorSpace)!==oe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,d){m.getRGB(Mr,zh(i)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:g}}function $m(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(I,U,V,Y,q){let X=!1;if(o){let J=x(Y,V,U);c!==J&&(c=J,p(c.object)),X=d(I,Y,V,q),X&&v(I,Y,V,q)}else{let J=U.wireframe===!0;(c.geometry!==Y.id||c.program!==V.id||c.wireframe!==J)&&(c.geometry=Y.id,c.program=V.id,c.wireframe=J,X=!0)}q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,H(I,U,V,Y),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(I){return n.isWebGL2?i.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?i.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function x(I,U,V){let Y=V.wireframe===!0,q=a[I.id];q===void 0&&(q={},a[I.id]=q);let X=q[U.id];X===void 0&&(X={},q[U.id]=X);let J=X[Y];return J===void 0&&(J=m(f()),X[Y]=J),J}function m(I){let U=[],V=[],Y=[];for(let q=0;q<s;q++)U[q]=0,V[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:Y,object:I,attributes:{},index:null}}function d(I,U,V,Y){let q=c.attributes,X=U.attributes,J=0,tt=V.getAttributes();for(let dt in tt)if(tt[dt].location>=0){let $=q[dt],ht=X[dt];if(ht===void 0&&(dt==="instanceMatrix"&&I.instanceMatrix&&(ht=I.instanceMatrix),dt==="instanceColor"&&I.instanceColor&&(ht=I.instanceColor)),$===void 0||$.attribute!==ht||ht&&$.data!==ht.data)return!0;J++}return c.attributesNum!==J||c.index!==Y}function v(I,U,V,Y){let q={},X=U.attributes,J=0,tt=V.getAttributes();for(let dt in tt)if(tt[dt].location>=0){let $=X[dt];$===void 0&&(dt==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),dt==="instanceColor"&&I.instanceColor&&($=I.instanceColor));let ht={};ht.attribute=$,$&&$.data&&(ht.data=$.data),q[dt]=ht,J++}c.attributes=q,c.attributesNum=J,c.index=Y}function y(){let I=c.newAttributes;for(let U=0,V=I.length;U<V;U++)I[U]=0}function T(I){L(I,0)}function L(I,U){let V=c.newAttributes,Y=c.enabledAttributes,q=c.attributeDivisors;V[I]=1,Y[I]===0&&(i.enableVertexAttribArray(I),Y[I]=1),q[I]!==U&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,U),q[I]=U)}function A(){let I=c.newAttributes,U=c.enabledAttributes;for(let V=0,Y=U.length;V<Y;V++)U[V]!==I[V]&&(i.disableVertexAttribArray(V),U[V]=0)}function R(I,U,V,Y,q,X,J){J===!0?i.vertexAttribIPointer(I,U,V,q,X):i.vertexAttribPointer(I,U,V,Y,q,X)}function H(I,U,V,Y){if(n.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();let q=Y.attributes,X=V.getAttributes(),J=U.defaultAttributeValues;for(let tt in X){let dt=X[tt];if(dt.location>=0){let G=q[tt];if(G===void 0&&(tt==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),tt==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),G!==void 0){let $=G.normalized,ht=G.itemSize,vt=e.get(G);if(vt===void 0)continue;let _t=vt.buffer,Nt=vt.type,Ft=vt.bytesPerElement,Rt=n.isWebGL2===!0&&(Nt===i.INT||Nt===i.UNSIGNED_INT||G.gpuType===wh);if(G.isInterleavedBufferAttribute){let Kt=G.data,N=Kt.stride,Fe=G.offset;if(Kt.isInstancedInterleavedBuffer){for(let Et=0;Et<dt.locationSize;Et++)L(dt.location+Et,Kt.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Kt.meshPerAttribute*Kt.count)}else for(let Et=0;Et<dt.locationSize;Et++)T(dt.location+Et);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Et=0;Et<dt.locationSize;Et++)R(dt.location+Et,ht/dt.locationSize,Nt,$,N*Ft,(Fe+ht/dt.locationSize*Et)*Ft,Rt)}else{if(G.isInstancedBufferAttribute){for(let Kt=0;Kt<dt.locationSize;Kt++)L(dt.location+Kt,G.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Kt=0;Kt<dt.locationSize;Kt++)T(dt.location+Kt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Kt=0;Kt<dt.locationSize;Kt++)R(dt.location+Kt,ht/dt.locationSize,Nt,$,ht*Ft,ht/dt.locationSize*Kt*Ft,Rt)}}else if(J!==void 0){let $=J[tt];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(dt.location,$);break;case 3:i.vertexAttrib3fv(dt.location,$);break;case 4:i.vertexAttrib4fv(dt.location,$);break;default:i.vertexAttrib1fv(dt.location,$)}}}}A()}function M(){W();for(let I in a){let U=a[I];for(let V in U){let Y=U[V];for(let q in Y)g(Y[q].object),delete Y[q];delete U[V]}delete a[I]}}function E(I){if(a[I.id]===void 0)return;let U=a[I.id];for(let V in U){let Y=U[V];for(let q in Y)g(Y[q].object),delete Y[q];delete U[V]}delete a[I.id]}function B(I){for(let U in a){let V=a[U];if(V[I.id]===void 0)continue;let Y=V[I.id];for(let q in Y)g(Y[q].object),delete Y[q];delete V[I.id]}}function W(){et(),h=!0,c!==l&&(c=l,p(c.object))}function et(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:W,resetDefaultState:et,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:B,initAttributes:y,enableAttribute:T,disableUnusedAttributes:A}}function Zm(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Km(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,T=o||t.has("OES_texture_float"),L=y&&T,A=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:L,maxSamples:A}}function Jm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Dn,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,y=v*4,T=d.clippingState||null;l.value=T,T=h(g,f,y,p);for(let L=0;L!==y;++L)T[L]=e[L];d.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let d=p+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,T=p;y!==x;++y,T+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function jm(i){let t=new WeakMap;function e(o,a){return a===Is?o.mapping=is:a===Eo&&(o.mapping=ss),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Is||a===Eo)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Io(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var $r=class extends qr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Qi=4,Yc=[.125,.215,.35,.446,.526,.582],yi=20,co=new $r,$c=new zt,ho=null,uo=0,fo=0,gi=(1+Math.sqrt(5))/2,$i=1/gi,Zc=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,gi,$i),new w(0,gi,-$i),new w($i,0,gi),new w(-$i,0,gi),new w(gi,$i,0),new w(-gi,$i,0)],ai=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ho,uo,fo),t.scissorTest=!1,br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Ds,format:xn,colorSpace:kn,depthBuffer:!1},s=Kc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qm(r)),this._blurMaterial=t0(r,t,e)}return s}_compileMaterial(t){let e=new bt(this._lodPlanes[0],t);this._renderer.compile(e,co)}_sceneToCubeUV(t,e,n,s){let a=new Me(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor($c),h.toneMapping=Qn,h.autoClear=!1;let p=new tn({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),g=new bt(new ke,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy($c),x=!0);for(let d=0;d<6;d++){let v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let y=this._cubeSize;br(s,v*y,d>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===is||t.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;br(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,co)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Zc[(s-1)%Zc.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new bt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*yi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):yi;m>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);let d=[],v=0;for(let R=0;R<yi;++R){let H=R/x,M=Math.exp(-H*H/2);d.push(M),R===0?v+=M:R<m&&(v+=2*M)}for(let R=0;R<d.length;R++)d[R]=d[R]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let T=this._sizeLods[s],L=3*T*(s>y-Qi?s-y+Qi:0),A=4*(this._cubeSize-T);br(e,L,A,3*T,2*T),l.setRenderTarget(e),l.render(u,co)}};function Qm(i){let t=[],e=[],n=[],s=i,r=i-Qi+1+Yc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Qi?l=Yc[o-i+Qi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,d=1,v=new Float32Array(x*g*p),y=new Float32Array(m*g*p),T=new Float32Array(d*g*p);for(let A=0;A<p;A++){let R=A%3*2/3-1,H=A>2?0:-1,M=[R,H,0,R+2/3,H,0,R+2/3,H+1,0,R,H,0,R+2/3,H+1,0,R,H+1,0];v.set(M,x*g*A),y.set(f,m*g*A);let E=[A,A,A,A,A,A];T.set(E,d*g*A)}let L=new Ne;L.setAttribute("position",new be(v,x)),L.setAttribute("uv",new be(y,m)),L.setAttribute("faceIndex",new be(T,d)),t.push(L),s>Qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kc(i,t,e){let n=new zn(i,t,e);return n.texture.mapping=oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function t0(i,t,e){let n=new Float32Array(yi),s=new w(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gl(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Jc(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function jc(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function gl(){return`

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
	`}function e0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Is||l===Eo,h=l===is||l===ss;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new ai(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new ai(i));let f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function n0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function i0(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,d=x.length;m<d;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let v=p.array;x=p.version;for(let y=0,T=v.length;y<T;y+=3){let L=v[y+0],A=v[y+1],R=v[y+2];f.push(L,A,A,R,R,L)}}else if(g!==void 0){let v=g.array;x=g.version;for(let y=0,T=v.length/3-1;y<T;y+=3){let L=y+0,A=y+1,R=y+2;f.push(L,A,A,R,R,L)}}else return;let m=new(Nh(f)?Xr:Wr)(f,1);m.version=x;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function s0(i,t,e,n){let s=n.isWebGL2,r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,g){i.drawElements(r,g,a,p*l),e.update(g,r,1)}function u(p,g,x){if(x===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,a,p*l,x),e.update(g,r,x)}function f(p,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<x;d++)this.render(p[d]/l,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,x);let d=0;for(let v=0;v<x;v++)d+=g[v];e.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function r0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function a0(i,t){return i[0]-t[0]}function o0(i,t){return Math.abs(t[1])-Math.abs(i[1])}function l0(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new ce,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,x=r.get(h);if(x===void 0||x.count!==g){let I=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",I)};x!==void 0&&x.texture.dispose();let v=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],H=0;v===!0&&(H=1),y===!0&&(H=2),T===!0&&(H=3);let M=h.attributes.position.count*H,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let B=new Float32Array(M*E*4*g),W=new Br(B,M,E,g);W.type=Jn,W.needsUpdate=!0;let et=H*4;for(let U=0;U<g;U++){let V=L[U],Y=A[U],q=R[U],X=M*E*4*U;for(let J=0;J<V.count;J++){let tt=J*et;v===!0&&(o.fromBufferAttribute(V,J),B[X+tt+0]=o.x,B[X+tt+1]=o.y,B[X+tt+2]=o.z,B[X+tt+3]=0),y===!0&&(o.fromBufferAttribute(Y,J),B[X+tt+4]=o.x,B[X+tt+5]=o.y,B[X+tt+6]=o.z,B[X+tt+7]=0),T===!0&&(o.fromBufferAttribute(q,J),B[X+tt+8]=o.x,B[X+tt+9]=o.y,B[X+tt+10]=o.z,B[X+tt+11]=q.itemSize===4?o.w:1)}}x={count:g,texture:W,size:new lt(M,E)},r.set(h,x),h.addEventListener("dispose",I)}let m=0;for(let v=0;v<f.length;v++)m+=f[v];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let p=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let y=0;y<p;y++)g[y]=[y,0];n[h.id]=g}for(let y=0;y<p;y++){let T=g[y];T[0]=y,T[1]=f[y]}g.sort(o0);for(let y=0;y<8;y++)y<p&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(a0);let x=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let y=0;y<8;y++){let T=a[y],L=T[0],A=T[1];L!==Number.MAX_SAFE_INTEGER&&A?(x&&h.getAttribute("morphTarget"+y)!==x[L]&&h.setAttribute("morphTarget"+y,x[L]),m&&h.getAttribute("morphNormal"+y)!==m[L]&&h.setAttribute("morphNormal"+y,m[L]),s[y]=A,d+=A):(x&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let v=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function c0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Zr=class extends ln{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Mi,h!==Mi&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Mi&&(n=Kn),n===void 0&&h===as&&(n=vi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ce,this.minFilter=l!==void 0?l:Ce,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Fh=new ln,Bh=new Zr(1,1);Bh.compareFunction=Uh;var Hh=new Br,Gh=new Po,Vh=new Yr,Qc=[],th=[],eh=new Float32Array(16),nh=new Float32Array(9),ih=new Float32Array(4);function ds(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Qc[s];if(r===void 0&&(r=new Float32Array(s),Qc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ca(i,t){let e=th[t];e===void 0&&(e=new Int32Array(t),th[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function h0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function u0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function d0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function f0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function p0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;ih.set(n),i.uniformMatrix2fv(this.addr,!1,ih),Te(e,n)}}function m0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;nh.set(n),i.uniformMatrix3fv(this.addr,!1,nh),Te(e,n)}}function g0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;eh.set(n),i.uniformMatrix4fv(this.addr,!1,eh),Te(e,n)}}function x0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function _0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function v0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function M0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function b0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function S0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function E0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function T0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Bh:Fh;e.setTexture2D(t||r,s)}function w0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Gh,s)}function A0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Vh,s)}function R0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hh,s)}function C0(i){switch(i){case 5126:return h0;case 35664:return u0;case 35665:return d0;case 35666:return f0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return x0;case 35667:case 35671:return y0;case 35668:case 35672:return _0;case 35669:case 35673:return v0;case 5125:return M0;case 36294:return b0;case 36295:return S0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return R0}}function P0(i,t){i.uniform1fv(this.addr,t)}function L0(i,t){let e=ds(t,this.size,2);i.uniform2fv(this.addr,e)}function I0(i,t){let e=ds(t,this.size,3);i.uniform3fv(this.addr,e)}function D0(i,t){let e=ds(t,this.size,4);i.uniform4fv(this.addr,e)}function U0(i,t){let e=ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function N0(i,t){let e=ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function k0(i,t){let e=ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function z0(i,t){i.uniform1iv(this.addr,t)}function O0(i,t){i.uniform2iv(this.addr,t)}function F0(i,t){i.uniform3iv(this.addr,t)}function B0(i,t){i.uniform4iv(this.addr,t)}function H0(i,t){i.uniform1uiv(this.addr,t)}function G0(i,t){i.uniform2uiv(this.addr,t)}function V0(i,t){i.uniform3uiv(this.addr,t)}function W0(i,t){i.uniform4uiv(this.addr,t)}function X0(i,t,e){let n=this.cache,s=t.length,r=ca(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Fh,r[o])}function q0(i,t,e){let n=this.cache,s=t.length,r=ca(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Gh,r[o])}function Y0(i,t,e){let n=this.cache,s=t.length,r=ca(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Vh,r[o])}function $0(i,t,e){let n=this.cache,s=t.length,r=ca(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Hh,r[o])}function Z0(i){switch(i){case 5126:return P0;case 35664:return L0;case 35665:return I0;case 35666:return D0;case 35674:return U0;case 35675:return N0;case 35676:return k0;case 5124:case 35670:return z0;case 35667:case 35671:return O0;case 35668:case 35672:return F0;case 35669:case 35673:return B0;case 5125:return H0;case 36294:return G0;case 36295:return V0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return $0}}var Do=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=C0(e.type)}},Uo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Z0(e.type)}},No=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},po=/(\w+)(\])?(\[|\.)?/g;function sh(i,t){i.seq.push(t),i.map[t.id]=t}function K0(i,t,e){let n=i.name,s=n.length;for(po.lastIndex=0;;){let r=po.exec(n),o=po.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){sh(e,c===void 0?new Do(a,i,t):new Uo(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new No(a),sh(e,u)),e=u}}}var ns=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);K0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function rh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var J0=37297,j0=0;function Q0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function tg(i){let t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(i),n;switch(t===e?n="":t===Ur&&e===Dr?n="LinearDisplayP3ToLinearSRGB":t===Dr&&e===Ur&&(n="LinearSRGBToLinearDisplayP3"),i){case kn:case la:return[n,"LinearTransferOETF"];case jt:case ml:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ah(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Q0(i.getShaderSource(t),o)}else return s}function eg(i,t){let e=tg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ng(i,t){let e;switch(t){case vd:e="Linear";break;case Md:e="Reinhard";break;case bd:e="OptimizedCineon";break;case dl:e="ACESFilmic";break;case Ed:e="AgX";break;case Sd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ig(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ts).join(`
`)}function sg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ts).join(`
`)}function rg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ag(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ts(i){return i!==""}function oh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var og=/^[ \t]*#include +<([\w\d./]+)>/gm;function ko(i){return i.replace(og,cg)}var lg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function cg(i,t){let e=Ht[t];if(e===void 0){let n=lg.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ko(e)}var hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ch(i){return i.replace(hg,ug)}function ug(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hh(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Eh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===$u?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function fg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case is:case ss:t="ENVMAP_TYPE_CUBE";break;case oa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ss&&(t="ENVMAP_MODE_REFRACTION"),t}function mg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ul:t="ENVMAP_BLENDING_MULTIPLY";break;case yd:t="ENVMAP_BLENDING_MIX";break;case _d:t="ENVMAP_BLENDING_ADD";break}return t}function gg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function xg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=dg(e),c=fg(e),h=pg(e),u=mg(e),f=gg(e),p=e.isWebGL2?"":ig(e),g=sg(e),x=rg(r),m=s.createProgram(),d,v,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ts).join(`
`),d.length>0&&(d+=`
`),v=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ts).join(`
`),v.length>0&&(v+=`
`)):(d=[hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),v=[p,hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Qn?ng("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,eg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ts).join(`
`)),o=ko(o),o=oh(o,e),o=lh(o,e),a=ko(a),a=oh(a,e),a=lh(a,e),o=ch(o),a=ch(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let T=y+d+o,L=y+v+a,A=rh(s,s.VERTEX_SHADER,T),R=rh(s,s.FRAGMENT_SHADER,L);s.attachShader(m,A),s.attachShader(m,R),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function H(W){if(i.debug.checkShaderErrors){let et=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(A).trim(),U=s.getShaderInfoLog(R).trim(),V=!0,Y=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,A,R);else{let q=ah(s,A,"vertex"),X=ah(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+et+`
`+q+`
`+X)}else et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",et):(I===""||U==="")&&(Y=!1);Y&&(W.diagnostics={runnable:V,programLog:et,vertexShader:{log:I,prefix:d},fragmentShader:{log:U,prefix:v}})}s.deleteShader(A),s.deleteShader(R),M=new ns(s,m),E=ag(s,m)}let M;this.getUniforms=function(){return M===void 0&&H(this),M};let E;this.getAttributes=function(){return E===void 0&&H(this),E};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(m,J0)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=j0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=R,this}var yg=0,zo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Oo(t),e.set(t,n)),n}},Oo=class{constructor(t){this.id=yg++,this.code=t,this.usedTimes=0}};function _g(i,t,e,n,s,r,o){let a=new Vr,l=new zo,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,E,B,W,et){let I=W.fog,U=et.geometry,V=M.isMeshStandardMaterial?W.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),q=Y&&Y.mapping===oa?Y.image.height:null,X=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let J=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,tt=J!==void 0?J.length:0,dt=0;U.morphAttributes.position!==void 0&&(dt=1),U.morphAttributes.normal!==void 0&&(dt=2),U.morphAttributes.color!==void 0&&(dt=3);let G,$,ht,vt;if(X){let Be=vn[X];G=Be.vertexShader,$=Be.fragmentShader}else G=M.vertexShader,$=M.fragmentShader,l.update(M),ht=l.getVertexShaderID(M),vt=l.getFragmentShaderID(M);let _t=i.getRenderTarget(),Nt=et.isInstancedMesh===!0,Ft=et.isBatchedMesh===!0,Rt=!!M.map,Kt=!!M.matcap,N=!!Y,Fe=!!M.aoMap,Et=!!M.lightMap,Dt=!!M.bumpMap,gt=!!M.normalMap,de=!!M.displacementMap,Gt=!!M.emissiveMap,S=!!M.metalnessMap,_=!!M.roughnessMap,z=M.anisotropy>0,j=M.clearcoat>0,K=M.iridescence>0,Q=M.sheen>0,xt=M.transmission>0,ot=z&&!!M.anisotropyMap,ft=j&&!!M.clearcoatMap,At=j&&!!M.clearcoatNormalMap,Vt=j&&!!M.clearcoatRoughnessMap,Z=K&&!!M.iridescenceMap,te=K&&!!M.iridescenceThicknessMap,Zt=Q&&!!M.sheenColorMap,Lt=Q&&!!M.sheenRoughnessMap,Mt=!!M.specularMap,pt=!!M.specularColorMap,Bt=!!M.specularIntensityMap,Qt=xt&&!!M.transmissionMap,me=xt&&!!M.thicknessMap,Xt=!!M.gradientMap,nt=!!M.alphaMap,P=M.alphaTest>0,rt=!!M.alphaHash,at=!!M.extensions,Ct=!!U.attributes.uv1,Tt=!!U.attributes.uv2,se=!!U.attributes.uv3,re=Qn;return M.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(re=i.toneMapping),{isWebGL2:h,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:$,defines:M.defines,customVertexShaderID:ht,customFragmentShaderID:vt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ft,instancing:Nt,instancingColor:Nt&&et.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:kn,map:Rt,matcap:Kt,envMap:N,envMapMode:N&&Y.mapping,envMapCubeUVHeight:q,aoMap:Fe,lightMap:Et,bumpMap:Dt,normalMap:gt,displacementMap:f&&de,emissiveMap:Gt,normalMapObjectSpace:gt&&M.normalMapType===kd,normalMapTangentSpace:gt&&M.normalMapType===pl,metalnessMap:S,roughnessMap:_,anisotropy:z,anisotropyMap:ot,clearcoat:j,clearcoatMap:ft,clearcoatNormalMap:At,clearcoatRoughnessMap:Vt,iridescence:K,iridescenceMap:Z,iridescenceThicknessMap:te,sheen:Q,sheenColorMap:Zt,sheenRoughnessMap:Lt,specularMap:Mt,specularColorMap:pt,specularIntensityMap:Bt,transmission:xt,transmissionMap:Qt,thicknessMap:me,gradientMap:Xt,opaque:M.transparent===!1&&M.blending===Mn,alphaMap:nt,alphaTest:P,alphaHash:rt,combine:M.combine,mapUv:Rt&&x(M.map.channel),aoMapUv:Fe&&x(M.aoMap.channel),lightMapUv:Et&&x(M.lightMap.channel),bumpMapUv:Dt&&x(M.bumpMap.channel),normalMapUv:gt&&x(M.normalMap.channel),displacementMapUv:de&&x(M.displacementMap.channel),emissiveMapUv:Gt&&x(M.emissiveMap.channel),metalnessMapUv:S&&x(M.metalnessMap.channel),roughnessMapUv:_&&x(M.roughnessMap.channel),anisotropyMapUv:ot&&x(M.anisotropyMap.channel),clearcoatMapUv:ft&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:At&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&x(M.sheenRoughnessMap.channel),specularMapUv:Mt&&x(M.specularMap.channel),specularColorMapUv:pt&&x(M.specularColorMap.channel),specularIntensityMapUv:Bt&&x(M.specularIntensityMap.channel),transmissionMapUv:Qt&&x(M.transmissionMap.channel),thicknessMapUv:me&&x(M.thicknessMap.channel),alphaMapUv:nt&&x(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(gt||z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Ct,vertexUv2s:Tt,vertexUv3s:se,pointsUvs:et.isPoints===!0&&!!U.attributes.uv&&(Rt||nt),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:et.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:dt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Rt&&M.map.isVideoTexture===!0&&ee.getTransfer(M.map.colorSpace)===oe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===an,flipSided:M.side===Ye,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:at&&M.extensions.derivatives===!0,extensionFragDepth:at&&M.extensions.fragDepth===!0,extensionDrawBuffers:at&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:at&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:at&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let B in M.defines)E.push(B),E.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(v(E,M),y(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function v(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function y(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function T(M){let E=g[M.type],B;if(E){let W=vn[E];B=lf.clone(W.uniforms)}else B=M.uniforms;return B}function L(M,E){let B;for(let W=0,et=c.length;W<et;W++){let I=c[W];if(I.cacheKey===E){B=I,++B.usedTimes;break}}return B===void 0&&(B=new xg(i,E,M,r),c.push(B)),B}function A(M){if(--M.usedTimes===0){let E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function H(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:T,acquireProgram:L,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:H}}function vg(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Mg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function uh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function dh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,p,g,x,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=m),t++,d}function a(u,f,p,g,x,m){let d=o(u,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,g,x,m){let d=o(u,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||Mg),n.length>1&&n.sort(f||uh),s.length>1&&s.sort(f||uh)}function h(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function bg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new dh,i.set(n,[o])):s>=r.length?(o=new dh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Sg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new zt};break;case"SpotLight":e={position:new w,direction:new w,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new w,halfWidth:new w,halfHeight:new w};break}return i[t.id]=e,e}}}function Eg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Tg=0;function wg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ag(i,t){let e=new Sg,n=Eg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new w);let r=new w,o=new xe,a=new xe;function l(h,u){let f=0,p=0,g=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let x=0,m=0,d=0,v=0,y=0,T=0,L=0,A=0,R=0,H=0,M=0;h.sort(wg);let E=u===!0?Math.PI:1;for(let W=0,et=h.length;W<et;W++){let I=h[W],U=I.color,V=I.intensity,Y=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=U.r*V*E,p+=U.g*V*E,g+=U.b*V*E;else if(I.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(I.sh.coefficients[X],V);M++}else if(I.isDirectionalLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){let J=I.shadow,tt=n.get(I);tt.shadowBias=J.bias,tt.shadowNormalBias=J.normalBias,tt.shadowRadius=J.radius,tt.shadowMapSize=J.mapSize,s.directionalShadow[x]=tt,s.directionalShadowMap[x]=q,s.directionalShadowMatrix[x]=I.shadow.matrix,T++}s.directional[x]=X,x++}else if(I.isSpotLight){let X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(U).multiplyScalar(V*E),X.distance=Y,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,s.spot[d]=X;let J=I.shadow;if(I.map&&(s.spotLightMap[R]=I.map,R++,J.updateMatrices(I),I.castShadow&&H++),s.spotLightMatrix[d]=J.matrix,I.castShadow){let tt=n.get(I);tt.shadowBias=J.bias,tt.shadowNormalBias=J.normalBias,tt.shadowRadius=J.radius,tt.shadowMapSize=J.mapSize,s.spotShadow[d]=tt,s.spotShadowMap[d]=q,A++}d++}else if(I.isRectAreaLight){let X=e.get(I);X.color.copy(U).multiplyScalar(V),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),s.rectArea[v]=X,v++}else if(I.isPointLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity*E),X.distance=I.distance,X.decay=I.decay,I.castShadow){let J=I.shadow,tt=n.get(I);tt.shadowBias=J.bias,tt.shadowNormalBias=J.normalBias,tt.shadowRadius=J.radius,tt.shadowMapSize=J.mapSize,tt.shadowCameraNear=J.camera.near,tt.shadowCameraFar=J.camera.far,s.pointShadow[m]=tt,s.pointShadowMap[m]=q,s.pointShadowMatrix[m]=I.shadow.matrix,L++}s.point[m]=X,m++}else if(I.isHemisphereLight){let X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(V*E),X.groundColor.copy(I.groundColor).multiplyScalar(V*E),s.hemi[y]=X,y++}}v>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=it.LTC_FLOAT_1,s.rectAreaLTC2=it.LTC_FLOAT_2):(s.rectAreaLTC1=it.LTC_HALF_1,s.rectAreaLTC2=it.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=it.LTC_FLOAT_1,s.rectAreaLTC2=it.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=it.LTC_HALF_1,s.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;let B=s.hash;(B.directionalLength!==x||B.pointLength!==m||B.spotLength!==d||B.rectAreaLength!==v||B.hemiLength!==y||B.numDirectionalShadows!==T||B.numPointShadows!==L||B.numSpotShadows!==A||B.numSpotMaps!==R||B.numLightProbes!==M)&&(s.directional.length=x,s.spot.length=d,s.rectArea.length=v,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=A+R-H,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=M,B.directionalLength=x,B.pointLength=m,B.spotLength=d,B.rectAreaLength=v,B.hemiLength=y,B.numDirectionalShadows=T,B.numPointShadows=L,B.numSpotShadows=A,B.numSpotMaps=R,B.numLightProbes=M,s.version=Tg++)}function c(h,u){let f=0,p=0,g=0,x=0,m=0,d=u.matrixWorldInverse;for(let v=0,y=h.length;v<y;v++){let T=h[v];if(T.isDirectionalLight){let L=s.directional[f];L.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(d),f++}else if(T.isSpotLight){let L=s.spot[g];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(d),L.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(d),g++}else if(T.isRectAreaLight){let L=s.rectArea[x];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(d),a.identity(),o.copy(T.matrixWorld),o.premultiply(d),a.extractRotation(o),L.halfWidth.set(T.width*.5,0,0),L.halfHeight.set(0,T.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),x++}else if(T.isPointLight){let L=s.point[p];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(d),p++}else if(T.isHemisphereLight){let L=s.hemi[m];L.direction.setFromMatrixPosition(T.matrixWorld),L.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:s}}function fh(i,t){let e=new Ag(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Rg(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new fh(i,t),e.set(r,[l])):o>=a.length?(l=new fh(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var Fo=class extends bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Bo=class extends bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pg=`uniform sampler2D shadow_pass;
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
}`;function Lg(i,t,e){let n=new Us,s=new lt,r=new lt,o=new ce,a=new Fo({depthPacking:Nd}),l=new Bo,c={},h=e.maxTextureSize,u={[ni]:Ye,[Ye]:ni,[an]:an},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Cg,fragmentShader:Pg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ne;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new bt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eh;let d=this.type;this.render=function(A,R,H){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=i.getRenderTarget(),E=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),W=i.state;W.setBlending(jn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let et=d!==In&&this.type===In,I=d===In&&this.type!==In;for(let U=0,V=A.length;U<V;U++){let Y=A[U],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let X=q.getFrameExtents();if(s.multiply(X),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,q.mapSize.y=r.y)),q.map===null||et===!0||I===!0){let tt=this.type!==In?{minFilter:Ce,magFilter:Ce}:{};q.map!==null&&q.map.dispose(),q.map=new zn(s.x,s.y,tt),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let J=q.getViewportCount();for(let tt=0;tt<J;tt++){let dt=q.getViewport(tt);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),W.viewport(o),q.updateMatrices(Y,tt),n=q.getFrustum(),T(R,H,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===In&&v(q,H),q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,E,B)};function v(A,R){let H=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,H,f,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,H,p,x,null)}function y(A,R,H,M){let E=null,B=H.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(B!==void 0)E=B;else if(E=H.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let W=E.uuid,et=R.uuid,I=c[W];I===void 0&&(I={},c[W]=I);let U=I[et];U===void 0&&(U=E.clone(),I[et]=U,R.addEventListener("dispose",L)),E=U}if(E.visible=R.visible,E.wireframe=R.wireframe,M===In?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,H.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let W=i.properties.get(E);W.light=H}return E}function T(A,R,H,M,E){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===In)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld);let et=t.update(A),I=A.material;if(Array.isArray(I)){let U=et.groups;for(let V=0,Y=U.length;V<Y;V++){let q=U[V],X=I[q.materialIndex];if(X&&X.visible){let J=y(A,X,M,E);A.onBeforeShadow(i,A,R,H,et,J,q),i.renderBufferDirect(H,null,et,J,A,q),A.onAfterShadow(i,A,R,H,et,J,q)}}}else if(I.visible){let U=y(A,I,M,E);A.onBeforeShadow(i,A,R,H,et,U,null),i.renderBufferDirect(H,null,et,U,A,null),A.onAfterShadow(i,A,R,H,et,U,null)}}let W=A.children;for(let et=0,I=W.length;et<I;et++)T(W[et],R,H,M,E)}function L(A){A.target.removeEventListener("dispose",L);for(let H in c){let M=c[H],E=A.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function Ig(i,t,e){let n=e.isWebGL2;function s(){let P=!1,rt=new ce,at=null,Ct=new ce(0,0,0,0);return{setMask:function(Tt){at!==Tt&&!P&&(i.colorMask(Tt,Tt,Tt,Tt),at=Tt)},setLocked:function(Tt){P=Tt},setClear:function(Tt,se,re,we,Be){Be===!0&&(Tt*=we,se*=we,re*=we),rt.set(Tt,se,re,we),Ct.equals(rt)===!1&&(i.clearColor(Tt,se,re,we),Ct.copy(rt))},reset:function(){P=!1,at=null,Ct.set(-1,0,0,0)}}}function r(){let P=!1,rt=null,at=null,Ct=null;return{setTest:function(Tt){Tt?Ft(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(Tt){rt!==Tt&&!P&&(i.depthMask(Tt),rt=Tt)},setFunc:function(Tt){if(at!==Tt){switch(Tt){case ud:i.depthFunc(i.NEVER);break;case dd:i.depthFunc(i.ALWAYS);break;case fd:i.depthFunc(i.LESS);break;case Cr:i.depthFunc(i.LEQUAL);break;case pd:i.depthFunc(i.EQUAL);break;case md:i.depthFunc(i.GEQUAL);break;case gd:i.depthFunc(i.GREATER);break;case xd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}at=Tt}},setLocked:function(Tt){P=Tt},setClear:function(Tt){Ct!==Tt&&(i.clearDepth(Tt),Ct=Tt)},reset:function(){P=!1,rt=null,at=null,Ct=null}}}function o(){let P=!1,rt=null,at=null,Ct=null,Tt=null,se=null,re=null,we=null,Be=null;return{setTest:function(ae){P||(ae?Ft(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(ae){rt!==ae&&!P&&(i.stencilMask(ae),rt=ae)},setFunc:function(ae,He,_n){(at!==ae||Ct!==He||Tt!==_n)&&(i.stencilFunc(ae,He,_n),at=ae,Ct=He,Tt=_n)},setOp:function(ae,He,_n){(se!==ae||re!==He||we!==_n)&&(i.stencilOp(ae,He,_n),se=ae,re=He,we=_n)},setLocked:function(ae){P=ae},setClear:function(ae){Be!==ae&&(i.clearStencil(ae),Be=ae)},reset:function(){P=!1,rt=null,at=null,Ct=null,Tt=null,se=null,re=null,we=null,Be=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},p={},g=new WeakMap,x=[],m=null,d=!1,v=null,y=null,T=null,L=null,A=null,R=null,H=null,M=new zt(0,0,0),E=0,B=!1,W=null,et=null,I=null,U=null,V=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,X=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=X>=1):J.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=X>=2);let tt=null,dt={},G=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),ht=new ce().fromArray(G),vt=new ce().fromArray($);function _t(P,rt,at,Ct){let Tt=new Uint8Array(4),se=i.createTexture();i.bindTexture(P,se),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let re=0;re<at;re++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(rt,0,i.RGBA,1,1,Ct,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(rt+re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return se}let Nt={};Nt[i.TEXTURE_2D]=_t(i.TEXTURE_2D,i.TEXTURE_2D,1),Nt[i.TEXTURE_CUBE_MAP]=_t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Nt[i.TEXTURE_2D_ARRAY]=_t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Nt[i.TEXTURE_3D]=_t(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ft(i.DEPTH_TEST),l.setFunc(Cr),Gt(!1),S($l),Ft(i.CULL_FACE),gt(jn);function Ft(P){f[P]!==!0&&(i.enable(P),f[P]=!0)}function Rt(P){f[P]!==!1&&(i.disable(P),f[P]=!1)}function Kt(P,rt){return p[P]!==rt?(i.bindFramebuffer(P,rt),p[P]=rt,n&&(P===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=rt),P===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=rt)),!0):!1}function N(P,rt){let at=x,Ct=!1;if(P)if(at=g.get(rt),at===void 0&&(at=[],g.set(rt,at)),P.isWebGLMultipleRenderTargets){let Tt=P.texture;if(at.length!==Tt.length||at[0]!==i.COLOR_ATTACHMENT0){for(let se=0,re=Tt.length;se<re;se++)at[se]=i.COLOR_ATTACHMENT0+se;at.length=Tt.length,Ct=!0}}else at[0]!==i.COLOR_ATTACHMENT0&&(at[0]=i.COLOR_ATTACHMENT0,Ct=!0);else at[0]!==i.BACK&&(at[0]=i.BACK,Ct=!0);Ct&&(e.isWebGL2?i.drawBuffers(at):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(at))}function Fe(P){return m!==P?(i.useProgram(P),m=P,!0):!1}let Et={[xi]:i.FUNC_ADD,[Ku]:i.FUNC_SUBTRACT,[Ju]:i.FUNC_REVERSE_SUBTRACT};if(n)Et[Jl]=i.MIN,Et[jl]=i.MAX;else{let P=t.get("EXT_blend_minmax");P!==null&&(Et[Jl]=P.MIN_EXT,Et[jl]=P.MAX_EXT)}let Dt={[ju]:i.ZERO,[Qu]:i.ONE,[td]:i.SRC_COLOR,[bo]:i.SRC_ALPHA,[ad]:i.SRC_ALPHA_SATURATE,[sd]:i.DST_COLOR,[nd]:i.DST_ALPHA,[ed]:i.ONE_MINUS_SRC_COLOR,[So]:i.ONE_MINUS_SRC_ALPHA,[rd]:i.ONE_MINUS_DST_COLOR,[id]:i.ONE_MINUS_DST_ALPHA,[od]:i.CONSTANT_COLOR,[ld]:i.ONE_MINUS_CONSTANT_COLOR,[cd]:i.CONSTANT_ALPHA,[hd]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(P,rt,at,Ct,Tt,se,re,we,Be,ae){if(P===jn){d===!0&&(Rt(i.BLEND),d=!1);return}if(d===!1&&(Ft(i.BLEND),d=!0),P!==Zu){if(P!==v||ae!==B){if((y!==xi||A!==xi)&&(i.blendEquation(i.FUNC_ADD),y=xi,A=xi),ae)switch(P){case Mn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ii:i.blendFunc(i.ONE,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Mn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ii:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,L=null,R=null,H=null,M.set(0,0,0),E=0,v=P,B=ae}return}Tt=Tt||rt,se=se||at,re=re||Ct,(rt!==y||Tt!==A)&&(i.blendEquationSeparate(Et[rt],Et[Tt]),y=rt,A=Tt),(at!==T||Ct!==L||se!==R||re!==H)&&(i.blendFuncSeparate(Dt[at],Dt[Ct],Dt[se],Dt[re]),T=at,L=Ct,R=se,H=re),(we.equals(M)===!1||Be!==E)&&(i.blendColor(we.r,we.g,we.b,Be),M.copy(we),E=Be),v=P,B=!1}function de(P,rt){P.side===an?Rt(i.CULL_FACE):Ft(i.CULL_FACE);let at=P.side===Ye;rt&&(at=!at),Gt(at),P.blending===Mn&&P.transparent===!1?gt(jn):gt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);let Ct=P.stencilWrite;c.setTest(Ct),Ct&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),z(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ft(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(P){W!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),W=P)}function S(P){P!==qu?(Ft(i.CULL_FACE),P!==et&&(P===$l?i.cullFace(i.BACK):P===Yu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),et=P}function _(P){P!==I&&(q&&i.lineWidth(P),I=P)}function z(P,rt,at){P?(Ft(i.POLYGON_OFFSET_FILL),(U!==rt||V!==at)&&(i.polygonOffset(rt,at),U=rt,V=at)):Rt(i.POLYGON_OFFSET_FILL)}function j(P){P?Ft(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function K(P){P===void 0&&(P=i.TEXTURE0+Y-1),tt!==P&&(i.activeTexture(P),tt=P)}function Q(P,rt,at){at===void 0&&(tt===null?at=i.TEXTURE0+Y-1:at=tt);let Ct=dt[at];Ct===void 0&&(Ct={type:void 0,texture:void 0},dt[at]=Ct),(Ct.type!==P||Ct.texture!==rt)&&(tt!==at&&(i.activeTexture(at),tt=at),i.bindTexture(P,rt||Nt[P]),Ct.type=P,Ct.texture=rt)}function xt(){let P=dt[tt];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ot(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function At(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Vt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Lt(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Bt(P){ht.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ht.copy(P))}function Qt(P){vt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),vt.copy(P))}function me(P,rt){let at=u.get(rt);at===void 0&&(at=new WeakMap,u.set(rt,at));let Ct=at.get(P);Ct===void 0&&(Ct=i.getUniformBlockIndex(rt,P.name),at.set(P,Ct))}function Xt(P,rt){let Ct=u.get(rt).get(P);h.get(rt)!==Ct&&(i.uniformBlockBinding(rt,Ct,P.__bindingPointIndex),h.set(rt,Ct))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},tt=null,dt={},p={},g=new WeakMap,x=[],m=null,d=!1,v=null,y=null,T=null,L=null,A=null,R=null,H=null,M=new zt(0,0,0),E=0,B=!1,W=null,et=null,I=null,U=null,V=null,ht.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ft,disable:Rt,bindFramebuffer:Kt,drawBuffers:N,useProgram:Fe,setBlending:gt,setMaterial:de,setFlipSided:Gt,setCullFace:S,setLineWidth:_,setPolygonOffset:z,setScissorTest:j,activeTexture:K,bindTexture:Q,unbindTexture:xt,compressedTexImage2D:ot,compressedTexImage3D:ft,texImage2D:Mt,texImage3D:pt,updateUBOMapping:me,uniformBlockBinding:Xt,texStorage2D:Zt,texStorage3D:Lt,texSubImage2D:At,texSubImage3D:Vt,compressedTexSubImage2D:Z,compressedTexSubImage3D:te,scissor:Bt,viewport:Qt,reset:nt}}function Dg(i,t,e,n,s,r,o){let a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return p?new OffscreenCanvas(S,_):zr("canvas")}function x(S,_,z,j){let K=1;if((S.width>j||S.height>j)&&(K=j/Math.max(S.width,S.height)),K<1||_===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let Q=_?Ro:Math.floor,xt=Q(K*S.width),ot=Q(K*S.height);u===void 0&&(u=g(xt,ot));let ft=z?g(xt,ot):u;return ft.width=xt,ft.height=ot,ft.getContext("2d").drawImage(S,0,0,xt,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+xt+"x"+ot+")."),ft}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return Pc(S.width)&&Pc(S.height)}function d(S){return a?!1:S.wrapS!==gn||S.wrapT!==gn||S.minFilter!==Ce&&S.minFilter!==rn}function v(S,_){return S.generateMipmaps&&_&&S.minFilter!==Ce&&S.minFilter!==rn}function y(S){i.generateMipmap(S)}function T(S,_,z,j,K=!1){if(a===!1)return _;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Q=_;if(_===i.RED&&(z===i.FLOAT&&(Q=i.R32F),z===i.HALF_FLOAT&&(Q=i.R16F),z===i.UNSIGNED_BYTE&&(Q=i.R8)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.R8UI),z===i.UNSIGNED_SHORT&&(Q=i.R16UI),z===i.UNSIGNED_INT&&(Q=i.R32UI),z===i.BYTE&&(Q=i.R8I),z===i.SHORT&&(Q=i.R16I),z===i.INT&&(Q=i.R32I)),_===i.RG&&(z===i.FLOAT&&(Q=i.RG32F),z===i.HALF_FLOAT&&(Q=i.RG16F),z===i.UNSIGNED_BYTE&&(Q=i.RG8)),_===i.RGBA){let xt=K?Ir:ee.getTransfer(j);z===i.FLOAT&&(Q=i.RGBA32F),z===i.HALF_FLOAT&&(Q=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Q=xt===oe?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function L(S,_,z){return v(S,z)===!0||S.isFramebufferTexture&&S.minFilter!==Ce&&S.minFilter!==rn?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function A(S){return S===Ce||S===Ql||S===za?i.NEAREST:i.LINEAR}function R(S){let _=S.target;_.removeEventListener("dispose",R),M(_),_.isVideoTexture&&h.delete(_)}function H(S){let _=S.target;_.removeEventListener("dispose",H),B(_)}function M(S){let _=n.get(S);if(_.__webglInit===void 0)return;let z=S.source,j=f.get(z);if(j){let K=j[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(S),Object.keys(j).length===0&&f.delete(z)}n.remove(S)}function E(S){let _=n.get(S);i.deleteTexture(_.__webglTexture);let z=S.source,j=f.get(z);delete j[_.__cacheKey],o.memory.textures--}function B(S){let _=S.texture,z=n.get(S),j=n.get(_);if(j.__webglTexture!==void 0&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(z.__webglFramebuffer[K]))for(let Q=0;Q<z.__webglFramebuffer[K].length;Q++)i.deleteFramebuffer(z.__webglFramebuffer[K][Q]);else i.deleteFramebuffer(z.__webglFramebuffer[K]);z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[K])}else{if(Array.isArray(z.__webglFramebuffer))for(let K=0;K<z.__webglFramebuffer.length;K++)i.deleteFramebuffer(z.__webglFramebuffer[K]);else i.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let K=0;K<z.__webglColorRenderbuffer.length;K++)z.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[K]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let K=0,Q=_.length;K<Q;K++){let xt=n.get(_[K]);xt.__webglTexture&&(i.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(_[K])}n.remove(_),n.remove(S)}let W=0;function et(){W=0}function I(){let S=W;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),W+=1,S}function U(S){let _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function V(S,_){let z=n.get(S);if(S.isVideoTexture&&de(S),S.isRenderTargetTexture===!1&&S.version>0&&z.__version!==S.version){let j=S.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(z,S,_);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function Y(S,_){let z=n.get(S);if(S.version>0&&z.__version!==S.version){ht(z,S,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function q(S,_){let z=n.get(S);if(S.version>0&&z.__version!==S.version){ht(z,S,_);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function X(S,_){let z=n.get(S);if(S.version>0&&z.__version!==S.version){vt(z,S,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}let J={[rs]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[To]:i.MIRRORED_REPEAT},tt={[Ce]:i.NEAREST,[Ql]:i.NEAREST_MIPMAP_NEAREST,[za]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[Td]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},dt={[zd]:i.NEVER,[Vd]:i.ALWAYS,[Od]:i.LESS,[Uh]:i.LEQUAL,[Fd]:i.EQUAL,[Gd]:i.GEQUAL,[Bd]:i.GREATER,[Hd]:i.NOTEQUAL};function G(S,_,z){if(z?(i.texParameteri(S,i.TEXTURE_WRAP_S,J[_.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,J[_.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,J[_.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,tt[_.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,tt[_.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==gn||_.wrapT!==gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,A(_.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,A(_.minFilter)),_.minFilter!==Ce&&_.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,dt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let j=t.get("EXT_texture_filter_anisotropic");if(_.magFilter===Ce||_.minFilter!==za&&_.minFilter!==Si||_.type===Jn&&t.has("OES_texture_float_linear")===!1||a===!1&&_.type===Ds&&t.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(S,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function $(S,_){let z=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",R));let j=_.source,K=f.get(j);K===void 0&&(K={},f.set(j,K));let Q=U(_);if(Q!==S.__cacheKey){K[Q]===void 0&&(K[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),K[Q].usedTimes++;let xt=K[S.__cacheKey];xt!==void 0&&(K[S.__cacheKey].usedTimes--,xt.usedTimes===0&&E(_)),S.__cacheKey=Q,S.__webglTexture=K[Q].texture}return z}function ht(S,_,z){let j=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=i.TEXTURE_3D);let K=$(S,_),Q=_.source;e.bindTexture(j,S.__webglTexture,i.TEXTURE0+z);let xt=n.get(Q);if(Q.version!==xt.__version||K===!0){e.activeTexture(i.TEXTURE0+z);let ot=ee.getPrimaries(ee.workingColorSpace),ft=_.colorSpace===on?null:ee.getPrimaries(_.colorSpace),At=_.colorSpace===on||ot===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let Vt=d(_)&&m(_.image)===!1,Z=x(_.image,Vt,!1,s.maxTextureSize);Z=Gt(_,Z);let te=m(Z)||a,Zt=r.convert(_.format,_.colorSpace),Lt=r.convert(_.type),Mt=T(_.internalFormat,Zt,Lt,_.colorSpace,_.isVideoTexture);G(j,_,te);let pt,Bt=_.mipmaps,Qt=a&&_.isVideoTexture!==!0&&Mt!==Ih,me=xt.__version===void 0||K===!0,Xt=L(_,Z,te);if(_.isDepthTexture)Mt=i.DEPTH_COMPONENT,a?_.type===Jn?Mt=i.DEPTH_COMPONENT32F:_.type===Kn?Mt=i.DEPTH_COMPONENT24:_.type===vi?Mt=i.DEPTH24_STENCIL8:Mt=i.DEPTH_COMPONENT16:_.type===Jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Mi&&Mt===i.DEPTH_COMPONENT&&_.type!==fl&&_.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Kn,Lt=r.convert(_.type)),_.format===as&&Mt===i.DEPTH_COMPONENT&&(Mt=i.DEPTH_STENCIL,_.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=vi,Lt=r.convert(_.type))),me&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,Mt,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,Mt,Z.width,Z.height,0,Zt,Lt,null));else if(_.isDataTexture)if(Bt.length>0&&te){Qt&&me&&e.texStorage2D(i.TEXTURE_2D,Xt,Mt,Bt[0].width,Bt[0].height);for(let nt=0,P=Bt.length;nt<P;nt++)pt=Bt[nt],Qt?e.texSubImage2D(i.TEXTURE_2D,nt,0,0,pt.width,pt.height,Zt,Lt,pt.data):e.texImage2D(i.TEXTURE_2D,nt,Mt,pt.width,pt.height,0,Zt,Lt,pt.data);_.generateMipmaps=!1}else Qt?(me&&e.texStorage2D(i.TEXTURE_2D,Xt,Mt,Z.width,Z.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,Zt,Lt,Z.data)):e.texImage2D(i.TEXTURE_2D,0,Mt,Z.width,Z.height,0,Zt,Lt,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Qt&&me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Xt,Mt,Bt[0].width,Bt[0].height,Z.depth);for(let nt=0,P=Bt.length;nt<P;nt++)pt=Bt[nt],_.format!==xn?Zt!==null?Qt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,pt.width,pt.height,Z.depth,Zt,pt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,Mt,pt.width,pt.height,Z.depth,0,pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,pt.width,pt.height,Z.depth,Zt,Lt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,Mt,pt.width,pt.height,Z.depth,0,Zt,Lt,pt.data)}else{Qt&&me&&e.texStorage2D(i.TEXTURE_2D,Xt,Mt,Bt[0].width,Bt[0].height);for(let nt=0,P=Bt.length;nt<P;nt++)pt=Bt[nt],_.format!==xn?Zt!==null?Qt?e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,pt.width,pt.height,Zt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,Mt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage2D(i.TEXTURE_2D,nt,0,0,pt.width,pt.height,Zt,Lt,pt.data):e.texImage2D(i.TEXTURE_2D,nt,Mt,pt.width,pt.height,0,Zt,Lt,pt.data)}else if(_.isDataArrayTexture)Qt?(me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Xt,Mt,Z.width,Z.height,Z.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Zt,Lt,Z.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,Z.width,Z.height,Z.depth,0,Zt,Lt,Z.data);else if(_.isData3DTexture)Qt?(me&&e.texStorage3D(i.TEXTURE_3D,Xt,Mt,Z.width,Z.height,Z.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Zt,Lt,Z.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,Z.width,Z.height,Z.depth,0,Zt,Lt,Z.data);else if(_.isFramebufferTexture){if(me)if(Qt)e.texStorage2D(i.TEXTURE_2D,Xt,Mt,Z.width,Z.height);else{let nt=Z.width,P=Z.height;for(let rt=0;rt<Xt;rt++)e.texImage2D(i.TEXTURE_2D,rt,Mt,nt,P,0,Zt,Lt,null),nt>>=1,P>>=1}}else if(Bt.length>0&&te){Qt&&me&&e.texStorage2D(i.TEXTURE_2D,Xt,Mt,Bt[0].width,Bt[0].height);for(let nt=0,P=Bt.length;nt<P;nt++)pt=Bt[nt],Qt?e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Zt,Lt,pt):e.texImage2D(i.TEXTURE_2D,nt,Mt,Zt,Lt,pt);_.generateMipmaps=!1}else Qt?(me&&e.texStorage2D(i.TEXTURE_2D,Xt,Mt,Z.width,Z.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Zt,Lt,Z)):e.texImage2D(i.TEXTURE_2D,0,Mt,Zt,Lt,Z);v(_,te)&&y(j),xt.__version=Q.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function vt(S,_,z){if(_.image.length!==6)return;let j=$(S,_),K=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+z);let Q=n.get(K);if(K.version!==Q.__version||j===!0){e.activeTexture(i.TEXTURE0+z);let xt=ee.getPrimaries(ee.workingColorSpace),ot=_.colorSpace===on?null:ee.getPrimaries(_.colorSpace),ft=_.colorSpace===on||xt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let At=_.isCompressedTexture||_.image[0].isCompressedTexture,Vt=_.image[0]&&_.image[0].isDataTexture,Z=[];for(let nt=0;nt<6;nt++)!At&&!Vt?Z[nt]=x(_.image[nt],!1,!0,s.maxCubemapSize):Z[nt]=Vt?_.image[nt].image:_.image[nt],Z[nt]=Gt(_,Z[nt]);let te=Z[0],Zt=m(te)||a,Lt=r.convert(_.format,_.colorSpace),Mt=r.convert(_.type),pt=T(_.internalFormat,Lt,Mt,_.colorSpace),Bt=a&&_.isVideoTexture!==!0,Qt=Q.__version===void 0||j===!0,me=L(_,te,Zt);G(i.TEXTURE_CUBE_MAP,_,Zt);let Xt;if(At){Bt&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,me,pt,te.width,te.height);for(let nt=0;nt<6;nt++){Xt=Z[nt].mipmaps;for(let P=0;P<Xt.length;P++){let rt=Xt[P];_.format!==xn?Lt!==null?Bt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P,0,0,rt.width,rt.height,Lt,rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P,pt,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P,0,0,rt.width,rt.height,Lt,Mt,rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P,pt,rt.width,rt.height,0,Lt,Mt,rt.data)}}}else{Xt=_.mipmaps,Bt&&Qt&&(Xt.length>0&&me++,e.texStorage2D(i.TEXTURE_CUBE_MAP,me,pt,Z[0].width,Z[0].height));for(let nt=0;nt<6;nt++)if(Vt){Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Z[nt].width,Z[nt].height,Lt,Mt,Z[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,pt,Z[nt].width,Z[nt].height,0,Lt,Mt,Z[nt].data);for(let P=0;P<Xt.length;P++){let at=Xt[P].image[nt].image;Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P+1,0,0,at.width,at.height,Lt,Mt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P+1,pt,at.width,at.height,0,Lt,Mt,at.data)}}else{Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Lt,Mt,Z[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,pt,Lt,Mt,Z[nt]);for(let P=0;P<Xt.length;P++){let rt=Xt[P];Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P+1,0,0,Lt,Mt,rt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P+1,pt,Lt,Mt,rt.image[nt])}}}v(_,Zt)&&y(i.TEXTURE_CUBE_MAP),Q.__version=K.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function _t(S,_,z,j,K,Q){let xt=r.convert(z.format,z.colorSpace),ot=r.convert(z.type),ft=T(z.internalFormat,xt,ot,z.colorSpace);if(!n.get(_).__hasExternalTextures){let Vt=Math.max(1,_.width>>Q),Z=Math.max(1,_.height>>Q);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,Q,ft,Vt,Z,_.depth,0,xt,ot,null):e.texImage2D(K,Q,ft,Vt,Z,0,xt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),gt(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,n.get(z).__webglTexture,0,Dt(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,K,n.get(z).__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(S,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,S),_.depthBuffer&&!_.stencilBuffer){let j=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(z||gt(_)){let K=_.depthTexture;K&&K.isDepthTexture&&(K.type===Jn?j=i.DEPTH_COMPONENT32F:K.type===Kn&&(j=i.DEPTH_COMPONENT24));let Q=Dt(_);gt(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,j,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,j,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,j,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(_.depthBuffer&&_.stencilBuffer){let j=Dt(_);z&&gt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,j,i.DEPTH24_STENCIL8,_.width,_.height):gt(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{let j=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let K=0;K<j.length;K++){let Q=j[K],xt=r.convert(Q.format,Q.colorSpace),ot=r.convert(Q.type),ft=T(Q.internalFormat,xt,ot,Q.colorSpace),At=Dt(_);z&&gt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,ft,_.width,_.height):gt(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,ft,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ft,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V(_.depthTexture,0);let j=n.get(_.depthTexture).__webglTexture,K=Dt(_);if(_.depthTexture.format===Mi)gt(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(_.depthTexture.format===as)gt(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Rt(S){let _=n.get(S),z=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ft(_.__webglFramebuffer,S)}else if(z){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]=i.createRenderbuffer(),Nt(_.__webglDepthbuffer[j],S,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),Nt(_.__webglDepthbuffer,S,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(S,_,z){let j=n.get(S);_!==void 0&&_t(j.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Rt(S)}function N(S){let _=S.texture,z=n.get(S),j=n.get(_);S.addEventListener("dispose",H),S.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=_.version,o.memory.textures++);let K=S.isWebGLCubeRenderTarget===!0,Q=S.isWebGLMultipleRenderTargets===!0,xt=m(S)||a;if(K){z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(a&&_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[ot]=[];for(let ft=0;ft<_.mipmaps.length;ft++)z.__webglFramebuffer[ot][ft]=i.createFramebuffer()}else z.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let ot=0;ot<_.mipmaps.length;ot++)z.__webglFramebuffer[ot]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Q)if(s.drawBuffers){let ot=S.texture;for(let ft=0,At=ot.length;ft<At;ft++){let Vt=n.get(ot[ft]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&gt(S)===!1){let ot=Q?_:[_];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ft=0;ft<ot.length;ft++){let At=ot[ft];z.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ft]);let Vt=r.convert(At.format,At.colorSpace),Z=r.convert(At.type),te=T(At.internalFormat,Vt,Z,At.colorSpace,S.isXRRenderTarget===!0),Zt=Dt(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,te,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,z.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Nt(z.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),G(i.TEXTURE_CUBE_MAP,_,xt);for(let ot=0;ot<6;ot++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)_t(z.__webglFramebuffer[ot][ft],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else _t(z.__webglFramebuffer[ot],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);v(_,xt)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Q){let ot=S.texture;for(let ft=0,At=ot.length;ft<At;ft++){let Vt=ot[ft],Z=n.get(Vt);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture),G(i.TEXTURE_2D,Vt,xt),_t(z.__webglFramebuffer,S,Vt,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),v(Vt,xt)&&y(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?ot=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,j.__webglTexture),G(ot,_,xt),a&&_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)_t(z.__webglFramebuffer[ft],S,_,i.COLOR_ATTACHMENT0,ot,ft);else _t(z.__webglFramebuffer,S,_,i.COLOR_ATTACHMENT0,ot,0);v(_,xt)&&y(ot),e.unbindTexture()}S.depthBuffer&&Rt(S)}function Fe(S){let _=m(S)||a,z=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let j=0,K=z.length;j<K;j++){let Q=z[j];if(v(Q,_)){let xt=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ot=n.get(Q).__webglTexture;e.bindTexture(xt,ot),y(xt),e.unbindTexture()}}}function Et(S){if(a&&S.samples>0&&gt(S)===!1){let _=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],z=S.width,j=S.height,K=i.COLOR_BUFFER_BIT,Q=[],xt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=n.get(S),ft=S.isWebGLMultipleRenderTargets===!0;if(ft)for(let At=0;At<_.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let At=0;At<_.length;At++){Q.push(i.COLOR_ATTACHMENT0+At),S.depthBuffer&&Q.push(xt);let Vt=ot.__ignoreDepthValues!==void 0?ot.__ignoreDepthValues:!1;if(Vt===!1&&(S.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ft&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ot.__webglColorRenderbuffer[At]),Vt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[xt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[xt])),ft){let Z=n.get(_[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,z,j,0,0,z,j,K,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let At=0;At<_.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,ot.__webglColorRenderbuffer[At]);let Vt=n.get(_[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}}function Dt(S){return Math.min(s.maxSamples,S.samples)}function gt(S){let _=n.get(S);return a&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function de(S){let _=o.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function Gt(S,_){let z=S.colorSpace,j=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Ao||z!==kn&&z!==on&&(ee.getTransfer(z)===oe?a===!1?t.has("EXT_sRGB")===!0&&j===xn?(S.format=Ao,S.minFilter=rn,S.generateMipmaps=!1):_=Or.sRGBToLinear(_):(j!==xn||K!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}this.allocateTextureUnit=I,this.resetTextureUnits=et,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=Kt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=gt}function Ug(i,t,e){let n=e.isWebGL2;function s(r,o=on){let a,l=ee.getTransfer(o);if(r===ti)return i.UNSIGNED_BYTE;if(r===Ah)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Rh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===wd)return i.BYTE;if(r===Ad)return i.SHORT;if(r===fl)return i.UNSIGNED_SHORT;if(r===wh)return i.INT;if(r===Kn)return i.UNSIGNED_INT;if(r===Jn)return i.FLOAT;if(r===Ds)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Rd)return i.ALPHA;if(r===xn)return i.RGBA;if(r===Cd)return i.LUMINANCE;if(r===Pd)return i.LUMINANCE_ALPHA;if(r===Mi)return i.DEPTH_COMPONENT;if(r===as)return i.DEPTH_STENCIL;if(r===Ao)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ld)return i.RED;if(r===Ch)return i.RED_INTEGER;if(r===Id)return i.RG;if(r===Ph)return i.RG_INTEGER;if(r===Lh)return i.RGBA_INTEGER;if(r===Oa||r===Fa||r===Ba||r===Ha)if(l===oe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Oa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Oa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ba)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ha)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===tc||r===ec||r===nc||r===ic)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===tc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ec)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===nc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ic)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ih)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===sc||r===rc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===sc)return l===oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===rc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ac||r===oc||r===lc||r===cc||r===hc||r===uc||r===dc||r===fc||r===pc||r===mc||r===gc||r===xc||r===yc||r===_c)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ac)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===oc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===cc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===uc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===dc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===fc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===pc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_c)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ga||r===vc||r===Mc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Ga)return l===oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Mc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dd||r===bc||r===Sc||r===Ec)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ga)return a.COMPRESSED_RED_RGTC1_EXT;if(r===bc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Sc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ec)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===vi?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Ho=class extends Me{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},It=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ng={type:"move"},Cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ng)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new It;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Go=class extends si{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,x=e.getContextAttributes(),m=null,d=null,v=[],y=[],T=new lt,L=null,A=new Me;A.layers.enable(1),A.viewport=new ce;let R=new Me;R.layers.enable(2),R.viewport=new ce;let H=[A,R],M=new Ho;M.layers.enable(1),M.layers.enable(2);let E=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=v[G];return $===void 0&&($=new Cs,v[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=v[G];return $===void 0&&($=new Cs,v[G]=$),$.getGripSpace()},this.getHand=function(G){let $=v[G];return $===void 0&&($=new Cs,v[G]=$),$.getHandSpace()};function W(G){let $=y.indexOf(G.inputSource);if($===-1)return;let ht=v[$];ht!==void 0&&(ht.update(G.inputSource,G.frame,c||o),ht.dispatchEvent({type:G.type,data:G.inputSource}))}function et(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",I);for(let G=0;G<v.length;G++){let $=y[G];$!==null&&(y[G]=null,v[G].disconnect($))}E=null,B=null,t.setRenderTarget(m),p=null,f=null,u=null,s=null,d=null,dt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",et),s.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let $={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,$),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new zn(p.framebufferWidth,p.framebufferHeight,{format:xn,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let $=null,ht=null,vt=null;x.depth&&(vt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=x.stencil?as:Mi,ht=x.stencil?vi:Kn);let _t={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(_t),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new zn(f.textureWidth,f.textureHeight,{format:xn,type:ti,depthTexture:new Zr(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Nt=t.properties.get(d);Nt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(G){for(let $=0;$<G.removed.length;$++){let ht=G.removed[$],vt=y.indexOf(ht);vt>=0&&(y[vt]=null,v[vt].disconnect(ht))}for(let $=0;$<G.added.length;$++){let ht=G.added[$],vt=y.indexOf(ht);if(vt===-1){for(let Nt=0;Nt<v.length;Nt++)if(Nt>=y.length){y.push(ht),vt=Nt;break}else if(y[Nt]===null){y[Nt]=ht,vt=Nt;break}if(vt===-1)break}let _t=v[vt];_t&&_t.connect(ht)}}let U=new w,V=new w;function Y(G,$,ht){U.setFromMatrixPosition($.matrixWorld),V.setFromMatrixPosition(ht.matrixWorld);let vt=U.distanceTo(V),_t=$.projectionMatrix.elements,Nt=ht.projectionMatrix.elements,Ft=_t[14]/(_t[10]-1),Rt=_t[14]/(_t[10]+1),Kt=(_t[9]+1)/_t[5],N=(_t[9]-1)/_t[5],Fe=(_t[8]-1)/_t[0],Et=(Nt[8]+1)/Nt[0],Dt=Ft*Fe,gt=Ft*Et,de=vt/(-Fe+Et),Gt=de*-Fe;$.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Gt),G.translateZ(de),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let S=Ft+de,_=Rt+de,z=Dt-Gt,j=gt+(vt-Gt),K=Kt*Rt/_*S,Q=N*Rt/_*S;G.projectionMatrix.makePerspective(z,j,K,Q,S,_),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function q(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;M.near=R.near=A.near=G.near,M.far=R.far=A.far=G.far,(E!==M.near||B!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,B=M.far);let $=G.parent,ht=M.cameras;q(M,$);for(let vt=0;vt<ht.length;vt++)q(ht[vt],$);ht.length===2?Y(M,A,R):M.projectionMatrix.copy(A.projectionMatrix),X(G,M,$)};function X(G,$,ht){ht===null?G.matrix.copy($.matrixWorld):(G.matrix.copy(ht.matrixWorld),G.matrix.invert(),G.matrix.multiply($.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=kr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let J=null;function tt(G,$){if(h=$.getViewerPose(c||o),g=$,h!==null){let ht=h.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let vt=!1;ht.length!==M.cameras.length&&(M.cameras.length=0,vt=!0);for(let _t=0;_t<ht.length;_t++){let Nt=ht[_t],Ft=null;if(p!==null)Ft=p.getViewport(Nt);else{let Kt=u.getViewSubImage(f,Nt);Ft=Kt.viewport,_t===0&&(t.setRenderTargetTextures(d,Kt.colorTexture,f.ignoreDepthValues?void 0:Kt.depthStencilTexture),t.setRenderTarget(d))}let Rt=H[_t];Rt===void 0&&(Rt=new Me,Rt.layers.enable(_t),Rt.viewport=new ce,H[_t]=Rt),Rt.matrix.fromArray(Nt.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Nt.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),_t===0&&(M.matrix.copy(Rt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),vt===!0&&M.cameras.push(Rt)}}for(let ht=0;ht<v.length;ht++){let vt=y[ht],_t=v[ht];vt!==null&&_t!==void 0&&_t.update(vt,$,c||o)}J&&J(G,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let dt=new Oh;dt.setAnimationLoop(tt),this.setAnimationLoop=function(G){J=G},this.dispose=function(){}}};function kg(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,zh(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,y,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,T)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ye&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ye&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=t.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let y=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*y,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ye&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zg(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,y){let T=y.program;n.uniformBlockBinding(v,T)}function c(v,y){let T=s[v.id];T===void 0&&(g(v),T=h(v),s[v.id]=T,v.addEventListener("dispose",m));let L=y.program;n.updateUBOMapping(v,L);let A=t.render.frame;r[v.id]!==A&&(f(v),r[v.id]=A)}function h(v){let y=u();v.__bindingPointIndex=y;let T=i.createBuffer(),L=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,T),T}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let y=s[v.id],T=v.uniforms,L=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,R=T.length;A<R;A++){let H=Array.isArray(T[A])?T[A]:[T[A]];for(let M=0,E=H.length;M<E;M++){let B=H[M];if(p(B,A,M,L)===!0){let W=B.__offset,et=Array.isArray(B.value)?B.value:[B.value],I=0;for(let U=0;U<et.length;U++){let V=et[U],Y=x(V);typeof V=="number"||typeof V=="boolean"?(B.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,W+I,B.__data)):V.isMatrix3?(B.__data[0]=V.elements[0],B.__data[1]=V.elements[1],B.__data[2]=V.elements[2],B.__data[3]=0,B.__data[4]=V.elements[3],B.__data[5]=V.elements[4],B.__data[6]=V.elements[5],B.__data[7]=0,B.__data[8]=V.elements[6],B.__data[9]=V.elements[7],B.__data[10]=V.elements[8],B.__data[11]=0):(V.toArray(B.__data,I),I+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,y,T,L){let A=v.value,R=y+"_"+T;if(L[R]===void 0)return typeof A=="number"||typeof A=="boolean"?L[R]=A:L[R]=A.clone(),!0;{let H=L[R];if(typeof A=="number"||typeof A=="boolean"){if(H!==A)return L[R]=A,!0}else if(H.equals(A)===!1)return H.copy(A),!0}return!1}function g(v){let y=v.uniforms,T=0,L=16;for(let R=0,H=y.length;R<H;R++){let M=Array.isArray(y[R])?y[R]:[y[R]];for(let E=0,B=M.length;E<B;E++){let W=M[E],et=Array.isArray(W.value)?W.value:[W.value];for(let I=0,U=et.length;I<U;I++){let V=et[I],Y=x(V),q=T%L;q!==0&&L-q<Y.boundary&&(T+=L-q),W.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=T,T+=Y.storage}}}let A=T%L;return A>0&&(T+=L-A),v.__size=T,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let T=o.indexOf(y.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var Ns=class{constructor(t={}){let{canvas:e=Xd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let p=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,d=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this._useLegacyLights=!1,this.toneMapping=Qn,this.toneMappingExposure=1;let y=this,T=!1,L=0,A=0,R=null,H=-1,M=null,E=new ce,B=new ce,W=null,et=new zt(0),I=0,U=e.width,V=e.height,Y=1,q=null,X=null,J=new ce(0,0,U,V),tt=new ce(0,0,U,V),dt=!1,G=new Us,$=!1,ht=!1,vt=null,_t=new xe,Nt=new lt,Ft=new w,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Kt(){return R===null?Y:1}let N=n;function Fe(b,D){for(let O=0;O<b.length;O++){let F=b[O],k=e.getContext(F,D);if(k!==null)return k}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",rt,!1),N===null){let D=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&D.shift(),N=Fe(D,b),N===null)throw Fe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Et,Dt,gt,de,Gt,S,_,z,j,K,Q,xt,ot,ft,At,Vt,Z,te,Zt,Lt,Mt,pt,Bt,Qt;function me(){Et=new n0(N),Dt=new Km(N,Et,t),Et.init(Dt),pt=new Ug(N,Et,Dt),gt=new Ig(N,Et,Dt),de=new r0(N),Gt=new vg,S=new Dg(N,Et,gt,Gt,Dt,pt,de),_=new jm(y),z=new e0(y),j=new ff(N,Dt),Bt=new $m(N,Et,j,Dt),K=new i0(N,j,de,Bt),Q=new c0(N,K,j,de),Zt=new l0(N,Dt,S),Vt=new Jm(Gt),xt=new _g(y,_,z,Et,Dt,Bt,Vt),ot=new kg(y,Gt),ft=new bg,At=new Rg(Et,Dt),te=new Ym(y,_,z,gt,Q,f,l),Z=new Lg(y,Q,Dt),Qt=new zg(N,de,Dt,gt),Lt=new Zm(N,Et,de,Dt),Mt=new s0(N,Et,de,Dt),de.programs=xt.programs,y.capabilities=Dt,y.extensions=Et,y.properties=Gt,y.renderLists=ft,y.shadowMap=Z,y.state=gt,y.info=de}me();let Xt=new Go(y,N);this.xr=Xt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=Et.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Et.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(U,V,!1))},this.getSize=function(b){return b.set(U,V)},this.setSize=function(b,D,O=!0){if(Xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,V=D,e.width=Math.floor(b*Y),e.height=Math.floor(D*Y),O===!0&&(e.style.width=b+"px",e.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(U*Y,V*Y).floor()},this.setDrawingBufferSize=function(b,D,O){U=b,V=D,Y=O,e.width=Math.floor(b*O),e.height=Math.floor(D*O),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(J)},this.setViewport=function(b,D,O,F){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,D,O,F),gt.viewport(E.copy(J).multiplyScalar(Y).floor())},this.getScissor=function(b){return b.copy(tt)},this.setScissor=function(b,D,O,F){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,D,O,F),gt.scissor(B.copy(tt).multiplyScalar(Y).floor())},this.getScissorTest=function(){return dt},this.setScissorTest=function(b){gt.setScissorTest(dt=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){X=b},this.getClearColor=function(b){return b.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(b=!0,D=!0,O=!0){let F=0;if(b){let k=!1;if(R!==null){let ut=R.texture.format;k=ut===Lh||ut===Ph||ut===Ch}if(k){let ut=R.texture.type,yt=ut===ti||ut===Kn||ut===fl||ut===vi||ut===Ah||ut===Rh,wt=te.getClearColor(),Pt=te.getClearAlpha(),Wt=wt.r,Ut=wt.g,kt=wt.b;yt?(p[0]=Wt,p[1]=Ut,p[2]=kt,p[3]=Pt,N.clearBufferuiv(N.COLOR,0,p)):(g[0]=Wt,g[1]=Ut,g[2]=kt,g[3]=Pt,N.clearBufferiv(N.COLOR,0,g))}else F|=N.COLOR_BUFFER_BIT}D&&(F|=N.DEPTH_BUFFER_BIT),O&&(F|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),ft.dispose(),At.dispose(),Gt.dispose(),_.dispose(),z.dispose(),Q.dispose(),Bt.dispose(),Qt.dispose(),xt.dispose(),Xt.dispose(),Xt.removeEventListener("sessionstart",Be),Xt.removeEventListener("sessionend",ae),vt&&(vt.dispose(),vt=null),He.stop()};function nt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let b=de.autoReset,D=Z.enabled,O=Z.autoUpdate,F=Z.needsUpdate,k=Z.type;me(),de.autoReset=b,Z.enabled=D,Z.autoUpdate=O,Z.needsUpdate=F,Z.type=k}function rt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function at(b){let D=b.target;D.removeEventListener("dispose",at),Ct(D)}function Ct(b){Tt(b),Gt.remove(b)}function Tt(b){let D=Gt.get(b).programs;D!==void 0&&(D.forEach(function(O){xt.releaseProgram(O)}),b.isShaderMaterial&&xt.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,O,F,k,ut){D===null&&(D=Rt);let yt=k.isMesh&&k.matrixWorld.determinant()<0,wt=Gu(b,D,O,F,k);gt.setMaterial(F,yt);let Pt=O.index,Wt=1;if(F.wireframe===!0){if(Pt=K.getWireframeAttribute(O),Pt===void 0)return;Wt=2}let Ut=O.drawRange,kt=O.attributes.position,ye=Ut.start*Wt,Je=(Ut.start+Ut.count)*Wt;ut!==null&&(ye=Math.max(ye,ut.start*Wt),Je=Math.min(Je,(ut.start+ut.count)*Wt)),Pt!==null?(ye=Math.max(ye,0),Je=Math.min(Je,Pt.count)):kt!=null&&(ye=Math.max(ye,0),Je=Math.min(Je,kt.count));let Ae=Je-ye;if(Ae<0||Ae===1/0)return;Bt.setup(k,F,wt,O,Pt);let wn,fe=Lt;if(Pt!==null&&(wn=j.get(Pt),fe=Mt,fe.setIndex(wn)),k.isMesh)F.wireframe===!0?(gt.setLineWidth(F.wireframeLinewidth*Kt()),fe.setMode(N.LINES)):fe.setMode(N.TRIANGLES);else if(k.isLine){let qt=F.linewidth;qt===void 0&&(qt=1),gt.setLineWidth(qt*Kt()),k.isLineSegments?fe.setMode(N.LINES):k.isLineLoop?fe.setMode(N.LINE_LOOP):fe.setMode(N.LINE_STRIP)}else k.isPoints?fe.setMode(N.POINTS):k.isSprite&&fe.setMode(N.TRIANGLES);if(k.isBatchedMesh)fe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)fe.renderInstances(ye,Ae,k.count);else if(O.isInstancedBufferGeometry){let qt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Da=Math.min(O.instanceCount,qt);fe.renderInstances(ye,Ae,Da)}else fe.render(ye,Ae)};function se(b,D,O){b.transparent===!0&&b.side===an&&b.forceSinglePass===!1?(b.side=Ye,b.needsUpdate=!0,tr(b,D,O),b.side=ni,b.needsUpdate=!0,tr(b,D,O),b.side=an):tr(b,D,O)}this.compile=function(b,D,O=null){O===null&&(O=b),m=At.get(O),m.init(),v.push(m),O.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),b!==O&&b.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(y._useLegacyLights);let F=new Set;return b.traverse(function(k){let ut=k.material;if(ut)if(Array.isArray(ut))for(let yt=0;yt<ut.length;yt++){let wt=ut[yt];se(wt,O,k),F.add(wt)}else se(ut,O,k),F.add(ut)}),v.pop(),m=null,F},this.compileAsync=function(b,D,O=null){let F=this.compile(b,D,O);return new Promise(k=>{function ut(){if(F.forEach(function(yt){Gt.get(yt).currentProgram.isReady()&&F.delete(yt)}),F.size===0){k(b);return}setTimeout(ut,10)}Et.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let re=null;function we(b){re&&re(b)}function Be(){He.stop()}function ae(){He.start()}let He=new Oh;He.setAnimationLoop(we),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(b){re=b,Xt.setAnimationLoop(b),b===null?He.stop():He.start()},Xt.addEventListener("sessionstart",Be),Xt.addEventListener("sessionend",ae),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Xt.enabled===!0&&Xt.isPresenting===!0&&(Xt.cameraAutoUpdate===!0&&Xt.updateCamera(D),D=Xt.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,D,R),m=At.get(b,v.length),m.init(),v.push(m),_t.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),G.setFromProjectionMatrix(_t),ht=this.localClippingEnabled,$=Vt.init(this.clippingPlanes,ht),x=ft.get(b,d.length),x.init(),d.push(x),_n(b,D,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(q,X),this.info.render.frame++,$===!0&&Vt.beginShadows();let O=m.state.shadowsArray;if(Z.render(O,b,D),$===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(x,b),m.setupLights(y._useLegacyLights),D.isArrayCamera){let F=D.cameras;for(let k=0,ut=F.length;k<ut;k++){let yt=F[k];Gl(x,b,yt,yt.viewport)}}else Gl(x,b,D);R!==null&&(S.updateMultisampleRenderTarget(R),S.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(y,b,D),Bt.resetDefaultState(),H=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function _n(b,D,O,F){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)O=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||G.intersectsSprite(b)){F&&Ft.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_t);let yt=Q.update(b),wt=b.material;wt.visible&&x.push(b,yt,wt,O,Ft.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||G.intersectsObject(b))){let yt=Q.update(b),wt=b.material;if(F&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ft.copy(b.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ft.copy(yt.boundingSphere.center)),Ft.applyMatrix4(b.matrixWorld).applyMatrix4(_t)),Array.isArray(wt)){let Pt=yt.groups;for(let Wt=0,Ut=Pt.length;Wt<Ut;Wt++){let kt=Pt[Wt],ye=wt[kt.materialIndex];ye&&ye.visible&&x.push(b,yt,ye,O,Ft.z,kt)}}else wt.visible&&x.push(b,yt,wt,O,Ft.z,null)}}let ut=b.children;for(let yt=0,wt=ut.length;yt<wt;yt++)_n(ut[yt],D,O,F)}function Gl(b,D,O,F){let k=b.opaque,ut=b.transmissive,yt=b.transparent;m.setupLightsView(O),$===!0&&Vt.setGlobalState(y.clippingPlanes,O),ut.length>0&&Hu(k,ut,D,O),F&&gt.viewport(E.copy(F)),k.length>0&&Qs(k,D,O),ut.length>0&&Qs(ut,D,O),yt.length>0&&Qs(yt,D,O),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Hu(b,D,O,F){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;let ut=Dt.isWebGL2;vt===null&&(vt=new zn(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")?Ds:ti,minFilter:Si,samples:ut?4:0})),y.getDrawingBufferSize(Nt),ut?vt.setSize(Nt.x,Nt.y):vt.setSize(Ro(Nt.x),Ro(Nt.y));let yt=y.getRenderTarget();y.setRenderTarget(vt),y.getClearColor(et),I=y.getClearAlpha(),I<1&&y.setClearColor(16777215,.5),y.clear();let wt=y.toneMapping;y.toneMapping=Qn,Qs(b,O,F),S.updateMultisampleRenderTarget(vt),S.updateRenderTargetMipmap(vt);let Pt=!1;for(let Wt=0,Ut=D.length;Wt<Ut;Wt++){let kt=D[Wt],ye=kt.object,Je=kt.geometry,Ae=kt.material,wn=kt.group;if(Ae.side===an&&ye.layers.test(F.layers)){let fe=Ae.side;Ae.side=Ye,Ae.needsUpdate=!0,Vl(ye,O,F,Je,Ae,wn),Ae.side=fe,Ae.needsUpdate=!0,Pt=!0}}Pt===!0&&(S.updateMultisampleRenderTarget(vt),S.updateRenderTargetMipmap(vt)),y.setRenderTarget(yt),y.setClearColor(et,I),y.toneMapping=wt}function Qs(b,D,O){let F=D.isScene===!0?D.overrideMaterial:null;for(let k=0,ut=b.length;k<ut;k++){let yt=b[k],wt=yt.object,Pt=yt.geometry,Wt=F===null?yt.material:F,Ut=yt.group;wt.layers.test(O.layers)&&Vl(wt,D,O,Pt,Wt,Ut)}}function Vl(b,D,O,F,k,ut){b.onBeforeRender(y,D,O,F,k,ut),b.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(y,D,O,F,b,ut),k.transparent===!0&&k.side===an&&k.forceSinglePass===!1?(k.side=Ye,k.needsUpdate=!0,y.renderBufferDirect(O,D,F,k,b,ut),k.side=ni,k.needsUpdate=!0,y.renderBufferDirect(O,D,F,k,b,ut),k.side=an):y.renderBufferDirect(O,D,F,k,b,ut),b.onAfterRender(y,D,O,F,k,ut)}function tr(b,D,O){D.isScene!==!0&&(D=Rt);let F=Gt.get(b),k=m.state.lights,ut=m.state.shadowsArray,yt=k.state.version,wt=xt.getParameters(b,k.state,ut,D,O),Pt=xt.getProgramCacheKey(wt),Wt=F.programs;F.environment=b.isMeshStandardMaterial?D.environment:null,F.fog=D.fog,F.envMap=(b.isMeshStandardMaterial?z:_).get(b.envMap||F.environment),Wt===void 0&&(b.addEventListener("dispose",at),Wt=new Map,F.programs=Wt);let Ut=Wt.get(Pt);if(Ut!==void 0){if(F.currentProgram===Ut&&F.lightsStateVersion===yt)return Xl(b,wt),Ut}else wt.uniforms=xt.getUniforms(b),b.onBuild(O,wt,y),b.onBeforeCompile(wt,y),Ut=xt.acquireProgram(wt,Pt),Wt.set(Pt,Ut),F.uniforms=wt.uniforms;let kt=F.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(kt.clippingPlanes=Vt.uniform),Xl(b,wt),F.needsLights=Wu(b),F.lightsStateVersion=yt,F.needsLights&&(kt.ambientLightColor.value=k.state.ambient,kt.lightProbe.value=k.state.probe,kt.directionalLights.value=k.state.directional,kt.directionalLightShadows.value=k.state.directionalShadow,kt.spotLights.value=k.state.spot,kt.spotLightShadows.value=k.state.spotShadow,kt.rectAreaLights.value=k.state.rectArea,kt.ltc_1.value=k.state.rectAreaLTC1,kt.ltc_2.value=k.state.rectAreaLTC2,kt.pointLights.value=k.state.point,kt.pointLightShadows.value=k.state.pointShadow,kt.hemisphereLights.value=k.state.hemi,kt.directionalShadowMap.value=k.state.directionalShadowMap,kt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,kt.spotShadowMap.value=k.state.spotShadowMap,kt.spotLightMatrix.value=k.state.spotLightMatrix,kt.spotLightMap.value=k.state.spotLightMap,kt.pointShadowMap.value=k.state.pointShadowMap,kt.pointShadowMatrix.value=k.state.pointShadowMatrix),F.currentProgram=Ut,F.uniformsList=null,Ut}function Wl(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=ns.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function Xl(b,D){let O=Gt.get(b);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function Gu(b,D,O,F,k){D.isScene!==!0&&(D=Rt),S.resetTextureUnits();let ut=D.fog,yt=F.isMeshStandardMaterial?D.environment:null,wt=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:kn,Pt=(F.isMeshStandardMaterial?z:_).get(F.envMap||yt),Wt=F.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ut=!!O.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),kt=!!O.morphAttributes.position,ye=!!O.morphAttributes.normal,Je=!!O.morphAttributes.color,Ae=Qn;F.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ae=y.toneMapping);let wn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,fe=wn!==void 0?wn.length:0,qt=Gt.get(F),Da=m.state.lights;if($===!0&&(ht===!0||b!==M)){let nn=b===M&&F.id===H;Vt.setState(F,b,nn)}let ge=!1;F.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Da.state.version||qt.outputColorSpace!==wt||k.isBatchedMesh&&qt.batching===!1||!k.isBatchedMesh&&qt.batching===!0||k.isInstancedMesh&&qt.instancing===!1||!k.isInstancedMesh&&qt.instancing===!0||k.isSkinnedMesh&&qt.skinning===!1||!k.isSkinnedMesh&&qt.skinning===!0||k.isInstancedMesh&&qt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&qt.instancingColor===!1&&k.instanceColor!==null||qt.envMap!==Pt||F.fog===!0&&qt.fog!==ut||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Vt.numPlanes||qt.numIntersection!==Vt.numIntersection)||qt.vertexAlphas!==Wt||qt.vertexTangents!==Ut||qt.morphTargets!==kt||qt.morphNormals!==ye||qt.morphColors!==Je||qt.toneMapping!==Ae||Dt.isWebGL2===!0&&qt.morphTargetsCount!==fe)&&(ge=!0):(ge=!0,qt.__version=F.version);let hi=qt.currentProgram;ge===!0&&(hi=tr(F,D,k));let ql=!1,_s=!1,Ua=!1,Ie=hi.getUniforms(),ui=qt.uniforms;if(gt.useProgram(hi.program)&&(ql=!0,_s=!0,Ua=!0),F.id!==H&&(H=F.id,_s=!0),ql||M!==b){Ie.setValue(N,"projectionMatrix",b.projectionMatrix),Ie.setValue(N,"viewMatrix",b.matrixWorldInverse);let nn=Ie.map.cameraPosition;nn!==void 0&&nn.setValue(N,Ft.setFromMatrixPosition(b.matrixWorld)),Dt.logarithmicDepthBuffer&&Ie.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ie.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,_s=!0,Ua=!0)}if(k.isSkinnedMesh){Ie.setOptional(N,k,"bindMatrix"),Ie.setOptional(N,k,"bindMatrixInverse");let nn=k.skeleton;nn&&(Dt.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),Ie.setValue(N,"boneTexture",nn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Ie.setOptional(N,k,"batchingTexture"),Ie.setValue(N,"batchingTexture",k._matricesTexture,S));let Na=O.morphAttributes;if((Na.position!==void 0||Na.normal!==void 0||Na.color!==void 0&&Dt.isWebGL2===!0)&&Zt.update(k,O,hi),(_s||qt.receiveShadow!==k.receiveShadow)&&(qt.receiveShadow=k.receiveShadow,Ie.setValue(N,"receiveShadow",k.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(ui.envMap.value=Pt,ui.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),_s&&(Ie.setValue(N,"toneMappingExposure",y.toneMappingExposure),qt.needsLights&&Vu(ui,Ua),ut&&F.fog===!0&&ot.refreshFogUniforms(ui,ut),ot.refreshMaterialUniforms(ui,F,Y,V,vt),ns.upload(N,Wl(qt),ui,S)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ns.upload(N,Wl(qt),ui,S),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ie.setValue(N,"center",k.center),Ie.setValue(N,"modelViewMatrix",k.modelViewMatrix),Ie.setValue(N,"normalMatrix",k.normalMatrix),Ie.setValue(N,"modelMatrix",k.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let nn=F.uniformsGroups;for(let ka=0,Xu=nn.length;ka<Xu;ka++)if(Dt.isWebGL2){let Yl=nn[ka];Qt.update(Yl,hi),Qt.bind(Yl,hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hi}function Vu(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function Wu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,D,O){Gt.get(b.texture).__webglTexture=D,Gt.get(b.depthTexture).__webglTexture=O;let F=Gt.get(b);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=O===void 0,F.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,D){let O=Gt.get(b);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,O=0){R=b,L=D,A=O;let F=!0,k=null,ut=!1,yt=!1;if(b){let Pt=Gt.get(b);Pt.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(N.FRAMEBUFFER,null),F=!1):Pt.__webglFramebuffer===void 0?S.setupRenderTarget(b):Pt.__hasExternalTextures&&S.rebindTextures(b,Gt.get(b.texture).__webglTexture,Gt.get(b.depthTexture).__webglTexture);let Wt=b.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(yt=!0);let Ut=Gt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ut[D])?k=Ut[D][O]:k=Ut[D],ut=!0):Dt.isWebGL2&&b.samples>0&&S.useMultisampledRTT(b)===!1?k=Gt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ut)?k=Ut[O]:k=Ut,E.copy(b.viewport),B.copy(b.scissor),W=b.scissorTest}else E.copy(J).multiplyScalar(Y).floor(),B.copy(tt).multiplyScalar(Y).floor(),W=dt;if(gt.bindFramebuffer(N.FRAMEBUFFER,k)&&Dt.drawBuffers&&F&&gt.drawBuffers(b,k),gt.viewport(E),gt.scissor(B),gt.setScissorTest(W),ut){let Pt=Gt.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,Pt.__webglTexture,O)}else if(yt){let Pt=Gt.get(b.texture),Wt=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pt.__webglTexture,O||0,Wt)}H=-1},this.readRenderTargetPixels=function(b,D,O,F,k,ut,yt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt){gt.bindFramebuffer(N.FRAMEBUFFER,wt);try{let Pt=b.texture,Wt=Pt.format,Ut=Pt.type;if(Wt!==xn&&pt.convert(Wt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let kt=Ut===Ds&&(Et.has("EXT_color_buffer_half_float")||Dt.isWebGL2&&Et.has("EXT_color_buffer_float"));if(Ut!==ti&&pt.convert(Ut)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ut===Jn&&(Dt.isWebGL2||Et.has("OES_texture_float")||Et.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-F&&O>=0&&O<=b.height-k&&N.readPixels(D,O,F,k,pt.convert(Wt),pt.convert(Ut),ut)}finally{let Pt=R!==null?Gt.get(R).__webglFramebuffer:null;gt.bindFramebuffer(N.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(b,D,O=0){let F=Math.pow(2,-O),k=Math.floor(D.image.width*F),ut=Math.floor(D.image.height*F);S.setTexture2D(D,0),N.copyTexSubImage2D(N.TEXTURE_2D,O,0,0,b.x,b.y,k,ut),gt.unbindTexture()},this.copyTextureToTexture=function(b,D,O,F=0){let k=D.image.width,ut=D.image.height,yt=pt.convert(O.format),wt=pt.convert(O.type);S.setTexture2D(O,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment),D.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,b.x,b.y,k,ut,yt,wt,D.image.data):D.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,b.x,b.y,D.mipmaps[0].width,D.mipmaps[0].height,yt,D.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,F,b.x,b.y,yt,wt,D.image),F===0&&O.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(b,D,O,F,k=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ut=b.max.x-b.min.x+1,yt=b.max.y-b.min.y+1,wt=b.max.z-b.min.z+1,Pt=pt.convert(F.format),Wt=pt.convert(F.type),Ut;if(F.isData3DTexture)S.setTexture3D(F,0),Ut=N.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)S.setTexture2DArray(F,0),Ut=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);let kt=N.getParameter(N.UNPACK_ROW_LENGTH),ye=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Je=N.getParameter(N.UNPACK_SKIP_PIXELS),Ae=N.getParameter(N.UNPACK_SKIP_ROWS),wn=N.getParameter(N.UNPACK_SKIP_IMAGES),fe=O.isCompressedTexture?O.mipmaps[k]:O.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,fe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,fe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,b.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,b.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,b.min.z),O.isDataTexture||O.isData3DTexture?N.texSubImage3D(Ut,k,D.x,D.y,D.z,ut,yt,wt,Pt,Wt,fe.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ut,k,D.x,D.y,D.z,ut,yt,wt,Pt,fe.data)):N.texSubImage3D(Ut,k,D.x,D.y,D.z,ut,yt,wt,Pt,Wt,fe),N.pixelStorei(N.UNPACK_ROW_LENGTH,kt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ye),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Je),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ae),N.pixelStorei(N.UNPACK_SKIP_IMAGES,wn),k===0&&F.generateMipmaps&&N.generateMipmap(Ut),gt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),gt.unbindTexture()},this.resetState=function(){L=0,A=0,R=null,gt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ml?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===la?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===jt?bi:Dh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===bi?jt:kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Vo=class extends Ns{};Vo.prototype.isWebGL1Renderer=!0;var Kr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},cs=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Jr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=wo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ge=new w,ks=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hs=class extends bn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zi,Es=new w,Ki=new w,Ji=new w,ji=new lt,Ts=new lt,Wh=new xe,Sr=new w,ws=new w,Er=new w,ph=new lt,mo=new lt,mh=new lt,zs=class extends Se{constructor(t=new hs){if(super(),this.isSprite=!0,this.type="Sprite",Zi===void 0){Zi=new Ne;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Jr(e,5);Zi.setIndex([0,1,2,0,2,3]),Zi.setAttribute("position",new ks(n,3,0,!1)),Zi.setAttribute("uv",new ks(n,2,3,!1))}this.geometry=Zi,this.material=t,this.center=new lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ki.setFromMatrixScale(this.matrixWorld),Wh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ji.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ki.multiplyScalar(-Ji.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Tr(Sr.set(-.5,-.5,0),Ji,o,Ki,s,r),Tr(ws.set(.5,-.5,0),Ji,o,Ki,s,r),Tr(Er.set(.5,.5,0),Ji,o,Ki,s,r),ph.set(0,0),mo.set(1,0),mh.set(1,1);let a=t.ray.intersectTriangle(Sr,ws,Er,!1,Es);if(a===null&&(Tr(ws.set(-.5,.5,0),Ji,o,Ki,s,r),mo.set(0,1),a=t.ray.intersectTriangle(Sr,Er,ws,!1,Es),a===null))return;let l=t.ray.origin.distanceTo(Es);l<t.near||l>t.far||e.push({distance:l,point:Es.clone(),uv:_i.getInterpolation(Es,Sr,ws,Er,ph,mo,mh,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Tr(i,t,e,n,s,r){ji.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ts.x=r*ji.x-s*ji.y,Ts.y=s*ji.x+r*ji.y):Ts.copy(ji),i.copy(t),i.x+=Ts.x,i.y+=Ts.y,i.applyMatrix4(Wh)}var Os=class extends bn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},gh=new w,xh=new w,yh=new xe,go=new Hr,wr=new os,jr=class extends Se{constructor(t=new Ne,e=new Os){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)gh.fromBufferAttribute(e,s-1),xh.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=gh.distanceTo(xh);t.setAttribute("lineDistance",new ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(s),wr.radius+=r,t.ray.intersectsSphere(wr)===!1)return;yh.copy(s).invert(),go.copy(t.ray).applyMatrix4(yh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new w,h=new w,u=new w,f=new w,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let d=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let y=d,T=v-1;y<T;y+=p){let L=g.getX(y),A=g.getX(y+1);if(c.fromBufferAttribute(m,L),h.fromBufferAttribute(m,A),go.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let H=t.ray.origin.distanceTo(f);H<t.near||H>t.far||e.push({distance:H,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let y=d,T=v-1;y<T;y+=p){if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),go.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let A=t.ray.origin.distanceTo(f);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};var We=class extends ln{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new lt:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new w,s=[],r=[],o=[],a=new w,l=new xe;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new w)}r[0]=new w,o[0]=new w;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Pe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Pe(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Fs=class extends hn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){let n=e||new lt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Wo=class extends Fs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function xl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ar=new w,xo=new xl,yo=new xl,_o=new xl,Xo=class extends hn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new w){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ar.subVectors(s[0],s[1]).add(s[0]),c=Ar);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ar.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ar),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),xo.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),yo.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),_o.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(xo.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),yo.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),_o.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(xo.calc(l),yo.calc(l),_o.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new w().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function _h(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Og(i,t){let e=1-i;return e*e*t}function Fg(i,t){return 2*(1-i)*i*t}function Bg(i,t){return i*i*t}function Ps(i,t,e,n){return Og(i,t)+Fg(i,e)+Bg(i,n)}function Hg(i,t){let e=1-i;return e*e*e*t}function Gg(i,t){let e=1-i;return 3*e*e*i*t}function Vg(i,t){return 3*(1-i)*i*i*t}function Wg(i,t){return i*i*i*t}function Ls(i,t,e,n,s){return Hg(i,t)+Gg(i,e)+Vg(i,n)+Wg(i,s)}var Qr=class extends hn{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ls(t,s.x,r.x,o.x,a.x),Ls(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qo=class extends hn{constructor(t=new w,e=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new w){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ls(t,s.x,r.x,o.x,a.x),Ls(t,s.y,r.y,o.y,a.y),Ls(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ta=class extends hn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yo=class extends hn{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ea=class extends hn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ps(t,s.x,r.x,o.x),Ps(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$o=class extends hn{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ps(t,s.x,r.x,o.x),Ps(t,s.y,r.y,o.y),Ps(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},na=class extends hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(_h(a,l.x,c.x,h.x,u.x),_h(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new lt().fromArray(s))}return this}},vh=Object.freeze({__proto__:null,ArcCurve:Wo,CatmullRomCurve3:Xo,CubicBezierCurve:Qr,CubicBezierCurve3:qo,EllipseCurve:Fs,LineCurve:ta,LineCurve3:Yo,QuadraticBezierCurve:ea,QuadraticBezierCurve3:$o,SplineCurve:na}),Zo=class extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new vh[s.type]().fromJSON(s))}return this}},Ko=class extends Zo{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ta(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ea(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Qr(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new na(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Fs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Jo=class i extends Ne{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Pe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new w,f=new lt,p=new w,g=new w,x=new w,m=0,d=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,p.x=d*1,p.y=-m,p.z=d*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(g)}for(let v=0;v<=e;v++){let y=n+v*h*s,T=Math.sin(y),L=Math.cos(y);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*T,u.y=t[A].y,u.z=t[A].x*L,o.push(u.x,u.y,u.z),f.x=v/e,f.y=A/(t.length-1),a.push(f.x,f.y);let R=l[3*A+0]*T,H=l[3*A+1],M=l[3*A+0]*L;c.push(R,H,M)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){let T=y+v*t.length,L=T,A=T+t.length,R=T+t.length+1,H=T+1;r.push(L,A,H),r.push(R,H,A)}this.setIndex(r),this.setAttribute("position",new ve(o,3)),this.setAttribute("uv",new ve(a,2)),this.setAttribute("normal",new ve(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},ia=class i extends Jo{constructor(t=1,e=1,n=4,s=8){let r=new Ko;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var oi=class i extends Ne{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,x=[],m=n/2,d=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ve(u,3)),this.setAttribute("normal",new ve(f,3)),this.setAttribute("uv",new ve(p,2));function v(){let T=new w,L=new w,A=0,R=(e-t)/n;for(let H=0;H<=r;H++){let M=[],E=H/r,B=E*(e-t)+t;for(let W=0;W<=s;W++){let et=W/s,I=et*l+a,U=Math.sin(I),V=Math.cos(I);L.x=B*U,L.y=-E*n+m,L.z=B*V,u.push(L.x,L.y,L.z),T.set(U,R,V).normalize(),f.push(T.x,T.y,T.z),p.push(et,1-E),M.push(g++)}x.push(M)}for(let H=0;H<s;H++)for(let M=0;M<r;M++){let E=x[M][H],B=x[M+1][H],W=x[M+1][H+1],et=x[M][H+1];h.push(E,B,et),h.push(B,W,et),A+=6}c.addGroup(d,A,0),d+=A}function y(T){let L=g,A=new lt,R=new w,H=0,M=T===!0?t:e,E=T===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*E,0),f.push(0,E,0),p.push(.5,.5),g++;let B=g;for(let W=0;W<=s;W++){let I=W/s*l+a,U=Math.cos(I),V=Math.sin(I);R.x=M*V,R.y=m*E,R.z=M*U,u.push(R.x,R.y,R.z),f.push(0,E,0),A.x=U*.5+.5,A.y=V*.5*E+.5,p.push(A.x,A.y),g++}for(let W=0;W<s;W++){let et=L+W,I=B+W;T===!0?h.push(I,I+1,et):h.push(I+1,I,et),H+=3}c.addGroup(d,H,T===!0?1:2),d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Fn=class i extends Ne{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new w,f=new w,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){let v=[],y=d/n,T=0;d===0&&o===0?T=.5/e:d===n&&l===Math.PI&&(T=-.5/e);for(let L=0;L<=e;L++){let A=L/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(A+T,1-y),v.push(c++)}h.push(v)}for(let d=0;d<n;d++)for(let v=0;v<e;v++){let y=h[d][v+1],T=h[d][v],L=h[d+1][v],A=h[d+1][v+1];(d!==0||o>0)&&p.push(y,T,A),(d!==n-1||l<Math.PI)&&p.push(T,L,A)}this.setIndex(p),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(x,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Sn=class extends bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pl,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var pe=class extends bn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pl,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Rr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Xg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var us=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jo=class extends us{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tc,endingEnd:Tc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case wc:r=t,a=2*e-n;break;case Ac:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wc:o=t,l=2*n-e;break;case Ac:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-p)*m+(1.5+p)*x+.5*g,T=p*m-p*x;for(let L=0;L!==a;++L)r[L]=d*o[h+L]+v*o[c+L]+y*o[l+L]+T*o[u+L];return r}},Qo=class extends us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},tl=class extends us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},yn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Rr(e,this.TimeBufferType),this.values=Rr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Rr(t.times,Array),values:Rr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Pr:e=this.InterpolantFactoryMethodDiscrete;break;case Lr:e=this.InterpolantFactoryMethodLinear;break;case Va:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return Lr;case this.InterpolantFactoryMethodSmooth:return Va}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Xg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Va,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Lr;var Ti=class extends yn{};Ti.prototype.ValueTypeName="bool";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Pr;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends yn{};el.prototype.ValueTypeName="color";var nl=class extends yn{};nl.prototype.ValueTypeName="number";var il=class extends us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)ri.slerpFlat(r,0,o,c-a,o,c,l);return r}},Bs=class extends yn{InterpolantFactoryMethodLinear(t){return new il(this.times,this.values,this.getValueSize(),t)}};Bs.prototype.ValueTypeName="quaternion";Bs.prototype.DefaultInterpolation=Lr;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends yn{};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Pr;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends yn{};sl.prototype.ValueTypeName="vector";var rl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},qg=new rl,al=class{constructor(t){this.manager=t!==void 0?t:qg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};al.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ai=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},sa=class extends Ai{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},vo=new xe,Mh=new w,bh=new w,Hs=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Mh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mh),bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bh),e.updateMatrixWorld(),vo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ol=class extends Hs{constructor(){super(new Me(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=kr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},ra=class extends Ai{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ol}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Sh=new xe,As=new w,Mo=new w,ll=class extends Hs{constructor(){super(new Me(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),As.setFromMatrixPosition(t.matrixWorld),n.position.copy(As),Mo.copy(n.position),Mo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Mo),n.updateMatrixWorld(),s.makeTranslation(-As.x,-As.y,-As.z),Sh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sh)}},Bn=class extends Ai{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ll}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},cl=class extends Hs{constructor(){super(new $r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},li=class extends Ai{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new cl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},aa=class extends Ai{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var yl="\\[\\]\\.:\\/",Yg=new RegExp("["+yl+"]","g"),_l="[^"+yl+"]",$g="[^"+yl.replace("\\.","")+"]",Zg=/((?:WC+[\/:])*)/.source.replace("WC",_l),Kg=/(WCOD+)?/.source.replace("WCOD",$g),Jg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_l),jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_l),Qg=new RegExp("^"+Zg+Kg+Jg+jg+"$"),tx=["material","materials","bones","map"],hl=class{constructor(t,e,n){let s=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yg,"")}static parseTrackName(t){let e=Qg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);tx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=hl;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ty=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var he={gravity:800,maxSpeed:250,accel:10,airAccel:10,friction:4,stopSpeed:75,jumpVel:268,stepHeight:18,duckMul:.34,walkMul:.52,standHeight:72,duckHeight:36,eyeStand:64,eyeDuck:28,radius:16,airWishSpeed:30,maxLadderSpeed:200,duckJumpBonus:22},Ot={freezeTime:3,buyTime:18,roundTime:115,bombTime:35,plantTime:3.2,defuseTime:10,defuseKitTime:5,startMoney:800,maxMoney:16e3,winReward:3250,winBombReward:3500,lossBase:1400,lossStep:500,lossMax:3400,plantBonus:800,defuseBonus:300,maxRounds:30,winRounds:16,halftimeRound:15,roundEndDelay:4.5,maxTeamSize:5,overtimeMoney:1e4,overtimeHalf:3,overtimeWin:4},qh={head:4,chest:1,stomach:1.25,leg:.75},Jt={knife:{id:"knife",name:"Knife",cn:"\u5315\u9996",cls:"melee",slot:3,price:0,dmg:55,rpm:90,mag:0,res:0,reload:0,spread:0,moveSpread:0,kick:0,pen:1,kill:1500,speed:250,range:55,sound:"knife"},glock18:{id:"glock18",name:"Glock-18",cn:"\u683C\u6D1B\u514B 18",cls:"pistol",slot:2,price:400,dmg:25,rpm:400,mag:20,res:120,reload:2.2,spread:.55,moveSpread:2.6,kick:.85,pen:.52,kill:300,speed:240,sound:"pistol",auto:!1},usp45:{id:"usp45",name:"USP-45",cn:"USP \u6218\u672F\u624B\u67AA",cls:"pistol",slot:2,price:500,dmg:34,rpm:400,mag:12,res:100,reload:2.2,spread:.45,moveSpread:2.4,kick:.9,pen:.5,kill:300,speed:240,sound:"pistol",auto:!1},deagle:{id:"deagle",name:"Desert Eagle",cn:"\u6C99\u6F20\u4E4B\u9E70",cls:"pistol",slot:2,price:650,dmg:54,rpm:240,mag:7,res:35,reload:2.4,spread:.9,moveSpread:3.4,kick:2,pen:.6,kill:300,speed:240,sound:"deagle",auto:!1},mp5navy:{id:"mp5navy",name:"MP5 Navy",cn:"MP5 \u51B2\u950B\u67AA",cls:"smg",slot:1,price:1500,dmg:26,rpm:750,mag:30,res:120,reload:2.6,spread:.55,moveSpread:1.1,kick:.9,pen:.62,kill:600,speed:245,sound:"smg",auto:!0},ak47:{id:"ak47",name:"AK-47",cn:"AK-47",cls:"rifle",slot:1,price:2500,dmg:36,rpm:600,mag:30,res:90,reload:2.5,spread:.35,moveSpread:1.2,kick:2.2,pen:.775,kill:300,speed:221,sound:"ak47",auto:!0},m4a1:{id:"m4a1",name:"M4A1",cn:"M4A1 \u5361\u5BBE\u67AA",cls:"rifle",slot:1,price:3100,dmg:33,rpm:666,mag:30,res:90,reload:3.1,spread:.3,moveSpread:1.1,kick:1.7,pen:.7,kill:300,speed:225,sound:"m4a1",auto:!0},p90:{id:"p90",name:"P90",cn:"P90",cls:"smg",slot:1,price:2350,dmg:26,rpm:857,mag:50,res:100,reload:3.3,spread:.6,moveSpread:1,kick:.8,pen:.69,kill:300,speed:245,sound:"smg",auto:!0},scout:{id:"scout",name:"Steyr Scout",cn:"\u9E1F\u72D9",cls:"sniper",slot:1,price:2750,dmg:75,rpm:90,mag:10,res:90,reload:2.5,spread:.1,moveSpread:5.5,kick:2.6,pen:.85,kill:300,speed:260,sound:"awp",auto:!1,scope:[.62,.24]},sg552:{id:"sg552",name:"SG552",cn:"Sig 552",cls:"rifle",slot:1,price:3500,dmg:33,rpm:727,mag:30,res:90,reload:3,spread:.32,moveSpread:1.15,kick:1.9,pen:.77,kill:300,speed:225,sound:"m4a1",auto:!0,scope:[.55]},aug:{id:"aug",name:"AUG",cn:"AUG",cls:"rifle",slot:1,price:3500,dmg:32,rpm:666,mag:30,res:90,reload:3.2,spread:.3,moveSpread:1.1,kick:1.8,pen:.77,kill:300,speed:225,sound:"m4a1",auto:!0,scope:[.55]},awp:{id:"awp",name:"AWP",cn:"AWP \u72D9\u51FB\u67AA",cls:"sniper",slot:1,price:4750,dmg:115,rpm:41,mag:10,res:30,reload:2.9,spread:.12,moveSpread:6,kick:4.5,pen:.975,kill:100,speed:210,sound:"awp",auto:!1,scope:[.55,.18]},famas:{id:"famas",name:"FAMAS",cn:"FAMAS",cls:"rifle",slot:1,price:2250,dmg:30,rpm:666,mag:25,res:90,reload:3,spread:.3,moveSpread:1.15,kick:1.7,pen:.7,kill:300,speed:225,sound:"m4a1",auto:!0},galil:{id:"galil",name:"Galil",cn:"\u52A0\u5229\u5C14",cls:"rifle",slot:1,price:2e3,dmg:30,rpm:666,mag:35,res:90,reload:3,spread:.33,moveSpread:1.15,kick:1.8,pen:.77,kill:300,speed:225,sound:"ak47",auto:!0},mac10:{id:"mac10",name:"MAC-10",cn:"MAC-10",cls:"smg",slot:1,price:1400,dmg:29,rpm:857,mag:30,res:100,reload:3.15,spread:.6,moveSpread:1.1,kick:.85,pen:.575,kill:300,speed:245,sound:"smg",auto:!0},xm1014:{id:"xm1014",name:"XM1014",cn:"XM1014 \u9730\u5F39\u67AA",cls:"shotgun",slot:1,price:3e3,dmg:24,rpm:240,mag:7,res:32,reload:3.5,spread:1.5,moveSpread:2.2,kick:2.6,pen:.55,kill:300,speed:220,sound:"deagle",auto:!1,pellets:6},m249:{id:"m249",name:"M249",cn:"M249 \u673A\u67AA",cls:"machinegun",slot:1,price:5750,dmg:32,rpm:750,mag:100,res:200,reload:5.7,spread:.5,moveSpread:1.4,kick:2,pen:.72,kill:300,speed:210,sound:"ak47",auto:!0},elite:{id:"elite",name:"Dual Berettas",cn:"\u53CC\u67AA",cls:"pistol",slot:2,price:800,dmg:26,rpm:500,mag:30,res:120,reload:4.6,spread:.7,moveSpread:3,kick:.8,pen:.5,kill:300,speed:240,sound:"pistol",auto:!1}},vl={ak47:[[2.2,0],[2.05,.04],[1.95,-.04],[1.8,.08],[1.6,.24],[1.45,.4],[1.32,.56],[1.22,.72],[1.14,.86],[1.06,.96],[1,1.04],[.96,1.02],[.92,.86],[.88,.58],[.84,.2],[.8,-.22],[.76,-.62],[.73,-.94],[.7,-1.16],[.68,-1.26],[.66,-1.2],[.64,-1],[.62,-.7],[.6,-.32],[.58,.1],[.57,.5],[.56,.84],[.55,1.04],[.54,1.02],[.53,.82]],m4a1:[[1.7,0],[1.64,.04],[1.56,-.04],[1.46,.06],[1.34,.16],[1.22,.28],[1.12,.4],[1.04,.52],[.97,.62],[.91,.7],[.86,.74],[.82,.7],[.79,.56],[.76,.34],[.74,.06],[.72,-.22],[.7,-.46],[.68,-.64],[.66,-.74],[.64,-.74],[.62,-.62],[.6,-.42],[.58,-.16],[.57,.1],[.56,.34],[.55,.52],[.54,.62],[.53,.6],[.52,.48],[.51,.3]],mp5navy:[[.9,0],[.86,.03],[.82,-.03],[.78,.05],[.74,.1],[.7,.16],[.67,.22],[.64,.27],[.62,.31],[.6,.34],[.58,.35],[.56,.34],[.55,.3],[.54,.24],[.53,.16],[.52,.08],[.51,0],[.5,-.08],[.49,-.15],[.48,-.2],[.47,-.22],[.46,-.22],[.45,-.19],[.45,-.14],[.44,-.08],[.44,-.02],[.43,.05],[.43,.11],[.42,.15],[.42,.17]],p90:[[.8,0],[.77,.03],[.74,-.03],[.71,.05],[.68,.09],[.65,.14],[.62,.19],[.6,.23],[.58,.27],[.56,.29],[.54,.3],[.53,.29],[.52,.26],[.51,.21],[.5,.14],[.49,.07],[.48,0],[.47,-.07],[.46,-.13],[.45,-.17],[.44,-.19],[.43,-.19],[.43,-.16],[.42,-.12],[.42,-.07],[.41,-.02],[.41,.04],[.4,.09],[.4,.13],[.4,.15]]};function Yh(i,t){let e=vl[i.id],n=1;if(!e)if(i.id==="sg552")e=vl.m4a1,n=1.08;else if(i.id==="aug")e=vl.m4a1,n=1.02;else return[i.kick,0];let s=e[Math.min(Math.max(t,1)-1,e.length-1)];return[s[0]*n,s[1]*n]}var ha={he:3,flash:2,smoke:1.8},Gn={kevlar:{id:"kevlar",name:"Kevlar Vest",cn:"\u9632\u5F39\u8863",price:650},kevlarhelm:{id:"kevlarhelm",name:"Kevlar + Helmet",cn:"\u9632\u5F39\u8863 + \u5934\u76D4",price:1e3},defusekit:{id:"defusekit",name:"Defuse Kit",cn:"\u62C6\u5F39\u5DE5\u5177",price:200,team:"CT"},hegrenade:{id:"hegrenade",name:"HE Grenade",cn:"\u9AD8\u7206\u624B\u96F7",price:300,grenade:"he"},flashbang:{id:"flashbang",name:"Flashbang",cn:"\u95EA\u5149\u5F39",price:200,grenade:"flash"},smokegrenade:{id:"smokegrenade",name:"Smoke Grenade",cn:"\u70DF\u96FE\u5F39",price:300,grenade:"smoke"}},Ml={handguns:{title:"\u624B\u67AA",items:["glock18","usp45","deagle","elite"]},smgs:{title:"\u51B2\u950B\u67AA",items:["mp5navy","p90","mac10"]},shotguns:{title:"\u9730\u5F39\u67AA",items:["xm1014"]},rifles:{title:"\u6B65\u67AA",items:["ak47","m4a1","galil","famas","sg552","aug"]},sniper:{title:"\u72D9\u51FB\u67AA",items:["scout","awp"]},machineguns:{title:"\u673A\u67AA",items:["m249"]},gear:{title:"\u88C5\u5907",items:["kevlar","kevlarhelm","defusekit"]},grenades:{title:"\u6295\u63B7\u7269",items:["hegrenade","flashbang","smokegrenade"]}},$h={T:["glock18","elite","deagle","ak47","galil","sg552","famas","awp","scout","mp5navy","p90","mac10","xm1014","m249"],CT:["usp45","deagle","m4a1","famas","aug","awp","scout","mp5navy","p90","xm1014","m249"]};var fs={forward:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD",jump:"Space",duck:"ControlLeft",walk:"ShiftLeft",use:"KeyE",reload:"KeyR",buy:"KeyB",lastWeapon:"KeyQ",slot1:"Digit1",slot2:"Digit2",slot3:"Digit3",slot4:"Digit4",flashlight:"KeyF",drop:"KeyG",scoreboard:"Tab"},Zh=[["forward","\u524D\u8FDB"],["back","\u540E\u9000"],["left","\u5DE6\u79FB"],["right","\u53F3\u79FB"],["jump","\u8DF3\u8DC3"],["duck","\u4E0B\u8E72"],["walk","\u9759\u6B65"],["use","\u4F7F\u7528 / \u5B89\u653E"],["reload","\u6362\u5F39"],["lastWeapon","\u4E0A\u4E00\u628A\u6B66\u5668"],["slot1","\u4E3B\u6B66\u5668"],["slot2","\u624B\u67AA"],["slot3","\u5315\u9996"],["slot4","\u624B\u96F7"],["flashlight","\u624B\u7535\u7B52"],["drop","\u4E22\u5F03\u6B66\u5668"],["buy","\u8D2D\u4E70\u83DC\u5355"],["scoreboard","\u8BA1\u5206\u677F"]],Xh={Space:"\u7A7A\u683C",ControlLeft:"\u5DE6 Ctrl",ShiftLeft:"\u5DE6 Shift",Tab:"Tab",AltLeft:"\u5DE6 Alt",Escape:"Esc",Backspace:"\u9000\u683C",Enter:"\u56DE\u8F66",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",CapsLock:"CapsLock",Insert:"Insert",Delete:"Delete",Home:"Home",End:"End",PageUp:"PageUp",PageDown:"PageDown",Semicolon:"\uFF1B",Quote:"\u2019",Comma:"\uFF0C",Period:"\u3002",Slash:"/",Backslash:"\\",Backquote:"`",BracketLeft:"[",BracketRight:"]",Minus:"-",Equal:"=",MouseLeft:"\u9F20\u6807\u5DE6\u952E",MouseRight:"\u9F20\u6807\u53F3\u952E",MouseMiddle:"\u6EDA\u8F6E"};function ua(i){return i?Xh[i]?Xh[i]:i.startsWith("Key")?i.slice(3):i.startsWith("Digit")?i.slice(5):i.startsWith("Numpad")?`\u5C0F\u952E\u76D8 ${i.slice(6)}`:i:"\u672A\u7ED1\u5B9A"}var Gs={sensitivity:3,fov:90,volume:.7,crosshair:"#4dff66",crosshairSize:8,crosshairGap:3,showFps:!0,invertY:!1,autoReload:!0,keymap:{...fs}},bl=["Vitaliy","Ivan","Dmitri","Sergei","Yuri","Boris","Nikita","Anton","Kyle","Ryan","Marcus","Dylan","Cole","Trevor","Wesley","Blake"];function Sl(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ne,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let p=i[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Kh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][f]);let g=Kh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Kh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new t(r),a=0;for(let c=0;c<i.length;++c)o.set(i[c].array,a),a+=i[c].array.length;let l=new be(o,e,n);return s!==void 0&&(l.gpuType=s),l}var Tl=4;function Jh(i){Tl=Math.max(1,Math.min(16,i|0||1))}function $e(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e.getContext("2d",{willReadFrequently:!0}),e}function da(i,t,e){let n=(i|0)*374761393+(t|0)*668265263+(e|0)*1442695041;return n=(n^n>>13)*1274126177,((n^n>>16)>>>0)/4294967295}function ex(i,t,e,n){let s=Math.floor(i),r=Math.floor(t),o=i-s,a=t-r,l=o*o*(3-2*o),c=a*a*(3-2*a),h=y=>(y%n+n)%n,u=h(s),f=h(s+1),p=h(r),g=h(r+1),x=da(u,p,e),m=da(f,p,e),d=da(u,g,e),v=da(f,g,e);return(x*(1-l)+m*l)*(1-c)+(d*(1-l)+v*l)*c}function nx(i,t,e,n,s){let r=0,o=.55,a=0,l=s,c=1;for(let h=0;h<e;h++)r+=ex(i*c,t*c,n+h*131,l)*o,a+=o,o*=.55,c*=2,l*=2;return r/a}function Vn(i,t,{basePer:e=4,oct:n=4,strength:s=.22,seed:r=7}={}){let o=i.getImageData(0,0,t,t),a=o.data;for(let l=0;l<t;l++)for(let c=0;c<t;c++){let u=1+(nx(c/t*e,l/t*e,n,r,e)-.5)*s,f=(l*t+c)*4;a[f]=Math.min(255,Math.max(0,a[f]*u)),a[f+1]=Math.min(255,Math.max(0,a[f+1]*u)),a[f+2]=Math.min(255,Math.max(0,a[f+2]*u))}i.putImageData(o,0,0)}function Wn(i,t,e,n){let s=i.getImageData(0,0,t,e),r=s.data;for(let o=0;o<r.length;o+=4){let a=(Math.random()-.5)*n;r[o]=Math.max(0,Math.min(255,r[o]+a)),r[o+1]=Math.max(0,Math.min(255,r[o+1]+a)),r[o+2]=Math.max(0,Math.min(255,r[o+2]+a))}i.putImageData(s,0,0)}function En(i,t=1){let e=new We(i);return e.wrapS=e.wrapT=rs,e.colorSpace=jt,e.anisotropy=Tl,e.repeat.set(t,t),e}function ix(){let t=$e(256,256),e=t.getContext("2d");e.fillStyle="#8f7350",e.fillRect(0,0,256,256);let n=32;for(let s=0;s<256/n;s++){let r=s%2*42;for(let o=-1;o<4;o++){let l=n-3,c=o*84+r+2,h=s*n+2,u=20*Math.random();e.fillStyle=`rgb(${188-u|0},${160-u|0},${112-u|0})`,e.fillRect(c,h,78,l);let f=e.createLinearGradient(0,h,0,h+l);f.addColorStop(0,"rgba(64,48,30,0.42)"),f.addColorStop(.14,"rgba(64,48,30,0)"),f.addColorStop(.84,"rgba(52,38,24,0)"),f.addColorStop(1,"rgba(46,34,22,0.5)"),e.fillStyle=f,e.fillRect(c,h,78,l);let p=e.createLinearGradient(c,0,c+78,0);p.addColorStop(0,"rgba(64,48,30,0.34)"),p.addColorStop(.1,"rgba(64,48,30,0)"),p.addColorStop(.9,"rgba(52,38,24,0)"),p.addColorStop(1,"rgba(46,34,22,0.38)"),e.fillStyle=p,e.fillRect(c,h,78,l)}}for(let s=0;s<14;s++){let r=Math.random()*256,o=2+Math.random()*6,a=e.createLinearGradient(0,0,0,256);a.addColorStop(0,"rgba(72,56,34,0)"),a.addColorStop(.35,`rgba(72,56,34,${.05+Math.random()*.07})`),a.addColorStop(.75,`rgba(64,50,30,${.04+Math.random()*.06})`),a.addColorStop(1,"rgba(72,56,34,0)"),e.fillStyle=a,e.fillRect(r,0,o,256)}return Vn(e,256,{basePer:3,oct:4,strength:.26,seed:11}),Wn(e,256,256,22),En(t)}function sx(){let t=$e(512,512),e=t.getContext("2d");e.fillStyle="#b29469",e.fillRect(0,0,512,512);for(let n=0;n<26;n++){let s=Math.random()*512,r=5+Math.random()*12;e.strokeStyle=`rgba(${205+Math.random()*18|0},${182+Math.random()*16|0},${142+Math.random()*14|0},0.11)`,e.lineWidth=1+Math.random()*2.4,e.beginPath();for(let o=0;o<=512;o+=6){let a=s+Math.sin(o/512*Math.PI*2*(1+n%3))*r;o===0?e.moveTo(o,a):e.lineTo(o,a)}e.stroke()}for(let n=0;n<5200;n++){let s=Math.random()*46-23;e.fillStyle=`rgba(${178+s|0},${154+s|0},${110+s|0},${.35+Math.random()*.4})`,e.fillRect(Math.random()*512,Math.random()*512,1+Math.random()*2.4,1+Math.random()*1.8)}for(let n=0;n<12;n++){let s=e.createRadialGradient(Math.random()*512,Math.random()*512,2,Math.random()*512,Math.random()*512,26+Math.random()*30);s.addColorStop(0,"rgba(120,98,68,0.16)"),s.addColorStop(1,"rgba(120,98,68,0)"),e.fillStyle=s,e.fillRect(0,0,512,512)}return Vn(e,512,{basePer:5,oct:4,strength:.2,seed:23}),Wn(e,512,512,14),En(t)}function rx(){let t=$e(256,256),e=t.getContext("2d");e.fillStyle="#b8a888",e.fillRect(0,0,256,256);for(let n=0;n<70;n++){let s=Math.random()*16-8;e.fillStyle=`rgba(${190+s|0},${174+s|0},${146+s|0},0.22)`,e.beginPath(),e.ellipse(Math.random()*256,Math.random()*256,8+Math.random()*22,6+Math.random()*16,Math.random()*3,0,7),e.fill()}for(let n=0;n<18;n++){let s=Math.random()*256,r=Math.random()*256;e.fillStyle=`rgba(120,100,72,${.12+Math.random()*.1})`,e.beginPath(),e.moveTo(s,r);for(let o=1;o<=7;o++){let a=o/7*Math.PI*2,l=4+Math.random()*9;e.lineTo(s+Math.cos(a)*l,r+Math.sin(a)*l)}e.closePath(),e.fill()}for(let n=0;n<14;n++){e.strokeStyle=`rgba(96,80,58,${.08+Math.random()*.12})`,e.lineWidth=.6+Math.random()*.7,e.beginPath();let s=Math.random()*256,r=Math.random()*256;e.moveTo(s,r);for(let o=0;o<6;o++)s+=(Math.random()-.5)*26,r+=(Math.random()-.5)*26,e.lineTo(s,r);e.stroke()}return Vn(e,256,{basePer:5,oct:5,strength:.2,seed:131}),Wn(e,256,256,16),En(t)}function ax(){let t=$e(256,256),e=t.getContext("2d");e.fillStyle="#6f6455",e.fillRect(0,0,256,256);let n=44;for(let s=0;s<Math.ceil(256/n);s++){let o=-(s%2*46);for(;o<256;){let a=58+Math.random()*46,l=n-5,c=s*n+2,h=Math.random()*30-15;e.fillStyle=`rgb(${150+h|0},${140+h|0},${122+h|0})`,e.fillRect(o+2,c,a-3,l);let u=e.createLinearGradient(o,c,o,c+l);u.addColorStop(0,"rgba(255,250,240,0.10)"),u.addColorStop(.5,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(20,16,12,0.42)"),e.fillStyle=u,e.fillRect(o+2,c,a-3,l),o+=a}}return Vn(e,256,{basePer:4,oct:4,strength:.22,seed:173}),Wn(e,256,256,20),En(t)}function ox(){let t=$e(128,128),e=t.getContext("2d");e.fillStyle="#8d6840",e.fillRect(0,0,128,128);let n=128/7;for(let s=0;s<7;s++){let r=s*n;e.fillStyle=s%2?"#98724a":"#825f36",e.fillRect(0,r+1,128,n-2);let o=e.createLinearGradient(0,r,0,r+n);o.addColorStop(0,"rgba(48,32,18,0.34)"),o.addColorStop(.25,"rgba(48,32,18,0)"),o.addColorStop(.8,"rgba(40,26,14,0)"),o.addColorStop(1,"rgba(40,26,14,0.38)"),e.fillStyle=o,e.fillRect(0,r,128,n);for(let a=0;a<9;a++){let l=r+2+Math.random()*(n-5);e.strokeStyle=`rgba(${90+Math.random()*40|0},${64+Math.random()*30|0},${36+Math.random()*22|0},${.1+Math.random()*.16})`,e.lineWidth=.7,e.beginPath(),e.moveTo(Math.random()*20,l),e.bezierCurveTo(128*.3,l+Math.random()*2-1,128*.7,l+Math.random()*2-1,128,l),e.stroke()}}return e.strokeStyle="#6d4c26",e.lineWidth=7,e.strokeRect(3.5,3.5,121,121),e.beginPath(),e.moveTo(6,6),e.lineTo(122,122),e.stroke(),e.strokeStyle="rgba(40,26,14,0.42)",e.lineWidth=2,e.strokeRect(8,8,112,112),e.fillStyle="#4a3520",[[14,14],[114,14],[14,114],[114,114]].forEach(([s,r])=>{e.beginPath(),e.arc(s,r,2.6,0,7),e.fill()}),Vn(e,128,{basePer:3,oct:3,strength:.2,seed:41}),Wn(e,128,128,16),En(t)}function lx(){let t=$e(128,128),e=t.getContext("2d");e.fillStyle="#8d8a82",e.fillRect(0,0,128,128);for(let n=0;n<30;n++)e.fillStyle=`rgba(${110+Math.random()*50|0},${108+Math.random()*46|0},${100+Math.random()*40|0},0.45)`,e.fillRect(Math.random()*128,Math.random()*128,8+Math.random()*30,6+Math.random()*20);for(let n=0;n<5;n++){e.strokeStyle=`rgba(58,56,50,${.18+Math.random()*.2})`,e.lineWidth=.8+Math.random()*.6,e.beginPath();let s=Math.random()*128,r=Math.random()*128;e.moveTo(s,r);for(let o=0;o<5;o++)s+=(Math.random()-.5)*26,r+=(Math.random()-.5)*26,e.lineTo(s,r);e.stroke()}return Vn(e,128,{basePer:4,oct:4,strength:.28,seed:53}),Wn(e,128,128,20),En(t)}function El(i){let e=$e(128,128),n=e.getContext("2d");n.fillStyle=i,n.fillRect(0,0,128,128);for(let s=0;s<128;s+=8){let r=n.createLinearGradient(s,0,s+8,0);r.addColorStop(0,"rgba(255,255,255,0.10)"),r.addColorStop(.45,"rgba(255,255,255,0)"),r.addColorStop(.55,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(0,0,0,0.20)"),n.fillStyle=r,n.fillRect(s,0,8,128)}for(let s=0;s<9;s++){let r=Math.random()*128,o=Math.random()*128,a=6+Math.random()*22,l=n.createRadialGradient(r,o,1,r,o,a);l.addColorStop(0,`rgba(108,58,30,${.22+Math.random()*.2})`),l.addColorStop(.6,`rgba(126,72,38,${.1+Math.random()*.1})`),l.addColorStop(1,"rgba(126,72,38,0)"),n.fillStyle=l,n.beginPath(),n.arc(r,o,a,0,7),n.fill()}return Vn(n,128,{basePer:3,oct:4,strength:.24,seed:67}),Wn(n,128,128,12),En(e)}var fa=null;function jh(){return fa||(fa={sand:ix(),sand2:ax(),sand3:rx(),floor:sx(),crate:ox(),concrete:lx(),metalRed:El("#8c4a3a"),metalBlue:El("#3f5c74"),metalGreen:El("#4c6148")},fa)}function cx(){let t=$e(128,128),e=t.getContext("2d");e.fillStyle="#7e828a",e.fillRect(0,0,128,128);for(let n=0;n<260;n++){let s=Math.random()*128,r=Math.random()>.5;e.strokeStyle=r?`rgba(255,255,255,${.02+Math.random()*.06})`:`rgba(34,36,42,${.02+Math.random()*.08})`,e.lineWidth=.6+Math.random()*1.1,e.beginPath(),e.moveTo(Math.random()*24,s),e.lineTo(128-Math.random()*24,s+(Math.random()-.5)*2),e.stroke()}for(let n=0;n<28;n++){let s=Math.random()*128,r=Math.random()*128,o=3+Math.random()*13,a=e.createRadialGradient(s,r,.5,s,r,o),l=Math.random()>.45;a.addColorStop(0,l?"rgba(205,208,216,0.30)":"rgba(42,44,50,0.30)"),a.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=a,e.beginPath(),e.arc(s,r,o,0,7),e.fill()}e.fillStyle="rgba(26,28,32,0.5)";for(let n=0;n<3;n++){let s=36+n*9,r=24;for(;r<102;){let o=2+Math.random()*6;e.fillRect(r,s,o,3),r+=o+2+Math.random()*3}}return Vn(e,128,{basePer:4,oct:3,strength:.18,seed:91}),Wn(e,128,128,10),En(t)}function hx(){let t=$e(128,128),e=t.getContext("2d");e.fillStyle="#6b4522",e.fillRect(0,0,128,128);for(let n=0;n<34;n++){let s=128*(.15+Math.random()*.7),r=-30+Math.random()*190,o=8+Math.random()*70;e.strokeStyle=`rgba(${38+Math.random()*40|0},${20+Math.random()*30|0},${10+Math.random()*18|0},${.1+Math.random()*.18})`,e.lineWidth=.7+Math.random()*2,e.beginPath(),e.ellipse(s,r,o,o*(.22+Math.random()*.4),Math.random()*.4,0,7),e.stroke()}for(let n=0;n<7;n++)e.strokeStyle=`rgba(196,158,108,${.04+Math.random()*.08})`,e.lineWidth=2+Math.random()*5,e.beginPath(),e.moveTo(0,Math.random()*128),e.bezierCurveTo(128*.35,Math.random()*128,128*.7,Math.random()*128,128,Math.random()*128),e.stroke();for(let n=0;n<9;n++)e.fillStyle=`rgba(152,122,90,${.12+Math.random()*.16})`,e.fillRect(Math.random()*128,Math.random()*128,2+Math.random()*11,1+Math.random()*3);return Wn(e,128,128,12),En(t)}function ux(){let t=$e(64,64),e=t.getContext("2d");e.fillStyle="#4a4d54",e.fillRect(0,0,64,64);for(let n=0;n<900;n++){let s=Math.random();e.fillStyle=s>.5?`rgba(120,124,132,${.1+Math.random()*.14})`:`rgba(28,30,34,${.1+Math.random()*.16})`,e.fillRect(Math.random()*64,Math.random()*64,1+Math.random()*2,1+Math.random()*2)}for(let n=0;n<4;n++)e.strokeStyle=`rgba(160,164,172,${.06+Math.random()*.08})`,e.lineWidth=.8,e.beginPath(),e.moveTo(Math.random()*64,0),e.lineTo(Math.random()*64,64),e.stroke();return Vn(e,64,{basePer:3,oct:3,strength:.16,seed:77}),En(t)}var pa=null;function ya(){return pa||(pa={metal:cx(),wood:hx(),poly:ux()},pa)}function dx(i,t=6){let e=i.width,n=i.getContext("2d"),s=n.getImageData(0,0,e,e),r=s.data,o=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],a=255/(t-1);for(let l=0;l<e;l++)for(let c=0;c<e;c++){let h=(l*e+c)*4,u=(o[(l&3)*4+(c&3)]/16-.5)*a;for(let f=0;f<3;f++){let p=r[h+f]+u;r[h+f]=Math.max(0,Math.min(255,Math.round(p/a)*a))}}return n.putImageData(s,0,0),i}function fx(i,t=2){let e=i.width,n=i.getContext("2d").getImageData(0,0,e,e).data,s=$e(e,e),r=s.getContext("2d"),o=r.createImageData(e,e),a=o.data,l=(c,h)=>{let u=(c+e)%e,p=((h+e)%e*e+u)*4;return(n[p]*.299+n[p+1]*.587+n[p+2]*.114)/255};for(let c=0;c<e;c++)for(let h=0;h<e;h++){let u=(l(h+1,c)-l(h-1,c))*t,f=(l(h,c+1)-l(h,c-1))*t,p=-u,g=-f,x=1,m=Math.hypot(p,g,x)||1,d=(c*e+h)*4;a[d]=(p/m*.5+.5)*255,a[d+1]=(g/m*.5+.5)*255,a[d+2]=(x/m*.5+.5)*255,a[d+3]=255}return r.putImageData(o,0,0),s}function px(i,t=.28,e=.92){let n=i.width,s=i.getContext("2d").getImageData(0,0,n,n).data,r=$e(n,n),o=r.getContext("2d"),a=o.createImageData(n,n),l=a.data;for(let c=0;c<l.length;c+=4){let h=(s[c]*.299+s[c+1]*.587+s[c+2]*.114)/255,u=Math.round(255*(e-(e-t)*h));l[c]=l[c+1]=l[c+2]=u,l[c+3]=255}return o.putImageData(a,0,0),r}function Qh(i){let t=$e(i.width,i.height);return t.getContext("2d").drawImage(i,0,0),t}function xa(i,{nearest:t=!1,aniso:e=1,data:n=!1}={}){let s=new We(i);return s.wrapS=s.wrapT=rs,n||(s.colorSpace=jt),s.anisotropy=e,t&&(s.magFilter=Ce,s.minFilter=Si),s}var ma=null;function tu(){if(ma)return ma;let i=ya(),t=e=>xa(dx(Qh(e.image),6),{nearest:!0,aniso:1});return ma={metal:t(i.metal),wood:t(i.wood),poly:t(i.poly)},ma}var ga=null;function eu(){if(ga)return ga;let i=ya(),t=(e,n)=>({map:xa(Qh(e.image),{aniso:8}),normalMap:xa(fx(e.image,n),{aniso:4,data:!0}),roughnessMap:xa(px(e.image),{aniso:4,data:!0})});return ga={metal:t(i.metal,2.2),wood:t(i.wood,1.6),poly:t(i.poly,1.2)},ga}function nu(){let t=$e(512,512),e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,512);n.addColorStop(0,"#4d78ae"),n.addColorStop(.34,"#93b1cd"),n.addColorStop(.56,"#cfc6ae"),n.addColorStop(.72,"#e3d5b6"),n.addColorStop(1,"#e8dcc0"),e.fillStyle=n,e.fillRect(0,0,512,512);for(let r=0;r<3;r++){let o=10-r*2;for(let a=0;a<o;a++){let l=Math.random()*512,c=30+Math.random()*150+r*26,h=26+Math.random()*60,u=e.createRadialGradient(l,c,2,l,c,h),f=.42-r*.09;u.addColorStop(0,`rgba(255,255,255,${f})`),u.addColorStop(.55,`rgba(248,246,240,${f*.5})`),u.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=u,e.beginPath(),e.ellipse(l,c,h*1.5,h*.62,0,0,7),e.fill()}}let s=new We(t);return s.colorSpace=jt,s.anisotropy=Tl,s}var Xe=440,wl=24,iu={x:-.478,y:.796,z:.372},mx=.45,gx=.2,xx=.62,_a=class{constructor(t,e){if(!e)throw new Error("GameMap: \u7F3A\u5C11\u5730\u56FE\u5B9A\u4E49\uFF0C\u89C1 src/maps/index.js");this.scene=t,this.def=e,this.tex=jh(),this.colliders=[],this.solids=[],this.ceilingZones=[],this.grid=new Uint8Array(1600),this.blocked=new Uint8Array(1600),this.propTop=new Float32Array(1600),this.spawns={T:[],CT:[]},this.sites=e.sites,this.ladders=[],this.label=e.label||e.id||"",this._build()}tileToWorld(t,e){return{x:-2e3+(t+.5)*100,z:-2e3+(e+.5)*100}}worldToTile(t,e){return{cx:Math.floor((t+2e3)/100),cz:Math.floor((e+2e3)/100)}}inBounds(t,e){return t>=0&&e>=0&&t<40&&e<40}isFloorTile(t,e){return this.inBounds(t,e)?this.grid[e*40+t]===1:!1}isWalkable(t,e){if(!this.inBounds(t,e))return!1;let n=e*40+t;return this.grid[n]===1&&this.blocked[n]===0}isFloorAt(t,e){let{cx:n,cz:s}=this.worldToTile(t,e);return this.isFloorTile(n,s)}isWalkableAt(t,e){let{cx:n,cz:s}=this.worldToTile(t,e);return this.isWalkable(n,s)}floorHeightAt(){return 0}supportHeightAt(t,e,n,s){let r=0,o="sand",a=this.colliders;for(let l=0;l<a.length;l++){let c=a[l];c.y1>s||c.y1<=r||t+n<=c.x0||t-n>=c.x1||e+n<=c.z0||e-n>=c.z1||(r=c.y1,o=c.mat||"stone")}return{y:r,mat:o}}_pbr(t,e={}){return new Sn({map:t,roughness:.94,metalness:0,envMapIntensity:.11,...e})}_build(){this._rasterize(),this._buildAtmosphere(),this._buildProps(),this._markPropTiles(),this._buildFloor(),this._buildWalls(),this._buildSpawns(),this._buildCeilings(),this._buildLadders(),this._buildLabels()}ladderAt(t,e,n){for(let s=0;s<this.ladders.length;s++){let r=this.ladders[s];if(!(t<r.x0||t>r.x1||e<r.z0||e>r.z1)&&!(n<(r.y0||0)-20||n>(r.y1||400)))return r}return null}_buildLadders(){if(this.ladders=this.def.ladders||[],!this.ladders.length)return;let t=this._pbr(this.tex.metalRed,{color:12103844,roughness:.52,metalness:.62});for(let e of this.ladders){let n=e.y0||0,s=e.y1||Xe,r=s-n,o=(n+s)/2,a=(e.x0+e.x1)/2,l=(e.z0+e.z1)/2,c=(e.face||"x+")[0]==="x",h=c?e.z1-e.z0:e.x1-e.x0,u=Math.max(10,h/2-10),f=new It,p=new ke(6,r,6);for(let m of[-1,1]){let d=new bt(p,t);c?d.position.set(a,o,l+m*u):d.position.set(a+m*u,o,l),f.add(d)}let g=c?new ke(5,5,u*2):new ke(u*2,5,5),x=Math.max(2,Math.floor(r/40));for(let m=1;m<x;m++){let d=new bt(g,t);d.position.set(a,n+r*m/x,l),f.add(d)}this.scene.add(f)}}_rasterize(){for(let t of this.def.areas){let e=Math.floor((t.x0+2e3)/100),n=Math.floor((t.x1+2e3)/100),s=Math.floor((t.z0+2e3)/100),r=Math.floor((t.z1+2e3)/100);for(let o=s;o<r;o++)for(let a=e;a<n;a++)this.inBounds(a,o)&&(this.grid[o*40+a]=1)}}_buildAtmosphere(){let t=this.scene;t.fog=new Kr(14207403,1800,5e3),t.background=new zt(10467020);let e=new sa(13624050,10256469,.55);t.add(e);let n=new li(16774102,1.22);n.position.set(-900,1500,700),t.add(n);let s=new li(9414856,.22);s.position.set(1200,600,-1400),t.add(s);let r=nu();r.mapping=Is,t.background=r;let o=this._pbr(this.tex.concrete,{envMapIntensity:.26}),a=this._pbr(this.tex.sand,{envMapIntensity:.26});for(let l=0;l<44;l++){let c=l/44*Math.PI*2+Math.random()*.05,h=3150+Math.random()*900,u=220+Math.random()*380,f=380+Math.random()*780,p=220+Math.random()*380,g=this._boxGeo(u,f,p,220),x=new bt(g,Math.random()<.5?o:a);x.position.set(Math.cos(c)*h,f/2-60,Math.sin(c)*h),x.rotation.y=c+Math.random()*.4,t.add(x)}}_boxGeo(t,e,n,s=128){let r=new ke(t,e,n),o=r.attributes.uv,a=[[n,e],[n,e],[t,n],[t,n],[t,e],[t,e]];for(let l=0;l<6;l++){let[c,h]=a[l];for(let u=0;u<4;u++){let f=l*4+u;o.setXY(f,o.getX(f)*c/s,o.getY(f)*h/s)}}return r}_addSolid(t,e,n,s,r,o=!0,a=0,l="stone"){let c=new bt(t,e);return c.position.set(n,s,r),a&&(c.rotation.y=a),this.scene.add(c),this.solids.push(c),o&&this.colliders.push({x0:n-t.parameters.width/2,x1:n+t.parameters.width/2,y0:s-t.parameters.height/2,y1:s+t.parameters.height/2,z0:r-t.parameters.depth/2,z1:r+t.parameters.depth/2,mat:l}),c}_openAt(t,e,n){if(e>Xe-12)return!0;if(e<0)return!1;let{cx:s,cz:r}=this.worldToTile(t,n);if(!this.inBounds(s,r))return!1;let o=r*40+s;return!(this.grid[o]!==1||this.blocked[o]===1&&e<this.propTop[o]-1||e>Xe-46&&this._hasCeiling(t,n))}_hasCeiling(t,e){for(let n of this.def.ceilings||[])if(t>=n.x0&&t<=n.x1&&e>=n.z0&&e<=n.z1)return!0;return!1}_aoFactor(t,e,n,s,r,o){let a=0,l=0,c=(p,g,x,m,d=1)=>{l+=d,this._openAt(t+p*m,e+g*m,n+x*m)||(a+=d/(1+m/70))},h=Math.abs(r)>.7;if(h){if(r>0&&this._hasCeiling(t,n))for(let p=0;p<3;p++)a+=1.15,l+=1;for(let p=0;p<8;p++){let g=p/8*Math.PI*2,x=Math.cos(g),m=Math.sin(g);for(let d=1;d<=3;d++)c(x,0,m,d*34)}}else{let p=Math.hypot(s,o)||1,g=-o/p,x=s/p;for(let m=1;m<=3;m++)c(g,0,x,m*42),c(-g,0,-x,m*42),c(0,1,0,m*42,.8),c(0,-1,0,m*42,2.2)}let u=l>0?a/l:0;return Math.max(.34,1-u*(h?1.35:1.9))}_sunVisible(t,e,n){let s=iu;for(let r=1;r<=7;r++){let o=r*46,a=t+s.x*o,l=e+s.y*o,c=n+s.z*o;if(l>Xe-12)return 1;let{cx:h,cz:u}=this.worldToTile(a,c);if(!this.inBounds(h,u))return 1;if(!this._openAt(a,l,c))return 0}return 1}_applyLighting(t){let e=t.attributes.position,n=t.attributes.normal;if(!e||!n)return t;let s=e.count,r=new Float32Array(s*3),o=iu;for(let a=0;a<s;a++){let l=e.getX(a),c=e.getY(a),h=e.getZ(a),u=n.getX(a),f=n.getY(a),p=n.getZ(a),g=this._aoFactor(l,c,h,u,f,p),x=u*o.x+f*o.y+p*o.z,m=0;x>.02&&!(c<Xe-16&&this._hasCeiling(l,h))&&(m=x*this._sunVisible(l,c,h));let d=.5+.5*f,v=xx+gx*d+mx*m,y=Math.max(.16,g*v);r[a*3]=Math.min(1.45,y*(1+.1*m)),r[a*3+1]=Math.min(1.45,y),r[a*3+2]=Math.min(1.45,y*(1-.15*m))}return t.setAttribute("color",new be(r,3)),t}_buildFloor(){let t=[];for(let r=0;r<40;r++)for(let o=0;o<40;o++){if(this.grid[r*40+o]!==1)continue;let{x:a,z:l}=this.tileToWorld(o,r),c=new cn(100,100,2,2);c.rotateX(-Math.PI/2);let h=c.attributes.uv;for(let u=0;u<h.count;u++)h.setXY(u,h.getX(u)*100/220,h.getY(u)*100/220);c.translate(a,0,l),t.push(c)}if(!t.length)return;let e=Sl(t,!1);t.forEach(r=>r.dispose()),this._applyLighting(e);let n=this._pbr(this.tex.floor,{vertexColors:!0}),s=new bt(e,n);s.position.y=0,this.scene.add(s),this.solids.push(s)}_buildWalls(){let t=[[],[],[]],e=wl;for(let s=0;s<40;s++)for(let r=0;r<40;r++){if(this.grid[s*40+r]!==1)continue;let{x:o,z:a}=this.tileToWorld(r,s),l=100/2,c=t[(r*7+s*13)%3],h=[{dx:0,dz:-1,nx:0,nz:-1},{dx:0,dz:1,nx:0,nz:1},{dx:-1,dz:0,nx:-1,nz:0},{dx:1,dz:0,nx:1,nz:0}];for(let u of h){if(this.isFloorTile(r+u.dx,s+u.dz))continue;let f=Xe,p;u.nx===0?(p=this._boxGeo(100+e,f,e,128),p.translate(o,f/2,a+u.nz*(l+e/2-2))):(p=this._boxGeo(e,f,100+e,128),p.translate(o+u.nx*(l+e/2-2),f/2,a)),c.push(p)}}let n=[this.tex.sand,this.tex.sand2,this.tex.sand3];for(let s=0;s<t.length;s++){let r=t[s];if(!r.length)continue;let o=Sl(r,!1);r.forEach(c=>c.dispose()),this._applyLighting(o);let a=this._pbr(n[s],{vertexColors:!0}),l=new bt(o,a);this.scene.add(l),this.solids.push(l)}for(let s=0;s<40;s++)for(let r=0;r<40;r++){if(this.grid[s*40+r]!==1)continue;let{x:o,z:a}=this.tileToWorld(r,s),l=100/2,c=[{dx:0,dz:-1},{dx:0,dz:1},{dx:-1,dz:0},{dx:1,dz:0}];for(let h of c)this.isFloorTile(r+h.dx,s+h.dz)||(h.dz!==0?this.colliders.push({x0:o-l,x1:o+l,y0:0,y1:Xe,z0:a+h.dz*l,z1:a+h.dz*(l+wl),mat:"stone"}):this.colliders.push({x0:o+h.dx*l,x1:o+h.dx*(l+wl),y0:0,y1:Xe,z0:a-l,z1:a+l,mat:"stone"}))}}_addTileBlocker(t,e,n){let{x:s,z:r}=this.tileToWorld(t,e);this._addSolid(this._boxGeo(94,Xe,94,140),n,s,Xe/2,r,!0,0,"stone"),this.blocked[e*40+t]=1,this.propTop[e*40+t]=Xe}_prop(t,e,n){let{x:s,z:r}=this.tileToWorld(t,e);return this.blocked[e*40+t]=1,{x:s,z:r}}_buildProps(){let t={crate:this._pbr(this.tex.crate,{roughness:.88}),concrete:this._pbr(this.tex.concrete),metalRed:this._pbr(this.tex.metalRed,{roughness:.58,metalness:.55}),metalBlue:this._pbr(this.tex.metalBlue,{roughness:.58,metalness:.55}),metalGreen:this._pbr(this.tex.metalGreen,{roughness:.58,metalness:.55})},e=s=>t[s]||t.concrete,n=s=>s&&s.indexOf("metal")===0?"metal":"stone";for(let s of this.def.props||[])switch(s.t){case"crate":{let r=s.s??100,o=s.h??r,a=s.rot??(s.x*13+s.z*7)%100/1e3-.05;this._addSolid(this._boxGeo(r,o,r,96),e("crate"),s.x,o/2,s.z,!0,a,"wood");let l=new bt(new cn(r,r),new tn({color:0,transparent:!0,opacity:.16,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.set(s.x,o+.6,s.z),this.scene.add(l);break}case"barrel":{let r=s.r??30,o=s.h??96,a=new bt(new oi(r,r,o,12),e(s.mat||"metalRed"));a.position.set(s.x,o/2,s.z),this.scene.add(a),this.solids.push(a),this.colliders.push({x0:s.x-r,x1:s.x+r,y0:0,y1:o,z0:s.z-r,z1:s.z+r,mat:"metal"});break}case"box":{let r=this._boxGeo(s.w,s.h,s.d,s.uv??128);this._addSolid(r,e(s.mat),s.x,s.y??s.h/2,s.z,s.solid!==!1,s.rot||0,n(s.mat));break}case"blocker":this._addTileBlocker(s.cx,s.cz,e(s.mat));break;default:break}for(let s of this.def.decor||[])if(s.kind==="cylinder"){let r=new bt(new oi(s.r0,s.r1,s.h,8),e(s.mat));r.position.set(s.x,s.y,s.z),this.scene.add(r)}}_markPropTiles(){for(let t of this.colliders){if(t.y1>=Xe-1||t.y0>40)continue;let e=t.x1-t.x0,n=t.z1-t.z0;if(e>700||n>700)continue;let s=Math.floor((t.x0+2e3)/100),r=Math.floor((t.x1+2e3)/100),o=Math.floor((t.z0+2e3)/100),a=Math.floor((t.z1+2e3)/100);for(let l=o;l<=a;l++)for(let c=s;c<=r;c++){if(!this.isFloorTile(c,l))continue;let h=this.tileToWorld(c,l),u=26;if(h.x>t.x0-u&&h.x<t.x1+u&&h.z>t.z0-u&&h.z<t.z1+u){let f=l*40+c;this.blocked[f]=1,t.y1>this.propTop[f]&&(this.propTop[f]=t.y1)}}}}_buildSpawns(){for(let t of["T","CT"]){let e=this.def.spawns&&this.def.spawns[t];if(!e)continue;let n=e.count??5,s=e.phase||0;for(let r=0;r<n;r++){let o=r/n*Math.PI*2+s;this.spawns[t].push({x:e.x+Math.cos(o)*(e.rx??190),z:e.z+Math.sin(o)*(e.rz??110),yaw:e.yaw||0})}}}_buildCeilings(){let t=this._pbr(this.tex.concrete,{side:an,color:10722448,emissive:1775894,envMapIntensity:.2}),e=new tn({color:16769200,transparent:!0,opacity:.55,depthWrite:!1,side:an});for(let n of this.def.ceilings||[]){let s=n.x1-n.x0,r=n.z1-n.z0,o=this._boxGeo(s,30,r,200),a=new bt(o,t);a.position.set((n.x0+n.x1)/2,Xe-15,(n.z0+n.z1)/2),this.scene.add(a),this.ceilingZones.push(n);let l=(n.x0+n.x1)/2,c=(n.z0+n.z1)/2,h=new Bn(16763794,.85,1100,1.6);h.position.set(l,Xe-70,c),this.scene.add(h);let u=new bt(new cn(90,90),e);u.rotation.x=Math.PI/2,u.position.set(l,Xe-34,c),this.scene.add(u)}}_buildLabels(){let t=(e,n)=>{let s=document.createElement("canvas");s.width=s.height=256;let r=s.getContext("2d");r.fillStyle="rgba(0,0,0,0)",r.fillRect(0,0,256,256),r.font="bold 200px Impact, Arial Black, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=n,r.globalAlpha=.55,r.fillText(e,128,138);let o=new We(s);return o.colorSpace=jt,o};for(let e of Object.keys(this.sites)){let n=this.sites[e],s=new bt(new cn(420,420),new tn({map:t(e,"#e8dcc0"),transparent:!0,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.set((n.x0+n.x1)/2,.8,(n.z0+n.z1)/2),this.scene.add(s)}}siteAt(t,e){for(let n of Object.keys(this.sites)){let s=this.sites[n];if(t>=s.x0&&t<=s.x1&&e>=s.z0&&e<=s.z1)return n}return null}raycast(t,e,n=8e3){let s=n,r=null,o=this.colliders;for(let a=0;a<o.length;a++){let l=o[a],c=0,h=s,u=-1,f=0,p=!0;for(let g=0;g<3;g++){let x=g===0?t.x:g===1?t.y:t.z,m=g===0?e.x:g===1?e.y:e.z,d=g===0?l.x0:g===1?l.y0:l.z0,v=g===0?l.x1:g===1?l.y1:l.z1;if(Math.abs(m)<1e-8){if(x<d||x>v){p=!1;break}}else{let y=(d-x)/m,T=(v-x)/m,L=-1;if(y>T){let A=y;y=T,T=A,L=1}if(y>c&&(c=y,u=g,f=L),T<h&&(h=T),c>h){p=!1;break}}}p&&c>0&&c<s&&(s=c,r={dist:c,nx:u===0?f:0,ny:u===1?f:0,nz:u===2?f:0,mat:l.mat||"stone"})}if(e.y<-1e-6){let a=-t.y/e.y;if(a>0&&a<s){let l=t.x+e.x*a,c=t.z+e.z*a;this.isFloorAt(l,c)&&(r={dist:a,nx:0,ny:1,nz:0,mat:"sand"})}}return r}lineOfSight(t,e){let n=e.x-t.x,s=e.y-t.y,r=e.z-t.z,o=Math.sqrt(n*n+s*s+r*r);if(o<1)return!0;let a={x:n/o,y:s/o,z:r/o};return!this.raycast(t,a,o-4)}neighbors(t,e){let n=[],s=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];for(let[r,o]of s){let a=t+r,l=e+o;this.isWalkable(a,l)&&(r&&o&&(!this.isWalkable(t+r,e)||!this.isWalkable(t,e+o))||n.push({cx:a,cz:l,cost:r&&o?1.414:1}))}return n}findPath(t,e){let n=this.worldToTile(t.x,t.z),s=this.worldToTile(e.x,e.z);if(!this.isWalkable(s.cx,s.cz)){let x=null,m=1/0;for(let d=-3;d<=3;d++)for(let v=-3;v<=3;v++){if(!this.isWalkable(s.cx+v,s.cz+d))continue;let y=v*v+d*d;y<m&&(m=y,x={cx:s.cx+v,cz:s.cz+d})}if(!x)return null;s.cx=x.cx,s.cz=x.cz}if(!this.isWalkable(n.cx,n.cz)){let x=null,m=1/0;for(let d=-2;d<=2;d++)for(let v=-2;v<=2;v++){if(!this.isWalkable(n.cx+v,n.cz+d))continue;let y=v*v+d*d;y<m&&(m=y,x={cx:n.cx+v,cz:n.cz+d})}if(!x)return null;n.cx=x.cx,n.cz=x.cz}let r=n.cz*40+n.cx,o=s.cz*40+s.cx;if(r===o)return[];let a=new Map([[r,0]]),l=new Map,c=new Set,h=(x,m)=>Math.hypot(x-s.cx,m-s.cz),u=[],f=x=>{u.push(x);let m=u.length-1;for(;m>0;){let d=m-1>>1;if(u[d].f<=u[m].f)break;let v=u[d];u[d]=u[m],u[m]=v,m=d}},p=()=>{let x=u[0],m=u.pop();if(u.length){u[0]=m;let d=0;for(;;){let v=d*2+1,y=v+1,T=d;if(v<u.length&&u[v].f<u[T].f&&(T=v),y<u.length&&u[y].f<u[T].f&&(T=y),T===d)break;let L=u[T];u[T]=u[d],u[d]=L,d=T}}return x};f({key:r,cx:n.cx,cz:n.cz,f:h(n.cx,n.cz)});let g=0;for(;u.length&&g++<8e3;){let x=p();if(!c.has(x.key)){if(c.add(x.key),x.key===o){let m=[],d=o;for(;d!==r&&(m.push(this.tileToWorld(d%40,Math.floor(d/40))),d=l.get(d),d!==void 0););return m.reverse(),m}for(let m of this.neighbors(x.cx,x.cz)){let d=m.cz*40+m.cx;if(c.has(d))continue;let v=(a.get(x.key)??0)+m.cost;v<(a.get(d)??1/0)&&(l.set(d,x.key),a.set(d,v),f({key:d,cx:m.cx,cz:m.cz,f:v+h(m.cx,m.cz)}))}}}return null}randomWalkableNear(t,e,n=800){for(let s=0;s<30;s++){let r=Math.random()*Math.PI*2,o=Math.random()*n,a=t+Math.cos(r)*o,l=e+Math.sin(r)*o;if(this.isWalkableAt(a,l))return{x:a,z:l}}return{x:t,z:e}}};var su={id:"de_outpost",label:"DE_OUTPOST",areas:[{name:"T Spawn",x0:-500,x1:500,z0:1200,z1:1900,kind:"tspawn"},{name:"T Long",x0:400,x1:1e3,z0:1380,z1:1720,kind:"road"},{name:"Long A",x0:900,x1:1280,z0:-520,z1:1700,kind:"road"},{name:"A Site",x0:900,x1:1700,z0:-920,z1:-380,kind:"site"},{name:"CT Ramp",x0:320,x1:1e3,z0:-1120,z1:-700,kind:"road"},{name:"CT Spawn",x0:-620,x1:420,z0:-1520,z1:-880,kind:"ctspawn"},{name:"CT Mid",x0:-320,x1:320,z0:-1080,z1:-680,kind:"road"},{name:"Top Mid",x0:-320,x1:320,z0:-700,z1:-180,kind:"road"},{name:"Mid",x0:-160,x1:160,z0:-250,z1:1350,kind:"road"},{name:"Lower Tunnel",x0:-980,x1:-120,z0:700,z1:960,kind:"tunnel"},{name:"B Tunnel",x0:-1280,x1:-880,z0:-470,z1:1700,kind:"tunnel"},{name:"B Site",x0:-1720,x1:-880,z0:-920,z1:-300,kind:"site"},{name:"B Doors",x0:-1480,x1:-380,z0:-1280,z1:-860,kind:"road"},{name:"T Tunnel",x0:-980,x1:-420,z0:1380,z1:1720,kind:"tunnel"}],ceilings:[{x0:-980,x1:-120,z0:700,z1:960},{x0:-1280,x1:-880,z0:300,z1:1700},{x0:-980,x1:-420,z0:1380,z1:1720}],sites:{A:{name:"A",x0:950,x1:1650,z0:-880,z1:-420},B:{name:"B",x0:-1680,x1:-920,z0:-880,z1:-340}},spawns:{T:{x:0,z:1550,yaw:0,count:5,rx:190,rz:110},CT:{x:-100,z:-1300,yaw:Math.PI,count:5,rx:200,rz:110,phase:.6}},props:[{t:"crate",x:1150,z:-700,s:120,h:64},{t:"crate",x:1270,z:-700,s:120,h:120},{t:"crate",x:1150,z:-580,s:100,h:32},{t:"crate",x:1450,z:-820,s:110,h:64},{t:"crate",x:1560,z:-800,s:110,h:32},{t:"crate",x:1500,z:-620,s:120,h:120},{t:"crate",x:-1450,z:-700,s:120,h:64},{t:"crate",x:-1330,z:-700,s:120,h:32},{t:"crate",x:-1450,z:-560,s:110,h:110},{t:"crate",x:-1120,z:-800,s:120,h:64},{t:"crate",x:-1e3,z:-640,s:110,h:32},{t:"box",x:-1250,y:125,z:-430,w:340,h:250,d:120,mat:"metalBlue"},{t:"box",x:-960,y:125,z:-600,w:120,h:250,d:300,mat:"metalGreen"},{t:"crate",x:300,z:1500,s:110,h:32},{t:"crate",x:300,z:1610,s:110,h:64},{t:"box",x:-300,y:60,z:1700,w:200,h:120,d:90,mat:"concrete"},{t:"barrel",x:-420,z:1350},{t:"barrel",x:-380,z:1420},{t:"box",x:1120,y:45,z:980,w:200,h:90,d:110,mat:"metalBlue"},{t:"box",x:1120,y:125,z:980,w:130,h:70,d:108,mat:"metalBlue"},{t:"crate",x:1010,z:460,s:100,h:32},{t:"crate",x:1180,z:-100,s:100,h:64},{t:"box",x:1090,y:150,z:750,w:300,h:16,d:90,mat:"concrete"},{t:"box",x:900,y:220,z:620,w:24,h:440,d:90,mat:"concrete"},{t:"box",x:1280,y:220,z:620,w:24,h:440,d:90,mat:"concrete"},{t:"box",x:1090,y:410,z:620,w:400,h:60,d:30,mat:"concrete"},{t:"blocker",cx:19,cz:23,mat:"concrete"},{t:"blocker",cx:18,cz:17,mat:"concrete"},{t:"blocker",cx:20,cz:29,mat:"concrete"},{t:"box",x:-160,y:220,z:300,w:30,h:440,d:100,mat:"concrete"},{t:"box",x:160,y:220,z:300,w:30,h:440,d:100,mat:"concrete"},{t:"box",x:0,y:410,z:300,w:360,h:60,d:30,mat:"concrete"},{t:"crate",x:120,z:180,s:100,h:64},{t:"crate",x:-240,z:-400,s:110,h:64},{t:"crate",x:240,z:-420,s:110,h:32},{t:"barrel",x:180,z:-820},{t:"box",x:-450,y:65,z:-1e3,w:240,h:130,d:110,mat:"concrete"},{t:"box",x:250,y:45,z:-1050,w:180,h:90,d:100,mat:"concrete"},{t:"barrel",x:-560,z:-1400},{t:"crate",x:120,z:-1300,s:100,h:64},{t:"crate",x:-1180,z:900,s:100,h:32},{t:"crate",x:-1e3,z:300,s:100,h:64},{t:"barrel",x:-1220,z:1400},{t:"barrel",x:-1180,z:1450},{t:"crate",x:-500,z:830,s:100,h:32},{t:"crate",x:520,z:-940,s:100,h:32},{t:"crate",x:760,z:-1050,s:110,h:64},{t:"box",x:-1150,y:220,z:-1e3,w:30,h:440,d:110,mat:"concrete"},{t:"box",x:-700,y:220,z:-1e3,w:30,h:440,d:110,mat:"concrete"},{t:"crate",x:-1e3,z:-1120,s:100,h:32},{t:"crate",x:-620,z:-1140,s:100,h:64}],ladders:[{x0:900,x1:950,z0:700,z1:800,y0:0,y1:170,face:"x+"}],decor:[{kind:"cylinder",x:1780,y:190,z:-700,r0:10,r1:14,h:380,mat:"concrete"}]};var ru={de_outpost:su},Al="de_outpost";function au(i){let t=ru[i]||ru[Al];if(!t)throw new Error(`\u672A\u77E5\u5730\u56FE\uFF1A${i}`);return t}var mt=null,Ze=null,ci=null,ps=null,va=null,Ma=null,Rl=null,uu=Gs.volume,yx=.075,ou={pistol:{crack:2100,body:700,sub:150,decay:.1,gain:.55,mechFreq:3800},deagle:{crack:1500,body:520,sub:92,decay:.22,gain:.88,mechFreq:3200},smg:{crack:2500,body:860,sub:178,decay:.07,gain:.46,mechFreq:4300},ak47:{crack:1350,body:430,sub:108,decay:.17,gain:.82,mechFreq:3400},m4a1:{crack:1750,body:520,sub:122,decay:.15,gain:.74,mechFreq:3600},awp:{crack:950,body:300,sub:68,decay:.58,gain:1,mechFreq:2600},default:{crack:2e3,body:650,sub:140,decay:.12,gain:.6,mechFreq:3600}};function _x(i=.62,t=2.6){let e=mt.sampleRate,n=Math.max(1,Math.floor(e*i)),s=mt.createBuffer(2,n,e);for(let a=0;a<2;a++){let l=s.getChannelData(a),c=0;for(let u=0;u<n;u++){let f=u/n,p=Math.pow(1-f,t),g=(Math.random()*2-1)*p,x=.34+.62*(1-f);c+=(g-c)*x,l[u]=c}[.011,.019,.031,.047].forEach((u,f)=>{let p=Math.floor(u*e)+(a?37:0);p<n&&(l[p]+=(.55-f*.1)*(a?-1:1))})}let r=0;for(let a=0;a<2;a++){let l=s.getChannelData(a);for(let c=0;c<n;c++){let h=Math.abs(l[c]);h>r&&(r=h)}}let o=r>0?.92/r:1;for(let a=0;a<2;a++){let l=s.getChannelData(a);for(let c=0;c<n;c++)l[c]*=o}return s}function Cl(){if(mt)return mt;let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;mt=new i,ci=mt.createDynamicsCompressor(),ci.threshold.value=-8,ci.knee.value=6,ci.ratio.value=8,ci.attack.value=.001,ci.release.value=.12;let t=mt.createGain();t.gain.value=1.7,ci.connect(t),t.connect(mt.destination),Ze=mt.createGain(),Ze.gain.value=uu,Ze.connect(ci),ps=mt.createGain(),ps.gain.value=yx,Ma=mt.createConvolver(),Ma.buffer=_x(),va=mt.createGain(),va.gain.value=1,ps.connect(Ma),Ma.connect(va),va.connect(Ze);let e=mt.sampleRate*2;Rl=mt.createBuffer(1,e,mt.sampleRate);let n=Rl.getChannelData(0);for(let s=0;s<e;s++)n[s]=Math.random()*2-1;return mt}function du(i){uu=i,Ze&&(Ze.gain.value=i)}function ze(){return mt?mt.currentTime:0}function fu(){let i=mt.createBufferSource();return i.buffer=Rl,i.loop=!0,i.playbackRate.value=.9+Math.random()*.2,i}function Pl(i){if(!mt||!i)return;let t=mt.listener;if(!t)return;let e=i.yaw||0,n=-Math.sin(e),s=-Math.cos(e);try{t.positionX?(t.positionX.value=i.x,t.positionY.value=i.y,t.positionZ.value=i.z,t.forwardX.value=n,t.forwardY.value=0,t.forwardZ.value=s,t.upX.value=0,t.upY.value=1,t.upZ.value=0):t.setPosition&&(t.setPosition(i.x,i.y,i.z),t.setOrientation(n,0,s,0,1,0))}catch{}}function un(i,t){let e=mt.createGain();if(!i||!t)return e.connect(Ze),e.connect(ps),e;let n=i.x-t.x,s=(i.y||0)-(t.y||0),r=i.z-t.z,o=Math.sqrt(n*n+s*s+r*r);if(o<110)return e.connect(Ze),e.connect(ps),e;Pl(t);let a=mt.createBiquadFilter();a.type="lowpass",a.frequency.value=Math.max(420,18e3*Math.exp(-o/1400)),a.Q.value=.4;let l=mt.createPanner();l.panningModel="HRTF",l.distanceModel="inverse",l.refDistance=140,l.rolloffFactor=1.05,l.maxDistance=6e3,l.coneInnerAngle=360;let c=i.y||0;return l.positionX?(l.positionX.value=i.x,l.positionY.value=c,l.positionZ.value=i.z):l.setPosition&&l.setPosition(i.x,c,i.z),e.connect(a),a.connect(l),l.connect(Ze),l.connect(ps),e}function ue(i,t,{dur:e=.12,freq:n=2400,q:s=1,gain:r=.6,type:o="lowpass",decay:a=.09,attack:l=.002}){let c=fu(),h=mt.createBiquadFilter();h.type=o,h.frequency.value=n,h.Q.value=s;let u=mt.createGain(),f=Math.max(5e-4,r),p=t+Math.max(5e-4,l),g=t+Math.max(l+.012,a);u.gain.setValueAtTime(1e-4,t),u.gain.exponentialRampToValueAtTime(f,p),u.gain.exponentialRampToValueAtTime(8e-4,g),c.connect(h),h.connect(u),u.connect(i),c.start(t),c.stop(t+Math.max(e,g-t)+.08)}function Ci(i,t,e=90,n=.18,s=.5){let r=mt.createOscillator(),o=mt.createGain();r.type="sine",r.frequency.setValueAtTime(e*1.7,t),r.frequency.exponentialRampToValueAtTime(Math.max(28,e*.55),t+n),o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(Math.max(5e-4,s),t+.004),o.gain.exponentialRampToValueAtTime(.001,t+n),r.connect(o),o.connect(i),r.start(t),r.stop(t+n+.02)}function Ri(i,t,e=3800,n=.25){let s=fu(),r=mt.createBiquadFilter();r.type="bandpass",r.frequency.value=e,r.Q.value=7;let o=mt.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(Math.max(4e-4,n),t+8e-4),o.gain.exponentialRampToValueAtTime(6e-4,t+.014),s.connect(r),r.connect(o),o.connect(i),s.start(t),s.stop(t+.035)}function vx(i,t,e){let n=ou[e]||ou.default;ue(i,t,{freq:n.crack,gain:n.gain*.85,decay:n.decay*.55,type:"highpass",attack:.0012}),ue(i,t,{freq:n.body,gain:n.gain*.75,decay:n.decay,type:"lowpass",q:.9,attack:.0025}),Ci(i,t,n.sub,n.decay*1.25,n.gain*.5),Ri(i,t+.004,n.mechFreq,n.gain*.3)}function Ll(i,t,e){if(!mt)return;let n=ze(),s=un(t,e);if(i==="knife"){ue(s,n,{freq:850,gain:.085,decay:.15,type:"bandpass",q:1.3,attack:.035}),ue(s,n+.02,{freq:2400,gain:.028,decay:.1,type:"highpass",attack:.03});return}vx(s,n,i)}function pu(i,t){if(!mt)return;let e=ze(),n=un(i,t);Ci(n,e,150,.13,.3),ue(n,e,{freq:700,gain:.16,decay:.1,type:"lowpass",attack:.002}),ue(n,e+.01,{freq:1900,gain:.05,decay:.08,type:"bandpass",q:2,attack:.004})}var lu={sand:{freq:900,gain:.17,decay:.065,q:1.4,type:"lowpass",grit:5200,gritGain:.05},stone:{freq:1900,gain:.15,decay:.045,q:2.2,type:"bandpass",grit:4200,gritGain:.03},wood:{freq:620,gain:.16,decay:.075,q:3,type:"bandpass",grit:0,gritGain:0},metal:{freq:2600,gain:.13,decay:.06,q:5,type:"bandpass",grit:0,gritGain:0}};function Il(i,t,e="sand"){if(!mt)return;let n=lu[e]||lu.sand,s=ze(),r=un(i,t),o=.92+Math.random()*.18;ue(r,s,{freq:n.freq*o,gain:n.gain,decay:n.decay,type:n.type,q:n.q,attack:.003}),n.grit&&ue(r,s+.006,{freq:n.grit,gain:n.gritGain,decay:.04,type:"highpass"})}var cu={rifle:{out:.06,seat:.44,bolt:.74,magHz:250,metalHz:3100,boltGain:.22},smg:{out:.05,seat:.46,bolt:.76,magHz:300,metalHz:3400,boltGain:.2},pistol:{out:.05,seat:.45,bolt:.76,magHz:430,metalHz:2500,boltGain:.24},sniper:{out:.04,seat:.4,bolt:.6,magHz:230,metalHz:2100,boltGain:.26}};function mu(i){if(!mt)return;let t=Jt[i],e=t&&t.reload?t.reload:2.2,n=cu[t&&t.cls||"rifle"]||cu.rifle,s=ze(),r=un(null,null);Ri(r,s+e*.015,n.metalHz*.8,.16),Ri(r,s+e*n.out,n.metalHz,.2),ue(r,s+e*n.out+.012,{freq:900,gain:.07,decay:.06,type:"lowpass"}),ue(r,s+Math.max(.01,e*n.seat-.06),{freq:1400,gain:.05,decay:.07,type:"bandpass",q:2}),Ri(r,s+e*n.seat,n.metalHz*.72,.26),Ci(r,s+e*n.seat,n.magHz,.08,.18),Ri(r,s+e*n.bolt,n.metalHz*1.25,n.boltGain),ue(r,s+e*n.bolt+.02,{freq:2600,gain:.04,decay:.05,type:"bandpass",q:3})}function Vs(i){if(!mt)return;let t=Jt[i],e=t?t.cls:"rifle",n=ze(),s=un(null,null);ue(s,n,{freq:1200,gain:.07,decay:.09,type:"bandpass",q:1.2,attack:.006}),Ri(s,n+.02,e==="sniper"?2100:3e3,.13),ue(s,n+.05,{freq:700,gain:.05,decay:.06,type:"lowpass"})}function gu(){if(!mt)return;let i=ze(),t=un(null,null);ue(t,i,{freq:1600,gain:.1,decay:.1,type:"bandpass",q:1.4,attack:.004}),ue(t,i+.05,{freq:600,gain:.05,decay:.06,type:"lowpass"})}function Dl(i=!0){if(!mt)return;let t=ze(),e=un(null,null);Ri(e,t,i?1450:1050,.17),ue(e,t+.008,{freq:900,gain:.03,decay:.04,type:"lowpass"})}var hu={sand:{freq:850,q:.8,gain:.15,decay:.085,type:"lowpass"},stone:{freq:2500,q:1.8,gain:.19,decay:.06,type:"bandpass"},wood:{freq:720,q:3.4,gain:.17,decay:.1,type:"bandpass"},metal:{freq:3400,q:7,gain:.14,decay:.14,type:"bandpass"}};function xu(i,t,e){if(!mt)return;let n=hu[i]||hu.stone,s=ze(),r=un(t,e);if(ue(r,s,{freq:n.freq,gain:n.gain,decay:n.decay,type:n.type,q:n.q,attack:.001}),i==="metal"){let o=mt.createOscillator(),a=mt.createGain();o.type="triangle",o.frequency.setValueAtTime(2400,s),o.frequency.exponentialRampToValueAtTime(1450,s+.16),a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(.05,s+.004),a.gain.exponentialRampToValueAtTime(8e-4,s+.18),o.connect(a),a.connect(r),o.start(s),o.stop(s+.2)}}function yu(i=!1){if(!mt)return;let t=ze(),e=un(null,null);i?(ue(e,t,{freq:5e3,gain:.3,decay:.07,type:"bandpass",q:6,attack:.001}),Ci(e,t,1200,.09,.28)):(ue(e,t,{freq:1400,gain:.14,decay:.05,type:"bandpass",q:3}),Ci(e,t,500,.05,.18))}function _u(i=!1){if(!mt)return;let t=ze(),e=mt.createOscillator(),n=mt.createGain();e.type="square",e.frequency.value=i?2400:1500,n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(.25,t+.005),n.gain.exponentialRampToValueAtTime(1e-4,t+.07),e.connect(n),n.connect(Ze),e.start(t),e.stop(t+.09)}function vu(i,t){if(!mt)return;let e=ze(),n=un(i,t);ue(n,e,{freq:700,gain:1,decay:1.1,dur:1.4,attack:.004}),ue(n,e,{freq:90,gain:.9,decay:1.5,dur:1.6,type:"lowpass",attack:.006}),Ci(n,e,45,1.2,.9),ue(n,e+.18,{freq:4200,gain:.22,decay:.6,type:"highpass",attack:.02})}function Mu(i,t){if(!mt)return;let e=ze(),n=un(i,t);ue(n,e,{freq:9e3,gain:.7,decay:.35,type:"highpass",attack:8e-4}),Ci(n,e,300,.5,.3);let s=mt.createOscillator(),r=mt.createGain();s.type="sine",s.frequency.setValueAtTime(2650,e),s.frequency.linearRampToValueAtTime(2300,e+1.6),r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.05,e+.08),r.gain.exponentialRampToValueAtTime(1e-4,e+1.8),s.connect(r),r.connect(Ze),s.start(e),s.stop(e+1.9)}function bu(){if(!mt)return;let i=ze();ue(un(null,null),i,{freq:1200,gain:.2,decay:.04,type:"bandpass",q:8,attack:.001})}function ms(){if(!mt)return;let i=ze(),t=mt.createOscillator(),e=mt.createGain();t.type="triangle",t.frequency.setValueAtTime(660,i),t.frequency.exponentialRampToValueAtTime(1320,i+.08),e.gain.setValueAtTime(1e-4,i),e.gain.exponentialRampToValueAtTime(.18,i+.006),e.gain.exponentialRampToValueAtTime(.001,i+.12),t.connect(e),e.connect(Ze),t.start(i),t.stop(i+.14)}function Pi(){if(!mt)return;let i=ze(),t=mt.createOscillator(),e=mt.createGain();t.type="square",t.frequency.value=900,e.gain.setValueAtTime(1e-4,i),e.gain.exponentialRampToValueAtTime(.08,i+.003),e.gain.exponentialRampToValueAtTime(.001,i+.05),t.connect(e),e.connect(Ze),t.start(i),t.stop(i+.06)}function Su(){if(!mt)return;let i=ze(),t=mt.createOscillator(),e=mt.createGain();t.type="sawtooth",t.frequency.setValueAtTime(220,i),t.frequency.exponentialRampToValueAtTime(440,i+.25),e.gain.setValueAtTime(1e-4,i),e.gain.exponentialRampToValueAtTime(.12,i+.05),e.gain.exponentialRampToValueAtTime(.001,i+.35),t.connect(e),e.connect(Ze),t.start(i),t.stop(i+.4)}function Eu(){mt&&mt.state==="suspended"&&mt.resume()}var Mx=56,bx=64,Sx=10,Ex=24,Tx=2;function wx(i="#ffffff",t=.15){let n=document.createElement("canvas");n.width=n.height=64;let s=n.getContext("2d"),r=s.createRadialGradient(64/2,64/2,64*t,64/2,64/2,64/2);r.addColorStop(0,i),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,64,64);let o=new We(n);return o.colorSpace=jt,o}function Ax(){let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,1,64/2,64/2,64/2);n.addColorStop(0,"rgba(20,16,12,0.95)"),n.addColorStop(.5,"rgba(30,24,18,0.55)"),n.addColorStop(1,"rgba(30,24,18,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let s=new We(t);return s.colorSpace=jt,s}var Oe={scene:null,camera:null,game:null,items:[],smokeVolumes:[],shake:0,_softTex:null,_decalTex:null,init(i,t,e){this.scene=i,this.camera=t,this.game=e,this._softTex=wx("rgba(255,240,180,0.95)"),this._decalTex=Ax(),this._buildPools()},_buildPools(){this._sprites=[];for(let s=0;s<Mx;s++){let r=new hs({map:this._softTex,transparent:!0,depthWrite:!1,blending:ii}),o=new zs(r);o.visible=!1,this.scene.add(o),this._sprites.push({o,m:r,on:!1,life:0,maxLife:1,v:new w,kind:"spark",grow:0})}this._spriteCursor=0;let i=new cn(9,9),t=new tn({map:this._decalTex,transparent:!0,depthWrite:!1,opacity:.9,polygonOffset:!0,polygonOffsetFactor:-4});this._decals=[];for(let s=0;s<bx;s++){let r=new bt(i,t);r.visible=!1,this.scene.add(r),this._decals.push(r)}this._decalCursor=0,this._tracers=[];for(let s=0;s<Sx;s++){let r=new Ne;r.setAttribute("position",new be(new Float32Array(6),3));let o=new Os({color:16773296,transparent:!0,opacity:.55,blending:ii,depthWrite:!1}),a=new jr(r,o);a.visible=!1,a.frustumCulled=!1,this.scene.add(a),this._tracers.push({o:a,m:o,on:!1,life:0,maxLife:.05})}this._tracerCursor=0;let e=new ke(2,2,5),n=new pe({color:13214247});this._shells=[];for(let s=0;s<Ex;s++){let r=new bt(e,n);r.visible=!1,this.scene.add(r),this._shells.push({o:r,on:!1,life:0,v:new w,rot:new w})}this._shellCursor=0,this._muzzleLights=[];for(let s=0;s<Tx;s++){let r=new Bn(16764023,0,420);this.scene.add(r),this._muzzleLights.push({l:r,life:0,maxLife:.06,peak:0})}this._muzzleCursor=0,this._boomLight=new Bn(16755268,0,1920),this.scene.add(this._boomLight),this._boomLife=0,this._boomMax=.42,this._boomPeak=0},_sprite(i,t,{size:e=10,life:n=.3,kind:s="spark",v:r=null,grow:o=0,blending:a=ii}={}){let l=this._sprites[this._spriteCursor];return this._spriteCursor=(this._spriteCursor+1)%this._sprites.length,l.m.color.setHex(i),l.m.blending=a,l.m.opacity=1,l.o.position.copy(t),l.o.scale.set(e,e,1),l.o.visible=!0,l.on=!0,l.life=n,l.maxLife=n,l.kind=s,l.grow=o,r?l.v.copy(r):l.v.set(0,0,0),l},muzzle(i,t){let e=i.aimDir(),n=new w(i.pos.x,i.eyeY(),i.pos.z),s=new w(Math.cos(i.yaw),0,-Math.sin(i.yaw)),r=n.clone().addScaledVector(e,34).addScaledVector(s,9);r.y-=8;let o=22+Math.random()*12;this._sprite(16770208,r,{size:o,life:.055,kind:"flash"});let a=this._muzzleLights[this._muzzleCursor];this._muzzleCursor=(this._muzzleCursor+1)%this._muzzleLights.length,a.l.position.copy(r),a.life=a.maxLife,a.peak=3.2,this.shell(i,s)},shell(i,t){let e=this._shells[this._shellCursor];this._shellCursor=(this._shellCursor+1)%this._shells.length,e.o.position.set(i.pos.x,i.eyeY()-8,i.pos.z),e.o.visible=!0,e.on=!0,e.life=1.2,e.v.set(t.x*90+(Math.random()-.5)*40,120,t.z*90+(Math.random()-.5)*40),e.rot.set(Math.random()*12,Math.random()*12,0)},tracer(i,t){let e=this._tracers[this._tracerCursor];this._tracerCursor=(this._tracerCursor+1)%this._tracers.length;let n=e.o.geometry.attributes.position;n.setXYZ(0,i.x,i.y,i.z),n.setXYZ(1,t.x,t.y,t.z),n.needsUpdate=!0,e.o.visible=!0,e.on=!0,e.life=e.maxLife,e.m.opacity=.55},impact(i,t,e="stone"){let n=this._decals[this._decalCursor];this._decalCursor=(this._decalCursor+1)%this._decals.length,n.position.copy(i);let s=new w(t.x,t.y,t.z).normalize();n.lookAt(i.clone().add(s)),n.visible=!0;for(let o=0;o<3;o++){let a=new w(t.x*60+(Math.random()-.5)*90,t.y*60+Math.random()*90,t.z*60+(Math.random()-.5)*90);this._sprite(16760928,i,{size:6+Math.random()*8,life:.28,kind:"spark",v:a})}let r=i.clone().addScaledVector(s,4);if(e!=="metal"){let o=e==="wood"?10123858:12560516;this._sprite(o,r,{size:14,life:.5,kind:"grow",grow:30,blending:Mn})}xu(e,i,this.game.listenerPos())},blood(i,t=5){for(let e=0;e<t;e++){let n=new w((Math.random()-.5)*130,Math.random()*110,(Math.random()-.5)*130);this._sprite(10228756,i,{size:4+Math.random()*6,life:.45,kind:"spark",v:n,blending:Mn})}},knifeSwing(){},explosion(i,t=320){this._boomLight.position.copy(i),this._boomLight.position.y+=30,this._boomLife=this._boomMax,this._boomPeak=12;let e=new bt(new Fn(30,12,10),new tn({color:16759637,transparent:!0,opacity:.95,blending:ii,depthWrite:!1}));e.position.copy(i),this.scene.add(e),this.items.push({obj:e,life:.42,maxLife:.42,kind:"boom"});for(let n=0;n<18;n++){let s=new w((Math.random()-.5)*400,Math.random()*260,(Math.random()-.5)*400),r=n%3===0;this._sprite(r?3355443:16750916,i,{size:30+Math.random()*60,life:.7+Math.random()*.5,kind:"spark",v:s,blending:r?Mn:ii})}vu(i,this.game.listenerPos()),this.shake=Math.max(this.shake,1)},smokeCloud(i){let t=new It;for(let n=0;n<16;n++){let s=new zs(new hs({map:this._softTex,color:14211288,transparent:!0,opacity:0,depthWrite:!1})),r=n/16*Math.PI*2,o=Math.random()*90;s.position.set(Math.cos(r)*o,20+Math.random()*120,Math.sin(r)*o);let a=180+Math.random()*120;s.scale.set(a,a,1),t.add(s)}t.position.copy(i),this.scene.add(t);let e={pos:i.clone(),radius:190,until:this.game.time+16,grp:t};this.smokeVolumes.push(e),this.items.push({obj:t,life:16,maxLife:16,kind:"smoke",vol:e})},blocksLineOfSight(i,t){for(let e of this.smokeVolumes){if(this.game.time>e.until)continue;let n=new w().subVectors(t,i),s=n.lengthSq();if(s<1)continue;let r=Math.max(0,Math.min(1,new w().subVectors(e.pos,i).dot(n)/s));if(i.clone().addScaledVector(n,r).distanceTo(e.pos)<e.radius*.85)return!0}return!1},update(i){this.shake=Math.max(0,this.shake-i*2.6);for(let t=0;t<this._sprites.length;t++){let e=this._sprites[t];if(!e.on)continue;if(e.life-=i,e.life<=0){e.on=!1,e.o.visible=!1;continue}let n=1-e.life/e.maxLife;switch(e.kind){case"spark":e.v.y-=700*i,e.o.position.addScaledVector(e.v,i),e.m.opacity=1-n;break;case"grow":{let s=e.o.scale.x+e.grow*i;e.o.scale.set(s,s,1),e.m.opacity=(1-n)*.6;break}default:e.m.opacity=1-n;break}}for(let t=0;t<this._tracers.length;t++){let e=this._tracers[t];if(e.on){if(e.life-=i,e.life<=0){e.on=!1,e.o.visible=!1;continue}e.m.opacity=e.life/e.maxLife*.55}}for(let t=0;t<this._shells.length;t++){let e=this._shells[t];if(e.on){if(e.life-=i,e.life<=0){e.on=!1,e.o.visible=!1;continue}e.v.y-=800*i,e.o.position.addScaledVector(e.v,i),e.o.rotation.x+=e.rot.x*i,e.o.rotation.y+=e.rot.y*i,e.o.position.y<2&&(e.o.position.y=2,e.v.y*=-.3,e.v.x*=.6,e.v.z*=.6)}}for(let t=0;t<this._muzzleLights.length;t++){let e=this._muzzleLights[t];e.life<=0||(e.life-=i,e.l.intensity=e.life>0?e.life/e.maxLife*e.peak:0,e.life<=0&&(e.l.intensity=0))}this._boomLife>0&&(this._boomLife-=i,this._boomLight.intensity=this._boomLife>0?this._boomLife/this._boomMax*this._boomPeak:0,this._boomLife<=0&&(this._boomLight.intensity=0));for(let t=this.items.length-1;t>=0;t--){let e=this.items[t];e.life-=i;let n=e.obj;if(e.life<=0){this.scene.remove(n),n.geometry&&n.geometry.dispose?.(),n.material&&(Array.isArray(n.material)?n.material.forEach(r=>r.dispose?.()):n.material.dispose?.()),e.kind==="smoke"&&e.vol&&(this.smokeVolumes=this.smokeVolumes.filter(r=>r!==e.vol)),this.items.splice(t,1);continue}let s=1-e.life/e.maxLife;switch(e.kind){case"boom":{let r=30+s*330;n.scale.set(r/30,r/30,r/30),n.material.opacity=.95*(1-s)**1.5;break}case"smoke":{let r=Math.min(1,s*5),o=Math.min(1,(1-s)*3),a=Math.min(r,o);n.children.forEach(c=>{c.material.opacity=.72*a});let l=.6+s*.7;n.scale.set(l,1,l);break}default:break}}}},Rx=800,ba=class{constructor(t,e,n,s,r){this.game=t,this.owner=e,this.kind=n,this.pos=s.clone(),this.vel=r.clone().multiplyScalar(n==="he"?1e3:950),this.vel.y+=110,this.fuse=ha[n]||3,this.dead=!1,this.bounces=0;let o=n==="he"?4872762:n==="flash"?10066329:9079408;this.mesh=new bt(new Fn(5,8,6),new pe({color:o})),this.mesh.position.copy(this.pos),t.scene.add(this.mesh)}update(t){if(this.dead)return;this.fuse-=t,this.vel.y-=Rx*t;let e=this.game.map,n=this.pos.clone().addScaledVector(this.vel,t);n.y<5&&(n.y=5,this.vel.y*=-.42,this.vel.x*=.72,this.vel.z*=.72,this.bounces++);let s=n.clone().sub(this.pos),r=s.length();if(r>.001){let o=s.clone().divideScalar(r),a=e.raycast(this.pos,o,r+4);if(a){let l=this.pos.clone().addScaledVector(o,Math.max(0,a.dist-3)),c=new w(a.nx,a.ny,a.nz);this.vel.reflect(c).multiplyScalar(.45),n.copy(l),this.bounces++}}this.pos.copy(n),this.mesh.position.copy(this.pos),this.mesh.rotation.x+=t*6,this.mesh.rotation.z+=t*4,this.fuse<=0&&this.explode()}explode(){this.dead=!0,this.game.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose();let t=this.kind;if(t==="he"){Oe.explosion(this.pos.clone());for(let e of this.game.players){if(!e.alive)continue;let s=new w(e.pos.x,e.pos.y+36,e.pos.z).distanceTo(this.pos);if(s>340)continue;let r=new w(e.pos.x,e.eyeY(),e.pos.z);if(!this.game.map.lineOfSight(this.pos,r))continue;let a=105*Math.max(0,1-s/340)**1.4;a>1&&Ws(this.game,e,this.owner,a,"chest",{id:"hegrenade",dmg:a})}}else if(t==="flash"){Mu(this.pos.clone(),this.game.listenerPos());for(let e of this.game.players){if(!e.alive)continue;let n=new w(e.pos.x,e.eyeY(),e.pos.z),s=n.distanceTo(this.pos);if(s>1500||!this.game.map.lineOfSight(this.pos,n))continue;let r=this.pos.clone().sub(n).normalize(),o=new w(-Math.sin(e.yaw),0,-Math.cos(e.yaw)),a=Math.max(0,o.dot(new w(r.x,0,r.z).normalize())),l=Math.max(0,1-s/1500)*(.35+a*.9);e.flashAmount=Math.min(1.4,e.flashAmount+l*1.5),e.isBot&&e.botOnFlashed?.(l)}}else Oe.smokeCloud(this.pos.clone())}};function Xs(i){let t=Jt[i];return t?{id:i,def:t,ammo:t.mag,reserve:t.res}:null}function Ul(i,t,e,n,s){let r=null;for(let o of i.players)if(!(!o.alive||o===s))for(let a of o.hitboxes()){let l={x0:o.pos.x-a.r,x1:o.pos.x+a.r,y0:a.y0,y1:a.y1,z0:o.pos.z-a.r,z1:o.pos.z+a.r},c=Cx(t,e,l);c!==null&&c>0&&c<n&&(!r||c<r.dist)&&(r={player:o,dist:c,group:a.group,friendly:!!(s&&o.team===s.team)})}return r&&(r.point=t.clone().addScaledVector(e,r.dist)),r}function Cx(i,t,e){let n=0,s=1/0;for(let r=0;r<3;r++){let o=r===0?i.x:r===1?i.y:i.z,a=r===0?t.x:r===1?t.y:t.z,l=r===0?e.x0:r===1?e.y0:e.z0,c=r===0?e.x1:r===1?e.y1:e.z1;if(Math.abs(a)<1e-8){if(o<l||o>c)return null}else{let h=(l-o)/a,u=(c-o)/a;if(h>u){let f=h;h=u,u=f}if(h>n&&(n=h),u<s&&(s=u),n>s)return null}}return n}function Nl(i,t,e,n,s){let r=i.map.raycast(e,n,8e3),o=r?r.dist:8e3,a=Ul(i,e,n,o,t),l=a?a.dist:o,c=e.clone().addScaledVector(n,l),h=e.clone().addScaledVector(n,24);if(Math.random()<.75&&Oe.tracer(h,c),a)a.friendly||(Ws(i,a.player,t,s.dmg,a.group,s,a.dist),Oe.blood(a.point,a.group==="head"?8:4),t===i.localPlayer&&(yu(a.group==="head"),i.hud.hitMarker(a.group==="head")));else if(r){let u=e.clone().addScaledVector(n,r.dist-.6);Oe.impact(u,{x:r.nx,y:r.ny,z:r.nz},r.mat)}return{end:c,hitPlayer:!!a}}function Ws(i,t,e,n,s,r,o){if(!t.alive)return 0;let a=o;if(a==null){let f=e&&e.pos?e.pos:t.pos;a=Math.hypot(f.x-t.pos.x,f.y-t.pos.y,f.z-t.pos.z)}let l=qh[s]??1,c=Math.pow(.985,a/100),h=n*l*c;if(e&&e!==t&&e.team===t.team)return 0;let u=t.takeDamage(h,e,s,r.id);return e===i.localPlayer&&t!==i.localPlayer&&i.hud.hitMarker(s==="head"),t===i.localPlayer&&u>0&&i.hud.damageFlash(u,e),u}var qs=ya(),st={steel:new pe({map:qs.metal,color:10923190}),steelDark:new pe({map:qs.metal,color:6580594}),poly:new pe({map:qs.poly,color:9607072}),black:new pe({color:1316120}),wood:new pe({map:qs.wood,color:13806722}),woodDark:new pe({map:qs.wood,color:9071176}),accent:new pe({color:9276288}),glass:new pe({color:1920867}),glove:new pe({color:10524284}),sleeve:new pe({color:3356458}),skin:new pe({color:12091994}),skinDark:new pe({color:9396802})},Ii="classic";function Ru(){return Ii}function Cu(i){if(i!=="classic"&&i!=="modern"||i===Ii)return Ii;Ii=i;for(let t of Object.keys($s))delete $s[t];return Ii}var Sa=null;function Px(){if(Sa)return Sa;let i=tu(),t=(e,n)=>new pe({map:e,color:n,flatShading:!0});return Sa={steel:t(i.metal,10923190),steelDark:t(i.metal,6580594),accent:new pe({color:9276288,flatShading:!0}),wood:t(i.wood,13806722),woodDark:t(i.wood,9071176),poly:t(i.poly,9607072),black:new pe({color:1316120,flatShading:!0})},Sa}var Ea=null;function Ke(){if(Ea)return Ea;let i=eu(),t=(e,n)=>new Sn({map:e.map,normalMap:e.normalMap,roughnessMap:e.roughnessMap,envMapIntensity:.55,...n});return Ea={steel:t(i.metal,{color:12172999,metalness:.86,roughness:.44}),steelDark:t(i.metal,{color:8291469,metalness:.9,roughness:.52}),accent:new Sn({color:10133672,metalness:.9,roughness:.38,envMapIntensity:.55}),wood:t(i.wood,{color:10517074,metalness:0,roughness:.66}),woodDark:t(i.wood,{color:7821103,metalness:0,roughness:.72}),poly:t(i.poly,{color:9278363,metalness:0,roughness:.74}),black:new Sn({color:1711394,metalness:.55,roughness:.48,envMapIntensity:.55}),glass:new Sn({color:1323325,metalness:.15,roughness:.06,envMapIntensity:2.2})},Ea}function Li(i,t,e){return new ke(i,t,e)}function Ta(i,t,e=8){return new ia(i,t,3,e)}function Pu(i,t,e,n=10){return new oi(i,t,e,n)}function C(i,t,e,n,s=0,r=0,o=0,a=0,l=0,c=0){let h=new bt(Li(i,t,e),n);return h.position.set(s,r,o),h.rotation.set(a,l,c),h}function ct(i,t,e,n,s=0,r=0,o=0,a=10){let l=new bt(Pu(i,t,e,a),n);return l.rotation.x=Math.PI/2,l.position.set(s,r,o),l}var kl={};function Lx(i){if(kl[i])return kl[i];let t=64,e=document.createElement("canvas");e.width=e.height=t;let n=e.getContext("2d");n.fillStyle=i==="T"?"#a8784e":"#c19474",n.fillRect(0,0,t,t);let s=n.createLinearGradient(0,0,0,t);s.addColorStop(0,"rgba(60,40,26,0.45)"),s.addColorStop(.35,"rgba(60,40,26,0)"),n.fillStyle=s,n.fillRect(0,0,t,t),i==="T"?(n.fillStyle="#1d1b19",n.fillRect(0,36,t,t-36),n.fillStyle="#2a2724",n.fillRect(0,36,t,3),n.fillStyle="#f0e6d8",n.fillRect(14,24,12,6),n.fillRect(38,24,12,6),n.fillStyle="#241a12",n.fillRect(19,25,5,5),n.fillRect(43,25,5,5)):(n.fillStyle="#1b2831",n.fillRect(4,18,t-8,16),n.fillStyle="rgba(120,170,200,0.5)",n.fillRect(8,21,18,6),n.fillStyle="#0e1a22",n.fillRect(0,33,t,2),n.fillStyle="rgba(50,34,22,0.22)",n.fillRect(0,46,t,t-46));let r=new We(e);return r.colorSpace=jt,kl[i]=r,r}var Tn=i=>new Sn({roughness:.92,metalness:0,envMapIntensity:.16,...i}),zl={};function Ix(i){if(zl[i])return zl[i];let t=i==="T"?11041618:12883827,e=i==="T"?9072968:6122362,n=i==="T"?5522732:3752783,s={skin:Tn({color:t,roughness:.78}),cloth:Tn({color:e}),vest:Tn({color:n,roughness:.86}),belt:Tn({color:2828323,roughness:.72}),pouch:Tn({color:i==="T"?4142630:2896957}),boot:Tn({color:2367258,roughness:.7}),pack:Tn({color:i==="T"?4866096:3291973}),hat:Tn({color:i==="T"?2039066:2831680,roughness:.88}),glove:Tn({color:3025957,roughness:.8}),face:Tn({map:Lx(i),roughness:.76})};return zl[i]=s,s}var dn={thigh:Ta(3.9,7),shin:Ta(3.3,6),upperArm:Ta(3.4,7),forearm:Ta(3,6),boot:Li(6.5,5,11),hand:Li(4.6,5.4,5),head:Li(9.4,10.6,9.6),neck:Pu(3,3,4,8),helm:new Fn(5.9,12,8,0,Math.PI*2,0,Math.PI*.56),gunBody:Li(4.5,4.5,24),gunBarrel:Li(2,2,14),gunMag:Li(3.4,7,4.4)};function Lu(i){let t=Ix(i),e=new It;e.add(C(19,9,12,t.cloth,0,29.5,0)),e.add(C(20,2.8,13,t.belt,0,33.8,0)),e.add(C(17.5,9,11,t.cloth,0,38.6,0)),e.add(C(21,14,12.5,t.vest,0,47,0)),e.add(C(6,3.2,8.5,t.vest,-10,53.5,0)),e.add(C(6,3.2,8.5,t.vest,10,53.5,0)),e.add(C(5.4,5,2.6,t.pouch,-6.2,45.6,-6.6)),e.add(C(5.4,5,2.6,t.pouch,0,45.6,-6.6)),e.add(C(5.4,5,2.6,t.pouch,6.2,45.6,-6.6)),e.add(C(15,15.5,6,t.pack,0,45.5,9.2)),e.add(C(9.8,4.2,9.8,t.cloth,0,57,0));let n=new bt(dn.neck,t.skin);n.position.set(0,57.4,0),e.add(n);let s=[t.skin,t.skin,t.hat,t.skin,t.skin,t.face],r=new bt(dn.head,s);r.position.set(0,63.4,0),e.add(r);let o=null;if(i==="CT")o=new bt(dn.helm,t.hat),o.position.set(0,65.6,0),e.add(o);else{let y=C(10.1,4.4,10.3,t.hat,0,67.4,0);e.add(y);let T=C(4.2,6.5,3,t.hat,0,63,5.4,.3);e.add(T)}let a=y=>{let T=new It;T.position.set(y*5.6,28,0);let L=new bt(dn.thigh,t.cloth);L.position.y=-6.5,T.add(L);let A=new It;A.position.y=-13;let R=new bt(dn.shin,t.cloth);R.position.y=-6,A.add(R);let H=new bt(dn.boot,t.boot);return H.position.set(0,-12.4,-1.4),A.add(H),T.add(A),e.add(T),{hip:T,knee:A,base:0}},l=a(-1),c=a(1),h=y=>{let T=new It;T.position.set(y*10.4,52.6,0);let L=new bt(dn.upperArm,t.cloth);L.position.y=-6,T.add(L);let A=C(6.2,3,6.4,t.vest,0,-11,0);T.add(A);let R=new It;R.position.y=-11.8;let H=new bt(dn.forearm,t.cloth);H.position.y=-5.4,R.add(H);let M=new bt(dn.hand,t.glove);return M.position.set(0,-11.4,0),R.add(M),T.add(R),e.add(T),{shoulder:T,elbow:R}},u=h(-1),f=h(1);f.shoulder.rotation.set(.3,0,-.2),f.elbow.rotation.set(1,0,0),u.shoulder.rotation.set(.7,0,.6),u.elbow.rotation.set(.65,0,0);let p=u.shoulder.rotation.x,g=f.shoulder.rotation.x,x=new It,m=new bt(dn.gunBody,st.black);x.add(m);let d=new bt(dn.gunBarrel,st.steelDark);d.position.set(0,.6,-19),x.add(d);let v=new bt(dn.gunMag,st.black);return v.position.set(0,-4.8,1.2),v.rotation.x=.25,x.add(v),x.position.set(6.2,40.6,-7),x.rotation.set(-.04,.06,0),e.add(x),{group:e,head:r,helmet:o,gun:x,legL:l.hip,kneeL:l.knee,legR:c.hip,kneeR:c.knee,armL:u.shoulder,elbowL:u.elbow,armR:f.shoulder,elbowR:f.elbow,idleArmL:p,idleArmR:g}}function Zs(i,{segs:t=4,w:e=3.4,h:n=3,d:s=4.4,y:r=-2.6,z:o=-4,curve:a=.19,rx:l=0}){let c=new It;for(let h=0;h<t;h++){let u=C(e,n+.4,s,i,0,-h*(n-.5),-h*a*3.6,-h*a);c.add(u)}return c.position.set(0,r,o),c.rotation.x=l,c}function qe(i=1,t=1){let e=new It;e.add(C(4,6.2,6,st.glove,i*1.5,0,.4));for(let s=0;s<4;s++)e.add(C(2.6,1.15,1.9,st.glove,i*.3,-2.2+s*1.45,3.5));e.add(C(1.8,1.5,3,st.glove,i*2.7,2.1,1)),e.add(C(3.6,4.2,2.4,st.glove,i*1.2,-.7,4));let n=C(4.4,4.6,14,st.sleeve,i*2.3,-3,11);return n.rotation.x=-.28,n.rotation.z=i*.3,e.add(n),e.scale.setScalar(t),e}function Tu(i=st){let t=new It;t.add(C(3.5,3.6,20,i.steel,0,0,-2)),t.add(C(3.2,1.3,13,i.steelDark,0,2.6,-3.2)),t.add(C(3.7,1,4.2,i.accent,0,-1.9,-8.5)),t.add(C(3.3,3.1,11.5,i.wood,0,-.9,-14.6)),t.add(C(2.3,2,11.5,i.steelDark,0,2.1,-14.6)),t.add(C(2,.9,11.5,i.accent,0,3.2,-14.6)),t.add(ct(.85,.85,12,i.steelDark,0,1.2,-23)),t.add(ct(1.15,1.15,3.4,i.steel,0,1.2,-29.4)),t.add(C(1.1,3,1.4,i.steel,0,2.9,-26.2)),t.add(C(.7,1.4,.7,i.accent,0,4.3,-26.2)),t.add(C(1.7,1.3,1.2,i.steel,0,3.3,-8.6)),t.add(C(.6,1,.5,i.black,0,3.6,-8.9)),t.add(Zs(i.black,{segs:4,y:-2.2,z:-4.4,curve:.22})),t.add(C(2.9,7.2,4.4,i.poly,0,-5.4,3.4,.3)),t.add(C(2.7,3.2,13,i.wood,0,-1.2,13.8,.1)),t.add(C(3,4.4,2,i.woodDark,0,-2,20.2,.1)),t.add(C(.9,.9,3.4,i.steel,2,1.5,-3.2));let e=qe(1);e.position.set(.2,-4.6,3.6),t.add(e);let n=qe(-1);return n.position.set(-.4,-2,-11.4),t.add(n),t}function Dx(){let i=Ke(),t=new It;t.add(C(3.5,2.4,19.5,i.steel,0,-1,-2)),t.add(C(3.8,1.6,19.5,i.steel,0,.6,-2));let e=new bt(new oi(1.72,1.72,13,20),i.steelDark);e.rotation.x=Math.PI/2,e.position.set(0,2.05,-3.2),t.add(e);for(let r=0;r<3;r++){let o=new bt(new Fn(.32,8,6),i.steelDark);o.position.set(1.78,-.4,-7+r*3.2),t.add(o)}t.add(ct(.95,.95,12.5,i.steel,0,2.35,-14.2,12)),t.add(ct(1.95,1.95,11.5,i.wood,0,-.55,-14.5,16));for(let r=0;r<4;r++)t.add(C(3.4,.45,.9,i.woodDark,0,-1.6,-10.6-r*2.1));t.add(ct(.72,.78,13,i.steelDark,0,1.15,-23.5,14)),t.add(ct(1.18,1.05,3.6,i.steel,0,1.15,-29.6,14)),t.add(C(1,2.6,1.3,i.steel,0,2.75,-26.3)),t.add(ct(.42,.3,2,i.steelDark,0,4.2,-26.3,10)),t.add(C(1.9,1.1,1.4,i.steel,0,3.15,-8.6)),t.add(C(.55,.9,.5,i.black,0,3.45,-8.9)),t.add(Zs(i.black,{segs:6,w:3.3,h:2.6,d:4.6,y:-2,z:-4.2,curve:.17})),t.add(C(2.8,7,4.2,i.poly,0,-5.4,3.4,.3));for(let r=0;r<3;r++)t.add(C(3,.4,4,i.poly,0,-7.2+r*1.5,3.4,.3));t.add(C(2.8,3,13.5,i.wood,0,-1.2,13.6,.1)),t.add(C(3.2,1,8,i.wood,0,.4,14.6,.1)),t.add(C(3.1,4.6,2.2,i.woodDark,0,-2,20.3,.1)),t.add(C(.85,.85,3.2,i.steel,2.1,1.35,-3.2)),t.add(ct(.55,.55,1.6,i.steelDark,2.1,1.35,-1.8,8));let n=qe(1);n.position.set(.2,-4.6,3.6),t.add(n);let s=qe(-1);return s.position.set(-.4,-2,-11.4),t.add(s),t}function xs(){let i=new It;i.add(C(3.3,2.6,18,st.steel,0,.9,-2)),i.add(C(3,2.2,14,st.steel,0,-1.6,-1)),i.add(C(1.5,.8,11,st.black,0,3,-3)),i.add(C(1.5,1.5,.9,st.black,0,2.4,-8.2)),i.add(C(1.5,1.5,.9,st.black,0,2.4,2)),i.add(ct(2.2,2.2,13,st.poly,0,.6,-13.5,12));for(let n=0;n<5;n++)i.add(C(4.4,.5,1.1,st.black,0,.6,-9.5-n*2.2));i.add(ct(.8,.8,11,st.steelDark,0,.9,-24)),i.add(ct(1.05,1.05,3,st.steel,0,.9,-30)),i.add(C(.8,3.2,.8,st.steel,0,2.6,-25.4)),i.add(C(2.2,.7,.8,st.steel,0,1.3,-25.4)),i.add(C(3.2,7.8,4.6,st.black,0,-5.4,-4.2,.12)),i.add(C(2.8,6.8,4.2,st.poly,0,-4.6,3.6,.28)),i.add(ct(1.2,1.2,9,st.steelDark,0,-.4,12.4,8)),i.add(C(3.2,4.2,3.6,st.poly,0,-1,17.4));let t=qe(1);t.position.set(.2,-4,3.8),i.add(t);let e=qe(-1);return e.position.set(-.4,-1.6,-12.6),i.add(e),i}function wu(){let i=new It;i.add(C(3.4,4,24,st.steelDark,0,0,-6)),i.add(ct(.95,.95,26,st.steel,0,.6,-30)),i.add(ct(1.3,1.3,3.6,st.black,0,.6,-43.6)),i.add(ct(2.6,2.6,15,st.steelDark,0,4,-10,12)),i.add(ct(3.2,2.6,3,st.steel,0,4,-19.5,12)),i.add(ct(2.7,3.1,2.6,st.steel,0,4,-1.2,12)),i.add(ct(2.2,2.2,.6,st.glass,0,4,-21.2,12)),i.add(C(2,2.4,2.2,st.steel,0,2.2,-5.4)),i.add(C(2,2.4,2.2,st.steel,0,2.2,-15.2)),i.add(C(3.2,2,14,st.poly,0,-1.4,13.2,.06)),i.add(C(3,2.4,12,st.poly,0,-3.4,14.4,.22)),i.add(C(3.4,5,2.2,st.black,0,-2.6,20.2,.22)),i.add(C(2.8,4.2,5.4,st.black,0,-3.4,-6.4)),i.add(C(2.8,6.4,4.2,st.poly,0,-5.2,2.6,.3)),i.add(C(.7,.7,9,st.steelDark,0,-1.4,-22.4,.18));let t=qe(1);t.position.set(.2,-4.4,2.8),i.add(t);let e=qe(-1);return e.position.set(-.4,-1.4,-18.4),i.add(e),i}function wa(i){let t=new It,e=i==="p90"?26:18,n=i==="p90"?-2:-3;t.add(C(3.4,4.6,e,st.poly,0,0,n)),t.add(ct(.8,.8,8,st.steelDark,0,.9,n-e/2-3.2)),i==="p90"?(t.add(C(3,2.2,20,st.steelDark,0,2.8,-2)),t.add(C(2.2,1.2,16,st.black,0,2,-4)),t.add(C(4.4,3,5,st.black,0,-2.4,4))):(t.add(C(2.6,9.5,3.4,st.black,0,-6.2,-5.4,.14)),t.add(ct(2,2,7,st.poly,0,.4,-11.4,12)),t.add(C(1.8,4.6,3.6,st.poly,0,-4.2,3.2,.26)),t.add(C(2.2,.8,12,st.steelDark,0,2.6,-4)));let s=qe(1);s.position.set(.2,-3.6,3.2),t.add(s);let r=qe(-1);return r.position.set(-.4,-1.6,-10.6),t.add(r),t}function Aa(i){let t=new It,e=i==="deagle",n=e?3.9:3.1,s=e?4.2:3.3,r=e?16:14;if(t.add(C(n,s,r,st.steel,0,1,-3)),t.add(C(n-.4,2,r-2.5,st.steelDark,0,-1.4,-3)),t.add(C(n-1.2,s-1.4,1.8,st.black,0,1,-3-r/2)),t.add(C(n-.6,e?8.6:7.8,e?5.2:4.6,st.poly,0,-5.4,2.2,.22)),t.add(C(n-1.4,.9,4.4,st.black,0,-2.6,-1.2)),t.add(C(1.1,1.4,1.6,st.black,0,2.9,3.4,-.2)),t.add(C(.9,1.2,1.4,st.accent,0,s/2+1.2,-3-r/2+2)),t.add(C(1.3,1,1,st.accent,0,s/2+1.1,2.8)),e){for(let a=0;a<3;a++)t.add(C(n-1,.5,2.2,st.black,0,s/2+.9,-6+a*3));t.add(ct(1,1,2.6,st.steelDark,0,.7,-11.2))}let o=qe(1,.86);return o.position.set(.1,-3.9,2.8),t.add(o),t}function Ux(){let i=new It;i.add(C(.9,2.6,15,st.steel,0,0,-8)),i.add(C(.5,1.4,14,st.accent,-.5,-.6,-8.4)),i.add(C(.6,.9,8,st.steelDark,0,1.4,-6)),i.add(C(1.6,.5,1,st.accent,0,0,-15.2)),i.add(C(3.2,1.2,2.2,st.steelDark,0,-.4,.4)),i.add(C(2.5,2.7,7.4,st.black,0,-.6,5.2)),i.add(C(2.7,.7,1.2,st.accent,0,-.6,9));let t=qe(1);return t.position.set(.4,-1.2,5.2),i.add(t),i}function en(i,t=[.2,-4.6,3.6],e=null,n=1){let s=qe(1,n);if(s.position.set(t[0],t[1],t[2]),i.add(s),e){let r=qe(-1,n);r.position.set(e[0],e[1],e[2]),i.add(r)}return i}function Ys(i,t=!0){let e=Ke(),n=new It,s=i==="deagle",r=s?3.8:3.1,o=s?4:3.2,a=s?16:14,l=-3;n.add(C(r,o,a*.46,e.steel,0,1,l-a*.27)),n.add(C(r,o,a*.4,e.steel,0,1,l+a*.3)),n.add(C(r-.45,o-.6,a*.16,e.black,.12,1.15,l-a*.02));for(let u=0;u<5;u++)n.add(C(r+.06,.24,.55,e.steelDark,0,1+o/2-.4,l+a*.1+u*.9));n.add(C(r-.4,1.9,a-2.4,e.steelDark,0,-1.35,l)),n.add(ct(s?1:.82,s?1:.82,1.6,e.black,0,1,l-a/2+.5,12));let c=s?5:4.4,h=s?8.2:7.4;n.add(C(r-.5,h,c,e.poly,0,-5.2,2.2,.22));for(let u=0;u<3;u++)n.add(C(r-.18,.3,c*.62,e.poly,0,-6.8+u*1.5,2.35,.22));if(n.add(C(r-1.7,.8,4,e.steelDark,0,-2.5,-1.2)),n.add(C(.6,1.5,.6,e.steelDark,0,-1.7,-3)),n.add(C(1.1,1.5,1.4,e.black,0,2.9,3.2,-.25)),n.add(C(.85,1,1.1,e.steelDark,0,o/2+1.05,l-a/2+2)),n.add(C(1.5,.85,1,e.steelDark,0,o/2+.95,2.5)),s)for(let u=0;u<3;u++)n.add(C(r-1.3,.4,1.9,e.black,0,o/2+.72,-6+u*3));return t&&en(n,[.1,-3.9,2.8],null,.86),n}function Nx(){let i=new It,t=Ys("usp",!1);t.position.set(-1.9,.2,.4),t.rotation.z=.13;let e=Ys("usp",!1);return e.position.set(1.9,-.2,-.6),e.rotation.z=-.13,i.add(t,e),en(i,[1.7,-4,2.9],[-1.7,-3.6,2.6],.84),i}function Au(){let i=Ke(),t=new It;t.add(C(3.2,2.2,17,i.steel,0,.9,-2)),t.add(C(3,1.8,14,i.steelDark,0,-1.3,-1));for(let e=0;e<12;e++)t.add(C(1,.34,.5,i.steelDark,0,2.25,3.6-e*1.05));t.add(ct(1.95,1.95,13,i.poly,0,.9,-13.5,16));for(let e=0;e<5;e++)t.add(C(3.9,.45,.8,i.black,0,.9,-9.2-e*2.2));return t.add(ct(.62,.62,12,i.steelDark,0,.9,-24,12)),t.add(ct(.95,.85,3.2,i.steel,0,.9,-30.4,12)),t.add(C(.7,2.4,.7,i.steel,0,2.3,-25.6)),t.add(C(2,.55,.7,i.steel,0,1.2,-25.6)),t.add(C(3,7.6,4.4,i.black,0,-5.2,-4,.12)),t.add(C(2.6,6.6,4,i.poly,0,-4.4,3.4,.28)),t.add(ct(1.15,1.15,9.5,i.steelDark,0,-.3,12.5,12)),t.add(C(3,4,3.4,i.poly,0,-.9,17.4)),t.add(C(3.2,.9,2.2,i.black,0,-2.4,18.4)),t.add(C(1.6,.7,1.4,i.steel,0,1.6,6)),t.add(ct(1.1,1.1,1.2,i.steel,1.7,.6,-1.5,10)),en(t,[.2,-4,3.8],[-.4,-1.6,-12.6]),t}function kx(){let i=Ke(),t=new It;return t.add(C(3.4,4.2,26,i.poly,0,.4,-4)),t.add(C(3,2,10,i.poly,0,2.6,-10)),t.add(ct(1.5,1.5,10,i.black,0,3.6,-7,14)),t.add(ct(1.9,1.5,1.6,i.black,0,3.6,-12.2,14)),t.add(ct(1.5,1.9,1.4,i.black,0,3.6,-1.8,14)),t.add(ct(1.35,1.35,.4,i.glass,0,3.6,-12.9,14)),t.add(ct(.72,.72,12,i.steelDark,0,.4,-22,12)),t.add(ct(1.05,.9,3,i.steel,0,.4,-29,12)),t.add(C(2.2,6.4,3,i.poly,0,-4,-12,.1)),t.add(C(2.8,7,4.2,i.black,0,-4.6,2.4,-.12)),t.add(C(2.6,6,4,i.poly,0,-4.4,6.6,.24)),t.add(C(.8,.8,3,i.steel,1.9,1.8,-4)),en(t,[.2,-4.2,6.4],[-.4,-3.4,-11.5]),t}function zx(){let i=Ke(),t=new It;t.add(C(3.2,3,16,i.steel,0,.6,-2)),t.add(C(2.9,1.6,12,i.steelDark,0,-1.5,-1));for(let e=0;e<9;e++)t.add(C(1,.32,.45,i.steelDark,0,2.3,3-e*1));return t.add(ct(1.25,1.25,7,i.black,0,3.1,-6,12)),t.add(ct(1.55,1.25,1.2,i.black,0,3.1,-9.4,12)),t.add(ct(.62,.62,9,i.steelDark,0,.6,-18.5,12)),t.add(ct(.95,.85,2.6,i.steel,0,.6,-24,12)),t.add(ct(.55,.55,12,i.steelDark,1.6,.2,12,10)),t.add(C(2.2,3.4,1.2,i.poly,1.6,.2,18.2)),t.add(Zs(i.black,{segs:3,w:3,h:2.7,d:4.2,y:-2,z:-4,curve:.12})),t.add(C(2.6,6.4,4,i.poly,0,-4.4,3.4,.26)),en(t,[.2,-4.2,3.7],[-.4,-3,-9]),t}function Ox(){let i=Ke(),t=new It;return t.add(C(3.2,3.6,24,i.poly,0,.3,-4)),t.add(C(2.6,1.4,20,i.steelDark,0,2.4,-5)),t.add(C(1.2,2.2,1.6,i.black,0,3.6,-12)),t.add(C(1.2,2.2,1.6,i.black,0,3.6,0)),t.add(C(1.4,1,14,i.black,0,4.8,-6)),t.add(ct(.9,.9,.5,i.glass,0,4.8,-13.2,12)),t.add(ct(.7,.7,13,i.steelDark,0,.3,-21,12)),t.add(ct(1,.9,2.6,i.steel,0,.3,-27.5,12)),t.add(C(2.8,7.2,4,i.black,0,-5,-5,.1)),t.add(C(2.6,6.2,4,i.poly,0,-4.6,3.6,.26)),t.add(C(2.8,3.4,8,i.poly,0,.2,13.5,.06)),en(t,[.2,-4.4,3.9],[-.4,-2.6,-13]),t}function Fx(){let i=Ke(),t=new It;t.add(C(3.4,3.2,19,i.steel,0,.2,-2)),t.add(C(3,1.2,12,i.steelDark,0,2.2,-3)),t.add(ct(1.85,1.85,10,i.poly,0,-.4,-14,14));for(let e=0;e<4;e++)t.add(C(3.6,.5,.8,i.black,0,-.4,-10.6-e*2));return t.add(ct(.66,.66,12,i.steelDark,0,.4,-21,12)),t.add(ct(.95,.85,3,i.steel,0,.4,-28,12)),t.add(C(1.6,1.2,1.4,i.steel,0,2.6,-8)),t.add(C(.8,2.2,.9,i.steel,0,2.4,-24)),t.add(Zs(i.black,{segs:4,w:3.1,h:2.7,d:4.4,y:-2,z:-4.2,curve:.16})),t.add(C(2.6,6.4,4,i.poly,0,-4.6,3.4,.28)),t.add(ct(.75,.75,11,i.steelDark,0,0,12.5,10)),t.add(C(2.4,3.2,1.6,i.poly,0,-.4,18.4)),en(t,[.2,-4.4,3.7],[-.4,-2.8,-11.5]),t}function Bx(){let i=Ke(),t=new It;return t.add(ct(1.75,1.75,16,i.steel,0,.2,-2,16)),t.add(ct(1.55,1.55,7,i.poly,0,.2,-12.5,16)),t.add(ct(.62,.62,10,i.steelDark,0,.2,-18.5,12)),t.add(ct(1.25,1.25,1.6,i.steel,0,.2,-21.5,14)),t.add(ct(.55,.55,8,i.steelDark,1.55,1.6,-6,10)),t.add(Zs(i.black,{segs:3,w:2.4,h:2.8,d:3.6,y:-2.2,z:-5.4,curve:.1})),t.add(C(2.6,6.4,4,i.poly,0,-5,3.2,.26)),t.add(ct(.42,.42,11,i.steelDark,1.4,.4,12,8)),t.add(ct(.42,.42,11,i.steelDark,-1.4,.4,12,8)),t.add(C(3.4,3.6,1.4,i.poly,0,0,18)),t.add(C(1.4,1,1.2,i.steelDark,0,2.2,-3)),en(t,[.2,-3.6,3.4],[-.4,-1.8,-11]),t}function Hx(){let i=Ke(),t=new It;t.add(C(3.4,4.2,24,i.poly,0,0,-3)),t.add(C(3,1.6,16,i.steelDark,0,2.5,-3));for(let e=0;e<8;e++)t.add(C(3.1,.3,.5,i.black,0,2.6,-10+e*2));return t.add(C(3.8,.9,10,i.poly,0,-2,1)),t.add(C(.9,2.6,.9,i.poly,0,-3.2,-3.6)),t.add(C(.9,2.6,.9,i.poly,0,-3.2,5.4)),t.add(ct(.6,.6,8,i.steelDark,0,.2,-18,12)),t.add(C(2.8,4.6,4.4,i.poly,0,-3.4,3.2,.18)),t.add(C(1.2,1,1.2,i.steelDark,0,3.5,-10)),en(t,[.2,-3.6,3.4],[-.4,-1.8,-9]),t}function Gx(){let i=Ke(),t=new It;return t.add(C(3.6,4.4,13,i.steel,0,.2,-2)),t.add(C(3.2,1.2,11,i.steelDark,0,2.6,-2)),t.add(ct(.7,.7,6,i.steelDark,0,.2,-11,12)),t.add(C(.9,.9,2.6,i.steel,0,3.4,-5)),t.add(C(2.8,9,4,i.black,0,-5.6,1.2,.06)),t.add(C(2.4,.7,3.8,i.steelDark,0,-1.8,-2)),t.add(ct(.35,.35,12,i.steelDark,1.3,-.6,10,8)),t.add(ct(.35,.35,12,i.steelDark,-1.3,-.6,10,8)),t.add(C(3,2.6,.9,i.poly,0,-.8,16.4)),t.add(C(1,1.2,1.4,i.steelDark,0,2.9,-8.6)),en(t,[.2,-4.6,1.6],[-.4,-1.6,-8.6]),t}function Vx(){let i=Ke(),t=new It;t.add(C(3.4,3.2,14,i.steel,0,.2,-1)),t.add(C(3.1,1.4,11,i.steelDark,0,2,-1.5)),t.add(ct(.95,.95,18,i.steelDark,0,.5,-17,14)),t.add(ct(.75,.75,15,i.steel,0,-1.4,-15.5,12)),t.add(ct(1.6,1.6,8,i.poly,0,-1.2,-12.5,14));for(let e=0;e<5;e++)t.add(C(3.4,.5,.6,i.black,0,-1.2,-9.4-e*1.5));return t.add(C(.8,1.4,1,i.steel,0,2,-24)),t.add(C(2.6,6.2,4,i.poly,0,-4.2,3.4,.26)),t.add(C(2.8,3.4,10,i.poly,0,-.6,12.5,.08)),t.add(C(3,4,1.6,i.black,0,-1.4,18)),en(t,[.2,-4.2,3.6],[-.4,-3.2,-12]),t}function Wx(){let i=Ke(),t=new It;t.add(C(3.8,4.6,22,i.steel,0,.4,-3)),t.add(C(3.4,1.4,16,i.steelDark,0,3,-4)),t.add(ct(1.5,1.5,14,i.steelDark,0,1,-19,14));for(let e=0;e<5;e++)t.add(C(3.2,.5,1,i.black,0,1,-14-e*2.2));return t.add(ct(.8,.8,14,i.steelDark,0,1,-26,12)),t.add(ct(1.15,1,3,i.steel,0,1,-33,12)),t.add(C(1.4,.9,9,i.steelDark,0,4.2,-6)),t.add(C(4.2,5.2,6,i.black,0,-3,-2)),t.add(C(3,2,2,i.steelDark,0,.6,-1)),t.add(C(.5,.5,10,i.steelDark,-1.7,-3.6,-22,.55,0,.3)),t.add(C(.5,.5,10,i.steelDark,1.7,-3.6,-22,.55,0,-.3)),t.add(C(2.8,6.4,4.2,i.poly,0,-4.4,4,.26)),t.add(C(3,4.2,12,i.poly,0,-1.2,12.5,.06)),t.add(C(3.2,4.6,1.8,i.black,0,-2,18.4)),en(t,[.2,-4.4,4.2],[-.4,-1,-16]),t}function Iu(i){let t=Ke(),e=new It,n=i?22:24,s=i?22:26,r=i?1.55:2.05,o=i?11:15,a=i?3.3:4;if(e.add(C(3.2,3.4,n,i?t.poly:t.steelDark,0,0,-5)),e.add(ct(.8,.8,s,t.steel,0,.55,-5-n/2-s/2+2,14)),e.add(ct(1.15,1.15,3.2,t.black,0,.55,-5-n/2-s+3.2,14)),e.add(ct(r,r,o,t.steelDark,0,a,-4,18)),e.add(ct(r*1.28,r,2.6,t.steel,0,a,-4+o/2+1,18)),e.add(ct(r,r*1.22,2.4,t.steel,0,a,-4-o/2-.9,18)),e.add(ct(r*1.18,r*1.18,.35,t.glass,0,a,-4-o/2-2.1,18)),e.add(C(1.8,2,1.6,t.steelDark,0,a-r-.6,-8)),e.add(C(1.8,2,1.6,t.steelDark,0,a-r-.6,.4)),e.add(C(2.7,4,5,t.black,0,-3.2,-5.6)),e.add(C(2.7,6.2,4,t.poly,0,-5,2.6,.3)),e.add(C(3,2.2,13.5,t.poly,0,-1.2,13,.05)),e.add(C(2.8,2.4,11,t.poly,0,-3.2,14.2,.22)),e.add(C(3.2,4.8,2,t.black,0,-2.4,19.8,.22)),!i){let l=ct(.35,.35,2.6,t.steel,1.8,.9,1,8);l.rotation.z+=.9,e.add(l);let c=new bt(new Fn(.55,10,8),t.steel);c.position.set(2.7,.3,1.4),e.add(c)}return e.add(C(.6,.6,9,t.steelDark,0,-1.4,-18,.14)),en(e,[.2,-4.4,2.8],[-.4,-1.6,-14]),e}var Xx=()=>Iu(!1),qx=()=>Iu(!0);function Yx(){let i=Ke(),t=new It;t.add(C(.85,2.4,9,i.steel,0,0,-5.5)),t.add(C(.85,1.6,6,i.steel,0,.2,-12.5)),t.add(C(.55,.9,3,i.steel,0,.1,-16.5)),t.add(C(.35,1.2,15,i.accent,-.35,-.8,-6.5)),t.add(C(.5,.5,15,i.steelDark,0,1.25,-7)),t.add(C(3,1,1.8,i.steelDark,0,-.3,.6)),t.add(C(2.4,2.6,7.2,i.black,0,-.5,5.2));for(let n=0;n<4;n++)t.add(C(2.5,.5,.8,i.poly,0,-.5,2.6+n*1.7));t.add(C(2.6,.7,1.2,i.steelDark,0,-.5,9));let e=qe(1,.9);return e.position.set(.4,-1.2,5.2),t.add(e),t}var $s={};function Du(i){if($s[i])return $s[i];let t=Ii==="modern",e;switch(i){case"ak47":e=t?Dx():Tu(Px());break;case"m4a1":e=t?Au():xs();break;case"aug":{if(t){e=kx();break}e=xs(),e.add(C(2.4,2,9,st.black,0,3.6,-6)),e.add(C(1.8,1.2,1,st.glass,0,3.6,-10.2));break}case"sg552":{if(t){e=zx();break}e=xs(),e.add(C(1.4,1.6,6,st.black,0,3.2,-2));break}case"famas":e=t?Ox():xs();break;case"galil":e=t?Fx():Tu(st);break;case"awp":e=t?Xx():wu();break;case"scout":e=t?qx():wu();break;case"mp5navy":e=t?Bx():wa("mp5");break;case"p90":e=t?Hx():wa("p90");break;case"mac10":e=t?Gx():wa("mp5");break;case"xm1014":e=t?Vx():wa("p90");break;case"m249":e=t?Wx():xs();break;case"deagle":e=t?Ys("deagle"):Aa("deagle");break;case"usp45":e=t?Ys("usp"):Aa("usp");break;case"glock18":e=t?Ys("glock"):Aa("glock");break;case"elite":e=t?Nx():Aa("usp");break;case"knife":e=t?Yx():Ux();break;default:e=t?Au():xs()}return $s[i]=e,e}function Uu(i){let t=new It,e=i==="awp"||i==="scout",n=i==="deagle"||i==="usp45"||i==="glock18";return i==="knife"?(t.add(C(.8,2.2,13,st.steel,0,0,-6)),t.add(C(2.4,2.6,6,st.black,0,0,4)),t):n?(t.add(C(3.2,3.6,13,st.steelDark,0,0,-3)),t.add(C(2.6,7,4.4,st.black,0,-4.4,2)),t):(t.add(C(4,4,e?26:20,st.black,0,0,-4)),t.add(C(1.8,1.8,e?18:11,st.steelDark,0,.7,e?-24:-18)),e?t.add(C(2.6,2.6,13,st.black,0,3.4,-8)):t.add(C(3,6.5,4,st.black,0,-4.4,0)),t)}var Ks=Math.PI/180,$x=(i,t,e)=>Math.max(t,Math.min(e,i)),Ra=null;function Zx(){if(Ra)return Ra;let i=128,t=document.createElement("canvas");t.width=t.height=i;let e=t.getContext("2d"),n=e.createRadialGradient(i/2,i/2,2,i/2,i/2,i/2);return n.addColorStop(0,"rgba(0,0,0,0.60)"),n.addColorStop(.42,"rgba(0,0,0,0.34)"),n.addColorStop(.78,"rgba(0,0,0,0.10)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,i,i),Ra=new We(t),Ra}var ys=class{constructor(t,{name:e,team:n,isBot:s=!1,id:r=0}){this.game=t,this.id=r,this.name=e,this.team=n,this.isBot=s,this.pos=new w(0,0,0),this.vel=new w,this.yaw=0,this.pitch=0,this.punchPitch=0,this.punchYaw=0,this.eyeHeight=he.eyeStand,this.onGround=!0,this.groundY=0,this.groundMat="sand",this.walking=!1,this.onLadder=!1,this.priming=!1,this.primeT=0,this.ducking=!1,this.duckAmount=0,this.health=100,this.armor=0,this.helmet=!1,this.money=Ot.startMoney,this.alive=!1,this.kills=0,this.deaths=0,this.damageDealt=0,this.assists=0,this.slots={primary:null,secondary:null,melee:Xs("knife")},this.grenades={he:0,flash:0,smoke:0},this.grenadeSel=null,this.hasBomb=!1,this.hasKit=!1,this.curSlot="secondary",this.curGrenade="he",this.zoom=0,this.deployTime=0,this.reloadEnd=0,this.nextFire=0,this.shotCount=0,this.lastShotTime=-10,this.fireHeld=!1,this.triggerQueued=!1,this.footTimer=0,this.bobTime=0,this.lastDamageTime=-10,this.swingT=0,this.attacker=null,this.plantProgress=0,this.defuseProgress=0,this.spawnProtect=0,this.flashAmount=0,this.mesh=null,this.viewModel=null,this.muzzleLight=null}spawnAt(t){this.pos.set(t.x,0,t.z),this.vel.set(0,0,0),this.yaw=t.yaw,this.pitch=0,this.punchPitch=0,this.punchYaw=0,this.alive=!0,this.health=100,this.onGround=!0,this.groundY=0,this.priming=!1,this.primeT=0,this.onLadder=!1,this.ducking=!1,this.duckAmount=0,this.zoom=0,this.shotCount=0,this.plantProgress=0,this.defuseProgress=0,this.flashAmount=0,this.hasBomb=!1,this.curSlot=this.slots.primary?"primary":this.slots.secondary?"secondary":"melee",this.mesh&&(this.mesh.visible=!0),this.viewModel&&(this.viewModel.visible=!this.isBot),this.syncMesh()}resetInventory(){this.slots.primary=null,this.slots.secondary=null,this.grenades={he:0,flash:0,smoke:0},this.hasKit=!1,this.hasBomb=!1,this.armor=0,this.helmet=!1,this.grenadeSel=null}giveWeapon(t){let e=Jt[t];if(!e)return;let n=Xs(t);e.slot===1?(this.slots.primary=n,this.curSlot="primary"):e.slot===2&&(this.slots.secondary=n,this.curSlot="secondary"),this.deployTime=.4,this.reloadEnd=0,this.zoom=0,Vs(t)}get weapon(){return this.curSlot==="primary"?this.slots.primary:this.curSlot==="secondary"?this.slots.secondary:this.curSlot==="melee"?this.slots.melee:null}get weaponDef(){let t=this.weapon;return t?Jt[t.id]:null}maxSpeedNow(){let t=this.weaponDef,e=t?t.speed:250;return this.curSlot==="grenade"&&(e=250),this.hasBomb&&this.curSlot!=="melee"&&(e*=.98),e}eyeY(){return this.pos.y+this.eyeHeight}update(t,e){this.swingT>0&&(this.swingT=Math.max(0,this.swingT-t*3.1));let n=this.ducking?he.eyeDuck:he.eyeStand;if(this.eyeHeight+=(n-this.eyeHeight)*Math.min(1,t*12),this.duckAmount+=((this.ducking?1:0)-this.duckAmount)*Math.min(1,t*14),this.flashAmount>0&&(this.flashAmount=Math.max(0,this.flashAmount-t*.42)),!this.alive){this.syncMesh();return}if(this.move(t,e),this.updateWeapon(t),this.priming){this.primeT+=t;let o=ha[this.grenadeSel]||3;this.primeT>=o&&(this.priming=!1,this.primeT=0,this.throwGrenade(o))}let s=Math.exp(-t*(this.game.time-this.lastShotTime>.25?7.5:2.4));this.punchPitch*=s,this.punchYaw*=s,Math.abs(this.punchPitch)<.01&&(this.punchPitch=0),Math.abs(this.punchYaw)<.01&&(this.punchYaw=0);let r=Math.hypot(this.vel.x,this.vel.z);this.onGround&&r>90&&!this.walking?(this.footTimer-=t*(r/250),this.footTimer<=0&&(this.footTimer=.42,Il(this.pos,this.game.listenerPos(),this.groundMat||"sand"))):this.footTimer=Math.min(this.footTimer,.2),this.pos.y<-400&&this.game.onPlayerFell(this),this.syncMesh()}move(t,e){let n=e.forward||0,s=e.side||0;this.ducking=!!e.duck,this.walking=!!e.walk;let r=Math.sin(this.yaw),o=Math.cos(this.yaw),a=-r*n+o*s,l=-o*n-r*s,c=Math.hypot(a,l);c>.001&&(a/=c,l/=c);let h=this.game.map.ladderAt(this.pos.x,this.pos.z,this.pos.y);if(this.onLadder=!!h,h){let p=e.jump&&!this.jumpHeld;this.jumpHeld=!!e.jump;let g=n>.1?1:n<-.1?-1:0;this.vel.y=p?he.jumpVel*.75:g*he.maxLadderSpeed*.55,g>0&&this.pos.y>=(h.y1||400)-6&&(this.vel.y=0),(p||g>0)&&(this.onGround=!1),this.vel.x*=.12,this.vel.z*=.12,s&&(this.vel.x+=Math.cos(this.yaw)*s*45,this.vel.z+=-Math.sin(this.yaw)*s*45),this.integrate(t);return}let u=this.maxSpeedNow();this.ducking&&(u*=he.duckMul),e.walk&&(u*=he.walkMul),!this.onGround&&this.zoom>0&&(u=Math.min(u,100));let f=c>.001?u:0;if(this.onGround){let p=Math.hypot(this.vel.x,this.vel.z);if(p>.1){let x=Math.max(p,he.stopSpeed)*he.friction*t,d=Math.max(0,p-x)/p;this.vel.x*=d,this.vel.z*=d}}f>0&&(this.onGround?Nu(this,a,l,f,he.accel,t):Nu(this,a,l,Math.min(f,he.airWishSpeed),he.airAccel,t)),e.jump&&this.onGround&&!this.jumpHeld&&(this.vel.y=he.jumpVel,this.onGround=!1,this.game.stats.jumps++),this.jumpHeld=!!e.jump,this.onGround||(this.vel.y-=he.gravity*t,this.vel.y<-2e3&&(this.vel.y=-2e3)),this.integrate(t)}integrate(t){let e=this.game.map,n=he.radius,s=this.ducking?he.duckHeight:he.standHeight;this.pos.x+=this.vel.x*t,this.resolveAxis("x",n,s),this.pos.z+=this.vel.z*t,this.resolveAxis("z",n,s);let r=this.onGround?he.stepHeight:this.ducking?he.duckJumpBonus:0,o=e.supportHeightAt(this.pos.x,this.pos.z,n,this.pos.y+r),a=o.y;if(this.groundMat=o.mat,this.groundY=a,this.pos.y+=this.vel.y*t,this.vel.y<=0&&this.pos.y<=a?(!this.onGround&&this.vel.y<-260&&Il(this.pos,this.game.listenerPos(),this.groundMat||"sand"),this.pos.y=a,this.vel.y=0,this.onGround=!0):this.onGround&&(this.pos.y-a<=he.stepHeight?(this.pos.y=a,this.vel.y=0):this.onGround=!1),!e.isFloorAt(this.pos.x,this.pos.z)){let l=this.findNearestFloor(this.pos.x,this.pos.z);l&&(this.pos.x=l.x,this.pos.z=l.z,this.vel.x=0,this.vel.z=0)}}findNearestFloor(t,e){let n=this.game.map,{cx:s,cz:r}=n.worldToTile(t,e);for(let o=1;o<=4;o++)for(let a=-o;a<=o;a++)for(let l=-o;l<=o;l++)if(n.isFloorTile(s+l,r+a))return n.tileToWorld(s+l,r+a);return null}resolveAxis(t,e,n){let s=this.game.map.colliders,r=this.pos.x,o=this.pos.z,a=this.pos.y,l=this.onGround?he.stepHeight:this.ducking?he.duckJumpBonus:0;for(let c=0;c<s.length;c++){let h=s[c];if(!(h.y1<=a+l)&&!(h.y0>a+n||h.y1<a+2)&&!(r+e<=h.x0||r-e>=h.x1)&&!(o+e<=h.z0||o-e>=h.z1)){t==="x"?(this.pos.x=r-(h.x0-e)<=h.x1+e-r?h.x0-e-.01:h.x1+e+.01,this.vel.x=0):(this.pos.z=o-(h.z0-e)<=h.z1+e-o?h.z0-e-.01:h.z1+e+.01,this.vel.z=0);return}}}currentAmmo(){let t=this.weapon;return t?t.ammo:0}reserveAmmo(){let t=this.weapon;return t?t.reserve:0}updateWeapon(t){this.deployTime>0&&(this.deployTime=Math.max(0,this.deployTime-t)),this.reloadEnd>0&&this.game.time>=this.reloadEnd&&this.finishReload(),this.game.time-this.lastShotTime>.45&&(this.shotCount=0);let e=this.weapon;if(!e)return;let n=Jt[e.id];this.fireHeld&&n&&n.auto&&this.curSlot!=="grenade"&&this.game.time>=this.nextFire&&this.tryFire()}canFire(){return!(!this.alive||this.game.round.phase==="freeze"||this.game.round.phase==="over"||this.deployTime>0||this.reloadEnd>0||this.game.time<this.nextFire)}tryFire(){if(!this.canFire())return;if(this.curSlot==="grenade"){this.throwGrenade();return}let t=this.weapon;if(!t)return;let e=Jt[t.id];if(e.cls==="melee"){this.knifeAttack();return}if(t.ammo<=0){this.game.settings.autoReload&&t.reserve>0?this.reload():Pi();return}t.ammo--,this.nextFire=this.game.time+60/e.rpm,this.lastShotTime=this.game.time,this.shotCount++;let[n,s]=Yh(e,this.shotCount);this.punchPitch+=n,this.punchYaw-=s;let r=new w(this.pos.x,this.eyeY(),this.pos.z),o=this.aimDir(),a=this.computeSpread(e),l=ku(o,a);this.game.lastShotDir=l;let c=e.pellets||1;if(c===1)Nl(this.game,this,r,l,e);else for(let h=0;h<c;h++)Nl(this.game,this,r,ku(o,a),e);Oe.muzzle(this,e),Ll(e.sound,this.pos,this.game.listenerPos()),e.scope&&this.zoom>0&&(this.zoom=0,Dl(!1)),t.ammo===0&&t.reserve>0&&this.game.settings.autoReload&&this.reload()}computeSpread(t){let e=Math.hypot(this.vel.x,this.vel.z),n=t.spread;return n+=e/250*t.moveSpread,this.onGround||(n+=t.moveSpread*.9),this.ducking&&(n*=.62),this.zoom>0&&(n*=.05),n+=Math.min(this.shotCount,12)*t.kick*.13,n*Ks}aimDir(){let t=this.yaw+this.punchYaw*Ks,e=$x(this.pitch+this.punchPitch*Ks,-89*Ks,89*Ks),n=Math.cos(e);return new w(-Math.sin(t)*n,Math.sin(e),-Math.cos(t)*n)}knifeAttack(){let t=Jt.knife;this.nextFire=this.game.time+60/t.rpm,this.lastShotTime=this.game.time,this.swingT=1,Ll("knife",this.pos,this.game.listenerPos());let e=new w(this.pos.x,this.eyeY(),this.pos.z),n=this.aimDir(),s=this.game.tracePlayers(e,n,t.range,this);if(s&&!s.friendly){let r=t.dmg;Ws(this.game,s.player,this,r,"chest",t),Oe.blood(s.point,6),pu(s.point,this.game.listenerPos())}}reload(){let t=this.weapon;if(!t)return;let e=Jt[t.id];!e||e.cls==="melee"||this.reloadEnd>0||t.ammo>=e.mag||t.reserve<=0||(this.reloadEnd=this.game.time+e.reload,this.zoom=0,mu(t.id))}finishReload(){this.reloadEnd=0;let t=this.weapon;if(!t)return;let n=Jt[t.id].mag-t.ammo,s=Math.min(n,t.reserve);t.ammo+=s,t.reserve-=s}switchSlot(t){if(this.alive&&(this.priming=!1,this.primeT=0,!(t==="primary"&&!this.slots.primary)&&!(t==="secondary"&&!this.slots.secondary))){if(t==="grenade"){let e=["he","flash","smoke"].filter(s=>this.grenades[s]>0);if(!e.length)return;let n=e.indexOf(this.grenadeSel);this.grenadeSel=e[(n+1)%e.length],this.curSlot="grenade",this.deployTime=.35,this.zoom=0,Vs(null);return}this.curSlot!==t&&(this.curSlot=t,this.deployTime=.4,this.reloadEnd=0,this.zoom=0,Vs(this.weaponDef?this.weaponDef.id:null))}}toggleZoom(){let t=this.weaponDef;!t||!t.scope||(this.zoom=(this.zoom+1)%3,Dl(this.zoom>0))}throwGrenade(t=0){let e=this.grenadeSel;if(!e||this.grenades[e]<=0)return;this.grenades[e]--,this.nextFire=this.game.time+.9,this.deployTime=.5;let n=new w(this.pos.x,this.eyeY()-4,this.pos.z),s=this.aimDir(),r=new ba(this.game,this,e,n,s);r.fuse=Math.max(0,r.fuse-t),this.game.grenades.push(r),gu(),this.grenades[e]===0&&(this.grenadeSel=null,this.curSlot=this.slots.primary?"primary":this.slots.secondary?"secondary":"melee",Vs(this.weaponDef?this.weaponDef.id:null))}beginPrime(){let t=this.grenadeSel;!t||this.grenades[t]<=0||(this.priming=!0,this.primeT=0)}releaseGrenade(){if(!this.priming)return;this.priming=!1;let t=this.primeT;this.primeT=0,this.throwGrenade(t)}pickUp(t){let e=Jt[t];e&&(e.slot===1?this.slots.primary=Xs(t):this.slots.secondary=Xs(t),this.curSlot=e.slot===1?"primary":"secondary",this.deployTime=.4,ms())}takeDamage(t,e,n,s){if(!this.alive)return 0;let r=t,o=Jt[s],a=o&&o.pen!=null?o.pen:.72;if(this.armor>0&&n!=="leg"&&!(n==="head"&&!this.helmet)){let c=r*a,h=(r-c)*.5;h>this.armor?(h=this.armor/a,r=Math.max(0,r-h),this.armor=0):(this.armor-=h,r=c)}return r=Math.round(r),this.health-=r,this.lastDamageTime=this.game.time,this.attacker=e,e&&e!==this&&(e.damageDealt+=Math.min(r,this.health+r)),this.health<=0&&(this.health=0,this.alive=!1,this.game.onPlayerKilled(this,e,s,n==="head")),r}buildMesh(t){let e=Lu(this.team);this.mesh=e.group,this._helmetMesh=e.helmet,this._gunMesh=e.gun,this._legL=e.legL,this._kneeL=e.kneeL,this._legR=e.legR,this._kneeR=e.kneeR,this._armL=e.armL,this._elbowL=e.elbowL,this._armR=e.armR,this._elbowR=e.elbowR,this._idleArmL=e.idleArmL,this._idleArmR=e.idleArmR,t.add(this.mesh);let n=new bt(new cn(1,1),new tn({map:Zx(),transparent:!0,depthWrite:!1,opacity:.5,polygonOffset:!0,polygonOffsetFactor:-2}));n.rotation.x=-Math.PI/2,n.position.y=1.2,n.renderOrder=2,t.add(n),this._shadow=n,this.syncMesh()}syncMesh(){if(!this.mesh)return;this.mesh.visible=this.alive&&!this.isLocal,this.mesh.position.set(this.pos.x,this.pos.y,this.pos.z),this.mesh.rotation.y=this.yaw;let t=this.duckAmount;if(this.mesh.scale.y=1-t*.34,this._shadow){let r=this.alive&&!this.isLocal;if(this._shadow.visible=r,r){let o=this.groundY||0,a=Math.max(0,this.pos.y-o),l=Math.max(.3,1-a/240);this._shadow.position.set(this.pos.x,o+1.2,this.pos.z),this._shadow.scale.setScalar(48*l),this._shadow.material.opacity=.5*l}}this._gunMesh&&(this._gunMesh.visible=this.curSlot!=="melee");let e=Math.hypot(this.vel.x,this.vel.z),n=this.alive&&e>30&&this.onGround,s=0;n&&(s=Math.sin(this.game.time*(7+e*.016))*Math.min(.62,e/380)),this._legL&&(this._legL.rotation.x=s,this._legR.rotation.x=-s,this._kneeL.rotation.x=-Math.max(0,-s)*1.25,this._kneeR.rotation.x=-Math.max(0,s)*1.25,this._armL.rotation.x=this._idleArmL-s*.3,this._armR.rotation.x=this._idleArmR+s*.22)}hitboxes(){let t=he.standHeight*(1-this.duckAmount*.5),e=this.pos.y;return[{group:"head",y0:e+t-13,y1:e+t,r:7},{group:"chest",y0:e+t*.52,y1:e+t-13,r:13},{group:"stomach",y0:e+t*.34,y1:e+t*.52,r:12},{group:"leg",y0:e,y1:e+t*.34,r:10}]}};function Nu(i,t,e,n,s,r){let o=i.vel.x*t+i.vel.z*e,a=n-o;if(a<=0)return;let l=s*r*n;l>a&&(l=a),i.vel.x+=t*l,i.vel.z+=e*l}function ku(i,t){if(t<=0)return i.clone();let e=Math.abs(i.y)>.99?new w(1,0,0):new w(0,1,0),n=new w().crossVectors(i,e).normalize(),s=new w().crossVectors(n,i).normalize(),r=Math.random()*Math.PI*2,o=Math.sqrt(Math.random())*t;return i.clone().addScaledVector(n,Math.cos(r)*o).addScaledVector(s,Math.sin(r)*o).normalize()}var Ca=Math.PI/180,Kx=(i,t,e)=>Math.max(t,Math.min(e,i)),Js=class{constructor(t,e,n=.55){this.game=t,this.p=e,this.skill=n,this.path=null,this.pathIdx=0,this.goal=null,this.goalKind=null,this.target=null,this.targetVisible=!1,this.lastSeen=null,this.lastSeenTime=-99,this.reactionAt=0,this.aimError=0,this.burstUntil=0,this.burstPauseUntil=0,this.strafeDir=0,this.strafeUntil=0,this.repathAt=0,this.stuckTimer=0,this.lastPos=new w,this.crouchUntil=0,this.decisionAt=0,this.wanderTarget=null,e.botOnFlashed=s=>{this.aimError=Math.max(this.aimError,s*18),this.targetVisible=!1,this.target=null,this.lastSeenTime=-99}}canSee(t){if(!t.alive)return!1;let e=new w(this.p.pos.x,this.p.eyeY(),this.p.pos.z),n=new w(t.pos.x,t.pos.y+52,t.pos.z),s=e.distanceTo(n);if(s>2600)return!1;let r=n.clone().sub(e).normalize(),o=new w(-Math.sin(this.p.yaw),0,-Math.cos(this.p.yaw)),a=new w(r.x,0,r.z).normalize();return!(o.dot(a)<.25&&s>350||!this.game.map.lineOfSight(e,n)||this.game.fx.blocksLineOfSight(e,n))}update(t){let e=this.p;if(!e.alive){e.fireHeld=!1;return}let n={forward:0,side:0,jump:!1,duck:!1,walk:!1};e.wantUse=!1;let s=this.game.round.phase;if(s==="freeze"||s==="over"){e.fireHeld=!1,e.update(t,n);return}if(e.flashAmount>.7){this.strafeMove(t,n,(Math.random()-.5)*.6),e.update(t,n);return}this.perceive(t),this.think(t,n),e.update(t,n)}perceive(t){let e=this.p,n=null,s=1/0;for(let r of this.game.players){if(!r.alive||r.team===e.team||!this.canSee(r))continue;let a=e.pos.distanceTo(r.pos)+(r.health>0?0:500)-(r===this.target?120:0);a<s&&(s=a,n=r)}n?(n!==this.target&&(this.target=n,this.reactionAt=this.game.time+(.46-this.skill*.24)*(.75+Math.random()*.7),this.aimError=(3.6-this.skill*2.3)*(.65+Math.random()*.85)),this.targetVisible=!0,this.lastSeen=new w(n.pos.x,n.pos.y+52,n.pos.z),this.lastSeenTime=this.game.time,(!this._calledOut||this.game.time-this._calledOut>3)&&(this._calledOut=this.game.time,this.game.botCallout(this,n))):(this.targetVisible=!1,this.target&&this.game.time-this.lastSeenTime>1.2&&(this.target=null))}think(t,e){let n=this.p,r=this.game.round.bomb;if((!this.goalKind||this.game.time>this.decisionAt)&&(this.decisionAt=this.game.time+2.5,this.chooseGoal()),this.target&&this.target.alive){let o=this.target,a=n.pos.distanceTo(o.pos);n.fireHeld=!1,n.weapon&&n.weapon.ammo===0&&n.weapon.reserve>0&&n.reloadEnd<=0&&n.reload();let l=new w(n.pos.x,n.eyeY(),n.pos.z),h=new w(o.pos.x,o.pos.y+(this.skill>.6?58:46),o.pos.z).clone().sub(l),u=Math.atan2(-h.x,-h.z),f=Math.asin(Kx(h.clone().normalize().y,-1,1)),p=(3.6+this.skill*7.5)*(this.targetVisible?1:.45),g=(Math.random()-.5)*2*this.aimError*Ca,x=(Math.random()-.5)*2*this.aimError*.7*Ca;n.yaw=zu(n.yaw,u+g,p*t),n.pitch=Jx(n.pitch,f+x,p*.75*t),a>1700?(this.moveToward(this.lastSeen||o.pos,e,1),this.holdTime=0):a>850?(this.holdTime=(this.holdTime||0)+t,this.holdTime<1.5?(e.forward=0,e.side=0):(this.strafeMove(t,e,.7),this.holdTime>2.8&&(this.holdTime=0))):a>400?(this.strafeMove(t,e,.6),this.holdTime=0):(this.strafeMove(t,e,.85),this.holdTime=0),a>900&&this.game.time>this.crouchUntil&&Math.random()<.015&&(this.crouchUntil=this.game.time+.9),e.duck=this.game.time<this.crouchUntil;let m=n.weaponDef;if(this.targetVisible&&this.game.time>this.reactionAt){let d=Math.abs(Ol(n.yaw,u))<(5+this.skill*4)*Ca,v=Math.abs(Ol(n.yaw,u))<20*Ca,y=Math.hypot(n.vel.x,n.vel.z),T=a<500||y<130,L=n.weapon&&(n.weapon.ammo>0||n.weapon.reserve>0);if(d&&v&&T&&L&&a<2100&&n.curSlot!=="grenade"&&this.game.time>this.burstPauseUntil){if(this.game.time>this.burstUntil){let A=.12+Math.random()*(.18+this.skill*.4);this.burstUntil=this.game.time+A,this.burstPauseUntil=this.burstUntil+.08+Math.random()*(.5-this.skill*.25)}n.fireHeld=!0,(!m||!m.auto)&&n.tryFire()}}return}if(n.fireHeld=!1,this.holdTime=0,e.duck=this.game.time<this.crouchUntil,n.team==="T"&&n.hasBomb)if(this.game.map.siteAt(n.pos.x,n.pos.z)){n.wantUse=!0,e.forward=0,e.side=0,this.moveToward(null,e,0);return}else this.goalKind!=="site"&&(this.goalKind="site",this.goal=this.pickSite(),this.repath());if(n.team==="CT"&&r.state==="planted"){if(Math.hypot(r.pos.x-n.pos.x,r.pos.z-n.pos.z)<60){n.wantUse=!0,e.forward=0,e.side=0;return}this.goalKind="defuse",this.goal=r.pos,this.followPathTo(r.pos,e,t);return}if(n.team==="T"&&!n.hasBomb&&r.state==="dropped"){this.goalKind="pickup",this.goal=r.pos.clone(),this.followPathTo(this.goal,e,t);return}if(this.lastSeen&&this.game.time-this.lastSeenTime<4){this.moveToward(this.lastSeen,e,.8);return}this.goal?Math.hypot(this.goal.x-n.pos.x,this.goal.z-n.pos.z)<160&&(this.goalKind==="defend"||this.goalKind==="site")?(e.forward=0,e.side=0,n.yaw+=Math.sin(this.game.time*.55+this.skill*9)*t*.5):this.followPathTo(this.goal,e,t):e.forward=0}chooseGoal(){let t=this.p,e=this.game.round;if(t.team==="T")this.goalKind="site",this.goal=this.pickSite();else{this.goalKind="defend";let s=this.game.players.filter(r=>r.team==="CT"&&r.alive).indexOf(t);this.goal=s%2===0?this.siteCenter("A"):this.siteCenter("B"),e.bomb.state==="planted"&&(this.goal=e.bomb.pos)}this.repath()}pickSite(){if(this.game.round.tBombsite)return this.siteCenter(this.game.round.tBombsite);let t=Math.random()<.5?"A":"B";return this.game.round.tBombsite=t,this.siteCenter(t)}siteCenter(t){let e=this.game.map.sites[t];return new w((e.x0+e.x1)/2,0,(e.z0+e.z1)/2)}repath(){this.goal&&(this.path=this.game.map.findPath(this.p.pos,this.goal),this.pathIdx=0,this.repathAt=this.game.time+2)}followPathTo(t,e,n){let s=this.p;if((!this.path||this.game.time>this.repathAt)&&this.repath(),!this.path||this.path.length===0){this.moveToward(t,e,1);return}for(;this.pathIdx<this.path.length;){let o=this.path[this.pathIdx];if(Math.hypot(o.x-s.pos.x,o.z-s.pos.z)<55)this.pathIdx++;else break}let r=this.path[this.pathIdx]||t;this.moveToward(r,e,1),this.checkStuck(n)}checkStuck(t){let e=this.p,n=Math.hypot(e.pos.x-this.lastPos.x,e.pos.z-this.lastPos.z);this.lastPos.set(e.pos.x,0,e.pos.z),n<.6?(this.stuckTimer+=t,this.stuckTimer>.5&&(this.path=null,this.repathAt=0,this.stuckTimer=0)):this.stuckTimer=0}moveToward(t,e,n=1){if(!t){e.forward=0,e.side=0;return}let s=this.p,r=t.x-s.pos.x,o=t.z-s.pos.z,a=Math.hypot(r,o)||1,l=r/a*n,c=o/a*n,h=Math.sin(s.yaw),u=Math.cos(s.yaw);if(e.forward=l*-h+c*-u,e.side=l*u+c*-h,!this.target){let f=Math.atan2(-r,-o);s.yaw=zu(s.yaw,f,6.5*.016)}}strafeMove(t,e,n){let s=this.p;this.game.time>this.strafeUntil&&(this.strafeUntil=this.game.time+.35+Math.random()*.6,this.strafeDir=Math.random()<.5?-1:1),e.side=this.strafeDir*n,e.forward=(Math.random()<.25?.6:0)-(Math.random()<.1?.5:0)}};function Ol(i,t){let e=i-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function zu(i,t,e){let n=Ol(t,i);return Math.abs(n)<=e?t:i+Math.sign(n)*e}function Jx(i,t,e){return Math.abs(t-i)<=e?t:i+Math.sign(t-i)*e}var Pa=class{constructor(t){this.game=t,this.phase="idle",this.time=0,this.roundNum=0,this.scoreCT=0,this.scoreT=0,this.lossStreak={CT:0,T:0},this.bomb={state:"carried",pos:new w,carrier:null,timer:0,beep:0,planter:null,defuser:null,site:null},this.lastResult=null,this.tBombsite=null,this.bombMesh=null,this.winTarget=Ot.winRounds,this.overtime=0,this.otRoundsPlayed=0}startMatch(){this.roundNum=0,this.scoreCT=0,this.scoreT=0,this.lossStreak={CT:0,T:0},this.winTarget=Ot.winRounds,this.overtime=0,this.otRoundsPlayed=0;for(let t of this.game.players)t.money=Ot.startMoney,t.kills=0,t.deaths=0,t.damageDealt=0,t.resetInventory(),t.giveWeapon(t.team==="T"?"glock18":"usp45");this.startRound(!0)}startRound(t=!1){this.roundNum++,this.roundTimeLeft=Ot.roundTime,this.phase="freeze",this.time=Ot.freezeTime,this.tBombsite=null,this.lastResult=null,this.bomb.state="carried",this.bomb.timer=0,this.bomb.carrier=null,this.bomb.planter=null,this.bomb.defuser=null,this.bomb.beep=0,this.bombMesh&&(this.game.scene.remove(this.bombMesh),this.bombMesh=null);let e={T:0,CT:0},n=this.game.players.slice().sort(()=>Math.random()-.5);for(let r of n){let o=this.game.map.spawns[r.team],a=o[e[r.team]++%o.length];r.alive||(r.resetInventory(),r.giveWeapon(r.team==="T"?"glock18":"usp45")),r.spawnAt(a),r.plantProgress=0,r.defuseProgress=0,r.wantUse=!1,r.fireHeld=!1,r.flashAmount=0,r.curSlot=r.slots.primary?"primary":r.slots.secondary?"secondary":"melee",r.deployTime=.6}let s=this.game.players.filter(r=>r.team==="T");if(s.length){let r=s[Math.floor(Math.random()*s.length)];r.hasBomb=!0,this.bomb.carrier=r}this.game.botsBuy(),this.game.localPlayer&&this.game.localPlayer.team==="T"&&this.game.localPlayer.hasBomb&&this.game.hud.toast("\u4F60\u643A\u5E26\u4E86 C4 \u2014\u2014 \u5230 A / B \u70B9\u6309 E \u5B89\u653E"),Su(),this.game.hud.announce(`\u7B2C ${this.roundNum} \u56DE\u5408 \xB7 \u51C6\u5907`)}endRound(t,e){if(this.phase==="over"||this.phase==="matchend")return;this.phase="over",this.time=Ot.roundEndDelay,this.lastResult={winner:t,reason:e},t==="CT"?this.scoreCT++:t==="T"&&this.scoreT++;let n=t,s=t==="CT"?"T":"CT",r=this.bomb.state==="planted"||this.bomb.state==="defused"||this.bomb.state==="exploded";for(let a of this.game.players){let l=0;if(a.team===n)l+=e==="bomb"?Ot.winBombReward:Ot.winReward,this.lossStreak[a.team]=0;else{let c=this.lossStreak[a.team]=Math.min(5,this.lossStreak[a.team]+1);l+=Math.min(Ot.lossMax,Ot.lossBase+(c-1)*Ot.lossStep),a.team==="T"&&r&&(l+=Ot.plantBonus)}a.money=Math.min(Ot.maxMoney,a.money+l)}let o={elim:t==="CT"?"\u53CD\u6050\u7CBE\u82F1\u83B7\u80DC \xB7 \u5168\u6B7C\u654C\u4EBA":"\u6050\u6016\u5206\u5B50\u83B7\u80DC \xB7 \u5168\u6B7C\u654C\u4EBA",bomb:"\u6050\u6016\u5206\u5B50\u83B7\u80DC \xB7 \u76EE\u6807\u5DF2\u6467\u6BC1",defuse:"\u53CD\u6050\u7CBE\u82F1\u83B7\u80DC \xB7 \u70B8\u5F39\u5DF2\u62C6\u9664",time:"\u53CD\u6050\u7CBE\u82F1\u83B7\u80DC \xB7 \u65F6\u95F4\u8017\u5C3D"}[e]||`${t} \u83B7\u80DC`;this.game.hud.roundEnd(t,o,this.scoreCT,this.scoreT),this.game.hud.setProgress(null,0)}nextRound(){if(this.scoreCT>=this.winTarget||this.scoreT>=this.winTarget){this.finishMatch();return}if(!this.overtime&&this.roundNum>=Ot.maxRounds){if(this.scoreCT===this.scoreT){this.startOvertime();return}this.finishMatch();return}if(this.overtime){if(this.otRoundsPlayed+=1,this.otRoundsPlayed>=Ot.overtimeHalf*2){this.startOvertime();return}this.otRoundsPlayed===Ot.overtimeHalf&&this.swapSides(),this.startRound();return}if(this.roundNum===Ot.halftimeRound){this.halftime();return}this.startRound()}finishMatch(){this.phase="matchend";let t=this.scoreCT>this.scoreT?"CT":(this.scoreT>this.scoreCT,"T");this.game.hud.matchEnd(t,this.scoreCT,this.scoreT),this.game.localPlayer.fireHeld=!1}swapSides(){for(let t of this.game.players)t.team=t.team==="T"?"CT":"T",t.money=Math.min(Ot.maxMoney,t.money),t.resetInventory(),t.giveWeapon(t.team==="T"?"glock18":"usp45"),t.mesh&&(this.game.scene.remove(t.mesh),t._shadow&&(this.game.scene.remove(t._shadow),t._shadow.geometry.dispose(),t._shadow.material.dispose(),t._shadow=null),t.buildMesh(this.game.scene));this.lossStreak={CT:0,T:0}}halftime(){this.swapSides();for(let t of this.game.players)t.money=Ot.startMoney;this.game.hud.announce("\u534A\u573A\u7ED3\u675F \xB7 \u4EA4\u6362\u9635\u8425"),this.startRound()}startOvertime(){this.overtime+=1,this.otRoundsPlayed=0,this.winTarget=Math.max(this.scoreCT,this.scoreT)+Ot.overtimeWin,this.swapSides();for(let t of this.game.players)t.money=Ot.overtimeMoney;this.game.hud.announce(`\u52A0\u65F6\u8D5B ${this.overtime} \xB7 \u5148\u5230 ${Ot.overtimeWin} \u5206`),this.startRound()}update(t){let e=this.game;if(this.phase!=="idle"){if(this.phase==="freeze"){this.time-=t,this.time<=0&&(this.phase="live",this.time=Ot.roundTime,e.hud.announce("\u5F00\u59CB\uFF01")),this.updateBomb(t);return}if(this.phase==="live"){this.time-=t,this.updateBomb(t),this.updateObjectives(t),this.phase==="live"&&this.checkWin();return}this.phase==="over"&&(this.time-=t,this.updateBomb(t),this.time<=0&&this.nextRound())}}updateObjectives(t){let e=this.game,n=e.localPlayer,s=null;for(let r of e.players){if(!r.alive){r.plantProgress=0;continue}if(r.team==="T"&&r.hasBomb&&r.wantUse&&r.onGround){let o=e.map.siteAt(r.pos.x,r.pos.z);if(o&&this.bomb.state==="carried"){if(r.plantProgress+=t,r.plantProgress>=Ot.plantTime){this.plantBomb(r,o);continue}r===n&&(s={label:"\u6B63\u5728\u5B89\u653E C4",ratio:r.plantProgress/Ot.plantTime});continue}}r.wantUse||(r.plantProgress=0)}if(this.bomb.state==="planted")for(let r of e.players){if(!r.alive||r.team!=="CT"){r.defuseProgress=0;continue}let o=Math.hypot(this.bomb.pos.x-r.pos.x,this.bomb.pos.z-r.pos.z);if(r.wantUse&&o<70){let a=r.hasKit?Ot.defuseKitTime:Ot.defuseTime;if(r.defuseProgress+=t,r.defuseProgress>=a){this.defuseBomb(r);return}r===n&&(s={label:r.hasKit?"\u6B63\u5728\u62C6\u9664\uFF08\u62C6\u5F39\u5668\uFF09":"\u6B63\u5728\u62C6\u9664 C4",ratio:r.defuseProgress/a})}else r.wantUse||(r.defuseProgress=0)}else for(let r of e.players)r.defuseProgress=0;e.hud.setProgress(s?s.label:null,s?s.ratio:0)}plantBomb(t,e){this.bomb.state="planted",this.bomb.pos.copy(t.pos),this.bomb.pos.y=4,this.bomb.timer=Ot.bombTime,this.bomb.site=e,this.bomb.planter=t,t.hasBomb=!1,t.plantProgress=0,this.game.hud.setProgress(null,0),this.game.hud.announce(`C4 \u5DF2\u5728 ${e} \u70B9\u5B89\u653E`),this.game.hud.toast(`${e} \u70B9\u70B8\u5F39\u5DF2\u5B89\u653E`);let n=new bt(new ke(16,10,24),new pe({color:2829099}));n.position.copy(this.bomb.pos),this.game.scene.add(n),this.bombMesh=n,bu()}defuseBomb(t){this.bomb.state="defused",this.game.hud.setProgress(null,0),this.bombMesh&&(this.game.scene.remove(this.bombMesh),this.bombMesh=null),t.money=Math.min(Ot.maxMoney,t.money+Ot.defuseBonus),this.game.hud.announce("\u70B8\u5F39\u5DF2\u62C6\u9664\uFF01"),this.endRound("CT","defuse")}updateBomb(t){let e=this.bomb;if(e.state==="planted"){e.timer-=t,e.beep-=t;let n=Math.max(.08,e.timer/Ot.bombTime*1);if(e.beep<=0&&(e.beep=n,_u(e.timer<10),this.bombMesh&&this.bombMesh.material.color.setHex(e.timer<10?5574929:2829099)),this.bombMesh&&(this.bombMesh.rotation.y+=t*.5),e.timer<=0){e.state="exploded",this.bombMesh&&(this.game.scene.remove(this.bombMesh),this.bombMesh=null),Oe.explosion(e.pos.clone(),500);for(let s of this.game.players){if(!s.alive)continue;let r=Math.hypot(s.pos.x-e.pos.x,s.pos.z-e.pos.z);if(r<620){let o=Math.max(20,500*(1-r/620));s.takeDamage(o,e.planter,"chest","c4")}}this.endRound("T","bomb")}}if(e.state==="carried"&&e.carrier&&!e.carrier.alive&&(e.state="dropped",e.pos.copy(e.carrier.pos),e.pos.y=6,this.game.hud.toast("C4 \u6389\u843D\u4E86")),e.state==="dropped"){for(let n of this.game.players)if(!(!n.alive||n.team!=="T")&&Math.hypot(n.pos.x-e.pos.x,n.pos.z-e.pos.z)<55){n.hasBomb=!0,e.state="carried",e.carrier=n,this.game.hud.toast(`${n.name} \u62FE\u8D77\u4E86 C4`);break}}}checkWin(){let t=this.game.players.filter(s=>s.team==="T"&&s.alive).length,e=this.game.players.filter(s=>s.team==="CT"&&s.alive).length,n=this.bomb.state==="planted";if(t===0&&this.bomb.state!=="planted"){this.endRound("CT","elim");return}if(e===0){this.endRound("T","elim");return}this.time<=0&&(n||this.endRound("CT","time"))}onKill(t,e,n,s){let r=this.game;if(t.deaths++,r.dropWeapon(t,"primary"),r.dropWeapon(t,"secondary"),e&&e!==t){e.kills++;let o=Jt[n],a=o?o.kill:300;o&&o.cls==="melee"&&(a=1500),e.money=Math.min(Ot.maxMoney,e.money+a),e===r.localPlayer&&r.hud.money(a)}r.hud.killfeed(e?e.name:"\u4E16\u754C",t.name,n,s,e?e.team:null,t.team),t.hasBomb&&(this.bomb.state="dropped",this.bomb.pos.copy(t.pos),this.bomb.pos.y=6,t.hasBomb=!1),t===r.localPlayer&&(r.onLocalDeath(e),r.hud.spectateTarget=e||null)}};function Ou(i,t,e){let n=Jt[e],s=Gn[e],r=0;if(n)r=n.price;else if(s)r=s.price;else return!1;if(t.money<r)return i.hud.toast("\u8D44\u91D1\u4E0D\u8DB3"),!1;if(s&&s.team&&s.team!==t.team)return!1;if(n)n.slot===1?t.slots.primary={id:e,def:n,ammo:n.mag,reserve:n.res}:t.slots.secondary={id:e,def:n,ammo:n.mag,reserve:n.res},t.curSlot=n.slot===1?"primary":"secondary",t.deployTime=.45,t.reloadEnd=0;else if(e==="kevlar"){if(t.armor>=100)return!1;t.armor=100}else if(e==="kevlarhelm")t.armor=100,t.helmet=!0;else if(e==="defusekit"){if(t.team!=="CT"||t.hasKit)return!1;t.hasKit=!0}else if(s.grenade){let o=s.grenade;if(t.grenades[o]>=2)return!1;t.grenades[o]++,t.grenadeSel=o}return t.money-=r,ms(),!0}var St=i=>document.getElementById(i),La=class{constructor(t){this.game=t,this.buyOpen=!1,this.buyCat="rifles",this.announceTimer=0,this.bannerTimer=0,this.captureKey=null,this.toasts=[],this.kf=[],this.radarStatic=null,this._aliveSig="",this._gearSig="",this._iconFor=null,this.el={hud:St("hud"),health:St("health"),armor:St("armor"),money:St("money"),ammo:St("ammo"),reserve:St("reserve"),weaponName:St("weapon-name"),weaponSwitch:St("weapon-switch"),gearRow:St("gear-row"),timer:St("round-timer"),phase:St("round-phase"),scoreT:St("score-t"),scoreCT:St("score-ct"),aliveT:St("alive-t"),aliveCT:St("alive-ct"),killfeed:St("killfeed"),toasts:St("toasts"),announce:St("announce"),progressWrap:St("progress-wrap"),progressLabel:St("progress-label"),progressBar:St("progress-bar").firstElementChild,banner:St("round-banner"),result:St("round-result"),reason:St("round-reason"),rbCT:St("rb-ct"),rbT:St("rb-t"),death:St("deathnotify"),deathSub:St("death-sub"),crosshair:St("crosshair"),hitmarker:St("hitmarker"),damage:St("damage-vignette"),flash:St("flash-overlay"),scope:St("scope-overlay"),radar:St("radar"),fps:St("fps"),hint:St("hint-bar"),wicon:St("wicon"),buy:St("buymenu"),buyCats:St("buy-cats"),buyItems:St("buy-items"),buyTimer:St("buy-timer"),buyMoney:St("buy-money"),keybind:St("keybind"),kbList:St("kb-list"),kbClose:St("kb-close"),scoreboard:St("scoreboard"),sbCT:St("sb-ct"),sbT:St("sb-t"),sbCTList:St("sb-ct-list"),sbTList:St("sb-t-list")},this.buildRadarStatic(),this.bindBuyEvents(),this.bindKeybinds()}buildRadarStatic(){let t=this.game.map,e=200,n=40,s=-1,r=40,o=-1;for(let x=0;x<40;x++)for(let m=0;m<40;m++)t.isFloorTile(m,x)&&(m<n&&(n=m),m>s&&(s=m),x<r&&(r=x),x>o&&(o=x));s<0&&(n=0,s=39,r=0,o=39);let a=s-n+1,l=o-r+1,h=(e-6*2)/Math.max(a,l),u=(e-a*h)/2-n*h,f=(e-l*h)/2-r*h;this.rv={S:e,cell:h,offX:u,offY:f};let p=document.createElement("canvas");p.width=p.height=e;let g=p.getContext("2d");g.clearRect(0,0,e,e);for(let x=r;x<=o;x++)for(let m=n;m<=s;m++){if(!t.isFloorTile(m,x))continue;let d=t.blocked[x*40+m]===1,v=u+m*h,y=f+x*h;g.fillStyle=d?"rgba(120,110,86,.45)":"rgba(198,192,160,.55)",g.fillRect(v,y,h+.6,h+.6)}g.strokeStyle="rgba(40,44,34,.85)",g.lineWidth=1;for(let x=r;x<=o;x++)for(let m=n;m<=s;m++){if(!t.isFloorTile(m,x))continue;let d=u+m*h,v=f+x*h;t.isFloorTile(m,x-1)||(g.beginPath(),g.moveTo(d,v),g.lineTo(d+h,v),g.stroke()),t.isFloorTile(m,x+1)||(g.beginPath(),g.moveTo(d,v+h),g.lineTo(d+h,v+h),g.stroke()),t.isFloorTile(m-1,x)||(g.beginPath(),g.moveTo(d,v),g.lineTo(d,v+h),g.stroke()),t.isFloorTile(m+1,x)||(g.beginPath(),g.moveTo(d+h,v),g.lineTo(d+h,v+h),g.stroke())}g.font="bold 15px Arial",g.textAlign="center",g.textBaseline="middle",Object.keys(t.sites).forEach((x,m)=>{let d=t.sites[x];if(!d)return;let v=u+((d.x0+d.x1)/2+2e3)/100*h,y=f+((d.z0+d.z1)/2+2e3)/100*h;g.fillStyle="rgba(20,24,16,.55)",g.beginPath(),g.arc(v,y,9,0,7),g.fill(),g.fillStyle=m===0?"rgba(240,200,120,.95)":"rgba(150,195,235,.95)",g.fillText(x,v,y+1)}),this.radarStatic=p}worldToRadar(t,e){let{cell:n,offX:s,offY:r}=this.rv;return{x:s+(t+2e3)/100*n,y:r+(e+2e3)/100*n}}setText(t,e){t.__v!==e&&(t.__v=e,t.textContent=e)}setClass(t,e,n){let s=`__c_${e}`;t[s]!==n&&(t[s]=n,t.classList.toggle(e,n))}update(t){let e=this.game,n=e.localPlayer,s=e.round,o=s.phase==="freeze"||s.phase==="live"?Math.max(0,s.time):0,a=Math.floor(o/60),l=Math.floor(o%60);if(this.setText(this.el.timer,`${a}:${l.toString().padStart(2,"0")}`),this.setClass(this.el.timer,"low",o<20&&s.phase==="live"),this.setText(this.el.phase,s.phase==="freeze"?"\u51C6\u5907":s.phase==="live"?"\u4EA4\u6218\u4E2D":s.phase==="over"?"\u56DE\u5408\u7ED3\u675F":"\u6BD4\u8D5B\u7ED3\u675F"),this.setText(this.el.scoreT,String(s.scoreT)),this.setText(this.el.scoreCT,String(s.scoreCT)),this.renderAlive(),n){this.setText(this.el.health,String(Math.max(0,Math.ceil(n.health)))),this.setClass(this.el.health,"low",n.health<=25),this.setText(this.el.armor,String(Math.ceil(n.armor))),this.setText(this.el.money,`$${n.money}`);let c=n.weaponDef;n.curSlot==="grenade"?(this.setText(this.el.ammo,"--"),this.setText(this.el.reserve,""),this.setText(this.el.weaponName,n.grenadeSel==="he"?"HE Grenade":n.grenadeSel==="flash"?"Flashbang":"Smoke")):(this.setText(this.el.ammo,c&&c.cls!=="melee"?String(n.currentAmmo()):"--"),this.setText(this.el.reserve,c&&c.cls!=="melee"?String(n.reserveAmmo()):""),this.setText(this.el.weaponName,c?c.name:"\u2014")),this.drawWeaponIcon(n);let h=[];n.armor>0&&h.push(n.helmet?"KEV+HELM":"KEVLAR"),n.hasKit&&h.push("KIT"),n.hasBomb&&h.push("C4");for(let g of["he","flash","smoke"])n.grenades[g]>0&&h.push(`${g.toUpperCase()}\xD7${n.grenades[g]}`);let u=h.join("|");u!==this._gearSig&&(this._gearSig=u,this.el.gearRow.innerHTML=h.map(g=>`<span>${g}</span>`).join("")),this.updateCrosshair(n,c);let f=Math.min(1,n.flashAmount).toFixed(2);this.el.flash.__op!==f&&(this.el.flash.__op=f,this.el.flash.style.opacity=f);let p=n.zoom>0;this.setClass(this.el.scope,"hidden",!p),this.setClass(this.el.crosshair,"hide",p||!n.alive),this.setClass(this.el.death,"hidden",n.alive||s.phase==="over")}this.announceTimer>0&&(this.announceTimer-=t,this.announceTimer<=0&&this.el.announce.classList.remove("show")),this.bannerTimer>0&&(this.bannerTimer-=t,this.bannerTimer<=0&&this.hideBanner()),this.updateToasts(t),this.drawRadar(),this.el.fps.textContent=e.settings.showFps?`${Math.round(e.fps)} FPS`:"",this.buyOpen&&(this.el.buyTimer.textContent=Math.max(0,Math.ceil(e.buyTimeLeft())),this.el.buyMoney.textContent=`$${n?n.money:0}`)}updateCrosshair(t,e){let n=this.game.settings,s=Math.hypot(t.vel.x,t.vel.z),r=e?t.computeSpread(e)*180/Math.PI:0,o=n.crosshairGap+s*.035+Math.min(r,12)*2.2,a=this.el.crosshair.style;a.setProperty("--ch-color",n.crosshair),a.setProperty("--ch-size",`${n.crosshairSize}px`),a.setProperty("--ch-gap",`${o.toFixed(1)}px`)}renderAlive(){let t=this.game,e="",n="";for(let o of t.players)o.team==="T"?e+=o.alive?"1":"0":n+=o.alive?"1":"0";let s=`${e}|${n}`;if(s===this._aliveSig)return;this._aliveSig=s;let r=o=>o.split("").map(a=>`<i class="${a==="1"?"on":"dead"}"></i>`).join("");this.el.aliveT.innerHTML=r(e),this.el.aliveCT.innerHTML=r(n)}drawWeaponIcon(t){let e=this.el.wicon;if(!e)return;let n=t.curSlot==="grenade"?`g:${t.grenadeSel}`:t.weaponDef?t.weaponDef.id:"none";if(this._iconFor===n)return;this._iconFor=n;let s=e.getContext("2d"),r=e.width,o=e.height;s.clearRect(0,0,r,o),s.fillStyle="rgba(236,230,208,0.80)";let a=(h,u,f,p)=>s.fillRect(h*r,u*o,f*r,p*o),l=t.weaponDef,c=l?l.cls:"none";if(n.startsWith("g:"))s.beginPath(),s.arc(r*.5,o*.6,o*.22,0,7),s.fill(),a(.46,.18,.08,.2);else if(c==="melee")a(.12,.46,.5,.09),a(.6,.38,.08,.24),a(.68,.44,.2,.13);else if(c==="pistol")a(.22,.38,.5,.13),a(.28,.51,.16,.28),l&&l.id==="elite"&&a(.54,.51,.14,.24);else{let h=c==="sniper"||c==="machinegun";a(h?.06:.16,.42,h?.7:.58,.12),a(h?.74:.7,.46,.18,.06),a(.3,.54,.12,.26),a(.17,.54,.1,.18),c==="sniper"&&a(.34,.28,.22,.1),c==="machinegun"&&a(.42,.54,.16,.24),c==="shotgun"&&a(.42,.56,.34,.06)}}openKeybinds(){this.keybindOpen=!0,this.captureKey=null,this.el.keybind.classList.remove("hidden"),this.renderKeybinds()}closeKeybinds(){this.captureKey=null,this.keybindOpen=!1,this.el.keybind.classList.add("hidden")}renderKeybinds(){let t=this.game.settings.keymap;this.el.kbList.innerHTML=Zh.map(([e,n])=>{let s=this.captureKey===e,r=t[e],o=s?"\u6309\u4E0B\u65B0\u952E\u2026":ua(r);return`<div class="kb-row${s?" waiting":""}" data-a="${e}">
        <span class="kb-name">${n}</span>
        <span class="kb-key">${o}</span>
      </div>`}).join("")}assignKey(t){let e=this.captureKey;if(this.captureKey=null,!e||!t||t==="Escape"){this.renderKeybinds();return}let n=this.game.settings.keymap;for(let s of Object.keys(n))n[s]===t&&s!==e&&(n[s]="");n[e]=t,this.game.saveSettings(),this.renderKeybinds()}bindKeybinds(){this.el.kbList.addEventListener("click",t=>{let e=t.target.closest(".kb-row");e&&(this.captureKey=e.dataset.a,this.renderKeybinds())}),this.el.kbClose.addEventListener("click",()=>this.closeKeybinds())}drawRadar(){let t=this.game,e=this.el.radar,n=e.getContext("2d"),s=e.width;n.clearRect(0,0,s,s),n.drawImage(this.radarStatic,0,0);let r=t.round.bomb;if(r.state==="planted"||r.state==="dropped"){let a=this.worldToRadar(r.pos.x,r.pos.z,s);n.fillStyle=r.state==="planted"?Math.floor(t.time*4)%2?"#ff4433":"#ffaa33":"#ffcc66",n.fillRect(a.x-3,a.y-3,6,6)}let o=t.localPlayer;for(let a of t.players){if(!a.alive)continue;let l=this.worldToRadar(a.pos.x,a.pos.z,s);a!==o&&(a.team===o.team?(n.fillStyle=a===t.spectating?"rgba(120,255,140,.95)":"rgba(150,200,240,.85)",n.beginPath(),n.arc(l.x,l.y,3,0,7),n.fill()):t.isSpotted(a)&&(n.fillStyle="rgba(240,90,60,.95)",n.beginPath(),n.arc(l.x,l.y,3.2,0,7),n.fill()))}if(o){let a=this.worldToRadar(o.pos.x,o.pos.z,s);n.save(),n.translate(a.x,a.y),n.rotate(-o.yaw),n.fillStyle="rgba(255,245,200,.95)",n.beginPath(),n.moveTo(0,-6),n.lineTo(4.6,5),n.lineTo(0,2.6),n.lineTo(-4.6,5),n.closePath(),n.fill(),n.restore(),n.save(),n.translate(a.x,a.y),n.rotate(-o.yaw);let l=n.createLinearGradient(0,0,0,-40);l.addColorStop(0,"rgba(255,240,180,.16)"),l.addColorStop(1,"rgba(255,240,180,0)"),n.fillStyle=l,n.beginPath(),n.moveTo(0,0),n.lineTo(-22,-42),n.lineTo(22,-42),n.closePath(),n.fill(),n.restore()}}hitMarker(t){let e=this.el.hitmarker;e.classList.remove("show"),e.offsetWidth,e.classList.add("show"),e.style.filter=t?"drop-shadow(0 0 4px #ff5533)":"none"}damageFlash(t){let e=this.el.damage;e.style.opacity=Math.min(.9,.25+t/90).toFixed(2),clearTimeout(this._dmgT),this._dmgT=setTimeout(()=>{e.style.opacity=0},140)}killfeed(t,e,n,s,r,o){let a=n==="c4"?"C4":n==="hegrenade"?"HE":Jt[n]?.name||n,l=document.createElement("div");l.className="kf",l.innerHTML=`<span class="n ${r||""}">${t}</span>
      <span class="w">[${a}${s?" \xB7 HS":""}]</span>
      <span class="n ${o}">${e}</span>`,this.el.killfeed.appendChild(l),this.kf.push({el:l,t:6}),this.kf.length>6&&this.kf.shift().el.remove()}toast(t){let e=document.createElement("div");e.className="toast",e.textContent=t,this.el.toasts.appendChild(e),this.toasts.push({el:e,t:2.6}),this.toasts.length>4&&this.toasts.shift().el.remove()}announce(t,e=2.2){this.el.announce.textContent=t,this.el.announce.classList.add("show"),this.announceTimer=e}updateToasts(t){for(let e=this.kf.length-1;e>=0;e--)this.kf[e].t-=t,this.kf[e].t<=.5&&this.kf[e].el.classList.add("out"),this.kf[e].t<=0&&(this.kf[e].el.remove(),this.kf.splice(e,1));for(let e=this.toasts.length-1;e>=0;e--)this.toasts[e].t-=t,this.toasts[e].t<=0&&(this.toasts[e].el.remove(),this.toasts.splice(e,1))}money(t){let e=this.el.money;e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}setProgress(t,e){if(!t){this.el.progressWrap.classList.add("hidden");return}this.el.progressWrap.classList.remove("hidden"),this.el.progressLabel.textContent=t,this.el.progressBar.style.width=`${Math.min(100,e*100).toFixed(1)}%`}roundEnd(t,e,n,s){this.el.banner.classList.remove("hidden"),this.el.result.textContent=e,this.el.result.className=t==="CT"?"ct":"t",this.el.reason.textContent=t==="CT"?"\u53CD\u6050\u7CBE\u82F1":"\u6050\u6016\u5206\u5B50",this.el.rbCT.textContent=n,this.el.rbT.textContent=s,this.el.announce.classList.remove("show"),this.bannerTimer=Ot.roundEndDelay-.6,this.setProgress(null,0)}hideBanner(){this.bannerTimer=0,this.el.banner.classList.add("hidden")}matchEnd(t,e,n){this.bannerTimer=0,this.el.banner.classList.remove("hidden"),this.el.result.textContent=t==="CT"?"\u53CD\u6050\u7CBE\u82F1 \u83B7\u5F97\u6BD4\u8D5B\u80DC\u5229":"\u6050\u6016\u5206\u5B50 \u83B7\u5F97\u6BD4\u8D5B\u80DC\u5229",this.el.result.className=t==="CT"?"ct":"t",this.el.reason.textContent=`\u6700\u7EC8\u6BD4\u5206 ${e} : ${n}`,this.el.rbCT.textContent=e,this.el.rbT.textContent=n,this.toast("\u6309 R \u91CD\u65B0\u5F00\u59CB\u6BD4\u8D5B")}hint(t){if(!t){this.el.hint.classList.remove("show");return}this.el.hint.textContent=t,this.el.hint.classList.add("show")}deathNotice(t){this.el.deathSub.textContent=t,this.el.death.classList.remove("hidden")}hideDeath(){this.el.death.classList.add("hidden")}bindBuyEvents(){this.el.buyCats.addEventListener("click",t=>{let e=t.target.closest(".buy-cat");e&&(this.buyCat=e.dataset.k,this.renderBuy())}),this.el.buyItems.addEventListener("click",t=>{let e=t.target.closest(".buy-item");!e||e.classList.contains("dis")||this.doBuy(e.dataset.k)})}toggleBuy(t){let e=t??!this.buyOpen;if(e&&!this.game.inBuyZone()&&!this.buyOpen){this.toast("\u5FC5\u987B\u5728\u51FA\u751F\u533A\u8D2D\u4E70");return}this.buyOpen=e,this.el.buy.classList.toggle("hidden",!e),e?(Pi(),this.renderBuy(),this.game.enterMenuPause()):this.game.exitMenuPause()}renderBuy(){let t=this.game.localPlayer;if(!t)return;let e=Object.entries(Ml);this.el.buyCats.innerHTML=e.map(([r,o],a)=>`<div class="buy-cat ${r===this.buyCat?"on":""}" data-k="${r}">
        <b>${a+1}</b>${o.title}
      </div>`).join("");let s=Ml[this.buyCat].items.filter(r=>{let o=Jt[r];if(o)return $h[t.team].includes(r)&&o.price>0;let a=Gn[r];return a&&a.team?a.team===t.team:!0});this.el.buyItems.innerHTML=s.map((r,o)=>{let a=Jt[r],l=Gn[r],c=a?a.price:l.price,h=a?a.name:l.cn,u=this.ownsAlready(r,t),f=t.money<c;return`<div class="buy-item ${u?"dis":f?"poor":""}" data-k="${r}">
        <span class="bi-name">${o+1}. ${h}<small>${a?a.cls.toUpperCase():"GEAR"}</small></span>
        <span class="bi-price">${u?"\u5DF2\u62E5\u6709":"$"+c}</span>
      </div>`}).join(""),this.el.buyItems.dataset.items=s.join(",")}ownsAlready(t,e){let n=Jt[t];if(n)return n.slot===1?!!e.slots.primary&&e.slots.primary.id===t:n.slot===2?!!e.slots.secondary&&e.slots.secondary.id===t:!1;if(t==="kevlar")return e.armor>=100;if(t==="kevlarhelm")return e.armor>=100&&e.helmet;if(t==="defusekit")return e.hasKit;let s=Gn[t];return s&&s.grenade?e.grenades[s.grenade]>=2:!1}doBuy(t){let e=this.game.localPlayer;if(!e)return;Ou(this.game,e,t)&&(this.toast(`\u5DF2\u8D2D\u4E70 ${Jt[t]?.name||Gn[t]?.cn||t}`),this.renderBuy())}handleBuyKey(t){let e=parseInt(t.replace("Digit",""),10);if(!Number.isNaN(e)&&e>=1&&e<=9){let s=(this.el.buyItems.dataset.items||"").split(",").filter(Boolean)[e-1];s&&this.doBuy(s)}}toggleScoreboard(t){this.el.scoreboard.classList.toggle("hidden",!t),t&&this.renderScoreboard()}renderScoreboard(){let t=this.game;this.el.sbCT.textContent=t.round.scoreCT,this.el.sbT.textContent=t.round.scoreT;let e=r=>`<div class="row ${r===t.localPlayer?"me":""} ${r.alive?"":"dead"}">
      <span class="nm"><i>${r.isBot?"BOT":"YOU"}</i>${r.name}</span>
      <span class="v">${r.kills}</span>
      <span class="v">${r.deaths}</span>
      <span class="v">${Math.round(r.damageDealt)}</span>
      <span class="v">$${r.money}</span>
    </div>`,n=t.players.filter(r=>r.team==="CT").sort((r,o)=>o.kills-r.kills),s=t.players.filter(r=>r.team==="T").sort((r,o)=>o.kills-r.kills);this.el.sbCTList.innerHTML='<div class="hdr">COUNTER-TERRORISTS</div>'+n.map(e).join(""),this.el.sbTList.innerHTML='<div class="hdr">TERRORISTS</div>'+s.map(e).join("")}};var Fu={rifle:{x:15,y:-8,z:-40,s:.62,ry:.3},sniper:{x:16.2,y:-8.4,z:-44,s:.64,ry:.3},smg:{x:14.6,y:-7.6,z:-37,s:.62,ry:.32},pistol:{x:12.4,y:-7.2,z:-31,s:.58,ry:.34},melee:{x:13.4,y:-7.6,z:-36,s:.6,ry:.3,rx:.26,rz:.1},grenade:{x:13.2,y:-8.8,z:-31,s:.6,ry:.32}},jx={elite:{x:11.6,y:-4.4,z:-28,s:.52,ry:.32},awp:{x:16.6,y:-8.6,z:-46,s:.64,ry:.28},scout:{x:16.4,y:-8.4,z:-44,s:.63,ry:.28},m249:{x:15.8,y:-8.6,z:-44,s:.64,ry:.28},xm1014:{x:15.2,y:-8.2,z:-40,s:.62,ry:.3}},Ia=class{constructor(t){this.game=t,this.scene=new cs,this.camera=new Me(70,16/9,1,600),this.scene.add(new aa(16777215,.78));let e=new li(16773848,1.5);e.position.set(-.5,1.3,.9),this.scene.add(e);let n=new li(9416920,.7);n.position.set(1.4,.3,-1),this.scene.add(n);let s=new Bn(14200944,.55,200);s.position.set(0,-20,10),this.scene.add(s),this.pose={x:4.2,y:-6.8,z:-33,s:.72},this.root=new It,this.root.position.set(this.pose.x,this.pose.y,this.pose.z),this.root.rotation.y=.16,this.root.scale.setScalar(this.pose.s),this.scene.add(this.root),this.weaponGroup=null,this.curId=null,this.kick=0,this.swayX=0,this.swayY=0,this.bob=0,this.rise=1,this.reloadT=0}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}invalidate(){this.curId=null}ensureEnv(){if(this.scene.environment)return;let t=this.game&&this.game.scene&&this.game.scene.background;if(!(!t||!t.isTexture))try{let e=new ai(this.game.renderer),n=e.fromEquirectangular(t);this.scene.environment=n.texture,e.dispose()}catch{}}setWeapon(t){if(t===this.curId||(this.curId=t,this.weaponGroup&&(this.root.remove(this.weaponGroup),this.weaponGroup=null),!t||!Jt[t]))return;let e=Du(t);this.weaponGroup=e,this.root.add(e)}update(t,e){if(!e||(Ru()==="modern"&&this.ensureEnv(),this.setWeapon(e.curSlot==="melee"?"knife":e.curSlot==="grenade"?null:e.weapon?e.weapon.id:null),this.root.visible=e.alive&&e.zoom===0&&e.curSlot!=="grenade"&&!!this.weaponGroup,!this.root.visible))return;let n=Math.hypot(e.vel.x,e.vel.z),s=e.onGround&&n>40;this.bob+=t*(s?n*.055:1.4);let r=s?Math.sin(this.bob)*Math.min(1.8,n*.007):Math.sin(this.bob*.6)*.22,o=s?Math.abs(Math.cos(this.bob))*Math.min(1.4,n*.0055):Math.sin(this.bob*.45)*.2;this.kick+=(Math.min(7,Math.abs(e.punchPitch)*1.1)-this.kick)*Math.min(1,t*16);let a=e.reloadEnd>0;this.reloadT+=((a?1:0)-this.reloadT)*Math.min(1,t*8),this.rise+=((e.deployTime>0?0:1)-this.rise)*Math.min(1,t*9);let l=-(e.lastMouseDX||0)*.55,c=(e.lastMouseDY||0)*.35;this.swayX+=(l-this.swayX)*Math.min(1,t*9),this.swayY+=(c-this.swayY)*Math.min(1,t*9),e.lastMouseDX=0,e.lastMouseDY=0;let h=e.curSlot==="melee"?"melee":e.curSlot==="grenade"?"grenade":e.weaponDef&&e.weaponDef.cls||"rifle",u=e.curSlot==="melee"?"knife":e.curSlot==="grenade"?null:e.weaponDef?e.weaponDef.id:null,f=this.game&&this.game.vmPose||jx[u]||Fu[h]||Fu.rifle,p=e.duckAmount*2.2,g=e.curSlot==="melee"&&e.swingT||0,x=g>0?Math.sin(Math.PI*(1-g)):0;this.root.scale.setScalar(f.s),this.root.position.set(f.x+r+this.swayX*.06-x*2.6,f.y+o-p-(1-this.rise)*11-this.reloadT*4.5+this.swayY*.06+x*1.8,f.z+this.kick*1.5-x*6),this.root.rotation.set((f.rx||0)+this.kick*.02+this.reloadT*.42-(1-this.rise)*.8-x*.62,(f.ry??.3)-this.kick*.008+this.swayX*.006+x*.34,(f.rz||0)+this.reloadT*.3+Math.sin(this.bob)*.01+x*.42)}};var js=Math.PI/180,Fl=1/64,Bl=(i,t,e)=>Math.max(t,Math.min(e,i)),Bu="cs16web.settings.v2";function Qx(){try{let i=localStorage.getItem(Bu);if(i){let t=JSON.parse(i);return{...Gs,...t,keymap:{...fs,...t.keymap||{}}}}}catch{}return{...Gs,keymap:{...fs}}}var Hl=class{constructor(){this.settings=Qx(),this.players=[],this.grenades=[],this.time=0,this.fps=60,this.stats={jumps:0},this.fx=Oe,this.pauseMenuOpen=!1,this.menuPaused=!1,this.paused=!1,this.started=!1,this.spectating=null,this.enemyCount=3,this.difficulty="normal",this.keys={},this.suppressPause=!1,this.lastShotDir=null,this.dragLook=!1,this.dragging=!1,this.pointerLockFailures=0,this.lockState="idle",this.lastLockedAt=0,this.dropped=[],this.acc=0,this.flashlightOn=!1}init(){let t=document.getElementById("gl");this.canvas=t,this.renderer=new Ns({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.maxPixelRatio=Math.min(window.devicePixelRatio||1,2),this.pixelRatio=Math.min(this.maxPixelRatio,1.5),this.renderer.setPixelRatio(this.pixelRatio),this.adaptTimer=0,Jh(this.renderer.capabilities.getMaxAnisotropy()),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.renderer.outputColorSpace=jt,this.renderer.toneMapping=dl,this.renderer.toneMappingExposure=1.02,this.renderer.autoClear=!1,this.scene=new cs,this.camera=new Me(this.settings.fov,window.innerWidth/window.innerHeight,1,9e3),this.camera.rotation.order="YXZ",this.scene.add(this.camera),this.flashlight=new ra(16773328,0,2400,Math.PI/7,.5,1.1),this.flashlight.position.set(0,-6,0),this.flashlight.target.position.set(0,-4,-1),this.camera.add(this.flashlight),this.camera.add(this.flashlight.target),this.map=new _a(this.scene,au(this.settings.map||Al)),this.setupEnvironment();let e=document.querySelector(".radar-label");e&&(e.textContent=this.map.label),Oe.init(this.scene,this.camera,this),this.hud=new La(this),this.round=new Pa(this),this.viewModel=new Ia(this),this.createLocalPlayer(),this.bindEvents(),this.resize(),window.addEventListener("resize",()=>this.resize()),document.getElementById("loading").classList.add("hidden"),this.lastT=performance.now(),requestAnimationFrame(n=>this.loop(n))}setupEnvironment(){let t=this.scene.background;if(!(!t||!t.isTexture))try{let e=new ai(this.renderer),n=e.fromEquirectangular(t);this.scene.environment=n.texture,e.dispose()}catch(e){console.warn("\u73AF\u5883\u8D34\u56FE\u751F\u6210\u5931\u8D25\uFF1A",e)}}resize(){let t=window.innerWidth,e=window.innerHeight;this.maxPixelRatio=Math.min(window.devicePixelRatio||1,2),this.pixelRatio>this.maxPixelRatio&&(this.pixelRatio=this.maxPixelRatio,this.renderer.setPixelRatio(this.pixelRatio)),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.viewModel&&this.viewModel.resize(t/e)}createLocalPlayer(){let t=new ys(this,{name:"\u4F60",team:"T",isBot:!1,id:0});t.isLocal=!0,t.buildMesh(this.scene),t.mesh.visible=!1,t.lastMouseDX=0,t.lastMouseDY=0,this.players=[t],this.localPlayer=t}createTeams(){for(let o of this.players)o!==this.localPlayer&&(o.mesh&&this.scene.remove(o.mesh),o._shadow&&(this.scene.remove(o._shadow),o._shadow.geometry.dispose(),o._shadow.material.dispose(),o._shadow=null));this.players=[this.localPlayer],this.grenades=[];let t=this.localPlayer;t.team="T",t.resetInventory(),t.kills=0,t.deaths=0,t.damageDealt=0,t.money=Ot.startMoney,t.mesh&&this.scene.remove(t.mesh),t._shadow&&(this.scene.remove(t._shadow),t._shadow.geometry.dispose(),t._shadow.material.dispose(),t._shadow=null),t.buildMesh(this.scene),t.mesh.visible=!1;let n={easy:.24,normal:.46,hard:.68,expert:.88}[this.difficulty]??.46,s=new Set,r=()=>{for(let o=0;o<40;o++){let a=bl[Math.floor(Math.random()*bl.length)];if(!s.has(a))return s.add(a),a}return`Bot${Math.floor(Math.random()*900+100)}`};for(let o=0;o<this.enemyCount-1;o++){let a=new ys(this,{name:r(),team:"T",isBot:!0,id:o+1});a.buildMesh(this.scene),a.lastMouseDX=0,a.lastMouseDY=0,a.bot=new Js(this,a,Bl(n+(Math.random()-.5)*.14,.15,.95)),this.players.push(a)}for(let o=0;o<this.enemyCount;o++){let a=new ys(this,{name:r(),team:"CT",isBot:!0,id:100+o});a.buildMesh(this.scene),a.lastMouseDX=0,a.lastMouseDY=0,a.bot=new Js(this,a,Bl(n+(Math.random()-.5)*.14,.15,.95)),this.players.push(a)}}startGame(){this.createTeams(),this.round.startMatch(),this.started=!0,this.pauseMenuOpen=!1,this.menuPaused=!1,this.paused=!1,document.getElementById("mainmenu").classList.add("hidden"),document.getElementById("hud").classList.remove("hidden"),document.getElementById("pause").classList.add("hidden"),this.hud.hideDeath(),this.hud.hideBanner(),this.hud.toggleScoreboard(!1),this.spectating=null,Cl(),Eu(),this.lockPointer()}restartMatch(){document.getElementById("pause").classList.add("hidden"),this.started=!1,this.startGame()}bindEvents(){window.addEventListener("keydown",r=>{let o=this.km();(r.code===o.scoreboard||r.code===o.jump)&&r.preventDefault(),!r.repeat&&this.onKeyDown(r)}),window.addEventListener("keyup",r=>{this.keys[r.code]=!1,r.code===this.km().scoreboard&&this.hud.toggleScoreboard(!1)}),document.addEventListener("mousemove",r=>{if(!this.started||this.paused)return;let o=document.pointerLockElement===this.canvas,a=this.dragLook&&this.dragging;if(!o&&!a||this.hud.buyOpen)return;let l=this.localPlayer;if(!l)return;let c=this.settings.sensitivity*.022*js;l.yaw-=r.movementX*c,l.pitch-=r.movementY*c*(this.settings.invertY?-1:1),l.pitch=Bl(l.pitch,-89*js,89*js),l.lastMouseDX+=r.movementX,l.lastMouseDY+=r.movementY}),this.canvas.addEventListener("mousedown",r=>{if(!(!this.started||!(document.pointerLockElement===this.canvas)&&(this.lockPointer(),!this.dragLook))&&(r.button===0&&(this.dragging=!0,this.onFireDown()),r.button===2)){let a=this.localPlayer;if(a&&a.alive){if(a.curSlot==="grenade")return;a.toggleZoom()}}}),window.addEventListener("mouseup",r=>{if(r.button===0){this.dragging=!1;let o=this.localPlayer;o&&(o.fireHeld=!1,o.priming&&o.releaseGrenade())}}),this.canvas.addEventListener("contextmenu",r=>r.preventDefault()),this.canvas.addEventListener("wheel",r=>{let o=this.localPlayer;if(!o||!o.alive)return;let a=["primary","secondary","melee"],l=a.indexOf(o.curSlot),c=a[(l+(r.deltaY>0?1:a.length-1))%a.length];o.switchSlot(c)},{passive:!0}),document.addEventListener("pointerlockerror",()=>this.onPointerLockFailed()),document.addEventListener("pointerlockchange",()=>{if(document.pointerLockElement===this.canvas){this.lockState="locked",this.lastLockedAt=typeof performance<"u"?performance.now():0,this.dragLook=!1,this.dragging=!1,this.pointerLockFailures=0;return}let o=this.lockState==="releasing",a=this.lockState==="locked";this.lockState="idle",!(o||!a||(typeof performance<"u"?performance.now():0)-this.lastLockedAt<500)&&this.started&&!this.hud.buyOpen&&!this.suppressPause&&this.round.phase!=="matchend"&&!this.pauseMenuOpen&&this.pauseGame()}),document.getElementById("btn-start").addEventListener("click",()=>{Cl(),this.startGame()}),document.getElementById("btn-resume").addEventListener("click",()=>this.resumeGame()),document.getElementById("btn-keys").addEventListener("click",()=>this.hud.openKeybinds()),document.getElementById("btn-restart").addEventListener("click",()=>this.restartMatch());let t=(r,o)=>{let a=document.getElementById(r);a.addEventListener("click",l=>{let c=l.target.closest("button");c&&(a.querySelectorAll("button").forEach(h=>h.classList.remove("on")),c.classList.add("on"),o(c.dataset.v),Pi())})};t("seg-diff",r=>{this.difficulty=r}),t("seg-size",r=>{this.enemyCount=parseInt(r,10)});let e=document.getElementById("set-sens"),n=document.getElementById("set-vol");e.value=this.settings.sensitivity,n.value=this.settings.volume,document.getElementById("sens-val").textContent=Number(this.settings.sensitivity).toFixed(2),document.getElementById("vol-val").textContent=Number(this.settings.volume).toFixed(2),e.addEventListener("input",()=>{this.settings.sensitivity=parseFloat(e.value),document.getElementById("sens-val").textContent=this.settings.sensitivity.toFixed(2),this.saveSettings()}),n.addEventListener("input",()=>{this.settings.volume=parseFloat(n.value),document.getElementById("vol-val").textContent=this.settings.volume.toFixed(2),du(this.settings.volume),this.saveSettings()});let s=document.getElementById("set-chcolor");s&&(s.value=this.settings.crosshair,s.addEventListener("input",()=>{this.settings.crosshair=s.value,this.saveSettings()}))}saveSettings(){try{localStorage.setItem(Bu,JSON.stringify(this.settings))}catch{}}onKeyDown(t){let e=this.localPlayer;if(this.keys[t.code]=!0,!this.started)return;let n=this.km();if(this.hud.captureKey){this.hud.assignKey(t.code);return}if(this.hud.keybindOpen&&t.code==="Escape"){this.hud.closeKeybinds();return}if(t.code===n.scoreboard){this.hud.toggleScoreboard(!0);return}if(t.code==="Escape"){if(this.hud.buyOpen){this.hud.toggleBuy(!1);return}if(this.pauseMenuOpen){this.resumeGame();return}this.pauseGame();return}if(this.hud.buyOpen){if(t.code===n.buy){this.hud.toggleBuy(!1);return}this.hud.handleBuyKey(t.code);return}if(e){if(t.code===n.reload&&this.round.phase==="matchend"){this.restartMatch();return}if(t.code===n.buy){e.alive&&this.hud.toggleBuy();return}if(t.code===n.reload){e.alive&&e.reload();return}if(t.code===n.slot1){e.switchSlot("primary");return}if(t.code===n.slot2){e.switchSlot("secondary");return}if(t.code===n.slot3){e.switchSlot("melee");return}if(t.code===n.slot4){e.switchSlot("grenade");return}if(t.code===n.lastWeapon){e.curSlot==="primary"&&e.slots.secondary?e.switchSlot("secondary"):e.curSlot==="secondary"&&e.slots.primary&&e.switchSlot("primary");return}if(t.code===n.flashlight){this.toggleFlashlight();return}if(t.code===n.drop){this.dropWeapon(e,e.curSlot);return}}}km(){return this.settings.keymap||fs}act(t){let e=this.settings.keymap||fs;return!!this.keys[e[t]]}onFireDown(){let t=this.localPlayer;if(!t||!t.alive){this.cycleSpectate();return}if(t.curSlot==="grenade"){t.beginPrime();return}t.fireHeld=!0,t.tryFire()}toggleFlashlight(){this.flashlightOn=!this.flashlightOn,this.flashlight.intensity=this.flashlightOn?2.4:0,Pi()}setWeaponStyle(t){let e=Cu(t);return this.viewModel&&this.viewModel.invalidate(),this.hud&&this.hud.toast(e==="modern"?"\u6B66\u5668\u6A21\u578B\uFF1A\u73B0\u4EE3 PBR":"\u6B66\u5668\u6A21\u578B\uFF1A1.6 \u7ECF\u5178"),e}syncPaused(){this.paused=this.pauseMenuOpen||this.menuPaused}pauseGame(){if(!this.started||this.pauseMenuOpen)return;this.pauseMenuOpen=!0,this.syncPaused(),document.getElementById("pause").classList.remove("hidden");let t=this.localPlayer;t&&(t.fireHeld=!1),document.pointerLockElement===this.canvas&&this.releasePointer()}resumeGame(){this.hud.closeKeybinds(),this.pauseMenuOpen=!1,this.syncPaused(),document.getElementById("pause").classList.add("hidden"),this.lockPointer()}enterMenuPause(){if(!this.started)return;this.menuPaused=!0,this.syncPaused();let t=this.localPlayer;t&&(t.fireHeld=!1),document.pointerLockElement===this.canvas&&this.releasePointer()}exitMenuPause(){this.menuPaused=!1,this.syncPaused(),this.lockPointer()}lockPointer(){if(document.pointerLockElement===this.canvas){this.lockState="locked";return}if(!this.canvas.requestPointerLock){this.enableDragLook();return}this.lockState="requesting";try{let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{this.lockState==="requesting"&&(this.lockState="idle"),this.onPointerLockFailed()})}catch{this.lockState==="requesting"&&(this.lockState="idle"),this.onPointerLockFailed()}}onPointerLockFailed(){document.pointerLockElement!==this.canvas&&(this.pointerLockFailures+=1,this.pointerLockFailures>=2?this.enableDragLook():this.started&&this.hud&&this.hud.toast("\u70B9\u51FB\u753B\u9762\u4EE5\u9501\u5B9A\u9F20\u6807"))}enableDragLook(){this.dragLook||(this.dragLook=!0,this.dragging=!1,this.hud.toast("\u9F20\u6807\u9501\u5B9A\u4E0D\u53EF\u7528\uFF1A\u6309\u4F4F\u5DE6\u952E\u62D6\u52A8\u53EF\u8F6C\u52A8\u89C6\u89D2"))}releasePointer(){this.suppressPause=!0,this.lockState="releasing",document.exitPointerLock(),setTimeout(()=>{this.suppressPause=!1},100)}listenerPos(){let t=this.camera;return t?{x:t.position.x,y:t.position.y,z:t.position.z,yaw:t.rotation.y}:{x:0,y:0,z:0,yaw:0}}tracePlayers(t,e,n,s){return Ul(this,t,e,n,s)}inBuyZone(){let t=this.localPlayer;if(!t||!t.alive||this.buyTimeLeft()<=0)return!1;let e=this.map.spawns[t.team],n=e.reduce((r,o)=>r+o.x,0)/e.length,s=e.reduce((r,o)=>r+o.z,0)/e.length;return Math.hypot(t.pos.x-n,t.pos.z-s)<900}buyTimeLeft(){let t=this.round;return t.phase==="freeze"?t.time:t.phase==="live"?Math.max(0,t.time-(Ot.roundTime-Ot.buyTime)):0}botsBuy(){for(let t of this.players){if(!t.isBot)continue;let e=t.team==="T"?"ak47":"m4a1",n=()=>t.money;t.slots.primary||(n()>=4750&&Math.random()<.12?this.botBuy(t,"awp"):n()>=Jt[e].price?this.botBuy(t,e):n()>=1500?this.botBuy(t,"mp5navy"):n()>=650&&Math.random()<.5&&this.botBuy(t,"deagle")),(t.armor<100||!t.helmet)&&(n()>=1e3?this.botBuy(t,"kevlarhelm"):n()>=650&&t.armor<100&&this.botBuy(t,"kevlar")),t.team==="CT"&&!t.hasKit&&n()>=200&&Math.random()<.45&&this.botBuy(t,"defusekit"),n()>=300&&Math.random()<.7&&this.botBuy(t,"hegrenade"),n()>=200&&Math.random()<.45&&this.botBuy(t,"flashbang"),n()>=300&&Math.random()<.2&&this.botBuy(t,"smokegrenade")}}botBuy(t,e){let n=Jt[e];if(n){if(t.money<n.price)return;t.money-=n.price,n.slot===1?t.slots.primary={id:e,def:n,ammo:n.mag,reserve:n.res}:t.slots.secondary={id:e,def:n,ammo:n.mag,reserve:n.res},t.curSlot=n.slot===1?"primary":"secondary";return}let s=Gn[e];s&&(s.team&&s.team!==t.team||t.money<s.price||(t.money-=s.price,e==="kevlar"?t.armor=100:e==="kevlarhelm"?(t.armor=100,t.helmet=!0):e==="defusekit"?t.hasKit=!0:s.grenade&&(t.grenades[s.grenade]=Math.min(2,t.grenades[s.grenade]+1))))}botCallout(t,e){e.spottedUntil=this.time+4.5;for(let n of this.players)n.team===t.team&&n.bot&&n.bot!==t&&n.bot.lastSeenTime<this.time-1.5&&Math.random()<.5&&(n.bot.lastSeen=e.pos.clone(),n.bot.lastSeenTime=this.time-2)}isSpotted(t){return(t.spottedUntil||0)>this.time}onPlayerKilled(t,e,n,s){this.round.onKill(t,e,n,s),t.mesh&&(t.mesh.visible=!1),t===this.localPlayer&&(this.camera.fov=this.settings.fov,this.camera.updateProjectionMatrix(),this.spectating=this.pickSpectateTarget())}onLocalDeath(t){let e=t&&t.weaponDef?t.weaponDef.name:"\u70B8\u5F39",n=t?`${t.name}\uFF08${e}\uFF09`:"\u73AF\u5883";this.hud.deathNotice(`\u88AB ${n} \u51FB\u6740`),this.spectating=this.pickSpectateTarget()}onPlayerFell(t){t.takeDamage(1e3,null,"leg","fall")}pickSpectateTarget(){return this.players.filter(e=>e!==this.localPlayer&&e.alive&&e.team===this.localPlayer.team)[0]||null}cycleSpectate(){let t=this.players.filter(n=>n!==this.localPlayer&&n.alive);if(!t.length)return;let e=t.indexOf(this.spectating);this.spectating=t[(e+1)%t.length]}loop(t){requestAnimationFrame(s=>this.loop(s));let e=(t-this.lastT)/1e3;this.lastT=t;let n=Math.min(.05,Math.max(1e-4,e));if(e>0&&(this.fps+=(1/e-this.fps)*.08),this.adaptTimer+=Math.min(.25,e),this.adaptTimer>2&&(this.adaptTimer=0,this.fps<48&&this.pixelRatio>1?(this.pixelRatio=Math.max(1,this.pixelRatio-.25),this.renderer.setPixelRatio(this.pixelRatio)):this.fps>58&&this.pixelRatio<this.maxPixelRatio&&(this.pixelRatio=Math.min(this.maxPixelRatio,this.pixelRatio+.25),this.renderer.setPixelRatio(this.pixelRatio))),this.started&&!this.paused){this.acc+=Math.min(.25,e);let s=0;for(;this.acc>=Fl&&s<6;)this.stepPhysics(Fl),this.acc-=Fl,s+=1;s>=6&&(this.acc=0),this.updateVisuals(e)}this.renderer.clear(!0,!0,!0),this.renderer.render(this.scene,this.camera),this.renderer.clearDepth(),this.renderer.render(this.viewModel.scene,this.viewModel.camera)}stepPhysics(t){this.time+=t;let e=this.localPlayer;if(this.round.update(t),e){let n={forward:(this.act("forward")?1:0)-(this.act("back")?1:0),side:(this.act("right")?1:0)-(this.act("left")?1:0),jump:this.act("jump"),duck:this.act("duck")||!!this.keys.ControlRight||!!this.keys.KeyC,walk:this.act("walk")||!!this.keys.ShiftRight};e.wantUse=this.act("use"),e.update(t,n)}for(let n of this.players)n.bot&&n.bot.update(t);for(let n=this.grenades.length-1;n>=0;n--){let s=this.grenades[n];s.update(t),s.dead&&this.grenades.splice(n,1)}this.updateDropped()}updateVisuals(t){let e=this.localPlayer;if(Oe.update(t),this.updateCamera(t),this.viewModel.update(t,e),this.hud.update(t),Pl(this.listenerPos()),e){let n=ua(this.km().buy);this.inBuyZone()&&!this.hud.buyOpen?this.hud.hint(`\u6309 ${n} \u6253\u5F00\u8D2D\u4E70\u83DC\u5355`):e.hasBomb&&this.map.siteAt(e.pos.x,e.pos.z)&&this.round.bomb.state==="carried"?this.hud.hint("\u6309\u4F4F E \u5B89\u653E C4"):e.team==="CT"&&this.round.bomb.state==="planted"&&Math.hypot(e.pos.x-this.round.bomb.pos.x,e.pos.z-this.round.bomb.pos.z)<90?this.hud.hint("\u6309\u4F4F E \u62C6\u9664\u70B8\u5F39"):this.hud.hint(null)}}dropWeapon(t,e){if(e!=="primary"&&e!=="secondary")return;let n=t.slots[e];if(!n)return;let s=Jt[n.id];if(!s||s.cls==="melee")return;t.slots[e]=null,(e==="primary"&&t.curSlot==="primary"||e==="secondary"&&t.curSlot==="secondary")&&(t.curSlot=t.slots.primary?"primary":t.slots.secondary?"secondary":"melee");let r=Uu(n.id);if(r.position.set(t.pos.x,10,t.pos.z),r.rotation.y=Math.random()*Math.PI*2,this.scene.add(r),this.dropped.push({id:n.id,ammo:n.ammo,reserve:n.reserve,mesh:r,x:t.pos.x,z:t.pos.z}),this.dropped.length>24){let o=this.dropped.shift();this.scene.remove(o.mesh)}}clearDropped(){for(let t of this.dropped)this.scene.remove(t.mesh);this.dropped=[]}updateDropped(){for(let t=this.dropped.length-1;t>=0;t--){let e=this.dropped[t];e.mesh.rotation.y+=.02;let n=!1;for(let s of this.players){if(!s.alive||Math.hypot(s.pos.x-e.x,s.pos.z-e.z)>46)continue;let r=Jt[e.id],o=r.slot===1?"primary":"secondary";if(!s.slots[o]){s.slots[o]={id:e.id,def:r,ammo:e.ammo,reserve:e.reserve},s.curSlot=o,s.deployTime=.4,s===this.localPlayer&&ms(),n=!0;break}}n&&(this.scene.remove(e.mesh),this.dropped.splice(t,1))}}updateCamera(t){let e=this.localPlayer,n=null;if(e&&e.alive?(n=e,this.spectating=null):this.spectating&&this.spectating.alive&&(n=this.spectating),n){let r=Oe.shake*1.6,o=(Math.random()-.5)*r,a=(Math.random()-.5)*r;this.camera.position.set(n.pos.x,n.eyeY(),n.pos.z),this.camera.rotation.set(n.pitch+n.punchPitch*js+a*.01,n.yaw+n.punchYaw*js+o*.01,n.punchYaw*.012)}let s=this.settings.fov;if(e&&e.alive&&e.zoom>0){let r=e.weaponDef;r&&r.scope&&(s=this.settings.fov*r.scope[e.zoom-1])}Math.abs(this.camera.fov-s)>.1&&(this.camera.fov+=(s-this.camera.fov)*Math.min(1,t*16),this.camera.updateProjectionMatrix())}};window.addEventListener("DOMContentLoaded",()=>{let i=new Hl;window.game=i;try{i.init()}catch(t){console.error(t);let e=document.getElementById("loading");e&&(e.textContent="\u521D\u59CB\u5316\u5931\u8D25\uFF1A"+t.message)}});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
