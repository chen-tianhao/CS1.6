(()=>{var Su=0,Il=1,Eu=2;var lh=1,Tu=2,An=3,Jn=0,Xe=1,en=2;var Yn=0,_n=1,jn=2,Dl=3,Ul=4,wu=5,hi=100,Au=101,Ru=102,Nl=103,zl=104,Cu=200,Pu=201,Lu=202,Iu=203,oa=204,aa=205,Du=206,Uu=207,Nu=208,zu=209,Ou=210,Fu=211,ku=212,Bu=213,Hu=214,Vu=0,Gu=1,Wu=2,yr=3,Xu=4,qu=5,Yu=6,$u=7,Za=0,Zu=1,Ku=2,$n=0,Ju=1,ju=2,Qu=3,td=4,ed=5,nd=6;var ch=300,Zi=301,Ki=302,Ss=303,la=304,jr=306,Es=1e3,un=1001,ca=1002,He=1003,Ol=1004;var bo=1005;var tn=1006,id=1007;var Ts=1008;var Zn=1009,sd=1010,rd=1011,Ka=1012,hh=1013,Xn=1014,qn=1015,ws=1016,uh=1017,dh=1018,fi=1020,od=1021,dn=1023,ad=1024,ld=1025,pi=1026,Ji=1027,cd=1028,fh=1029,hd=1030,ph=1031,mh=1033,So=33776,Eo=33777,To=33778,wo=33779,Fl=35840,kl=35841,Bl=35842,Hl=35843,gh=36196,Vl=37492,Gl=37496,Wl=37808,Xl=37809,ql=37810,Yl=37811,$l=37812,Zl=37813,Kl=37814,Jl=37815,jl=37816,Ql=37817,tc=37818,ec=37819,nc=37820,ic=37821,Ao=36492,sc=36494,rc=36495,ud=36283,oc=36284,ac=36285,lc=36286;var vr=2300,Mr=2301,Ro=2302,cc=2400,hc=2401,uc=2402;var xh=3e3,mi=3001,dd=3200,fd=3201,_h=0,pd=1,nn="",jt="srgb",Ln="srgb-linear",Ja="display-p3",Qr="display-p3-linear",br="linear",ae="srgb",Sr="rec709",Er="p3";var Ti=7680;var dc=519,md=512,gd=513,xd=514,yh=515,_d=516,yd=517,vd=518,Md=519,ha=35044;var fc="300 es",ua=1035,Pn=2e3,Tr=2001,Qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Co=Math.PI/180,wr=180/Math.PI;function Kn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[s&255]+Ie[s>>8&255]+Ie[s>>16&255]+Ie[s>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Re(s,t,e){return Math.max(t,Math.min(e,s))}function bd(s,t){return(s%t+t)%t}function Po(s,t,e){return(1-e)*s+e*t}function pc(s){return(s&s-1)===0&&s!==0}function da(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Cn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ne(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ct=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],x=i[0],m=i[3],d=i[6],v=i[1],_=i[4],T=i[7],P=i[2],A=i[5],R=i[8];return r[0]=o*x+a*v+l*P,r[3]=o*m+a*_+l*A,r[6]=o*d+a*T+l*R,r[1]=c*x+h*v+u*P,r[4]=c*m+h*_+u*A,r[7]=c*d+h*T+u*R,r[2]=f*x+p*v+g*P,r[5]=f*m+p*_+g*A,r[8]=f*d+p*T+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=e*u+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Lo.makeScale(t,e)),this}rotate(t){return this.premultiply(Lo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Lo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Lo=new qt;function vh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ar(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sd(){let s=Ar("canvas");return s.style.display="block",s}var mc={};function ys(s){s in mc||(mc[s]=!0,console.warn(s))}var gc=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xc=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xs={[Ln]:{transfer:br,primaries:Sr,toReference:s=>s,fromReference:s=>s},[jt]:{transfer:ae,primaries:Sr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Qr]:{transfer:br,primaries:Er,toReference:s=>s.applyMatrix3(xc),fromReference:s=>s.applyMatrix3(gc)},[Ja]:{transfer:ae,primaries:Er,toReference:s=>s.convertSRGBToLinear().applyMatrix3(xc),fromReference:s=>s.applyMatrix3(gc).convertLinearToSRGB()}},Ed=new Set([Ln,Qr]),te={enabled:!0,_workingColorSpace:Ln,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ed.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=Xs[t].toReference,i=Xs[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Xs[s].primaries},getTransfer:function(s){return s===nn?br:Xs[s].transfer}};function Yi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Io(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var wi,Rr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{wi===void 0&&(wi=Ar("canvas")),wi.width=t.width,wi.height=t.height;let n=wi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ar("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Yi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yi(e[n]/255)*255):e[n]=Yi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Td=0,Cr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Kn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Do(i[o].image)):r.push(Do(i[o]))}else r=Do(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Do(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Rr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var wd=0,sn=class s extends Qn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=un,i=un,r=tn,o=Ts,a=dn,l=Zn,c=s.DEFAULT_ANISOTROPY,h=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Kn(),this.name="",this.source=new Cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===mi?jt:nn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Es:t.x=t.x-Math.floor(t.x);break;case un:t.x=t.x<0?0:1;break;case ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Es:t.y=t.y-Math.floor(t.y);break;case un:t.y=t.y<0?0:1;break;case ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===jt?mi:xh}set encoding(t){ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===mi?jt:nn}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=ch;sn.DEFAULT_ANISOTROPY=1;var ce=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,T=(p+1)/2,P=(d+1)/2,A=(h+f)/4,R=(u+x)/4,B=(g+m)/4;return _>T&&_>P?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=A/n,r=R/n):T>P?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=A/i,r=B/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=R/r,i=B/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((c+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fa=class extends Qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(ys("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===mi?jt:nn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new sn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Cr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends fa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Pr=class extends sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pa=class extends sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ti=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==p||h!==g){let m=1-a,d=l*f+c*p+h*g+u*x,v=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){let P=Math.sqrt(_),A=Math.atan2(P,d*v);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}let T=a*v;if(l=l*m+f*T,c=c*m+p*T,h=h*m+g*T,u=u*m+x*T,m===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-a*p,t[e+2]=c*g+h*p+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_c.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_c.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Uo.copy(this).projectOnVector(t),this.sub(Uo)}reflect(t){return this.sub(Uo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Uo=new w,_c=new ti,gi=class{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(us),Ys.subVectors(this.max,us),Ai.subVectors(t.a,us),Ri.subVectors(t.b,us),Ci.subVectors(t.c,us),Bn.subVectors(Ri,Ai),Hn.subVectors(Ci,Ri),ri.subVectors(Ai,Ci);let e=[0,-Bn.z,Bn.y,0,-Hn.z,Hn.y,0,-ri.z,ri.y,Bn.z,0,-Bn.x,Hn.z,0,-Hn.x,ri.z,0,-ri.x,-Bn.y,Bn.x,0,-Hn.y,Hn.x,0,-ri.y,ri.x,0];return!No(e,Ai,Ri,Ci,Ys)||(e=[1,0,0,0,1,0,0,0,1],!No(e,Ai,Ri,Ci,Ys))?!1:($s.crossVectors(Bn,Hn),e=[$s.x,$s.y,$s.z],No(e,Ai,Ri,Ci,Ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},bn=[new w,new w,new w,new w,new w,new w,new w,new w],ln=new w,qs=new gi,Ai=new w,Ri=new w,Ci=new w,Bn=new w,Hn=new w,ri=new w,us=new w,Ys=new w,$s=new w,oi=new w;function No(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){oi.fromArray(s,r);let a=i.x*Math.abs(oi.x)+i.y*Math.abs(oi.y)+i.z*Math.abs(oi.z),l=t.dot(oi),c=e.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ad=new gi,ds=new w,zo=new w,ji=class{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ad.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);let e=ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ds,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add(zo)),this.expandByPoint(ds.copy(t.center).sub(zo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Sn=new w,Oo=new w,Zs=new w,Vn=new w,Fo=new w,Ks=new w,ko=new w,Lr=class{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Oo.copy(t).add(e).multiplyScalar(.5),Zs.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(Oo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Zs),a=Vn.dot(this.direction),l=-Vn.dot(Zs),c=Vn.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Oo).addScaledVector(Zs,f),p}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);let n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,i,r){Fo.subVectors(e,t),Ks.subVectors(n,t),ko.crossVectors(Fo,Ks);let o=this.direction.dot(ko),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,t);let l=a*this.direction.dot(Ks.crossVectors(Vn,Ks));if(l<0)return null;let c=a*this.direction.dot(Fo.cross(Vn));if(c<0||l+c>o)return null;let h=-a*Vn.dot(ko);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},me=class s{constructor(t,e,n,i,r,o,a,l,c,h,u,f,p,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,p,g,x,m)}set(t,e,n,i,r,o,a,l,c,h,u,f,p,g,x,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Pi.setFromMatrixColumn(t,0).length(),r=1/Pi.setFromMatrixColumn(t,1).length(),o=1/Pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,p=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,p=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,p=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rd,t,Cd)}lookAt(t,e,n){let i=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Gn.crossVectors(n,Ze),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Gn.crossVectors(n,Ze)),Gn.normalize(),Js.crossVectors(Ze,Gn),i[0]=Gn.x,i[4]=Js.x,i[8]=Ze.x,i[1]=Gn.y,i[5]=Js.y,i[9]=Ze.y,i[2]=Gn.z,i[6]=Js.z,i[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],v=n[3],_=n[7],T=n[11],P=n[15],A=i[0],R=i[4],B=i[8],M=i[12],E=i[1],k=i[5],G=i[9],nt=i[13],L=i[2],D=i[6],V=i[10],q=i[14],X=i[3],W=i[7],K=i[11],et=i[15];return r[0]=o*A+a*E+l*L+c*X,r[4]=o*R+a*k+l*D+c*W,r[8]=o*B+a*G+l*V+c*K,r[12]=o*M+a*nt+l*q+c*et,r[1]=h*A+u*E+f*L+p*X,r[5]=h*R+u*k+f*D+p*W,r[9]=h*B+u*G+f*V+p*K,r[13]=h*M+u*nt+f*q+p*et,r[2]=g*A+x*E+m*L+d*X,r[6]=g*R+x*k+m*D+d*W,r[10]=g*B+x*G+m*V+d*K,r[14]=g*M+x*nt+m*q+d*et,r[3]=v*A+_*E+T*L+P*X,r[7]=v*R+_*k+T*D+P*W,r[11]=v*B+_*G+T*V+P*K,r[15]=v*M+_*nt+T*q+P*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*p-n*l*p)+x*(+e*l*p-e*c*f+r*o*f-i*o*p+i*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+d*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],v=u*m*c-x*f*c+x*l*p-a*m*p-u*l*d+a*f*d,_=g*f*c-h*m*c-g*l*p+o*m*p+h*l*d-o*f*d,T=h*x*c-g*u*c+g*a*p-o*x*p-h*a*d+o*u*d,P=g*u*l-h*x*l-g*a*f+o*x*f+h*a*m-o*u*m,A=e*v+n*_+i*T+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return t[0]=v*R,t[1]=(x*f*r-u*m*r-x*i*p+n*m*p+u*i*d-n*f*d)*R,t[2]=(a*m*r-x*l*r+x*i*c-n*m*c-a*i*d+n*l*d)*R,t[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*p-n*l*p)*R,t[4]=_*R,t[5]=(h*m*r-g*f*r+g*i*p-e*m*p-h*i*d+e*f*d)*R,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*d-e*l*d)*R,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*p+e*l*p)*R,t[8]=T*R,t[9]=(g*u*r-h*x*r-g*n*p+e*x*p+h*n*d-e*u*d)*R,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*d+e*a*d)*R,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*R,t[12]=P*R,t[13]=(h*x*i-g*u*i+g*n*f-e*x*f-h*n*m+e*u*m)*R,t[14]=(g*a*i-o*x*i-g*n*l+e*x*l+o*n*m-e*a*m)*R,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*R,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,x=o*h,m=o*u,d=a*u,v=l*c,_=l*h,T=l*u,P=n.x,A=n.y,R=n.z;return i[0]=(1-(x+d))*P,i[1]=(p+T)*P,i[2]=(g-_)*P,i[3]=0,i[4]=(p-T)*A,i[5]=(1-(f+d))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(g+_)*R,i[9]=(m-v)*R,i[10]=(1-(f+x))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Pi.set(i[0],i[1],i[2]).length(),o=Pi.set(i[4],i[5],i[6]).length(),a=Pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],cn.copy(this);let c=1/r,h=1/o,u=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,e.setFromRotationMatrix(cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Pn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,g;if(a===Pn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Tr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Pn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*c,p=(n+i)*h,g,x;if(a===Pn)g=(o+r)*u,x=-2*u;else if(a===Tr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Pi=new w,cn=new me,Rd=new w(0,0,0),Cd=new w(1,1,1),Gn=new w,Js=new w,Ze=new w,yc=new me,vc=new ti,Ir=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vc.setFromEuler(this),this.setFromQuaternion(vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ir.DEFAULT_ORDER="XYZ";var Dr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Pd=0,Mc=new w,Li=new ti,En=new me,js=new w,fs=new w,Ld=new w,Id=new ti,bc=new w(1,0,0),Sc=new w(0,1,0),Ec=new w(0,0,1),Dd={type:"added"},Ud={type:"removed"},be=class s extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new w,e=new Ir,n=new ti,i=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new me},normalMatrix:{value:new qt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(bc,t)}rotateY(t){return this.rotateOnAxis(Sc,t)}rotateZ(t){return this.rotateOnAxis(Ec,t)}translateOnAxis(t,e){return Mc.copy(t).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bc,t)}translateY(t){return this.translateOnAxis(Sc,t)}translateZ(t){return this.translateOnAxis(Ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?js.copy(t):js.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(fs,js,this.up):En.lookAt(js,fs,this.up),this.quaternion.setFromRotationMatrix(En),i&&(En.extractRotation(i.matrixWorld),Li.setFromRotationMatrix(En),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Dd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ud)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,t,Ld),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,Id,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};be.DEFAULT_UP=new w(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=new w,Tn=new w,Bo=new w,wn=new w,Ii=new w,Di=new w,Tc=new w,Ho=new w,Vo=new w,Go=new w,Qs=!1,di=class s{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),hn.subVectors(t,e),i.cross(hn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){hn.subVectors(i,e),Tn.subVectors(n,e),Bo.subVectors(t,e);let o=hn.dot(hn),a=hn.dot(Tn),l=hn.dot(Bo),c=Tn.dot(Tn),h=Tn.dot(Bo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getUV(t,e,n,i,r,o,a,l){return Qs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qs=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(o,wn.y),l.addScaledVector(a,wn.z),l)}static isFrontFacing(t,e,n,i){return hn.subVectors(n,e),Tn.subVectors(t,e),hn.cross(Tn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),hn.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Qs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qs=!0),s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Ii.subVectors(i,n),Di.subVectors(r,n),Ho.subVectors(t,n);let l=Ii.dot(Ho),c=Di.dot(Ho);if(l<=0&&c<=0)return e.copy(n);Vo.subVectors(t,i);let h=Ii.dot(Vo),u=Di.dot(Vo);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ii,o);Go.subVectors(t,r);let p=Ii.dot(Go),g=Di.dot(Go);if(g>=0&&p<=g)return e.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Di,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Tc.subVectors(r,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(Tc,a);let d=1/(m+x+f);return o=x*d,a=f*d,e.copy(n).addScaledVector(Ii,o).addScaledVector(Di,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},tr={h:0,s:0,l:0};function Wo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=jt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=bd(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Wo(o,r,t+1/3),this.g=Wo(o,r,t),this.b=Wo(o,r,t-1/3)}return te.toWorkingColorSpace(this,i),this}setStyle(t,e=jt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=jt){let n=Mh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}copyLinearToSRGB(t){return this.r=Io(t.r),this.g=Io(t.g),this.b=Io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=jt){return te.fromWorkingColorSpace(De.copy(this),t),Math.round(Re(De.r*255,0,255))*65536+Math.round(Re(De.g*255,0,255))*256+Math.round(Re(De.b*255,0,255))}getHexString(t=jt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(De.copy(this),e);let n=De.r,i=De.g,r=De.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=jt){te.fromWorkingColorSpace(De.copy(this),t);let e=De.r,n=De.g,i=De.b;return t!==jt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(tr);let n=Po(Wn.h,tr.h,e),i=Po(Wn.s,tr.s,e),r=Po(Wn.l,tr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},De=new Gt;Gt.NAMES=Mh;var Nd=0,Dn=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=_n,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oa,this.blendDst=aa,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_n&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oa&&(n.blendSrc=this.blendSrc),this.blendDst!==aa&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Je=class extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var _e=new w,er=new ct,Me=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ha,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)er.fromBufferAttribute(this,e),er.applyMatrix3(t),this.setXY(e,er.x,er.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ha&&(t.usage=this.usage),t}};var Ur=class extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Nr=class extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ye=class extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}};var zd=0,Qe=new me,Xo=new be,Ui=new w,Ke=new gi,ps=new gi,Ae=new w,Ue=class s extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vh(t)?Nr:Ur)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return Xo.lookAt(t),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ye(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(t){let n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(Ke.min,ps.min),Ke.expandByPoint(Ae),Ae.addVectors(Ke.max,ps.max),Ke.expandByPoint(Ae)):(Ke.expandByPoint(ps.min),Ke.expandByPoint(ps.max))}Ke.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ae.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ae));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ae.fromBufferAttribute(a,c),l&&(Ui.fromBufferAttribute(t,c),Ae.add(Ui)),i=Math.max(i,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Me(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new w,h[E]=new w;let u=new w,f=new w,p=new w,g=new ct,x=new ct,m=new ct,d=new w,v=new w;function _(E,k,G){u.fromArray(i,E*3),f.fromArray(i,k*3),p.fromArray(i,G*3),g.fromArray(o,E*2),x.fromArray(o,k*2),m.fromArray(o,G*2),f.sub(u),p.sub(u),x.sub(g),m.sub(g);let nt=1/(x.x*m.y-m.x*x.y);isFinite(nt)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(nt),v.copy(p).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(nt),c[E].add(d),c[k].add(d),c[G].add(d),h[E].add(v),h[k].add(v),h[G].add(v))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let E=0,k=T.length;E<k;++E){let G=T[E],nt=G.start,L=G.count;for(let D=nt,V=nt+L;D<V;D+=3)_(n[D+0],n[D+1],n[D+2])}let P=new w,A=new w,R=new w,B=new w;function M(E){R.fromArray(r,E*3),B.copy(R);let k=c[E];P.copy(k),P.sub(R.multiplyScalar(R.dot(k))).normalize(),A.crossVectors(B,k);let nt=A.dot(h[E])<0?-1:1;l[E*4]=P.x,l[E*4+1]=P.y,l[E*4+2]=P.z,l[E*4+3]=nt}for(let E=0,k=T.length;E<k;++E){let G=T[E],nt=G.start,L=G.count;for(let D=nt,V=nt+L;D<V;D+=3)M(n[D+0]),M(n[D+1]),M(n[D+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new w,r=new w,o=new w,a=new w,l=new w,c=new w,h=new w,u=new w;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new Me(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wc=new me,ai=new Lr,nr=new ji,Ac=new w,Ni=new w,zi=new w,Oi=new w,qo=new w,ir=new w,sr=new ct,rr=new ct,or=new ct,Rc=new w,Cc=new w,Pc=new w,ar=new w,lr=new w,wt=class extends be{constructor(t=new Ue,e=new Je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(qo.fromBufferAttribute(u,t),o?ir.addScaledVector(qo,h):ir.addScaledVector(qo.sub(e),h))}e.add(ir)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(nr.containsPoint(ai.origin)===!1&&(ai.intersectSphere(nr,Ac)===null||ai.origin.distanceToSquared(Ac)>(t.far-t.near)**2))&&(wc.copy(r).invert(),ai.copy(t.ray).applyMatrix4(wc),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let T=v,P=_;T<P;T+=3){let A=a.getX(T),R=a.getX(T+1),B=a.getX(T+2);i=cr(this,d,t,n,c,h,u,A,R,B),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let v=a.getX(m),_=a.getX(m+1),T=a.getX(m+2);i=cr(this,o,t,n,c,h,u,v,_,T),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=v,P=_;T<P;T+=3){let A=T,R=T+1,B=T+2;i=cr(this,d,t,n,c,h,u,A,R,B),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let v=m,_=m+1,T=m+2;i=cr(this,o,t,n,c,h,u,v,_,T),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Od(s,t,e,n,i,r,o,a){let l;if(t.side===Xe?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Jn,a),l===null)return null;lr.copy(a),lr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(lr);return c<e.near||c>e.far?null:{distance:c,point:lr.clone(),object:s}}function cr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Ni),s.getVertexPosition(l,zi),s.getVertexPosition(c,Oi);let h=Od(s,t,e,n,Ni,zi,Oi,ar);if(h){i&&(sr.fromBufferAttribute(i,a),rr.fromBufferAttribute(i,l),or.fromBufferAttribute(i,c),h.uv=di.getInterpolation(ar,Ni,zi,Oi,sr,rr,or,new ct)),r&&(sr.fromBufferAttribute(r,a),rr.fromBufferAttribute(r,l),or.fromBufferAttribute(r,c),h.uv1=di.getInterpolation(ar,Ni,zi,Oi,sr,rr,or,new ct),h.uv2=h.uv1),o&&(Rc.fromBufferAttribute(o,a),Cc.fromBufferAttribute(o,l),Pc.fromBufferAttribute(o,c),h.normal=di.getInterpolation(ar,Ni,zi,Oi,Rc,Cc,Pc,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new w,materialIndex:0};di.getNormal(Ni,zi,Oi,u.normal),h.face=u}return h}var Ne=class s extends Ue{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2));function g(x,m,d,v,_,T,P,A,R,B,M){let E=T/R,k=P/B,G=T/2,nt=P/2,L=A/2,D=R+1,V=B+1,q=0,X=0,W=new w;for(let K=0;K<V;K++){let et=K*k-nt;for(let ut=0;ut<D;ut++){let H=ut*E-G;W[x]=H*v,W[m]=et*_,W[d]=L,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[d]=A>0?1:-1,h.push(W.x,W.y,W.z),u.push(ut/R),u.push(1-K/B),q+=1}}for(let K=0;K<B;K++)for(let et=0;et<R;et++){let ut=f+et+D*K,H=f+et+D*(K+1),Y=f+(et+1)+D*(K+1),lt=f+(et+1)+D*K;l.push(ut,H,lt),l.push(H,Y,lt),X+=6}a.addGroup(p,X,M),p+=X,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Qi(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Be(s){let t={};for(let e=0;e<s.length;e++){let n=Qi(s[e]);for(let i in n)t[i]=n[i]}return t}function Fd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function bh(s){return s.getRenderTarget()===null?s.outputColorSpace:te.workingColorSpace}var kd={clone:Qi,merge:Be},Bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bd,this.fragmentShader=Hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=Fd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},zr=class extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ve=class extends zr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=wr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Co*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(Co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Co*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Fi=-90,ki=1,ma=class extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ve(Fi,ki,t,e);i.layers=this.layers,this.add(i);let r=new ve(Fi,ki,t,e);r.layers=this.layers,this.add(r);let o=new ve(Fi,ki,t,e);o.layers=this.layers,this.add(o);let a=new ve(Fi,ki,t,e);a.layers=this.layers,this.add(a);let l=new ve(Fi,ki,t,e);l.layers=this.layers,this.add(l);let c=new ve(Fi,ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Or=class extends sn{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Zi,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ga=class extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(ys("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===mi?jt:nn),this.texture=new Or(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ne(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Yn});r.uniforms.tEquirect.value=e;let o=new wt(i,r),a=e.minFilter;return e.minFilter===Ts&&(e.minFilter=tn),new ma(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Yo=new w,Vd=new w,Gd=new qt,Rn=class{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Yo.subVectors(n,e).cross(Vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Yo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Gd.getNormalMatrix(t),i=this.coplanarPoint(Yo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},li=new ji,hr=new w,As=class{constructor(t=new Rn,e=new Rn,n=new Rn,i=new Rn,r=new Rn,o=new Rn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],p=i[8],g=i[9],x=i[10],m=i[11],d=i[12],v=i[13],_=i[14],T=i[15];if(n[0].setComponents(l-r,f-c,m-p,T-d).normalize(),n[1].setComponents(l+r,f+c,m+p,T+d).normalize(),n[2].setComponents(l+o,f+h,m+g,T+v).normalize(),n[3].setComponents(l-o,f-h,m-g,T-v).normalize(),n[4].setComponents(l-a,f-u,m-x,T-_).normalize(),e===Pn)n[5].setComponents(l+a,f+u,m+x,T+_).normalize();else if(e===Tr)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(hr.x=i.normal.x>0?t.max.x:t.min.x,hr.y=i.normal.y>0?t.max.y:t.min.y,hr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(hr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Sh(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Wd(s,t){let e=t.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,f=c.usage,p=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),c.onUploadCallback();let x;if(u instanceof Float32Array)x=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=s.SHORT;else if(u instanceof Uint32Array)x=s.UNSIGNED_INT;else if(u instanceof Int32Array)x=s.INT;else if(u instanceof Int8Array)x=s.BYTE;else if(u instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let f=h.array,p=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),p.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){let d=g[x];e?s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(e?s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var rn=class s extends Ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,p=[],g=[],x=[],m=[];for(let d=0;d<h;d++){let v=d*f-o;for(let _=0;_<c;_++){let T=_*u-r;g.push(T,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){let _=v+c*d,T=v+c*(d+1),P=v+1+c*(d+1),A=v+1+c*d;p.push(_,T,A),p.push(T,P,A)}this.setIndex(p),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(x,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Xd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qd=`#ifdef USE_ALPHAHASH
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
#endif`,Yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jd=`#ifdef USE_AOMAP
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
#endif`,jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qd=`#ifdef USE_BATCHING
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
#endif`,tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rf=`#ifdef USE_IRIDESCENCE
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
#endif`,of=`#ifdef USE_BUMPMAP
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
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mf=`#define PI 3.141592653589793
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
} // validated`,gf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xf=`vec3 transformedNormal = objectNormal;
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
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sf=`
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
}`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,If=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Df=`#ifdef USE_GRADIENTMAP
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
}`,Uf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ff=`uniform bool receiveShadow;
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
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,Bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wf=`PhysicalMaterial material;
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
#endif`,Xf=`struct PhysicalMaterial {
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
}`,qf=`
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
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
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
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,np=`#if defined( USE_POINTS_UV )
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
#endif`,ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,op=`#ifdef USE_MORPHNORMALS
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
#endif`,ap=`#ifdef USE_MORPHTARGETS
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
#endif`,lp=`#ifdef USE_MORPHTARGETS
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
#endif`,cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pp=`#ifdef USE_NORMALMAP
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
#endif`,mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pp=`float getShadowMask() {
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
}`,Lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,Np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kp=`#ifdef USE_TRANSMISSION
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
#endif`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qp=`uniform sampler2D t2D;
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`#include <common>
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
}`,jp=`#if DEPTH_PACKING == 3200
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
}`,Qp=`#define DISTANCE
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
}`,tm=`#define DISTANCE
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
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`uniform float scale;
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
}`,sm=`uniform vec3 diffuse;
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
}`,rm=`#include <common>
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
}`,om=`uniform vec3 diffuse;
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
}`,am=`#define LAMBERT
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
}`,lm=`#define LAMBERT
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
}`,cm=`#define MATCAP
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
}`,hm=`#define MATCAP
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
}`,um=`#define NORMAL
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
}`,dm=`#define NORMAL
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
}`,fm=`#define PHONG
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
}`,pm=`#define PHONG
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
}`,mm=`#define STANDARD
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
}`,gm=`#define STANDARD
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
}`,xm=`#define TOON
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
}`,_m=`#define TOON
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
}`,ym=`uniform float size;
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
}`,vm=`uniform vec3 diffuse;
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
}`,Mm=`#include <common>
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
}`,bm=`uniform vec3 color;
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
}`,Sm=`uniform float rotation;
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
}`,Em=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Xd,alphahash_pars_fragment:qd,alphamap_fragment:Yd,alphamap_pars_fragment:$d,alphatest_fragment:Zd,alphatest_pars_fragment:Kd,aomap_fragment:Jd,aomap_pars_fragment:jd,batching_pars_vertex:Qd,batching_vertex:tf,begin_vertex:ef,beginnormal_vertex:nf,bsdfs:sf,iridescence_fragment:rf,bumpmap_pars_fragment:of,clipping_planes_fragment:af,clipping_planes_pars_fragment:lf,clipping_planes_pars_vertex:cf,clipping_planes_vertex:hf,color_fragment:uf,color_pars_fragment:df,color_pars_vertex:ff,color_vertex:pf,common:mf,cube_uv_reflection_fragment:gf,defaultnormal_vertex:xf,displacementmap_pars_vertex:_f,displacementmap_vertex:yf,emissivemap_fragment:vf,emissivemap_pars_fragment:Mf,colorspace_fragment:bf,colorspace_pars_fragment:Sf,envmap_fragment:Ef,envmap_common_pars_fragment:Tf,envmap_pars_fragment:wf,envmap_pars_vertex:Af,envmap_physical_pars_fragment:kf,envmap_vertex:Rf,fog_vertex:Cf,fog_pars_vertex:Pf,fog_fragment:Lf,fog_pars_fragment:If,gradientmap_pars_fragment:Df,lightmap_fragment:Uf,lightmap_pars_fragment:Nf,lights_lambert_fragment:zf,lights_lambert_pars_fragment:Of,lights_pars_begin:Ff,lights_toon_fragment:Bf,lights_toon_pars_fragment:Hf,lights_phong_fragment:Vf,lights_phong_pars_fragment:Gf,lights_physical_fragment:Wf,lights_physical_pars_fragment:Xf,lights_fragment_begin:qf,lights_fragment_maps:Yf,lights_fragment_end:$f,logdepthbuf_fragment:Zf,logdepthbuf_pars_fragment:Kf,logdepthbuf_pars_vertex:Jf,logdepthbuf_vertex:jf,map_fragment:Qf,map_pars_fragment:tp,map_particle_fragment:ep,map_particle_pars_fragment:np,metalnessmap_fragment:ip,metalnessmap_pars_fragment:sp,morphcolor_vertex:rp,morphnormal_vertex:op,morphtarget_pars_vertex:ap,morphtarget_vertex:lp,normal_fragment_begin:cp,normal_fragment_maps:hp,normal_pars_fragment:up,normal_pars_vertex:dp,normal_vertex:fp,normalmap_pars_fragment:pp,clearcoat_normal_fragment_begin:mp,clearcoat_normal_fragment_maps:gp,clearcoat_pars_fragment:xp,iridescence_pars_fragment:_p,opaque_fragment:yp,packing:vp,premultiplied_alpha_fragment:Mp,project_vertex:bp,dithering_fragment:Sp,dithering_pars_fragment:Ep,roughnessmap_fragment:Tp,roughnessmap_pars_fragment:wp,shadowmap_pars_fragment:Ap,shadowmap_pars_vertex:Rp,shadowmap_vertex:Cp,shadowmask_pars_fragment:Pp,skinbase_vertex:Lp,skinning_pars_vertex:Ip,skinning_vertex:Dp,skinnormal_vertex:Up,specularmap_fragment:Np,specularmap_pars_fragment:zp,tonemapping_fragment:Op,tonemapping_pars_fragment:Fp,transmission_fragment:kp,transmission_pars_fragment:Bp,uv_pars_fragment:Hp,uv_pars_vertex:Vp,uv_vertex:Gp,worldpos_vertex:Wp,background_vert:Xp,background_frag:qp,backgroundCube_vert:Yp,backgroundCube_frag:$p,cube_vert:Zp,cube_frag:Kp,depth_vert:Jp,depth_frag:jp,distanceRGBA_vert:Qp,distanceRGBA_frag:tm,equirect_vert:em,equirect_frag:nm,linedashed_vert:im,linedashed_frag:sm,meshbasic_vert:rm,meshbasic_frag:om,meshlambert_vert:am,meshlambert_frag:lm,meshmatcap_vert:cm,meshmatcap_frag:hm,meshnormal_vert:um,meshnormal_frag:dm,meshphong_vert:fm,meshphong_frag:pm,meshphysical_vert:mm,meshphysical_frag:gm,meshtoon_vert:xm,meshtoon_frag:_m,points_vert:ym,points_frag:vm,shadow_vert:Mm,shadow_frag:bm,sprite_vert:Sm,sprite_frag:Em},st={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},xn={basic:{uniforms:Be([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Be([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Gt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Be([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Be([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Be([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Gt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Be([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Be([st.points,st.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Be([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Be([st.common,st.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Be([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Be([st.sprite,st.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Be([st.common,st.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Be([st.lights,st.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};xn.physical={uniforms:Be([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var ur={r:0,b:0,g:0};function Tm(s,t,e,n,i,r,o){let a=new Gt(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(m,d){let v=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?e:t).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),v=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===jr)?(h===void 0&&(h=new wt(new Ne(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Qi(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=te.getTransfer(_.colorSpace)!==ae,(u!==_||f!==_.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new wt(new rn(2,2),new Un({name:"BackgroundMaterial",uniforms:Qi(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=te.getTransfer(_.colorSpace)!==ae,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,d){m.getRGB(ur,bh(s)),n.buffers.color.setClear(ur.r,ur.g,ur.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:g}}function wm(s,t,e,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(L,D,V,q,X){let W=!1;if(o){let K=x(q,V,D);c!==K&&(c=K,p(c.object)),W=d(L,q,V,X),W&&v(L,q,V,X)}else{let K=D.wireframe===!0;(c.geometry!==q.id||c.program!==V.id||c.wireframe!==K)&&(c.geometry=q.id,c.program=V.id,c.wireframe=K,W=!0)}X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,B(L,D,V,q),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,D,V){let q=V.wireframe===!0,X=a[L.id];X===void 0&&(X={},a[L.id]=X);let W=X[D.id];W===void 0&&(W={},X[D.id]=W);let K=W[q];return K===void 0&&(K=m(f()),W[q]=K),K}function m(L){let D=[],V=[],q=[];for(let X=0;X<i;X++)D[X]=0,V[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:q,object:L,attributes:{},index:null}}function d(L,D,V,q){let X=c.attributes,W=D.attributes,K=0,et=V.getAttributes();for(let ut in et)if(et[ut].location>=0){let Y=X[ut],lt=W[ut];if(lt===void 0&&(ut==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),ut==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor)),Y===void 0||Y.attribute!==lt||lt&&Y.data!==lt.data)return!0;K++}return c.attributesNum!==K||c.index!==q}function v(L,D,V,q){let X={},W=D.attributes,K=0,et=V.getAttributes();for(let ut in et)if(et[ut].location>=0){let Y=W[ut];Y===void 0&&(ut==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),ut==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor));let lt={};lt.attribute=Y,Y&&Y.data&&(lt.data=Y.data),X[ut]=lt,K++}c.attributes=X,c.attributesNum=K,c.index=q}function _(){let L=c.newAttributes;for(let D=0,V=L.length;D<V;D++)L[D]=0}function T(L){P(L,0)}function P(L,D){let V=c.newAttributes,q=c.enabledAttributes,X=c.attributeDivisors;V[L]=1,q[L]===0&&(s.enableVertexAttribArray(L),q[L]=1),X[L]!==D&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,D),X[L]=D)}function A(){let L=c.newAttributes,D=c.enabledAttributes;for(let V=0,q=D.length;V<q;V++)D[V]!==L[V]&&(s.disableVertexAttribArray(V),D[V]=0)}function R(L,D,V,q,X,W,K){K===!0?s.vertexAttribIPointer(L,D,V,X,W):s.vertexAttribPointer(L,D,V,q,X,W)}function B(L,D,V,q){if(n.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let X=q.attributes,W=V.getAttributes(),K=D.defaultAttributeValues;for(let et in W){let ut=W[et];if(ut.location>=0){let H=X[et];if(H===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(H=L.instanceColor)),H!==void 0){let Y=H.normalized,lt=H.itemSize,yt=e.get(H);if(yt===void 0)continue;let _t=yt.buffer,Ut=yt.type,Ot=yt.bytesPerElement,At=n.isWebGL2===!0&&(Ut===s.INT||Ut===s.UNSIGNED_INT||H.gpuType===hh);if(H.isInterleavedBufferAttribute){let Zt=H.data,U=Zt.stride,ze=H.offset;if(Zt.isInstancedInterleavedBuffer){for(let bt=0;bt<ut.locationSize;bt++)P(ut.location+bt,Zt.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Zt.meshPerAttribute*Zt.count)}else for(let bt=0;bt<ut.locationSize;bt++)T(ut.location+bt);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let bt=0;bt<ut.locationSize;bt++)R(ut.location+bt,lt/ut.locationSize,Ut,Y,U*Ot,(ze+lt/ut.locationSize*bt)*Ot,At)}else{if(H.isInstancedBufferAttribute){for(let Zt=0;Zt<ut.locationSize;Zt++)P(ut.location+Zt,H.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Zt=0;Zt<ut.locationSize;Zt++)T(ut.location+Zt);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let Zt=0;Zt<ut.locationSize;Zt++)R(ut.location+Zt,lt/ut.locationSize,Ut,Y,lt*Ot,lt/ut.locationSize*Zt*Ot,At)}}else if(K!==void 0){let Y=K[et];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(ut.location,Y);break;case 3:s.vertexAttrib3fv(ut.location,Y);break;case 4:s.vertexAttrib4fv(ut.location,Y);break;default:s.vertexAttrib1fv(ut.location,Y)}}}}A()}function M(){G();for(let L in a){let D=a[L];for(let V in D){let q=D[V];for(let X in q)g(q[X].object),delete q[X];delete D[V]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;let D=a[L.id];for(let V in D){let q=D[V];for(let X in q)g(q[X].object),delete q[X];delete D[V]}delete a[L.id]}function k(L){for(let D in a){let V=a[D];if(V[L.id]===void 0)continue;let q=V[L.id];for(let X in q)g(q[X].object),delete q[X];delete V[L.id]}}function G(){nt(),h=!0,c!==l&&(c=l,p(c.object))}function nt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:G,resetDefaultState:nt,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:k,initAttributes:_,enableAttribute:T,disableUnusedAttributes:A}}function Am(s,t,e,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let p,g;if(i)p=s,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Rm(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,T=o||t.has("OES_texture_float"),P=_&&T,A=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:T,floatVertexTextures:P,maxSamples:A}}function Cm(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Rn,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,_=v*4,T=d.clippingState||null;l.value=T,T=h(g,f,_,p);for(let P=0;P!==_;++P)T[P]=e[P];d.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let d=p+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,T=p;_!==x;++_,T+=4)o.copy(u[_]).applyMatrix4(v,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Pm(s){let t=new WeakMap;function e(o,a){return a===Ss?o.mapping=Zi:a===la&&(o.mapping=Ki),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ss||a===la)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ga(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Fr=class extends zr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Xi=4,Lc=[.125,.215,.35,.446,.526,.582],ui=20,$o=new Fr,Ic=new Gt,Zo=null,Ko=0,Jo=0,ci=(1+Math.sqrt(5))/2,Bi=1/ci,Dc=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,ci,Bi),new w(0,ci,-Bi),new w(Bi,0,ci),new w(-Bi,0,ci),new w(ci,Bi,0),new w(-ci,Bi,0)],kr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Zo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zo,Ko,Jo),t.scissorTest=!1,dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:ws,format:dn,colorSpace:Ln,depthBuffer:!1},i=Uc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lm(r)),this._blurMaterial=Im(r,t,e)}return i}_compileMaterial(t){let e=new wt(this._lodPlanes[0],t);this._renderer.compile(e,$o)}_sceneToCubeUV(t,e,n,i){let a=new ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ic),h.toneMapping=$n,h.autoClear=!1;let p=new Je({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),g=new wt(new Ne,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Ic),x=!0);for(let d=0;d<6;d++){let v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let _=this._cubeSize;dr(i,v*_,d>2?_:0,_,_),h.setRenderTarget(i),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Zi||t.mapping===Ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nc());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new wt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;dr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,$o)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Dc[(i-1)%Dc.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new wt(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ui-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ui;m>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);let d=[],v=0;for(let R=0;R<ui;++R){let B=R/x,M=Math.exp(-B*B/2);d.push(M),R===0?v+=M:R<m&&(v+=2*M)}for(let R=0;R<d.length;R++)d[R]=d[R]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;let T=this._sizeLods[i],P=3*T*(i>_-Xi?i-_+Xi:0),A=4*(this._cubeSize-T);dr(e,P,A,3*T,2*T),l.setRenderTarget(e),l.render(u,$o)}};function Lm(s){let t=[],e=[],n=[],i=s,r=s-Xi+1+Lc.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Xi?l=Lc[o-s+Xi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,d=1,v=new Float32Array(x*g*p),_=new Float32Array(m*g*p),T=new Float32Array(d*g*p);for(let A=0;A<p;A++){let R=A%3*2/3-1,B=A>2?0:-1,M=[R,B,0,R+2/3,B,0,R+2/3,B+1,0,R,B,0,R+2/3,B+1,0,R,B+1,0];v.set(M,x*g*A),_.set(f,m*g*A);let E=[A,A,A,A,A,A];T.set(E,d*g*A)}let P=new Ue;P.setAttribute("position",new Me(v,x)),P.setAttribute("uv",new Me(_,m)),P.setAttribute("faceIndex",new Me(T,d)),t.push(P),i>Xi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Uc(s,t,e){let n=new In(s,t,e);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function dr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Im(s,t,e){let n=new Float32Array(ui),i=new w(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ja(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Nc(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function zc(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function ja(){return`

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
	`}function Dm(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ss||l===la,h=l===Zi||l===Ki;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new kr(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new kr(s));let f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Um(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Nm(s,t,e,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete i[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],s.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,d=x.length;m<d;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let v=p.array;x=p.version;for(let _=0,T=v.length;_<T;_+=3){let P=v[_+0],A=v[_+1],R=v[_+2];f.push(P,A,A,R,R,P)}}else if(g!==void 0){let v=g.array;x=g.version;for(let _=0,T=v.length/3-1;_<T;_+=3){let P=_+0,A=_+1,R=_+2;f.push(P,A,A,R,R,P)}}else return;let m=new(vh(f)?Nr:Ur)(f,1);m.version=x;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function zm(s,t,e,n){let i=n.isWebGL2,r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,g){s.drawElements(r,g,a,p*l),e.update(g,r,1)}function u(p,g,x){if(x===0)return;let m,d;if(i)m=s,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,a,p*l,x),e.update(g,r,x)}function f(p,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<x;d++)this.render(p[d]/l,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,x);let d=0;for(let v=0;v<x;v++)d+=g[v];e.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Om(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Fm(s,t){return s[0]-t[0]}function km(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Bm(s,t,e){let n={},i=new Float32Array(8),r=new WeakMap,o=new ce,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,x=r.get(h);if(x===void 0||x.count!==g){let L=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let v=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],B=0;v===!0&&(B=1),_===!0&&(B=2),T===!0&&(B=3);let M=h.attributes.position.count*B,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let k=new Float32Array(M*E*4*g),G=new Pr(k,M,E,g);G.type=qn,G.needsUpdate=!0;let nt=B*4;for(let D=0;D<g;D++){let V=P[D],q=A[D],X=R[D],W=M*E*4*D;for(let K=0;K<V.count;K++){let et=K*nt;v===!0&&(o.fromBufferAttribute(V,K),k[W+et+0]=o.x,k[W+et+1]=o.y,k[W+et+2]=o.z,k[W+et+3]=0),_===!0&&(o.fromBufferAttribute(q,K),k[W+et+4]=o.x,k[W+et+5]=o.y,k[W+et+6]=o.z,k[W+et+7]=0),T===!0&&(o.fromBufferAttribute(X,K),k[W+et+8]=o.x,k[W+et+9]=o.y,k[W+et+10]=o.z,k[W+et+11]=X.itemSize===4?o.w:1)}}x={count:g,texture:G,size:new ct(M,E)},r.set(h,x),h.addEventListener("dispose",L)}let m=0;for(let v=0;v<f.length;v++)m+=f[v];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",d),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let p=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<p;_++){let T=g[_];T[0]=_,T[1]=f[_]}g.sort(km);for(let _=0;_<8;_++)_<p&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Fm);let x=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let _=0;_<8;_++){let T=a[_],P=T[0],A=T[1];P!==Number.MAX_SAFE_INTEGER&&A?(x&&h.getAttribute("morphTarget"+_)!==x[P]&&h.setAttribute("morphTarget"+_,x[P]),m&&h.getAttribute("morphNormal"+_)!==m[P]&&h.setAttribute("morphNormal"+_,m[P]),i[_]=A,d+=A):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}let v=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Hm(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Br=class extends sn{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:pi,h!==pi&&h!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===pi&&(n=Xn),n===void 0&&h===Ji&&(n=fi),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:He,this.minFilter=l!==void 0?l:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Eh=new sn,Th=new Br(1,1);Th.compareFunction=yh;var wh=new Pr,Ah=new pa,Rh=new Or,Oc=[],Fc=[],kc=new Float32Array(16),Bc=new Float32Array(9),Hc=new Float32Array(4);function is(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Oc[i];if(r===void 0&&(r=new Float32Array(i),Oc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Se(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ee(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function to(s,t){let e=Fc[t];e===void 0&&(e=new Int32Array(t),Fc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Vm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Gm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2fv(this.addr,t),Ee(e,t)}}function Wm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;s.uniform3fv(this.addr,t),Ee(e,t)}}function Xm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4fv(this.addr,t),Ee(e,t)}}function qm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;Hc.set(n),s.uniformMatrix2fv(this.addr,!1,Hc),Ee(e,n)}}function Ym(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;Bc.set(n),s.uniformMatrix3fv(this.addr,!1,Bc),Ee(e,n)}}function $m(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;kc.set(n),s.uniformMatrix4fv(this.addr,!1,kc),Ee(e,n)}}function Zm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Km(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2iv(this.addr,t),Ee(e,t)}}function Jm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3iv(this.addr,t),Ee(e,t)}}function jm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4iv(this.addr,t),Ee(e,t)}}function Qm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function t0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2uiv(this.addr,t),Ee(e,t)}}function e0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3uiv(this.addr,t),Ee(e,t)}}function n0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4uiv(this.addr,t),Ee(e,t)}}function i0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Th:Eh;e.setTexture2D(t||r,i)}function s0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ah,i)}function r0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Rh,i)}function o0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||wh,i)}function a0(s){switch(s){case 5126:return Vm;case 35664:return Gm;case 35665:return Wm;case 35666:return Xm;case 35674:return qm;case 35675:return Ym;case 35676:return $m;case 5124:case 35670:return Zm;case 35667:case 35671:return Km;case 35668:case 35672:return Jm;case 35669:case 35673:return jm;case 5125:return Qm;case 36294:return t0;case 36295:return e0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return s0;case 35680:case 36300:case 36308:case 36293:return r0;case 36289:case 36303:case 36311:case 36292:return o0}}function l0(s,t){s.uniform1fv(this.addr,t)}function c0(s,t){let e=is(t,this.size,2);s.uniform2fv(this.addr,e)}function h0(s,t){let e=is(t,this.size,3);s.uniform3fv(this.addr,e)}function u0(s,t){let e=is(t,this.size,4);s.uniform4fv(this.addr,e)}function d0(s,t){let e=is(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function f0(s,t){let e=is(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function p0(s,t){let e=is(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function m0(s,t){s.uniform1iv(this.addr,t)}function g0(s,t){s.uniform2iv(this.addr,t)}function x0(s,t){s.uniform3iv(this.addr,t)}function _0(s,t){s.uniform4iv(this.addr,t)}function y0(s,t){s.uniform1uiv(this.addr,t)}function v0(s,t){s.uniform2uiv(this.addr,t)}function M0(s,t){s.uniform3uiv(this.addr,t)}function b0(s,t){s.uniform4uiv(this.addr,t)}function S0(s,t,e){let n=this.cache,i=t.length,r=to(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Eh,r[o])}function E0(s,t,e){let n=this.cache,i=t.length,r=to(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ah,r[o])}function T0(s,t,e){let n=this.cache,i=t.length,r=to(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Rh,r[o])}function w0(s,t,e){let n=this.cache,i=t.length,r=to(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||wh,r[o])}function A0(s){switch(s){case 5126:return l0;case 35664:return c0;case 35665:return h0;case 35666:return u0;case 35674:return d0;case 35675:return f0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return x0;case 35669:case 35673:return _0;case 5125:return y0;case 36294:return v0;case 36295:return M0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return E0;case 35680:case 36300:case 36308:case 36293:return T0;case 36289:case 36303:case 36311:case 36292:return w0}}var xa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=a0(e.type)}},_a=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=A0(e.type)}},ya=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},jo=/(\w+)(\])?(\[|\.)?/g;function Vc(s,t){s.seq.push(t),s.map[t.id]=t}function R0(s,t,e){let n=s.name,i=n.length;for(jo.lastIndex=0;;){let r=jo.exec(n),o=jo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Vc(e,c===void 0?new xa(a,s,t):new _a(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new ya(a),Vc(e,u)),e=u}}}var $i=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);R0(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Gc(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var C0=37297,P0=0;function L0(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function I0(s){let t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(s),n;switch(t===e?n="":t===Er&&e===Sr?n="LinearDisplayP3ToLinearSRGB":t===Sr&&e===Er&&(n="LinearSRGBToLinearDisplayP3"),s){case Ln:case Qr:return[n,"LinearTransferOETF"];case jt:case Ja:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Wc(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+L0(s.getShaderSource(t),o)}else return i}function D0(s,t){let e=I0(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function U0(s,t){let e;switch(t){case Ju:e="Linear";break;case ju:e="Reinhard";break;case Qu:e="OptimizedCineon";break;case td:e="ACESFilmic";break;case nd:e="AgX";break;case ed:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function N0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qi).join(`
`)}function z0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(qi).join(`
`)}function O0(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function F0(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function qi(s){return s!==""}function Xc(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var k0=/^[ \t]*#include +<([\w\d./]+)>/gm;function va(s){return s.replace(k0,H0)}var B0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function H0(s,t){let e=kt[t];if(e===void 0){let n=B0.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return va(e)}var V0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yc(s){return s.replace(V0,G0)}function G0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function $c(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function W0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===lh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Tu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function X0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zi:case Ki:t="ENVMAP_TYPE_CUBE";break;case jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function q0(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ki&&(t="ENVMAP_MODE_REFRACTION"),t}function Y0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Za:t="ENVMAP_BLENDING_MULTIPLY";break;case Zu:t="ENVMAP_BLENDING_MIX";break;case Ku:t="ENVMAP_BLENDING_ADD";break}return t}function $0(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Z0(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=W0(e),c=X0(e),h=q0(e),u=Y0(e),f=$0(e),p=e.isWebGL2?"":N0(e),g=z0(e),x=O0(r),m=i.createProgram(),d,v,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(qi).join(`
`),d.length>0&&(d+=`
`),v=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(qi).join(`
`),v.length>0&&(v+=`
`)):(d=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),v=[p,$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?kt.tonemapping_pars_fragment:"",e.toneMapping!==$n?U0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,D0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qi).join(`
`)),o=va(o),o=Xc(o,e),o=qc(o,e),a=va(a),a=Xc(a,e),a=qc(a,e),o=Yc(o),a=Yc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let T=_+d+o,P=_+v+a,A=Gc(i,i.VERTEX_SHADER,T),R=Gc(i,i.FRAGMENT_SHADER,P);i.attachShader(m,A),i.attachShader(m,R),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function B(G){if(s.debug.checkShaderErrors){let nt=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(A).trim(),D=i.getShaderInfoLog(R).trim(),V=!0,q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,A,R);else{let X=Wc(i,A,"vertex"),W=Wc(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+nt+`
`+X+`
`+W)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(L===""||D==="")&&(q=!1);q&&(G.diagnostics={runnable:V,programLog:nt,vertexShader:{log:L,prefix:d},fragmentShader:{log:D,prefix:v}})}i.deleteShader(A),i.deleteShader(R),M=new $i(i,m),E=F0(i,m)}let M;this.getUniforms=function(){return M===void 0&&B(this),M};let E;this.getAttributes=function(){return E===void 0&&B(this),E};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=i.getProgramParameter(m,C0)),k},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=P0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=R,this}var K0=0,Ma=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ba(t),e.set(t,n)),n}},ba=class{constructor(t){this.id=K0++,this.code=t,this.usedTimes=0}};function J0(s,t,e,n,i,r,o){let a=new Dr,l=new Ma,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,E,k,G,nt){let L=G.fog,D=nt.geometry,V=M.isMeshStandardMaterial?G.environment:null,q=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),X=q&&q.mapping===jr?q.image.height:null,W=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let K=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,et=K!==void 0?K.length:0,ut=0;D.morphAttributes.position!==void 0&&(ut=1),D.morphAttributes.normal!==void 0&&(ut=2),D.morphAttributes.color!==void 0&&(ut=3);let H,Y,lt,yt;if(W){let Oe=xn[W];H=Oe.vertexShader,Y=Oe.fragmentShader}else H=M.vertexShader,Y=M.fragmentShader,l.update(M),lt=l.getVertexShaderID(M),yt=l.getFragmentShaderID(M);let _t=s.getRenderTarget(),Ut=nt.isInstancedMesh===!0,Ot=nt.isBatchedMesh===!0,At=!!M.map,Zt=!!M.matcap,U=!!q,ze=!!M.aoMap,bt=!!M.lightMap,Lt=!!M.bumpMap,mt=!!M.normalMap,ue=!!M.displacementMap,Bt=!!M.emissiveMap,S=!!M.metalnessMap,y=!!M.roughnessMap,z=M.anisotropy>0,j=M.clearcoat>0,Z=M.iridescence>0,Q=M.sheen>0,gt=M.transmission>0,at=z&&!!M.anisotropyMap,dt=j&&!!M.clearcoatMap,Tt=j&&!!M.clearcoatNormalMap,Ht=j&&!!M.clearcoatRoughnessMap,$=Z&&!!M.iridescenceMap,Qt=Z&&!!M.iridescenceThicknessMap,$t=Q&&!!M.sheenColorMap,Pt=Q&&!!M.sheenRoughnessMap,vt=!!M.specularMap,ft=!!M.specularColorMap,Ft=!!M.specularIntensityMap,Jt=gt&&!!M.transmissionMap,fe=gt&&!!M.thicknessMap,Wt=!!M.gradientMap,it=!!M.alphaMap,C=M.alphaTest>0,rt=!!M.alphaHash,ot=!!M.extensions,Rt=!!D.attributes.uv1,St=!!D.attributes.uv2,se=!!D.attributes.uv3,re=$n;return M.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(re=s.toneMapping),{isWebGL2:h,shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:H,fragmentShader:Y,defines:M.defines,customVertexShaderID:lt,customFragmentShaderID:yt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ot,instancing:Ut,instancingColor:Ut&&nt.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_t===null?s.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Ln,map:At,matcap:Zt,envMap:U,envMapMode:U&&q.mapping,envMapCubeUVHeight:X,aoMap:ze,lightMap:bt,bumpMap:Lt,normalMap:mt,displacementMap:f&&ue,emissiveMap:Bt,normalMapObjectSpace:mt&&M.normalMapType===pd,normalMapTangentSpace:mt&&M.normalMapType===_h,metalnessMap:S,roughnessMap:y,anisotropy:z,anisotropyMap:at,clearcoat:j,clearcoatMap:dt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Ht,iridescence:Z,iridescenceMap:$,iridescenceThicknessMap:Qt,sheen:Q,sheenColorMap:$t,sheenRoughnessMap:Pt,specularMap:vt,specularColorMap:ft,specularIntensityMap:Ft,transmission:gt,transmissionMap:Jt,thicknessMap:fe,gradientMap:Wt,opaque:M.transparent===!1&&M.blending===_n,alphaMap:it,alphaTest:C,alphaHash:rt,combine:M.combine,mapUv:At&&x(M.map.channel),aoMapUv:ze&&x(M.aoMap.channel),lightMapUv:bt&&x(M.lightMap.channel),bumpMapUv:Lt&&x(M.bumpMap.channel),normalMapUv:mt&&x(M.normalMap.channel),displacementMapUv:ue&&x(M.displacementMap.channel),emissiveMapUv:Bt&&x(M.emissiveMap.channel),metalnessMapUv:S&&x(M.metalnessMap.channel),roughnessMapUv:y&&x(M.roughnessMap.channel),anisotropyMapUv:at&&x(M.anisotropyMap.channel),clearcoatMapUv:dt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&x(M.sheenRoughnessMap.channel),specularMapUv:vt&&x(M.specularMap.channel),specularColorMapUv:ft&&x(M.specularColorMap.channel),specularIntensityMapUv:Ft&&x(M.specularIntensityMap.channel),transmissionMapUv:Jt&&x(M.transmissionMap.channel),thicknessMapUv:fe&&x(M.thicknessMap.channel),alphaMapUv:it&&x(M.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(mt||z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:Rt,vertexUv2s:St,vertexUv3s:se,pointsUvs:nt.isPoints===!0&&!!D.attributes.uv&&(At||it),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:nt.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:ut,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:re,useLegacyLights:s._useLegacyLights,decodeVideoTexture:At&&M.map.isVideoTexture===!0&&te.getTransfer(M.map.colorSpace)===ae,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===en,flipSided:M.side===Xe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ot&&M.extensions.derivatives===!0,extensionFragDepth:ot&&M.extensions.fragDepth===!0,extensionDrawBuffers:ot&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ot&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ot&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let k in M.defines)E.push(k),E.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(v(E,M),_(E,M),E.push(s.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function v(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function _(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function T(M){let E=g[M.type],k;if(E){let G=xn[E];k=kd.clone(G.uniforms)}else k=M.uniforms;return k}function P(M,E){let k;for(let G=0,nt=c.length;G<nt;G++){let L=c[G];if(L.cacheKey===E){k=L,++k.usedTimes;break}}return k===void 0&&(k=new Z0(s,E,M,r),c.push(k)),k}function A(M){if(--M.usedTimes===0){let E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:T,acquireProgram:P,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:B}}function j0(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Q0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Zc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Kc(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,p,g,x,m){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=m),t++,d}function a(u,f,p,g,x,m){let d=o(u,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function l(u,f,p,g,x,m){let d=o(u,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||Q0),n.length>1&&n.sort(f||Zc),i.length>1&&i.sort(f||Zc)}function h(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function tg(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Kc,s.set(n,[o])):i>=r.length?(o=new Kc,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function eg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new Gt};break;case"SpotLight":e={position:new w,direction:new w,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new w,halfWidth:new w,halfHeight:new w};break}return s[t.id]=e,e}}}function ng(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var ig=0;function sg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function rg(s,t){let e=new eg,n=ng(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new w);let r=new w,o=new me,a=new me;function l(h,u){let f=0,p=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let x=0,m=0,d=0,v=0,_=0,T=0,P=0,A=0,R=0,B=0,M=0;h.sort(sg);let E=u===!0?Math.PI:1;for(let G=0,nt=h.length;G<nt;G++){let L=h[G],D=L.color,V=L.intensity,q=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=D.r*V*E,p+=D.g*V*E,g+=D.b*V*E;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],V);M++}else if(L.isDirectionalLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){let K=L.shadow,et=n.get(L);et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,i.directionalShadow[x]=et,i.directionalShadowMap[x]=X,i.directionalShadowMatrix[x]=L.shadow.matrix,T++}i.directional[x]=W,x++}else if(L.isSpotLight){let W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(D).multiplyScalar(V*E),W.distance=q,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[d]=W;let K=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,K.updateMatrices(L),L.castShadow&&B++),i.spotLightMatrix[d]=K.matrix,L.castShadow){let et=n.get(L);et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,i.spotShadow[d]=et,i.spotShadowMap[d]=X,A++}d++}else if(L.isRectAreaLight){let W=e.get(L);W.color.copy(D).multiplyScalar(V),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[v]=W,v++}else if(L.isPointLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*E),W.distance=L.distance,W.decay=L.decay,L.castShadow){let K=L.shadow,et=n.get(L);et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,et.shadowCameraNear=K.camera.near,et.shadowCameraFar=K.camera.far,i.pointShadow[m]=et,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=L.shadow.matrix,P++}i.point[m]=W,m++}else if(L.isHemisphereLight){let W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(V*E),W.groundColor.copy(L.groundColor).multiplyScalar(V*E),i.hemi[_]=W,_++}}v>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;let k=i.hash;(k.directionalLength!==x||k.pointLength!==m||k.spotLength!==d||k.rectAreaLength!==v||k.hemiLength!==_||k.numDirectionalShadows!==T||k.numPointShadows!==P||k.numSpotShadows!==A||k.numSpotMaps!==R||k.numLightProbes!==M)&&(i.directional.length=x,i.spot.length=d,i.rectArea.length=v,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=A+R-B,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=M,k.directionalLength=x,k.pointLength=m,k.spotLength=d,k.rectAreaLength=v,k.hemiLength=_,k.numDirectionalShadows=T,k.numPointShadows=P,k.numSpotShadows=A,k.numSpotMaps=R,k.numLightProbes=M,i.version=ig++)}function c(h,u){let f=0,p=0,g=0,x=0,m=0,d=u.matrixWorldInverse;for(let v=0,_=h.length;v<_;v++){let T=h[v];if(T.isDirectionalLight){let P=i.directional[f];P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),f++}else if(T.isSpotLight){let P=i.spot[g];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),g++}else if(T.isRectAreaLight){let P=i.rectArea[x];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(d),a.identity(),o.copy(T.matrixWorld),o.premultiply(d),a.extractRotation(o),P.halfWidth.set(T.width*.5,0,0),P.halfHeight.set(0,T.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),x++}else if(T.isPointLight){let P=i.point[p];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(d),p++}else if(T.isHemisphereLight){let P=i.hemi[m];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:i}}function Jc(s,t){let e=new rg(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function og(s,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new Jc(s,t),e.set(r,[l])):o>=a.length?(l=new Jc(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}var Sa=class extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ea=class extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lg=`uniform sampler2D shadow_pass;
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
}`;function cg(s,t,e){let n=new As,i=new ct,r=new ct,o=new ce,a=new Sa({depthPacking:fd}),l=new Ea,c={},h=e.maxTextureSize,u={[Jn]:Xe,[Xe]:Jn,[en]:en},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:ag,fragmentShader:lg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ue;g.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new wt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lh;let d=this.type;this.render=function(A,R,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=s.getRenderTarget(),E=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Yn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let nt=d!==An&&this.type===An,L=d===An&&this.type!==An;for(let D=0,V=A.length;D<V;D++){let q=A[D],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let W=X.getFrameExtents();if(i.multiply(W),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,X.mapSize.y=r.y)),X.map===null||nt===!0||L===!0){let et=this.type!==An?{minFilter:He,magFilter:He}:{};X.map!==null&&X.map.dispose(),X.map=new In(i.x,i.y,et),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();let K=X.getViewportCount();for(let et=0;et<K;et++){let ut=X.getViewport(et);o.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),G.viewport(o),X.updateMatrices(q,et),n=X.getFrustum(),T(R,B,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===An&&v(X,B),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(M,E,k)};function v(A,R){let B=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new In(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,B,f,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,B,p,x,null)}function _(A,R,B,M){let E=null,k=B.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(k!==void 0)E=k;else if(E=B.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let G=E.uuid,nt=R.uuid,L=c[G];L===void 0&&(L={},c[G]=L);let D=L[nt];D===void 0&&(D=E.clone(),L[nt]=D,R.addEventListener("dispose",P)),E=D}if(E.visible=R.visible,E.wireframe=R.wireframe,M===An?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,B.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let G=s.properties.get(E);G.light=B}return E}function T(A,R,B,M,E){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===An)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,A.matrixWorld);let nt=t.update(A),L=A.material;if(Array.isArray(L)){let D=nt.groups;for(let V=0,q=D.length;V<q;V++){let X=D[V],W=L[X.materialIndex];if(W&&W.visible){let K=_(A,W,M,E);A.onBeforeShadow(s,A,R,B,nt,K,X),s.renderBufferDirect(B,null,nt,K,A,X),A.onAfterShadow(s,A,R,B,nt,K,X)}}}else if(L.visible){let D=_(A,L,M,E);A.onBeforeShadow(s,A,R,B,nt,D,null),s.renderBufferDirect(B,null,nt,D,A,null),A.onAfterShadow(s,A,R,B,nt,D,null)}}let G=A.children;for(let nt=0,L=G.length;nt<L;nt++)T(G[nt],R,B,M,E)}function P(A){A.target.removeEventListener("dispose",P);for(let B in c){let M=c[B],E=A.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function hg(s,t,e){let n=e.isWebGL2;function i(){let C=!1,rt=new ce,ot=null,Rt=new ce(0,0,0,0);return{setMask:function(St){ot!==St&&!C&&(s.colorMask(St,St,St,St),ot=St)},setLocked:function(St){C=St},setClear:function(St,se,re,Te,Oe){Oe===!0&&(St*=Te,se*=Te,re*=Te),rt.set(St,se,re,Te),Rt.equals(rt)===!1&&(s.clearColor(St,se,re,Te),Rt.copy(rt))},reset:function(){C=!1,ot=null,Rt.set(-1,0,0,0)}}}function r(){let C=!1,rt=null,ot=null,Rt=null;return{setTest:function(St){St?Ot(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(St){rt!==St&&!C&&(s.depthMask(St),rt=St)},setFunc:function(St){if(ot!==St){switch(St){case Vu:s.depthFunc(s.NEVER);break;case Gu:s.depthFunc(s.ALWAYS);break;case Wu:s.depthFunc(s.LESS);break;case yr:s.depthFunc(s.LEQUAL);break;case Xu:s.depthFunc(s.EQUAL);break;case qu:s.depthFunc(s.GEQUAL);break;case Yu:s.depthFunc(s.GREATER);break;case $u:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ot=St}},setLocked:function(St){C=St},setClear:function(St){Rt!==St&&(s.clearDepth(St),Rt=St)},reset:function(){C=!1,rt=null,ot=null,Rt=null}}}function o(){let C=!1,rt=null,ot=null,Rt=null,St=null,se=null,re=null,Te=null,Oe=null;return{setTest:function(oe){C||(oe?Ot(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(oe){rt!==oe&&!C&&(s.stencilMask(oe),rt=oe)},setFunc:function(oe,Fe,gn){(ot!==oe||Rt!==Fe||St!==gn)&&(s.stencilFunc(oe,Fe,gn),ot=oe,Rt=Fe,St=gn)},setOp:function(oe,Fe,gn){(se!==oe||re!==Fe||Te!==gn)&&(s.stencilOp(oe,Fe,gn),se=oe,re=Fe,Te=gn)},setLocked:function(oe){C=oe},setClear:function(oe){Oe!==oe&&(s.clearStencil(oe),Oe=oe)},reset:function(){C=!1,rt=null,ot=null,Rt=null,St=null,se=null,re=null,Te=null,Oe=null}}}let a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},p={},g=new WeakMap,x=[],m=null,d=!1,v=null,_=null,T=null,P=null,A=null,R=null,B=null,M=new Gt(0,0,0),E=0,k=!1,G=null,nt=null,L=null,D=null,V=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,W=0,K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=W>=2);let et=null,ut={},H=s.getParameter(s.SCISSOR_BOX),Y=s.getParameter(s.VIEWPORT),lt=new ce().fromArray(H),yt=new ce().fromArray(Y);function _t(C,rt,ot,Rt){let St=new Uint8Array(4),se=s.createTexture();s.bindTexture(C,se),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let re=0;re<ot;re++)n&&(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)?s.texImage3D(rt,0,s.RGBA,1,1,Rt,0,s.RGBA,s.UNSIGNED_BYTE,St):s.texImage2D(rt+re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,St);return se}let Ut={};Ut[s.TEXTURE_2D]=_t(s.TEXTURE_2D,s.TEXTURE_2D,1),Ut[s.TEXTURE_CUBE_MAP]=_t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ut[s.TEXTURE_2D_ARRAY]=_t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ut[s.TEXTURE_3D]=_t(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ot(s.DEPTH_TEST),l.setFunc(yr),Bt(!1),S(Il),Ot(s.CULL_FACE),mt(Yn);function Ot(C){f[C]!==!0&&(s.enable(C),f[C]=!0)}function At(C){f[C]!==!1&&(s.disable(C),f[C]=!1)}function Zt(C,rt){return p[C]!==rt?(s.bindFramebuffer(C,rt),p[C]=rt,n&&(C===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=rt),C===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=rt)),!0):!1}function U(C,rt){let ot=x,Rt=!1;if(C)if(ot=g.get(rt),ot===void 0&&(ot=[],g.set(rt,ot)),C.isWebGLMultipleRenderTargets){let St=C.texture;if(ot.length!==St.length||ot[0]!==s.COLOR_ATTACHMENT0){for(let se=0,re=St.length;se<re;se++)ot[se]=s.COLOR_ATTACHMENT0+se;ot.length=St.length,Rt=!0}}else ot[0]!==s.COLOR_ATTACHMENT0&&(ot[0]=s.COLOR_ATTACHMENT0,Rt=!0);else ot[0]!==s.BACK&&(ot[0]=s.BACK,Rt=!0);Rt&&(e.isWebGL2?s.drawBuffers(ot):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ot))}function ze(C){return m!==C?(s.useProgram(C),m=C,!0):!1}let bt={[hi]:s.FUNC_ADD,[Au]:s.FUNC_SUBTRACT,[Ru]:s.FUNC_REVERSE_SUBTRACT};if(n)bt[Nl]=s.MIN,bt[zl]=s.MAX;else{let C=t.get("EXT_blend_minmax");C!==null&&(bt[Nl]=C.MIN_EXT,bt[zl]=C.MAX_EXT)}let Lt={[Cu]:s.ZERO,[Pu]:s.ONE,[Lu]:s.SRC_COLOR,[oa]:s.SRC_ALPHA,[Ou]:s.SRC_ALPHA_SATURATE,[Nu]:s.DST_COLOR,[Du]:s.DST_ALPHA,[Iu]:s.ONE_MINUS_SRC_COLOR,[aa]:s.ONE_MINUS_SRC_ALPHA,[zu]:s.ONE_MINUS_DST_COLOR,[Uu]:s.ONE_MINUS_DST_ALPHA,[Fu]:s.CONSTANT_COLOR,[ku]:s.ONE_MINUS_CONSTANT_COLOR,[Bu]:s.CONSTANT_ALPHA,[Hu]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(C,rt,ot,Rt,St,se,re,Te,Oe,oe){if(C===Yn){d===!0&&(At(s.BLEND),d=!1);return}if(d===!1&&(Ot(s.BLEND),d=!0),C!==wu){if(C!==v||oe!==k){if((_!==hi||A!==hi)&&(s.blendEquation(s.FUNC_ADD),_=hi,A=hi),oe)switch(C){case _n:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jn:s.blendFunc(s.ONE,s.ONE);break;case Dl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ul:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case _n:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Dl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ul:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}T=null,P=null,R=null,B=null,M.set(0,0,0),E=0,v=C,k=oe}return}St=St||rt,se=se||ot,re=re||Rt,(rt!==_||St!==A)&&(s.blendEquationSeparate(bt[rt],bt[St]),_=rt,A=St),(ot!==T||Rt!==P||se!==R||re!==B)&&(s.blendFuncSeparate(Lt[ot],Lt[Rt],Lt[se],Lt[re]),T=ot,P=Rt,R=se,B=re),(Te.equals(M)===!1||Oe!==E)&&(s.blendColor(Te.r,Te.g,Te.b,Oe),M.copy(Te),E=Oe),v=C,k=!1}function ue(C,rt){C.side===en?At(s.CULL_FACE):Ot(s.CULL_FACE);let ot=C.side===Xe;rt&&(ot=!ot),Bt(ot),C.blending===_n&&C.transparent===!1?mt(Yn):mt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);let Rt=C.stencilWrite;c.setTest(Rt),Rt&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),z(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ot(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(C){G!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),G=C)}function S(C){C!==Su?(Ot(s.CULL_FACE),C!==nt&&(C===Il?s.cullFace(s.BACK):C===Eu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),nt=C}function y(C){C!==L&&(X&&s.lineWidth(C),L=C)}function z(C,rt,ot){C?(Ot(s.POLYGON_OFFSET_FILL),(D!==rt||V!==ot)&&(s.polygonOffset(rt,ot),D=rt,V=ot)):At(s.POLYGON_OFFSET_FILL)}function j(C){C?Ot(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function Z(C){C===void 0&&(C=s.TEXTURE0+q-1),et!==C&&(s.activeTexture(C),et=C)}function Q(C,rt,ot){ot===void 0&&(et===null?ot=s.TEXTURE0+q-1:ot=et);let Rt=ut[ot];Rt===void 0&&(Rt={type:void 0,texture:void 0},ut[ot]=Rt),(Rt.type!==C||Rt.texture!==rt)&&(et!==ot&&(s.activeTexture(ot),et=ot),s.bindTexture(C,rt||Ut[C]),Rt.type=C,Rt.texture=rt)}function gt(){let C=ut[et];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function at(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function dt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Tt(){try{s.texSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ht(){try{s.texSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Qt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $t(){try{s.texStorage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Pt(){try{s.texStorage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function vt(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ft(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ft(C){lt.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),lt.copy(C))}function Jt(C){yt.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),yt.copy(C))}function fe(C,rt){let ot=u.get(rt);ot===void 0&&(ot=new WeakMap,u.set(rt,ot));let Rt=ot.get(C);Rt===void 0&&(Rt=s.getUniformBlockIndex(rt,C.name),ot.set(C,Rt))}function Wt(C,rt){let Rt=u.get(rt).get(C);h.get(rt)!==Rt&&(s.uniformBlockBinding(rt,Rt,C.__bindingPointIndex),h.set(rt,Rt))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},et=null,ut={},p={},g=new WeakMap,x=[],m=null,d=!1,v=null,_=null,T=null,P=null,A=null,R=null,B=null,M=new Gt(0,0,0),E=0,k=!1,G=null,nt=null,L=null,D=null,V=null,lt.set(0,0,s.canvas.width,s.canvas.height),yt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ot,disable:At,bindFramebuffer:Zt,drawBuffers:U,useProgram:ze,setBlending:mt,setMaterial:ue,setFlipSided:Bt,setCullFace:S,setLineWidth:y,setPolygonOffset:z,setScissorTest:j,activeTexture:Z,bindTexture:Q,unbindTexture:gt,compressedTexImage2D:at,compressedTexImage3D:dt,texImage2D:vt,texImage3D:ft,updateUBOMapping:fe,uniformBlockBinding:Wt,texStorage2D:$t,texStorage3D:Pt,texSubImage2D:Tt,texSubImage3D:Ht,compressedTexSubImage2D:$,compressedTexSubImage3D:Qt,scissor:Ft,viewport:Jt,reset:it}}function ug(s,t,e,n,i,r,o){let a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,y){return p?new OffscreenCanvas(S,y):Ar("canvas")}function x(S,y,z,j){let Z=1;if((S.width>j||S.height>j)&&(Z=j/Math.max(S.width,S.height)),Z<1||y===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let Q=y?da:Math.floor,gt=Q(Z*S.width),at=Q(Z*S.height);u===void 0&&(u=g(gt,at));let dt=z?g(gt,at):u;return dt.width=gt,dt.height=at,dt.getContext("2d").drawImage(S,0,0,gt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+gt+"x"+at+")."),dt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return pc(S.width)&&pc(S.height)}function d(S){return a?!1:S.wrapS!==un||S.wrapT!==un||S.minFilter!==He&&S.minFilter!==tn}function v(S,y){return S.generateMipmaps&&y&&S.minFilter!==He&&S.minFilter!==tn}function _(S){s.generateMipmap(S)}function T(S,y,z,j,Z=!1){if(a===!1)return y;if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Q=y;if(y===s.RED&&(z===s.FLOAT&&(Q=s.R32F),z===s.HALF_FLOAT&&(Q=s.R16F),z===s.UNSIGNED_BYTE&&(Q=s.R8)),y===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Q=s.R8UI),z===s.UNSIGNED_SHORT&&(Q=s.R16UI),z===s.UNSIGNED_INT&&(Q=s.R32UI),z===s.BYTE&&(Q=s.R8I),z===s.SHORT&&(Q=s.R16I),z===s.INT&&(Q=s.R32I)),y===s.RG&&(z===s.FLOAT&&(Q=s.RG32F),z===s.HALF_FLOAT&&(Q=s.RG16F),z===s.UNSIGNED_BYTE&&(Q=s.RG8)),y===s.RGBA){let gt=Z?br:te.getTransfer(j);z===s.FLOAT&&(Q=s.RGBA32F),z===s.HALF_FLOAT&&(Q=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Q=gt===ae?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function P(S,y,z){return v(S,z)===!0||S.isFramebufferTexture&&S.minFilter!==He&&S.minFilter!==tn?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function A(S){return S===He||S===Ol||S===bo?s.NEAREST:s.LINEAR}function R(S){let y=S.target;y.removeEventListener("dispose",R),M(y),y.isVideoTexture&&h.delete(y)}function B(S){let y=S.target;y.removeEventListener("dispose",B),k(y)}function M(S){let y=n.get(S);if(y.__webglInit===void 0)return;let z=S.source,j=f.get(z);if(j){let Z=j[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(S),Object.keys(j).length===0&&f.delete(z)}n.remove(S)}function E(S){let y=n.get(S);s.deleteTexture(y.__webglTexture);let z=S.source,j=f.get(z);delete j[y.__cacheKey],o.memory.textures--}function k(S){let y=S.texture,z=n.get(S),j=n.get(y);if(j.__webglTexture!==void 0&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(z.__webglFramebuffer[Z]))for(let Q=0;Q<z.__webglFramebuffer[Z].length;Q++)s.deleteFramebuffer(z.__webglFramebuffer[Z][Q]);else s.deleteFramebuffer(z.__webglFramebuffer[Z]);z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer[Z])}else{if(Array.isArray(z.__webglFramebuffer))for(let Z=0;Z<z.__webglFramebuffer.length;Z++)s.deleteFramebuffer(z.__webglFramebuffer[Z]);else s.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&s.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let Z=0;Z<z.__webglColorRenderbuffer.length;Z++)z.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(z.__webglColorRenderbuffer[Z]);z.__webglDepthRenderbuffer&&s.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let Z=0,Q=y.length;Z<Q;Z++){let gt=n.get(y[Z]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(y[Z])}n.remove(y),n.remove(S)}let G=0;function nt(){G=0}function L(){let S=G;return S>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+i.maxTextures),G+=1,S}function D(S){let y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function V(S,y){let z=n.get(S);if(S.isVideoTexture&&ue(S),S.isRenderTargetTexture===!1&&S.version>0&&z.__version!==S.version){let j=S.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(z,S,y);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+y)}function q(S,y){let z=n.get(S);if(S.version>0&&z.__version!==S.version){lt(z,S,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+y)}function X(S,y){let z=n.get(S);if(S.version>0&&z.__version!==S.version){lt(z,S,y);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+y)}function W(S,y){let z=n.get(S);if(S.version>0&&z.__version!==S.version){yt(z,S,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+y)}let K={[Es]:s.REPEAT,[un]:s.CLAMP_TO_EDGE,[ca]:s.MIRRORED_REPEAT},et={[He]:s.NEAREST,[Ol]:s.NEAREST_MIPMAP_NEAREST,[bo]:s.NEAREST_MIPMAP_LINEAR,[tn]:s.LINEAR,[id]:s.LINEAR_MIPMAP_NEAREST,[Ts]:s.LINEAR_MIPMAP_LINEAR},ut={[md]:s.NEVER,[Md]:s.ALWAYS,[gd]:s.LESS,[yh]:s.LEQUAL,[xd]:s.EQUAL,[vd]:s.GEQUAL,[_d]:s.GREATER,[yd]:s.NOTEQUAL};function H(S,y,z){if(z?(s.texParameteri(S,s.TEXTURE_WRAP_S,K[y.wrapS]),s.texParameteri(S,s.TEXTURE_WRAP_T,K[y.wrapT]),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,K[y.wrapR]),s.texParameteri(S,s.TEXTURE_MAG_FILTER,et[y.magFilter]),s.texParameteri(S,s.TEXTURE_MIN_FILTER,et[y.minFilter])):(s.texParameteri(S,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(S,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==un||y.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(S,s.TEXTURE_MAG_FILTER,A(y.magFilter)),s.texParameteri(S,s.TEXTURE_MIN_FILTER,A(y.minFilter)),y.minFilter!==He&&y.minFilter!==tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(s.texParameteri(S,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(S,s.TEXTURE_COMPARE_FUNC,ut[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let j=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===He||y.minFilter!==bo&&y.minFilter!==Ts||y.type===qn&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===ws&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(s.texParameterf(S,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Y(S,y){let z=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",R));let j=y.source,Z=f.get(j);Z===void 0&&(Z={},f.set(j,Z));let Q=D(y);if(Q!==S.__cacheKey){Z[Q]===void 0&&(Z[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Z[Q].usedTimes++;let gt=Z[S.__cacheKey];gt!==void 0&&(Z[S.__cacheKey].usedTimes--,gt.usedTimes===0&&E(y)),S.__cacheKey=Q,S.__webglTexture=Z[Q].texture}return z}function lt(S,y,z){let j=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=s.TEXTURE_3D);let Z=Y(S,y),Q=y.source;e.bindTexture(j,S.__webglTexture,s.TEXTURE0+z);let gt=n.get(Q);if(Q.version!==gt.__version||Z===!0){e.activeTexture(s.TEXTURE0+z);let at=te.getPrimaries(te.workingColorSpace),dt=y.colorSpace===nn?null:te.getPrimaries(y.colorSpace),Tt=y.colorSpace===nn||at===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let Ht=d(y)&&m(y.image)===!1,$=x(y.image,Ht,!1,i.maxTextureSize);$=Bt(y,$);let Qt=m($)||a,$t=r.convert(y.format,y.colorSpace),Pt=r.convert(y.type),vt=T(y.internalFormat,$t,Pt,y.colorSpace,y.isVideoTexture);H(j,y,Qt);let ft,Ft=y.mipmaps,Jt=a&&y.isVideoTexture!==!0&&vt!==gh,fe=gt.__version===void 0||Z===!0,Wt=P(y,$,Qt);if(y.isDepthTexture)vt=s.DEPTH_COMPONENT,a?y.type===qn?vt=s.DEPTH_COMPONENT32F:y.type===Xn?vt=s.DEPTH_COMPONENT24:y.type===fi?vt=s.DEPTH24_STENCIL8:vt=s.DEPTH_COMPONENT16:y.type===qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===pi&&vt===s.DEPTH_COMPONENT&&y.type!==Ka&&y.type!==Xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Xn,Pt=r.convert(y.type)),y.format===Ji&&vt===s.DEPTH_COMPONENT&&(vt=s.DEPTH_STENCIL,y.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=fi,Pt=r.convert(y.type))),fe&&(Jt?e.texStorage2D(s.TEXTURE_2D,1,vt,$.width,$.height):e.texImage2D(s.TEXTURE_2D,0,vt,$.width,$.height,0,$t,Pt,null));else if(y.isDataTexture)if(Ft.length>0&&Qt){Jt&&fe&&e.texStorage2D(s.TEXTURE_2D,Wt,vt,Ft[0].width,Ft[0].height);for(let it=0,C=Ft.length;it<C;it++)ft=Ft[it],Jt?e.texSubImage2D(s.TEXTURE_2D,it,0,0,ft.width,ft.height,$t,Pt,ft.data):e.texImage2D(s.TEXTURE_2D,it,vt,ft.width,ft.height,0,$t,Pt,ft.data);y.generateMipmaps=!1}else Jt?(fe&&e.texStorage2D(s.TEXTURE_2D,Wt,vt,$.width,$.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,$.width,$.height,$t,Pt,$.data)):e.texImage2D(s.TEXTURE_2D,0,vt,$.width,$.height,0,$t,Pt,$.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Jt&&fe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Wt,vt,Ft[0].width,Ft[0].height,$.depth);for(let it=0,C=Ft.length;it<C;it++)ft=Ft[it],y.format!==dn?$t!==null?Jt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,ft.width,ft.height,$.depth,$t,ft.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,it,vt,ft.width,ft.height,$.depth,0,ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,ft.width,ft.height,$.depth,$t,Pt,ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,it,vt,ft.width,ft.height,$.depth,0,$t,Pt,ft.data)}else{Jt&&fe&&e.texStorage2D(s.TEXTURE_2D,Wt,vt,Ft[0].width,Ft[0].height);for(let it=0,C=Ft.length;it<C;it++)ft=Ft[it],y.format!==dn?$t!==null?Jt?e.compressedTexSubImage2D(s.TEXTURE_2D,it,0,0,ft.width,ft.height,$t,ft.data):e.compressedTexImage2D(s.TEXTURE_2D,it,vt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage2D(s.TEXTURE_2D,it,0,0,ft.width,ft.height,$t,Pt,ft.data):e.texImage2D(s.TEXTURE_2D,it,vt,ft.width,ft.height,0,$t,Pt,ft.data)}else if(y.isDataArrayTexture)Jt?(fe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Wt,vt,$.width,$.height,$.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,$t,Pt,$.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,vt,$.width,$.height,$.depth,0,$t,Pt,$.data);else if(y.isData3DTexture)Jt?(fe&&e.texStorage3D(s.TEXTURE_3D,Wt,vt,$.width,$.height,$.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,$t,Pt,$.data)):e.texImage3D(s.TEXTURE_3D,0,vt,$.width,$.height,$.depth,0,$t,Pt,$.data);else if(y.isFramebufferTexture){if(fe)if(Jt)e.texStorage2D(s.TEXTURE_2D,Wt,vt,$.width,$.height);else{let it=$.width,C=$.height;for(let rt=0;rt<Wt;rt++)e.texImage2D(s.TEXTURE_2D,rt,vt,it,C,0,$t,Pt,null),it>>=1,C>>=1}}else if(Ft.length>0&&Qt){Jt&&fe&&e.texStorage2D(s.TEXTURE_2D,Wt,vt,Ft[0].width,Ft[0].height);for(let it=0,C=Ft.length;it<C;it++)ft=Ft[it],Jt?e.texSubImage2D(s.TEXTURE_2D,it,0,0,$t,Pt,ft):e.texImage2D(s.TEXTURE_2D,it,vt,$t,Pt,ft);y.generateMipmaps=!1}else Jt?(fe&&e.texStorage2D(s.TEXTURE_2D,Wt,vt,$.width,$.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,$t,Pt,$)):e.texImage2D(s.TEXTURE_2D,0,vt,$t,Pt,$);v(y,Qt)&&_(j),gt.__version=Q.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function yt(S,y,z){if(y.image.length!==6)return;let j=Y(S,y),Z=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,S.__webglTexture,s.TEXTURE0+z);let Q=n.get(Z);if(Z.version!==Q.__version||j===!0){e.activeTexture(s.TEXTURE0+z);let gt=te.getPrimaries(te.workingColorSpace),at=y.colorSpace===nn?null:te.getPrimaries(y.colorSpace),dt=y.colorSpace===nn||gt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Tt=y.isCompressedTexture||y.image[0].isCompressedTexture,Ht=y.image[0]&&y.image[0].isDataTexture,$=[];for(let it=0;it<6;it++)!Tt&&!Ht?$[it]=x(y.image[it],!1,!0,i.maxCubemapSize):$[it]=Ht?y.image[it].image:y.image[it],$[it]=Bt(y,$[it]);let Qt=$[0],$t=m(Qt)||a,Pt=r.convert(y.format,y.colorSpace),vt=r.convert(y.type),ft=T(y.internalFormat,Pt,vt,y.colorSpace),Ft=a&&y.isVideoTexture!==!0,Jt=Q.__version===void 0||j===!0,fe=P(y,Qt,$t);H(s.TEXTURE_CUBE_MAP,y,$t);let Wt;if(Tt){Ft&&Jt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,fe,ft,Qt.width,Qt.height);for(let it=0;it<6;it++){Wt=$[it].mipmaps;for(let C=0;C<Wt.length;C++){let rt=Wt[C];y.format!==dn?Pt!==null?Ft?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,C,0,0,rt.width,rt.height,Pt,rt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,C,ft,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,C,0,0,rt.width,rt.height,Pt,vt,rt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,C,ft,rt.width,rt.height,0,Pt,vt,rt.data)}}}else{Wt=y.mipmaps,Ft&&Jt&&(Wt.length>0&&fe++,e.texStorage2D(s.TEXTURE_CUBE_MAP,fe,ft,$[0].width,$[0].height));for(let it=0;it<6;it++)if(Ht){Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,$[it].width,$[it].height,Pt,vt,$[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ft,$[it].width,$[it].height,0,Pt,vt,$[it].data);for(let C=0;C<Wt.length;C++){let ot=Wt[C].image[it].image;Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,C+1,0,0,ot.width,ot.height,Pt,vt,ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,C+1,ft,ot.width,ot.height,0,Pt,vt,ot.data)}}else{Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Pt,vt,$[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ft,Pt,vt,$[it]);for(let C=0;C<Wt.length;C++){let rt=Wt[C];Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,C+1,0,0,Pt,vt,rt.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,C+1,ft,Pt,vt,rt.image[it])}}}v(y,$t)&&_(s.TEXTURE_CUBE_MAP),Q.__version=Z.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function _t(S,y,z,j,Z,Q){let gt=r.convert(z.format,z.colorSpace),at=r.convert(z.type),dt=T(z.internalFormat,gt,at,z.colorSpace);if(!n.get(y).__hasExternalTextures){let Ht=Math.max(1,y.width>>Q),$=Math.max(1,y.height>>Q);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,Q,dt,Ht,$,y.depth,0,gt,at,null):e.texImage2D(Z,Q,dt,Ht,$,0,gt,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,S),mt(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,Z,n.get(z).__webglTexture,0,Lt(y)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,Z,n.get(z).__webglTexture,Q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(S,y,z){if(s.bindRenderbuffer(s.RENDERBUFFER,S),y.depthBuffer&&!y.stencilBuffer){let j=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(z||mt(y)){let Z=y.depthTexture;Z&&Z.isDepthTexture&&(Z.type===qn?j=s.DEPTH_COMPONENT32F:Z.type===Xn&&(j=s.DEPTH_COMPONENT24));let Q=Lt(y);mt(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,j,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,j,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,j,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,S)}else if(y.depthBuffer&&y.stencilBuffer){let j=Lt(y);z&&mt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,j,s.DEPTH24_STENCIL8,y.width,y.height):mt(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,S)}else{let j=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Z=0;Z<j.length;Z++){let Q=j[Z],gt=r.convert(Q.format,Q.colorSpace),at=r.convert(Q.type),dt=T(Q.internalFormat,gt,at,Q.colorSpace),Tt=Lt(y);z&&mt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,dt,y.width,y.height):mt(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt,dt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,dt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ot(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V(y.depthTexture,0);let j=n.get(y.depthTexture).__webglTexture,Z=Lt(y);if(y.depthTexture.format===pi)mt(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(y.depthTexture.format===Ji)mt(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function At(S){let y=n.get(S),z=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ot(y.__webglFramebuffer,S)}else if(z){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]=s.createRenderbuffer(),Ut(y.__webglDepthbuffer[j],S,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),Ut(y.__webglDepthbuffer,S,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(S,y,z){let j=n.get(S);y!==void 0&&_t(j.__webglFramebuffer,S,S.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&At(S)}function U(S){let y=S.texture,z=n.get(S),j=n.get(y);S.addEventListener("dispose",B),S.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=y.version,o.memory.textures++);let Z=S.isWebGLCubeRenderTarget===!0,Q=S.isWebGLMultipleRenderTargets===!0,gt=m(S)||a;if(Z){z.__webglFramebuffer=[];for(let at=0;at<6;at++)if(a&&y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[at]=[];for(let dt=0;dt<y.mipmaps.length;dt++)z.__webglFramebuffer[at][dt]=s.createFramebuffer()}else z.__webglFramebuffer[at]=s.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let at=0;at<y.mipmaps.length;at++)z.__webglFramebuffer[at]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(Q)if(i.drawBuffers){let at=S.texture;for(let dt=0,Tt=at.length;dt<Tt;dt++){let Ht=n.get(at[dt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&mt(S)===!1){let at=Q?y:[y];z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let dt=0;dt<at.length;dt++){let Tt=at[dt];z.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[dt]);let Ht=r.convert(Tt.format,Tt.colorSpace),$=r.convert(Tt.type),Qt=T(Tt.internalFormat,Ht,$,Tt.colorSpace,S.isXRRenderTarget===!0),$t=Lt(S);s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,Qt,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,z.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),S.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Ut(z.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),H(s.TEXTURE_CUBE_MAP,y,gt);for(let at=0;at<6;at++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let dt=0;dt<y.mipmaps.length;dt++)_t(z.__webglFramebuffer[at][dt],S,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,dt);else _t(z.__webglFramebuffer[at],S,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);v(y,gt)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Q){let at=S.texture;for(let dt=0,Tt=at.length;dt<Tt;dt++){let Ht=at[dt],$=n.get(Ht);e.bindTexture(s.TEXTURE_2D,$.__webglTexture),H(s.TEXTURE_2D,Ht,gt),_t(z.__webglFramebuffer,S,Ht,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),v(Ht,gt)&&_(s.TEXTURE_2D)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?at=S.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,j.__webglTexture),H(at,y,gt),a&&y.mipmaps&&y.mipmaps.length>0)for(let dt=0;dt<y.mipmaps.length;dt++)_t(z.__webglFramebuffer[dt],S,y,s.COLOR_ATTACHMENT0,at,dt);else _t(z.__webglFramebuffer,S,y,s.COLOR_ATTACHMENT0,at,0);v(y,gt)&&_(at),e.unbindTexture()}S.depthBuffer&&At(S)}function ze(S){let y=m(S)||a,z=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let j=0,Z=z.length;j<Z;j++){let Q=z[j];if(v(Q,y)){let gt=S.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,at=n.get(Q).__webglTexture;e.bindTexture(gt,at),_(gt),e.unbindTexture()}}}function bt(S){if(a&&S.samples>0&&mt(S)===!1){let y=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],z=S.width,j=S.height,Z=s.COLOR_BUFFER_BIT,Q=[],gt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=n.get(S),dt=S.isWebGLMultipleRenderTargets===!0;if(dt)for(let Tt=0;Tt<y.length;Tt++)e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let Tt=0;Tt<y.length;Tt++){Q.push(s.COLOR_ATTACHMENT0+Tt),S.depthBuffer&&Q.push(gt);let Ht=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(Ht===!1&&(S.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),S.stencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),dt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,at.__webglColorRenderbuffer[Tt]),Ht===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[gt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[gt])),dt){let $=n.get(y[Tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$,0)}s.blitFramebuffer(0,0,z,j,0,0,z,j,Z,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let Tt=0;Tt<y.length;Tt++){e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,at.__webglColorRenderbuffer[Tt]);let Ht=n.get(y[Tt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,Ht,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function Lt(S){return Math.min(i.maxSamples,S.samples)}function mt(S){let y=n.get(S);return a&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ue(S){let y=o.render.frame;h.get(S)!==y&&(h.set(S,y),S.update())}function Bt(S,y){let z=S.colorSpace,j=S.format,Z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===ua||z!==Ln&&z!==nn&&(te.getTransfer(z)===ae?a===!1?t.has("EXT_sRGB")===!0&&j===dn?(S.format=ua,S.minFilter=tn,S.generateMipmaps=!1):y=Rr.sRGBToLinear(y):(j!==dn||Z!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}this.allocateTextureUnit=L,this.resetTextureUnits=nt,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=Zt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=mt}function dg(s,t,e){let n=e.isWebGL2;function i(r,o=nn){let a,l=te.getTransfer(o);if(r===Zn)return s.UNSIGNED_BYTE;if(r===uh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===dh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===sd)return s.BYTE;if(r===rd)return s.SHORT;if(r===Ka)return s.UNSIGNED_SHORT;if(r===hh)return s.INT;if(r===Xn)return s.UNSIGNED_INT;if(r===qn)return s.FLOAT;if(r===ws)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===od)return s.ALPHA;if(r===dn)return s.RGBA;if(r===ad)return s.LUMINANCE;if(r===ld)return s.LUMINANCE_ALPHA;if(r===pi)return s.DEPTH_COMPONENT;if(r===Ji)return s.DEPTH_STENCIL;if(r===ua)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===cd)return s.RED;if(r===fh)return s.RED_INTEGER;if(r===hd)return s.RG;if(r===ph)return s.RG_INTEGER;if(r===mh)return s.RGBA_INTEGER;if(r===So||r===Eo||r===To||r===wo)if(l===ae)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===So)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Eo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===To)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===So)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Eo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===To)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fl||r===kl||r===Bl||r===Hl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Fl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Vl||r===Gl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Vl)return l===ae?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Gl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wl||r===Xl||r===ql||r===Yl||r===$l||r===Zl||r===Kl||r===Jl||r===jl||r===Ql||r===tc||r===ec||r===nc||r===ic)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Wl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ql)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$l)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ql)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===tc)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ec)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nc)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ic)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ao||r===sc||r===rc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Ao)return l===ae?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===rc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ud||r===oc||r===ac||r===lc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ao)return a.COMPRESSED_RED_RGTC1_EXT;if(r===oc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ac)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===fi?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Ta=class extends ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ee=class extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}},fg={type:"move"},vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},wa=class extends Qn{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,x=e.getContextAttributes(),m=null,d=null,v=[],_=[],T=new ct,P=null,A=new ve;A.layers.enable(1),A.viewport=new ce;let R=new ve;R.layers.enable(2),R.viewport=new ce;let B=[A,R],M=new Ta;M.layers.enable(1),M.layers.enable(2);let E=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Y=v[H];return Y===void 0&&(Y=new vs,v[H]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(H){let Y=v[H];return Y===void 0&&(Y=new vs,v[H]=Y),Y.getGripSpace()},this.getHand=function(H){let Y=v[H];return Y===void 0&&(Y=new vs,v[H]=Y),Y.getHandSpace()};function G(H){let Y=_.indexOf(H.inputSource);if(Y===-1)return;let lt=v[Y];lt!==void 0&&(lt.update(H.inputSource,H.frame,c||o),lt.dispatchEvent({type:H.type,data:H.inputSource}))}function nt(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",nt),i.removeEventListener("inputsourceschange",L);for(let H=0;H<v.length;H++){let Y=_[H];Y!==null&&(_[H]=null,v[H].disconnect(Y))}E=null,k=null,t.setRenderTarget(m),p=null,f=null,u=null,i=null,d=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",nt),i.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Y={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,Y),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new In(p.framebufferWidth,p.framebufferHeight,{format:dn,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let Y=null,lt=null,yt=null;x.depth&&(yt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=x.stencil?Ji:pi,lt=x.stencil?fi:Xn);let _t={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(_t),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new In(f.textureWidth,f.textureHeight,{format:dn,type:Zn,depthTexture:new Br(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Ut=t.properties.get(d);Ut.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ut.setContext(i),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(H){for(let Y=0;Y<H.removed.length;Y++){let lt=H.removed[Y],yt=_.indexOf(lt);yt>=0&&(_[yt]=null,v[yt].disconnect(lt))}for(let Y=0;Y<H.added.length;Y++){let lt=H.added[Y],yt=_.indexOf(lt);if(yt===-1){for(let Ut=0;Ut<v.length;Ut++)if(Ut>=_.length){_.push(lt),yt=Ut;break}else if(_[Ut]===null){_[Ut]=lt,yt=Ut;break}if(yt===-1)break}let _t=v[yt];_t&&_t.connect(lt)}}let D=new w,V=new w;function q(H,Y,lt){D.setFromMatrixPosition(Y.matrixWorld),V.setFromMatrixPosition(lt.matrixWorld);let yt=D.distanceTo(V),_t=Y.projectionMatrix.elements,Ut=lt.projectionMatrix.elements,Ot=_t[14]/(_t[10]-1),At=_t[14]/(_t[10]+1),Zt=(_t[9]+1)/_t[5],U=(_t[9]-1)/_t[5],ze=(_t[8]-1)/_t[0],bt=(Ut[8]+1)/Ut[0],Lt=Ot*ze,mt=Ot*bt,ue=yt/(-ze+bt),Bt=ue*-ze;Y.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Bt),H.translateZ(ue),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let S=Ot+ue,y=At+ue,z=Lt-Bt,j=mt+(yt-Bt),Z=Zt*At/y*S,Q=U*At/y*S;H.projectionMatrix.makePerspective(z,j,Z,Q,S,y),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function X(H,Y){Y===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Y.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;M.near=R.near=A.near=H.near,M.far=R.far=A.far=H.far,(E!==M.near||k!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,k=M.far);let Y=H.parent,lt=M.cameras;X(M,Y);for(let yt=0;yt<lt.length;yt++)X(lt[yt],Y);lt.length===2?q(M,A,R):M.projectionMatrix.copy(A.projectionMatrix),W(H,M,Y)};function W(H,Y,lt){lt===null?H.matrix.copy(Y.matrixWorld):(H.matrix.copy(lt.matrixWorld),H.matrix.invert(),H.matrix.multiply(Y.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Y.projectionMatrix),H.projectionMatrixInverse.copy(Y.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=wr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)};let K=null;function et(H,Y){if(h=Y.getViewerPose(c||o),g=Y,h!==null){let lt=h.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let yt=!1;lt.length!==M.cameras.length&&(M.cameras.length=0,yt=!0);for(let _t=0;_t<lt.length;_t++){let Ut=lt[_t],Ot=null;if(p!==null)Ot=p.getViewport(Ut);else{let Zt=u.getViewSubImage(f,Ut);Ot=Zt.viewport,_t===0&&(t.setRenderTargetTextures(d,Zt.colorTexture,f.ignoreDepthValues?void 0:Zt.depthStencilTexture),t.setRenderTarget(d))}let At=B[_t];At===void 0&&(At=new ve,At.layers.enable(_t),At.viewport=new ce,B[_t]=At),At.matrix.fromArray(Ut.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(Ut.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),_t===0&&(M.matrix.copy(At.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),yt===!0&&M.cameras.push(At)}}for(let lt=0;lt<v.length;lt++){let yt=_[lt],_t=v[lt];yt!==null&&_t!==void 0&&_t.update(yt,Y,c||o)}K&&K(H,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}let ut=new Sh;ut.setAnimationLoop(et),this.setAnimationLoop=function(H){K=H},this.dispose=function(){}}};function pg(s,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,bh(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,v,_,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,T)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,_):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Xe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Xe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=t.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let _=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*_,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=_*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Xe&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function mg(s,t,e,n){let i={},r={},o=[],a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,_){let T=_.program;n.uniformBlockBinding(v,T)}function c(v,_){let T=i[v.id];T===void 0&&(g(v),T=h(v),i[v.id]=T,v.addEventListener("dispose",m));let P=_.program;n.updateUBOMapping(v,P);let A=t.render.frame;r[v.id]!==A&&(f(v),r[v.id]=A)}function h(v){let _=u();v.__bindingPointIndex=_;let T=s.createBuffer(),P=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,P,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,T),T}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let _=i[v.id],T=v.uniforms,P=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let A=0,R=T.length;A<R;A++){let B=Array.isArray(T[A])?T[A]:[T[A]];for(let M=0,E=B.length;M<E;M++){let k=B[M];if(p(k,A,M,P)===!0){let G=k.__offset,nt=Array.isArray(k.value)?k.value:[k.value],L=0;for(let D=0;D<nt.length;D++){let V=nt[D],q=x(V);typeof V=="number"||typeof V=="boolean"?(k.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,G+L,k.__data)):V.isMatrix3?(k.__data[0]=V.elements[0],k.__data[1]=V.elements[1],k.__data[2]=V.elements[2],k.__data[3]=0,k.__data[4]=V.elements[3],k.__data[5]=V.elements[4],k.__data[6]=V.elements[5],k.__data[7]=0,k.__data[8]=V.elements[6],k.__data[9]=V.elements[7],k.__data[10]=V.elements[8],k.__data[11]=0):(V.toArray(k.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(v,_,T,P){let A=v.value,R=_+"_"+T;if(P[R]===void 0)return typeof A=="number"||typeof A=="boolean"?P[R]=A:P[R]=A.clone(),!0;{let B=P[R];if(typeof A=="number"||typeof A=="boolean"){if(B!==A)return P[R]=A,!0}else if(B.equals(A)===!1)return B.copy(A),!0}return!1}function g(v){let _=v.uniforms,T=0,P=16;for(let R=0,B=_.length;R<B;R++){let M=Array.isArray(_[R])?_[R]:[_[R]];for(let E=0,k=M.length;E<k;E++){let G=M[E],nt=Array.isArray(G.value)?G.value:[G.value];for(let L=0,D=nt.length;L<D;L++){let V=nt[L],q=x(V),X=T%P;X!==0&&P-X<q.boundary&&(T+=P-X),G.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=q.storage}}}let A=T%P;return A>0&&(T+=P-A),v.__size=T,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let T=o.indexOf(_.__bindingPointIndex);o.splice(T,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function d(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:d}}var Rs=class{constructor(t={}){let{canvas:e=Sd(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let p=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,d=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this._useLegacyLights=!1,this.toneMapping=$n,this.toneMappingExposure=1;let _=this,T=!1,P=0,A=0,R=null,B=-1,M=null,E=new ce,k=new ce,G=null,nt=new Gt(0),L=0,D=e.width,V=e.height,q=1,X=null,W=null,K=new ce(0,0,D,V),et=new ce(0,0,D,V),ut=!1,H=new As,Y=!1,lt=!1,yt=null,_t=new me,Ut=new ct,Ot=new w,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Zt(){return R===null?q:1}let U=n;function ze(b,I){for(let O=0;O<b.length;O++){let F=b[O],N=e.getContext(F,I);if(N!==null)return N}return null}try{let b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",rt,!1),U===null){let I=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&I.shift(),U=ze(I,b),U===null)throw ze(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let bt,Lt,mt,ue,Bt,S,y,z,j,Z,Q,gt,at,dt,Tt,Ht,$,Qt,$t,Pt,vt,ft,Ft,Jt;function fe(){bt=new Um(U),Lt=new Rm(U,bt,t),bt.init(Lt),ft=new dg(U,bt,Lt),mt=new hg(U,bt,Lt),ue=new Om(U),Bt=new j0,S=new ug(U,bt,mt,Bt,Lt,ft,ue),y=new Pm(_),z=new Dm(_),j=new Wd(U,Lt),Ft=new wm(U,bt,j,Lt),Z=new Nm(U,j,ue,Ft),Q=new Hm(U,Z,j,ue),$t=new Bm(U,Lt,S),Ht=new Cm(Bt),gt=new J0(_,y,z,bt,Lt,Ft,Ht),at=new pg(_,Bt),dt=new tg,Tt=new og(bt,Lt),Qt=new Tm(_,y,z,mt,Q,f,l),$=new cg(_,Q,Lt),Jt=new mg(U,ue,Lt,mt),Pt=new Am(U,bt,ue,Lt),vt=new zm(U,bt,ue,Lt),ue.programs=gt.programs,_.capabilities=Lt,_.extensions=bt,_.properties=Bt,_.renderLists=dt,_.shadowMap=$,_.state=mt,_.info=ue}fe();let Wt=new wa(_,U);this.xr=Wt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=bt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=bt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(D,V,!1))},this.getSize=function(b){return b.set(D,V)},this.setSize=function(b,I,O=!0){if(Wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=b,V=I,e.width=Math.floor(b*q),e.height=Math.floor(I*q),O===!0&&(e.style.width=b+"px",e.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(D*q,V*q).floor()},this.setDrawingBufferSize=function(b,I,O){D=b,V=I,q=O,e.width=Math.floor(b*O),e.height=Math.floor(I*O),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(K)},this.setViewport=function(b,I,O,F){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,I,O,F),mt.viewport(E.copy(K).multiplyScalar(q).floor())},this.getScissor=function(b){return b.copy(et)},this.setScissor=function(b,I,O,F){b.isVector4?et.set(b.x,b.y,b.z,b.w):et.set(b,I,O,F),mt.scissor(k.copy(et).multiplyScalar(q).floor())},this.getScissorTest=function(){return ut},this.setScissorTest=function(b){mt.setScissorTest(ut=b)},this.setOpaqueSort=function(b){X=b},this.setTransparentSort=function(b){W=b},this.getClearColor=function(b){return b.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor.apply(Qt,arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha.apply(Qt,arguments)},this.clear=function(b=!0,I=!0,O=!0){let F=0;if(b){let N=!1;if(R!==null){let ht=R.texture.format;N=ht===mh||ht===ph||ht===fh}if(N){let ht=R.texture.type,xt=ht===Zn||ht===Xn||ht===Ka||ht===fi||ht===uh||ht===dh,Et=Qt.getClearColor(),Ct=Qt.getClearAlpha(),Vt=Et.r,It=Et.g,Nt=Et.b;xt?(p[0]=Vt,p[1]=It,p[2]=Nt,p[3]=Ct,U.clearBufferuiv(U.COLOR,0,p)):(g[0]=Vt,g[1]=It,g[2]=Nt,g[3]=Ct,U.clearBufferiv(U.COLOR,0,g))}else F|=U.COLOR_BUFFER_BIT}I&&(F|=U.DEPTH_BUFFER_BIT),O&&(F|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),dt.dispose(),Tt.dispose(),Bt.dispose(),y.dispose(),z.dispose(),Q.dispose(),Ft.dispose(),Jt.dispose(),gt.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",Oe),Wt.removeEventListener("sessionend",oe),yt&&(yt.dispose(),yt=null),Fe.stop()};function it(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let b=ue.autoReset,I=$.enabled,O=$.autoUpdate,F=$.needsUpdate,N=$.type;fe(),ue.autoReset=b,$.enabled=I,$.autoUpdate=O,$.needsUpdate=F,$.type=N}function rt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ot(b){let I=b.target;I.removeEventListener("dispose",ot),Rt(I)}function Rt(b){St(b),Bt.remove(b)}function St(b){let I=Bt.get(b).programs;I!==void 0&&(I.forEach(function(O){gt.releaseProgram(O)}),b.isShaderMaterial&&gt.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,O,F,N,ht){I===null&&(I=At);let xt=N.isMesh&&N.matrixWorld.determinant()<0,Et=yu(b,I,O,F,N);mt.setMaterial(F,xt);let Ct=O.index,Vt=1;if(F.wireframe===!0){if(Ct=Z.getWireframeAttribute(O),Ct===void 0)return;Vt=2}let It=O.drawRange,Nt=O.attributes.position,xe=It.start*Vt,$e=(It.start+It.count)*Vt;ht!==null&&(xe=Math.max(xe,ht.start*Vt),$e=Math.min($e,(ht.start+ht.count)*Vt)),Ct!==null?(xe=Math.max(xe,0),$e=Math.min($e,Ct.count)):Nt!=null&&(xe=Math.max(xe,0),$e=Math.min($e,Nt.count));let we=$e-xe;if(we<0||we===1/0)return;Ft.setup(N,F,Et,O,Ct);let Mn,de=Pt;if(Ct!==null&&(Mn=j.get(Ct),de=vt,de.setIndex(Mn)),N.isMesh)F.wireframe===!0?(mt.setLineWidth(F.wireframeLinewidth*Zt()),de.setMode(U.LINES)):de.setMode(U.TRIANGLES);else if(N.isLine){let Xt=F.linewidth;Xt===void 0&&(Xt=1),mt.setLineWidth(Xt*Zt()),N.isLineSegments?de.setMode(U.LINES):N.isLineLoop?de.setMode(U.LINE_LOOP):de.setMode(U.LINE_STRIP)}else N.isPoints?de.setMode(U.POINTS):N.isSprite&&de.setMode(U.TRIANGLES);if(N.isBatchedMesh)de.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)de.renderInstances(xe,we,N.count);else if(O.isInstancedBufferGeometry){let Xt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,_o=Math.min(O.instanceCount,Xt);de.renderInstances(xe,we,_o)}else de.render(xe,we)};function se(b,I,O){b.transparent===!0&&b.side===en&&b.forceSinglePass===!1?(b.side=Xe,b.needsUpdate=!0,Ws(b,I,O),b.side=Jn,b.needsUpdate=!0,Ws(b,I,O),b.side=en):Ws(b,I,O)}this.compile=function(b,I,O=null){O===null&&(O=b),m=Tt.get(O),m.init(),v.push(m),O.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),b!==O&&b.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights(_._useLegacyLights);let F=new Set;return b.traverse(function(N){let ht=N.material;if(ht)if(Array.isArray(ht))for(let xt=0;xt<ht.length;xt++){let Et=ht[xt];se(Et,O,N),F.add(Et)}else se(ht,O,N),F.add(ht)}),v.pop(),m=null,F},this.compileAsync=function(b,I,O=null){let F=this.compile(b,I,O);return new Promise(N=>{function ht(){if(F.forEach(function(xt){Bt.get(xt).currentProgram.isReady()&&F.delete(xt)}),F.size===0){N(b);return}setTimeout(ht,10)}bt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let re=null;function Te(b){re&&re(b)}function Oe(){Fe.stop()}function oe(){Fe.start()}let Fe=new Sh;Fe.setAnimationLoop(Te),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(b){re=b,Wt.setAnimationLoop(b),b===null?Fe.stop():Fe.start()},Wt.addEventListener("sessionstart",Oe),Wt.addEventListener("sessionend",oe),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(I),I=Wt.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,I,R),m=Tt.get(b,v.length),m.init(),v.push(m),_t.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),H.setFromProjectionMatrix(_t),lt=this.localClippingEnabled,Y=Ht.init(this.clippingPlanes,lt),x=dt.get(b,d.length),x.init(),d.push(x),gn(b,I,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(X,W),this.info.render.frame++,Y===!0&&Ht.beginShadows();let O=m.state.shadowsArray;if($.render(O,b,I),Y===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qt.render(x,b),m.setupLights(_._useLegacyLights),I.isArrayCamera){let F=I.cameras;for(let N=0,ht=F.length;N<ht;N++){let xt=F[N];wl(x,b,xt,xt.viewport)}}else wl(x,b,I);R!==null&&(S.updateMultisampleRenderTarget(R),S.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(_,b,I),Ft.resetDefaultState(),B=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function gn(b,I,O,F){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)O=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||H.intersectsSprite(b)){F&&Ot.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_t);let xt=Q.update(b),Et=b.material;Et.visible&&x.push(b,xt,Et,O,Ot.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||H.intersectsObject(b))){let xt=Q.update(b),Et=b.material;if(F&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ot.copy(b.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ot.copy(xt.boundingSphere.center)),Ot.applyMatrix4(b.matrixWorld).applyMatrix4(_t)),Array.isArray(Et)){let Ct=xt.groups;for(let Vt=0,It=Ct.length;Vt<It;Vt++){let Nt=Ct[Vt],xe=Et[Nt.materialIndex];xe&&xe.visible&&x.push(b,xt,xe,O,Ot.z,Nt)}}else Et.visible&&x.push(b,xt,Et,O,Ot.z,null)}}let ht=b.children;for(let xt=0,Et=ht.length;xt<Et;xt++)gn(ht[xt],I,O,F)}function wl(b,I,O,F){let N=b.opaque,ht=b.transmissive,xt=b.transparent;m.setupLightsView(O),Y===!0&&Ht.setGlobalState(_.clippingPlanes,O),ht.length>0&&_u(N,ht,I,O),F&&mt.viewport(E.copy(F)),N.length>0&&Gs(N,I,O),ht.length>0&&Gs(ht,I,O),xt.length>0&&Gs(xt,I,O),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function _u(b,I,O,F){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;let ht=Lt.isWebGL2;yt===null&&(yt=new In(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")?ws:Zn,minFilter:Ts,samples:ht?4:0})),_.getDrawingBufferSize(Ut),ht?yt.setSize(Ut.x,Ut.y):yt.setSize(da(Ut.x),da(Ut.y));let xt=_.getRenderTarget();_.setRenderTarget(yt),_.getClearColor(nt),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();let Et=_.toneMapping;_.toneMapping=$n,Gs(b,O,F),S.updateMultisampleRenderTarget(yt),S.updateRenderTargetMipmap(yt);let Ct=!1;for(let Vt=0,It=I.length;Vt<It;Vt++){let Nt=I[Vt],xe=Nt.object,$e=Nt.geometry,we=Nt.material,Mn=Nt.group;if(we.side===en&&xe.layers.test(F.layers)){let de=we.side;we.side=Xe,we.needsUpdate=!0,Al(xe,O,F,$e,we,Mn),we.side=de,we.needsUpdate=!0,Ct=!0}}Ct===!0&&(S.updateMultisampleRenderTarget(yt),S.updateRenderTargetMipmap(yt)),_.setRenderTarget(xt),_.setClearColor(nt,L),_.toneMapping=Et}function Gs(b,I,O){let F=I.isScene===!0?I.overrideMaterial:null;for(let N=0,ht=b.length;N<ht;N++){let xt=b[N],Et=xt.object,Ct=xt.geometry,Vt=F===null?xt.material:F,It=xt.group;Et.layers.test(O.layers)&&Al(Et,I,O,Ct,Vt,It)}}function Al(b,I,O,F,N,ht){b.onBeforeRender(_,I,O,F,N,ht),b.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(_,I,O,F,b,ht),N.transparent===!0&&N.side===en&&N.forceSinglePass===!1?(N.side=Xe,N.needsUpdate=!0,_.renderBufferDirect(O,I,F,N,b,ht),N.side=Jn,N.needsUpdate=!0,_.renderBufferDirect(O,I,F,N,b,ht),N.side=en):_.renderBufferDirect(O,I,F,N,b,ht),b.onAfterRender(_,I,O,F,N,ht)}function Ws(b,I,O){I.isScene!==!0&&(I=At);let F=Bt.get(b),N=m.state.lights,ht=m.state.shadowsArray,xt=N.state.version,Et=gt.getParameters(b,N.state,ht,I,O),Ct=gt.getProgramCacheKey(Et),Vt=F.programs;F.environment=b.isMeshStandardMaterial?I.environment:null,F.fog=I.fog,F.envMap=(b.isMeshStandardMaterial?z:y).get(b.envMap||F.environment),Vt===void 0&&(b.addEventListener("dispose",ot),Vt=new Map,F.programs=Vt);let It=Vt.get(Ct);if(It!==void 0){if(F.currentProgram===It&&F.lightsStateVersion===xt)return Cl(b,Et),It}else Et.uniforms=gt.getUniforms(b),b.onBuild(O,Et,_),b.onBeforeCompile(Et,_),It=gt.acquireProgram(Et,Ct),Vt.set(Ct,It),F.uniforms=Et.uniforms;let Nt=F.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Nt.clippingPlanes=Ht.uniform),Cl(b,Et),F.needsLights=Mu(b),F.lightsStateVersion=xt,F.needsLights&&(Nt.ambientLightColor.value=N.state.ambient,Nt.lightProbe.value=N.state.probe,Nt.directionalLights.value=N.state.directional,Nt.directionalLightShadows.value=N.state.directionalShadow,Nt.spotLights.value=N.state.spot,Nt.spotLightShadows.value=N.state.spotShadow,Nt.rectAreaLights.value=N.state.rectArea,Nt.ltc_1.value=N.state.rectAreaLTC1,Nt.ltc_2.value=N.state.rectAreaLTC2,Nt.pointLights.value=N.state.point,Nt.pointLightShadows.value=N.state.pointShadow,Nt.hemisphereLights.value=N.state.hemi,Nt.directionalShadowMap.value=N.state.directionalShadowMap,Nt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Nt.spotShadowMap.value=N.state.spotShadowMap,Nt.spotLightMatrix.value=N.state.spotLightMatrix,Nt.spotLightMap.value=N.state.spotLightMap,Nt.pointShadowMap.value=N.state.pointShadowMap,Nt.pointShadowMatrix.value=N.state.pointShadowMatrix),F.currentProgram=It,F.uniformsList=null,It}function Rl(b){if(b.uniformsList===null){let I=b.currentProgram.getUniforms();b.uniformsList=$i.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function Cl(b,I){let O=Bt.get(b);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function yu(b,I,O,F,N){I.isScene!==!0&&(I=At),S.resetTextureUnits();let ht=I.fog,xt=F.isMeshStandardMaterial?I.environment:null,Et=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ln,Ct=(F.isMeshStandardMaterial?z:y).get(F.envMap||xt),Vt=F.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,It=!!O.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Nt=!!O.morphAttributes.position,xe=!!O.morphAttributes.normal,$e=!!O.morphAttributes.color,we=$n;F.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(we=_.toneMapping);let Mn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,de=Mn!==void 0?Mn.length:0,Xt=Bt.get(F),_o=m.state.lights;if(Y===!0&&(lt===!0||b!==M)){let je=b===M&&F.id===B;Ht.setState(F,b,je)}let pe=!1;F.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==_o.state.version||Xt.outputColorSpace!==Et||N.isBatchedMesh&&Xt.batching===!1||!N.isBatchedMesh&&Xt.batching===!0||N.isInstancedMesh&&Xt.instancing===!1||!N.isInstancedMesh&&Xt.instancing===!0||N.isSkinnedMesh&&Xt.skinning===!1||!N.isSkinnedMesh&&Xt.skinning===!0||N.isInstancedMesh&&Xt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Xt.instancingColor===!1&&N.instanceColor!==null||Xt.envMap!==Ct||F.fog===!0&&Xt.fog!==ht||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Ht.numPlanes||Xt.numIntersection!==Ht.numIntersection)||Xt.vertexAlphas!==Vt||Xt.vertexTangents!==It||Xt.morphTargets!==Nt||Xt.morphNormals!==xe||Xt.morphColors!==$e||Xt.toneMapping!==we||Lt.isWebGL2===!0&&Xt.morphTargetsCount!==de)&&(pe=!0):(pe=!0,Xt.__version=F.version);let ii=Xt.currentProgram;pe===!0&&(ii=Ws(F,I,N));let Pl=!1,hs=!1,yo=!1,Le=ii.getUniforms(),si=Xt.uniforms;if(mt.useProgram(ii.program)&&(Pl=!0,hs=!0,yo=!0),F.id!==B&&(B=F.id,hs=!0),Pl||M!==b){Le.setValue(U,"projectionMatrix",b.projectionMatrix),Le.setValue(U,"viewMatrix",b.matrixWorldInverse);let je=Le.map.cameraPosition;je!==void 0&&je.setValue(U,Ot.setFromMatrixPosition(b.matrixWorld)),Lt.logarithmicDepthBuffer&&Le.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Le.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,hs=!0,yo=!0)}if(N.isSkinnedMesh){Le.setOptional(U,N,"bindMatrix"),Le.setOptional(U,N,"bindMatrixInverse");let je=N.skeleton;je&&(Lt.floatVertexTextures?(je.boneTexture===null&&je.computeBoneTexture(),Le.setValue(U,"boneTexture",je.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(Le.setOptional(U,N,"batchingTexture"),Le.setValue(U,"batchingTexture",N._matricesTexture,S));let vo=O.morphAttributes;if((vo.position!==void 0||vo.normal!==void 0||vo.color!==void 0&&Lt.isWebGL2===!0)&&$t.update(N,O,ii),(hs||Xt.receiveShadow!==N.receiveShadow)&&(Xt.receiveShadow=N.receiveShadow,Le.setValue(U,"receiveShadow",N.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(si.envMap.value=Ct,si.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),hs&&(Le.setValue(U,"toneMappingExposure",_.toneMappingExposure),Xt.needsLights&&vu(si,yo),ht&&F.fog===!0&&at.refreshFogUniforms(si,ht),at.refreshMaterialUniforms(si,F,q,V,yt),$i.upload(U,Rl(Xt),si,S)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&($i.upload(U,Rl(Xt),si,S),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Le.setValue(U,"center",N.center),Le.setValue(U,"modelViewMatrix",N.modelViewMatrix),Le.setValue(U,"normalMatrix",N.normalMatrix),Le.setValue(U,"modelMatrix",N.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let je=F.uniformsGroups;for(let Mo=0,bu=je.length;Mo<bu;Mo++)if(Lt.isWebGL2){let Ll=je[Mo];Jt.update(Ll,ii),Jt.bind(Ll,ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ii}function vu(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function Mu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,I,O){Bt.get(b.texture).__webglTexture=I,Bt.get(b.depthTexture).__webglTexture=O;let F=Bt.get(b);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=O===void 0,F.__autoAllocateDepthBuffer||bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,I){let O=Bt.get(b);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,O=0){R=b,P=I,A=O;let F=!0,N=null,ht=!1,xt=!1;if(b){let Ct=Bt.get(b);Ct.__useDefaultFramebuffer!==void 0?(mt.bindFramebuffer(U.FRAMEBUFFER,null),F=!1):Ct.__webglFramebuffer===void 0?S.setupRenderTarget(b):Ct.__hasExternalTextures&&S.rebindTextures(b,Bt.get(b.texture).__webglTexture,Bt.get(b.depthTexture).__webglTexture);let Vt=b.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(xt=!0);let It=Bt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(It[I])?N=It[I][O]:N=It[I],ht=!0):Lt.isWebGL2&&b.samples>0&&S.useMultisampledRTT(b)===!1?N=Bt.get(b).__webglMultisampledFramebuffer:Array.isArray(It)?N=It[O]:N=It,E.copy(b.viewport),k.copy(b.scissor),G=b.scissorTest}else E.copy(K).multiplyScalar(q).floor(),k.copy(et).multiplyScalar(q).floor(),G=ut;if(mt.bindFramebuffer(U.FRAMEBUFFER,N)&&Lt.drawBuffers&&F&&mt.drawBuffers(b,N),mt.viewport(E),mt.scissor(k),mt.setScissorTest(G),ht){let Ct=Bt.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ct.__webglTexture,O)}else if(xt){let Ct=Bt.get(b.texture),Vt=I||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.__webglTexture,O||0,Vt)}B=-1},this.readRenderTargetPixels=function(b,I,O,F,N,ht,xt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(Et=Et[xt]),Et){mt.bindFramebuffer(U.FRAMEBUFFER,Et);try{let Ct=b.texture,Vt=Ct.format,It=Ct.type;if(Vt!==dn&&ft.convert(Vt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Nt=It===ws&&(bt.has("EXT_color_buffer_half_float")||Lt.isWebGL2&&bt.has("EXT_color_buffer_float"));if(It!==Zn&&ft.convert(It)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(It===qn&&(Lt.isWebGL2||bt.has("OES_texture_float")||bt.has("WEBGL_color_buffer_float")))&&!Nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-F&&O>=0&&O<=b.height-N&&U.readPixels(I,O,F,N,ft.convert(Vt),ft.convert(It),ht)}finally{let Ct=R!==null?Bt.get(R).__webglFramebuffer:null;mt.bindFramebuffer(U.FRAMEBUFFER,Ct)}}},this.copyFramebufferToTexture=function(b,I,O=0){let F=Math.pow(2,-O),N=Math.floor(I.image.width*F),ht=Math.floor(I.image.height*F);S.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,O,0,0,b.x,b.y,N,ht),mt.unbindTexture()},this.copyTextureToTexture=function(b,I,O,F=0){let N=I.image.width,ht=I.image.height,xt=ft.convert(O.format),Et=ft.convert(O.type);S.setTexture2D(O,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment),I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,b.x,b.y,N,ht,xt,Et,I.image.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,b.x,b.y,I.mipmaps[0].width,I.mipmaps[0].height,xt,I.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,F,b.x,b.y,xt,Et,I.image),F===0&&O.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),mt.unbindTexture()},this.copyTextureToTexture3D=function(b,I,O,F,N=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ht=b.max.x-b.min.x+1,xt=b.max.y-b.min.y+1,Et=b.max.z-b.min.z+1,Ct=ft.convert(F.format),Vt=ft.convert(F.type),It;if(F.isData3DTexture)S.setTexture3D(F,0),It=U.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)S.setTexture2DArray(F,0),It=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let Nt=U.getParameter(U.UNPACK_ROW_LENGTH),xe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),$e=U.getParameter(U.UNPACK_SKIP_PIXELS),we=U.getParameter(U.UNPACK_SKIP_ROWS),Mn=U.getParameter(U.UNPACK_SKIP_IMAGES),de=O.isCompressedTexture?O.mipmaps[N]:O.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,de.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,de.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,b.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,b.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,b.min.z),O.isDataTexture||O.isData3DTexture?U.texSubImage3D(It,N,I.x,I.y,I.z,ht,xt,Et,Ct,Vt,de.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(It,N,I.x,I.y,I.z,ht,xt,Et,Ct,de.data)):U.texSubImage3D(It,N,I.x,I.y,I.z,ht,xt,Et,Ct,Vt,de),U.pixelStorei(U.UNPACK_ROW_LENGTH,Nt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,$e),U.pixelStorei(U.UNPACK_SKIP_ROWS,we),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Mn),N===0&&F.generateMipmaps&&U.generateMipmap(It),mt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),mt.unbindTexture()},this.resetState=function(){P=0,A=0,R=null,mt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Ja?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===Qr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===jt?mi:xh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===mi?jt:Ln}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Aa=class extends Rs{};Aa.prototype.isWebGL1Renderer=!0;var Hr=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ts=class extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Vr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ha,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ke=new w,Cs=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},es=class extends Dn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hi,ms=new w,Vi=new w,Gi=new w,Wi=new ct,gs=new ct,Ch=new me,fr=new w,xs=new w,pr=new w,jc=new ct,Qo=new ct,Qc=new ct,Ps=class extends be{constructor(t=new es){if(super(),this.isSprite=!0,this.type="Sprite",Hi===void 0){Hi=new Ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Vr(e,5);Hi.setIndex([0,1,2,0,2,3]),Hi.setAttribute("position",new Cs(n,3,0,!1)),Hi.setAttribute("uv",new Cs(n,2,3,!1))}this.geometry=Hi,this.material=t,this.center=new ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vi.setFromMatrixScale(this.matrixWorld),Ch.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vi.multiplyScalar(-Gi.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;mr(fr.set(-.5,-.5,0),Gi,o,Vi,i,r),mr(xs.set(.5,-.5,0),Gi,o,Vi,i,r),mr(pr.set(.5,.5,0),Gi,o,Vi,i,r),jc.set(0,0),Qo.set(1,0),Qc.set(1,1);let a=t.ray.intersectTriangle(fr,xs,pr,!1,ms);if(a===null&&(mr(xs.set(-.5,.5,0),Gi,o,Vi,i,r),Qo.set(0,1),a=t.ray.intersectTriangle(fr,pr,xs,!1,ms),a===null))return;let l=t.ray.origin.distanceTo(ms);l<t.near||l>t.far||e.push({distance:l,point:ms.clone(),uv:di.getInterpolation(ms,fr,xs,pr,jc,Qo,Qc,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function mr(s,t,e,n,i,r){Wi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(gs.x=r*Wi.x-i*Wi.y,gs.y=i*Wi.x+r*Wi.y):gs.copy(Wi),s.copy(t),s.x+=gs.x,s.y+=gs.y,s.applyMatrix4(Ch)}var Ls=class extends Dn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},th=new w,eh=new w,nh=new me,ta=new Lr,gr=new ji,Gr=class extends be{constructor(t=new Ue,e=new Ls){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)th.fromBufferAttribute(e,i-1),eh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=th.distanceTo(eh);t.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(i),gr.radius+=r,t.ray.intersectsSphere(gr)===!1)return;nh.copy(i).invert(),ta.copy(t.ray).applyMatrix4(nh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new w,h=new w,u=new w,f=new w,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let d=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let _=d,T=v-1;_<T;_+=p){let P=g.getX(_),A=g.getX(_+1);if(c.fromBufferAttribute(m,P),h.fromBufferAttribute(m,A),ta.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let B=t.ray.origin.distanceTo(f);B<t.near||B>t.far||e.push({distance:B,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let _=d,T=v-1;_<T;_+=p){if(c.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),ta.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let A=t.ray.origin.distanceTo(f);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};var qe=class extends sn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,p=(o-h)/f;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new ct:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new w,i=[],r=[],o=[],a=new w,l=new me;for(let p=0;p<=t;p++){let g=p/t;i[p]=this.getTangentAt(g,new w)}r[0]=new w,o[0]=new w;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Re(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(Re(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Is=class extends on{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){let n=e||new ct,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ra=class extends Is{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Qa(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,i(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var xr=new w,ea=new Qa,na=new Qa,ia=new Qa,Ca=class extends on{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new w){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(xr.subVectors(i[0],i[1]).add(i[0]),c=xr);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(xr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=xr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ea.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),na.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),ia.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(ea.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),na.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ia.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ea.calc(l),na.calc(l),ia.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new w().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ih(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function gg(s,t){let e=1-s;return e*e*t}function xg(s,t){return 2*(1-s)*s*t}function _g(s,t){return s*s*t}function Ms(s,t,e,n){return gg(s,t)+xg(s,e)+_g(s,n)}function yg(s,t){let e=1-s;return e*e*e*t}function vg(s,t){let e=1-s;return 3*e*e*s*t}function Mg(s,t){return 3*(1-s)*s*s*t}function bg(s,t){return s*s*s*t}function bs(s,t,e,n,i){return yg(s,t)+vg(s,e)+Mg(s,n)+bg(s,i)}var Wr=class extends on{constructor(t=new ct,e=new ct,n=new ct,i=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ct){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(bs(t,i.x,r.x,o.x,a.x),bs(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Pa=class extends on{constructor(t=new w,e=new w,n=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new w){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(bs(t,i.x,r.x,o.x,a.x),bs(t,i.y,r.y,o.y,a.y),bs(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xr=class extends on{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},La=class extends on{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qr=class extends on{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ms(t,i.x,r.x,o.x),Ms(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ia=class extends on{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ms(t,i.x,r.x,o.x),Ms(t,i.y,r.y,o.y),Ms(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yr=class extends on{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(ih(a,l.x,c.x,h.x,u.x),ih(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new ct().fromArray(i))}return this}},sh=Object.freeze({__proto__:null,ArcCurve:Ra,CatmullRomCurve3:Ca,CubicBezierCurve:Wr,CubicBezierCurve3:Pa,EllipseCurve:Is,LineCurve:Xr,LineCurve3:La,QuadraticBezierCurve:qr,QuadraticBezierCurve3:Ia,SplineCurve:Yr}),Da=class extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new sh[i.type]().fromJSON(i))}return this}},Ua=class extends Da{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Xr(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new qr(this.currentPoint.clone(),new ct(t,e),new ct(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Wr(this.currentPoint.clone(),new ct(t,e),new ct(n,i),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Yr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new Is(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Na=class s extends Ue{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Re(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new w,f=new ct,p=new w,g=new w,x=new w,m=0,d=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,p.x=d*1,p.y=-m,p.z=d*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(g)}for(let v=0;v<=e;v++){let _=n+v*h*i,T=Math.sin(_),P=Math.cos(_);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*T,u.y=t[A].y,u.z=t[A].x*P,o.push(u.x,u.y,u.z),f.x=v/e,f.y=A/(t.length-1),a.push(f.x,f.y);let R=l[3*A+0]*T,B=l[3*A+1],M=l[3*A+0]*P;c.push(R,B,M)}}for(let v=0;v<e;v++)for(let _=0;_<t.length-1;_++){let T=_+v*t.length,P=T,A=T+t.length,R=T+t.length+1,B=T+1;r.push(P,A,B),r.push(R,B,A)}this.setIndex(r),this.setAttribute("position",new ye(o,3)),this.setAttribute("uv",new ye(a,2)),this.setAttribute("normal",new ye(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},$r=class s extends Na{constructor(t=1,e=1,n=4,i=8){let r=new Ua;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}};var xi=class s extends Ue{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,x=[],m=n/2,d=0;v(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(f,3)),this.setAttribute("uv",new ye(p,2));function v(){let T=new w,P=new w,A=0,R=(e-t)/n;for(let B=0;B<=r;B++){let M=[],E=B/r,k=E*(e-t)+t;for(let G=0;G<=i;G++){let nt=G/i,L=nt*l+a,D=Math.sin(L),V=Math.cos(L);P.x=k*D,P.y=-E*n+m,P.z=k*V,u.push(P.x,P.y,P.z),T.set(D,R,V).normalize(),f.push(T.x,T.y,T.z),p.push(nt,1-E),M.push(g++)}x.push(M)}for(let B=0;B<i;B++)for(let M=0;M<r;M++){let E=x[M][B],k=x[M+1][B],G=x[M+1][B+1],nt=x[M][B+1];h.push(E,k,nt),h.push(k,G,nt),A+=6}c.addGroup(d,A,0),d+=A}function _(T){let P=g,A=new ct,R=new w,B=0,M=T===!0?t:e,E=T===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,m*E,0),f.push(0,E,0),p.push(.5,.5),g++;let k=g;for(let G=0;G<=i;G++){let L=G/i*l+a,D=Math.cos(L),V=Math.sin(L);R.x=M*V,R.y=m*E,R.z=M*D,u.push(R.x,R.y,R.z),f.push(0,E,0),A.x=D*.5+.5,A.y=V*.5*E+.5,p.push(A.x,A.y),g++}for(let G=0;G<i;G++){let nt=P+G,L=k+G;T===!0?h.push(L,L+1,nt):h.push(L+1,L,nt),B+=3}c.addGroup(d,B,T===!0?1:2),d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var _i=class s extends Ue{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new w,f=new w,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){let v=[],_=d/n,T=0;d===0&&o===0?T=.5/e:d===n&&l===Math.PI&&(T=-.5/e);for(let P=0;P<=e;P++){let A=P/e;u.x=-t*Math.cos(i+A*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(i+A*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(A+T,1-_),v.push(c++)}h.push(v)}for(let d=0;d<n;d++)for(let v=0;v<e;v++){let _=h[d][v+1],T=h[d][v],P=h[d+1][v],A=h[d+1][v+1];(d!==0||o>0)&&p.push(_,T,A),(d!==n-1||l<Math.PI)&&p.push(T,P,A)}this.setIndex(p),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(x,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Dt=class extends Dn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_h,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function _r(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Sg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var ns=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},za=class extends ns{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cc,endingEnd:cc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case hc:r=t,a=2*e-n;break;case uc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hc:o=t,l=2*n-e;break;case uc:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,_=(-1-p)*m+(1.5+p)*x+.5*g,T=p*m-p*x;for(let P=0;P!==a;++P)r[P]=d*o[h+P]+v*o[c+P]+_*o[l+P]+T*o[u+P];return r}},Oa=class extends ns{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Fa=class extends ns{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},fn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_r(e,this.TimeBufferType),this.values=_r(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:_r(t.times,Array),values:_r(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new za(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case vr:e=this.InterpolantFactoryMethodDiscrete;break;case Mr:e=this.InterpolantFactoryMethodLinear;break;case Ro:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return Mr;case this.InterpolantFactoryMethodSmooth:return Ro}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Sg(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ro,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Mr;var yi=class extends fn{};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=vr;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends fn{};ka.prototype.ValueTypeName="color";var Ba=class extends fn{};Ba.prototype.ValueTypeName="number";var Ha=class extends ns{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)ti.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ds=class extends fn{InterpolantFactoryMethodLinear(t){return new Ha(this.times,this.values,this.getValueSize(),t)}};Ds.prototype.ValueTypeName="quaternion";Ds.prototype.DefaultInterpolation=Mr;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends fn{};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=vr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends fn{};Va.prototype.ValueTypeName="vector";var Ga=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Eg=new Ga,Wa=class{constructor(t){this.manager=t!==void 0?t:Eg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Wa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mi=class extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Zr=class extends Mi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},sa=new me,rh=new w,oh=new w,Us=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;rh.setFromMatrixPosition(t.matrixWorld),e.position.copy(rh),oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(oh),e.updateMatrixWorld(),sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Xa=class extends Us{constructor(){super(new ve(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=wr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Kr=class extends Mi{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Xa}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ah=new me,_s=new w,ra=new w,qa=class extends Us{constructor(){super(new ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_s.setFromMatrixPosition(t.matrixWorld),n.position.copy(_s),ra.copy(n.position),ra.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ra),n.updateMatrixWorld(),i.makeTranslation(-_s.x,-_s.y,-_s.z),ah.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ah)}},Nn=class extends Mi{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qa}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ya=class extends Us{constructor(){super(new Fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ei=class extends Mi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Ya}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Jr=class extends Mi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var tl="\\[\\]\\.:\\/",Tg=new RegExp("["+tl+"]","g"),el="[^"+tl+"]",wg="[^"+tl.replace("\\.","")+"]",Ag=/((?:WC+[\/:])*)/.source.replace("WC",el),Rg=/(WCOD+)?/.source.replace("WCOD",wg),Cg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",el),Pg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",el),Lg=new RegExp("^"+Ag+Rg+Cg+Pg+"$"),Ig=["material","materials","bones","map"],$a=class{constructor(t,e,n){let i=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},le=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tg,"")}static parseTrackName(t){let e=Lg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Ig.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=$a;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var he={gravity:800,maxSpeed:250,accel:10,airAccel:10,friction:4,stopSpeed:75,jumpVel:268,stepHeight:18,duckMul:.34,walkMul:.52,standHeight:72,duckHeight:36,eyeStand:64,eyeDuck:28,radius:16,airWishSpeed:30,maxLadderSpeed:200,duckJumpBonus:22},zt={freezeTime:3,buyTime:18,roundTime:115,bombTime:35,plantTime:3.2,defuseTime:10,defuseKitTime:5,startMoney:800,maxMoney:16e3,winReward:3250,winBombReward:3500,lossBase:1400,lossStep:500,lossMax:3400,plantBonus:800,defuseBonus:300,maxRounds:30,winRounds:16,halftimeRound:15,roundEndDelay:4.5,maxTeamSize:5,overtimeMoney:1e4,overtimeHalf:3,overtimeWin:4},Ph={head:4,chest:1,stomach:1.25,leg:.75},Kt={knife:{id:"knife",name:"Knife",cn:"\u5315\u9996",cls:"melee",slot:3,price:0,dmg:55,rpm:90,mag:0,res:0,reload:0,spread:0,moveSpread:0,kick:0,pen:1,kill:1500,speed:250,range:55,sound:"knife"},glock18:{id:"glock18",name:"Glock-18",cn:"\u683C\u6D1B\u514B 18",cls:"pistol",slot:2,price:400,dmg:25,rpm:400,mag:20,res:120,reload:2.2,spread:.55,moveSpread:2.6,kick:.85,pen:.52,kill:300,speed:240,sound:"pistol",auto:!1},usp45:{id:"usp45",name:"USP-45",cn:"USP \u6218\u672F\u624B\u67AA",cls:"pistol",slot:2,price:500,dmg:34,rpm:400,mag:12,res:100,reload:2.2,spread:.45,moveSpread:2.4,kick:.9,pen:.5,kill:300,speed:240,sound:"pistol",auto:!1},deagle:{id:"deagle",name:"Desert Eagle",cn:"\u6C99\u6F20\u4E4B\u9E70",cls:"pistol",slot:2,price:650,dmg:54,rpm:240,mag:7,res:35,reload:2.4,spread:.9,moveSpread:3.4,kick:2,pen:.6,kill:300,speed:240,sound:"deagle",auto:!1},mp5navy:{id:"mp5navy",name:"MP5 Navy",cn:"MP5 \u51B2\u950B\u67AA",cls:"smg",slot:1,price:1500,dmg:26,rpm:750,mag:30,res:120,reload:2.6,spread:.55,moveSpread:1.1,kick:.9,pen:.62,kill:600,speed:245,sound:"smg",auto:!0},ak47:{id:"ak47",name:"AK-47",cn:"AK-47",cls:"rifle",slot:1,price:2500,dmg:36,rpm:600,mag:30,res:90,reload:2.5,spread:.35,moveSpread:1.2,kick:2.2,pen:.775,kill:300,speed:221,sound:"ak47",auto:!0},m4a1:{id:"m4a1",name:"M4A1",cn:"M4A1 \u5361\u5BBE\u67AA",cls:"rifle",slot:1,price:3100,dmg:33,rpm:666,mag:30,res:90,reload:3.1,spread:.3,moveSpread:1.1,kick:1.7,pen:.7,kill:300,speed:225,sound:"m4a1",auto:!0},p90:{id:"p90",name:"P90",cn:"P90",cls:"smg",slot:1,price:2350,dmg:26,rpm:857,mag:50,res:100,reload:3.3,spread:.6,moveSpread:1,kick:.8,pen:.69,kill:300,speed:245,sound:"smg",auto:!0},scout:{id:"scout",name:"Steyr Scout",cn:"\u9E1F\u72D9",cls:"sniper",slot:1,price:2750,dmg:75,rpm:90,mag:10,res:90,reload:2.5,spread:.1,moveSpread:5.5,kick:2.6,pen:.85,kill:300,speed:260,sound:"awp",auto:!1,scope:[.62,.24]},sg552:{id:"sg552",name:"SG552",cn:"Sig 552",cls:"rifle",slot:1,price:3500,dmg:33,rpm:727,mag:30,res:90,reload:3,spread:.32,moveSpread:1.15,kick:1.9,pen:.77,kill:300,speed:225,sound:"m4a1",auto:!0,scope:[.55]},aug:{id:"aug",name:"AUG",cn:"AUG",cls:"rifle",slot:1,price:3500,dmg:32,rpm:666,mag:30,res:90,reload:3.2,spread:.3,moveSpread:1.1,kick:1.8,pen:.77,kill:300,speed:225,sound:"m4a1",auto:!0,scope:[.55]},awp:{id:"awp",name:"AWP",cn:"AWP \u72D9\u51FB\u67AA",cls:"sniper",slot:1,price:4750,dmg:115,rpm:41,mag:10,res:30,reload:2.9,spread:.12,moveSpread:6,kick:4.5,pen:.975,kill:100,speed:210,sound:"awp",auto:!1,scope:[.55,.18]},famas:{id:"famas",name:"FAMAS",cn:"FAMAS",cls:"rifle",slot:1,price:2250,dmg:30,rpm:666,mag:25,res:90,reload:3,spread:.3,moveSpread:1.15,kick:1.7,pen:.7,kill:300,speed:225,sound:"m4a1",auto:!0},galil:{id:"galil",name:"Galil",cn:"\u52A0\u5229\u5C14",cls:"rifle",slot:1,price:2e3,dmg:30,rpm:666,mag:35,res:90,reload:3,spread:.33,moveSpread:1.15,kick:1.8,pen:.77,kill:300,speed:225,sound:"ak47",auto:!0},mac10:{id:"mac10",name:"MAC-10",cn:"MAC-10",cls:"smg",slot:1,price:1400,dmg:29,rpm:857,mag:30,res:100,reload:3.15,spread:.6,moveSpread:1.1,kick:.85,pen:.575,kill:300,speed:245,sound:"smg",auto:!0},xm1014:{id:"xm1014",name:"XM1014",cn:"XM1014 \u9730\u5F39\u67AA",cls:"shotgun",slot:1,price:3e3,dmg:24,rpm:240,mag:7,res:32,reload:3.5,spread:1.5,moveSpread:2.2,kick:2.6,pen:.55,kill:300,speed:220,sound:"deagle",auto:!1,pellets:6},m249:{id:"m249",name:"M249",cn:"M249 \u673A\u67AA",cls:"machinegun",slot:1,price:5750,dmg:32,rpm:750,mag:100,res:200,reload:5.7,spread:.5,moveSpread:1.4,kick:2,pen:.72,kill:300,speed:210,sound:"ak47",auto:!0},elite:{id:"elite",name:"Dual Berettas",cn:"\u53CC\u67AA",cls:"pistol",slot:2,price:800,dmg:26,rpm:500,mag:30,res:120,reload:4.6,spread:.7,moveSpread:3,kick:.8,pen:.5,kill:300,speed:240,sound:"pistol",auto:!1}},nl={ak47:[[2.2,0],[2.05,.04],[1.95,-.04],[1.8,.08],[1.6,.24],[1.45,.4],[1.32,.56],[1.22,.72],[1.14,.86],[1.06,.96],[1,1.04],[.96,1.02],[.92,.86],[.88,.58],[.84,.2],[.8,-.22],[.76,-.62],[.73,-.94],[.7,-1.16],[.68,-1.26],[.66,-1.2],[.64,-1],[.62,-.7],[.6,-.32],[.58,.1],[.57,.5],[.56,.84],[.55,1.04],[.54,1.02],[.53,.82]],m4a1:[[1.7,0],[1.64,.04],[1.56,-.04],[1.46,.06],[1.34,.16],[1.22,.28],[1.12,.4],[1.04,.52],[.97,.62],[.91,.7],[.86,.74],[.82,.7],[.79,.56],[.76,.34],[.74,.06],[.72,-.22],[.7,-.46],[.68,-.64],[.66,-.74],[.64,-.74],[.62,-.62],[.6,-.42],[.58,-.16],[.57,.1],[.56,.34],[.55,.52],[.54,.62],[.53,.6],[.52,.48],[.51,.3]],mp5navy:[[.9,0],[.86,.03],[.82,-.03],[.78,.05],[.74,.1],[.7,.16],[.67,.22],[.64,.27],[.62,.31],[.6,.34],[.58,.35],[.56,.34],[.55,.3],[.54,.24],[.53,.16],[.52,.08],[.51,0],[.5,-.08],[.49,-.15],[.48,-.2],[.47,-.22],[.46,-.22],[.45,-.19],[.45,-.14],[.44,-.08],[.44,-.02],[.43,.05],[.43,.11],[.42,.15],[.42,.17]],p90:[[.8,0],[.77,.03],[.74,-.03],[.71,.05],[.68,.09],[.65,.14],[.62,.19],[.6,.23],[.58,.27],[.56,.29],[.54,.3],[.53,.29],[.52,.26],[.51,.21],[.5,.14],[.49,.07],[.48,0],[.47,-.07],[.46,-.13],[.45,-.17],[.44,-.19],[.43,-.19],[.43,-.16],[.42,-.12],[.42,-.07],[.41,-.02],[.41,.04],[.4,.09],[.4,.13],[.4,.15]]};function Lh(s,t){let e=nl[s.id],n=1;if(!e)if(s.id==="sg552")e=nl.m4a1,n=1.08;else if(s.id==="aug")e=nl.m4a1,n=1.02;else return[s.kick,0];let i=e[Math.min(Math.max(t,1)-1,e.length-1)];return[i[0]*n,i[1]*n]}var eo={he:3,flash:2,smoke:1.8},On={kevlar:{id:"kevlar",name:"Kevlar Vest",cn:"\u9632\u5F39\u8863",price:650},kevlarhelm:{id:"kevlarhelm",name:"Kevlar + Helmet",cn:"\u9632\u5F39\u8863 + \u5934\u76D4",price:1e3},defusekit:{id:"defusekit",name:"Defuse Kit",cn:"\u62C6\u5F39\u5DE5\u5177",price:200,team:"CT"},hegrenade:{id:"hegrenade",name:"HE Grenade",cn:"\u9AD8\u7206\u624B\u96F7",price:300,grenade:"he"},flashbang:{id:"flashbang",name:"Flashbang",cn:"\u95EA\u5149\u5F39",price:200,grenade:"flash"},smokegrenade:{id:"smokegrenade",name:"Smoke Grenade",cn:"\u70DF\u96FE\u5F39",price:300,grenade:"smoke"}},il={handguns:{title:"\u624B\u67AA",items:["glock18","usp45","deagle","elite"]},smgs:{title:"\u51B2\u950B\u67AA",items:["mp5navy","p90","mac10"]},shotguns:{title:"\u9730\u5F39\u67AA",items:["xm1014"]},rifles:{title:"\u6B65\u67AA",items:["ak47","m4a1","galil","famas","sg552","aug"]},sniper:{title:"\u72D9\u51FB\u67AA",items:["scout","awp"]},machineguns:{title:"\u673A\u67AA",items:["m249"]},gear:{title:"\u88C5\u5907",items:["kevlar","kevlarhelm","defusekit"]},grenades:{title:"\u6295\u63B7\u7269",items:["hegrenade","flashbang","smokegrenade"]}},Ih={T:["glock18","elite","deagle","ak47","galil","sg552","famas","awp","scout","mp5navy","p90","mac10","xm1014","m249"],CT:["usp45","deagle","m4a1","famas","aug","awp","scout","mp5navy","p90","xm1014","m249"]};var ss={forward:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD",jump:"Space",duck:"ControlLeft",walk:"ShiftLeft",use:"KeyE",reload:"KeyR",buy:"KeyB",lastWeapon:"KeyQ",slot1:"Digit1",slot2:"Digit2",slot3:"Digit3",slot4:"Digit4",flashlight:"KeyF",drop:"KeyG",scoreboard:"Tab"},Dh=[["forward","\u524D\u8FDB"],["back","\u540E\u9000"],["left","\u5DE6\u79FB"],["right","\u53F3\u79FB"],["jump","\u8DF3\u8DC3"],["duck","\u4E0B\u8E72"],["walk","\u9759\u6B65"],["use","\u4F7F\u7528 / \u5B89\u653E"],["reload","\u6362\u5F39"],["lastWeapon","\u4E0A\u4E00\u628A\u6B66\u5668"],["slot1","\u4E3B\u6B66\u5668"],["slot2","\u624B\u67AA"],["slot3","\u5315\u9996"],["slot4","\u624B\u96F7"],["flashlight","\u624B\u7535\u7B52"],["drop","\u4E22\u5F03\u6B66\u5668"],["buy","\u8D2D\u4E70\u83DC\u5355"],["scoreboard","\u8BA1\u5206\u677F"]],no={Space:"\u7A7A\u683C",ControlLeft:"\u5DE6 Ctrl",ShiftLeft:"\u5DE6 Shift",Tab:"Tab",AltLeft:"\u5DE6 Alt",Escape:"Esc",Backspace:"\u9000\u683C",Enter:"\u56DE\u8F66",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",CapsLock:"CapsLock",Insert:"Insert",Delete:"Delete",Home:"Home",End:"End",PageUp:"PageUp",PageDown:"PageDown",Semicolon:"\uFF1B",Quote:"\u2019",Comma:"\uFF0C",Period:"\u3002",Slash:"/",Backslash:"\\",Backquote:"`",BracketLeft:"[",BracketRight:"]",Minus:"-",Equal:"=",MouseLeft:"\u9F20\u6807\u5DE6\u952E",MouseRight:"\u9F20\u6807\u53F3\u952E",MouseMiddle:"\u6EDA\u8F6E"},Ns={sensitivity:3,fov:90,volume:.7,crosshair:"#4dff66",crosshairSize:8,crosshairGap:3,showFps:!0,invertY:!1,autoReload:!0,keymap:{...ss}},sl=["Vitaliy","Ivan","Dmitri","Sergei","Yuri","Boris","Nikita","Anton","Kyle","Ryan","Marcus","Dylan","Cole","Trevor","Wesley","Blake"];function rl(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Ue,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let f=0;f<s.length;++f){let p=s[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Uh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][f]);let g=Uh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Uh(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new t(r),a=0;for(let c=0;c<s.length;++c)o.set(s[c].array,a),a+=s[c].array.length;let l=new Me(o,e,n);return i!==void 0&&(l.gpuType=i),l}var al=4;function Nh(s){al=Math.max(1,Math.min(16,s|0||1))}function pn(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e.getContext("2d",{willReadFrequently:!0}),e}function io(s,t,e){let n=(s|0)*374761393+(t|0)*668265263+(e|0)*1442695041;return n=(n^n>>13)*1274126177,((n^n>>16)>>>0)/4294967295}function Dg(s,t,e,n){let i=Math.floor(s),r=Math.floor(t),o=s-i,a=t-r,l=o*o*(3-2*o),c=a*a*(3-2*a),h=_=>(_%n+n)%n,u=h(i),f=h(i+1),p=h(r),g=h(r+1),x=io(u,p,e),m=io(f,p,e),d=io(u,g,e),v=io(f,g,e);return(x*(1-l)+m*l)*(1-c)+(d*(1-l)+v*l)*c}function Ug(s,t,e,n,i){let r=0,o=.55,a=0,l=i,c=1;for(let h=0;h<e;h++)r+=Dg(s*c,t*c,n+h*131,l)*o,a+=o,o*=.55,c*=2,l*=2;return r/a}function Fn(s,t,{basePer:e=4,oct:n=4,strength:i=.22,seed:r=7}={}){let o=s.getImageData(0,0,t,t),a=o.data;for(let l=0;l<t;l++)for(let c=0;c<t;c++){let u=1+(Ug(c/t*e,l/t*e,n,r,e)-.5)*i,f=(l*t+c)*4;a[f]=Math.min(255,Math.max(0,a[f]*u)),a[f+1]=Math.min(255,Math.max(0,a[f+1]*u)),a[f+2]=Math.min(255,Math.max(0,a[f+2]*u))}s.putImageData(o,0,0)}function kn(s,t,e,n){let i=s.getImageData(0,0,t,e),r=i.data;for(let o=0;o<r.length;o+=4){let a=(Math.random()-.5)*n;r[o]=Math.max(0,Math.min(255,r[o]+a)),r[o+1]=Math.max(0,Math.min(255,r[o+1]+a)),r[o+2]=Math.max(0,Math.min(255,r[o+2]+a))}s.putImageData(i,0,0)}function yn(s,t=1){let e=new qe(s);return e.wrapS=e.wrapT=Es,e.colorSpace=jt,e.anisotropy=al,e.repeat.set(t,t),e}function Ng(){let t=pn(256,256),e=t.getContext("2d");e.fillStyle="#8f7350",e.fillRect(0,0,256,256);let n=32;for(let i=0;i<256/n;i++){let r=i%2*42;for(let o=-1;o<4;o++){let l=n-3,c=o*84+r+2,h=i*n+2,u=20*Math.random();e.fillStyle=`rgb(${188-u|0},${160-u|0},${112-u|0})`,e.fillRect(c,h,78,l);let f=e.createLinearGradient(0,h,0,h+l);f.addColorStop(0,"rgba(64,48,30,0.42)"),f.addColorStop(.14,"rgba(64,48,30,0)"),f.addColorStop(.84,"rgba(52,38,24,0)"),f.addColorStop(1,"rgba(46,34,22,0.5)"),e.fillStyle=f,e.fillRect(c,h,78,l);let p=e.createLinearGradient(c,0,c+78,0);p.addColorStop(0,"rgba(64,48,30,0.34)"),p.addColorStop(.1,"rgba(64,48,30,0)"),p.addColorStop(.9,"rgba(52,38,24,0)"),p.addColorStop(1,"rgba(46,34,22,0.38)"),e.fillStyle=p,e.fillRect(c,h,78,l)}}for(let i=0;i<14;i++){let r=Math.random()*256,o=2+Math.random()*6,a=e.createLinearGradient(0,0,0,256);a.addColorStop(0,"rgba(72,56,34,0)"),a.addColorStop(.35,`rgba(72,56,34,${.05+Math.random()*.07})`),a.addColorStop(.75,`rgba(64,50,30,${.04+Math.random()*.06})`),a.addColorStop(1,"rgba(72,56,34,0)"),e.fillStyle=a,e.fillRect(r,0,o,256)}return Fn(e,256,{basePer:3,oct:4,strength:.26,seed:11}),kn(e,256,256,22),yn(t)}function zg(){let t=pn(512,512),e=t.getContext("2d");e.fillStyle="#b29469",e.fillRect(0,0,512,512);for(let n=0;n<26;n++){let i=Math.random()*512,r=5+Math.random()*12;e.strokeStyle=`rgba(${205+Math.random()*18|0},${182+Math.random()*16|0},${142+Math.random()*14|0},0.11)`,e.lineWidth=1+Math.random()*2.4,e.beginPath();for(let o=0;o<=512;o+=6){let a=i+Math.sin(o/512*Math.PI*2*(1+n%3))*r;o===0?e.moveTo(o,a):e.lineTo(o,a)}e.stroke()}for(let n=0;n<5200;n++){let i=Math.random()*46-23;e.fillStyle=`rgba(${178+i|0},${154+i|0},${110+i|0},${.35+Math.random()*.4})`,e.fillRect(Math.random()*512,Math.random()*512,1+Math.random()*2.4,1+Math.random()*1.8)}for(let n=0;n<12;n++){let i=e.createRadialGradient(Math.random()*512,Math.random()*512,2,Math.random()*512,Math.random()*512,26+Math.random()*30);i.addColorStop(0,"rgba(120,98,68,0.16)"),i.addColorStop(1,"rgba(120,98,68,0)"),e.fillStyle=i,e.fillRect(0,0,512,512)}return Fn(e,512,{basePer:5,oct:4,strength:.2,seed:23}),kn(e,512,512,14),yn(t)}function Og(){let t=pn(256,256),e=t.getContext("2d");e.fillStyle="#b8a888",e.fillRect(0,0,256,256);for(let n=0;n<70;n++){let i=Math.random()*16-8;e.fillStyle=`rgba(${190+i|0},${174+i|0},${146+i|0},0.22)`,e.beginPath(),e.ellipse(Math.random()*256,Math.random()*256,8+Math.random()*22,6+Math.random()*16,Math.random()*3,0,7),e.fill()}for(let n=0;n<18;n++){let i=Math.random()*256,r=Math.random()*256;e.fillStyle=`rgba(120,100,72,${.12+Math.random()*.1})`,e.beginPath(),e.moveTo(i,r);for(let o=1;o<=7;o++){let a=o/7*Math.PI*2,l=4+Math.random()*9;e.lineTo(i+Math.cos(a)*l,r+Math.sin(a)*l)}e.closePath(),e.fill()}for(let n=0;n<14;n++){e.strokeStyle=`rgba(96,80,58,${.08+Math.random()*.12})`,e.lineWidth=.6+Math.random()*.7,e.beginPath();let i=Math.random()*256,r=Math.random()*256;e.moveTo(i,r);for(let o=0;o<6;o++)i+=(Math.random()-.5)*26,r+=(Math.random()-.5)*26,e.lineTo(i,r);e.stroke()}return Fn(e,256,{basePer:5,oct:5,strength:.2,seed:131}),kn(e,256,256,16),yn(t)}function Fg(){let t=pn(256,256),e=t.getContext("2d");e.fillStyle="#6f6455",e.fillRect(0,0,256,256);let n=44;for(let i=0;i<Math.ceil(256/n);i++){let o=-(i%2*46);for(;o<256;){let a=58+Math.random()*46,l=n-5,c=i*n+2,h=Math.random()*30-15;e.fillStyle=`rgb(${150+h|0},${140+h|0},${122+h|0})`,e.fillRect(o+2,c,a-3,l);let u=e.createLinearGradient(o,c,o,c+l);u.addColorStop(0,"rgba(255,250,240,0.10)"),u.addColorStop(.5,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(20,16,12,0.42)"),e.fillStyle=u,e.fillRect(o+2,c,a-3,l),o+=a}}return Fn(e,256,{basePer:4,oct:4,strength:.22,seed:173}),kn(e,256,256,20),yn(t)}function kg(){let t=pn(128,128),e=t.getContext("2d");e.fillStyle="#8d6840",e.fillRect(0,0,128,128);let n=128/7;for(let i=0;i<7;i++){let r=i*n;e.fillStyle=i%2?"#98724a":"#825f36",e.fillRect(0,r+1,128,n-2);let o=e.createLinearGradient(0,r,0,r+n);o.addColorStop(0,"rgba(48,32,18,0.34)"),o.addColorStop(.25,"rgba(48,32,18,0)"),o.addColorStop(.8,"rgba(40,26,14,0)"),o.addColorStop(1,"rgba(40,26,14,0.38)"),e.fillStyle=o,e.fillRect(0,r,128,n);for(let a=0;a<9;a++){let l=r+2+Math.random()*(n-5);e.strokeStyle=`rgba(${90+Math.random()*40|0},${64+Math.random()*30|0},${36+Math.random()*22|0},${.1+Math.random()*.16})`,e.lineWidth=.7,e.beginPath(),e.moveTo(Math.random()*20,l),e.bezierCurveTo(128*.3,l+Math.random()*2-1,128*.7,l+Math.random()*2-1,128,l),e.stroke()}}return e.strokeStyle="#6d4c26",e.lineWidth=7,e.strokeRect(3.5,3.5,121,121),e.beginPath(),e.moveTo(6,6),e.lineTo(122,122),e.stroke(),e.strokeStyle="rgba(40,26,14,0.42)",e.lineWidth=2,e.strokeRect(8,8,112,112),e.fillStyle="#4a3520",[[14,14],[114,14],[14,114],[114,114]].forEach(([i,r])=>{e.beginPath(),e.arc(i,r,2.6,0,7),e.fill()}),Fn(e,128,{basePer:3,oct:3,strength:.2,seed:41}),kn(e,128,128,16),yn(t)}function Bg(){let t=pn(128,128),e=t.getContext("2d");e.fillStyle="#8d8a82",e.fillRect(0,0,128,128);for(let n=0;n<30;n++)e.fillStyle=`rgba(${110+Math.random()*50|0},${108+Math.random()*46|0},${100+Math.random()*40|0},0.45)`,e.fillRect(Math.random()*128,Math.random()*128,8+Math.random()*30,6+Math.random()*20);for(let n=0;n<5;n++){e.strokeStyle=`rgba(58,56,50,${.18+Math.random()*.2})`,e.lineWidth=.8+Math.random()*.6,e.beginPath();let i=Math.random()*128,r=Math.random()*128;e.moveTo(i,r);for(let o=0;o<5;o++)i+=(Math.random()-.5)*26,r+=(Math.random()-.5)*26,e.lineTo(i,r);e.stroke()}return Fn(e,128,{basePer:4,oct:4,strength:.28,seed:53}),kn(e,128,128,20),yn(t)}function ol(s){let e=pn(128,128),n=e.getContext("2d");n.fillStyle=s,n.fillRect(0,0,128,128);for(let i=0;i<128;i+=8){let r=n.createLinearGradient(i,0,i+8,0);r.addColorStop(0,"rgba(255,255,255,0.10)"),r.addColorStop(.45,"rgba(255,255,255,0)"),r.addColorStop(.55,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(0,0,0,0.20)"),n.fillStyle=r,n.fillRect(i,0,8,128)}for(let i=0;i<9;i++){let r=Math.random()*128,o=Math.random()*128,a=6+Math.random()*22,l=n.createRadialGradient(r,o,1,r,o,a);l.addColorStop(0,`rgba(108,58,30,${.22+Math.random()*.2})`),l.addColorStop(.6,`rgba(126,72,38,${.1+Math.random()*.1})`),l.addColorStop(1,"rgba(126,72,38,0)"),n.fillStyle=l,n.beginPath(),n.arc(r,o,a,0,7),n.fill()}return Fn(n,128,{basePer:3,oct:4,strength:.24,seed:67}),kn(n,128,128,12),yn(e)}var so=null;function zh(){return so||(so={sand:Ng(),sand2:Fg(),sand3:Og(),floor:zg(),crate:kg(),concrete:Bg(),metalRed:ol("#8c4a3a"),metalBlue:ol("#3f5c74"),metalGreen:ol("#4c6148")},so)}function Hg(){let t=pn(128,128),e=t.getContext("2d");e.fillStyle="#7e828a",e.fillRect(0,0,128,128);for(let n=0;n<260;n++){let i=Math.random()*128,r=Math.random()>.5;e.strokeStyle=r?`rgba(255,255,255,${.02+Math.random()*.06})`:`rgba(34,36,42,${.02+Math.random()*.08})`,e.lineWidth=.6+Math.random()*1.1,e.beginPath(),e.moveTo(Math.random()*24,i),e.lineTo(128-Math.random()*24,i+(Math.random()-.5)*2),e.stroke()}for(let n=0;n<28;n++){let i=Math.random()*128,r=Math.random()*128,o=3+Math.random()*13,a=e.createRadialGradient(i,r,.5,i,r,o),l=Math.random()>.45;a.addColorStop(0,l?"rgba(205,208,216,0.30)":"rgba(42,44,50,0.30)"),a.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=a,e.beginPath(),e.arc(i,r,o,0,7),e.fill()}e.fillStyle="rgba(26,28,32,0.5)";for(let n=0;n<3;n++){let i=36+n*9,r=24;for(;r<102;){let o=2+Math.random()*6;e.fillRect(r,i,o,3),r+=o+2+Math.random()*3}}return Fn(e,128,{basePer:4,oct:3,strength:.18,seed:91}),kn(e,128,128,10),yn(t)}function Vg(){let t=pn(128,128),e=t.getContext("2d");e.fillStyle="#6b4522",e.fillRect(0,0,128,128);for(let n=0;n<34;n++){let i=128*(.15+Math.random()*.7),r=-30+Math.random()*190,o=8+Math.random()*70;e.strokeStyle=`rgba(${38+Math.random()*40|0},${20+Math.random()*30|0},${10+Math.random()*18|0},${.1+Math.random()*.18})`,e.lineWidth=.7+Math.random()*2,e.beginPath(),e.ellipse(i,r,o,o*(.22+Math.random()*.4),Math.random()*.4,0,7),e.stroke()}for(let n=0;n<7;n++)e.strokeStyle=`rgba(196,158,108,${.04+Math.random()*.08})`,e.lineWidth=2+Math.random()*5,e.beginPath(),e.moveTo(0,Math.random()*128),e.bezierCurveTo(128*.35,Math.random()*128,128*.7,Math.random()*128,128,Math.random()*128),e.stroke();for(let n=0;n<9;n++)e.fillStyle=`rgba(152,122,90,${.12+Math.random()*.16})`,e.fillRect(Math.random()*128,Math.random()*128,2+Math.random()*11,1+Math.random()*3);return kn(e,128,128,12),yn(t)}function Gg(){let t=pn(64,64),e=t.getContext("2d");e.fillStyle="#4a4d54",e.fillRect(0,0,64,64);for(let n=0;n<900;n++){let i=Math.random();e.fillStyle=i>.5?`rgba(120,124,132,${.1+Math.random()*.14})`:`rgba(28,30,34,${.1+Math.random()*.16})`,e.fillRect(Math.random()*64,Math.random()*64,1+Math.random()*2,1+Math.random()*2)}for(let n=0;n<4;n++)e.strokeStyle=`rgba(160,164,172,${.06+Math.random()*.08})`,e.lineWidth=.8,e.beginPath(),e.moveTo(Math.random()*64,0),e.lineTo(Math.random()*64,64),e.stroke();return Fn(e,64,{basePer:3,oct:3,strength:.16,seed:77}),yn(t)}var ro=null;function Oh(){return ro||(ro={metal:Hg(),wood:Vg(),poly:Gg()},ro)}function Fh(){let t=pn(512,512),e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,512);n.addColorStop(0,"#4d78ae"),n.addColorStop(.34,"#93b1cd"),n.addColorStop(.56,"#cfc6ae"),n.addColorStop(.72,"#e3d5b6"),n.addColorStop(1,"#e8dcc0"),e.fillStyle=n,e.fillRect(0,0,512,512);for(let r=0;r<3;r++){let o=10-r*2;for(let a=0;a<o;a++){let l=Math.random()*512,c=30+Math.random()*150+r*26,h=26+Math.random()*60,u=e.createRadialGradient(l,c,2,l,c,h),f=.42-r*.09;u.addColorStop(0,`rgba(255,255,255,${f})`),u.addColorStop(.55,`rgba(248,246,240,${f*.5})`),u.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=u,e.beginPath(),e.ellipse(l,c,h*1.5,h*.62,0,0,7),e.fill()}}let i=new qe(t);return i.colorSpace=jt,i.anisotropy=al,i}var Ve=440,ll=24,kh={x:-.478,y:.796,z:.372},Wg=.45,Xg=.2,qg=.62,oo=class{constructor(t,e){if(!e)throw new Error("GameMap: \u7F3A\u5C11\u5730\u56FE\u5B9A\u4E49\uFF0C\u89C1 src/maps/index.js");this.scene=t,this.def=e,this.tex=zh(),this.colliders=[],this.solids=[],this.ceilingZones=[],this.grid=new Uint8Array(1600),this.blocked=new Uint8Array(1600),this.propTop=new Float32Array(1600),this.spawns={T:[],CT:[]},this.sites=e.sites,this.ladders=[],this.label=e.label||e.id||"",this._build()}tileToWorld(t,e){return{x:-2e3+(t+.5)*100,z:-2e3+(e+.5)*100}}worldToTile(t,e){return{cx:Math.floor((t+2e3)/100),cz:Math.floor((e+2e3)/100)}}inBounds(t,e){return t>=0&&e>=0&&t<40&&e<40}isFloorTile(t,e){return this.inBounds(t,e)?this.grid[e*40+t]===1:!1}isWalkable(t,e){if(!this.inBounds(t,e))return!1;let n=e*40+t;return this.grid[n]===1&&this.blocked[n]===0}isFloorAt(t,e){let{cx:n,cz:i}=this.worldToTile(t,e);return this.isFloorTile(n,i)}isWalkableAt(t,e){let{cx:n,cz:i}=this.worldToTile(t,e);return this.isWalkable(n,i)}floorHeightAt(){return 0}supportHeightAt(t,e,n,i){let r=0,o="sand",a=this.colliders;for(let l=0;l<a.length;l++){let c=a[l];c.y1>i||c.y1<=r||t+n<=c.x0||t-n>=c.x1||e+n<=c.z0||e-n>=c.z1||(r=c.y1,o=c.mat||"stone")}return{y:r,mat:o}}_build(){this._rasterize(),this._buildAtmosphere(),this._buildProps(),this._markPropTiles(),this._buildFloor(),this._buildWalls(),this._buildSpawns(),this._buildCeilings(),this._buildLadders(),this._buildLabels()}ladderAt(t,e,n){for(let i=0;i<this.ladders.length;i++){let r=this.ladders[i];if(!(t<r.x0||t>r.x1||e<r.z0||e>r.z1)&&!(n<(r.y0||0)-20||n>(r.y1||400)))return r}return null}_buildLadders(){if(this.ladders=this.def.ladders||[],!this.ladders.length)return;let t=new Dt({map:this.tex.metalRed,color:12103844});for(let e of this.ladders){let n=e.y0||0,i=e.y1||Ve,r=i-n,o=(n+i)/2,a=(e.x0+e.x1)/2,l=(e.z0+e.z1)/2,c=(e.face||"x+")[0]==="x",h=c?e.z1-e.z0:e.x1-e.x0,u=Math.max(10,h/2-10),f=new ee,p=new Ne(6,r,6);for(let m of[-1,1]){let d=new wt(p,t);c?d.position.set(a,o,l+m*u):d.position.set(a+m*u,o,l),f.add(d)}let g=c?new Ne(5,5,u*2):new Ne(u*2,5,5),x=Math.max(2,Math.floor(r/40));for(let m=1;m<x;m++){let d=new wt(g,t);d.position.set(a,n+r*m/x,l),f.add(d)}this.scene.add(f)}}_rasterize(){for(let t of this.def.areas){let e=Math.floor((t.x0+2e3)/100),n=Math.floor((t.x1+2e3)/100),i=Math.floor((t.z0+2e3)/100),r=Math.floor((t.z1+2e3)/100);for(let o=i;o<r;o++)for(let a=e;a<n;a++)this.inBounds(a,o)&&(this.grid[o*40+a]=1)}}_buildAtmosphere(){let t=this.scene;t.fog=new Hr(14207403,1800,5e3),t.background=new Gt(10467020);let e=new Zr(13624050,10256469,.82);t.add(e);let n=new ei(16774102,1.05);n.position.set(-900,1500,700),t.add(n);let i=new ei(9414856,.3);i.position.set(1200,600,-1400),t.add(i);let r=Fh();r.mapping=Ss,t.background=r;let o=new Dt({map:this.tex.concrete}),a=new Dt({map:this.tex.sand});for(let l=0;l<44;l++){let c=l/44*Math.PI*2+Math.random()*.05,h=3150+Math.random()*900,u=220+Math.random()*380,f=380+Math.random()*780,p=220+Math.random()*380,g=this._boxGeo(u,f,p,220),x=new wt(g,Math.random()<.5?o:a);x.position.set(Math.cos(c)*h,f/2-60,Math.sin(c)*h),x.rotation.y=c+Math.random()*.4,t.add(x)}}_boxGeo(t,e,n,i=128){let r=new Ne(t,e,n),o=r.attributes.uv,a=[[n,e],[n,e],[t,n],[t,n],[t,e],[t,e]];for(let l=0;l<6;l++){let[c,h]=a[l];for(let u=0;u<4;u++){let f=l*4+u;o.setXY(f,o.getX(f)*c/i,o.getY(f)*h/i)}}return r}_addSolid(t,e,n,i,r,o=!0,a=0,l="stone"){let c=new wt(t,e);return c.position.set(n,i,r),a&&(c.rotation.y=a),this.scene.add(c),this.solids.push(c),o&&this.colliders.push({x0:n-t.parameters.width/2,x1:n+t.parameters.width/2,y0:i-t.parameters.height/2,y1:i+t.parameters.height/2,z0:r-t.parameters.depth/2,z1:r+t.parameters.depth/2,mat:l}),c}_openAt(t,e,n){if(e>Ve-12)return!0;if(e<0)return!1;let{cx:i,cz:r}=this.worldToTile(t,n);if(!this.inBounds(i,r))return!1;let o=r*40+i;return!(this.grid[o]!==1||this.blocked[o]===1&&e<this.propTop[o]-1||e>Ve-46&&this._hasCeiling(t,n))}_hasCeiling(t,e){for(let n of this.def.ceilings||[])if(t>=n.x0&&t<=n.x1&&e>=n.z0&&e<=n.z1)return!0;return!1}_aoFactor(t,e,n,i,r,o){let a=0,l=0,c=(p,g,x,m,d=1)=>{l+=d,this._openAt(t+p*m,e+g*m,n+x*m)||(a+=d/(1+m/70))},h=Math.abs(r)>.7;if(h){if(r>0&&this._hasCeiling(t,n))for(let p=0;p<3;p++)a+=1.15,l+=1;for(let p=0;p<8;p++){let g=p/8*Math.PI*2,x=Math.cos(g),m=Math.sin(g);for(let d=1;d<=3;d++)c(x,0,m,d*34)}}else{let p=Math.hypot(i,o)||1,g=-o/p,x=i/p;for(let m=1;m<=3;m++)c(g,0,x,m*42),c(-g,0,-x,m*42),c(0,1,0,m*42,.8),c(0,-1,0,m*42,2.2)}let u=l>0?a/l:0;return Math.max(.34,1-u*(h?1.35:1.9))}_sunVisible(t,e,n){let i=kh;for(let r=1;r<=7;r++){let o=r*46,a=t+i.x*o,l=e+i.y*o,c=n+i.z*o;if(l>Ve-12)return 1;let{cx:h,cz:u}=this.worldToTile(a,c);if(!this.inBounds(h,u))return 1;if(!this._openAt(a,l,c))return 0}return 1}_applyLighting(t){let e=t.attributes.position,n=t.attributes.normal;if(!e||!n)return t;let i=e.count,r=new Float32Array(i*3),o=kh;for(let a=0;a<i;a++){let l=e.getX(a),c=e.getY(a),h=e.getZ(a),u=n.getX(a),f=n.getY(a),p=n.getZ(a),g=this._aoFactor(l,c,h,u,f,p),x=u*o.x+f*o.y+p*o.z,m=0;x>.02&&!(c<Ve-16&&this._hasCeiling(l,h))&&(m=x*this._sunVisible(l,c,h));let d=.5+.5*f,v=qg+Xg*d+Wg*m,_=Math.max(.16,g*v);r[a*3]=Math.min(1.45,_*(1+.1*m)),r[a*3+1]=Math.min(1.45,_),r[a*3+2]=Math.min(1.45,_*(1-.15*m))}return t.setAttribute("color",new Me(r,3)),t}_buildFloor(){let t=[];for(let r=0;r<40;r++)for(let o=0;o<40;o++){if(this.grid[r*40+o]!==1)continue;let{x:a,z:l}=this.tileToWorld(o,r),c=new rn(100,100,2,2);c.rotateX(-Math.PI/2);let h=c.attributes.uv;for(let u=0;u<h.count;u++)h.setXY(u,h.getX(u)*100/220,h.getY(u)*100/220);c.translate(a,0,l),t.push(c)}if(!t.length)return;let e=rl(t,!1);t.forEach(r=>r.dispose()),this._applyLighting(e);let n=new Dt({map:this.tex.floor,vertexColors:!0}),i=new wt(e,n);i.position.y=0,this.scene.add(i),this.solids.push(i)}_buildWalls(){let t=[[],[],[]],e=ll;for(let i=0;i<40;i++)for(let r=0;r<40;r++){if(this.grid[i*40+r]!==1)continue;let{x:o,z:a}=this.tileToWorld(r,i),l=100/2,c=t[(r*7+i*13)%3],h=[{dx:0,dz:-1,nx:0,nz:-1},{dx:0,dz:1,nx:0,nz:1},{dx:-1,dz:0,nx:-1,nz:0},{dx:1,dz:0,nx:1,nz:0}];for(let u of h){if(this.isFloorTile(r+u.dx,i+u.dz))continue;let f=Ve,p;u.nx===0?(p=this._boxGeo(100+e,f,e,128),p.translate(o,f/2,a+u.nz*(l+e/2-2))):(p=this._boxGeo(e,f,100+e,128),p.translate(o+u.nx*(l+e/2-2),f/2,a)),c.push(p)}}let n=[this.tex.sand,this.tex.sand2,this.tex.sand3];for(let i=0;i<t.length;i++){let r=t[i];if(!r.length)continue;let o=rl(r,!1);r.forEach(c=>c.dispose()),this._applyLighting(o);let a=new Dt({map:n[i],vertexColors:!0}),l=new wt(o,a);this.scene.add(l),this.solids.push(l)}for(let i=0;i<40;i++)for(let r=0;r<40;r++){if(this.grid[i*40+r]!==1)continue;let{x:o,z:a}=this.tileToWorld(r,i),l=100/2,c=[{dx:0,dz:-1},{dx:0,dz:1},{dx:-1,dz:0},{dx:1,dz:0}];for(let h of c)this.isFloorTile(r+h.dx,i+h.dz)||(h.dz!==0?this.colliders.push({x0:o-l,x1:o+l,y0:0,y1:Ve,z0:a+h.dz*l,z1:a+h.dz*(l+ll),mat:"stone"}):this.colliders.push({x0:o+h.dx*l,x1:o+h.dx*(l+ll),y0:0,y1:Ve,z0:a-l,z1:a+l,mat:"stone"}))}}_addTileBlocker(t,e,n){let{x:i,z:r}=this.tileToWorld(t,e);this._addSolid(this._boxGeo(94,Ve,94,140),n,i,Ve/2,r,!0,0,"stone"),this.blocked[e*40+t]=1,this.propTop[e*40+t]=Ve}_prop(t,e,n){let{x:i,z:r}=this.tileToWorld(t,e);return this.blocked[e*40+t]=1,{x:i,z:r}}_buildProps(){let t={crate:new Dt({map:this.tex.crate}),concrete:new Dt({map:this.tex.concrete}),metalRed:new Dt({map:this.tex.metalRed}),metalBlue:new Dt({map:this.tex.metalBlue}),metalGreen:new Dt({map:this.tex.metalGreen})},e=i=>t[i]||t.concrete,n=i=>i&&i.indexOf("metal")===0?"metal":"stone";for(let i of this.def.props||[])switch(i.t){case"crate":{let r=i.s??100,o=i.h??r,a=i.rot??(i.x*13+i.z*7)%100/1e3-.05;this._addSolid(this._boxGeo(r,o,r,96),e("crate"),i.x,o/2,i.z,!0,a,"wood");let l=new wt(new rn(r,r),new Je({color:0,transparent:!0,opacity:.16,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.set(i.x,o+.6,i.z),this.scene.add(l);break}case"barrel":{let r=i.r??30,o=i.h??96,a=new wt(new xi(r,r,o,12),e(i.mat||"metalRed"));a.position.set(i.x,o/2,i.z),this.scene.add(a),this.solids.push(a),this.colliders.push({x0:i.x-r,x1:i.x+r,y0:0,y1:o,z0:i.z-r,z1:i.z+r,mat:"metal"});break}case"box":{let r=this._boxGeo(i.w,i.h,i.d,i.uv??128);this._addSolid(r,e(i.mat),i.x,i.y??i.h/2,i.z,i.solid!==!1,i.rot||0,n(i.mat));break}case"blocker":this._addTileBlocker(i.cx,i.cz,e(i.mat));break;default:break}for(let i of this.def.decor||[])if(i.kind==="cylinder"){let r=new wt(new xi(i.r0,i.r1,i.h,8),e(i.mat));r.position.set(i.x,i.y,i.z),this.scene.add(r)}}_markPropTiles(){for(let t of this.colliders){if(t.y1>=Ve-1||t.y0>40)continue;let e=t.x1-t.x0,n=t.z1-t.z0;if(e>700||n>700)continue;let i=Math.floor((t.x0+2e3)/100),r=Math.floor((t.x1+2e3)/100),o=Math.floor((t.z0+2e3)/100),a=Math.floor((t.z1+2e3)/100);for(let l=o;l<=a;l++)for(let c=i;c<=r;c++){if(!this.isFloorTile(c,l))continue;let h=this.tileToWorld(c,l),u=26;if(h.x>t.x0-u&&h.x<t.x1+u&&h.z>t.z0-u&&h.z<t.z1+u){let f=l*40+c;this.blocked[f]=1,t.y1>this.propTop[f]&&(this.propTop[f]=t.y1)}}}}_buildSpawns(){for(let t of["T","CT"]){let e=this.def.spawns&&this.def.spawns[t];if(!e)continue;let n=e.count??5,i=e.phase||0;for(let r=0;r<n;r++){let o=r/n*Math.PI*2+i;this.spawns[t].push({x:e.x+Math.cos(o)*(e.rx??190),z:e.z+Math.sin(o)*(e.rz??110),yaw:e.yaw||0})}}}_buildCeilings(){let t=new Dt({map:this.tex.concrete,side:en,color:10722448,emissive:1775894}),e=new Je({color:16769200,transparent:!0,opacity:.55,depthWrite:!1,side:en});for(let n of this.def.ceilings||[]){let i=n.x1-n.x0,r=n.z1-n.z0,o=this._boxGeo(i,30,r,200),a=new wt(o,t);a.position.set((n.x0+n.x1)/2,Ve-15,(n.z0+n.z1)/2),this.scene.add(a),this.ceilingZones.push(n);let l=(n.x0+n.x1)/2,c=(n.z0+n.z1)/2,h=new Nn(16763794,.85,1100,1.6);h.position.set(l,Ve-70,c),this.scene.add(h);let u=new wt(new rn(90,90),e);u.rotation.x=Math.PI/2,u.position.set(l,Ve-34,c),this.scene.add(u)}}_buildLabels(){let t=(e,n)=>{let i=document.createElement("canvas");i.width=i.height=256;let r=i.getContext("2d");r.fillStyle="rgba(0,0,0,0)",r.fillRect(0,0,256,256),r.font="bold 200px Impact, Arial Black, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=n,r.globalAlpha=.55,r.fillText(e,128,138);let o=new qe(i);return o.colorSpace=jt,o};for(let e of Object.keys(this.sites)){let n=this.sites[e],i=new wt(new rn(420,420),new Je({map:t(e,"#e8dcc0"),transparent:!0,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.set((n.x0+n.x1)/2,.8,(n.z0+n.z1)/2),this.scene.add(i)}}siteAt(t,e){for(let n of Object.keys(this.sites)){let i=this.sites[n];if(t>=i.x0&&t<=i.x1&&e>=i.z0&&e<=i.z1)return n}return null}raycast(t,e,n=8e3){let i=n,r=null,o=this.colliders;for(let a=0;a<o.length;a++){let l=o[a],c=0,h=i,u=-1,f=0,p=!0;for(let g=0;g<3;g++){let x=g===0?t.x:g===1?t.y:t.z,m=g===0?e.x:g===1?e.y:e.z,d=g===0?l.x0:g===1?l.y0:l.z0,v=g===0?l.x1:g===1?l.y1:l.z1;if(Math.abs(m)<1e-8){if(x<d||x>v){p=!1;break}}else{let _=(d-x)/m,T=(v-x)/m,P=-1;if(_>T){let A=_;_=T,T=A,P=1}if(_>c&&(c=_,u=g,f=P),T<h&&(h=T),c>h){p=!1;break}}}p&&c>0&&c<i&&(i=c,r={dist:c,nx:u===0?f:0,ny:u===1?f:0,nz:u===2?f:0,mat:l.mat||"stone"})}if(e.y<-1e-6){let a=-t.y/e.y;if(a>0&&a<i){let l=t.x+e.x*a,c=t.z+e.z*a;this.isFloorAt(l,c)&&(r={dist:a,nx:0,ny:1,nz:0,mat:"sand"})}}return r}lineOfSight(t,e){let n=e.x-t.x,i=e.y-t.y,r=e.z-t.z,o=Math.sqrt(n*n+i*i+r*r);if(o<1)return!0;let a={x:n/o,y:i/o,z:r/o};return!this.raycast(t,a,o-4)}neighbors(t,e){let n=[],i=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];for(let[r,o]of i){let a=t+r,l=e+o;this.isWalkable(a,l)&&(r&&o&&(!this.isWalkable(t+r,e)||!this.isWalkable(t,e+o))||n.push({cx:a,cz:l,cost:r&&o?1.414:1}))}return n}findPath(t,e){let n=this.worldToTile(t.x,t.z),i=this.worldToTile(e.x,e.z);if(!this.isWalkable(i.cx,i.cz)){let x=null,m=1/0;for(let d=-3;d<=3;d++)for(let v=-3;v<=3;v++){if(!this.isWalkable(i.cx+v,i.cz+d))continue;let _=v*v+d*d;_<m&&(m=_,x={cx:i.cx+v,cz:i.cz+d})}if(!x)return null;i.cx=x.cx,i.cz=x.cz}if(!this.isWalkable(n.cx,n.cz)){let x=null,m=1/0;for(let d=-2;d<=2;d++)for(let v=-2;v<=2;v++){if(!this.isWalkable(n.cx+v,n.cz+d))continue;let _=v*v+d*d;_<m&&(m=_,x={cx:n.cx+v,cz:n.cz+d})}if(!x)return null;n.cx=x.cx,n.cz=x.cz}let r=n.cz*40+n.cx,o=i.cz*40+i.cx;if(r===o)return[];let a=new Map([[r,0]]),l=new Map,c=new Set,h=(x,m)=>Math.hypot(x-i.cx,m-i.cz),u=[],f=x=>{u.push(x);let m=u.length-1;for(;m>0;){let d=m-1>>1;if(u[d].f<=u[m].f)break;let v=u[d];u[d]=u[m],u[m]=v,m=d}},p=()=>{let x=u[0],m=u.pop();if(u.length){u[0]=m;let d=0;for(;;){let v=d*2+1,_=v+1,T=d;if(v<u.length&&u[v].f<u[T].f&&(T=v),_<u.length&&u[_].f<u[T].f&&(T=_),T===d)break;let P=u[T];u[T]=u[d],u[d]=P,d=T}}return x};f({key:r,cx:n.cx,cz:n.cz,f:h(n.cx,n.cz)});let g=0;for(;u.length&&g++<8e3;){let x=p();if(!c.has(x.key)){if(c.add(x.key),x.key===o){let m=[],d=o;for(;d!==r&&(m.push(this.tileToWorld(d%40,Math.floor(d/40))),d=l.get(d),d!==void 0););return m.reverse(),m}for(let m of this.neighbors(x.cx,x.cz)){let d=m.cz*40+m.cx;if(c.has(d))continue;let v=(a.get(x.key)??0)+m.cost;v<(a.get(d)??1/0)&&(l.set(d,x.key),a.set(d,v),f({key:d,cx:m.cx,cz:m.cz,f:v+h(m.cx,m.cz)}))}}}return null}randomWalkableNear(t,e,n=800){for(let i=0;i<30;i++){let r=Math.random()*Math.PI*2,o=Math.random()*n,a=t+Math.cos(r)*o,l=e+Math.sin(r)*o;if(this.isWalkableAt(a,l))return{x:a,z:l}}return{x:t,z:e}}};var Bh={id:"de_outpost",label:"DE_OUTPOST",areas:[{name:"T Spawn",x0:-500,x1:500,z0:1200,z1:1900,kind:"tspawn"},{name:"T Long",x0:400,x1:1e3,z0:1380,z1:1720,kind:"road"},{name:"Long A",x0:900,x1:1280,z0:-520,z1:1700,kind:"road"},{name:"A Site",x0:900,x1:1700,z0:-920,z1:-380,kind:"site"},{name:"CT Ramp",x0:320,x1:1e3,z0:-1120,z1:-700,kind:"road"},{name:"CT Spawn",x0:-620,x1:420,z0:-1520,z1:-880,kind:"ctspawn"},{name:"CT Mid",x0:-320,x1:320,z0:-1080,z1:-680,kind:"road"},{name:"Top Mid",x0:-320,x1:320,z0:-700,z1:-180,kind:"road"},{name:"Mid",x0:-160,x1:160,z0:-250,z1:1350,kind:"road"},{name:"Lower Tunnel",x0:-980,x1:-120,z0:700,z1:960,kind:"tunnel"},{name:"B Tunnel",x0:-1280,x1:-880,z0:-470,z1:1700,kind:"tunnel"},{name:"B Site",x0:-1720,x1:-880,z0:-920,z1:-300,kind:"site"},{name:"B Doors",x0:-1480,x1:-380,z0:-1280,z1:-860,kind:"road"},{name:"T Tunnel",x0:-980,x1:-420,z0:1380,z1:1720,kind:"tunnel"}],ceilings:[{x0:-980,x1:-120,z0:700,z1:960},{x0:-1280,x1:-880,z0:300,z1:1700},{x0:-980,x1:-420,z0:1380,z1:1720}],sites:{A:{name:"A",x0:950,x1:1650,z0:-880,z1:-420},B:{name:"B",x0:-1680,x1:-920,z0:-880,z1:-340}},spawns:{T:{x:0,z:1550,yaw:0,count:5,rx:190,rz:110},CT:{x:-100,z:-1300,yaw:Math.PI,count:5,rx:200,rz:110,phase:.6}},props:[{t:"crate",x:1150,z:-700,s:120,h:64},{t:"crate",x:1270,z:-700,s:120,h:120},{t:"crate",x:1150,z:-580,s:100,h:32},{t:"crate",x:1450,z:-820,s:110,h:64},{t:"crate",x:1560,z:-800,s:110,h:32},{t:"crate",x:1500,z:-620,s:120,h:120},{t:"crate",x:-1450,z:-700,s:120,h:64},{t:"crate",x:-1330,z:-700,s:120,h:32},{t:"crate",x:-1450,z:-560,s:110,h:110},{t:"crate",x:-1120,z:-800,s:120,h:64},{t:"crate",x:-1e3,z:-640,s:110,h:32},{t:"box",x:-1250,y:125,z:-430,w:340,h:250,d:120,mat:"metalBlue"},{t:"box",x:-960,y:125,z:-600,w:120,h:250,d:300,mat:"metalGreen"},{t:"crate",x:300,z:1500,s:110,h:32},{t:"crate",x:300,z:1610,s:110,h:64},{t:"box",x:-300,y:60,z:1700,w:200,h:120,d:90,mat:"concrete"},{t:"barrel",x:-420,z:1350},{t:"barrel",x:-380,z:1420},{t:"box",x:1120,y:45,z:980,w:200,h:90,d:110,mat:"metalBlue"},{t:"box",x:1120,y:125,z:980,w:130,h:70,d:108,mat:"metalBlue"},{t:"crate",x:1010,z:460,s:100,h:32},{t:"crate",x:1180,z:-100,s:100,h:64},{t:"box",x:1090,y:150,z:750,w:300,h:16,d:90,mat:"concrete"},{t:"box",x:900,y:220,z:620,w:24,h:440,d:90,mat:"concrete"},{t:"box",x:1280,y:220,z:620,w:24,h:440,d:90,mat:"concrete"},{t:"box",x:1090,y:410,z:620,w:400,h:60,d:30,mat:"concrete"},{t:"blocker",cx:19,cz:23,mat:"concrete"},{t:"blocker",cx:18,cz:17,mat:"concrete"},{t:"blocker",cx:20,cz:29,mat:"concrete"},{t:"box",x:-160,y:220,z:300,w:30,h:440,d:100,mat:"concrete"},{t:"box",x:160,y:220,z:300,w:30,h:440,d:100,mat:"concrete"},{t:"box",x:0,y:410,z:300,w:360,h:60,d:30,mat:"concrete"},{t:"crate",x:120,z:180,s:100,h:64},{t:"crate",x:-240,z:-400,s:110,h:64},{t:"crate",x:240,z:-420,s:110,h:32},{t:"barrel",x:180,z:-820},{t:"box",x:-450,y:65,z:-1e3,w:240,h:130,d:110,mat:"concrete"},{t:"box",x:250,y:45,z:-1050,w:180,h:90,d:100,mat:"concrete"},{t:"barrel",x:-560,z:-1400},{t:"crate",x:120,z:-1300,s:100,h:64},{t:"crate",x:-1180,z:900,s:100,h:32},{t:"crate",x:-1e3,z:300,s:100,h:64},{t:"barrel",x:-1220,z:1400},{t:"barrel",x:-1180,z:1450},{t:"crate",x:-500,z:830,s:100,h:32},{t:"crate",x:520,z:-940,s:100,h:32},{t:"crate",x:760,z:-1050,s:110,h:64},{t:"box",x:-1150,y:220,z:-1e3,w:30,h:440,d:110,mat:"concrete"},{t:"box",x:-700,y:220,z:-1e3,w:30,h:440,d:110,mat:"concrete"},{t:"crate",x:-1e3,z:-1120,s:100,h:32},{t:"crate",x:-620,z:-1140,s:100,h:64}],ladders:[{x0:900,x1:950,z0:700,z1:800,y0:0,y1:170,face:"x+"}],decor:[{kind:"cylinder",x:1780,y:190,z:-700,r0:10,r1:14,h:380,mat:"concrete"}]};var Hh={de_outpost:Bh},cl="de_outpost";function Vh(s){let t=Hh[s]||Hh[cl];if(!t)throw new Error(`\u672A\u77E5\u5730\u56FE\uFF1A${s}`);return t}var pt=null,Ye=null,ni=null,rs=null,ao=null,lo=null,hl=null,Yh=Ns.volume,Yg=.075,Gh={pistol:{crack:2100,body:700,sub:150,decay:.1,gain:.55,mechFreq:3800},deagle:{crack:1500,body:520,sub:92,decay:.22,gain:.88,mechFreq:3200},smg:{crack:2500,body:860,sub:178,decay:.07,gain:.46,mechFreq:4300},ak47:{crack:1350,body:430,sub:108,decay:.17,gain:.82,mechFreq:3400},m4a1:{crack:1750,body:520,sub:122,decay:.15,gain:.74,mechFreq:3600},awp:{crack:950,body:300,sub:68,decay:.58,gain:1,mechFreq:2600},default:{crack:2e3,body:650,sub:140,decay:.12,gain:.6,mechFreq:3600}};function $g(s=.62,t=2.6){let e=pt.sampleRate,n=Math.max(1,Math.floor(e*s)),i=pt.createBuffer(2,n,e);for(let a=0;a<2;a++){let l=i.getChannelData(a),c=0;for(let u=0;u<n;u++){let f=u/n,p=Math.pow(1-f,t),g=(Math.random()*2-1)*p,x=.34+.62*(1-f);c+=(g-c)*x,l[u]=c}[.011,.019,.031,.047].forEach((u,f)=>{let p=Math.floor(u*e)+(a?37:0);p<n&&(l[p]+=(.55-f*.1)*(a?-1:1))})}let r=0;for(let a=0;a<2;a++){let l=i.getChannelData(a);for(let c=0;c<n;c++){let h=Math.abs(l[c]);h>r&&(r=h)}}let o=r>0?.92/r:1;for(let a=0;a<2;a++){let l=i.getChannelData(a);for(let c=0;c<n;c++)l[c]*=o}return i}function ul(){if(pt)return pt;let s=window.AudioContext||window.webkitAudioContext;if(!s)return null;pt=new s,ni=pt.createDynamicsCompressor(),ni.threshold.value=-8,ni.knee.value=6,ni.ratio.value=8,ni.attack.value=.001,ni.release.value=.12;let t=pt.createGain();t.gain.value=1.7,ni.connect(t),t.connect(pt.destination),Ye=pt.createGain(),Ye.gain.value=Yh,Ye.connect(ni),rs=pt.createGain(),rs.gain.value=Yg,lo=pt.createConvolver(),lo.buffer=$g(),ao=pt.createGain(),ao.gain.value=1,rs.connect(lo),lo.connect(ao),ao.connect(Ye);let e=pt.sampleRate*2;hl=pt.createBuffer(1,e,pt.sampleRate);let n=hl.getChannelData(0);for(let i=0;i<e;i++)n[i]=Math.random()*2-1;return pt}function $h(s){Yh=s,Ye&&(Ye.gain.value=s)}function Ge(){return pt?pt.currentTime:0}function Zh(){let s=pt.createBufferSource();return s.buffer=hl,s.loop=!0,s.playbackRate.value=.9+Math.random()*.2,s}function dl(s){if(!pt||!s)return;let t=pt.listener;if(!t)return;let e=s.yaw||0,n=-Math.sin(e),i=-Math.cos(e);try{t.positionX?(t.positionX.value=s.x,t.positionY.value=s.y,t.positionZ.value=s.z,t.forwardX.value=n,t.forwardY.value=0,t.forwardZ.value=i,t.upX.value=0,t.upY.value=1,t.upZ.value=0):t.setPosition&&(t.setPosition(s.x,s.y,s.z),t.setOrientation(n,0,i,0,1,0))}catch{}}function mn(s,t){let e=pt.createGain();if(!s||!t)return e.connect(Ye),e.connect(rs),e;let n=s.x-t.x,i=(s.y||0)-(t.y||0),r=s.z-t.z,o=Math.sqrt(n*n+i*i+r*r);if(o<110)return e.connect(Ye),e.connect(rs),e;dl(t);let a=pt.createBiquadFilter();a.type="lowpass",a.frequency.value=Math.max(420,18e3*Math.exp(-o/1400)),a.Q.value=.4;let l=pt.createPanner();l.panningModel="HRTF",l.distanceModel="inverse",l.refDistance=140,l.rolloffFactor=1.05,l.maxDistance=6e3,l.coneInnerAngle=360;let c=s.y||0;return l.positionX?(l.positionX.value=s.x,l.positionY.value=c,l.positionZ.value=s.z):l.setPosition&&l.setPosition(s.x,c,s.z),e.connect(a),a.connect(l),l.connect(Ye),l.connect(rs),e}function ge(s,t,{dur:e=.12,freq:n=2400,q:i=1,gain:r=.6,type:o="lowpass",decay:a=.09,attack:l=.002}){let c=Zh(),h=pt.createBiquadFilter();h.type=o,h.frequency.value=n,h.Q.value=i;let u=pt.createGain(),f=Math.max(5e-4,r),p=t+Math.max(5e-4,l),g=t+Math.max(l+.012,a);u.gain.setValueAtTime(1e-4,t),u.gain.exponentialRampToValueAtTime(f,p),u.gain.exponentialRampToValueAtTime(8e-4,g),c.connect(h),h.connect(u),u.connect(s),c.start(t),c.stop(t+Math.max(e,g-t)+.08)}function os(s,t,e=90,n=.18,i=.5){let r=pt.createOscillator(),o=pt.createGain();r.type="sine",r.frequency.setValueAtTime(e*1.7,t),r.frequency.exponentialRampToValueAtTime(Math.max(28,e*.55),t+n),o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(Math.max(5e-4,i),t+.004),o.gain.exponentialRampToValueAtTime(.001,t+n),r.connect(o),o.connect(s),r.start(t),r.stop(t+n+.02)}function bi(s,t,e=3800,n=.25){let i=Zh(),r=pt.createBiquadFilter();r.type="bandpass",r.frequency.value=e,r.Q.value=7;let o=pt.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(Math.max(4e-4,n),t+8e-4),o.gain.exponentialRampToValueAtTime(6e-4,t+.014),i.connect(r),r.connect(o),o.connect(s),i.start(t),i.stop(t+.035)}function Zg(s,t,e){let n=Gh[e]||Gh.default;ge(s,t,{freq:n.crack,gain:n.gain*.85,decay:n.decay*.55,type:"highpass",attack:.0012}),ge(s,t,{freq:n.body,gain:n.gain*.75,decay:n.decay,type:"lowpass",q:.9,attack:.0025}),os(s,t,n.sub,n.decay*1.25,n.gain*.5),bi(s,t+.004,n.mechFreq,n.gain*.3)}function fl(s,t,e){if(!pt)return;let n=Ge(),i=mn(t,e);if(s==="knife"){ge(i,n,{freq:4200,gain:.28,decay:.075,type:"highpass",attack:.005}),ge(i,n+.032,{freq:1500,gain:.12,decay:.05,type:"bandpass",q:3});return}Zg(i,n,s)}var Wh={sand:{freq:900,gain:.17,decay:.065,q:1.4,type:"lowpass",grit:5200,gritGain:.05},stone:{freq:1900,gain:.15,decay:.045,q:2.2,type:"bandpass",grit:4200,gritGain:.03},wood:{freq:620,gain:.16,decay:.075,q:3,type:"bandpass",grit:0,gritGain:0},metal:{freq:2600,gain:.13,decay:.06,q:5,type:"bandpass",grit:0,gritGain:0}};function pl(s,t,e="sand"){if(!pt)return;let n=Wh[e]||Wh.sand,i=Ge(),r=mn(s,t),o=.92+Math.random()*.18;ge(r,i,{freq:n.freq*o,gain:n.gain,decay:n.decay,type:n.type,q:n.q,attack:.003}),n.grit&&ge(r,i+.006,{freq:n.grit,gain:n.gritGain,decay:.04,type:"highpass"})}var Xh={rifle:{out:.06,seat:.44,bolt:.74,magHz:250,metalHz:3100,boltGain:.22},smg:{out:.05,seat:.46,bolt:.76,magHz:300,metalHz:3400,boltGain:.2},pistol:{out:.05,seat:.45,bolt:.76,magHz:430,metalHz:2500,boltGain:.24},sniper:{out:.04,seat:.4,bolt:.6,magHz:230,metalHz:2100,boltGain:.26}};function Kh(s){if(!pt)return;let t=Kt[s],e=t&&t.reload?t.reload:2.2,n=Xh[t&&t.cls||"rifle"]||Xh.rifle,i=Ge(),r=mn(null,null);bi(r,i+e*.015,n.metalHz*.8,.16),bi(r,i+e*n.out,n.metalHz,.2),ge(r,i+e*n.out+.012,{freq:900,gain:.07,decay:.06,type:"lowpass"}),ge(r,i+Math.max(.01,e*n.seat-.06),{freq:1400,gain:.05,decay:.07,type:"bandpass",q:2}),bi(r,i+e*n.seat,n.metalHz*.72,.26),os(r,i+e*n.seat,n.magHz,.08,.18),bi(r,i+e*n.bolt,n.metalHz*1.25,n.boltGain),ge(r,i+e*n.bolt+.02,{freq:2600,gain:.04,decay:.05,type:"bandpass",q:3})}function zs(s){if(!pt)return;let t=Kt[s],e=t?t.cls:"rifle",n=Ge(),i=mn(null,null);ge(i,n,{freq:1200,gain:.07,decay:.09,type:"bandpass",q:1.2,attack:.006}),bi(i,n+.02,e==="sniper"?2100:3e3,.13),ge(i,n+.05,{freq:700,gain:.05,decay:.06,type:"lowpass"})}function Jh(){if(!pt)return;let s=Ge(),t=mn(null,null);ge(t,s,{freq:1600,gain:.1,decay:.1,type:"bandpass",q:1.4,attack:.004}),ge(t,s+.05,{freq:600,gain:.05,decay:.06,type:"lowpass"})}function ml(s=!0){if(!pt)return;let t=Ge(),e=mn(null,null);bi(e,t,s?1450:1050,.17),ge(e,t+.008,{freq:900,gain:.03,decay:.04,type:"lowpass"})}var qh={sand:{freq:850,q:.8,gain:.15,decay:.085,type:"lowpass"},stone:{freq:2500,q:1.8,gain:.19,decay:.06,type:"bandpass"},wood:{freq:720,q:3.4,gain:.17,decay:.1,type:"bandpass"},metal:{freq:3400,q:7,gain:.14,decay:.14,type:"bandpass"}};function jh(s,t,e){if(!pt)return;let n=qh[s]||qh.stone,i=Ge(),r=mn(t,e);if(ge(r,i,{freq:n.freq,gain:n.gain,decay:n.decay,type:n.type,q:n.q,attack:.001}),s==="metal"){let o=pt.createOscillator(),a=pt.createGain();o.type="triangle",o.frequency.setValueAtTime(2400,i),o.frequency.exponentialRampToValueAtTime(1450,i+.16),a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(.05,i+.004),a.gain.exponentialRampToValueAtTime(8e-4,i+.18),o.connect(a),a.connect(r),o.start(i),o.stop(i+.2)}}function Qh(s=!1){if(!pt)return;let t=Ge(),e=mn(null,null);s?(ge(e,t,{freq:5e3,gain:.3,decay:.07,type:"bandpass",q:6,attack:.001}),os(e,t,1200,.09,.28)):(ge(e,t,{freq:1400,gain:.14,decay:.05,type:"bandpass",q:3}),os(e,t,500,.05,.18))}function tu(s=!1){if(!pt)return;let t=Ge(),e=pt.createOscillator(),n=pt.createGain();e.type="square",e.frequency.value=s?2400:1500,n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(.25,t+.005),n.gain.exponentialRampToValueAtTime(1e-4,t+.07),e.connect(n),n.connect(Ye),e.start(t),e.stop(t+.09)}function eu(s,t){if(!pt)return;let e=Ge(),n=mn(s,t);ge(n,e,{freq:700,gain:1,decay:1.1,dur:1.4,attack:.004}),ge(n,e,{freq:90,gain:.9,decay:1.5,dur:1.6,type:"lowpass",attack:.006}),os(n,e,45,1.2,.9),ge(n,e+.18,{freq:4200,gain:.22,decay:.6,type:"highpass",attack:.02})}function nu(s,t){if(!pt)return;let e=Ge(),n=mn(s,t);ge(n,e,{freq:9e3,gain:.7,decay:.35,type:"highpass",attack:8e-4}),os(n,e,300,.5,.3);let i=pt.createOscillator(),r=pt.createGain();i.type="sine",i.frequency.setValueAtTime(2650,e),i.frequency.linearRampToValueAtTime(2300,e+1.6),r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.05,e+.08),r.gain.exponentialRampToValueAtTime(1e-4,e+1.8),i.connect(r),r.connect(Ye),i.start(e),i.stop(e+1.9)}function iu(){if(!pt)return;let s=Ge();ge(mn(null,null),s,{freq:1200,gain:.2,decay:.04,type:"bandpass",q:8,attack:.001})}function as(){if(!pt)return;let s=Ge(),t=pt.createOscillator(),e=pt.createGain();t.type="triangle",t.frequency.setValueAtTime(660,s),t.frequency.exponentialRampToValueAtTime(1320,s+.08),e.gain.setValueAtTime(1e-4,s),e.gain.exponentialRampToValueAtTime(.18,s+.006),e.gain.exponentialRampToValueAtTime(.001,s+.12),t.connect(e),e.connect(Ye),t.start(s),t.stop(s+.14)}function Si(){if(!pt)return;let s=Ge(),t=pt.createOscillator(),e=pt.createGain();t.type="square",t.frequency.value=900,e.gain.setValueAtTime(1e-4,s),e.gain.exponentialRampToValueAtTime(.08,s+.003),e.gain.exponentialRampToValueAtTime(.001,s+.05),t.connect(e),e.connect(Ye),t.start(s),t.stop(s+.06)}function su(){if(!pt)return;let s=Ge(),t=pt.createOscillator(),e=pt.createGain();t.type="sawtooth",t.frequency.setValueAtTime(220,s),t.frequency.exponentialRampToValueAtTime(440,s+.25),e.gain.setValueAtTime(1e-4,s),e.gain.exponentialRampToValueAtTime(.12,s+.05),e.gain.exponentialRampToValueAtTime(.001,s+.35),t.connect(e),e.connect(Ye),t.start(s),t.stop(s+.4)}function ru(){pt&&pt.state==="suspended"&&pt.resume()}var Kg=56,Jg=64,jg=10,Qg=24,tx=2;function ex(s="#ffffff",t=.15){let n=document.createElement("canvas");n.width=n.height=64;let i=n.getContext("2d"),r=i.createRadialGradient(64/2,64/2,64*t,64/2,64/2,64/2);r.addColorStop(0,s),r.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=r,i.fillRect(0,0,64,64);let o=new qe(n);return o.colorSpace=jt,o}function nx(){let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,1,64/2,64/2,64/2);n.addColorStop(0,"rgba(20,16,12,0.95)"),n.addColorStop(.5,"rgba(30,24,18,0.55)"),n.addColorStop(1,"rgba(30,24,18,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let i=new qe(t);return i.colorSpace=jt,i}var Pe={scene:null,camera:null,game:null,items:[],smokeVolumes:[],shake:0,_softTex:null,_decalTex:null,init(s,t,e){this.scene=s,this.camera=t,this.game=e,this._softTex=ex("rgba(255,240,180,0.95)"),this._decalTex=nx(),this._buildPools()},_buildPools(){this._sprites=[];for(let i=0;i<Kg;i++){let r=new es({map:this._softTex,transparent:!0,depthWrite:!1,blending:jn}),o=new Ps(r);o.visible=!1,this.scene.add(o),this._sprites.push({o,m:r,on:!1,life:0,maxLife:1,v:new w,kind:"spark",grow:0})}this._spriteCursor=0;let s=new rn(9,9),t=new Je({map:this._decalTex,transparent:!0,depthWrite:!1,opacity:.9,polygonOffset:!0,polygonOffsetFactor:-4});this._decals=[];for(let i=0;i<Jg;i++){let r=new wt(s,t);r.visible=!1,this.scene.add(r),this._decals.push(r)}this._decalCursor=0,this._tracers=[];for(let i=0;i<jg;i++){let r=new Ue;r.setAttribute("position",new Me(new Float32Array(6),3));let o=new Ls({color:16773296,transparent:!0,opacity:.55,blending:jn,depthWrite:!1}),a=new Gr(r,o);a.visible=!1,a.frustumCulled=!1,this.scene.add(a),this._tracers.push({o:a,m:o,on:!1,life:0,maxLife:.05})}this._tracerCursor=0;let e=new Ne(2,2,5),n=new Dt({color:13214247});this._shells=[];for(let i=0;i<Qg;i++){let r=new wt(e,n);r.visible=!1,this.scene.add(r),this._shells.push({o:r,on:!1,life:0,v:new w,rot:new w})}this._shellCursor=0,this._muzzleLights=[];for(let i=0;i<tx;i++){let r=new Nn(16764023,0,420);this.scene.add(r),this._muzzleLights.push({l:r,life:0,maxLife:.06,peak:0})}this._muzzleCursor=0,this._boomLight=new Nn(16755268,0,1920),this.scene.add(this._boomLight),this._boomLife=0,this._boomMax=.42,this._boomPeak=0},_sprite(s,t,{size:e=10,life:n=.3,kind:i="spark",v:r=null,grow:o=0,blending:a=jn}={}){let l=this._sprites[this._spriteCursor];return this._spriteCursor=(this._spriteCursor+1)%this._sprites.length,l.m.color.setHex(s),l.m.blending=a,l.m.opacity=1,l.o.position.copy(t),l.o.scale.set(e,e,1),l.o.visible=!0,l.on=!0,l.life=n,l.maxLife=n,l.kind=i,l.grow=o,r?l.v.copy(r):l.v.set(0,0,0),l},muzzle(s,t){let e=s.aimDir(),n=new w(s.pos.x,s.eyeY(),s.pos.z),i=new w(Math.cos(s.yaw),0,-Math.sin(s.yaw)),r=n.clone().addScaledVector(e,34).addScaledVector(i,9);r.y-=8;let o=22+Math.random()*12;this._sprite(16770208,r,{size:o,life:.055,kind:"flash"});let a=this._muzzleLights[this._muzzleCursor];this._muzzleCursor=(this._muzzleCursor+1)%this._muzzleLights.length,a.l.position.copy(r),a.life=a.maxLife,a.peak=3.2,this.shell(s,i)},shell(s,t){let e=this._shells[this._shellCursor];this._shellCursor=(this._shellCursor+1)%this._shells.length,e.o.position.set(s.pos.x,s.eyeY()-8,s.pos.z),e.o.visible=!0,e.on=!0,e.life=1.2,e.v.set(t.x*90+(Math.random()-.5)*40,120,t.z*90+(Math.random()-.5)*40),e.rot.set(Math.random()*12,Math.random()*12,0)},tracer(s,t){let e=this._tracers[this._tracerCursor];this._tracerCursor=(this._tracerCursor+1)%this._tracers.length;let n=e.o.geometry.attributes.position;n.setXYZ(0,s.x,s.y,s.z),n.setXYZ(1,t.x,t.y,t.z),n.needsUpdate=!0,e.o.visible=!0,e.on=!0,e.life=e.maxLife,e.m.opacity=.55},impact(s,t,e="stone"){let n=this._decals[this._decalCursor];this._decalCursor=(this._decalCursor+1)%this._decals.length,n.position.copy(s);let i=new w(t.x,t.y,t.z).normalize();n.lookAt(s.clone().add(i)),n.visible=!0;for(let o=0;o<3;o++){let a=new w(t.x*60+(Math.random()-.5)*90,t.y*60+Math.random()*90,t.z*60+(Math.random()-.5)*90);this._sprite(16760928,s,{size:6+Math.random()*8,life:.28,kind:"spark",v:a})}let r=s.clone().addScaledVector(i,4);if(e!=="metal"){let o=e==="wood"?10123858:12560516;this._sprite(o,r,{size:14,life:.5,kind:"grow",grow:30,blending:_n})}jh(e,s,this.game.listenerPos())},blood(s,t=5){for(let e=0;e<t;e++){let n=new w((Math.random()-.5)*130,Math.random()*110,(Math.random()-.5)*130);this._sprite(10228756,s,{size:4+Math.random()*6,life:.45,kind:"spark",v:n,blending:_n})}},knifeSwing(s){let t=new w(s.pos.x,s.eyeY()-10,s.pos.z);t.addScaledVector(s.aimDir(),26),this._sprite(16777215,t,{size:14,life:.12,kind:"flash"})},explosion(s,t=320){this._boomLight.position.copy(s),this._boomLight.position.y+=30,this._boomLife=this._boomMax,this._boomPeak=12;let e=new wt(new _i(30,12,10),new Je({color:16759637,transparent:!0,opacity:.95,blending:jn,depthWrite:!1}));e.position.copy(s),this.scene.add(e),this.items.push({obj:e,life:.42,maxLife:.42,kind:"boom"});for(let n=0;n<18;n++){let i=new w((Math.random()-.5)*400,Math.random()*260,(Math.random()-.5)*400),r=n%3===0;this._sprite(r?3355443:16750916,s,{size:30+Math.random()*60,life:.7+Math.random()*.5,kind:"spark",v:i,blending:r?_n:jn})}eu(s,this.game.listenerPos()),this.shake=Math.max(this.shake,1)},smokeCloud(s){let t=new ee;for(let n=0;n<16;n++){let i=new Ps(new es({map:this._softTex,color:14211288,transparent:!0,opacity:0,depthWrite:!1})),r=n/16*Math.PI*2,o=Math.random()*90;i.position.set(Math.cos(r)*o,20+Math.random()*120,Math.sin(r)*o);let a=180+Math.random()*120;i.scale.set(a,a,1),t.add(i)}t.position.copy(s),this.scene.add(t);let e={pos:s.clone(),radius:190,until:this.game.time+16,grp:t};this.smokeVolumes.push(e),this.items.push({obj:t,life:16,maxLife:16,kind:"smoke",vol:e})},blocksLineOfSight(s,t){for(let e of this.smokeVolumes){if(this.game.time>e.until)continue;let n=new w().subVectors(t,s),i=n.lengthSq();if(i<1)continue;let r=Math.max(0,Math.min(1,new w().subVectors(e.pos,s).dot(n)/i));if(s.clone().addScaledVector(n,r).distanceTo(e.pos)<e.radius*.85)return!0}return!1},update(s){this.shake=Math.max(0,this.shake-s*2.6);for(let t=0;t<this._sprites.length;t++){let e=this._sprites[t];if(!e.on)continue;if(e.life-=s,e.life<=0){e.on=!1,e.o.visible=!1;continue}let n=1-e.life/e.maxLife;switch(e.kind){case"spark":e.v.y-=700*s,e.o.position.addScaledVector(e.v,s),e.m.opacity=1-n;break;case"grow":{let i=e.o.scale.x+e.grow*s;e.o.scale.set(i,i,1),e.m.opacity=(1-n)*.6;break}default:e.m.opacity=1-n;break}}for(let t=0;t<this._tracers.length;t++){let e=this._tracers[t];if(e.on){if(e.life-=s,e.life<=0){e.on=!1,e.o.visible=!1;continue}e.m.opacity=e.life/e.maxLife*.55}}for(let t=0;t<this._shells.length;t++){let e=this._shells[t];if(e.on){if(e.life-=s,e.life<=0){e.on=!1,e.o.visible=!1;continue}e.v.y-=800*s,e.o.position.addScaledVector(e.v,s),e.o.rotation.x+=e.rot.x*s,e.o.rotation.y+=e.rot.y*s,e.o.position.y<2&&(e.o.position.y=2,e.v.y*=-.3,e.v.x*=.6,e.v.z*=.6)}}for(let t=0;t<this._muzzleLights.length;t++){let e=this._muzzleLights[t];e.life<=0||(e.life-=s,e.l.intensity=e.life>0?e.life/e.maxLife*e.peak:0,e.life<=0&&(e.l.intensity=0))}this._boomLife>0&&(this._boomLife-=s,this._boomLight.intensity=this._boomLife>0?this._boomLife/this._boomMax*this._boomPeak:0,this._boomLife<=0&&(this._boomLight.intensity=0));for(let t=this.items.length-1;t>=0;t--){let e=this.items[t];e.life-=s;let n=e.obj;if(e.life<=0){this.scene.remove(n),n.geometry&&n.geometry.dispose?.(),n.material&&(Array.isArray(n.material)?n.material.forEach(r=>r.dispose?.()):n.material.dispose?.()),e.kind==="smoke"&&e.vol&&(this.smokeVolumes=this.smokeVolumes.filter(r=>r!==e.vol)),this.items.splice(t,1);continue}let i=1-e.life/e.maxLife;switch(e.kind){case"boom":{let r=30+i*330;n.scale.set(r/30,r/30,r/30),n.material.opacity=.95*(1-i)**1.5;break}case"smoke":{let r=Math.min(1,i*5),o=Math.min(1,(1-i)*3),a=Math.min(r,o);n.children.forEach(c=>{c.material.opacity=.72*a});let l=.6+i*.7;n.scale.set(l,1,l);break}default:break}}}},ix=800,co=class{constructor(t,e,n,i,r){this.game=t,this.owner=e,this.kind=n,this.pos=i.clone(),this.vel=r.clone().multiplyScalar(n==="he"?1e3:950),this.vel.y+=110,this.fuse=eo[n]||3,this.dead=!1,this.bounces=0;let o=n==="he"?4872762:n==="flash"?10066329:9079408;this.mesh=new wt(new _i(5,8,6),new Dt({color:o})),this.mesh.position.copy(this.pos),t.scene.add(this.mesh)}update(t){if(this.dead)return;this.fuse-=t,this.vel.y-=ix*t;let e=this.game.map,n=this.pos.clone().addScaledVector(this.vel,t);n.y<5&&(n.y=5,this.vel.y*=-.42,this.vel.x*=.72,this.vel.z*=.72,this.bounces++);let i=n.clone().sub(this.pos),r=i.length();if(r>.001){let o=i.clone().divideScalar(r),a=e.raycast(this.pos,o,r+4);if(a){let l=this.pos.clone().addScaledVector(o,Math.max(0,a.dist-3)),c=new w(a.nx,a.ny,a.nz);this.vel.reflect(c).multiplyScalar(.45),n.copy(l),this.bounces++}}this.pos.copy(n),this.mesh.position.copy(this.pos),this.mesh.rotation.x+=t*6,this.mesh.rotation.z+=t*4,this.fuse<=0&&this.explode()}explode(){this.dead=!0,this.game.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose();let t=this.kind;if(t==="he"){Pe.explosion(this.pos.clone());for(let e of this.game.players){if(!e.alive)continue;let i=new w(e.pos.x,e.pos.y+36,e.pos.z).distanceTo(this.pos);if(i>340)continue;let r=new w(e.pos.x,e.eyeY(),e.pos.z);if(!this.game.map.lineOfSight(this.pos,r))continue;let a=105*Math.max(0,1-i/340)**1.4;a>1&&Os(this.game,e,this.owner,a,"chest",{id:"hegrenade",dmg:a})}}else if(t==="flash"){nu(this.pos.clone(),this.game.listenerPos());for(let e of this.game.players){if(!e.alive)continue;let n=new w(e.pos.x,e.eyeY(),e.pos.z),i=n.distanceTo(this.pos);if(i>1500||!this.game.map.lineOfSight(this.pos,n))continue;let r=this.pos.clone().sub(n).normalize(),o=new w(-Math.sin(e.yaw),0,-Math.cos(e.yaw)),a=Math.max(0,o.dot(new w(r.x,0,r.z).normalize())),l=Math.max(0,1-i/1500)*(.35+a*.9);e.flashAmount=Math.min(1.4,e.flashAmount+l*1.5),e.isBot&&e.botOnFlashed?.(l)}}else Pe.smokeCloud(this.pos.clone())}};function Fs(s){let t=Kt[s];return t?{id:s,def:t,ammo:t.mag,reserve:t.res}:null}function gl(s,t,e,n,i){let r=null;for(let o of s.players)if(!(!o.alive||o===i))for(let a of o.hitboxes()){let l={x0:o.pos.x-a.r,x1:o.pos.x+a.r,y0:a.y0,y1:a.y1,z0:o.pos.z-a.r,z1:o.pos.z+a.r},c=sx(t,e,l);c!==null&&c>0&&c<n&&(!r||c<r.dist)&&(r={player:o,dist:c,group:a.group,friendly:!!(i&&o.team===i.team)})}return r&&(r.point=t.clone().addScaledVector(e,r.dist)),r}function sx(s,t,e){let n=0,i=1/0;for(let r=0;r<3;r++){let o=r===0?s.x:r===1?s.y:s.z,a=r===0?t.x:r===1?t.y:t.z,l=r===0?e.x0:r===1?e.y0:e.z0,c=r===0?e.x1:r===1?e.y1:e.z1;if(Math.abs(a)<1e-8){if(o<l||o>c)return null}else{let h=(l-o)/a,u=(c-o)/a;if(h>u){let f=h;h=u,u=f}if(h>n&&(n=h),u<i&&(i=u),n>i)return null}}return n}function xl(s,t,e,n,i){let r=s.map.raycast(e,n,8e3),o=r?r.dist:8e3,a=gl(s,e,n,o,t),l=a?a.dist:o,c=e.clone().addScaledVector(n,l),h=e.clone().addScaledVector(n,24);if(Math.random()<.75&&Pe.tracer(h,c),a)a.friendly||(Os(s,a.player,t,i.dmg,a.group,i,a.dist),Pe.blood(a.point,a.group==="head"?8:4),t===s.localPlayer&&(Qh(a.group==="head"),s.hud.hitMarker(a.group==="head")));else if(r){let u=e.clone().addScaledVector(n,r.dist-.6);Pe.impact(u,{x:r.nx,y:r.ny,z:r.nz},r.mat)}return{end:c,hitPlayer:!!a}}function Os(s,t,e,n,i,r,o){if(!t.alive)return 0;let a=o;if(a==null){let f=e&&e.pos?e.pos:t.pos;a=Math.hypot(f.x-t.pos.x,f.y-t.pos.y,f.z-t.pos.z)}let l=Ph[i]??1,c=Math.pow(.985,a/100),h=n*l*c;if(e&&e!==t&&e.team===t.team)return 0;let u=t.takeDamage(h,e,i,r.id);return e===s.localPlayer&&t!==s.localPlayer&&s.hud.hitMarker(i==="head"),t===s.localPlayer&&u>0&&s.hud.damageFlash(u,e),u}var ks=Oh(),J={steel:new Dt({map:ks.metal,color:10923190}),steelDark:new Dt({map:ks.metal,color:6580594}),poly:new Dt({map:ks.poly,color:9607072}),black:new Dt({color:1316120}),wood:new Dt({map:ks.wood,color:13806722}),woodDark:new Dt({map:ks.wood,color:9071176}),accent:new Dt({color:9276288}),glass:new Dt({color:1920867}),glove:new Dt({color:10524284}),sleeve:new Dt({color:3356458}),skin:new Dt({color:12091994}),skinDark:new Dt({color:9396802})};function Ei(s,t,e){return new Ne(s,t,e)}function ho(s,t,e=8){return new $r(s,t,3,e)}function lu(s,t,e,n=10){return new xi(s,t,e,n)}function tt(s,t,e,n,i=0,r=0,o=0,a=0,l=0,c=0){let h=new wt(Ei(s,t,e),n);return h.position.set(i,r,o),h.rotation.set(a,l,c),h}function We(s,t,e,n,i=0,r=0,o=0,a=10){let l=new wt(lu(s,t,e,a),n);return l.rotation.x=Math.PI/2,l.position.set(i,r,o),l}var _l={};function rx(s){if(_l[s])return _l[s];let t=64,e=document.createElement("canvas");e.width=e.height=t;let n=e.getContext("2d");n.fillStyle=s==="T"?"#a8784e":"#c19474",n.fillRect(0,0,t,t);let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"rgba(60,40,26,0.45)"),i.addColorStop(.35,"rgba(60,40,26,0)"),n.fillStyle=i,n.fillRect(0,0,t,t),s==="T"?(n.fillStyle="#1d1b19",n.fillRect(0,36,t,t-36),n.fillStyle="#2a2724",n.fillRect(0,36,t,3),n.fillStyle="#f0e6d8",n.fillRect(14,24,12,6),n.fillRect(38,24,12,6),n.fillStyle="#241a12",n.fillRect(19,25,5,5),n.fillRect(43,25,5,5)):(n.fillStyle="#1b2831",n.fillRect(4,18,t-8,16),n.fillStyle="rgba(120,170,200,0.5)",n.fillRect(8,21,18,6),n.fillStyle="#0e1a22",n.fillRect(0,33,t,2),n.fillStyle="rgba(50,34,22,0.22)",n.fillRect(0,46,t,t-46));let r=new qe(e);return r.colorSpace=jt,_l[s]=r,r}var yl={};function ox(s){if(yl[s])return yl[s];let t=s==="T"?11041618:12883827,e=s==="T"?9072968:6122362,n=s==="T"?5522732:3752783,i={skin:new Dt({color:t}),cloth:new Dt({color:e}),vest:new Dt({color:n}),belt:new Dt({color:2828323}),pouch:new Dt({color:s==="T"?4142630:2896957}),boot:new Dt({color:2367258}),pack:new Dt({color:s==="T"?4866096:3291973}),hat:new Dt({color:s==="T"?2039066:2831680}),glove:new Dt({color:3025957}),face:new Dt({map:rx(s)})};return yl[s]=i,i}var an={thigh:ho(3.9,7),shin:ho(3.3,6),upperArm:ho(3.4,7),forearm:ho(3,6),boot:Ei(6.5,5,11),hand:Ei(4.6,5.4,5),head:Ei(9.4,10.6,9.6),neck:lu(3,3,4,8),helm:new _i(5.9,12,8,0,Math.PI*2,0,Math.PI*.56),gunBody:Ei(4.5,4.5,24),gunBarrel:Ei(2,2,14),gunMag:Ei(3.4,7,4.4)};function cu(s){let t=ox(s),e=new ee;e.add(tt(19,9,12,t.cloth,0,29.5,0)),e.add(tt(20,2.8,13,t.belt,0,33.8,0)),e.add(tt(17.5,9,11,t.cloth,0,38.6,0)),e.add(tt(21,14,12.5,t.vest,0,47,0)),e.add(tt(6,3.2,8.5,t.vest,-10,53.5,0)),e.add(tt(6,3.2,8.5,t.vest,10,53.5,0)),e.add(tt(5.4,5,2.6,t.pouch,-6.2,45.6,-6.6)),e.add(tt(5.4,5,2.6,t.pouch,0,45.6,-6.6)),e.add(tt(5.4,5,2.6,t.pouch,6.2,45.6,-6.6)),e.add(tt(15,15.5,6,t.pack,0,45.5,9.2)),e.add(tt(9.8,4.2,9.8,t.cloth,0,57,0));let n=new wt(an.neck,t.skin);n.position.set(0,57.4,0),e.add(n);let i=[t.skin,t.skin,t.hat,t.skin,t.skin,t.face],r=new wt(an.head,i);r.position.set(0,63.4,0),e.add(r);let o=null;if(s==="CT")o=new wt(an.helm,t.hat),o.position.set(0,65.6,0),e.add(o);else{let _=tt(10.1,4.4,10.3,t.hat,0,67.4,0);e.add(_);let T=tt(4.2,6.5,3,t.hat,0,63,5.4,.3);e.add(T)}let a=_=>{let T=new ee;T.position.set(_*5.6,28,0);let P=new wt(an.thigh,t.cloth);P.position.y=-6.5,T.add(P);let A=new ee;A.position.y=-13;let R=new wt(an.shin,t.cloth);R.position.y=-6,A.add(R);let B=new wt(an.boot,t.boot);return B.position.set(0,-12.4,-1.4),A.add(B),T.add(A),e.add(T),{hip:T,knee:A,base:0}},l=a(-1),c=a(1),h=_=>{let T=new ee;T.position.set(_*10.4,52.6,0);let P=new wt(an.upperArm,t.cloth);P.position.y=-6,T.add(P);let A=tt(6.2,3,6.4,t.vest,0,-11,0);T.add(A);let R=new ee;R.position.y=-11.8;let B=new wt(an.forearm,t.cloth);B.position.y=-5.4,R.add(B);let M=new wt(an.hand,t.glove);return M.position.set(0,-11.4,0),R.add(M),T.add(R),e.add(T),{shoulder:T,elbow:R}},u=h(-1),f=h(1);f.shoulder.rotation.set(.3,0,-.2),f.elbow.rotation.set(1,0,0),u.shoulder.rotation.set(.7,0,.6),u.elbow.rotation.set(.65,0,0);let p=u.shoulder.rotation.x,g=f.shoulder.rotation.x,x=new ee,m=new wt(an.gunBody,J.black);x.add(m);let d=new wt(an.gunBarrel,J.steelDark);d.position.set(0,.6,-19),x.add(d);let v=new wt(an.gunMag,J.black);return v.position.set(0,-4.8,1.2),v.rotation.x=.25,x.add(v),x.position.set(6.2,40.6,-7),x.rotation.set(-.04,.06,0),e.add(x),{group:e,head:r,helmet:o,gun:x,legL:l.hip,kneeL:l.knee,legR:c.hip,kneeR:c.knee,armL:u.shoulder,elbowL:u.elbow,armR:f.shoulder,elbowR:f.elbow,idleArmL:p,idleArmR:g}}function ax(s,{segs:t=4,w:e=3.4,h:n=3,d:i=4.4,y:r=-2.6,z:o=-4,curve:a=.19,rx:l=0}){let c=new ee;for(let h=0;h<t;h++){let u=tt(e,n+.4,i,s,0,-h*(n-.5),-h*a*3.6,-h*a);c.add(u)}return c.position.set(0,r,o),c.rotation.x=l,c}function vn(s=1,t=1){let e=new ee;e.add(tt(4,6.2,6,J.glove,s*1.5,0,.4));for(let i=0;i<4;i++)e.add(tt(2.6,1.15,1.9,J.glove,s*.3,-2.2+i*1.45,3.5));e.add(tt(1.8,1.5,3,J.glove,s*2.7,2.1,1)),e.add(tt(3.6,4.2,2.4,J.glove,s*1.2,-.7,4));let n=tt(4.4,4.6,14,J.sleeve,s*2.3,-3,11);return n.rotation.x=-.28,n.rotation.z=s*.3,e.add(n),e.scale.setScalar(t),e}function lx(){let s=new ee;s.add(tt(3.5,3.6,20,J.steel,0,0,-2)),s.add(tt(3.2,1.3,13,J.steelDark,0,2.6,-3.2)),s.add(tt(3.7,1,4.2,J.accent,0,-1.9,-8.5)),s.add(tt(3.3,3.1,11.5,J.wood,0,-.9,-14.6)),s.add(tt(2.3,2,11.5,J.steelDark,0,2.1,-14.6)),s.add(tt(2,.9,11.5,J.accent,0,3.2,-14.6)),s.add(We(.85,.85,12,J.steelDark,0,1.2,-23)),s.add(We(1.15,1.15,3.4,J.steel,0,1.2,-29.4)),s.add(tt(1.1,3,1.4,J.steel,0,2.9,-26.2)),s.add(tt(.7,1.4,.7,J.accent,0,4.3,-26.2)),s.add(tt(1.7,1.3,1.2,J.steel,0,3.3,-8.6)),s.add(tt(.6,1,.5,J.black,0,3.6,-8.9)),s.add(ax(J.black,{segs:4,y:-2.2,z:-4.4,curve:.22})),s.add(tt(2.9,7.2,4.4,J.poly,0,-5.4,3.4,.3)),s.add(tt(2.7,3.2,13,J.wood,0,-1.2,13.8,.1)),s.add(tt(3,4.4,2,J.woodDark,0,-2,20.2,.1)),s.add(tt(.9,.9,3.4,J.steel,2,1.5,-3.2));let t=vn(1);t.position.set(.2,-4.6,3.6),s.add(t);let e=vn(-1);return e.position.set(-.4,-2,-11.4),s.add(e),s}function uo(){let s=new ee;s.add(tt(3.3,2.6,18,J.steel,0,.9,-2)),s.add(tt(3,2.2,14,J.steel,0,-1.6,-1)),s.add(tt(1.5,.8,11,J.black,0,3,-3)),s.add(tt(1.5,1.5,.9,J.black,0,2.4,-8.2)),s.add(tt(1.5,1.5,.9,J.black,0,2.4,2)),s.add(We(2.2,2.2,13,J.poly,0,.6,-13.5,12));for(let n=0;n<5;n++)s.add(tt(4.4,.5,1.1,J.black,0,.6,-9.5-n*2.2));s.add(We(.8,.8,11,J.steelDark,0,.9,-24)),s.add(We(1.05,1.05,3,J.steel,0,.9,-30)),s.add(tt(.8,3.2,.8,J.steel,0,2.6,-25.4)),s.add(tt(2.2,.7,.8,J.steel,0,1.3,-25.4)),s.add(tt(3.2,7.8,4.6,J.black,0,-5.4,-4.2,.12)),s.add(tt(2.8,6.8,4.2,J.poly,0,-4.6,3.6,.28)),s.add(We(1.2,1.2,9,J.steelDark,0,-.4,12.4,8)),s.add(tt(3.2,4.2,3.6,J.poly,0,-1,17.4));let t=vn(1);t.position.set(.2,-4,3.8),s.add(t);let e=vn(-1);return e.position.set(-.4,-1.6,-12.6),s.add(e),s}function ou(){let s=new ee;s.add(tt(3.4,4,24,J.steelDark,0,0,-6)),s.add(We(.95,.95,26,J.steel,0,.6,-30)),s.add(We(1.3,1.3,3.6,J.black,0,.6,-43.6)),s.add(We(2.6,2.6,15,J.steelDark,0,4,-10,12)),s.add(We(3.2,2.6,3,J.steel,0,4,-19.5,12)),s.add(We(2.7,3.1,2.6,J.steel,0,4,-1.2,12)),s.add(We(2.2,2.2,.6,J.glass,0,4,-21.2,12)),s.add(tt(2,2.4,2.2,J.steel,0,2.2,-5.4)),s.add(tt(2,2.4,2.2,J.steel,0,2.2,-15.2)),s.add(tt(3.2,2,14,J.poly,0,-1.4,13.2,.06)),s.add(tt(3,2.4,12,J.poly,0,-3.4,14.4,.22)),s.add(tt(3.4,5,2.2,J.black,0,-2.6,20.2,.22)),s.add(tt(2.8,4.2,5.4,J.black,0,-3.4,-6.4)),s.add(tt(2.8,6.4,4.2,J.poly,0,-5.2,2.6,.3)),s.add(tt(.7,.7,9,J.steelDark,0,-1.4,-22.4,.18));let t=vn(1);t.position.set(.2,-4.4,2.8),s.add(t);let e=vn(-1);return e.position.set(-.4,-1.4,-18.4),s.add(e),s}function au(s){let t=new ee,e=s==="p90"?26:18,n=s==="p90"?-2:-3;t.add(tt(3.4,4.6,e,J.poly,0,0,n)),t.add(We(.8,.8,8,J.steelDark,0,.9,n-e/2-3.2)),s==="p90"?(t.add(tt(3,2.2,20,J.steelDark,0,2.8,-2)),t.add(tt(2.2,1.2,16,J.black,0,2,-4)),t.add(tt(4.4,3,5,J.black,0,-2.4,4))):(t.add(tt(2.6,9.5,3.4,J.black,0,-6.2,-5.4,.14)),t.add(We(2,2,7,J.poly,0,.4,-11.4,12)),t.add(tt(1.8,4.6,3.6,J.poly,0,-4.2,3.2,.26)),t.add(tt(2.2,.8,12,J.steelDark,0,2.6,-4)));let i=vn(1);i.position.set(.2,-3.6,3.2),t.add(i);let r=vn(-1);return r.position.set(-.4,-1.6,-10.6),t.add(r),t}function vl(s){let t=new ee,e=s==="deagle",n=e?3.9:3.1,i=e?4.2:3.3,r=e?16:14;if(t.add(tt(n,i,r,J.steel,0,1,-3)),t.add(tt(n-.4,2,r-2.5,J.steelDark,0,-1.4,-3)),t.add(tt(n-1.2,i-1.4,1.8,J.black,0,1,-3-r/2)),t.add(tt(n-.6,e?8.6:7.8,e?5.2:4.6,J.poly,0,-5.4,2.2,.22)),t.add(tt(n-1.4,.9,4.4,J.black,0,-2.6,-1.2)),t.add(tt(1.1,1.4,1.6,J.black,0,2.9,3.4,-.2)),t.add(tt(.9,1.2,1.4,J.accent,0,i/2+1.2,-3-r/2+2)),t.add(tt(1.3,1,1,J.accent,0,i/2+1.1,2.8)),e){for(let a=0;a<3;a++)t.add(tt(n-1,.5,2.2,J.black,0,i/2+.9,-6+a*3));t.add(We(1,1,2.6,J.steelDark,0,.7,-11.2))}let o=vn(1,.86);return o.position.set(.1,-3.9,2.8),t.add(o),t}function cx(){let s=new ee;s.add(tt(.9,2.6,15,J.steel,0,0,-8)),s.add(tt(.5,1.4,14,J.accent,-.5,-.6,-8.4)),s.add(tt(.6,.9,8,J.steelDark,0,1.4,-6)),s.add(tt(1.6,.5,1,J.accent,0,0,-15.2)),s.add(tt(3.2,1.2,2.2,J.steelDark,0,-.4,.4)),s.add(tt(2.5,2.7,7.4,J.black,0,-.6,5.2)),s.add(tt(2.7,.7,1.2,J.accent,0,-.6,9));let t=vn(1);return t.position.set(.4,-1.2,5.2),s.add(t),s.rotation.set(-.32,.48,.16),s}var Ml={};function hu(s){if(Ml[s])return Ml[s];let t;switch(s){case"ak47":t=lx();break;case"m4a1":t=uo();break;case"aug":{t=uo(),t.add(tt(2.4,2,9,J.black,0,3.6,-6)),t.add(tt(1.8,1.2,1,J.glass,0,3.6,-10.2));break}case"sg552":{t=uo(),t.add(tt(1.4,1.6,6,J.black,0,3.2,-2));break}case"awp":t=ou();break;case"scout":{t=ou();break}case"mp5navy":t=au("mp5");break;case"p90":t=au("p90");break;case"deagle":t=vl("deagle");break;case"usp45":t=vl("usp");break;case"glock18":t=vl("glock");break;case"knife":t=cx();break;default:t=uo()}return Ml[s]=t,t}function uu(s){let t=new ee,e=s==="awp"||s==="scout",n=s==="deagle"||s==="usp45"||s==="glock18";return s==="knife"?(t.add(tt(.8,2.2,13,J.steel,0,0,-6)),t.add(tt(2.4,2.6,6,J.black,0,0,4)),t):n?(t.add(tt(3.2,3.6,13,J.steelDark,0,0,-3)),t.add(tt(2.6,7,4.4,J.black,0,-4.4,2)),t):(t.add(tt(4,4,e?26:20,J.black,0,0,-4)),t.add(tt(1.8,1.8,e?18:11,J.steelDark,0,.7,e?-24:-18)),e?t.add(tt(2.6,2.6,13,J.black,0,3.4,-8)):t.add(tt(3,6.5,4,J.black,0,-4.4,0)),t)}var Bs=Math.PI/180,hx=(s,t,e)=>Math.max(t,Math.min(e,s)),fo=null;function ux(){if(fo)return fo;let s=128,t=document.createElement("canvas");t.width=t.height=s;let e=t.getContext("2d"),n=e.createRadialGradient(s/2,s/2,2,s/2,s/2,s/2);return n.addColorStop(0,"rgba(0,0,0,0.60)"),n.addColorStop(.42,"rgba(0,0,0,0.34)"),n.addColorStop(.78,"rgba(0,0,0,0.10)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,s,s),fo=new qe(t),fo}var cs=class{constructor(t,{name:e,team:n,isBot:i=!1,id:r=0}){this.game=t,this.id=r,this.name=e,this.team=n,this.isBot=i,this.pos=new w(0,0,0),this.vel=new w,this.yaw=0,this.pitch=0,this.punchPitch=0,this.punchYaw=0,this.eyeHeight=he.eyeStand,this.onGround=!0,this.groundY=0,this.groundMat="sand",this.walking=!1,this.onLadder=!1,this.priming=!1,this.primeT=0,this.ducking=!1,this.duckAmount=0,this.health=100,this.armor=0,this.helmet=!1,this.money=zt.startMoney,this.alive=!1,this.kills=0,this.deaths=0,this.damageDealt=0,this.assists=0,this.slots={primary:null,secondary:null,melee:Fs("knife")},this.grenades={he:0,flash:0,smoke:0},this.grenadeSel=null,this.hasBomb=!1,this.hasKit=!1,this.curSlot="secondary",this.curGrenade="he",this.zoom=0,this.deployTime=0,this.reloadEnd=0,this.nextFire=0,this.shotCount=0,this.lastShotTime=-10,this.fireHeld=!1,this.triggerQueued=!1,this.footTimer=0,this.bobTime=0,this.lastDamageTime=-10,this.swingT=0,this.attacker=null,this.plantProgress=0,this.defuseProgress=0,this.spawnProtect=0,this.flashAmount=0,this.mesh=null,this.viewModel=null,this.muzzleLight=null}spawnAt(t){this.pos.set(t.x,0,t.z),this.vel.set(0,0,0),this.yaw=t.yaw,this.pitch=0,this.punchPitch=0,this.punchYaw=0,this.alive=!0,this.health=100,this.onGround=!0,this.groundY=0,this.priming=!1,this.primeT=0,this.onLadder=!1,this.ducking=!1,this.duckAmount=0,this.zoom=0,this.shotCount=0,this.plantProgress=0,this.defuseProgress=0,this.flashAmount=0,this.hasBomb=!1,this.curSlot=this.slots.primary?"primary":this.slots.secondary?"secondary":"melee",this.mesh&&(this.mesh.visible=!0),this.viewModel&&(this.viewModel.visible=!this.isBot),this.syncMesh()}resetInventory(){this.slots.primary=null,this.slots.secondary=null,this.grenades={he:0,flash:0,smoke:0},this.hasKit=!1,this.hasBomb=!1,this.armor=0,this.helmet=!1,this.grenadeSel=null}giveWeapon(t){let e=Kt[t];if(!e)return;let n=Fs(t);e.slot===1?(this.slots.primary=n,this.curSlot="primary"):e.slot===2&&(this.slots.secondary=n,this.curSlot="secondary"),this.deployTime=.4,this.reloadEnd=0,this.zoom=0,zs(t)}get weapon(){return this.curSlot==="primary"?this.slots.primary:this.curSlot==="secondary"?this.slots.secondary:this.curSlot==="melee"?this.slots.melee:null}get weaponDef(){let t=this.weapon;return t?Kt[t.id]:null}maxSpeedNow(){let t=this.weaponDef,e=t?t.speed:250;return this.curSlot==="grenade"&&(e=250),this.hasBomb&&this.curSlot!=="melee"&&(e*=.98),e}eyeY(){return this.pos.y+this.eyeHeight}update(t,e){this.swingT>0&&(this.swingT=Math.max(0,this.swingT-t*3.1));let n=this.ducking?he.eyeDuck:he.eyeStand;if(this.eyeHeight+=(n-this.eyeHeight)*Math.min(1,t*12),this.duckAmount+=((this.ducking?1:0)-this.duckAmount)*Math.min(1,t*14),this.flashAmount>0&&(this.flashAmount=Math.max(0,this.flashAmount-t*.42)),!this.alive){this.syncMesh();return}if(this.move(t,e),this.updateWeapon(t),this.priming){this.primeT+=t;let o=eo[this.grenadeSel]||3;this.primeT>=o&&(this.priming=!1,this.primeT=0,this.throwGrenade(o))}let i=Math.exp(-t*(this.game.time-this.lastShotTime>.25?7.5:2.4));this.punchPitch*=i,this.punchYaw*=i,Math.abs(this.punchPitch)<.01&&(this.punchPitch=0),Math.abs(this.punchYaw)<.01&&(this.punchYaw=0);let r=Math.hypot(this.vel.x,this.vel.z);this.onGround&&r>90&&!this.walking?(this.footTimer-=t*(r/250),this.footTimer<=0&&(this.footTimer=.42,pl(this.pos,this.game.listenerPos(),this.groundMat||"sand"))):this.footTimer=Math.min(this.footTimer,.2),this.pos.y<-400&&this.game.onPlayerFell(this),this.syncMesh()}move(t,e){let n=e.forward||0,i=e.side||0;this.ducking=!!e.duck,this.walking=!!e.walk;let r=Math.sin(this.yaw),o=Math.cos(this.yaw),a=-r*n+o*i,l=-o*n-r*i,c=Math.hypot(a,l);c>.001&&(a/=c,l/=c);let h=this.game.map.ladderAt(this.pos.x,this.pos.z,this.pos.y);if(this.onLadder=!!h,h){let p=e.jump&&!this.jumpHeld;this.jumpHeld=!!e.jump;let g=n>.1?1:n<-.1?-1:0;this.vel.y=p?he.jumpVel*.75:g*he.maxLadderSpeed*.55,g>0&&this.pos.y>=(h.y1||400)-6&&(this.vel.y=0),(p||g>0)&&(this.onGround=!1),this.vel.x*=.12,this.vel.z*=.12,i&&(this.vel.x+=Math.cos(this.yaw)*i*45,this.vel.z+=-Math.sin(this.yaw)*i*45),this.integrate(t);return}let u=this.maxSpeedNow();this.ducking&&(u*=he.duckMul),e.walk&&(u*=he.walkMul),!this.onGround&&this.zoom>0&&(u=Math.min(u,100));let f=c>.001?u:0;if(this.onGround){let p=Math.hypot(this.vel.x,this.vel.z);if(p>.1){let x=Math.max(p,he.stopSpeed)*he.friction*t,d=Math.max(0,p-x)/p;this.vel.x*=d,this.vel.z*=d}}f>0&&(this.onGround?du(this,a,l,f,he.accel,t):du(this,a,l,Math.min(f,he.airWishSpeed),he.airAccel,t)),e.jump&&this.onGround&&!this.jumpHeld&&(this.vel.y=he.jumpVel,this.onGround=!1,this.game.stats.jumps++),this.jumpHeld=!!e.jump,this.onGround||(this.vel.y-=he.gravity*t,this.vel.y<-2e3&&(this.vel.y=-2e3)),this.integrate(t)}integrate(t){let e=this.game.map,n=he.radius,i=this.ducking?he.duckHeight:he.standHeight;this.pos.x+=this.vel.x*t,this.resolveAxis("x",n,i),this.pos.z+=this.vel.z*t,this.resolveAxis("z",n,i);let r=this.onGround?he.stepHeight:this.ducking?he.duckJumpBonus:0,o=e.supportHeightAt(this.pos.x,this.pos.z,n,this.pos.y+r),a=o.y;if(this.groundMat=o.mat,this.groundY=a,this.pos.y+=this.vel.y*t,this.vel.y<=0&&this.pos.y<=a?(!this.onGround&&this.vel.y<-260&&pl(this.pos,this.game.listenerPos(),this.groundMat||"sand"),this.pos.y=a,this.vel.y=0,this.onGround=!0):this.onGround&&(this.pos.y-a<=he.stepHeight?(this.pos.y=a,this.vel.y=0):this.onGround=!1),!e.isFloorAt(this.pos.x,this.pos.z)){let l=this.findNearestFloor(this.pos.x,this.pos.z);l&&(this.pos.x=l.x,this.pos.z=l.z,this.vel.x=0,this.vel.z=0)}}findNearestFloor(t,e){let n=this.game.map,{cx:i,cz:r}=n.worldToTile(t,e);for(let o=1;o<=4;o++)for(let a=-o;a<=o;a++)for(let l=-o;l<=o;l++)if(n.isFloorTile(i+l,r+a))return n.tileToWorld(i+l,r+a);return null}resolveAxis(t,e,n){let i=this.game.map.colliders,r=this.pos.x,o=this.pos.z,a=this.pos.y,l=this.onGround?he.stepHeight:this.ducking?he.duckJumpBonus:0;for(let c=0;c<i.length;c++){let h=i[c];if(!(h.y1<=a+l)&&!(h.y0>a+n||h.y1<a+2)&&!(r+e<=h.x0||r-e>=h.x1)&&!(o+e<=h.z0||o-e>=h.z1)){t==="x"?(this.pos.x=r-(h.x0-e)<=h.x1+e-r?h.x0-e-.01:h.x1+e+.01,this.vel.x=0):(this.pos.z=o-(h.z0-e)<=h.z1+e-o?h.z0-e-.01:h.z1+e+.01,this.vel.z=0);return}}}currentAmmo(){let t=this.weapon;return t?t.ammo:0}reserveAmmo(){let t=this.weapon;return t?t.reserve:0}updateWeapon(t){this.deployTime>0&&(this.deployTime=Math.max(0,this.deployTime-t)),this.reloadEnd>0&&this.game.time>=this.reloadEnd&&this.finishReload(),this.game.time-this.lastShotTime>.45&&(this.shotCount=0);let e=this.weapon;if(!e)return;let n=Kt[e.id];this.fireHeld&&n&&n.auto&&this.curSlot!=="grenade"&&this.game.time>=this.nextFire&&this.tryFire()}canFire(){return!(!this.alive||this.game.round.phase==="freeze"||this.game.round.phase==="over"||this.deployTime>0||this.reloadEnd>0||this.game.time<this.nextFire)}tryFire(){if(!this.canFire())return;if(this.curSlot==="grenade"){this.throwGrenade();return}let t=this.weapon;if(!t)return;let e=Kt[t.id];if(e.cls==="melee"){this.knifeAttack();return}if(t.ammo<=0){this.game.settings.autoReload&&t.reserve>0?this.reload():Si();return}t.ammo--,this.nextFire=this.game.time+60/e.rpm,this.lastShotTime=this.game.time,this.shotCount++;let[n,i]=Lh(e,this.shotCount);this.punchPitch+=n,this.punchYaw-=i;let r=new w(this.pos.x,this.eyeY(),this.pos.z),o=this.aimDir(),a=this.computeSpread(e),l=fu(o,a);this.game.lastShotDir=l;let c=e.pellets||1;if(c===1)xl(this.game,this,r,l,e);else for(let h=0;h<c;h++)xl(this.game,this,r,fu(o,a),e);Pe.muzzle(this,e),fl(e.sound,this.pos,this.game.listenerPos()),e.scope&&this.zoom>0&&(this.zoom=0,ml(!1)),t.ammo===0&&t.reserve>0&&this.game.settings.autoReload&&this.reload()}computeSpread(t){let e=Math.hypot(this.vel.x,this.vel.z),n=t.spread;return n+=e/250*t.moveSpread,this.onGround||(n+=t.moveSpread*.9),this.ducking&&(n*=.62),this.zoom>0&&(n*=.05),n+=Math.min(this.shotCount,12)*t.kick*.13,n*Bs}aimDir(){let t=this.yaw+this.punchYaw*Bs,e=hx(this.pitch+this.punchPitch*Bs,-89*Bs,89*Bs),n=Math.cos(e);return new w(-Math.sin(t)*n,Math.sin(e),-Math.cos(t)*n)}knifeAttack(){let t=Kt.knife;this.nextFire=this.game.time+60/t.rpm,this.lastShotTime=this.game.time,this.swingT=1,fl("knife",this.pos,this.game.listenerPos());let e=new w(this.pos.x,this.eyeY(),this.pos.z),n=this.aimDir(),i=this.game.tracePlayers(e,n,t.range,this);if(i&&!i.friendly){let r=t.dmg;Os(this.game,i.player,this,r,"chest",t),Pe.blood(i.point,6)}Pe.knifeSwing(this)}reload(){let t=this.weapon;if(!t)return;let e=Kt[t.id];!e||e.cls==="melee"||this.reloadEnd>0||t.ammo>=e.mag||t.reserve<=0||(this.reloadEnd=this.game.time+e.reload,this.zoom=0,Kh(t.id))}finishReload(){this.reloadEnd=0;let t=this.weapon;if(!t)return;let n=Kt[t.id].mag-t.ammo,i=Math.min(n,t.reserve);t.ammo+=i,t.reserve-=i}switchSlot(t){if(this.alive&&(this.priming=!1,this.primeT=0,!(t==="primary"&&!this.slots.primary)&&!(t==="secondary"&&!this.slots.secondary))){if(t==="grenade"){let e=["he","flash","smoke"].filter(i=>this.grenades[i]>0);if(!e.length)return;let n=e.indexOf(this.grenadeSel);this.grenadeSel=e[(n+1)%e.length],this.curSlot="grenade",this.deployTime=.35,this.zoom=0,zs(null);return}this.curSlot!==t&&(this.curSlot=t,this.deployTime=.4,this.reloadEnd=0,this.zoom=0,zs(this.weaponDef?this.weaponDef.id:null))}}toggleZoom(){let t=this.weaponDef;!t||!t.scope||(this.zoom=(this.zoom+1)%3,ml(this.zoom>0))}throwGrenade(t=0){let e=this.grenadeSel;if(!e||this.grenades[e]<=0)return;this.grenades[e]--,this.nextFire=this.game.time+.9,this.deployTime=.5;let n=new w(this.pos.x,this.eyeY()-4,this.pos.z),i=this.aimDir(),r=new co(this.game,this,e,n,i);r.fuse=Math.max(0,r.fuse-t),this.game.grenades.push(r),Jh(),this.grenades[e]===0&&(this.grenadeSel=null,this.curSlot=this.slots.primary?"primary":this.slots.secondary?"secondary":"melee",zs(this.weaponDef?this.weaponDef.id:null))}beginPrime(){let t=this.grenadeSel;!t||this.grenades[t]<=0||(this.priming=!0,this.primeT=0)}releaseGrenade(){if(!this.priming)return;this.priming=!1;let t=this.primeT;this.primeT=0,this.throwGrenade(t)}pickUp(t){let e=Kt[t];e&&(e.slot===1?this.slots.primary=Fs(t):this.slots.secondary=Fs(t),this.curSlot=e.slot===1?"primary":"secondary",this.deployTime=.4,as())}takeDamage(t,e,n,i){if(!this.alive)return 0;let r=t,o=Kt[i],a=o&&o.pen!=null?o.pen:.72;if(this.armor>0&&n!=="leg"&&!(n==="head"&&!this.helmet)){let c=r*a,h=(r-c)*.5;h>this.armor?(h=this.armor/a,r=Math.max(0,r-h),this.armor=0):(this.armor-=h,r=c)}return r=Math.round(r),this.health-=r,this.lastDamageTime=this.game.time,this.attacker=e,e&&e!==this&&(e.damageDealt+=Math.min(r,this.health+r)),this.health<=0&&(this.health=0,this.alive=!1,this.game.onPlayerKilled(this,e,i,n==="head")),r}buildMesh(t){let e=cu(this.team);this.mesh=e.group,this._helmetMesh=e.helmet,this._gunMesh=e.gun,this._legL=e.legL,this._kneeL=e.kneeL,this._legR=e.legR,this._kneeR=e.kneeR,this._armL=e.armL,this._elbowL=e.elbowL,this._armR=e.armR,this._elbowR=e.elbowR,this._idleArmL=e.idleArmL,this._idleArmR=e.idleArmR,t.add(this.mesh);let n=new wt(new rn(1,1),new Je({map:ux(),transparent:!0,depthWrite:!1,opacity:.5,polygonOffset:!0,polygonOffsetFactor:-2}));n.rotation.x=-Math.PI/2,n.position.y=1.2,n.renderOrder=2,t.add(n),this._shadow=n,this.syncMesh()}syncMesh(){if(!this.mesh)return;this.mesh.visible=this.alive&&!this.isLocal,this.mesh.position.set(this.pos.x,this.pos.y,this.pos.z),this.mesh.rotation.y=this.yaw;let t=this.duckAmount;if(this.mesh.scale.y=1-t*.34,this._shadow){let r=this.alive&&!this.isLocal;if(this._shadow.visible=r,r){let o=this.groundY||0,a=Math.max(0,this.pos.y-o),l=Math.max(.3,1-a/240);this._shadow.position.set(this.pos.x,o+1.2,this.pos.z),this._shadow.scale.setScalar(48*l),this._shadow.material.opacity=.5*l}}this._gunMesh&&(this._gunMesh.visible=this.curSlot!=="melee");let e=Math.hypot(this.vel.x,this.vel.z),n=this.alive&&e>30&&this.onGround,i=0;n&&(i=Math.sin(this.game.time*(7+e*.016))*Math.min(.62,e/380)),this._legL&&(this._legL.rotation.x=i,this._legR.rotation.x=-i,this._kneeL.rotation.x=-Math.max(0,-i)*1.25,this._kneeR.rotation.x=-Math.max(0,i)*1.25,this._armL.rotation.x=this._idleArmL-i*.3,this._armR.rotation.x=this._idleArmR+i*.22)}hitboxes(){let t=he.standHeight*(1-this.duckAmount*.5),e=this.pos.y;return[{group:"head",y0:e+t-13,y1:e+t,r:7},{group:"chest",y0:e+t*.52,y1:e+t-13,r:13},{group:"stomach",y0:e+t*.34,y1:e+t*.52,r:12},{group:"leg",y0:e,y1:e+t*.34,r:10}]}};function du(s,t,e,n,i,r){let o=s.vel.x*t+s.vel.z*e,a=n-o;if(a<=0)return;let l=i*r*n;l>a&&(l=a),s.vel.x+=t*l,s.vel.z+=e*l}function fu(s,t){if(t<=0)return s.clone();let e=Math.abs(s.y)>.99?new w(1,0,0):new w(0,1,0),n=new w().crossVectors(s,e).normalize(),i=new w().crossVectors(n,s).normalize(),r=Math.random()*Math.PI*2,o=Math.sqrt(Math.random())*t;return s.clone().addScaledVector(n,Math.cos(r)*o).addScaledVector(i,Math.sin(r)*o).normalize()}var po=Math.PI/180,dx=(s,t,e)=>Math.max(t,Math.min(e,s)),Hs=class{constructor(t,e,n=.55){this.game=t,this.p=e,this.skill=n,this.path=null,this.pathIdx=0,this.goal=null,this.goalKind=null,this.target=null,this.targetVisible=!1,this.lastSeen=null,this.lastSeenTime=-99,this.reactionAt=0,this.aimError=0,this.burstUntil=0,this.burstPauseUntil=0,this.strafeDir=0,this.strafeUntil=0,this.repathAt=0,this.stuckTimer=0,this.lastPos=new w,this.crouchUntil=0,this.decisionAt=0,this.wanderTarget=null,e.botOnFlashed=i=>{this.aimError=Math.max(this.aimError,i*18),this.targetVisible=!1,this.target=null,this.lastSeenTime=-99}}canSee(t){if(!t.alive)return!1;let e=new w(this.p.pos.x,this.p.eyeY(),this.p.pos.z),n=new w(t.pos.x,t.pos.y+52,t.pos.z),i=e.distanceTo(n);if(i>2600)return!1;let r=n.clone().sub(e).normalize(),o=new w(-Math.sin(this.p.yaw),0,-Math.cos(this.p.yaw)),a=new w(r.x,0,r.z).normalize();return!(o.dot(a)<.25&&i>350||!this.game.map.lineOfSight(e,n)||this.game.fx.blocksLineOfSight(e,n))}update(t){let e=this.p;if(!e.alive){e.fireHeld=!1;return}let n={forward:0,side:0,jump:!1,duck:!1,walk:!1};e.wantUse=!1;let i=this.game.round.phase;if(i==="freeze"||i==="over"){e.fireHeld=!1,e.update(t,n);return}if(e.flashAmount>.7){this.strafeMove(t,n,(Math.random()-.5)*.6),e.update(t,n);return}this.perceive(t),this.think(t,n),e.update(t,n)}perceive(t){let e=this.p,n=null,i=1/0;for(let r of this.game.players){if(!r.alive||r.team===e.team||!this.canSee(r))continue;let a=e.pos.distanceTo(r.pos)+(r.health>0?0:500)-(r===this.target?120:0);a<i&&(i=a,n=r)}n?(n!==this.target&&(this.target=n,this.reactionAt=this.game.time+(.46-this.skill*.24)*(.75+Math.random()*.7),this.aimError=(3.6-this.skill*2.3)*(.65+Math.random()*.85)),this.targetVisible=!0,this.lastSeen=new w(n.pos.x,n.pos.y+52,n.pos.z),this.lastSeenTime=this.game.time,(!this._calledOut||this.game.time-this._calledOut>3)&&(this._calledOut=this.game.time,this.game.botCallout(this,n))):(this.targetVisible=!1,this.target&&this.game.time-this.lastSeenTime>1.2&&(this.target=null))}think(t,e){let n=this.p,r=this.game.round.bomb;if((!this.goalKind||this.game.time>this.decisionAt)&&(this.decisionAt=this.game.time+2.5,this.chooseGoal()),this.target&&this.target.alive){let o=this.target,a=n.pos.distanceTo(o.pos);n.fireHeld=!1,n.weapon&&n.weapon.ammo===0&&n.weapon.reserve>0&&n.reloadEnd<=0&&n.reload();let l=new w(n.pos.x,n.eyeY(),n.pos.z),h=new w(o.pos.x,o.pos.y+(this.skill>.6?58:46),o.pos.z).clone().sub(l),u=Math.atan2(-h.x,-h.z),f=Math.asin(dx(h.clone().normalize().y,-1,1)),p=(3.6+this.skill*7.5)*(this.targetVisible?1:.45),g=(Math.random()-.5)*2*this.aimError*po,x=(Math.random()-.5)*2*this.aimError*.7*po;n.yaw=pu(n.yaw,u+g,p*t),n.pitch=fx(n.pitch,f+x,p*.75*t),a>1700?(this.moveToward(this.lastSeen||o.pos,e,1),this.holdTime=0):a>850?(this.holdTime=(this.holdTime||0)+t,this.holdTime<1.5?(e.forward=0,e.side=0):(this.strafeMove(t,e,.7),this.holdTime>2.8&&(this.holdTime=0))):a>400?(this.strafeMove(t,e,.6),this.holdTime=0):(this.strafeMove(t,e,.85),this.holdTime=0),a>900&&this.game.time>this.crouchUntil&&Math.random()<.015&&(this.crouchUntil=this.game.time+.9),e.duck=this.game.time<this.crouchUntil;let m=n.weaponDef;if(this.targetVisible&&this.game.time>this.reactionAt){let d=Math.abs(bl(n.yaw,u))<(5+this.skill*4)*po,v=Math.abs(bl(n.yaw,u))<20*po,_=Math.hypot(n.vel.x,n.vel.z),T=a<500||_<130,P=n.weapon&&(n.weapon.ammo>0||n.weapon.reserve>0);if(d&&v&&T&&P&&a<2100&&n.curSlot!=="grenade"&&this.game.time>this.burstPauseUntil){if(this.game.time>this.burstUntil){let A=.12+Math.random()*(.18+this.skill*.4);this.burstUntil=this.game.time+A,this.burstPauseUntil=this.burstUntil+.08+Math.random()*(.5-this.skill*.25)}n.fireHeld=!0,(!m||!m.auto)&&n.tryFire()}}return}if(n.fireHeld=!1,this.holdTime=0,e.duck=this.game.time<this.crouchUntil,n.team==="T"&&n.hasBomb)if(this.game.map.siteAt(n.pos.x,n.pos.z)){n.wantUse=!0,e.forward=0,e.side=0,this.moveToward(null,e,0);return}else this.goalKind!=="site"&&(this.goalKind="site",this.goal=this.pickSite(),this.repath());if(n.team==="CT"&&r.state==="planted"){if(Math.hypot(r.pos.x-n.pos.x,r.pos.z-n.pos.z)<60){n.wantUse=!0,e.forward=0,e.side=0;return}this.goalKind="defuse",this.goal=r.pos,this.followPathTo(r.pos,e,t);return}if(n.team==="T"&&!n.hasBomb&&r.state==="dropped"){this.goalKind="pickup",this.goal=r.pos.clone(),this.followPathTo(this.goal,e,t);return}if(this.lastSeen&&this.game.time-this.lastSeenTime<4){this.moveToward(this.lastSeen,e,.8);return}this.goal?Math.hypot(this.goal.x-n.pos.x,this.goal.z-n.pos.z)<160&&(this.goalKind==="defend"||this.goalKind==="site")?(e.forward=0,e.side=0,n.yaw+=Math.sin(this.game.time*.55+this.skill*9)*t*.5):this.followPathTo(this.goal,e,t):e.forward=0}chooseGoal(){let t=this.p,e=this.game.round;if(t.team==="T")this.goalKind="site",this.goal=this.pickSite();else{this.goalKind="defend";let i=this.game.players.filter(r=>r.team==="CT"&&r.alive).indexOf(t);this.goal=i%2===0?this.siteCenter("A"):this.siteCenter("B"),e.bomb.state==="planted"&&(this.goal=e.bomb.pos)}this.repath()}pickSite(){if(this.game.round.tBombsite)return this.siteCenter(this.game.round.tBombsite);let t=Math.random()<.5?"A":"B";return this.game.round.tBombsite=t,this.siteCenter(t)}siteCenter(t){let e=this.game.map.sites[t];return new w((e.x0+e.x1)/2,0,(e.z0+e.z1)/2)}repath(){this.goal&&(this.path=this.game.map.findPath(this.p.pos,this.goal),this.pathIdx=0,this.repathAt=this.game.time+2)}followPathTo(t,e,n){let i=this.p;if((!this.path||this.game.time>this.repathAt)&&this.repath(),!this.path||this.path.length===0){this.moveToward(t,e,1);return}for(;this.pathIdx<this.path.length;){let o=this.path[this.pathIdx];if(Math.hypot(o.x-i.pos.x,o.z-i.pos.z)<55)this.pathIdx++;else break}let r=this.path[this.pathIdx]||t;this.moveToward(r,e,1),this.checkStuck(n)}checkStuck(t){let e=this.p,n=Math.hypot(e.pos.x-this.lastPos.x,e.pos.z-this.lastPos.z);this.lastPos.set(e.pos.x,0,e.pos.z),n<.6?(this.stuckTimer+=t,this.stuckTimer>.5&&(this.path=null,this.repathAt=0,this.stuckTimer=0)):this.stuckTimer=0}moveToward(t,e,n=1){if(!t){e.forward=0,e.side=0;return}let i=this.p,r=t.x-i.pos.x,o=t.z-i.pos.z,a=Math.hypot(r,o)||1,l=r/a*n,c=o/a*n,h=Math.sin(i.yaw),u=Math.cos(i.yaw);if(e.forward=l*-h+c*-u,e.side=l*u+c*-h,!this.target){let f=Math.atan2(-r,-o);i.yaw=pu(i.yaw,f,6.5*.016)}}strafeMove(t,e,n){let i=this.p;this.game.time>this.strafeUntil&&(this.strafeUntil=this.game.time+.35+Math.random()*.6,this.strafeDir=Math.random()<.5?-1:1),e.side=this.strafeDir*n,e.forward=(Math.random()<.25?.6:0)-(Math.random()<.1?.5:0)}};function bl(s,t){let e=s-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function pu(s,t,e){let n=bl(t,s);return Math.abs(n)<=e?t:s+Math.sign(n)*e}function fx(s,t,e){return Math.abs(t-s)<=e?t:s+Math.sign(t-s)*e}var mo=class{constructor(t){this.game=t,this.phase="idle",this.time=0,this.roundNum=0,this.scoreCT=0,this.scoreT=0,this.lossStreak={CT:0,T:0},this.bomb={state:"carried",pos:new w,carrier:null,timer:0,beep:0,planter:null,defuser:null,site:null},this.lastResult=null,this.tBombsite=null,this.bombMesh=null,this.winTarget=zt.winRounds,this.overtime=0,this.otRoundsPlayed=0}startMatch(){this.roundNum=0,this.scoreCT=0,this.scoreT=0,this.lossStreak={CT:0,T:0},this.winTarget=zt.winRounds,this.overtime=0,this.otRoundsPlayed=0;for(let t of this.game.players)t.money=zt.startMoney,t.kills=0,t.deaths=0,t.damageDealt=0,t.resetInventory(),t.giveWeapon(t.team==="T"?"glock18":"usp45");this.startRound(!0)}startRound(t=!1){this.roundNum++,this.roundTimeLeft=zt.roundTime,this.phase="freeze",this.time=zt.freezeTime,this.tBombsite=null,this.lastResult=null,this.bomb.state="carried",this.bomb.timer=0,this.bomb.carrier=null,this.bomb.planter=null,this.bomb.defuser=null,this.bomb.beep=0,this.bombMesh&&(this.game.scene.remove(this.bombMesh),this.bombMesh=null);let e={T:0,CT:0},n=this.game.players.slice().sort(()=>Math.random()-.5);for(let r of n){let o=this.game.map.spawns[r.team],a=o[e[r.team]++%o.length];r.alive||(r.resetInventory(),r.giveWeapon(r.team==="T"?"glock18":"usp45")),r.spawnAt(a),r.plantProgress=0,r.defuseProgress=0,r.wantUse=!1,r.fireHeld=!1,r.flashAmount=0,r.curSlot=r.slots.primary?"primary":r.slots.secondary?"secondary":"melee",r.deployTime=.6}let i=this.game.players.filter(r=>r.team==="T");if(i.length){let r=i[Math.floor(Math.random()*i.length)];r.hasBomb=!0,this.bomb.carrier=r}this.game.botsBuy(),this.game.localPlayer&&this.game.localPlayer.team==="T"&&this.game.localPlayer.hasBomb&&this.game.hud.toast("\u4F60\u643A\u5E26\u4E86 C4 \u2014\u2014 \u5230 A / B \u70B9\u6309 E \u5B89\u653E"),su(),this.game.hud.announce(`\u7B2C ${this.roundNum} \u56DE\u5408 \xB7 \u51C6\u5907`)}endRound(t,e){if(this.phase==="over"||this.phase==="matchend")return;this.phase="over",this.time=zt.roundEndDelay,this.lastResult={winner:t,reason:e},t==="CT"?this.scoreCT++:t==="T"&&this.scoreT++;let n=t,i=t==="CT"?"T":"CT",r=this.bomb.state==="planted"||this.bomb.state==="defused"||this.bomb.state==="exploded";for(let a of this.game.players){let l=0;if(a.team===n)l+=e==="bomb"?zt.winBombReward:zt.winReward,this.lossStreak[a.team]=0;else{let c=this.lossStreak[a.team]=Math.min(5,this.lossStreak[a.team]+1);l+=Math.min(zt.lossMax,zt.lossBase+(c-1)*zt.lossStep),a.team==="T"&&r&&(l+=zt.plantBonus)}a.money=Math.min(zt.maxMoney,a.money+l)}let o={elim:t==="CT"?"\u53CD\u6050\u7CBE\u82F1\u83B7\u80DC \xB7 \u5168\u6B7C\u654C\u4EBA":"\u6050\u6016\u5206\u5B50\u83B7\u80DC \xB7 \u5168\u6B7C\u654C\u4EBA",bomb:"\u6050\u6016\u5206\u5B50\u83B7\u80DC \xB7 \u76EE\u6807\u5DF2\u6467\u6BC1",defuse:"\u53CD\u6050\u7CBE\u82F1\u83B7\u80DC \xB7 \u70B8\u5F39\u5DF2\u62C6\u9664",time:"\u53CD\u6050\u7CBE\u82F1\u83B7\u80DC \xB7 \u65F6\u95F4\u8017\u5C3D"}[e]||`${t} \u83B7\u80DC`;this.game.hud.roundEnd(t,o,this.scoreCT,this.scoreT),this.game.hud.setProgress(null,0)}nextRound(){if(this.scoreCT>=this.winTarget||this.scoreT>=this.winTarget){this.finishMatch();return}if(!this.overtime&&this.roundNum>=zt.maxRounds){if(this.scoreCT===this.scoreT){this.startOvertime();return}this.finishMatch();return}if(this.overtime){if(this.otRoundsPlayed+=1,this.otRoundsPlayed>=zt.overtimeHalf*2){this.startOvertime();return}this.otRoundsPlayed===zt.overtimeHalf&&this.swapSides(),this.startRound();return}if(this.roundNum===zt.halftimeRound){this.halftime();return}this.startRound()}finishMatch(){this.phase="matchend";let t=this.scoreCT>this.scoreT?"CT":(this.scoreT>this.scoreCT,"T");this.game.hud.matchEnd(t,this.scoreCT,this.scoreT),this.game.localPlayer.fireHeld=!1}swapSides(){for(let t of this.game.players)t.team=t.team==="T"?"CT":"T",t.money=Math.min(zt.maxMoney,t.money),t.resetInventory(),t.giveWeapon(t.team==="T"?"glock18":"usp45"),t.mesh&&(this.game.scene.remove(t.mesh),t._shadow&&(this.game.scene.remove(t._shadow),t._shadow.geometry.dispose(),t._shadow.material.dispose(),t._shadow=null),t.buildMesh(this.game.scene));this.lossStreak={CT:0,T:0}}halftime(){this.swapSides();for(let t of this.game.players)t.money=zt.startMoney;this.game.hud.announce("\u534A\u573A\u7ED3\u675F \xB7 \u4EA4\u6362\u9635\u8425"),this.startRound()}startOvertime(){this.overtime+=1,this.otRoundsPlayed=0,this.winTarget=Math.max(this.scoreCT,this.scoreT)+zt.overtimeWin,this.swapSides();for(let t of this.game.players)t.money=zt.overtimeMoney;this.game.hud.announce(`\u52A0\u65F6\u8D5B ${this.overtime} \xB7 \u5148\u5230 ${zt.overtimeWin} \u5206`),this.startRound()}update(t){let e=this.game;if(this.phase!=="idle"){if(this.phase==="freeze"){this.time-=t,this.time<=0&&(this.phase="live",this.time=zt.roundTime,e.hud.announce("\u5F00\u59CB\uFF01")),this.updateBomb(t);return}if(this.phase==="live"){this.time-=t,this.updateBomb(t),this.updateObjectives(t),this.phase==="live"&&this.checkWin();return}this.phase==="over"&&(this.time-=t,this.updateBomb(t),this.time<=0&&this.nextRound())}}updateObjectives(t){let e=this.game,n=e.localPlayer,i=null;for(let r of e.players){if(!r.alive){r.plantProgress=0;continue}if(r.team==="T"&&r.hasBomb&&r.wantUse&&r.onGround){let o=e.map.siteAt(r.pos.x,r.pos.z);if(o&&this.bomb.state==="carried"){if(r.plantProgress+=t,r.plantProgress>=zt.plantTime){this.plantBomb(r,o);continue}r===n&&(i={label:"\u6B63\u5728\u5B89\u653E C4",ratio:r.plantProgress/zt.plantTime});continue}}r.wantUse||(r.plantProgress=0)}if(this.bomb.state==="planted")for(let r of e.players){if(!r.alive||r.team!=="CT"){r.defuseProgress=0;continue}let o=Math.hypot(this.bomb.pos.x-r.pos.x,this.bomb.pos.z-r.pos.z);if(r.wantUse&&o<70){let a=r.hasKit?zt.defuseKitTime:zt.defuseTime;if(r.defuseProgress+=t,r.defuseProgress>=a){this.defuseBomb(r);return}r===n&&(i={label:r.hasKit?"\u6B63\u5728\u62C6\u9664\uFF08\u62C6\u5F39\u5668\uFF09":"\u6B63\u5728\u62C6\u9664 C4",ratio:r.defuseProgress/a})}else r.wantUse||(r.defuseProgress=0)}else for(let r of e.players)r.defuseProgress=0;e.hud.setProgress(i?i.label:null,i?i.ratio:0)}plantBomb(t,e){this.bomb.state="planted",this.bomb.pos.copy(t.pos),this.bomb.pos.y=4,this.bomb.timer=zt.bombTime,this.bomb.site=e,this.bomb.planter=t,t.hasBomb=!1,t.plantProgress=0,this.game.hud.setProgress(null,0),this.game.hud.announce(`C4 \u5DF2\u5728 ${e} \u70B9\u5B89\u653E`),this.game.hud.toast(`${e} \u70B9\u70B8\u5F39\u5DF2\u5B89\u653E`);let n=new wt(new Ne(16,10,24),new Dt({color:2829099}));n.position.copy(this.bomb.pos),this.game.scene.add(n),this.bombMesh=n,iu()}defuseBomb(t){this.bomb.state="defused",this.game.hud.setProgress(null,0),this.bombMesh&&(this.game.scene.remove(this.bombMesh),this.bombMesh=null),t.money=Math.min(zt.maxMoney,t.money+zt.defuseBonus),this.game.hud.announce("\u70B8\u5F39\u5DF2\u62C6\u9664\uFF01"),this.endRound("CT","defuse")}updateBomb(t){let e=this.bomb;if(e.state==="planted"){e.timer-=t,e.beep-=t;let n=Math.max(.08,e.timer/zt.bombTime*1);if(e.beep<=0&&(e.beep=n,tu(e.timer<10),this.bombMesh&&this.bombMesh.material.color.setHex(e.timer<10?5574929:2829099)),this.bombMesh&&(this.bombMesh.rotation.y+=t*.5),e.timer<=0){e.state="exploded",this.bombMesh&&(this.game.scene.remove(this.bombMesh),this.bombMesh=null),Pe.explosion(e.pos.clone(),500);for(let i of this.game.players){if(!i.alive)continue;let r=Math.hypot(i.pos.x-e.pos.x,i.pos.z-e.pos.z);if(r<620){let o=Math.max(20,500*(1-r/620));i.takeDamage(o,e.planter,"chest","c4")}}this.endRound("T","bomb")}}if(e.state==="carried"&&e.carrier&&!e.carrier.alive&&(e.state="dropped",e.pos.copy(e.carrier.pos),e.pos.y=6,this.game.hud.toast("C4 \u6389\u843D\u4E86")),e.state==="dropped"){for(let n of this.game.players)if(!(!n.alive||n.team!=="T")&&Math.hypot(n.pos.x-e.pos.x,n.pos.z-e.pos.z)<55){n.hasBomb=!0,e.state="carried",e.carrier=n,this.game.hud.toast(`${n.name} \u62FE\u8D77\u4E86 C4`);break}}}checkWin(){let t=this.game.players.filter(i=>i.team==="T"&&i.alive).length,e=this.game.players.filter(i=>i.team==="CT"&&i.alive).length,n=this.bomb.state==="planted";if(t===0&&this.bomb.state!=="planted"){this.endRound("CT","elim");return}if(e===0){this.endRound("T","elim");return}this.time<=0&&(n||this.endRound("CT","time"))}onKill(t,e,n,i){let r=this.game;if(t.deaths++,r.dropWeapon(t,"primary"),r.dropWeapon(t,"secondary"),e&&e!==t){e.kills++;let o=Kt[n],a=o?o.kill:300;o&&o.cls==="melee"&&(a=1500),e.money=Math.min(zt.maxMoney,e.money+a),e===r.localPlayer&&r.hud.money(a)}r.hud.killfeed(e?e.name:"\u4E16\u754C",t.name,n,i,e?e.team:null,t.team),t.hasBomb&&(this.bomb.state="dropped",this.bomb.pos.copy(t.pos),this.bomb.pos.y=6,t.hasBomb=!1),t===r.localPlayer&&(r.onLocalDeath(e),r.hud.spectateTarget=e||null)}};function mu(s,t,e){let n=Kt[e],i=On[e],r=0;if(n)r=n.price;else if(i)r=i.price;else return!1;if(t.money<r)return s.hud.toast("\u8D44\u91D1\u4E0D\u8DB3"),!1;if(i&&i.team&&i.team!==t.team)return!1;if(n)n.slot===1?t.slots.primary={id:e,def:n,ammo:n.mag,reserve:n.res}:t.slots.secondary={id:e,def:n,ammo:n.mag,reserve:n.res},t.curSlot=n.slot===1?"primary":"secondary",t.deployTime=.45,t.reloadEnd=0;else if(e==="kevlar"){if(t.armor>=100)return!1;t.armor=100}else if(e==="kevlarhelm")t.armor=100,t.helmet=!0;else if(e==="defusekit"){if(t.team!=="CT"||t.hasKit)return!1;t.hasKit=!0}else if(i.grenade){let o=i.grenade;if(t.grenades[o]>=2)return!1;t.grenades[o]++,t.grenadeSel=o}return t.money-=r,as(),!0}var Mt=s=>document.getElementById(s),go=class{constructor(t){this.game=t,this.buyOpen=!1,this.buyCat="rifles",this.announceTimer=0,this.bannerTimer=0,this.captureKey=null,this.toasts=[],this.kf=[],this.radarStatic=null,this._aliveSig="",this._gearSig="",this._iconFor=null,this.el={hud:Mt("hud"),health:Mt("health"),armor:Mt("armor"),money:Mt("money"),ammo:Mt("ammo"),reserve:Mt("reserve"),weaponName:Mt("weapon-name"),weaponSwitch:Mt("weapon-switch"),gearRow:Mt("gear-row"),timer:Mt("round-timer"),phase:Mt("round-phase"),scoreT:Mt("score-t"),scoreCT:Mt("score-ct"),aliveT:Mt("alive-t"),aliveCT:Mt("alive-ct"),killfeed:Mt("killfeed"),toasts:Mt("toasts"),announce:Mt("announce"),progressWrap:Mt("progress-wrap"),progressLabel:Mt("progress-label"),progressBar:Mt("progress-bar").firstElementChild,banner:Mt("round-banner"),result:Mt("round-result"),reason:Mt("round-reason"),rbCT:Mt("rb-ct"),rbT:Mt("rb-t"),death:Mt("deathnotify"),deathSub:Mt("death-sub"),crosshair:Mt("crosshair"),hitmarker:Mt("hitmarker"),damage:Mt("damage-vignette"),flash:Mt("flash-overlay"),scope:Mt("scope-overlay"),radar:Mt("radar"),fps:Mt("fps"),hint:Mt("hint-bar"),wicon:Mt("wicon"),buy:Mt("buymenu"),buyCats:Mt("buy-cats"),buyItems:Mt("buy-items"),buyTimer:Mt("buy-timer"),buyMoney:Mt("buy-money"),keybind:Mt("keybind"),kbList:Mt("kb-list"),kbClose:Mt("kb-close"),scoreboard:Mt("scoreboard"),sbCT:Mt("sb-ct"),sbT:Mt("sb-t"),sbCTList:Mt("sb-ct-list"),sbTList:Mt("sb-t-list")},this.buildRadarStatic(),this.bindBuyEvents(),this.bindKeybinds()}buildRadarStatic(){let t=this.game.map,e=200,n=40,i=-1,r=40,o=-1;for(let x=0;x<40;x++)for(let m=0;m<40;m++)t.isFloorTile(m,x)&&(m<n&&(n=m),m>i&&(i=m),x<r&&(r=x),x>o&&(o=x));i<0&&(n=0,i=39,r=0,o=39);let a=i-n+1,l=o-r+1,h=(e-6*2)/Math.max(a,l),u=(e-a*h)/2-n*h,f=(e-l*h)/2-r*h;this.rv={S:e,cell:h,offX:u,offY:f};let p=document.createElement("canvas");p.width=p.height=e;let g=p.getContext("2d");g.clearRect(0,0,e,e);for(let x=r;x<=o;x++)for(let m=n;m<=i;m++){if(!t.isFloorTile(m,x))continue;let d=t.blocked[x*40+m]===1,v=u+m*h,_=f+x*h;g.fillStyle=d?"rgba(120,110,86,.45)":"rgba(198,192,160,.55)",g.fillRect(v,_,h+.6,h+.6)}g.strokeStyle="rgba(40,44,34,.85)",g.lineWidth=1;for(let x=r;x<=o;x++)for(let m=n;m<=i;m++){if(!t.isFloorTile(m,x))continue;let d=u+m*h,v=f+x*h;t.isFloorTile(m,x-1)||(g.beginPath(),g.moveTo(d,v),g.lineTo(d+h,v),g.stroke()),t.isFloorTile(m,x+1)||(g.beginPath(),g.moveTo(d,v+h),g.lineTo(d+h,v+h),g.stroke()),t.isFloorTile(m-1,x)||(g.beginPath(),g.moveTo(d,v),g.lineTo(d,v+h),g.stroke()),t.isFloorTile(m+1,x)||(g.beginPath(),g.moveTo(d+h,v),g.lineTo(d+h,v+h),g.stroke())}g.font="bold 15px Arial",g.textAlign="center",g.textBaseline="middle",Object.keys(t.sites).forEach((x,m)=>{let d=t.sites[x];if(!d)return;let v=u+((d.x0+d.x1)/2+2e3)/100*h,_=f+((d.z0+d.z1)/2+2e3)/100*h;g.fillStyle="rgba(20,24,16,.55)",g.beginPath(),g.arc(v,_,9,0,7),g.fill(),g.fillStyle=m===0?"rgba(240,200,120,.95)":"rgba(150,195,235,.95)",g.fillText(x,v,_+1)}),this.radarStatic=p}worldToRadar(t,e){let{cell:n,offX:i,offY:r}=this.rv;return{x:i+(t+2e3)/100*n,y:r+(e+2e3)/100*n}}setText(t,e){t.__v!==e&&(t.__v=e,t.textContent=e)}setClass(t,e,n){let i=`__c_${e}`;t[i]!==n&&(t[i]=n,t.classList.toggle(e,n))}update(t){let e=this.game,n=e.localPlayer,i=e.round,o=i.phase==="freeze"||i.phase==="live"?Math.max(0,i.time):0,a=Math.floor(o/60),l=Math.floor(o%60);if(this.setText(this.el.timer,`${a}:${l.toString().padStart(2,"0")}`),this.setClass(this.el.timer,"low",o<20&&i.phase==="live"),this.setText(this.el.phase,i.phase==="freeze"?"\u51C6\u5907":i.phase==="live"?"\u4EA4\u6218\u4E2D":i.phase==="over"?"\u56DE\u5408\u7ED3\u675F":"\u6BD4\u8D5B\u7ED3\u675F"),this.setText(this.el.scoreT,String(i.scoreT)),this.setText(this.el.scoreCT,String(i.scoreCT)),this.renderAlive(),n){this.setText(this.el.health,String(Math.max(0,Math.ceil(n.health)))),this.setClass(this.el.health,"low",n.health<=25),this.setText(this.el.armor,String(Math.ceil(n.armor))),this.setText(this.el.money,`$${n.money}`);let c=n.weaponDef;n.curSlot==="grenade"?(this.setText(this.el.ammo,"--"),this.setText(this.el.reserve,""),this.setText(this.el.weaponName,n.grenadeSel==="he"?"HE Grenade":n.grenadeSel==="flash"?"Flashbang":"Smoke")):(this.setText(this.el.ammo,c&&c.cls!=="melee"?String(n.currentAmmo()):"--"),this.setText(this.el.reserve,c&&c.cls!=="melee"?String(n.reserveAmmo()):""),this.setText(this.el.weaponName,c?c.name:"\u2014")),this.drawWeaponIcon(n);let h=[];n.armor>0&&h.push(n.helmet?"KEV+HELM":"KEVLAR"),n.hasKit&&h.push("KIT"),n.hasBomb&&h.push("C4");for(let g of["he","flash","smoke"])n.grenades[g]>0&&h.push(`${g.toUpperCase()}\xD7${n.grenades[g]}`);let u=h.join("|");u!==this._gearSig&&(this._gearSig=u,this.el.gearRow.innerHTML=h.map(g=>`<span>${g}</span>`).join("")),this.updateCrosshair(n,c);let f=Math.min(1,n.flashAmount).toFixed(2);this.el.flash.__op!==f&&(this.el.flash.__op=f,this.el.flash.style.opacity=f);let p=n.zoom>0;this.setClass(this.el.scope,"hidden",!p),this.setClass(this.el.crosshair,"hide",p||!n.alive),this.setClass(this.el.death,"hidden",n.alive||i.phase==="over")}this.announceTimer>0&&(this.announceTimer-=t,this.announceTimer<=0&&this.el.announce.classList.remove("show")),this.bannerTimer>0&&(this.bannerTimer-=t,this.bannerTimer<=0&&this.hideBanner()),this.updateToasts(t),this.drawRadar(),this.el.fps.textContent=e.settings.showFps?`${Math.round(e.fps)} FPS`:"",this.buyOpen&&(this.el.buyTimer.textContent=Math.max(0,Math.ceil(e.buyTimeLeft())),this.el.buyMoney.textContent=`$${n?n.money:0}`)}updateCrosshair(t,e){let n=this.game.settings,i=Math.hypot(t.vel.x,t.vel.z),r=e?t.computeSpread(e)*180/Math.PI:0,o=n.crosshairGap+i*.035+Math.min(r,12)*2.2,a=this.el.crosshair.style;a.setProperty("--ch-color",n.crosshair),a.setProperty("--ch-size",`${n.crosshairSize}px`),a.setProperty("--ch-gap",`${o.toFixed(1)}px`)}renderAlive(){let t=this.game,e="",n="";for(let o of t.players)o.team==="T"?e+=o.alive?"1":"0":n+=o.alive?"1":"0";let i=`${e}|${n}`;if(i===this._aliveSig)return;this._aliveSig=i;let r=o=>o.split("").map(a=>`<i class="${a==="1"?"on":"dead"}"></i>`).join("");this.el.aliveT.innerHTML=r(e),this.el.aliveCT.innerHTML=r(n)}drawWeaponIcon(t){let e=this.el.wicon;if(!e)return;let n=t.curSlot==="grenade"?`g:${t.grenadeSel}`:t.weaponDef?t.weaponDef.id:"none";if(this._iconFor===n)return;this._iconFor=n;let i=e.getContext("2d"),r=e.width,o=e.height;i.clearRect(0,0,r,o),i.fillStyle="rgba(236,230,208,0.80)";let a=(h,u,f,p)=>i.fillRect(h*r,u*o,f*r,p*o),l=t.weaponDef,c=l?l.cls:"none";if(n.startsWith("g:"))i.beginPath(),i.arc(r*.5,o*.6,o*.22,0,7),i.fill(),a(.46,.18,.08,.2);else if(c==="melee")a(.12,.46,.5,.09),a(.6,.38,.08,.24),a(.68,.44,.2,.13);else if(c==="pistol")a(.22,.38,.5,.13),a(.28,.51,.16,.28),l&&l.id==="elite"&&a(.54,.51,.14,.24);else{let h=c==="sniper"||c==="machinegun";a(h?.06:.16,.42,h?.7:.58,.12),a(h?.74:.7,.46,.18,.06),a(.3,.54,.12,.26),a(.17,.54,.1,.18),c==="sniper"&&a(.34,.28,.22,.1),c==="machinegun"&&a(.42,.54,.16,.24),c==="shotgun"&&a(.42,.56,.34,.06)}}openKeybinds(){this.keybindOpen=!0,this.captureKey=null,this.el.keybind.classList.remove("hidden"),this.renderKeybinds()}closeKeybinds(){this.captureKey=null,this.keybindOpen=!1,this.el.keybind.classList.add("hidden")}renderKeybinds(){let t=this.game.settings.keymap;this.el.kbList.innerHTML=Dh.map(([e,n])=>{let i=this.captureKey===e,r=t[e],o=i?"\u6309\u4E0B\u65B0\u952E\u2026":r?no[r]||r:"\u672A\u7ED1\u5B9A";return`<div class="kb-row${i?" waiting":""}" data-a="${e}">
        <span class="kb-name">${n}</span>
        <span class="kb-key">${o}</span>
      </div>`}).join("")}assignKey(t){let e=this.captureKey;if(this.captureKey=null,!e||!t||t==="Escape"){this.renderKeybinds();return}let n=this.game.settings.keymap;for(let i of Object.keys(n))n[i]===t&&i!==e&&(n[i]="");n[e]=t,this.game.saveSettings(),this.renderKeybinds()}bindKeybinds(){this.el.kbList.addEventListener("click",t=>{let e=t.target.closest(".kb-row");e&&(this.captureKey=e.dataset.a,this.renderKeybinds())}),this.el.kbClose.addEventListener("click",()=>this.closeKeybinds())}drawRadar(){let t=this.game,e=this.el.radar,n=e.getContext("2d"),i=e.width;n.clearRect(0,0,i,i),n.drawImage(this.radarStatic,0,0);let r=t.round.bomb;if(r.state==="planted"||r.state==="dropped"){let a=this.worldToRadar(r.pos.x,r.pos.z,i);n.fillStyle=r.state==="planted"?Math.floor(t.time*4)%2?"#ff4433":"#ffaa33":"#ffcc66",n.fillRect(a.x-3,a.y-3,6,6)}let o=t.localPlayer;for(let a of t.players){if(!a.alive)continue;let l=this.worldToRadar(a.pos.x,a.pos.z,i);a!==o&&(a.team===o.team?(n.fillStyle=a===t.spectating?"rgba(120,255,140,.95)":"rgba(150,200,240,.85)",n.beginPath(),n.arc(l.x,l.y,3,0,7),n.fill()):t.isSpotted(a)&&(n.fillStyle="rgba(240,90,60,.95)",n.beginPath(),n.arc(l.x,l.y,3.2,0,7),n.fill()))}if(o){let a=this.worldToRadar(o.pos.x,o.pos.z,i);n.save(),n.translate(a.x,a.y),n.rotate(-o.yaw),n.fillStyle="rgba(255,245,200,.95)",n.beginPath(),n.moveTo(0,-6),n.lineTo(4.6,5),n.lineTo(0,2.6),n.lineTo(-4.6,5),n.closePath(),n.fill(),n.restore(),n.save(),n.translate(a.x,a.y),n.rotate(-o.yaw);let l=n.createLinearGradient(0,0,0,-40);l.addColorStop(0,"rgba(255,240,180,.16)"),l.addColorStop(1,"rgba(255,240,180,0)"),n.fillStyle=l,n.beginPath(),n.moveTo(0,0),n.lineTo(-22,-42),n.lineTo(22,-42),n.closePath(),n.fill(),n.restore()}}hitMarker(t){let e=this.el.hitmarker;e.classList.remove("show"),e.offsetWidth,e.classList.add("show"),e.style.filter=t?"drop-shadow(0 0 4px #ff5533)":"none"}damageFlash(t){let e=this.el.damage;e.style.opacity=Math.min(.9,.25+t/90).toFixed(2),clearTimeout(this._dmgT),this._dmgT=setTimeout(()=>{e.style.opacity=0},140)}killfeed(t,e,n,i,r,o){let a=n==="c4"?"C4":n==="hegrenade"?"HE":Kt[n]?.name||n,l=document.createElement("div");l.className="kf",l.innerHTML=`<span class="n ${r||""}">${t}</span>
      <span class="w">[${a}${i?" \xB7 HS":""}]</span>
      <span class="n ${o}">${e}</span>`,this.el.killfeed.appendChild(l),this.kf.push({el:l,t:6}),this.kf.length>6&&this.kf.shift().el.remove()}toast(t){let e=document.createElement("div");e.className="toast",e.textContent=t,this.el.toasts.appendChild(e),this.toasts.push({el:e,t:2.6}),this.toasts.length>4&&this.toasts.shift().el.remove()}announce(t,e=2.2){this.el.announce.textContent=t,this.el.announce.classList.add("show"),this.announceTimer=e}updateToasts(t){for(let e=this.kf.length-1;e>=0;e--)this.kf[e].t-=t,this.kf[e].t<=.5&&this.kf[e].el.classList.add("out"),this.kf[e].t<=0&&(this.kf[e].el.remove(),this.kf.splice(e,1));for(let e=this.toasts.length-1;e>=0;e--)this.toasts[e].t-=t,this.toasts[e].t<=0&&(this.toasts[e].el.remove(),this.toasts.splice(e,1))}money(t){let e=this.el.money;e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}setProgress(t,e){if(!t){this.el.progressWrap.classList.add("hidden");return}this.el.progressWrap.classList.remove("hidden"),this.el.progressLabel.textContent=t,this.el.progressBar.style.width=`${Math.min(100,e*100).toFixed(1)}%`}roundEnd(t,e,n,i){this.el.banner.classList.remove("hidden"),this.el.result.textContent=e,this.el.result.className=t==="CT"?"ct":"t",this.el.reason.textContent=t==="CT"?"\u53CD\u6050\u7CBE\u82F1":"\u6050\u6016\u5206\u5B50",this.el.rbCT.textContent=n,this.el.rbT.textContent=i,this.el.announce.classList.remove("show"),this.bannerTimer=zt.roundEndDelay-.6,this.setProgress(null,0)}hideBanner(){this.bannerTimer=0,this.el.banner.classList.add("hidden")}matchEnd(t,e,n){this.bannerTimer=0,this.el.banner.classList.remove("hidden"),this.el.result.textContent=t==="CT"?"\u53CD\u6050\u7CBE\u82F1 \u83B7\u5F97\u6BD4\u8D5B\u80DC\u5229":"\u6050\u6016\u5206\u5B50 \u83B7\u5F97\u6BD4\u8D5B\u80DC\u5229",this.el.result.className=t==="CT"?"ct":"t",this.el.reason.textContent=`\u6700\u7EC8\u6BD4\u5206 ${e} : ${n}`,this.el.rbCT.textContent=e,this.el.rbT.textContent=n,this.toast("\u6309 R \u91CD\u65B0\u5F00\u59CB\u6BD4\u8D5B")}hint(t){if(!t){this.el.hint.classList.remove("show");return}this.el.hint.textContent=t,this.el.hint.classList.add("show")}deathNotice(t){this.el.deathSub.textContent=t,this.el.death.classList.remove("hidden")}hideDeath(){this.el.death.classList.add("hidden")}bindBuyEvents(){this.el.buyCats.addEventListener("click",t=>{let e=t.target.closest(".buy-cat");e&&(this.buyCat=e.dataset.k,this.renderBuy())}),this.el.buyItems.addEventListener("click",t=>{let e=t.target.closest(".buy-item");!e||e.classList.contains("dis")||this.doBuy(e.dataset.k)})}toggleBuy(t){let e=t??!this.buyOpen;if(e&&!this.game.inBuyZone()&&!this.buyOpen){this.toast("\u5FC5\u987B\u5728\u51FA\u751F\u533A\u8D2D\u4E70");return}this.buyOpen=e,this.el.buy.classList.toggle("hidden",!e),e?(Si(),this.renderBuy(),this.game.releasePointer()):this.game.lockPointer()}renderBuy(){let t=this.game.localPlayer;if(!t)return;let e=Object.entries(il);this.el.buyCats.innerHTML=e.map(([r,o],a)=>`<div class="buy-cat ${r===this.buyCat?"on":""}" data-k="${r}">
        <b>${a+1}</b>${o.title}
      </div>`).join("");let i=il[this.buyCat].items.filter(r=>{let o=Kt[r];if(o)return Ih[t.team].includes(r)&&o.price>0;let a=On[r];return a&&a.team?a.team===t.team:!0});this.el.buyItems.innerHTML=i.map((r,o)=>{let a=Kt[r],l=On[r],c=a?a.price:l.price,h=a?a.name:l.cn,u=this.ownsAlready(r,t),f=t.money<c;return`<div class="buy-item ${u?"dis":f?"poor":""}" data-k="${r}">
        <span class="bi-name">${o+1}. ${h}<small>${a?a.cls.toUpperCase():"GEAR"}</small></span>
        <span class="bi-price">${u?"\u5DF2\u62E5\u6709":"$"+c}</span>
      </div>`}).join(""),this.el.buyItems.dataset.items=i.join(",")}ownsAlready(t,e){let n=Kt[t];if(n)return n.slot===1?!!e.slots.primary&&e.slots.primary.id===t:n.slot===2?!!e.slots.secondary&&e.slots.secondary.id===t:!1;if(t==="kevlar")return e.armor>=100;if(t==="kevlarhelm")return e.armor>=100&&e.helmet;if(t==="defusekit")return e.hasKit;let i=On[t];return i&&i.grenade?e.grenades[i.grenade]>=2:!1}doBuy(t){let e=this.game.localPlayer;if(!e)return;mu(this.game,e,t)&&(this.toast(`\u5DF2\u8D2D\u4E70 ${Kt[t]?.name||On[t]?.cn||t}`),this.renderBuy())}handleBuyKey(t){let e=parseInt(t.replace("Digit",""),10);if(!Number.isNaN(e)&&e>=1&&e<=9){let i=(this.el.buyItems.dataset.items||"").split(",").filter(Boolean)[e-1];i&&this.doBuy(i)}}toggleScoreboard(t){this.el.scoreboard.classList.toggle("hidden",!t),t&&this.renderScoreboard()}renderScoreboard(){let t=this.game;this.el.sbCT.textContent=t.round.scoreCT,this.el.sbT.textContent=t.round.scoreT;let e=r=>`<div class="row ${r===t.localPlayer?"me":""} ${r.alive?"":"dead"}">
      <span class="nm"><i>${r.isBot?"BOT":"YOU"}</i>${r.name}</span>
      <span class="v">${r.kills}</span>
      <span class="v">${r.deaths}</span>
      <span class="v">${Math.round(r.damageDealt)}</span>
      <span class="v">$${r.money}</span>
    </div>`,n=t.players.filter(r=>r.team==="CT").sort((r,o)=>o.kills-r.kills),i=t.players.filter(r=>r.team==="T").sort((r,o)=>o.kills-r.kills);this.el.sbCTList.innerHTML='<div class="hdr">COUNTER-TERRORISTS</div>'+n.map(e).join(""),this.el.sbTList.innerHTML='<div class="hdr">TERRORISTS</div>'+i.map(e).join("")}};var gu={rifle:{x:15,y:-8,z:-40,s:.62,ry:.3},sniper:{x:16.2,y:-8.4,z:-44,s:.64,ry:.3},smg:{x:14.6,y:-7.6,z:-37,s:.62,ry:.32},pistol:{x:12.4,y:-7.2,z:-31,s:.58,ry:.34},melee:{x:13.2,y:-8.2,z:-32,s:.6,ry:.36},grenade:{x:13.2,y:-8.8,z:-31,s:.6,ry:.32}},xo=class{constructor(t){this.game=t,this.scene=new ts,this.camera=new ve(70,16/9,1,600),this.scene.add(new Jr(16777215,.78));let e=new ei(16773848,1.5);e.position.set(-.5,1.3,.9),this.scene.add(e);let n=new ei(9416920,.7);n.position.set(1.4,.3,-1),this.scene.add(n);let i=new Nn(14200944,.55,200);i.position.set(0,-20,10),this.scene.add(i),this.pose={x:4.2,y:-6.8,z:-33,s:.72},this.root=new ee,this.root.position.set(this.pose.x,this.pose.y,this.pose.z),this.root.rotation.y=.16,this.root.scale.setScalar(this.pose.s),this.scene.add(this.root),this.weaponGroup=null,this.curId=null,this.kick=0,this.swayX=0,this.swayY=0,this.bob=0,this.rise=1,this.reloadT=0}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}setWeapon(t){if(t===this.curId||(this.curId=t,this.weaponGroup&&(this.root.remove(this.weaponGroup),this.weaponGroup=null),!t||!Kt[t]))return;let e=hu(t);this.weaponGroup=e,this.root.add(e)}update(t,e){if(!e||(this.setWeapon(e.curSlot==="melee"?"knife":e.curSlot==="grenade"?null:e.weapon?e.weapon.id:null),this.root.visible=e.alive&&e.zoom===0&&e.curSlot!=="grenade"&&!!this.weaponGroup,!this.root.visible))return;let n=Math.hypot(e.vel.x,e.vel.z),i=e.onGround&&n>40;this.bob+=t*(i?n*.055:1.4);let r=i?Math.sin(this.bob)*Math.min(1.8,n*.007):Math.sin(this.bob*.6)*.22,o=i?Math.abs(Math.cos(this.bob))*Math.min(1.4,n*.0055):Math.sin(this.bob*.45)*.2;this.kick+=(Math.min(7,Math.abs(e.punchPitch)*1.1)-this.kick)*Math.min(1,t*16);let a=e.reloadEnd>0;this.reloadT+=((a?1:0)-this.reloadT)*Math.min(1,t*8),this.rise+=((e.deployTime>0?0:1)-this.rise)*Math.min(1,t*9);let l=-(e.lastMouseDX||0)*.55,c=(e.lastMouseDY||0)*.35;this.swayX+=(l-this.swayX)*Math.min(1,t*9),this.swayY+=(c-this.swayY)*Math.min(1,t*9),e.lastMouseDX=0,e.lastMouseDY=0;let h=e.curSlot==="melee"?"melee":e.curSlot==="grenade"?"grenade":e.weaponDef&&e.weaponDef.cls||"rifle",u=this.game&&this.game.vmPose||gu[h]||gu.rifle,f=e.duckAmount*2.2,p=e.curSlot==="melee"&&e.swingT||0,g=p>0?Math.sin(Math.PI*(1-p)):0;this.root.scale.setScalar(u.s),this.root.position.set(u.x+r+this.swayX*.06-g*2.6,u.y+o-f-(1-this.rise)*11-this.reloadT*4.5+this.swayY*.06+g*1.8,u.z+this.kick*1.5-g*6),this.root.rotation.set(this.kick*.02+this.reloadT*.42-(1-this.rise)*.8-g*.62,(u.ry??.3)-this.kick*.008+this.swayX*.006+g*.34,this.reloadT*.3+Math.sin(this.bob)*.01+g*.42)}};var Vs=Math.PI/180,Sl=1/64,El=(s,t,e)=>Math.max(t,Math.min(e,s)),xu="cs16web.settings.v2";function px(){try{let s=localStorage.getItem(xu);if(s){let t=JSON.parse(s);return{...Ns,...t,keymap:{...ss,...t.keymap||{}}}}}catch{}return{...Ns,keymap:{...ss}}}var Tl=class{constructor(){this.settings=px(),this.players=[],this.grenades=[],this.time=0,this.fps=60,this.stats={jumps:0},this.fx=Pe,this.paused=!1,this.started=!1,this.spectating=null,this.enemyCount=3,this.difficulty="normal",this.keys={},this.suppressPause=!1,this.lastShotDir=null,this.dragLook=!1,this.dragging=!1,this.pointerLockFailures=0,this.dropped=[],this.acc=0,this.flashlightOn=!1}init(){let t=document.getElementById("gl");this.canvas=t,this.renderer=new Rs({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.maxPixelRatio=Math.min(window.devicePixelRatio||1,2),this.pixelRatio=Math.min(this.maxPixelRatio,1.5),this.renderer.setPixelRatio(this.pixelRatio),this.adaptTimer=0,Nh(this.renderer.capabilities.getMaxAnisotropy()),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.renderer.outputColorSpace=jt,this.renderer.autoClear=!1,this.scene=new ts,this.camera=new ve(this.settings.fov,window.innerWidth/window.innerHeight,1,9e3),this.camera.rotation.order="YXZ",this.scene.add(this.camera),this.flashlight=new Kr(16773328,0,2400,Math.PI/7,.5,1.1),this.flashlight.position.set(0,-6,0),this.flashlight.target.position.set(0,-4,-1),this.camera.add(this.flashlight),this.camera.add(this.flashlight.target),this.map=new oo(this.scene,Vh(this.settings.map||cl));let e=document.querySelector(".radar-label");e&&(e.textContent=this.map.label),Pe.init(this.scene,this.camera,this),this.hud=new go(this),this.round=new mo(this),this.viewModel=new xo(this),this.createLocalPlayer(),this.bindEvents(),this.resize(),window.addEventListener("resize",()=>this.resize()),document.getElementById("loading").classList.add("hidden"),this.lastT=performance.now(),requestAnimationFrame(n=>this.loop(n))}resize(){let t=window.innerWidth,e=window.innerHeight;this.maxPixelRatio=Math.min(window.devicePixelRatio||1,2),this.pixelRatio>this.maxPixelRatio&&(this.pixelRatio=this.maxPixelRatio,this.renderer.setPixelRatio(this.pixelRatio)),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.viewModel&&this.viewModel.resize(t/e)}createLocalPlayer(){let t=new cs(this,{name:"\u4F60",team:"T",isBot:!1,id:0});t.isLocal=!0,t.buildMesh(this.scene),t.mesh.visible=!1,t.lastMouseDX=0,t.lastMouseDY=0,this.players=[t],this.localPlayer=t}createTeams(){for(let o of this.players)o!==this.localPlayer&&(o.mesh&&this.scene.remove(o.mesh),o._shadow&&(this.scene.remove(o._shadow),o._shadow.geometry.dispose(),o._shadow.material.dispose(),o._shadow=null));this.players=[this.localPlayer],this.grenades=[];let t=this.localPlayer;t.team="T",t.resetInventory(),t.kills=0,t.deaths=0,t.damageDealt=0,t.money=zt.startMoney,t.mesh&&this.scene.remove(t.mesh),t._shadow&&(this.scene.remove(t._shadow),t._shadow.geometry.dispose(),t._shadow.material.dispose(),t._shadow=null),t.buildMesh(this.scene),t.mesh.visible=!1;let n={easy:.24,normal:.46,hard:.68,expert:.88}[this.difficulty]??.46,i=new Set,r=()=>{for(let o=0;o<40;o++){let a=sl[Math.floor(Math.random()*sl.length)];if(!i.has(a))return i.add(a),a}return`Bot${Math.floor(Math.random()*900+100)}`};for(let o=0;o<this.enemyCount-1;o++){let a=new cs(this,{name:r(),team:"T",isBot:!0,id:o+1});a.buildMesh(this.scene),a.lastMouseDX=0,a.lastMouseDY=0,a.bot=new Hs(this,a,El(n+(Math.random()-.5)*.14,.15,.95)),this.players.push(a)}for(let o=0;o<this.enemyCount;o++){let a=new cs(this,{name:r(),team:"CT",isBot:!0,id:100+o});a.buildMesh(this.scene),a.lastMouseDX=0,a.lastMouseDY=0,a.bot=new Hs(this,a,El(n+(Math.random()-.5)*.14,.15,.95)),this.players.push(a)}}startGame(){this.createTeams(),this.round.startMatch(),this.started=!0,this.paused=!1,document.getElementById("mainmenu").classList.add("hidden"),document.getElementById("hud").classList.remove("hidden"),document.getElementById("pause").classList.add("hidden"),this.hud.hideDeath(),this.hud.hideBanner(),this.hud.toggleScoreboard(!1),this.spectating=null,ul(),ru(),this.lockPointer()}restartMatch(){document.getElementById("pause").classList.add("hidden"),this.started=!1,this.startGame()}bindEvents(){window.addEventListener("keydown",r=>{let o=this.km();(r.code===o.scoreboard||r.code===o.jump)&&r.preventDefault(),!r.repeat&&this.onKeyDown(r)}),window.addEventListener("keyup",r=>{this.keys[r.code]=!1,r.code===this.km().scoreboard&&this.hud.toggleScoreboard(!1)}),document.addEventListener("mousemove",r=>{if(!this.started||this.paused)return;let o=document.pointerLockElement===this.canvas,a=this.dragLook&&this.dragging;if(!o&&!a||this.hud.buyOpen)return;let l=this.localPlayer;if(!l)return;let c=this.settings.sensitivity*.022*Vs;l.yaw-=r.movementX*c,l.pitch-=r.movementY*c*(this.settings.invertY?-1:1),l.pitch=El(l.pitch,-89*Vs,89*Vs),l.lastMouseDX+=r.movementX,l.lastMouseDY+=r.movementY}),this.canvas.addEventListener("mousedown",r=>{if(!(!this.started||!(document.pointerLockElement===this.canvas)&&(this.lockPointer(),!this.dragLook))&&(r.button===0&&(this.dragging=!0,this.onFireDown()),r.button===2)){let a=this.localPlayer;if(a&&a.alive){if(a.curSlot==="grenade")return;a.toggleZoom()}}}),window.addEventListener("mouseup",r=>{if(r.button===0){this.dragging=!1;let o=this.localPlayer;o&&(o.fireHeld=!1,o.priming&&o.releaseGrenade())}}),this.canvas.addEventListener("contextmenu",r=>r.preventDefault()),this.canvas.addEventListener("wheel",r=>{let o=this.localPlayer;if(!o||!o.alive)return;let a=["primary","secondary","melee"],l=a.indexOf(o.curSlot),c=a[(l+(r.deltaY>0?1:a.length-1))%a.length];o.switchSlot(c)},{passive:!0}),document.addEventListener("pointerlockerror",()=>this.onPointerLockFailed()),document.addEventListener("pointerlockchange",()=>{if(document.pointerLockElement===this.canvas){this.dragLook=!1,this.dragging=!1,this.pointerLockFailures=0;return}if(this.started&&!this.hud.buyOpen&&!this.suppressPause&&this.round.phase!=="matchend"&&!this.paused){this.paused=!0,document.getElementById("pause").classList.remove("hidden");let o=this.localPlayer;o&&(o.fireHeld=!1)}}),document.getElementById("btn-start").addEventListener("click",()=>{ul(),this.startGame()}),document.getElementById("btn-resume").addEventListener("click",()=>{this.hud.closeKeybinds(),document.getElementById("pause").classList.add("hidden"),this.paused=!1,this.lockPointer()}),document.getElementById("btn-keys").addEventListener("click",()=>this.hud.openKeybinds()),document.getElementById("btn-restart").addEventListener("click",()=>this.restartMatch());let t=(r,o)=>{let a=document.getElementById(r);a.addEventListener("click",l=>{let c=l.target.closest("button");c&&(a.querySelectorAll("button").forEach(h=>h.classList.remove("on")),c.classList.add("on"),o(c.dataset.v),Si())})};t("seg-diff",r=>{this.difficulty=r}),t("seg-size",r=>{this.enemyCount=parseInt(r,10)});let e=document.getElementById("set-sens"),n=document.getElementById("set-vol");e.value=this.settings.sensitivity,n.value=this.settings.volume,document.getElementById("sens-val").textContent=Number(this.settings.sensitivity).toFixed(2),document.getElementById("vol-val").textContent=Number(this.settings.volume).toFixed(2),e.addEventListener("input",()=>{this.settings.sensitivity=parseFloat(e.value),document.getElementById("sens-val").textContent=this.settings.sensitivity.toFixed(2),this.saveSettings()}),n.addEventListener("input",()=>{this.settings.volume=parseFloat(n.value),document.getElementById("vol-val").textContent=this.settings.volume.toFixed(2),$h(this.settings.volume),this.saveSettings()});let i=document.getElementById("set-chcolor");i&&(i.value=this.settings.crosshair,i.addEventListener("input",()=>{this.settings.crosshair=i.value,this.saveSettings()}))}saveSettings(){try{localStorage.setItem(xu,JSON.stringify(this.settings))}catch{}}onKeyDown(t){let e=this.localPlayer;if(this.keys[t.code]=!0,!this.started)return;let n=this.km();if(this.hud.captureKey){this.hud.assignKey(t.code);return}if(this.hud.keybindOpen&&t.code==="Escape"){this.hud.closeKeybinds();return}if(t.code===n.scoreboard){this.hud.toggleScoreboard(!0);return}if(t.code==="Escape"){if(this.hud.buyOpen){this.hud.toggleBuy(!1);return}return}if(this.hud.buyOpen){if(t.code===n.buy){this.hud.toggleBuy(!1);return}this.hud.handleBuyKey(t.code);return}if(e){if(t.code===n.reload&&this.round.phase==="matchend"){this.restartMatch();return}if(t.code===n.buy){e.alive&&this.hud.toggleBuy();return}if(t.code===n.reload){e.alive&&e.reload();return}if(t.code===n.slot1){e.switchSlot("primary");return}if(t.code===n.slot2){e.switchSlot("secondary");return}if(t.code===n.slot3){e.switchSlot("melee");return}if(t.code===n.slot4){e.switchSlot("grenade");return}if(t.code===n.lastWeapon){e.curSlot==="primary"&&e.slots.secondary?e.switchSlot("secondary"):e.curSlot==="secondary"&&e.slots.primary&&e.switchSlot("primary");return}if(t.code===n.flashlight){this.toggleFlashlight();return}if(t.code===n.drop){this.dropWeapon(e,e.curSlot);return}}}km(){return this.settings.keymap||ss}act(t){let e=this.settings.keymap||ss;return!!this.keys[e[t]]}onFireDown(){let t=this.localPlayer;if(!t||!t.alive){this.cycleSpectate();return}if(t.curSlot==="grenade"){t.beginPrime();return}t.fireHeld=!0,t.tryFire()}toggleFlashlight(){this.flashlightOn=!this.flashlightOn,this.flashlight.intensity=this.flashlightOn?2.4:0,Si()}lockPointer(){if(document.pointerLockElement!==this.canvas){if(!this.canvas.requestPointerLock){this.enableDragLook();return}try{let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>this.onPointerLockFailed())}catch{this.onPointerLockFailed()}}}onPointerLockFailed(){document.pointerLockElement!==this.canvas&&(this.pointerLockFailures+=1,this.pointerLockFailures>=2?this.enableDragLook():this.started&&this.hud&&this.hud.toast("\u70B9\u51FB\u753B\u9762\u4EE5\u9501\u5B9A\u9F20\u6807"))}enableDragLook(){this.dragLook||(this.dragLook=!0,this.dragging=!1,this.hud.toast("\u9F20\u6807\u9501\u5B9A\u4E0D\u53EF\u7528\uFF1A\u6309\u4F4F\u5DE6\u952E\u62D6\u52A8\u53EF\u8F6C\u52A8\u89C6\u89D2"))}releasePointer(){this.suppressPause=!0,document.exitPointerLock(),setTimeout(()=>{this.suppressPause=!1},100)}listenerPos(){let t=this.camera;return t?{x:t.position.x,y:t.position.y,z:t.position.z,yaw:t.rotation.y}:{x:0,y:0,z:0,yaw:0}}tracePlayers(t,e,n,i){return gl(this,t,e,n,i)}inBuyZone(){let t=this.localPlayer;if(!t||!t.alive||this.buyTimeLeft()<=0)return!1;let e=this.map.spawns[t.team],n=e.reduce((r,o)=>r+o.x,0)/e.length,i=e.reduce((r,o)=>r+o.z,0)/e.length;return Math.hypot(t.pos.x-n,t.pos.z-i)<900}buyTimeLeft(){let t=this.round;return t.phase==="freeze"?t.time:t.phase==="live"?Math.max(0,t.time-(zt.roundTime-zt.buyTime)):0}botsBuy(){for(let t of this.players){if(!t.isBot)continue;let e=t.team==="T"?"ak47":"m4a1",n=()=>t.money;t.slots.primary||(n()>=4750&&Math.random()<.12?this.botBuy(t,"awp"):n()>=Kt[e].price?this.botBuy(t,e):n()>=1500?this.botBuy(t,"mp5navy"):n()>=650&&Math.random()<.5&&this.botBuy(t,"deagle")),(t.armor<100||!t.helmet)&&(n()>=1e3?this.botBuy(t,"kevlarhelm"):n()>=650&&t.armor<100&&this.botBuy(t,"kevlar")),t.team==="CT"&&!t.hasKit&&n()>=200&&Math.random()<.45&&this.botBuy(t,"defusekit"),n()>=300&&Math.random()<.7&&this.botBuy(t,"hegrenade"),n()>=200&&Math.random()<.45&&this.botBuy(t,"flashbang"),n()>=300&&Math.random()<.2&&this.botBuy(t,"smokegrenade")}}botBuy(t,e){let n=Kt[e];if(n){if(t.money<n.price)return;t.money-=n.price,n.slot===1?t.slots.primary={id:e,def:n,ammo:n.mag,reserve:n.res}:t.slots.secondary={id:e,def:n,ammo:n.mag,reserve:n.res},t.curSlot=n.slot===1?"primary":"secondary";return}let i=On[e];i&&(i.team&&i.team!==t.team||t.money<i.price||(t.money-=i.price,e==="kevlar"?t.armor=100:e==="kevlarhelm"?(t.armor=100,t.helmet=!0):e==="defusekit"?t.hasKit=!0:i.grenade&&(t.grenades[i.grenade]=Math.min(2,t.grenades[i.grenade]+1))))}botCallout(t,e){e.spottedUntil=this.time+4.5;for(let n of this.players)n.team===t.team&&n.bot&&n.bot!==t&&n.bot.lastSeenTime<this.time-1.5&&Math.random()<.5&&(n.bot.lastSeen=e.pos.clone(),n.bot.lastSeenTime=this.time-2)}isSpotted(t){return(t.spottedUntil||0)>this.time}onPlayerKilled(t,e,n,i){this.round.onKill(t,e,n,i),t.mesh&&(t.mesh.visible=!1),t===this.localPlayer&&(this.camera.fov=this.settings.fov,this.camera.updateProjectionMatrix(),this.spectating=this.pickSpectateTarget())}onLocalDeath(t){let e=t&&t.weaponDef?t.weaponDef.name:"\u70B8\u5F39",n=t?`${t.name}\uFF08${e}\uFF09`:"\u73AF\u5883";this.hud.deathNotice(`\u88AB ${n} \u51FB\u6740`),this.spectating=this.pickSpectateTarget()}onPlayerFell(t){t.takeDamage(1e3,null,"leg","fall")}pickSpectateTarget(){return this.players.filter(e=>e!==this.localPlayer&&e.alive&&e.team===this.localPlayer.team)[0]||null}cycleSpectate(){let t=this.players.filter(n=>n!==this.localPlayer&&n.alive);if(!t.length)return;let e=t.indexOf(this.spectating);this.spectating=t[(e+1)%t.length]}loop(t){requestAnimationFrame(i=>this.loop(i));let e=(t-this.lastT)/1e3;this.lastT=t;let n=Math.min(.05,Math.max(1e-4,e));if(e>0&&(this.fps+=(1/e-this.fps)*.08),this.adaptTimer+=Math.min(.25,e),this.adaptTimer>2&&(this.adaptTimer=0,this.fps<48&&this.pixelRatio>1?(this.pixelRatio=Math.max(1,this.pixelRatio-.25),this.renderer.setPixelRatio(this.pixelRatio)):this.fps>58&&this.pixelRatio<this.maxPixelRatio&&(this.pixelRatio=Math.min(this.maxPixelRatio,this.pixelRatio+.25),this.renderer.setPixelRatio(this.pixelRatio))),this.started&&!this.paused){this.acc+=Math.min(.25,e);let i=0;for(;this.acc>=Sl&&i<6;)this.stepPhysics(Sl),this.acc-=Sl,i+=1;i>=6&&(this.acc=0),this.updateVisuals(e)}this.renderer.clear(!0,!0,!0),this.renderer.render(this.scene,this.camera),this.renderer.clearDepth(),this.renderer.render(this.viewModel.scene,this.viewModel.camera)}stepPhysics(t){this.time+=t;let e=this.localPlayer;if(this.round.update(t),e){let n={forward:(this.act("forward")?1:0)-(this.act("back")?1:0),side:(this.act("right")?1:0)-(this.act("left")?1:0),jump:this.act("jump"),duck:this.act("duck")||!!this.keys.ControlRight||!!this.keys.KeyC,walk:this.act("walk")||!!this.keys.ShiftRight};e.wantUse=this.act("use"),e.update(t,n)}for(let n of this.players)n.bot&&n.bot.update(t);for(let n=this.grenades.length-1;n>=0;n--){let i=this.grenades[n];i.update(t),i.dead&&this.grenades.splice(n,1)}this.updateDropped()}updateVisuals(t){let e=this.localPlayer;if(Pe.update(t),this.updateCamera(t),this.viewModel.update(t,e),this.hud.update(t),dl(this.listenerPos()),e){let n=no[this.km().buy]||this.km().buy;this.inBuyZone()&&!this.hud.buyOpen?this.hud.hint(`\u6309 ${n} \u6253\u5F00\u8D2D\u4E70\u83DC\u5355`):e.hasBomb&&this.map.siteAt(e.pos.x,e.pos.z)&&this.round.bomb.state==="carried"?this.hud.hint("\u6309\u4F4F E \u5B89\u653E C4"):e.team==="CT"&&this.round.bomb.state==="planted"&&Math.hypot(e.pos.x-this.round.bomb.pos.x,e.pos.z-this.round.bomb.pos.z)<90?this.hud.hint("\u6309\u4F4F E \u62C6\u9664\u70B8\u5F39"):this.hud.hint(null)}}dropWeapon(t,e){if(e!=="primary"&&e!=="secondary")return;let n=t.slots[e];if(!n)return;let i=Kt[n.id];if(!i||i.cls==="melee")return;t.slots[e]=null,(e==="primary"&&t.curSlot==="primary"||e==="secondary"&&t.curSlot==="secondary")&&(t.curSlot=t.slots.primary?"primary":t.slots.secondary?"secondary":"melee");let r=uu(n.id);if(r.position.set(t.pos.x,10,t.pos.z),r.rotation.y=Math.random()*Math.PI*2,this.scene.add(r),this.dropped.push({id:n.id,ammo:n.ammo,reserve:n.reserve,mesh:r,x:t.pos.x,z:t.pos.z}),this.dropped.length>24){let o=this.dropped.shift();this.scene.remove(o.mesh)}}clearDropped(){for(let t of this.dropped)this.scene.remove(t.mesh);this.dropped=[]}updateDropped(){for(let t=this.dropped.length-1;t>=0;t--){let e=this.dropped[t];e.mesh.rotation.y+=.02;let n=!1;for(let i of this.players){if(!i.alive||Math.hypot(i.pos.x-e.x,i.pos.z-e.z)>46)continue;let r=Kt[e.id],o=r.slot===1?"primary":"secondary";if(!i.slots[o]){i.slots[o]={id:e.id,def:r,ammo:e.ammo,reserve:e.reserve},i.curSlot=o,i.deployTime=.4,i===this.localPlayer&&as(),n=!0;break}}n&&(this.scene.remove(e.mesh),this.dropped.splice(t,1))}}updateCamera(t){let e=this.localPlayer,n=null;if(e&&e.alive?(n=e,this.spectating=null):this.spectating&&this.spectating.alive&&(n=this.spectating),n){let r=Pe.shake*1.6,o=(Math.random()-.5)*r,a=(Math.random()-.5)*r;this.camera.position.set(n.pos.x,n.eyeY(),n.pos.z),this.camera.rotation.set(n.pitch+n.punchPitch*Vs+a*.01,n.yaw+n.punchYaw*Vs+o*.01,n.punchYaw*.012)}let i=this.settings.fov;if(e&&e.alive&&e.zoom>0){let r=e.weaponDef;r&&r.scope&&(i=this.settings.fov*r.scope[e.zoom-1])}Math.abs(this.camera.fov-i)>.1&&(this.camera.fov+=(i-this.camera.fov)*Math.min(1,t*16),this.camera.updateProjectionMatrix())}};window.addEventListener("DOMContentLoaded",()=>{let s=new Tl;window.game=s;try{s.init()}catch(t){console.error(t);let e=document.getElementById("loading");e&&(e.textContent="\u521D\u59CB\u5316\u5931\u8D25\uFF1A"+t.message)}});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
