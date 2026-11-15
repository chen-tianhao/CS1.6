(()=>{var id=0,nc=1,sd=2;var Ih=1,xl=2,Un=3,si=0,$e=1,an=2;var ti=0,Mn=1,ri=2,ic=3,sc=4,rd=5,vi=100,ad=101,od=102,rc=103,ac=104,ld=200,cd=201,hd=202,ud=203,Ro=204,Co=205,dd=206,fd=207,pd=208,md=209,gd=210,xd=211,yd=212,_d=213,vd=214,Md=0,bd=1,Sd=2,Dr=3,Ed=4,Td=5,wd=6,Ad=7,yl=0,Rd=1,Cd=2,ei=0,Pd=1,Ld=2,Id=3,_l=4,Dd=5,Ud=6;var Dh=300,rs=301,as=302,ks=303,Po=304,ua=306,os=1e3,mn=1001,Lo=1002,Pe=1003,oc=1004;var Va=1005;var Ye=1006,Nd=1007;var wi=1008;var ni=1009,kd=1010,zd=1011,vl=1012,Uh=1013,jn=1014,Qn=1015,zs=1016,Nh=1017,kh=1018,Si=1020,Od=1021,gn=1023,Fd=1024,Bd=1025,Ei=1026,ls=1027,Hd=1028,zh=1029,Gd=1030,Oh=1031,Fh=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,lc=35840,cc=35841,hc=35842,uc=35843,Bh=36196,dc=37492,fc=37496,pc=37808,mc=37809,gc=37810,xc=37811,yc=37812,_c=37813,vc=37814,Mc=37815,bc=37816,Sc=37817,Ec=37818,Tc=37819,wc=37820,Ac=37821,$a=36492,Rc=36494,Cc=36495,Vd=36283,Pc=36284,Lc=36285,Ic=36286;var Ur=2300,Nr=2301,Za=2302,Dc=2400,Uc=2401,Nc=2402;var Hh=3e3,Ti=3001,Wd=3200,Xd=3201,Ml=0,qd=1,on="",Jt="srgb",On="srgb-linear",bl="display-p3",da="display-p3-linear",kr="linear",le="srgb",zr="rec709",Or="p3";var Ni=7680;var kc=519,Yd=512,$d=513,Zd=514,Gh=515,Kd=516,Jd=517,jd=518,Qd=519,Io=35044;var zc="300 es",Do=1035,zn=2e3,Fr=2001,ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ka=Math.PI/180,Br=180/Math.PI;function ii(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[s&255]+Ue[s>>8&255]+Ue[s>>16&255]+Ue[s>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Le(s,t,e){return Math.max(t,Math.min(e,s))}function tf(s,t){return(s%t+t)%t}function Ja(s,t,e){return(1-e)*s+e*t}function Oc(s){return(s&s-1)===0&&s!==0}function Uo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function kn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ne(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var lt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=i[0],m=i[3],f=i[6],v=i[1],y=i[4],w=i[7],I=i[2],A=i[5],R=i[8];return r[0]=a*x+o*v+l*I,r[3]=a*m+o*y+l*A,r[6]=a*f+o*w+l*R,r[1]=c*x+h*v+u*I,r[4]=c*m+h*y+u*A,r[7]=c*f+h*w+u*R,r[2]=d*x+p*v+g*I,r[5]=d*m+p*y+g*A,r[8]=d*f+p*w+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ja.makeScale(t,e)),this}rotate(t){return this.premultiply(ja.makeRotation(-t)),this}translate(t,e){return this.premultiply(ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ja=new Yt;function Vh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Hr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ef(){let s=Hr("canvas");return s.style.display="block",s}var Fc={};function Is(s){s in Fc||(Fc[s]=!0,console.warn(s))}var Bc=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hc=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rr={[On]:{transfer:kr,primaries:zr,toReference:s=>s,fromReference:s=>s},[Jt]:{transfer:le,primaries:zr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[da]:{transfer:kr,primaries:Or,toReference:s=>s.applyMatrix3(Hc),fromReference:s=>s.applyMatrix3(Bc)},[bl]:{transfer:le,primaries:Or,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Hc),fromReference:s=>s.applyMatrix3(Bc).convertLinearToSRGB()}},nf=new Set([On,da]),ee={enabled:!0,_workingColorSpace:On,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!nf.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=rr[t].toReference,i=rr[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return rr[s].primaries},getTransfer:function(s){return s===on?kr:rr[s].transfer}};function is(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ki,Gr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ki===void 0&&(ki=Hr("canvas")),ki.width=t.width,ki.height=t.height;let n=ki.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Hr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=is(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(is(e[n]/255)*255):e[n]=is(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},sf=0,Vr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=ii(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(to(i[a].image)):r.push(to(i[a]))}else r=to(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function to(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Gr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var rf=0,ln=class s extends ai{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=mn,i=mn,r=Ye,a=wi,o=gn,l=ni,c=s.DEFAULT_ANISOTROPY,h=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=ii(),this.name="",this.source=new Vr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ti?Jt:on),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case os:t.x=t.x-Math.floor(t.x);break;case mn:t.x=t.x<0?0:1;break;case Lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case os:t.y=t.y-Math.floor(t.y);break;case mn:t.y=t.y<0?0:1;break;case Lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Jt?Ti:Hh}set encoding(t){Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ti?Jt:on}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Dh;ln.DEFAULT_ANISOTROPY=1;var he=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,w=(p+1)/2,I=(f+1)/2,A=(h+d)/4,R=(u+x)/4,V=(g+m)/4;return y>w&&y>I?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=R/n):w>I?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=A/i,r=V/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=R/r,i=V/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},No=class extends ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(Is("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ti?Jt:on),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ln(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Vr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends No{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Wr=class extends ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ko=class extends ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==p||h!==g){let m=1-o,f=l*d+c*p+h*g+u*x,v=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let I=Math.sqrt(y),A=Math.atan2(I,f*v);m=Math.sin(m*A)/I,o=Math.sin(o*A)/I}let w=o*v;if(l=l*m+d*w,c=c*m+p*w,h=h*m+g*w,u=u*m+x*w,m===1-o){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return eo.copy(this).projectOnVector(t),this.sub(eo)}reflect(t){return this.sub(eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},eo=new T,Gc=new oi,Ai=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ar.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ar.copy(n.boundingBox)),ar.applyMatrix4(t.matrixWorld),this.union(ar)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Es),or.subVectors(this.max,Es),zi.subVectors(t.a,Es),Oi.subVectors(t.b,Es),Fi.subVectors(t.c,Es),Yn.subVectors(Oi,zi),$n.subVectors(Fi,Oi),mi.subVectors(zi,Fi);let e=[0,-Yn.z,Yn.y,0,-$n.z,$n.y,0,-mi.z,mi.y,Yn.z,0,-Yn.x,$n.z,0,-$n.x,mi.z,0,-mi.x,-Yn.y,Yn.x,0,-$n.y,$n.x,0,-mi.y,mi.x,0];return!no(e,zi,Oi,Fi,or)||(e=[1,0,0,0,1,0,0,0,1],!no(e,zi,Oi,Fi,or))?!1:(lr.crossVectors(Yn,$n),e=[lr.x,lr.y,lr.z],no(e,zi,Oi,Fi,or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Cn=[new T,new T,new T,new T,new T,new T,new T,new T],dn=new T,ar=new Ai,zi=new T,Oi=new T,Fi=new T,Yn=new T,$n=new T,mi=new T,Es=new T,or=new T,lr=new T,gi=new T;function no(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){gi.fromArray(s,r);let o=i.x*Math.abs(gi.x)+i.y*Math.abs(gi.y)+i.z*Math.abs(gi.z),l=t.dot(gi),c=e.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var af=new Ai,Ts=new T,io=new T,cs=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):af.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);let e=Ts.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ts,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(io)),this.expandByPoint(Ts.copy(t.center).sub(io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pn=new T,so=new T,cr=new T,Zn=new T,ro=new T,hr=new T,ao=new T,Xr=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){so.copy(t).add(e).multiplyScalar(.5),cr.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(so);let r=t.distanceTo(e)*.5,a=-this.direction.dot(cr),o=Zn.dot(this.direction),l=-Zn.dot(cr),c=Zn.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(so).addScaledVector(cr,d),p}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);let n=Pn.dot(this.direction),i=Pn.dot(Pn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,i,r){ro.subVectors(e,t),hr.subVectors(n,t),ao.crossVectors(ro,hr);let a=this.direction.dot(ao),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,t);let l=o*this.direction.dot(hr.crossVectors(Zn,hr));if(l<0)return null;let c=o*this.direction.dot(ro.cross(Zn));if(c<0||l+c>a)return null;let h=-o*Zn.dot(ao);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class s{constructor(t,e,n,i,r,a,o,l,c,h,u,d,p,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,p,g,x,m)}set(t,e,n,i,r,a,o,l,c,h,u,d,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),a=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,p=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(of,t,lf)}lookAt(t,e,n){let i=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),Kn.crossVectors(n,Qe),Kn.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),Kn.crossVectors(n,Qe)),Kn.normalize(),ur.crossVectors(Qe,Kn),i[0]=Kn.x,i[4]=ur.x,i[8]=Qe.x,i[1]=Kn.y,i[5]=ur.y,i[9]=Qe.y,i[2]=Kn.z,i[6]=ur.z,i[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],v=n[3],y=n[7],w=n[11],I=n[15],A=i[0],R=i[4],V=i[8],M=i[12],E=i[1],N=i[5],W=i[9],Y=i[13],L=i[2],U=i[6],H=i[10],$=i[14],q=i[3],X=i[7],j=i[11],et=i[15];return r[0]=a*A+o*E+l*L+c*q,r[4]=a*R+o*N+l*U+c*X,r[8]=a*V+o*W+l*H+c*j,r[12]=a*M+o*Y+l*$+c*et,r[1]=h*A+u*E+d*L+p*q,r[5]=h*R+u*N+d*U+p*X,r[9]=h*V+u*W+d*H+p*j,r[13]=h*M+u*Y+d*$+p*et,r[2]=g*A+x*E+m*L+f*q,r[6]=g*R+x*N+m*U+f*X,r[10]=g*V+x*W+m*H+f*j,r[14]=g*M+x*Y+m*$+f*et,r[3]=v*A+y*E+w*L+I*q,r[7]=v*R+y*N+w*U+I*X,r[11]=v*V+y*W+w*H+I*j,r[15]=v*M+y*Y+w*$+I*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*p-n*l*p)+x*(+e*l*p-e*c*d+r*a*d-i*a*p+i*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],v=u*m*c-x*d*c+x*l*p-o*m*p-u*l*f+o*d*f,y=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,w=h*x*c-g*u*c+g*o*p-a*x*p-h*o*f+a*u*f,I=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,A=e*v+n*y+i*w+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return t[0]=v*R,t[1]=(x*d*r-u*m*r-x*i*p+n*m*p+u*i*f-n*d*f)*R,t[2]=(o*m*r-x*l*r+x*i*c-n*m*c-o*i*f+n*l*f)*R,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*p-n*l*p)*R,t[4]=y*R,t[5]=(h*m*r-g*d*r+g*i*p-e*m*p-h*i*f+e*d*f)*R,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*f-e*l*f)*R,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*p+e*l*p)*R,t[8]=w*R,t[9]=(g*u*r-h*x*r-g*n*p+e*x*p+h*n*f-e*u*f)*R,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*f+e*o*f)*R,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*R,t[12]=I*R,t[13]=(h*x*i-g*u*i+g*n*d-e*x*d-h*n*m+e*u*m)*R,t[14]=(g*o*i-a*x*i-g*n*l+e*x*l+a*n*m-e*o*m)*R,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*R,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,x=a*h,m=a*u,f=o*u,v=l*c,y=l*h,w=l*u,I=n.x,A=n.y,R=n.z;return i[0]=(1-(x+f))*I,i[1]=(p+w)*I,i[2]=(g-y)*I,i[3]=0,i[4]=(p-w)*A,i[5]=(1-(d+f))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(g+y)*R,i[9]=(m-v)*R,i[10]=(1-(d+x))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Bi.set(i[0],i[1],i[2]).length(),a=Bi.set(i[4],i[5],i[6]).length(),o=Bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],fn.copy(this);let c=1/r,h=1/a,u=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,e.setFromRotationMatrix(fn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=zn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),p,g;if(o===zn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Fr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=zn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,p=(n+i)*h,g,x;if(o===zn)g=(a+r)*u,x=-2*u;else if(o===Fr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Bi=new T,fn=new xe,of=new T(0,0,0),lf=new T(1,1,1),Kn=new T,ur=new T,Qe=new T,Vc=new xe,Wc=new oi,qr=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qr.DEFAULT_ORDER="XYZ";var Yr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},cf=0,Xc=new T,Hi=new oi,Ln=new xe,dr=new T,ws=new T,hf=new T,uf=new oi,qc=new T(1,0,0),Yc=new T(0,1,0),$c=new T(0,0,1),df={type:"added"},ff={type:"removed"},Se=class s extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new T,e=new qr,n=new oi,i=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xe},normalMatrix:{value:new Yt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(qc,t)}rotateY(t){return this.rotateOnAxis(Yc,t)}rotateZ(t){return this.rotateOnAxis($c,t)}translateOnAxis(t,e){return Xc.copy(t).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qc,t)}translateY(t){return this.translateOnAxis(Yc,t)}translateZ(t){return this.translateOnAxis($c,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?dr.copy(t):dr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(ws,dr,this.up):Ln.lookAt(dr,ws,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),Hi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(df)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ff)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,t,hf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,uf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Se.DEFAULT_UP=new T(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pn=new T,In=new T,oo=new T,Dn=new T,Gi=new T,Vi=new T,Zc=new T,lo=new T,co=new T,ho=new T,fr=!1,bi=class s{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),pn.subVectors(t,e),i.cross(pn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){pn.subVectors(i,e),In.subVectors(n,e),oo.subVectors(t,e);let a=pn.dot(pn),o=pn.dot(In),l=pn.dot(oo),c=In.dot(In),h=In.dot(oo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(t,e,n,i,r,a,o,l){return fr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fr=!0),this.getInterpolation(t,e,n,i,r,a,o,l)}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static isFrontFacing(t,e,n,i){return pn.subVectors(n,e),In.subVectors(t,e),pn.cross(In).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),pn.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return fr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fr=!0),s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Gi.subVectors(i,n),Vi.subVectors(r,n),lo.subVectors(t,n);let l=Gi.dot(lo),c=Vi.dot(lo);if(l<=0&&c<=0)return e.copy(n);co.subVectors(t,i);let h=Gi.dot(co),u=Vi.dot(co);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Gi,a);ho.subVectors(t,r);let p=Gi.dot(ho),g=Vi.dot(ho);if(g>=0&&p<=g)return e.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Vi,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Zc.subVectors(r,i),o=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(Zc,o);let f=1/(m+x+d);return a=x*f,o=d*f,e.copy(n).addScaledVector(Gi,a).addScaledVector(Vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},pr={h:0,s:0,l:0};function uo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Jt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=tf(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=uo(a,r,t+1/3),this.g=uo(a,r,t),this.b=uo(a,r,t-1/3)}return ee.toWorkingColorSpace(this,i),this}setStyle(t,e=Jt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Jt){let n=Wh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}copyLinearToSRGB(t){return this.r=Qa(t.r),this.g=Qa(t.g),this.b=Qa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Jt){return ee.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Le(Ne.r*255,0,255))*65536+Math.round(Le(Ne.g*255,0,255))*256+Math.round(Le(Ne.b*255,0,255))}getHexString(t=Jt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ne.copy(this),e);let n=Ne.r,i=Ne.g,r=Ne.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Jt){ee.fromWorkingColorSpace(Ne.copy(this),t);let e=Ne.r,n=Ne.g,i=Ne.b;return t!==Jt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(pr);let n=Ja(Jn.h,pr.h,e),i=Ja(Jn.s,pr.s,e),r=Ja(Jn.l,pr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ne=new zt;zt.NAMES=Wh;var pf=0,bn=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Mn,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ro,this.blendDst=Co,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mn&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ro&&(n.blendSrc=this.blendSrc),this.blendDst!==Co&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},xn=class extends bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var _e=new T,mr=new lt,be=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Io,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)mr.fromBufferAttribute(this,e),mr.applyMatrix3(t),this.setXY(e,mr.x,mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Io&&(t.usage=this.usage),t}};var $r=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Zr=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ve=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}};var mf=0,rn=new xe,fo=new Se,Wi=new T,tn=new Ai,As=new Ai,Re=new T,ke=class s extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vh(t)?Zr:$r)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return fo.lookAt(t),fo.updateMatrix(),this.applyMatrix4(fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ve(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];As.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(tn.min,As.min),tn.expandByPoint(Re),Re.addVectors(tn.max,As.max),tn.expandByPoint(Re)):(tn.expandByPoint(As.min),tn.expandByPoint(As.max))}tn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Re.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(t,c),Re.add(Wi)),i=Math.max(i,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<o;E++)c[E]=new T,h[E]=new T;let u=new T,d=new T,p=new T,g=new lt,x=new lt,m=new lt,f=new T,v=new T;function y(E,N,W){u.fromArray(i,E*3),d.fromArray(i,N*3),p.fromArray(i,W*3),g.fromArray(a,E*2),x.fromArray(a,N*2),m.fromArray(a,W*2),d.sub(u),p.sub(u),x.sub(g),m.sub(g);let Y=1/(x.x*m.y-m.x*x.y);isFinite(Y)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(Y),v.copy(p).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(Y),c[E].add(f),c[N].add(f),c[W].add(f),h[E].add(v),h[N].add(v),h[W].add(v))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let E=0,N=w.length;E<N;++E){let W=w[E],Y=W.start,L=W.count;for(let U=Y,H=Y+L;U<H;U+=3)y(n[U+0],n[U+1],n[U+2])}let I=new T,A=new T,R=new T,V=new T;function M(E){R.fromArray(r,E*3),V.copy(R);let N=c[E];I.copy(N),I.sub(R.multiplyScalar(R.dot(N))).normalize(),A.crossVectors(V,N);let Y=A.dot(h[E])<0?-1:1;l[E*4]=I.x,l[E*4+1]=I.y,l[E*4+2]=I.z,l[E*4+3]=Y}for(let E=0,N=w.length;E<N;++E){let W=w[E],Y=W.start,L=W.count;for(let U=Y,H=Y+L;U<H;U+=3)M(n[U+0]),M(n[U+1]),M(n[U+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new be(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kc=new xe,xi=new Xr,gr=new cs,Jc=new T,Xi=new T,qi=new T,Yi=new T,po=new T,xr=new T,yr=new lt,_r=new lt,vr=new lt,jc=new T,Qc=new T,th=new T,Mr=new T,br=new T,bt=class extends Se{constructor(t=new ke,e=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(po.fromBufferAttribute(u,t),a?xr.addScaledVector(po,h):xr.addScaledVector(po.sub(e),h))}e.add(xr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(r),xi.copy(t.ray).recast(t.near),!(gr.containsPoint(xi.origin)===!1&&(xi.intersectSphere(gr,Jc)===null||xi.origin.distanceToSquared(Jc)>(t.far-t.near)**2))&&(Kc.copy(r).invert(),xi.copy(t.ray).applyMatrix4(Kc),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let w=v,I=y;w<I;w+=3){let A=o.getX(w),R=o.getX(w+1),V=o.getX(w+2);i=Sr(this,f,t,n,c,h,u,A,R,V),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let v=o.getX(m),y=o.getX(m+1),w=o.getX(m+2);i=Sr(this,a,t,n,c,h,u,v,y,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=v,I=y;w<I;w+=3){let A=w,R=w+1,V=w+2;i=Sr(this,f,t,n,c,h,u,A,R,V),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let v=m,y=m+1,w=m+2;i=Sr(this,a,t,n,c,h,u,v,y,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function gf(s,t,e,n,i,r,a,o){let l;if(t.side===$e?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===si,o),l===null)return null;br.copy(o),br.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(br);return c<e.near||c>e.far?null:{distance:c,point:br.clone(),object:s}}function Sr(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Xi),s.getVertexPosition(l,qi),s.getVertexPosition(c,Yi);let h=gf(s,t,e,n,Xi,qi,Yi,Mr);if(h){i&&(yr.fromBufferAttribute(i,o),_r.fromBufferAttribute(i,l),vr.fromBufferAttribute(i,c),h.uv=bi.getInterpolation(Mr,Xi,qi,Yi,yr,_r,vr,new lt)),r&&(yr.fromBufferAttribute(r,o),_r.fromBufferAttribute(r,l),vr.fromBufferAttribute(r,c),h.uv1=bi.getInterpolation(Mr,Xi,qi,Yi,yr,_r,vr,new lt),h.uv2=h.uv1),a&&(jc.fromBufferAttribute(a,o),Qc.fromBufferAttribute(a,l),th.fromBufferAttribute(a,c),h.normal=bi.getInterpolation(Mr,Xi,qi,Yi,jc,Qc,th,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new T,materialIndex:0};bi.getNormal(Xi,qi,Yi,u.normal),h.face=u}return h}var Ce=class s extends ke{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(u,2));function g(x,m,f,v,y,w,I,A,R,V,M){let E=w/R,N=I/V,W=w/2,Y=I/2,L=A/2,U=R+1,H=V+1,$=0,q=0,X=new T;for(let j=0;j<H;j++){let et=j*N-Y;for(let dt=0;dt<U;dt++){let G=dt*E-W;X[x]=G*v,X[m]=et*y,X[f]=L,c.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[f]=A>0?1:-1,h.push(X.x,X.y,X.z),u.push(dt/R),u.push(1-j/V),$+=1}}for(let j=0;j<V;j++)for(let et=0;et<R;et++){let dt=d+et+U*j,G=d+et+U*(j+1),Z=d+(et+1)+U*(j+1),ht=d+(et+1)+U*j;l.push(dt,G,ht),l.push(G,Z,ht),q+=6}o.addGroup(p,q,M),p+=q,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function hs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ve(s){let t={};for(let e=0;e<s.length;e++){let n=hs(s[e]);for(let i in n)t[i]=n[i]}return t}function xf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Xh(s){return s.getRenderTarget()===null?s.outputColorSpace:ee.workingColorSpace}var yf={clone:hs,merge:Ve},_f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_f,this.fragmentShader=vf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=xf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Kr=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Me=class extends Kr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ka*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(Ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ka*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},$i=-90,Zi=1,zo=class extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Me($i,Zi,t,e);i.layers=this.layers,this.add(i);let r=new Me($i,Zi,t,e);r.layers=this.layers,this.add(r);let a=new Me($i,Zi,t,e);a.layers=this.layers,this.add(a);let o=new Me($i,Zi,t,e);o.layers=this.layers,this.add(o);let l=new Me($i,Zi,t,e);l.layers=this.layers,this.add(l);let c=new Me($i,Zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Jr=class extends ln{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:rs,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Oo=class extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Is("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ti?Jt:on),this.texture=new Jr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ce(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:ti});r.uniforms.tEquirect.value=e;let a=new bt(i,r),o=e.minFilter;return e.minFilter===wi&&(e.minFilter=Ye),new zo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},mo=new T,Mf=new T,bf=new Yt,Nn=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=mo.subVectors(n,e).cross(Mf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(mo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||bf.getNormalMatrix(t),i=this.coplanarPoint(mo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},yi=new cs,Er=new T,Os=class{constructor(t=new Nn,e=new Nn,n=new Nn,i=new Nn,r=new Nn,a=new Nn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],x=i[10],m=i[11],f=i[12],v=i[13],y=i[14],w=i[15];if(n[0].setComponents(l-r,d-c,m-p,w-f).normalize(),n[1].setComponents(l+r,d+c,m+p,w+f).normalize(),n[2].setComponents(l+a,d+h,m+g,w+v).normalize(),n[3].setComponents(l-a,d-h,m-g,w-v).normalize(),n[4].setComponents(l-o,d-u,m-x,w-y).normalize(),e===zn)n[5].setComponents(l+o,d+u,m+x,w+y).normalize();else if(e===Fr)n[5].setComponents(o,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Er.x=i.normal.x>0?t.max.x:t.min.x,Er.y=i.normal.y>0?t.max.y:t.min.y,Er.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qh(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Sf(s,t){let e=t.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,d=c.usage,p=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=s.SHORT;else if(u instanceof Uint32Array)x=s.UNSIGNED_INT;else if(u instanceof Int32Array)x=s.INT;else if(u instanceof Int8Array)x=s.BYTE;else if(u instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),p.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let f=g[x];e?s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var Sn=class s extends ke{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let v=f*d-a;for(let y=0;y<c;y++){let w=y*u-r;g.push(w,-v,0),x.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){let y=v+c*f,w=v+c*(f+1),I=v+1+c*(f+1),A=v+1+c*f;p.push(y,w,A),p.push(w,I,A)}this.setIndex(p),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(x,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tf=`#ifdef USE_ALPHAHASH
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
#endif`,wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Af=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pf=`#ifdef USE_AOMAP
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
#endif`,Lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,If=`#ifdef USE_BATCHING
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
#endif`,Df=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Uf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zf=`#ifdef USE_IRIDESCENCE
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
#endif`,Of=`#ifdef USE_BUMPMAP
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
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yf=`#define PI 3.141592653589793
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
} // validated`,$f=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zf=`vec3 transformedNormal = objectNormal;
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
#endif`,Kf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",ep=`
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
}`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,up=`#ifdef USE_GRADIENTMAP
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
}`,dp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gp=`uniform bool receiveShadow;
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
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bp=`PhysicalMaterial material;
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
#endif`,Sp=`struct PhysicalMaterial {
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
}`,Ep=`
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
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
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
#endif`,wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ap=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Up=`#if defined( USE_POINTS_UV )
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
#endif`,Np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Op=`#ifdef USE_MORPHNORMALS
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
#endif`,Fp=`#ifdef USE_MORPHTARGETS
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
#endif`,Bp=`#ifdef USE_MORPHTARGETS
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
#endif`,Hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qp=`#ifdef USE_NORMALMAP
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
#endif`,Yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lm=`float getShadowMask() {
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
}`,cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hm=`#ifdef USE_SKINNING
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
#endif`,um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dm=`#ifdef USE_SKINNING
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
#endif`,fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xm=`#ifdef USE_TRANSMISSION
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
#endif`,ym=`#ifdef USE_TRANSMISSION
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Em=`uniform sampler2D t2D;
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`#include <common>
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
}`,Pm=`#if DEPTH_PACKING == 3200
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
}`,Lm=`#define DISTANCE
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
}`,Im=`#define DISTANCE
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
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`uniform float scale;
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
}`,km=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,Om=`uniform vec3 diffuse;
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
}`,Fm=`#define LAMBERT
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
}`,Bm=`#define LAMBERT
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
}`,Hm=`#define MATCAP
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
}`,Gm=`#define MATCAP
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
}`,Vm=`#define NORMAL
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
}`,Wm=`#define NORMAL
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
}`,Xm=`#define PHONG
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
}`,qm=`#define PHONG
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
}`,Ym=`#define STANDARD
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
}`,$m=`#define STANDARD
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
}`,Zm=`#define TOON
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
}`,Km=`#define TOON
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
}`,Jm=`uniform float size;
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
}`,jm=`uniform vec3 diffuse;
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
}`,Qm=`#include <common>
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
}`,t0=`uniform vec3 color;
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
}`,e0=`uniform float rotation;
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
}`,n0=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:Ef,alphahash_pars_fragment:Tf,alphamap_fragment:wf,alphamap_pars_fragment:Af,alphatest_fragment:Rf,alphatest_pars_fragment:Cf,aomap_fragment:Pf,aomap_pars_fragment:Lf,batching_pars_vertex:If,batching_vertex:Df,begin_vertex:Uf,beginnormal_vertex:Nf,bsdfs:kf,iridescence_fragment:zf,bumpmap_pars_fragment:Of,clipping_planes_fragment:Ff,clipping_planes_pars_fragment:Bf,clipping_planes_pars_vertex:Hf,clipping_planes_vertex:Gf,color_fragment:Vf,color_pars_fragment:Wf,color_pars_vertex:Xf,color_vertex:qf,common:Yf,cube_uv_reflection_fragment:$f,defaultnormal_vertex:Zf,displacementmap_pars_vertex:Kf,displacementmap_vertex:Jf,emissivemap_fragment:jf,emissivemap_pars_fragment:Qf,colorspace_fragment:tp,colorspace_pars_fragment:ep,envmap_fragment:np,envmap_common_pars_fragment:ip,envmap_pars_fragment:sp,envmap_pars_vertex:rp,envmap_physical_pars_fragment:xp,envmap_vertex:ap,fog_vertex:op,fog_pars_vertex:lp,fog_fragment:cp,fog_pars_fragment:hp,gradientmap_pars_fragment:up,lightmap_fragment:dp,lightmap_pars_fragment:fp,lights_lambert_fragment:pp,lights_lambert_pars_fragment:mp,lights_pars_begin:gp,lights_toon_fragment:yp,lights_toon_pars_fragment:_p,lights_phong_fragment:vp,lights_phong_pars_fragment:Mp,lights_physical_fragment:bp,lights_physical_pars_fragment:Sp,lights_fragment_begin:Ep,lights_fragment_maps:Tp,lights_fragment_end:wp,logdepthbuf_fragment:Ap,logdepthbuf_pars_fragment:Rp,logdepthbuf_pars_vertex:Cp,logdepthbuf_vertex:Pp,map_fragment:Lp,map_pars_fragment:Ip,map_particle_fragment:Dp,map_particle_pars_fragment:Up,metalnessmap_fragment:Np,metalnessmap_pars_fragment:kp,morphcolor_vertex:zp,morphnormal_vertex:Op,morphtarget_pars_vertex:Fp,morphtarget_vertex:Bp,normal_fragment_begin:Hp,normal_fragment_maps:Gp,normal_pars_fragment:Vp,normal_pars_vertex:Wp,normal_vertex:Xp,normalmap_pars_fragment:qp,clearcoat_normal_fragment_begin:Yp,clearcoat_normal_fragment_maps:$p,clearcoat_pars_fragment:Zp,iridescence_pars_fragment:Kp,opaque_fragment:Jp,packing:jp,premultiplied_alpha_fragment:Qp,project_vertex:tm,dithering_fragment:em,dithering_pars_fragment:nm,roughnessmap_fragment:im,roughnessmap_pars_fragment:sm,shadowmap_pars_fragment:rm,shadowmap_pars_vertex:am,shadowmap_vertex:om,shadowmask_pars_fragment:lm,skinbase_vertex:cm,skinning_pars_vertex:hm,skinning_vertex:um,skinnormal_vertex:dm,specularmap_fragment:fm,specularmap_pars_fragment:pm,tonemapping_fragment:mm,tonemapping_pars_fragment:gm,transmission_fragment:xm,transmission_pars_fragment:ym,uv_pars_fragment:_m,uv_pars_vertex:vm,uv_vertex:Mm,worldpos_vertex:bm,background_vert:Sm,background_frag:Em,backgroundCube_vert:Tm,backgroundCube_frag:wm,cube_vert:Am,cube_frag:Rm,depth_vert:Cm,depth_frag:Pm,distanceRGBA_vert:Lm,distanceRGBA_frag:Im,equirect_vert:Dm,equirect_frag:Um,linedashed_vert:Nm,linedashed_frag:km,meshbasic_vert:zm,meshbasic_frag:Om,meshlambert_vert:Fm,meshlambert_frag:Bm,meshmatcap_vert:Hm,meshmatcap_frag:Gm,meshnormal_vert:Vm,meshnormal_frag:Wm,meshphong_vert:Xm,meshphong_frag:qm,meshphysical_vert:Ym,meshphysical_frag:$m,meshtoon_vert:Zm,meshtoon_frag:Km,points_vert:Jm,points_frag:jm,shadow_vert:Qm,shadow_frag:t0,sprite_vert:e0,sprite_frag:n0},it={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},vn={basic:{uniforms:Ve([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ve([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ve([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ve([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ve([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ve([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ve([it.points,it.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ve([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ve([it.common,it.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ve([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ve([it.sprite,it.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ve([it.common,it.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ve([it.lights,it.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};vn.physical={uniforms:Ve([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Tr={r:0,b:0,g:0};function i0(s,t,e,n,i,r,a){let o=new zt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let v=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?e:t).get(y)),y===null?x(o,l):y&&y.isColor&&(x(y,1),v=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ua)?(h===void 0&&(h=new bt(new Ce(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:hs(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=ee.getTransfer(y.colorSpace)!==le,(u!==y||d!==y.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new bt(new Sn(2,2),new Bn({name:"BackgroundMaterial",uniforms:hs(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=ee.getTransfer(y.colorSpace)!==le,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,f){m.getRGB(Tr,Xh(s)),n.buffers.color.setClear(Tr.r,Tr.g,Tr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function s0(s,t,e,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(L,U,H,$,q){let X=!1;if(a){let j=x($,H,U);c!==j&&(c=j,p(c.object)),X=f(L,$,H,q),X&&v(L,$,H,q)}else{let j=U.wireframe===!0;(c.geometry!==$.id||c.program!==H.id||c.wireframe!==j)&&(c.geometry=$.id,c.program=H.id,c.wireframe=j,X=!0)}q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,V(L,U,H,$),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,U,H){let $=H.wireframe===!0,q=o[L.id];q===void 0&&(q={},o[L.id]=q);let X=q[U.id];X===void 0&&(X={},q[U.id]=X);let j=X[$];return j===void 0&&(j=m(d()),X[$]=j),j}function m(L){let U=[],H=[],$=[];for(let q=0;q<i;q++)U[q]=0,H[q]=0,$[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:$,object:L,attributes:{},index:null}}function f(L,U,H,$){let q=c.attributes,X=U.attributes,j=0,et=H.getAttributes();for(let dt in et)if(et[dt].location>=0){let Z=q[dt],ht=X[dt];if(ht===void 0&&(dt==="instanceMatrix"&&L.instanceMatrix&&(ht=L.instanceMatrix),dt==="instanceColor"&&L.instanceColor&&(ht=L.instanceColor)),Z===void 0||Z.attribute!==ht||ht&&Z.data!==ht.data)return!0;j++}return c.attributesNum!==j||c.index!==$}function v(L,U,H,$){let q={},X=U.attributes,j=0,et=H.getAttributes();for(let dt in et)if(et[dt].location>=0){let Z=X[dt];Z===void 0&&(dt==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),dt==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));let ht={};ht.attribute=Z,Z&&Z.data&&(ht.data=Z.data),q[dt]=ht,j++}c.attributes=q,c.attributesNum=j,c.index=$}function y(){let L=c.newAttributes;for(let U=0,H=L.length;U<H;U++)L[U]=0}function w(L){I(L,0)}function I(L,U){let H=c.newAttributes,$=c.enabledAttributes,q=c.attributeDivisors;H[L]=1,$[L]===0&&(s.enableVertexAttribArray(L),$[L]=1),q[L]!==U&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,U),q[L]=U)}function A(){let L=c.newAttributes,U=c.enabledAttributes;for(let H=0,$=U.length;H<$;H++)U[H]!==L[H]&&(s.disableVertexAttribArray(H),U[H]=0)}function R(L,U,H,$,q,X,j){j===!0?s.vertexAttribIPointer(L,U,H,q,X):s.vertexAttribPointer(L,U,H,$,q,X)}function V(L,U,H,$){if(n.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();let q=$.attributes,X=H.getAttributes(),j=U.defaultAttributeValues;for(let et in X){let dt=X[et];if(dt.location>=0){let G=q[et];if(G===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){let Z=G.normalized,ht=G.itemSize,vt=e.get(G);if(vt===void 0)continue;let _t=vt.buffer,Nt=vt.type,Ft=vt.bytesPerElement,Rt=n.isWebGL2===!0&&(Nt===s.INT||Nt===s.UNSIGNED_INT||G.gpuType===Uh);if(G.isInterleavedBufferAttribute){let Kt=G.data,k=Kt.stride,Fe=G.offset;if(Kt.isInstancedInterleavedBuffer){for(let Et=0;Et<dt.locationSize;Et++)I(dt.location+Et,Kt.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Kt.meshPerAttribute*Kt.count)}else for(let Et=0;Et<dt.locationSize;Et++)w(dt.location+Et);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let Et=0;Et<dt.locationSize;Et++)R(dt.location+Et,ht/dt.locationSize,Nt,Z,k*Ft,(Fe+ht/dt.locationSize*Et)*Ft,Rt)}else{if(G.isInstancedBufferAttribute){for(let Kt=0;Kt<dt.locationSize;Kt++)I(dt.location+Kt,G.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Kt=0;Kt<dt.locationSize;Kt++)w(dt.location+Kt);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let Kt=0;Kt<dt.locationSize;Kt++)R(dt.location+Kt,ht/dt.locationSize,Nt,Z,ht*Ft,ht/dt.locationSize*Kt*Ft,Rt)}}else if(j!==void 0){let Z=j[et];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(dt.location,Z);break;case 3:s.vertexAttrib3fv(dt.location,Z);break;case 4:s.vertexAttrib4fv(dt.location,Z);break;default:s.vertexAttrib1fv(dt.location,Z)}}}}A()}function M(){W();for(let L in o){let U=o[L];for(let H in U){let $=U[H];for(let q in $)g($[q].object),delete $[q];delete U[H]}delete o[L]}}function E(L){if(o[L.id]===void 0)return;let U=o[L.id];for(let H in U){let $=U[H];for(let q in $)g($[q].object),delete $[q];delete U[H]}delete o[L.id]}function N(L){for(let U in o){let H=o[U];if(H[L.id]===void 0)continue;let $=H[L.id];for(let q in $)g($[q].object),delete $[q];delete H[L.id]}}function W(){Y(),h=!0,c!==l&&(c=l,p(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:W,resetDefaultState:Y,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:w,disableUnusedAttributes:A}}function r0(s,t,e,n){let i=n.isWebGL2,r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,g;if(i)p=s,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function a0(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,w=a||t.has("OES_texture_float"),I=y&&w,A=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:w,floatVertexTextures:I,maxSamples:A}}function o0(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Nn,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,y=v*4,w=f.clippingState||null;l.value=w,w=h(g,d,y,p);for(let I=0;I!==y;++I)w[I]=e[I];f.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,w=p;y!==x;++y,w+=4)a.copy(u[y]).applyMatrix4(v,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function l0(s){let t=new WeakMap;function e(a,o){return o===ks?a.mapping=rs:o===Po&&(a.mapping=as),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ks||o===Po)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Oo(l.height/2);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var jr=class extends Kr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},es=4,eh=[.125,.215,.35,.446,.526,.582],Mi=20,go=new jr,nh=new zt,xo=null,yo=0,_o=0,_i=(1+Math.sqrt(5))/2,Ki=1/_i,ih=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,_i,Ki),new T(0,_i,-Ki),new T(Ki,0,_i),new T(-Ki,0,_i),new T(_i,Ki,0),new T(-_i,Ki,0)],li=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){xo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xo,yo,_o),t.scissorTest=!1,wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:zs,format:gn,colorSpace:On,depthBuffer:!1},i=sh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=c0(r)),this._blurMaterial=h0(r,t,e)}return i}_compileMaterial(t){let e=new bt(this._lodPlanes[0],t);this._renderer.compile(e,go)}_sceneToCubeUV(t,e,n,i){let o=new Me(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(nh),h.toneMapping=ei,h.autoClear=!1;let p=new xn({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),g=new bt(new Ce,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(nh),x=!0);for(let f=0;f<6;f++){let v=f%3;v===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):v===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let y=this._cubeSize;wr(i,v*y,f>2?y:0,y,y),h.setRenderTarget(i),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===rs||t.mapping===as;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rh());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new bt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;wr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,go)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=ih[(i-1)%ih.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new bt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Mi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Mi;m>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);let f=[],v=0;for(let R=0;R<Mi;++R){let V=R/x,M=Math.exp(-V*V/2);f.push(M),R===0?v+=M:R<m&&(v+=2*M)}for(let R=0;R<f.length;R++)f[R]=f[R]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let w=this._sizeLods[i],I=3*w*(i>y-es?i-y+es:0),A=4*(this._cubeSize-w);wr(e,I,A,3*w,2*w),l.setRenderTarget(e),l.render(u,go)}};function c0(s){let t=[],e=[],n=[],i=s,r=s-es+1+eh.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-es?l=eh[a-s+es-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,v=new Float32Array(x*g*p),y=new Float32Array(m*g*p),w=new Float32Array(f*g*p);for(let A=0;A<p;A++){let R=A%3*2/3-1,V=A>2?0:-1,M=[R,V,0,R+2/3,V,0,R+2/3,V+1,0,R,V,0,R+2/3,V+1,0,R,V+1,0];v.set(M,x*g*A),y.set(d,m*g*A);let E=[A,A,A,A,A,A];w.set(E,f*g*A)}let I=new ke;I.setAttribute("position",new be(v,x)),I.setAttribute("uv",new be(y,m)),I.setAttribute("faceIndex",new be(w,f)),t.push(I),i>es&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sh(s,t,e){let n=new Fn(s,t,e);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function h0(s,t,e){let n=new Float32Array(Mi),i=new T(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function rh(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function ah(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Sl(){return`

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
	`}function u0(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ks||l===Po,h=l===rs||l===as;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new li(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new li(s));let d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function d0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function f0(s,t,e,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete i[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let v=p.array;x=p.version;for(let y=0,w=v.length;y<w;y+=3){let I=v[y+0],A=v[y+1],R=v[y+2];d.push(I,A,A,R,R,I)}}else if(g!==void 0){let v=g.array;x=g.version;for(let y=0,w=v.length/3-1;y<w;y+=3){let I=y+0,A=y+1,R=y+2;d.push(I,A,A,R,R,I)}}else return;let m=new(Vh(d)?Zr:$r)(d,1);m.version=x;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function p0(s,t,e,n){let i=n.isWebGL2,r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,g){s.drawElements(r,g,o,p*l),e.update(g,r,1)}function u(p,g,x){if(x===0)return;let m,f;if(i)m=s,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*l,x),e.update(g,r,x)}function d(p,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<x;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,x);let f=0;for(let v=0;v<x;v++)f+=g[v];e.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function m0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function g0(s,t){return s[0]-t[0]}function x0(s,t){return Math.abs(t[1])-Math.abs(s[1])}function y0(s,t,e){let n={},i=new Float32Array(8),r=new WeakMap,a=new he,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,x=r.get(h);if(x===void 0||x.count!==g){let L=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let v=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,I=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],V=0;v===!0&&(V=1),y===!0&&(V=2),w===!0&&(V=3);let M=h.attributes.position.count*V,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let N=new Float32Array(M*E*4*g),W=new Wr(N,M,E,g);W.type=Qn,W.needsUpdate=!0;let Y=V*4;for(let U=0;U<g;U++){let H=I[U],$=A[U],q=R[U],X=M*E*4*U;for(let j=0;j<H.count;j++){let et=j*Y;v===!0&&(a.fromBufferAttribute(H,j),N[X+et+0]=a.x,N[X+et+1]=a.y,N[X+et+2]=a.z,N[X+et+3]=0),y===!0&&(a.fromBufferAttribute($,j),N[X+et+4]=a.x,N[X+et+5]=a.y,N[X+et+6]=a.z,N[X+et+7]=0),w===!0&&(a.fromBufferAttribute(q,j),N[X+et+8]=a.x,N[X+et+9]=a.y,N[X+et+10]=a.z,N[X+et+11]=q.itemSize===4?a.w:1)}}x={count:g,texture:W,size:new lt(M,E)},r.set(h,x),h.addEventListener("dispose",L)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",f),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let p=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let y=0;y<p;y++)g[y]=[y,0];n[h.id]=g}for(let y=0;y<p;y++){let w=g[y];w[0]=y,w[1]=d[y]}g.sort(x0);for(let y=0;y<8;y++)y<p&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(g0);let x=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let y=0;y<8;y++){let w=o[y],I=w[0],A=w[1];I!==Number.MAX_SAFE_INTEGER&&A?(x&&h.getAttribute("morphTarget"+y)!==x[I]&&h.setAttribute("morphTarget"+y,x[I]),m&&h.getAttribute("morphNormal"+y)!==m[I]&&h.setAttribute("morphNormal"+y,m[I]),i[y]=A,f+=A):(x&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}let v=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function _0(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Qr=class extends ln{constructor(t,e,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:Ei,h!==Ei&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ei&&(n=jn),n===void 0&&h===ls&&(n=Si),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Pe,this.minFilter=l!==void 0?l:Pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Yh=new ln,$h=new Qr(1,1);$h.compareFunction=Gh;var Zh=new Wr,Kh=new ko,Jh=new Jr,oh=[],lh=[],ch=new Float32Array(16),hh=new Float32Array(9),uh=new Float32Array(4);function fs(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=oh[i];if(r===void 0&&(r=new Float32Array(i),oh[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ee(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Te(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function fa(s,t){let e=lh[t];e===void 0&&(e=new Int32Array(t),lh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function v0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function M0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2fv(this.addr,t),Te(e,t)}}function b0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;s.uniform3fv(this.addr,t),Te(e,t)}}function S0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4fv(this.addr,t),Te(e,t)}}function E0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;uh.set(n),s.uniformMatrix2fv(this.addr,!1,uh),Te(e,n)}}function T0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;hh.set(n),s.uniformMatrix3fv(this.addr,!1,hh),Te(e,n)}}function w0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;ch.set(n),s.uniformMatrix4fv(this.addr,!1,ch),Te(e,n)}}function A0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function R0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2iv(this.addr,t),Te(e,t)}}function C0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3iv(this.addr,t),Te(e,t)}}function P0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4iv(this.addr,t),Te(e,t)}}function L0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function I0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2uiv(this.addr,t),Te(e,t)}}function D0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3uiv(this.addr,t),Te(e,t)}}function U0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4uiv(this.addr,t),Te(e,t)}}function N0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?$h:Yh;e.setTexture2D(t||r,i)}function k0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Kh,i)}function z0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Jh,i)}function O0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Zh,i)}function F0(s){switch(s){case 5126:return v0;case 35664:return M0;case 35665:return b0;case 35666:return S0;case 35674:return E0;case 35675:return T0;case 35676:return w0;case 5124:case 35670:return A0;case 35667:case 35671:return R0;case 35668:case 35672:return C0;case 35669:case 35673:return P0;case 5125:return L0;case 36294:return I0;case 36295:return D0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return O0}}function B0(s,t){s.uniform1fv(this.addr,t)}function H0(s,t){let e=fs(t,this.size,2);s.uniform2fv(this.addr,e)}function G0(s,t){let e=fs(t,this.size,3);s.uniform3fv(this.addr,e)}function V0(s,t){let e=fs(t,this.size,4);s.uniform4fv(this.addr,e)}function W0(s,t){let e=fs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function X0(s,t){let e=fs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function q0(s,t){let e=fs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Y0(s,t){s.uniform1iv(this.addr,t)}function $0(s,t){s.uniform2iv(this.addr,t)}function Z0(s,t){s.uniform3iv(this.addr,t)}function K0(s,t){s.uniform4iv(this.addr,t)}function J0(s,t){s.uniform1uiv(this.addr,t)}function j0(s,t){s.uniform2uiv(this.addr,t)}function Q0(s,t){s.uniform3uiv(this.addr,t)}function tg(s,t){s.uniform4uiv(this.addr,t)}function eg(s,t,e){let n=this.cache,i=t.length,r=fa(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Yh,r[a])}function ng(s,t,e){let n=this.cache,i=t.length,r=fa(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Kh,r[a])}function ig(s,t,e){let n=this.cache,i=t.length,r=fa(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Jh,r[a])}function sg(s,t,e){let n=this.cache,i=t.length,r=fa(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Zh,r[a])}function rg(s){switch(s){case 5126:return B0;case 35664:return H0;case 35665:return G0;case 35666:return V0;case 35674:return W0;case 35675:return X0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return $0;case 35668:case 35672:return Z0;case 35669:case 35673:return K0;case 5125:return J0;case 36294:return j0;case 36295:return Q0;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return sg}}var Fo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=F0(e.type)}},Bo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rg(e.type)}},Ho=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},vo=/(\w+)(\])?(\[|\.)?/g;function dh(s,t){s.seq.push(t),s.map[t.id]=t}function ag(s,t,e){let n=s.name,i=n.length;for(vo.lastIndex=0;;){let r=vo.exec(n),a=vo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){dh(e,c===void 0?new Fo(o,s,t):new Bo(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Ho(o),dh(e,u)),e=u}}}var ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);ag(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function fh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var og=37297,lg=0;function cg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function hg(s){let t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(s),n;switch(t===e?n="":t===Or&&e===zr?n="LinearDisplayP3ToLinearSRGB":t===zr&&e===Or&&(n="LinearSRGBToLinearDisplayP3"),s){case On:case da:return[n,"LinearTransferOETF"];case Jt:case bl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ph(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+cg(s.getShaderSource(t),a)}else return i}function ug(s,t){let e=hg(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function dg(s,t){let e;switch(t){case Pd:e="Linear";break;case Ld:e="Reinhard";break;case Id:e="OptimizedCineon";break;case _l:e="ACESFilmic";break;case Ud:e="AgX";break;case Dd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function fg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ns).join(`
`)}function pg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ns).join(`
`)}function mg(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ns(s){return s!==""}function mh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Go(s){return s.replace(xg,_g)}var yg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _g(s,t){let e=Ht[t];if(e===void 0){let n=yg.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Go(e)}var vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xh(s){return s.replace(vg,Mg)}function Mg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function yh(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ih?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===xl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function Sg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case rs:case as:t="ENVMAP_TYPE_CUBE";break;case ua:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Eg(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===as&&(t="ENVMAP_MODE_REFRACTION"),t}function Tg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case yl:t="ENVMAP_BLENDING_MULTIPLY";break;case Rd:t="ENVMAP_BLENDING_MIX";break;case Cd:t="ENVMAP_BLENDING_ADD";break}return t}function wg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ag(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=bg(e),c=Sg(e),h=Eg(e),u=Tg(e),d=wg(e),p=e.isWebGL2?"":fg(e),g=pg(e),x=mg(r),m=i.createProgram(),f,v,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ns).join(`
`),f.length>0&&(f+=`
`),v=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ns).join(`
`),v.length>0&&(v+=`
`)):(f=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),v=[p,yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Ht.tonemapping_pars_fragment:"",e.toneMapping!==ei?dg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,ug("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ns).join(`
`)),a=Go(a),a=mh(a,e),a=gh(a,e),o=Go(o),o=mh(o,e),o=gh(o,e),a=xh(a),o=xh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let w=y+f+a,I=y+v+o,A=fh(i,i.VERTEX_SHADER,w),R=fh(i,i.FRAGMENT_SHADER,I);i.attachShader(m,A),i.attachShader(m,R),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function V(W){if(s.debug.checkShaderErrors){let Y=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(A).trim(),U=i.getShaderInfoLog(R).trim(),H=!0,$=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,A,R);else{let q=ph(i,A,"vertex"),X=ph(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+q+`
`+X)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(L===""||U==="")&&($=!1);$&&(W.diagnostics={runnable:H,programLog:Y,vertexShader:{log:L,prefix:f},fragmentShader:{log:U,prefix:v}})}i.deleteShader(A),i.deleteShader(R),M=new ss(i,m),E=gg(i,m)}let M;this.getUniforms=function(){return M===void 0&&V(this),M};let E;this.getAttributes=function(){return E===void 0&&V(this),E};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(m,og)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=R,this}var Rg=0,Vo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Wo(t),e.set(t,n)),n}},Wo=class{constructor(t){this.id=Rg++,this.code=t,this.usedTimes=0}};function Cg(s,t,e,n,i,r,a){let o=new Yr,l=new Vo,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,E,N,W,Y){let L=W.fog,U=Y.geometry,H=M.isMeshStandardMaterial?W.environment:null,$=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),q=$&&$.mapping===ua?$.image.height:null,X=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let j=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,et=j!==void 0?j.length:0,dt=0;U.morphAttributes.position!==void 0&&(dt=1),U.morphAttributes.normal!==void 0&&(dt=2),U.morphAttributes.color!==void 0&&(dt=3);let G,Z,ht,vt;if(X){let Be=vn[X];G=Be.vertexShader,Z=Be.fragmentShader}else G=M.vertexShader,Z=M.fragmentShader,l.update(M),ht=l.getVertexShaderID(M),vt=l.getFragmentShaderID(M);let _t=s.getRenderTarget(),Nt=Y.isInstancedMesh===!0,Ft=Y.isBatchedMesh===!0,Rt=!!M.map,Kt=!!M.matcap,k=!!$,Fe=!!M.aoMap,Et=!!M.lightMap,Dt=!!M.bumpMap,gt=!!M.normalMap,de=!!M.displacementMap,Gt=!!M.emissiveMap,S=!!M.metalnessMap,_=!!M.roughnessMap,O=M.anisotropy>0,Q=M.clearcoat>0,J=M.iridescence>0,tt=M.sheen>0,xt=M.transmission>0,at=O&&!!M.anisotropyMap,pt=Q&&!!M.clearcoatMap,At=Q&&!!M.clearcoatNormalMap,Vt=Q&&!!M.clearcoatRoughnessMap,K=J&&!!M.iridescenceMap,te=J&&!!M.iridescenceThicknessMap,Zt=tt&&!!M.sheenColorMap,It=tt&&!!M.sheenRoughnessMap,Mt=!!M.specularMap,mt=!!M.specularColorMap,Bt=!!M.specularIntensityMap,Qt=xt&&!!M.transmissionMap,me=xt&&!!M.thicknessMap,Xt=!!M.gradientMap,nt=!!M.alphaMap,C=M.alphaTest>0,st=!!M.alphaHash,rt=!!M.extensions,Ct=!!U.attributes.uv1,Tt=!!U.attributes.uv2,re=!!U.attributes.uv3,ae=ei;return M.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ae=s.toneMapping),{isWebGL2:h,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:Z,defines:M.defines,customVertexShaderID:ht,customFragmentShaderID:vt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ft,instancing:Nt,instancingColor:Nt&&Y.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:_t===null?s.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:On,map:Rt,matcap:Kt,envMap:k,envMapMode:k&&$.mapping,envMapCubeUVHeight:q,aoMap:Fe,lightMap:Et,bumpMap:Dt,normalMap:gt,displacementMap:d&&de,emissiveMap:Gt,normalMapObjectSpace:gt&&M.normalMapType===qd,normalMapTangentSpace:gt&&M.normalMapType===Ml,metalnessMap:S,roughnessMap:_,anisotropy:O,anisotropyMap:at,clearcoat:Q,clearcoatMap:pt,clearcoatNormalMap:At,clearcoatRoughnessMap:Vt,iridescence:J,iridescenceMap:K,iridescenceThicknessMap:te,sheen:tt,sheenColorMap:Zt,sheenRoughnessMap:It,specularMap:Mt,specularColorMap:mt,specularIntensityMap:Bt,transmission:xt,transmissionMap:Qt,thicknessMap:me,gradientMap:Xt,opaque:M.transparent===!1&&M.blending===Mn,alphaMap:nt,alphaTest:C,alphaHash:st,combine:M.combine,mapUv:Rt&&x(M.map.channel),aoMapUv:Fe&&x(M.aoMap.channel),lightMapUv:Et&&x(M.lightMap.channel),bumpMapUv:Dt&&x(M.bumpMap.channel),normalMapUv:gt&&x(M.normalMap.channel),displacementMapUv:de&&x(M.displacementMap.channel),emissiveMapUv:Gt&&x(M.emissiveMap.channel),metalnessMapUv:S&&x(M.metalnessMap.channel),roughnessMapUv:_&&x(M.roughnessMap.channel),anisotropyMapUv:at&&x(M.anisotropyMap.channel),clearcoatMapUv:pt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:At&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:It&&x(M.sheenRoughnessMap.channel),specularMapUv:Mt&&x(M.specularMap.channel),specularColorMapUv:mt&&x(M.specularColorMap.channel),specularIntensityMapUv:Bt&&x(M.specularIntensityMap.channel),transmissionMapUv:Qt&&x(M.transmissionMap.channel),thicknessMapUv:me&&x(M.thicknessMap.channel),alphaMapUv:nt&&x(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(gt||O),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Ct,vertexUv2s:Tt,vertexUv3s:re,pointsUvs:Y.isPoints===!0&&!!U.attributes.uv&&(Rt||nt),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Y.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:dt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Rt&&M.map.isVideoTexture===!0&&ee.getTransfer(M.map.colorSpace)===le,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===an,flipSided:M.side===$e,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:rt&&M.extensions.derivatives===!0,extensionFragDepth:rt&&M.extensions.fragDepth===!0,extensionDrawBuffers:rt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:rt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:rt&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let N in M.defines)E.push(N),E.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(v(E,M),y(E,M),E.push(s.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function v(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function y(M,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function w(M){let E=g[M.type],N;if(E){let W=vn[E];N=yf.clone(W.uniforms)}else N=M.uniforms;return N}function I(M,E){let N;for(let W=0,Y=c.length;W<Y;W++){let L=c[W];if(L.cacheKey===E){N=L,++N.usedTimes;break}}return N===void 0&&(N=new Ag(s,E,M,r),c.push(N)),N}function A(M){if(--M.usedTimes===0){let E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function V(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:w,acquireProgram:I,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:V}}function Pg(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Lg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function _h(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function vh(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,p,g,x,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function o(u,d,p,g,x,m){let f=a(u,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,g,x,m){let f=a(u,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Lg),n.length>1&&n.sort(d||_h),i.length>1&&i.sort(d||_h)}function h(){for(let u=t,d=s.length;u<d;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Ig(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new vh,s.set(n,[a])):i>=r.length?(a=new vh,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Dg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new zt};break;case"SpotLight":e={position:new T,direction:new T,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new T,halfWidth:new T,halfHeight:new T};break}return s[t.id]=e,e}}}function Ug(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Ng=0;function kg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function zg(s,t){let e=new Dg,n=Ug(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new T);let r=new T,a=new xe,o=new xe;function l(h,u){let d=0,p=0,g=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let x=0,m=0,f=0,v=0,y=0,w=0,I=0,A=0,R=0,V=0,M=0;h.sort(kg);let E=u===!0?Math.PI:1;for(let W=0,Y=h.length;W<Y;W++){let L=h[W],U=L.color,H=L.intensity,$=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=U.r*H*E,p+=U.g*H*E,g+=U.b*H*E;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],H);M++}else if(L.isDirectionalLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){let j=L.shadow,et=n.get(L);et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,i.directionalShadow[x]=et,i.directionalShadowMap[x]=q,i.directionalShadowMatrix[x]=L.shadow.matrix,w++}i.directional[x]=X,x++}else if(L.isSpotLight){let X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(U).multiplyScalar(H*E),X.distance=$,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[f]=X;let j=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,j.updateMatrices(L),L.castShadow&&V++),i.spotLightMatrix[f]=j.matrix,L.castShadow){let et=n.get(L);et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,i.spotShadow[f]=et,i.spotShadowMap[f]=q,A++}f++}else if(L.isRectAreaLight){let X=e.get(L);X.color.copy(U).multiplyScalar(H),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[v]=X,v++}else if(L.isPointLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*E),X.distance=L.distance,X.decay=L.decay,L.castShadow){let j=L.shadow,et=n.get(L);et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,et.shadowCameraNear=j.camera.near,et.shadowCameraFar=j.camera.far,i.pointShadow[m]=et,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=L.shadow.matrix,I++}i.point[m]=X,m++}else if(L.isHemisphereLight){let X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(H*E),X.groundColor.copy(L.groundColor).multiplyScalar(H*E),i.hemi[y]=X,y++}}v>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;let N=i.hash;(N.directionalLength!==x||N.pointLength!==m||N.spotLength!==f||N.rectAreaLength!==v||N.hemiLength!==y||N.numDirectionalShadows!==w||N.numPointShadows!==I||N.numSpotShadows!==A||N.numSpotMaps!==R||N.numLightProbes!==M)&&(i.directional.length=x,i.spot.length=f,i.rectArea.length=v,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=A+R-V,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=V,i.numLightProbes=M,N.directionalLength=x,N.pointLength=m,N.spotLength=f,N.rectAreaLength=v,N.hemiLength=y,N.numDirectionalShadows=w,N.numPointShadows=I,N.numSpotShadows=A,N.numSpotMaps=R,N.numLightProbes=M,i.version=Ng++)}function c(h,u){let d=0,p=0,g=0,x=0,m=0,f=u.matrixWorldInverse;for(let v=0,y=h.length;v<y;v++){let w=h[v];if(w.isDirectionalLight){let I=i.directional[d];I.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(f),d++}else if(w.isSpotLight){let I=i.spot[g];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(f),I.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(f),g++}else if(w.isRectAreaLight){let I=i.rectArea[x];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(f),o.identity(),a.copy(w.matrixWorld),a.premultiply(f),o.extractRotation(a),I.halfWidth.set(w.width*.5,0,0),I.halfHeight.set(0,w.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){let I=i.point[p];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(f),p++}else if(w.isHemisphereLight){let I=i.hemi[m];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:i}}function Mh(s,t){let e=new zg(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Og(s,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new Mh(s,t),e.set(r,[l])):a>=o.length?(l=new Mh(s,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}var Xo=class extends bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qo=class extends bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bg=`uniform sampler2D shadow_pass;
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
}`;function Hg(s,t,e){let n=new Os,i=new lt,r=new lt,a=new he,o=new Xo({depthPacking:Xd}),l=new qo,c={},h=e.maxTextureSize,u={[si]:$e,[$e]:si,[an]:an},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Fg,fragmentShader:Bg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new ke;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new bt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ih;let f=this.type;this.render=function(A,R,V){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=s.getRenderTarget(),E=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),W=s.state;W.setBlending(ti),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let Y=f!==Un&&this.type===Un,L=f===Un&&this.type!==Un;for(let U=0,H=A.length;U<H;U++){let $=A[U],q=$.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let X=q.getFrameExtents();if(i.multiply(X),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,q.mapSize.y=r.y)),q.map===null||Y===!0||L===!0){let et=this.type!==Un?{minFilter:Pe,magFilter:Pe}:{};q.map!==null&&q.map.dispose(),q.map=new Fn(i.x,i.y,et),q.map.texture.name=$.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();let j=q.getViewportCount();for(let et=0;et<j;et++){let dt=q.getViewport(et);a.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),W.viewport(a),q.updateMatrices($,et),n=q.getFrustum(),w(R,V,q.camera,$,this.type)}q.isPointLightShadow!==!0&&this.type===Un&&v(q,V),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(M,E,N)};function v(A,R){let V=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Fn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,V,d,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,V,p,x,null)}function y(A,R,V,M){let E=null,N=V.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)E=N;else if(E=V.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let W=E.uuid,Y=R.uuid,L=c[W];L===void 0&&(L={},c[W]=L);let U=L[Y];U===void 0&&(U=E.clone(),L[Y]=U,R.addEventListener("dispose",I)),E=U}if(E.visible=R.visible,E.wireframe=R.wireframe,M===Un?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,V.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let W=s.properties.get(E);W.light=V}return E}function w(A,R,V,M,E){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Un)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld);let Y=t.update(A),L=A.material;if(Array.isArray(L)){let U=Y.groups;for(let H=0,$=U.length;H<$;H++){let q=U[H],X=L[q.materialIndex];if(X&&X.visible){let j=y(A,X,M,E);A.onBeforeShadow(s,A,R,V,Y,j,q),s.renderBufferDirect(V,null,Y,j,A,q),A.onAfterShadow(s,A,R,V,Y,j,q)}}}else if(L.visible){let U=y(A,L,M,E);A.onBeforeShadow(s,A,R,V,Y,U,null),s.renderBufferDirect(V,null,Y,U,A,null),A.onAfterShadow(s,A,R,V,Y,U,null)}}let W=A.children;for(let Y=0,L=W.length;Y<L;Y++)w(W[Y],R,V,M,E)}function I(A){A.target.removeEventListener("dispose",I);for(let V in c){let M=c[V],E=A.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function Gg(s,t,e){let n=e.isWebGL2;function i(){let C=!1,st=new he,rt=null,Ct=new he(0,0,0,0);return{setMask:function(Tt){rt!==Tt&&!C&&(s.colorMask(Tt,Tt,Tt,Tt),rt=Tt)},setLocked:function(Tt){C=Tt},setClear:function(Tt,re,ae,we,Be){Be===!0&&(Tt*=we,re*=we,ae*=we),st.set(Tt,re,ae,we),Ct.equals(st)===!1&&(s.clearColor(Tt,re,ae,we),Ct.copy(st))},reset:function(){C=!1,rt=null,Ct.set(-1,0,0,0)}}}function r(){let C=!1,st=null,rt=null,Ct=null;return{setTest:function(Tt){Tt?Ft(s.DEPTH_TEST):Rt(s.DEPTH_TEST)},setMask:function(Tt){st!==Tt&&!C&&(s.depthMask(Tt),st=Tt)},setFunc:function(Tt){if(rt!==Tt){switch(Tt){case Md:s.depthFunc(s.NEVER);break;case bd:s.depthFunc(s.ALWAYS);break;case Sd:s.depthFunc(s.LESS);break;case Dr:s.depthFunc(s.LEQUAL);break;case Ed:s.depthFunc(s.EQUAL);break;case Td:s.depthFunc(s.GEQUAL);break;case wd:s.depthFunc(s.GREATER);break;case Ad:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}rt=Tt}},setLocked:function(Tt){C=Tt},setClear:function(Tt){Ct!==Tt&&(s.clearDepth(Tt),Ct=Tt)},reset:function(){C=!1,st=null,rt=null,Ct=null}}}function a(){let C=!1,st=null,rt=null,Ct=null,Tt=null,re=null,ae=null,we=null,Be=null;return{setTest:function(oe){C||(oe?Ft(s.STENCIL_TEST):Rt(s.STENCIL_TEST))},setMask:function(oe){st!==oe&&!C&&(s.stencilMask(oe),st=oe)},setFunc:function(oe,He,_n){(rt!==oe||Ct!==He||Tt!==_n)&&(s.stencilFunc(oe,He,_n),rt=oe,Ct=He,Tt=_n)},setOp:function(oe,He,_n){(re!==oe||ae!==He||we!==_n)&&(s.stencilOp(oe,He,_n),re=oe,ae=He,we=_n)},setLocked:function(oe){C=oe},setClear:function(oe){Be!==oe&&(s.clearStencil(oe),Be=oe)},reset:function(){C=!1,st=null,rt=null,Ct=null,Tt=null,re=null,ae=null,we=null,Be=null}}}let o=new i,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,x=[],m=null,f=!1,v=null,y=null,w=null,I=null,A=null,R=null,V=null,M=new zt(0,0,0),E=0,N=!1,W=null,Y=null,L=null,U=null,H=null,$=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,X=0,j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=X>=2);let et=null,dt={},G=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),ht=new he().fromArray(G),vt=new he().fromArray(Z);function _t(C,st,rt,Ct){let Tt=new Uint8Array(4),re=s.createTexture();s.bindTexture(C,re),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ae=0;ae<rt;ae++)n&&(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)?s.texImage3D(st,0,s.RGBA,1,1,Ct,0,s.RGBA,s.UNSIGNED_BYTE,Tt):s.texImage2D(st+ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Tt);return re}let Nt={};Nt[s.TEXTURE_2D]=_t(s.TEXTURE_2D,s.TEXTURE_2D,1),Nt[s.TEXTURE_CUBE_MAP]=_t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Nt[s.TEXTURE_2D_ARRAY]=_t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Nt[s.TEXTURE_3D]=_t(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ft(s.DEPTH_TEST),l.setFunc(Dr),Gt(!1),S(nc),Ft(s.CULL_FACE),gt(ti);function Ft(C){d[C]!==!0&&(s.enable(C),d[C]=!0)}function Rt(C){d[C]!==!1&&(s.disable(C),d[C]=!1)}function Kt(C,st){return p[C]!==st?(s.bindFramebuffer(C,st),p[C]=st,n&&(C===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=st),C===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=st)),!0):!1}function k(C,st){let rt=x,Ct=!1;if(C)if(rt=g.get(st),rt===void 0&&(rt=[],g.set(st,rt)),C.isWebGLMultipleRenderTargets){let Tt=C.texture;if(rt.length!==Tt.length||rt[0]!==s.COLOR_ATTACHMENT0){for(let re=0,ae=Tt.length;re<ae;re++)rt[re]=s.COLOR_ATTACHMENT0+re;rt.length=Tt.length,Ct=!0}}else rt[0]!==s.COLOR_ATTACHMENT0&&(rt[0]=s.COLOR_ATTACHMENT0,Ct=!0);else rt[0]!==s.BACK&&(rt[0]=s.BACK,Ct=!0);Ct&&(e.isWebGL2?s.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function Fe(C){return m!==C?(s.useProgram(C),m=C,!0):!1}let Et={[vi]:s.FUNC_ADD,[ad]:s.FUNC_SUBTRACT,[od]:s.FUNC_REVERSE_SUBTRACT};if(n)Et[rc]=s.MIN,Et[ac]=s.MAX;else{let C=t.get("EXT_blend_minmax");C!==null&&(Et[rc]=C.MIN_EXT,Et[ac]=C.MAX_EXT)}let Dt={[ld]:s.ZERO,[cd]:s.ONE,[hd]:s.SRC_COLOR,[Ro]:s.SRC_ALPHA,[gd]:s.SRC_ALPHA_SATURATE,[pd]:s.DST_COLOR,[dd]:s.DST_ALPHA,[ud]:s.ONE_MINUS_SRC_COLOR,[Co]:s.ONE_MINUS_SRC_ALPHA,[md]:s.ONE_MINUS_DST_COLOR,[fd]:s.ONE_MINUS_DST_ALPHA,[xd]:s.CONSTANT_COLOR,[yd]:s.ONE_MINUS_CONSTANT_COLOR,[_d]:s.CONSTANT_ALPHA,[vd]:s.ONE_MINUS_CONSTANT_ALPHA};function gt(C,st,rt,Ct,Tt,re,ae,we,Be,oe){if(C===ti){f===!0&&(Rt(s.BLEND),f=!1);return}if(f===!1&&(Ft(s.BLEND),f=!0),C!==rd){if(C!==v||oe!==N){if((y!==vi||A!==vi)&&(s.blendEquation(s.FUNC_ADD),y=vi,A=vi),oe)switch(C){case Mn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ri:s.blendFunc(s.ONE,s.ONE);break;case ic:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Mn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ri:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ic:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}w=null,I=null,R=null,V=null,M.set(0,0,0),E=0,v=C,N=oe}return}Tt=Tt||st,re=re||rt,ae=ae||Ct,(st!==y||Tt!==A)&&(s.blendEquationSeparate(Et[st],Et[Tt]),y=st,A=Tt),(rt!==w||Ct!==I||re!==R||ae!==V)&&(s.blendFuncSeparate(Dt[rt],Dt[Ct],Dt[re],Dt[ae]),w=rt,I=Ct,R=re,V=ae),(we.equals(M)===!1||Be!==E)&&(s.blendColor(we.r,we.g,we.b,Be),M.copy(we),E=Be),v=C,N=!1}function de(C,st){C.side===an?Rt(s.CULL_FACE):Ft(s.CULL_FACE);let rt=C.side===$e;st&&(rt=!rt),Gt(rt),C.blending===Mn&&C.transparent===!1?gt(ti):gt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);let Ct=C.stencilWrite;c.setTest(Ct),Ct&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),O(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ft(s.SAMPLE_ALPHA_TO_COVERAGE):Rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(C){W!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),W=C)}function S(C){C!==id?(Ft(s.CULL_FACE),C!==Y&&(C===nc?s.cullFace(s.BACK):C===sd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Rt(s.CULL_FACE),Y=C}function _(C){C!==L&&(q&&s.lineWidth(C),L=C)}function O(C,st,rt){C?(Ft(s.POLYGON_OFFSET_FILL),(U!==st||H!==rt)&&(s.polygonOffset(st,rt),U=st,H=rt)):Rt(s.POLYGON_OFFSET_FILL)}function Q(C){C?Ft(s.SCISSOR_TEST):Rt(s.SCISSOR_TEST)}function J(C){C===void 0&&(C=s.TEXTURE0+$-1),et!==C&&(s.activeTexture(C),et=C)}function tt(C,st,rt){rt===void 0&&(et===null?rt=s.TEXTURE0+$-1:rt=et);let Ct=dt[rt];Ct===void 0&&(Ct={type:void 0,texture:void 0},dt[rt]=Ct),(Ct.type!==C||Ct.texture!==st)&&(et!==rt&&(s.activeTexture(rt),et=rt),s.bindTexture(C,st||Nt[C]),Ct.type=C,Ct.texture=st)}function xt(){let C=dt[et];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function at(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function At(){try{s.texSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Vt(){try{s.texSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function K(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Zt(){try{s.texStorage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function It(){try{s.texStorage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Mt(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function mt(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Bt(C){ht.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),ht.copy(C))}function Qt(C){vt.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),vt.copy(C))}function me(C,st){let rt=u.get(st);rt===void 0&&(rt=new WeakMap,u.set(st,rt));let Ct=rt.get(C);Ct===void 0&&(Ct=s.getUniformBlockIndex(st,C.name),rt.set(C,Ct))}function Xt(C,st){let Ct=u.get(st).get(C);h.get(st)!==Ct&&(s.uniformBlockBinding(st,Ct,C.__bindingPointIndex),h.set(st,Ct))}function nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},et=null,dt={},p={},g=new WeakMap,x=[],m=null,f=!1,v=null,y=null,w=null,I=null,A=null,R=null,V=null,M=new zt(0,0,0),E=0,N=!1,W=null,Y=null,L=null,U=null,H=null,ht.set(0,0,s.canvas.width,s.canvas.height),vt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ft,disable:Rt,bindFramebuffer:Kt,drawBuffers:k,useProgram:Fe,setBlending:gt,setMaterial:de,setFlipSided:Gt,setCullFace:S,setLineWidth:_,setPolygonOffset:O,setScissorTest:Q,activeTexture:J,bindTexture:tt,unbindTexture:xt,compressedTexImage2D:at,compressedTexImage3D:pt,texImage2D:Mt,texImage3D:mt,updateUBOMapping:me,uniformBlockBinding:Xt,texStorage2D:Zt,texStorage3D:It,texSubImage2D:At,texSubImage3D:Vt,compressedTexSubImage2D:K,compressedTexSubImage3D:te,scissor:Bt,viewport:Qt,reset:nt}}function Vg(s,t,e,n,i,r,a){let o=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return p?new OffscreenCanvas(S,_):Hr("canvas")}function x(S,_,O,Q){let J=1;if((S.width>Q||S.height>Q)&&(J=Q/Math.max(S.width,S.height)),J<1||_===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let tt=_?Uo:Math.floor,xt=tt(J*S.width),at=tt(J*S.height);u===void 0&&(u=g(xt,at));let pt=O?g(xt,at):u;return pt.width=xt,pt.height=at,pt.getContext("2d").drawImage(S,0,0,xt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+xt+"x"+at+")."),pt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return Oc(S.width)&&Oc(S.height)}function f(S){return o?!1:S.wrapS!==mn||S.wrapT!==mn||S.minFilter!==Pe&&S.minFilter!==Ye}function v(S,_){return S.generateMipmaps&&_&&S.minFilter!==Pe&&S.minFilter!==Ye}function y(S){s.generateMipmap(S)}function w(S,_,O,Q,J=!1){if(o===!1)return _;if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let tt=_;if(_===s.RED&&(O===s.FLOAT&&(tt=s.R32F),O===s.HALF_FLOAT&&(tt=s.R16F),O===s.UNSIGNED_BYTE&&(tt=s.R8)),_===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(tt=s.R8UI),O===s.UNSIGNED_SHORT&&(tt=s.R16UI),O===s.UNSIGNED_INT&&(tt=s.R32UI),O===s.BYTE&&(tt=s.R8I),O===s.SHORT&&(tt=s.R16I),O===s.INT&&(tt=s.R32I)),_===s.RG&&(O===s.FLOAT&&(tt=s.RG32F),O===s.HALF_FLOAT&&(tt=s.RG16F),O===s.UNSIGNED_BYTE&&(tt=s.RG8)),_===s.RGBA){let xt=J?kr:ee.getTransfer(Q);O===s.FLOAT&&(tt=s.RGBA32F),O===s.HALF_FLOAT&&(tt=s.RGBA16F),O===s.UNSIGNED_BYTE&&(tt=xt===le?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function I(S,_,O){return v(S,O)===!0||S.isFramebufferTexture&&S.minFilter!==Pe&&S.minFilter!==Ye?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function A(S){return S===Pe||S===oc||S===Va?s.NEAREST:s.LINEAR}function R(S){let _=S.target;_.removeEventListener("dispose",R),M(_),_.isVideoTexture&&h.delete(_)}function V(S){let _=S.target;_.removeEventListener("dispose",V),N(_)}function M(S){let _=n.get(S);if(_.__webglInit===void 0)return;let O=S.source,Q=d.get(O);if(Q){let J=Q[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(S),Object.keys(Q).length===0&&d.delete(O)}n.remove(S)}function E(S){let _=n.get(S);s.deleteTexture(_.__webglTexture);let O=S.source,Q=d.get(O);delete Q[_.__cacheKey],a.memory.textures--}function N(S){let _=S.texture,O=n.get(S),Q=n.get(_);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(O.__webglFramebuffer[J]))for(let tt=0;tt<O.__webglFramebuffer[J].length;tt++)s.deleteFramebuffer(O.__webglFramebuffer[J][tt]);else s.deleteFramebuffer(O.__webglFramebuffer[J]);O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer[J])}else{if(Array.isArray(O.__webglFramebuffer))for(let J=0;J<O.__webglFramebuffer.length;J++)s.deleteFramebuffer(O.__webglFramebuffer[J]);else s.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&s.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let J=0;J<O.__webglColorRenderbuffer.length;J++)O.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(O.__webglColorRenderbuffer[J]);O.__webglDepthRenderbuffer&&s.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let J=0,tt=_.length;J<tt;J++){let xt=n.get(_[J]);xt.__webglTexture&&(s.deleteTexture(xt.__webglTexture),a.memory.textures--),n.remove(_[J])}n.remove(_),n.remove(S)}let W=0;function Y(){W=0}function L(){let S=W;return S>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+i.maxTextures),W+=1,S}function U(S){let _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function H(S,_){let O=n.get(S);if(S.isVideoTexture&&de(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){let Q=S.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(O,S,_);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+_)}function $(S,_){let O=n.get(S);if(S.version>0&&O.__version!==S.version){ht(O,S,_);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+_)}function q(S,_){let O=n.get(S);if(S.version>0&&O.__version!==S.version){ht(O,S,_);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+_)}function X(S,_){let O=n.get(S);if(S.version>0&&O.__version!==S.version){vt(O,S,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+_)}let j={[os]:s.REPEAT,[mn]:s.CLAMP_TO_EDGE,[Lo]:s.MIRRORED_REPEAT},et={[Pe]:s.NEAREST,[oc]:s.NEAREST_MIPMAP_NEAREST,[Va]:s.NEAREST_MIPMAP_LINEAR,[Ye]:s.LINEAR,[Nd]:s.LINEAR_MIPMAP_NEAREST,[wi]:s.LINEAR_MIPMAP_LINEAR},dt={[Yd]:s.NEVER,[Qd]:s.ALWAYS,[$d]:s.LESS,[Gh]:s.LEQUAL,[Zd]:s.EQUAL,[jd]:s.GEQUAL,[Kd]:s.GREATER,[Jd]:s.NOTEQUAL};function G(S,_,O){if(O?(s.texParameteri(S,s.TEXTURE_WRAP_S,j[_.wrapS]),s.texParameteri(S,s.TEXTURE_WRAP_T,j[_.wrapT]),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,j[_.wrapR]),s.texParameteri(S,s.TEXTURE_MAG_FILTER,et[_.magFilter]),s.texParameteri(S,s.TEXTURE_MIN_FILTER,et[_.minFilter])):(s.texParameteri(S,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(S,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(_.wrapS!==mn||_.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(S,s.TEXTURE_MAG_FILTER,A(_.magFilter)),s.texParameteri(S,s.TEXTURE_MIN_FILTER,A(_.minFilter)),_.minFilter!==Pe&&_.minFilter!==Ye&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(s.texParameteri(S,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(S,s.TEXTURE_COMPARE_FUNC,dt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let Q=t.get("EXT_texture_filter_anisotropic");if(_.magFilter===Pe||_.minFilter!==Va&&_.minFilter!==wi||_.type===Qn&&t.has("OES_texture_float_linear")===!1||o===!1&&_.type===zs&&t.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(s.texParameterf(S,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function Z(S,_){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",R));let Q=_.source,J=d.get(Q);J===void 0&&(J={},d.set(Q,J));let tt=U(_);if(tt!==S.__cacheKey){J[tt]===void 0&&(J[tt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[tt].usedTimes++;let xt=J[S.__cacheKey];xt!==void 0&&(J[S.__cacheKey].usedTimes--,xt.usedTimes===0&&E(_)),S.__cacheKey=tt,S.__webglTexture=J[tt].texture}return O}function ht(S,_,O){let Q=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=s.TEXTURE_3D);let J=Z(S,_),tt=_.source;e.bindTexture(Q,S.__webglTexture,s.TEXTURE0+O);let xt=n.get(tt);if(tt.version!==xt.__version||J===!0){e.activeTexture(s.TEXTURE0+O);let at=ee.getPrimaries(ee.workingColorSpace),pt=_.colorSpace===on?null:ee.getPrimaries(_.colorSpace),At=_.colorSpace===on||at===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let Vt=f(_)&&m(_.image)===!1,K=x(_.image,Vt,!1,i.maxTextureSize);K=Gt(_,K);let te=m(K)||o,Zt=r.convert(_.format,_.colorSpace),It=r.convert(_.type),Mt=w(_.internalFormat,Zt,It,_.colorSpace,_.isVideoTexture);G(Q,_,te);let mt,Bt=_.mipmaps,Qt=o&&_.isVideoTexture!==!0&&Mt!==Bh,me=xt.__version===void 0||J===!0,Xt=I(_,K,te);if(_.isDepthTexture)Mt=s.DEPTH_COMPONENT,o?_.type===Qn?Mt=s.DEPTH_COMPONENT32F:_.type===jn?Mt=s.DEPTH_COMPONENT24:_.type===Si?Mt=s.DEPTH24_STENCIL8:Mt=s.DEPTH_COMPONENT16:_.type===Qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Ei&&Mt===s.DEPTH_COMPONENT&&_.type!==vl&&_.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=jn,It=r.convert(_.type)),_.format===ls&&Mt===s.DEPTH_COMPONENT&&(Mt=s.DEPTH_STENCIL,_.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Si,It=r.convert(_.type))),me&&(Qt?e.texStorage2D(s.TEXTURE_2D,1,Mt,K.width,K.height):e.texImage2D(s.TEXTURE_2D,0,Mt,K.width,K.height,0,Zt,It,null));else if(_.isDataTexture)if(Bt.length>0&&te){Qt&&me&&e.texStorage2D(s.TEXTURE_2D,Xt,Mt,Bt[0].width,Bt[0].height);for(let nt=0,C=Bt.length;nt<C;nt++)mt=Bt[nt],Qt?e.texSubImage2D(s.TEXTURE_2D,nt,0,0,mt.width,mt.height,Zt,It,mt.data):e.texImage2D(s.TEXTURE_2D,nt,Mt,mt.width,mt.height,0,Zt,It,mt.data);_.generateMipmaps=!1}else Qt?(me&&e.texStorage2D(s.TEXTURE_2D,Xt,Mt,K.width,K.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,K.width,K.height,Zt,It,K.data)):e.texImage2D(s.TEXTURE_2D,0,Mt,K.width,K.height,0,Zt,It,K.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Qt&&me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Xt,Mt,Bt[0].width,Bt[0].height,K.depth);for(let nt=0,C=Bt.length;nt<C;nt++)mt=Bt[nt],_.format!==gn?Zt!==null?Qt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,mt.width,mt.height,K.depth,Zt,mt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,nt,Mt,mt.width,mt.height,K.depth,0,mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,mt.width,mt.height,K.depth,Zt,It,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,nt,Mt,mt.width,mt.height,K.depth,0,Zt,It,mt.data)}else{Qt&&me&&e.texStorage2D(s.TEXTURE_2D,Xt,Mt,Bt[0].width,Bt[0].height);for(let nt=0,C=Bt.length;nt<C;nt++)mt=Bt[nt],_.format!==gn?Zt!==null?Qt?e.compressedTexSubImage2D(s.TEXTURE_2D,nt,0,0,mt.width,mt.height,Zt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,nt,Mt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage2D(s.TEXTURE_2D,nt,0,0,mt.width,mt.height,Zt,It,mt.data):e.texImage2D(s.TEXTURE_2D,nt,Mt,mt.width,mt.height,0,Zt,It,mt.data)}else if(_.isDataArrayTexture)Qt?(me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Xt,Mt,K.width,K.height,K.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Zt,It,K.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Mt,K.width,K.height,K.depth,0,Zt,It,K.data);else if(_.isData3DTexture)Qt?(me&&e.texStorage3D(s.TEXTURE_3D,Xt,Mt,K.width,K.height,K.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Zt,It,K.data)):e.texImage3D(s.TEXTURE_3D,0,Mt,K.width,K.height,K.depth,0,Zt,It,K.data);else if(_.isFramebufferTexture){if(me)if(Qt)e.texStorage2D(s.TEXTURE_2D,Xt,Mt,K.width,K.height);else{let nt=K.width,C=K.height;for(let st=0;st<Xt;st++)e.texImage2D(s.TEXTURE_2D,st,Mt,nt,C,0,Zt,It,null),nt>>=1,C>>=1}}else if(Bt.length>0&&te){Qt&&me&&e.texStorage2D(s.TEXTURE_2D,Xt,Mt,Bt[0].width,Bt[0].height);for(let nt=0,C=Bt.length;nt<C;nt++)mt=Bt[nt],Qt?e.texSubImage2D(s.TEXTURE_2D,nt,0,0,Zt,It,mt):e.texImage2D(s.TEXTURE_2D,nt,Mt,Zt,It,mt);_.generateMipmaps=!1}else Qt?(me&&e.texStorage2D(s.TEXTURE_2D,Xt,Mt,K.width,K.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Zt,It,K)):e.texImage2D(s.TEXTURE_2D,0,Mt,Zt,It,K);v(_,te)&&y(Q),xt.__version=tt.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function vt(S,_,O){if(_.image.length!==6)return;let Q=Z(S,_),J=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,S.__webglTexture,s.TEXTURE0+O);let tt=n.get(J);if(J.version!==tt.__version||Q===!0){e.activeTexture(s.TEXTURE0+O);let xt=ee.getPrimaries(ee.workingColorSpace),at=_.colorSpace===on?null:ee.getPrimaries(_.colorSpace),pt=_.colorSpace===on||xt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let At=_.isCompressedTexture||_.image[0].isCompressedTexture,Vt=_.image[0]&&_.image[0].isDataTexture,K=[];for(let nt=0;nt<6;nt++)!At&&!Vt?K[nt]=x(_.image[nt],!1,!0,i.maxCubemapSize):K[nt]=Vt?_.image[nt].image:_.image[nt],K[nt]=Gt(_,K[nt]);let te=K[0],Zt=m(te)||o,It=r.convert(_.format,_.colorSpace),Mt=r.convert(_.type),mt=w(_.internalFormat,It,Mt,_.colorSpace),Bt=o&&_.isVideoTexture!==!0,Qt=tt.__version===void 0||Q===!0,me=I(_,te,Zt);G(s.TEXTURE_CUBE_MAP,_,Zt);let Xt;if(At){Bt&&Qt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,me,mt,te.width,te.height);for(let nt=0;nt<6;nt++){Xt=K[nt].mipmaps;for(let C=0;C<Xt.length;C++){let st=Xt[C];_.format!==gn?It!==null?Bt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,0,0,st.width,st.height,It,st.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,mt,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,0,0,st.width,st.height,It,Mt,st.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,mt,st.width,st.height,0,It,Mt,st.data)}}}else{Xt=_.mipmaps,Bt&&Qt&&(Xt.length>0&&me++,e.texStorage2D(s.TEXTURE_CUBE_MAP,me,mt,K[0].width,K[0].height));for(let nt=0;nt<6;nt++)if(Vt){Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,K[nt].width,K[nt].height,It,Mt,K[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,mt,K[nt].width,K[nt].height,0,It,Mt,K[nt].data);for(let C=0;C<Xt.length;C++){let rt=Xt[C].image[nt].image;Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,0,0,rt.width,rt.height,It,Mt,rt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,mt,rt.width,rt.height,0,It,Mt,rt.data)}}else{Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,It,Mt,K[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,mt,It,Mt,K[nt]);for(let C=0;C<Xt.length;C++){let st=Xt[C];Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,0,0,It,Mt,st.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,mt,It,Mt,st.image[nt])}}}v(_,Zt)&&y(s.TEXTURE_CUBE_MAP),tt.__version=J.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function _t(S,_,O,Q,J,tt){let xt=r.convert(O.format,O.colorSpace),at=r.convert(O.type),pt=w(O.internalFormat,xt,at,O.colorSpace);if(!n.get(_).__hasExternalTextures){let Vt=Math.max(1,_.width>>tt),K=Math.max(1,_.height>>tt);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,tt,pt,Vt,K,_.depth,0,xt,at,null):e.texImage2D(J,tt,pt,Vt,K,0,xt,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,S),gt(_)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,J,n.get(O).__webglTexture,0,Dt(_)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,J,n.get(O).__webglTexture,tt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(S,_,O){if(s.bindRenderbuffer(s.RENDERBUFFER,S),_.depthBuffer&&!_.stencilBuffer){let Q=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(O||gt(_)){let J=_.depthTexture;J&&J.isDepthTexture&&(J.type===Qn?Q=s.DEPTH_COMPONENT32F:J.type===jn&&(Q=s.DEPTH_COMPONENT24));let tt=Dt(_);gt(_)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,Q,_.width,_.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,Q,_.width,_.height)}else s.renderbufferStorage(s.RENDERBUFFER,Q,_.width,_.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,S)}else if(_.depthBuffer&&_.stencilBuffer){let Q=Dt(_);O&&gt(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,_.width,_.height):gt(_)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,S)}else{let Q=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let J=0;J<Q.length;J++){let tt=Q[J],xt=r.convert(tt.format,tt.colorSpace),at=r.convert(tt.type),pt=w(tt.internalFormat,xt,at,tt.colorSpace),At=Dt(_);O&&gt(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,At,pt,_.width,_.height):gt(_)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At,pt,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,pt,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ft(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H(_.depthTexture,0);let Q=n.get(_.depthTexture).__webglTexture,J=Dt(_);if(_.depthTexture.format===Ei)gt(_)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(_.depthTexture.format===ls)gt(_)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Rt(S){let _=n.get(S),O=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ft(_.__webglFramebuffer,S)}else if(O){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]=s.createRenderbuffer(),Nt(_.__webglDepthbuffer[Q],S,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=s.createRenderbuffer(),Nt(_.__webglDepthbuffer,S,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(S,_,O){let Q=n.get(S);_!==void 0&&_t(Q.__webglFramebuffer,S,S.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Rt(S)}function k(S){let _=S.texture,O=n.get(S),Q=n.get(_);S.addEventListener("dispose",V),S.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=_.version,a.memory.textures++);let J=S.isWebGLCubeRenderTarget===!0,tt=S.isWebGLMultipleRenderTargets===!0,xt=m(S)||o;if(J){O.__webglFramebuffer=[];for(let at=0;at<6;at++)if(o&&_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[at]=[];for(let pt=0;pt<_.mipmaps.length;pt++)O.__webglFramebuffer[at][pt]=s.createFramebuffer()}else O.__webglFramebuffer[at]=s.createFramebuffer()}else{if(o&&_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let at=0;at<_.mipmaps.length;at++)O.__webglFramebuffer[at]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(tt)if(i.drawBuffers){let at=S.texture;for(let pt=0,At=at.length;pt<At;pt++){let Vt=n.get(at[pt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&gt(S)===!1){let at=tt?_:[_];O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let pt=0;pt<at.length;pt++){let At=at[pt];O.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[pt]);let Vt=r.convert(At.format,At.colorSpace),K=r.convert(At.type),te=w(At.internalFormat,Vt,K,At.colorSpace,S.isXRRenderTarget===!0),Zt=Dt(S);s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,te,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,O.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Nt(O.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),G(s.TEXTURE_CUBE_MAP,_,xt);for(let at=0;at<6;at++)if(o&&_.mipmaps&&_.mipmaps.length>0)for(let pt=0;pt<_.mipmaps.length;pt++)_t(O.__webglFramebuffer[at][pt],S,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,pt);else _t(O.__webglFramebuffer[at],S,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);v(_,xt)&&y(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){let at=S.texture;for(let pt=0,At=at.length;pt<At;pt++){let Vt=at[pt],K=n.get(Vt);e.bindTexture(s.TEXTURE_2D,K.__webglTexture),G(s.TEXTURE_2D,Vt,xt),_t(O.__webglFramebuffer,S,Vt,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,0),v(Vt,xt)&&y(s.TEXTURE_2D)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?at=S.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,Q.__webglTexture),G(at,_,xt),o&&_.mipmaps&&_.mipmaps.length>0)for(let pt=0;pt<_.mipmaps.length;pt++)_t(O.__webglFramebuffer[pt],S,_,s.COLOR_ATTACHMENT0,at,pt);else _t(O.__webglFramebuffer,S,_,s.COLOR_ATTACHMENT0,at,0);v(_,xt)&&y(at),e.unbindTexture()}S.depthBuffer&&Rt(S)}function Fe(S){let _=m(S)||o,O=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Q=0,J=O.length;Q<J;Q++){let tt=O[Q];if(v(tt,_)){let xt=S.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,at=n.get(tt).__webglTexture;e.bindTexture(xt,at),y(xt),e.unbindTexture()}}}function Et(S){if(o&&S.samples>0&&gt(S)===!1){let _=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],O=S.width,Q=S.height,J=s.COLOR_BUFFER_BIT,tt=[],xt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=n.get(S),pt=S.isWebGLMultipleRenderTargets===!0;if(pt)for(let At=0;At<_.length;At++)e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let At=0;At<_.length;At++){tt.push(s.COLOR_ATTACHMENT0+At),S.depthBuffer&&tt.push(xt);let Vt=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(Vt===!1&&(S.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),S.stencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),pt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,at.__webglColorRenderbuffer[At]),Vt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[xt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[xt])),pt){let K=n.get(_[At]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,K,0)}s.blitFramebuffer(0,0,O,Q,0,0,O,Q,J,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let At=0;At<_.length;At++){e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,at.__webglColorRenderbuffer[At]);let Vt=n.get(_[At]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,Vt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function Dt(S){return Math.min(i.maxSamples,S.samples)}function gt(S){let _=n.get(S);return o&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function de(S){let _=a.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function Gt(S,_){let O=S.colorSpace,Q=S.format,J=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Do||O!==On&&O!==on&&(ee.getTransfer(O)===le?o===!1?t.has("EXT_sRGB")===!0&&Q===gn?(S.format=Do,S.minFilter=Ye,S.generateMipmaps=!1):_=Gr.sRGBToLinear(_):(Q!==gn||J!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}this.allocateTextureUnit=L,this.resetTextureUnits=Y,this.setTexture2D=H,this.setTexture2DArray=$,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=Kt,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=gt}function Wg(s,t,e){let n=e.isWebGL2;function i(r,a=on){let o,l=ee.getTransfer(a);if(r===ni)return s.UNSIGNED_BYTE;if(r===Nh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===kh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===kd)return s.BYTE;if(r===zd)return s.SHORT;if(r===vl)return s.UNSIGNED_SHORT;if(r===Uh)return s.INT;if(r===jn)return s.UNSIGNED_INT;if(r===Qn)return s.FLOAT;if(r===zs)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Od)return s.ALPHA;if(r===gn)return s.RGBA;if(r===Fd)return s.LUMINANCE;if(r===Bd)return s.LUMINANCE_ALPHA;if(r===Ei)return s.DEPTH_COMPONENT;if(r===ls)return s.DEPTH_STENCIL;if(r===Do)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Hd)return s.RED;if(r===zh)return s.RED_INTEGER;if(r===Gd)return s.RG;if(r===Oh)return s.RG_INTEGER;if(r===Fh)return s.RGBA_INTEGER;if(r===Wa||r===Xa||r===qa||r===Ya)if(l===le)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Wa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ya)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Wa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ya)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lc||r===cc||r===hc||r===uc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===lc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===hc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===uc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bh)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===dc||r===fc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===dc)return l===le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===fc)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===pc||r===mc||r===gc||r===xc||r===yc||r===_c||r===vc||r===Mc||r===bc||r===Sc||r===Ec||r===Tc||r===wc||r===Ac)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===pc)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mc)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gc)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xc)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yc)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_c)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vc)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mc)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bc)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sc)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ec)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Tc)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wc)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ac)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$a||r===Rc||r===Cc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===$a)return l===le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Cc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Vd||r===Pc||r===Lc||r===Ic)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===$a)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Pc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Lc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ic)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Si?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Yo=class extends Me{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Lt=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xg={type:"move"},Ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Lt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},$o=class extends ai{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,x=e.getContextAttributes(),m=null,f=null,v=[],y=[],w=new lt,I=null,A=new Me;A.layers.enable(1),A.viewport=new he;let R=new Me;R.layers.enable(2),R.viewport=new he;let V=[A,R],M=new Yo;M.layers.enable(1),M.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=v[G];return Z===void 0&&(Z=new Ds,v[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=v[G];return Z===void 0&&(Z=new Ds,v[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=v[G];return Z===void 0&&(Z=new Ds,v[G]=Z),Z.getHandSpace()};function W(G){let Z=y.indexOf(G.inputSource);if(Z===-1)return;let ht=v[Z];ht!==void 0&&(ht.update(G.inputSource,G.frame,c||a),ht.dispatchEvent({type:G.type,data:G.inputSource}))}function Y(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",L);for(let G=0;G<v.length;G++){let Z=y[G];Z!==null&&(y[G]=null,v[G].disconnect(Z))}E=null,N=null,t.setRenderTarget(m),p=null,d=null,u=null,i=null,f=null,dt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(w),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Z={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Fn(p.framebufferWidth,p.framebufferHeight,{format:gn,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let Z=null,ht=null,vt=null;x.depth&&(vt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=x.stencil?ls:Ei,ht=x.stencil?Si:jn);let _t={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(_t),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new Fn(d.textureWidth,d.textureHeight,{format:gn,type:ni,depthTexture:new Qr(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Nt=t.properties.get(f);Nt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),dt.setContext(i),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(G){for(let Z=0;Z<G.removed.length;Z++){let ht=G.removed[Z],vt=y.indexOf(ht);vt>=0&&(y[vt]=null,v[vt].disconnect(ht))}for(let Z=0;Z<G.added.length;Z++){let ht=G.added[Z],vt=y.indexOf(ht);if(vt===-1){for(let Nt=0;Nt<v.length;Nt++)if(Nt>=y.length){y.push(ht),vt=Nt;break}else if(y[Nt]===null){y[Nt]=ht,vt=Nt;break}if(vt===-1)break}let _t=v[vt];_t&&_t.connect(ht)}}let U=new T,H=new T;function $(G,Z,ht){U.setFromMatrixPosition(Z.matrixWorld),H.setFromMatrixPosition(ht.matrixWorld);let vt=U.distanceTo(H),_t=Z.projectionMatrix.elements,Nt=ht.projectionMatrix.elements,Ft=_t[14]/(_t[10]-1),Rt=_t[14]/(_t[10]+1),Kt=(_t[9]+1)/_t[5],k=(_t[9]-1)/_t[5],Fe=(_t[8]-1)/_t[0],Et=(Nt[8]+1)/Nt[0],Dt=Ft*Fe,gt=Ft*Et,de=vt/(-Fe+Et),Gt=de*-Fe;Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Gt),G.translateZ(de),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let S=Ft+de,_=Rt+de,O=Dt-Gt,Q=gt+(vt-Gt),J=Kt*Rt/_*S,tt=k*Rt/_*S;G.projectionMatrix.makePerspective(O,Q,J,tt,S,_),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function q(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;M.near=R.near=A.near=G.near,M.far=R.far=A.far=G.far,(E!==M.near||N!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,N=M.far);let Z=G.parent,ht=M.cameras;q(M,Z);for(let vt=0;vt<ht.length;vt++)q(ht[vt],Z);ht.length===2?$(M,A,R):M.projectionMatrix.copy(A.projectionMatrix),X(G,M,Z)};function X(G,Z,ht){ht===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(ht.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Br*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let j=null;function et(G,Z){if(h=Z.getViewerPose(c||a),g=Z,h!==null){let ht=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let vt=!1;ht.length!==M.cameras.length&&(M.cameras.length=0,vt=!0);for(let _t=0;_t<ht.length;_t++){let Nt=ht[_t],Ft=null;if(p!==null)Ft=p.getViewport(Nt);else{let Kt=u.getViewSubImage(d,Nt);Ft=Kt.viewport,_t===0&&(t.setRenderTargetTextures(f,Kt.colorTexture,d.ignoreDepthValues?void 0:Kt.depthStencilTexture),t.setRenderTarget(f))}let Rt=V[_t];Rt===void 0&&(Rt=new Me,Rt.layers.enable(_t),Rt.viewport=new he,V[_t]=Rt),Rt.matrix.fromArray(Nt.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Nt.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),_t===0&&(M.matrix.copy(Rt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),vt===!0&&M.cameras.push(Rt)}}for(let ht=0;ht<v.length;ht++){let vt=y[ht],_t=v[ht];vt!==null&&_t!==void 0&&_t.update(vt,Z,c||a)}j&&j(G,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}let dt=new qh;dt.setAnimationLoop(et),this.setAnimationLoop=function(G){j=G},this.dispose=function(){}}};function qg(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Xh(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,v,y,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,w)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===$e&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===$e&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v=t.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let y=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===$e&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Yg(s,t,e,n){let i={},r={},a=[],o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,y){let w=y.program;n.uniformBlockBinding(v,w)}function c(v,y){let w=i[v.id];w===void 0&&(g(v),w=h(v),i[v.id]=w,v.addEventListener("dispose",m));let I=y.program;n.updateUBOMapping(v,I);let A=t.render.frame;r[v.id]!==A&&(d(v),r[v.id]=A)}function h(v){let y=u();v.__bindingPointIndex=y;let w=s.createBuffer(),I=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,I,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,w),w}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=i[v.id],w=v.uniforms,I=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let A=0,R=w.length;A<R;A++){let V=Array.isArray(w[A])?w[A]:[w[A]];for(let M=0,E=V.length;M<E;M++){let N=V[M];if(p(N,A,M,I)===!0){let W=N.__offset,Y=Array.isArray(N.value)?N.value:[N.value],L=0;for(let U=0;U<Y.length;U++){let H=Y[U],$=x(H);typeof H=="number"||typeof H=="boolean"?(N.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,W+L,N.__data)):H.isMatrix3?(N.__data[0]=H.elements[0],N.__data[1]=H.elements[1],N.__data[2]=H.elements[2],N.__data[3]=0,N.__data[4]=H.elements[3],N.__data[5]=H.elements[4],N.__data[6]=H.elements[5],N.__data[7]=0,N.__data[8]=H.elements[6],N.__data[9]=H.elements[7],N.__data[10]=H.elements[8],N.__data[11]=0):(H.toArray(N.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,W,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(v,y,w,I){let A=v.value,R=y+"_"+w;if(I[R]===void 0)return typeof A=="number"||typeof A=="boolean"?I[R]=A:I[R]=A.clone(),!0;{let V=I[R];if(typeof A=="number"||typeof A=="boolean"){if(V!==A)return I[R]=A,!0}else if(V.equals(A)===!1)return V.copy(A),!0}return!1}function g(v){let y=v.uniforms,w=0,I=16;for(let R=0,V=y.length;R<V;R++){let M=Array.isArray(y[R])?y[R]:[y[R]];for(let E=0,N=M.length;E<N;E++){let W=M[E],Y=Array.isArray(W.value)?W.value:[W.value];for(let L=0,U=Y.length;L<U;L++){let H=Y[L],$=x(H),q=w%I;q!==0&&I-q<$.boundary&&(w+=I-q),W.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=w,w+=$.storage}}}let A=w%I;return A>0&&(w+=I-A),v.__size=w,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let w=a.indexOf(y.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function f(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}var Fs=class{constructor(t={}){let{canvas:e=ef(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let p=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,f=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this._useLegacyLights=!1,this.toneMapping=ei,this.toneMappingExposure=1;let y=this,w=!1,I=0,A=0,R=null,V=-1,M=null,E=new he,N=new he,W=null,Y=new zt(0),L=0,U=e.width,H=e.height,$=1,q=null,X=null,j=new he(0,0,U,H),et=new he(0,0,U,H),dt=!1,G=new Os,Z=!1,ht=!1,vt=null,_t=new xe,Nt=new lt,Ft=new T,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Kt(){return R===null?$:1}let k=n;function Fe(b,D){for(let F=0;F<b.length;F++){let B=b[F],z=e.getContext(B,D);if(z!==null)return z}return null}try{let b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",st,!1),k===null){let D=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&D.shift(),k=Fe(D,b),k===null)throw Fe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Et,Dt,gt,de,Gt,S,_,O,Q,J,tt,xt,at,pt,At,Vt,K,te,Zt,It,Mt,mt,Bt,Qt;function me(){Et=new d0(k),Dt=new a0(k,Et,t),Et.init(Dt),mt=new Wg(k,Et,Dt),gt=new Gg(k,Et,Dt),de=new m0(k),Gt=new Pg,S=new Vg(k,Et,gt,Gt,Dt,mt,de),_=new l0(y),O=new u0(y),Q=new Sf(k,Dt),Bt=new s0(k,Et,Q,Dt),J=new f0(k,Q,de,Bt),tt=new _0(k,J,Q,de),Zt=new y0(k,Dt,S),Vt=new o0(Gt),xt=new Cg(y,_,O,Et,Dt,Bt,Vt),at=new qg(y,Gt),pt=new Ig,At=new Og(Et,Dt),te=new i0(y,_,O,gt,tt,d,l),K=new Hg(y,tt,Dt),Qt=new Yg(k,de,Dt,gt),It=new r0(k,Et,de,Dt),Mt=new p0(k,Et,de,Dt),de.programs=xt.programs,y.capabilities=Dt,y.extensions=Et,y.properties=Gt,y.renderLists=pt,y.shadowMap=K,y.state=gt,y.info=de}me();let Xt=new $o(y,k);this.xr=Xt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let b=Et.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Et.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(U,H,!1))},this.getSize=function(b){return b.set(U,H)},this.setSize=function(b,D,F=!0){if(Xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,H=D,e.width=Math.floor(b*$),e.height=Math.floor(D*$),F===!0&&(e.style.width=b+"px",e.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(U*$,H*$).floor()},this.setDrawingBufferSize=function(b,D,F){U=b,H=D,$=F,e.width=Math.floor(b*F),e.height=Math.floor(D*F),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(j)},this.setViewport=function(b,D,F,B){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,D,F,B),gt.viewport(E.copy(j).multiplyScalar($).floor())},this.getScissor=function(b){return b.copy(et)},this.setScissor=function(b,D,F,B){b.isVector4?et.set(b.x,b.y,b.z,b.w):et.set(b,D,F,B),gt.scissor(N.copy(et).multiplyScalar($).floor())},this.getScissorTest=function(){return dt},this.setScissorTest=function(b){gt.setScissorTest(dt=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){X=b},this.getClearColor=function(b){return b.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(b=!0,D=!0,F=!0){let B=0;if(b){let z=!1;if(R!==null){let ut=R.texture.format;z=ut===Fh||ut===Oh||ut===zh}if(z){let ut=R.texture.type,yt=ut===ni||ut===jn||ut===vl||ut===Si||ut===Nh||ut===kh,wt=te.getClearColor(),Pt=te.getClearAlpha(),Wt=wt.r,Ut=wt.g,kt=wt.b;yt?(p[0]=Wt,p[1]=Ut,p[2]=kt,p[3]=Pt,k.clearBufferuiv(k.COLOR,0,p)):(g[0]=Wt,g[1]=Ut,g[2]=kt,g[3]=Pt,k.clearBufferiv(k.COLOR,0,g))}else B|=k.COLOR_BUFFER_BIT}D&&(B|=k.DEPTH_BUFFER_BIT),F&&(B|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",st,!1),pt.dispose(),At.dispose(),Gt.dispose(),_.dispose(),O.dispose(),tt.dispose(),Bt.dispose(),Qt.dispose(),xt.dispose(),Xt.dispose(),Xt.removeEventListener("sessionstart",Be),Xt.removeEventListener("sessionend",oe),vt&&(vt.dispose(),vt=null),He.stop()};function nt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let b=de.autoReset,D=K.enabled,F=K.autoUpdate,B=K.needsUpdate,z=K.type;me(),de.autoReset=b,K.enabled=D,K.autoUpdate=F,K.needsUpdate=B,K.type=z}function st(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function rt(b){let D=b.target;D.removeEventListener("dispose",rt),Ct(D)}function Ct(b){Tt(b),Gt.remove(b)}function Tt(b){let D=Gt.get(b).programs;D!==void 0&&(D.forEach(function(F){xt.releaseProgram(F)}),b.isShaderMaterial&&xt.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,F,B,z,ut){D===null&&(D=Rt);let yt=z.isMesh&&z.matrixWorld.determinant()<0,wt=Qu(b,D,F,B,z);gt.setMaterial(B,yt);let Pt=F.index,Wt=1;if(B.wireframe===!0){if(Pt=J.getWireframeAttribute(F),Pt===void 0)return;Wt=2}let Ut=F.drawRange,kt=F.attributes.position,ye=Ut.start*Wt,je=(Ut.start+Ut.count)*Wt;ut!==null&&(ye=Math.max(ye,ut.start*Wt),je=Math.min(je,(ut.start+ut.count)*Wt)),Pt!==null?(ye=Math.max(ye,0),je=Math.min(je,Pt.count)):kt!=null&&(ye=Math.max(ye,0),je=Math.min(je,kt.count));let Ae=je-ye;if(Ae<0||Ae===1/0)return;Bt.setup(z,B,wt,F,Pt);let Rn,fe=It;if(Pt!==null&&(Rn=Q.get(Pt),fe=Mt,fe.setIndex(Rn)),z.isMesh)B.wireframe===!0?(gt.setLineWidth(B.wireframeLinewidth*Kt()),fe.setMode(k.LINES)):fe.setMode(k.TRIANGLES);else if(z.isLine){let qt=B.linewidth;qt===void 0&&(qt=1),gt.setLineWidth(qt*Kt()),z.isLineSegments?fe.setMode(k.LINES):z.isLineLoop?fe.setMode(k.LINE_LOOP):fe.setMode(k.LINE_STRIP)}else z.isPoints?fe.setMode(k.POINTS):z.isSprite&&fe.setMode(k.TRIANGLES);if(z.isBatchedMesh)fe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)fe.renderInstances(ye,Ae,z.count);else if(F.isInstancedBufferGeometry){let qt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Fa=Math.min(F.instanceCount,qt);fe.renderInstances(ye,Ae,Fa)}else fe.render(ye,Ae)};function re(b,D,F){b.transparent===!0&&b.side===an&&b.forceSinglePass===!1?(b.side=$e,b.needsUpdate=!0,sr(b,D,F),b.side=si,b.needsUpdate=!0,sr(b,D,F),b.side=an):sr(b,D,F)}this.compile=function(b,D,F=null){F===null&&(F=b),m=At.get(F),m.init(),v.push(m),F.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),b!==F&&b.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(y._useLegacyLights);let B=new Set;return b.traverse(function(z){let ut=z.material;if(ut)if(Array.isArray(ut))for(let yt=0;yt<ut.length;yt++){let wt=ut[yt];re(wt,F,z),B.add(wt)}else re(ut,F,z),B.add(ut)}),v.pop(),m=null,B},this.compileAsync=function(b,D,F=null){let B=this.compile(b,D,F);return new Promise(z=>{function ut(){if(B.forEach(function(yt){Gt.get(yt).currentProgram.isReady()&&B.delete(yt)}),B.size===0){z(b);return}setTimeout(ut,10)}Et.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let ae=null;function we(b){ae&&ae(b)}function Be(){He.stop()}function oe(){He.start()}let He=new qh;He.setAnimationLoop(we),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(b){ae=b,Xt.setAnimationLoop(b),b===null?He.stop():He.start()},Xt.addEventListener("sessionstart",Be),Xt.addEventListener("sessionend",oe),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Xt.enabled===!0&&Xt.isPresenting===!0&&(Xt.cameraAutoUpdate===!0&&Xt.updateCamera(D),D=Xt.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,D,R),m=At.get(b,v.length),m.init(),v.push(m),_t.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),G.setFromProjectionMatrix(_t),ht=this.localClippingEnabled,Z=Vt.init(this.clippingPlanes,ht),x=pt.get(b,f.length),x.init(),f.push(x),_n(b,D,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(q,X),this.info.render.frame++,Z===!0&&Vt.beginShadows();let F=m.state.shadowsArray;if(K.render(F,b,D),Z===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(x,b),m.setupLights(y._useLegacyLights),D.isArrayCamera){let B=D.cameras;for(let z=0,ut=B.length;z<ut;z++){let yt=B[z];Kl(x,b,yt,yt.viewport)}}else Kl(x,b,D);R!==null&&(S.updateMultisampleRenderTarget(R),S.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(y,b,D),Bt.resetDefaultState(),V=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function _n(b,D,F,B){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)F=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||G.intersectsSprite(b)){B&&Ft.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_t);let yt=tt.update(b),wt=b.material;wt.visible&&x.push(b,yt,wt,F,Ft.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||G.intersectsObject(b))){let yt=tt.update(b),wt=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ft.copy(b.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ft.copy(yt.boundingSphere.center)),Ft.applyMatrix4(b.matrixWorld).applyMatrix4(_t)),Array.isArray(wt)){let Pt=yt.groups;for(let Wt=0,Ut=Pt.length;Wt<Ut;Wt++){let kt=Pt[Wt],ye=wt[kt.materialIndex];ye&&ye.visible&&x.push(b,yt,ye,F,Ft.z,kt)}}else wt.visible&&x.push(b,yt,wt,F,Ft.z,null)}}let ut=b.children;for(let yt=0,wt=ut.length;yt<wt;yt++)_n(ut[yt],D,F,B)}function Kl(b,D,F,B){let z=b.opaque,ut=b.transmissive,yt=b.transparent;m.setupLightsView(F),Z===!0&&Vt.setGlobalState(y.clippingPlanes,F),ut.length>0&&ju(z,ut,D,F),B&&gt.viewport(E.copy(B)),z.length>0&&ir(z,D,F),ut.length>0&&ir(ut,D,F),yt.length>0&&ir(yt,D,F),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function ju(b,D,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;let ut=Dt.isWebGL2;vt===null&&(vt=new Fn(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")?zs:ni,minFilter:wi,samples:ut?4:0})),y.getDrawingBufferSize(Nt),ut?vt.setSize(Nt.x,Nt.y):vt.setSize(Uo(Nt.x),Uo(Nt.y));let yt=y.getRenderTarget();y.setRenderTarget(vt),y.getClearColor(Y),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear();let wt=y.toneMapping;y.toneMapping=ei,ir(b,F,B),S.updateMultisampleRenderTarget(vt),S.updateRenderTargetMipmap(vt);let Pt=!1;for(let Wt=0,Ut=D.length;Wt<Ut;Wt++){let kt=D[Wt],ye=kt.object,je=kt.geometry,Ae=kt.material,Rn=kt.group;if(Ae.side===an&&ye.layers.test(B.layers)){let fe=Ae.side;Ae.side=$e,Ae.needsUpdate=!0,Jl(ye,F,B,je,Ae,Rn),Ae.side=fe,Ae.needsUpdate=!0,Pt=!0}}Pt===!0&&(S.updateMultisampleRenderTarget(vt),S.updateRenderTargetMipmap(vt)),y.setRenderTarget(yt),y.setClearColor(Y,L),y.toneMapping=wt}function ir(b,D,F){let B=D.isScene===!0?D.overrideMaterial:null;for(let z=0,ut=b.length;z<ut;z++){let yt=b[z],wt=yt.object,Pt=yt.geometry,Wt=B===null?yt.material:B,Ut=yt.group;wt.layers.test(F.layers)&&Jl(wt,D,F,Pt,Wt,Ut)}}function Jl(b,D,F,B,z,ut){b.onBeforeRender(y,D,F,B,z,ut),b.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(y,D,F,B,b,ut),z.transparent===!0&&z.side===an&&z.forceSinglePass===!1?(z.side=$e,z.needsUpdate=!0,y.renderBufferDirect(F,D,B,z,b,ut),z.side=si,z.needsUpdate=!0,y.renderBufferDirect(F,D,B,z,b,ut),z.side=an):y.renderBufferDirect(F,D,B,z,b,ut),b.onAfterRender(y,D,F,B,z,ut)}function sr(b,D,F){D.isScene!==!0&&(D=Rt);let B=Gt.get(b),z=m.state.lights,ut=m.state.shadowsArray,yt=z.state.version,wt=xt.getParameters(b,z.state,ut,D,F),Pt=xt.getProgramCacheKey(wt),Wt=B.programs;B.environment=b.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(b.isMeshStandardMaterial?O:_).get(b.envMap||B.environment),Wt===void 0&&(b.addEventListener("dispose",rt),Wt=new Map,B.programs=Wt);let Ut=Wt.get(Pt);if(Ut!==void 0){if(B.currentProgram===Ut&&B.lightsStateVersion===yt)return Ql(b,wt),Ut}else wt.uniforms=xt.getUniforms(b),b.onBuild(F,wt,y),b.onBeforeCompile(wt,y),Ut=xt.acquireProgram(wt,Pt),Wt.set(Pt,Ut),B.uniforms=wt.uniforms;let kt=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(kt.clippingPlanes=Vt.uniform),Ql(b,wt),B.needsLights=ed(b),B.lightsStateVersion=yt,B.needsLights&&(kt.ambientLightColor.value=z.state.ambient,kt.lightProbe.value=z.state.probe,kt.directionalLights.value=z.state.directional,kt.directionalLightShadows.value=z.state.directionalShadow,kt.spotLights.value=z.state.spot,kt.spotLightShadows.value=z.state.spotShadow,kt.rectAreaLights.value=z.state.rectArea,kt.ltc_1.value=z.state.rectAreaLTC1,kt.ltc_2.value=z.state.rectAreaLTC2,kt.pointLights.value=z.state.point,kt.pointLightShadows.value=z.state.pointShadow,kt.hemisphereLights.value=z.state.hemi,kt.directionalShadowMap.value=z.state.directionalShadowMap,kt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,kt.spotShadowMap.value=z.state.spotShadowMap,kt.spotLightMatrix.value=z.state.spotLightMatrix,kt.spotLightMap.value=z.state.spotLightMap,kt.pointShadowMap.value=z.state.pointShadowMap,kt.pointShadowMatrix.value=z.state.pointShadowMatrix),B.currentProgram=Ut,B.uniformsList=null,Ut}function jl(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=ss.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function Ql(b,D){let F=Gt.get(b);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function Qu(b,D,F,B,z){D.isScene!==!0&&(D=Rt),S.resetTextureUnits();let ut=D.fog,yt=B.isMeshStandardMaterial?D.environment:null,wt=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:On,Pt=(B.isMeshStandardMaterial?O:_).get(B.envMap||yt),Wt=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ut=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),kt=!!F.morphAttributes.position,ye=!!F.morphAttributes.normal,je=!!F.morphAttributes.color,Ae=ei;B.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ae=y.toneMapping);let Rn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,fe=Rn!==void 0?Rn.length:0,qt=Gt.get(B),Fa=m.state.lights;if(Z===!0&&(ht===!0||b!==M)){let sn=b===M&&B.id===V;Vt.setState(B,b,sn)}let ge=!1;B.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Fa.state.version||qt.outputColorSpace!==wt||z.isBatchedMesh&&qt.batching===!1||!z.isBatchedMesh&&qt.batching===!0||z.isInstancedMesh&&qt.instancing===!1||!z.isInstancedMesh&&qt.instancing===!0||z.isSkinnedMesh&&qt.skinning===!1||!z.isSkinnedMesh&&qt.skinning===!0||z.isInstancedMesh&&qt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&qt.instancingColor===!1&&z.instanceColor!==null||qt.envMap!==Pt||B.fog===!0&&qt.fog!==ut||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Vt.numPlanes||qt.numIntersection!==Vt.numIntersection)||qt.vertexAlphas!==Wt||qt.vertexTangents!==Ut||qt.morphTargets!==kt||qt.morphNormals!==ye||qt.morphColors!==je||qt.toneMapping!==Ae||Dt.isWebGL2===!0&&qt.morphTargetsCount!==fe)&&(ge=!0):(ge=!0,qt.__version=B.version);let fi=qt.currentProgram;ge===!0&&(fi=sr(B,D,z));let tc=!1,Ss=!1,Ba=!1,De=fi.getUniforms(),pi=qt.uniforms;if(gt.useProgram(fi.program)&&(tc=!0,Ss=!0,Ba=!0),B.id!==V&&(V=B.id,Ss=!0),tc||M!==b){De.setValue(k,"projectionMatrix",b.projectionMatrix),De.setValue(k,"viewMatrix",b.matrixWorldInverse);let sn=De.map.cameraPosition;sn!==void 0&&sn.setValue(k,Ft.setFromMatrixPosition(b.matrixWorld)),Dt.logarithmicDepthBuffer&&De.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&De.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Ss=!0,Ba=!0)}if(z.isSkinnedMesh){De.setOptional(k,z,"bindMatrix"),De.setOptional(k,z,"bindMatrixInverse");let sn=z.skeleton;sn&&(Dt.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),De.setValue(k,"boneTexture",sn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(De.setOptional(k,z,"batchingTexture"),De.setValue(k,"batchingTexture",z._matricesTexture,S));let Ha=F.morphAttributes;if((Ha.position!==void 0||Ha.normal!==void 0||Ha.color!==void 0&&Dt.isWebGL2===!0)&&Zt.update(z,F,fi),(Ss||qt.receiveShadow!==z.receiveShadow)&&(qt.receiveShadow=z.receiveShadow,De.setValue(k,"receiveShadow",z.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(pi.envMap.value=Pt,pi.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Ss&&(De.setValue(k,"toneMappingExposure",y.toneMappingExposure),qt.needsLights&&td(pi,Ba),ut&&B.fog===!0&&at.refreshFogUniforms(pi,ut),at.refreshMaterialUniforms(pi,B,$,H,vt),ss.upload(k,jl(qt),pi,S)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ss.upload(k,jl(qt),pi,S),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&De.setValue(k,"center",z.center),De.setValue(k,"modelViewMatrix",z.modelViewMatrix),De.setValue(k,"normalMatrix",z.normalMatrix),De.setValue(k,"modelMatrix",z.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let sn=B.uniformsGroups;for(let Ga=0,nd=sn.length;Ga<nd;Ga++)if(Dt.isWebGL2){let ec=sn[Ga];Qt.update(ec,fi),Qt.bind(ec,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function td(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function ed(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,D,F){Gt.get(b.texture).__webglTexture=D,Gt.get(b.depthTexture).__webglTexture=F;let B=Gt.get(b);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,D){let F=Gt.get(b);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,F=0){R=b,I=D,A=F;let B=!0,z=null,ut=!1,yt=!1;if(b){let Pt=Gt.get(b);Pt.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(k.FRAMEBUFFER,null),B=!1):Pt.__webglFramebuffer===void 0?S.setupRenderTarget(b):Pt.__hasExternalTextures&&S.rebindTextures(b,Gt.get(b.texture).__webglTexture,Gt.get(b.depthTexture).__webglTexture);let Wt=b.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(yt=!0);let Ut=Gt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ut[D])?z=Ut[D][F]:z=Ut[D],ut=!0):Dt.isWebGL2&&b.samples>0&&S.useMultisampledRTT(b)===!1?z=Gt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ut)?z=Ut[F]:z=Ut,E.copy(b.viewport),N.copy(b.scissor),W=b.scissorTest}else E.copy(j).multiplyScalar($).floor(),N.copy(et).multiplyScalar($).floor(),W=dt;if(gt.bindFramebuffer(k.FRAMEBUFFER,z)&&Dt.drawBuffers&&B&&gt.drawBuffers(b,z),gt.viewport(E),gt.scissor(N),gt.setScissorTest(W),ut){let Pt=Gt.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+D,Pt.__webglTexture,F)}else if(yt){let Pt=Gt.get(b.texture),Wt=D||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pt.__webglTexture,F||0,Wt)}V=-1},this.readRenderTargetPixels=function(b,D,F,B,z,ut,yt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt){gt.bindFramebuffer(k.FRAMEBUFFER,wt);try{let Pt=b.texture,Wt=Pt.format,Ut=Pt.type;if(Wt!==gn&&mt.convert(Wt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let kt=Ut===zs&&(Et.has("EXT_color_buffer_half_float")||Dt.isWebGL2&&Et.has("EXT_color_buffer_float"));if(Ut!==ni&&mt.convert(Ut)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ut===Qn&&(Dt.isWebGL2||Et.has("OES_texture_float")||Et.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-B&&F>=0&&F<=b.height-z&&k.readPixels(D,F,B,z,mt.convert(Wt),mt.convert(Ut),ut)}finally{let Pt=R!==null?Gt.get(R).__webglFramebuffer:null;gt.bindFramebuffer(k.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(b,D,F=0){let B=Math.pow(2,-F),z=Math.floor(D.image.width*B),ut=Math.floor(D.image.height*B);S.setTexture2D(D,0),k.copyTexSubImage2D(k.TEXTURE_2D,F,0,0,b.x,b.y,z,ut),gt.unbindTexture()},this.copyTextureToTexture=function(b,D,F,B=0){let z=D.image.width,ut=D.image.height,yt=mt.convert(F.format),wt=mt.convert(F.type);S.setTexture2D(F,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment),D.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,B,b.x,b.y,z,ut,yt,wt,D.image.data):D.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,B,b.x,b.y,D.mipmaps[0].width,D.mipmaps[0].height,yt,D.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,B,b.x,b.y,yt,wt,D.image),B===0&&F.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(b,D,F,B,z=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ut=b.max.x-b.min.x+1,yt=b.max.y-b.min.y+1,wt=b.max.z-b.min.z+1,Pt=mt.convert(B.format),Wt=mt.convert(B.type),Ut;if(B.isData3DTexture)S.setTexture3D(B,0),Ut=k.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)S.setTexture2DArray(B,0),Ut=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);let kt=k.getParameter(k.UNPACK_ROW_LENGTH),ye=k.getParameter(k.UNPACK_IMAGE_HEIGHT),je=k.getParameter(k.UNPACK_SKIP_PIXELS),Ae=k.getParameter(k.UNPACK_SKIP_ROWS),Rn=k.getParameter(k.UNPACK_SKIP_IMAGES),fe=F.isCompressedTexture?F.mipmaps[z]:F.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,fe.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,fe.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,b.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,b.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,b.min.z),F.isDataTexture||F.isData3DTexture?k.texSubImage3D(Ut,z,D.x,D.y,D.z,ut,yt,wt,Pt,Wt,fe.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Ut,z,D.x,D.y,D.z,ut,yt,wt,Pt,fe.data)):k.texSubImage3D(Ut,z,D.x,D.y,D.z,ut,yt,wt,Pt,Wt,fe),k.pixelStorei(k.UNPACK_ROW_LENGTH,kt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ye),k.pixelStorei(k.UNPACK_SKIP_PIXELS,je),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ae),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Rn),z===0&&B.generateMipmaps&&k.generateMipmap(Ut),gt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),gt.unbindTexture()},this.resetState=function(){I=0,A=0,R=null,gt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===bl?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===da?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Jt?Ti:Hh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ti?Jt:On}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Zo=class extends Fs{};Zo.prototype.isWebGL1Renderer=!0;var ta=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},us=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},ea=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Io,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ge=new T,Bs=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=kn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=kn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=kn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=kn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ci=class extends bn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ji,Rs=new T,ji=new T,Qi=new T,ts=new lt,Cs=new lt,jh=new xe,Ar=new T,Ps=new T,Rr=new T,bh=new lt,Mo=new lt,Sh=new lt,Ri=class extends Se{constructor(t=new ci){if(super(),this.isSprite=!0,this.type="Sprite",Ji===void 0){Ji=new ke;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ea(e,5);Ji.setIndex([0,1,2,0,2,3]),Ji.setAttribute("position",new Bs(n,3,0,!1)),Ji.setAttribute("uv",new Bs(n,2,3,!1))}this.geometry=Ji,this.material=t,this.center=new lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),jh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Qi.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Cr(Ar.set(-.5,-.5,0),Qi,a,ji,i,r),Cr(Ps.set(.5,-.5,0),Qi,a,ji,i,r),Cr(Rr.set(.5,.5,0),Qi,a,ji,i,r),bh.set(0,0),Mo.set(1,0),Sh.set(1,1);let o=t.ray.intersectTriangle(Ar,Ps,Rr,!1,Rs);if(o===null&&(Cr(Ps.set(-.5,.5,0),Qi,a,ji,i,r),Mo.set(0,1),o=t.ray.intersectTriangle(Ar,Rr,Ps,!1,Rs),o===null))return;let l=t.ray.origin.distanceTo(Rs);l<t.near||l>t.far||e.push({distance:l,point:Rs.clone(),uv:bi.getInterpolation(Rs,Ar,Ps,Rr,bh,Mo,Sh,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Cr(s,t,e,n,i,r){ts.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Cs.x=r*ts.x-i*ts.y,Cs.y=i*ts.x+r*ts.y):Cs.copy(ts),s.copy(t),s.x+=Cs.x,s.y+=Cs.y,s.applyMatrix4(jh)}var Hs=class extends bn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Eh=new T,Th=new T,wh=new xe,bo=new Xr,Pr=new cs,na=class extends Se{constructor(t=new ke,e=new Hs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Eh.fromBufferAttribute(e,i-1),Th.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Eh.distanceTo(Th);t.setAttribute("lineDistance",new ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(i),Pr.radius+=r,t.ray.intersectsSphere(Pr)===!1)return;wh.copy(i).invert(),bo.copy(t.ray).applyMatrix4(wh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new T,h=new T,u=new T,d=new T,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let f=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let y=f,w=v-1;y<w;y+=p){let I=g.getX(y),A=g.getX(y+1);if(c.fromBufferAttribute(m,I),h.fromBufferAttribute(m,A),bo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let V=t.ray.origin.distanceTo(d);V<t.near||V>t.far||e.push({distance:V,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let y=f,w=v-1;y<w;y+=p){if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),bo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let A=t.ray.origin.distanceTo(d);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};var We=class extends ln{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,p=(a-h)/d;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new lt:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new T,i=[],r=[],a=[],o=new T,l=new xe;for(let p=0;p<=t;p++){let g=p/t;i[p]=this.getTangentAt(g,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Le(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(Le(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Gs=class extends cn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let n=e||new lt,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ko=class extends Gs{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function El(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var Lr=new T,So=new El,Eo=new El,To=new El,Jo=class extends cn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Lr.subVectors(i[0],i[1]).add(i[0]),c=Lr);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Lr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Lr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),So.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Eo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),To.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(So.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Eo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),To.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(So.calc(l),Eo.calc(l),To.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ah(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function $g(s,t){let e=1-s;return e*e*t}function Zg(s,t){return 2*(1-s)*s*t}function Kg(s,t){return s*s*t}function Us(s,t,e,n){return $g(s,t)+Zg(s,e)+Kg(s,n)}function Jg(s,t){let e=1-s;return e*e*e*t}function jg(s,t){let e=1-s;return 3*e*e*s*t}function Qg(s,t){return 3*(1-s)*s*s*t}function tx(s,t){return s*s*s*t}function Ns(s,t,e,n,i){return Jg(s,t)+jg(s,e)+Qg(s,n)+tx(s,i)}var ia=class extends cn{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ns(t,i.x,r.x,a.x,o.x),Ns(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},jo=class extends cn{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ns(t,i.x,r.x,a.x,o.x),Ns(t,i.y,r.y,a.y,o.y),Ns(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sa=class extends cn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qo=class extends cn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ra=class extends cn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Us(t,i.x,r.x,a.x),Us(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tl=class extends cn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Us(t,i.x,r.x,a.x),Us(t,i.y,r.y,a.y),Us(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},aa=class extends cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Ah(o,l.x,c.x,h.x,u.x),Ah(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new lt().fromArray(i))}return this}},Rh=Object.freeze({__proto__:null,ArcCurve:Ko,CatmullRomCurve3:Jo,CubicBezierCurve:ia,CubicBezierCurve3:jo,EllipseCurve:Gs,LineCurve:sa,LineCurve3:Qo,QuadraticBezierCurve:ra,QuadraticBezierCurve3:tl,SplineCurve:aa}),el=class extends cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Rh[i.type]().fromJSON(i))}return this}},nl=class extends el{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new sa(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new ra(this.currentPoint.clone(),new lt(t,e),new lt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new ia(this.currentPoint.clone(),new lt(t,e),new lt(n,i),new lt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new aa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){let c=new Gs(t,e,n,i,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},il=class s extends ke{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Le(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new T,d=new lt,p=new T,g=new T,x=new T,m=0,f=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,f=t[v+1].y-t[v].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[v+1].x-t[v].x,f=t[v+1].y-t[v].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(g)}for(let v=0;v<=e;v++){let y=n+v*h*i,w=Math.sin(y),I=Math.cos(y);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*w,u.y=t[A].y,u.z=t[A].x*I,a.push(u.x,u.y,u.z),d.x=v/e,d.y=A/(t.length-1),o.push(d.x,d.y);let R=l[3*A+0]*w,V=l[3*A+1],M=l[3*A+0]*I;c.push(R,V,M)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){let w=y+v*t.length,I=w,A=w+t.length,R=w+t.length+1,V=w+1;r.push(I,A,V),r.push(R,V,A)}this.setIndex(r),this.setAttribute("position",new ve(a,3)),this.setAttribute("uv",new ve(o,2)),this.setAttribute("normal",new ve(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},oa=class s extends il{constructor(t=1,e=1,n=4,i=8){let r=new nl;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}};var Hn=class s extends ke{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,x=[],m=n/2,f=0;v(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ve(u,3)),this.setAttribute("normal",new ve(d,3)),this.setAttribute("uv",new ve(p,2));function v(){let w=new T,I=new T,A=0,R=(e-t)/n;for(let V=0;V<=r;V++){let M=[],E=V/r,N=E*(e-t)+t;for(let W=0;W<=i;W++){let Y=W/i,L=Y*l+o,U=Math.sin(L),H=Math.cos(L);I.x=N*U,I.y=-E*n+m,I.z=N*H,u.push(I.x,I.y,I.z),w.set(U,R,H).normalize(),d.push(w.x,w.y,w.z),p.push(Y,1-E),M.push(g++)}x.push(M)}for(let V=0;V<i;V++)for(let M=0;M<r;M++){let E=x[M][V],N=x[M+1][V],W=x[M+1][V+1],Y=x[M][V+1];h.push(E,N,Y),h.push(N,W,Y),A+=6}c.addGroup(f,A,0),f+=A}function y(w){let I=g,A=new lt,R=new T,V=0,M=w===!0?t:e,E=w===!0?1:-1;for(let W=1;W<=i;W++)u.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),g++;let N=g;for(let W=0;W<=i;W++){let L=W/i*l+o,U=Math.cos(L),H=Math.sin(L);R.x=M*H,R.y=m*E,R.z=M*U,u.push(R.x,R.y,R.z),d.push(0,E,0),A.x=U*.5+.5,A.y=H*.5*E+.5,p.push(A.x,A.y),g++}for(let W=0;W<i;W++){let Y=I+W,L=N+W;w===!0?h.push(L,L+1,Y):h.push(L+1,L,Y),V+=3}c.addGroup(f,V,w===!0?1:2),f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var En=class s extends ke{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new T,d=new T,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){let v=[],y=f/n,w=0;f===0&&a===0?w=.5/e:f===n&&l===Math.PI&&(w=-.5/e);for(let I=0;I<=e;I++){let A=I/e;u.x=-t*Math.cos(i+A*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(i+A*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+w,1-y),v.push(c++)}h.push(v)}for(let f=0;f<n;f++)for(let v=0;v<e;v++){let y=h[f][v+1],w=h[f][v],I=h[f+1][v],A=h[f+1][v+1];(f!==0||a>0)&&p.push(y,w,A),(f!==n-1||l<Math.PI)&&p.push(w,I,A)}this.setIndex(p),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(x,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Tn=class extends bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var pe=class extends bn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ir(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function ex(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var ds=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sl=class extends ds{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dc,endingEnd:Dc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Uc:r=t,o=2*e-n;break;case Nc:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uc:a=t,l=2*n-e;break;case Nc:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-p)*m+(1.5+p)*x+.5*g,w=p*m-p*x;for(let I=0;I!==o;++I)r[I]=f*a[h+I]+v*a[c+I]+y*a[l+I]+w*a[u+I];return r}},rl=class extends ds{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},al=class extends ds{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},yn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ir(e,this.TimeBufferType),this.values=Ir(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ir(t.times,Array),values:Ir(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ur:e=this.InterpolantFactoryMethodDiscrete;break;case Nr:e=this.InterpolantFactoryMethodLinear;break;case Za:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return Nr;case this.InterpolantFactoryMethodSmooth:return Za}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&ex(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Za,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Nr;var Ci=class extends yn{};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Ur;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends yn{};ol.prototype.ValueTypeName="color";var ll=class extends yn{};ll.prototype.ValueTypeName="number";var cl=class extends ds{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)oi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Vs=class extends yn{InterpolantFactoryMethodLinear(t){return new cl(this.times,this.values,this.getValueSize(),t)}};Vs.prototype.ValueTypeName="quaternion";Vs.prototype.DefaultInterpolation=Nr;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends yn{};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Ur;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends yn{};hl.prototype.ValueTypeName="vector";var ul=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},nx=new ul,dl=class{constructor(t){this.manager=t!==void 0?t:nx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};dl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Li=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},la=class extends Li{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},wo=new xe,Ch=new T,Ph=new T,Ws=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Os,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ch.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ch),Ph.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ph),e.updateMatrixWorld(),wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},fl=class extends Ws{constructor(){super(new Me(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Br*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},ca=class extends Li{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new fl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Lh=new xe,Ls=new T,Ao=new T,pl=class extends Ws{constructor(){super(new Me(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ls.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ls),Ao.copy(n.position),Ao.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ao),n.updateMatrixWorld(),i.makeTranslation(-Ls.x,-Ls.y,-Ls.z),Lh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lh)}},Gn=class extends Li{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new pl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},ml=class extends Ws{constructor(){super(new jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hi=class extends Li{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new ml}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ha=class extends Li{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Tl="\\[\\]\\.:\\/",ix=new RegExp("["+Tl+"]","g"),wl="[^"+Tl+"]",sx="[^"+Tl.replace("\\.","")+"]",rx=/((?:WC+[\/:])*)/.source.replace("WC",wl),ax=/(WCOD+)?/.source.replace("WCOD",sx),ox=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wl),lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wl),cx=new RegExp("^"+rx+ax+ox+lx+"$"),hx=["material","materials","bones","map"],gl=class{constructor(t,e,n){let i=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ce=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ix,"")}static parseTrackName(t){let e=cx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);hx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=gl;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var ue={gravity:800,maxSpeed:250,accel:10,airAccel:10,friction:4,stopSpeed:75,jumpVel:268,stepHeight:18,duckMul:.34,walkMul:.52,standHeight:72,duckHeight:36,eyeStand:64,eyeDuck:28,radius:16,airWishSpeed:30,maxLadderSpeed:200,duckJumpBonus:22},Ot={freezeTime:3,buyTime:18,roundTime:115,bombTime:35,plantTime:3.2,defuseTime:10,defuseKitTime:5,startMoney:800,maxMoney:16e3,winReward:3250,winBombReward:3500,lossBase:1400,lossStep:500,lossMax:3400,plantBonus:800,defuseBonus:300,maxRounds:30,winRounds:16,halftimeRound:15,roundEndDelay:4.5,maxTeamSize:5,overtimeMoney:1e4,overtimeHalf:3,overtimeWin:4},tu={head:4,chest:1,stomach:1.25,leg:.75},jt={knife:{id:"knife",name:"Knife",cn:"\u5315\u9996",cls:"melee",slot:3,price:0,dmg:55,rpm:90,mag:0,res:0,reload:0,spread:0,moveSpread:0,kick:0,pen:1,kill:1500,speed:250,range:55,sound:"knife"},glock18:{id:"glock18",name:"Glock-18",cn:"\u683C\u6D1B\u514B 18",cls:"pistol",slot:2,price:400,dmg:25,rpm:400,mag:20,res:120,reload:2.2,spread:.55,moveSpread:2.6,kick:.85,pen:.52,kill:300,speed:240,sound:"pistol",auto:!1},usp45:{id:"usp45",name:"USP-45",cn:"USP \u6218\u672F\u624B\u67AA",cls:"pistol",slot:2,price:500,dmg:34,rpm:400,mag:12,res:100,reload:2.2,spread:.45,moveSpread:2.4,kick:.9,pen:.5,kill:300,speed:240,sound:"pistol",auto:!1},deagle:{id:"deagle",name:"Desert Eagle",cn:"\u6C99\u6F20\u4E4B\u9E70",cls:"pistol",slot:2,price:650,dmg:54,rpm:240,mag:7,res:35,reload:2.4,spread:.9,moveSpread:3.4,kick:2,pen:.6,kill:300,speed:240,sound:"deagle",auto:!1},mp5navy:{id:"mp5navy",name:"MP5 Navy",cn:"MP5 \u51B2\u950B\u67AA",cls:"smg",slot:1,price:1500,dmg:26,rpm:750,mag:30,res:120,reload:2.6,spread:.55,moveSpread:1.1,kick:.9,pen:.62,kill:600,speed:245,sound:"smg",auto:!0},ak47:{id:"ak47",name:"AK-47",cn:"AK-47",cls:"rifle",slot:1,price:2500,dmg:36,rpm:600,mag:30,res:90,reload:2.5,spread:.35,moveSpread:1.2,kick:2.2,pen:.775,kill:300,speed:221,sound:"ak47",auto:!0},m4a1:{id:"m4a1",name:"M4A1",cn:"M4A1 \u5361\u5BBE\u67AA",cls:"rifle",slot:1,price:3100,dmg:33,rpm:666,mag:30,res:90,reload:3.1,spread:.3,moveSpread:1.1,kick:1.7,pen:.7,kill:300,speed:225,sound:"m4a1",auto:!0},p90:{id:"p90",name:"P90",cn:"P90",cls:"smg",slot:1,price:2350,dmg:26,rpm:857,mag:50,res:100,reload:3.3,spread:.6,moveSpread:1,kick:.8,pen:.69,kill:300,speed:245,sound:"smg",auto:!0},scout:{id:"scout",name:"Steyr Scout",cn:"\u9E1F\u72D9",cls:"sniper",slot:1,price:2750,dmg:75,rpm:90,mag:10,res:90,reload:2.5,spread:.1,moveSpread:5.5,kick:2.6,pen:.85,kill:300,speed:260,sound:"awp",auto:!1,scope:[.62,.24]},sg552:{id:"sg552",name:"SG552",cn:"Sig 552",cls:"rifle",slot:1,price:3500,dmg:33,rpm:727,mag:30,res:90,reload:3,spread:.32,moveSpread:1.15,kick:1.9,pen:.77,kill:300,speed:225,sound:"m4a1",auto:!0,scope:[.55]},aug:{id:"aug",name:"AUG",cn:"AUG",cls:"rifle",slot:1,price:3500,dmg:32,rpm:666,mag:30,res:90,reload:3.2,spread:.3,moveSpread:1.1,kick:1.8,pen:.77,kill:300,speed:225,sound:"m4a1",auto:!0,scope:[.55]},awp:{id:"awp",name:"AWP",cn:"AWP \u72D9\u51FB\u67AA",cls:"sniper",slot:1,price:4750,dmg:115,rpm:41,mag:10,res:30,reload:2.9,spread:.12,moveSpread:6,kick:4.5,pen:.975,kill:100,speed:210,sound:"awp",auto:!1,scope:[.55,.18]},famas:{id:"famas",name:"FAMAS",cn:"FAMAS",cls:"rifle",slot:1,price:2250,dmg:30,rpm:666,mag:25,res:90,reload:3,spread:.3,moveSpread:1.15,kick:1.7,pen:.7,kill:300,speed:225,sound:"m4a1",auto:!0},galil:{id:"galil",name:"Galil",cn:"\u52A0\u5229\u5C14",cls:"rifle",slot:1,price:2e3,dmg:30,rpm:666,mag:35,res:90,reload:3,spread:.33,moveSpread:1.15,kick:1.8,pen:.77,kill:300,speed:225,sound:"ak47",auto:!0},mac10:{id:"mac10",name:"MAC-10",cn:"MAC-10",cls:"smg",slot:1,price:1400,dmg:29,rpm:857,mag:30,res:100,reload:3.15,spread:.6,moveSpread:1.1,kick:.85,pen:.575,kill:300,speed:245,sound:"smg",auto:!0},xm1014:{id:"xm1014",name:"XM1014",cn:"XM1014 \u9730\u5F39\u67AA",cls:"shotgun",slot:1,price:3e3,dmg:24,rpm:240,mag:7,res:32,reload:3.5,spread:1.5,moveSpread:2.2,kick:2.6,pen:.55,kill:300,speed:220,sound:"deagle",auto:!1,pellets:6},m249:{id:"m249",name:"M249",cn:"M249 \u673A\u67AA",cls:"machinegun",slot:1,price:5750,dmg:32,rpm:750,mag:100,res:200,reload:5.7,spread:.5,moveSpread:1.4,kick:2,pen:.72,kill:300,speed:210,sound:"ak47",auto:!0},elite:{id:"elite",name:"Dual Berettas",cn:"\u53CC\u67AA",cls:"pistol",slot:2,price:800,dmg:26,rpm:500,mag:30,res:120,reload:4.6,spread:.7,moveSpread:3,kick:.8,pen:.5,kill:300,speed:240,sound:"pistol",auto:!1}},Al={ak47:[[2.2,0],[2.05,.04],[1.95,-.04],[1.8,.08],[1.6,.24],[1.45,.4],[1.32,.56],[1.22,.72],[1.14,.86],[1.06,.96],[1,1.04],[.96,1.02],[.92,.86],[.88,.58],[.84,.2],[.8,-.22],[.76,-.62],[.73,-.94],[.7,-1.16],[.68,-1.26],[.66,-1.2],[.64,-1],[.62,-.7],[.6,-.32],[.58,.1],[.57,.5],[.56,.84],[.55,1.04],[.54,1.02],[.53,.82]],m4a1:[[1.7,0],[1.64,.04],[1.56,-.04],[1.46,.06],[1.34,.16],[1.22,.28],[1.12,.4],[1.04,.52],[.97,.62],[.91,.7],[.86,.74],[.82,.7],[.79,.56],[.76,.34],[.74,.06],[.72,-.22],[.7,-.46],[.68,-.64],[.66,-.74],[.64,-.74],[.62,-.62],[.6,-.42],[.58,-.16],[.57,.1],[.56,.34],[.55,.52],[.54,.62],[.53,.6],[.52,.48],[.51,.3]],mp5navy:[[.9,0],[.86,.03],[.82,-.03],[.78,.05],[.74,.1],[.7,.16],[.67,.22],[.64,.27],[.62,.31],[.6,.34],[.58,.35],[.56,.34],[.55,.3],[.54,.24],[.53,.16],[.52,.08],[.51,0],[.5,-.08],[.49,-.15],[.48,-.2],[.47,-.22],[.46,-.22],[.45,-.19],[.45,-.14],[.44,-.08],[.44,-.02],[.43,.05],[.43,.11],[.42,.15],[.42,.17]],p90:[[.8,0],[.77,.03],[.74,-.03],[.71,.05],[.68,.09],[.65,.14],[.62,.19],[.6,.23],[.58,.27],[.56,.29],[.54,.3],[.53,.29],[.52,.26],[.51,.21],[.5,.14],[.49,.07],[.48,0],[.47,-.07],[.46,-.13],[.45,-.17],[.44,-.19],[.43,-.19],[.43,-.16],[.42,-.12],[.42,-.07],[.41,-.02],[.41,.04],[.4,.09],[.4,.13],[.4,.15]]};function eu(s,t){let e=Al[s.id],n=1;if(!e)if(s.id==="sg552")e=Al.m4a1,n=1.08;else if(s.id==="aug")e=Al.m4a1,n=1.02;else return[s.kick,0];let i=e[Math.min(Math.max(t,1)-1,e.length-1)];return[i[0]*n,i[1]*n]}var pa={he:3,flash:2,smoke:1.8},Wn={kevlar:{id:"kevlar",name:"Kevlar Vest",cn:"\u9632\u5F39\u8863",price:650},kevlarhelm:{id:"kevlarhelm",name:"Kevlar + Helmet",cn:"\u9632\u5F39\u8863 + \u5934\u76D4",price:1e3},defusekit:{id:"defusekit",name:"Defuse Kit",cn:"\u62C6\u5F39\u5DE5\u5177",price:200,team:"CT"},hegrenade:{id:"hegrenade",name:"HE Grenade",cn:"\u9AD8\u7206\u624B\u96F7",price:300,grenade:"he"},flashbang:{id:"flashbang",name:"Flashbang",cn:"\u95EA\u5149\u5F39",price:200,grenade:"flash"},smokegrenade:{id:"smokegrenade",name:"Smoke Grenade",cn:"\u70DF\u96FE\u5F39",price:300,grenade:"smoke"}},Rl={handguns:{title:"\u624B\u67AA",items:["glock18","usp45","deagle","elite"]},smgs:{title:"\u51B2\u950B\u67AA",items:["mp5navy","p90","mac10"]},shotguns:{title:"\u9730\u5F39\u67AA",items:["xm1014"]},rifles:{title:"\u6B65\u67AA",items:["ak47","m4a1","galil","famas","sg552","aug"]},sniper:{title:"\u72D9\u51FB\u67AA",items:["scout","awp"]},machineguns:{title:"\u673A\u67AA",items:["m249"]},gear:{title:"\u88C5\u5907",items:["kevlar","kevlarhelm","defusekit"]},grenades:{title:"\u6295\u63B7\u7269",items:["hegrenade","flashbang","smokegrenade"]}},nu={T:["glock18","elite","deagle","ak47","galil","sg552","famas","awp","scout","mp5navy","p90","mac10","xm1014","m249"],CT:["usp45","deagle","m4a1","famas","aug","awp","scout","mp5navy","p90","xm1014","m249"]};var ps={forward:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD",jump:"Space",duck:"ControlLeft",walk:"ShiftLeft",use:"KeyE",reload:"KeyR",buy:"KeyB",lastWeapon:"KeyQ",slot1:"Digit1",slot2:"Digit2",slot3:"Digit3",slot4:"Digit4",flashlight:"KeyF",drop:"KeyG",scoreboard:"Tab"},iu=[["forward","\u524D\u8FDB"],["back","\u540E\u9000"],["left","\u5DE6\u79FB"],["right","\u53F3\u79FB"],["jump","\u8DF3\u8DC3"],["duck","\u4E0B\u8E72"],["walk","\u9759\u6B65"],["use","\u4F7F\u7528 / \u5B89\u653E"],["reload","\u6362\u5F39"],["lastWeapon","\u4E0A\u4E00\u628A\u6B66\u5668"],["slot1","\u4E3B\u6B66\u5668"],["slot2","\u624B\u67AA"],["slot3","\u5315\u9996"],["slot4","\u624B\u96F7"],["flashlight","\u624B\u7535\u7B52"],["drop","\u4E22\u5F03\u6B66\u5668"],["buy","\u8D2D\u4E70\u83DC\u5355"],["scoreboard","\u8BA1\u5206\u677F"]],Qh={Space:"\u7A7A\u683C",ControlLeft:"\u5DE6 Ctrl",ShiftLeft:"\u5DE6 Shift",Tab:"Tab",AltLeft:"\u5DE6 Alt",Escape:"Esc",Backspace:"\u9000\u683C",Enter:"\u56DE\u8F66",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",CapsLock:"CapsLock",Insert:"Insert",Delete:"Delete",Home:"Home",End:"End",PageUp:"PageUp",PageDown:"PageDown",Semicolon:"\uFF1B",Quote:"\u2019",Comma:"\uFF0C",Period:"\u3002",Slash:"/",Backslash:"\\",Backquote:"`",BracketLeft:"[",BracketRight:"]",Minus:"-",Equal:"=",MouseLeft:"\u9F20\u6807\u5DE6\u952E",MouseRight:"\u9F20\u6807\u53F3\u952E",MouseMiddle:"\u6EDA\u8F6E"};function ma(s){return s?Qh[s]?Qh[s]:s.startsWith("Key")?s.slice(3):s.startsWith("Digit")?s.slice(5):s.startsWith("Numpad")?`\u5C0F\u952E\u76D8 ${s.slice(6)}`:s:"\u672A\u7ED1\u5B9A"}var Xs={sensitivity:3,fov:90,volume:.7,crosshair:"#4dff66",crosshairSize:8,crosshairGap:3,showFps:!0,invertY:!1,autoReload:!0,weaponStyle:"modern",keymap:{...ps}},Cl=["Vitaliy","Ivan","Dmitri","Sergei","Yuri","Boris","Nikita","Anton","Kyle","Ryan","Marcus","Dylan","Cole","Trevor","Wesley","Blake"];function Pl(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new ke,c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let p=s[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=su(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let x=0;x<a[h].length;++x)p.push(a[h][x][d]);let g=su(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function su(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let a=new t(r),o=0;for(let c=0;c<s.length;++c)a.set(s[c].array,o),o+=s[c].array.length;let l=new be(a,e,n);return i!==void 0&&(l.gpuType=i),l}var Il=4;function ru(s){Il=Math.max(1,Math.min(16,s|0||1))}function Ze(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e.getContext("2d",{willReadFrequently:!0}),e}function ga(s,t,e){let n=(s|0)*374761393+(t|0)*668265263+(e|0)*1442695041;return n=(n^n>>13)*1274126177,((n^n>>16)>>>0)/4294967295}function ux(s,t,e,n){let i=Math.floor(s),r=Math.floor(t),a=s-i,o=t-r,l=a*a*(3-2*a),c=o*o*(3-2*o),h=y=>(y%n+n)%n,u=h(i),d=h(i+1),p=h(r),g=h(r+1),x=ga(u,p,e),m=ga(d,p,e),f=ga(u,g,e),v=ga(d,g,e);return(x*(1-l)+m*l)*(1-c)+(f*(1-l)+v*l)*c}function dx(s,t,e,n,i){let r=0,a=.55,o=0,l=i,c=1;for(let h=0;h<e;h++)r+=ux(s*c,t*c,n+h*131,l)*a,o+=a,a*=.55,c*=2,l*=2;return r/o}function Xn(s,t,{basePer:e=4,oct:n=4,strength:i=.22,seed:r=7}={}){let a=s.getImageData(0,0,t,t),o=a.data;for(let l=0;l<t;l++)for(let c=0;c<t;c++){let u=1+(dx(c/t*e,l/t*e,n,r,e)-.5)*i,d=(l*t+c)*4;o[d]=Math.min(255,Math.max(0,o[d]*u)),o[d+1]=Math.min(255,Math.max(0,o[d+1]*u)),o[d+2]=Math.min(255,Math.max(0,o[d+2]*u))}s.putImageData(a,0,0)}function qn(s,t,e,n){let i=s.getImageData(0,0,t,e),r=i.data;for(let a=0;a<r.length;a+=4){let o=(Math.random()-.5)*n;r[a]=Math.max(0,Math.min(255,r[a]+o)),r[a+1]=Math.max(0,Math.min(255,r[a+1]+o)),r[a+2]=Math.max(0,Math.min(255,r[a+2]+o))}s.putImageData(i,0,0)}function wn(s,t=1){let e=new We(s);return e.wrapS=e.wrapT=os,e.colorSpace=Jt,e.anisotropy=Il,e.repeat.set(t,t),e}function fx(){let t=Ze(256,256),e=t.getContext("2d");e.fillStyle="#8f7350",e.fillRect(0,0,256,256);let n=32;for(let i=0;i<256/n;i++){let r=i%2*42;for(let a=-1;a<4;a++){let l=n-3,c=a*84+r+2,h=i*n+2,u=20*Math.random();e.fillStyle=`rgb(${188-u|0},${160-u|0},${112-u|0})`,e.fillRect(c,h,78,l);let d=e.createLinearGradient(0,h,0,h+l);d.addColorStop(0,"rgba(64,48,30,0.42)"),d.addColorStop(.14,"rgba(64,48,30,0)"),d.addColorStop(.84,"rgba(52,38,24,0)"),d.addColorStop(1,"rgba(46,34,22,0.5)"),e.fillStyle=d,e.fillRect(c,h,78,l);let p=e.createLinearGradient(c,0,c+78,0);p.addColorStop(0,"rgba(64,48,30,0.34)"),p.addColorStop(.1,"rgba(64,48,30,0)"),p.addColorStop(.9,"rgba(52,38,24,0)"),p.addColorStop(1,"rgba(46,34,22,0.38)"),e.fillStyle=p,e.fillRect(c,h,78,l)}}for(let i=0;i<14;i++){let r=Math.random()*256,a=2+Math.random()*6,o=e.createLinearGradient(0,0,0,256);o.addColorStop(0,"rgba(72,56,34,0)"),o.addColorStop(.35,`rgba(72,56,34,${.05+Math.random()*.07})`),o.addColorStop(.75,`rgba(64,50,30,${.04+Math.random()*.06})`),o.addColorStop(1,"rgba(72,56,34,0)"),e.fillStyle=o,e.fillRect(r,0,a,256)}return Xn(e,256,{basePer:3,oct:4,strength:.26,seed:11}),qn(e,256,256,22),wn(t)}function px(){let t=Ze(512,512),e=t.getContext("2d");e.fillStyle="#b29469",e.fillRect(0,0,512,512);for(let n=0;n<26;n++){let i=Math.random()*512,r=5+Math.random()*12;e.strokeStyle=`rgba(${205+Math.random()*18|0},${182+Math.random()*16|0},${142+Math.random()*14|0},0.11)`,e.lineWidth=1+Math.random()*2.4,e.beginPath();for(let a=0;a<=512;a+=6){let o=i+Math.sin(a/512*Math.PI*2*(1+n%3))*r;a===0?e.moveTo(a,o):e.lineTo(a,o)}e.stroke()}for(let n=0;n<5200;n++){let i=Math.random()*46-23;e.fillStyle=`rgba(${178+i|0},${154+i|0},${110+i|0},${.35+Math.random()*.4})`,e.fillRect(Math.random()*512,Math.random()*512,1+Math.random()*2.4,1+Math.random()*1.8)}for(let n=0;n<12;n++){let i=e.createRadialGradient(Math.random()*512,Math.random()*512,2,Math.random()*512,Math.random()*512,26+Math.random()*30);i.addColorStop(0,"rgba(120,98,68,0.16)"),i.addColorStop(1,"rgba(120,98,68,0)"),e.fillStyle=i,e.fillRect(0,0,512,512)}return Xn(e,512,{basePer:5,oct:4,strength:.2,seed:23}),qn(e,512,512,14),wn(t)}function mx(){let t=Ze(256,256),e=t.getContext("2d");e.fillStyle="#b8a888",e.fillRect(0,0,256,256);for(let n=0;n<70;n++){let i=Math.random()*16-8;e.fillStyle=`rgba(${190+i|0},${174+i|0},${146+i|0},0.22)`,e.beginPath(),e.ellipse(Math.random()*256,Math.random()*256,8+Math.random()*22,6+Math.random()*16,Math.random()*3,0,7),e.fill()}for(let n=0;n<18;n++){let i=Math.random()*256,r=Math.random()*256;e.fillStyle=`rgba(120,100,72,${.12+Math.random()*.1})`,e.beginPath(),e.moveTo(i,r);for(let a=1;a<=7;a++){let o=a/7*Math.PI*2,l=4+Math.random()*9;e.lineTo(i+Math.cos(o)*l,r+Math.sin(o)*l)}e.closePath(),e.fill()}for(let n=0;n<14;n++){e.strokeStyle=`rgba(96,80,58,${.08+Math.random()*.12})`,e.lineWidth=.6+Math.random()*.7,e.beginPath();let i=Math.random()*256,r=Math.random()*256;e.moveTo(i,r);for(let a=0;a<6;a++)i+=(Math.random()-.5)*26,r+=(Math.random()-.5)*26,e.lineTo(i,r);e.stroke()}return Xn(e,256,{basePer:5,oct:5,strength:.2,seed:131}),qn(e,256,256,16),wn(t)}function gx(){let t=Ze(256,256),e=t.getContext("2d");e.fillStyle="#6f6455",e.fillRect(0,0,256,256);let n=44;for(let i=0;i<Math.ceil(256/n);i++){let a=-(i%2*46);for(;a<256;){let o=58+Math.random()*46,l=n-5,c=i*n+2,h=Math.random()*30-15;e.fillStyle=`rgb(${150+h|0},${140+h|0},${122+h|0})`,e.fillRect(a+2,c,o-3,l);let u=e.createLinearGradient(a,c,a,c+l);u.addColorStop(0,"rgba(255,250,240,0.10)"),u.addColorStop(.5,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(20,16,12,0.42)"),e.fillStyle=u,e.fillRect(a+2,c,o-3,l),a+=o}}return Xn(e,256,{basePer:4,oct:4,strength:.22,seed:173}),qn(e,256,256,20),wn(t)}function xx(){let t=Ze(128,128),e=t.getContext("2d");e.fillStyle="#8d6840",e.fillRect(0,0,128,128);let n=128/7;for(let i=0;i<7;i++){let r=i*n;e.fillStyle=i%2?"#98724a":"#825f36",e.fillRect(0,r+1,128,n-2);let a=e.createLinearGradient(0,r,0,r+n);a.addColorStop(0,"rgba(48,32,18,0.34)"),a.addColorStop(.25,"rgba(48,32,18,0)"),a.addColorStop(.8,"rgba(40,26,14,0)"),a.addColorStop(1,"rgba(40,26,14,0.38)"),e.fillStyle=a,e.fillRect(0,r,128,n);for(let o=0;o<9;o++){let l=r+2+Math.random()*(n-5);e.strokeStyle=`rgba(${90+Math.random()*40|0},${64+Math.random()*30|0},${36+Math.random()*22|0},${.1+Math.random()*.16})`,e.lineWidth=.7,e.beginPath(),e.moveTo(Math.random()*20,l),e.bezierCurveTo(128*.3,l+Math.random()*2-1,128*.7,l+Math.random()*2-1,128,l),e.stroke()}}return e.strokeStyle="#6d4c26",e.lineWidth=7,e.strokeRect(3.5,3.5,121,121),e.beginPath(),e.moveTo(6,6),e.lineTo(122,122),e.stroke(),e.strokeStyle="rgba(40,26,14,0.42)",e.lineWidth=2,e.strokeRect(8,8,112,112),e.fillStyle="#4a3520",[[14,14],[114,14],[14,114],[114,114]].forEach(([i,r])=>{e.beginPath(),e.arc(i,r,2.6,0,7),e.fill()}),Xn(e,128,{basePer:3,oct:3,strength:.2,seed:41}),qn(e,128,128,16),wn(t)}function yx(){let t=Ze(128,128),e=t.getContext("2d");e.fillStyle="#8d8a82",e.fillRect(0,0,128,128);for(let n=0;n<30;n++)e.fillStyle=`rgba(${110+Math.random()*50|0},${108+Math.random()*46|0},${100+Math.random()*40|0},0.45)`,e.fillRect(Math.random()*128,Math.random()*128,8+Math.random()*30,6+Math.random()*20);for(let n=0;n<5;n++){e.strokeStyle=`rgba(58,56,50,${.18+Math.random()*.2})`,e.lineWidth=.8+Math.random()*.6,e.beginPath();let i=Math.random()*128,r=Math.random()*128;e.moveTo(i,r);for(let a=0;a<5;a++)i+=(Math.random()-.5)*26,r+=(Math.random()-.5)*26,e.lineTo(i,r);e.stroke()}return Xn(e,128,{basePer:4,oct:4,strength:.28,seed:53}),qn(e,128,128,20),wn(t)}function Ll(s){let e=Ze(128,128),n=e.getContext("2d");n.fillStyle=s,n.fillRect(0,0,128,128);for(let i=0;i<128;i+=8){let r=n.createLinearGradient(i,0,i+8,0);r.addColorStop(0,"rgba(255,255,255,0.10)"),r.addColorStop(.45,"rgba(255,255,255,0)"),r.addColorStop(.55,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(0,0,0,0.20)"),n.fillStyle=r,n.fillRect(i,0,8,128)}for(let i=0;i<9;i++){let r=Math.random()*128,a=Math.random()*128,o=6+Math.random()*22,l=n.createRadialGradient(r,a,1,r,a,o);l.addColorStop(0,`rgba(108,58,30,${.22+Math.random()*.2})`),l.addColorStop(.6,`rgba(126,72,38,${.1+Math.random()*.1})`),l.addColorStop(1,"rgba(126,72,38,0)"),n.fillStyle=l,n.beginPath(),n.arc(r,a,o,0,7),n.fill()}return Xn(n,128,{basePer:3,oct:4,strength:.24,seed:67}),qn(n,128,128,12),wn(e)}var xa=null;function au(){return xa||(xa={sand:fx(),sand2:gx(),sand3:mx(),floor:px(),crate:xx(),concrete:yx(),metalRed:Ll("#8c4a3a"),metalBlue:Ll("#3f5c74"),metalGreen:Ll("#4c6148")},xa)}function _x(){let t=Ze(128,128),e=t.getContext("2d");e.fillStyle="#7e828a",e.fillRect(0,0,128,128);for(let n=0;n<260;n++){let i=Math.random()*128,r=Math.random()>.5;e.strokeStyle=r?`rgba(255,255,255,${.02+Math.random()*.06})`:`rgba(34,36,42,${.02+Math.random()*.08})`,e.lineWidth=.6+Math.random()*1.1,e.beginPath(),e.moveTo(Math.random()*24,i),e.lineTo(128-Math.random()*24,i+(Math.random()-.5)*2),e.stroke()}for(let n=0;n<28;n++){let i=Math.random()*128,r=Math.random()*128,a=3+Math.random()*13,o=e.createRadialGradient(i,r,.5,i,r,a),l=Math.random()>.45;o.addColorStop(0,l?"rgba(205,208,216,0.30)":"rgba(42,44,50,0.30)"),o.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=o,e.beginPath(),e.arc(i,r,a,0,7),e.fill()}e.fillStyle="rgba(26,28,32,0.5)";for(let n=0;n<3;n++){let i=36+n*9,r=24;for(;r<102;){let a=2+Math.random()*6;e.fillRect(r,i,a,3),r+=a+2+Math.random()*3}}return Xn(e,128,{basePer:4,oct:3,strength:.18,seed:91}),qn(e,128,128,10),wn(t)}function vx(){let t=Ze(128,128),e=t.getContext("2d");e.fillStyle="#6b4522",e.fillRect(0,0,128,128);for(let n=0;n<34;n++){let i=128*(.15+Math.random()*.7),r=-30+Math.random()*190,a=8+Math.random()*70;e.strokeStyle=`rgba(${38+Math.random()*40|0},${20+Math.random()*30|0},${10+Math.random()*18|0},${.1+Math.random()*.18})`,e.lineWidth=.7+Math.random()*2,e.beginPath(),e.ellipse(i,r,a,a*(.22+Math.random()*.4),Math.random()*.4,0,7),e.stroke()}for(let n=0;n<7;n++)e.strokeStyle=`rgba(196,158,108,${.04+Math.random()*.08})`,e.lineWidth=2+Math.random()*5,e.beginPath(),e.moveTo(0,Math.random()*128),e.bezierCurveTo(128*.35,Math.random()*128,128*.7,Math.random()*128,128,Math.random()*128),e.stroke();for(let n=0;n<9;n++)e.fillStyle=`rgba(152,122,90,${.12+Math.random()*.16})`,e.fillRect(Math.random()*128,Math.random()*128,2+Math.random()*11,1+Math.random()*3);return qn(e,128,128,12),wn(t)}function Mx(){let t=Ze(64,64),e=t.getContext("2d");e.fillStyle="#4a4d54",e.fillRect(0,0,64,64);for(let n=0;n<900;n++){let i=Math.random();e.fillStyle=i>.5?`rgba(120,124,132,${.1+Math.random()*.14})`:`rgba(28,30,34,${.1+Math.random()*.16})`,e.fillRect(Math.random()*64,Math.random()*64,1+Math.random()*2,1+Math.random()*2)}for(let n=0;n<4;n++)e.strokeStyle=`rgba(160,164,172,${.06+Math.random()*.08})`,e.lineWidth=.8,e.beginPath(),e.moveTo(Math.random()*64,0),e.lineTo(Math.random()*64,64),e.stroke();return Xn(e,64,{basePer:3,oct:3,strength:.16,seed:77}),wn(t)}var ya=null;function ba(){return ya||(ya={metal:_x(),wood:vx(),poly:Mx()},ya)}function bx(s,t=6){let e=s.width,n=s.getContext("2d"),i=n.getImageData(0,0,e,e),r=i.data,a=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],o=255/(t-1);for(let l=0;l<e;l++)for(let c=0;c<e;c++){let h=(l*e+c)*4,u=(a[(l&3)*4+(c&3)]/16-.5)*o;for(let d=0;d<3;d++){let p=r[h+d]+u;r[h+d]=Math.max(0,Math.min(255,Math.round(p/o)*o))}}return n.putImageData(i,0,0),s}function Sx(s,t=2){let e=s.width,n=s.getContext("2d").getImageData(0,0,e,e).data,i=Ze(e,e),r=i.getContext("2d"),a=r.createImageData(e,e),o=a.data,l=(c,h)=>{let u=(c+e)%e,p=((h+e)%e*e+u)*4;return(n[p]*.299+n[p+1]*.587+n[p+2]*.114)/255};for(let c=0;c<e;c++)for(let h=0;h<e;h++){let u=(l(h+1,c)-l(h-1,c))*t,d=(l(h,c+1)-l(h,c-1))*t,p=-u,g=-d,x=1,m=Math.hypot(p,g,x)||1,f=(c*e+h)*4;o[f]=(p/m*.5+.5)*255,o[f+1]=(g/m*.5+.5)*255,o[f+2]=(x/m*.5+.5)*255,o[f+3]=255}return r.putImageData(a,0,0),i}function Ex(s,t=.28,e=.92){let n=s.width,i=s.getContext("2d").getImageData(0,0,n,n).data,r=Ze(n,n),a=r.getContext("2d"),o=a.createImageData(n,n),l=o.data;for(let c=0;c<l.length;c+=4){let h=(i[c]*.299+i[c+1]*.587+i[c+2]*.114)/255,u=Math.round(255*(e-(e-t)*h));l[c]=l[c+1]=l[c+2]=u,l[c+3]=255}return a.putImageData(o,0,0),r}function ou(s){let t=Ze(s.width,s.height);return t.getContext("2d").drawImage(s,0,0),t}function Ma(s,{nearest:t=!1,aniso:e=1,data:n=!1}={}){let i=new We(s);return i.wrapS=i.wrapT=os,n||(i.colorSpace=Jt),i.anisotropy=e,t&&(i.magFilter=Pe,i.minFilter=wi),i}var _a=null;function lu(){if(_a)return _a;let s=ba(),t=e=>Ma(bx(ou(e.image),6),{nearest:!0,aniso:1});return _a={metal:t(s.metal),wood:t(s.wood),poly:t(s.poly)},_a}var va=null;function cu(){if(va)return va;let s=ba(),t=(e,n)=>({map:Ma(ou(e.image),{aniso:8}),normalMap:Ma(Sx(e.image,n),{aniso:4,data:!0}),roughnessMap:Ma(Ex(e.image),{aniso:4,data:!0})});return va={metal:t(s.metal,2.2),wood:t(s.wood,1.6),poly:t(s.poly,1.2)},va}function hu(){let t=Ze(512,512),e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,512);n.addColorStop(0,"#4d78ae"),n.addColorStop(.34,"#93b1cd"),n.addColorStop(.56,"#cfc6ae"),n.addColorStop(.72,"#e3d5b6"),n.addColorStop(1,"#e8dcc0"),e.fillStyle=n,e.fillRect(0,0,512,512);for(let r=0;r<3;r++){let a=10-r*2;for(let o=0;o<a;o++){let l=Math.random()*512,c=30+Math.random()*150+r*26,h=26+Math.random()*60,u=e.createRadialGradient(l,c,2,l,c,h),d=.42-r*.09;u.addColorStop(0,`rgba(255,255,255,${d})`),u.addColorStop(.55,`rgba(248,246,240,${d*.5})`),u.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=u,e.beginPath(),e.ellipse(l,c,h*1.5,h*.62,0,0,7),e.fill()}}let i=new We(t);return i.colorSpace=Jt,i.anisotropy=Il,i}var Xe=440,Dl=24,gs={x:-.478,y:.796,z:.372},Tx=.45,wx=.2,uu=1024,ms=520,Ea=1600,Ax=.62,Sa=class{constructor(t,e){if(!e)throw new Error("GameMap: \u7F3A\u5C11\u5730\u56FE\u5B9A\u4E49\uFF0C\u89C1 src/maps/index.js");this.scene=t,this.def=e,this.tex=au(),this.colliders=[],this.solids=[],this.ceilingZones=[],this.grid=new Uint8Array(1600),this.blocked=new Uint8Array(1600),this.propTop=new Float32Array(1600),this.spawns={T:[],CT:[]},this.sites=e.sites,this.ladders=[],this.label=e.label||e.id||"",this._build(),this.scene.traverse(n=>{n.isMesh&&n.material&&n.material.isMeshStandardMaterial&&(n.receiveShadow=!0)})}tileToWorld(t,e){return{x:-2e3+(t+.5)*100,z:-2e3+(e+.5)*100}}worldToTile(t,e){return{cx:Math.floor((t+2e3)/100),cz:Math.floor((e+2e3)/100)}}inBounds(t,e){return t>=0&&e>=0&&t<40&&e<40}isFloorTile(t,e){return this.inBounds(t,e)?this.grid[e*40+t]===1:!1}isWalkable(t,e){if(!this.inBounds(t,e))return!1;let n=e*40+t;return this.grid[n]===1&&this.blocked[n]===0}isFloorAt(t,e){let{cx:n,cz:i}=this.worldToTile(t,e);return this.isFloorTile(n,i)}isWalkableAt(t,e){let{cx:n,cz:i}=this.worldToTile(t,e);return this.isWalkable(n,i)}floorHeightAt(){return 0}supportHeightAt(t,e,n,i){let r=0,a="sand",o=this.colliders;for(let l=0;l<o.length;l++){let c=o[l];c.y1>i||c.y1<=r||t+n<=c.x0||t-n>=c.x1||e+n<=c.z0||e-n>=c.z1||(r=c.y1,a=c.mat||"stone")}return{y:r,mat:a}}_pbr(t,e={}){return new Tn({map:t,roughness:.94,metalness:0,envMapIntensity:.11,...e})}_build(){this._rasterize(),this._buildAtmosphere(),this._buildProps(),this._markPropTiles(),this._buildFloor(),this._buildWalls(),this._buildSpawns(),this._buildCeilings(),this._buildLadders(),this._buildLabels()}ladderAt(t,e,n){for(let i=0;i<this.ladders.length;i++){let r=this.ladders[i];if(!(t<r.x0||t>r.x1||e<r.z0||e>r.z1)&&!(n<(r.y0||0)-20||n>(r.y1||400)))return r}return null}_buildLadders(){if(this.ladders=this.def.ladders||[],!this.ladders.length)return;let t=this._pbr(this.tex.metalRed,{color:12103844,roughness:.52,metalness:.62});for(let e of this.ladders){let n=e.y0||0,i=e.y1||Xe,r=i-n,a=(n+i)/2,o=(e.x0+e.x1)/2,l=(e.z0+e.z1)/2,c=(e.face||"x+")[0]==="x",h=c?e.z1-e.z0:e.x1-e.x0,u=Math.max(10,h/2-10),d=new Lt,p=new Ce(6,r,6);for(let m of[-1,1]){let f=new bt(p,t);c?f.position.set(o,a,l+m*u):f.position.set(o+m*u,a,l),d.add(f)}let g=c?new Ce(5,5,u*2):new Ce(u*2,5,5),x=Math.max(2,Math.floor(r/40));for(let m=1;m<x;m++){let f=new bt(g,t);f.position.set(o,n+r*m/x,l),d.add(f)}this.scene.add(d)}}_rasterize(){for(let t of this.def.areas){let e=Math.floor((t.x0+2e3)/100),n=Math.floor((t.x1+2e3)/100),i=Math.floor((t.z0+2e3)/100),r=Math.floor((t.z1+2e3)/100);for(let a=i;a<r;a++)for(let o=e;o<n;o++)this.inBounds(o,a)&&(this.grid[a*40+o]=1)}}_buildAtmosphere(){let t=this.scene;t.fog=new ta(14207403,1800,5e3),t.background=new zt(10467020);let e=new la(13624050,10256469,.55);t.add(e);let n=new hi(16774102,1.22);n.position.set(-900,1500,700),n.castShadow=!0,n.shadow.mapSize.set(uu,uu);let i=n.shadow.camera;i.left=-ms,i.right=ms,i.top=ms,i.bottom=-ms,i.near=200,i.far=3400,i.updateProjectionMatrix(),n.shadow.bias=-9e-4,n.shadow.normalBias=1.6,n.target.position.set(0,0,0),t.add(n),t.add(n.target),this.sun=n;let r=new hi(9414856,.22);r.position.set(1200,600,-1400),t.add(r);let a=hu();a.mapping=ks,t.background=a;let o=this._pbr(this.tex.concrete,{envMapIntensity:.26}),l=this._pbr(this.tex.sand,{envMapIntensity:.26});for(let c=0;c<44;c++){let h=c/44*Math.PI*2+Math.random()*.05,u=3150+Math.random()*900,d=220+Math.random()*380,p=380+Math.random()*780,g=220+Math.random()*380,x=this._boxGeo(d,p,g,220),m=new bt(x,Math.random()<.5?o:l);m.position.set(Math.cos(h)*u,p/2-60,Math.sin(h)*u),m.rotation.y=h+Math.random()*.4,t.add(m)}}_boxGeo(t,e,n,i=128){let r=new Ce(t,e,n),a=r.attributes.uv,o=[[n,e],[n,e],[t,n],[t,n],[t,e],[t,e]];for(let l=0;l<6;l++){let[c,h]=o[l];for(let u=0;u<4;u++){let d=l*4+u;a.setXY(d,a.getX(d)*c/i,a.getY(d)*h/i)}}return r}_addSolid(t,e,n,i,r,a=!0,o=0,l="stone"){let c=new bt(t,e);return c.position.set(n,i,r),o&&(c.rotation.y=o),this.scene.add(c),this.solids.push(c),a&&this.colliders.push({x0:n-t.parameters.width/2,x1:n+t.parameters.width/2,y0:i-t.parameters.height/2,y1:i+t.parameters.height/2,z0:r-t.parameters.depth/2,z1:r+t.parameters.depth/2,mat:l}),c}_openAt(t,e,n){if(e>Xe-12)return!0;if(e<0)return!1;let{cx:i,cz:r}=this.worldToTile(t,n);if(!this.inBounds(i,r))return!1;let a=r*40+i;return!(this.grid[a]!==1||this.blocked[a]===1&&e<this.propTop[a]-1||e>Xe-46&&this._hasCeiling(t,n))}_hasCeiling(t,e){for(let n of this.def.ceilings||[])if(t>=n.x0&&t<=n.x1&&e>=n.z0&&e<=n.z1)return!0;return!1}_aoFactor(t,e,n,i,r,a){let o=0,l=0,c=(p,g,x,m,f=1)=>{l+=f,this._openAt(t+p*m,e+g*m,n+x*m)||(o+=f/(1+m/70))},h=Math.abs(r)>.7;if(h){if(r>0&&this._hasCeiling(t,n))for(let p=0;p<3;p++)o+=1.15,l+=1;for(let p=0;p<8;p++){let g=p/8*Math.PI*2,x=Math.cos(g),m=Math.sin(g);for(let f=1;f<=3;f++)c(x,0,m,f*34)}}else{let p=Math.hypot(i,a)||1,g=-a/p,x=i/p;for(let m=1;m<=3;m++)c(g,0,x,m*42),c(-g,0,-x,m*42),c(0,1,0,m*42,.8),c(0,-1,0,m*42,2.2)}let u=l>0?o/l:0;return Math.max(.34,1-u*(h?1.35:1.9))}_sunVisible(t,e,n){let i=gs;for(let r=1;r<=7;r++){let a=r*46,o=t+i.x*a,l=e+i.y*a,c=n+i.z*a;if(l>Xe-12)return 1;let{cx:h,cz:u}=this.worldToTile(o,c);if(!this.inBounds(h,u))return 1;if(!this._openAt(o,l,c))return 0}return 1}_applyLighting(t){let e=t.attributes.position,n=t.attributes.normal;if(!e||!n)return t;let i=e.count,r=new Float32Array(i*3),a=gs;for(let o=0;o<i;o++){let l=e.getX(o),c=e.getY(o),h=e.getZ(o),u=n.getX(o),d=n.getY(o),p=n.getZ(o),g=this._aoFactor(l,c,h,u,d,p),x=u*a.x+d*a.y+p*a.z,m=0;x>.02&&!(c<Xe-16&&this._hasCeiling(l,h))&&(m=x*this._sunVisible(l,c,h));let f=.5+.5*d,v=Ax+wx*f+Tx*m,y=Math.max(.16,g*v);r[o*3]=Math.min(1.45,y*(1+.1*m)),r[o*3+1]=Math.min(1.45,y),r[o*3+2]=Math.min(1.45,y*(1-.15*m))}return t.setAttribute("color",new be(r,3)),t}_buildFloor(){let t=[];for(let r=0;r<40;r++)for(let a=0;a<40;a++){if(this.grid[r*40+a]!==1)continue;let{x:o,z:l}=this.tileToWorld(a,r),c=new Sn(100,100,2,2);c.rotateX(-Math.PI/2);let h=c.attributes.uv;for(let u=0;u<h.count;u++)h.setXY(u,h.getX(u)*100/220,h.getY(u)*100/220);c.translate(o,0,l),t.push(c)}if(!t.length)return;let e=Pl(t,!1);t.forEach(r=>r.dispose()),this._applyLighting(e);let n=this._pbr(this.tex.floor,{vertexColors:!0}),i=new bt(e,n);i.position.y=0,this.scene.add(i),this.solids.push(i)}_buildWalls(){let t=[[],[],[]],e=Dl;for(let i=0;i<40;i++)for(let r=0;r<40;r++){if(this.grid[i*40+r]!==1)continue;let{x:a,z:o}=this.tileToWorld(r,i),l=100/2,c=t[(r*7+i*13)%3],h=[{dx:0,dz:-1,nx:0,nz:-1},{dx:0,dz:1,nx:0,nz:1},{dx:-1,dz:0,nx:-1,nz:0},{dx:1,dz:0,nx:1,nz:0}];for(let u of h){if(this.isFloorTile(r+u.dx,i+u.dz))continue;let d=Xe,p;u.nx===0?(p=this._boxGeo(100+e,d,e,128),p.translate(a,d/2,o+u.nz*(l+e/2-2))):(p=this._boxGeo(e,d,100+e,128),p.translate(a+u.nx*(l+e/2-2),d/2,o)),c.push(p)}}let n=[this.tex.sand,this.tex.sand2,this.tex.sand3];for(let i=0;i<t.length;i++){let r=t[i];if(!r.length)continue;let a=Pl(r,!1);r.forEach(c=>c.dispose()),this._applyLighting(a);let o=this._pbr(n[i],{vertexColors:!0}),l=new bt(a,o);this.scene.add(l),this.solids.push(l)}for(let i=0;i<40;i++)for(let r=0;r<40;r++){if(this.grid[i*40+r]!==1)continue;let{x:a,z:o}=this.tileToWorld(r,i),l=100/2,c=[{dx:0,dz:-1},{dx:0,dz:1},{dx:-1,dz:0},{dx:1,dz:0}];for(let h of c)this.isFloorTile(r+h.dx,i+h.dz)||(h.dz!==0?this.colliders.push({x0:a-l,x1:a+l,y0:0,y1:Xe,z0:o+h.dz*l,z1:o+h.dz*(l+Dl),mat:"stone"}):this.colliders.push({x0:a+h.dx*l,x1:a+h.dx*(l+Dl),y0:0,y1:Xe,z0:o-l,z1:o+l,mat:"stone"}))}}_addTileBlocker(t,e,n){let{x:i,z:r}=this.tileToWorld(t,e);this._addSolid(this._boxGeo(94,Xe,94,140),n,i,Xe/2,r,!0,0,"stone"),this.blocked[e*40+t]=1,this.propTop[e*40+t]=Xe}_prop(t,e,n){let{x:i,z:r}=this.tileToWorld(t,e);return this.blocked[e*40+t]=1,{x:i,z:r}}_buildProps(){let t={crate:this._pbr(this.tex.crate,{roughness:.88}),concrete:this._pbr(this.tex.concrete),metalRed:this._pbr(this.tex.metalRed,{roughness:.58,metalness:.55}),metalBlue:this._pbr(this.tex.metalBlue,{roughness:.58,metalness:.55}),metalGreen:this._pbr(this.tex.metalGreen,{roughness:.58,metalness:.55})},e=i=>t[i]||t.concrete,n=i=>i&&i.indexOf("metal")===0?"metal":"stone";for(let i of this.def.props||[])switch(i.t){case"crate":{let r=i.s??100,a=i.h??r,o=i.rot??(i.x*13+i.z*7)%100/1e3-.05;this._addSolid(this._boxGeo(r,a,r,96),e("crate"),i.x,a/2,i.z,!0,o,"wood");let l=new bt(new Sn(r,r),new xn({color:0,transparent:!0,opacity:.16,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.set(i.x,a+.6,i.z),this.scene.add(l);break}case"barrel":{let r=i.r??30,a=i.h??96,o=new bt(new Hn(r,r,a,12),e(i.mat||"metalRed"));o.position.set(i.x,a/2,i.z),this.scene.add(o),this.solids.push(o),this.colliders.push({x0:i.x-r,x1:i.x+r,y0:0,y1:a,z0:i.z-r,z1:i.z+r,mat:"metal"});break}case"box":{let r=this._boxGeo(i.w,i.h,i.d,i.uv??128);this._addSolid(r,e(i.mat),i.x,i.y??i.h/2,i.z,i.solid!==!1,i.rot||0,n(i.mat));break}case"blocker":this._addTileBlocker(i.cx,i.cz,e(i.mat));break;default:break}for(let i of this.def.decor||[])if(i.kind==="cylinder"){let r=new bt(new Hn(i.r0,i.r1,i.h,8),e(i.mat));r.position.set(i.x,i.y,i.z),this.scene.add(r)}}_markPropTiles(){for(let t of this.colliders){if(t.y1>=Xe-1||t.y0>40)continue;let e=t.x1-t.x0,n=t.z1-t.z0;if(e>700||n>700)continue;let i=Math.floor((t.x0+2e3)/100),r=Math.floor((t.x1+2e3)/100),a=Math.floor((t.z0+2e3)/100),o=Math.floor((t.z1+2e3)/100);for(let l=a;l<=o;l++)for(let c=i;c<=r;c++){if(!this.isFloorTile(c,l))continue;let h=this.tileToWorld(c,l),u=26;if(h.x>t.x0-u&&h.x<t.x1+u&&h.z>t.z0-u&&h.z<t.z1+u){let d=l*40+c;this.blocked[d]=1,t.y1>this.propTop[d]&&(this.propTop[d]=t.y1)}}}}_buildSpawns(){for(let t of["T","CT"]){let e=this.def.spawns&&this.def.spawns[t];if(!e)continue;let n=e.count??5,i=e.phase||0;for(let r=0;r<n;r++){let a=r/n*Math.PI*2+i;this.spawns[t].push({x:e.x+Math.cos(a)*(e.rx??190),z:e.z+Math.sin(a)*(e.rz??110),yaw:e.yaw||0})}}}_buildCeilings(){let t=this._pbr(this.tex.concrete,{side:an,color:10722448,emissive:1775894,envMapIntensity:.2}),e=new xn({color:16769200,transparent:!0,opacity:.55,depthWrite:!1,side:an});for(let n of this.def.ceilings||[]){let i=n.x1-n.x0,r=n.z1-n.z0,a=this._boxGeo(i,30,r,200),o=new bt(a,t);o.position.set((n.x0+n.x1)/2,Xe-15,(n.z0+n.z1)/2),this.scene.add(o),this.ceilingZones.push(n);let l=(n.x0+n.x1)/2,c=(n.z0+n.z1)/2,h=new Gn(16763794,.85,1100,1.6);h.position.set(l,Xe-70,c),this.scene.add(h);let u=new bt(new Sn(90,90),e);u.rotation.x=Math.PI/2,u.position.set(l,Xe-34,c),this.scene.add(u)}}_buildLabels(){let t=(e,n)=>{let i=document.createElement("canvas");i.width=i.height=256;let r=i.getContext("2d");r.fillStyle="rgba(0,0,0,0)",r.fillRect(0,0,256,256),r.font="bold 200px Impact, Arial Black, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=n,r.globalAlpha=.55,r.fillText(e,128,138);let a=new We(i);return a.colorSpace=Jt,a};for(let e of Object.keys(this.sites)){let n=this.sites[e],i=new bt(new Sn(420,420),new xn({map:t(e,"#e8dcc0"),transparent:!0,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.set((n.x0+n.x1)/2,.8,(n.z0+n.z1)/2),this.scene.add(i)}}siteAt(t,e){for(let n of Object.keys(this.sites)){let i=this.sites[n];if(t>=i.x0&&t<=i.x1&&e>=i.z0&&e<=i.z1)return n}return null}raycast(t,e,n=8e3){let i=n,r=null,a=this.colliders;for(let o=0;o<a.length;o++){let l=a[o],c=0,h=i,u=-1,d=0,p=!0;for(let g=0;g<3;g++){let x=g===0?t.x:g===1?t.y:t.z,m=g===0?e.x:g===1?e.y:e.z,f=g===0?l.x0:g===1?l.y0:l.z0,v=g===0?l.x1:g===1?l.y1:l.z1;if(Math.abs(m)<1e-8){if(x<f||x>v){p=!1;break}}else{let y=(f-x)/m,w=(v-x)/m,I=-1;if(y>w){let A=y;y=w,w=A,I=1}if(y>c&&(c=y,u=g,d=I),w<h&&(h=w),c>h){p=!1;break}}}p&&c>0&&c<i&&(i=c,r={dist:c,nx:u===0?d:0,ny:u===1?d:0,nz:u===2?d:0,mat:l.mat||"stone"})}if(e.y<-1e-6){let o=-t.y/e.y;if(o>0&&o<i){let l=t.x+e.x*o,c=t.z+e.z*o;this.isFloorAt(l,c)&&(r={dist:o,nx:0,ny:1,nz:0,mat:"sand"})}}return r}lineOfSight(t,e){let n=e.x-t.x,i=e.y-t.y,r=e.z-t.z,a=Math.sqrt(n*n+i*i+r*r);if(a<1)return!0;let o={x:n/a,y:i/a,z:r/a};return!this.raycast(t,o,a-4)}neighbors(t,e){let n=[],i=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];for(let[r,a]of i){let o=t+r,l=e+a;this.isWalkable(o,l)&&(r&&a&&(!this.isWalkable(t+r,e)||!this.isWalkable(t,e+a))||n.push({cx:o,cz:l,cost:r&&a?1.414:1}))}return n}findPath(t,e){let n=this.worldToTile(t.x,t.z),i=this.worldToTile(e.x,e.z);if(!this.isWalkable(i.cx,i.cz)){let x=null,m=1/0;for(let f=-3;f<=3;f++)for(let v=-3;v<=3;v++){if(!this.isWalkable(i.cx+v,i.cz+f))continue;let y=v*v+f*f;y<m&&(m=y,x={cx:i.cx+v,cz:i.cz+f})}if(!x)return null;i.cx=x.cx,i.cz=x.cz}if(!this.isWalkable(n.cx,n.cz)){let x=null,m=1/0;for(let f=-2;f<=2;f++)for(let v=-2;v<=2;v++){if(!this.isWalkable(n.cx+v,n.cz+f))continue;let y=v*v+f*f;y<m&&(m=y,x={cx:n.cx+v,cz:n.cz+f})}if(!x)return null;n.cx=x.cx,n.cz=x.cz}let r=n.cz*40+n.cx,a=i.cz*40+i.cx;if(r===a)return[];let o=new Map([[r,0]]),l=new Map,c=new Set,h=(x,m)=>Math.hypot(x-i.cx,m-i.cz),u=[],d=x=>{u.push(x);let m=u.length-1;for(;m>0;){let f=m-1>>1;if(u[f].f<=u[m].f)break;let v=u[f];u[f]=u[m],u[m]=v,m=f}},p=()=>{let x=u[0],m=u.pop();if(u.length){u[0]=m;let f=0;for(;;){let v=f*2+1,y=v+1,w=f;if(v<u.length&&u[v].f<u[w].f&&(w=v),y<u.length&&u[y].f<u[w].f&&(w=y),w===f)break;let I=u[w];u[w]=u[f],u[f]=I,f=w}}return x};d({key:r,cx:n.cx,cz:n.cz,f:h(n.cx,n.cz)});let g=0;for(;u.length&&g++<8e3;){let x=p();if(!c.has(x.key)){if(c.add(x.key),x.key===a){let m=[],f=a;for(;f!==r&&(m.push(this.tileToWorld(f%40,Math.floor(f/40))),f=l.get(f),f!==void 0););return m.reverse(),m}for(let m of this.neighbors(x.cx,x.cz)){let f=m.cz*40+m.cx;if(c.has(f))continue;let v=(o.get(x.key)??0)+m.cost;v<(o.get(f)??1/0)&&(l.set(f,x.key),o.set(f,v),d({key:f,cx:m.cx,cz:m.cz,f:v+h(m.cx,m.cz)}))}}}return null}randomWalkableNear(t,e,n=800){for(let i=0;i<30;i++){let r=Math.random()*Math.PI*2,a=Math.random()*n,o=t+Math.cos(r)*a,l=e+Math.sin(r)*a;if(this.isWalkableAt(o,l))return{x:o,z:l}}return{x:t,z:e}}};var du={id:"de_outpost",label:"DE_OUTPOST",areas:[{name:"T Spawn",x0:-500,x1:500,z0:1200,z1:1900,kind:"tspawn"},{name:"T Long",x0:400,x1:1e3,z0:1380,z1:1720,kind:"road"},{name:"Long A",x0:900,x1:1280,z0:-520,z1:1700,kind:"road"},{name:"A Site",x0:900,x1:1700,z0:-920,z1:-380,kind:"site"},{name:"CT Ramp",x0:320,x1:1e3,z0:-1120,z1:-700,kind:"road"},{name:"CT Spawn",x0:-620,x1:420,z0:-1520,z1:-880,kind:"ctspawn"},{name:"CT Mid",x0:-320,x1:320,z0:-1080,z1:-680,kind:"road"},{name:"Top Mid",x0:-320,x1:320,z0:-700,z1:-180,kind:"road"},{name:"Mid",x0:-160,x1:160,z0:-250,z1:1350,kind:"road"},{name:"Lower Tunnel",x0:-980,x1:-120,z0:700,z1:960,kind:"tunnel"},{name:"B Tunnel",x0:-1280,x1:-880,z0:-470,z1:1700,kind:"tunnel"},{name:"B Site",x0:-1720,x1:-880,z0:-920,z1:-300,kind:"site"},{name:"B Doors",x0:-1480,x1:-380,z0:-1280,z1:-860,kind:"road"},{name:"T Tunnel",x0:-980,x1:-420,z0:1380,z1:1720,kind:"tunnel"}],ceilings:[{x0:-980,x1:-120,z0:700,z1:960},{x0:-1280,x1:-880,z0:300,z1:1700},{x0:-980,x1:-420,z0:1380,z1:1720}],sites:{A:{name:"A",x0:950,x1:1650,z0:-880,z1:-420},B:{name:"B",x0:-1680,x1:-920,z0:-880,z1:-340}},spawns:{T:{x:0,z:1550,yaw:0,count:5,rx:190,rz:110},CT:{x:-100,z:-1300,yaw:Math.PI,count:5,rx:200,rz:110,phase:.6}},props:[{t:"crate",x:1150,z:-700,s:120,h:64},{t:"crate",x:1270,z:-700,s:120,h:120},{t:"crate",x:1150,z:-580,s:100,h:32},{t:"crate",x:1450,z:-820,s:110,h:64},{t:"crate",x:1560,z:-800,s:110,h:32},{t:"crate",x:1500,z:-620,s:120,h:120},{t:"crate",x:-1450,z:-700,s:120,h:64},{t:"crate",x:-1330,z:-700,s:120,h:32},{t:"crate",x:-1450,z:-560,s:110,h:110},{t:"crate",x:-1120,z:-800,s:120,h:64},{t:"crate",x:-1e3,z:-640,s:110,h:32},{t:"box",x:-1250,y:125,z:-430,w:340,h:250,d:120,mat:"metalBlue"},{t:"box",x:-960,y:125,z:-600,w:120,h:250,d:300,mat:"metalGreen"},{t:"crate",x:300,z:1500,s:110,h:32},{t:"crate",x:300,z:1610,s:110,h:64},{t:"box",x:-300,y:60,z:1700,w:200,h:120,d:90,mat:"concrete"},{t:"barrel",x:-420,z:1350},{t:"barrel",x:-380,z:1420},{t:"box",x:1120,y:45,z:980,w:200,h:90,d:110,mat:"metalBlue"},{t:"box",x:1120,y:125,z:980,w:130,h:70,d:108,mat:"metalBlue"},{t:"crate",x:1010,z:460,s:100,h:32},{t:"crate",x:1180,z:-100,s:100,h:64},{t:"box",x:1090,y:150,z:750,w:300,h:16,d:90,mat:"concrete"},{t:"box",x:900,y:220,z:620,w:24,h:440,d:90,mat:"concrete"},{t:"box",x:1280,y:220,z:620,w:24,h:440,d:90,mat:"concrete"},{t:"box",x:1090,y:410,z:620,w:400,h:60,d:30,mat:"concrete"},{t:"blocker",cx:19,cz:23,mat:"concrete"},{t:"blocker",cx:18,cz:17,mat:"concrete"},{t:"blocker",cx:20,cz:29,mat:"concrete"},{t:"box",x:-160,y:220,z:300,w:30,h:440,d:100,mat:"concrete"},{t:"box",x:160,y:220,z:300,w:30,h:440,d:100,mat:"concrete"},{t:"box",x:0,y:410,z:300,w:360,h:60,d:30,mat:"concrete"},{t:"crate",x:120,z:180,s:100,h:64},{t:"crate",x:-240,z:-400,s:110,h:64},{t:"crate",x:240,z:-420,s:110,h:32},{t:"barrel",x:180,z:-820},{t:"box",x:-450,y:65,z:-1e3,w:240,h:130,d:110,mat:"concrete"},{t:"box",x:250,y:45,z:-1050,w:180,h:90,d:100,mat:"concrete"},{t:"barrel",x:-560,z:-1400},{t:"crate",x:120,z:-1300,s:100,h:64},{t:"crate",x:-1180,z:900,s:100,h:32},{t:"crate",x:-1e3,z:300,s:100,h:64},{t:"barrel",x:-1220,z:1400},{t:"barrel",x:-1180,z:1450},{t:"crate",x:-500,z:830,s:100,h:32},{t:"crate",x:520,z:-940,s:100,h:32},{t:"crate",x:760,z:-1050,s:110,h:64},{t:"box",x:-1150,y:220,z:-1e3,w:30,h:440,d:110,mat:"concrete"},{t:"box",x:-700,y:220,z:-1e3,w:30,h:440,d:110,mat:"concrete"},{t:"crate",x:-1e3,z:-1120,s:100,h:32},{t:"crate",x:-620,z:-1140,s:100,h:64}],ladders:[{x0:900,x1:950,z0:700,z1:800,y0:0,y1:170,face:"x+"}],decor:[{kind:"cylinder",x:1780,y:190,z:-700,r0:10,r1:14,h:380,mat:"concrete"}]};var fu={de_outpost:du},Ul="de_outpost";function pu(s){let t=fu[s]||fu[Ul];if(!t)throw new Error(`\u672A\u77E5\u5730\u56FE\uFF1A${s}`);return t}var ft=null,Ke=null,ui=null,xs=null,Ta=null,wa=null,Nl=null,_u=Xs.volume,Rx=.075,mu={pistol:{crack:2100,body:700,sub:150,decay:.1,gain:.55,mechFreq:3800,mechDelay:.006,taps:[[.038,.2,3400],[.092,.11,2e3],[.17,.06,1300]]},deagle:{crack:1500,body:520,sub:92,decay:.22,gain:.88,mechFreq:3200,mechDelay:.005,taps:[[.05,.24,3e3],[.118,.14,1700],[.225,.08,1100]]},smg:{crack:2500,body:860,sub:178,decay:.07,gain:.46,mechFreq:4300,mechDelay:.018,taps:[[.034,.17,3600],[.08,.09,2100],[.15,.05,1400]]},ak47:{crack:1350,body:430,sub:108,decay:.17,gain:.82,mechFreq:3400,mechDelay:.012,taps:[[.046,.23,3100],[.11,.13,1800],[.21,.075,1150]]},m4a1:{crack:1750,body:520,sub:122,decay:.15,gain:.74,mechFreq:3600,mechDelay:.011,taps:[[.042,.21,3300],[.102,.12,1900],[.195,.07,1200]]},awp:{crack:950,body:300,sub:68,decay:.58,gain:1,mechFreq:2600,mechDelay:.028,taps:[[.062,.3,2600],[.148,.19,1500],[.29,.11,950],[.48,.05,700]]},default:{crack:2e3,body:650,sub:140,decay:.12,gain:.6,mechFreq:3600,mechDelay:.01,taps:[[.044,.21,3200],[.104,.12,1850],[.198,.07,1200]]}};function Cx(s=.62,t=2.6){let e=ft.sampleRate,n=Math.max(1,Math.floor(e*s)),i=ft.createBuffer(2,n,e);for(let o=0;o<2;o++){let l=i.getChannelData(o),c=0;for(let u=0;u<n;u++){let d=u/n,p=Math.pow(1-d,t),g=(Math.random()*2-1)*p,x=.34+.62*(1-d);c+=(g-c)*x,l[u]=c}[.011,.019,.031,.047].forEach((u,d)=>{let p=Math.floor(u*e)+(o?37:0);p<n&&(l[p]+=(.55-d*.1)*(o?-1:1))})}let r=0;for(let o=0;o<2;o++){let l=i.getChannelData(o);for(let c=0;c<n;c++){let h=Math.abs(l[c]);h>r&&(r=h)}}let a=r>0?.92/r:1;for(let o=0;o<2;o++){let l=i.getChannelData(o);for(let c=0;c<n;c++)l[c]*=a}return i}function zl(){if(ft)return ft;let s=window.AudioContext||window.webkitAudioContext;if(!s)return null;ft=new s,ui=ft.createDynamicsCompressor(),ui.threshold.value=-8,ui.knee.value=6,ui.ratio.value=8,ui.attack.value=.001,ui.release.value=.12;let t=ft.createGain();t.gain.value=1.7,ui.connect(t),t.connect(ft.destination),Ke=ft.createGain(),Ke.gain.value=_u,Ke.connect(ui),xs=ft.createGain(),xs.gain.value=Rx,wa=ft.createConvolver(),wa.buffer=Cx(),Ta=ft.createGain(),Ta.gain.value=1,xs.connect(wa),wa.connect(Ta),Ta.connect(Ke);let e=ft.sampleRate*2;Nl=ft.createBuffer(1,e,ft.sampleRate);let n=Nl.getChannelData(0);for(let i=0;i<e;i++)n[i]=Math.random()*2-1;return ft}function vu(s){_u=s,Ke&&(Ke.gain.value=s)}var kl=null;function Mu(s){kl=s}function Px(s,t){if(!kl||!s||!t)return!1;try{return!!kl(s,t)}catch{return!1}}function ze(){return ft?ft.currentTime:0}function bu(){let s=ft.createBufferSource();return s.buffer=Nl,s.loop=!0,s.playbackRate.value=.9+Math.random()*.2,s}function Ol(s){if(!ft||!s)return;let t=ft.listener;if(!t)return;let e=s.yaw||0,n=-Math.sin(e),i=-Math.cos(e);try{t.positionX?(t.positionX.value=s.x,t.positionY.value=s.y,t.positionZ.value=s.z,t.forwardX.value=n,t.forwardY.value=0,t.forwardZ.value=i,t.upX.value=0,t.upY.value=1,t.upZ.value=0):t.setPosition&&(t.setPosition(s.x,s.y,s.z),t.setOrientation(n,0,i,0,1,0))}catch{}}function hn(s,t){let e=ft.createGain();if(!s||!t)return e.connect(Ke),e.connect(xs),e;let n=s.x-t.x,i=(s.y||0)-(t.y||0),r=s.z-t.z,a=Math.sqrt(n*n+i*i+r*r);if(a<110)return e.connect(Ke),e.connect(xs),e;Ol(t);let o=Px(s,t),l=ft.createBiquadFilter();l.type="lowpass",l.frequency.value=Math.max(420,18e3*Math.exp(-a/1400)),l.Q.value=.4;let c=ft.createPanner();c.panningModel="HRTF",c.distanceModel="inverse",c.refDistance=140,c.rolloffFactor=1.05,c.maxDistance=6e3,c.coneInnerAngle=360;let h=s.y||0;c.positionX?(c.positionX.value=s.x,c.positionY.value=h,c.positionZ.value=s.z):c.setPosition&&c.setPosition(s.x,h,s.z),e.connect(l);let u=l;if(o){let p=ft.createBiquadFilter();p.type="lowpass",p.frequency.value=780,p.Q.value=.7;let g=ft.createGain();g.gain.value=.42,l.connect(p),p.connect(g),u=g}u.connect(c),c.connect(Ke);let d=ft.createGain();return d.gain.value=Math.min(2.6,.55+a/1400),c.connect(d),d.connect(xs),e}function se(s,t,{dur:e=.12,freq:n=2400,q:i=1,gain:r=.6,type:a="lowpass",decay:o=.09,attack:l=.002}){let c=bu(),h=ft.createBiquadFilter();h.type=a,h.frequency.value=n,h.Q.value=i;let u=ft.createGain(),d=Math.max(5e-4,r),p=t+Math.max(5e-4,l),g=t+Math.max(l+.012,o);u.gain.setValueAtTime(1e-4,t),u.gain.exponentialRampToValueAtTime(d,p),u.gain.exponentialRampToValueAtTime(8e-4,g),c.connect(h),h.connect(u),u.connect(s),c.start(t),c.stop(t+Math.max(e,g-t)+.08)}function di(s,t,e=90,n=.18,i=.5){let r=ft.createOscillator(),a=ft.createGain();r.type="sine",r.frequency.setValueAtTime(e*1.7,t),r.frequency.exponentialRampToValueAtTime(Math.max(28,e*.55),t+n),a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(Math.max(5e-4,i),t+.004),a.gain.exponentialRampToValueAtTime(.001,t+n),r.connect(a),a.connect(s),r.start(t),r.stop(t+n+.02)}function Ii(s,t,e=3800,n=.25){let i=bu(),r=ft.createBiquadFilter();r.type="bandpass",r.frequency.value=e,r.Q.value=7;let a=ft.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(Math.max(4e-4,n),t+8e-4),a.gain.exponentialRampToValueAtTime(6e-4,t+.014),i.connect(r),r.connect(a),a.connect(s),i.start(t),i.stop(t+.035)}function Lx(s,t,e){let n=mu[e]||mu.default,i=(o,l=.07)=>o*(1+(Math.random()*2-1)*l),r=i(n.gain,.09),a=i(n.sub,.05);se(s,t,{freq:i(n.crack),gain:r*.85,decay:n.decay*.55,type:"highpass",attack:.0012}),se(s,t,{freq:i(n.body),gain:r*.75,decay:n.decay,type:"lowpass",q:.9,attack:.0025}),di(s,t,a,n.decay*1.25,r*.5),se(s,t,{freq:i(a*3.2,.1),gain:r*.4,decay:n.decay*.8,type:"lowpass",q:.8,attack:.003}),Ii(s,t+i(n.mechDelay||.008,.35),n.mechFreq,r*.3);for(let[o,l,c]of n.taps||[])se(s,t+o,{freq:c,gain:r*l,decay:.05+o*.2,type:"lowpass",q:.7,attack:.004})}function Fl(s,t,e){if(!ft)return;let n=ze(),i=hn(t,e);if(s==="knife"){se(i,n,{freq:850,gain:.085,decay:.15,type:"bandpass",q:1.3,attack:.035}),se(i,n+.02,{freq:2400,gain:.028,decay:.1,type:"highpass",attack:.03});return}Lx(i,n,s)}function Su(s,t){if(!ft)return;let e=ze(),n=hn(s,t);di(n,e,150,.13,.3),se(n,e,{freq:700,gain:.16,decay:.1,type:"lowpass",attack:.002}),se(n,e+.01,{freq:1900,gain:.05,decay:.08,type:"bandpass",q:2,attack:.004})}var gu={sand:{freq:900,gain:.16,decay:.065,q:1.4,type:"lowpass",grit:5200,gritGain:.055,body:95,bodyGain:.1,ring:0,ringGain:0},stone:{freq:1900,gain:.14,decay:.045,q:2.2,type:"bandpass",grit:4200,gritGain:.028,body:120,bodyGain:.09,ring:0,ringGain:0},wood:{freq:620,gain:.15,decay:.075,q:3,type:"bandpass",grit:0,gritGain:0,body:85,bodyGain:.1,ring:340,ringGain:.05},metal:{freq:2600,gain:.12,decay:.06,q:5,type:"bandpass",grit:0,gritGain:0,body:110,bodyGain:.07,ring:720,ringGain:.06}};function Bl(s,t,e="sand"){if(!ft)return;let n=gu[e]||gu.sand,i=ze(),r=hn(s,t),a=.9+Math.random()*.2;se(r,i,{freq:n.freq*a,gain:n.gain*(.9+Math.random()*.2),decay:n.decay*a,type:n.type,q:n.q,attack:.003}),n.body&&di(r,i,n.body*a,.075,n.bodyGain*(.85+Math.random()*.3)),n.grit&&se(r,i+.006+Math.random()*.006,{freq:n.grit*a,gain:n.gritGain,decay:.04+Math.random()*.02,type:"highpass"}),n.ring&&se(r,i+.004,{freq:n.ring*a,gain:n.ringGain,decay:.09,type:"bandpass",q:9,attack:.002})}var xu={rifle:{out:.06,seat:.44,bolt:.74,magHz:250,metalHz:3100,boltGain:.22},smg:{out:.05,seat:.46,bolt:.76,magHz:300,metalHz:3400,boltGain:.2},pistol:{out:.05,seat:.45,bolt:.76,magHz:430,metalHz:2500,boltGain:.24},sniper:{out:.04,seat:.4,bolt:.6,magHz:230,metalHz:2100,boltGain:.26}};function Eu(s){if(!ft)return;let t=jt[s],e=t&&t.reload?t.reload:2.2,n=xu[t&&t.cls||"rifle"]||xu.rifle,i=ze(),r=hn(null,null);Ii(r,i+e*.015,n.metalHz*.8,.16),Ii(r,i+e*n.out,n.metalHz,.2),se(r,i+e*n.out+.012,{freq:900,gain:.07,decay:.06,type:"lowpass"}),se(r,i+Math.max(.01,e*n.seat-.06),{freq:1400,gain:.05,decay:.07,type:"bandpass",q:2}),Ii(r,i+e*n.seat,n.metalHz*.72,.26),di(r,i+e*n.seat,n.magHz,.08,.18),Ii(r,i+e*n.bolt,n.metalHz*1.25,n.boltGain),se(r,i+e*n.bolt+.02,{freq:2600,gain:.04,decay:.05,type:"bandpass",q:3})}function qs(s){if(!ft)return;let t=jt[s],e=t?t.cls:"rifle",n=ze(),i=hn(null,null);se(i,n,{freq:1200,gain:.07,decay:.09,type:"bandpass",q:1.2,attack:.006}),Ii(i,n+.02,e==="sniper"?2100:3e3,.13),se(i,n+.05,{freq:700,gain:.05,decay:.06,type:"lowpass"})}function Tu(){if(!ft)return;let s=ze(),t=hn(null,null);se(t,s,{freq:1600,gain:.1,decay:.1,type:"bandpass",q:1.4,attack:.004}),se(t,s+.05,{freq:600,gain:.05,decay:.06,type:"lowpass"})}function Hl(s=!0){if(!ft)return;let t=ze(),e=hn(null,null);Ii(e,t,s?1450:1050,.17),se(e,t+.008,{freq:900,gain:.03,decay:.04,type:"lowpass"})}var yu={sand:{freq:850,q:.8,gain:.15,decay:.085,type:"lowpass"},stone:{freq:2500,q:1.8,gain:.19,decay:.06,type:"bandpass"},wood:{freq:720,q:3.4,gain:.17,decay:.1,type:"bandpass"},metal:{freq:3400,q:7,gain:.14,decay:.14,type:"bandpass"}};function wu(s,t,e){if(!ft)return;let n=yu[s]||yu.stone,i=ze(),r=hn(t,e);if(se(r,i,{freq:n.freq,gain:n.gain,decay:n.decay,type:n.type,q:n.q,attack:.001}),s==="metal"){let a=ft.createOscillator(),o=ft.createGain();a.type="triangle",a.frequency.setValueAtTime(2400,i),a.frequency.exponentialRampToValueAtTime(1450,i+.16),o.gain.setValueAtTime(1e-4,i),o.gain.exponentialRampToValueAtTime(.05,i+.004),o.gain.exponentialRampToValueAtTime(8e-4,i+.18),a.connect(o),o.connect(r),a.start(i),a.stop(i+.2)}}function Au(s=!1){if(!ft)return;let t=ze(),e=hn(null,null);s?(se(e,t,{freq:5e3,gain:.3,decay:.07,type:"bandpass",q:6,attack:.001}),di(e,t,1200,.09,.28)):(se(e,t,{freq:1400,gain:.14,decay:.05,type:"bandpass",q:3}),di(e,t,500,.05,.18))}function Ru(s=!1){if(!ft)return;let t=ze(),e=ft.createOscillator(),n=ft.createGain();e.type="square",e.frequency.value=s?2400:1500,n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(.25,t+.005),n.gain.exponentialRampToValueAtTime(1e-4,t+.07),e.connect(n),n.connect(Ke),e.start(t),e.stop(t+.09)}function Cu(s,t){if(!ft)return;let e=ze(),n=hn(s,t);se(n,e,{freq:700,gain:1,decay:1.1,dur:1.4,attack:.004}),se(n,e,{freq:90,gain:.9,decay:1.5,dur:1.6,type:"lowpass",attack:.006}),di(n,e,45,1.2,.9),se(n,e+.18,{freq:4200,gain:.22,decay:.6,type:"highpass",attack:.02})}function Pu(s,t){if(!ft)return;let e=ze(),n=hn(s,t);se(n,e,{freq:9e3,gain:.7,decay:.35,type:"highpass",attack:8e-4}),di(n,e,300,.5,.3);let i=ft.createOscillator(),r=ft.createGain();i.type="sine",i.frequency.setValueAtTime(2650,e),i.frequency.linearRampToValueAtTime(2300,e+1.6),r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.05,e+.08),r.gain.exponentialRampToValueAtTime(1e-4,e+1.8),i.connect(r),r.connect(Ke),i.start(e),i.stop(e+1.9)}function Lu(){if(!ft)return;let s=ze();se(hn(null,null),s,{freq:1200,gain:.2,decay:.04,type:"bandpass",q:8,attack:.001})}function ys(){if(!ft)return;let s=ze(),t=ft.createOscillator(),e=ft.createGain();t.type="triangle",t.frequency.setValueAtTime(660,s),t.frequency.exponentialRampToValueAtTime(1320,s+.08),e.gain.setValueAtTime(1e-4,s),e.gain.exponentialRampToValueAtTime(.18,s+.006),e.gain.exponentialRampToValueAtTime(.001,s+.12),t.connect(e),e.connect(Ke),t.start(s),t.stop(s+.14)}function Di(){if(!ft)return;let s=ze(),t=ft.createOscillator(),e=ft.createGain();t.type="square",t.frequency.value=900,e.gain.setValueAtTime(1e-4,s),e.gain.exponentialRampToValueAtTime(.08,s+.003),e.gain.exponentialRampToValueAtTime(.001,s+.05),t.connect(e),e.connect(Ke),t.start(s),t.stop(s+.06)}function Iu(){if(!ft)return;let s=ze(),t=ft.createOscillator(),e=ft.createGain();t.type="sawtooth",t.frequency.setValueAtTime(220,s),t.frequency.exponentialRampToValueAtTime(440,s+.25),e.gain.setValueAtTime(1e-4,s),e.gain.exponentialRampToValueAtTime(.12,s+.05),e.gain.exponentialRampToValueAtTime(.001,s+.35),t.connect(e),e.connect(Ke),t.start(s),t.stop(s+.4)}function Du(){ft&&ft.state==="suspended"&&ft.resume()}var Ix=56,Dx=64,Ux=10,Nx=24,kx=2;function zx(s="#ffffff",t=.15){let n=document.createElement("canvas");n.width=n.height=64;let i=n.getContext("2d"),r=i.createRadialGradient(64/2,64/2,64*t,64/2,64/2,64/2);r.addColorStop(0,s),r.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=r,i.fillRect(0,0,64,64);let a=new We(n);return a.colorSpace=Jt,a}function Ox(){let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,1,64/2,64/2,64/2);n.addColorStop(0,"rgba(20,16,12,0.95)"),n.addColorStop(.5,"rgba(30,24,18,0.55)"),n.addColorStop(1,"rgba(30,24,18,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let i=new We(t);return i.colorSpace=Jt,i}var Oe={scene:null,camera:null,game:null,items:[],smokeVolumes:[],shake:0,_softTex:null,_decalTex:null,init(s,t,e){this.scene=s,this.camera=t,this.game=e,this._softTex=zx("rgba(255,240,180,0.95)"),this._decalTex=Ox(),this._buildPools()},_buildPools(){this._sprites=[];for(let i=0;i<Ix;i++){let r=new ci({map:this._softTex,transparent:!0,depthWrite:!1,blending:ri}),a=new Ri(r);a.visible=!1,this.scene.add(a),this._sprites.push({o:a,m:r,on:!1,life:0,maxLife:1,v:new T,kind:"spark",grow:0})}this._spriteCursor=0;let s=new Sn(9,9),t=new xn({map:this._decalTex,transparent:!0,depthWrite:!1,opacity:.9,polygonOffset:!0,polygonOffsetFactor:-4});this._decals=[];for(let i=0;i<Dx;i++){let r=new bt(s,t);r.visible=!1,this.scene.add(r),this._decals.push(r)}this._decalCursor=0,this._tracers=[];for(let i=0;i<Ux;i++){let r=new ke;r.setAttribute("position",new be(new Float32Array(6),3));let a=new Hs({color:16773296,transparent:!0,opacity:.55,blending:ri,depthWrite:!1}),o=new na(r,a);o.visible=!1,o.frustumCulled=!1,this.scene.add(o),this._tracers.push({o,m:a,on:!1,life:0,maxLife:.05})}this._tracerCursor=0;let e=new Ce(2,2,5),n=new pe({color:13214247});this._shells=[];for(let i=0;i<Nx;i++){let r=new bt(e,n);r.visible=!1,this.scene.add(r),this._shells.push({o:r,on:!1,life:0,v:new T,rot:new T})}this._shellCursor=0,this._muzzleLights=[];for(let i=0;i<kx;i++){let r=new Gn(16764023,0,420);this.scene.add(r),this._muzzleLights.push({l:r,life:0,maxLife:.06,peak:0})}this._muzzleCursor=0,this._boomLight=new Gn(16755268,0,1920),this.scene.add(this._boomLight),this._boomLife=0,this._boomMax=.42,this._boomPeak=0},_sprite(s,t,{size:e=10,life:n=.3,kind:i="spark",v:r=null,grow:a=0,blending:o=ri}={}){let l=this._sprites[this._spriteCursor];return this._spriteCursor=(this._spriteCursor+1)%this._sprites.length,l.m.color.setHex(s),l.m.blending=o,l.m.opacity=1,l.o.position.copy(t),l.o.scale.set(e,e,1),l.o.visible=!0,l.on=!0,l.life=n,l.maxLife=n,l.kind=i,l.grow=a,r?l.v.copy(r):l.v.set(0,0,0),l},muzzle(s,t){let e=s.aimDir(),n=new T(s.pos.x,s.eyeY(),s.pos.z),i=new T(Math.cos(s.yaw),0,-Math.sin(s.yaw)),r=n.clone().addScaledVector(e,34).addScaledVector(i,9);r.y-=8;let a=22+Math.random()*12;this._sprite(16770208,r,{size:a,life:.055,kind:"flash"});let o=this._muzzleLights[this._muzzleCursor];this._muzzleCursor=(this._muzzleCursor+1)%this._muzzleLights.length,o.l.position.copy(r),o.life=o.maxLife,o.peak=3.2,this.shell(s,i)},shell(s,t){let e=this._shells[this._shellCursor];this._shellCursor=(this._shellCursor+1)%this._shells.length,e.o.position.set(s.pos.x,s.eyeY()-8,s.pos.z),e.o.visible=!0,e.on=!0,e.life=1.2,e.v.set(t.x*90+(Math.random()-.5)*40,120,t.z*90+(Math.random()-.5)*40),e.rot.set(Math.random()*12,Math.random()*12,0)},tracer(s,t){let e=this._tracers[this._tracerCursor];this._tracerCursor=(this._tracerCursor+1)%this._tracers.length;let n=e.o.geometry.attributes.position;n.setXYZ(0,s.x,s.y,s.z),n.setXYZ(1,t.x,t.y,t.z),n.needsUpdate=!0,e.o.visible=!0,e.on=!0,e.life=e.maxLife,e.m.opacity=.55},impact(s,t,e="stone"){let n=this._decals[this._decalCursor];this._decalCursor=(this._decalCursor+1)%this._decals.length,n.position.copy(s);let i=new T(t.x,t.y,t.z).normalize();n.lookAt(s.clone().add(i)),n.visible=!0;for(let a=0;a<3;a++){let o=new T(t.x*60+(Math.random()-.5)*90,t.y*60+Math.random()*90,t.z*60+(Math.random()-.5)*90);this._sprite(16760928,s,{size:6+Math.random()*8,life:.28,kind:"spark",v:o})}let r=s.clone().addScaledVector(i,4);if(e!=="metal"){let a=e==="wood"?10123858:12560516;this._sprite(a,r,{size:14,life:.5,kind:"grow",grow:30,blending:Mn})}wu(e,s,this.game.listenerPos())},blood(s,t=5){for(let e=0;e<t;e++){let n=new T((Math.random()-.5)*130,Math.random()*110,(Math.random()-.5)*130);this._sprite(10228756,s,{size:4+Math.random()*6,life:.45,kind:"spark",v:n,blending:Mn})}},knifeSwing(){},explosion(s,t=320){this._boomLight.position.copy(s),this._boomLight.position.y+=30,this._boomLife=this._boomMax,this._boomPeak=12;let e=new bt(new En(30,12,10),new xn({color:16759637,transparent:!0,opacity:.95,blending:ri,depthWrite:!1}));e.position.copy(s),this.scene.add(e),this.items.push({obj:e,life:.42,maxLife:.42,kind:"boom"});for(let n=0;n<18;n++){let i=new T((Math.random()-.5)*400,Math.random()*260,(Math.random()-.5)*400),r=n%3===0;this._sprite(r?3355443:16750916,s,{size:30+Math.random()*60,life:.7+Math.random()*.5,kind:"spark",v:i,blending:r?Mn:ri})}Cu(s,this.game.listenerPos()),this.shake=Math.max(this.shake,1)},smokeCloud(s){let t=new Lt;for(let n=0;n<16;n++){let i=new Ri(new ci({map:this._softTex,color:14211288,transparent:!0,opacity:0,depthWrite:!1})),r=n/16*Math.PI*2,a=Math.random()*90;i.position.set(Math.cos(r)*a,20+Math.random()*120,Math.sin(r)*a);let o=180+Math.random()*120;i.scale.set(o,o,1),t.add(i)}t.position.copy(s),this.scene.add(t);let e={pos:s.clone(),radius:190,until:this.game.time+16,grp:t};this.smokeVolumes.push(e),this.items.push({obj:t,life:16,maxLife:16,kind:"smoke",vol:e})},blocksLineOfSight(s,t){for(let e of this.smokeVolumes){if(this.game.time>e.until)continue;let n=new T().subVectors(t,s),i=n.lengthSq();if(i<1)continue;let r=Math.max(0,Math.min(1,new T().subVectors(e.pos,s).dot(n)/i));if(s.clone().addScaledVector(n,r).distanceTo(e.pos)<e.radius*.85)return!0}return!1},update(s){this.shake=Math.max(0,this.shake-s*2.6);for(let t=0;t<this._sprites.length;t++){let e=this._sprites[t];if(!e.on)continue;if(e.life-=s,e.life<=0){e.on=!1,e.o.visible=!1;continue}let n=1-e.life/e.maxLife;switch(e.kind){case"spark":e.v.y-=700*s,e.o.position.addScaledVector(e.v,s),e.m.opacity=1-n;break;case"grow":{let i=e.o.scale.x+e.grow*s;e.o.scale.set(i,i,1),e.m.opacity=(1-n)*.6;break}default:e.m.opacity=1-n;break}}for(let t=0;t<this._tracers.length;t++){let e=this._tracers[t];if(e.on){if(e.life-=s,e.life<=0){e.on=!1,e.o.visible=!1;continue}e.m.opacity=e.life/e.maxLife*.55}}for(let t=0;t<this._shells.length;t++){let e=this._shells[t];if(e.on){if(e.life-=s,e.life<=0){e.on=!1,e.o.visible=!1;continue}e.v.y-=800*s,e.o.position.addScaledVector(e.v,s),e.o.rotation.x+=e.rot.x*s,e.o.rotation.y+=e.rot.y*s,e.o.position.y<2&&(e.o.position.y=2,e.v.y*=-.3,e.v.x*=.6,e.v.z*=.6)}}for(let t=0;t<this._muzzleLights.length;t++){let e=this._muzzleLights[t];e.life<=0||(e.life-=s,e.l.intensity=e.life>0?e.life/e.maxLife*e.peak:0,e.life<=0&&(e.l.intensity=0))}this._boomLife>0&&(this._boomLife-=s,this._boomLight.intensity=this._boomLife>0?this._boomLife/this._boomMax*this._boomPeak:0,this._boomLife<=0&&(this._boomLight.intensity=0));for(let t=this.items.length-1;t>=0;t--){let e=this.items[t];e.life-=s;let n=e.obj;if(e.life<=0){this.scene.remove(n),n.geometry&&n.geometry.dispose?.(),n.material&&(Array.isArray(n.material)?n.material.forEach(r=>r.dispose?.()):n.material.dispose?.()),e.kind==="smoke"&&e.vol&&(this.smokeVolumes=this.smokeVolumes.filter(r=>r!==e.vol)),this.items.splice(t,1);continue}let i=1-e.life/e.maxLife;switch(e.kind){case"boom":{let r=30+i*330;n.scale.set(r/30,r/30,r/30),n.material.opacity=.95*(1-i)**1.5;break}case"smoke":{let r=Math.min(1,i*5),a=Math.min(1,(1-i)*3),o=Math.min(r,a);n.children.forEach(c=>{c.material.opacity=.72*o});let l=.6+i*.7;n.scale.set(l,1,l);break}default:break}}}},Fx=800,Aa=class{constructor(t,e,n,i,r){this.game=t,this.owner=e,this.kind=n,this.pos=i.clone(),this.vel=r.clone().multiplyScalar(n==="he"?1e3:950),this.vel.y+=110,this.fuse=pa[n]||3,this.dead=!1,this.bounces=0;let a=n==="he"?4872762:n==="flash"?10066329:9079408;this.mesh=new bt(new En(5,8,6),new pe({color:a})),this.mesh.position.copy(this.pos),t.scene.add(this.mesh)}update(t){if(this.dead)return;this.fuse-=t,this.vel.y-=Fx*t;let e=this.game.map,n=this.pos.clone().addScaledVector(this.vel,t);n.y<5&&(n.y=5,this.vel.y*=-.42,this.vel.x*=.72,this.vel.z*=.72,this.bounces++);let i=n.clone().sub(this.pos),r=i.length();if(r>.001){let a=i.clone().divideScalar(r),o=e.raycast(this.pos,a,r+4);if(o){let l=this.pos.clone().addScaledVector(a,Math.max(0,o.dist-3)),c=new T(o.nx,o.ny,o.nz);this.vel.reflect(c).multiplyScalar(.45),n.copy(l),this.bounces++}}this.pos.copy(n),this.mesh.position.copy(this.pos),this.mesh.rotation.x+=t*6,this.mesh.rotation.z+=t*4,this.fuse<=0&&this.explode()}explode(){this.dead=!0,this.game.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose();let t=this.kind;if(t==="he"){Oe.explosion(this.pos.clone());for(let e of this.game.players){if(!e.alive)continue;let i=new T(e.pos.x,e.pos.y+36,e.pos.z).distanceTo(this.pos);if(i>340)continue;let r=new T(e.pos.x,e.eyeY(),e.pos.z);if(!this.game.map.lineOfSight(this.pos,r))continue;let o=105*Math.max(0,1-i/340)**1.4;o>1&&Ys(this.game,e,this.owner,o,"chest",{id:"hegrenade",dmg:o})}}else if(t==="flash"){Pu(this.pos.clone(),this.game.listenerPos());for(let e of this.game.players){if(!e.alive)continue;let n=new T(e.pos.x,e.eyeY(),e.pos.z),i=n.distanceTo(this.pos);if(i>1500||!this.game.map.lineOfSight(this.pos,n))continue;let r=this.pos.clone().sub(n).normalize(),a=new T(-Math.sin(e.yaw),0,-Math.cos(e.yaw)),o=Math.max(0,a.dot(new T(r.x,0,r.z).normalize())),l=Math.max(0,1-i/1500)*(.35+o*.9);e.flashAmount=Math.min(1.4,e.flashAmount+l*1.5),e.isBot&&e.botOnFlashed?.(l)}}else Oe.smokeCloud(this.pos.clone())}};function $s(s){let t=jt[s];return t?{id:s,def:t,ammo:t.mag,reserve:t.res}:null}function Gl(s,t,e,n,i){let r=null;for(let a of s.players)if(!(!a.alive||a===i))for(let o of a.hitboxes()){let l={x0:a.pos.x-o.r,x1:a.pos.x+o.r,y0:o.y0,y1:o.y1,z0:a.pos.z-o.r,z1:a.pos.z+o.r},c=Bx(t,e,l);c!==null&&c>0&&c<n&&(!r||c<r.dist)&&(r={player:a,dist:c,group:o.group,friendly:!!(i&&a.team===i.team)})}return r&&(r.point=t.clone().addScaledVector(e,r.dist)),r}function Bx(s,t,e){let n=0,i=1/0;for(let r=0;r<3;r++){let a=r===0?s.x:r===1?s.y:s.z,o=r===0?t.x:r===1?t.y:t.z,l=r===0?e.x0:r===1?e.y0:e.z0,c=r===0?e.x1:r===1?e.y1:e.z1;if(Math.abs(o)<1e-8){if(a<l||a>c)return null}else{let h=(l-a)/o,u=(c-a)/o;if(h>u){let d=h;h=u,u=d}if(h>n&&(n=h),u<i&&(i=u),n>i)return null}}return n}function Vl(s,t,e,n,i){let r=s.map.raycast(e,n,8e3),a=r?r.dist:8e3,o=Gl(s,e,n,a,t),l=o?o.dist:a,c=e.clone().addScaledVector(n,l),h=e.clone().addScaledVector(n,24);if(Math.random()<.75&&Oe.tracer(h,c),o)o.friendly||(Ys(s,o.player,t,i.dmg,o.group,i,o.dist),Oe.blood(o.point,o.group==="head"?8:4),t===s.localPlayer&&(Au(o.group==="head"),s.hud.hitMarker(o.group==="head")));else if(r){let u=e.clone().addScaledVector(n,r.dist-.6);Oe.impact(u,{x:r.nx,y:r.ny,z:r.nz},r.mat)}return{end:c,hitPlayer:!!o}}function Ys(s,t,e,n,i,r,a){if(!t.alive)return 0;let o=a;if(o==null){let d=e&&e.pos?e.pos:t.pos;o=Math.hypot(d.x-t.pos.x,d.y-t.pos.y,d.z-t.pos.z)}let l=tu[i]??1,c=Math.pow(.985,o/100),h=n*l*c;if(e&&e!==t&&e.team===t.team)return 0;let u=t.takeDamage(h,e,i,r.id);return e===s.localPlayer&&t!==s.localPlayer&&s.hud.hitMarker(i==="head"),t===s.localPlayer&&u>0&&s.hud.damageFlash(u,e),u}var Zs=new T;function un(s,t,e,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;Zs.copy(t),Zs[n]=0,Zs.normalize();let c=.5*a/(a+o),h=1-Zs.angleTo(s)/l;return Math.sign(Zs[e])===1?h*c:o/(a+o)+c+c*(1-h)}var Ra=class extends Ce{constructor(t=1,e=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new T,l=new T,c=new T(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new T,x=.5/i;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=un(g,l,"z","y",r,n),d[f+1]=1-un(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[f+0]=1-un(g,l,"z","y",r,n),d[f+1]=1-un(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[f+0]=1-un(g,l,"x","z",r,t),d[f+1]=un(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-un(g,l,"x","z",r,t),d[f+1]=1-un(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-un(g,l,"x","y",r,t),d[f+1]=1-un(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[f+0]=un(g,l,"x","y",r,t),d[f+1]=1-un(g,l,"y","x",r,e);break}}};var Ks=ba(),ot={steel:new pe({map:Ks.metal,color:10923190}),steelDark:new pe({map:Ks.metal,color:6580594}),poly:new pe({map:Ks.poly,color:9607072}),black:new pe({color:1316120}),wood:new pe({map:Ks.wood,color:13806722}),woodDark:new pe({map:Ks.wood,color:9071176}),accent:new pe({color:9276288}),glass:new pe({color:1920867}),glove:new pe({color:10524284}),sleeve:new pe({color:3356458}),skin:new pe({color:12091994}),skinDark:new pe({color:9396802})},Ui="modern";function zu(){return Ui}function Ou(s){if(s!=="classic"&&s!=="modern"||s===Ui)return Ui;Ui=s;for(let t of Object.keys(js))delete js[t];return Ui}var Ca=null;function Hx(){if(Ca)return Ca;let s=lu(),t=(e,n)=>new pe({map:e,color:n,flatShading:!0});return Ca={steel:t(s.metal,10923190),steelDark:t(s.metal,6580594),accent:new pe({color:9276288,flatShading:!0}),wood:t(s.wood,13806722),woodDark:t(s.wood,9071176),poly:t(s.poly,9607072),black:new pe({color:1316120,flatShading:!0})},Ca}var Pa=null;function Je(){if(Pa)return Pa;let s=cu(),t=(e,n)=>new Tn({map:e.map,normalMap:e.normalMap,roughnessMap:e.roughnessMap,envMapIntensity:.55,...n});return Pa={steel:t(s.metal,{color:12172999,metalness:.86,roughness:.44}),steelDark:t(s.metal,{color:8291469,metalness:.9,roughness:.52}),accent:new Tn({color:10133672,metalness:.9,roughness:.38,envMapIntensity:.55}),wood:t(s.wood,{color:10517074,metalness:0,roughness:.66}),woodDark:t(s.wood,{color:7821103,metalness:0,roughness:.72}),poly:t(s.poly,{color:9278363,metalness:0,roughness:.74}),black:new Tn({color:1711394,metalness:.55,roughness:.48,envMapIntensity:.55}),glass:new Tn({color:1323325,metalness:.15,roughness:.06,envMapIntensity:2.2})},Pa}function Ms(s,t,e){return new Ce(s,t,e)}function La(s,t,e=8){return new oa(s,t,3,e)}function Fu(s,t,e,n=10){return new Hn(s,t,e,n)}function P(s,t,e,n,i=0,r=0,a=0,o=0,l=0,c=0){let h=new bt(Ms(s,t,e),n);return h.position.set(i,r,a),h.rotation.set(o,l,c),h}function ct(s,t,e,n,i=0,r=0,a=0,o=10){let l=new bt(Fu(s,t,e,o),n);return l.rotation.x=Math.PI/2,l.position.set(i,r,a),l}var Wl={};function Gx(s){if(Wl[s])return Wl[s];let t=64,e=document.createElement("canvas");e.width=e.height=t;let n=e.getContext("2d");n.fillStyle=s==="T"?"#a8784e":"#c19474",n.fillRect(0,0,t,t);let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"rgba(60,40,26,0.45)"),i.addColorStop(.35,"rgba(60,40,26,0)"),n.fillStyle=i,n.fillRect(0,0,t,t),s==="T"?(n.fillStyle="#1d1b19",n.fillRect(0,36,t,t-36),n.fillStyle="#2a2724",n.fillRect(0,36,t,3),n.fillStyle="#f0e6d8",n.fillRect(14,24,12,6),n.fillRect(38,24,12,6),n.fillStyle="#241a12",n.fillRect(19,25,5,5),n.fillRect(43,25,5,5)):(n.fillStyle="#1b2831",n.fillRect(4,18,t-8,16),n.fillStyle="rgba(120,170,200,0.5)",n.fillRect(8,21,18,6),n.fillStyle="#0e1a22",n.fillRect(0,33,t,2),n.fillStyle="rgba(50,34,22,0.22)",n.fillRect(0,46,t,t-46));let r=new We(e);return r.colorSpace=Jt,Wl[s]=r,r}var An=s=>new Tn({roughness:.92,metalness:0,envMapIntensity:.16,...s}),Xl={};function Vx(s){if(Xl[s])return Xl[s];let t=s==="T"?11041618:12883827,e=s==="T"?9072968:6122362,n=s==="T"?5522732:3752783,i={skin:An({color:t,roughness:.78}),cloth:An({color:e}),vest:An({color:n,roughness:.86}),belt:An({color:2828323,roughness:.72}),pouch:An({color:s==="T"?4142630:2896957}),boot:An({color:2367258,roughness:.7}),pack:An({color:s==="T"?4866096:3291973}),hat:An({color:s==="T"?2039066:2831680,roughness:.88}),glove:An({color:3025957,roughness:.8}),face:An({map:Gx(s),roughness:.76})};return Xl[s]=i,i}var en={thigh:La(3.9,7),shin:La(3.3,6),upperArm:La(3.4,7),forearm:La(3,6),boot:Ms(6.5,5,11),hand:Ms(4.6,5.4,5),head:new Ra(9.4,10.6,9.6,3,2),neck:Fu(3,3,4,8),helm:new En(5.9,14,10,0,Math.PI*2,0,Math.PI*.56),deltoid:new En(4.5,10,8),gunBody:Ms(4.5,4.5,20),gunBarrel:Ms(2,2,14),gunMag:Ms(3.4,7,4.4)};function Ia(s,t,e,n,i,r,a,o=.74,l=12){let c=new bt(new Hn(s,t,e,l),n);return c.position.set(i,r,a),c.scale.z=o,c}function Bu(s){let t=Vx(s),e=new Lt,n=28,i=new Lt;i.position.y=n,e.add(i);let r=E=>E-n;i.add(Ia(9.2,7.8,9,t.cloth,0,r(29.5),0)),i.add(Ia(9.4,9.4,3,t.belt,0,r(33.8),0)),i.add(Ia(8.2,9,9,t.cloth,0,r(38.6),0)),i.add(Ia(9.9,8.3,15,t.vest,0,r(47),0)),i.add(P(5.8,2.8,8,t.vest,-9.2,r(53.2),0)),i.add(P(5.8,2.8,8,t.vest,9.2,r(53.2),0)),i.add(P(5.4,5,2.6,t.pouch,-6.2,r(45.6),-6.6)),i.add(P(5.4,5,2.6,t.pouch,0,r(45.6),-6.6)),i.add(P(5.4,5,2.6,t.pouch,6.2,r(45.6),-6.6)),i.add(P(13,13,5,t.pack,0,r(45.5),8.4)),i.add(P(4.2,6.5,5,t.pouch,-10.4,r(34.2),1.2)),i.add(P(3.2,9,3,t.belt,10.2,r(35.5),2.4,.1)),i.add(P(9.8,4.2,9.8,t.cloth,0,r(57),0));let a=new bt(en.neck,t.skin);a.position.set(0,r(57.4),0),i.add(a);let o=new Lt;o.position.set(0,r(57.4),0),i.add(o);let l=[t.skin,t.skin,t.hat,t.skin,t.skin,t.face],c=new bt(en.head,l);c.position.set(0,6,0),o.add(c);let h=null;s==="CT"?(h=new bt(en.helm,t.hat),h.position.set(0,8.2,0),o.add(h)):(o.add(P(10.1,4.4,10.3,t.hat,0,10,0)),o.add(P(4.2,6.5,3,t.hat,0,5.6,5.4,.3)));let u=E=>{let N=new Lt;N.position.set(E*5.6,n,0);let W=new bt(en.thigh,t.cloth);W.position.y=-6.5,N.add(W),N.add(P(6.4,3.2,6.6,t.vest,0,-12.2,-.6));let Y=new Lt;Y.position.y=-13;let L=new bt(en.shin,t.cloth);L.position.y=-6,Y.add(L);let U=new bt(en.boot,t.boot);return U.position.set(0,-12.4,-1.4),Y.add(U),Y.add(P(6.6,1.6,11.4,t.belt,0,-14.6,-1.4)),N.add(Y),e.add(N),{hip:N,knee:Y}},d=u(-1),p=u(1),g=E=>{let N=new Lt;N.position.set(E*9.6,r(52.4),0);let W=new bt(en.deltoid,t.cloth);W.position.y=-1.4,N.add(W);let Y=new bt(en.upperArm,t.cloth);Y.position.y=-6,N.add(Y),N.add(P(6.2,3,6.4,t.vest,0,-11,0));let L=new Lt;L.position.y=-11.8;let U=new bt(en.forearm,t.cloth);U.position.y=-5.4,L.add(U);let H=new bt(en.hand,t.glove);return H.position.set(0,-11.4,0),L.add(H),N.add(L),i.add(N),{shoulder:N,elbow:L}},x=g(-1),m=g(1),f=x.shoulder.rotation.x,v=m.shoulder.rotation.x,y=new Lt;y.add(new bt(en.gunBody,ot.black));let w=new bt(en.gunBarrel,ot.steelDark);w.position.set(0,.6,-16),y.add(w);let I=new bt(en.gunMag,ot.black);I.position.set(0,-4.8,1.2),I.rotation.x=.25,y.add(I),y.position.set(5.2,r(45),-11),y.rotation.set(-.02,.02,0),i.add(y);let A=11.8,R=11.4,V=(E,N)=>{let W=new T().subVectors(N,E.shoulder.position),Y=W.length();Y=Math.max(Math.abs(A-R)+.5,Math.min(A+R-.5,Y)),W.normalize();let L=Math.max(-1,Math.min(1,(Y*Y-A*A-R*R)/(2*A*R))),U=Math.acos(L);E.elbow.rotation.set(U,0,0);let H=new T(0,-(A+R*Math.cos(U)),-R*Math.sin(U)).normalize();E.shoulder.quaternion.setFromUnitVectors(H,W)},M=y.position;return V(m,new T(M.x,M.y-2.2,M.z+2)),V(x,new T(M.x,M.y-2.2,M.z-4)),{group:e,torso:i,head:o,hipY:n,helmet:h,gun:y,legL:d.hip,kneeL:d.knee,legR:p.hip,kneeR:p.knee,armL:x.shoulder,elbowL:x.elbow,armR:m.shoulder,elbowR:m.elbow,idleArmL:f,idleArmR:v}}function Qs(s,{segs:t=4,w:e=3.4,h:n=3,d:i=4.4,y:r=-2.6,z:a=-4,curve:o=.19,rx:l=0}){let c=new Lt;for(let h=0;h<t;h++){let u=P(e,n+.4,i,s,0,-h*(n-.5),-h*o*3.6,-h*o);c.add(u)}return c.position.set(0,r,a),c.rotation.x=l,c}function qe(s=1,t=1){let e=new Lt;e.add(P(4,6.2,6,ot.glove,s*1.5,0,.4));for(let i=0;i<4;i++)e.add(P(2.6,1.15,1.9,ot.glove,s*.3,-2.2+i*1.45,3.5));e.add(P(1.8,1.5,3,ot.glove,s*2.7,2.1,1)),e.add(P(3.6,4.2,2.4,ot.glove,s*1.2,-.7,4));let n=P(4.4,4.6,14,ot.sleeve,s*2.3,-3,11);return n.rotation.x=-.28,n.rotation.z=s*.3,e.add(n),e.scale.setScalar(t),e}function Uu(s=ot){let t=new Lt;t.add(P(3.5,3.6,20,s.steel,0,0,-2)),t.add(P(3.2,1.3,13,s.steelDark,0,2.6,-3.2)),t.add(P(3.7,1,4.2,s.accent,0,-1.9,-8.5)),t.add(P(3.3,3.1,11.5,s.wood,0,-.9,-14.6)),t.add(P(2.3,2,11.5,s.steelDark,0,2.1,-14.6)),t.add(P(2,.9,11.5,s.accent,0,3.2,-14.6)),t.add(ct(.85,.85,12,s.steelDark,0,1.2,-23)),t.add(ct(1.15,1.15,3.4,s.steel,0,1.2,-29.4)),t.add(P(1.1,3,1.4,s.steel,0,2.9,-26.2)),t.add(P(.7,1.4,.7,s.accent,0,4.3,-26.2)),t.add(P(1.7,1.3,1.2,s.steel,0,3.3,-8.6)),t.add(P(.6,1,.5,s.black,0,3.6,-8.9)),t.add(Qs(s.black,{segs:4,y:-2.2,z:-4.4,curve:.22})),t.add(P(2.9,7.2,4.4,s.poly,0,-5.4,3.4,.3)),t.add(P(2.7,3.2,13,s.wood,0,-1.2,13.8,.1)),t.add(P(3,4.4,2,s.woodDark,0,-2,20.2,.1)),t.add(P(.9,.9,3.4,s.steel,2,1.5,-3.2));let e=qe(1);e.position.set(.2,-4.6,3.6),t.add(e);let n=qe(-1);return n.position.set(-.4,-2,-11.4),t.add(n),t}function Wx(){let s=Je(),t=new Lt;t.add(P(3.5,2.4,19.5,s.steel,0,-1,-2)),t.add(P(3.8,1.6,19.5,s.steel,0,.6,-2));let e=new bt(new Hn(1.72,1.72,13,20),s.steelDark);e.rotation.x=Math.PI/2,e.position.set(0,2.05,-3.2),t.add(e);for(let r=0;r<3;r++){let a=new bt(new En(.32,8,6),s.steelDark);a.position.set(1.78,-.4,-7+r*3.2),t.add(a)}t.add(ct(.95,.95,12.5,s.steel,0,2.35,-14.2,12)),t.add(ct(1.95,1.95,11.5,s.wood,0,-.55,-14.5,16));for(let r=0;r<4;r++)t.add(P(3.4,.45,.9,s.woodDark,0,-1.6,-10.6-r*2.1));t.add(ct(.72,.78,13,s.steelDark,0,1.15,-23.5,14)),t.add(ct(1.18,1.05,3.6,s.steel,0,1.15,-29.6,14)),t.add(P(1,2.6,1.3,s.steel,0,2.75,-26.3)),t.add(ct(.42,.3,2,s.steelDark,0,4.2,-26.3,10)),t.add(P(1.9,1.1,1.4,s.steel,0,3.15,-8.6)),t.add(P(.55,.9,.5,s.black,0,3.45,-8.9)),t.add(Qs(s.black,{segs:6,w:3.3,h:2.6,d:4.6,y:-2,z:-4.2,curve:.17})),t.add(P(2.8,7,4.2,s.poly,0,-5.4,3.4,.3));for(let r=0;r<3;r++)t.add(P(3,.4,4,s.poly,0,-7.2+r*1.5,3.4,.3));t.add(P(2.8,3,13.5,s.wood,0,-1.2,13.6,.1)),t.add(P(3.2,1,8,s.wood,0,.4,14.6,.1)),t.add(P(3.1,4.6,2.2,s.woodDark,0,-2,20.3,.1)),t.add(P(.85,.85,3.2,s.steel,2.1,1.35,-3.2)),t.add(ct(.55,.55,1.6,s.steelDark,2.1,1.35,-1.8,8));let n=qe(1);n.position.set(.2,-4.6,3.6),t.add(n);let i=qe(-1);return i.position.set(-.4,-2,-11.4),t.add(i),t}function vs(){let s=new Lt;s.add(P(3.3,2.6,18,ot.steel,0,.9,-2)),s.add(P(3,2.2,14,ot.steel,0,-1.6,-1)),s.add(P(1.5,.8,11,ot.black,0,3,-3)),s.add(P(1.5,1.5,.9,ot.black,0,2.4,-8.2)),s.add(P(1.5,1.5,.9,ot.black,0,2.4,2)),s.add(ct(2.2,2.2,13,ot.poly,0,.6,-13.5,12));for(let n=0;n<5;n++)s.add(P(4.4,.5,1.1,ot.black,0,.6,-9.5-n*2.2));s.add(ct(.8,.8,11,ot.steelDark,0,.9,-24)),s.add(ct(1.05,1.05,3,ot.steel,0,.9,-30)),s.add(P(.8,3.2,.8,ot.steel,0,2.6,-25.4)),s.add(P(2.2,.7,.8,ot.steel,0,1.3,-25.4)),s.add(P(3.2,7.8,4.6,ot.black,0,-5.4,-4.2,.12)),s.add(P(2.8,6.8,4.2,ot.poly,0,-4.6,3.6,.28)),s.add(ct(1.2,1.2,9,ot.steelDark,0,-.4,12.4,8)),s.add(P(3.2,4.2,3.6,ot.poly,0,-1,17.4));let t=qe(1);t.position.set(.2,-4,3.8),s.add(t);let e=qe(-1);return e.position.set(-.4,-1.6,-12.6),s.add(e),s}function Nu(){let s=new Lt;s.add(P(3.4,4,24,ot.steelDark,0,0,-6)),s.add(ct(.95,.95,26,ot.steel,0,.6,-30)),s.add(ct(1.3,1.3,3.6,ot.black,0,.6,-43.6)),s.add(ct(2.6,2.6,15,ot.steelDark,0,4,-10,12)),s.add(ct(3.2,2.6,3,ot.steel,0,4,-19.5,12)),s.add(ct(2.7,3.1,2.6,ot.steel,0,4,-1.2,12)),s.add(ct(2.2,2.2,.6,ot.glass,0,4,-21.2,12)),s.add(P(2,2.4,2.2,ot.steel,0,2.2,-5.4)),s.add(P(2,2.4,2.2,ot.steel,0,2.2,-15.2)),s.add(P(3.2,2,14,ot.poly,0,-1.4,13.2,.06)),s.add(P(3,2.4,12,ot.poly,0,-3.4,14.4,.22)),s.add(P(3.4,5,2.2,ot.black,0,-2.6,20.2,.22)),s.add(P(2.8,4.2,5.4,ot.black,0,-3.4,-6.4)),s.add(P(2.8,6.4,4.2,ot.poly,0,-5.2,2.6,.3)),s.add(P(.7,.7,9,ot.steelDark,0,-1.4,-22.4,.18));let t=qe(1);t.position.set(.2,-4.4,2.8),s.add(t);let e=qe(-1);return e.position.set(-.4,-1.4,-18.4),s.add(e),s}function Da(s){let t=new Lt,e=s==="p90"?26:18,n=s==="p90"?-2:-3;t.add(P(3.4,4.6,e,ot.poly,0,0,n)),t.add(ct(.8,.8,8,ot.steelDark,0,.9,n-e/2-3.2)),s==="p90"?(t.add(P(3,2.2,20,ot.steelDark,0,2.8,-2)),t.add(P(2.2,1.2,16,ot.black,0,2,-4)),t.add(P(4.4,3,5,ot.black,0,-2.4,4))):(t.add(P(2.6,9.5,3.4,ot.black,0,-6.2,-5.4,.14)),t.add(ct(2,2,7,ot.poly,0,.4,-11.4,12)),t.add(P(1.8,4.6,3.6,ot.poly,0,-4.2,3.2,.26)),t.add(P(2.2,.8,12,ot.steelDark,0,2.6,-4)));let i=qe(1);i.position.set(.2,-3.6,3.2),t.add(i);let r=qe(-1);return r.position.set(-.4,-1.6,-10.6),t.add(r),t}function Ua(s){let t=new Lt,e=s==="deagle",n=e?3.9:3.1,i=e?4.2:3.3,r=e?16:14;if(t.add(P(n,i,r,ot.steel,0,1,-3)),t.add(P(n-.4,2,r-2.5,ot.steelDark,0,-1.4,-3)),t.add(P(n-1.2,i-1.4,1.8,ot.black,0,1,-3-r/2)),t.add(P(n-.6,e?8.6:7.8,e?5.2:4.6,ot.poly,0,-5.4,2.2,.22)),t.add(P(n-1.4,.9,4.4,ot.black,0,-2.6,-1.2)),t.add(P(1.1,1.4,1.6,ot.black,0,2.9,3.4,-.2)),t.add(P(.9,1.2,1.4,ot.accent,0,i/2+1.2,-3-r/2+2)),t.add(P(1.3,1,1,ot.accent,0,i/2+1.1,2.8)),e){for(let o=0;o<3;o++)t.add(P(n-1,.5,2.2,ot.black,0,i/2+.9,-6+o*3));t.add(ct(1,1,2.6,ot.steelDark,0,.7,-11.2))}let a=qe(1,.86);return a.position.set(.1,-3.9,2.8),t.add(a),t}function Xx(){let s=new Lt;s.add(P(.9,2.6,15,ot.steel,0,0,-8)),s.add(P(.5,1.4,14,ot.accent,-.5,-.6,-8.4)),s.add(P(.6,.9,8,ot.steelDark,0,1.4,-6)),s.add(P(1.6,.5,1,ot.accent,0,0,-15.2)),s.add(P(3.2,1.2,2.2,ot.steelDark,0,-.4,.4)),s.add(P(2.5,2.7,7.4,ot.black,0,-.6,5.2)),s.add(P(2.7,.7,1.2,ot.accent,0,-.6,9));let t=qe(1);return t.position.set(.4,-1.2,5.2),s.add(t),s}function nn(s,t=[.2,-4.6,3.6],e=null,n=1){let i=qe(1,n);if(i.position.set(t[0],t[1],t[2]),s.add(i),e){let r=qe(-1,n);r.position.set(e[0],e[1],e[2]),s.add(r)}return s}function Js(s,t=!0){let e=Je(),n=new Lt,i=s==="deagle",r=i?3.8:3.1,a=i?4:3.2,o=i?16:14,l=-3;n.add(P(r,a,o*.46,e.steel,0,1,l-o*.27)),n.add(P(r,a,o*.4,e.steel,0,1,l+o*.3)),n.add(P(r-.45,a-.6,o*.16,e.black,.12,1.15,l-o*.02));for(let u=0;u<5;u++)n.add(P(r+.06,.24,.55,e.steelDark,0,1+a/2-.4,l+o*.1+u*.9));n.add(P(r-.4,1.9,o-2.4,e.steelDark,0,-1.35,l)),n.add(ct(i?1:.82,i?1:.82,1.6,e.black,0,1,l-o/2+.5,12));let c=i?5:4.4,h=i?8.2:7.4;n.add(P(r-.5,h,c,e.poly,0,-5.2,2.2,.22));for(let u=0;u<3;u++)n.add(P(r-.18,.3,c*.62,e.poly,0,-6.8+u*1.5,2.35,.22));if(n.add(P(r-1.7,.8,4,e.steelDark,0,-2.5,-1.2)),n.add(P(.6,1.5,.6,e.steelDark,0,-1.7,-3)),n.add(P(1.1,1.5,1.4,e.black,0,2.9,3.2,-.25)),n.add(P(.85,1,1.1,e.steelDark,0,a/2+1.05,l-o/2+2)),n.add(P(1.5,.85,1,e.steelDark,0,a/2+.95,2.5)),i)for(let u=0;u<3;u++)n.add(P(r-1.3,.4,1.9,e.black,0,a/2+.72,-6+u*3));return t&&nn(n,[.1,-3.9,2.8],null,.86),n}function qx(){let s=new Lt,t=Js("usp",!1);t.position.set(-1.9,.2,.4),t.rotation.z=.13;let e=Js("usp",!1);return e.position.set(1.9,-.2,-.6),e.rotation.z=-.13,s.add(t,e),nn(s,[1.7,-4,2.9],[-1.7,-3.6,2.6],.84),s}function ku(){let s=Je(),t=new Lt;t.add(P(3.2,2.2,17,s.steel,0,.9,-2)),t.add(P(3,1.8,14,s.steelDark,0,-1.3,-1));for(let e=0;e<12;e++)t.add(P(1,.34,.5,s.steelDark,0,2.25,3.6-e*1.05));t.add(ct(1.95,1.95,13,s.poly,0,.9,-13.5,16));for(let e=0;e<5;e++)t.add(P(3.9,.45,.8,s.black,0,.9,-9.2-e*2.2));return t.add(ct(.62,.62,12,s.steelDark,0,.9,-24,12)),t.add(ct(.95,.85,3.2,s.steel,0,.9,-30.4,12)),t.add(P(.7,2.4,.7,s.steel,0,2.3,-25.6)),t.add(P(2,.55,.7,s.steel,0,1.2,-25.6)),t.add(P(3,7.6,4.4,s.black,0,-5.2,-4,.12)),t.add(P(2.6,6.6,4,s.poly,0,-4.4,3.4,.28)),t.add(ct(1.15,1.15,9.5,s.steelDark,0,-.3,12.5,12)),t.add(P(3,4,3.4,s.poly,0,-.9,17.4)),t.add(P(3.2,.9,2.2,s.black,0,-2.4,18.4)),t.add(P(1.6,.7,1.4,s.steel,0,1.6,6)),t.add(ct(1.1,1.1,1.2,s.steel,1.7,.6,-1.5,10)),nn(t,[.2,-4,3.8],[-.4,-1.6,-12.6]),t}function Yx(){let s=Je(),t=new Lt;return t.add(P(3.4,4.2,26,s.poly,0,.4,-4)),t.add(P(3,2,10,s.poly,0,2.6,-10)),t.add(ct(1.5,1.5,10,s.black,0,3.6,-7,14)),t.add(ct(1.9,1.5,1.6,s.black,0,3.6,-12.2,14)),t.add(ct(1.5,1.9,1.4,s.black,0,3.6,-1.8,14)),t.add(ct(1.35,1.35,.4,s.glass,0,3.6,-12.9,14)),t.add(ct(.72,.72,12,s.steelDark,0,.4,-22,12)),t.add(ct(1.05,.9,3,s.steel,0,.4,-29,12)),t.add(P(2.2,6.4,3,s.poly,0,-4,-12,.1)),t.add(P(2.8,7,4.2,s.black,0,-4.6,2.4,-.12)),t.add(P(2.6,6,4,s.poly,0,-4.4,6.6,.24)),t.add(P(.8,.8,3,s.steel,1.9,1.8,-4)),nn(t,[.2,-4.2,6.4],[-.4,-3.4,-11.5]),t}function $x(){let s=Je(),t=new Lt;t.add(P(3.2,3,16,s.steel,0,.6,-2)),t.add(P(2.9,1.6,12,s.steelDark,0,-1.5,-1));for(let e=0;e<9;e++)t.add(P(1,.32,.45,s.steelDark,0,2.3,3-e*1));return t.add(ct(1.25,1.25,7,s.black,0,3.1,-6,12)),t.add(ct(1.55,1.25,1.2,s.black,0,3.1,-9.4,12)),t.add(ct(.62,.62,9,s.steelDark,0,.6,-18.5,12)),t.add(ct(.95,.85,2.6,s.steel,0,.6,-24,12)),t.add(ct(.55,.55,12,s.steelDark,1.6,.2,12,10)),t.add(P(2.2,3.4,1.2,s.poly,1.6,.2,18.2)),t.add(Qs(s.black,{segs:3,w:3,h:2.7,d:4.2,y:-2,z:-4,curve:.12})),t.add(P(2.6,6.4,4,s.poly,0,-4.4,3.4,.26)),nn(t,[.2,-4.2,3.7],[-.4,-3,-9]),t}function Zx(){let s=Je(),t=new Lt;return t.add(P(3.2,3.6,24,s.poly,0,.3,-4)),t.add(P(2.6,1.4,20,s.steelDark,0,2.4,-5)),t.add(P(1.2,2.2,1.6,s.black,0,3.6,-12)),t.add(P(1.2,2.2,1.6,s.black,0,3.6,0)),t.add(P(1.4,1,14,s.black,0,4.8,-6)),t.add(ct(.9,.9,.5,s.glass,0,4.8,-13.2,12)),t.add(ct(.7,.7,13,s.steelDark,0,.3,-21,12)),t.add(ct(1,.9,2.6,s.steel,0,.3,-27.5,12)),t.add(P(2.8,7.2,4,s.black,0,-5,-5,.1)),t.add(P(2.6,6.2,4,s.poly,0,-4.6,3.6,.26)),t.add(P(2.8,3.4,8,s.poly,0,.2,13.5,.06)),nn(t,[.2,-4.4,3.9],[-.4,-2.6,-13]),t}function Kx(){let s=Je(),t=new Lt;t.add(P(3.4,3.2,19,s.steel,0,.2,-2)),t.add(P(3,1.2,12,s.steelDark,0,2.2,-3)),t.add(ct(1.85,1.85,10,s.poly,0,-.4,-14,14));for(let e=0;e<4;e++)t.add(P(3.6,.5,.8,s.black,0,-.4,-10.6-e*2));return t.add(ct(.66,.66,12,s.steelDark,0,.4,-21,12)),t.add(ct(.95,.85,3,s.steel,0,.4,-28,12)),t.add(P(1.6,1.2,1.4,s.steel,0,2.6,-8)),t.add(P(.8,2.2,.9,s.steel,0,2.4,-24)),t.add(Qs(s.black,{segs:4,w:3.1,h:2.7,d:4.4,y:-2,z:-4.2,curve:.16})),t.add(P(2.6,6.4,4,s.poly,0,-4.6,3.4,.28)),t.add(ct(.75,.75,11,s.steelDark,0,0,12.5,10)),t.add(P(2.4,3.2,1.6,s.poly,0,-.4,18.4)),nn(t,[.2,-4.4,3.7],[-.4,-2.8,-11.5]),t}function Jx(){let s=Je(),t=new Lt;return t.add(ct(1.75,1.75,16,s.steel,0,.2,-2,16)),t.add(ct(1.55,1.55,7,s.poly,0,.2,-12.5,16)),t.add(ct(.62,.62,10,s.steelDark,0,.2,-18.5,12)),t.add(ct(1.25,1.25,1.6,s.steel,0,.2,-21.5,14)),t.add(ct(.55,.55,8,s.steelDark,1.55,1.6,-6,10)),t.add(Qs(s.black,{segs:3,w:2.4,h:2.8,d:3.6,y:-2.2,z:-5.4,curve:.1})),t.add(P(2.6,6.4,4,s.poly,0,-5,3.2,.26)),t.add(ct(.42,.42,11,s.steelDark,1.4,.4,12,8)),t.add(ct(.42,.42,11,s.steelDark,-1.4,.4,12,8)),t.add(P(3.4,3.6,1.4,s.poly,0,0,18)),t.add(P(1.4,1,1.2,s.steelDark,0,2.2,-3)),nn(t,[.2,-3.6,3.4],[-.4,-1.8,-11]),t}function jx(){let s=Je(),t=new Lt;t.add(P(3.4,4.2,24,s.poly,0,0,-3)),t.add(P(3,1.6,16,s.steelDark,0,2.5,-3));for(let e=0;e<8;e++)t.add(P(3.1,.3,.5,s.black,0,2.6,-10+e*2));return t.add(P(3.8,.9,10,s.poly,0,-2,1)),t.add(P(.9,2.6,.9,s.poly,0,-3.2,-3.6)),t.add(P(.9,2.6,.9,s.poly,0,-3.2,5.4)),t.add(ct(.6,.6,8,s.steelDark,0,.2,-18,12)),t.add(P(2.8,4.6,4.4,s.poly,0,-3.4,3.2,.18)),t.add(P(1.2,1,1.2,s.steelDark,0,3.5,-10)),nn(t,[.2,-3.6,3.4],[-.4,-1.8,-9]),t}function Qx(){let s=Je(),t=new Lt;return t.add(P(3.6,4.4,13,s.steel,0,.2,-2)),t.add(P(3.2,1.2,11,s.steelDark,0,2.6,-2)),t.add(ct(.7,.7,6,s.steelDark,0,.2,-11,12)),t.add(P(.9,.9,2.6,s.steel,0,3.4,-5)),t.add(P(2.8,9,4,s.black,0,-5.6,1.2,.06)),t.add(P(2.4,.7,3.8,s.steelDark,0,-1.8,-2)),t.add(ct(.35,.35,12,s.steelDark,1.3,-.6,10,8)),t.add(ct(.35,.35,12,s.steelDark,-1.3,-.6,10,8)),t.add(P(3,2.6,.9,s.poly,0,-.8,16.4)),t.add(P(1,1.2,1.4,s.steelDark,0,2.9,-8.6)),nn(t,[.2,-4.6,1.6],[-.4,-1.6,-8.6]),t}function ty(){let s=Je(),t=new Lt;t.add(P(3.4,3.2,14,s.steel,0,.2,-1)),t.add(P(3.1,1.4,11,s.steelDark,0,2,-1.5)),t.add(ct(.95,.95,18,s.steelDark,0,.5,-17,14)),t.add(ct(.75,.75,15,s.steel,0,-1.4,-15.5,12)),t.add(ct(1.6,1.6,8,s.poly,0,-1.2,-12.5,14));for(let e=0;e<5;e++)t.add(P(3.4,.5,.6,s.black,0,-1.2,-9.4-e*1.5));return t.add(P(.8,1.4,1,s.steel,0,2,-24)),t.add(P(2.6,6.2,4,s.poly,0,-4.2,3.4,.26)),t.add(P(2.8,3.4,10,s.poly,0,-.6,12.5,.08)),t.add(P(3,4,1.6,s.black,0,-1.4,18)),nn(t,[.2,-4.2,3.6],[-.4,-3.2,-12]),t}function ey(){let s=Je(),t=new Lt;t.add(P(3.8,4.6,22,s.steel,0,.4,-3)),t.add(P(3.4,1.4,16,s.steelDark,0,3,-4)),t.add(ct(1.5,1.5,14,s.steelDark,0,1,-19,14));for(let e=0;e<5;e++)t.add(P(3.2,.5,1,s.black,0,1,-14-e*2.2));return t.add(ct(.8,.8,14,s.steelDark,0,1,-26,12)),t.add(ct(1.15,1,3,s.steel,0,1,-33,12)),t.add(P(1.4,.9,9,s.steelDark,0,4.2,-6)),t.add(P(4.2,5.2,6,s.black,0,-3,-2)),t.add(P(3,2,2,s.steelDark,0,.6,-1)),t.add(P(.5,.5,10,s.steelDark,-1.7,-3.6,-22,.55,0,.3)),t.add(P(.5,.5,10,s.steelDark,1.7,-3.6,-22,.55,0,-.3)),t.add(P(2.8,6.4,4.2,s.poly,0,-4.4,4,.26)),t.add(P(3,4.2,12,s.poly,0,-1.2,12.5,.06)),t.add(P(3.2,4.6,1.8,s.black,0,-2,18.4)),nn(t,[.2,-4.4,4.2],[-.4,-1,-16]),t}function Hu(s){let t=Je(),e=new Lt,n=s?22:24,i=s?22:26,r=s?1.55:2.05,a=s?11:15,o=s?3.3:4;if(e.add(P(3.2,3.4,n,s?t.poly:t.steelDark,0,0,-5)),e.add(ct(.8,.8,i,t.steel,0,.55,-5-n/2-i/2+2,14)),e.add(ct(1.15,1.15,3.2,t.black,0,.55,-5-n/2-i+3.2,14)),e.add(ct(r,r,a,t.steelDark,0,o,-4,18)),e.add(ct(r*1.28,r,2.6,t.steel,0,o,-4+a/2+1,18)),e.add(ct(r,r*1.22,2.4,t.steel,0,o,-4-a/2-.9,18)),e.add(ct(r*1.18,r*1.18,.35,t.glass,0,o,-4-a/2-2.1,18)),e.add(P(1.8,2,1.6,t.steelDark,0,o-r-.6,-8)),e.add(P(1.8,2,1.6,t.steelDark,0,o-r-.6,.4)),e.add(P(2.7,4,5,t.black,0,-3.2,-5.6)),e.add(P(2.7,6.2,4,t.poly,0,-5,2.6,.3)),e.add(P(3,2.2,13.5,t.poly,0,-1.2,13,.05)),e.add(P(2.8,2.4,11,t.poly,0,-3.2,14.2,.22)),e.add(P(3.2,4.8,2,t.black,0,-2.4,19.8,.22)),!s){let l=ct(.35,.35,2.6,t.steel,1.8,.9,1,8);l.rotation.z+=.9,e.add(l);let c=new bt(new En(.55,10,8),t.steel);c.position.set(2.7,.3,1.4),e.add(c)}return e.add(P(.6,.6,9,t.steelDark,0,-1.4,-18,.14)),nn(e,[.2,-4.4,2.8],[-.4,-1.6,-14]),e}var ny=()=>Hu(!1),iy=()=>Hu(!0);function sy(){let s=Je(),t=new Lt;t.add(P(.85,2.4,9,s.steel,0,0,-5.5)),t.add(P(.85,1.6,6,s.steel,0,.2,-12.5)),t.add(P(.55,.9,3,s.steel,0,.1,-16.5)),t.add(P(.35,1.2,15,s.accent,-.35,-.8,-6.5)),t.add(P(.5,.5,15,s.steelDark,0,1.25,-7)),t.add(P(3,1,1.8,s.steelDark,0,-.3,.6)),t.add(P(2.4,2.6,7.2,s.black,0,-.5,5.2));for(let n=0;n<4;n++)t.add(P(2.5,.5,.8,s.poly,0,-.5,2.6+n*1.7));t.add(P(2.6,.7,1.2,s.steelDark,0,-.5,9));let e=qe(1,.9);return e.position.set(.4,-1.2,5.2),t.add(e),t}var js={};function Gu(s){let t=Ui==="modern",e;switch(s){case"ak47":e=t?Wx():Uu(Hx());break;case"m4a1":e=t?ku():vs();break;case"aug":{if(t){e=Yx();break}e=vs(),e.add(P(2.4,2,9,ot.black,0,3.6,-6)),e.add(P(1.8,1.2,1,ot.glass,0,3.6,-10.2));break}case"sg552":{if(t){e=$x();break}e=vs(),e.add(P(1.4,1.6,6,ot.black,0,3.2,-2));break}case"famas":e=t?Zx():vs();break;case"galil":e=t?Kx():Uu(ot);break;case"awp":e=t?ny():Nu();break;case"scout":e=t?iy():Nu();break;case"mp5navy":e=t?Jx():Da("mp5");break;case"p90":e=t?jx():Da("p90");break;case"mac10":e=t?Qx():Da("mp5");break;case"xm1014":e=t?ty():Da("p90");break;case"m249":e=t?ey():vs();break;case"deagle":e=t?Js("deagle"):Ua("deagle");break;case"usp45":e=t?Js("usp"):Ua("usp");break;case"glock18":e=t?Js("glock"):Ua("glock");break;case"elite":e=t?qx():Ua("usp");break;case"knife":e=t?sy():Xx();break;default:e=t?ku():vs()}return e}function Vu(s){if(js[s])return js[s];let t=Gu(s);return js[s]=t,t}function Wu(s){let t=Gu(s),e=[];t.traverse(i=>{i.isMesh&&(i.material===ot.glove||i.material===ot.sleeve)&&e.push(i)});for(let i of e)i.parent.remove(i);t.rotation.z=Math.PI/2,t.position.y=2.4;let n=new Lt;return n.add(t),n}function Xu(s){let n=document.createElement("canvas");n.width=256,n.height=72;let i=n.getContext("2d");i.font='bold 40px "Microsoft YaHei", "PingFang SC", Arial, sans-serif',i.textAlign="center",i.textBaseline="middle",i.lineWidth=9,i.strokeStyle="rgba(0,0,0,0.92)",i.strokeText(s,256/2,72/2+2),i.fillStyle="#f4ecd8",i.fillText(s,256/2,72/2+2);let r=new We(n);r.colorSpace=Jt,r.minFilter=Ye;let a=new Ri(new ci({map:r,transparent:!0,depthWrite:!1,depthTest:!0}));return a.scale.set(46,12.9,1),a.position.set(0,30,0),a.renderOrder=3,a}var tr=Math.PI/180,ry=(s,t,e)=>Math.max(t,Math.min(e,s));var bs=class{constructor(t,{name:e,team:n,isBot:i=!1,id:r=0}){this.game=t,this.id=r,this.name=e,this.team=n,this.isBot=i,this.pos=new T(0,0,0),this.vel=new T,this.yaw=0,this.pitch=0,this.punchPitch=0,this.punchYaw=0,this.eyeHeight=ue.eyeStand,this.onGround=!0,this.groundY=0,this.groundMat="sand",this.walking=!1,this.onLadder=!1,this.priming=!1,this.primeT=0,this.ducking=!1,this.duckAmount=0,this.health=100,this.armor=0,this.helmet=!1,this.money=Ot.startMoney,this.alive=!1,this.kills=0,this.deaths=0,this.damageDealt=0,this.assists=0,this.slots={primary:null,secondary:null,melee:$s("knife")},this.grenades={he:0,flash:0,smoke:0},this.grenadeSel=null,this.hasBomb=!1,this.hasKit=!1,this.curSlot="secondary",this.curGrenade="he",this.zoom=0,this.deployTime=0,this.reloadEnd=0,this.nextFire=0,this.shotCount=0,this.lastShotTime=-10,this.fireHeld=!1,this.triggerQueued=!1,this.footTimer=0,this.bobTime=0,this.lastDamageTime=-10,this.swingT=0,this.attacker=null,this.plantProgress=0,this.defuseProgress=0,this.spawnProtect=0,this.flashAmount=0,this.mesh=null,this.viewModel=null,this.muzzleLight=null,this.deathAt=null,this._prevMeshT=null}spawnAt(t){this.pos.set(t.x,0,t.z),this.vel.set(0,0,0),this.yaw=t.yaw,this.pitch=0,this.punchPitch=0,this.punchYaw=0,this.alive=!0,this.health=100,this.onGround=!0,this.groundY=0,this.priming=!1,this.primeT=0,this.onLadder=!1,this.deathAt=null,this._prevMeshT=null,this._strideT=0,this.ducking=!1,this.duckAmount=0,this.zoom=0,this.shotCount=0,this.plantProgress=0,this.defuseProgress=0,this.flashAmount=0,this.hasBomb=!1,this.curSlot=this.slots.primary?"primary":this.slots.secondary?"secondary":"melee",this.mesh&&(this.mesh.visible=!0),this.viewModel&&(this.viewModel.visible=!this.isBot),this.syncMesh()}resetInventory(){this.slots.primary=null,this.slots.secondary=null,this.grenades={he:0,flash:0,smoke:0},this.hasKit=!1,this.hasBomb=!1,this.armor=0,this.helmet=!1,this.grenadeSel=null}giveWeapon(t){let e=jt[t];if(!e)return;let n=$s(t);e.slot===1?(this.slots.primary=n,this.curSlot="primary"):e.slot===2&&(this.slots.secondary=n,this.curSlot="secondary"),this.deployTime=.4,this.reloadEnd=0,this.zoom=0,qs(t)}get weapon(){return this.curSlot==="primary"?this.slots.primary:this.curSlot==="secondary"?this.slots.secondary:this.curSlot==="melee"?this.slots.melee:null}get weaponDef(){let t=this.weapon;return t?jt[t.id]:null}maxSpeedNow(){let t=this.weaponDef,e=t?t.speed:250;return this.curSlot==="grenade"&&(e=250),this.hasBomb&&this.curSlot!=="melee"&&(e*=.98),e}eyeY(){return this.pos.y+this.eyeHeight}update(t,e){this.swingT>0&&(this.swingT=Math.max(0,this.swingT-t*3.1));let n=this.ducking?ue.eyeDuck:ue.eyeStand;if(this.eyeHeight+=(n-this.eyeHeight)*Math.min(1,t*12),this.duckAmount+=((this.ducking?1:0)-this.duckAmount)*Math.min(1,t*14),this.flashAmount>0&&(this.flashAmount=Math.max(0,this.flashAmount-t*.42)),!this.alive){this.syncMesh();return}if(this.move(t,e),this.updateWeapon(t),this.priming){this.primeT+=t;let a=pa[this.grenadeSel]||3;this.primeT>=a&&(this.priming=!1,this.primeT=0,this.throwGrenade(a))}let i=Math.exp(-t*(this.game.time-this.lastShotTime>.25?7.5:2.4));this.punchPitch*=i,this.punchYaw*=i,Math.abs(this.punchPitch)<.01&&(this.punchPitch=0),Math.abs(this.punchYaw)<.01&&(this.punchYaw=0);let r=Math.hypot(this.vel.x,this.vel.z);this.onGround&&r>90&&!this.walking?(this.footTimer-=t*(r/250),this.footTimer<=0&&(this.footTimer=.42,Bl(this.pos,this.game.listenerPos(),this.groundMat||"sand"))):this.footTimer=Math.min(this.footTimer,.2),this.pos.y<-400&&this.game.onPlayerFell(this),this.syncMesh()}move(t,e){let n=e.forward||0,i=e.side||0;this.ducking=!!e.duck,this.walking=!!e.walk;let r=Math.sin(this.yaw),a=Math.cos(this.yaw),o=-r*n+a*i,l=-a*n-r*i,c=Math.hypot(o,l);c>.001&&(o/=c,l/=c);let h=this.game.map.ladderAt(this.pos.x,this.pos.z,this.pos.y);if(this.onLadder=!!h,h){let p=e.jump&&!this.jumpHeld;this.jumpHeld=!!e.jump;let g=n>.1?1:n<-.1?-1:0;this.vel.y=p?ue.jumpVel*.75:g*ue.maxLadderSpeed*.55,g>0&&this.pos.y>=(h.y1||400)-6&&(this.vel.y=0),(p||g>0)&&(this.onGround=!1),this.vel.x*=.12,this.vel.z*=.12,i&&(this.vel.x+=Math.cos(this.yaw)*i*45,this.vel.z+=-Math.sin(this.yaw)*i*45),this.integrate(t);return}let u=this.maxSpeedNow();this.ducking&&(u*=ue.duckMul),e.walk&&(u*=ue.walkMul),!this.onGround&&this.zoom>0&&(u=Math.min(u,100));let d=c>.001?u:0;if(this.onGround){let p=Math.hypot(this.vel.x,this.vel.z);if(p>.1){let x=Math.max(p,ue.stopSpeed)*ue.friction*t,f=Math.max(0,p-x)/p;this.vel.x*=f,this.vel.z*=f}}d>0&&(this.onGround?qu(this,o,l,d,ue.accel,t):qu(this,o,l,Math.min(d,ue.airWishSpeed),ue.airAccel,t)),e.jump&&this.onGround&&!this.jumpHeld&&(this.vel.y=ue.jumpVel,this.onGround=!1,this.game.stats.jumps++),this.jumpHeld=!!e.jump,this.onGround||(this.vel.y-=ue.gravity*t,this.vel.y<-2e3&&(this.vel.y=-2e3)),this.integrate(t)}integrate(t){let e=this.game.map,n=ue.radius,i=this.ducking?ue.duckHeight:ue.standHeight;this.pos.x+=this.vel.x*t,this.resolveAxis("x",n,i),this.pos.z+=this.vel.z*t,this.resolveAxis("z",n,i);let r=this.onGround?ue.stepHeight:this.ducking?ue.duckJumpBonus:0,a=e.supportHeightAt(this.pos.x,this.pos.z,n,this.pos.y+r),o=a.y;if(this.groundMat=a.mat,this.groundY=o,this.pos.y+=this.vel.y*t,this.vel.y<=0&&this.pos.y<=o?(!this.onGround&&this.vel.y<-260&&Bl(this.pos,this.game.listenerPos(),this.groundMat||"sand"),this.pos.y=o,this.vel.y=0,this.onGround=!0):this.onGround&&(this.pos.y-o<=ue.stepHeight?(this.pos.y=o,this.vel.y=0):this.onGround=!1),!e.isFloorAt(this.pos.x,this.pos.z)){let l=this.findNearestFloor(this.pos.x,this.pos.z);l&&(this.pos.x=l.x,this.pos.z=l.z,this.vel.x=0,this.vel.z=0)}}findNearestFloor(t,e){let n=this.game.map,{cx:i,cz:r}=n.worldToTile(t,e);for(let a=1;a<=4;a++)for(let o=-a;o<=a;o++)for(let l=-a;l<=a;l++)if(n.isFloorTile(i+l,r+o))return n.tileToWorld(i+l,r+o);return null}resolveAxis(t,e,n){let i=this.game.map.colliders,r=this.pos.x,a=this.pos.z,o=this.pos.y,l=this.onGround?ue.stepHeight:this.ducking?ue.duckJumpBonus:0;for(let c=0;c<i.length;c++){let h=i[c];if(!(h.y1<=o+l)&&!(h.y0>o+n||h.y1<o+2)&&!(r+e<=h.x0||r-e>=h.x1)&&!(a+e<=h.z0||a-e>=h.z1)){t==="x"?(this.pos.x=r-(h.x0-e)<=h.x1+e-r?h.x0-e-.01:h.x1+e+.01,this.vel.x=0):(this.pos.z=a-(h.z0-e)<=h.z1+e-a?h.z0-e-.01:h.z1+e+.01,this.vel.z=0);return}}}currentAmmo(){let t=this.weapon;return t?t.ammo:0}reserveAmmo(){let t=this.weapon;return t?t.reserve:0}updateWeapon(t){this.deployTime>0&&(this.deployTime=Math.max(0,this.deployTime-t)),this.reloadEnd>0&&this.game.time>=this.reloadEnd&&this.finishReload(),this.game.time-this.lastShotTime>.45&&(this.shotCount=0);let e=this.weapon;if(!e)return;let n=jt[e.id];this.fireHeld&&n&&n.auto&&this.curSlot!=="grenade"&&this.game.time>=this.nextFire&&this.tryFire()}canFire(){return!(!this.alive||this.game.round.phase==="freeze"||this.game.round.phase==="over"||this.deployTime>0||this.reloadEnd>0||this.game.time<this.nextFire)}tryFire(){if(!this.canFire())return;if(this.curSlot==="grenade"){this.throwGrenade();return}let t=this.weapon;if(!t)return;let e=jt[t.id];if(e.cls==="melee"){this.knifeAttack();return}if(t.ammo<=0){this.game.settings.autoReload&&t.reserve>0?this.reload():Di();return}t.ammo--,this.nextFire=this.game.time+60/e.rpm,this.lastShotTime=this.game.time,this.shotCount++;let[n,i]=eu(e,this.shotCount);this.punchPitch+=n,this.punchYaw-=i;let r=new T(this.pos.x,this.eyeY(),this.pos.z),a=this.aimDir(),o=this.computeSpread(e),l=Yu(a,o);this.game.lastShotDir=l;let c=e.pellets||1;if(c===1)Vl(this.game,this,r,l,e);else for(let h=0;h<c;h++)Vl(this.game,this,r,Yu(a,o),e);Oe.muzzle(this,e),Fl(e.sound,this.pos,this.game.listenerPos()),e.scope&&this.zoom>0&&(this.zoom=0,Hl(!1)),t.ammo===0&&t.reserve>0&&this.game.settings.autoReload&&this.reload()}computeSpread(t){let e=Math.hypot(this.vel.x,this.vel.z),n=t.spread;return n+=e/250*t.moveSpread,this.onGround||(n+=t.moveSpread*.9),this.ducking&&(n*=.62),this.zoom>0&&(n*=.05),n+=Math.min(this.shotCount,12)*t.kick*.13,n*tr}aimDir(){let t=this.yaw+this.punchYaw*tr,e=ry(this.pitch+this.punchPitch*tr,-89*tr,89*tr),n=Math.cos(e);return new T(-Math.sin(t)*n,Math.sin(e),-Math.cos(t)*n)}knifeAttack(){let t=jt.knife;this.nextFire=this.game.time+60/t.rpm,this.lastShotTime=this.game.time,this.swingT=1,Fl("knife",this.pos,this.game.listenerPos());let e=new T(this.pos.x,this.eyeY(),this.pos.z),n=this.aimDir(),i=this.game.tracePlayers(e,n,t.range,this);if(i&&!i.friendly){let r=t.dmg;Ys(this.game,i.player,this,r,"chest",t),Oe.blood(i.point,6),Su(i.point,this.game.listenerPos())}}reload(){let t=this.weapon;if(!t)return;let e=jt[t.id];!e||e.cls==="melee"||this.reloadEnd>0||t.ammo>=e.mag||t.reserve<=0||(this.reloadEnd=this.game.time+e.reload,this.zoom=0,Eu(t.id))}finishReload(){this.reloadEnd=0;let t=this.weapon;if(!t)return;let n=jt[t.id].mag-t.ammo,i=Math.min(n,t.reserve);t.ammo+=i,t.reserve-=i}switchSlot(t){if(this.alive&&(this.priming=!1,this.primeT=0,!(t==="primary"&&!this.slots.primary)&&!(t==="secondary"&&!this.slots.secondary))){if(t==="grenade"){let e=["he","flash","smoke"].filter(i=>this.grenades[i]>0);if(!e.length)return;let n=e.indexOf(this.grenadeSel);this.grenadeSel=e[(n+1)%e.length],this.curSlot="grenade",this.deployTime=.35,this.zoom=0,qs(null);return}this.curSlot!==t&&(this.curSlot=t,this.deployTime=.4,this.reloadEnd=0,this.zoom=0,qs(this.weaponDef?this.weaponDef.id:null))}}toggleZoom(){let t=this.weaponDef;!t||!t.scope||(this.zoom=(this.zoom+1)%3,Hl(this.zoom>0))}throwGrenade(t=0){let e=this.grenadeSel;if(!e||this.grenades[e]<=0)return;this.grenades[e]--,this.nextFire=this.game.time+.9,this.deployTime=.5;let n=new T(this.pos.x,this.eyeY()-4,this.pos.z),i=this.aimDir(),r=new Aa(this.game,this,e,n,i);r.fuse=Math.max(0,r.fuse-t),this.game.grenades.push(r),Tu(),this.grenades[e]===0&&(this.grenadeSel=null,this.curSlot=this.slots.primary?"primary":this.slots.secondary?"secondary":"melee",qs(this.weaponDef?this.weaponDef.id:null))}beginPrime(){let t=this.grenadeSel;!t||this.grenades[t]<=0||(this.priming=!0,this.primeT=0)}releaseGrenade(){if(!this.priming)return;this.priming=!1;let t=this.primeT;this.primeT=0,this.throwGrenade(t)}pickUp(t){let e=jt[t];e&&(e.slot===1?this.slots.primary=$s(t):this.slots.secondary=$s(t),this.curSlot=e.slot===1?"primary":"secondary",this.deployTime=.4,ys())}takeDamage(t,e,n,i){if(!this.alive)return 0;let r=t,a=jt[i],o=a&&a.pen!=null?a.pen:.72;if(this.armor>0&&n!=="leg"&&!(n==="head"&&!this.helmet)){let c=r*o,h=(r-c)*.5;h>this.armor?(h=this.armor/o,r=Math.max(0,r-h),this.armor=0):(this.armor-=h,r=c)}return r=Math.round(r),this.health-=r,this.lastDamageTime=this.game.time,this.attacker=e,e&&e!==this&&(e.damageDealt+=Math.min(r,this.health+r)),this.health<=0&&(this.health=0,this.alive=!1,this.deathAt=this.game.time,this.game.onPlayerKilled(this,e,i,n==="head")),r}buildMesh(t){let e=Bu(this.team);this.mesh=e.group,this._helmetMesh=e.helmet,this._gunMesh=e.gun,this._torso=e.torso,this._head=e.head,this._hipY=e.hipY,this._strideT=0,this._legL=e.legL,this._kneeL=e.kneeL,this._legR=e.legR,this._kneeR=e.kneeR,this._armL=e.armL,this._elbowL=e.elbowL,this._armR=e.armR,this._elbowR=e.elbowR,this._idleArmL=e.idleArmL,this._idleArmR=e.idleArmR,this.mesh.traverse(n=>{n.isMesh&&n.material&&n.material.isMeshStandardMaterial&&(n.castShadow=!0,n.receiveShadow=!0)}),t.add(this.mesh),this._shadow=null,this.syncMesh()}syncMesh(){if(!this.mesh)return;let t=this.game.time,e=this._prevMeshT==null?0:Math.max(0,Math.min(.12,t-this._prevMeshT));this._prevMeshT=t;let i=!this.alive&&this.deathAt!=null?Math.max(0,t-this.deathAt):0,r=this.alive||this.deathAt!=null;if(this.mesh.visible=!this.isLocal&&r,this.mesh.position.set(this.pos.x,this.pos.y,this.pos.z),this.mesh.rotation.set(0,this.yaw,0),this.mesh.scale.setScalar(1),this._gunMesh&&(this._gunMesh.visible=this.alive&&this.curSlot!=="melee"),!this.alive){let p=Math.min(1,i/.55),g=1-Math.pow(1-p,3);this.mesh.rotation.x=-g*1.5,this.mesh.position.y-=g*5,this._torso&&(this._torso.rotation.x=.12),this._legL&&(this._legL.rotation.x=.3*g,this._legR.rotation.x=-.2*g,this._kneeL.rotation.x=-.8*g,this._kneeR.rotation.x=-.45*g);return}let a=Math.hypot(this.vel.x,this.vel.z),o=a>20&&this.onGround,l=this.duckAmount,c=Math.min(1,a/250);this._strideT=(this._strideT||0)+(o?a*e*.072:0);let h=this._strideT,u=Math.sin(h);if(this._legL){let p=u*.62*c,g=-u*.62*c,x=l*.85,m=l*1.55;this._legL.rotation.x=p+x,this._legR.rotation.x=g+x,this._kneeL.rotation.x=-Math.max(0,-u)*1.15*c-m,this._kneeR.rotation.x=-Math.max(0,u)*1.15*c-m}let d=Math.max(-1.2,Math.min(1.2,this.pitch||0));this._torso&&(this._torso.position.y=(this._hipY||28)-l*22,this._torso.rotation.x=-c*.16+d*.2+l*.22,this._torso.rotation.y=-u*.1*c),this._head&&(this._head.rotation.x=d*.35-l*.1),this.mesh.position.y-=Math.abs(Math.cos(h))*1.6*c}hitboxes(){let t=ue.standHeight*(1-this.duckAmount*.5),e=this.pos.y;return[{group:"head",y0:e+t-13,y1:e+t,r:7},{group:"chest",y0:e+t*.52,y1:e+t-13,r:13},{group:"stomach",y0:e+t*.34,y1:e+t*.52,r:12},{group:"leg",y0:e,y1:e+t*.34,r:10}]}};function qu(s,t,e,n,i,r){let a=s.vel.x*t+s.vel.z*e,o=n-a;if(o<=0)return;let l=i*r*n;l>o&&(l=o),s.vel.x+=t*l,s.vel.z+=e*l}function Yu(s,t){if(t<=0)return s.clone();let e=Math.abs(s.y)>.99?new T(1,0,0):new T(0,1,0),n=new T().crossVectors(s,e).normalize(),i=new T().crossVectors(n,s).normalize(),r=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*t;return s.clone().addScaledVector(n,Math.cos(r)*a).addScaledVector(i,Math.sin(r)*a).normalize()}var Na=Math.PI/180,ay=(s,t,e)=>Math.max(t,Math.min(e,s)),er=class{constructor(t,e,n=.55){this.game=t,this.p=e,this.skill=n,this.path=null,this.pathIdx=0,this.goal=null,this.goalKind=null,this.target=null,this.targetVisible=!1,this.lastSeen=null,this.lastSeenTime=-99,this.reactionAt=0,this.aimError=0,this.burstUntil=0,this.burstPauseUntil=0,this.strafeDir=0,this.strafeUntil=0,this.repathAt=0,this.stuckTimer=0,this.lastPos=new T,this.crouchUntil=0,this.decisionAt=0,this.wanderTarget=null,e.botOnFlashed=i=>{this.aimError=Math.max(this.aimError,i*18),this.targetVisible=!1,this.target=null,this.lastSeenTime=-99}}canSee(t){if(!t.alive)return!1;let e=new T(this.p.pos.x,this.p.eyeY(),this.p.pos.z),n=new T(t.pos.x,t.pos.y+52,t.pos.z),i=e.distanceTo(n);if(i>2600)return!1;let r=n.clone().sub(e).normalize(),a=new T(-Math.sin(this.p.yaw),0,-Math.cos(this.p.yaw)),o=new T(r.x,0,r.z).normalize();return!(a.dot(o)<.25&&i>350||!this.game.map.lineOfSight(e,n)||this.game.fx.blocksLineOfSight(e,n))}update(t){let e=this.p;if(!e.alive){e.fireHeld=!1,e.syncMesh();return}let n={forward:0,side:0,jump:!1,duck:!1,walk:!1};e.wantUse=!1;let i=this.game.round.phase;if(i==="freeze"||i==="over"){e.fireHeld=!1,e.update(t,n);return}if(e.flashAmount>.7){this.strafeMove(t,n,(Math.random()-.5)*.6),e.update(t,n);return}this.perceive(t),this.think(t,n),e.update(t,n)}perceive(t){let e=this.p,n=null,i=1/0;for(let r of this.game.players){if(!r.alive||r.team===e.team||!this.canSee(r))continue;let o=e.pos.distanceTo(r.pos)+(r.health>0?0:500)-(r===this.target?120:0);o<i&&(i=o,n=r)}n?(n!==this.target&&(this.target=n,this.reactionAt=this.game.time+(.46-this.skill*.24)*(.75+Math.random()*.7),this.aimError=(3.6-this.skill*2.3)*(.65+Math.random()*.85)),this.targetVisible=!0,this.lastSeen=new T(n.pos.x,n.pos.y+52,n.pos.z),this.lastSeenTime=this.game.time,(!this._calledOut||this.game.time-this._calledOut>3)&&(this._calledOut=this.game.time,this.game.botCallout(this,n))):(this.targetVisible=!1,this.target&&this.game.time-this.lastSeenTime>1.2&&(this.target=null))}think(t,e){let n=this.p,r=this.game.round.bomb;if((!this.goalKind||this.game.time>this.decisionAt)&&(this.decisionAt=this.game.time+2.5,this.chooseGoal()),this.target&&this.target.alive){let a=this.target,o=n.pos.distanceTo(a.pos);n.fireHeld=!1,n.weapon&&n.weapon.ammo===0&&n.weapon.reserve>0&&n.reloadEnd<=0&&n.reload();let l=new T(n.pos.x,n.eyeY(),n.pos.z),h=new T(a.pos.x,a.pos.y+(this.skill>.6?58:46),a.pos.z).clone().sub(l),u=Math.atan2(-h.x,-h.z),d=Math.asin(ay(h.clone().normalize().y,-1,1)),p=(3.6+this.skill*7.5)*(this.targetVisible?1:.45),g=(Math.random()-.5)*2*this.aimError*Na,x=(Math.random()-.5)*2*this.aimError*.7*Na;n.yaw=$u(n.yaw,u+g,p*t),n.pitch=oy(n.pitch,d+x,p*.75*t),o>1700?(this.moveToward(this.lastSeen||a.pos,e,1),this.holdTime=0):o>850?(this.holdTime=(this.holdTime||0)+t,this.holdTime<1.5?(e.forward=0,e.side=0):(this.strafeMove(t,e,.7),this.holdTime>2.8&&(this.holdTime=0))):o>400?(this.strafeMove(t,e,.6),this.holdTime=0):(this.strafeMove(t,e,.85),this.holdTime=0),o>900&&this.game.time>this.crouchUntil&&Math.random()<.015&&(this.crouchUntil=this.game.time+.9),e.duck=this.game.time<this.crouchUntil;let m=n.weaponDef;if(this.targetVisible&&this.game.time>this.reactionAt){let f=Math.abs(ql(n.yaw,u))<(5+this.skill*4)*Na,v=Math.abs(ql(n.yaw,u))<20*Na,y=Math.hypot(n.vel.x,n.vel.z),w=o<500||y<130,I=n.weapon&&(n.weapon.ammo>0||n.weapon.reserve>0);if(f&&v&&w&&I&&o<2100&&n.curSlot!=="grenade"&&this.game.time>this.burstPauseUntil){if(this.game.time>this.burstUntil){let A=.12+Math.random()*(.18+this.skill*.4);this.burstUntil=this.game.time+A,this.burstPauseUntil=this.burstUntil+.08+Math.random()*(.5-this.skill*.25)}n.fireHeld=!0,(!m||!m.auto)&&n.tryFire()}}return}if(n.fireHeld=!1,this.holdTime=0,e.duck=this.game.time<this.crouchUntil,n.team==="T"&&n.hasBomb)if(this.game.map.siteAt(n.pos.x,n.pos.z)){n.wantUse=!0,e.forward=0,e.side=0,this.moveToward(null,e,0);return}else this.goalKind!=="site"&&(this.goalKind="site",this.goal=this.pickSite(),this.repath());if(n.team==="CT"&&r.state==="planted"){if(Math.hypot(r.pos.x-n.pos.x,r.pos.z-n.pos.z)<60){n.wantUse=!0,e.forward=0,e.side=0;return}this.goalKind="defuse",this.goal=r.pos,this.followPathTo(r.pos,e,t);return}if(n.team==="T"&&!n.hasBomb&&r.state==="dropped"){this.goalKind="pickup",this.goal=r.pos.clone(),this.followPathTo(this.goal,e,t);return}if(this.lastSeen&&this.game.time-this.lastSeenTime<4){this.moveToward(this.lastSeen,e,.8);return}this.goal?Math.hypot(this.goal.x-n.pos.x,this.goal.z-n.pos.z)<160&&(this.goalKind==="defend"||this.goalKind==="site")?(e.forward=0,e.side=0,n.yaw+=Math.sin(this.game.time*.55+this.skill*9)*t*.5):this.followPathTo(this.goal,e,t):e.forward=0}chooseGoal(){let t=this.p,e=this.game.round;if(t.team==="T")this.goalKind="site",this.goal=this.pickSite();else{this.goalKind="defend";let i=this.game.players.filter(r=>r.team==="CT"&&r.alive).indexOf(t);this.goal=i%2===0?this.siteCenter("A"):this.siteCenter("B"),e.bomb.state==="planted"&&(this.goal=e.bomb.pos)}this.repath()}pickSite(){if(this.game.round.tBombsite)return this.siteCenter(this.game.round.tBombsite);let t=Math.random()<.5?"A":"B";return this.game.round.tBombsite=t,this.siteCenter(t)}siteCenter(t){let e=this.game.map.sites[t];return new T((e.x0+e.x1)/2,0,(e.z0+e.z1)/2)}repath(){this.goal&&(this.path=this.game.map.findPath(this.p.pos,this.goal),this.pathIdx=0,this.repathAt=this.game.time+2)}followPathTo(t,e,n){let i=this.p;if((!this.path||this.game.time>this.repathAt)&&this.repath(),!this.path||this.path.length===0){this.moveToward(t,e,1);return}for(;this.pathIdx<this.path.length;){let a=this.path[this.pathIdx];if(Math.hypot(a.x-i.pos.x,a.z-i.pos.z)<55)this.pathIdx++;else break}let r=this.path[this.pathIdx]||t;this.moveToward(r,e,1),this.checkStuck(n)}checkStuck(t){let e=this.p,n=Math.hypot(e.pos.x-this.lastPos.x,e.pos.z-this.lastPos.z);this.lastPos.set(e.pos.x,0,e.pos.z),n<.6?(this.stuckTimer+=t,this.stuckTimer>.5&&(this.path=null,this.repathAt=0,this.stuckTimer=0)):this.stuckTimer=0}moveToward(t,e,n=1){if(!t){e.forward=0,e.side=0;return}let i=this.p,r=t.x-i.pos.x,a=t.z-i.pos.z,o=Math.hypot(r,a)||1,l=r/o*n,c=a/o*n,h=Math.sin(i.yaw),u=Math.cos(i.yaw);if(e.forward=l*-h+c*-u,e.side=l*u+c*-h,!this.target){let d=Math.atan2(-r,-a);i.yaw=$u(i.yaw,d,6.5*.016)}}strafeMove(t,e,n){let i=this.p;this.game.time>this.strafeUntil&&(this.strafeUntil=this.game.time+.35+Math.random()*.6,this.strafeDir=Math.random()<.5?-1:1),e.side=this.strafeDir*n,e.forward=(Math.random()<.25?.6:0)-(Math.random()<.1?.5:0)}};function ql(s,t){let e=s-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function $u(s,t,e){let n=ql(t,s);return Math.abs(n)<=e?t:s+Math.sign(n)*e}function oy(s,t,e){return Math.abs(t-s)<=e?t:s+Math.sign(t-s)*e}var ka=class{constructor(t){this.game=t,this.phase="idle",this.time=0,this.roundNum=0,this.scoreCT=0,this.scoreT=0,this.lossStreak={CT:0,T:0},this.bomb={state:"carried",pos:new T,carrier:null,timer:0,beep:0,planter:null,defuser:null,site:null},this.lastResult=null,this.tBombsite=null,this.bombMesh=null,this.winTarget=Ot.winRounds,this.overtime=0,this.otRoundsPlayed=0}startMatch(){this.roundNum=0,this.scoreCT=0,this.scoreT=0,this.lossStreak={CT:0,T:0},this.winTarget=Ot.winRounds,this.overtime=0,this.otRoundsPlayed=0;for(let t of this.game.players)t.money=Ot.startMoney,t.kills=0,t.deaths=0,t.damageDealt=0,t.resetInventory(),t.giveWeapon(t.team==="T"?"glock18":"usp45");this.startRound(!0)}startRound(t=!1){this.roundNum++,this.roundTimeLeft=Ot.roundTime,this.phase="freeze",this.time=Ot.freezeTime,this.tBombsite=null,this.lastResult=null,this.bomb.state="carried",this.bomb.timer=0,this.bomb.carrier=null,this.bomb.planter=null,this.bomb.defuser=null,this.bomb.beep=0,this.bombMesh&&(this.game.scene.remove(this.bombMesh),this.bombMesh=null);let e={T:0,CT:0},n=this.game.players.slice().sort(()=>Math.random()-.5);for(let r of n){let a=this.game.map.spawns[r.team],o=a[e[r.team]++%a.length];r.alive||(r.resetInventory(),r.giveWeapon(r.team==="T"?"glock18":"usp45")),r.spawnAt(o),r.plantProgress=0,r.defuseProgress=0,r.wantUse=!1,r.fireHeld=!1,r.flashAmount=0,r.curSlot=r.slots.primary?"primary":r.slots.secondary?"secondary":"melee",r.deployTime=.6}let i=this.game.players.filter(r=>r.team==="T");if(i.length){let r=i[Math.floor(Math.random()*i.length)];r.hasBomb=!0,this.bomb.carrier=r}this.game.botsBuy(),this.game.localPlayer&&this.game.localPlayer.team==="T"&&this.game.localPlayer.hasBomb&&this.game.hud.toast("\u4F60\u643A\u5E26\u4E86 C4 \u2014\u2014 \u5230 A / B \u70B9\u6309 E \u5B89\u653E"),Iu(),this.game.hud.announce(`\u7B2C ${this.roundNum} \u56DE\u5408 \xB7 \u51C6\u5907`)}endRound(t,e){if(this.phase==="over"||this.phase==="matchend")return;this.phase="over",this.time=Ot.roundEndDelay,this.lastResult={winner:t,reason:e},t==="CT"?this.scoreCT++:t==="T"&&this.scoreT++;let n=t,i=t==="CT"?"T":"CT",r=this.bomb.state==="planted"||this.bomb.state==="defused"||this.bomb.state==="exploded";for(let o of this.game.players){let l=0;if(o.team===n)l+=e==="bomb"?Ot.winBombReward:Ot.winReward,this.lossStreak[o.team]=0;else{let c=this.lossStreak[o.team]=Math.min(5,this.lossStreak[o.team]+1);l+=Math.min(Ot.lossMax,Ot.lossBase+(c-1)*Ot.lossStep),o.team==="T"&&r&&(l+=Ot.plantBonus)}o.money=Math.min(Ot.maxMoney,o.money+l)}let a={elim:t==="CT"?"\u53CD\u6050\u7CBE\u82F1\u83B7\u80DC \xB7 \u5168\u6B7C\u654C\u4EBA":"\u6050\u6016\u5206\u5B50\u83B7\u80DC \xB7 \u5168\u6B7C\u654C\u4EBA",bomb:"\u6050\u6016\u5206\u5B50\u83B7\u80DC \xB7 \u76EE\u6807\u5DF2\u6467\u6BC1",defuse:"\u53CD\u6050\u7CBE\u82F1\u83B7\u80DC \xB7 \u70B8\u5F39\u5DF2\u62C6\u9664",time:"\u53CD\u6050\u7CBE\u82F1\u83B7\u80DC \xB7 \u65F6\u95F4\u8017\u5C3D"}[e]||`${t} \u83B7\u80DC`;this.game.hud.roundEnd(t,a,this.scoreCT,this.scoreT),this.game.hud.setProgress(null,0)}nextRound(){if(this.scoreCT>=this.winTarget||this.scoreT>=this.winTarget){this.finishMatch();return}if(!this.overtime&&this.roundNum>=Ot.maxRounds){if(this.scoreCT===this.scoreT){this.startOvertime();return}this.finishMatch();return}if(this.overtime){if(this.otRoundsPlayed+=1,this.otRoundsPlayed>=Ot.overtimeHalf*2){this.startOvertime();return}this.otRoundsPlayed===Ot.overtimeHalf&&this.swapSides(),this.startRound();return}if(this.roundNum===Ot.halftimeRound){this.halftime();return}this.startRound()}finishMatch(){this.phase="matchend";let t=this.scoreCT>this.scoreT?"CT":(this.scoreT>this.scoreCT,"T");this.game.hud.matchEnd(t,this.scoreCT,this.scoreT),this.game.localPlayer.fireHeld=!1}swapSides(){for(let t of this.game.players)t.team=t.team==="T"?"CT":"T",t.money=Math.min(Ot.maxMoney,t.money),t.resetInventory(),t.giveWeapon(t.team==="T"?"glock18":"usp45"),t.mesh&&(this.game.scene.remove(t.mesh),t._shadow&&(this.game.scene.remove(t._shadow),t._shadow.geometry.dispose(),t._shadow.material.dispose(),t._shadow=null),t.buildMesh(this.game.scene));this.lossStreak={CT:0,T:0}}halftime(){this.swapSides();for(let t of this.game.players)t.money=Ot.startMoney;this.game.hud.announce("\u534A\u573A\u7ED3\u675F \xB7 \u4EA4\u6362\u9635\u8425"),this.startRound()}startOvertime(){this.overtime+=1,this.otRoundsPlayed=0,this.winTarget=Math.max(this.scoreCT,this.scoreT)+Ot.overtimeWin,this.swapSides();for(let t of this.game.players)t.money=Ot.overtimeMoney;this.game.hud.announce(`\u52A0\u65F6\u8D5B ${this.overtime} \xB7 \u5148\u5230 ${Ot.overtimeWin} \u5206`),this.startRound()}update(t){let e=this.game;if(this.phase!=="idle"){if(this.phase==="freeze"){this.time-=t,this.time<=0&&(this.phase="live",this.time=Ot.roundTime,e.hud.announce("\u5F00\u59CB\uFF01")),this.updateBomb(t);return}if(this.phase==="live"){this.time-=t,this.updateBomb(t),this.updateObjectives(t),this.phase==="live"&&this.checkWin();return}this.phase==="over"&&(this.time-=t,this.updateBomb(t),this.time<=0&&this.nextRound())}}updateObjectives(t){let e=this.game,n=e.localPlayer,i=null;for(let r of e.players){if(!r.alive){r.plantProgress=0;continue}if(r.team==="T"&&r.hasBomb&&r.wantUse&&r.onGround){let a=e.map.siteAt(r.pos.x,r.pos.z);if(a&&this.bomb.state==="carried"){if(r.plantProgress+=t,r.plantProgress>=Ot.plantTime){this.plantBomb(r,a);continue}r===n&&(i={label:"\u6B63\u5728\u5B89\u653E C4",ratio:r.plantProgress/Ot.plantTime});continue}}r.wantUse||(r.plantProgress=0)}if(this.bomb.state==="planted")for(let r of e.players){if(!r.alive||r.team!=="CT"){r.defuseProgress=0;continue}let a=Math.hypot(this.bomb.pos.x-r.pos.x,this.bomb.pos.z-r.pos.z);if(r.wantUse&&a<70){let o=r.hasKit?Ot.defuseKitTime:Ot.defuseTime;if(r.defuseProgress+=t,r.defuseProgress>=o){this.defuseBomb(r);return}r===n&&(i={label:r.hasKit?"\u6B63\u5728\u62C6\u9664\uFF08\u62C6\u5F39\u5668\uFF09":"\u6B63\u5728\u62C6\u9664 C4",ratio:r.defuseProgress/o})}else r.wantUse||(r.defuseProgress=0)}else for(let r of e.players)r.defuseProgress=0;e.hud.setProgress(i?i.label:null,i?i.ratio:0)}plantBomb(t,e){this.bomb.state="planted",this.bomb.pos.copy(t.pos),this.bomb.pos.y=4,this.bomb.timer=Ot.bombTime,this.bomb.site=e,this.bomb.planter=t,t.hasBomb=!1,t.plantProgress=0,this.game.hud.setProgress(null,0),this.game.hud.announce(`C4 \u5DF2\u5728 ${e} \u70B9\u5B89\u653E`),this.game.hud.toast(`${e} \u70B9\u70B8\u5F39\u5DF2\u5B89\u653E`);let n=new bt(new Ce(16,10,24),new pe({color:2829099}));n.position.copy(this.bomb.pos),this.game.scene.add(n),this.bombMesh=n,Lu()}defuseBomb(t){this.bomb.state="defused",this.game.hud.setProgress(null,0),this.bombMesh&&(this.game.scene.remove(this.bombMesh),this.bombMesh=null),t.money=Math.min(Ot.maxMoney,t.money+Ot.defuseBonus),this.game.hud.announce("\u70B8\u5F39\u5DF2\u62C6\u9664\uFF01"),this.endRound("CT","defuse")}updateBomb(t){let e=this.bomb;if(e.state==="planted"){e.timer-=t,e.beep-=t;let n=Math.max(.08,e.timer/Ot.bombTime*1);if(e.beep<=0&&(e.beep=n,Ru(e.timer<10),this.bombMesh&&this.bombMesh.material.color.setHex(e.timer<10?5574929:2829099)),this.bombMesh&&(this.bombMesh.rotation.y+=t*.5),e.timer<=0){e.state="exploded",this.bombMesh&&(this.game.scene.remove(this.bombMesh),this.bombMesh=null),Oe.explosion(e.pos.clone(),500);for(let i of this.game.players){if(!i.alive)continue;let r=Math.hypot(i.pos.x-e.pos.x,i.pos.z-e.pos.z);if(r<620){let a=Math.max(20,500*(1-r/620));i.takeDamage(a,e.planter,"chest","c4")}}this.endRound("T","bomb")}}if(e.state==="carried"&&e.carrier&&!e.carrier.alive&&(e.state="dropped",e.pos.copy(e.carrier.pos),e.pos.y=6,this.game.hud.toast("C4 \u6389\u843D\u4E86")),e.state==="dropped"){for(let n of this.game.players)if(!(!n.alive||n.team!=="T")&&Math.hypot(n.pos.x-e.pos.x,n.pos.z-e.pos.z)<55){n.hasBomb=!0,e.state="carried",e.carrier=n,this.game.hud.toast(`${n.name} \u62FE\u8D77\u4E86 C4`);break}}}checkWin(){let t=this.game.players.filter(i=>i.team==="T"&&i.alive).length,e=this.game.players.filter(i=>i.team==="CT"&&i.alive).length,n=this.bomb.state==="planted";if(t===0&&this.bomb.state!=="planted"){this.endRound("CT","elim");return}if(e===0){this.endRound("T","elim");return}this.time<=0&&(n||this.endRound("CT","time"))}onKill(t,e,n,i){let r=this.game;if(t.deaths++,r.dropWeapon(t,"primary"),r.dropWeapon(t,"secondary"),e&&e!==t){e.kills++;let a=jt[n],o=a?a.kill:300;a&&a.cls==="melee"&&(o=1500),e.money=Math.min(Ot.maxMoney,e.money+o),e===r.localPlayer&&r.hud.money(o)}r.hud.killfeed(e?e.name:"\u4E16\u754C",t.name,n,i,e?e.team:null,t.team),t.hasBomb&&(this.bomb.state="dropped",this.bomb.pos.copy(t.pos),this.bomb.pos.y=6,t.hasBomb=!1),t===r.localPlayer&&(r.onLocalDeath(e),r.hud.spectateTarget=e||null)}};function Zu(s,t,e){let n=jt[e],i=Wn[e],r=0;if(n)r=n.price;else if(i)r=i.price;else return!1;if(t.money<r)return s.hud.toast("\u8D44\u91D1\u4E0D\u8DB3"),!1;if(i&&i.team&&i.team!==t.team)return!1;if(n)n.slot===1?t.slots.primary={id:e,def:n,ammo:n.mag,reserve:n.res}:t.slots.secondary={id:e,def:n,ammo:n.mag,reserve:n.res},t.curSlot=n.slot===1?"primary":"secondary",t.deployTime=.45,t.reloadEnd=0;else if(e==="kevlar"){if(t.armor>=100)return!1;t.armor=100}else if(e==="kevlarhelm")t.armor=100,t.helmet=!0;else if(e==="defusekit"){if(t.team!=="CT"||t.hasKit)return!1;t.hasKit=!0}else if(i.grenade){let a=i.grenade;if(t.grenades[a]>=2)return!1;t.grenades[a]++,t.grenadeSel=a}return t.money-=r,ys(),!0}var St=s=>document.getElementById(s),za=class{constructor(t){this.game=t,this.buyOpen=!1,this.buyCat="rifles",this.announceTimer=0,this.bannerTimer=0,this.captureKey=null,this.toasts=[],this.kf=[],this.radarStatic=null,this._aliveSig="",this._gearSig="",this._iconFor=null,this.el={hud:St("hud"),health:St("health"),armor:St("armor"),money:St("money"),ammo:St("ammo"),reserve:St("reserve"),weaponName:St("weapon-name"),weaponSwitch:St("weapon-switch"),gearRow:St("gear-row"),timer:St("round-timer"),phase:St("round-phase"),scoreT:St("score-t"),scoreCT:St("score-ct"),aliveT:St("alive-t"),aliveCT:St("alive-ct"),killfeed:St("killfeed"),toasts:St("toasts"),announce:St("announce"),progressWrap:St("progress-wrap"),progressLabel:St("progress-label"),progressBar:St("progress-bar").firstElementChild,banner:St("round-banner"),result:St("round-result"),reason:St("round-reason"),rbCT:St("rb-ct"),rbT:St("rb-t"),death:St("deathnotify"),deathSub:St("death-sub"),crosshair:St("crosshair"),hitmarker:St("hitmarker"),damage:St("damage-vignette"),flash:St("flash-overlay"),scope:St("scope-overlay"),radar:St("radar"),fps:St("fps"),hint:St("hint-bar"),wicon:St("wicon"),buy:St("buymenu"),buyCats:St("buy-cats"),buyItems:St("buy-items"),buyTimer:St("buy-timer"),buyMoney:St("buy-money"),keybind:St("keybind"),kbList:St("kb-list"),kbClose:St("kb-close"),scoreboard:St("scoreboard"),sbCT:St("sb-ct"),sbT:St("sb-t"),sbCTList:St("sb-ct-list"),sbTList:St("sb-t-list")},this.buildRadarStatic(),this.bindBuyEvents(),this.bindKeybinds()}buildRadarStatic(){let t=this.game.map,e=200,n=40,i=-1,r=40,a=-1;for(let x=0;x<40;x++)for(let m=0;m<40;m++)t.isFloorTile(m,x)&&(m<n&&(n=m),m>i&&(i=m),x<r&&(r=x),x>a&&(a=x));i<0&&(n=0,i=39,r=0,a=39);let o=i-n+1,l=a-r+1,h=(e-6*2)/Math.max(o,l),u=(e-o*h)/2-n*h,d=(e-l*h)/2-r*h;this.rv={S:e,cell:h,offX:u,offY:d};let p=document.createElement("canvas");p.width=p.height=e;let g=p.getContext("2d");g.clearRect(0,0,e,e);for(let x=r;x<=a;x++)for(let m=n;m<=i;m++){if(!t.isFloorTile(m,x))continue;let f=t.blocked[x*40+m]===1,v=u+m*h,y=d+x*h;g.fillStyle=f?"rgba(120,110,86,.45)":"rgba(198,192,160,.55)",g.fillRect(v,y,h+.6,h+.6)}g.strokeStyle="rgba(40,44,34,.85)",g.lineWidth=1;for(let x=r;x<=a;x++)for(let m=n;m<=i;m++){if(!t.isFloorTile(m,x))continue;let f=u+m*h,v=d+x*h;t.isFloorTile(m,x-1)||(g.beginPath(),g.moveTo(f,v),g.lineTo(f+h,v),g.stroke()),t.isFloorTile(m,x+1)||(g.beginPath(),g.moveTo(f,v+h),g.lineTo(f+h,v+h),g.stroke()),t.isFloorTile(m-1,x)||(g.beginPath(),g.moveTo(f,v),g.lineTo(f,v+h),g.stroke()),t.isFloorTile(m+1,x)||(g.beginPath(),g.moveTo(f+h,v),g.lineTo(f+h,v+h),g.stroke())}g.font="bold 15px Arial",g.textAlign="center",g.textBaseline="middle",Object.keys(t.sites).forEach((x,m)=>{let f=t.sites[x];if(!f)return;let v=u+((f.x0+f.x1)/2+2e3)/100*h,y=d+((f.z0+f.z1)/2+2e3)/100*h;g.fillStyle="rgba(20,24,16,.55)",g.beginPath(),g.arc(v,y,9,0,7),g.fill(),g.fillStyle=m===0?"rgba(240,200,120,.95)":"rgba(150,195,235,.95)",g.fillText(x,v,y+1)}),this.radarStatic=p}worldToRadar(t,e){let{cell:n,offX:i,offY:r}=this.rv;return{x:i+(t+2e3)/100*n,y:r+(e+2e3)/100*n}}setText(t,e){t.__v!==e&&(t.__v=e,t.textContent=e)}setClass(t,e,n){let i=`__c_${e}`;t[i]!==n&&(t[i]=n,t.classList.toggle(e,n))}update(t){let e=this.game,n=e.localPlayer,i=e.round,a=i.phase==="freeze"||i.phase==="live"?Math.max(0,i.time):0,o=Math.floor(a/60),l=Math.floor(a%60);if(this.setText(this.el.timer,`${o}:${l.toString().padStart(2,"0")}`),this.setClass(this.el.timer,"low",a<20&&i.phase==="live"),this.setText(this.el.phase,i.phase==="freeze"?"\u51C6\u5907":i.phase==="live"?"\u4EA4\u6218\u4E2D":i.phase==="over"?"\u56DE\u5408\u7ED3\u675F":"\u6BD4\u8D5B\u7ED3\u675F"),this.setText(this.el.scoreT,String(i.scoreT)),this.setText(this.el.scoreCT,String(i.scoreCT)),this.renderAlive(),n){this.setText(this.el.health,String(Math.max(0,Math.ceil(n.health)))),this.setClass(this.el.health,"low",n.health<=25),this.setText(this.el.armor,String(Math.ceil(n.armor))),this.setText(this.el.money,`$${n.money}`);let c=n.weaponDef;n.curSlot==="grenade"?(this.setText(this.el.ammo,"--"),this.setText(this.el.reserve,""),this.setText(this.el.weaponName,n.grenadeSel==="he"?"HE Grenade":n.grenadeSel==="flash"?"Flashbang":"Smoke")):(this.setText(this.el.ammo,c&&c.cls!=="melee"?String(n.currentAmmo()):"--"),this.setText(this.el.reserve,c&&c.cls!=="melee"?String(n.reserveAmmo()):""),this.setText(this.el.weaponName,c?c.name:"\u2014")),this.drawWeaponIcon(n);let h=[];n.armor>0&&h.push(n.helmet?"KEV+HELM":"KEVLAR"),n.hasKit&&h.push("KIT"),n.hasBomb&&h.push("C4");for(let g of["he","flash","smoke"])n.grenades[g]>0&&h.push(`${g.toUpperCase()}\xD7${n.grenades[g]}`);let u=h.join("|");u!==this._gearSig&&(this._gearSig=u,this.el.gearRow.innerHTML=h.map(g=>`<span>${g}</span>`).join("")),this.updateCrosshair(n,c);let d=Math.min(1,n.flashAmount).toFixed(2);this.el.flash.__op!==d&&(this.el.flash.__op=d,this.el.flash.style.opacity=d);let p=n.zoom>0;this.setClass(this.el.scope,"hidden",!p),this.setClass(this.el.crosshair,"hide",p||!n.alive),this.setClass(this.el.death,"hidden",n.alive||i.phase==="over")}this.announceTimer>0&&(this.announceTimer-=t,this.announceTimer<=0&&this.el.announce.classList.remove("show")),this.bannerTimer>0&&(this.bannerTimer-=t,this.bannerTimer<=0&&this.hideBanner()),this.updateToasts(t),this.drawRadar(),this.el.fps.textContent=e.settings.showFps?`${Math.round(e.fps)} FPS`:"",this.buyOpen&&(this.el.buyTimer.textContent=Math.max(0,Math.ceil(e.buyTimeLeft())),this.el.buyMoney.textContent=`$${n?n.money:0}`)}updateCrosshair(t,e){let n=this.game.settings,i=Math.hypot(t.vel.x,t.vel.z),r=e?t.computeSpread(e)*180/Math.PI:0,a=n.crosshairGap+i*.035+Math.min(r,12)*2.2,o=this.el.crosshair.style;o.setProperty("--ch-color",n.crosshair),o.setProperty("--ch-size",`${n.crosshairSize}px`),o.setProperty("--ch-gap",`${a.toFixed(1)}px`)}renderAlive(){let t=this.game,e="",n="";for(let a of t.players)a.team==="T"?e+=a.alive?"1":"0":n+=a.alive?"1":"0";let i=`${e}|${n}`;if(i===this._aliveSig)return;this._aliveSig=i;let r=a=>a.split("").map(o=>`<i class="${o==="1"?"on":"dead"}"></i>`).join("");this.el.aliveT.innerHTML=r(e),this.el.aliveCT.innerHTML=r(n)}drawWeaponIcon(t){let e=this.el.wicon;if(!e)return;let n=t.curSlot==="grenade"?`g:${t.grenadeSel}`:t.weaponDef?t.weaponDef.id:"none";if(this._iconFor===n)return;this._iconFor=n;let i=e.getContext("2d"),r=e.width,a=e.height;i.clearRect(0,0,r,a),i.fillStyle="rgba(236,230,208,0.80)";let o=(h,u,d,p)=>i.fillRect(h*r,u*a,d*r,p*a),l=t.weaponDef,c=l?l.cls:"none";if(n.startsWith("g:"))i.beginPath(),i.arc(r*.5,a*.6,a*.22,0,7),i.fill(),o(.46,.18,.08,.2);else if(c==="melee")o(.12,.46,.5,.09),o(.6,.38,.08,.24),o(.68,.44,.2,.13);else if(c==="pistol")o(.22,.38,.5,.13),o(.28,.51,.16,.28),l&&l.id==="elite"&&o(.54,.51,.14,.24);else{let h=c==="sniper"||c==="machinegun";o(h?.06:.16,.42,h?.7:.58,.12),o(h?.74:.7,.46,.18,.06),o(.3,.54,.12,.26),o(.17,.54,.1,.18),c==="sniper"&&o(.34,.28,.22,.1),c==="machinegun"&&o(.42,.54,.16,.24),c==="shotgun"&&o(.42,.56,.34,.06)}}openKeybinds(){this.keybindOpen=!0,this.captureKey=null,this.el.keybind.classList.remove("hidden"),this.renderKeybinds()}closeKeybinds(){this.captureKey=null,this.keybindOpen=!1,this.el.keybind.classList.add("hidden")}renderKeybinds(){let t=this.game.settings.keymap;this.el.kbList.innerHTML=iu.map(([e,n])=>{let i=this.captureKey===e,r=t[e],a=i?"\u6309\u4E0B\u65B0\u952E\u2026":ma(r);return`<div class="kb-row${i?" waiting":""}" data-a="${e}">
        <span class="kb-name">${n}</span>
        <span class="kb-key">${a}</span>
      </div>`}).join("")}assignKey(t){let e=this.captureKey;if(this.captureKey=null,!e||!t||t==="Escape"){this.renderKeybinds();return}let n=this.game.settings.keymap;for(let i of Object.keys(n))n[i]===t&&i!==e&&(n[i]="");n[e]=t,this.game.saveSettings(),this.renderKeybinds()}bindKeybinds(){this.el.kbList.addEventListener("click",t=>{let e=t.target.closest(".kb-row");e&&(this.captureKey=e.dataset.a,this.renderKeybinds())}),this.el.kbClose.addEventListener("click",()=>this.closeKeybinds())}drawRadar(){let t=this.game,e=this.el.radar,n=e.getContext("2d"),i=e.width;n.clearRect(0,0,i,i),n.drawImage(this.radarStatic,0,0);let r=t.round.bomb;if(r.state==="planted"||r.state==="dropped"){let o=this.worldToRadar(r.pos.x,r.pos.z,i);n.fillStyle=r.state==="planted"?Math.floor(t.time*4)%2?"#ff4433":"#ffaa33":"#ffcc66",n.fillRect(o.x-3,o.y-3,6,6)}let a=t.localPlayer;for(let o of t.players){if(!o.alive)continue;let l=this.worldToRadar(o.pos.x,o.pos.z,i);o!==a&&(o.team===a.team?(n.fillStyle=o===t.spectating?"rgba(120,255,140,.95)":"rgba(150,200,240,.85)",n.beginPath(),n.arc(l.x,l.y,3,0,7),n.fill()):t.isSpotted(o)&&(n.fillStyle="rgba(240,90,60,.95)",n.beginPath(),n.arc(l.x,l.y,3.2,0,7),n.fill()))}if(a){let o=this.worldToRadar(a.pos.x,a.pos.z,i);n.save(),n.translate(o.x,o.y),n.rotate(-a.yaw),n.fillStyle="rgba(255,245,200,.95)",n.beginPath(),n.moveTo(0,-6),n.lineTo(4.6,5),n.lineTo(0,2.6),n.lineTo(-4.6,5),n.closePath(),n.fill(),n.restore(),n.save(),n.translate(o.x,o.y),n.rotate(-a.yaw);let l=n.createLinearGradient(0,0,0,-40);l.addColorStop(0,"rgba(255,240,180,.16)"),l.addColorStop(1,"rgba(255,240,180,0)"),n.fillStyle=l,n.beginPath(),n.moveTo(0,0),n.lineTo(-22,-42),n.lineTo(22,-42),n.closePath(),n.fill(),n.restore()}}hitMarker(t){let e=this.el.hitmarker;e.classList.remove("show"),e.offsetWidth,e.classList.add("show"),e.style.filter=t?"drop-shadow(0 0 4px #ff5533)":"none"}damageFlash(t){let e=this.el.damage;e.style.opacity=Math.min(.9,.25+t/90).toFixed(2),clearTimeout(this._dmgT),this._dmgT=setTimeout(()=>{e.style.opacity=0},140)}killfeed(t,e,n,i,r,a){let o=n==="c4"?"C4":n==="hegrenade"?"HE":jt[n]?.name||n,l=document.createElement("div");l.className="kf",l.innerHTML=`<span class="n ${r||""}">${t}</span>
      <span class="w">[${o}${i?" \xB7 HS":""}]</span>
      <span class="n ${a}">${e}</span>`,this.el.killfeed.appendChild(l),this.kf.push({el:l,t:6}),this.kf.length>6&&this.kf.shift().el.remove()}toast(t){let e=document.createElement("div");e.className="toast",e.textContent=t,this.el.toasts.appendChild(e),this.toasts.push({el:e,t:2.6}),this.toasts.length>4&&this.toasts.shift().el.remove()}announce(t,e=2.2){this.el.announce.textContent=t,this.el.announce.classList.add("show"),this.announceTimer=e}updateToasts(t){for(let e=this.kf.length-1;e>=0;e--)this.kf[e].t-=t,this.kf[e].t<=.5&&this.kf[e].el.classList.add("out"),this.kf[e].t<=0&&(this.kf[e].el.remove(),this.kf.splice(e,1));for(let e=this.toasts.length-1;e>=0;e--)this.toasts[e].t-=t,this.toasts[e].t<=0&&(this.toasts[e].el.remove(),this.toasts.splice(e,1))}money(t){let e=this.el.money;e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}setProgress(t,e){if(!t){this.el.progressWrap.classList.add("hidden");return}this.el.progressWrap.classList.remove("hidden"),this.el.progressLabel.textContent=t,this.el.progressBar.style.width=`${Math.min(100,e*100).toFixed(1)}%`}roundEnd(t,e,n,i){this.el.banner.classList.remove("hidden"),this.el.result.textContent=e,this.el.result.className=t==="CT"?"ct":"t",this.el.reason.textContent=t==="CT"?"\u53CD\u6050\u7CBE\u82F1":"\u6050\u6016\u5206\u5B50",this.el.rbCT.textContent=n,this.el.rbT.textContent=i,this.el.announce.classList.remove("show"),this.bannerTimer=Ot.roundEndDelay-.6,this.setProgress(null,0)}hideBanner(){this.bannerTimer=0,this.el.banner.classList.add("hidden")}matchEnd(t,e,n){this.bannerTimer=0,this.el.banner.classList.remove("hidden"),this.el.result.textContent=t==="CT"?"\u53CD\u6050\u7CBE\u82F1 \u83B7\u5F97\u6BD4\u8D5B\u80DC\u5229":"\u6050\u6016\u5206\u5B50 \u83B7\u5F97\u6BD4\u8D5B\u80DC\u5229",this.el.result.className=t==="CT"?"ct":"t",this.el.reason.textContent=`\u6700\u7EC8\u6BD4\u5206 ${e} : ${n}`,this.el.rbCT.textContent=e,this.el.rbT.textContent=n,this.toast("\u6309 R \u91CD\u65B0\u5F00\u59CB\u6BD4\u8D5B")}hint(t){if(!t){this.el.hint.classList.remove("show");return}this.el.hint.textContent=t,this.el.hint.classList.add("show")}deathNotice(t){this.el.deathSub.textContent=t,this.el.death.classList.remove("hidden")}hideDeath(){this.el.death.classList.add("hidden")}bindBuyEvents(){this.el.buyCats.addEventListener("click",t=>{let e=t.target.closest(".buy-cat");e&&(this.buyCat=e.dataset.k,this.renderBuy())}),this.el.buyItems.addEventListener("click",t=>{let e=t.target.closest(".buy-item");!e||e.classList.contains("dis")||this.doBuy(e.dataset.k)})}toggleBuy(t){let e=t??!this.buyOpen;if(e&&!this.game.inBuyZone()&&!this.buyOpen){this.toast("\u5FC5\u987B\u5728\u51FA\u751F\u533A\u8D2D\u4E70");return}this.buyOpen=e,this.el.buy.classList.toggle("hidden",!e),e?(Di(),this.renderBuy(),this.game.enterMenuPause()):this.game.exitMenuPause()}renderBuy(){let t=this.game.localPlayer;if(!t)return;let e=Object.entries(Rl);this.el.buyCats.innerHTML=e.map(([r,a],o)=>`<div class="buy-cat ${r===this.buyCat?"on":""}" data-k="${r}">
        <b>${o+1}</b>${a.title}
      </div>`).join("");let i=Rl[this.buyCat].items.filter(r=>{let a=jt[r];if(a)return nu[t.team].includes(r)&&a.price>0;let o=Wn[r];return o&&o.team?o.team===t.team:!0});this.el.buyItems.innerHTML=i.map((r,a)=>{let o=jt[r],l=Wn[r],c=o?o.price:l.price,h=o?o.name:l.cn,u=this.ownsAlready(r,t),d=t.money<c;return`<div class="buy-item ${u?"dis":d?"poor":""}" data-k="${r}">
        <span class="bi-name">${a+1}. ${h}<small>${o?o.cls.toUpperCase():"GEAR"}</small></span>
        <span class="bi-price">${u?"\u5DF2\u62E5\u6709":"$"+c}</span>
      </div>`}).join(""),this.el.buyItems.dataset.items=i.join(",")}ownsAlready(t,e){let n=jt[t];if(n)return n.slot===1?!!e.slots.primary&&e.slots.primary.id===t:n.slot===2?!!e.slots.secondary&&e.slots.secondary.id===t:!1;if(t==="kevlar")return e.armor>=100;if(t==="kevlarhelm")return e.armor>=100&&e.helmet;if(t==="defusekit")return e.hasKit;let i=Wn[t];return i&&i.grenade?e.grenades[i.grenade]>=2:!1}doBuy(t){let e=this.game.localPlayer;if(!e)return;Zu(this.game,e,t)&&(this.toast(`\u5DF2\u8D2D\u4E70 ${jt[t]?.name||Wn[t]?.cn||t}`),this.renderBuy())}handleBuyKey(t){let e=parseInt(t.replace("Digit",""),10);if(!Number.isNaN(e)&&e>=1&&e<=9){let i=(this.el.buyItems.dataset.items||"").split(",").filter(Boolean)[e-1];i&&this.doBuy(i)}}toggleScoreboard(t){this.el.scoreboard.classList.toggle("hidden",!t),t&&this.renderScoreboard()}renderScoreboard(){let t=this.game;this.el.sbCT.textContent=t.round.scoreCT,this.el.sbT.textContent=t.round.scoreT;let e=r=>`<div class="row ${r===t.localPlayer?"me":""} ${r.alive?"":"dead"}">
      <span class="nm"><i>${r.isBot?"BOT":"YOU"}</i>${r.name}</span>
      <span class="v">${r.kills}</span>
      <span class="v">${r.deaths}</span>
      <span class="v">${Math.round(r.damageDealt)}</span>
      <span class="v">$${r.money}</span>
    </div>`,n=t.players.filter(r=>r.team==="CT").sort((r,a)=>a.kills-r.kills),i=t.players.filter(r=>r.team==="T").sort((r,a)=>a.kills-r.kills);this.el.sbCTList.innerHTML='<div class="hdr">COUNTER-TERRORISTS</div>'+n.map(e).join(""),this.el.sbTList.innerHTML='<div class="hdr">TERRORISTS</div>'+i.map(e).join("")}};var Ku={rifle:{x:15,y:-8,z:-40,s:.62,ry:.3},sniper:{x:16.2,y:-8.4,z:-44,s:.64,ry:.3},smg:{x:14.6,y:-7.6,z:-37,s:.62,ry:.32},pistol:{x:12.4,y:-7.2,z:-31,s:.58,ry:.34},melee:{x:13.4,y:-7.6,z:-36,s:.6,ry:.3,rx:.26,rz:.1},grenade:{x:13.2,y:-8.8,z:-31,s:.6,ry:.32}},ly={elite:{x:11.6,y:-4.4,z:-28,s:.52,ry:.32},awp:{x:16.6,y:-8.6,z:-46,s:.64,ry:.28},scout:{x:16.4,y:-8.4,z:-44,s:.63,ry:.28},m249:{x:15.8,y:-8.6,z:-44,s:.64,ry:.28},xm1014:{x:15.2,y:-8.2,z:-40,s:.62,ry:.3}},Oa=class{constructor(t){this.game=t,this.scene=new us,this.camera=new Me(70,16/9,1,600),this.scene.add(new ha(16777215,.78));let e=new hi(16773848,1.5);e.position.set(-.5,1.3,.9),this.scene.add(e);let n=new hi(9416920,.7);n.position.set(1.4,.3,-1),this.scene.add(n);let i=new Gn(14200944,.55,200);i.position.set(0,-20,10),this.scene.add(i),this.pose={x:4.2,y:-6.8,z:-33,s:.72},this.root=new Lt,this.root.position.set(this.pose.x,this.pose.y,this.pose.z),this.root.rotation.y=.16,this.root.scale.setScalar(this.pose.s),this.scene.add(this.root),this.weaponGroup=null,this.curId=null,this.kick=0,this.swayX=0,this.swayY=0,this.bob=0,this.rise=1,this.reloadT=0}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}invalidate(){this.curId=null}ensureEnv(){if(this.scene.environment)return;let t=this.game&&this.game.scene&&this.game.scene.background;if(!(!t||!t.isTexture))try{let e=new li(this.game.renderer),n=e.fromEquirectangular(t);this.scene.environment=n.texture,e.dispose()}catch{}}setWeapon(t){if(t===this.curId||(this.curId=t,this.weaponGroup&&(this.root.remove(this.weaponGroup),this.weaponGroup=null),!t||!jt[t]))return;let e=Vu(t);this.weaponGroup=e,this.root.add(e)}update(t,e){if(!e||(zu()==="modern"&&this.ensureEnv(),this.setWeapon(e.curSlot==="melee"?"knife":e.curSlot==="grenade"?null:e.weapon?e.weapon.id:null),this.root.visible=e.alive&&e.zoom===0&&e.curSlot!=="grenade"&&!!this.weaponGroup,!this.root.visible))return;let n=Math.hypot(e.vel.x,e.vel.z),i=e.onGround&&n>40;this.bob+=t*(i?n*.055:1.4);let r=i?Math.sin(this.bob)*Math.min(1.8,n*.007):Math.sin(this.bob*.6)*.22,a=i?Math.abs(Math.cos(this.bob))*Math.min(1.4,n*.0055):Math.sin(this.bob*.45)*.2;this.kick+=(Math.min(7,Math.abs(e.punchPitch)*1.1)-this.kick)*Math.min(1,t*16);let o=e.reloadEnd>0;this.reloadT+=((o?1:0)-this.reloadT)*Math.min(1,t*8),this.rise+=((e.deployTime>0?0:1)-this.rise)*Math.min(1,t*9);let l=-(e.lastMouseDX||0)*.55,c=(e.lastMouseDY||0)*.35;this.swayX+=(l-this.swayX)*Math.min(1,t*9),this.swayY+=(c-this.swayY)*Math.min(1,t*9),e.lastMouseDX=0,e.lastMouseDY=0;let h=e.curSlot==="melee"?"melee":e.curSlot==="grenade"?"grenade":e.weaponDef&&e.weaponDef.cls||"rifle",u=e.curSlot==="melee"?"knife":e.curSlot==="grenade"?null:e.weaponDef?e.weaponDef.id:null,d=this.game&&this.game.vmPose||ly[u]||Ku[h]||Ku.rifle,p=e.duckAmount*2.2,g=e.curSlot==="melee"&&e.swingT||0,x=g>0?Math.sin(Math.PI*(1-g)):0;this.root.scale.setScalar(d.s),this.root.position.set(d.x+r+this.swayX*.06-x*2.6,d.y+a-p-(1-this.rise)*11-this.reloadT*4.5+this.swayY*.06+x*1.8,d.z+this.kick*1.5-x*6),this.root.rotation.set((d.rx||0)+this.kick*.02+this.reloadT*.42-(1-this.rise)*.8-x*.62,(d.ry??.3)-this.kick*.008+this.swayX*.006+x*.34,(d.rz||0)+this.reloadT*.3+Math.sin(this.bob)*.01+x*.42)}};var nr=Math.PI/180,Yl=1/64,$l=(s,t,e)=>Math.max(t,Math.min(e,s)),Ju="cs16web.settings.v2";function cy(){try{let s=localStorage.getItem(Ju);if(s){let t=JSON.parse(s);return{...Xs,...t,keymap:{...ps,...t.keymap||{}}}}}catch{}return{...Xs,keymap:{...ps}}}var Zl=class{constructor(){this.settings=cy(),this.players=[],this.grenades=[],this.time=0,this.fps=60,this.stats={jumps:0},this.fx=Oe,this.pauseMenuOpen=!1,this.menuPaused=!1,this.paused=!1,this.started=!1,this.spectating=null,this.enemyCount=3,this.difficulty="normal",this.keys={},this.suppressPause=!1,this.lastShotDir=null,this.dragLook=!1,this.dragging=!1,this.pointerLockFailures=0,this.lockState="idle",this.lastLockedAt=0,this.dropped=[],this.acc=0,this.flashlightOn=!1}init(){let t=document.getElementById("gl");this.canvas=t,this.renderer=new Fs({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.maxPixelRatio=Math.min(window.devicePixelRatio||1,2),this.pixelRatio=Math.min(this.maxPixelRatio,1.5),this.renderer.setPixelRatio(this.pixelRatio),this.adaptTimer=0,ru(this.renderer.capabilities.getMaxAnisotropy()),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.renderer.outputColorSpace=Jt,this.renderer.toneMapping=_l,this.renderer.toneMappingExposure=1.02,this.renderer.autoClear=!1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=xl,this.scene=new us,this.camera=new Me(this.settings.fov,window.innerWidth/window.innerHeight,1,9e3),this.camera.rotation.order="YXZ",this.scene.add(this.camera),this.flashlight=new ca(16773328,0,2400,Math.PI/7,.5,1.1),this.flashlight.position.set(0,-6,0),this.flashlight.target.position.set(0,-4,-1),this.camera.add(this.flashlight),this.camera.add(this.flashlight.target),this.map=new Sa(this.scene,pu(this.settings.map||Ul)),this.setupEnvironment(),Mu((n,i)=>this.audioOccluded(n,i));let e=document.querySelector(".radar-label");e&&(e.textContent=this.map.label),Oe.init(this.scene,this.camera,this),this.hud=new za(this),this.round=new ka(this),this.viewModel=new Oa(this),this.setWeaponStyle(this.settings.weaponStyle||"modern",!0),this.createLocalPlayer(),this.bindEvents(),this.resize(),window.addEventListener("resize",()=>this.resize()),document.getElementById("loading").classList.add("hidden"),this.lastT=performance.now(),requestAnimationFrame(n=>this.loop(n))}setupEnvironment(){let t=this.scene.background;if(!(!t||!t.isTexture))try{let e=new li(this.renderer),n=e.fromEquirectangular(t);this.scene.environment=n.texture,e.dispose()}catch(e){console.warn("\u73AF\u5883\u8D34\u56FE\u751F\u6210\u5931\u8D25\uFF1A",e)}}resize(){let t=window.innerWidth,e=window.innerHeight;this.maxPixelRatio=Math.min(window.devicePixelRatio||1,2),this.pixelRatio>this.maxPixelRatio&&(this.pixelRatio=this.maxPixelRatio,this.renderer.setPixelRatio(this.pixelRatio)),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.viewModel&&this.viewModel.resize(t/e)}createLocalPlayer(){let t=new bs(this,{name:"\u4F60",team:"T",isBot:!1,id:0});t.isLocal=!0,t.buildMesh(this.scene),t.mesh.visible=!1,t.lastMouseDX=0,t.lastMouseDY=0,this.players=[t],this.localPlayer=t}createTeams(){for(let a of this.players)a!==this.localPlayer&&(a.mesh&&this.scene.remove(a.mesh),a._shadow&&(this.scene.remove(a._shadow),a._shadow.geometry.dispose(),a._shadow.material.dispose(),a._shadow=null));this.players=[this.localPlayer],this.grenades=[];let t=this.localPlayer;t.team="T",t.resetInventory(),t.kills=0,t.deaths=0,t.damageDealt=0,t.money=Ot.startMoney,t.mesh&&this.scene.remove(t.mesh),t._shadow&&(this.scene.remove(t._shadow),t._shadow.geometry.dispose(),t._shadow.material.dispose(),t._shadow=null),t.buildMesh(this.scene),t.mesh.visible=!1;let n={easy:.24,normal:.46,hard:.68,expert:.88}[this.difficulty]??.46,i=new Set,r=()=>{for(let a=0;a<40;a++){let o=Cl[Math.floor(Math.random()*Cl.length)];if(!i.has(o))return i.add(o),o}return`Bot${Math.floor(Math.random()*900+100)}`};for(let a=0;a<this.enemyCount-1;a++){let o=new bs(this,{name:r(),team:"T",isBot:!0,id:a+1});o.buildMesh(this.scene),o.lastMouseDX=0,o.lastMouseDY=0,o.bot=new er(this,o,$l(n+(Math.random()-.5)*.14,.15,.95)),this.players.push(o)}for(let a=0;a<this.enemyCount;a++){let o=new bs(this,{name:r(),team:"CT",isBot:!0,id:100+a});o.buildMesh(this.scene),o.lastMouseDX=0,o.lastMouseDY=0,o.bot=new er(this,o,$l(n+(Math.random()-.5)*.14,.15,.95)),this.players.push(o)}}startGame(){this.createTeams(),this.round.startMatch(),this.started=!0,this.pauseMenuOpen=!1,this.menuPaused=!1,this.paused=!1,document.getElementById("mainmenu").classList.add("hidden"),document.getElementById("hud").classList.remove("hidden"),document.getElementById("pause").classList.add("hidden"),this.hud.hideDeath(),this.hud.hideBanner(),this.hud.toggleScoreboard(!1),this.spectating=null,zl(),Du(),this.lockPointer()}restartMatch(){document.getElementById("pause").classList.add("hidden"),this.started=!1,this.startGame()}bindEvents(){window.addEventListener("keydown",a=>{let o=this.km();(a.code===o.scoreboard||a.code===o.jump)&&a.preventDefault(),!a.repeat&&this.onKeyDown(a)}),window.addEventListener("keyup",a=>{this.keys[a.code]=!1,a.code===this.km().scoreboard&&this.hud.toggleScoreboard(!1)}),document.addEventListener("mousemove",a=>{if(!this.started||this.paused)return;let o=document.pointerLockElement===this.canvas,l=this.dragLook&&this.dragging;if(!o&&!l||this.hud.buyOpen)return;let c=this.localPlayer;if(!c)return;let h=this.settings.sensitivity*.022*nr;c.yaw-=a.movementX*h,c.pitch-=a.movementY*h*(this.settings.invertY?-1:1),c.pitch=$l(c.pitch,-89*nr,89*nr),c.lastMouseDX+=a.movementX,c.lastMouseDY+=a.movementY}),this.canvas.addEventListener("mousedown",a=>{if(!(!this.started||!(document.pointerLockElement===this.canvas)&&(this.lockPointer(),!this.dragLook))&&(a.button===0&&(this.dragging=!0,this.onFireDown()),a.button===2)){let l=this.localPlayer;if(l&&l.alive){if(l.curSlot==="grenade")return;l.toggleZoom()}}}),window.addEventListener("mouseup",a=>{if(a.button===0){this.dragging=!1;let o=this.localPlayer;o&&(o.fireHeld=!1,o.priming&&o.releaseGrenade())}}),this.canvas.addEventListener("contextmenu",a=>a.preventDefault()),this.canvas.addEventListener("wheel",a=>{let o=this.localPlayer;if(!o||!o.alive)return;let l=["primary","secondary","melee"],c=l.indexOf(o.curSlot),h=l[(c+(a.deltaY>0?1:l.length-1))%l.length];o.switchSlot(h)},{passive:!0}),document.addEventListener("pointerlockerror",()=>this.onPointerLockFailed()),document.addEventListener("pointerlockchange",()=>{if(document.pointerLockElement===this.canvas){this.lockState="locked",this.lastLockedAt=typeof performance<"u"?performance.now():0,this.dragLook=!1,this.dragging=!1,this.pointerLockFailures=0;return}let o=this.lockState==="releasing",l=this.lockState==="locked";this.lockState="idle",!(o||!l||(typeof performance<"u"?performance.now():0)-this.lastLockedAt<500)&&this.started&&!this.hud.buyOpen&&!this.suppressPause&&this.round.phase!=="matchend"&&!this.pauseMenuOpen&&this.pauseGame()}),document.getElementById("btn-start").addEventListener("click",()=>{zl(),this.startGame()}),document.getElementById("btn-resume").addEventListener("click",()=>this.resumeGame()),document.getElementById("btn-keys").addEventListener("click",()=>this.hud.openKeybinds()),document.getElementById("btn-restart").addEventListener("click",()=>this.restartMatch());let t=(a,o)=>{let l=document.getElementById(a);l.addEventListener("click",c=>{let h=c.target.closest("button");h&&(l.querySelectorAll("button").forEach(u=>u.classList.remove("on")),h.classList.add("on"),o(h.dataset.v),Di())})};t("seg-diff",a=>{this.difficulty=a}),t("seg-size",a=>{this.enemyCount=parseInt(a,10)}),t("seg-style",a=>{this.setWeaponStyle(a)});let e=this.settings.weaponStyle||"modern";document.querySelectorAll("#seg-style button").forEach(a=>{a.classList.toggle("on",a.dataset.v===e)});let n=document.getElementById("set-sens"),i=document.getElementById("set-vol");n.value=this.settings.sensitivity,i.value=this.settings.volume,document.getElementById("sens-val").textContent=Number(this.settings.sensitivity).toFixed(2),document.getElementById("vol-val").textContent=Number(this.settings.volume).toFixed(2),n.addEventListener("input",()=>{this.settings.sensitivity=parseFloat(n.value),document.getElementById("sens-val").textContent=this.settings.sensitivity.toFixed(2),this.saveSettings()}),i.addEventListener("input",()=>{this.settings.volume=parseFloat(i.value),document.getElementById("vol-val").textContent=this.settings.volume.toFixed(2),vu(this.settings.volume),this.saveSettings()});let r=document.getElementById("set-chcolor");r&&(r.value=this.settings.crosshair,r.addEventListener("input",()=>{this.settings.crosshair=r.value,this.saveSettings()}))}saveSettings(){try{localStorage.setItem(Ju,JSON.stringify(this.settings))}catch{}}onKeyDown(t){let e=this.localPlayer;if(this.keys[t.code]=!0,!this.started)return;let n=this.km();if(this.hud.captureKey){this.hud.assignKey(t.code);return}if(this.hud.keybindOpen&&t.code==="Escape"){this.hud.closeKeybinds();return}if(t.code===n.scoreboard){this.hud.toggleScoreboard(!0);return}if(t.code==="Escape"){if(this.hud.buyOpen){this.hud.toggleBuy(!1);return}if(this.pauseMenuOpen){this.resumeGame();return}this.pauseGame();return}if(this.hud.buyOpen){if(t.code===n.buy){this.hud.toggleBuy(!1);return}this.hud.handleBuyKey(t.code);return}if(e){if(t.code===n.reload&&this.round.phase==="matchend"){this.restartMatch();return}if(t.code===n.buy){e.alive&&this.hud.toggleBuy();return}if(t.code===n.reload){e.alive&&e.reload();return}if(t.code===n.slot1){e.switchSlot("primary");return}if(t.code===n.slot2){e.switchSlot("secondary");return}if(t.code===n.slot3){e.switchSlot("melee");return}if(t.code===n.slot4){e.switchSlot("grenade");return}if(t.code===n.lastWeapon){e.curSlot==="primary"&&e.slots.secondary?e.switchSlot("secondary"):e.curSlot==="secondary"&&e.slots.primary&&e.switchSlot("primary");return}if(t.code===n.flashlight){this.toggleFlashlight();return}if(t.code===n.drop){this.dropWeapon(e,e.curSlot);return}}}km(){return this.settings.keymap||ps}act(t){let e=this.settings.keymap||ps;return!!this.keys[e[t]]}onFireDown(){let t=this.localPlayer;if(!t||!t.alive){this.cycleSpectate();return}if(t.curSlot==="grenade"){t.beginPrime();return}t.fireHeld=!0,t.tryFire()}toggleFlashlight(){this.flashlightOn=!this.flashlightOn,this.flashlight.intensity=this.flashlightOn?2.4:0,Di()}setWeaponStyle(t,e=!1){let n=Ou(t);return this.settings.weaponStyle=n,this.saveSettings(),this.viewModel&&this.viewModel.invalidate(),this.hud&&!e&&this.hud.toast(n==="modern"?"\u6B66\u5668\u6A21\u578B\uFF1A\u73B0\u4EE3 PBR":"\u6B66\u5668\u6A21\u578B\uFF1A1.6 \u7ECF\u5178"),n}syncPaused(){this.paused=this.pauseMenuOpen||this.menuPaused}pauseGame(){if(!this.started||this.pauseMenuOpen)return;this.pauseMenuOpen=!0,this.syncPaused(),document.getElementById("pause").classList.remove("hidden");let t=this.localPlayer;t&&(t.fireHeld=!1),document.pointerLockElement===this.canvas&&this.releasePointer()}resumeGame(){this.hud.closeKeybinds(),this.pauseMenuOpen=!1,this.syncPaused(),document.getElementById("pause").classList.add("hidden"),this.lockPointer()}enterMenuPause(){if(!this.started)return;this.menuPaused=!0,this.syncPaused();let t=this.localPlayer;t&&(t.fireHeld=!1),document.pointerLockElement===this.canvas&&this.releasePointer()}exitMenuPause(){this.menuPaused=!1,this.syncPaused(),this.lockPointer()}lockPointer(){if(document.pointerLockElement===this.canvas){this.lockState="locked";return}if(!this.canvas.requestPointerLock){this.enableDragLook();return}this.lockState="requesting";try{let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{this.lockState==="requesting"&&(this.lockState="idle"),this.onPointerLockFailed()})}catch{this.lockState==="requesting"&&(this.lockState="idle"),this.onPointerLockFailed()}}onPointerLockFailed(){document.pointerLockElement!==this.canvas&&(this.pointerLockFailures+=1,this.pointerLockFailures>=2?this.enableDragLook():this.started&&this.hud&&this.hud.toast("\u70B9\u51FB\u753B\u9762\u4EE5\u9501\u5B9A\u9F20\u6807"))}enableDragLook(){this.dragLook||(this.dragLook=!0,this.dragging=!1,this.hud.toast("\u9F20\u6807\u9501\u5B9A\u4E0D\u53EF\u7528\uFF1A\u6309\u4F4F\u5DE6\u952E\u62D6\u52A8\u53EF\u8F6C\u52A8\u89C6\u89D2"))}releasePointer(){this.suppressPause=!0,this.lockState="releasing",document.exitPointerLock(),setTimeout(()=>{this.suppressPause=!1},100)}listenerPos(){let t=this.camera;return t?{x:t.position.x,y:t.position.y,z:t.position.z,yaw:t.rotation.y}:{x:0,y:0,z:0,yaw:0}}tracePlayers(t,e,n,i){return Gl(this,t,e,n,i)}inBuyZone(){let t=this.localPlayer;if(!t||!t.alive||this.buyTimeLeft()<=0)return!1;let e=this.map.spawns[t.team],n=e.reduce((r,a)=>r+a.x,0)/e.length,i=e.reduce((r,a)=>r+a.z,0)/e.length;return Math.hypot(t.pos.x-n,t.pos.z-i)<900}buyTimeLeft(){let t=this.round;return t.phase==="freeze"?t.time:t.phase==="live"?Math.max(0,t.time-(Ot.roundTime-Ot.buyTime)):0}botsBuy(){for(let t of this.players){if(!t.isBot)continue;let e=t.team==="T"?"ak47":"m4a1",n=()=>t.money;t.slots.primary||(n()>=4750&&Math.random()<.12?this.botBuy(t,"awp"):n()>=jt[e].price?this.botBuy(t,e):n()>=1500?this.botBuy(t,"mp5navy"):n()>=650&&Math.random()<.5&&this.botBuy(t,"deagle")),(t.armor<100||!t.helmet)&&(n()>=1e3?this.botBuy(t,"kevlarhelm"):n()>=650&&t.armor<100&&this.botBuy(t,"kevlar")),t.team==="CT"&&!t.hasKit&&n()>=200&&Math.random()<.45&&this.botBuy(t,"defusekit"),n()>=300&&Math.random()<.7&&this.botBuy(t,"hegrenade"),n()>=200&&Math.random()<.45&&this.botBuy(t,"flashbang"),n()>=300&&Math.random()<.2&&this.botBuy(t,"smokegrenade")}}botBuy(t,e){let n=jt[e];if(n){if(t.money<n.price)return;t.money-=n.price,n.slot===1?t.slots.primary={id:e,def:n,ammo:n.mag,reserve:n.res}:t.slots.secondary={id:e,def:n,ammo:n.mag,reserve:n.res},t.curSlot=n.slot===1?"primary":"secondary";return}let i=Wn[e];i&&(i.team&&i.team!==t.team||t.money<i.price||(t.money-=i.price,e==="kevlar"?t.armor=100:e==="kevlarhelm"?(t.armor=100,t.helmet=!0):e==="defusekit"?t.hasKit=!0:i.grenade&&(t.grenades[i.grenade]=Math.min(2,t.grenades[i.grenade]+1))))}botCallout(t,e){e.spottedUntil=this.time+4.5;for(let n of this.players)n.team===t.team&&n.bot&&n.bot!==t&&n.bot.lastSeenTime<this.time-1.5&&Math.random()<.5&&(n.bot.lastSeen=e.pos.clone(),n.bot.lastSeenTime=this.time-2)}isSpotted(t){return(t.spottedUntil||0)>this.time}onPlayerKilled(t,e,n,i){this.round.onKill(t,e,n,i),t===this.localPlayer&&(this.camera.fov=this.settings.fov,this.camera.updateProjectionMatrix(),this.spectating=this.pickSpectateTarget())}onLocalDeath(t){let e=t&&t.weaponDef?t.weaponDef.name:"\u70B8\u5F39",n=t?`${t.name}\uFF08${e}\uFF09`:"\u73AF\u5883";this.hud.deathNotice(`\u88AB ${n} \u51FB\u6740`),this.spectating=this.pickSpectateTarget()}onPlayerFell(t){t.takeDamage(1e3,null,"leg","fall")}pickSpectateTarget(){return this.players.filter(e=>e!==this.localPlayer&&e.alive&&e.team===this.localPlayer.team)[0]||null}cycleSpectate(){let t=this.players.filter(n=>n!==this.localPlayer&&n.alive);if(!t.length)return;let e=t.indexOf(this.spectating);this.spectating=t[(e+1)%t.length]}loop(t){requestAnimationFrame(i=>this.loop(i));let e=(t-this.lastT)/1e3;this.lastT=t;let n=Math.min(.05,Math.max(1e-4,e));if(e>0&&(this.fps+=(1/e-this.fps)*.08),this.adaptTimer+=Math.min(.25,e),this.adaptTimer>2&&(this.adaptTimer=0,this.fps<48&&this.pixelRatio>1?(this.pixelRatio=Math.max(1,this.pixelRatio-.25),this.renderer.setPixelRatio(this.pixelRatio)):this.fps>58&&this.pixelRatio<this.maxPixelRatio&&(this.pixelRatio=Math.min(this.maxPixelRatio,this.pixelRatio+.25),this.renderer.setPixelRatio(this.pixelRatio))),this.started&&!this.paused){this.acc+=Math.min(.25,e);let i=0;for(;this.acc>=Yl&&i<6;)this.stepPhysics(Yl),this.acc-=Yl,i+=1;i>=6&&(this.acc=0),this.updateVisuals(e)}else this.started&&this.hud.update(e);this.renderer.clear(!0,!0,!0),this.renderer.render(this.scene,this.camera),this.renderer.clearDepth(),this.renderer.render(this.viewModel.scene,this.viewModel.camera)}stepPhysics(t){this.time+=t;let e=this.localPlayer;if(this.round.update(t),e){let n={forward:(this.act("forward")?1:0)-(this.act("back")?1:0),side:(this.act("right")?1:0)-(this.act("left")?1:0),jump:this.act("jump"),duck:this.act("duck")||!!this.keys.ControlRight||!!this.keys.KeyC,walk:this.act("walk")||!!this.keys.ShiftRight};e.wantUse=this.act("use"),e.update(t,n)}for(let n of this.players)n.bot&&n.bot.update(t);for(let n=this.grenades.length-1;n>=0;n--){let i=this.grenades[n];i.update(t),i.dead&&this.grenades.splice(n,1)}this.updateDropped()}updateVisuals(t){let e=this.localPlayer;if(Oe.update(t),this.updateCamera(t),this.updateSunShadow(),this.viewModel.update(t,e),this.hud.update(t),Ol(this.listenerPos()),e){let n=ma(this.km().buy);this.inBuyZone()&&!this.hud.buyOpen?this.hud.hint(`\u6309 ${n} \u6253\u5F00\u8D2D\u4E70\u83DC\u5355`):e.hasBomb&&this.map.siteAt(e.pos.x,e.pos.z)&&this.round.bomb.state==="carried"?this.hud.hint("\u6309\u4F4F E \u5B89\u653E C4"):e.team==="CT"&&this.round.bomb.state==="planted"&&Math.hypot(e.pos.x-this.round.bomb.pos.x,e.pos.z-this.round.bomb.pos.z)<90?this.hud.hint("\u6309\u4F4F E \u62C6\u9664\u70B8\u5F39"):this.hud.hint(null)}}audioOccluded(t,e){if(!this.map||!t||!e)return!1;let n=e.x,i=(e.y||0)+20,r=e.z,a=t.x-n,o=(t.y||0)+20-i,l=t.z-r,c=Math.hypot(a,o,l);if(c<60)return!1;let h=new T(a/c,o/c,l/c);return!!this.map.raycast(new T(n,i,r),h,c-30)}updateSunShadow(){let t=this.map&&this.map.sun,e=this.localPlayer;if(!t||!t.castShadow||!e)return;let n=ms*2/t.shadow.mapSize.x,i=Math.round(e.pos.x/n)*n,r=Math.round(e.pos.z/n)*n;t.target.position.set(i,0,r),t.position.set(i+gs.x*Ea,gs.y*Ea,r+gs.z*Ea),t.target.updateMatrixWorld(),t.updateMatrixWorld()}removeDropped(t){this.scene.remove(t),t.traverse(e=>{e.isSprite&&e.material&&(e.material.map&&e.material.map.dispose(),e.material.dispose())})}dropWeapon(t,e){if(e!=="primary"&&e!=="secondary")return;let n=t.slots[e];if(!n)return;let i=jt[n.id];if(!i||i.cls==="melee")return;t.slots[e]=null,(e==="primary"&&t.curSlot==="primary"||e==="secondary"&&t.curSlot==="secondary")&&(t.curSlot=t.slots.primary?"primary":t.slots.secondary?"secondary":"melee");let r=Wu(n.id);if(r.position.set(t.pos.x,t.pos.y,t.pos.z),r.rotation.y=Math.random()*Math.PI*2,r.add(Xu(i.name||n.id)),r.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),this.scene.add(r),this.dropped.push({id:n.id,ammo:n.ammo,reserve:n.reserve,mesh:r,x:t.pos.x,z:t.pos.z}),this.dropped.length>12){let a=this.dropped.shift();this.removeDropped(a.mesh)}}clearDropped(){for(let t of this.dropped)this.removeDropped(t.mesh);this.dropped=[]}updateDropped(){for(let t=this.dropped.length-1;t>=0;t--){let e=this.dropped[t];e.mesh.rotation.y+=.02;let n=!1;for(let i of this.players){if(!i.alive||Math.hypot(i.pos.x-e.x,i.pos.z-e.z)>46)continue;let r=jt[e.id],a=r.slot===1?"primary":"secondary";if(!i.slots[a]){i.slots[a]={id:e.id,def:r,ammo:e.ammo,reserve:e.reserve},i.curSlot=a,i.deployTime=.4,i===this.localPlayer&&ys(),n=!0;break}}n&&(this.removeDropped(e.mesh),this.dropped.splice(t,1))}}updateCamera(t){let e=this.localPlayer,n=null;if(e&&e.alive?(n=e,this.spectating=null):this.spectating&&this.spectating.alive&&(n=this.spectating),n){let r=Oe.shake*1.6,a=(Math.random()-.5)*r,o=(Math.random()-.5)*r;this.camera.position.set(n.pos.x,n.eyeY(),n.pos.z),this.camera.rotation.set(n.pitch+n.punchPitch*nr+o*.01,n.yaw+n.punchYaw*nr+a*.01,n.punchYaw*.012)}let i=this.settings.fov;if(e&&e.alive&&e.zoom>0){let r=e.weaponDef;r&&r.scope&&(i=this.settings.fov*r.scope[e.zoom-1])}Math.abs(this.camera.fov-i)>.1&&(this.camera.fov+=(i-this.camera.fov)*Math.min(1,t*16),this.camera.updateProjectionMatrix())}};window.addEventListener("DOMContentLoaded",()=>{let s=new Zl;window.game=s;try{s.init()}catch(t){console.error(t);let e=document.getElementById("loading");e&&(e.textContent="\u521D\u59CB\u5316\u5931\u8D25\uFF1A"+t.message)}});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
