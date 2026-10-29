(()=>{var vm=Object.create;var cc=Object.defineProperty;var ym=Object.getOwnPropertyDescriptor;var xm=Object.getOwnPropertyNames;var Sm=Object.getPrototypeOf,Mm=Object.prototype.hasOwnProperty;var hc=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')});var Pn=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(i){throw e=[i],i}};var fu=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}},bm=(n,t)=>{for(var e in t)cc(n,e,{get:t[e],enumerable:!0})},wm=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of xm(t))!Mm.call(n,s)&&s!==e&&cc(n,s,{get:()=>t[s],enumerable:!(i=ym(t,s))||i.enumerable});return n};var du=(n,t,e)=>(e=n!=null?vm(Sm(n)):{},wm(t||!n||!n.__esModule?cc(e,"default",{value:n,enumerable:!0}):e,n));var gu=fu((mu,uc)=>{var pu=(()=>{var n=typeof document<"u"?document.currentScript?.src:void 0;return typeof __filename<"u"&&(n=n||__filename),(function(t={}){var e,i=t,s,o,c=new Promise((h,m)=>{s=h,o=m}),u=typeof window=="object",f=typeof importScripts=="function",d=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer",v=Object.assign({},i),S=[],g="./this.program",b=(h,m)=>{throw m},E="";function C(h){return i.locateFile?i.locateFile(h,E):E+h}var M,x;if(d){var B=hc("fs"),W=hc("path");E=__dirname+"/",x=h=>{h=He(h)?new URL(h):W.normalize(h);var m=B.readFileSync(h);return m},M=(h,m=!0)=>(h=He(h)?new URL(h):W.normalize(h),new Promise((y,w)=>{B.readFile(h,m?void 0:"utf8",(R,X)=>{R?w(R):y(m?X.buffer:X)})})),!i.thisProgram&&process.argv.length>1&&(g=process.argv[1].replace(/\\/g,"/")),S=process.argv.slice(2),b=(h,m)=>{throw process.exitCode=h,m}}else(u||f)&&(f?E=self.location.href:typeof document<"u"&&document.currentScript&&(E=document.currentScript.src),n&&(E=n),E.startsWith("blob:")?E="":E=E.substr(0,E.replace(/[?#].*/,"").lastIndexOf("/")+1),f&&(x=h=>{var m=new XMLHttpRequest;return m.open("GET",h,!1),m.responseType="arraybuffer",m.send(null),new Uint8Array(m.response)}),M=h=>He(h)?new Promise((m,y)=>{var w=new XMLHttpRequest;w.open("GET",h,!0),w.responseType="arraybuffer",w.onload=()=>{if(w.status==200||w.status==0&&w.response){m(w.response);return}y(w.status)},w.onerror=y,w.send(null)}):fetch(h,{credentials:"same-origin"}).then(m=>m.ok?m.arrayBuffer():Promise.reject(new Error(m.status+" : "+m.url))));var N=i.print||console.log.bind(console),F=i.printErr||console.error.bind(console);Object.assign(i,v),v=null,i.arguments&&(S=i.arguments),i.thisProgram&&(g=i.thisProgram);var U=i.wasmBinary,Y,P=!1,V;function j(h,m){h||Ce(m)}var Q,nt,ct,z,q,st,G,vt;function dt(){var h=Y.buffer;i.HEAP8=Q=new Int8Array(h),i.HEAP16=ct=new Int16Array(h),i.HEAPU8=nt=new Uint8Array(h),i.HEAPU16=z=new Uint16Array(h),i.HEAP32=q=new Int32Array(h),i.HEAPU32=st=new Uint32Array(h),i.HEAPF32=G=new Float32Array(h),i.HEAPF64=vt=new Float64Array(h)}var St=[],_t=[],Xt=[],$t=!1;function ue(){var h=i.preRun;h&&(typeof h=="function"&&(h=[h]),h.forEach(yt)),Ct(St)}function xe(){$t=!0,!i.noFSInit&&!I.initialized&&I.init(),I.ignorePermissions=!1,Mt.init(),Ct(_t)}function Ee(){var h=i.postRun;h&&(typeof h=="function"&&(h=[h]),h.forEach(Zt)),Ct(Xt)}function yt(h){St.unshift(h)}function wt(h){_t.unshift(h)}function Zt(h){Xt.unshift(h)}var ae=0,Ot=null,me=null;function Je(h){return h}function he(h){ae++,i.monitorRunDependencies?.(ae)}function Me(h){if(ae--,i.monitorRunDependencies?.(ae),ae==0&&(Ot!==null&&(clearInterval(Ot),Ot=null),me)){var m=me;me=null,m()}}function Ce(h){i.onAbort?.(h),h="Aborted("+h+")",F(h),P=!0,h+=". Build with -sASSERTIONS for more info.",$t&&cu();var m=new WebAssembly.RuntimeError(h);throw o(m),m}var be="data:application/octet-stream;base64,",De=h=>h.startsWith(be),He=h=>h.startsWith("file://");function K(){var h="occt-import-js.wasm";return De(h)?h:C(h)}var ht;function at(h){if(h==ht&&U)return new Uint8Array(U);if(x)return x(h);throw"both async and sync fetching of the wasm failed"}function k(h){return U?Promise.resolve().then(()=>at(h)):M(h).then(m=>new Uint8Array(m),()=>at(h))}function It(h,m,y){return k(h).then(w=>WebAssembly.instantiate(w,m)).then(y,w=>{F(`failed to asynchronously prepare wasm: ${w}`),Ce(w)})}function Kt(h,m,y,w){return!h&&typeof WebAssembly.instantiateStreaming=="function"&&!De(m)&&!He(m)&&!d&&typeof fetch=="function"?fetch(m,{credentials:"same-origin"}).then(R=>{var X=WebAssembly.instantiateStreaming(R,y);return X.then(w,function(Z){return F(`wasm streaming compile failed: ${Z}`),F("falling back to ArrayBuffer instantiation"),It(m,y,w)})}):It(m,y,w)}function O(){return{a:hm}}function T(){var h=O();function m(w,R){return on=w.exports,Y=on._,dt(),Fo=on.ba,wt(on.$),Me("wasm-instantiate"),on}he("wasm-instantiate");function y(w){m(w.instance)}if(i.instantiateWasm)try{return i.instantiateWasm(h,m)}catch(w){F(`Module.instantiateWasm callback failed with error: ${w}`),o(w)}return ht??=K(),Kt(U,ht,h,y).catch(o),{}}var H,it;function pt(h){this.name="ExitStatus",this.message=`Program terminated with exit(${h})`,this.status=h}var Ct=h=>{h.forEach(m=>m(i))},Ft=i.noExitRuntime||!0,mt={isAbs:h=>h.charAt(0)==="/",splitPath:h=>{var m=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return m.exec(h).slice(1)},normalizeArray:(h,m)=>{for(var y=0,w=h.length-1;w>=0;w--){var R=h[w];R==="."?h.splice(w,1):R===".."?(h.splice(w,1),y++):y&&(h.splice(w,1),y--)}if(m)for(;y;y--)h.unshift("..");return h},normalize:h=>{var m=mt.isAbs(h),y=h.substr(-1)==="/";return h=mt.normalizeArray(h.split("/").filter(w=>!!w),!m).join("/"),!h&&!m&&(h="."),h&&y&&(h+="/"),(m?"/":"")+h},dirname:h=>{var m=mt.splitPath(h),y=m[0],w=m[1];return!y&&!w?".":(w&&(w=w.substr(0,w.length-1)),y+w)},basename:h=>{if(h==="/")return"/";h=mt.normalize(h),h=h.replace(/\/$/,"");var m=h.lastIndexOf("/");return m===-1?h:h.substr(m+1)},join:(...h)=>mt.normalize(h.join("/")),join2:(h,m)=>mt.normalize(h+"/"+m)},Tt=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return w=>crypto.getRandomValues(w);if(d)try{var h=hc("crypto"),m=h.randomFillSync;if(m)return w=>h.randomFillSync(w);var y=h.randomBytes;return w=>(w.set(y(w.byteLength)),w)}catch{}Ce("initRandomDevice")},Ut=h=>(Ut=Tt())(h),jt={resolve:(...h)=>{for(var m="",y=!1,w=h.length-1;w>=-1&&!y;w--){var R=w>=0?h[w]:I.cwd();if(typeof R!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!R)return"";m=R+"/"+m,y=mt.isAbs(R)}return m=mt.normalizeArray(m.split("/").filter(X=>!!X),!y).join("/"),(y?"/":"")+m||"."},relative:(h,m)=>{h=jt.resolve(h).substr(1),m=jt.resolve(m).substr(1);function y(Lt){for(var Yt=0;Yt<Lt.length&&Lt[Yt]==="";Yt++);for(var te=Lt.length-1;te>=0&&Lt[te]==="";te--);return Yt>te?[]:Lt.slice(Yt,te-Yt+1)}for(var w=y(h.split("/")),R=y(m.split("/")),X=Math.min(w.length,R.length),Z=X,et=0;et<X;et++)if(w[et]!==R[et]){Z=et;break}for(var xt=[],et=Z;et<w.length;et++)xt.push("..");return xt=xt.concat(R.slice(Z)),xt.join("/")}},Vt=typeof TextDecoder<"u"?new TextDecoder:void 0,Dt=(h,m=0,y=NaN)=>{for(var w=m+y,R=m;h[R]&&!(R>=w);)++R;if(R-m>16&&h.buffer&&Vt)return Vt.decode(h.subarray(m,R));for(var X="";m<R;){var Z=h[m++];if(!(Z&128)){X+=String.fromCharCode(Z);continue}var et=h[m++]&63;if((Z&224)==192){X+=String.fromCharCode((Z&31)<<6|et);continue}var xt=h[m++]&63;if((Z&240)==224?Z=(Z&15)<<12|et<<6|xt:Z=(Z&7)<<18|et<<12|xt<<6|h[m++]&63,Z<65536)X+=String.fromCharCode(Z);else{var Lt=Z-65536;X+=String.fromCharCode(55296|Lt>>10,56320|Lt&1023)}}return X},ne=[],oe=h=>{for(var m=0,y=0;y<h.length;++y){var w=h.charCodeAt(y);w<=127?m++:w<=2047?m+=2:w>=55296&&w<=57343?(m+=4,++y):m+=3}return m},ge=(h,m,y,w)=>{if(!(w>0))return 0;for(var R=y,X=y+w-1,Z=0;Z<h.length;++Z){var et=h.charCodeAt(Z);if(et>=55296&&et<=57343){var xt=h.charCodeAt(++Z);et=65536+((et&1023)<<10)|xt&1023}if(et<=127){if(y>=X)break;m[y++]=et}else if(et<=2047){if(y+1>=X)break;m[y++]=192|et>>6,m[y++]=128|et&63}else if(et<=65535){if(y+2>=X)break;m[y++]=224|et>>12,m[y++]=128|et>>6&63,m[y++]=128|et&63}else{if(y+3>=X)break;m[y++]=240|et>>18,m[y++]=128|et>>12&63,m[y++]=128|et>>6&63,m[y++]=128|et&63}}return m[y]=0,y-R};function rt(h,m,y){var w=y>0?y:oe(h)+1,R=new Array(w),X=ge(h,R,0,R.length);return m&&(R.length=X),R}var Bt=()=>{if(!ne.length){var h=null;if(d){var m=256,y=Buffer.alloc(m),w=0,R=process.stdin.fd;try{w=B.readSync(R,y,0,m)}catch(X){if(X.toString().includes("EOF"))w=0;else throw X}w>0&&(h=y.slice(0,w).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(h=window.prompt("Input: "),h!==null&&(h+=`
`));if(!h)return null;ne=rt(h,!0)}return ne.shift()},Mt={ttys:[],init(){},shutdown(){},register(h,m){Mt.ttys[h]={input:[],output:[],ops:m},I.registerDevice(h,Mt.stream_ops)},stream_ops:{open(h){var m=Mt.ttys[h.node.rdev];if(!m)throw new I.ErrnoError(43);h.tty=m,h.seekable=!1},close(h){h.tty.ops.fsync(h.tty)},fsync(h){h.tty.ops.fsync(h.tty)},read(h,m,y,w,R){if(!h.tty||!h.tty.ops.get_char)throw new I.ErrnoError(60);for(var X=0,Z=0;Z<w;Z++){var et;try{et=h.tty.ops.get_char(h.tty)}catch{throw new I.ErrnoError(29)}if(et===void 0&&X===0)throw new I.ErrnoError(6);if(et==null)break;X++,m[y+Z]=et}return X&&(h.node.timestamp=Date.now()),X},write(h,m,y,w,R){if(!h.tty||!h.tty.ops.put_char)throw new I.ErrnoError(60);try{for(var X=0;X<w;X++)h.tty.ops.put_char(h.tty,m[y+X])}catch{throw new I.ErrnoError(29)}return w&&(h.node.timestamp=Date.now()),X}},default_tty_ops:{get_char(h){return Bt()},put_char(h,m){m===null||m===10?(N(Dt(h.output)),h.output=[]):m!=0&&h.output.push(m)},fsync(h){h.output&&h.output.length>0&&(N(Dt(h.output)),h.output=[])},ioctl_tcgets(h){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(h,m,y){return 0},ioctl_tiocgwinsz(h){return[24,80]}},default_tty1_ops:{put_char(h,m){m===null||m===10?(F(Dt(h.output)),h.output=[]):m!=0&&h.output.push(m)},fsync(h){h.output&&h.output.length>0&&(F(Dt(h.output)),h.output=[])}}},kt=(h,m)=>{nt.fill(0,h,h+m)},Wt=(h,m)=>Math.ceil(h/m)*m,At=h=>{h=Wt(h,65536);var m=lu(65536,h);return m&&kt(m,h),m},Rt={ops_table:null,mount(h){return Rt.createNode(null,"/",16895,0)},createNode(h,m,y,w){if(I.isBlkdev(y)||I.isFIFO(y))throw new I.ErrnoError(63);Rt.ops_table||={dir:{node:{getattr:Rt.node_ops.getattr,setattr:Rt.node_ops.setattr,lookup:Rt.node_ops.lookup,mknod:Rt.node_ops.mknod,rename:Rt.node_ops.rename,unlink:Rt.node_ops.unlink,rmdir:Rt.node_ops.rmdir,readdir:Rt.node_ops.readdir,symlink:Rt.node_ops.symlink},stream:{llseek:Rt.stream_ops.llseek}},file:{node:{getattr:Rt.node_ops.getattr,setattr:Rt.node_ops.setattr},stream:{llseek:Rt.stream_ops.llseek,read:Rt.stream_ops.read,write:Rt.stream_ops.write,allocate:Rt.stream_ops.allocate,mmap:Rt.stream_ops.mmap,msync:Rt.stream_ops.msync}},link:{node:{getattr:Rt.node_ops.getattr,setattr:Rt.node_ops.setattr,readlink:Rt.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Rt.node_ops.getattr,setattr:Rt.node_ops.setattr},stream:I.chrdev_stream_ops}};var R=I.createNode(h,m,y,w);return I.isDir(R.mode)?(R.node_ops=Rt.ops_table.dir.node,R.stream_ops=Rt.ops_table.dir.stream,R.contents={}):I.isFile(R.mode)?(R.node_ops=Rt.ops_table.file.node,R.stream_ops=Rt.ops_table.file.stream,R.usedBytes=0,R.contents=null):I.isLink(R.mode)?(R.node_ops=Rt.ops_table.link.node,R.stream_ops=Rt.ops_table.link.stream):I.isChrdev(R.mode)&&(R.node_ops=Rt.ops_table.chrdev.node,R.stream_ops=Rt.ops_table.chrdev.stream),R.timestamp=Date.now(),h&&(h.contents[m]=R,h.timestamp=R.timestamp),R},getFileDataAsTypedArray(h){return h.contents?h.contents.subarray?h.contents.subarray(0,h.usedBytes):new Uint8Array(h.contents):new Uint8Array(0)},expandFileStorage(h,m){var y=h.contents?h.contents.length:0;if(!(y>=m)){var w=1024*1024;m=Math.max(m,y*(y<w?2:1.125)>>>0),y!=0&&(m=Math.max(m,256));var R=h.contents;h.contents=new Uint8Array(m),h.usedBytes>0&&h.contents.set(R.subarray(0,h.usedBytes),0)}},resizeFileStorage(h,m){if(h.usedBytes!=m)if(m==0)h.contents=null,h.usedBytes=0;else{var y=h.contents;h.contents=new Uint8Array(m),y&&h.contents.set(y.subarray(0,Math.min(m,h.usedBytes))),h.usedBytes=m}},node_ops:{getattr(h){var m={};return m.dev=I.isChrdev(h.mode)?h.id:1,m.ino=h.id,m.mode=h.mode,m.nlink=1,m.uid=0,m.gid=0,m.rdev=h.rdev,I.isDir(h.mode)?m.size=4096:I.isFile(h.mode)?m.size=h.usedBytes:I.isLink(h.mode)?m.size=h.link.length:m.size=0,m.atime=new Date(h.timestamp),m.mtime=new Date(h.timestamp),m.ctime=new Date(h.timestamp),m.blksize=4096,m.blocks=Math.ceil(m.size/m.blksize),m},setattr(h,m){m.mode!==void 0&&(h.mode=m.mode),m.timestamp!==void 0&&(h.timestamp=m.timestamp),m.size!==void 0&&Rt.resizeFileStorage(h,m.size)},lookup(h,m){throw I.genericErrors[44]},mknod(h,m,y,w){return Rt.createNode(h,m,y,w)},rename(h,m,y){if(I.isDir(h.mode)){var w;try{w=I.lookupNode(m,y)}catch{}if(w)for(var R in w.contents)throw new I.ErrnoError(55)}delete h.parent.contents[h.name],h.parent.timestamp=Date.now(),h.name=y,m.contents[y]=h,m.timestamp=h.parent.timestamp},unlink(h,m){delete h.contents[m],h.timestamp=Date.now()},rmdir(h,m){var y=I.lookupNode(h,m);for(var w in y.contents)throw new I.ErrnoError(55);delete h.contents[m],h.timestamp=Date.now()},readdir(h){var m=[".",".."];for(var y of Object.keys(h.contents))m.push(y);return m},symlink(h,m,y){var w=Rt.createNode(h,m,41471,0);return w.link=y,w},readlink(h){if(!I.isLink(h.mode))throw new I.ErrnoError(28);return h.link}},stream_ops:{read(h,m,y,w,R){var X=h.node.contents;if(R>=h.node.usedBytes)return 0;var Z=Math.min(h.node.usedBytes-R,w);if(Z>8&&X.subarray)m.set(X.subarray(R,R+Z),y);else for(var et=0;et<Z;et++)m[y+et]=X[R+et];return Z},write(h,m,y,w,R,X){if(m.buffer===Q.buffer&&(X=!1),!w)return 0;var Z=h.node;if(Z.timestamp=Date.now(),m.subarray&&(!Z.contents||Z.contents.subarray)){if(X)return Z.contents=m.subarray(y,y+w),Z.usedBytes=w,w;if(Z.usedBytes===0&&R===0)return Z.contents=m.slice(y,y+w),Z.usedBytes=w,w;if(R+w<=Z.usedBytes)return Z.contents.set(m.subarray(y,y+w),R),w}if(Rt.expandFileStorage(Z,R+w),Z.contents.subarray&&m.subarray)Z.contents.set(m.subarray(y,y+w),R);else for(var et=0;et<w;et++)Z.contents[R+et]=m[y+et];return Z.usedBytes=Math.max(Z.usedBytes,R+w),w},llseek(h,m,y){var w=m;if(y===1?w+=h.position:y===2&&I.isFile(h.node.mode)&&(w+=h.node.usedBytes),w<0)throw new I.ErrnoError(28);return w},allocate(h,m,y){Rt.expandFileStorage(h.node,m+y),h.node.usedBytes=Math.max(h.node.usedBytes,m+y)},mmap(h,m,y,w,R){if(!I.isFile(h.node.mode))throw new I.ErrnoError(43);var X,Z,et=h.node.contents;if(!(R&2)&&et&&et.buffer===Q.buffer)Z=!1,X=et.byteOffset;else{if(Z=!0,X=At(m),!X)throw new I.ErrnoError(48);et&&((y>0||y+m<et.length)&&(et.subarray?et=et.subarray(y,y+m):et=Array.prototype.slice.call(et,y,y+m)),Q.set(et,X))}return{ptr:X,allocated:Z}},msync(h,m,y,w,R){return Rt.stream_ops.write(h,m,0,w,y,!1),0}}},ee=(h,m,y,w)=>{var R=w?"":`al ${h}`;M(h).then(X=>{m(new Uint8Array(X)),R&&Me(R)},X=>{if(y)y();else throw`Loading data file "${h}" failed.`}),R&&he(R)},Fe=(h,m,y,w,R,X)=>{I.createDataFile(h,m,y,w,R,X)},Le=i.preloadPlugins||[],xn=(h,m,y,w)=>{typeof Browser<"u"&&Browser.init();var R=!1;return Le.forEach(X=>{R||X.canHandle(m)&&(X.handle(h,m,y,w),R=!0)}),R},Tn=(h,m,y,w,R,X,Z,et,xt,Lt)=>{var Yt=m?jt.resolve(mt.join2(h,m)):h,te=`cp ${Yt}`;function ce(se){function ve(Oe){Lt?.(),et||Fe(h,m,Oe,w,R,xt),X?.(),Me(te)}xn(se,Yt,ve,()=>{Z?.(),Me(te)})||ve(se)}he(te),typeof y=="string"?ee(y,ce,Z):ce(y)},Rs=h=>{var m={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},y=m[h];if(typeof y>"u")throw new Error(`Unknown file open mode: ${h}`);return y},ar=(h,m)=>{var y=0;return h&&(y|=365),m&&(y|=146),y},I={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:class{constructor(h){this.name="ErrnoError",this.errno=h}},genericErrors:{},filesystems:null,syncFSRequests:0,readFiles:{},FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(h){this.node=h}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(h){this.shared.flags=h}get position(){return this.shared.position}set position(h){this.shared.position=h}},FSNode:class{constructor(h,m,y,w){h||(h=this),this.parent=h,this.mount=h.mount,this.mounted=null,this.id=I.nextInode++,this.name=m,this.mode=y,this.node_ops={},this.stream_ops={},this.rdev=w,this.readMode=365,this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(h){h?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(h){h?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return I.isDir(this.mode)}get isDevice(){return I.isChrdev(this.mode)}},lookupPath(h,m={}){if(h=jt.resolve(h),!h)return{path:"",node:null};var y={follow_mount:!0,recurse_count:0};if(m=Object.assign(y,m),m.recurse_count>8)throw new I.ErrnoError(32);for(var w=h.split("/").filter(te=>!!te),R=I.root,X="/",Z=0;Z<w.length;Z++){var et=Z===w.length-1;if(et&&m.parent)break;if(R=I.lookupNode(R,w[Z]),X=mt.join2(X,w[Z]),I.isMountpoint(R)&&(!et||et&&m.follow_mount)&&(R=R.mounted.root),!et||m.follow)for(var xt=0;I.isLink(R.mode);){var Lt=I.readlink(X);X=jt.resolve(mt.dirname(X),Lt);var Yt=I.lookupPath(X,{recurse_count:m.recurse_count+1});if(R=Yt.node,xt++>40)throw new I.ErrnoError(32)}}return{path:X,node:R}},getPath(h){for(var m;;){if(I.isRoot(h)){var y=h.mount.mountpoint;return m?y[y.length-1]!=="/"?`${y}/${m}`:y+m:y}m=m?`${h.name}/${m}`:h.name,h=h.parent}},hashName(h,m){for(var y=0,w=0;w<m.length;w++)y=(y<<5)-y+m.charCodeAt(w)|0;return(h+y>>>0)%I.nameTable.length},hashAddNode(h){var m=I.hashName(h.parent.id,h.name);h.name_next=I.nameTable[m],I.nameTable[m]=h},hashRemoveNode(h){var m=I.hashName(h.parent.id,h.name);if(I.nameTable[m]===h)I.nameTable[m]=h.name_next;else for(var y=I.nameTable[m];y;){if(y.name_next===h){y.name_next=h.name_next;break}y=y.name_next}},lookupNode(h,m){var y=I.mayLookup(h);if(y)throw new I.ErrnoError(y);for(var w=I.hashName(h.id,m),R=I.nameTable[w];R;R=R.name_next){var X=R.name;if(R.parent.id===h.id&&X===m)return R}return I.lookup(h,m)},createNode(h,m,y,w){var R=new I.FSNode(h,m,y,w);return I.hashAddNode(R),R},destroyNode(h){I.hashRemoveNode(h)},isRoot(h){return h===h.parent},isMountpoint(h){return!!h.mounted},isFile(h){return(h&61440)===32768},isDir(h){return(h&61440)===16384},isLink(h){return(h&61440)===40960},isChrdev(h){return(h&61440)===8192},isBlkdev(h){return(h&61440)===24576},isFIFO(h){return(h&61440)===4096},isSocket(h){return(h&49152)===49152},flagsToPermissionString(h){var m=["r","w","rw"][h&3];return h&512&&(m+="w"),m},nodePermissions(h,m){return I.ignorePermissions?0:m.includes("r")&&!(h.mode&292)||m.includes("w")&&!(h.mode&146)||m.includes("x")&&!(h.mode&73)?2:0},mayLookup(h){if(!I.isDir(h.mode))return 54;var m=I.nodePermissions(h,"x");return m||(h.node_ops.lookup?0:2)},mayCreate(h,m){try{var y=I.lookupNode(h,m);return 20}catch{}return I.nodePermissions(h,"wx")},mayDelete(h,m,y){var w;try{w=I.lookupNode(h,m)}catch(X){return X.errno}var R=I.nodePermissions(h,"wx");if(R)return R;if(y){if(!I.isDir(w.mode))return 54;if(I.isRoot(w)||I.getPath(w)===I.cwd())return 10}else if(I.isDir(w.mode))return 31;return 0},mayOpen(h,m){return h?I.isLink(h.mode)?32:I.isDir(h.mode)&&(I.flagsToPermissionString(m)!=="r"||m&512)?31:I.nodePermissions(h,I.flagsToPermissionString(m)):44},MAX_OPEN_FDS:4096,nextfd(){for(var h=0;h<=I.MAX_OPEN_FDS;h++)if(!I.streams[h])return h;throw new I.ErrnoError(33)},getStreamChecked(h){var m=I.getStream(h);if(!m)throw new I.ErrnoError(8);return m},getStream:h=>I.streams[h],createStream(h,m=-1){return h=Object.assign(new I.FSStream,h),m==-1&&(m=I.nextfd()),h.fd=m,I.streams[m]=h,h},closeStream(h){I.streams[h]=null},dupStream(h,m=-1){var y=I.createStream(h,m);return y.stream_ops?.dup?.(y),y},chrdev_stream_ops:{open(h){var m=I.getDevice(h.node.rdev);h.stream_ops=m.stream_ops,h.stream_ops.open?.(h)},llseek(){throw new I.ErrnoError(70)}},major:h=>h>>8,minor:h=>h&255,makedev:(h,m)=>h<<8|m,registerDevice(h,m){I.devices[h]={stream_ops:m}},getDevice:h=>I.devices[h],getMounts(h){for(var m=[],y=[h];y.length;){var w=y.pop();m.push(w),y.push(...w.mounts)}return m},syncfs(h,m){typeof h=="function"&&(m=h,h=!1),I.syncFSRequests++,I.syncFSRequests>1&&F(`warning: ${I.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var y=I.getMounts(I.root.mount),w=0;function R(Z){return I.syncFSRequests--,m(Z)}function X(Z){if(Z)return X.errored?void 0:(X.errored=!0,R(Z));++w>=y.length&&R(null)}y.forEach(Z=>{if(!Z.type.syncfs)return X(null);Z.type.syncfs(Z,h,X)})},mount(h,m,y){var w=y==="/",R=!y,X;if(w&&I.root)throw new I.ErrnoError(10);if(!w&&!R){var Z=I.lookupPath(y,{follow_mount:!1});if(y=Z.path,X=Z.node,I.isMountpoint(X))throw new I.ErrnoError(10);if(!I.isDir(X.mode))throw new I.ErrnoError(54)}var et={type:h,opts:m,mountpoint:y,mounts:[]},xt=h.mount(et);return xt.mount=et,et.root=xt,w?I.root=xt:X&&(X.mounted=et,X.mount&&X.mount.mounts.push(et)),xt},unmount(h){var m=I.lookupPath(h,{follow_mount:!1});if(!I.isMountpoint(m.node))throw new I.ErrnoError(28);var y=m.node,w=y.mounted,R=I.getMounts(w);Object.keys(I.nameTable).forEach(Z=>{for(var et=I.nameTable[Z];et;){var xt=et.name_next;R.includes(et.mount)&&I.destroyNode(et),et=xt}}),y.mounted=null;var X=y.mount.mounts.indexOf(w);y.mount.mounts.splice(X,1)},lookup(h,m){return h.node_ops.lookup(h,m)},mknod(h,m,y){var w=I.lookupPath(h,{parent:!0}),R=w.node,X=mt.basename(h);if(!X||X==="."||X==="..")throw new I.ErrnoError(28);var Z=I.mayCreate(R,X);if(Z)throw new I.ErrnoError(Z);if(!R.node_ops.mknod)throw new I.ErrnoError(63);return R.node_ops.mknod(R,X,m,y)},create(h,m){return m=m!==void 0?m:438,m&=4095,m|=32768,I.mknod(h,m,0)},mkdir(h,m){return m=m!==void 0?m:511,m&=1023,m|=16384,I.mknod(h,m,0)},mkdirTree(h,m){for(var y=h.split("/"),w="",R=0;R<y.length;++R)if(y[R]){w+="/"+y[R];try{I.mkdir(w,m)}catch(X){if(X.errno!=20)throw X}}},mkdev(h,m,y){return typeof y>"u"&&(y=m,m=438),m|=8192,I.mknod(h,m,y)},symlink(h,m){if(!jt.resolve(h))throw new I.ErrnoError(44);var y=I.lookupPath(m,{parent:!0}),w=y.node;if(!w)throw new I.ErrnoError(44);var R=mt.basename(m),X=I.mayCreate(w,R);if(X)throw new I.ErrnoError(X);if(!w.node_ops.symlink)throw new I.ErrnoError(63);return w.node_ops.symlink(w,R,h)},rename(h,m){var y=mt.dirname(h),w=mt.dirname(m),R=mt.basename(h),X=mt.basename(m),Z,et,xt;if(Z=I.lookupPath(h,{parent:!0}),et=Z.node,Z=I.lookupPath(m,{parent:!0}),xt=Z.node,!et||!xt)throw new I.ErrnoError(44);if(et.mount!==xt.mount)throw new I.ErrnoError(75);var Lt=I.lookupNode(et,R),Yt=jt.relative(h,w);if(Yt.charAt(0)!==".")throw new I.ErrnoError(28);if(Yt=jt.relative(m,y),Yt.charAt(0)!==".")throw new I.ErrnoError(55);var te;try{te=I.lookupNode(xt,X)}catch{}if(Lt!==te){var ce=I.isDir(Lt.mode),se=I.mayDelete(et,R,ce);if(se)throw new I.ErrnoError(se);if(se=te?I.mayDelete(xt,X,ce):I.mayCreate(xt,X),se)throw new I.ErrnoError(se);if(!et.node_ops.rename)throw new I.ErrnoError(63);if(I.isMountpoint(Lt)||te&&I.isMountpoint(te))throw new I.ErrnoError(10);if(xt!==et&&(se=I.nodePermissions(et,"w"),se))throw new I.ErrnoError(se);I.hashRemoveNode(Lt);try{et.node_ops.rename(Lt,xt,X),Lt.parent=xt}catch(ve){throw ve}finally{I.hashAddNode(Lt)}}},rmdir(h){var m=I.lookupPath(h,{parent:!0}),y=m.node,w=mt.basename(h),R=I.lookupNode(y,w),X=I.mayDelete(y,w,!0);if(X)throw new I.ErrnoError(X);if(!y.node_ops.rmdir)throw new I.ErrnoError(63);if(I.isMountpoint(R))throw new I.ErrnoError(10);y.node_ops.rmdir(y,w),I.destroyNode(R)},readdir(h){var m=I.lookupPath(h,{follow:!0}),y=m.node;if(!y.node_ops.readdir)throw new I.ErrnoError(54);return y.node_ops.readdir(y)},unlink(h){var m=I.lookupPath(h,{parent:!0}),y=m.node;if(!y)throw new I.ErrnoError(44);var w=mt.basename(h),R=I.lookupNode(y,w),X=I.mayDelete(y,w,!1);if(X)throw new I.ErrnoError(X);if(!y.node_ops.unlink)throw new I.ErrnoError(63);if(I.isMountpoint(R))throw new I.ErrnoError(10);y.node_ops.unlink(y,w),I.destroyNode(R)},readlink(h){var m=I.lookupPath(h),y=m.node;if(!y)throw new I.ErrnoError(44);if(!y.node_ops.readlink)throw new I.ErrnoError(28);return jt.resolve(I.getPath(y.parent),y.node_ops.readlink(y))},stat(h,m){var y=I.lookupPath(h,{follow:!m}),w=y.node;if(!w)throw new I.ErrnoError(44);if(!w.node_ops.getattr)throw new I.ErrnoError(63);return w.node_ops.getattr(w)},lstat(h){return I.stat(h,!0)},chmod(h,m,y){var w;if(typeof h=="string"){var R=I.lookupPath(h,{follow:!y});w=R.node}else w=h;if(!w.node_ops.setattr)throw new I.ErrnoError(63);w.node_ops.setattr(w,{mode:m&4095|w.mode&-4096,timestamp:Date.now()})},lchmod(h,m){I.chmod(h,m,!0)},fchmod(h,m){var y=I.getStreamChecked(h);I.chmod(y.node,m)},chown(h,m,y,w){var R;if(typeof h=="string"){var X=I.lookupPath(h,{follow:!w});R=X.node}else R=h;if(!R.node_ops.setattr)throw new I.ErrnoError(63);R.node_ops.setattr(R,{timestamp:Date.now()})},lchown(h,m,y){I.chown(h,m,y,!0)},fchown(h,m,y){var w=I.getStreamChecked(h);I.chown(w.node,m,y)},truncate(h,m){if(m<0)throw new I.ErrnoError(28);var y;if(typeof h=="string"){var w=I.lookupPath(h,{follow:!0});y=w.node}else y=h;if(!y.node_ops.setattr)throw new I.ErrnoError(63);if(I.isDir(y.mode))throw new I.ErrnoError(31);if(!I.isFile(y.mode))throw new I.ErrnoError(28);var R=I.nodePermissions(y,"w");if(R)throw new I.ErrnoError(R);y.node_ops.setattr(y,{size:m,timestamp:Date.now()})},ftruncate(h,m){var y=I.getStreamChecked(h);if((y.flags&2097155)===0)throw new I.ErrnoError(28);I.truncate(y.node,m)},utime(h,m,y){var w=I.lookupPath(h,{follow:!0}),R=w.node;R.node_ops.setattr(R,{timestamp:Math.max(m,y)})},open(h,m,y){if(h==="")throw new I.ErrnoError(44);m=typeof m=="string"?Rs(m):m,m&64?(y=typeof y>"u"?438:y,y=y&4095|32768):y=0;var w;if(typeof h=="object")w=h;else{h=mt.normalize(h);try{var R=I.lookupPath(h,{follow:!(m&131072)});w=R.node}catch{}}var X=!1;if(m&64)if(w){if(m&128)throw new I.ErrnoError(20)}else w=I.mknod(h,y,0),X=!0;if(!w)throw new I.ErrnoError(44);if(I.isChrdev(w.mode)&&(m&=-513),m&65536&&!I.isDir(w.mode))throw new I.ErrnoError(54);if(!X){var Z=I.mayOpen(w,m);if(Z)throw new I.ErrnoError(Z)}m&512&&!X&&I.truncate(w,0),m&=-131713;var et=I.createStream({node:w,path:I.getPath(w),flags:m,seekable:!0,position:0,stream_ops:w.stream_ops,ungotten:[],error:!1});return et.stream_ops.open&&et.stream_ops.open(et),i.logReadFiles&&!(m&1)&&(h in I.readFiles||(I.readFiles[h]=1)),et},close(h){if(I.isClosed(h))throw new I.ErrnoError(8);h.getdents&&(h.getdents=null);try{h.stream_ops.close&&h.stream_ops.close(h)}catch(m){throw m}finally{I.closeStream(h.fd)}h.fd=null},isClosed(h){return h.fd===null},llseek(h,m,y){if(I.isClosed(h))throw new I.ErrnoError(8);if(!h.seekable||!h.stream_ops.llseek)throw new I.ErrnoError(70);if(y!=0&&y!=1&&y!=2)throw new I.ErrnoError(28);return h.position=h.stream_ops.llseek(h,m,y),h.ungotten=[],h.position},read(h,m,y,w,R){if(w<0||R<0)throw new I.ErrnoError(28);if(I.isClosed(h))throw new I.ErrnoError(8);if((h.flags&2097155)===1)throw new I.ErrnoError(8);if(I.isDir(h.node.mode))throw new I.ErrnoError(31);if(!h.stream_ops.read)throw new I.ErrnoError(28);var X=typeof R<"u";if(!X)R=h.position;else if(!h.seekable)throw new I.ErrnoError(70);var Z=h.stream_ops.read(h,m,y,w,R);return X||(h.position+=Z),Z},write(h,m,y,w,R,X){if(w<0||R<0)throw new I.ErrnoError(28);if(I.isClosed(h))throw new I.ErrnoError(8);if((h.flags&2097155)===0)throw new I.ErrnoError(8);if(I.isDir(h.node.mode))throw new I.ErrnoError(31);if(!h.stream_ops.write)throw new I.ErrnoError(28);h.seekable&&h.flags&1024&&I.llseek(h,0,2);var Z=typeof R<"u";if(!Z)R=h.position;else if(!h.seekable)throw new I.ErrnoError(70);var et=h.stream_ops.write(h,m,y,w,R,X);return Z||(h.position+=et),et},allocate(h,m,y){if(I.isClosed(h))throw new I.ErrnoError(8);if(m<0||y<=0)throw new I.ErrnoError(28);if((h.flags&2097155)===0)throw new I.ErrnoError(8);if(!I.isFile(h.node.mode)&&!I.isDir(h.node.mode))throw new I.ErrnoError(43);if(!h.stream_ops.allocate)throw new I.ErrnoError(138);h.stream_ops.allocate(h,m,y)},mmap(h,m,y,w,R){if((w&2)!==0&&(R&2)===0&&(h.flags&2097155)!==2)throw new I.ErrnoError(2);if((h.flags&2097155)===1)throw new I.ErrnoError(2);if(!h.stream_ops.mmap)throw new I.ErrnoError(43);if(!m)throw new I.ErrnoError(28);return h.stream_ops.mmap(h,m,y,w,R)},msync(h,m,y,w,R){return h.stream_ops.msync?h.stream_ops.msync(h,m,y,w,R):0},ioctl(h,m,y){if(!h.stream_ops.ioctl)throw new I.ErrnoError(59);return h.stream_ops.ioctl(h,m,y)},readFile(h,m={}){if(m.flags=m.flags||0,m.encoding=m.encoding||"binary",m.encoding!=="utf8"&&m.encoding!=="binary")throw new Error(`Invalid encoding type "${m.encoding}"`);var y,w=I.open(h,m.flags),R=I.stat(h),X=R.size,Z=new Uint8Array(X);return I.read(w,Z,0,X,0),m.encoding==="utf8"?y=Dt(Z):m.encoding==="binary"&&(y=Z),I.close(w),y},writeFile(h,m,y={}){y.flags=y.flags||577;var w=I.open(h,y.flags,y.mode);if(typeof m=="string"){var R=new Uint8Array(oe(m)+1),X=ge(m,R,0,R.length);I.write(w,R,0,X,void 0,y.canOwn)}else if(ArrayBuffer.isView(m))I.write(w,m,0,m.byteLength,void 0,y.canOwn);else throw new Error("Unsupported data type");I.close(w)},cwd:()=>I.currentPath,chdir(h){var m=I.lookupPath(h,{follow:!0});if(m.node===null)throw new I.ErrnoError(44);if(!I.isDir(m.node.mode))throw new I.ErrnoError(54);var y=I.nodePermissions(m.node,"x");if(y)throw new I.ErrnoError(y);I.currentPath=m.path},createDefaultDirectories(){I.mkdir("/tmp"),I.mkdir("/home"),I.mkdir("/home/web_user")},createDefaultDevices(){I.mkdir("/dev"),I.registerDevice(I.makedev(1,3),{read:()=>0,write:(w,R,X,Z,et)=>Z}),I.mkdev("/dev/null",I.makedev(1,3)),Mt.register(I.makedev(5,0),Mt.default_tty_ops),Mt.register(I.makedev(6,0),Mt.default_tty1_ops),I.mkdev("/dev/tty",I.makedev(5,0)),I.mkdev("/dev/tty1",I.makedev(6,0));var h=new Uint8Array(1024),m=0,y=()=>(m===0&&(m=Ut(h).byteLength),h[--m]);I.createDevice("/dev","random",y),I.createDevice("/dev","urandom",y),I.mkdir("/dev/shm"),I.mkdir("/dev/shm/tmp")},createSpecialDirectories(){I.mkdir("/proc");var h=I.mkdir("/proc/self");I.mkdir("/proc/self/fd"),I.mount({mount(){var m=I.createNode(h,"fd",16895,73);return m.node_ops={lookup(y,w){var R=+w,X=I.getStreamChecked(R),Z={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>X.path}};return Z.parent=Z,Z}},m}},{},"/proc/self/fd")},createStandardStreams(h,m,y){h?I.createDevice("/dev","stdin",h):I.symlink("/dev/tty","/dev/stdin"),m?I.createDevice("/dev","stdout",null,m):I.symlink("/dev/tty","/dev/stdout"),y?I.createDevice("/dev","stderr",null,y):I.symlink("/dev/tty1","/dev/stderr");var w=I.open("/dev/stdin",0),R=I.open("/dev/stdout",1),X=I.open("/dev/stderr",1)},staticInit(){[44].forEach(h=>{I.genericErrors[h]=new I.ErrnoError(h),I.genericErrors[h].stack="<generic error, no stack>"}),I.nameTable=new Array(4096),I.mount(Rt,{},"/"),I.createDefaultDirectories(),I.createDefaultDevices(),I.createSpecialDirectories(),I.filesystems={MEMFS:Rt}},init(h,m,y){I.initialized=!0,h??=i.stdin,m??=i.stdout,y??=i.stderr,I.createStandardStreams(h,m,y)},quit(){I.initialized=!1;for(var h=0;h<I.streams.length;h++){var m=I.streams[h];m&&I.close(m)}},findObject(h,m){var y=I.analyzePath(h,m);return y.exists?y.object:null},analyzePath(h,m){try{var y=I.lookupPath(h,{follow:!m});h=y.path}catch{}var w={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var y=I.lookupPath(h,{parent:!0});w.parentExists=!0,w.parentPath=y.path,w.parentObject=y.node,w.name=mt.basename(h),y=I.lookupPath(h,{follow:!m}),w.exists=!0,w.path=y.path,w.object=y.node,w.name=y.node.name,w.isRoot=y.path==="/"}catch(R){w.error=R.errno}return w},createPath(h,m,y,w){h=typeof h=="string"?h:I.getPath(h);for(var R=m.split("/").reverse();R.length;){var X=R.pop();if(X){var Z=mt.join2(h,X);try{I.mkdir(Z)}catch{}h=Z}}return Z},createFile(h,m,y,w,R){var X=mt.join2(typeof h=="string"?h:I.getPath(h),m),Z=ar(w,R);return I.create(X,Z)},createDataFile(h,m,y,w,R,X){var Z=m;h&&(h=typeof h=="string"?h:I.getPath(h),Z=m?mt.join2(h,m):h);var et=ar(w,R),xt=I.create(Z,et);if(y){if(typeof y=="string"){for(var Lt=new Array(y.length),Yt=0,te=y.length;Yt<te;++Yt)Lt[Yt]=y.charCodeAt(Yt);y=Lt}I.chmod(xt,et|146);var ce=I.open(xt,577);I.write(ce,y,0,y.length,0,X),I.close(ce),I.chmod(xt,et)}},createDevice(h,m,y,w){var R=mt.join2(typeof h=="string"?h:I.getPath(h),m),X=ar(!!y,!!w);I.createDevice.major??=64;var Z=I.makedev(I.createDevice.major++,0);return I.registerDevice(Z,{open(et){et.seekable=!1},close(et){w?.buffer?.length&&w(10)},read(et,xt,Lt,Yt,te){for(var ce=0,se=0;se<Yt;se++){var ve;try{ve=y()}catch{throw new I.ErrnoError(29)}if(ve===void 0&&ce===0)throw new I.ErrnoError(6);if(ve==null)break;ce++,xt[Lt+se]=ve}return ce&&(et.node.timestamp=Date.now()),ce},write(et,xt,Lt,Yt,te){for(var ce=0;ce<Yt;ce++)try{w(xt[Lt+ce])}catch{throw new I.ErrnoError(29)}return Yt&&(et.node.timestamp=Date.now()),ce}}),I.mkdev(R,X,Z)},forceLoadFile(h){if(h.isDevice||h.isFolder||h.link||h.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{h.contents=x(h.url),h.usedBytes=h.contents.length}catch{throw new I.ErrnoError(29)}},createLazyFile(h,m,y,w,R){class X{constructor(){this.lengthKnown=!1,this.chunks=[]}get(se){if(!(se>this.length-1||se<0)){var ve=se%this.chunkSize,Oe=se/this.chunkSize|0;return this.getter(Oe)[ve]}}setDataGetter(se){this.getter=se}cacheLength(){var se=new XMLHttpRequest;if(se.open("HEAD",y,!1),se.send(null),!(se.status>=200&&se.status<300||se.status===304))throw new Error("Couldn't load "+y+". Status: "+se.status);var ve=Number(se.getResponseHeader("Content-length")),Oe,pn=(Oe=se.getResponseHeader("Accept-Ranges"))&&Oe==="bytes",Ke=(Oe=se.getResponseHeader("Content-Encoding"))&&Oe==="gzip",$n=1024*1024;pn||($n=ve);var Zn=(ui,Dr)=>{if(ui>Dr)throw new Error("invalid range ("+ui+", "+Dr+") or no bytes requested!");if(Dr>ve-1)throw new Error("only "+ve+" bytes available! programmer error!");var hn=new XMLHttpRequest;if(hn.open("GET",y,!1),ve!==$n&&hn.setRequestHeader("Range","bytes="+ui+"-"+Dr),hn.responseType="arraybuffer",hn.overrideMimeType&&hn.overrideMimeType("text/plain; charset=x-user-defined"),hn.send(null),!(hn.status>=200&&hn.status<300||hn.status===304))throw new Error("Couldn't load "+y+". Status: "+hn.status);return hn.response!==void 0?new Uint8Array(hn.response||[]):rt(hn.responseText||"",!0)},Fs=this;Fs.setDataGetter(ui=>{var Dr=ui*$n,hn=(ui+1)*$n-1;if(hn=Math.min(hn,ve-1),typeof Fs.chunks[ui]>"u"&&(Fs.chunks[ui]=Zn(Dr,hn)),typeof Fs.chunks[ui]>"u")throw new Error("doXHR failed!");return Fs.chunks[ui]}),(Ke||!ve)&&($n=ve=1,ve=this.getter(0).length,$n=ve,N("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=ve,this._chunkSize=$n,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!f)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var Z=new X,et={isDevice:!1,contents:Z}}else var et={isDevice:!1,url:y};var xt=I.createFile(h,m,et,w,R);et.contents?xt.contents=et.contents:et.url&&(xt.contents=null,xt.url=et.url),Object.defineProperties(xt,{usedBytes:{get:function(){return this.contents.length}}});var Lt={},Yt=Object.keys(xt.stream_ops);Yt.forEach(ce=>{var se=xt.stream_ops[ce];Lt[ce]=(...ve)=>(I.forceLoadFile(xt),se(...ve))});function te(ce,se,ve,Oe,pn){var Ke=ce.node.contents;if(pn>=Ke.length)return 0;var $n=Math.min(Ke.length-pn,Oe);if(Ke.slice)for(var Zn=0;Zn<$n;Zn++)se[ve+Zn]=Ke[pn+Zn];else for(var Zn=0;Zn<$n;Zn++)se[ve+Zn]=Ke.get(pn+Zn);return $n}return Lt.read=(ce,se,ve,Oe,pn)=>(I.forceLoadFile(xt),te(ce,se,ve,Oe,pn)),Lt.mmap=(ce,se,ve,Oe,pn)=>{I.forceLoadFile(xt);var Ke=At(se);if(!Ke)throw new I.ErrnoError(48);return te(ce,Q,Ke,se,ve),{ptr:Ke,allocated:!0}},xt.stream_ops=Lt,xt}},Mi=(h,m)=>h?Dt(nt,h,m):"",Re={DEFAULT_POLLMASK:5,calculateAt(h,m,y){if(mt.isAbs(m))return m;var w;if(h===-100)w=I.cwd();else{var R=Re.getStreamFromFD(h);w=R.path}if(m.length==0){if(!y)throw new I.ErrnoError(44);return w}return mt.join2(w,m)},doStat(h,m,y){var w=h(m);q[y>>2]=w.dev,q[y+4>>2]=w.mode,st[y+8>>2]=w.nlink,q[y+12>>2]=w.uid,q[y+16>>2]=w.gid,q[y+20>>2]=w.rdev,it=[w.size>>>0,(H=w.size,+Math.abs(H)>=1?H>0?+Math.floor(H/4294967296)>>>0:~~+Math.ceil((H-+(~~H>>>0))/4294967296)>>>0:0)],q[y+24>>2]=it[0],q[y+28>>2]=it[1],q[y+32>>2]=4096,q[y+36>>2]=w.blocks;var R=w.atime.getTime(),X=w.mtime.getTime(),Z=w.ctime.getTime();return it=[Math.floor(R/1e3)>>>0,(H=Math.floor(R/1e3),+Math.abs(H)>=1?H>0?+Math.floor(H/4294967296)>>>0:~~+Math.ceil((H-+(~~H>>>0))/4294967296)>>>0:0)],q[y+40>>2]=it[0],q[y+44>>2]=it[1],st[y+48>>2]=R%1e3*1e3*1e3,it=[Math.floor(X/1e3)>>>0,(H=Math.floor(X/1e3),+Math.abs(H)>=1?H>0?+Math.floor(H/4294967296)>>>0:~~+Math.ceil((H-+(~~H>>>0))/4294967296)>>>0:0)],q[y+56>>2]=it[0],q[y+60>>2]=it[1],st[y+64>>2]=X%1e3*1e3*1e3,it=[Math.floor(Z/1e3)>>>0,(H=Math.floor(Z/1e3),+Math.abs(H)>=1?H>0?+Math.floor(H/4294967296)>>>0:~~+Math.ceil((H-+(~~H>>>0))/4294967296)>>>0:0)],q[y+72>>2]=it[0],q[y+76>>2]=it[1],st[y+80>>2]=Z%1e3*1e3*1e3,it=[w.ino>>>0,(H=w.ino,+Math.abs(H)>=1?H>0?+Math.floor(H/4294967296)>>>0:~~+Math.ceil((H-+(~~H>>>0))/4294967296)>>>0:0)],q[y+88>>2]=it[0],q[y+92>>2]=it[1],0},doMsync(h,m,y,w,R){if(!I.isFile(m.node.mode))throw new I.ErrnoError(43);if(w&2)return 0;var X=nt.slice(h,h+y);I.msync(m,X,R,y,w)},getStreamFromFD(h){var m=I.getStreamChecked(h);return m},varargs:void 0,getStr(h){var m=Mi(h);return m}};function Er(h,m){try{return h=Re.getStr(h),I.chmod(h,m),0}catch(y){if(typeof I>"u"||y.name!=="ErrnoError")throw y;return-y.errno}}function Tr(h,m,y,w){try{if(m=Re.getStr(m),m=Re.calculateAt(h,m),y&-8)return-28;var R=I.lookupPath(m,{follow:!0}),X=R.node;if(!X)return-44;var Z="";return y&4&&(Z+="r"),y&2&&(Z+="w"),y&1&&(Z+="x"),Z&&I.nodePermissions(X,Z)?-2:0}catch(et){if(typeof I>"u"||et.name!=="ErrnoError")throw et;return-et.errno}}function An(){var h=q[+Re.varargs>>2];return Re.varargs+=4,h}var Vn=An;function Ar(h,m,y){Re.varargs=y;try{var w=Re.getStreamFromFD(h);switch(m){case 0:{var R=An();if(R<0)return-28;for(;I.streams[R];)R++;var X;return X=I.dupStream(w,R),X.fd}case 1:case 2:return 0;case 3:return w.flags;case 4:{var R=An();return w.flags|=R,0}case 12:{var R=Vn(),Z=0;return ct[R+Z>>1]=2,0}case 13:case 14:return 0}return-28}catch(et){if(typeof I>"u"||et.name!=="ErrnoError")throw et;return-et.errno}}function ci(h,m){try{var y=Re.getStreamFromFD(h);return Re.doStat(I.stat,y.path,m)}catch(w){if(typeof I>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function bi(h,m,y){Re.varargs=y;try{var w=Re.getStreamFromFD(h);switch(m){case 21509:return w.tty?0:-59;case 21505:{if(!w.tty)return-59;if(w.tty.ops.ioctl_tcgets){var R=w.tty.ops.ioctl_tcgets(w),X=Vn();q[X>>2]=R.c_iflag||0,q[X+4>>2]=R.c_oflag||0,q[X+8>>2]=R.c_cflag||0,q[X+12>>2]=R.c_lflag||0;for(var Z=0;Z<32;Z++)Q[X+Z+17]=R.c_cc[Z]||0;return 0}return 0}case 21510:case 21511:case 21512:return w.tty?0:-59;case 21506:case 21507:case 21508:{if(!w.tty)return-59;if(w.tty.ops.ioctl_tcsets){for(var X=Vn(),et=q[X>>2],xt=q[X+4>>2],Lt=q[X+8>>2],Yt=q[X+12>>2],te=[],Z=0;Z<32;Z++)te.push(Q[X+Z+17]);return w.tty.ops.ioctl_tcsets(w.tty,m,{c_iflag:et,c_oflag:xt,c_cflag:Lt,c_lflag:Yt,c_cc:te})}return 0}case 21519:{if(!w.tty)return-59;var X=Vn();return q[X>>2]=0,0}case 21520:return w.tty?-28:-59;case 21531:{var X=Vn();return I.ioctl(w,m,X)}case 21523:{if(!w.tty)return-59;if(w.tty.ops.ioctl_tiocgwinsz){var ce=w.tty.ops.ioctl_tiocgwinsz(w.tty),X=Vn();ct[X>>1]=ce[0],ct[X+2>>1]=ce[1]}return 0}case 21524:return w.tty?0:-59;case 21515:return w.tty?0:-59;default:return-28}}catch(se){if(typeof I>"u"||se.name!=="ErrnoError")throw se;return-se.errno}}function Pr(h,m){try{return h=Re.getStr(h),Re.doStat(I.lstat,h,m)}catch(y){if(typeof I>"u"||y.name!=="ErrnoError")throw y;return-y.errno}}function Oi(h,m,y,w){try{m=Re.getStr(m);var R=w&256,X=w&4096;return w=w&-6401,m=Re.calculateAt(h,m,X),Re.doStat(R?I.lstat:I.stat,m,y)}catch(Z){if(typeof I>"u"||Z.name!=="ErrnoError")throw Z;return-Z.errno}}function Cr(h,m,y,w){Re.varargs=w;try{m=Re.getStr(m),m=Re.calculateAt(h,m);var R=w?An():0;return I.open(m,y,R).fd}catch(X){if(typeof I>"u"||X.name!=="ErrnoError")throw X;return-X.errno}}function Ir(h){try{return h=Re.getStr(h),I.rmdir(h),0}catch(m){if(typeof I>"u"||m.name!=="ErrnoError")throw m;return-m.errno}}function Ls(h,m){try{return h=Re.getStr(h),Re.doStat(I.stat,h,m)}catch(y){if(typeof I>"u"||y.name!=="ErrnoError")throw y;return-y.errno}}function hi(h,m,y){try{return m=Re.getStr(m),m=Re.calculateAt(h,m),y===0?I.unlink(m):y===512?I.rmdir(m):Ce("Invalid flags passed to unlinkat"),0}catch(w){if(typeof I>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}var Ns=()=>{Ce("")},Ds=(h,m,y,w,R)=>{},Rr=()=>{for(var h=new Array(256),m=0;m<256;++m)h[m]=String.fromCharCode(m);L=h},L,tt=h=>{for(var m="",y=h;nt[y];)m+=L[nt[y++]];return m},gt={},ut={},ft={},Gt,Nt=h=>{throw new Gt(h)},Ht,Qt=h=>{throw new Ht(h)},ie=(h,m,y)=>{h.forEach(et=>ft[et]=m);function w(et){var xt=y(et);xt.length!==h.length&&Qt("Mismatched type converter count");for(var Lt=0;Lt<h.length;++Lt)de(h[Lt],xt[Lt])}var R=new Array(m.length),X=[],Z=0;m.forEach((et,xt)=>{ut.hasOwnProperty(et)?R[xt]=ut[et]:(X.push(et),gt.hasOwnProperty(et)||(gt[et]=[]),gt[et].push(()=>{R[xt]=ut[et],++Z,Z===X.length&&w(R)}))}),X.length===0&&w(R)};function zt(h,m,y={}){var w=m.name;if(h||Nt(`type "${w}" must have a positive integer typeid pointer`),ut.hasOwnProperty(h)){if(y.ignoreDuplicateRegistrations)return;Nt(`Cannot register type '${w}' twice`)}if(ut[h]=m,delete ft[h],gt.hasOwnProperty(h)){var R=gt[h];delete gt[h],R.forEach(X=>X())}}function de(h,m,y={}){return zt(h,m,y)}var Jt=8,Ne=(h,m,y,w)=>{m=tt(m),de(h,{name:m,fromWireType:function(R){return!!R},toWireType:function(R,X){return X?y:w},argPackAdvance:Jt,readValueFromPointer:function(R){return this.fromWireType(nt[R])},destructorFunction:null})},Xe=[],Pe=[],r=h=>{h>9&&--Pe[h+1]===0&&(Pe[h]=void 0,Xe.push(h))},a=()=>Pe.length/2-5-Xe.length,l=()=>{Pe.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=a},p={toValue:h=>(h||Nt("Cannot use deleted val. handle = "+h),Pe[h]),toHandle:h=>{switch(h){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let m=Xe.pop()||Pe.length;return Pe[m]=h,Pe[m+1]=1,m}}}};function _(h){return this.fromWireType(st[h>>2])}var A={name:"emscripten::val",fromWireType:h=>{var m=p.toValue(h);return r(h),m},toWireType:(h,m)=>p.toHandle(m),argPackAdvance:Jt,readValueFromPointer:_,destructorFunction:null},D=h=>de(h,A),$=(h,m)=>{switch(m){case 4:return function(y){return this.fromWireType(G[y>>2])};case 8:return function(y){return this.fromWireType(vt[y>>3])};default:throw new TypeError(`invalid float width (${m}): ${h}`)}},J=(h,m,y)=>{m=tt(m),de(h,{name:m,fromWireType:w=>w,toWireType:(w,R)=>R,argPackAdvance:Jt,readValueFromPointer:$(m,y),destructorFunction:null})},lt=(h,m)=>Object.defineProperty(m,"name",{value:h}),Et=h=>{for(;h.length;){var m=h.pop(),y=h.pop();y(m)}};function bt(h){for(var m=1;m<h.length;++m)if(h[m]!==null&&h[m].destructorFunction===void 0)return!0;return!1}function Pt(h,m){if(!(h instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof h} which is not a function`);var y=lt(h.name||"unknownFunctionName",function(){});y.prototype=h.prototype;var w=new y,R=h.apply(w,m);return R instanceof Object?R:w}function re(h,m,y,w){var R=bt(h),X=h.length-2,Z=[],et=["fn"];m&&et.push("thisWired");for(var xt=0;xt<X;++xt)Z.push(`arg${xt}`),et.push(`arg${xt}Wired`);Z=Z.join(","),et=et.join(",");var Lt=`return function (${Z}) {
`;R&&(Lt+=`var destructors = [];
`);var Yt=R?"destructors":"null",te=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];m&&(Lt+=`var thisWired = classParam['toWireType'](${Yt}, this);
`);for(var xt=0;xt<X;++xt)Lt+=`var arg${xt}Wired = argType${xt}['toWireType'](${Yt}, arg${xt});
`,te.push(`argType${xt}`);if(Lt+=(y||w?"var rv = ":"")+`invoker(${et});
`,R)Lt+=`runDestructors(destructors);
`;else for(var xt=m?1:2;xt<h.length;++xt){var ce=xt===1?"thisWired":"arg"+(xt-2)+"Wired";h[xt].destructorFunction!==null&&(Lt+=`${ce}_dtor(${ce});
`,te.push(`${ce}_dtor`))}return y&&(Lt+=`var ret = retType['fromWireType'](rv);
return ret;
`),Lt+=`}
`,[te,Lt]}function _e(h,m,y,w,R,X){var Z=m.length;Z<2&&Nt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var et=m[1]!==null&&y!==null,xt=bt(m),Lt=m[0].name!=="void",Yt=[h,Nt,w,R,Et,m[0],m[1]],te=0;te<Z-2;++te)Yt.push(m[te+2]);if(!xt)for(var te=et?1:2;te<m.length;++te)m[te].destructorFunction!==null&&Yt.push(m[te].destructorFunction);let[ce,se]=re(m,et,Lt,X);ce.push(se);var ve=Pt(Function,ce)(...Yt);return lt(h,ve)}var we=(h,m,y)=>{if(h[m].overloadTable===void 0){var w=h[m];h[m]=function(...R){return h[m].overloadTable.hasOwnProperty(R.length)||Nt(`Function '${y}' called with an invalid number of arguments (${R.length}) - expects one of (${h[m].overloadTable})!`),h[m].overloadTable[R.length].apply(this,R)},h[m].overloadTable=[],h[m].overloadTable[w.argCount]=w}},Be=(h,m,y)=>{i.hasOwnProperty(h)?((y===void 0||i[h].overloadTable!==void 0&&i[h].overloadTable[y]!==void 0)&&Nt(`Cannot register public name '${h}' twice`),we(i,h,h),i.hasOwnProperty(y)&&Nt(`Cannot register multiple overloads of a function with the same number of arguments (${y})!`),i[h].overloadTable[y]=m):(i[h]=m,y!==void 0&&(i[h].numArguments=y))},dn=(h,m)=>{for(var y=[],w=0;w<h;w++)y.push(st[m+w*4>>2]);return y},Hn=(h,m,y)=>{i.hasOwnProperty(h)||Qt("Replacing nonexistent public symbol"),i[h].overloadTable!==void 0&&y!==void 0?i[h].overloadTable[y]=m:(i[h]=m,i[h].argCount=y)},Fi=(h,m,y)=>{h=h.replace(/p/g,"i");var w=i["dynCall_"+h];return w(m,...y)},Lr=[],Fo,wi=h=>{var m=Lr[h];return m||(h>=Lr.length&&(Lr.length=h+1),Lr[h]=m=Fo.get(h)),m},Jd=(h,m,y=[])=>{if(h.includes("j"))return Fi(h,m,y);var w=wi(m)(...y);return w},jd=(h,m)=>(...y)=>Jd(h,m,y),Kd=(h,m)=>{h=tt(h);function y(){return h.includes("j")?jd(h,m):wi(m)}var w=y();return typeof w!="function"&&Nt(`unknown function pointer with signature ${h}: ${m}`),w},Qd=(h,m)=>{var y=lt(m,function(w){this.name=m,this.message=w;var R=new Error(w).stack;R!==void 0&&(this.stack=this.toString()+`
`+R.replace(/^Error(:[^\n]*)?\n/,""))});return y.prototype=Object.create(h.prototype),y.prototype.constructor=y,y.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},y},Qh,tu=h=>{var m=ou(h),y=tt(m);return Ei(m),y},tp=(h,m)=>{var y=[],w={};function R(X){if(!w[X]&&!ut[X]){if(ft[X]){ft[X].forEach(R);return}y.push(X),w[X]=!0}}throw m.forEach(R),new Qh(`${h}: `+y.map(tu).join([", "]))},ep=h=>{h=h.trim();let m=h.indexOf("(");return m!==-1?h.substr(0,m):h},np=(h,m,y,w,R,X,Z,et)=>{var xt=dn(m,y);h=tt(h),h=ep(h),R=Kd(w,R),Be(h,function(){tp(`Cannot call ${h} due to unbound types`,xt)},m-1),ie([],xt,Lt=>{var Yt=[Lt[0],null].concat(Lt.slice(1));return Hn(h,_e(h,Yt,null,R,X,Z),m-1),[]})},ip=(h,m,y)=>{switch(m){case 1:return y?w=>Q[w]:w=>nt[w];case 2:return y?w=>ct[w>>1]:w=>z[w>>1];case 4:return y?w=>q[w>>2]:w=>st[w>>2];default:throw new TypeError(`invalid integer width (${m}): ${h}`)}},rp=(h,m,y,w,R)=>{m=tt(m),R===-1&&(R=4294967295);var X=Yt=>Yt;if(w===0){var Z=32-8*y;X=Yt=>Yt<<Z>>>Z}var et=m.includes("unsigned"),xt=(Yt,te)=>{},Lt;et?Lt=function(Yt,te){return xt(te,this.name),te>>>0}:Lt=function(Yt,te){return xt(te,this.name),te},de(h,{name:m,fromWireType:X,toWireType:Lt,argPackAdvance:Jt,readValueFromPointer:ip(m,y,w!==0),destructorFunction:null})},sp=(h,m,y)=>{var w=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],R=w[m];function X(Z){var et=st[Z>>2],xt=st[Z+4>>2];return new R(Q.buffer,xt,et)}y=tt(y),de(h,{name:y,fromWireType:X,argPackAdvance:Jt,readValueFromPointer:X},{ignoreDuplicateRegistrations:!0})},Nr=(h,m,y)=>ge(h,nt,m,y),op=(h,m)=>{m=tt(m);var y=m==="std::string";de(h,{name:m,fromWireType(w){var R=st[w>>2],X=w+4,Z;if(y)for(var et=X,xt=0;xt<=R;++xt){var Lt=X+xt;if(xt==R||nt[Lt]==0){var Yt=Lt-et,te=Mi(et,Yt);Z===void 0?Z=te:(Z+="\0",Z+=te),et=Lt+1}}else{for(var ce=new Array(R),xt=0;xt<R;++xt)ce[xt]=String.fromCharCode(nt[X+xt]);Z=ce.join("")}return Ei(w),Z},toWireType(w,R){R instanceof ArrayBuffer&&(R=new Uint8Array(R));var X,Z=typeof R=="string";Z||R instanceof Uint8Array||R instanceof Uint8ClampedArray||R instanceof Int8Array||Nt("Cannot pass non-string to std::string"),y&&Z?X=oe(R):X=R.length;var et=lc(4+X+1),xt=et+4;if(st[et>>2]=X,y&&Z)Nr(R,xt,X+1);else if(Z)for(var Lt=0;Lt<X;++Lt){var Yt=R.charCodeAt(Lt);Yt>255&&(Ei(xt),Nt("String has UTF-16 code units that do not fit in 8 bits")),nt[xt+Lt]=Yt}else for(var Lt=0;Lt<X;++Lt)nt[xt+Lt]=R[Lt];return w!==null&&w.push(Ei,et),et},argPackAdvance:Jt,readValueFromPointer:_,destructorFunction(w){Ei(w)}})},eu=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,ap=(h,m)=>{for(var y=h,w=y>>1,R=w+m/2;!(w>=R)&&z[w];)++w;if(y=w<<1,y-h>32&&eu)return eu.decode(nt.subarray(h,y));for(var X="",Z=0;!(Z>=m/2);++Z){var et=ct[h+Z*2>>1];if(et==0)break;X+=String.fromCharCode(et)}return X},lp=(h,m,y)=>{if(y??=2147483647,y<2)return 0;y-=2;for(var w=m,R=y<h.length*2?y/2:h.length,X=0;X<R;++X){var Z=h.charCodeAt(X);ct[m>>1]=Z,m+=2}return ct[m>>1]=0,m-w},cp=h=>h.length*2,hp=(h,m)=>{for(var y=0,w="";!(y>=m/4);){var R=q[h+y*4>>2];if(R==0)break;if(++y,R>=65536){var X=R-65536;w+=String.fromCharCode(55296|X>>10,56320|X&1023)}else w+=String.fromCharCode(R)}return w},up=(h,m,y)=>{if(y??=2147483647,y<4)return 0;for(var w=m,R=w+y-4,X=0;X<h.length;++X){var Z=h.charCodeAt(X);if(Z>=55296&&Z<=57343){var et=h.charCodeAt(++X);Z=65536+((Z&1023)<<10)|et&1023}if(q[m>>2]=Z,m+=4,m+4>R)break}return q[m>>2]=0,m-w},fp=h=>{for(var m=0,y=0;y<h.length;++y){var w=h.charCodeAt(y);w>=55296&&w<=57343&&++y,m+=4}return m},dp=(h,m,y)=>{y=tt(y);var w,R,X,Z;m===2?(w=ap,R=lp,Z=cp,X=et=>z[et>>1]):m===4&&(w=hp,R=up,Z=fp,X=et=>st[et>>2]),de(h,{name:y,fromWireType:et=>{for(var xt=st[et>>2],Lt,Yt=et+4,te=0;te<=xt;++te){var ce=et+4+te*m;if(te==xt||X(ce)==0){var se=ce-Yt,ve=w(Yt,se);Lt===void 0?Lt=ve:(Lt+="\0",Lt+=ve),Yt=ce+m}}return Ei(et),Lt},toWireType:(et,xt)=>{typeof xt!="string"&&Nt(`Cannot pass non-string to C++ string type ${y}`);var Lt=Z(xt),Yt=lc(4+Lt+m);return st[Yt>>2]=Lt/m,R(xt,Yt+4,Lt+m),et!==null&&et.push(Ei,Yt),Yt},argPackAdvance:Jt,readValueFromPointer:_,destructorFunction(et){Ei(et)}})},pp=(h,m)=>{m=tt(m),de(h,{isVoid:!0,name:m,argPackAdvance:0,fromWireType:()=>{},toWireType:(y,w)=>{}})},mp=1,gp=()=>mp,nu=h=>{for(var m=h.split("."),y=0;y<4;y++){var w=Number(m[y]);if(isNaN(w))return null;m[y]=w}return(m[0]|m[1]<<8|m[2]<<16|m[3]<<24)>>>0},Uo=h=>parseInt(h),_p=h=>{var m,y,w,R,X=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,Z=[];if(!X.test(h))return null;if(h==="::")return[0,0,0,0,0,0,0,0];for(h.startsWith("::")?h=h.replace("::","Z:"):h=h.replace("::",":Z:"),h.indexOf(".")>0?(h=h.replace(new RegExp("[.]","g"),":"),m=h.split(":"),m[m.length-4]=Uo(m[m.length-4])+Uo(m[m.length-3])*256,m[m.length-3]=Uo(m[m.length-2])+Uo(m[m.length-1])*256,m=m.slice(0,m.length-2)):m=h.split(":"),w=0,R=0,y=0;y<m.length;y++)if(typeof m[y]=="string")if(m[y]==="Z"){for(R=0;R<8-m.length+1;R++)Z[y+R]=0;w=R-1}else Z[y+w]=au(parseInt(m[y],16));else Z[y+w]=m[y];return[Z[1]<<16|Z[0],Z[3]<<16|Z[2],Z[5]<<16|Z[4],Z[7]<<16|Z[6]]},Ui={address_map:{id:1,addrs:{},names:{}},lookup_name(h){var m=nu(h);if(m!==null||(m=_p(h),m!==null))return h;var y;if(Ui.address_map.addrs[h])y=Ui.address_map.addrs[h];else{var w=Ui.address_map.id++;j(w<65535,"exceeded max address mappings of 65535"),y="172.29."+(w&255)+"."+(w&65280),Ui.address_map.names[y]=h,Ui.address_map.addrs[h]=y}return y},lookup_addr(h){return Ui.address_map.names[h]?Ui.address_map.names[h]:null}},vp=h=>{var m=Mi(h);return nu(Ui.lookup_name(m))},yp=(h,m,y)=>nt.copyWithin(h,m,m+y),ic=(h,m)=>{var y=ut[h];return y===void 0&&Nt(`${m} has unknown type ${tu(h)}`),y},iu=(h,m,y)=>{var w=[],R=h.toWireType(w,y);return w.length&&(st[m>>2]=p.toHandle(w)),R},xp=(h,m,y)=>(h=p.toValue(h),m=ic(m,"emval::as"),iu(m,y,h)),Sp={},rc=h=>{var m=Sp[h];return m===void 0?tt(h):m},sc=[],Mp=(h,m,y,w,R)=>(h=sc[h],m=p.toValue(m),y=rc(y),h(m,m[y],w,R)),ru=()=>typeof globalThis=="object"?globalThis:(function(){return Function})()("return this")(),bp=h=>h===0?p.toHandle(ru()):(h=rc(h),p.toHandle(ru()[h])),wp=h=>{var m=sc.length;return sc.push(h),m},Ep=(h,m)=>{for(var y=new Array(h),w=0;w<h;++w)y[w]=ic(st[m+w*4>>2],"parameter "+w);return y},cS=Reflect.construct,Tp=(h,m,y)=>{var w=Ep(h,m),R=w.shift();h--;var X=`return function (obj, func, destructorsRef, args) {
`,Z=0,et=[];y===0&&et.push("obj");for(var xt=["retType"],Lt=[R],Yt=0;Yt<h;++Yt)et.push("arg"+Yt),xt.push("argType"+Yt),Lt.push(w[Yt]),X+=`  var arg${Yt} = argType${Yt}.readValueFromPointer(args${Z?"+"+Z:""});
`,Z+=w[Yt].argPackAdvance;var te=y===1?"new func":"func.call";X+=`  var rv = ${te}(${et.join(", ")});
`,R.isVoid||(xt.push("emval_returnValue"),Lt.push(iu),X+=`  return emval_returnValue(retType, destructorsRef, rv);
`),X+=`};
`,xt.push(X);var ce=Pt(Function,xt)(...Lt),se=`methodCaller<(${w.map(ve=>ve.name).join(", ")}) => ${R.name}>`;return wp(lt(se,ce))},Ap=(h,m)=>(h=p.toValue(h),m=p.toValue(m),p.toHandle(h[m])),Pp=h=>{h>9&&(Pe[h+1]+=1)},Cp=()=>p.toHandle([]),Ip=h=>p.toHandle(rc(h)),Rp=()=>p.toHandle({}),Lp=h=>{var m=p.toValue(h);Et(m),r(h)},Np=(h,m,y)=>{h=p.toValue(h),m=p.toValue(m),y=p.toValue(y),h[m]=y},Dp=(h,m)=>{h=ic(h,"_emval_take_value");var y=h.readValueFromPointer(m);return p.toHandle(y)},Op=h=>h%4===0&&(h%100!==0||h%400===0),Fp=[0,31,60,91,121,152,182,213,244,274,305,335],Up=[0,31,59,90,120,151,181,212,243,273,304,334],Bp=h=>{var m=Op(h.getFullYear()),y=m?Fp:Up,w=y[h.getMonth()]+h.getDate()-1;return w},oc=(h,m)=>m+2097152>>>0<4194305-!!h?(h>>>0)+m*4294967296:NaN;function kp(h,m,y){var w=oc(h,m),R=new Date(w*1e3);q[y>>2]=R.getSeconds(),q[y+4>>2]=R.getMinutes(),q[y+8>>2]=R.getHours(),q[y+12>>2]=R.getDate(),q[y+16>>2]=R.getMonth(),q[y+20>>2]=R.getFullYear()-1900,q[y+24>>2]=R.getDay();var X=Bp(R)|0;q[y+28>>2]=X,q[y+36>>2]=-(R.getTimezoneOffset()*60);var Z=new Date(R.getFullYear(),0,1),et=new Date(R.getFullYear(),6,1).getTimezoneOffset(),xt=Z.getTimezoneOffset(),Lt=(et!=xt&&R.getTimezoneOffset()==Math.min(xt,et))|0;q[y+32>>2]=Lt}function zp(h,m,y,w,R,X,Z){var et=oc(X,Z);try{var xt=Re.getStreamFromFD(R);y&2&&Re.doMsync(h,xt,m,w,et)}catch(Lt){if(typeof I>"u"||Lt.name!=="ErrnoError")throw Lt;return-Lt.errno}}var Vp=(h,m,y,w)=>{var R=new Date().getFullYear(),X=new Date(R,0,1),Z=new Date(R,6,1),et=X.getTimezoneOffset(),xt=Z.getTimezoneOffset(),Lt=Math.max(et,xt);st[h>>2]=Lt*60,q[m>>2]=+(et!=xt);var Yt=se=>{var ve=se>=0?"-":"+",Oe=Math.abs(se),pn=String(Math.floor(Oe/60)).padStart(2,"0"),Ke=String(Oe%60).padStart(2,"0");return`UTC${ve}${pn}${Ke}`},te=Yt(et),ce=Yt(xt);xt<et?(Nr(te,y,17),Nr(ce,w,17)):(Nr(te,w,17),Nr(ce,y,17))},Hp=()=>Date.now();function Gp(){return new Error().stack.toString()}var Bo=h=>{Bo.shown||={},Bo.shown[h]||(Bo.shown[h]=1,d&&(h="warning: "+h),F(h))};function Xp(h){var m=Gp(),y=m.lastIndexOf("_emscripten_log"),w=m.lastIndexOf("_emscripten_get_callstack"),R=m.indexOf(`
`,Math.max(y,w))+1;m=m.slice(R),h&8&&typeof emscripten_source_map>"u"&&(Bo('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),h^=8,h|=16);var X=m.split(`
`);m="";var Z=new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),et=new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),xt=new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");for(var Lt in X){var Yt=X[Lt],te="",ce="",se=0,ve=0,Oe=xt.exec(Yt);if(Oe&&Oe.length==5)te=Oe[1],ce=Oe[2],se=Oe[3],ve=Oe[4];else if(Oe=Z.exec(Yt)||et.exec(Yt),Oe&&Oe.length>=4)te=Oe[1],ce=Oe[2],se=Oe[3],ve=Oe[4]|0;else{m+=Yt+`
`;continue}var pn=!1;if(h&8){var Ke=emscripten_source_map.originalPositionFor({line:se,column:ve});pn=Ke?.source,pn&&(h&64&&(Ke.source=Ke.source.substring(Ke.source.replace(/\\/g,"/").lastIndexOf("/")+1)),m+=`    at ${te} (${Ke.source}:${Ke.line}:${Ke.column})
`)}(h&16||!pn)&&(h&64&&(ce=ce.substring(ce.replace(/\\/g,"/").lastIndexOf("/")+1)),m+=(pn?`     = ${te}`:`    at ${te}`)+` (${ce}:${se}:${ve})
`)}return m=m.replace(/\s+$/,""),m}function Wp(h,m,y){var w=Xp(h);if(!m||y<=0)return oe(w)+1;var R=Nr(w,m,y);return R+1}var su=()=>2147483648,Yp=()=>su(),qp=h=>{var m=Y.buffer,y=(h-m.byteLength+65535)/65536|0;try{return Y.grow(y),dt(),1}catch{}},$p=h=>{var m=nt.length;h>>>=0;var y=su();if(h>y)return!1;for(var w=1;w<=4;w*=2){var R=m*(1+.2/w);R=Math.min(R,h+100663296);var X=Math.min(y,Wt(Math.max(h,R),65536)),Z=qp(X);if(Z)return!0}return!1},ac={},Zp=()=>g||"./this.program",Os=()=>{if(!Os.strings){var h=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",m={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:h,_:Zp()};for(var y in ac)ac[y]===void 0?delete m[y]:m[y]=ac[y];var w=[];for(var y in m)w.push(`${y}=${m[y]}`);Os.strings=w}return Os.strings},Jp=(h,m)=>{for(var y=0;y<h.length;++y)Q[m++]=h.charCodeAt(y);Q[m]=0},jp=(h,m)=>{var y=0;return Os().forEach((w,R)=>{var X=m+y;st[h+R*4>>2]=X,Jp(w,X),y+=w.length+1}),0},Kp=(h,m)=>{var y=Os();st[h>>2]=y.length;var w=0;return y.forEach(R=>w+=R.length+1),st[m>>2]=w,0},Qp=0,tm=()=>Ft||Qp>0,em=h=>{V=h,tm()||(i.onExit?.(h),P=!0),b(h,new pt(h))},nm=(h,m)=>{V=h,em(h)},im=nm;function rm(h){try{var m=Re.getStreamFromFD(h);return I.close(m),0}catch(y){if(typeof I>"u"||y.name!=="ErrnoError")throw y;return y.errno}}var sm=(h,m,y,w)=>{for(var R=0,X=0;X<y;X++){var Z=st[m>>2],et=st[m+4>>2];m+=8;var xt=I.read(h,Q,Z,et,w);if(xt<0)return-1;if(R+=xt,xt<et)break;typeof w<"u"&&(w+=xt)}return R};function om(h,m,y,w){try{var R=Re.getStreamFromFD(h),X=sm(R,m,y);return st[w>>2]=X,0}catch(Z){if(typeof I>"u"||Z.name!=="ErrnoError")throw Z;return Z.errno}}function am(h,m,y,w,R){var X=oc(m,y);try{if(isNaN(X))return 61;var Z=Re.getStreamFromFD(h);return I.llseek(Z,X,w),it=[Z.position>>>0,(H=Z.position,+Math.abs(H)>=1?H>0?+Math.floor(H/4294967296)>>>0:~~+Math.ceil((H-+(~~H>>>0))/4294967296)>>>0:0)],q[R>>2]=it[0],q[R+4>>2]=it[1],Z.getdents&&X===0&&w===0&&(Z.getdents=null),0}catch(et){if(typeof I>"u"||et.name!=="ErrnoError")throw et;return et.errno}}var lm=(h,m,y,w)=>{for(var R=0,X=0;X<y;X++){var Z=st[m>>2],et=st[m+4>>2];m+=8;var xt=I.write(h,Q,Z,et,w);if(xt<0)return-1;if(R+=xt,xt<et)break;typeof w<"u"&&(w+=xt)}return R};function cm(h,m,y,w){try{var R=Re.getStreamFromFD(h),X=lm(R,m,y);return st[w>>2]=X,0}catch(Z){if(typeof I>"u"||Z.name!=="ErrnoError")throw Z;return Z.errno}}I.createPreloadedFile=Tn,I.staticInit(),Rr(),Gt=i.BindingError=class extends Error{constructor(m){super(m),this.name="BindingError"}},Ht=i.InternalError=class extends Error{constructor(m){super(m),this.name="InternalError"}},l(),Qh=i.UnboundTypeError=Qd(Error,"UnboundTypeError");var hm={M:Er,N:Tr,h:Ar,I:ci,Q:bi,F:Pr,G:Oi,j:Cr,B:Ir,H:Ls,C:hi,A:Ns,w:Ds,V:Ne,U:D,n:J,f:np,b:rp,a:sp,m:op,i:dp,W:pp,J:gp,x:vp,L:yp,e:xp,q:Mp,T:r,u:bp,p:Tp,k:Ap,Y:Pp,X:Cp,r:Ip,Z:Rp,o:Lp,c:Np,d:Dp,t:kp,s:zp,O:Vp,K:Hp,R:Wp,z:Yp,y:$p,D:jp,E:Kp,S:im,g:rm,P:om,v:am,l:cm},on=T(),um=()=>(um=on.$)(),ou=h=>(ou=on.aa)(h),lc=h=>(lc=on.ca)(h),Ei=h=>(Ei=on.da)(h),au=h=>(au=on.ea)(h),lu=(h,m)=>(lu=on.fa)(h,m),cu=()=>(cu=on.ga)(),fm=i.dynCall_viijii=(h,m,y,w,R,X,Z)=>(fm=i.dynCall_viijii=on.ha)(h,m,y,w,R,X,Z),dm=i.dynCall_viiiiji=(h,m,y,w,R,X,Z,et)=>(dm=i.dynCall_viiiiji=on.ia)(h,m,y,w,R,X,Z,et),pm=i.dynCall_jiji=(h,m,y,w,R)=>(pm=i.dynCall_jiji=on.ja)(h,m,y,w,R),mm=i.dynCall_iiiiij=(h,m,y,w,R,X,Z)=>(mm=i.dynCall_iiiiij=on.ka)(h,m,y,w,R,X,Z),gm=i.dynCall_iiiiijj=(h,m,y,w,R,X,Z,et,xt)=>(gm=i.dynCall_iiiiijj=on.la)(h,m,y,w,R,X,Z,et,xt),_m=i.dynCall_iiiiiijj=(h,m,y,w,R,X,Z,et,xt,Lt)=>(_m=i.dynCall_iiiiiijj=on.ma)(h,m,y,w,R,X,Z,et,xt,Lt),ko,hu;me=function h(){ko||uu(),ko||(me=h)};function uu(){if(ae>0||!hu&&(hu=1,ue(),ae>0))return;function h(){ko||(ko=1,i.calledRun=1,!P&&(xe(),s(i),i.onRuntimeInitialized?.(),Ee()))}i.setStatus?(i.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>i.setStatus(""),1),h()},1)):h()}if(i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return uu(),e=c,e})})();typeof mu=="object"&&typeof uc=="object"?uc.exports=pu:typeof define=="function"&&define.amd&&define([],()=>pu)});function fc(n,t){let e=n.diameter/2,i=Math.ceil(e/t),s=[];for(let o=-i;o<=i;o++)for(let c=-i;c<=i;c++){let u=Math.hypot(c,o)*t;if(u>e+1e-6)continue;let f=Math.min(u,e),d=0;if(n.kind==="ball")d=e-Math.sqrt(Math.max(0,e*e-f*f));else if(n.kind==="vbit"||n.kind==="chamfer"||n.kind==="drill"){let v=(n.angle||(n.kind==="drill"?118:60))*Math.PI/360;d=f/Math.tan(v)}s.push(c,o,d)}return Float32Array.from(s)}function zo(n,t,e,i,s,o){let c=Math.hypot(i.x-e.x,i.y-e.y),u=Math.max(1,Math.ceil(c/(n.cell*.5))),f=!1;for(let d=s?0:1;d<=u;d++){let v=d/u,S=(e.x+(i.x-e.x)*v-n.x0)/n.cell,g=(e.y+(i.y-e.y)*v-n.y0)/n.cell,b=e.z+(i.z-e.z)*v;if(b>=n.top)continue;let E=Math.round(S),C=Math.round(g);for(let M=0;M<t.length;M+=3){let x=E+t[M],B=C+t[M+1];if(x<0||B<0||x>=n.nx||B>=n.ny)continue;let W=B*n.nx+x,N=b+t[M+2];if(n.h[W]>N+1e-4){if(s){n.h[W]>N+.05&&(f=!0);continue}n.h[W]=N,n.op[W]=o+1}}}return f}function _u(n,t){let e=new Bi(n.stock,t||Bi.cellFor(n.stock)),i=[];return n.ops.forEach((s,o)=>{if(!s.enabled||!s.moves)return;let c=fc(s.tool,e.cell),u=null;for(let f of s.moves)u&&zo(e,c,u,f,!!f.r,o)&&i.push({op:s.id,at:f}),u=f}),{hm:e,collisions:i}}function vu(n,t){let e=new Float32Array(t.nx*t.ny).fill(-1/0),i=n.positions,s=n.indices;for(let o=0;o<s.length;o+=3){let c=s[o]*3,u=s[o+1]*3,f=s[o+2]*3,d=i[c],v=i[c+1],S=i[c+2],g=i[u],b=i[u+1],E=i[u+2],C=i[f],M=i[f+1],x=i[f+2],B=(b-M)*(d-C)+(C-g)*(v-M);if(Math.abs(B)<1e-12)continue;let W=Math.max(0,Math.floor((Math.min(d,g,C)-t.x0)/t.cell)),N=Math.min(t.nx-1,Math.ceil((Math.max(d,g,C)-t.x0)/t.cell)),F=Math.max(0,Math.floor((Math.min(v,b,M)-t.y0)/t.cell)),U=Math.min(t.ny-1,Math.ceil((Math.max(v,b,M)-t.y0)/t.cell));for(let Y=F;Y<=U;Y++)for(let P=W;P<=N;P++){let V=t.x0+P*t.cell,j=t.y0+Y*t.cell,Q=((b-M)*(V-C)+(C-g)*(j-M))/B,nt=((M-v)*(V-C)+(d-C)*(j-M))/B,ct=1-Q-nt;if(Q<-1e-9||nt<-1e-9||ct<-1e-9)continue;let z=Q*S+nt*E+ct*x,q=Y*t.nx+P;z>e[q]&&(e[q]=z)}}return e}var Bi,dc=Pn(()=>{Bi=class{constructor(t,e){this.cell=e,this.x0=t.minX,this.y0=t.minY,this.nx=Math.max(2,Math.ceil((t.maxX-t.minX)/e)+1),this.ny=Math.max(2,Math.ceil((t.maxY-t.minY)/e)+1),this.h=new Float32Array(this.nx*this.ny).fill(t.top),this.op=new Uint8Array(this.nx*this.ny),this.top=t.top,this.bottom=t.bottom}static cellFor(t,e=600*600){let i=(t.maxX-t.minX)*(t.maxY-t.minY);return Math.max(.1,Math.sqrt(i/e))}}});function xu(n){let t=[],e=[],i=[],s=[];for(let o of n.meshes||[]){let c=t.length/3,u=e.length/3,f=o.attributes.position.array;for(let v=0;v<f.length;v++)t.push(f[v]);let d=o.index.array;for(let v=0;v<d.length;v++)e.push(d[v]+c);for(let v of o.brep_faces||[])i.push({first:v.first+u,last:v.last+u});o.name&&s.push(o.name)}return{positions:Float64Array.from(t),indices:Uint32Array.from(e),faces:i,solids:(n.meshes||[]).length,names:s}}function Us(n){let t=n.positions,e=[1/0,1/0,1/0],i=[-1/0,-1/0,-1/0];for(let s=0;s<t.length;s+=3)for(let o=0;o<3;o++)t[s+o]<e[o]&&(e[o]=t[s+o]),t[s+o]>i[o]&&(i[o]=t[s+o]);return{min:e,max:i,size:[i[0]-e[0],i[1]-e[1],i[2]-e[2]]}}function mc(n,t){let e=n.positions,i=n.indices,s=i[t*3]*3,o=i[t*3+1]*3,c=i[t*3+2]*3,u=e[o]-e[s],f=e[o+1]-e[s+1],d=e[o+2]-e[s+2],v=e[c]-e[s],S=e[c+1]-e[s+1],g=e[c+2]-e[s+2],b=f*g-d*S,E=d*v-u*g,C=u*S-f*v,M=Math.hypot(b,E,C);return M>0?[b/M,E/M,C/M]:[0,0,0]}function Em(n){let[t,e,i]=n;if(i>.999999)return[1,0,0,0,1,0,0,0,1];if(i<-.999999)return[1,0,0,0,-1,0,0,0,-1];let s=e,o=-t,c=Math.hypot(s,o);s/=c,o/=c;let u=i,f=c,d=1-u;return[d*s*s+u,d*s*o,o*f,d*s*o,d*o*o+u,-s*f,-o*f,s*f,u]}function Tm(n,t){let e=n.positions,i=new Float64Array(e.length);for(let c=0;c<e.length;c+=3){let u=e[c],f=e[c+1],d=e[c+2];i[c]=t[0]*u+t[1]*f+t[2]*d,i[c+1]=t[3]*u+t[4]*f+t[5]*d,i[c+2]=t[6]*u+t[7]*f+t[8]*d}let s={positions:i,indices:n.indices,faces:n.faces},{min:o}=Us(s);for(let c=0;c<i.length;c+=3)i[c]-=o[0],i[c+1]-=o[1],i[c+2]-=o[2];for(let c=0;c<i.length;c++)i[c]=Math.round(i[c]*1e6)/1e6;return s}function Or(n,t=.001){let{max:e,size:i}=Us(n),s=e[2],o=new Set,c=0,u=0,f=0,d=n.positions,v=n.indices,S=v.length/3;for(let E=0;E<S;E++){let C=v[E*3]*3,M=v[E*3+1]*3,x=v[E*3+2]*3,B=mc(n,E),W=d[M]-d[C],N=d[M+1]-d[C+1],F=d[M+2]-d[C+2],U=d[x]-d[C],Y=d[x+1]-d[C+1],P=d[x+2]-d[C+2],V=Math.hypot(N*P-F*Y,F*U-W*P,W*Y-N*U)/2;f+=V;let j=(d[C+2]+d[M+2]+d[x+2])/3;B[2]>1-t?o.add(Math.round(j*1e3)/1e3):B[2]<-(1-t)?j>t&&(c+=V):Math.abs(B[2])>t&&(B[2]<0?c+=V:u+=V)}let g=c>.001*f,b=g?Pm(n):0;return{size:i,top:s,floors:[...o].sort((E,C)=>C-E),undercut:g&&b>yu,squareEdges:g&&b<=yu,sloped:u>.001*f,undercutArea:c,slopedArea:u,missed:b}}function Am(n){let t=n.positions,e=n.indices,i=0;for(let s=0;s<e.length;s+=3){let o=e[s]*3,c=e[s+1]*3,u=e[s+2]*3;i+=t[o]*(t[c+1]*t[u+2]-t[c+2]*t[u+1])-t[o+1]*(t[c]*t[u+2]-t[c+2]*t[u])+t[o+2]*(t[c]*t[u+1]-t[c+1]*t[u])}return Math.abs(i/6)}function Pm(n){let{min:t,max:e}=Us(n),i=e[0]-t[0],s=e[1]-t[1],o=Math.max(.05,Math.sqrt(i*s/25e4)),c={x0:t[0],y0:t[1],cell:o,nx:Math.ceil(i/o)+1,ny:Math.ceil(s/o)+1},u=vu(n,c),f=0;for(let v=0;v<u.length;v++)u[v]>t[2]&&(f+=u[v]-t[2]);f*=o*o;let d=Am(n);return d>0?Math.max(0,f-d)/d:0}function Su(n,t){let e=n.positions,i=n.indices,s=[],o=i.length/3;for(let c=0;c<o;c++){let u=[i[c*3]*3,i[c*3+1]*3,i[c*3+2]*3],f=[];for(let d=0;d<3;d++){let v=u[d],S=u[(d+1)%3],g=e[v+2]-t,b=e[S+2]-t;if(g<0!=b<0){let E=g/(g-b);f.push([e[v]+(e[S]-e[v])*E,e[v+1]+(e[S+1]-e[v+1])*E])}}f.length===2&&s.push(f)}return Cm(s)}function Cm(n){let t=([o,c])=>`${Math.round(o*1e4)},${Math.round(c*1e4)}`,e=new Map;n.forEach((o,c)=>{for(let u of[0,1]){let f=t(o[u]);e.has(f)||e.set(f,[]),e.get(f).push(c)}});let i=new Uint8Array(n.length),s=[];for(let o=0;o<n.length;o++){if(i[o])continue;i[o]=1;let c=[n[o][0],n[o][1]],u=t(n[o][0]),f=n[o][1];for(let d=0;d<n.length;d++){let v=t(f);if(v===u)break;let S=(e.get(v)||[]).find(b=>!i[b]);if(S===void 0)break;i[S]=1;let g=n[S];f=t(g[0])===v?g[1]:g[0],t(f)!==u&&c.push(f)}c.length>=3&&s.push(c)}return s}function Mu(n){let t={};for(let s of Object.keys(pc)){let o=Or(Vo(n,s));t[s]={reachable:!o.undercut,missed:o.missed,undercutArea:o.undercutArea,slopedArea:o.slopedArea,height:o.size[2]}}let e=Object.keys(pc),i=e.slice().sort((s,o)=>{let c=t[s],u=t[o];return(c.reachable===u.reachable?0:c.reachable?-1:1)||(Math.abs(c.missed-u.missed)>1e-4?c.missed-u.missed:0)||(Math.abs(c.slopedArea-u.slopedArea)>1e-6?c.slopedArea-u.slopedArea:0)||(Math.abs(c.height-u.height)>1e-6?c.height-u.height:0)||e.indexOf(s)-e.indexOf(o)});if(!i.some(s=>t[s].reachable))for(let s of e)t[s].reachable=!0;return{sides:t,best:i[0]}}var pc,Vo,yu,gc=Pn(()=>{dc();pc={top:[0,0,1],bottom:[0,0,-1],front:[0,-1,0],back:[0,1,0],left:[-1,0,0],right:[1,0,0]};Vo=(n,t)=>Tm(n,Em(typeof t=="string"?pc[t]:t));yu=.05});var bu=fu((yS,Ho)=>{(function(){"use strict";var n={};n.version="6.4.2.2",n.use_lines=!0,n.use_xyz=!1;var t=!1;typeof Ho<"u"&&Ho.exports?(Ho.exports=n,t=!0):(typeof define=="function"&&define.amd&&define(n),typeof document<"u"?window.ClipperLib=n:self.ClipperLib=n);var e;if(t){var i="chrome";e="Netscape"}else{var i=navigator.userAgent.toString().toLowerCase();e=navigator.appName}var s={};i.indexOf("chrome")!=-1&&i.indexOf("chromium")==-1?s.chrome=1:s.chrome=0,i.indexOf("chromium")!=-1?s.chromium=1:s.chromium=0,i.indexOf("safari")!=-1&&i.indexOf("chrome")==-1&&i.indexOf("chromium")==-1?s.safari=1:s.safari=0,i.indexOf("firefox")!=-1?s.firefox=1:s.firefox=0,i.indexOf("firefox/17")!=-1?s.firefox17=1:s.firefox17=0,i.indexOf("firefox/15")!=-1?s.firefox15=1:s.firefox15=0,i.indexOf("firefox/3")!=-1?s.firefox3=1:s.firefox3=0,i.indexOf("opera")!=-1?s.opera=1:s.opera=0,i.indexOf("msie 10")!=-1?s.msie10=1:s.msie10=0,i.indexOf("msie 9")!=-1?s.msie9=1:s.msie9=0,i.indexOf("msie 8")!=-1?s.msie8=1:s.msie8=0,i.indexOf("msie 7")!=-1?s.msie7=1:s.msie7=0,i.indexOf("msie ")!=-1?s.msie=1:s.msie=0,n.biginteger_used=null;var o,c=0xdeadbeefcafe,u=(c&16777215)==15715070;function f(r,a,l){n.biginteger_used=1,r!=null&&(typeof r=="number"&&typeof a>"u"?this.fromInt(r):typeof r=="number"?this.fromNumber(r,a,l):a==null&&typeof r!="string"?this.fromString(r,256):this.fromString(r,a))}function d(){return new f(null,void 0,void 0)}function v(r,a,l,p,_,A){for(;--A>=0;){var D=a*this[r++]+l[p]+_;_=Math.floor(D/67108864),l[p++]=D&67108863}return _}function S(r,a,l,p,_,A){for(var D=a&32767,$=a>>15;--A>=0;){var J=this[r]&32767,lt=this[r++]>>15,Et=$*J+lt*D;J=D*J+((Et&32767)<<15)+l[p]+(_&1073741823),_=(J>>>30)+(Et>>>15)+$*lt+(_>>>30),l[p++]=J&1073741823}return _}function g(r,a,l,p,_,A){for(var D=a&16383,$=a>>14;--A>=0;){var J=this[r]&16383,lt=this[r++]>>14,Et=$*J+lt*D;J=D*J+((Et&16383)<<14)+l[p]+_,_=(J>>28)+(Et>>14)+$*lt,l[p++]=J&268435455}return _}u&&e=="Microsoft Internet Explorer"?(f.prototype.am=S,o=30):u&&e!="Netscape"?(f.prototype.am=v,o=26):(f.prototype.am=g,o=28),f.prototype.DB=o,f.prototype.DM=(1<<o)-1,f.prototype.DV=1<<o;var b=52;f.prototype.FV=Math.pow(2,b),f.prototype.F1=b-o,f.prototype.F2=2*o-b;var E="0123456789abcdefghijklmnopqrstuvwxyz",C=new Array,M,x;for(M=48,x=0;x<=9;++x)C[M++]=x;for(M=97,x=10;x<36;++x)C[M++]=x;for(M=65,x=10;x<36;++x)C[M++]=x;function B(r){return E.charAt(r)}function W(r,a){var l=C[r.charCodeAt(a)];return l??-1}function N(r){for(var a=this.t-1;a>=0;--a)r[a]=this[a];r.t=this.t,r.s=this.s}function F(r){this.t=1,this.s=r<0?-1:0,r>0?this[0]=r:r<-1?this[0]=r+this.DV:this.t=0}function U(r){var a=d();return a.fromInt(r),a}function Y(r,a){var l;if(a==16)l=4;else if(a==8)l=3;else if(a==256)l=8;else if(a==2)l=1;else if(a==32)l=5;else if(a==4)l=2;else{this.fromRadix(r,a);return}this.t=0,this.s=0;for(var p=r.length,_=!1,A=0;--p>=0;){var D=l==8?r[p]&255:W(r,p);if(D<0){r.charAt(p)=="-"&&(_=!0);continue}_=!1,A==0?this[this.t++]=D:A+l>this.DB?(this[this.t-1]|=(D&(1<<this.DB-A)-1)<<A,this[this.t++]=D>>this.DB-A):this[this.t-1]|=D<<A,A+=l,A>=this.DB&&(A-=this.DB)}l==8&&(r[0]&128)!=0&&(this.s=-1,A>0&&(this[this.t-1]|=(1<<this.DB-A)-1<<A)),this.clamp(),_&&f.ZERO.subTo(this,this)}function P(){for(var r=this.s&this.DM;this.t>0&&this[this.t-1]==r;)--this.t}function V(r){if(this.s<0)return"-"+this.negate().toString(r);var a;if(r==16)a=4;else if(r==8)a=3;else if(r==2)a=1;else if(r==32)a=5;else if(r==4)a=2;else return this.toRadix(r);var l=(1<<a)-1,p,_=!1,A="",D=this.t,$=this.DB-D*this.DB%a;if(D-- >0)for($<this.DB&&(p=this[D]>>$)>0&&(_=!0,A=B(p));D>=0;)$<a?(p=(this[D]&(1<<$)-1)<<a-$,p|=this[--D]>>($+=this.DB-a)):(p=this[D]>>($-=a)&l,$<=0&&($+=this.DB,--D)),p>0&&(_=!0),_&&(A+=B(p));return _?A:"0"}function j(){var r=d();return f.ZERO.subTo(this,r),r}function Q(){return this.s<0?this.negate():this}function nt(r){var a=this.s-r.s;if(a!=0)return a;var l=this.t;if(a=l-r.t,a!=0)return this.s<0?-a:a;for(;--l>=0;)if((a=this[l]-r[l])!=0)return a;return 0}function ct(r){var a=1,l;return(l=r>>>16)!=0&&(r=l,a+=16),(l=r>>8)!=0&&(r=l,a+=8),(l=r>>4)!=0&&(r=l,a+=4),(l=r>>2)!=0&&(r=l,a+=2),(l=r>>1)!=0&&(r=l,a+=1),a}function z(){return this.t<=0?0:this.DB*(this.t-1)+ct(this[this.t-1]^this.s&this.DM)}function q(r,a){var l;for(l=this.t-1;l>=0;--l)a[l+r]=this[l];for(l=r-1;l>=0;--l)a[l]=0;a.t=this.t+r,a.s=this.s}function st(r,a){for(var l=r;l<this.t;++l)a[l-r]=this[l];a.t=Math.max(this.t-r,0),a.s=this.s}function G(r,a){var l=r%this.DB,p=this.DB-l,_=(1<<p)-1,A=Math.floor(r/this.DB),D=this.s<<l&this.DM,$;for($=this.t-1;$>=0;--$)a[$+A+1]=this[$]>>p|D,D=(this[$]&_)<<l;for($=A-1;$>=0;--$)a[$]=0;a[A]=D,a.t=this.t+A+1,a.s=this.s,a.clamp()}function vt(r,a){a.s=this.s;var l=Math.floor(r/this.DB);if(l>=this.t){a.t=0;return}var p=r%this.DB,_=this.DB-p,A=(1<<p)-1;a[0]=this[l]>>p;for(var D=l+1;D<this.t;++D)a[D-l-1]|=(this[D]&A)<<_,a[D-l]=this[D]>>p;p>0&&(a[this.t-l-1]|=(this.s&A)<<_),a.t=this.t-l,a.clamp()}function dt(r,a){for(var l=0,p=0,_=Math.min(r.t,this.t);l<_;)p+=this[l]-r[l],a[l++]=p&this.DM,p>>=this.DB;if(r.t<this.t){for(p-=r.s;l<this.t;)p+=this[l],a[l++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;l<r.t;)p-=r[l],a[l++]=p&this.DM,p>>=this.DB;p-=r.s}a.s=p<0?-1:0,p<-1?a[l++]=this.DV+p:p>0&&(a[l++]=p),a.t=l,a.clamp()}function St(r,a){var l=this.abs(),p=r.abs(),_=l.t;for(a.t=_+p.t;--_>=0;)a[_]=0;for(_=0;_<p.t;++_)a[_+l.t]=l.am(0,p[_],a,_,0,l.t);a.s=0,a.clamp(),this.s!=r.s&&f.ZERO.subTo(a,a)}function _t(r){for(var a=this.abs(),l=r.t=2*a.t;--l>=0;)r[l]=0;for(l=0;l<a.t-1;++l){var p=a.am(l,a[l],r,2*l,0,1);(r[l+a.t]+=a.am(l+1,2*a[l],r,2*l+1,p,a.t-l-1))>=a.DV&&(r[l+a.t]-=a.DV,r[l+a.t+1]=1)}r.t>0&&(r[r.t-1]+=a.am(l,a[l],r,2*l,0,1)),r.s=0,r.clamp()}function Xt(r,a,l){var p=r.abs();if(!(p.t<=0)){var _=this.abs();if(_.t<p.t){a?.fromInt(0),l!=null&&this.copyTo(l);return}l==null&&(l=d());var A=d(),D=this.s,$=r.s,J=this.DB-ct(p[p.t-1]);J>0?(p.lShiftTo(J,A),_.lShiftTo(J,l)):(p.copyTo(A),_.copyTo(l));var lt=A.t,Et=A[lt-1];if(Et!=0){var bt=Et*(1<<this.F1)+(lt>1?A[lt-2]>>this.F2:0),Pt=this.FV/bt,re=(1<<this.F1)/bt,_e=1<<this.F2,we=l.t,Be=we-lt,dn=a??d();for(A.dlShiftTo(Be,dn),l.compareTo(dn)>=0&&(l[l.t++]=1,l.subTo(dn,l)),f.ONE.dlShiftTo(lt,dn),dn.subTo(A,A);A.t<lt;)A[A.t++]=0;for(;--Be>=0;){var Hn=l[--we]==Et?this.DM:Math.floor(l[we]*Pt+(l[we-1]+_e)*re);if((l[we]+=A.am(0,Hn,l,Be,0,lt))<Hn)for(A.dlShiftTo(Be,dn),l.subTo(dn,l);l[we]<--Hn;)l.subTo(dn,l)}a!=null&&(l.drShiftTo(lt,a),D!=$&&f.ZERO.subTo(a,a)),l.t=lt,l.clamp(),J>0&&l.rShiftTo(J,l),D<0&&f.ZERO.subTo(l,l)}}}function $t(r){var a=d();return this.abs().divRemTo(r,null,a),this.s<0&&a.compareTo(f.ZERO)>0&&r.subTo(a,a),a}function ue(r){this.m=r}function xe(r){return r.s<0||r.compareTo(this.m)>=0?r.mod(this.m):r}function Ee(r){return r}function yt(r){r.divRemTo(this.m,null,r)}function wt(r,a,l){r.multiplyTo(a,l),this.reduce(l)}function Zt(r,a){r.squareTo(a),this.reduce(a)}ue.prototype.convert=xe,ue.prototype.revert=Ee,ue.prototype.reduce=yt,ue.prototype.mulTo=wt,ue.prototype.sqrTo=Zt;function ae(){if(this.t<1)return 0;var r=this[0];if((r&1)==0)return 0;var a=r&3;return a=a*(2-(r&15)*a)&15,a=a*(2-(r&255)*a)&255,a=a*(2-((r&65535)*a&65535))&65535,a=a*(2-r*a%this.DV)%this.DV,a>0?this.DV-a:-a}function Ot(r){this.m=r,this.mp=r.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<r.DB-15)-1,this.mt2=2*r.t}function me(r){var a=d();return r.abs().dlShiftTo(this.m.t,a),a.divRemTo(this.m,null,a),r.s<0&&a.compareTo(f.ZERO)>0&&this.m.subTo(a,a),a}function Je(r){var a=d();return r.copyTo(a),this.reduce(a),a}function he(r){for(;r.t<=this.mt2;)r[r.t++]=0;for(var a=0;a<this.m.t;++a){var l=r[a]&32767,p=l*this.mpl+((l*this.mph+(r[a]>>15)*this.mpl&this.um)<<15)&r.DM;for(l=a+this.m.t,r[l]+=this.m.am(0,p,r,a,0,this.m.t);r[l]>=r.DV;)r[l]-=r.DV,r[++l]++}r.clamp(),r.drShiftTo(this.m.t,r),r.compareTo(this.m)>=0&&r.subTo(this.m,r)}function Me(r,a){r.squareTo(a),this.reduce(a)}function Ce(r,a,l){r.multiplyTo(a,l),this.reduce(l)}Ot.prototype.convert=me,Ot.prototype.revert=Je,Ot.prototype.reduce=he,Ot.prototype.mulTo=Ce,Ot.prototype.sqrTo=Me;function be(){return(this.t>0?this[0]&1:this.s)==0}function De(r,a){if(r>4294967295||r<1)return f.ONE;var l=d(),p=d(),_=a.convert(this),A=ct(r)-1;for(_.copyTo(l);--A>=0;)if(a.sqrTo(l,p),(r&1<<A)>0)a.mulTo(p,_,l);else{var D=l;l=p,p=D}return a.revert(l)}function He(r,a){var l;return r<256||a.isEven()?l=new ue(a):l=new Ot(a),this.exp(r,l)}f.prototype.copyTo=N,f.prototype.fromInt=F,f.prototype.fromString=Y,f.prototype.clamp=P,f.prototype.dlShiftTo=q,f.prototype.drShiftTo=st,f.prototype.lShiftTo=G,f.prototype.rShiftTo=vt,f.prototype.subTo=dt,f.prototype.multiplyTo=St,f.prototype.squareTo=_t,f.prototype.divRemTo=Xt,f.prototype.invDigit=ae,f.prototype.isEven=be,f.prototype.exp=De,f.prototype.toString=V,f.prototype.negate=j,f.prototype.abs=Q,f.prototype.compareTo=nt,f.prototype.bitLength=z,f.prototype.mod=$t,f.prototype.modPowInt=He,f.ZERO=U(0),f.ONE=U(1);function K(){var r=d();return this.copyTo(r),r}function ht(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function at(){return this.t==0?this.s:this[0]<<24>>24}function k(){return this.t==0?this.s:this[0]<<16>>16}function It(r){return Math.floor(Math.LN2*this.DB/Math.log(r))}function Kt(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function O(r){if(r==null&&(r=10),this.signum()==0||r<2||r>36)return"0";var a=this.chunkSize(r),l=Math.pow(r,a),p=U(l),_=d(),A=d(),D="";for(this.divRemTo(p,_,A);_.signum()>0;)D=(l+A.intValue()).toString(r).substr(1)+D,_.divRemTo(p,_,A);return A.intValue().toString(r)+D}function T(r,a){this.fromInt(0),a==null&&(a=10);for(var l=this.chunkSize(a),p=Math.pow(a,l),_=!1,A=0,D=0,$=0;$<r.length;++$){var J=W(r,$);if(J<0){r.charAt($)=="-"&&this.signum()==0&&(_=!0);continue}D=a*D+J,++A>=l&&(this.dMultiply(p),this.dAddOffset(D,0),A=0,D=0)}A>0&&(this.dMultiply(Math.pow(a,A)),this.dAddOffset(D,0)),_&&f.ZERO.subTo(this,this)}function H(r,a,l){if(typeof a=="number")if(r<2)this.fromInt(1);else for(this.fromNumber(r,l),this.testBit(r-1)||this.bitwiseTo(f.ONE.shiftLeft(r-1),jt,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(a);)this.dAddOffset(2,0),this.bitLength()>r&&this.subTo(f.ONE.shiftLeft(r-1),this);else{var p=new Array,_=r&7;p.length=(r>>3)+1,a.nextBytes(p),_>0?p[0]&=(1<<_)-1:p[0]=0,this.fromString(p,256)}}function it(){var r=this.t,a=new Array;a[0]=this.s;var l=this.DB-r*this.DB%8,p,_=0;if(r-- >0)for(l<this.DB&&(p=this[r]>>l)!=(this.s&this.DM)>>l&&(a[_++]=p|this.s<<this.DB-l);r>=0;)l<8?(p=(this[r]&(1<<l)-1)<<8-l,p|=this[--r]>>(l+=this.DB-8)):(p=this[r]>>(l-=8)&255,l<=0&&(l+=this.DB,--r)),(p&128)!=0&&(p|=-256),_==0&&(this.s&128)!=(p&128)&&++_,(_>0||p!=this.s)&&(a[_++]=p);return a}function pt(r){return this.compareTo(r)==0}function Ct(r){return this.compareTo(r)<0?this:r}function Ft(r){return this.compareTo(r)>0?this:r}function mt(r,a,l){var p,_,A=Math.min(r.t,this.t);for(p=0;p<A;++p)l[p]=a(this[p],r[p]);if(r.t<this.t){for(_=r.s&this.DM,p=A;p<this.t;++p)l[p]=a(this[p],_);l.t=this.t}else{for(_=this.s&this.DM,p=A;p<r.t;++p)l[p]=a(_,r[p]);l.t=r.t}l.s=a(this.s,r.s),l.clamp()}function Tt(r,a){return r&a}function Ut(r){var a=d();return this.bitwiseTo(r,Tt,a),a}function jt(r,a){return r|a}function Vt(r){var a=d();return this.bitwiseTo(r,jt,a),a}function Dt(r,a){return r^a}function ne(r){var a=d();return this.bitwiseTo(r,Dt,a),a}function oe(r,a){return r&~a}function ge(r){var a=d();return this.bitwiseTo(r,oe,a),a}function rt(){for(var r=d(),a=0;a<this.t;++a)r[a]=this.DM&~this[a];return r.t=this.t,r.s=~this.s,r}function Bt(r){var a=d();return r<0?this.rShiftTo(-r,a):this.lShiftTo(r,a),a}function Mt(r){var a=d();return r<0?this.lShiftTo(-r,a):this.rShiftTo(r,a),a}function kt(r){if(r==0)return-1;var a=0;return(r&65535)==0&&(r>>=16,a+=16),(r&255)==0&&(r>>=8,a+=8),(r&15)==0&&(r>>=4,a+=4),(r&3)==0&&(r>>=2,a+=2),(r&1)==0&&++a,a}function Wt(){for(var r=0;r<this.t;++r)if(this[r]!=0)return r*this.DB+kt(this[r]);return this.s<0?this.t*this.DB:-1}function At(r){for(var a=0;r!=0;)r&=r-1,++a;return a}function Rt(){for(var r=0,a=this.s&this.DM,l=0;l<this.t;++l)r+=At(this[l]^a);return r}function ee(r){var a=Math.floor(r/this.DB);return a>=this.t?this.s!=0:(this[a]&1<<r%this.DB)!=0}function Fe(r,a){var l=f.ONE.shiftLeft(r);return this.bitwiseTo(l,a,l),l}function Le(r){return this.changeBit(r,jt)}function xn(r){return this.changeBit(r,oe)}function Tn(r){return this.changeBit(r,Dt)}function Rs(r,a){for(var l=0,p=0,_=Math.min(r.t,this.t);l<_;)p+=this[l]+r[l],a[l++]=p&this.DM,p>>=this.DB;if(r.t<this.t){for(p+=r.s;l<this.t;)p+=this[l],a[l++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;l<r.t;)p+=r[l],a[l++]=p&this.DM,p>>=this.DB;p+=r.s}a.s=p<0?-1:0,p>0?a[l++]=p:p<-1&&(a[l++]=this.DV+p),a.t=l,a.clamp()}function ar(r){var a=d();return this.addTo(r,a),a}function I(r){var a=d();return this.subTo(r,a),a}function Mi(r){var a=d();return this.multiplyTo(r,a),a}function Re(){var r=d();return this.squareTo(r),r}function Er(r){var a=d();return this.divRemTo(r,a,null),a}function Tr(r){var a=d();return this.divRemTo(r,null,a),a}function An(r){var a=d(),l=d();return this.divRemTo(r,a,l),new Array(a,l)}function Vn(r){this[this.t]=this.am(0,r-1,this,0,0,this.t),++this.t,this.clamp()}function Ar(r,a){if(r!=0){for(;this.t<=a;)this[this.t++]=0;for(this[a]+=r;this[a]>=this.DV;)this[a]-=this.DV,++a>=this.t&&(this[this.t++]=0),++this[a]}}function ci(){}function bi(r){return r}function Pr(r,a,l){r.multiplyTo(a,l)}function Oi(r,a){r.squareTo(a)}ci.prototype.convert=bi,ci.prototype.revert=bi,ci.prototype.mulTo=Pr,ci.prototype.sqrTo=Oi;function Cr(r){return this.exp(r,new ci)}function Ir(r,a,l){var p=Math.min(this.t+r.t,a);for(l.s=0,l.t=p;p>0;)l[--p]=0;var _;for(_=l.t-this.t;p<_;++p)l[p+this.t]=this.am(0,r[p],l,p,0,this.t);for(_=Math.min(r.t,a);p<_;++p)this.am(0,r[p],l,p,0,a-p);l.clamp()}function Ls(r,a,l){--a;var p=l.t=this.t+r.t-a;for(l.s=0;--p>=0;)l[p]=0;for(p=Math.max(a-this.t,0);p<r.t;++p)l[this.t+p-a]=this.am(a-p,r[p],l,0,0,this.t+p-a);l.clamp(),l.drShiftTo(1,l)}function hi(r){this.r2=d(),this.q3=d(),f.ONE.dlShiftTo(2*r.t,this.r2),this.mu=this.r2.divide(r),this.m=r}function Ns(r){if(r.s<0||r.t>2*this.m.t)return r.mod(this.m);if(r.compareTo(this.m)<0)return r;var a=d();return r.copyTo(a),this.reduce(a),a}function Ds(r){return r}function Rr(r){for(r.drShiftTo(this.m.t-1,this.r2),r.t>this.m.t+1&&(r.t=this.m.t+1,r.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);r.compareTo(this.r2)<0;)r.dAddOffset(1,this.m.t+1);for(r.subTo(this.r2,r);r.compareTo(this.m)>=0;)r.subTo(this.m,r)}function L(r,a){r.squareTo(a),this.reduce(a)}function tt(r,a,l){r.multiplyTo(a,l),this.reduce(l)}hi.prototype.convert=Ns,hi.prototype.revert=Ds,hi.prototype.reduce=Rr,hi.prototype.mulTo=tt,hi.prototype.sqrTo=L;function gt(r,a){var l=r.bitLength(),p,_=U(1),A;if(l<=0)return _;l<18?p=1:l<48?p=3:l<144?p=4:l<768?p=5:p=6,l<8?A=new ue(a):a.isEven()?A=new hi(a):A=new Ot(a);var D=new Array,$=3,J=p-1,lt=(1<<p)-1;if(D[1]=A.convert(this),p>1){var Et=d();for(A.sqrTo(D[1],Et);$<=lt;)D[$]=d(),A.mulTo(Et,D[$-2],D[$]),$+=2}var bt=r.t-1,Pt,re=!0,_e=d(),we;for(l=ct(r[bt])-1;bt>=0;){for(l>=J?Pt=r[bt]>>l-J&lt:(Pt=(r[bt]&(1<<l+1)-1)<<J-l,bt>0&&(Pt|=r[bt-1]>>this.DB+l-J)),$=p;(Pt&1)==0;)Pt>>=1,--$;if((l-=$)<0&&(l+=this.DB,--bt),re)D[Pt].copyTo(_),re=!1;else{for(;$>1;)A.sqrTo(_,_e),A.sqrTo(_e,_),$-=2;$>0?A.sqrTo(_,_e):(we=_,_=_e,_e=we),A.mulTo(_e,D[Pt],_)}for(;bt>=0&&(r[bt]&1<<l)==0;)A.sqrTo(_,_e),we=_,_=_e,_e=we,--l<0&&(l=this.DB-1,--bt)}return A.revert(_)}function ut(r){var a=this.s<0?this.negate():this.clone(),l=r.s<0?r.negate():r.clone();if(a.compareTo(l)<0){var p=a;a=l,l=p}var _=a.getLowestSetBit(),A=l.getLowestSetBit();if(A<0)return a;for(_<A&&(A=_),A>0&&(a.rShiftTo(A,a),l.rShiftTo(A,l));a.signum()>0;)(_=a.getLowestSetBit())>0&&a.rShiftTo(_,a),(_=l.getLowestSetBit())>0&&l.rShiftTo(_,l),a.compareTo(l)>=0?(a.subTo(l,a),a.rShiftTo(1,a)):(l.subTo(a,l),l.rShiftTo(1,l));return A>0&&l.lShiftTo(A,l),l}function ft(r){if(r<=0)return 0;var a=this.DV%r,l=this.s<0?r-1:0;if(this.t>0)if(a==0)l=this[0]%r;else for(var p=this.t-1;p>=0;--p)l=(a*l+this[p])%r;return l}function Gt(r){var a=r.isEven();if(this.isEven()&&a||r.signum()==0)return f.ZERO;for(var l=r.clone(),p=this.clone(),_=U(1),A=U(0),D=U(0),$=U(1);l.signum()!=0;){for(;l.isEven();)l.rShiftTo(1,l),a?((!_.isEven()||!A.isEven())&&(_.addTo(this,_),A.subTo(r,A)),_.rShiftTo(1,_)):A.isEven()||A.subTo(r,A),A.rShiftTo(1,A);for(;p.isEven();)p.rShiftTo(1,p),a?((!D.isEven()||!$.isEven())&&(D.addTo(this,D),$.subTo(r,$)),D.rShiftTo(1,D)):$.isEven()||$.subTo(r,$),$.rShiftTo(1,$);l.compareTo(p)>=0?(l.subTo(p,l),a&&_.subTo(D,_),A.subTo($,A)):(p.subTo(l,p),a&&D.subTo(_,D),$.subTo(A,$))}if(p.compareTo(f.ONE)!=0)return f.ZERO;if($.compareTo(r)>=0)return $.subtract(r);if($.signum()<0)$.addTo(r,$);else return $;return $.signum()<0?$.add(r):$}var Nt=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],Ht=(1<<26)/Nt[Nt.length-1];function Qt(r){var a,l=this.abs();if(l.t==1&&l[0]<=Nt[Nt.length-1]){for(a=0;a<Nt.length;++a)if(l[0]==Nt[a])return!0;return!1}if(l.isEven())return!1;for(a=1;a<Nt.length;){for(var p=Nt[a],_=a+1;_<Nt.length&&p<Ht;)p*=Nt[_++];for(p=l.modInt(p);a<_;)if(p%Nt[a++]==0)return!1}return l.millerRabin(r)}function ie(r){var a=this.subtract(f.ONE),l=a.getLowestSetBit();if(l<=0)return!1;var p=a.shiftRight(l);r=r+1>>1,r>Nt.length&&(r=Nt.length);for(var _=d(),A=0;A<r;++A){_.fromInt(Nt[Math.floor(Math.random()*Nt.length)]);var D=_.modPow(p,this);if(D.compareTo(f.ONE)!=0&&D.compareTo(a)!=0){for(var $=1;$++<l&&D.compareTo(a)!=0;)if(D=D.modPowInt(2,this),D.compareTo(f.ONE)==0)return!1;if(D.compareTo(a)!=0)return!1}}return!0}f.prototype.chunkSize=It,f.prototype.toRadix=O,f.prototype.fromRadix=T,f.prototype.fromNumber=H,f.prototype.bitwiseTo=mt,f.prototype.changeBit=Fe,f.prototype.addTo=Rs,f.prototype.dMultiply=Vn,f.prototype.dAddOffset=Ar,f.prototype.multiplyLowerTo=Ir,f.prototype.multiplyUpperTo=Ls,f.prototype.modInt=ft,f.prototype.millerRabin=ie,f.prototype.clone=K,f.prototype.intValue=ht,f.prototype.byteValue=at,f.prototype.shortValue=k,f.prototype.signum=Kt,f.prototype.toByteArray=it,f.prototype.equals=pt,f.prototype.min=Ct,f.prototype.max=Ft,f.prototype.and=Ut,f.prototype.or=Vt,f.prototype.xor=ne,f.prototype.andNot=ge,f.prototype.not=rt,f.prototype.shiftLeft=Bt,f.prototype.shiftRight=Mt,f.prototype.getLowestSetBit=Wt,f.prototype.bitCount=Rt,f.prototype.testBit=ee,f.prototype.setBit=Le,f.prototype.clearBit=xn,f.prototype.flipBit=Tn,f.prototype.add=ar,f.prototype.subtract=I,f.prototype.multiply=Mi,f.prototype.divide=Er,f.prototype.remainder=Tr,f.prototype.divideAndRemainder=An,f.prototype.modPow=gt,f.prototype.modInverse=Gt,f.prototype.pow=Cr,f.prototype.gcd=ut,f.prototype.isProbablePrime=Qt,f.prototype.square=Re;var zt=f;zt.prototype.IsNegative=function(){return this.compareTo(zt.ZERO)==-1},zt.op_Equality=function(r,a){return r.compareTo(a)==0},zt.op_Inequality=function(r,a){return r.compareTo(a)!=0},zt.op_GreaterThan=function(r,a){return r.compareTo(a)>0},zt.op_LessThan=function(r,a){return r.compareTo(a)<0},zt.op_Addition=function(r,a){return new zt(r,void 0,void 0).add(new zt(a,void 0,void 0))},zt.op_Subtraction=function(r,a){return new zt(r,void 0,void 0).subtract(new zt(a,void 0,void 0))},zt.Int128Mul=function(r,a){return new zt(r,void 0,void 0).multiply(new zt(a,void 0,void 0))},zt.op_Division=function(r,a){return r.divide(a)},zt.prototype.ToDouble=function(){return parseFloat(this.toString())};var de=function(r,a){var l;if(typeof Object.getOwnPropertyNames>"u"){for(l in a.prototype)(typeof r.prototype[l]>"u"||r.prototype[l]===Object.prototype[l])&&(r.prototype[l]=a.prototype[l]);for(l in a)typeof r[l]>"u"&&(r[l]=a[l]);r.$baseCtor=a}else{for(var p=Object.getOwnPropertyNames(a.prototype),_=0;_<p.length;_++)typeof Object.getOwnPropertyDescriptor(r.prototype,p[_])>"u"&&Object.defineProperty(r.prototype,p[_],Object.getOwnPropertyDescriptor(a.prototype,p[_]));for(l in a)typeof r[l]>"u"&&(r[l]=a[l]);r.$baseCtor=a}};n.Path=function(){return[]},n.Path.prototype.push=Array.prototype.push,n.Paths=function(){return[]},n.Paths.prototype.push=Array.prototype.push,n.DoublePoint=function(){var r=arguments;this.X=0,this.Y=0,r.length===1?(this.X=r[0].X,this.Y=r[0].Y):r.length===2&&(this.X=r[0],this.Y=r[1])},n.DoublePoint0=function(){this.X=0,this.Y=0},n.DoublePoint0.prototype=n.DoublePoint.prototype,n.DoublePoint1=function(r){this.X=r.X,this.Y=r.Y},n.DoublePoint1.prototype=n.DoublePoint.prototype,n.DoublePoint2=function(r,a){this.X=r,this.Y=a},n.DoublePoint2.prototype=n.DoublePoint.prototype,n.PolyNode=function(){this.m_Parent=null,this.m_polygon=new n.Path,this.m_Index=0,this.m_jointype=0,this.m_endtype=0,this.m_Childs=[],this.IsOpen=!1},n.PolyNode.prototype.IsHoleNode=function(){for(var r=!0,a=this.m_Parent;a!==null;)r=!r,a=a.m_Parent;return r},n.PolyNode.prototype.ChildCount=function(){return this.m_Childs.length},n.PolyNode.prototype.Contour=function(){return this.m_polygon},n.PolyNode.prototype.AddChild=function(r){var a=this.m_Childs.length;this.m_Childs.push(r),r.m_Parent=this,r.m_Index=a},n.PolyNode.prototype.GetNext=function(){return this.m_Childs.length>0?this.m_Childs[0]:this.GetNextSiblingUp()},n.PolyNode.prototype.GetNextSiblingUp=function(){return this.m_Parent===null?null:this.m_Index===this.m_Parent.m_Childs.length-1?this.m_Parent.GetNextSiblingUp():this.m_Parent.m_Childs[this.m_Index+1]},n.PolyNode.prototype.Childs=function(){return this.m_Childs},n.PolyNode.prototype.Parent=function(){return this.m_Parent},n.PolyNode.prototype.IsHole=function(){return this.IsHoleNode()},n.PolyTree=function(){this.m_AllPolys=[],n.PolyNode.call(this)},n.PolyTree.prototype.Clear=function(){for(var r=0,a=this.m_AllPolys.length;r<a;r++)this.m_AllPolys[r]=null;this.m_AllPolys.length=0,this.m_Childs.length=0},n.PolyTree.prototype.GetFirst=function(){return this.m_Childs.length>0?this.m_Childs[0]:null},n.PolyTree.prototype.Total=function(){var r=this.m_AllPolys.length;return r>0&&this.m_Childs[0]!==this.m_AllPolys[0]&&r--,r},de(n.PolyTree,n.PolyNode),n.Math_Abs_Int64=n.Math_Abs_Int32=n.Math_Abs_Double=function(r){return Math.abs(r)},n.Math_Max_Int32_Int32=function(r,a){return Math.max(r,a)},s.msie||s.opera||s.safari?n.Cast_Int32=function(r){return r|0}:n.Cast_Int32=function(r){return~~r},typeof Number.toInteger>"u"&&(Number.toInteger=null),s.chrome?n.Cast_Int64=function(r){return r<-2147483648||r>2147483647?r<0?Math.ceil(r):Math.floor(r):~~r}:s.firefox&&typeof Number.toInteger=="function"?n.Cast_Int64=function(r){return Number.toInteger(r)}:s.msie7||s.msie8?n.Cast_Int64=function(r){return parseInt(r,10)}:s.msie?n.Cast_Int64=function(r){return r<-2147483648||r>2147483647?r<0?Math.ceil(r):Math.floor(r):r|0}:n.Cast_Int64=function(r){return r<0?Math.ceil(r):Math.floor(r)},n.Clear=function(r){r.length=0},n.PI=3.141592653589793,n.PI2=2*3.141592653589793,n.IntPoint=function(){var r=arguments,a=r.length;if(this.X=0,this.Y=0,n.use_xyz)if(this.Z=0,a===3)this.X=r[0],this.Y=r[1],this.Z=r[2];else if(a===2)this.X=r[0],this.Y=r[1],this.Z=0;else if(a===1)if(r[0]instanceof n.DoublePoint){var l=r[0];this.X=n.Clipper.Round(l.X),this.Y=n.Clipper.Round(l.Y),this.Z=0}else{var p=r[0];typeof p.Z>"u"&&(p.Z=0),this.X=p.X,this.Y=p.Y,this.Z=p.Z}else this.X=0,this.Y=0,this.Z=0;else if(a===2)this.X=r[0],this.Y=r[1];else if(a===1)if(r[0]instanceof n.DoublePoint){var l=r[0];this.X=n.Clipper.Round(l.X),this.Y=n.Clipper.Round(l.Y)}else{var p=r[0];this.X=p.X,this.Y=p.Y}else this.X=0,this.Y=0},n.IntPoint.op_Equality=function(r,a){return r.X===a.X&&r.Y===a.Y},n.IntPoint.op_Inequality=function(r,a){return r.X!==a.X||r.Y!==a.Y},n.IntPoint0=function(){this.X=0,this.Y=0,n.use_xyz&&(this.Z=0)},n.IntPoint0.prototype=n.IntPoint.prototype,n.IntPoint1=function(r){this.X=r.X,this.Y=r.Y,n.use_xyz&&(typeof r.Z>"u"?this.Z=0:this.Z=r.Z)},n.IntPoint1.prototype=n.IntPoint.prototype,n.IntPoint1dp=function(r){this.X=n.Clipper.Round(r.X),this.Y=n.Clipper.Round(r.Y),n.use_xyz&&(this.Z=0)},n.IntPoint1dp.prototype=n.IntPoint.prototype,n.IntPoint2=function(r,a,l){this.X=r,this.Y=a,n.use_xyz&&(typeof l>"u"?this.Z=0:this.Z=l)},n.IntPoint2.prototype=n.IntPoint.prototype,n.IntRect=function(){var r=arguments,a=r.length;if(a===4)this.left=r[0],this.top=r[1],this.right=r[2],this.bottom=r[3];else if(a===1){var l=r[0];this.left=l.left,this.top=l.top,this.right=l.right,this.bottom=l.bottom}else this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0=function(){this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0.prototype=n.IntRect.prototype,n.IntRect1=function(r){this.left=r.left,this.top=r.top,this.right=r.right,this.bottom=r.bottom},n.IntRect1.prototype=n.IntRect.prototype,n.IntRect4=function(r,a,l,p){this.left=r,this.top=a,this.right=l,this.bottom=p},n.IntRect4.prototype=n.IntRect.prototype,n.ClipType={ctIntersection:0,ctUnion:1,ctDifference:2,ctXor:3},n.PolyType={ptSubject:0,ptClip:1},n.PolyFillType={pftEvenOdd:0,pftNonZero:1,pftPositive:2,pftNegative:3},n.JoinType={jtSquare:0,jtRound:1,jtMiter:2},n.EndType={etOpenSquare:0,etOpenRound:1,etOpenButt:2,etClosedLine:3,etClosedPolygon:4},n.EdgeSide={esLeft:0,esRight:1},n.Direction={dRightToLeft:0,dLeftToRight:1},n.TEdge=function(){this.Bot=new n.IntPoint0,this.Curr=new n.IntPoint0,this.Top=new n.IntPoint0,this.Delta=new n.IntPoint0,this.Dx=0,this.PolyTyp=n.PolyType.ptSubject,this.Side=n.EdgeSide.esLeft,this.WindDelta=0,this.WindCnt=0,this.WindCnt2=0,this.OutIdx=0,this.Next=null,this.Prev=null,this.NextInLML=null,this.NextInAEL=null,this.PrevInAEL=null,this.NextInSEL=null,this.PrevInSEL=null},n.IntersectNode=function(){this.Edge1=null,this.Edge2=null,this.Pt=new n.IntPoint0},n.MyIntersectNodeSort=function(){},n.MyIntersectNodeSort.Compare=function(r,a){var l=a.Pt.Y-r.Pt.Y;return l>0?1:l<0?-1:0},n.LocalMinima=function(){this.Y=0,this.LeftBound=null,this.RightBound=null,this.Next=null},n.Scanbeam=function(){this.Y=0,this.Next=null},n.Maxima=function(){this.X=0,this.Next=null,this.Prev=null},n.OutRec=function(){this.Idx=0,this.IsHole=!1,this.IsOpen=!1,this.FirstLeft=null,this.Pts=null,this.BottomPt=null,this.PolyNode=null},n.OutPt=function(){this.Idx=0,this.Pt=new n.IntPoint0,this.Next=null,this.Prev=null},n.Join=function(){this.OutPt1=null,this.OutPt2=null,this.OffPt=new n.IntPoint0},n.ClipperBase=function(){this.m_MinimaList=null,this.m_CurrentLM=null,this.m_edges=new Array,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1,this.PreserveCollinear=!1,this.m_Scanbeam=null,this.m_PolyOuts=null,this.m_ActiveEdges=null},n.ClipperBase.horizontal=-9007199254740992,n.ClipperBase.Skip=-2,n.ClipperBase.Unassigned=-1,n.ClipperBase.tolerance=1e-20,n.ClipperBase.loRange=47453132,n.ClipperBase.hiRange=0xfffffffffffff,n.ClipperBase.near_zero=function(r){return r>-n.ClipperBase.tolerance&&r<n.ClipperBase.tolerance},n.ClipperBase.IsHorizontal=function(r){return r.Delta.Y===0},n.ClipperBase.prototype.PointIsVertex=function(r,a){var l=a;do{if(n.IntPoint.op_Equality(l.Pt,r))return!0;l=l.Next}while(l!==a);return!1},n.ClipperBase.prototype.PointOnLineSegment=function(r,a,l,p){return p?r.X===a.X&&r.Y===a.Y||r.X===l.X&&r.Y===l.Y||r.X>a.X==r.X<l.X&&r.Y>a.Y==r.Y<l.Y&&zt.op_Equality(zt.Int128Mul(r.X-a.X,l.Y-a.Y),zt.Int128Mul(l.X-a.X,r.Y-a.Y)):r.X===a.X&&r.Y===a.Y||r.X===l.X&&r.Y===l.Y||r.X>a.X==r.X<l.X&&r.Y>a.Y==r.Y<l.Y&&(r.X-a.X)*(l.Y-a.Y)===(l.X-a.X)*(r.Y-a.Y)},n.ClipperBase.prototype.PointOnPolygon=function(r,a,l){for(var p=a;;){if(this.PointOnLineSegment(r,p.Pt,p.Next.Pt,l))return!0;if(p=p.Next,p===a)break}return!1},n.ClipperBase.prototype.SlopesEqual=n.ClipperBase.SlopesEqual=function(){var r=arguments,a=r.length,l,p,_,A,D,$,J;return a===3?(l=r[0],p=r[1],J=r[2],J?zt.op_Equality(zt.Int128Mul(l.Delta.Y,p.Delta.X),zt.Int128Mul(l.Delta.X,p.Delta.Y)):n.Cast_Int64(l.Delta.Y*p.Delta.X)===n.Cast_Int64(l.Delta.X*p.Delta.Y)):a===4?(_=r[0],A=r[1],D=r[2],J=r[3],J?zt.op_Equality(zt.Int128Mul(_.Y-A.Y,A.X-D.X),zt.Int128Mul(_.X-A.X,A.Y-D.Y)):n.Cast_Int64((_.Y-A.Y)*(A.X-D.X))-n.Cast_Int64((_.X-A.X)*(A.Y-D.Y))===0):(_=r[0],A=r[1],D=r[2],$=r[3],J=r[4],J?zt.op_Equality(zt.Int128Mul(_.Y-A.Y,D.X-$.X),zt.Int128Mul(_.X-A.X,D.Y-$.Y)):n.Cast_Int64((_.Y-A.Y)*(D.X-$.X))-n.Cast_Int64((_.X-A.X)*(D.Y-$.Y))===0)},n.ClipperBase.SlopesEqual3=function(r,a,l){return l?zt.op_Equality(zt.Int128Mul(r.Delta.Y,a.Delta.X),zt.Int128Mul(r.Delta.X,a.Delta.Y)):n.Cast_Int64(r.Delta.Y*a.Delta.X)===n.Cast_Int64(r.Delta.X*a.Delta.Y)},n.ClipperBase.SlopesEqual4=function(r,a,l,p){return p?zt.op_Equality(zt.Int128Mul(r.Y-a.Y,a.X-l.X),zt.Int128Mul(r.X-a.X,a.Y-l.Y)):n.Cast_Int64((r.Y-a.Y)*(a.X-l.X))-n.Cast_Int64((r.X-a.X)*(a.Y-l.Y))===0},n.ClipperBase.SlopesEqual5=function(r,a,l,p,_){return _?zt.op_Equality(zt.Int128Mul(r.Y-a.Y,l.X-p.X),zt.Int128Mul(r.X-a.X,l.Y-p.Y)):n.Cast_Int64((r.Y-a.Y)*(l.X-p.X))-n.Cast_Int64((r.X-a.X)*(l.Y-p.Y))===0},n.ClipperBase.prototype.Clear=function(){this.DisposeLocalMinimaList();for(var r=0,a=this.m_edges.length;r<a;++r){for(var l=0,p=this.m_edges[r].length;l<p;++l)this.m_edges[r][l]=null;n.Clear(this.m_edges[r])}n.Clear(this.m_edges),this.m_UseFullRange=!1,this.m_HasOpenPaths=!1},n.ClipperBase.prototype.DisposeLocalMinimaList=function(){for(;this.m_MinimaList!==null;){var r=this.m_MinimaList.Next;this.m_MinimaList=null,this.m_MinimaList=r}this.m_CurrentLM=null},n.ClipperBase.prototype.RangeTest=function(r,a){a.Value?(r.X>n.ClipperBase.hiRange||r.Y>n.ClipperBase.hiRange||-r.X>n.ClipperBase.hiRange||-r.Y>n.ClipperBase.hiRange)&&n.Error("Coordinate outside allowed range in RangeTest()."):(r.X>n.ClipperBase.loRange||r.Y>n.ClipperBase.loRange||-r.X>n.ClipperBase.loRange||-r.Y>n.ClipperBase.loRange)&&(a.Value=!0,this.RangeTest(r,a))},n.ClipperBase.prototype.InitEdge=function(r,a,l,p){r.Next=a,r.Prev=l,r.Curr.X=p.X,r.Curr.Y=p.Y,n.use_xyz&&(r.Curr.Z=p.Z),r.OutIdx=-1},n.ClipperBase.prototype.InitEdge2=function(r,a){r.Curr.Y>=r.Next.Curr.Y?(r.Bot.X=r.Curr.X,r.Bot.Y=r.Curr.Y,n.use_xyz&&(r.Bot.Z=r.Curr.Z),r.Top.X=r.Next.Curr.X,r.Top.Y=r.Next.Curr.Y,n.use_xyz&&(r.Top.Z=r.Next.Curr.Z)):(r.Top.X=r.Curr.X,r.Top.Y=r.Curr.Y,n.use_xyz&&(r.Top.Z=r.Curr.Z),r.Bot.X=r.Next.Curr.X,r.Bot.Y=r.Next.Curr.Y,n.use_xyz&&(r.Bot.Z=r.Next.Curr.Z)),this.SetDx(r),r.PolyTyp=a},n.ClipperBase.prototype.FindNextLocMin=function(r){for(var a;;){for(;n.IntPoint.op_Inequality(r.Bot,r.Prev.Bot)||n.IntPoint.op_Equality(r.Curr,r.Top);)r=r.Next;if(r.Dx!==n.ClipperBase.horizontal&&r.Prev.Dx!==n.ClipperBase.horizontal)break;for(;r.Prev.Dx===n.ClipperBase.horizontal;)r=r.Prev;for(a=r;r.Dx===n.ClipperBase.horizontal;)r=r.Next;if(r.Top.Y!==r.Prev.Bot.Y){a.Prev.Bot.X<r.Bot.X&&(r=a);break}}return r},n.ClipperBase.prototype.ProcessBound=function(r,a){var l,p=r,_;if(p.OutIdx===n.ClipperBase.Skip){if(r=p,a){for(;r.Top.Y===r.Next.Bot.Y;)r=r.Next;for(;r!==p&&r.Dx===n.ClipperBase.horizontal;)r=r.Prev}else{for(;r.Top.Y===r.Prev.Bot.Y;)r=r.Prev;for(;r!==p&&r.Dx===n.ClipperBase.horizontal;)r=r.Next}if(r===p)a?p=r.Next:p=r.Prev;else{a?r=p.Next:r=p.Prev;var A=new n.LocalMinima;A.Next=null,A.Y=r.Bot.Y,A.LeftBound=null,A.RightBound=r,r.WindDelta=0,p=this.ProcessBound(r,a),this.InsertLocalMinima(A)}return p}if(r.Dx===n.ClipperBase.horizontal&&(a?l=r.Prev:l=r.Next,l.Dx===n.ClipperBase.horizontal?l.Bot.X!==r.Bot.X&&l.Top.X!==r.Bot.X&&this.ReverseHorizontal(r):l.Bot.X!==r.Bot.X&&this.ReverseHorizontal(r)),l=r,a){for(;p.Top.Y===p.Next.Bot.Y&&p.Next.OutIdx!==n.ClipperBase.Skip;)p=p.Next;if(p.Dx===n.ClipperBase.horizontal&&p.Next.OutIdx!==n.ClipperBase.Skip){for(_=p;_.Prev.Dx===n.ClipperBase.horizontal;)_=_.Prev;_.Prev.Top.X>p.Next.Top.X&&(p=_.Prev)}for(;r!==p;)r.NextInLML=r.Next,r.Dx===n.ClipperBase.horizontal&&r!==l&&r.Bot.X!==r.Prev.Top.X&&this.ReverseHorizontal(r),r=r.Next;r.Dx===n.ClipperBase.horizontal&&r!==l&&r.Bot.X!==r.Prev.Top.X&&this.ReverseHorizontal(r),p=p.Next}else{for(;p.Top.Y===p.Prev.Bot.Y&&p.Prev.OutIdx!==n.ClipperBase.Skip;)p=p.Prev;if(p.Dx===n.ClipperBase.horizontal&&p.Prev.OutIdx!==n.ClipperBase.Skip){for(_=p;_.Next.Dx===n.ClipperBase.horizontal;)_=_.Next;(_.Next.Top.X===p.Prev.Top.X||_.Next.Top.X>p.Prev.Top.X)&&(p=_.Next)}for(;r!==p;)r.NextInLML=r.Prev,r.Dx===n.ClipperBase.horizontal&&r!==l&&r.Bot.X!==r.Next.Top.X&&this.ReverseHorizontal(r),r=r.Prev;r.Dx===n.ClipperBase.horizontal&&r!==l&&r.Bot.X!==r.Next.Top.X&&this.ReverseHorizontal(r),p=p.Prev}return p},n.ClipperBase.prototype.AddPath=function(r,a,l){n.use_lines?!l&&a===n.PolyType.ptClip&&n.Error("AddPath: Open paths must be subject."):l||n.Error("AddPath: Open paths have been disabled.");var p=r.length-1;if(l)for(;p>0&&n.IntPoint.op_Equality(r[p],r[0]);)--p;for(;p>0&&n.IntPoint.op_Equality(r[p],r[p-1]);)--p;if(l&&p<2||!l&&p<1)return!1;for(var _=new Array,A=0;A<=p;A++)_.push(new n.TEdge);var D=!0;_[1].Curr.X=r[1].X,_[1].Curr.Y=r[1].Y,n.use_xyz&&(_[1].Curr.Z=r[1].Z);var $={Value:this.m_UseFullRange};this.RangeTest(r[0],$),this.m_UseFullRange=$.Value,$.Value=this.m_UseFullRange,this.RangeTest(r[p],$),this.m_UseFullRange=$.Value,this.InitEdge(_[0],_[1],_[p],r[0]),this.InitEdge(_[p],_[0],_[p-1],r[p]);for(var A=p-1;A>=1;--A)$.Value=this.m_UseFullRange,this.RangeTest(r[A],$),this.m_UseFullRange=$.Value,this.InitEdge(_[A],_[A+1],_[A-1],r[A]);for(var J=_[0],lt=J,Et=J;;){if(lt.Curr===lt.Next.Curr&&(l||lt.Next!==J)){if(lt===lt.Next)break;lt===J&&(J=lt.Next),lt=this.RemoveEdge(lt),Et=lt;continue}if(lt.Prev===lt.Next)break;if(l&&n.ClipperBase.SlopesEqual4(lt.Prev.Curr,lt.Curr,lt.Next.Curr,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3(lt.Prev.Curr,lt.Curr,lt.Next.Curr))){lt===J&&(J=lt.Next),lt=this.RemoveEdge(lt),lt=lt.Prev,Et=lt;continue}if(lt=lt.Next,lt===Et||!l&&lt.Next===J)break}if(!l&&lt===lt.Next||l&&lt.Prev===lt.Next)return!1;l||(this.m_HasOpenPaths=!0,J.Prev.OutIdx=n.ClipperBase.Skip),lt=J;do this.InitEdge2(lt,a),lt=lt.Next,D&&lt.Curr.Y!==J.Curr.Y&&(D=!1);while(lt!==J);if(D){if(l)return!1;lt.Prev.OutIdx=n.ClipperBase.Skip;var bt=new n.LocalMinima;for(bt.Next=null,bt.Y=lt.Bot.Y,bt.LeftBound=null,bt.RightBound=lt,bt.RightBound.Side=n.EdgeSide.esRight,bt.RightBound.WindDelta=0;lt.Bot.X!==lt.Prev.Top.X&&this.ReverseHorizontal(lt),lt.Next.OutIdx!==n.ClipperBase.Skip;)lt.NextInLML=lt.Next,lt=lt.Next;return this.InsertLocalMinima(bt),this.m_edges.push(_),!0}this.m_edges.push(_);var Pt,re=null;for(n.IntPoint.op_Equality(lt.Prev.Bot,lt.Prev.Top)&&(lt=lt.Next);lt=this.FindNextLocMin(lt),lt!==re;){re===null&&(re=lt);var bt=new n.LocalMinima;bt.Next=null,bt.Y=lt.Bot.Y,lt.Dx<lt.Prev.Dx?(bt.LeftBound=lt.Prev,bt.RightBound=lt,Pt=!1):(bt.LeftBound=lt,bt.RightBound=lt.Prev,Pt=!0),bt.LeftBound.Side=n.EdgeSide.esLeft,bt.RightBound.Side=n.EdgeSide.esRight,l?bt.LeftBound.Next===bt.RightBound?bt.LeftBound.WindDelta=-1:bt.LeftBound.WindDelta=1:bt.LeftBound.WindDelta=0,bt.RightBound.WindDelta=-bt.LeftBound.WindDelta,lt=this.ProcessBound(bt.LeftBound,Pt),lt.OutIdx===n.ClipperBase.Skip&&(lt=this.ProcessBound(lt,Pt));var _e=this.ProcessBound(bt.RightBound,!Pt);_e.OutIdx===n.ClipperBase.Skip&&(_e=this.ProcessBound(_e,!Pt)),bt.LeftBound.OutIdx===n.ClipperBase.Skip?bt.LeftBound=null:bt.RightBound.OutIdx===n.ClipperBase.Skip&&(bt.RightBound=null),this.InsertLocalMinima(bt),Pt||(lt=_e)}return!0},n.ClipperBase.prototype.AddPaths=function(r,a,l){for(var p=!1,_=0,A=r.length;_<A;++_)this.AddPath(r[_],a,l)&&(p=!0);return p},n.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3=function(r,a,l){return n.IntPoint.op_Equality(r,l)||n.IntPoint.op_Equality(r,a)||n.IntPoint.op_Equality(l,a)?!1:r.X!==l.X?a.X>r.X==a.X<l.X:a.Y>r.Y==a.Y<l.Y},n.ClipperBase.prototype.RemoveEdge=function(r){r.Prev.Next=r.Next,r.Next.Prev=r.Prev;var a=r.Next;return r.Prev=null,a},n.ClipperBase.prototype.SetDx=function(r){r.Delta.X=r.Top.X-r.Bot.X,r.Delta.Y=r.Top.Y-r.Bot.Y,r.Delta.Y===0?r.Dx=n.ClipperBase.horizontal:r.Dx=r.Delta.X/r.Delta.Y},n.ClipperBase.prototype.InsertLocalMinima=function(r){if(this.m_MinimaList===null)this.m_MinimaList=r;else if(r.Y>=this.m_MinimaList.Y)r.Next=this.m_MinimaList,this.m_MinimaList=r;else{for(var a=this.m_MinimaList;a.Next!==null&&r.Y<a.Next.Y;)a=a.Next;r.Next=a.Next,a.Next=r}},n.ClipperBase.prototype.PopLocalMinima=function(r,a){return a.v=this.m_CurrentLM,this.m_CurrentLM!==null&&this.m_CurrentLM.Y===r?(this.m_CurrentLM=this.m_CurrentLM.Next,!0):!1},n.ClipperBase.prototype.ReverseHorizontal=function(r){var a=r.Top.X;r.Top.X=r.Bot.X,r.Bot.X=a,n.use_xyz&&(a=r.Top.Z,r.Top.Z=r.Bot.Z,r.Bot.Z=a)},n.ClipperBase.prototype.Reset=function(){if(this.m_CurrentLM=this.m_MinimaList,this.m_CurrentLM!==null){this.m_Scanbeam=null;for(var r=this.m_MinimaList;r!==null;){this.InsertScanbeam(r.Y);var a=r.LeftBound;a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,n.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=n.ClipperBase.Unassigned),a=r.RightBound,a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,n.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=n.ClipperBase.Unassigned),r=r.Next}this.m_ActiveEdges=null}},n.ClipperBase.prototype.InsertScanbeam=function(r){if(this.m_Scanbeam===null)this.m_Scanbeam=new n.Scanbeam,this.m_Scanbeam.Next=null,this.m_Scanbeam.Y=r;else if(r>this.m_Scanbeam.Y){var a=new n.Scanbeam;a.Y=r,a.Next=this.m_Scanbeam,this.m_Scanbeam=a}else{for(var l=this.m_Scanbeam;l.Next!==null&&r<=l.Next.Y;)l=l.Next;if(r===l.Y)return;var p=new n.Scanbeam;p.Y=r,p.Next=l.Next,l.Next=p}},n.ClipperBase.prototype.PopScanbeam=function(r){return this.m_Scanbeam===null?(r.v=0,!1):(r.v=this.m_Scanbeam.Y,this.m_Scanbeam=this.m_Scanbeam.Next,!0)},n.ClipperBase.prototype.LocalMinimaPending=function(){return this.m_CurrentLM!==null},n.ClipperBase.prototype.CreateOutRec=function(){var r=new n.OutRec;return r.Idx=n.ClipperBase.Unassigned,r.IsHole=!1,r.IsOpen=!1,r.FirstLeft=null,r.Pts=null,r.BottomPt=null,r.PolyNode=null,this.m_PolyOuts.push(r),r.Idx=this.m_PolyOuts.length-1,r},n.ClipperBase.prototype.DisposeOutRec=function(r){var a=this.m_PolyOuts[r];a.Pts=null,a=null,this.m_PolyOuts[r]=null},n.ClipperBase.prototype.UpdateEdgeIntoAEL=function(r){r.NextInLML===null&&n.Error("UpdateEdgeIntoAEL: invalid call");var a=r.PrevInAEL,l=r.NextInAEL;return r.NextInLML.OutIdx=r.OutIdx,a!==null?a.NextInAEL=r.NextInLML:this.m_ActiveEdges=r.NextInLML,l!==null&&(l.PrevInAEL=r.NextInLML),r.NextInLML.Side=r.Side,r.NextInLML.WindDelta=r.WindDelta,r.NextInLML.WindCnt=r.WindCnt,r.NextInLML.WindCnt2=r.WindCnt2,r=r.NextInLML,r.Curr.X=r.Bot.X,r.Curr.Y=r.Bot.Y,r.PrevInAEL=a,r.NextInAEL=l,n.ClipperBase.IsHorizontal(r)||this.InsertScanbeam(r.Top.Y),r},n.ClipperBase.prototype.SwapPositionsInAEL=function(r,a){if(!(r.NextInAEL===r.PrevInAEL||a.NextInAEL===a.PrevInAEL)){if(r.NextInAEL===a){var l=a.NextInAEL;l!==null&&(l.PrevInAEL=r);var p=r.PrevInAEL;p!==null&&(p.NextInAEL=a),a.PrevInAEL=p,a.NextInAEL=r,r.PrevInAEL=a,r.NextInAEL=l}else if(a.NextInAEL===r){var _=r.NextInAEL;_!==null&&(_.PrevInAEL=a);var A=a.PrevInAEL;A!==null&&(A.NextInAEL=r),r.PrevInAEL=A,r.NextInAEL=a,a.PrevInAEL=r,a.NextInAEL=_}else{var D=r.NextInAEL,$=r.PrevInAEL;r.NextInAEL=a.NextInAEL,r.NextInAEL!==null&&(r.NextInAEL.PrevInAEL=r),r.PrevInAEL=a.PrevInAEL,r.PrevInAEL!==null&&(r.PrevInAEL.NextInAEL=r),a.NextInAEL=D,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=a),a.PrevInAEL=$,a.PrevInAEL!==null&&(a.PrevInAEL.NextInAEL=a)}r.PrevInAEL===null?this.m_ActiveEdges=r:a.PrevInAEL===null&&(this.m_ActiveEdges=a)}},n.ClipperBase.prototype.DeleteFromAEL=function(r){var a=r.PrevInAEL,l=r.NextInAEL;a===null&&l===null&&r!==this.m_ActiveEdges||(a!==null?a.NextInAEL=l:this.m_ActiveEdges=l,l!==null&&(l.PrevInAEL=a),r.NextInAEL=null,r.PrevInAEL=null)},n.Clipper=function(r){typeof r>"u"&&(r=0),this.m_PolyOuts=null,this.m_ClipType=n.ClipType.ctIntersection,this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=null,this.m_IntersectNodeComparer=null,this.m_ExecuteLocked=!1,this.m_ClipFillType=n.PolyFillType.pftEvenOdd,this.m_SubjFillType=n.PolyFillType.pftEvenOdd,this.m_Joins=null,this.m_GhostJoins=null,this.m_UsingPolyTree=!1,this.ReverseSolution=!1,this.StrictlySimple=!1,n.ClipperBase.call(this),this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=new Array,this.m_IntersectNodeComparer=n.MyIntersectNodeSort.Compare,this.m_ExecuteLocked=!1,this.m_UsingPolyTree=!1,this.m_PolyOuts=new Array,this.m_Joins=new Array,this.m_GhostJoins=new Array,this.ReverseSolution=(1&r)!==0,this.StrictlySimple=(2&r)!==0,this.PreserveCollinear=(4&r)!==0,n.use_xyz&&(this.ZFillFunction=null)},n.Clipper.ioReverseSolution=1,n.Clipper.ioStrictlySimple=2,n.Clipper.ioPreserveCollinear=4,n.Clipper.prototype.Clear=function(){this.m_edges.length!==0&&(this.DisposeAllPolyPts(),n.ClipperBase.prototype.Clear.call(this))},n.Clipper.prototype.InsertMaxima=function(r){var a=new n.Maxima;if(a.X=r,this.m_Maxima===null)this.m_Maxima=a,this.m_Maxima.Next=null,this.m_Maxima.Prev=null;else if(r<this.m_Maxima.X)a.Next=this.m_Maxima,a.Prev=null,this.m_Maxima=a;else{for(var l=this.m_Maxima;l.Next!==null&&r>=l.Next.X;)l=l.Next;if(r===l.X)return;a.Next=l.Next,a.Prev=l,l.Next!==null&&(l.Next.Prev=a),l.Next=a}},n.Clipper.prototype.Execute=function(){var r=arguments,a=r.length,l=r[1]instanceof n.PolyTree;if(a===4&&!l){var p=r[0],_=r[1],A=r[2],D=r[3];if(this.m_ExecuteLocked)return!1;this.m_HasOpenPaths&&n.Error("Error: PolyTree struct is needed for open path clipping."),this.m_ExecuteLocked=!0,n.Clear(_),this.m_SubjFillType=A,this.m_ClipFillType=D,this.m_ClipType=p,this.m_UsingPolyTree=!1;try{var $=this.ExecuteInternal();$&&this.BuildResult(_)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return $}else if(a===4&&l){var p=r[0],J=r[1],A=r[2],D=r[3];if(this.m_ExecuteLocked)return!1;this.m_ExecuteLocked=!0,this.m_SubjFillType=A,this.m_ClipFillType=D,this.m_ClipType=p,this.m_UsingPolyTree=!0;try{var $=this.ExecuteInternal();$&&this.BuildResult2(J)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return $}else if(a===2&&!l){var p=r[0],_=r[1];return this.Execute(p,_,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}else if(a===2&&l){var p=r[0],J=r[1];return this.Execute(p,J,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}},n.Clipper.prototype.FixHoleLinkage=function(r){if(!(r.FirstLeft===null||r.IsHole!==r.FirstLeft.IsHole&&r.FirstLeft.Pts!==null)){for(var a=r.FirstLeft;a!==null&&(a.IsHole===r.IsHole||a.Pts===null);)a=a.FirstLeft;r.FirstLeft=a}},n.Clipper.prototype.ExecuteInternal=function(){try{this.Reset(),this.m_SortedEdges=null,this.m_Maxima=null;var r={},a={};if(!this.PopScanbeam(r))return!1;for(this.InsertLocalMinimaIntoAEL(r.v);this.PopScanbeam(a)||this.LocalMinimaPending();){if(this.ProcessHorizontals(),this.m_GhostJoins.length=0,!this.ProcessIntersections(a.v))return!1;this.ProcessEdgesAtTopOfScanbeam(a.v),r.v=a.v,this.InsertLocalMinimaIntoAEL(r.v)}var l,p,_;for(p=0,_=this.m_PolyOuts.length;p<_;p++)l=this.m_PolyOuts[p],!(l.Pts===null||l.IsOpen)&&(l.IsHole^this.ReverseSolution)==this.Area$1(l)>0&&this.ReversePolyPtLinks(l.Pts);for(this.JoinCommonEdges(),p=0,_=this.m_PolyOuts.length;p<_;p++)l=this.m_PolyOuts[p],l.Pts!==null&&(l.IsOpen?this.FixupOutPolyline(l):this.FixupOutPolygon(l));return this.StrictlySimple&&this.DoSimplePolygons(),!0}finally{this.m_Joins.length=0,this.m_GhostJoins.length=0}},n.Clipper.prototype.DisposeAllPolyPts=function(){for(var r=0,a=this.m_PolyOuts.length;r<a;++r)this.DisposeOutRec(r);n.Clear(this.m_PolyOuts)},n.Clipper.prototype.AddJoin=function(r,a,l){var p=new n.Join;p.OutPt1=r,p.OutPt2=a,p.OffPt.X=l.X,p.OffPt.Y=l.Y,n.use_xyz&&(p.OffPt.Z=l.Z),this.m_Joins.push(p)},n.Clipper.prototype.AddGhostJoin=function(r,a){var l=new n.Join;l.OutPt1=r,l.OffPt.X=a.X,l.OffPt.Y=a.Y,n.use_xyz&&(l.OffPt.Z=a.Z),this.m_GhostJoins.push(l)},n.Clipper.prototype.SetZ=function(r,a,l){if(this.ZFillFunction!==null){if(r.Z!==0||this.ZFillFunction===null)return;n.IntPoint.op_Equality(r,a.Bot)?r.Z=a.Bot.Z:n.IntPoint.op_Equality(r,a.Top)?r.Z=a.Top.Z:n.IntPoint.op_Equality(r,l.Bot)?r.Z=l.Bot.Z:n.IntPoint.op_Equality(r,l.Top)?r.Z=l.Top.Z:this.ZFillFunction(a.Bot,a.Top,l.Bot,l.Top,r)}},n.Clipper.prototype.InsertLocalMinimaIntoAEL=function(r){for(var a={},l,p;this.PopLocalMinima(r,a);){l=a.v.LeftBound,p=a.v.RightBound;var _=null;if(l===null?(this.InsertEdgeIntoAEL(p,null),this.SetWindingCount(p),this.IsContributing(p)&&(_=this.AddOutPt(p,p.Bot))):p===null?(this.InsertEdgeIntoAEL(l,null),this.SetWindingCount(l),this.IsContributing(l)&&(_=this.AddOutPt(l,l.Bot)),this.InsertScanbeam(l.Top.Y)):(this.InsertEdgeIntoAEL(l,null),this.InsertEdgeIntoAEL(p,l),this.SetWindingCount(l),p.WindCnt=l.WindCnt,p.WindCnt2=l.WindCnt2,this.IsContributing(l)&&(_=this.AddLocalMinPoly(l,p,l.Bot)),this.InsertScanbeam(l.Top.Y)),p!==null&&(n.ClipperBase.IsHorizontal(p)?(p.NextInLML!==null&&this.InsertScanbeam(p.NextInLML.Top.Y),this.AddEdgeToSEL(p)):this.InsertScanbeam(p.Top.Y)),!(l===null||p===null)){if(_!==null&&n.ClipperBase.IsHorizontal(p)&&this.m_GhostJoins.length>0&&p.WindDelta!==0)for(var A=0,D=this.m_GhostJoins.length;A<D;A++){var $=this.m_GhostJoins[A];this.HorzSegmentsOverlap($.OutPt1.Pt.X,$.OffPt.X,p.Bot.X,p.Top.X)&&this.AddJoin($.OutPt1,_,$.OffPt)}if(l.OutIdx>=0&&l.PrevInAEL!==null&&l.PrevInAEL.Curr.X===l.Bot.X&&l.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(l.PrevInAEL.Curr,l.PrevInAEL.Top,l.Curr,l.Top,this.m_UseFullRange)&&l.WindDelta!==0&&l.PrevInAEL.WindDelta!==0){var J=this.AddOutPt(l.PrevInAEL,l.Bot);this.AddJoin(_,J,l.Top)}if(l.NextInAEL!==p){if(p.OutIdx>=0&&p.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(p.PrevInAEL.Curr,p.PrevInAEL.Top,p.Curr,p.Top,this.m_UseFullRange)&&p.WindDelta!==0&&p.PrevInAEL.WindDelta!==0){var J=this.AddOutPt(p.PrevInAEL,p.Bot);this.AddJoin(_,J,p.Top)}var lt=l.NextInAEL;if(lt!==null)for(;lt!==p;)this.IntersectEdges(p,lt,l.Curr),lt=lt.NextInAEL}}}},n.Clipper.prototype.InsertEdgeIntoAEL=function(r,a){if(this.m_ActiveEdges===null)r.PrevInAEL=null,r.NextInAEL=null,this.m_ActiveEdges=r;else if(a===null&&this.E2InsertsBeforeE1(this.m_ActiveEdges,r))r.PrevInAEL=null,r.NextInAEL=this.m_ActiveEdges,this.m_ActiveEdges.PrevInAEL=r,this.m_ActiveEdges=r;else{for(a===null&&(a=this.m_ActiveEdges);a.NextInAEL!==null&&!this.E2InsertsBeforeE1(a.NextInAEL,r);)a=a.NextInAEL;r.NextInAEL=a.NextInAEL,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=r),r.PrevInAEL=a,a.NextInAEL=r}},n.Clipper.prototype.E2InsertsBeforeE1=function(r,a){return a.Curr.X===r.Curr.X?a.Top.Y>r.Top.Y?a.Top.X<n.Clipper.TopX(r,a.Top.Y):r.Top.X>n.Clipper.TopX(a,r.Top.Y):a.Curr.X<r.Curr.X},n.Clipper.prototype.IsEvenOddFillType=function(r){return r.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType===n.PolyFillType.pftEvenOdd:this.m_ClipFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsEvenOddAltFillType=function(r){return r.PolyTyp===n.PolyType.ptSubject?this.m_ClipFillType===n.PolyFillType.pftEvenOdd:this.m_SubjFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsContributing=function(r){var a,l;switch(r.PolyTyp===n.PolyType.ptSubject?(a=this.m_SubjFillType,l=this.m_ClipFillType):(a=this.m_ClipFillType,l=this.m_SubjFillType),a){case n.PolyFillType.pftEvenOdd:if(r.WindDelta===0&&r.WindCnt!==1)return!1;break;case n.PolyFillType.pftNonZero:if(Math.abs(r.WindCnt)!==1)return!1;break;case n.PolyFillType.pftPositive:if(r.WindCnt!==1)return!1;break;default:if(r.WindCnt!==-1)return!1;break}switch(this.m_ClipType){case n.ClipType.ctIntersection:switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2!==0;case n.PolyFillType.pftPositive:return r.WindCnt2>0;default:return r.WindCnt2<0}case n.ClipType.ctUnion:switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}case n.ClipType.ctDifference:if(r.PolyTyp===n.PolyType.ptSubject)switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}else switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2!==0;case n.PolyFillType.pftPositive:return r.WindCnt2>0;default:return r.WindCnt2<0}case n.ClipType.ctXor:if(r.WindDelta===0)switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return r.WindCnt2===0;case n.PolyFillType.pftPositive:return r.WindCnt2<=0;default:return r.WindCnt2>=0}else return!0}return!0},n.Clipper.prototype.SetWindingCount=function(r){for(var a=r.PrevInAEL;a!==null&&(a.PolyTyp!==r.PolyTyp||a.WindDelta===0);)a=a.PrevInAEL;if(a===null){var l=r.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType:this.m_ClipFillType;r.WindDelta===0?r.WindCnt=l===n.PolyFillType.pftNegative?-1:1:r.WindCnt=r.WindDelta,r.WindCnt2=0,a=this.m_ActiveEdges}else if(r.WindDelta===0&&this.m_ClipType!==n.ClipType.ctUnion)r.WindCnt=1,r.WindCnt2=a.WindCnt2,a=a.NextInAEL;else if(this.IsEvenOddFillType(r)){if(r.WindDelta===0){for(var p=!0,_=a.PrevInAEL;_!==null;)_.PolyTyp===a.PolyTyp&&_.WindDelta!==0&&(p=!p),_=_.PrevInAEL;r.WindCnt=p?0:1}else r.WindCnt=r.WindDelta;r.WindCnt2=a.WindCnt2,a=a.NextInAEL}else a.WindCnt*a.WindDelta<0?Math.abs(a.WindCnt)>1?a.WindDelta*r.WindDelta<0?r.WindCnt=a.WindCnt:r.WindCnt=a.WindCnt+r.WindDelta:r.WindCnt=r.WindDelta===0?1:r.WindDelta:r.WindDelta===0?r.WindCnt=a.WindCnt<0?a.WindCnt-1:a.WindCnt+1:a.WindDelta*r.WindDelta<0?r.WindCnt=a.WindCnt:r.WindCnt=a.WindCnt+r.WindDelta,r.WindCnt2=a.WindCnt2,a=a.NextInAEL;if(this.IsEvenOddAltFillType(r))for(;a!==r;)a.WindDelta!==0&&(r.WindCnt2=r.WindCnt2===0?1:0),a=a.NextInAEL;else for(;a!==r;)r.WindCnt2+=a.WindDelta,a=a.NextInAEL},n.Clipper.prototype.AddEdgeToSEL=function(r){this.m_SortedEdges===null?(this.m_SortedEdges=r,r.PrevInSEL=null,r.NextInSEL=null):(r.NextInSEL=this.m_SortedEdges,r.PrevInSEL=null,this.m_SortedEdges.PrevInSEL=r,this.m_SortedEdges=r)},n.Clipper.prototype.PopEdgeFromSEL=function(r){if(r.v=this.m_SortedEdges,r.v===null)return!1;var a=r.v;return this.m_SortedEdges=r.v.NextInSEL,this.m_SortedEdges!==null&&(this.m_SortedEdges.PrevInSEL=null),a.NextInSEL=null,a.PrevInSEL=null,!0},n.Clipper.prototype.CopyAELToSEL=function(){var r=this.m_ActiveEdges;for(this.m_SortedEdges=r;r!==null;)r.PrevInSEL=r.PrevInAEL,r.NextInSEL=r.NextInAEL,r=r.NextInAEL},n.Clipper.prototype.SwapPositionsInSEL=function(r,a){if(!(r.NextInSEL===null&&r.PrevInSEL===null)&&!(a.NextInSEL===null&&a.PrevInSEL===null)){if(r.NextInSEL===a){var l=a.NextInSEL;l!==null&&(l.PrevInSEL=r);var p=r.PrevInSEL;p!==null&&(p.NextInSEL=a),a.PrevInSEL=p,a.NextInSEL=r,r.PrevInSEL=a,r.NextInSEL=l}else if(a.NextInSEL===r){var l=r.NextInSEL;l!==null&&(l.PrevInSEL=a);var p=a.PrevInSEL;p!==null&&(p.NextInSEL=r),r.PrevInSEL=p,r.NextInSEL=a,a.PrevInSEL=r,a.NextInSEL=l}else{var l=r.NextInSEL,p=r.PrevInSEL;r.NextInSEL=a.NextInSEL,r.NextInSEL!==null&&(r.NextInSEL.PrevInSEL=r),r.PrevInSEL=a.PrevInSEL,r.PrevInSEL!==null&&(r.PrevInSEL.NextInSEL=r),a.NextInSEL=l,a.NextInSEL!==null&&(a.NextInSEL.PrevInSEL=a),a.PrevInSEL=p,a.PrevInSEL!==null&&(a.PrevInSEL.NextInSEL=a)}r.PrevInSEL===null?this.m_SortedEdges=r:a.PrevInSEL===null&&(this.m_SortedEdges=a)}},n.Clipper.prototype.AddLocalMaxPoly=function(r,a,l){this.AddOutPt(r,l),a.WindDelta===0&&this.AddOutPt(a,l),r.OutIdx===a.OutIdx?(r.OutIdx=-1,a.OutIdx=-1):r.OutIdx<a.OutIdx?this.AppendPolygon(r,a):this.AppendPolygon(a,r)},n.Clipper.prototype.AddLocalMinPoly=function(r,a,l){var p,_,A;if(n.ClipperBase.IsHorizontal(a)||r.Dx>a.Dx?(p=this.AddOutPt(r,l),a.OutIdx=r.OutIdx,r.Side=n.EdgeSide.esLeft,a.Side=n.EdgeSide.esRight,_=r,_.PrevInAEL===a?A=a.PrevInAEL:A=_.PrevInAEL):(p=this.AddOutPt(a,l),r.OutIdx=a.OutIdx,r.Side=n.EdgeSide.esRight,a.Side=n.EdgeSide.esLeft,_=a,_.PrevInAEL===r?A=r.PrevInAEL:A=_.PrevInAEL),A!==null&&A.OutIdx>=0&&A.Top.Y<l.Y&&_.Top.Y<l.Y){var D=n.Clipper.TopX(A,l.Y),$=n.Clipper.TopX(_,l.Y);if(D===$&&_.WindDelta!==0&&A.WindDelta!==0&&n.ClipperBase.SlopesEqual5(new n.IntPoint2(D,l.Y),A.Top,new n.IntPoint2($,l.Y),_.Top,this.m_UseFullRange)){var J=this.AddOutPt(A,l);this.AddJoin(p,J,_.Top)}}return p},n.Clipper.prototype.AddOutPt=function(r,a){if(r.OutIdx<0){var l=this.CreateOutRec();l.IsOpen=r.WindDelta===0;var p=new n.OutPt;return l.Pts=p,p.Idx=l.Idx,p.Pt.X=a.X,p.Pt.Y=a.Y,n.use_xyz&&(p.Pt.Z=a.Z),p.Next=p,p.Prev=p,l.IsOpen||this.SetHoleState(r,l),r.OutIdx=l.Idx,p}else{var l=this.m_PolyOuts[r.OutIdx],_=l.Pts,A=r.Side===n.EdgeSide.esLeft;if(A&&n.IntPoint.op_Equality(a,_.Pt))return _;if(!A&&n.IntPoint.op_Equality(a,_.Prev.Pt))return _.Prev;var p=new n.OutPt;return p.Idx=l.Idx,p.Pt.X=a.X,p.Pt.Y=a.Y,n.use_xyz&&(p.Pt.Z=a.Z),p.Next=_,p.Prev=_.Prev,p.Prev.Next=p,_.Prev=p,A&&(l.Pts=p),p}},n.Clipper.prototype.GetLastOutPt=function(r){var a=this.m_PolyOuts[r.OutIdx];return r.Side===n.EdgeSide.esLeft?a.Pts:a.Pts.Prev},n.Clipper.prototype.SwapPoints=function(r,a){var l=new n.IntPoint1(r.Value);r.Value.X=a.Value.X,r.Value.Y=a.Value.Y,n.use_xyz&&(r.Value.Z=a.Value.Z),a.Value.X=l.X,a.Value.Y=l.Y,n.use_xyz&&(a.Value.Z=l.Z)},n.Clipper.prototype.HorzSegmentsOverlap=function(r,a,l,p){var _;return r>a&&(_=r,r=a,a=_),l>p&&(_=l,l=p,p=_),r<p&&l<a},n.Clipper.prototype.SetHoleState=function(r,a){for(var l=r.PrevInAEL,p=null;l!==null;)l.OutIdx>=0&&l.WindDelta!==0&&(p===null?p=l:p.OutIdx===l.OutIdx&&(p=null)),l=l.PrevInAEL;p===null?(a.FirstLeft=null,a.IsHole=!1):(a.FirstLeft=this.m_PolyOuts[p.OutIdx],a.IsHole=!a.FirstLeft.IsHole)},n.Clipper.prototype.GetDx=function(r,a){return r.Y===a.Y?n.ClipperBase.horizontal:(a.X-r.X)/(a.Y-r.Y)},n.Clipper.prototype.FirstIsBottomPt=function(r,a){for(var l=r.Prev;n.IntPoint.op_Equality(l.Pt,r.Pt)&&l!==r;)l=l.Prev;var p=Math.abs(this.GetDx(r.Pt,l.Pt));for(l=r.Next;n.IntPoint.op_Equality(l.Pt,r.Pt)&&l!==r;)l=l.Next;var _=Math.abs(this.GetDx(r.Pt,l.Pt));for(l=a.Prev;n.IntPoint.op_Equality(l.Pt,a.Pt)&&l!==a;)l=l.Prev;var A=Math.abs(this.GetDx(a.Pt,l.Pt));for(l=a.Next;n.IntPoint.op_Equality(l.Pt,a.Pt)&&l!==a;)l=l.Next;var D=Math.abs(this.GetDx(a.Pt,l.Pt));return Math.max(p,_)===Math.max(A,D)&&Math.min(p,_)===Math.min(A,D)?this.Area(r)>0:p>=A&&p>=D||_>=A&&_>=D},n.Clipper.prototype.GetBottomPt=function(r){for(var a=null,l=r.Next;l!==r;)l.Pt.Y>r.Pt.Y?(r=l,a=null):l.Pt.Y===r.Pt.Y&&l.Pt.X<=r.Pt.X&&(l.Pt.X<r.Pt.X?(a=null,r=l):l.Next!==r&&l.Prev!==r&&(a=l)),l=l.Next;if(a!==null)for(;a!==l;)for(this.FirstIsBottomPt(l,a)||(r=a),a=a.Next;n.IntPoint.op_Inequality(a.Pt,r.Pt);)a=a.Next;return r},n.Clipper.prototype.GetLowermostRec=function(r,a){r.BottomPt===null&&(r.BottomPt=this.GetBottomPt(r.Pts)),a.BottomPt===null&&(a.BottomPt=this.GetBottomPt(a.Pts));var l=r.BottomPt,p=a.BottomPt;return l.Pt.Y>p.Pt.Y?r:l.Pt.Y<p.Pt.Y?a:l.Pt.X<p.Pt.X?r:l.Pt.X>p.Pt.X||l.Next===l?a:p.Next===p||this.FirstIsBottomPt(l,p)?r:a},n.Clipper.prototype.OutRec1RightOfOutRec2=function(r,a){do if(r=r.FirstLeft,r===a)return!0;while(r!==null);return!1},n.Clipper.prototype.GetOutRec=function(r){for(var a=this.m_PolyOuts[r];a!==this.m_PolyOuts[a.Idx];)a=this.m_PolyOuts[a.Idx];return a},n.Clipper.prototype.AppendPolygon=function(r,a){var l=this.m_PolyOuts[r.OutIdx],p=this.m_PolyOuts[a.OutIdx],_;this.OutRec1RightOfOutRec2(l,p)?_=p:this.OutRec1RightOfOutRec2(p,l)?_=l:_=this.GetLowermostRec(l,p);var A=l.Pts,D=A.Prev,$=p.Pts,J=$.Prev;r.Side===n.EdgeSide.esLeft?a.Side===n.EdgeSide.esLeft?(this.ReversePolyPtLinks($),$.Next=A,A.Prev=$,D.Next=J,J.Prev=D,l.Pts=J):(J.Next=A,A.Prev=J,$.Prev=D,D.Next=$,l.Pts=$):a.Side===n.EdgeSide.esRight?(this.ReversePolyPtLinks($),D.Next=J,J.Prev=D,$.Next=A,A.Prev=$):(D.Next=$,$.Prev=D,A.Prev=J,J.Next=A),l.BottomPt=null,_===p&&(p.FirstLeft!==l&&(l.FirstLeft=p.FirstLeft),l.IsHole=p.IsHole),p.Pts=null,p.BottomPt=null,p.FirstLeft=l;var lt=r.OutIdx,Et=a.OutIdx;r.OutIdx=-1,a.OutIdx=-1;for(var bt=this.m_ActiveEdges;bt!==null;){if(bt.OutIdx===Et){bt.OutIdx=lt,bt.Side=r.Side;break}bt=bt.NextInAEL}p.Idx=l.Idx},n.Clipper.prototype.ReversePolyPtLinks=function(r){if(r!==null){var a,l;a=r;do l=a.Next,a.Next=a.Prev,a.Prev=l,a=l;while(a!==r)}},n.Clipper.SwapSides=function(r,a){var l=r.Side;r.Side=a.Side,a.Side=l},n.Clipper.SwapPolyIndexes=function(r,a){var l=r.OutIdx;r.OutIdx=a.OutIdx,a.OutIdx=l},n.Clipper.prototype.IntersectEdges=function(r,a,l){var p=r.OutIdx>=0,_=a.OutIdx>=0;if(n.use_xyz&&this.SetZ(l,r,a),n.use_lines&&(r.WindDelta===0||a.WindDelta===0)){if(r.WindDelta===0&&a.WindDelta===0)return;r.PolyTyp===a.PolyTyp&&r.WindDelta!==a.WindDelta&&this.m_ClipType===n.ClipType.ctUnion?r.WindDelta===0?_&&(this.AddOutPt(r,l),p&&(r.OutIdx=-1)):p&&(this.AddOutPt(a,l),_&&(a.OutIdx=-1)):r.PolyTyp!==a.PolyTyp&&(r.WindDelta===0&&Math.abs(a.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||a.WindCnt2===0)?(this.AddOutPt(r,l),p&&(r.OutIdx=-1)):a.WindDelta===0&&Math.abs(r.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||r.WindCnt2===0)&&(this.AddOutPt(a,l),_&&(a.OutIdx=-1)));return}if(r.PolyTyp===a.PolyTyp)if(this.IsEvenOddFillType(r)){var A=r.WindCnt;r.WindCnt=a.WindCnt,a.WindCnt=A}else r.WindCnt+a.WindDelta===0?r.WindCnt=-r.WindCnt:r.WindCnt+=a.WindDelta,a.WindCnt-r.WindDelta===0?a.WindCnt=-a.WindCnt:a.WindCnt-=r.WindDelta;else this.IsEvenOddFillType(a)?r.WindCnt2=r.WindCnt2===0?1:0:r.WindCnt2+=a.WindDelta,this.IsEvenOddFillType(r)?a.WindCnt2=a.WindCnt2===0?1:0:a.WindCnt2-=r.WindDelta;var D,$,J,lt;r.PolyTyp===n.PolyType.ptSubject?(D=this.m_SubjFillType,J=this.m_ClipFillType):(D=this.m_ClipFillType,J=this.m_SubjFillType),a.PolyTyp===n.PolyType.ptSubject?($=this.m_SubjFillType,lt=this.m_ClipFillType):($=this.m_ClipFillType,lt=this.m_SubjFillType);var Et,bt;switch(D){case n.PolyFillType.pftPositive:Et=r.WindCnt;break;case n.PolyFillType.pftNegative:Et=-r.WindCnt;break;default:Et=Math.abs(r.WindCnt);break}switch($){case n.PolyFillType.pftPositive:bt=a.WindCnt;break;case n.PolyFillType.pftNegative:bt=-a.WindCnt;break;default:bt=Math.abs(a.WindCnt);break}if(p&&_)Et!==0&&Et!==1||bt!==0&&bt!==1||r.PolyTyp!==a.PolyTyp&&this.m_ClipType!==n.ClipType.ctXor?this.AddLocalMaxPoly(r,a,l):(this.AddOutPt(r,l),this.AddOutPt(a,l),n.Clipper.SwapSides(r,a),n.Clipper.SwapPolyIndexes(r,a));else if(p)(bt===0||bt===1)&&(this.AddOutPt(r,l),n.Clipper.SwapSides(r,a),n.Clipper.SwapPolyIndexes(r,a));else if(_)(Et===0||Et===1)&&(this.AddOutPt(a,l),n.Clipper.SwapSides(r,a),n.Clipper.SwapPolyIndexes(r,a));else if((Et===0||Et===1)&&(bt===0||bt===1)){var Pt,re;switch(J){case n.PolyFillType.pftPositive:Pt=r.WindCnt2;break;case n.PolyFillType.pftNegative:Pt=-r.WindCnt2;break;default:Pt=Math.abs(r.WindCnt2);break}switch(lt){case n.PolyFillType.pftPositive:re=a.WindCnt2;break;case n.PolyFillType.pftNegative:re=-a.WindCnt2;break;default:re=Math.abs(a.WindCnt2);break}if(r.PolyTyp!==a.PolyTyp)this.AddLocalMinPoly(r,a,l);else if(Et===1&&bt===1)switch(this.m_ClipType){case n.ClipType.ctIntersection:Pt>0&&re>0&&this.AddLocalMinPoly(r,a,l);break;case n.ClipType.ctUnion:Pt<=0&&re<=0&&this.AddLocalMinPoly(r,a,l);break;case n.ClipType.ctDifference:(r.PolyTyp===n.PolyType.ptClip&&Pt>0&&re>0||r.PolyTyp===n.PolyType.ptSubject&&Pt<=0&&re<=0)&&this.AddLocalMinPoly(r,a,l);break;case n.ClipType.ctXor:this.AddLocalMinPoly(r,a,l);break}else n.Clipper.SwapSides(r,a)}},n.Clipper.prototype.DeleteFromSEL=function(r){var a=r.PrevInSEL,l=r.NextInSEL;a===null&&l===null&&r!==this.m_SortedEdges||(a!==null?a.NextInSEL=l:this.m_SortedEdges=l,l!==null&&(l.PrevInSEL=a),r.NextInSEL=null,r.PrevInSEL=null)},n.Clipper.prototype.ProcessHorizontals=function(){for(var r={};this.PopEdgeFromSEL(r);)this.ProcessHorizontal(r.v)},n.Clipper.prototype.GetHorzDirection=function(r,a){r.Bot.X<r.Top.X?(a.Left=r.Bot.X,a.Right=r.Top.X,a.Dir=n.Direction.dLeftToRight):(a.Left=r.Top.X,a.Right=r.Bot.X,a.Dir=n.Direction.dRightToLeft)},n.Clipper.prototype.ProcessHorizontal=function(r){var a={Dir:null,Left:null,Right:null};this.GetHorzDirection(r,a);for(var l=a.Dir,p=a.Left,_=a.Right,A=r.WindDelta===0,D=r,$=null;D.NextInLML!==null&&n.ClipperBase.IsHorizontal(D.NextInLML);)D=D.NextInLML;D.NextInLML===null&&($=this.GetMaximaPair(D));var J=this.m_Maxima;if(J!==null)if(l===n.Direction.dLeftToRight){for(;J!==null&&J.X<=r.Bot.X;)J=J.Next;J!==null&&J.X>=D.Top.X&&(J=null)}else{for(;J.Next!==null&&J.Next.X<r.Bot.X;)J=J.Next;J.X<=D.Top.X&&(J=null)}for(var lt=null;;){for(var Et=r===D,bt=this.GetNextInAEL(r,l);bt!==null;){if(J!==null)if(l===n.Direction.dLeftToRight)for(;J!==null&&J.X<bt.Curr.X;)r.OutIdx>=0&&!A&&this.AddOutPt(r,new n.IntPoint2(J.X,r.Bot.Y)),J=J.Next;else for(;J!==null&&J.X>bt.Curr.X;)r.OutIdx>=0&&!A&&this.AddOutPt(r,new n.IntPoint2(J.X,r.Bot.Y)),J=J.Prev;if(l===n.Direction.dLeftToRight&&bt.Curr.X>_||l===n.Direction.dRightToLeft&&bt.Curr.X<p||bt.Curr.X===r.Top.X&&r.NextInLML!==null&&bt.Dx<r.NextInLML.Dx)break;if(r.OutIdx>=0&&!A){n.use_xyz&&(l===n.Direction.dLeftToRight?this.SetZ(bt.Curr,r,bt):this.SetZ(bt.Curr,bt,r)),lt=this.AddOutPt(r,bt.Curr);for(var Pt=this.m_SortedEdges;Pt!==null;){if(Pt.OutIdx>=0&&this.HorzSegmentsOverlap(r.Bot.X,r.Top.X,Pt.Bot.X,Pt.Top.X)){var re=this.GetLastOutPt(Pt);this.AddJoin(re,lt,Pt.Top)}Pt=Pt.NextInSEL}this.AddGhostJoin(lt,r.Bot)}if(bt===$&&Et){r.OutIdx>=0&&this.AddLocalMaxPoly(r,$,r.Top),this.DeleteFromAEL(r),this.DeleteFromAEL($);return}if(l===n.Direction.dLeftToRight){var _e=new n.IntPoint2(bt.Curr.X,r.Curr.Y);this.IntersectEdges(r,bt,_e)}else{var _e=new n.IntPoint2(bt.Curr.X,r.Curr.Y);this.IntersectEdges(bt,r,_e)}var we=this.GetNextInAEL(bt,l);this.SwapPositionsInAEL(r,bt),bt=we}if(r.NextInLML===null||!n.ClipperBase.IsHorizontal(r.NextInLML))break;r=this.UpdateEdgeIntoAEL(r),r.OutIdx>=0&&this.AddOutPt(r,r.Bot),a={Dir:l,Left:p,Right:_},this.GetHorzDirection(r,a),l=a.Dir,p=a.Left,_=a.Right}if(r.OutIdx>=0&&lt===null){lt=this.GetLastOutPt(r);for(var Pt=this.m_SortedEdges;Pt!==null;){if(Pt.OutIdx>=0&&this.HorzSegmentsOverlap(r.Bot.X,r.Top.X,Pt.Bot.X,Pt.Top.X)){var re=this.GetLastOutPt(Pt);this.AddJoin(re,lt,Pt.Top)}Pt=Pt.NextInSEL}this.AddGhostJoin(lt,r.Top)}if(r.NextInLML!==null)if(r.OutIdx>=0){if(lt=this.AddOutPt(r,r.Top),r=this.UpdateEdgeIntoAEL(r),r.WindDelta===0)return;var Be=r.PrevInAEL,we=r.NextInAEL;if(Be!==null&&Be.Curr.X===r.Bot.X&&Be.Curr.Y===r.Bot.Y&&Be.WindDelta===0&&Be.OutIdx>=0&&Be.Curr.Y>Be.Top.Y&&n.ClipperBase.SlopesEqual3(r,Be,this.m_UseFullRange)){var re=this.AddOutPt(Be,r.Bot);this.AddJoin(lt,re,r.Top)}else if(we!==null&&we.Curr.X===r.Bot.X&&we.Curr.Y===r.Bot.Y&&we.WindDelta!==0&&we.OutIdx>=0&&we.Curr.Y>we.Top.Y&&n.ClipperBase.SlopesEqual3(r,we,this.m_UseFullRange)){var re=this.AddOutPt(we,r.Bot);this.AddJoin(lt,re,r.Top)}}else r=this.UpdateEdgeIntoAEL(r);else r.OutIdx>=0&&this.AddOutPt(r,r.Top),this.DeleteFromAEL(r)},n.Clipper.prototype.GetNextInAEL=function(r,a){return a===n.Direction.dLeftToRight?r.NextInAEL:r.PrevInAEL},n.Clipper.prototype.IsMinima=function(r){return r!==null&&r.Prev.NextInLML!==r&&r.Next.NextInLML!==r},n.Clipper.prototype.IsMaxima=function(r,a){return r!==null&&r.Top.Y===a&&r.NextInLML===null},n.Clipper.prototype.IsIntermediate=function(r,a){return r.Top.Y===a&&r.NextInLML!==null},n.Clipper.prototype.GetMaximaPair=function(r){return n.IntPoint.op_Equality(r.Next.Top,r.Top)&&r.Next.NextInLML===null?r.Next:n.IntPoint.op_Equality(r.Prev.Top,r.Top)&&r.Prev.NextInLML===null?r.Prev:null},n.Clipper.prototype.GetMaximaPairEx=function(r){var a=this.GetMaximaPair(r);return a===null||a.OutIdx===n.ClipperBase.Skip||a.NextInAEL===a.PrevInAEL&&!n.ClipperBase.IsHorizontal(a)?null:a},n.Clipper.prototype.ProcessIntersections=function(r){if(this.m_ActiveEdges===null)return!0;try{if(this.BuildIntersectList(r),this.m_IntersectList.length===0)return!0;if(this.m_IntersectList.length===1||this.FixupIntersectionOrder())this.ProcessIntersectList();else return!1}catch{this.m_SortedEdges=null,this.m_IntersectList.length=0,n.Error("ProcessIntersections error")}return this.m_SortedEdges=null,!0},n.Clipper.prototype.BuildIntersectList=function(r){if(this.m_ActiveEdges!==null){var a=this.m_ActiveEdges;for(this.m_SortedEdges=a;a!==null;)a.PrevInSEL=a.PrevInAEL,a.NextInSEL=a.NextInAEL,a.Curr.X=n.Clipper.TopX(a,r),a=a.NextInAEL;for(var l=!0;l&&this.m_SortedEdges!==null;){for(l=!1,a=this.m_SortedEdges;a.NextInSEL!==null;){var p=a.NextInSEL,_=new n.IntPoint0;if(a.Curr.X>p.Curr.X){this.IntersectPoint(a,p,_),_.Y<r&&(_=new n.IntPoint2(n.Clipper.TopX(a,r),r));var A=new n.IntersectNode;A.Edge1=a,A.Edge2=p,A.Pt.X=_.X,A.Pt.Y=_.Y,n.use_xyz&&(A.Pt.Z=_.Z),this.m_IntersectList.push(A),this.SwapPositionsInSEL(a,p),l=!0}else a=p}if(a.PrevInSEL!==null)a.PrevInSEL.NextInSEL=null;else break}this.m_SortedEdges=null}},n.Clipper.prototype.EdgesAdjacent=function(r){return r.Edge1.NextInSEL===r.Edge2||r.Edge1.PrevInSEL===r.Edge2},n.Clipper.IntersectNodeSort=function(r,a){return a.Pt.Y-r.Pt.Y},n.Clipper.prototype.FixupIntersectionOrder=function(){this.m_IntersectList.sort(this.m_IntersectNodeComparer),this.CopyAELToSEL();for(var r=this.m_IntersectList.length,a=0;a<r;a++){if(!this.EdgesAdjacent(this.m_IntersectList[a])){for(var l=a+1;l<r&&!this.EdgesAdjacent(this.m_IntersectList[l]);)l++;if(l===r)return!1;var p=this.m_IntersectList[a];this.m_IntersectList[a]=this.m_IntersectList[l],this.m_IntersectList[l]=p}this.SwapPositionsInSEL(this.m_IntersectList[a].Edge1,this.m_IntersectList[a].Edge2)}return!0},n.Clipper.prototype.ProcessIntersectList=function(){for(var r=0,a=this.m_IntersectList.length;r<a;r++){var l=this.m_IntersectList[r];this.IntersectEdges(l.Edge1,l.Edge2,l.Pt),this.SwapPositionsInAEL(l.Edge1,l.Edge2)}this.m_IntersectList.length=0};var Jt=function(r){return r<0?Math.ceil(r-.5):Math.round(r)},Ne=function(r){return r<0?Math.ceil(r-.5):Math.floor(r+.5)},Xe=function(r){return r<0?-Math.round(Math.abs(r)):Math.round(r)},Pe=function(r){return r<0?(r-=.5,r<-2147483648?Math.ceil(r):r|0):(r+=.5,r>2147483647?Math.floor(r):r|0)};s.msie?n.Clipper.Round=Jt:s.chromium?n.Clipper.Round=Xe:s.safari?n.Clipper.Round=Pe:n.Clipper.Round=Ne,n.Clipper.TopX=function(r,a){return a===r.Top.Y?r.Top.X:r.Bot.X+n.Clipper.Round(r.Dx*(a-r.Bot.Y))},n.Clipper.prototype.IntersectPoint=function(r,a,l){l.X=0,l.Y=0;var p,_;if(r.Dx===a.Dx){l.Y=r.Curr.Y,l.X=n.Clipper.TopX(r,l.Y);return}if(r.Delta.X===0)l.X=r.Bot.X,n.ClipperBase.IsHorizontal(a)?l.Y=a.Bot.Y:(_=a.Bot.Y-a.Bot.X/a.Dx,l.Y=n.Clipper.Round(l.X/a.Dx+_));else if(a.Delta.X===0)l.X=a.Bot.X,n.ClipperBase.IsHorizontal(r)?l.Y=r.Bot.Y:(p=r.Bot.Y-r.Bot.X/r.Dx,l.Y=n.Clipper.Round(l.X/r.Dx+p));else{p=r.Bot.X-r.Bot.Y*r.Dx,_=a.Bot.X-a.Bot.Y*a.Dx;var A=(_-p)/(r.Dx-a.Dx);l.Y=n.Clipper.Round(A),Math.abs(r.Dx)<Math.abs(a.Dx)?l.X=n.Clipper.Round(r.Dx*A+p):l.X=n.Clipper.Round(a.Dx*A+_)}if(l.Y<r.Top.Y||l.Y<a.Top.Y){if(r.Top.Y>a.Top.Y)return l.Y=r.Top.Y,l.X=n.Clipper.TopX(a,r.Top.Y),l.X<r.Top.X;l.Y=a.Top.Y,Math.abs(r.Dx)<Math.abs(a.Dx)?l.X=n.Clipper.TopX(r,l.Y):l.X=n.Clipper.TopX(a,l.Y)}l.Y>r.Curr.Y&&(l.Y=r.Curr.Y,Math.abs(r.Dx)>Math.abs(a.Dx)?l.X=n.Clipper.TopX(a,l.Y):l.X=n.Clipper.TopX(r,l.Y))},n.Clipper.prototype.ProcessEdgesAtTopOfScanbeam=function(r){for(var a=this.m_ActiveEdges;a!==null;){var l=this.IsMaxima(a,r);if(l){var p=this.GetMaximaPairEx(a);l=p===null||!n.ClipperBase.IsHorizontal(p)}if(l){this.StrictlySimple&&this.InsertMaxima(a.Top.X);var _=a.PrevInAEL;this.DoMaxima(a),_===null?a=this.m_ActiveEdges:a=_.NextInAEL}else{if(this.IsIntermediate(a,r)&&n.ClipperBase.IsHorizontal(a.NextInLML)?(a=this.UpdateEdgeIntoAEL(a),a.OutIdx>=0&&this.AddOutPt(a,a.Bot),this.AddEdgeToSEL(a)):(a.Curr.X=n.Clipper.TopX(a,r),a.Curr.Y=r),n.use_xyz&&(a.Top.Y===r?a.Curr.Z=a.Top.Z:a.Bot.Y===r?a.Curr.Z=a.Bot.Z:a.Curr.Z=0),this.StrictlySimple){var _=a.PrevInAEL;if(a.OutIdx>=0&&a.WindDelta!==0&&_!==null&&_.OutIdx>=0&&_.Curr.X===a.Curr.X&&_.WindDelta!==0){var A=new n.IntPoint1(a.Curr);n.use_xyz&&this.SetZ(A,_,a);var D=this.AddOutPt(_,A),$=this.AddOutPt(a,A);this.AddJoin(D,$,A)}}a=a.NextInAEL}}for(this.ProcessHorizontals(),this.m_Maxima=null,a=this.m_ActiveEdges;a!==null;){if(this.IsIntermediate(a,r)){var D=null;a.OutIdx>=0&&(D=this.AddOutPt(a,a.Top)),a=this.UpdateEdgeIntoAEL(a);var _=a.PrevInAEL,J=a.NextInAEL;if(_!==null&&_.Curr.X===a.Bot.X&&_.Curr.Y===a.Bot.Y&&D!==null&&_.OutIdx>=0&&_.Curr.Y===_.Top.Y&&n.ClipperBase.SlopesEqual5(a.Curr,a.Top,_.Curr,_.Top,this.m_UseFullRange)&&a.WindDelta!==0&&_.WindDelta!==0){var $=this.AddOutPt(ePrev2,a.Bot);this.AddJoin(D,$,a.Top)}else if(J!==null&&J.Curr.X===a.Bot.X&&J.Curr.Y===a.Bot.Y&&D!==null&&J.OutIdx>=0&&J.Curr.Y===J.Top.Y&&n.ClipperBase.SlopesEqual5(a.Curr,a.Top,J.Curr,J.Top,this.m_UseFullRange)&&a.WindDelta!==0&&J.WindDelta!==0){var $=this.AddOutPt(J,a.Bot);this.AddJoin(D,$,a.Top)}}a=a.NextInAEL}},n.Clipper.prototype.DoMaxima=function(r){var a=this.GetMaximaPairEx(r);if(a===null){r.OutIdx>=0&&this.AddOutPt(r,r.Top),this.DeleteFromAEL(r);return}for(var l=r.NextInAEL;l!==null&&l!==a;)this.IntersectEdges(r,l,r.Top),this.SwapPositionsInAEL(r,l),l=r.NextInAEL;r.OutIdx===-1&&a.OutIdx===-1?(this.DeleteFromAEL(r),this.DeleteFromAEL(a)):r.OutIdx>=0&&a.OutIdx>=0?(r.OutIdx>=0&&this.AddLocalMaxPoly(r,a,r.Top),this.DeleteFromAEL(r),this.DeleteFromAEL(a)):n.use_lines&&r.WindDelta===0?(r.OutIdx>=0&&(this.AddOutPt(r,r.Top),r.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(r),a.OutIdx>=0&&(this.AddOutPt(a,r.Top),a.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(a)):n.Error("DoMaxima error")},n.Clipper.ReversePaths=function(r){for(var a=0,l=r.length;a<l;a++)r[a].reverse()},n.Clipper.Orientation=function(r){return n.Clipper.Area(r)>=0},n.Clipper.prototype.PointCount=function(r){if(r===null)return 0;var a=0,l=r;do a++,l=l.Next;while(l!==r);return a},n.Clipper.prototype.BuildResult=function(r){n.Clear(r);for(var a=0,l=this.m_PolyOuts.length;a<l;a++){var p=this.m_PolyOuts[a];if(p.Pts!==null){var _=p.Pts.Prev,A=this.PointCount(_);if(!(A<2)){for(var D=new Array(A),$=0;$<A;$++)D[$]=_.Pt,_=_.Prev;r.push(D)}}}},n.Clipper.prototype.BuildResult2=function(r){r.Clear();for(var a=0,l=this.m_PolyOuts.length;a<l;a++){var p=this.m_PolyOuts[a],_=this.PointCount(p.Pts);if(!(p.IsOpen&&_<2||!p.IsOpen&&_<3)){this.FixHoleLinkage(p);var A=new n.PolyNode;r.m_AllPolys.push(A),p.PolyNode=A,A.m_polygon.length=_;for(var D=p.Pts.Prev,$=0;$<_;$++)A.m_polygon[$]=D.Pt,D=D.Prev}}for(var a=0,l=this.m_PolyOuts.length;a<l;a++){var p=this.m_PolyOuts[a];p.PolyNode!==null&&(p.IsOpen?(p.PolyNode.IsOpen=!0,r.AddChild(p.PolyNode)):p.FirstLeft!==null&&p.FirstLeft.PolyNode!==null?p.FirstLeft.PolyNode.AddChild(p.PolyNode):r.AddChild(p.PolyNode))}},n.Clipper.prototype.FixupOutPolyline=function(r){for(var a=r.Pts,l=a.Prev;a!==l;)if(a=a.Next,n.IntPoint.op_Equality(a.Pt,a.Prev.Pt)){a===l&&(l=a.Prev);var p=a.Prev;p.Next=a.Next,a.Next.Prev=p,a=p}a===a.Prev&&(r.Pts=null)},n.Clipper.prototype.FixupOutPolygon=function(r){var a=null;r.BottomPt=null;for(var l=r.Pts,p=this.PreserveCollinear||this.StrictlySimple;;){if(l.Prev===l||l.Prev===l.Next){r.Pts=null;return}if(n.IntPoint.op_Equality(l.Pt,l.Next.Pt)||n.IntPoint.op_Equality(l.Pt,l.Prev.Pt)||n.ClipperBase.SlopesEqual4(l.Prev.Pt,l.Pt,l.Next.Pt,this.m_UseFullRange)&&(!p||!this.Pt2IsBetweenPt1AndPt3(l.Prev.Pt,l.Pt,l.Next.Pt)))a=null,l.Prev.Next=l.Next,l.Next.Prev=l.Prev,l=l.Prev;else{if(l===a)break;a===null&&(a=l),l=l.Next}}r.Pts=l},n.Clipper.prototype.DupOutPt=function(r,a){var l=new n.OutPt;return l.Pt.X=r.Pt.X,l.Pt.Y=r.Pt.Y,n.use_xyz&&(l.Pt.Z=r.Pt.Z),l.Idx=r.Idx,a?(l.Next=r.Next,l.Prev=r,r.Next.Prev=l,r.Next=l):(l.Prev=r.Prev,l.Next=r,r.Prev.Next=l,r.Prev=l),l},n.Clipper.prototype.GetOverlap=function(r,a,l,p,_){return r<a?l<p?(_.Left=Math.max(r,l),_.Right=Math.min(a,p)):(_.Left=Math.max(r,p),_.Right=Math.min(a,l)):l<p?(_.Left=Math.max(a,l),_.Right=Math.min(r,p)):(_.Left=Math.max(a,p),_.Right=Math.min(r,l)),_.Left<_.Right},n.Clipper.prototype.JoinHorz=function(r,a,l,p,_,A){var D=r.Pt.X>a.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight,$=l.Pt.X>p.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight;if(D===$)return!1;if(D===n.Direction.dLeftToRight){for(;r.Next.Pt.X<=_.X&&r.Next.Pt.X>=r.Pt.X&&r.Next.Pt.Y===_.Y;)r=r.Next;A&&r.Pt.X!==_.X&&(r=r.Next),a=this.DupOutPt(r,!A),n.IntPoint.op_Inequality(a.Pt,_)&&(r=a,r.Pt.X=_.X,r.Pt.Y=_.Y,n.use_xyz&&(r.Pt.Z=_.Z),a=this.DupOutPt(r,!A))}else{for(;r.Next.Pt.X>=_.X&&r.Next.Pt.X<=r.Pt.X&&r.Next.Pt.Y===_.Y;)r=r.Next;!A&&r.Pt.X!==_.X&&(r=r.Next),a=this.DupOutPt(r,A),n.IntPoint.op_Inequality(a.Pt,_)&&(r=a,r.Pt.X=_.X,r.Pt.Y=_.Y,n.use_xyz&&(r.Pt.Z=_.Z),a=this.DupOutPt(r,A))}if($===n.Direction.dLeftToRight){for(;l.Next.Pt.X<=_.X&&l.Next.Pt.X>=l.Pt.X&&l.Next.Pt.Y===_.Y;)l=l.Next;A&&l.Pt.X!==_.X&&(l=l.Next),p=this.DupOutPt(l,!A),n.IntPoint.op_Inequality(p.Pt,_)&&(l=p,l.Pt.X=_.X,l.Pt.Y=_.Y,n.use_xyz&&(l.Pt.Z=_.Z),p=this.DupOutPt(l,!A))}else{for(;l.Next.Pt.X>=_.X&&l.Next.Pt.X<=l.Pt.X&&l.Next.Pt.Y===_.Y;)l=l.Next;!A&&l.Pt.X!==_.X&&(l=l.Next),p=this.DupOutPt(l,A),n.IntPoint.op_Inequality(p.Pt,_)&&(l=p,l.Pt.X=_.X,l.Pt.Y=_.Y,n.use_xyz&&(l.Pt.Z=_.Z),p=this.DupOutPt(l,A))}return D===n.Direction.dLeftToRight===A?(r.Prev=l,l.Next=r,a.Next=p,p.Prev=a):(r.Next=l,l.Prev=r,a.Prev=p,p.Next=a),!0},n.Clipper.prototype.JoinPoints=function(r,a,l){var p=r.OutPt1,_=new n.OutPt,A=r.OutPt2,D=new n.OutPt,$=r.OutPt1.Pt.Y===r.OffPt.Y;if($&&n.IntPoint.op_Equality(r.OffPt,r.OutPt1.Pt)&&n.IntPoint.op_Equality(r.OffPt,r.OutPt2.Pt)){if(a!==l)return!1;for(_=r.OutPt1.Next;_!==p&&n.IntPoint.op_Equality(_.Pt,r.OffPt);)_=_.Next;var J=_.Pt.Y>r.OffPt.Y;for(D=r.OutPt2.Next;D!==A&&n.IntPoint.op_Equality(D.Pt,r.OffPt);)D=D.Next;var lt=D.Pt.Y>r.OffPt.Y;return J===lt?!1:J?(_=this.DupOutPt(p,!1),D=this.DupOutPt(A,!0),p.Prev=A,A.Next=p,_.Next=D,D.Prev=_,r.OutPt1=p,r.OutPt2=_,!0):(_=this.DupOutPt(p,!0),D=this.DupOutPt(A,!1),p.Next=A,A.Prev=p,_.Prev=D,D.Next=_,r.OutPt1=p,r.OutPt2=_,!0)}else if($){for(_=p;p.Prev.Pt.Y===p.Pt.Y&&p.Prev!==_&&p.Prev!==A;)p=p.Prev;for(;_.Next.Pt.Y===_.Pt.Y&&_.Next!==p&&_.Next!==A;)_=_.Next;if(_.Next===p||_.Next===A)return!1;for(D=A;A.Prev.Pt.Y===A.Pt.Y&&A.Prev!==D&&A.Prev!==_;)A=A.Prev;for(;D.Next.Pt.Y===D.Pt.Y&&D.Next!==A&&D.Next!==p;)D=D.Next;if(D.Next===A||D.Next===p)return!1;var Et={Left:null,Right:null};if(!this.GetOverlap(p.Pt.X,_.Pt.X,A.Pt.X,D.Pt.X,Et))return!1;var bt=Et.Left,Pt=Et.Right,re=new n.IntPoint0,_e;return p.Pt.X>=bt&&p.Pt.X<=Pt?(re.X=p.Pt.X,re.Y=p.Pt.Y,n.use_xyz&&(re.Z=p.Pt.Z),_e=p.Pt.X>_.Pt.X):A.Pt.X>=bt&&A.Pt.X<=Pt?(re.X=A.Pt.X,re.Y=A.Pt.Y,n.use_xyz&&(re.Z=A.Pt.Z),_e=A.Pt.X>D.Pt.X):_.Pt.X>=bt&&_.Pt.X<=Pt?(re.X=_.Pt.X,re.Y=_.Pt.Y,n.use_xyz&&(re.Z=_.Pt.Z),_e=_.Pt.X>p.Pt.X):(re.X=D.Pt.X,re.Y=D.Pt.Y,n.use_xyz&&(re.Z=D.Pt.Z),_e=D.Pt.X>A.Pt.X),r.OutPt1=p,r.OutPt2=A,this.JoinHorz(p,_,A,D,re,_e)}else{for(_=p.Next;n.IntPoint.op_Equality(_.Pt,p.Pt)&&_!==p;)_=_.Next;var we=_.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,_.Pt,r.OffPt,this.m_UseFullRange);if(we){for(_=p.Prev;n.IntPoint.op_Equality(_.Pt,p.Pt)&&_!==p;)_=_.Prev;if(_.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,_.Pt,r.OffPt,this.m_UseFullRange))return!1}for(D=A.Next;n.IntPoint.op_Equality(D.Pt,A.Pt)&&D!==A;)D=D.Next;var Be=D.Pt.Y>A.Pt.Y||!n.ClipperBase.SlopesEqual4(A.Pt,D.Pt,r.OffPt,this.m_UseFullRange);if(Be){for(D=A.Prev;n.IntPoint.op_Equality(D.Pt,A.Pt)&&D!==A;)D=D.Prev;if(D.Pt.Y>A.Pt.Y||!n.ClipperBase.SlopesEqual4(A.Pt,D.Pt,r.OffPt,this.m_UseFullRange))return!1}return _===p||D===A||_===D||a===l&&we===Be?!1:we?(_=this.DupOutPt(p,!1),D=this.DupOutPt(A,!0),p.Prev=A,A.Next=p,_.Next=D,D.Prev=_,r.OutPt1=p,r.OutPt2=_,!0):(_=this.DupOutPt(p,!0),D=this.DupOutPt(A,!1),p.Next=A,A.Prev=p,_.Prev=D,D.Next=_,r.OutPt1=p,r.OutPt2=_,!0)}},n.Clipper.GetBounds=function(r){for(var a=0,l=r.length;a<l&&r[a].length===0;)a++;if(a===l)return new n.IntRect(0,0,0,0);var p=new n.IntRect;for(p.left=r[a][0].X,p.right=p.left,p.top=r[a][0].Y,p.bottom=p.top;a<l;a++)for(var _=0,A=r[a].length;_<A;_++)r[a][_].X<p.left?p.left=r[a][_].X:r[a][_].X>p.right&&(p.right=r[a][_].X),r[a][_].Y<p.top?p.top=r[a][_].Y:r[a][_].Y>p.bottom&&(p.bottom=r[a][_].Y);return p},n.Clipper.prototype.GetBounds2=function(r){var a=r,l=new n.IntRect;for(l.left=r.Pt.X,l.right=r.Pt.X,l.top=r.Pt.Y,l.bottom=r.Pt.Y,r=r.Next;r!==a;)r.Pt.X<l.left&&(l.left=r.Pt.X),r.Pt.X>l.right&&(l.right=r.Pt.X),r.Pt.Y<l.top&&(l.top=r.Pt.Y),r.Pt.Y>l.bottom&&(l.bottom=r.Pt.Y),r=r.Next;return l},n.Clipper.PointInPolygon=function(r,a){var l=0,p=a.length;if(p<3)return 0;for(var _=a[0],A=1;A<=p;++A){var D=A===p?a[0]:a[A];if(D.Y===r.Y&&(D.X===r.X||_.Y===r.Y&&D.X>r.X==_.X<r.X))return-1;if(_.Y<r.Y!=D.Y<r.Y){if(_.X>=r.X)if(D.X>r.X)l=1-l;else{var $=(_.X-r.X)*(D.Y-r.Y)-(D.X-r.X)*(_.Y-r.Y);if($===0)return-1;$>0==D.Y>_.Y&&(l=1-l)}else if(D.X>r.X){var $=(_.X-r.X)*(D.Y-r.Y)-(D.X-r.X)*(_.Y-r.Y);if($===0)return-1;$>0==D.Y>_.Y&&(l=1-l)}}_=D}return l},n.Clipper.prototype.PointInPolygon=function(r,a){var l=0,p=a,_=r.X,A=r.Y,D=a.Pt.X,$=a.Pt.Y;do{a=a.Next;var J=a.Pt.X,lt=a.Pt.Y;if(lt===A&&(J===_||$===A&&J>_==D<_))return-1;if($<A!=lt<A){if(D>=_)if(J>_)l=1-l;else{var Et=(D-_)*(lt-A)-(J-_)*($-A);if(Et===0)return-1;Et>0==lt>$&&(l=1-l)}else if(J>_){var Et=(D-_)*(lt-A)-(J-_)*($-A);if(Et===0)return-1;Et>0==lt>$&&(l=1-l)}}D=J,$=lt}while(p!==a);return l},n.Clipper.prototype.Poly2ContainsPoly1=function(r,a){var l=r;do{var p=this.PointInPolygon(l.Pt,a);if(p>=0)return p>0;l=l.Next}while(l!==r);return!0},n.Clipper.prototype.FixupFirstLefts1=function(r,a){for(var l,p,_=0,A=this.m_PolyOuts.length;_<A;_++)l=this.m_PolyOuts[_],p=n.Clipper.ParseFirstLeft(l.FirstLeft),l.Pts!==null&&p===r&&this.Poly2ContainsPoly1(l.Pts,a.Pts)&&(l.FirstLeft=a)},n.Clipper.prototype.FixupFirstLefts2=function(r,a){for(var l=a.FirstLeft,p,_,A=0,D=this.m_PolyOuts.length;A<D;A++)p=this.m_PolyOuts[A],!(p.Pts===null||p===a||p===r)&&(_=n.Clipper.ParseFirstLeft(p.FirstLeft),!(_!==l&&_!==r&&_!==a)&&(this.Poly2ContainsPoly1(p.Pts,r.Pts)?p.FirstLeft=r:this.Poly2ContainsPoly1(p.Pts,a.Pts)?p.FirstLeft=a:(p.FirstLeft===r||p.FirstLeft===a)&&(p.FirstLeft=l)))},n.Clipper.prototype.FixupFirstLefts3=function(r,a){for(var l,p,_=0,A=this.m_PolyOuts.length;_<A;_++)l=this.m_PolyOuts[_],p=n.Clipper.ParseFirstLeft(l.FirstLeft),l.Pts!==null&&p===r&&(l.FirstLeft=a)},n.Clipper.ParseFirstLeft=function(r){for(;r!==null&&r.Pts===null;)r=r.FirstLeft;return r},n.Clipper.prototype.JoinCommonEdges=function(){for(var r=0,a=this.m_Joins.length;r<a;r++){var l=this.m_Joins[r],p=this.GetOutRec(l.OutPt1.Idx),_=this.GetOutRec(l.OutPt2.Idx);if(!(p.Pts===null||_.Pts===null)&&!(p.IsOpen||_.IsOpen)){var A;p===_?A=p:this.OutRec1RightOfOutRec2(p,_)?A=_:this.OutRec1RightOfOutRec2(_,p)?A=p:A=this.GetLowermostRec(p,_),this.JoinPoints(l,p,_)&&(p===_?(p.Pts=l.OutPt1,p.BottomPt=null,_=this.CreateOutRec(),_.Pts=l.OutPt2,this.UpdateOutPtIdxs(_),this.Poly2ContainsPoly1(_.Pts,p.Pts)?(_.IsHole=!p.IsHole,_.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts2(_,p),(_.IsHole^this.ReverseSolution)==this.Area$1(_)>0&&this.ReversePolyPtLinks(_.Pts)):this.Poly2ContainsPoly1(p.Pts,_.Pts)?(_.IsHole=p.IsHole,p.IsHole=!_.IsHole,_.FirstLeft=p.FirstLeft,p.FirstLeft=_,this.m_UsingPolyTree&&this.FixupFirstLefts2(p,_),(p.IsHole^this.ReverseSolution)==this.Area$1(p)>0&&this.ReversePolyPtLinks(p.Pts)):(_.IsHole=p.IsHole,_.FirstLeft=p.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(p,_))):(_.Pts=null,_.BottomPt=null,_.Idx=p.Idx,p.IsHole=A.IsHole,A===_&&(p.FirstLeft=_.FirstLeft),_.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts3(_,p)))}}},n.Clipper.prototype.UpdateOutPtIdxs=function(r){var a=r.Pts;do a.Idx=r.Idx,a=a.Prev;while(a!==r.Pts)},n.Clipper.prototype.DoSimplePolygons=function(){for(var r=0;r<this.m_PolyOuts.length;){var a=this.m_PolyOuts[r++],l=a.Pts;if(!(l===null||a.IsOpen))do{for(var p=l.Next;p!==a.Pts;){if(n.IntPoint.op_Equality(l.Pt,p.Pt)&&p.Next!==l&&p.Prev!==l){var _=l.Prev,A=p.Prev;l.Prev=A,A.Next=l,p.Prev=_,_.Next=p,a.Pts=l;var D=this.CreateOutRec();D.Pts=p,this.UpdateOutPtIdxs(D),this.Poly2ContainsPoly1(D.Pts,a.Pts)?(D.IsHole=!a.IsHole,D.FirstLeft=a,this.m_UsingPolyTree&&this.FixupFirstLefts2(D,a)):this.Poly2ContainsPoly1(a.Pts,D.Pts)?(D.IsHole=a.IsHole,a.IsHole=!D.IsHole,D.FirstLeft=a.FirstLeft,a.FirstLeft=D,this.m_UsingPolyTree&&this.FixupFirstLefts2(a,D)):(D.IsHole=a.IsHole,D.FirstLeft=a.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(a,D)),p=l}p=p.Next}l=l.Next}while(l!==a.Pts)}},n.Clipper.Area=function(r){if(!Array.isArray(r))return 0;var a=r.length;if(a<3)return 0;for(var l=0,p=0,_=a-1;p<a;++p)l+=(r[_].X+r[p].X)*(r[_].Y-r[p].Y),_=p;return-l*.5},n.Clipper.prototype.Area=function(r){var a=r;if(r===null)return 0;var l=0;do l=l+(r.Prev.Pt.X+r.Pt.X)*(r.Prev.Pt.Y-r.Pt.Y),r=r.Next;while(r!==a);return l*.5},n.Clipper.prototype.Area$1=function(r){return this.Area(r.Pts)},n.Clipper.SimplifyPolygon=function(r,a){var l=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPath(r,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,l,a,a),l},n.Clipper.SimplifyPolygons=function(r,a){typeof a>"u"&&(a=n.PolyFillType.pftEvenOdd);var l=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPaths(r,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,l,a,a),l},n.Clipper.DistanceSqrd=function(r,a){var l=r.X-a.X,p=r.Y-a.Y;return l*l+p*p},n.Clipper.DistanceFromLineSqrd=function(r,a,l){var p=a.Y-l.Y,_=l.X-a.X,A=p*a.X+_*a.Y;return A=p*r.X+_*r.Y-A,A*A/(p*p+_*_)},n.Clipper.SlopesNearCollinear=function(r,a,l,p){return Math.abs(r.X-a.X)>Math.abs(r.Y-a.Y)?r.X>a.X==r.X<l.X?n.Clipper.DistanceFromLineSqrd(r,a,l)<p:a.X>r.X==a.X<l.X?n.Clipper.DistanceFromLineSqrd(a,r,l)<p:n.Clipper.DistanceFromLineSqrd(l,r,a)<p:r.Y>a.Y==r.Y<l.Y?n.Clipper.DistanceFromLineSqrd(r,a,l)<p:a.Y>r.Y==a.Y<l.Y?n.Clipper.DistanceFromLineSqrd(a,r,l)<p:n.Clipper.DistanceFromLineSqrd(l,r,a)<p},n.Clipper.PointsAreClose=function(r,a,l){var p=r.X-a.X,_=r.Y-a.Y;return p*p+_*_<=l},n.Clipper.ExcludeOp=function(r){var a=r.Prev;return a.Next=r.Next,r.Next.Prev=a,a.Idx=0,a},n.Clipper.CleanPolygon=function(r,a){typeof a>"u"&&(a=1.415);var l=r.length;if(l===0)return new Array;for(var p=new Array(l),_=0;_<l;++_)p[_]=new n.OutPt;for(var _=0;_<l;++_)p[_].Pt=r[_],p[_].Next=p[(_+1)%l],p[_].Next.Prev=p[_],p[_].Idx=0;for(var A=a*a,D=p[0];D.Idx===0&&D.Next!==D.Prev;)n.Clipper.PointsAreClose(D.Pt,D.Prev.Pt,A)?(D=n.Clipper.ExcludeOp(D),l--):n.Clipper.PointsAreClose(D.Prev.Pt,D.Next.Pt,A)?(n.Clipper.ExcludeOp(D.Next),D=n.Clipper.ExcludeOp(D),l-=2):n.Clipper.SlopesNearCollinear(D.Prev.Pt,D.Pt,D.Next.Pt,A)?(D=n.Clipper.ExcludeOp(D),l--):(D.Idx=1,D=D.Next);l<3&&(l=0);for(var $=new Array(l),_=0;_<l;++_)$[_]=new n.IntPoint1(D.Pt),D=D.Next;return p=null,$},n.Clipper.CleanPolygons=function(r,a){for(var l=new Array(r.length),p=0,_=r.length;p<_;p++)l[p]=n.Clipper.CleanPolygon(r[p],a);return l},n.Clipper.Minkowski=function(r,a,l,p){var _=p?1:0,A=r.length,D=a.length,$=new Array;if(l)for(var J=0;J<D;J++){for(var lt=new Array(A),Et=0,bt=r.length,Pt=r[Et];Et<bt;Et++,Pt=r[Et])lt[Et]=new n.IntPoint2(a[J].X+Pt.X,a[J].Y+Pt.Y);$.push(lt)}else for(var J=0;J<D;J++){for(var lt=new Array(A),Et=0,bt=r.length,Pt=r[Et];Et<bt;Et++,Pt=r[Et])lt[Et]=new n.IntPoint2(a[J].X-Pt.X,a[J].Y-Pt.Y);$.push(lt)}for(var re=new Array,J=0;J<D-1+_;J++)for(var Et=0;Et<A;Et++){var _e=new Array;_e.push($[J%D][Et%A]),_e.push($[(J+1)%D][Et%A]),_e.push($[(J+1)%D][(Et+1)%A]),_e.push($[J%D][(Et+1)%A]),n.Clipper.Orientation(_e)||_e.reverse(),re.push(_e)}return re},n.Clipper.MinkowskiSum=function(r,a,l){if(a[0]instanceof Array){for(var _=a,D=new n.Paths,A=new n.Clipper,$=0;$<_.length;++$){var J=n.Clipper.Minkowski(r,_[$],!0,l);if(A.AddPaths(J,n.PolyType.ptSubject,!0),l){var p=n.Clipper.TranslatePath(_[$],r[0]);A.AddPath(p,n.PolyType.ptClip,!0)}}return A.Execute(n.ClipType.ctUnion,D,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),D}else{var p=a,_=n.Clipper.Minkowski(r,p,!0,l),A=new n.Clipper;return A.AddPaths(_,n.PolyType.ptSubject,!0),A.Execute(n.ClipType.ctUnion,_,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),_}},n.Clipper.TranslatePath=function(r,a){for(var l=new n.Path,p=0;p<r.length;p++)l.push(new n.IntPoint2(r[p].X+a.X,r[p].Y+a.Y));return l},n.Clipper.MinkowskiDiff=function(r,a){var l=n.Clipper.Minkowski(r,a,!1,!0),p=new n.Clipper;return p.AddPaths(l,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),l},n.Clipper.PolyTreeToPaths=function(r){var a=new Array;return n.Clipper.AddPolyNodeToPaths(r,n.Clipper.NodeType.ntAny,a),a},n.Clipper.AddPolyNodeToPaths=function(r,a,l){var p=!0;switch(a){case n.Clipper.NodeType.ntOpen:return;case n.Clipper.NodeType.ntClosed:p=!r.IsOpen;break;default:break}r.m_polygon.length>0&&p&&l.push(r.m_polygon);for(var _=0,A=r.Childs(),D=A.length,$=A[_];_<D;_++,$=A[_])n.Clipper.AddPolyNodeToPaths($,a,l)},n.Clipper.OpenPathsFromPolyTree=function(r){for(var a=new n.Paths,l=0,p=r.ChildCount();l<p;l++)r.Childs()[l].IsOpen&&a.push(r.Childs()[l].m_polygon);return a},n.Clipper.ClosedPathsFromPolyTree=function(r){var a=new n.Paths;return n.Clipper.AddPolyNodeToPaths(r,n.Clipper.NodeType.ntClosed,a),a},de(n.Clipper,n.ClipperBase),n.Clipper.NodeType={ntAny:0,ntOpen:1,ntClosed:2},n.ClipperOffset=function(r,a){typeof r>"u"&&(r=2),typeof a>"u"&&(a=n.ClipperOffset.def_arc_tolerance),this.m_destPolys=new n.Paths,this.m_srcPoly=new n.Path,this.m_destPoly=new n.Path,this.m_normals=new Array,this.m_delta=0,this.m_sinA=0,this.m_sin=0,this.m_cos=0,this.m_miterLim=0,this.m_StepsPerRad=0,this.m_lowest=new n.IntPoint0,this.m_polyNodes=new n.PolyNode,this.MiterLimit=r,this.ArcTolerance=a,this.m_lowest.X=-1},n.ClipperOffset.two_pi=6.28318530717959,n.ClipperOffset.def_arc_tolerance=.25,n.ClipperOffset.prototype.Clear=function(){n.Clear(this.m_polyNodes.Childs()),this.m_lowest.X=-1},n.ClipperOffset.Round=n.Clipper.Round,n.ClipperOffset.prototype.AddPath=function(r,a,l){var p=r.length-1;if(!(p<0)){var _=new n.PolyNode;if(_.m_jointype=a,_.m_endtype=l,l===n.EndType.etClosedLine||l===n.EndType.etClosedPolygon)for(;p>0&&n.IntPoint.op_Equality(r[0],r[p]);)p--;_.m_polygon.push(r[0]);for(var A=0,D=0,$=1;$<=p;$++)n.IntPoint.op_Inequality(_.m_polygon[A],r[$])&&(A++,_.m_polygon.push(r[$]),(r[$].Y>_.m_polygon[D].Y||r[$].Y===_.m_polygon[D].Y&&r[$].X<_.m_polygon[D].X)&&(D=A));if(!(l===n.EndType.etClosedPolygon&&A<2)&&(this.m_polyNodes.AddChild(_),l===n.EndType.etClosedPolygon))if(this.m_lowest.X<0)this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,D);else{var J=this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];(_.m_polygon[D].Y>J.Y||_.m_polygon[D].Y===J.Y&&_.m_polygon[D].X<J.X)&&(this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,D))}}},n.ClipperOffset.prototype.AddPaths=function(r,a,l){for(var p=0,_=r.length;p<_;p++)this.AddPath(r[p],a,l)},n.ClipperOffset.prototype.FixOrientations=function(){if(this.m_lowest.X>=0&&!n.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))for(var r=0;r<this.m_polyNodes.ChildCount();r++){var a=this.m_polyNodes.Childs()[r];(a.m_endtype===n.EndType.etClosedPolygon||a.m_endtype===n.EndType.etClosedLine&&n.Clipper.Orientation(a.m_polygon))&&a.m_polygon.reverse()}else for(var r=0;r<this.m_polyNodes.ChildCount();r++){var a=this.m_polyNodes.Childs()[r];a.m_endtype===n.EndType.etClosedLine&&!n.Clipper.Orientation(a.m_polygon)&&a.m_polygon.reverse()}},n.ClipperOffset.GetUnitNormal=function(r,a){var l=a.X-r.X,p=a.Y-r.Y;if(l===0&&p===0)return new n.DoublePoint2(0,0);var _=1/Math.sqrt(l*l+p*p);return l*=_,p*=_,new n.DoublePoint2(p,-l)},n.ClipperOffset.prototype.DoOffset=function(r){if(this.m_destPolys=new Array,this.m_delta=r,n.ClipperBase.near_zero(r)){for(var a=0;a<this.m_polyNodes.ChildCount();a++){var l=this.m_polyNodes.Childs()[a];l.m_endtype===n.EndType.etClosedPolygon&&this.m_destPolys.push(l.m_polygon)}return}this.MiterLimit>2?this.m_miterLim=2/(this.MiterLimit*this.MiterLimit):this.m_miterLim=.5;var p;this.ArcTolerance<=0?p=n.ClipperOffset.def_arc_tolerance:this.ArcTolerance>Math.abs(r)*n.ClipperOffset.def_arc_tolerance?p=Math.abs(r)*n.ClipperOffset.def_arc_tolerance:p=this.ArcTolerance;var _=3.14159265358979/Math.acos(1-p/Math.abs(r));this.m_sin=Math.sin(n.ClipperOffset.two_pi/_),this.m_cos=Math.cos(n.ClipperOffset.two_pi/_),this.m_StepsPerRad=_/n.ClipperOffset.two_pi,r<0&&(this.m_sin=-this.m_sin);for(var a=0;a<this.m_polyNodes.ChildCount();a++){var l=this.m_polyNodes.Childs()[a];this.m_srcPoly=l.m_polygon;var A=this.m_srcPoly.length;if(!(A===0||r<=0&&(A<3||l.m_endtype!==n.EndType.etClosedPolygon))){if(this.m_destPoly=new Array,A===1){if(l.m_jointype===n.JoinType.jtRound)for(var D=1,$=0,J=1;J<=_;J++){this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+D*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+$*r)));var lt=D;D=D*this.m_cos-this.m_sin*$,$=lt*this.m_sin+$*this.m_cos}else for(var D=-1,$=-1,J=0;J<4;++J)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+D*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+$*r))),D<0?D=1:$<0?$=1:D=-1;this.m_destPolys.push(this.m_destPoly);continue}this.m_normals.length=0;for(var J=0;J<A-1;J++)this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[J],this.m_srcPoly[J+1]));if(l.m_endtype===n.EndType.etClosedLine||l.m_endtype===n.EndType.etClosedPolygon?this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[A-1],this.m_srcPoly[0])):this.m_normals.push(new n.DoublePoint1(this.m_normals[A-2])),l.m_endtype===n.EndType.etClosedPolygon){for(var Et=A-1,J=0;J<A;J++)Et=this.OffsetPoint(J,Et,l.m_jointype);this.m_destPolys.push(this.m_destPoly)}else if(l.m_endtype===n.EndType.etClosedLine){for(var Et=A-1,J=0;J<A;J++)Et=this.OffsetPoint(J,Et,l.m_jointype);this.m_destPolys.push(this.m_destPoly),this.m_destPoly=new Array;for(var bt=this.m_normals[A-1],J=A-1;J>0;J--)this.m_normals[J]=new n.DoublePoint2(-this.m_normals[J-1].X,-this.m_normals[J-1].Y);this.m_normals[0]=new n.DoublePoint2(-bt.X,-bt.Y),Et=0;for(var J=A-1;J>=0;J--)Et=this.OffsetPoint(J,Et,l.m_jointype);this.m_destPolys.push(this.m_destPoly)}else{for(var Et=0,J=1;J<A-1;++J)Et=this.OffsetPoint(J,Et,l.m_jointype);var Pt;if(l.m_endtype===n.EndType.etOpenButt){var J=A-1;Pt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[J].X+this.m_normals[J].X*r),n.ClipperOffset.Round(this.m_srcPoly[J].Y+this.m_normals[J].Y*r)),this.m_destPoly.push(Pt),Pt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[J].X-this.m_normals[J].X*r),n.ClipperOffset.Round(this.m_srcPoly[J].Y-this.m_normals[J].Y*r)),this.m_destPoly.push(Pt)}else{var J=A-1;Et=A-2,this.m_sinA=0,this.m_normals[J]=new n.DoublePoint2(-this.m_normals[J].X,-this.m_normals[J].Y),l.m_endtype===n.EndType.etOpenSquare?this.DoSquare(J,Et):this.DoRound(J,Et)}for(var J=A-1;J>0;J--)this.m_normals[J]=new n.DoublePoint2(-this.m_normals[J-1].X,-this.m_normals[J-1].Y);this.m_normals[0]=new n.DoublePoint2(-this.m_normals[1].X,-this.m_normals[1].Y),Et=A-1;for(var J=Et-1;J>0;--J)Et=this.OffsetPoint(J,Et,l.m_jointype);l.m_endtype===n.EndType.etOpenButt?(Pt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X-this.m_normals[0].X*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y-this.m_normals[0].Y*r)),this.m_destPoly.push(Pt),Pt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+this.m_normals[0].X*r),n.ClipperOffset.Round(this.m_srcPoly[0].Y+this.m_normals[0].Y*r)),this.m_destPoly.push(Pt)):(Et=1,this.m_sinA=0,l.m_endtype===n.EndType.etOpenSquare?this.DoSquare(0,1):this.DoRound(0,1)),this.m_destPolys.push(this.m_destPoly)}}}},n.ClipperOffset.prototype.Execute=function(){var r=arguments,a=r[0]instanceof n.PolyTree;if(a){var l=r[0],p=r[1];l.Clear(),this.FixOrientations(),this.DoOffset(p);var _=new n.Clipper(0);if(_.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)_.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var A=n.Clipper.GetBounds(this.m_destPolys),D=new n.Path;if(D.push(new n.IntPoint2(A.left-10,A.bottom+10)),D.push(new n.IntPoint2(A.right+10,A.bottom+10)),D.push(new n.IntPoint2(A.right+10,A.top-10)),D.push(new n.IntPoint2(A.left-10,A.top-10)),_.AddPath(D,n.PolyType.ptSubject,!0),_.ReverseSolution=!0,_.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),l.ChildCount()===1&&l.Childs()[0].ChildCount()>0){var $=l.Childs()[0];l.Childs()[0]=$.Childs()[0],l.Childs()[0].m_Parent=l;for(var J=1;J<$.ChildCount();J++)l.AddChild($.Childs()[J])}else l.Clear()}}else{var l=r[0],p=r[1];n.Clear(l),this.FixOrientations(),this.DoOffset(p);var _=new n.Clipper(0);if(_.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)_.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var A=n.Clipper.GetBounds(this.m_destPolys),D=new n.Path;D.push(new n.IntPoint2(A.left-10,A.bottom+10)),D.push(new n.IntPoint2(A.right+10,A.bottom+10)),D.push(new n.IntPoint2(A.right+10,A.top-10)),D.push(new n.IntPoint2(A.left-10,A.top-10)),_.AddPath(D,n.PolyType.ptSubject,!0),_.ReverseSolution=!0,_.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),l.length>0&&l.splice(0,1)}}},n.ClipperOffset.prototype.OffsetPoint=function(r,a,l){if(this.m_sinA=this.m_normals[a].X*this.m_normals[r].Y-this.m_normals[r].X*this.m_normals[a].Y,Math.abs(this.m_sinA*this.m_delta)<1){var p=this.m_normals[a].X*this.m_normals[r].X+this.m_normals[r].Y*this.m_normals[a].Y;if(p>0)return this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[a].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[a].Y*this.m_delta))),a}else this.m_sinA>1?this.m_sinA=1:this.m_sinA<-1&&(this.m_sinA=-1);if(this.m_sinA*this.m_delta<0)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[a].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[a].Y*this.m_delta))),this.m_destPoly.push(new n.IntPoint1(this.m_srcPoly[r])),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[r].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[r].Y*this.m_delta)));else switch(l){case n.JoinType.jtMiter:{var _=1+(this.m_normals[r].X*this.m_normals[a].X+this.m_normals[r].Y*this.m_normals[a].Y);_>=this.m_miterLim?this.DoMiter(r,a,_):this.DoSquare(r,a);break}case n.JoinType.jtSquare:this.DoSquare(r,a);break;case n.JoinType.jtRound:this.DoRound(r,a);break}return a=r,a},n.ClipperOffset.prototype.DoSquare=function(r,a){var l=Math.tan(Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[r].X+this.m_normals[a].Y*this.m_normals[r].Y)/4);this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_delta*(this.m_normals[a].X-this.m_normals[a].Y*l)),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_delta*(this.m_normals[a].Y+this.m_normals[a].X*l)))),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_delta*(this.m_normals[r].X+this.m_normals[r].Y*l)),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_delta*(this.m_normals[r].Y-this.m_normals[r].X*l))))},n.ClipperOffset.prototype.DoMiter=function(r,a,l){var p=this.m_delta/l;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+(this.m_normals[a].X+this.m_normals[r].X)*p),n.ClipperOffset.Round(this.m_srcPoly[r].Y+(this.m_normals[a].Y+this.m_normals[r].Y)*p)))},n.ClipperOffset.prototype.DoRound=function(r,a){for(var l=Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[r].X+this.m_normals[a].Y*this.m_normals[r].Y),p=Math.max(n.Cast_Int32(n.ClipperOffset.Round(this.m_StepsPerRad*Math.abs(l))),1),_=this.m_normals[a].X,A=this.m_normals[a].Y,D,$=0;$<p;++$)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+_*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+A*this.m_delta))),D=_,_=_*this.m_cos-this.m_sin*A,A=D*this.m_sin+A*this.m_cos;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[r].X+this.m_normals[r].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[r].Y+this.m_normals[r].Y*this.m_delta)))},n.Error=function(r){try{throw new Error(r)}catch(a){alert(a.message)}},n.JS={},n.JS.AreaOfPolygon=function(r,a){return a||(a=1),n.Clipper.Area(r)/(a*a)},n.JS.AreaOfPolygons=function(r,a){a||(a=1);for(var l=0,p=0;p<r.length;p++)l+=n.Clipper.Area(r[p]);return l/(a*a)},n.JS.BoundsOfPath=function(r,a){return n.JS.BoundsOfPaths([r],a)},n.JS.BoundsOfPaths=function(r,a){a||(a=1);var l=n.Clipper.GetBounds(r);return l.left/=a,l.bottom/=a,l.right/=a,l.top/=a,l},n.JS.Clean=function(p,a){if(!(p instanceof Array))return[];var l=p[0]instanceof Array,p=n.JS.Clone(p);if(typeof a!="number"||a===null)return n.Error("Delta is not a number in Clean()."),p;if(p.length===0||p.length===1&&p[0].length===0||a<0)return p;l||(p=[p]);for(var _=p.length,A,D,$,J,lt,Et,bt,Pt=[],re=0;re<_;re++)if(D=p[re],A=D.length,A!==0){if(A<3){$=D,Pt.push($);continue}for($=D,J=a*a,lt=D[0],Et=1,bt=1;bt<A;bt++)(D[bt].X-lt.X)*(D[bt].X-lt.X)+(D[bt].Y-lt.Y)*(D[bt].Y-lt.Y)<=J||($[Et]=D[bt],lt=D[bt],Et++);lt=D[Et-1],(D[0].X-lt.X)*(D[0].X-lt.X)+(D[0].Y-lt.Y)*(D[0].Y-lt.Y)<=J&&Et--,Et<A&&$.splice(Et,A-Et),$.length&&Pt.push($)}return!l&&Pt.length?Pt=Pt[0]:!l&&Pt.length===0?Pt=[]:l&&Pt.length===0&&(Pt=[[]]),Pt},n.JS.Clone=function(r){if(!(r instanceof Array))return[];if(r.length===0)return[];if(r.length===1&&r[0].length===0)return[[]];var a=r[0]instanceof Array;a||(r=[r]);var l=r.length,p,_,A,D,$=new Array(l);for(_=0;_<l;_++){for(p=r[_].length,D=new Array(p),A=0;A<p;A++)D[A]={X:r[_][A].X,Y:r[_][A].Y};$[_]=D}return a||($=$[0]),$},n.JS.Lighten=function(r,a){if(!(r instanceof Array))return[];if(typeof a!="number"||a===null)return n.Error("Tolerance is not a number in Lighten()."),n.JS.Clone(r);if(r.length===0||r.length===1&&r[0].length===0||a<0)return n.JS.Clone(r);var l=r[0]instanceof Array;l||(r=[r]);var p,_,A,D,$,J,lt,Et,bt,Pt,re,_e,we,Be,dn,Hn,Fi,Lr=r.length,Fo=a*a,wi=[];for(p=0;p<Lr;p++)if(A=r[p],J=A.length,J!==0){for(D=0;D<1e6;D++){for($=[],J=A.length,A[J-1].X!==A[0].X||A[J-1].Y!==A[0].Y?(_e=1,A.push({X:A[0].X,Y:A[0].Y}),J=A.length):_e=0,re=[],_=0;_<J-2;_++)lt=A[_],bt=A[_+1],Et=A[_+2],Hn=lt.X,Fi=lt.Y,we=Et.X-Hn,Be=Et.Y-Fi,(we!==0||Be!==0)&&(dn=((bt.X-Hn)*we+(bt.Y-Fi)*Be)/(we*we+Be*Be),dn>1?(Hn=Et.X,Fi=Et.Y):dn>0&&(Hn+=we*dn,Fi+=Be*dn)),we=bt.X-Hn,Be=bt.Y-Fi,Pt=we*we+Be*Be,Pt<=Fo&&(re[_+1]=1,_++);for($.push({X:A[0].X,Y:A[0].Y}),_=1;_<J-1;_++)re[_]||$.push({X:A[_].X,Y:A[_].Y});if($.push({X:A[J-1].X,Y:A[J-1].Y}),_e&&A.pop(),re.length)A=$;else break}J=$.length,$[J-1].X===$[0].X&&$[J-1].Y===$[0].Y&&$.pop(),$.length>2&&wi.push($)}return l||(wi=wi[0]),typeof wi>"u"&&(wi=[]),wi},n.JS.PerimeterOfPath=function(r,a,l){if(typeof r>"u")return 0;var p=Math.sqrt,_=0,A,D,$=0,J=0,lt=0,Et=0,bt=r.length;if(bt<2)return 0;for(a&&(r[bt]=r[0],bt++);--bt;)A=r[bt],$=A.X,J=A.Y,D=r[bt-1],lt=D.X,Et=D.Y,_+=p(($-lt)*($-lt)+(J-Et)*(J-Et));return a&&r.pop(),_/l},n.JS.PerimeterOfPaths=function(r,a,l){l||(l=1);for(var p=0,_=0;_<r.length;_++)p+=n.JS.PerimeterOfPath(r[_],a,l);return p},n.JS.ScaleDownPath=function(r,a){var l,p;for(a||(a=1),l=r.length;l--;)p=r[l],p.X=p.X/a,p.Y=p.Y/a},n.JS.ScaleDownPaths=function(r,a){var l,p,_;for(a||(a=1),l=r.length;l--;)for(p=r[l].length;p--;)_=r[l][p],_.X=_.X/a,_.Y=_.Y/a},n.JS.ScaleUpPath=function(r,a){var l,p,_=Math.round;for(a||(a=1),l=r.length;l--;)p=r[l],p.X=_(p.X*a),p.Y=_(p.Y*a)},n.JS.ScaleUpPaths=function(r,a){var l,p,_,A=Math.round;for(a||(a=1),l=r.length;l--;)for(p=r[l].length;p--;)_=r[l][p],_.X=A(_.X*a),_.Y=A(_.Y*a)},n.ExPolygons=function(){return[]},n.ExPolygon=function(){this.outer=null,this.holes=null},n.JS.AddOuterPolyNodeToExPolygons=function(r,a){var l=new n.ExPolygon;l.outer=r.Contour();var p=r.Childs(),_=p.length;l.holes=new Array(_);var A,D,$,J,lt,Et;for($=0;$<_;$++)for(A=p[$],l.holes[$]=A.Contour(),J=0,lt=A.Childs(),Et=lt.length;J<Et;J++)D=lt[J],n.JS.AddOuterPolyNodeToExPolygons(D,a);a.push(l)},n.JS.ExPolygonsToPaths=function(r){var a,l,p,_,A=new n.Paths;for(a=0,p=r.length;a<p;a++)for(A.push(r[a].outer),l=0,_=r[a].holes.length;l<_;l++)A.push(r[a].holes[l]);return A},n.JS.PolyTreeToExPolygons=function(r){var a=new n.ExPolygons,l,p,_,A;for(p=0,_=r.Childs(),A=_.length;p<A;p++)l=_[p],n.JS.AddOuterPolyNodeToExPolygons(l,a);return a}})()});function Xo(n,t,e,i=Qe.default.PolyFillType.pftNonZero){let s=new Qe.default.Clipper;s.AddPaths(Go(t),Qe.default.PolyType.ptSubject,!0),e&&s.AddPaths(Go(e),Qe.default.PolyType.ptClip,!0);let o=new Qe.default.Paths;return s.Execute(n,o,i,i),_c(o)}function Sn(n,t){if(!n.length)return[];let e=new Qe.default.ClipperOffset(2,Im);e.AddPaths(Go(n),Qe.default.JoinType.jtRound,Qe.default.EndType.etClosedPolygon);let i=new Qe.default.Paths;return e.Execute(i,t*Fr),_c(i)}function Gn(n){let t=0;for(let e=0,i=n.length-1;e<n.length;i=e++)t+=(n[i][0]+n[e][0])*(n[i][1]-n[e][1]);return-t/2}function ki(n){let t=1/0,e=1/0,i=-1/0,s=-1/0;for(let o of n)for(let[c,u]of o)c<t&&(t=c),c>i&&(i=c),u<e&&(e=u),u>s&&(s=u);return{minX:t,minY:e,maxX:i,maxY:s}}function Br(n){if(!n.length)return[];let t=new Qe.default.Clipper;t.AddPaths(Go(n),Qe.default.PolyType.ptSubject,!0);let e=new Qe.default.PolyTree;t.Execute(Qe.default.ClipType.ctUnion,e,Qe.default.PolyFillType.pftNonZero,Qe.default.PolyFillType.pftNonZero);let i=[],s=o=>{for(let c of o.Childs()){if(c.IsHole()){s(c);continue}let u=c.Childs().map(f=>f.Contour());i.push(_c([c.Contour(),...u]));for(let f of c.Childs())s(f)}};return s(e),i}function ks([n,t],e){let i=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){let[c,u]=e[s],[f,d]=e[o];u>t!=d>t&&n<(f-c)*(t-u)/(d-u)+c&&(i=!i)}return i}function di(n,t=1e-4){return n.filter(e=>e.length>=3&&Math.abs(Gn(e))>t)}function Rm(n,t=.005){if(n.length<8)return n;let e=0,i=-1;for(let u=1;u<n.length;u++){let f=(n[u][0]-n[0][0])**2+(n[u][1]-n[0][1])**2;f>i&&(i=f,e=u)}let s=u=>{let f=new Uint8Array(u.length);f[0]=f[u.length-1]=1;let d=[[0,u.length-1]];for(;d.length;){let[v,S]=d.pop(),[g,b]=u[v],[E,C]=u[S],M=Math.hypot(E-g,C-b)||1e-12,x=-1,B=t;for(let W=v+1;W<S;W++){let N=Math.abs((E-g)*(b-u[W][1])-(g-u[W][0])*(C-b))/M;N>B&&(B=N,x=W)}x>0&&(f[x]=1,d.push([v,x],[x,S]))}return u.filter((v,S)=>f[S])},o=s(n.slice(0,e+1)),c=s([...n.slice(e),n[0]]);return[...o,...c.slice(1,-1)]}var Qe,Fr,Im,Go,_c,wu,vc,Ur,Bs,fi,zs,Wo=Pn(()=>{Qe=du(bu(),1),Fr=1e3,Im=.01*Fr,Go=n=>n.map(t=>t.map(([e,i])=>({X:Math.round(e*Fr),Y:Math.round(i*Fr)}))),_c=n=>n.map(t=>t.map(e=>[e.X/Fr,e.Y/Fr]));wu=n=>Xo(Qe.default.ClipType.ctUnion,n,null,Qe.default.PolyFillType.pftEvenOdd),vc=n=>Xo(Qe.default.ClipType.ctUnion,n,null),Ur=(n,t)=>Xo(Qe.default.ClipType.ctDifference,n,t),Bs=(n,t)=>Xo(Qe.default.ClipType.ctIntersection,n,t);fi=n=>n.reduce((t,e)=>t+Gn(e),0);zs=(n,t)=>n.map(e=>Rm(e,t)).filter(e=>e.length>=3)});function Eu(n){let t=String(n.type||"").toLowerCase().replace(/[-_]/g," ");return Lm.has(t)||t.startsWith("flat")?"flat":t.startsWith("surfac")?"surfacing":t.startsWith("drill")?"drill":t.startsWith("ball")?"ball":t.startsWith("v")?"vbit":t.startsWith("chamfer")?"chamfer":t||"flat"}function cr(n,t){return t==="toolId"?n.toolId??n.id:n.toolNumber??n.toolId??n.id}function Tu(n){return(n||[]).filter(t=>t&&t.diameter>0).map(t=>({id:t.id,toolId:t.toolId??t.id,toolNumber:t.toolNumber??null,name:t.name||`${t.diameter} mm ${Eu(t)}`,kind:Eu(t),diameter:Number(t.diameter),fluteLength:Number(t.dimensions?.flute_length)||null,flutes:Number(t.metadata?.flutes)||2}))}function Au(n,t,e,i={}){let s=lr[t]||lr.mdf,o=Xn[e]||Xn.balanced,c=i.maxRpm||24e3,u=i.minRpm||0,f=Math.round(Math.min(c,Math.max(u,s.rpm))),d=Math.min(s.maxChip,s.chip*n.diameter),v=Math.min(i.maxFeed||4e3,4e3),S=Math.round(Math.min(v,Math.max(150,f*n.flutes*d*o.feed)));return{rpm:f,feed:S,plunge:Math.round(Math.max(60,S*.3)),stepdown:Math.max(.05,n.diameter*s.stepdown*o.stepdown),stepover:Math.max(.05,n.diameter*Math.min(.9,s.stepover*o.stepover)),rampAngle:s.ramp}}var lr,Xn,Lm,Vs=Pn(()=>{lr={softwood:{name:"Softwood",note:"Pine, cedar",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},hardwood:{name:"Hardwood",note:"Oak, maple, walnut",rpm:18e3,chip:.009,maxChip:.2,stepdown:.35,stepover:.4,ramp:4},mdf:{name:"MDF / Plywood",note:"Sheet goods",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},plastic:{name:"Plastic",note:"Acrylic, HDPE",rpm:16e3,chip:.01,maxChip:.2,stepdown:.3,stepover:.4,ramp:3},aluminum:{name:"Aluminum",note:"6061",rpm:18e3,chip:.003,maxChip:.05,stepdown:.1,stepover:.25,ramp:2},foam:{name:"Foam",note:"Tooling board",rpm:12e3,chip:.02,maxChip:.4,stepdown:1,stepover:.6,ramp:10}},Xn={fast:{name:"Fast",feed:1.15,stepdown:1.2,stepover:1.1,allowance:0},balanced:{name:"Balanced",feed:1,stepdown:1,stepover:1,allowance:.2},smooth:{name:"Smooth",feed:.85,stepdown:.8,stepover:.7,allowance:.25}},Lm=new Set(["flat","flat end mill","endmill","end mill","flat_end_mill"])});function Sc(n){return{material:"mdf",finish:"balanced",stock:{fit:!0,margin:2,extraTop:1,width:n.size[0]+4,depth:n.size[1]+4,thickness:n.size[2]+1},zero:{xy:"front-left",z:"top"},tabs:{enabled:!0,count:4,height:3},throughDepth:.3,disabled:{},toolOverride:{}}}function Yo(n,t){let[e,i,s]=n.size,o=t.stock,c=o.fit?e+2*o.margin:Math.max(e,o.width),u=o.fit?i+2*o.margin:Math.max(i,o.depth),f=o.fit?s+o.extraTop:Math.max(s,o.thickness);return{minX:(e-c)/2,minY:(i-u)/2,maxX:(e+c)/2,maxY:(i+u)/2,bottom:0,top:f,width:c,depth:u,thickness:f}}function Mc(n,t){let e=t.xy.split("-"),i=(n.minX+n.maxX)/2,s=(n.minY+n.maxY)/2;return e.includes("left")&&(i=n.minX),e.includes("right")&&(i=n.maxX),e.includes("front")&&(s=n.minY),e.includes("back")&&(s=n.maxY),{x:i,y:s,z:t.z==="bed"?n.bottom:n.top}}function Nm(n){let t=n.positions,e=n.indices,i=[];for(let s=0;s<e.length/3;s++){if(mc(n,s)[2]>-.001)continue;let c=[e[s*3]*3,e[s*3+1]*3,e[s*3+2]*3],u=c.map(f=>[t[f],t[f+1]]);Math.abs(Gn(u))<1e-6||i.push({loop:Gn(u)>0?u:u.reverse(),maxZ:Math.max(...c.map(f=>t[f+2]))})}return i}function Om(n){if(n.length!==1)return null;let t=n[0];if(t.length<12)return null;let e=ki([t]),i=(e.minX+e.maxX)/2,s=(e.minY+e.maxY)/2,o=t.map(([u,f])=>Math.hypot(u-i,f-s)),c=o.reduce((u,f)=>u+f,0)/o.length;return o.every(u=>Math.abs(u-c)<Math.max(.03,c*.01))?{x:i,y:s,d:2*c}:null}function Iu(n,t,e,i={}){let s=Or(n),o=Yo(s,e),c=Xn[e.finish]||Xn.balanced,u=[];s.squareEdges&&u.push({kind:"edges",text:"Chamfers or rounded edges face down on this side, so they are left square."}),s.undercut&&u.push({kind:"undercut",text:"Some faces point down, so they can\u2019t be reached from the top. Turn the part or cut it in a second setup."}),s.sloped&&u.push({kind:"sloped",text:"Sloped or curved faces (chamfers, fillets) aren\u2019t cut in 3D yet, so they are left square."});let f=t.filter(z=>z.kind==="flat").sort((z,q)=>q.diameter-z.diameter),d=t.filter(z=>z.kind==="drill"),v=t.filter(z=>z.kind==="surfacing").sort((z,q)=>q.diameter-z.diameter),S=new Map,g=z=>(z&&S.set(z.id,(S.get(z.id)||0)+1),z),b=e.material==="aluminum"?8:12.8,E=s.undercutArea>0?Nm(n):[],C=z=>{let q=wu(Su(n,z+kr)),st=E.filter(G=>G.maxZ>z+kr).map(G=>G.loop);return st.length?vc([...q,...st]):q},M=C(0),x=vc(Br(M).map(z=>z[0])),B=[],W=1,N=z=>(z.id=z.id||`op${W++}`,B.push(z),z);function F(z,q,st){let G=f.filter(_t=>_t.diameter<=b&&Hs(_t,q)&&Sn(z,-(_t.diameter/2+st)).length);if(!G.length)return null;let vt=G.map(_t=>({t:_t,c:Fm(z,_t.diameter/2)})),dt=vt.find(_t=>_t.c>=.85)||vt.reduce((_t,Xt)=>Xt.c>_t.c?Xt:_t);return(vt.find(_t=>S.has(_t.t.id)&&_t.c>=Math.min(.85,dt.c*.98))||dt).t}function U(z,q,st){let G=di(Ur(z,xc(z,q.diameter/2)),hr);if(fi(G)<hr)return null;let vt=f.filter(_t=>_t.diameter<q.diameter-1e-6&&Hs(_t,st));if(!vt.length)return{tool:null,left:G};let dt=fi(G);return{tool:vt.find(_t=>fi(di(Ur(z,xc(z,_t.diameter/2)),hr))<dt*.25)||vt[vt.length-1],left:G}}let Y=z=>Au(z,e.material,e.finish,i);if(o.top>s.top+kr){let z=v[0]||f[0];z&&N({id:"face",kind:"face",label:"Flatten the top",tool:g(z),zTop:o.top,zBottom:s.top,region:Pu(o),detail:`${Cn(o.top-s.top)} mm off the top`})}let P=[s.top,...s.floors.filter(z=>z<s.top-kr&&z>kr),0],V=[],j=(z,q)=>{let st=fi(z),G=fi(q);if(Math.abs(st-G)>Math.max(hr,st*.005))return!1;let vt=ki(z),dt=ki(q);return Math.abs(vt.minX-dt.minX)<.01&&Math.abs(vt.maxX-dt.maxX)<.01&&Math.abs(vt.minY-dt.minY)<.01&&Math.abs(vt.maxY-dt.maxY)<.01};for(let z=1;z<P.length;z++){let q=P[z-1],st=P[z],G=Ur(Pu(o),C(st));for(let vt of Br(G)){let dt=ki([vt[0]]),St=dt.minX<=o.minX+.001||dt.maxX>=o.maxX-.001||dt.minY<=o.minY+.001||dt.maxY>=o.maxY-.001,_t=null;if(St&&(st===0||(_t=di(Bs(vt,x),hr),fi(_t)<hr)))continue;let Xt=St?_t:vt,$t=V.find(ue=>ue.zFloor===q&&ue.outer===St&&j(ue.shape,Xt));$t?($t.zFloor=st,$t.region=vt):V.push({outer:St,region:vt,over:_t,shape:Xt,zTop:q,zFloor:st})}}let Q=new Map;for(let{outer:z,region:q,over:st,zTop:G,zFloor:vt}of V){let dt=vt===0,St=dt?-e.throughDepth:vt,_t=G-St;{if(z){let wt=F(Bs(q,Sn(st,13)),_t,c.allowance);if(!wt){u.push({kind:"notool",text:`A step ${Cn(G-vt)} mm deep has no end mill that fits.`});continue}let Zt=Bs(q,Sn(st,wt.diameter+.5));N({kind:"step",label:"Cut the step",tool:g(wt),zTop:G,zBottom:St,region:Zt,walls:q,detail:`${Cn(G-vt)} mm deep`});continue}let Xt=Om(q);if(Xt){let wt=`${Cn(Xt.d)}|${Cn(G)}|${Cn(St)}`;Q.has(wt)||Q.set(wt,{d:Xt.d,zTop:G,zBottom:St,through:dt,centers:[],regions:[]}),Q.get(wt).centers.push(Xt),Q.get(wt).regions.push(q);continue}let $t=ki([q[0]]),ue=F(q,_t,c.allowance),xe=`${Cn($t.maxX-$t.minX)} \xD7 ${Cn($t.maxY-$t.minY)} mm \xB7 ${dt?"through":`${Cn(G-vt)} mm deep`}`;if(!ue){u.push({kind:"notool",text:`No end mill fits the pocket ${xe}.`});continue}let Ee=N({kind:"pocket",label:dt?"Cut the opening":"Clear the pocket",tool:g(ue),zTop:G,zBottom:St,region:q,detail:xe}),yt=U(q,ue,_t);yt&&yt.tool?N({kind:"corners",label:"Clean the corners",tool:g(yt.tool),zTop:G,zBottom:St,region:q,after:Ee.id,detail:`Corners too tight for ${ue.name}`}):yt&&u.push({kind:"corners",text:`Pocket corners stay rounded to ${Cn(ue.diameter/2)} mm: no smaller end mill in your library.`})}}for(let z of Q.values()){let q=z.centers.length,st=z.zTop-z.zBottom,G=`\xD8${Cn(z.d)} mm ${z.through?"through":`${Cn(z.zTop-z.zBottom)} mm deep`}`,vt=d.find(_t=>Dm(_t.diameter,z.d)&&Hs(_t,st));if(vt){N({kind:"drill",label:q>1?`Drill ${q} holes`:"Drill the hole",tool:g(vt),zTop:z.zTop,zBottom:z.zBottom,centers:z.centers,detail:G});continue}let dt=z.regions.flat().length?z.regions.flatMap(_t=>_t):[],St=F(dt,st,0)||null;if(!St||St.diameter>z.d-.4){let _t=f.find(Xt=>Xt.diameter<=z.d-.4&&Hs(Xt,st));if(!_t){u.push({kind:"notool",text:`No drill or end mill fits the ${G} hole${q>1?"s":""}.`});continue}N({kind:"hole",label:q>1?`Cut ${q} holes`:"Cut the hole",tool:g(_t),zTop:z.zTop,zBottom:z.zBottom,region:dt,centers:z.centers,detail:`${G} \xB7 spiral`});continue}N({kind:"hole",label:q>1?`Cut ${q} holes`:"Cut the hole",tool:g(St),zTop:z.zTop,zBottom:z.zBottom,region:dt,centers:z.centers,detail:`${G} \xB7 spiral`})}if(x.length){let z=s.top+e.throughDepth,q=f.filter(vt=>Hs(vt,z)&&vt.diameter<=b),st=q.find(vt=>S.has(vt.id))||q.slice().sort((vt,dt)=>Math.abs(vt.diameter-6.35)-Math.abs(dt.diameter-6.35))[0],G=e.tabs.enabled?`${e.tabs.count} tabs`:"no tabs";st?N({id:"cutout",kind:"cutout",label:"Cut out the part",tool:g(st),zTop:s.top,zBottom:-e.throughDepth,region:x,detail:`${Cn(s.top)} mm \xB7 ${G}`}):u.push({kind:"notool",text:`No end mill is long enough to cut out the part (${Cn(z)} mm).`})}let nt=[],ct=new Map;for(let z of B){if(z.kind!=="pocket"&&z.kind!=="corners"){nt.push(z);continue}let q=z.after&&ct.has(z.after)?ct.get(z.after):z.after,st=nt.find(G=>G.kind===z.kind&&G.detail===z.detail&&G.zTop===z.zTop&&G.zBottom===z.zBottom&&G.tool.id===z.tool.id&&(G.after||null)===(q||null));st?(st.region=[...st.region,...z.region],st.count=(st.count||1)+1,ct.set(z.id,st.id)):nt.push({...z,after:q})}for(let z of nt)z.count>1&&(z.kind==="pocket"&&(z.label=z.label==="Cut the opening"?`Cut ${z.count} openings`:`Clear ${z.count} pockets`),z.kind==="corners"&&(z.label=`Clean the corners of ${z.count} pockets`));B.length=0,B.push(...nt);for(let z of B){let q=e.toolOverride?.[z.id];if(q){let st=t.find(G=>G.id===q);st&&(z.tool=st)}z.enabled=!e.disabled?.[z.id],z.feeds=Y(z.tool)}return{analysis:s,stock:o,zero:Mc(o,e.zero),ops:Um(B),warnings:u,job:e}}function Um(n){let t=n.filter(d=>d.kind==="face"),e=n.filter(d=>d.kind==="cutout"),i=n.filter(d=>d.kind!=="face"&&d.kind!=="cutout"),s=d=>d.region||(d.centers||[]).map(v=>Bm(v)),o=new Map(i.map(d=>[d,i.filter(v=>v!==d&&(d.after===v.id||v.zTop>d.zTop+kr&&fi(Bs(s(d),s(v)))>hr))])),c=new Set,u=[...t],f=t.length?t[t.length-1].tool:null;for(;c.size<i.length;){let d=i.filter(S=>!c.has(S)&&o.get(S).every(g=>c.has(g))),v=d.find(S=>f&&S.tool.id===f.id)||d[0];c.add(v),u.push(v),f=v.tool}return[...u,...e]}function Bm(n,t=32){return Array.from({length:t},(e,i)=>[n.x+n.d/2*Math.cos(i/t*2*Math.PI),n.y+n.d/2*Math.sin(i/t*2*Math.PI)])}function qo(n){let t=[];for(let e of n.ops)e.enabled&&!t.some(i=>i.id===e.tool.id)&&t.push(e.tool);return t}var kr,hr,Cu,Pu,Dm,xc,Fm,Hs,Cn,Ru=Pn(()=>{gc();Wo();Vs();kr=.01,hr=.05,Cu=["back-left","back-center","back-right","left-center","center","right-center","front-left","front-center","front-right"];Pu=n=>[[[n.minX,n.minY],[n.maxX,n.minY],[n.maxX,n.maxY],[n.minX,n.maxY]]],Dm=(n,t)=>Math.abs(n-t)<.05;xc=(n,t)=>Sn(Sn(n,-t),t),Fm=(n,t)=>{let e=fi(n);return e>0?fi(xc(n,t))/e:0},Hs=(n,t)=>!n.fluteLength||n.fluteLength+1e-6>=t,Cn=n=>(Math.round(n*10)/10).toString()});function zr(n,t,e){let i=Math.max(1,Math.ceil((n-t)/e-1e-6));return Array.from({length:i},(s,o)=>n-(o+1)*(n-t)/i)}function Gs(n,t,e,i,s,o,c){let u=[...t.breaks(e,i),i];if(c)for(let d of c.edges(e,i))u.push(d);u.sort((d,v)=>d-v);let f=e;for(let d of u){if(d-f<1e-9)continue;let v=(f+d)/2,S=c&&c.inside(v)?c.top:-1/0,[g,b]=t.at(f),E=Math.max(s(f),S);n.at&&Math.abs(n.at.z-E)>1e-6&&n.feed(g,b,E,o);let[C,M]=t.at(d);n.feed(C,M,Math.max(s(d),S),o),f=d}}function Lu(n,t,e,i,s,o,c){let u=Math.max(0,(i-s)/Math.tan(o.rampAngle*Math.PI/180));if(t.length<1||u<1e-6){let[d,v]=t.at(e);return n.feed(d,v,c&&c.inside(e)?Math.max(s,c.top):s,o.plunge),Gs(n,t,e,e+t.length,()=>s,o.feed,c),e}let f=e+u;return Gs(n,t,e,f,d=>i-(d-e)/u*(i-s),Math.min(o.feed,o.plunge*2),c),Gs(n,t,f,f+t.length,()=>s,o.feed,c),f}function zm(n,t,e){let i=[];for(let s=t,o=0;o<500;s+=e,o++){let c=zs(di(Sn(n,-s),.001),.005);if(!c.length)break;i.push(c)}return i}function Vm(n){let t=n.map((s,o)=>s.map(c=>({loop:c,depth:o,kids:[]})));for(let s=1;s<t.length;s++)for(let o of t[s])(t[s-1].find(u=>ks(o.loop[0],u.loop)&&Math.sign(Gn(u.loop))===Math.sign(Gn(o.loop)))||t[s-1].find(u=>ks(o.loop[0],u.loop))||t[0][0]).kids.push(o);let e=[],i=s=>{if(!s.kids.length){e.push([s.loop]);return}for(let o of s.kids)i(o);e[e.length-1].push(s.loop)};for(let s of t[0]||[])Gn(s.loop)>0&&i(s);for(let s of t[0]||[])Gn(s.loop)<=0&&!t[0].some(o=>o.kids.includes(s))&&i(s);return e}function Hm(n,t){let e=0;for(let i of t)ks(n,i)&&(e+=Gn(i)>0?1:-1);return e>0}function Gm(n,t,e){let i=Math.max(2,Math.ceil(Math.hypot(t[0]-n[0],t[1]-n[1])/.2));for(let s=1;s<i;s++){let o=s/i;if(!Hm([n[0]+(t[0]-n[0])*o,n[1]+(t[1]-n[1])*o],e))return!1}return!0}function Xm(n,t,e,i,s,o,c){let u=Math.min(i.stepover,e*.95),f=zm(t,e+c,u);if(!f.length)return;let d=Sn(t,-(e+c)+.01),v=Vm(f),S=s;for(let g of zr(s,o,i.stepdown)){for(let b of v){let E=new ur(b[0]),[C,M]=E.at(0);n.goTo(C,M,S),n.feed(C,M,S,i.plunge);let x=Lu(n,E,0,S,g,i);for(let B=1;B<b.length;B++){let W=E.at(x),N=new ur(b[B]),F=N.nearest(W);Gm(W,N.at(F),d)||([C,M]=N.at(F),n.rapid(W[0],W[1],S+1),n.rapid(C,M,S+1),n.feed(C,M,g,i.plunge)),Gs(n,N,F,F+N.length,()=>g,i.feed),E=N,x=F}}S=g}n.retract()}function Nu(n,t,e,i,s,o,c){let u=zs(di(Sn(t,-e),.001),.005);for(let f of u){let d=new ur(f),[v,S]=d.at(0);n.goTo(v,S,s);for(let g of zr(s,o,c))n.feed(v,S,g,i.plunge),Gs(n,d,0,d.length,()=>g,i.feed*.9);n.retract()}}function Wm(n,t,e,i,s,o,c){let u=di(Ur(t,Sn(Sn(t,-i),i)),.01);if(!u.length)return;let f=Sn(u,e+.5);for(let d of zs(di(Sn(t,-e),.001),.005)){let v=new ur(d),S=Math.max(8,Math.ceil(v.length/.25)),g=Array.from({length:S},(E,C)=>f.some(M=>ks(v.at(C/S*v.length),M)));if(g.every(Boolean)){Nu(n,t,e,s,o,c,s.stepdown);return}let b=g.indexOf(!1);for(let E=0;E<S;E++){let C=(b+E)%S;if(!g[C]||g[(C-1+S)%S])continue;let M=C;for(;g[(M+1)%S]&&M-C<S;)M++;let x=C/S*v.length,B=(M+1)/S*v.length,[W,N]=v.at(x);n.goTo(W,N,o);let F=!0;for(let U of zr(o,c,s.stepdown)){let Y=[...v.breaks(x,B),B],P=F?Y:[...Y.slice(0,-1).reverse(),x],[V,j]=v.at(F?x:B);n.feed(V,j,U,s.plunge);for(let Q of P){let[nt,ct]=v.at(Q);n.feed(nt,ct,U,s.feed)}F=!F}n.retract()}}}function Ym(n,t,e,i,s,o){let c=Math.min(i.stepover,e*1.6),u=t.minX-e-2,f=t.maxX+e+2;for(let d of zr(s,o,i.stepdown)){let v=t.minY+e*.6;n.goTo(u,v,s),n.feed(u,v,d,i.plunge);let S=1;for(;n.feed(S>0?f:u,v,d,i.feed),!(v>=t.maxY-e*.6-1e-6);)v=Math.min(v+c,t.maxY-e*.6),n.feed(S>0?f:u,v,d,i.feed),S=-S}n.retract()}function qm(n,t,e,i,s,o){let c=Math.max(.5,o*1.5);for(let u of t){n.goTo(u.x,u.y,i);let f=i;for(;f>s+1e-6;){let d=Math.max(s,f-c);f<i&&n.rapid(u.x,u.y,f+.5),n.feed(u.x,u.y,d,e.plunge),n.rapid(u.x,u.y,i+1),f=d}n.retract()}}function $m(n,t,e,i){let s=Math.max(0,Math.round(t.tabs.count));if(!t.tabs.enabled||!s)return null;let o=2*e+4,c=Array.from({length:s},(f,d)=>{let v=(d+.5)/s*n;return[v-o/2,v+o/2]}),u=n;return{top:i+t.tabs.height,inside:f=>{let d=(f%u+u)%u;return c.some(([v,S])=>d>v&&d<S)},edges:(f,d)=>{let v=[];for(let S=Math.floor(f/u);S*u<=d;S++)for(let[g,b]of c)for(let E of[g,b]){let C=S*u+E;C>f&&C<d&&v.push(C)}return v}}}function Zm(n,t,e,i,s,o,c,u){let f=[{off:e+u,fd:i}];u>0&&f.push({off:e,fd:{...i,feed:Math.round(i.feed*.9)},finish:!0});for(let d of f)for(let v of Br(t).map(S=>S[0])){let S=zs(di(Sn([v],d.off),.001),.005).filter(g=>Gn(g)>0);for(let g of S){let b=new ur(g.slice().reverse()),E=$m(b.length,c,e,0),[C,M]=b.at(0);n.goTo(C,M,s),n.feed(C,M,s,i.plunge);let x=0,B=s,W=d.finish?zr(s,o,Math.max(i.stepdown,Math.min(6*e,s-o))):zr(s,o,i.stepdown);for(let N of W)x=Lu(n,b,x,B,N,d.fd,E),B=N;n.retract()}}}function Jm(n,t){let e=c=>{let u=ki([c[0]]);return[(u.minX+u.maxX)/2,(u.minY+u.maxY)/2]},i=n.map(c=>({a:c,m:e(c)})),s=[],o=t?[t.x,t.y]:i[0]?.m;for(;i.length;){let c=0;for(let f=1;f<i.length;f++)Math.hypot(i[f].m[0]-o[0],i[f].m[1]-o[1])<Math.hypot(i[c].m[0]-o[0],i[c].m[1]-o[1])&&(c=f);let[u]=i.splice(c,1);s.push(u.a),o=u.m}return s}function Du(n){let t=n.stock.top+km,e=(Xn[n.job.finish]||Xn.balanced).allowance,s=n.ops.some(o=>o.kind==="face"&&o.enabled)?n.analysis.top:n.stock.top;for(let o of n.ops){let c=new bc(t),u=o.kind!=="face"&&o.zTop>=n.analysis.top-1e-6?Math.max(o.zTop,s):o.zTop,f=o.tool.diameter/2,d=o.feeds,v=Math.min(o.tool.fluteLength||1/0,3*o.tool.diameter);switch(o.kind){case"face":Ym(c,n.stock,f,d,u,o.zBottom);break;case"pocket":case"step":case"hole":for(let S of Jm(Br(o.region),c.at))Xm(c,S,f,d,u,o.zBottom,e),e>0&&Nu(c,S,f,d,u,o.zBottom,v);break;case"corners":{let S=n.ops.find(g=>g.id===o.after);Wm(c,o.region,f,S?S.tool.diameter/2:f*2,d,u,o.zBottom);break}case"drill":qm(c,o.centers,d,u,o.zBottom,o.tool.diameter);break;case"cutout":Zm(c,o.region,f,d,u,o.zBottom,n.job,e);break}o.moves=c.moves}return n}var km,bc,ur,Ou=Pn(()=>{Wo();Vs();km=3;bc=class{constructor(t){this.moves=[],this.clearZ=t,this.at=null}rapid(t,e,i){this.push({r:!0,x:t,y:e,z:i})}feed(t,e,i,s){this.push({x:t,y:e,z:i,f:s})}push(t){let e=this.at;e&&Math.abs(e.x-t.x)<1e-6&&Math.abs(e.y-t.y)<1e-6&&Math.abs(e.z-t.z)<1e-6||(this.moves.push(t),this.at=t)}goTo(t,e,i){this.at&&this.rapid(this.at.x,this.at.y,this.clearZ),this.rapid(t,e,this.clearZ),this.rapid(t,e,i+1)}retract(){this.at&&this.rapid(this.at.x,this.at.y,this.clearZ)}},ur=class{constructor(t){this.p=t,this.s=[0];for(let e=1;e<=t.length;e++){let i=t[e-1],s=t[e%t.length];this.s.push(this.s[e-1]+Math.hypot(s[0]-i[0],s[1]-i[1]))}this.length=this.s[t.length]}at(t){let e=this.length,i=(t%e+e)%e,s=1;for(;s<this.s.length-1&&this.s[s]<i;)s++;let o=this.p[s-1],c=this.p[s%this.p.length],u=this.s[s]-this.s[s-1]||1,f=(i-this.s[s-1])/u;return[o[0]+(c[0]-o[0])*f,o[1]+(c[1]-o[1])*f]}breaks(t,e){let i=[],s=this.length;for(let o=Math.floor(t/s);o*s<=e;o++)for(let c=0;c<this.p.length;c++){let u=o*s+this.s[c];u>t+1e-9&&u<e-1e-9&&i.push(u)}return i}nearest([t,e]){let i=0,s=1/0;for(let o=0;o<this.p.length;o++){let c=(this.p[o][0]-t)**2+(this.p[o][1]-e)**2;c<s&&(s=c,i=this.s[o])}return i}}});function Fu(n,t={}){let{name:e="part",numbering:i="slot",safeZHeightMm:s=null,spindleDelay:o=3}=t,c=Number.isFinite(s)?`G53 G0 Z${zi(s)}`:"G53 G0 Z0",u=n.zero,f=n.stock,d=[Vr(`ncCAM: ${e}`),Vr(`Stock ${zi(f.width)} x ${zi(f.depth)} x ${zi(f.thickness)} mm, ${(lr[n.job.material]||{}).name||n.job.material}, ${(Xn[n.job.finish]||{}).name||n.job.finish}`),Vr(`Zero: X Y at the ${Km[n.job.zero.xy]||n.job.zero.xy}, Z on ${n.job.zero.z==="bed"?"the bed":"top of the stock"}`)],v=n.ops.filter(C=>C.enabled&&C.moves&&C.moves.length);for(let C of[...new Map(v.map(M=>[M.tool.id,M.tool])).values()])d.push(Vr(`T${cr(C,i)}: ${C.name}, ${zi(C.diameter)} mm`));d.push("G21 G90 G94 G17");let S=null,g={},b=null,E=null;for(let C of v){(!S||C.tool.id!==S.id)&&(S&&d.push("M5"),d.push(c,`M6 T${cr(C.tool,i)}`,Vr(C.tool.name)),S=C.tool,d.push(`M3 S${C.feeds.rpm}`),o>0&&d.push(`G4 P${o}`),g={},b=null,E=null),d.push(Vr(`${C.label}${C.detail?": "+C.detail:""}`));for(let M of C.moves){let x=zi(M.x-u.x),B=zi(M.y-u.y),W=zi(M.z-u.z);if(M.r&&(x!==g.x||B!==g.y)&&W!==g.z){let Y=g.z===void 0||+W<+g.z?[`X${x} Y${B}`,`Z${W}`]:[`Z${W}`,`X${x} Y${B}`];for(let P of Y)d.push(`${E==="G0"?"":"G0 "}${P}`),E="G0";g={x,y:B,z:W};continue}let N=M.r?"G0":"G1",F=N===E?"":N;x!==g.x&&(F+=` X${x}`),B!==g.y&&(F+=` Y${B}`),W!==g.z&&(F+=` Z${W}`),!M.r&&M.f!==b&&(F+=` F${Math.round(M.f)}`,b=M.f),F=F.trim(),!(!F||F===N)&&(d.push(F),E=N,g={x,y:B,z:W})}}return d.push("M5",c,"M30",""),d.join(`
`)}function Uu(n,{maxRapid:t=5e3,spindleDelay:e=3,toolChange:i=30}={}){let s=0,o=null,c=null;for(let u of n.ops){if(!u.enabled||!u.moves)continue;(!c||u.tool.id!==c.id)&&(s+=e+(c?i:0),c=u.tool);let f=0;for(let d of u.moves){if(o){let v=Math.hypot(d.x-o.x,d.y-o.y,d.z-o.z);f+=v/(d.r?t:d.f)*60}o=d}u.seconds=f,s+=f}return s}var zi,jm,Vr,Km,Bu=Pn(()=>{Vs();zi=n=>{let t=(Math.round(n*1e3)/1e3).toFixed(3).replace(/\.?0+$/,"");return t==="-0"?"0":t},jm={"\xD7":"x","\xB7":"-",\u00D8:"D","\xB0":" deg","\u2019":"'","\u2026":"..."},Vr=n=>`(${String(n).replace(/\(/g,"[").replace(/\)/g,"]").replace(/[^\x20-\x7e]/g,t=>jm[t]??"")})`,Km={"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}});var wc=Pn(()=>{gc();Ru();Ou();Bu();dc();Vs();Wo()});function tg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function eg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function no(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kf(){let n=no("canvas");return n.style.display="block",n}function io(...n){let t="THREE."+n.shift();cs?cs("log",t,...n):console.log(t,...n)}function Qf(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function fe(...n){n=Qf(n);let t="THREE."+n.shift();if(cs)cs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function pe(...n){n=Qf(n);let t="THREE."+n.shift();if(cs)cs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function gr(...n){let t=n.join(" ");t in Vu||(Vu[t]=!0,fe(...n))}function td(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function Ri(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function Ae(n,t,e){return Math.max(t,Math.min(e,n))}function Ch(n,t){return(n%t+t)%t}function ng(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function ig(n,t,e){return n!==t?(e-n)/(t-n):0}function Ks(n,t,e){return(1-e)*n+e*t}function rg(n,t,e,i){return Ks(n,t,1-Math.exp(-e*i))}function sg(n,t=1){return t-Math.abs(Ch(n,t*2)-t)}function og(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function ag(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function lg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function cg(n,t){return n+Math.random()*(t-n)}function hg(n){return n*(.5-Math.random())}function ug(n){n!==void 0&&(Hu=n);let t=Hu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function fg(n){return n*ss}function dg(n){return n*hs}function pg(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function mg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function gg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _g(n,t,e,i,s){let o=Math.cos,c=Math.sin,u=o(e/2),f=c(e/2),d=o((t+i)/2),v=c((t+i)/2),S=o((t-i)/2),g=c((t-i)/2),b=o((i-t)/2),E=c((i-t)/2);switch(s){case"XYX":n.set(u*v,f*S,f*g,u*d);break;case"YZY":n.set(f*g,u*v,f*S,u*d);break;case"ZXZ":n.set(f*S,f*g,u*v,u*d);break;case"XZX":n.set(u*v,f*E,f*b,u*d);break;case"YXY":n.set(f*b,u*v,f*E,u*d);break;case"ZYZ":n.set(f*E,f*b,u*v,u*d);break;default:fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ke(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vg(){let n={enabled:!0,workingColorSpace:to,spaces:{},convert:function(s,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Ue&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ue&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?eo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,c){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return gr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return gr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[to]:{primaries:t,whitePoint:i,transfer:eo,toXYZ:Xu,fromXYZ:Wu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:t,whitePoint:i,transfer:Ue,toXYZ:Xu,fromXYZ:Wu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),n}function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Pc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Da.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(fe("Texture: Unable to serialize Texture."),{})}function Rc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function kc(n,t,e,i,s){for(let o=0,c=n.length-3;o<=c;o+=3){dr.fromArray(n,o);let u=s.x*Math.abs(dr.x)+s.y*Math.abs(dr.y)+s.z*Math.abs(dr.z),f=t.dot(dr),d=e.dot(dr),v=i.dot(dr);if(Math.max(-Math.max(f,d,v),Math.min(f,d,v))>u)return!1}return!0}function ia(n,t,e,i,s,o){es.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Zs.x=o*es.x-s*es.y,Zs.y=s*es.x+o*es.y):Zs.copy(es),n.copy(t),n.x+=Zs.x,n.y+=Zs.y,n.applyMatrix4(id)}function Dg(n,t,e,i,s,o,c,u){let f;if(t.side===En?f=i.intersectTriangle(c,o,s,!0,u):f=i.intersectTriangle(s,o,c,t.side===nr,u),f===null)return null;ua.copy(u),ua.applyMatrix4(n.matrixWorld);let d=e.ray.origin.distanceTo(ua);return d<e.near||d>e.far?null:{distance:d,point:ua.clone(),object:n}}function fa(n,t,e,i,s,o,c,u,f,d){n.getVertexPosition(u,aa),n.getVertexPosition(f,la),n.getVertexPosition(d,ca);let v=Dg(n,t,e,i,aa,la,ca,sf);if(v){let S=new ot;mi.getBarycoord(sf,aa,la,ca,S),s&&(v.uv=mi.getInterpolatedAttribute(s,u,f,d,S,new le)),o&&(v.uv1=mi.getInterpolatedAttribute(o,u,f,d,S,new le)),c&&(v.normal=mi.getInterpolatedAttribute(c,u,f,d,S,new ot),v.normal.dot(i.direction)>0&&v.normal.multiplyScalar(-1));let g={a:u,b:f,c:d,normal:new ot,materialIndex:0};mi.getNormal(aa,la,ca,g.normal),v.face=g,v.barycoord=S}return v}function ma(n,t,e,i,s,o,c){let u=n.geometry.attributes.position;if(ka.fromBufferAttribute(u,s),za.fromBufferAttribute(u,o),e.distanceSqToSegment(ka,za,Yc,af)>i)return;Yc.applyMatrix4(n.matrixWorld);let d=t.ray.origin.distanceTo(Yc);if(!(d<t.near||d>t.far))return{distance:d,point:af.clone().applyMatrix4(n.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:n}}function br(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(hf(s))s.isRenderTargetTexture?(fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(hf(s[0])){let o=[];for(let c=0,u=s.length;c<u;c++)o[c]=s[c].clone();t[e][i]=o}else t[e][i]=s.slice();else t[e][i]=s}}return t}function yn(n){let t={};for(let e=0;e<n.length;e++){let i=br(n[e]);for(let s in i)t[s]=i[s]}return t}function hf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Fg(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Rh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}function ns(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function $c(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function sd(n,t,e,i,s){let o=1-n;return o*o*o*t+3*o*o*n*e+3*o*n*n*i+n*n*n*s}function kg(n,t,e,i,s){let o=1-n;return 3*o*o*(e-t)+6*o*n*(i-e)+3*n*n*(s-i)}function zg(n,t,e,i,s){let o=(n-t)/(s-t);for(let c=0;c<8;c++){let u=sd(o,t,e,i,s)-n;if(Math.abs(u)<1e-10)break;let f=kg(o,t,e,i,s);if(Math.abs(f)<1e-10)break;o=Math.max(0,Math.min(1,o-u/f))}return o}function uf(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}function _f(n,t){return n.distance-t.distance}function ih(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let o=n.children;for(let c=0,u=o.length;c<u;c++)ih(o[c],t,e,!0)}}function Dh(n,t,e,i){let s=Zg(i);switch(e){case wh:return n*t;case Th:return n*t/s.components*s.byteLength;case hl:return n*t/s.components*s.byteLength;case or:return n*t*2/s.components*s.byteLength;case ul:return n*t*2/s.components*s.byteLength;case Eh:return n*t*3/s.components*s.byteLength;case Yn:return n*t*4/s.components*s.byteLength;case fl:return n*t*4/s.components*s.byteLength;case Ao:case Po:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Co:case Io:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pl:case gl:return Math.max(n,16)*Math.max(t,8)/4;case dl:case ml:return Math.max(n,8)*Math.max(t,8)/2;case _l:case vl:case xl:case Sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case yl:case Ro:case Ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case El:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Al:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Il:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ul:case Bl:case kl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case zl:case Vl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Lo:case Hl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zg(n){switch(n){case Ln:case xh:return{byteLength:1,components:1};case bs:case Sh:case li:return{byteLength:2,components:1};case ll:case cl:return{byteLength:2,components:4};case oi:case al:case ai:return{byteLength:4,components:1};case Mh:case bh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var tr,er,yf,sh,xf,wo,Sf,Ss,nr,En,vn,yi,Ms,oh,ah,lh,Mf,Sr,bf,wf,Ef,Tf,Af,Pf,Cf,If,ch,hh,Rf,Lf,Nf,Df,Of,Ff,Uf,Bf,kf,wa,Ea,Ta,as,Aa,Pa,Ca,Ia,uh,zf,Vf,si,fh,dh,ph,mh,gh,_h,vh,yh,ir,Mr,rl,sl,Eo,Ra,gi,La,ln,Hf,To,un,ol,rr,Ln,xh,Sh,bs,al,oi,ai,li,ll,cl,ws,Mh,bh,wh,Eh,Yn,_i,sr,Th,hl,or,ul,fl,Ao,Po,Co,Io,dl,pl,ml,gl,_l,vl,yl,xl,Sl,Ro,Ml,bl,wl,El,Tl,Al,Pl,Cl,Il,Rl,Ll,Nl,Dl,Ol,Fl,Ul,Bl,kl,zl,Vl,Lo,Hl,Qs,Na,Ma,jc,Kc,Qc,th,Gf,Gl,Xf,Di,bn,to,eo,Ue,ba,Wf,Yf,qf,$f,Xl,Zf,Jf,Wl,jf,Ah,Es,Ph,ti,ls,Vu,cs,ed,ni,mn,Hu,ss,hs,Ih,le,Bn,ot,Tc,Gu,Se,Ac,Xu,Wu,Ie,Hr,Da,yg,us,xg,Cc,wn,je,Oa,In,ro,Fa,We,Gr,Jn,Sg,Mg,Vi,$o,On,Yu,qu,Ni,fs,bg,$u,Xr,Ti,Zo,Xs,wg,Eg,Zu,Ju,ju,Ku,Tg,Wr,Ic,en,ei,Ag,ds,nd,Hi,Jo,ye,gn,so,jn,Ai,Lc,Pi,Yr,qr,Qu,Nc,Dc,Oc,Fc,Uc,Bc,mi,Yi,Ci,Kn,jo,$r,Zr,Jr,Gi,Xi,fr,Ws,Ko,Qo,dr,tn,ta,Pg,$e,oo,ao,Ge,Cg,Ys,zc,_r,Ig,Wn,Vc,jr,Fn,qs,an,Ze,Ua,Mn,lo,Hc,Rg,Lg,Un,Ng,vi,ps,Kr,$s,Qr,ts,es,Zs,id,ea,Js,na,tf,Gc,ef,co,Ii,Xc,ra,sa,qi,ii,nf,pr,oa,rf,aa,la,ca,Wc,ha,sf,ua,ze,Ba,mr,Og,da,ms,ri,ka,za,of,js,pa,Yc,af,vr,lf,cf,yr,ho,uo,$i,Va,fo,Zi,Ji,gs,ga,_a,qc,va,_s,po,mo,xr,rd,Ug,Bg,kn,Ha,Rn,Ga,Xa,go,ji,Wa,Ya,qa,$a,zn,Ki,Za,Ja,ja,_o,Qi,Ka,Qa,od,tl,vo,yo,Zc,ff,df,el,ya,xa,pi,xo,Wi,pf,mf,_n,vs,eh,ys,is,rs,nl,il,Lh,Vg,Nh,Hg,Gg,Xg,Wg,Yg,qg,$g,nh,qe,OS,gf,So,xs,rh,vf,Sa,Jc,Mo,bo,Oh=Pn(()=>{tr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},er={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yf=0,sh=1,xf=2,wo=1,Sf=2,Ss=3,nr=0,En=1,vn=2,yi=0,Ms=1,oh=2,ah=3,lh=4,Mf=5,Sr=100,bf=101,wf=102,Ef=103,Tf=104,Af=200,Pf=201,Cf=202,If=203,ch=204,hh=205,Rf=206,Lf=207,Nf=208,Df=209,Of=210,Ff=211,Uf=212,Bf=213,kf=214,wa=0,Ea=1,Ta=2,as=3,Aa=4,Pa=5,Ca=6,Ia=7,uh=0,zf=1,Vf=2,si=0,fh=1,dh=2,ph=3,mh=4,gh=5,_h=6,vh=7,yh=300,ir=301,Mr=302,rl=303,sl=304,Eo=306,Ra=1e3,gi=1001,La=1002,ln=1003,Hf=1004,To=1005,un=1006,ol=1007,rr=1008,Ln=1009,xh=1010,Sh=1011,bs=1012,al=1013,oi=1014,ai=1015,li=1016,ll=1017,cl=1018,ws=1020,Mh=35902,bh=35899,wh=1021,Eh=1022,Yn=1023,_i=1026,sr=1027,Th=1028,hl=1029,or=1030,ul=1031,fl=1033,Ao=33776,Po=33777,Co=33778,Io=33779,dl=35840,pl=35841,ml=35842,gl=35843,_l=36196,vl=37492,yl=37496,xl=37488,Sl=37489,Ro=37490,Ml=37491,bl=37808,wl=37809,El=37810,Tl=37811,Al=37812,Pl=37813,Cl=37814,Il=37815,Rl=37816,Ll=37817,Nl=37818,Dl=37819,Ol=37820,Fl=37821,Ul=36492,Bl=36494,kl=36495,zl=36283,Vl=36284,Lo=36285,Hl=36286,Qs=2300,Na=2301,Ma=2302,jc=2303,Kc=2400,Qc=2401,th=2402,Gf=3200,Gl=0,Xf=1,Di="",bn="srgb",to="srgb-linear",eo="linear",Ue="srgb",ba=7680,Wf=519,Yf=512,qf=513,$f=514,Xl=515,Zf=516,Jf=517,Wl=518,jf=519,Ah=35044,Es=35048,Ph="300 es",ti=2e3,ls=2001;Vu={},cs=null;ed={[wa]:Ea,[Ta]:Ca,[Aa]:Ia,[as]:Pa,[Ea]:wa,[Ca]:Ta,[Ia]:Aa,[Pa]:as},ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let o=0,c=s.length;o<c;o++)s[o].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hu=1234567,ss=Math.PI/180,hs=180/Math.PI;Ih={DEG2RAD:ss,RAD2DEG:hs,generateUUID:Ri,clamp:Ae,euclideanModulo:Ch,mapLinear:ng,inverseLerp:ig,lerp:Ks,damp:rg,pingpong:sg,smoothstep:og,smootherstep:ag,randInt:lg,randFloat:cg,randFloatSpread:hg,seededRandom:ug,degToRad:fg,radToDeg:dg,isPowerOfTwo:pg,ceilPowerOfTwo:mg,floorPowerOfTwo:gg,setQuaternionFromProperEuler:_g,normalize:ke,denormalize:Qn},le=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,c=this.y-t.y;return this.x=o*i-c*s+t.x,this.y=o*s+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,c,u){let f=i[s+0],d=i[s+1],v=i[s+2],S=i[s+3],g=o[c+0],b=o[c+1],E=o[c+2],C=o[c+3];if(S!==C||f!==g||d!==b||v!==E){let M=f*g+d*b+v*E+S*C;M<0&&(g=-g,b=-b,E=-E,C=-C,M=-M);let x=1-u;if(M<.9995){let B=Math.acos(M),W=Math.sin(B);x=Math.sin(x*B)/W,u=Math.sin(u*B)/W,f=f*x+g*u,d=d*x+b*u,v=v*x+E*u,S=S*x+C*u}else{f=f*x+g*u,d=d*x+b*u,v=v*x+E*u,S=S*x+C*u;let B=1/Math.sqrt(f*f+d*d+v*v+S*S);f*=B,d*=B,v*=B,S*=B}}t[e]=f,t[e+1]=d,t[e+2]=v,t[e+3]=S}static multiplyQuaternionsFlat(t,e,i,s,o,c){let u=i[s],f=i[s+1],d=i[s+2],v=i[s+3],S=o[c],g=o[c+1],b=o[c+2],E=o[c+3];return t[e]=u*E+v*S+f*b-d*g,t[e+1]=f*E+v*g+d*S-u*b,t[e+2]=d*E+v*b+u*g-f*S,t[e+3]=v*E-u*S-f*g-d*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,o=t._z,c=t._order,u=Math.cos,f=Math.sin,d=u(i/2),v=u(s/2),S=u(o/2),g=f(i/2),b=f(s/2),E=f(o/2);switch(c){case"XYZ":this._x=g*v*S+d*b*E,this._y=d*b*S-g*v*E,this._z=d*v*E+g*b*S,this._w=d*v*S-g*b*E;break;case"YXZ":this._x=g*v*S+d*b*E,this._y=d*b*S-g*v*E,this._z=d*v*E-g*b*S,this._w=d*v*S+g*b*E;break;case"ZXY":this._x=g*v*S-d*b*E,this._y=d*b*S+g*v*E,this._z=d*v*E+g*b*S,this._w=d*v*S-g*b*E;break;case"ZYX":this._x=g*v*S-d*b*E,this._y=d*b*S+g*v*E,this._z=d*v*E-g*b*S,this._w=d*v*S+g*b*E;break;case"YZX":this._x=g*v*S+d*b*E,this._y=d*b*S+g*v*E,this._z=d*v*E-g*b*S,this._w=d*v*S-g*b*E;break;case"XZY":this._x=g*v*S-d*b*E,this._y=d*b*S-g*v*E,this._z=d*v*E+g*b*S,this._w=d*v*S+g*b*E;break;default:fe("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],o=e[8],c=e[1],u=e[5],f=e[9],d=e[2],v=e[6],S=e[10],g=i+u+S;if(g>0){let b=.5/Math.sqrt(g+1);this._w=.25/b,this._x=(v-f)*b,this._y=(o-d)*b,this._z=(c-s)*b}else if(i>u&&i>S){let b=2*Math.sqrt(1+i-u-S);this._w=(v-f)/b,this._x=.25*b,this._y=(s+c)/b,this._z=(o+d)/b}else if(u>S){let b=2*Math.sqrt(1+u-i-S);this._w=(o-d)/b,this._x=(s+c)/b,this._y=.25*b,this._z=(f+v)/b}else{let b=2*Math.sqrt(1+S-i-u);this._w=(c-s)/b,this._x=(o+d)/b,this._y=(f+v)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,o=t._z,c=t._w,u=e._x,f=e._y,d=e._z,v=e._w;return this._x=i*v+c*u+s*d-o*f,this._y=s*v+c*f+o*u-i*d,this._z=o*v+c*d+i*f-s*u,this._w=c*v-i*u-s*f-o*d,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,o=t._z,c=t._w,u=this.dot(t);u<0&&(i=-i,s=-s,o=-o,c=-c,u=-u);let f=1-e;if(u<.9995){let d=Math.acos(u),v=Math.sin(d);f=Math.sin(f*d)/v,e=Math.sin(e*d)/v,this._x=this._x*f+i*e,this._y=this._y*f+s*e,this._z=this._z*f+o*e,this._w=this._w*f+c*e,this._onChangeCallback()}else this._x=this._x*f+i*e,this._y=this._y*f+s*e,this._z=this._z*f+o*e,this._w=this._w*f+c*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ot=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=t.elements,c=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*c,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*c,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*c,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,o=t.x,c=t.y,u=t.z,f=t.w,d=2*(c*s-u*i),v=2*(u*e-o*s),S=2*(o*i-c*e);return this.x=e+f*d+c*S-u*v,this.y=i+f*v+u*d-o*S,this.z=s+f*S+o*v-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this.z=Ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this.z=Ae(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,o=t.z,c=e.x,u=e.y,f=e.z;return this.x=s*f-o*u,this.y=o*c-i*f,this.z=i*u-s*c,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Tc.copy(this).projectOnVector(t),this.sub(Tc)}reflect(t){return this.sub(Tc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Tc=new ot,Gu=new Bn,Se=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,o,c,u,f,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,c,u,f,d)}set(t,e,i,s,o,c,u,f,d){let v=this.elements;return v[0]=t,v[1]=s,v[2]=u,v[3]=e,v[4]=o,v[5]=f,v[6]=i,v[7]=c,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,c=i[0],u=i[3],f=i[6],d=i[1],v=i[4],S=i[7],g=i[2],b=i[5],E=i[8],C=s[0],M=s[3],x=s[6],B=s[1],W=s[4],N=s[7],F=s[2],U=s[5],Y=s[8];return o[0]=c*C+u*B+f*F,o[3]=c*M+u*W+f*U,o[6]=c*x+u*N+f*Y,o[1]=d*C+v*B+S*F,o[4]=d*M+v*W+S*U,o[7]=d*x+v*N+S*Y,o[2]=g*C+b*B+E*F,o[5]=g*M+b*W+E*U,o[8]=g*x+b*N+E*Y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],c=t[4],u=t[5],f=t[6],d=t[7],v=t[8];return e*c*v-e*u*d-i*o*v+i*u*f+s*o*d-s*c*f}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],c=t[4],u=t[5],f=t[6],d=t[7],v=t[8],S=v*c-u*d,g=u*f-v*o,b=d*o-c*f,E=e*S+i*g+s*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let C=1/E;return t[0]=S*C,t[1]=(s*d-v*i)*C,t[2]=(u*i-s*c)*C,t[3]=g*C,t[4]=(v*e-s*f)*C,t[5]=(s*o-u*e)*C,t[6]=b*C,t[7]=(i*f-d*e)*C,t[8]=(c*e-i*o)*C,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,c,u){let f=Math.cos(o),d=Math.sin(o);return this.set(i*f,i*d,-i*(f*c+d*u)+c+t,-s*d,s*f,-s*(-d*c+f*u)+u+e,0,0,1),this}scale(t,e){return gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ac.makeScale(t,e)),this}rotate(t){return gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ac.makeRotation(-t)),this}translate(t,e){return gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ac.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ac=new Se,Xu=new Se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wu=new Se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ie=vg();Da=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Hr===void 0&&(Hr=no("canvas")),Hr.width=t.width,Hr.height=t.height;let s=Hr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Hr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=no("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let c=0;c<o.length;c++)o[c]=Li(o[c]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Li(e[i]/255)*255):e[i]=Li(e[i]);return{data:e,width:t.width,height:t.height}}else return fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},yg=0,us=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Ri(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?o.push(Pc(s[c].image)):o.push(Pc(s[c]))}else o=Pc(s);i.url=o}return e||(t.images[this.uuid]=i),i}};xg=0,Cc=new ot,wn=class n extends ni{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=gi,s=gi,o=un,c=rr,u=Yn,f=Ln,d=n.DEFAULT_ANISOTROPY,v=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=Ri(),this.name="",this.source=new us(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cc).x}get height(){return this.source.getSize(Cc).y}get depth(){return this.source.getSize(Cc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){fe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){fe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ra:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case La:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ra:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case La:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=yh;wn.DEFAULT_ANISOTROPY=1;je=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*s+c[12]*o,this.y=c[1]*e+c[5]*i+c[9]*s+c[13]*o,this.z=c[2]*e+c[6]*i+c[10]*s+c[14]*o,this.w=c[3]*e+c[7]*i+c[11]*s+c[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o,f=t.elements,d=f[0],v=f[4],S=f[8],g=f[1],b=f[5],E=f[9],C=f[2],M=f[6],x=f[10];if(Math.abs(v-g)<.01&&Math.abs(S-C)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+g)<.1&&Math.abs(S+C)<.1&&Math.abs(E+M)<.1&&Math.abs(d+b+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let W=(d+1)/2,N=(b+1)/2,F=(x+1)/2,U=(v+g)/4,Y=(S+C)/4,P=(E+M)/4;return W>N&&W>F?W<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(W),s=U/i,o=Y/i):N>F?N<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(N),i=U/s,o=P/s):F<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(F),i=Y/o,s=P/o),this.set(i,s,o,e),this}let B=Math.sqrt((M-E)*(M-E)+(S-C)*(S-C)+(g-v)*(g-v));return Math.abs(B)<.001&&(B=1),this.x=(M-E)/B,this.y=(S-C)/B,this.z=(g-v)/B,this.w=Math.acos((d+b+x-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this.z=Ae(this.z,t.z,e.z),this.w=Ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this.z=Ae(this.z,t,e),this.w=Ae(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oa=class extends ni{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new je(0,0,t,e),this.scissorTest=!1,this.viewport=new je(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},o=new wn(s),c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new us(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends Oa{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ro=class extends wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Fa=class extends wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},We=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,o,c,u,f,d,v,S,g,b,E,C,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,c,u,f,d,v,S,g,b,E,C,M)}set(t,e,i,s,o,c,u,f,d,v,S,g,b,E,C,M){let x=this.elements;return x[0]=t,x[4]=e,x[8]=i,x[12]=s,x[1]=o,x[5]=c,x[9]=u,x[13]=f,x[2]=d,x[6]=v,x[10]=S,x[14]=g,x[3]=b,x[7]=E,x[11]=C,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Gr.setFromMatrixColumn(t,0).length(),o=1/Gr.setFromMatrixColumn(t,1).length(),c=1/Gr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,o=t.z,c=Math.cos(i),u=Math.sin(i),f=Math.cos(s),d=Math.sin(s),v=Math.cos(o),S=Math.sin(o);if(t.order==="XYZ"){let g=c*v,b=c*S,E=u*v,C=u*S;e[0]=f*v,e[4]=-f*S,e[8]=d,e[1]=b+E*d,e[5]=g-C*d,e[9]=-u*f,e[2]=C-g*d,e[6]=E+b*d,e[10]=c*f}else if(t.order==="YXZ"){let g=f*v,b=f*S,E=d*v,C=d*S;e[0]=g+C*u,e[4]=E*u-b,e[8]=c*d,e[1]=c*S,e[5]=c*v,e[9]=-u,e[2]=b*u-E,e[6]=C+g*u,e[10]=c*f}else if(t.order==="ZXY"){let g=f*v,b=f*S,E=d*v,C=d*S;e[0]=g-C*u,e[4]=-c*S,e[8]=E+b*u,e[1]=b+E*u,e[5]=c*v,e[9]=C-g*u,e[2]=-c*d,e[6]=u,e[10]=c*f}else if(t.order==="ZYX"){let g=c*v,b=c*S,E=u*v,C=u*S;e[0]=f*v,e[4]=E*d-b,e[8]=g*d+C,e[1]=f*S,e[5]=C*d+g,e[9]=b*d-E,e[2]=-d,e[6]=u*f,e[10]=c*f}else if(t.order==="YZX"){let g=c*f,b=c*d,E=u*f,C=u*d;e[0]=f*v,e[4]=C-g*S,e[8]=E*S+b,e[1]=S,e[5]=c*v,e[9]=-u*v,e[2]=-d*v,e[6]=b*S+E,e[10]=g-C*S}else if(t.order==="XZY"){let g=c*f,b=c*d,E=u*f,C=u*d;e[0]=f*v,e[4]=-S,e[8]=d*v,e[1]=g*S+C,e[5]=c*v,e[9]=b*S-E,e[2]=E*S-b,e[6]=u*v,e[10]=C*S+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sg,t,Mg)}lookAt(t,e,i){let s=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),Vi.crossVectors(i,On),Vi.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Vi.crossVectors(i,On)),Vi.normalize(),$o.crossVectors(On,Vi),s[0]=Vi.x,s[4]=$o.x,s[8]=On.x,s[1]=Vi.y,s[5]=$o.y,s[9]=On.y,s[2]=Vi.z,s[6]=$o.z,s[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,c=i[0],u=i[4],f=i[8],d=i[12],v=i[1],S=i[5],g=i[9],b=i[13],E=i[2],C=i[6],M=i[10],x=i[14],B=i[3],W=i[7],N=i[11],F=i[15],U=s[0],Y=s[4],P=s[8],V=s[12],j=s[1],Q=s[5],nt=s[9],ct=s[13],z=s[2],q=s[6],st=s[10],G=s[14],vt=s[3],dt=s[7],St=s[11],_t=s[15];return o[0]=c*U+u*j+f*z+d*vt,o[4]=c*Y+u*Q+f*q+d*dt,o[8]=c*P+u*nt+f*st+d*St,o[12]=c*V+u*ct+f*G+d*_t,o[1]=v*U+S*j+g*z+b*vt,o[5]=v*Y+S*Q+g*q+b*dt,o[9]=v*P+S*nt+g*st+b*St,o[13]=v*V+S*ct+g*G+b*_t,o[2]=E*U+C*j+M*z+x*vt,o[6]=E*Y+C*Q+M*q+x*dt,o[10]=E*P+C*nt+M*st+x*St,o[14]=E*V+C*ct+M*G+x*_t,o[3]=B*U+W*j+N*z+F*vt,o[7]=B*Y+W*Q+N*q+F*dt,o[11]=B*P+W*nt+N*st+F*St,o[15]=B*V+W*ct+N*G+F*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],c=t[1],u=t[5],f=t[9],d=t[13],v=t[2],S=t[6],g=t[10],b=t[14],E=t[3],C=t[7],M=t[11],x=t[15],B=f*b-d*g,W=u*b-d*S,N=u*g-f*S,F=c*b-d*v,U=c*g-f*v,Y=c*S-u*v;return e*(C*B-M*W+x*N)-i*(E*B-M*F+x*U)+s*(E*W-C*F+x*Y)-o*(E*N-C*U+M*Y)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],o=t[1],c=t[5],u=t[9],f=t[2],d=t[6],v=t[10];return e*(c*v-u*d)-i*(o*v-u*f)+s*(o*d-c*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],c=t[4],u=t[5],f=t[6],d=t[7],v=t[8],S=t[9],g=t[10],b=t[11],E=t[12],C=t[13],M=t[14],x=t[15],B=e*u-i*c,W=e*f-s*c,N=e*d-o*c,F=i*f-s*u,U=i*d-o*u,Y=s*d-o*f,P=v*C-S*E,V=v*M-g*E,j=v*x-b*E,Q=S*M-g*C,nt=S*x-b*C,ct=g*x-b*M,z=B*ct-W*nt+N*Q+F*j-U*V+Y*P;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/z;return t[0]=(u*ct-f*nt+d*Q)*q,t[1]=(s*nt-i*ct-o*Q)*q,t[2]=(C*Y-M*U+x*F)*q,t[3]=(g*U-S*Y-b*F)*q,t[4]=(f*j-c*ct-d*V)*q,t[5]=(e*ct-s*j+o*V)*q,t[6]=(M*N-E*Y-x*W)*q,t[7]=(v*Y-g*N+b*W)*q,t[8]=(c*nt-u*j+d*P)*q,t[9]=(i*j-e*nt-o*P)*q,t[10]=(E*U-C*N+x*B)*q,t[11]=(S*N-v*U-b*B)*q,t[12]=(u*V-c*Q-f*P)*q,t[13]=(e*Q-i*V+s*P)*q,t[14]=(C*W-E*F-M*B)*q,t[15]=(v*F-S*W+g*B)*q,this}scale(t){let e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),o=1-i,c=t.x,u=t.y,f=t.z,d=o*c,v=o*u;return this.set(d*c+i,d*u-s*f,d*f+s*u,0,d*u+s*f,v*u+i,v*f-s*c,0,d*f-s*u,v*f+s*c,o*f*f+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,c){return this.set(1,i,o,0,t,1,c,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,o=e._x,c=e._y,u=e._z,f=e._w,d=o+o,v=c+c,S=u+u,g=o*d,b=o*v,E=o*S,C=c*v,M=c*S,x=u*S,B=f*d,W=f*v,N=f*S,F=i.x,U=i.y,Y=i.z;return s[0]=(1-(C+x))*F,s[1]=(b+N)*F,s[2]=(E-W)*F,s[3]=0,s[4]=(b-N)*U,s[5]=(1-(g+x))*U,s[6]=(M+B)*U,s[7]=0,s[8]=(E+W)*Y,s[9]=(M-B)*Y,s[10]=(1-(g+C))*Y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let o=this.determinantAffine();if(o===0)return i.set(1,1,1),e.identity(),this;let c=Gr.set(s[0],s[1],s[2]).length(),u=Gr.set(s[4],s[5],s[6]).length(),f=Gr.set(s[8],s[9],s[10]).length();o<0&&(c=-c),Jn.copy(this);let d=1/c,v=1/u,S=1/f;return Jn.elements[0]*=d,Jn.elements[1]*=d,Jn.elements[2]*=d,Jn.elements[4]*=v,Jn.elements[5]*=v,Jn.elements[6]*=v,Jn.elements[8]*=S,Jn.elements[9]*=S,Jn.elements[10]*=S,e.setFromRotationMatrix(Jn),i.x=c,i.y=u,i.z=f,this}makePerspective(t,e,i,s,o,c,u=ti,f=!1){let d=this.elements,v=2*o/(e-t),S=2*o/(i-s),g=(e+t)/(e-t),b=(i+s)/(i-s),E,C;if(f)E=o/(c-o),C=c*o/(c-o);else if(u===ti)E=-(c+o)/(c-o),C=-2*c*o/(c-o);else if(u===ls)E=-c/(c-o),C=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=v,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=S,d[9]=b,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=C,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,s,o,c,u=ti,f=!1){let d=this.elements,v=2/(e-t),S=2/(i-s),g=-(e+t)/(e-t),b=-(i+s)/(i-s),E,C;if(f)E=1/(c-o),C=c/(c-o);else if(u===ti)E=-2/(c-o),C=-(c+o)/(c-o);else if(u===ls)E=-1/(c-o),C=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=v,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=S,d[9]=0,d[13]=b,d[2]=0,d[6]=0,d[10]=E,d[14]=C,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Gr=new ot,Jn=new We,Sg=new ot(0,0,0),Mg=new ot(1,1,1),Vi=new ot,$o=new ot,On=new ot,Yu=new We,qu=new Bn,Ni=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,o=s[0],c=s[4],u=s[8],f=s[1],d=s[5],v=s[9],S=s[2],g=s[6],b=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-v,b),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(u,b),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-S,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,b),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-Ae(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,b),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-S,o)):(this._x=0,this._y=Math.atan2(u,b));break;case"XZY":this._z=Math.asin(-Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-v,b),this._y=0);break;default:fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Yu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qu.setFromEuler(this),this.setFromQuaternion(qu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ni.DEFAULT_ORDER="XYZ";fs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},bg=0,$u=new ot,Xr=new Bn,Ti=new We,Zo=new ot,Xs=new ot,wg=new ot,Eg=new Bn,Zu=new ot(1,0,0),Ju=new ot(0,1,0),ju=new ot(0,0,1),Ku={type:"added"},Tg={type:"removed"},Wr={type:"childadded",child:null},Ic={type:"childremoved",child:null},en=class n extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new ot,e=new Ni,i=new Bn,s=new ot(1,1,1);function o(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new Se}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xr.setFromAxisAngle(t,e),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(t,e){return Xr.setFromAxisAngle(t,e),this.quaternion.premultiply(Xr),this}rotateX(t){return this.rotateOnAxis(Zu,t)}rotateY(t){return this.rotateOnAxis(Ju,t)}rotateZ(t){return this.rotateOnAxis(ju,t)}translateOnAxis(t,e){return $u.copy(t).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zu,t)}translateY(t){return this.translateOnAxis(Ju,t)}translateZ(t){return this.translateOnAxis(ju,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Zo.copy(t):Zo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Xs,Zo,this.up):Ti.lookAt(Zo,Xs,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),Xr.setFromRotationMatrix(Ti),this.quaternion.premultiply(Xr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(pe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ku),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null):pe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tg),Ic.child=t,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ku),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,wg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Eg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*i-o[8]*s,o[13]+=i-o[1]*e-o[5]*i-o[9]*s,o[14]+=s-o[2]*e-o[6]*i-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(t)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){let f=u.shapes;if(Array.isArray(f))for(let d=0,v=f.length;d<v;d++){let S=f[d];o(t.shapes,S)}else o(t.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(o(t.materials,this.material[f]));s.material=u}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){let f=this.animations[u];s.animations.push(o(t.animations,f))}}if(e){let u=c(t.geometries),f=c(t.materials),d=c(t.textures),v=c(t.images),S=c(t.shapes),g=c(t.skeletons),b=c(t.animations),E=c(t.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),v.length>0&&(i.images=v),S.length>0&&(i.shapes=S),g.length>0&&(i.skeletons=g),b.length>0&&(i.animations=b),E.length>0&&(i.nodes=E)}return i.object=s,i;function c(u){let f=[];for(let d in u){let v=u[d];delete v.metadata,f.push(v)}return f}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};en.DEFAULT_UP=new ot(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ei=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ag={type:"move"},ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,c=null,u=this._targetRay,f=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(let C of t.hand.values()){let M=e.getJointPose(C,i),x=this._getHandJoint(d,C);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}let v=d.joints["index-finger-tip"],S=d.joints["thumb-tip"],g=v.position.distanceTo(S.position),b=.02,E=.005;d.inputState.pinching&&g>b+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=b-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else f!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:t,target:this})));u!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Ag)))}return u!==null&&(u.visible=s!==null),f!==null&&(f.visible=o!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ei;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Jo={h:0,s:0,l:0};ye=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ie.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Ie.workingColorSpace){if(t=Ch(t,1),e=Ae(e,0,1),i=Ae(i,0,1),e===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+e):i+e-i*e,c=2*i-o;this.r=Rc(c,o,t+1/3),this.g=Rc(c,o,t),this.b=Rc(c,o,t-1/3)}return Ie.colorSpaceToWorking(this,s),this}setStyle(t,e=bn){function i(o){o!==void 0&&parseFloat(o)<1&&fe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:fe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=s[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(o,16),e);fe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=bn){let i=nd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):fe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bn){return Ie.workingToColorSpace(gn.copy(this),t),Math.round(Ae(gn.r*255,0,255))*65536+Math.round(Ae(gn.g*255,0,255))*256+Math.round(Ae(gn.b*255,0,255))}getHexString(t=bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ie.workingColorSpace){Ie.workingToColorSpace(gn.copy(this),e);let i=gn.r,s=gn.g,o=gn.b,c=Math.max(i,s,o),u=Math.min(i,s,o),f,d,v=(u+c)/2;if(u===c)f=0,d=0;else{let S=c-u;switch(d=v<=.5?S/(c+u):S/(2-c-u),c){case i:f=(s-o)/S+(s<o?6:0);break;case s:f=(o-i)/S+2;break;case o:f=(i-s)/S+4;break}f/=6}return t.h=f,t.s=d,t.l=v,t}getRGB(t,e=Ie.workingColorSpace){return Ie.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=bn){Ie.workingToColorSpace(gn.copy(this),t);let e=gn.r,i=gn.g,s=gn.b;return t!==bn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(Jo);let i=Ks(Hi.h,Jo.h,e),s=Ks(Hi.s,Jo.s,e),o=Ks(Hi.l,Jo.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new ye;ye.NAMES=nd;so=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},jn=new ot,Ai=new ot,Lc=new ot,Pi=new ot,Yr=new ot,qr=new ot,Qu=new ot,Nc=new ot,Dc=new ot,Oc=new ot,Fc=new je,Uc=new je,Bc=new je,mi=class n{constructor(t=new ot,e=new ot,i=new ot){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),jn.subVectors(t,e),s.cross(jn);let o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){jn.subVectors(s,e),Ai.subVectors(i,e),Lc.subVectors(t,e);let c=jn.dot(jn),u=jn.dot(Ai),f=jn.dot(Lc),d=Ai.dot(Ai),v=Ai.dot(Lc),S=c*d-u*u;if(S===0)return o.set(0,0,0),null;let g=1/S,b=(d*f-u*v)*g,E=(c*v-u*f)*g;return o.set(1-b-E,E,b)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,i,s,o,c,u,f){return this.getBarycoord(t,e,i,s,Pi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,Pi.x),f.addScaledVector(c,Pi.y),f.addScaledVector(u,Pi.z),f)}static getInterpolatedAttribute(t,e,i,s,o,c){return Fc.setScalar(0),Uc.setScalar(0),Bc.setScalar(0),Fc.fromBufferAttribute(t,e),Uc.fromBufferAttribute(t,i),Bc.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(Fc,o.x),c.addScaledVector(Uc,o.y),c.addScaledVector(Bc,o.z),c}static isFrontFacing(t,e,i,s){return jn.subVectors(i,e),Ai.subVectors(t,e),jn.cross(Ai).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),jn.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,o=this.c,c,u;Yr.subVectors(s,i),qr.subVectors(o,i),Nc.subVectors(t,i);let f=Yr.dot(Nc),d=qr.dot(Nc);if(f<=0&&d<=0)return e.copy(i);Dc.subVectors(t,s);let v=Yr.dot(Dc),S=qr.dot(Dc);if(v>=0&&S<=v)return e.copy(s);let g=f*S-v*d;if(g<=0&&f>=0&&v<=0)return c=f/(f-v),e.copy(i).addScaledVector(Yr,c);Oc.subVectors(t,o);let b=Yr.dot(Oc),E=qr.dot(Oc);if(E>=0&&b<=E)return e.copy(o);let C=b*d-f*E;if(C<=0&&d>=0&&E<=0)return u=d/(d-E),e.copy(i).addScaledVector(qr,u);let M=v*E-b*S;if(M<=0&&S-v>=0&&b-E>=0)return Qu.subVectors(o,s),u=(S-v)/(S-v+(b-E)),e.copy(s).addScaledVector(Qu,u);let x=1/(M+C+g);return c=C*x,u=g*x,e.copy(i).addScaledVector(Yr,c).addScaledVector(qr,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yi=class{constructor(t=new ot(1/0,1/0,1/0),e=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)t.isMesh===!0?t.getVertexPosition(c,Kn):Kn.fromBufferAttribute(o,c),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),jo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jo.copy(i.boundingBox)),jo.applyMatrix4(t.matrixWorld),this.union(jo)}let s=t.children;for(let o=0,c=s.length;o<c;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),Ko.subVectors(this.max,Ws),$r.subVectors(t.a,Ws),Zr.subVectors(t.b,Ws),Jr.subVectors(t.c,Ws),Gi.subVectors(Zr,$r),Xi.subVectors(Jr,Zr),fr.subVectors($r,Jr);let e=[0,-Gi.z,Gi.y,0,-Xi.z,Xi.y,0,-fr.z,fr.y,Gi.z,0,-Gi.x,Xi.z,0,-Xi.x,fr.z,0,-fr.x,-Gi.y,Gi.x,0,-Xi.y,Xi.x,0,-fr.y,fr.x,0];return!kc(e,$r,Zr,Jr,Ko)||(e=[1,0,0,0,1,0,0,0,1],!kc(e,$r,Zr,Jr,Ko))?!1:(Qo.crossVectors(Gi,Xi),e=[Qo.x,Qo.y,Qo.z],kc(e,$r,Zr,Jr,Ko))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ci=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],Kn=new ot,jo=new Yi,$r=new ot,Zr=new ot,Jr=new ot,Gi=new ot,Xi=new ot,fr=new ot,Ws=new ot,Ko=new ot,Qo=new ot,dr=new ot;tn=new ot,ta=new le,Pg=0,$e=class extends ni{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ah,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ta.fromBufferAttribute(this,e),ta.applyMatrix3(t),this.setXY(e,ta.x,ta.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array),o=ke(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},oo=class extends $e{constructor(t,e,i){super(new Uint16Array(t),e,i)}},ao=class extends $e{constructor(t,e,i){super(new Uint32Array(t),e,i)}},Ge=class extends $e{constructor(t,e,i){super(new Float32Array(t),e,i)}},Cg=new Yi,Ys=new ot,zc=new ot,_r=class{constructor(t=new ot,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Cg.setFromPoints(t).getCenter(i);let s=0;for(let o=0,c=t.length;o<c;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);let e=Ys.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ys,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(zc)),this.expandByPoint(Ys.copy(t.center).sub(zc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ig=0,Wn=new We,Vc=new en,jr=new ot,Fn=new Yi,qs=new Yi,an=new ot,Ze=class n extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tg(t)?ao:oo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new Se().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,i){return Wn.makeTranslation(t,e,i),this.applyMatrix4(Wn),this}scale(t,e,i){return Wn.makeScale(t,e,i),this.applyMatrix4(Wn),this}lookAt(t){return Vc.lookAt(t),Vc.updateMatrix(),this.applyMatrix4(Vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,o=t.length;s<o;s++){let c=t[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ge(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let o=e[i];Fn.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _r);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(t){let i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let o=0,c=e.length;o<c;o++){let u=e[o];qs.setFromBufferAttribute(u),this.morphTargetsRelative?(an.addVectors(Fn.min,qs.min),Fn.expandByPoint(an),an.addVectors(Fn.max,qs.max),Fn.expandByPoint(an)):(Fn.expandByPoint(qs.min),Fn.expandByPoint(qs.max))}Fn.getCenter(i);let s=0;for(let o=0,c=t.count;o<c;o++)an.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(an));if(e)for(let o=0,c=e.length;o<c;o++){let u=e[o],f=this.morphTargetsRelative;for(let d=0,v=u.count;d<v;d++)an.fromBufferAttribute(u,d),f&&(jr.fromBufferAttribute(t,d),an.add(jr)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,o=e.uv,c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new $e(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));let u=[],f=[];for(let P=0;P<i.count;P++)u[P]=new ot,f[P]=new ot;let d=new ot,v=new ot,S=new ot,g=new le,b=new le,E=new le,C=new ot,M=new ot;function x(P,V,j){d.fromBufferAttribute(i,P),v.fromBufferAttribute(i,V),S.fromBufferAttribute(i,j),g.fromBufferAttribute(o,P),b.fromBufferAttribute(o,V),E.fromBufferAttribute(o,j),v.sub(d),S.sub(d),b.sub(g),E.sub(g);let Q=1/(b.x*E.y-E.x*b.y);isFinite(Q)&&(C.copy(v).multiplyScalar(E.y).addScaledVector(S,-b.y).multiplyScalar(Q),M.copy(S).multiplyScalar(b.x).addScaledVector(v,-E.x).multiplyScalar(Q),u[P].add(C),u[V].add(C),u[j].add(C),f[P].add(M),f[V].add(M),f[j].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let P=0,V=B.length;P<V;++P){let j=B[P],Q=j.start,nt=j.count;for(let ct=Q,z=Q+nt;ct<z;ct+=3)x(t.getX(ct+0),t.getX(ct+1),t.getX(ct+2))}let W=new ot,N=new ot,F=new ot,U=new ot;function Y(P){F.fromBufferAttribute(s,P),U.copy(F);let V=u[P];W.copy(V),W.sub(F.multiplyScalar(F.dot(V))).normalize(),N.crossVectors(U,V);let Q=N.dot(f[P])<0?-1:1;c.setXYZW(P,W.x,W.y,W.z,Q)}for(let P=0,V=B.length;P<V;++P){let j=B[P],Q=j.start,nt=j.count;for(let ct=Q,z=Q+nt;ct<z;ct+=3)Y(t.getX(ct+0)),Y(t.getX(ct+1)),Y(t.getX(ct+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let g=0,b=i.count;g<b;g++)i.setXYZ(g,0,0,0);let s=new ot,o=new ot,c=new ot,u=new ot,f=new ot,d=new ot,v=new ot,S=new ot;if(t)for(let g=0,b=t.count;g<b;g+=3){let E=t.getX(g+0),C=t.getX(g+1),M=t.getX(g+2);s.fromBufferAttribute(e,E),o.fromBufferAttribute(e,C),c.fromBufferAttribute(e,M),v.subVectors(c,o),S.subVectors(s,o),v.cross(S),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,C),d.fromBufferAttribute(i,M),u.add(v),f.add(v),d.add(v),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(C,f.x,f.y,f.z),i.setXYZ(M,d.x,d.y,d.z)}else for(let g=0,b=e.count;g<b;g+=3)s.fromBufferAttribute(e,g+0),o.fromBufferAttribute(e,g+1),c.fromBufferAttribute(e,g+2),v.subVectors(c,o),S.subVectors(s,o),v.cross(S),i.setXYZ(g+0,v.x,v.y,v.z),i.setXYZ(g+1,v.x,v.y,v.z),i.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(u,f){let d=u.array,v=u.itemSize,S=u.normalized,g=new d.constructor(f.length*v),b=0,E=0;for(let C=0,M=f.length;C<M;C++){u.isInterleavedBufferAttribute?b=f[C]*u.data.stride+u.offset:b=f[C]*v;for(let x=0;x<v;x++)g[E++]=d[b++]}return new $e(g,v,S)}if(this.index===null)return fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let u in s){let f=s[u],d=t(f,i);e.setAttribute(u,d)}let o=this.morphAttributes;for(let u in o){let f=[],d=o[u];for(let v=0,S=d.length;v<S;v++){let g=d[v],b=t(g,i);f.push(b)}e.morphAttributes[u]=f}e.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let u=0,f=c.length;u<f;u++){let d=c[u];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let f=this.parameters;for(let d in f)f[d]!==void 0&&(t[d]=f[d]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let f in i){let d=i[f];t.data.attributes[f]=d.toJSON(t.data)}let s={},o=!1;for(let f in this.morphAttributes){let d=this.morphAttributes[f],v=[];for(let S=0,g=d.length;S<g;S++){let b=d[S];v.push(b.toJSON(t.data))}v.length>0&&(s[f]=v,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));let u=this.boundingSphere;return u!==null&&(t.data.boundingSphere=u.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let d in s){let v=s[d];this.setAttribute(d,v.clone(e))}let o=t.morphAttributes;for(let d in o){let v=[],S=o[d];for(let g=0,b=S.length;g<b;g++)v.push(S[g].clone(e));this.morphAttributes[d]=v}this.morphTargetsRelative=t.morphTargetsRelative;let c=t.groups;for(let d=0,v=c.length;d<v;d++){let S=c[d];this.addGroup(S.start,S.count,S.materialIndex)}let u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());let f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ua=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ah,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Mn=new ot,lo=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix4(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Mn.fromBufferAttribute(this,e),Mn.applyNormalMatrix(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Mn.fromBufferAttribute(this,e),Mn.transformDirection(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Qn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array),o=ke(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){io("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){io("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hc=new ot,Rg=new ot,Lg=new Se,Un=class{constructor(t=new ot(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Hc.subVectors(i,e).cross(Rg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Hc),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let c=-(t.start.dot(this.normal)+this.constant)/o;return i===!0&&(c<0||c>1)?null:e.copy(t.start).addScaledVector(s,c)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Lg.getNormalMatrix(t),s=this.coplanarPoint(Hc).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ng=0,vi=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=Ms,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=hh,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ba,this.stencilZFail=ba,this.stencilZPass=ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){fe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){fe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){let c=[];for(let u in o){let f=o[u];delete f.metadata,c.push(f)}return c}if(e){let o=s(t.textures),c=s(t.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ye().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Un().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new le().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ps=class extends vi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$s=new ot,Qr=new ot,ts=new ot,es=new le,Zs=new le,id=new We,ea=new ot,Js=new ot,na=new ot,tf=new le,Gc=new le,ef=new le,co=class extends en{constructor(t=new ps){if(super(),this.isSprite=!0,this.type="Sprite",Kr===void 0){Kr=new Ze;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ua(e,5);Kr.setIndex([0,1,2,0,2,3]),Kr.setAttribute("position",new lo(i,3,0,!1)),Kr.setAttribute("uv",new lo(i,2,3,!1))}this.geometry=Kr,this.material=t,this.center=new le(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&pe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qr.setFromMatrixScale(this.matrixWorld),id.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qr.multiplyScalar(-ts.z);let i=this.material.rotation,s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));let c=this.center;ia(ea.set(-.5,-.5,0),ts,c,Qr,s,o),ia(Js.set(.5,-.5,0),ts,c,Qr,s,o),ia(na.set(.5,.5,0),ts,c,Qr,s,o),tf.set(0,0),Gc.set(1,0),ef.set(1,1);let u=t.ray.intersectTriangle(ea,Js,na,!1,$s);if(u===null&&(ia(Js.set(-.5,.5,0),ts,c,Qr,s,o),Gc.set(0,1),u=t.ray.intersectTriangle(ea,na,Js,!1,$s),u===null))return;let f=t.ray.origin.distanceTo($s);f<t.near||f>t.far||e.push({distance:f,point:$s.clone(),uv:mi.getInterpolation($s,ea,Js,na,tf,Gc,ef,new le),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};Ii=new ot,Xc=new ot,ra=new ot,sa=new ot,qi=class{constructor(t=new ot,e=new ot(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Xc.copy(t).add(e).multiplyScalar(.5),ra.copy(e).sub(t).normalize(),sa.copy(this.origin).sub(Xc);let o=t.distanceTo(e)*.5,c=-this.direction.dot(ra),u=sa.dot(this.direction),f=-sa.dot(ra),d=sa.lengthSq(),v=Math.abs(1-c*c),S,g,b,E;if(v>0)if(S=c*f-u,g=c*u-f,E=o*v,S>=0)if(g>=-E)if(g<=E){let C=1/v;S*=C,g*=C,b=S*(S+c*g+2*u)+g*(c*S+g+2*f)+d}else g=o,S=Math.max(0,-(c*g+u)),b=-S*S+g*(g+2*f)+d;else g=-o,S=Math.max(0,-(c*g+u)),b=-S*S+g*(g+2*f)+d;else g<=-E?(S=Math.max(0,-(-c*o+u)),g=S>0?-o:Math.min(Math.max(-o,-f),o),b=-S*S+g*(g+2*f)+d):g<=E?(S=0,g=Math.min(Math.max(-o,-f),o),b=g*(g+2*f)+d):(S=Math.max(0,-(c*o+u)),g=S>0?o:Math.min(Math.max(-o,-f),o),b=-S*S+g*(g+2*f)+d);else g=c>0?-o:o,S=Math.max(0,-(c*g+u)),b=-S*S+g*(g+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,S),s&&s.copy(Xc).addScaledVector(ra,g),b}intersectSphere(t,e){if(t.radius<0)return null;Ii.subVectors(t.center,this.origin);let i=Ii.dot(this.direction),s=Ii.dot(Ii)-i*i,o=t.radius*t.radius;if(s>o)return null;let c=Math.sqrt(o-s),u=i-c,f=i+c;return f<0?null:u<0?this.at(f,e):this.at(u,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,c,u,f,d=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,g=this.origin;return d>=0?(i=(t.min.x-g.x)*d,s=(t.max.x-g.x)*d):(i=(t.max.x-g.x)*d,s=(t.min.x-g.x)*d),v>=0?(o=(t.min.y-g.y)*v,c=(t.max.y-g.y)*v):(o=(t.max.y-g.y)*v,c=(t.min.y-g.y)*v),i>c||o>s||((o>i||isNaN(i))&&(i=o),(c<s||isNaN(s))&&(s=c),S>=0?(u=(t.min.z-g.z)*S,f=(t.max.z-g.z)*S):(u=(t.max.z-g.z)*S,f=(t.min.z-g.z)*S),i>f||u>s)||((u>i||i!==i)&&(i=u),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,i,s,o){let c=this.origin,u=this.direction,f=u.x,d=u.y,v=u.z,S=t.x-c.x,g=t.y-c.y,b=t.z-c.z,E=e.x-c.x,C=e.y-c.y,M=e.z-c.z,x=i.x-c.x,B=i.y-c.y,W=i.z-c.z,N=Math.abs(f),F=Math.abs(d),U=Math.abs(v),Y,P,V,j,Q,nt,ct,z,q,st,G,vt;if(N>=F&&N>=U?(V=f,nt=S,q=E,vt=x,f>=0?(Y=d,P=v,j=g,Q=b,ct=C,z=M,st=B,G=W):(Y=v,P=d,j=b,Q=g,ct=M,z=C,st=W,G=B)):F>=U?(V=d,nt=g,q=C,vt=B,d>=0?(Y=v,P=f,j=b,Q=S,ct=M,z=E,st=W,G=x):(Y=f,P=v,j=S,Q=b,ct=E,z=M,st=x,G=W)):(V=v,nt=b,q=M,vt=W,v>=0?(Y=f,P=d,j=S,Q=g,ct=E,z=C,st=x,G=B):(Y=d,P=f,j=g,Q=S,ct=C,z=E,st=B,G=x)),V===0)return null;let dt=Y/V,St=P/V,_t=1/V,Xt=j-dt*nt,$t=Q-St*nt,ue=ct-dt*q,xe=z-St*q,Ee=st-dt*vt,yt=G-St*vt,wt=Ee*xe-yt*ue,Zt=Xt*yt-$t*Ee,ae=ue*$t-xe*Xt;if(s){if(wt<0||Zt<0||ae<0)return null}else if((wt<0||Zt<0||ae<0)&&(wt>0||Zt>0||ae>0))return null;let Ot=wt+Zt+ae;if(Ot===0)return null;let me=_t*(wt*nt+Zt*q+ae*vt);return(Ot>0?me<0:me>0)?null:this.at(me/Ot,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ii=class extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},nf=new We,pr=new qi,oa=new _r,rf=new ot,aa=new ot,la=new ot,ca=new ot,Wc=new ot,ha=new ot,sf=new ot,ua=new ot,ze=class extends en{constructor(t=new Ze,e=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){let u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let u=this.morphTargetInfluences;if(o&&u){ha.set(0,0,0);for(let f=0,d=o.length;f<d;f++){let v=u[f],S=o[f];v!==0&&(Wc.fromBufferAttribute(S,t),c?ha.addScaledVector(Wc,v):ha.addScaledVector(Wc.sub(e),v))}e.add(ha)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(o),pr.copy(t.ray).recast(t.near),!(oa.containsPoint(pr.origin)===!1&&(pr.intersectSphere(oa,rf)===null||pr.origin.distanceToSquared(rf)>(t.far-t.near)**2))&&(nf.copy(o).invert(),pr.copy(t.ray).applyMatrix4(nf),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,pr)))}_computeIntersections(t,e,i){let s,o=this.geometry,c=this.material,u=o.index,f=o.attributes.position,d=o.attributes.uv,v=o.attributes.uv1,S=o.attributes.normal,g=o.groups,b=o.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,C=g.length;E<C;E++){let M=g[E],x=c[M.materialIndex],B=Math.max(M.start,b.start),W=Math.min(u.count,Math.min(M.start+M.count,b.start+b.count));for(let N=B,F=W;N<F;N+=3){let U=u.getX(N),Y=u.getX(N+1),P=u.getX(N+2);s=fa(this,x,t,i,d,v,S,U,Y,P),s&&(s.faceIndex=Math.floor(N/3),s.face.materialIndex=M.materialIndex,e.push(s))}}else{let E=Math.max(0,b.start),C=Math.min(u.count,b.start+b.count);for(let M=E,x=C;M<x;M+=3){let B=u.getX(M),W=u.getX(M+1),N=u.getX(M+2);s=fa(this,c,t,i,d,v,S,B,W,N),s&&(s.faceIndex=Math.floor(M/3),e.push(s))}}else if(f!==void 0)if(Array.isArray(c))for(let E=0,C=g.length;E<C;E++){let M=g[E],x=c[M.materialIndex],B=Math.max(M.start,b.start),W=Math.min(f.count,Math.min(M.start+M.count,b.start+b.count));for(let N=B,F=W;N<F;N+=3){let U=N,Y=N+1,P=N+2;s=fa(this,x,t,i,d,v,S,U,Y,P),s&&(s.faceIndex=Math.floor(N/3),s.face.materialIndex=M.materialIndex,e.push(s))}}else{let E=Math.max(0,b.start),C=Math.min(f.count,b.start+b.count);for(let M=E,x=C;M<x;M+=3){let B=M,W=M+1,N=M+2;s=fa(this,c,t,i,d,v,S,B,W,N),s&&(s.faceIndex=Math.floor(M/3),e.push(s))}}}};Ba=class extends wn{constructor(t=null,e=1,i=1,s,o,c,u,f,d=ln,v=ln,S,g){super(null,c,u,f,d,v,s,o,S,g),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},mr=new _r,Og=new le(.5,.5),da=new ot,ms=class{constructor(t=new Un,e=new Un,i=new Un,s=new Un,o=new Un,c=new Un){this.planes=[t,e,i,s,o,c]}set(t,e,i,s,o,c){let u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(i),u[3].copy(s),u[4].copy(o),u[5].copy(c),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ti,i=!1){let s=this.planes,o=t.elements,c=o[0],u=o[1],f=o[2],d=o[3],v=o[4],S=o[5],g=o[6],b=o[7],E=o[8],C=o[9],M=o[10],x=o[11],B=o[12],W=o[13],N=o[14],F=o[15];if(s[0].setComponents(d-c,b-v,x-E,F-B).normalize(),s[1].setComponents(d+c,b+v,x+E,F+B).normalize(),s[2].setComponents(d+u,b+S,x+C,F+W).normalize(),s[3].setComponents(d-u,b-S,x-C,F-W).normalize(),i)s[4].setComponents(f,g,M,N).normalize(),s[5].setComponents(d-f,b-g,x-M,F-N).normalize();else if(s[4].setComponents(d-f,b-g,x-M,F-N).normalize(),e===ti)s[5].setComponents(d+f,b+g,x+M,F+N).normalize();else if(e===ls)s[5].setComponents(f,g,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(t){mr.center.set(0,0,0);let e=Og.distanceTo(t.center);return mr.radius=.7071067811865476+e,mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(da.x=s.normal.x>0?t.max.x:t.min.x,da.y=s.normal.y>0?t.max.y:t.min.y,da.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(da)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ri=class extends vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ka=new ot,za=new ot,of=new We,js=new qi,pa=new _r,Yc=new ot,af=new ot,vr=class extends en{constructor(t=new Ze,e=new ri){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,o=e.count;s<o;s++)ka.fromBufferAttribute(e,s-1),za.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ka.distanceTo(za);t.setAttribute("lineDistance",new Ge(i,1))}else fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(s),pa.radius+=o,t.ray.intersectsSphere(pa)===!1)return;of.copy(s).invert(),js.copy(t.ray).applyMatrix4(of);let u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=this.isLineSegments?2:1,v=i.index,g=i.attributes.position;if(v!==null){let b=Math.max(0,c.start),E=Math.min(v.count,c.start+c.count);for(let C=b,M=E-1;C<M;C+=d){let x=v.getX(C),B=v.getX(C+1),W=ma(this,t,js,f,x,B,C);W&&e.push(W)}if(this.isLineLoop){let C=v.getX(E-1),M=v.getX(b),x=ma(this,t,js,f,C,M,E-1);x&&e.push(x)}}else{let b=Math.max(0,c.start),E=Math.min(g.count,c.start+c.count);for(let C=b,M=E-1;C<M;C+=d){let x=ma(this,t,js,f,C,C+1,C);x&&e.push(x)}if(this.isLineLoop){let C=ma(this,t,js,f,E-1,b,E-1);C&&e.push(C)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){let u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}};lf=new ot,cf=new ot,yr=class extends vr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,o=e.count;s<o;s+=2)lf.fromBufferAttribute(e,s),cf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+lf.distanceTo(cf);t.setAttribute("lineDistance",new Ge(i,1))}else fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ho=class extends wn{constructor(t=[],e=ir,i,s,o,c,u,f,d,v){super(t,e,i,s,o,c,u,f,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},uo=class extends wn{constructor(t,e,i,s,o,c,u,f,d){super(t,e,i,s,o,c,u,f,d),this.isCanvasTexture=!0,this.needsUpdate=!0}},$i=class extends wn{constructor(t,e,i=oi,s,o,c,u=ln,f=ln,d,v=_i,S=1){if(v!==_i&&v!==sr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let g={width:t,height:e,depth:S};super(g,s,o,c,u,f,v,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new us(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Va=class extends $i{constructor(t,e=oi,i=ir,s,o,c=ln,u=ln,f,d=_i){let v={width:t,height:t,depth:1},S=[v,v,v,v,v,v];super(t,t,e,i,s,o,c,u,f,d),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},fo=class extends wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Zi=class n extends Ze{constructor(t=1,e=1,i=1,s=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:c};let u=this;s=Math.floor(s),o=Math.floor(o),c=Math.floor(c);let f=[],d=[],v=[],S=[],g=0,b=0;E("z","y","x",-1,-1,i,e,t,c,o,0),E("z","y","x",1,-1,i,e,-t,c,o,1),E("x","z","y",1,1,t,i,e,s,c,2),E("x","z","y",1,-1,t,i,-e,s,c,3),E("x","y","z",1,-1,t,e,i,s,o,4),E("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(f),this.setAttribute("position",new Ge(d,3)),this.setAttribute("normal",new Ge(v,3)),this.setAttribute("uv",new Ge(S,2));function E(C,M,x,B,W,N,F,U,Y,P,V){let j=N/Y,Q=F/P,nt=N/2,ct=F/2,z=U/2,q=Y+1,st=P+1,G=0,vt=0,dt=new ot;for(let St=0;St<st;St++){let _t=St*Q-ct;for(let Xt=0;Xt<q;Xt++){let $t=Xt*j-nt;dt[C]=$t*B,dt[M]=_t*W,dt[x]=z,d.push(dt.x,dt.y,dt.z),dt[C]=0,dt[M]=0,dt[x]=U>0?1:-1,v.push(dt.x,dt.y,dt.z),S.push(Xt/Y),S.push(1-St/P),G+=1}}for(let St=0;St<P;St++)for(let _t=0;_t<Y;_t++){let Xt=g+_t+q*St,$t=g+_t+q*(St+1),ue=g+(_t+1)+q*(St+1),xe=g+(_t+1)+q*St;f.push(Xt,$t,xe),f.push($t,ue,xe),vt+=6}u.addGroup(b,vt,V),b+=vt,g+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ji=class n extends Ze{constructor(t=1,e=1,i=1,s=32,o=1,c=!1,u=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:f};let d=this;s=Math.floor(s),o=Math.floor(o);let v=[],S=[],g=[],b=[],E=0,C=[],M=i/2,x=0;B(),c===!1&&(t>0&&W(!0),e>0&&W(!1)),this.setIndex(v),this.setAttribute("position",new Ge(S,3)),this.setAttribute("normal",new Ge(g,3)),this.setAttribute("uv",new Ge(b,2));function B(){let N=new ot,F=new ot,U=0,Y=(e-t)/i;for(let P=0;P<=o;P++){let V=[],j=P/o,Q=j*(e-t)+t;for(let nt=0;nt<=s;nt++){let ct=nt/s,z=ct*f+u,q=Math.sin(z),st=Math.cos(z);F.x=Q*q,F.y=-j*i+M,F.z=Q*st,S.push(F.x,F.y,F.z),N.set(q,Y,st).normalize(),g.push(N.x,N.y,N.z),b.push(ct,1-j),V.push(E++)}C.push(V)}for(let P=0;P<s;P++)for(let V=0;V<o;V++){let j=C[V][P],Q=C[V+1][P],nt=C[V+1][P+1],ct=C[V][P+1];(t>0||V!==0)&&(v.push(j,Q,ct),U+=3),(e>0||V!==o-1)&&(v.push(Q,nt,ct),U+=3)}d.addGroup(x,U,0),x+=U}function W(N){let F=E,U=new le,Y=new ot,P=0,V=N===!0?t:e,j=N===!0?1:-1;for(let nt=1;nt<=s;nt++)S.push(0,M*j,0),g.push(0,j,0),b.push(.5,.5),E++;let Q=E;for(let nt=0;nt<=s;nt++){let z=nt/s*f+u,q=Math.cos(z),st=Math.sin(z);Y.x=V*st,Y.y=M*j,Y.z=V*q,S.push(Y.x,Y.y,Y.z),g.push(0,j,0),U.x=q*.5+.5,U.y=st*.5*j+.5,b.push(U.x,U.y),E++}for(let nt=0;nt<s;nt++){let ct=F+nt,z=Q+nt;N===!0?v.push(z,z+1,ct):v.push(z+1,z,ct),P+=3}d.addGroup(x,P,N===!0?1:2),x+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},gs=class n extends Ji{constructor(t=1,e=1,i=32,s=1,o=!1,c=0,u=Math.PI*2){super(0,t,e,i,s,o,c,u),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:c,thetaLength:u}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ga=new ot,_a=new ot,qc=new ot,va=new mi,_s=class extends Ze{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),o=Math.cos(ss*e),c=t.getIndex(),u=t.getAttribute("position"),f=c?c.count:u.count,d=[0,0,0],v=["a","b","c"],S=new Array(3),g={},b=[];for(let E=0;E<f;E+=3){c?(d[0]=c.getX(E),d[1]=c.getX(E+1),d[2]=c.getX(E+2)):(d[0]=E,d[1]=E+1,d[2]=E+2);let{a:C,b:M,c:x}=va;if(C.fromBufferAttribute(u,d[0]),M.fromBufferAttribute(u,d[1]),x.fromBufferAttribute(u,d[2]),va.getNormal(qc),S[0]=`${Math.round(C.x*s)},${Math.round(C.y*s)},${Math.round(C.z*s)}`,S[1]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,S[2]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,!(S[0]===S[1]||S[1]===S[2]||S[2]===S[0]))for(let B=0;B<3;B++){let W=(B+1)%3,N=S[B],F=S[W],U=va[v[B]],Y=va[v[W]],P=`${N}_${F}`,V=`${F}_${N}`;V in g&&g[V]?(qc.dot(g[V].normal)<=o&&(b.push(U.x,U.y,U.z),b.push(Y.x,Y.y,Y.z)),g[V]=null):P in g||(g[P]={index0:d[B],index1:d[W],normal:qc.clone()})}}for(let E in g)if(g[E]){let{index0:C,index1:M}=g[E];ga.fromBufferAttribute(u,C),_a.fromBufferAttribute(u,M),b.push(ga.x,ga.y,ga.z),b.push(_a.x,_a.y,_a.z)}this.setAttribute("position",new Ge(b,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},po=class n extends Ze{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let o=t/2,c=e/2,u=Math.floor(i),f=Math.floor(s),d=u+1,v=f+1,S=t/u,g=e/f,b=[],E=[],C=[],M=[];for(let x=0;x<v;x++){let B=x*g-c;for(let W=0;W<d;W++){let N=W*S-o;E.push(N,-B,0),C.push(0,0,1),M.push(W/u),M.push(1-x/f)}}for(let x=0;x<f;x++)for(let B=0;B<u;B++){let W=B+d*x,N=B+d*(x+1),F=B+1+d*(x+1),U=B+1+d*x;b.push(W,N,U),b.push(N,F,U)}this.setIndex(b),this.setAttribute("position",new Ge(E,3)),this.setAttribute("normal",new Ge(C,3)),this.setAttribute("uv",new Ge(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},mo=class n extends Ze{constructor(t=.5,e=1,i=32,s=1,o=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:o,thetaLength:c},i=Math.max(3,i),s=Math.max(1,s);let u=[],f=[],d=[],v=[],S=t,g=(e-t)/s,b=new ot,E=new le;for(let C=0;C<=s;C++){for(let M=0;M<=i;M++){let x=o+M/i*c;b.x=S*Math.cos(x),b.y=S*Math.sin(x),f.push(b.x,b.y,b.z),d.push(0,0,1),E.x=(b.x/e+1)/2,E.y=(b.y/e+1)/2,v.push(E.x,E.y)}S+=g}for(let C=0;C<s;C++){let M=C*(i+1);for(let x=0;x<i;x++){let B=x+M,W=B,N=B+i+1,F=B+i+2,U=B+1;u.push(W,N,U),u.push(N,F,U)}}this.setIndex(u),this.setAttribute("position",new Ge(f,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},xr=class n extends Ze{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:c,thetaLength:u},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let f=Math.min(c+u,Math.PI),d=0,v=[],S=new ot,g=new ot,b=[],E=[],C=[],M=[];for(let x=0;x<=i;x++){let B=[],W=x/i,N=c+W*u,F=t*Math.cos(N),U=Math.sqrt(t*t-F*F),Y=0;x===0&&c===0?Y=.5/e:x===i&&f===Math.PI&&(Y=-.5/e);for(let P=0;P<=e;P++){let V=P/e,j=s+V*o;S.x=-U*Math.cos(j),S.y=F,S.z=U*Math.sin(j),E.push(S.x,S.y,S.z),g.copy(S).normalize(),C.push(g.x,g.y,g.z),M.push(V+Y,1-W),B.push(d++)}v.push(B)}for(let x=0;x<i;x++)for(let B=0;B<e;B++){let W=v[x][B+1],N=v[x][B],F=v[x+1][B],U=v[x+1][B+1];(x!==0||c>0)&&b.push(W,N,U),(x!==i-1||f<Math.PI)&&b.push(N,F,U)}this.setIndex(b),this.setAttribute("position",new Ge(E,3)),this.setAttribute("normal",new Ge(C,3)),this.setAttribute("uv",new Ge(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};rd={clone:br,merge:yn},Ug=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ug,this.fragmentShader=Bg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=br(t.uniforms),this.uniformsGroups=Fg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let c=this.uniforms[s].value;c&&c.isTexture?e.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[s]={type:"m4",value:c.toArray()}:e.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ye().setHex(s.value);break;case"v2":this.uniforms[i].value=new le().fromArray(s.value);break;case"v3":this.uniforms[i].value=new ot().fromArray(s.value);break;case"v4":this.uniforms[i].value=new je().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Se().fromArray(s.value);break;case"m4":this.uniforms[i].value=new We().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ha=class extends kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Rn=class extends vi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gl,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ga=class extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xa=class extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},go=class extends ri{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};ji=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],o=e[i-1];n:{t:{let c;e:{i:if(!(t<s)){for(let u=i+2;;){if(s===void 0){if(t<o)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(o=s,s=e[++i],t<s)break t}c=e.length;break e}if(!(t>=o)){let u=e[1];t<u&&(i=2,o=u);for(let f=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(s=o,o=e[--i-1],t>=o)break t}c=i,i=0;break e}break n}for(;i<c;){let u=i+c>>>1;t<e[u]?c=u:i=u+1}if(s=e[i],o=e[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,s)}return this.interpolate_(i,o,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,o=t*s;for(let c=0;c!==s;++c)e[c]=i[o+c];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Wa=class extends ji{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kc,endingEnd:Kc}}intervalChanged_(t,e,i){let s=this.parameterPositions,o=t-2,c=t+1,u=s[o],f=s[c];if(u===void 0)switch(this.getSettings_().endingStart){case Qc:o=t,u=2*e-i;break;case th:o=s.length-2,u=e+s[o]-s[o+1];break;default:o=t,u=i}if(f===void 0)switch(this.getSettings_().endingEnd){case Qc:c=t,f=2*i-e;break;case th:c=1,f=i+s[1]-s[0];break;default:c=t-1,f=e}let d=(i-e)*.5,v=this.valueSize;this._weightPrev=d/(e-u),this._weightNext=d/(f-i),this._offsetPrev=o*v,this._offsetNext=c*v}interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=t*u,d=f-u,v=this._offsetPrev,S=this._offsetNext,g=this._weightPrev,b=this._weightNext,E=(i-e)/(s-e),C=E*E,M=C*E,x=-g*M+2*g*C-g*E,B=(1+g)*M+(-1.5-2*g)*C+(-.5+g)*E+1,W=(-1-b)*M+(1.5+b)*C+.5*E,N=b*M-b*C;for(let F=0;F!==u;++F)o[F]=x*c[v+F]+B*c[d+F]+W*c[f+F]+N*c[S+F];return o}},Ya=class extends ji{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=t*u,d=f-u,v=(i-e)/(s-e),S=1-v;for(let g=0;g!==u;++g)o[g]=c[d+g]*S+c[f+g]*v;return o}},qa=class extends ji{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},$a=class extends ji{interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=t*u,d=f-u,v=this.inTangents,S=this.outTangents;if(!v||!S){let E=(i-e)/(s-e),C=1-E;for(let M=0;M!==u;++M)o[M]=c[d+M]*C+c[f+M]*E;return o}let g=u*2,b=t-1;for(let E=0;E!==u;++E){let C=c[d+E],M=c[f+E],x=b*g+E*2,B=S[x],W=S[x+1],N=t*g+E*2,F=v[N],U=v[N+1],Y=zg(i,e,B,F,s);o[E]=sd(Y,C,W,U,M)}return o}};zn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ns(e,this.TimeBufferType),this.values=ns(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ns(t.times,Array),values:ns(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),$c(t.settings)&&(i.settings={inTangents:ns(t.settings.inTangents,Array),outTangents:ns(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new $a(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Qs:e=this.InterpolantFactoryMethodDiscrete;break;case Na:e=this.InterpolantFactoryMethodLinear;break;case Ma:e=this.InterpolantFactoryMethodSmooth;break;case jc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return fe("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return Na;case this.InterpolantFactoryMethodSmooth:return Ma;case this.InterpolantFactoryMethodBezier:return jc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;$c(this.settings)&&(uf(this.settings.inTangents,t),uf(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,o=0,c=s-1;for(;o!==s&&i[o]<t;)++o;for(;c!==-1&&i[c]>e;)--c;if(++c,o!==0||c!==s){o>=c&&(c=Math.max(c,1),o=c-1);let u=this.getValueSize();this.times=i.slice(o,c),this.values=this.values.slice(o*u,c*u)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(pe("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,o=i.length;o===0&&(pe("KeyframeTrack: Track is empty.",this),t=!1);let c=null;for(let u=0;u!==o;u++){let f=i[u];if(typeof f=="number"&&isNaN(f)){pe("KeyframeTrack: Time is not a valid number.",this,u,f),t=!1;break}if(c!==null&&c>f){pe("KeyframeTrack: Out of order keys.",this,u,f,c),t=!1;break}c=f}if(s!==void 0&&eg(s))for(let u=0,f=s.length;u!==f;++u){let d=s[u];if(isNaN(d)){pe("KeyframeTrack: Value is not a valid number.",this,u,d),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ma,o=t.length-1,c=1;for(let u=1;u<o;++u){let f=!1,d=t[u],v=t[u+1];if(d!==v&&(u!==1||d!==t[0]))if(s)f=!0;else{let S=u*i,g=S-i,b=S+i;for(let E=0;E!==i;++E){let C=e[S+E];if(C!==e[g+E]||C!==e[b+E]){f=!0;break}}}if(f){if(u!==c){t[c]=t[u];let S=u*i,g=c*i;for(let b=0;b!==i;++b)e[g+b]=e[S+b]}++c}}if(o>0){t[c]=t[o];for(let u=o*i,f=c*i,d=0;d!==i;++d)e[f+d]=e[u+d];++c}return c!==t.length?(this.times=t.slice(0,c),this.values=e.slice(0,c*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,$c(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Na;Ki=class extends zn{constructor(t,e,i){super(t,e,i)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Qs;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;Za=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};Za.prototype.ValueTypeName="color";Ja=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};Ja.prototype.ValueTypeName="number";ja=class extends ji{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=(i-e)/(s-e),d=t*u;for(let v=d+u;d!==v;d+=4)Bn.slerpFlat(o,0,c,d-u,c,d,f);return o}},_o=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new ja(this.times,this.values,this.getValueSize(),t)}};_o.prototype.ValueTypeName="quaternion";_o.prototype.InterpolantFactoryMethodSmooth=void 0;Qi=class extends zn{constructor(t,e,i){super(t,e,i)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Qs;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;Ka=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};Ka.prototype.ValueTypeName="vector";Qa=class{constructor(t,e,i){let s=this,o=!1,c=0,u=0,f,d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(v){u++,o===!1&&s.onStart!==void 0&&s.onStart(v,c,u),o=!0},this.itemEnd=function(v){c++,s.onProgress!==void 0&&s.onProgress(v,c,u),c===u&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(v){s.onError!==void 0&&s.onError(v)},this.resolveURL=function(v){return v=v.normalize("NFC"),f?f(v):v},this.setURLModifier=function(v){return f=v,this},this.addHandler=function(v,S){return d.push(v,S),this},this.removeHandler=function(v){let S=d.indexOf(v);return S!==-1&&d.splice(S,2),this},this.getHandler=function(v){for(let S=0,g=d.length;S<g;S+=2){let b=d[S],E=d[S+1];if(b.global&&(b.lastIndex=0),b.test(v))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},od=new Qa,tl=class{constructor(t){this.manager=t!==void 0?t:od,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};tl.DEFAULT_MATERIAL_NAME="__DEFAULT";vo=class extends en{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},yo=class extends vo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Zc=new We,ff=new ot,df=new ot,el=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ff.setFromMatrixPosition(t.matrixWorld),e.position.copy(ff),df.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(df),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Zc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Zc,t.coordinateSystem,t.reversedDepth);let o=this._frameExtents,c=s?s.z/o.x:1,u=s?s.w/o.y:1,f=s?s.x/o.x:0,d=s?s.y/o.y:0;t.coordinateSystem===ls||t.reversedDepth?e.set(.5*c,0,0,.5*c+f,0,.5*u,0,.5*u+d,0,0,1,0,0,0,0,1):e.set(.5*c,0,0,.5*c+f,0,.5*u,0,.5*u+d,0,0,.5,.5,0,0,0,1),e.multiply(Zc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ya=new ot,xa=new Bn,pi=new ot,xo=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ya,xa,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ya,xa,pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(ya,xa,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ya,xa,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wi=new ot,pf=new le,mf=new le,_n=class extends xo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z)}getViewSize(t,e){return this.getViewBounds(t,pf,mf),e.subVectors(mf,pf)}setViewOffset(t,e,i,s,o,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ss*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s,c=this.view;if(this.view!==null&&this.view.enabled){let f=c.fullWidth,d=c.fullHeight;o+=c.offsetX*s/f,e-=c.offsetY*i/d,s*=c.width/f,i*=c.height/d}let u=this.filmOffset;u!==0&&(o+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vs=class extends xo{constructor(t=-1,e=1,i=1,s=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,o=i-t,c=i+t,u=s+e,f=s-e;if(this.view!==null&&this.view.enabled){let d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,c=o+d*this.view.width,u-=v*this.view.offsetY,f=u-v*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},eh=class extends el{constructor(){super(new vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ys=class extends vo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new eh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},is=-90,rs=1,nl=class extends en{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _n(is,rs,t,e);s.layers=this.layers,this.add(s);let o=new _n(is,rs,t,e);o.layers=this.layers,this.add(o);let c=new _n(is,rs,t,e);c.layers=this.layers,this.add(c);let u=new _n(is,rs,t,e);u.layers=this.layers,this.add(u);let f=new _n(is,rs,t,e);f.layers=this.layers,this.add(f);let d=new _n(is,rs,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,o,c,u,f]=e;for(let d of e)this.remove(d);if(t===ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(t===ls)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,c,u,f,d,v]=this.children,S=t.getRenderTarget(),g=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;let C=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,1,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,2,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(i,3,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(i,4,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),i.texture.generateMipmaps=C,t.setRenderTarget(i,5,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,v),t.setRenderTarget(S,g,b),t.xr.enabled=E,i.texture.needsPMREMUpdate=!0}},il=class extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Lh="\\[\\]\\.:\\/",Vg=new RegExp("["+Lh+"]","g"),Nh="[^"+Lh+"]",Hg="[^"+Lh.replace("\\.","")+"]",Gg=/((?:WC+[\/:])*)/.source.replace("WC",Nh),Xg=/(WCOD+)?/.source.replace("WCOD",Hg),Wg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nh),Yg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nh),qg=new RegExp("^"+Gg+Xg+Wg+Yg+"$"),$g=["material","materials","bones","map"],nh=class{constructor(t,e,i){let s=i||qe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=i.length;s!==o;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},qe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vg,"")}static parseTrackName(t){let e=qg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=i.nodeName.substring(s+1);$g.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(o){for(let c=0;c<o.length;c++){let u=o[c];if(u.name===e||u.uuid===e)return u;let f=i(u.children);if(f)return f}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,o=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=e.objectIndex;switch(i){case"materials":if(!t.material){pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let v=0;v<t.length;v++)if(t[v].name===d){d=v;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(d!==void 0){if(t[d]===void 0){pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}let c=t[s];if(c===void 0){let d=e.nodeName;pe("PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",t);return}let u=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?u=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}f=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=o}else c.fromArray!==void 0&&c.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(f=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qe.Composite=nh;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];OS=new Float32Array(1),gf=new We,So=class{constructor(t,e,i=0,s=1/0){this.ray=new qi(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):pe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gf),this}intersectObject(t,e=!0,i=[]){return ih(t,this,i,e),i.sort(_f),i}intersectObjects(t,e=!0,i=[]){for(let s=0,o=t.length;s<o;s++)ih(t[s],this,i,e);return i.sort(_f),i}};xs=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ae(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},rh=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let o=this.elements;return o[0]=t,o[2]=e,o[1]=i,o[3]=s,this}},vf=new ot,Mo=class extends en{constructor(t=new ot(0,0,1),e=new ot(0,0,0),i=1,s=16776960,o=i*.2,c=o*.2){super(),this.type="ArrowHelper",Sa===void 0&&(Sa=new Ze,Sa.setAttribute("position",new Ge([0,0,0,0,1,0],3)),Jc=new gs(.5,1,5,1),Jc.translate(0,-.5,0)),this.position.copy(e),this.line=new vr(Sa,new ri({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ze(Jc,new ii({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,o,c)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{vf.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(vf,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},bo=class extends ni{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function Pd(){let n=null,t=!1,e=null,i=null;function s(o,c){i=n.requestAnimationFrame(s),e(o,c)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function jg(n){let t=new WeakMap;function e(u,f){let d=u.array,v=u.usage,S=d.byteLength,g=n.createBuffer();n.bindBuffer(f,g),n.bufferData(f,d,v),u.onUploadCallback();let b;if(d instanceof Float32Array)b=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)b=n.HALF_FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?b=n.HALF_FLOAT:b=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)b=n.SHORT;else if(d instanceof Uint32Array)b=n.UNSIGNED_INT;else if(d instanceof Int32Array)b=n.INT;else if(d instanceof Int8Array)b=n.BYTE;else if(d instanceof Uint8Array)b=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)b=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:b,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:S}}function i(u,f,d){let v=f.array,S=f.updateRanges;if(n.bindBuffer(d,u),S.length===0)n.bufferSubData(d,0,v);else{S.sort((b,E)=>b.start-E.start);let g=0;for(let b=1;b<S.length;b++){let E=S[g],C=S[b];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++g,S[g]=C)}S.length=g+1;for(let b=0,E=S.length;b<E;b++){let C=S[b];n.bufferSubData(d,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);let f=t.get(u);f&&(n.deleteBuffer(f.buffer),t.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){let v=t.get(u);(!v||v.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}let d=t.get(u);if(d===void 0)t.set(u,e(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,f),d.version=u.version}}return{get:s,remove:o,update:c}}function Nv(n,t,e,i,s,o){let c=new ye(0),u=s===!0?0:1,f,d,v=null,S=0,g=null;function b(B){let W=B.isScene===!0?B.background:null;if(W&&W.isTexture){let N=B.backgroundBlurriness>0;W=t.get(W,N)}return W}function E(B){let W=!1,N=b(B);N===null?M(c,u):N&&N.isColor&&(M(N,1),W=!0);let F=n.xr.getEnvironmentBlendMode();F==="additive"?e.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(n.autoClear||W)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function C(B,W){let N=b(W);N&&(N.isCubeTexture||N.mapping===Eo)?(d===void 0&&(d=new ze(new Zi(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:br(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(F,U,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=N,d.material.uniforms.backgroundBlurriness.value=W.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=W.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Lv.makeRotationFromEuler(W.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Cd),d.material.toneMapped=Ie.getTransfer(N.colorSpace)!==Ue,(v!==N||S!==N.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,v=N,S=N.version,g=n.toneMapping),d.layers.enableAll(),B.unshift(d,d.geometry,d.material,0,0,null)):N&&N.isTexture&&(f===void 0&&(f=new ze(new po(2,2),new kn({name:"BackgroundMaterial",uniforms:br(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=N,f.material.uniforms.backgroundIntensity.value=W.backgroundIntensity,f.material.toneMapped=Ie.getTransfer(N.colorSpace)!==Ue,N.matrixAutoUpdate===!0&&N.updateMatrix(),f.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||S!==N.version||g!==n.toneMapping)&&(f.material.needsUpdate=!0,v=N,S=N.version,g=n.toneMapping),f.layers.enableAll(),B.unshift(f,f.geometry,f.material,0,0,null))}function M(B,W){B.getRGB(Yl,Rh(n)),e.buffers.color.setClear(Yl.r,Yl.g,Yl.b,W,o)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(B,W=1){c.set(B),u=W,M(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(B){u=B,M(c,u)},render:E,addToRenderList:C,dispose:x}}function Dv(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=g(null),o=s,c=!1;function u(Q,nt,ct,z,q){let st=!1,G=S(Q,z,ct,nt);o!==G&&(o=G,d(o.object)),st=b(Q,z,ct,q),st&&E(Q,z,ct,q),q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(st||c)&&(c=!1,N(Q,nt,ct,z),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function f(){return n.createVertexArray()}function d(Q){return n.bindVertexArray(Q)}function v(Q){return n.deleteVertexArray(Q)}function S(Q,nt,ct,z){let q=z.wireframe===!0,st=i[nt.id];st===void 0&&(st={},i[nt.id]=st);let G=Q.isInstancedMesh===!0?Q.id:0,vt=st[G];vt===void 0&&(vt={},st[G]=vt);let dt=vt[ct.id];dt===void 0&&(dt={},vt[ct.id]=dt);let St=dt[q];return St===void 0&&(St=g(f()),dt[q]=St),St}function g(Q){let nt=[],ct=[],z=[];for(let q=0;q<e;q++)nt[q]=0,ct[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:nt,enabledAttributes:ct,attributeDivisors:z,object:Q,attributes:{},index:null}}function b(Q,nt,ct,z){let q=o.attributes,st=nt.attributes,G=0,vt=ct.getAttributes();for(let dt in vt)if(vt[dt].location>=0){let _t=q[dt],Xt=st[dt];if(Xt===void 0&&(dt==="instanceMatrix"&&Q.instanceMatrix&&(Xt=Q.instanceMatrix),dt==="instanceColor"&&Q.instanceColor&&(Xt=Q.instanceColor)),_t===void 0||_t.attribute!==Xt||Xt&&_t.data!==Xt.data)return!0;G++}return o.attributesNum!==G||o.index!==z}function E(Q,nt,ct,z){let q={},st=nt.attributes,G=0,vt=ct.getAttributes();for(let dt in vt)if(vt[dt].location>=0){let _t=st[dt];_t===void 0&&(dt==="instanceMatrix"&&Q.instanceMatrix&&(_t=Q.instanceMatrix),dt==="instanceColor"&&Q.instanceColor&&(_t=Q.instanceColor));let Xt={};Xt.attribute=_t,_t&&_t.data&&(Xt.data=_t.data),q[dt]=Xt,G++}o.attributes=q,o.attributesNum=G,o.index=z}function C(){let Q=o.newAttributes;for(let nt=0,ct=Q.length;nt<ct;nt++)Q[nt]=0}function M(Q){x(Q,0)}function x(Q,nt){let ct=o.newAttributes,z=o.enabledAttributes,q=o.attributeDivisors;ct[Q]=1,z[Q]===0&&(n.enableVertexAttribArray(Q),z[Q]=1),q[Q]!==nt&&(n.vertexAttribDivisor(Q,nt),q[Q]=nt)}function B(){let Q=o.newAttributes,nt=o.enabledAttributes;for(let ct=0,z=nt.length;ct<z;ct++)nt[ct]!==Q[ct]&&(n.disableVertexAttribArray(ct),nt[ct]=0)}function W(Q,nt,ct,z,q,st,G){G===!0?n.vertexAttribIPointer(Q,nt,ct,q,st):n.vertexAttribPointer(Q,nt,ct,z,q,st)}function N(Q,nt,ct,z){C();let q=z.attributes,st=ct.getAttributes(),G=nt.defaultAttributeValues;for(let vt in st){let dt=st[vt];if(dt.location>=0){let St=q[vt];if(St===void 0&&(vt==="instanceMatrix"&&Q.instanceMatrix&&(St=Q.instanceMatrix),vt==="instanceColor"&&Q.instanceColor&&(St=Q.instanceColor)),St!==void 0){let _t=St.normalized,Xt=St.itemSize,$t=t.get(St);if($t===void 0)continue;let ue=$t.buffer,xe=$t.type,Ee=$t.bytesPerElement,yt=xe===n.INT||xe===n.UNSIGNED_INT||St.gpuType===al;if(St.isInterleavedBufferAttribute){let wt=St.data,Zt=wt.stride,ae=St.offset;if(wt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<dt.locationSize;Ot++)x(dt.location+Ot,wt.meshPerAttribute);Q.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Ot=0;Ot<dt.locationSize;Ot++)M(dt.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let Ot=0;Ot<dt.locationSize;Ot++)W(dt.location+Ot,Xt/dt.locationSize,xe,_t,Zt*Ee,(ae+Xt/dt.locationSize*Ot)*Ee,yt)}else{if(St.isInstancedBufferAttribute){for(let wt=0;wt<dt.locationSize;wt++)x(dt.location+wt,St.meshPerAttribute);Q.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let wt=0;wt<dt.locationSize;wt++)M(dt.location+wt);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let wt=0;wt<dt.locationSize;wt++)W(dt.location+wt,Xt/dt.locationSize,xe,_t,Xt*Ee,Xt/dt.locationSize*wt*Ee,yt)}}else if(G!==void 0){let _t=G[vt];if(_t!==void 0)switch(_t.length){case 2:n.vertexAttrib2fv(dt.location,_t);break;case 3:n.vertexAttrib3fv(dt.location,_t);break;case 4:n.vertexAttrib4fv(dt.location,_t);break;default:n.vertexAttrib1fv(dt.location,_t)}}}}B()}function F(){V();for(let Q in i){let nt=i[Q];for(let ct in nt){let z=nt[ct];for(let q in z){let st=z[q];for(let G in st)v(st[G].object),delete st[G];delete z[q]}}delete i[Q]}}function U(Q){if(i[Q.id]===void 0)return;let nt=i[Q.id];for(let ct in nt){let z=nt[ct];for(let q in z){let st=z[q];for(let G in st)v(st[G].object),delete st[G];delete z[q]}}delete i[Q.id]}function Y(Q){for(let nt in i){let ct=i[nt];for(let z in ct){let q=ct[z];if(q[Q.id]===void 0)continue;let st=q[Q.id];for(let G in st)v(st[G].object),delete st[G];delete q[Q.id]}}}function P(Q){for(let nt in i){let ct=i[nt],z=Q.isInstancedMesh===!0?Q.id:0,q=ct[z];if(q!==void 0){for(let st in q){let G=q[st];for(let vt in G)v(G[vt].object),delete G[vt];delete q[st]}delete ct[z],Object.keys(ct).length===0&&delete i[nt]}}}function V(){j(),c=!0,o!==s&&(o=s,d(o.object))}function j(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:V,resetDefaultState:j,dispose:F,releaseStatesOfGeometry:U,releaseStatesOfObject:P,releaseStatesOfProgram:Y,initAttributes:C,enableAttribute:M,disableUnusedAttributes:B}}function Ov(n,t,e){let i;function s(f){i=f}function o(f,d){n.drawArrays(i,f,d),e.update(d,i,1)}function c(f,d,v){v!==0&&(n.drawArraysInstanced(i,f,d,v),e.update(d,i,v))}function u(f,d,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,d,0,v);let g=0;for(let b=0;b<v;b++)g+=d[b];e.update(g,i,1)}this.setMode=s,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function Fv(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let Y=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(Y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(Y){return!(Y!==Yn&&i.convert(Y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(Y){let P=Y===li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(Y!==Ln&&Y!==ai&&!P&&i.convert(Y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(Y){if(Y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";Y="mediump"}return Y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp",v=f(d);v!==d&&(fe("WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);let S=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&g===!1&&fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let b=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),B=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),W=n.getParameter(n.MAX_VARYING_VECTORS),N=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=n.getParameter(n.MAX_SAMPLES),U=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:b,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:B,maxVaryings:W,maxFragmentUniforms:N,maxSamples:F,samples:U}}function Uv(n){let t=this,e=null,i=0,s=!1,o=!1,c=new Un,u=new Se,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){let b=S.length!==0||g||i!==0||s;return s=g,i=S.length,b},this.beginShadows=function(){o=!0,v(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(S,g){e=v(S,g,0)},this.setState=function(S,g,b){let E=S.clippingPlanes,C=S.clipIntersection,M=S.clipShadows,x=n.get(S);if(!s||E===null||E.length===0||o&&!M)o?v(null):d();else{let B=o?0:i,W=B*4,N=x.clippingState||null;f.value=N,N=v(E,g,W,b);for(let F=0;F!==W;++F)N[F]=e[F];x.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=B}};function d(){f.value!==e&&(f.value=e,f.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function v(S,g,b,E){let C=S!==null?S.length:0,M=null;if(C!==0){if(M=f.value,E!==!0||M===null){let x=b+C*4,B=g.matrixWorldInverse;u.getNormalMatrix(B),(M===null||M.length<x)&&(M=new Float32Array(x));for(let W=0,N=b;W!==C;++W,N+=4)c.copy(S[W]).applyMatrix4(B,u),c.normal.toArray(M,N),M[N+3]=c.constant}f.value=M,f.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,M}}function Hv(n){let t=[],e=[],i=n,s=n-As+1+Bv;for(let o=0;o<s;o++){let c=Math.pow(2,i);t.push(c);let u=1/(c-2),f=-u,d=1+u,v=[f,f,d,f,d,d,f,f,d,d,f,d],S=6,g=6,b=3,E=new Float32Array(b*g*S),C=new Float32Array(b*g*S);for(let x=0;x<S;x++){let B=x%3*2/3-1,W=x>2?0:-1,N=[B,W,0,B+2/3,W,0,B+2/3,W+1,0,B,W,0,B+2/3,W+1,0,B,W+1,0];E.set(N,b*g*x);for(let F=0;F<g;F++){let U=v[F*2]*2-1,Y=v[F*2+1]*2-1;x===0?wr.set(1,Y,U):x===1?wr.set(-U,1,-Y):x===2?wr.set(-U,Y,1):x===3?wr.set(-1,Y,-U):x===4?wr.set(-U,-1,Y):wr.set(U,Y,-1),wr.toArray(C,(x*g+F)*b)}}let M=new Ze;M.setAttribute("position",new $e(E,b)),M.setAttribute("outputDirection",new $e(C,b)),e.push(new ze(M,null)),i>As&&i--}return{lodMeshes:e,sizeLods:t}}function ld(n,t,e){let i=new In(n,t,e);return i.texture.mapping=Eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ts(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Gv(n,t,e){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Xv(n,t,e){return new kn({name:"SphericalGaussianBlur",defines:{SAMPLES:kv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:jl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function cd(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function hd(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function jl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wv(n){let t=new WeakMap,e=new WeakMap,i=null;function s(g,b=!1){return g==null?null:b?c(g):o(g)}function o(g){if(g&&g.isTexture){let b=g.mapping;if(b===rl||b===sl)if(t.has(g)){let E=t.get(g).texture;return u(E,g.mapping)}else{let E=g.image;if(E&&E.height>0){let C=new Zl(E.height);return C.fromEquirectangularTexture(n,g),t.set(g,C),g.addEventListener("dispose",d),u(C.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){let b=g.mapping,E=b===rl||b===sl,C=b===ir||b===Mr;if(E||C){let M=e.get(g),x=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return i===null&&(i=new $l(n)),M=E?i.fromEquirectangular(g,M):i.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,e.set(g,M),M.texture;if(M!==void 0)return M.texture;{let B=g.image;return E&&B&&B.height>0||C&&B&&f(B)?(i===null&&(i=new $l(n)),M=E?i.fromEquirectangular(g):i.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,e.set(g,M),g.addEventListener("dispose",v),M.texture):null}}}return g}function u(g,b){return b===rl?g.mapping=ir:b===sl&&(g.mapping=Mr),g}function f(g){let b=0,E=6;for(let C=0;C<E;C++)g[C]!==void 0&&b++;return b===E}function d(g){let b=g.target;b.removeEventListener("dispose",d);let E=t.get(b);E!==void 0&&(t.delete(b),E.dispose())}function v(g){let b=g.target;b.removeEventListener("dispose",v);let E=e.get(b);E!==void 0&&(e.delete(b),E.dispose())}function S(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:S}}function Yv(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&gr("WebGLRenderer: "+i+" extension not supported."),s}}}function qv(n,t,e,i){let s={},o=new WeakMap;function c(S){let g=S.target;g.index!==null&&t.remove(g.index);for(let E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",c),delete s[g.id];let b=o.get(g);b&&(t.remove(b),o.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function u(S,g){return s[g.id]===!0||(g.addEventListener("dispose",c),s[g.id]=!0,e.memory.geometries++),g}function f(S){let g=S.attributes;for(let b in g)t.update(g[b],n.ARRAY_BUFFER)}function d(S){let g=[],b=S.index,E=S.attributes.position,C=0;if(E===void 0)return;if(b!==null){let B=b.array;C=b.version;for(let W=0,N=B.length;W<N;W+=3){let F=B[W+0],U=B[W+1],Y=B[W+2];g.push(F,U,U,Y,Y,F)}}else{let B=E.array;C=E.version;for(let W=0,N=B.length/3-1;W<N;W+=3){let F=W+0,U=W+1,Y=W+2;g.push(F,U,U,Y,Y,F)}}let M=new(E.count>=65535?ao:oo)(g,1);M.version=C;let x=o.get(S);x&&t.remove(x),o.set(S,M)}function v(S){let g=o.get(S);if(g){let b=S.index;b!==null&&g.version<b.version&&d(S)}else d(S);return o.get(S)}return{get:u,update:f,getWireframeAttribute:v}}function $v(n,t,e){let i;function s(S){i=S}let o,c;function u(S){o=S.type,c=S.bytesPerElement}function f(S,g){n.drawElements(i,g,o,S*c),e.update(g,i,1)}function d(S,g,b){b!==0&&(n.drawElementsInstanced(i,g,o,S*c,b),e.update(g,i,b))}function v(S,g,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,o,S,0,b);let C=0;for(let M=0;M<b;M++)C+=g[M];e.update(C,i,1)}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=v}function Zv(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(e.calls++,c){case n.TRIANGLES:e.triangles+=u*(o/3);break;case n.LINES:e.lines+=u*(o/2);break;case n.LINE_STRIP:e.lines+=u*(o-1);break;case n.LINE_LOOP:e.lines+=u*o;break;case n.POINTS:e.points+=u*o;break;default:pe("WebGLInfo: Unknown draw mode:",c);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Jv(n,t,e){let i=new WeakMap,s=new je;function o(c,u,f){let d=c.morphTargetInfluences,v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,S=v!==void 0?v.length:0,g=i.get(u);if(g===void 0||g.count!==S){let V=function(){Y.dispose(),i.delete(u),u.removeEventListener("dispose",V)};g!==void 0&&g.texture.dispose();let b=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],B=u.morphAttributes.color||[],W=0;b===!0&&(W=1),E===!0&&(W=2),C===!0&&(W=3);let N=u.attributes.position.count*W,F=1;N>t.maxTextureSize&&(F=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);let U=new Float32Array(N*F*4*S),Y=new ro(U,N,F,S);Y.type=ai,Y.needsUpdate=!0;let P=W*4;for(let j=0;j<S;j++){let Q=M[j],nt=x[j],ct=B[j],z=N*F*4*j;for(let q=0;q<Q.count;q++){let st=q*P;b===!0&&(s.fromBufferAttribute(Q,q),U[z+st+0]=s.x,U[z+st+1]=s.y,U[z+st+2]=s.z,U[z+st+3]=0),E===!0&&(s.fromBufferAttribute(nt,q),U[z+st+4]=s.x,U[z+st+5]=s.y,U[z+st+6]=s.z,U[z+st+7]=0),C===!0&&(s.fromBufferAttribute(ct,q),U[z+st+8]=s.x,U[z+st+9]=s.y,U[z+st+10]=s.z,U[z+st+11]=ct.itemSize===4?s.w:1)}}g={count:S,texture:Y,size:new le(N,F)},i.set(u,g),u.addEventListener("dispose",V)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",c.morphTexture,e);else{let b=0;for(let C=0;C<d.length;C++)b+=d[C];let E=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",d)}f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:o}}function jv(n,t,e,i,s){let o=new WeakMap;function c(d){let v=s.render.frame,S=d.geometry,g=t.get(d,S);if(o.get(g)!==v&&(t.update(g),o.set(g,v)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),o.get(d)!==v&&(e.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,v))),d.isSkinnedMesh){let b=d.skeleton;o.get(b)!==v&&(b.update(),o.set(b,v))}return g}function u(){o=new WeakMap}function f(d){let v=d.target;v.removeEventListener("dispose",f),i.releaseStatesOfObject(v),e.remove(v.instanceMatrix),v.instanceColor!==null&&e.remove(v.instanceColor)}return{update:c,dispose:u}}function Qv(n,t,e,i,s,o){let c=new In(t,e,{type:n,depthBuffer:s,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),u=null,f=null,d=new Ze;d.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ge([0,2,0,0,2,0],2));let v=new Ha({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),S=new ze(d,v),g=new vs(-1,1,1,-1,0,1),b=null,E=null,C=!1,M,x=null,B=[],W=!1;this.setSize=function(N,F){c.setSize(N,F),u!==null&&u.setSize(N,F),f!==null&&f.setSize(N,F);for(let U=0;U<B.length;U++){let Y=B[U];Y.setSize&&Y.setSize(N,F)}},this.setEffects=function(N){B=N,W=B.length>0&&B[0].isRenderPass===!0;let F=c.width,U=c.height;B.length>0&&u===null&&(u=new In(F,U,{type:li,depthBuffer:!1,stencilBuffer:!1}),f=new In(F,U,{type:li,depthBuffer:!1,stencilBuffer:!1}));for(let Y=0;Y<B.length;Y++){let P=B[Y];P.setSize&&P.setSize(F,U)}},this.begin=function(N,F){if(C||N.toneMapping===si&&B.length===0)return!1;if(x=F,F!==null){let U=F.width,Y=F.height;(c.width!==U||c.height!==Y)&&this.setSize(U,Y)}return W===!1&&N.setRenderTarget(c),M=N.toneMapping,N.toneMapping=si,!0},this.hasRenderPass=function(){return W},this.end=function(N,F){N.toneMapping=M,C=!0;let U=c,Y=u;for(let P=0;P<B.length;P++){let V=B[P];V.enabled!==!1&&(V.render(N,Y,U,F),V.needsSwap!==!1&&(U=Y,Y=Y===u?f:u))}if(b!==N.outputColorSpace||E!==N.toneMapping){b=N.outputColorSpace,E=N.toneMapping,v.defines={},Ie.getTransfer(b)===Ue&&(v.defines.SRGB_TRANSFER="");let P=Kv[E];P&&(v.defines[P]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=U.texture,N.setRenderTarget(x),N.render(S,g),x=null,C=!1},this.isCompositing=function(){return C},this.dispose=function(){c.dispose(),u!==null&&u.dispose(),f!==null&&f.dispose(),d.dispose(),v.dispose()}}function Cs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,o=ud[s];if(o===void 0&&(o=new Float32Array(s),ud[s]=o),t!==0){i.toArray(o,0);for(let c=1,u=0;c!==t;++c)u+=e,n[c].toArray(o,u)}return o}function nn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function rn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Kl(n,t){let e=fd[t];e===void 0&&(e=new Int32Array(t),fd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ty(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function ey(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2fv(this.addr,t),rn(e,t)}}function ny(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;n.uniform3fv(this.addr,t),rn(e,t)}}function iy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4fv(this.addr,t),rn(e,t)}}function ry(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,i))return;md.set(i),n.uniformMatrix2fv(this.addr,!1,md),rn(e,i)}}function sy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,i))return;pd.set(i),n.uniformMatrix3fv(this.addr,!1,pd),rn(e,i)}}function oy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,i))return;dd.set(i),n.uniformMatrix4fv(this.addr,!1,dd),rn(e,i)}}function ay(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ly(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2iv(this.addr,t),rn(e,t)}}function cy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;n.uniform3iv(this.addr,t),rn(e,t)}}function hy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4iv(this.addr,t),rn(e,t)}}function uy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function fy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2uiv(this.addr,t),rn(e,t)}}function dy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;n.uniform3uiv(this.addr,t),rn(e,t)}}function py(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4uiv(this.addr,t),rn(e,t)}}function my(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(Hh.compareFunction=e.isReversedDepthBuffer()?Wl:Xl,o=Hh):o=Id,e.setTexture2D(t||o,s)}function gy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ld,s)}function _y(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Nd,s)}function vy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Rd,s)}function yy(n){switch(n){case 5126:return ty;case 35664:return ey;case 35665:return ny;case 35666:return iy;case 35674:return ry;case 35675:return sy;case 35676:return oy;case 5124:case 35670:return ay;case 35667:case 35671:return ly;case 35668:case 35672:return cy;case 35669:case 35673:return hy;case 5125:return uy;case 36294:return fy;case 36295:return dy;case 36296:return py;case 35678:case 36198:case 36298:case 36306:case 35682:return my;case 35679:case 36299:case 36307:return gy;case 35680:case 36300:case 36308:case 36293:return _y;case 36289:case 36303:case 36311:case 36292:return vy}}function xy(n,t){n.uniform1fv(this.addr,t)}function Sy(n,t){let e=Cs(t,this.size,2);n.uniform2fv(this.addr,e)}function My(n,t){let e=Cs(t,this.size,3);n.uniform3fv(this.addr,e)}function by(n,t){let e=Cs(t,this.size,4);n.uniform4fv(this.addr,e)}function wy(n,t){let e=Cs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Ey(n,t){let e=Cs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Ty(n,t){let e=Cs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ay(n,t){n.uniform1iv(this.addr,t)}function Py(n,t){n.uniform2iv(this.addr,t)}function Cy(n,t){n.uniform3iv(this.addr,t)}function Iy(n,t){n.uniform4iv(this.addr,t)}function Ry(n,t){n.uniform1uiv(this.addr,t)}function Ly(n,t){n.uniform2uiv(this.addr,t)}function Ny(n,t){n.uniform3uiv(this.addr,t)}function Dy(n,t){n.uniform4uiv(this.addr,t)}function Oy(n,t,e){let i=this.cache,s=t.length,o=Kl(e,s);nn(i,o)||(n.uniform1iv(this.addr,o),rn(i,o));let c;this.type===n.SAMPLER_2D_SHADOW?c=Hh:c=Id;for(let u=0;u!==s;++u)e.setTexture2D(t[u]||c,o[u])}function Fy(n,t,e){let i=this.cache,s=t.length,o=Kl(e,s);nn(i,o)||(n.uniform1iv(this.addr,o),rn(i,o));for(let c=0;c!==s;++c)e.setTexture3D(t[c]||Ld,o[c])}function Uy(n,t,e){let i=this.cache,s=t.length,o=Kl(e,s);nn(i,o)||(n.uniform1iv(this.addr,o),rn(i,o));for(let c=0;c!==s;++c)e.setTextureCube(t[c]||Nd,o[c])}function By(n,t,e){let i=this.cache,s=t.length,o=Kl(e,s);nn(i,o)||(n.uniform1iv(this.addr,o),rn(i,o));for(let c=0;c!==s;++c)e.setTexture2DArray(t[c]||Rd,o[c])}function ky(n){switch(n){case 5126:return xy;case 35664:return Sy;case 35665:return My;case 35666:return by;case 35674:return wy;case 35675:return Ey;case 35676:return Ty;case 5124:case 35670:return Ay;case 35667:case 35671:return Py;case 35668:case 35672:return Cy;case 35669:case 35673:return Iy;case 5125:return Ry;case 36294:return Ly;case 36295:return Ny;case 36296:return Dy;case 35678:case 36198:case 36298:case 36306:case 35682:return Oy;case 35679:case 36299:case 36307:return Fy;case 35680:case 36300:case 36308:case 36293:return Uy;case 36289:case 36303:case 36311:case 36292:return By}}function gd(n,t){n.seq.push(t),n.map[t.id]=t}function zy(n,t,e){let i=n.name,s=i.length;for(zh.lastIndex=0;;){let o=zh.exec(i),c=zh.lastIndex,u=o[1],f=o[2]==="]",d=o[3];if(f&&(u=u|0),d===void 0||d==="["&&c+2===s){gd(e,d===void 0?new Gh(u,n,t):new Xh(u,n,t));break}else{let S=e.map[u];S===void 0&&(S=new Wh(u),gd(e,S)),e=S}}}function _d(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}function Gy(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let c=s;c<o;c++){let u=c+1;i.push(`${u===t?">":" "} ${u}: ${e[c]}`)}return i.join(`
`)}function Xy(n){Ie._getMatrix(vd,Ie.workingColorSpace,n);let t=`mat3( ${vd.elements.map(e=>e.toFixed(4))} )`;switch(Ie.getTransfer(n)){case eo:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return fe("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function yd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),o=(n.getShaderInfoLog(t)||"").trim();if(i&&o==="")return"";let c=/ERROR: 0:(\d+)/.exec(o);if(c){let u=parseInt(c[1]);return e.toUpperCase()+`

`+o+`

`+Gy(n.getShaderSource(t),u)}else return o}function Wy(n,t){let e=Xy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function qy(n,t){let e=Yy[t];return e===void 0?(fe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $y(){Ie.getLuminanceCoefficients(ql);let n=ql.x.toFixed(4),t=ql.y.toFixed(4),e=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function Jy(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function jy(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let o=n.getActiveAttrib(t,s),c=o.name,u=1;o.type===n.FLOAT_MAT2&&(u=2),o.type===n.FLOAT_MAT3&&(u=3),o.type===n.FLOAT_MAT4&&(u=4),e[c]={type:o.type,location:n.getAttribLocation(t,c),locationSize:u}}return e}function Oo(n){return n!==""}function xd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Yh(n){return n.replace(Ky,tx)}function tx(n,t){let e=Te[t];if(e===void 0){let i=Qy.get(t);if(i!==void 0)e=Te[i],fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Yh(e)}function Md(n){return n.replace(ex,nx)}function nx(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function bd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function rx(n){return ix[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function ox(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":sx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}function lx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ax[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function hx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":cx[n.combine]||"ENVMAP_BLENDING_NONE"}function ux(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function fx(n,t,e,i){let s=n.getContext(),o=e.defines,c=e.vertexShader,u=e.fragmentShader,f=rx(e),d=ox(e),v=lx(e),S=hx(e),g=ux(e),b=Zy(e),E=Jy(o),C=s.createProgram(),M,x,B=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Oo).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Oo).join(`
`),x.length>0&&(x+=`
`)):(M=[bd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+v:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),x=[bd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+v:"",e.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?Te.tonemapping_pars_fragment:"",e.toneMapping!==si?qy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,Wy("linearToOutputTexel",e.outputColorSpace),$y(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Oo).join(`
`)),c=Yh(c),c=xd(c,e),c=Sd(c,e),u=Yh(u),u=xd(u,e),u=Sd(u,e),c=Md(c),u=Md(u),e.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",e.glslVersion===Ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let W=B+M+c,N=B+x+u,F=_d(s,s.VERTEX_SHADER,W),U=_d(s,s.FRAGMENT_SHADER,N);s.attachShader(C,F),s.attachShader(C,U),e.index0AttributeName!==void 0?s.bindAttribLocation(C,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(C,0,"position"),s.linkProgram(C);function Y(Q){if(n.debug.checkShaderErrors){let nt=s.getProgramInfoLog(C)||"",ct=s.getShaderInfoLog(F)||"",z=s.getShaderInfoLog(U)||"",q=nt.trim(),st=ct.trim(),G=z.trim(),vt=!0,dt=!0;if(s.getProgramParameter(C,s.LINK_STATUS)===!1)if(vt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,C,F,U);else{let St=yd(s,F,"vertex"),_t=yd(s,U,"fragment");pe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(C,s.VALIDATE_STATUS)+`

Material Name: `+Q.name+`
Material Type: `+Q.type+`

Program Info Log: `+q+`
`+St+`
`+_t)}else q!==""?fe("WebGLProgram: Program Info Log:",q):(st===""||G==="")&&(dt=!1);dt&&(Q.diagnostics={runnable:vt,programLog:q,vertexShader:{log:st,prefix:M},fragmentShader:{log:G,prefix:x}})}s.deleteShader(F),s.deleteShader(U),P=new Ps(s,C),V=jy(s,C)}let P;this.getUniforms=function(){return P===void 0&&Y(this),P};let V;this.getAttributes=function(){return V===void 0&&Y(this),V};let j=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=s.getProgramParameter(C,Vy)),j},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(C),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hy++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=U,this}function px(n){return n===or||n===Ro||n===Lo}function mx(n,t,e,i,s,o){let c=new fs,u=new qh,f=new Set,d=[],v=new Map,S=i.logarithmicDepthBuffer,g=i.precision,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(P){return f.add(P),P===0?"uv":`uv${P}`}function C(P,V,j,Q,nt,ct){let z=Q.fog,q=nt.geometry,st=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?Q.environment:null,G=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap,vt=t.get(P.envMap||st,G),dt=vt&&vt.mapping===Eo?vt.image.height:null,St=b[P.type];P.precision!==null&&(g=i.getMaxPrecision(P.precision),g!==P.precision&&fe("WebGLProgram.getParameters:",P.precision,"not supported, using",g,"instead."));let _t=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Xt=_t!==void 0?_t.length:0,$t=0;q.morphAttributes.position!==void 0&&($t=1),q.morphAttributes.normal!==void 0&&($t=2),q.morphAttributes.color!==void 0&&($t=3);let ue,xe,Ee,yt;if(St){let Fe=Si[St];ue=Fe.vertexShader,xe=Fe.fragmentShader}else{ue=P.vertexShader,xe=P.fragmentShader;let Fe=u.getVertexShaderStage(P),Le=u.getFragmentShaderStage(P);u.update(P,Fe,Le),Ee=Fe.id,yt=Le.id}let wt=n.getRenderTarget(),Zt=n.state.buffers.depth.getReversed(),ae=nt.isInstancedMesh===!0,Ot=nt.isBatchedMesh===!0,me=!!P.map,Je=!!P.matcap,he=!!vt,Me=!!P.aoMap,Ce=!!P.lightMap,be=!!P.bumpMap&&P.wireframe===!1,De=!!P.normalMap,He=!!P.displacementMap,K=!!P.emissiveMap,ht=!!P.metalnessMap,at=!!P.roughnessMap,k=P.anisotropy>0,It=P.clearcoat>0,Kt=P.dispersion>0,O=P.retroreflectivity>0,T=P.iridescence>0,H=P.sheen>0,it=P.transmission>0,pt=k&&!!P.anisotropyMap,Ct=It&&!!P.clearcoatMap,Ft=It&&!!P.clearcoatNormalMap,mt=It&&!!P.clearcoatRoughnessMap,Tt=T&&!!P.iridescenceMap,Ut=T&&!!P.iridescenceThicknessMap,jt=H&&!!P.sheenColorMap,Vt=H&&!!P.sheenRoughnessMap,Dt=!!P.specularMap,ne=!!P.specularColorMap,oe=!!P.specularIntensityMap,ge=it&&!!P.transmissionMap,rt=it&&!!P.thicknessMap,Bt=!!P.gradientMap,Mt=!!P.alphaMap,kt=P.alphaTest>0,Wt=!!P.alphaHash,At=!!P.extensions,Rt=si;P.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(Rt=n.toneMapping);let ee={shaderID:St,shaderType:P.type,shaderName:P.name,vertexShader:ue,fragmentShader:xe,defines:P.defines,customVertexShaderID:Ee,customFragmentShaderID:yt,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:g,batching:Ot,batchingColor:Ot&&nt._colorsTexture!==null,instancing:ae,instancingColor:ae&&nt.instanceColor!==null,instancingMorph:ae&&nt.morphTexture!==null,outputColorSpace:wt===null?n.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:Ie.workingColorSpace,alphaToCoverage:!!P.alphaToCoverage,map:me,matcap:Je,envMap:he,envMapMode:he&&vt.mapping,envMapCubeUVHeight:dt,aoMap:Me,lightMap:Ce,bumpMap:be,normalMap:De,displacementMap:He,emissiveMap:K,normalMapObjectSpace:De&&P.normalMapType===Xf,normalMapTangentSpace:De&&P.normalMapType===Gl,packedNormalMap:De&&P.normalMapType===Gl&&px(P.normalMap.format),metalnessMap:ht,roughnessMap:at,anisotropy:k,anisotropyMap:pt,clearcoat:It,clearcoatMap:Ct,clearcoatNormalMap:Ft,clearcoatRoughnessMap:mt,dispersion:Kt,retroreflection:O,iridescence:T,iridescenceMap:Tt,iridescenceThicknessMap:Ut,sheen:H,sheenColorMap:jt,sheenRoughnessMap:Vt,specularMap:Dt,specularColorMap:ne,specularIntensityMap:oe,transmission:it,transmissionMap:ge,thicknessMap:rt,gradientMap:Bt,opaque:P.transparent===!1&&P.blending===Ms&&P.alphaToCoverage===!1,alphaMap:Mt,alphaTest:kt,alphaHash:Wt,combine:P.combine,mapUv:me&&E(P.map.channel),aoMapUv:Me&&E(P.aoMap.channel),lightMapUv:Ce&&E(P.lightMap.channel),bumpMapUv:be&&E(P.bumpMap.channel),normalMapUv:De&&E(P.normalMap.channel),displacementMapUv:He&&E(P.displacementMap.channel),emissiveMapUv:K&&E(P.emissiveMap.channel),metalnessMapUv:ht&&E(P.metalnessMap.channel),roughnessMapUv:at&&E(P.roughnessMap.channel),anisotropyMapUv:pt&&E(P.anisotropyMap.channel),clearcoatMapUv:Ct&&E(P.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&E(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&E(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&E(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&E(P.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&E(P.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&E(P.sheenRoughnessMap.channel),specularMapUv:Dt&&E(P.specularMap.channel),specularColorMapUv:ne&&E(P.specularColorMap.channel),specularIntensityMapUv:oe&&E(P.specularIntensityMap.channel),transmissionMapUv:ge&&E(P.transmissionMap.channel),thicknessMapUv:rt&&E(P.thicknessMap.channel),alphaMapUv:Mt&&E(P.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(De||k),vertexNormals:!!q.attributes.normal,vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!q.attributes.uv&&(me||Mt),fog:!!z,useFog:P.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:P.wireframe===!1&&(P.flatShading===!0||q.attributes.normal===void 0&&De===!1&&(P.isMeshLambertMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isMeshPhysicalMaterial)),sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Zt,skinning:nt.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Xt,morphTextureStride:$t,numSunLights:V.sun.length,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numSpotLightMaps:V.spotLightMap.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numSunLightShadows:V.sunShadowMap.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numSpotLightShadowsWithMaps:V.numSpotLightShadowsWithMaps,numLightProbes:V.numLightProbes,numLightProbeGrids:ct.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:P.dithering,shadowMapEnabled:n.shadowMap.enabled&&j.length>0,shadowMapType:n.shadowMap.type,toneMapping:Rt,decodeVideoTexture:me&&P.map.isVideoTexture===!0&&Ie.getTransfer(P.map.colorSpace)===Ue,decodeVideoTextureEmissive:K&&P.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(P.emissiveMap.colorSpace)===Ue,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===vn,flipSided:P.side===En,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:At&&P.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&P.extensions.multiDraw===!0||Ot)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return ee.vertexUv1s=f.has(1),ee.vertexUv2s=f.has(2),ee.vertexUv3s=f.has(3),f.clear(),ee}function M(P){let V=[];if(P.shaderID?V.push(P.shaderID):(V.push(P.customVertexShaderID),V.push(P.customFragmentShaderID)),P.defines!==void 0)for(let j in P.defines)V.push(j),V.push(P.defines[j]);return P.isRawShaderMaterial===!1&&(x(V,P),B(V,P),V.push(n.outputColorSpace)),V.push(P.customProgramCacheKey),V.join()}function x(P,V){P.push(V.precision),P.push(V.outputColorSpace),P.push(V.envMapMode),P.push(V.envMapCubeUVHeight),P.push(V.mapUv),P.push(V.alphaMapUv),P.push(V.lightMapUv),P.push(V.aoMapUv),P.push(V.bumpMapUv),P.push(V.normalMapUv),P.push(V.displacementMapUv),P.push(V.emissiveMapUv),P.push(V.metalnessMapUv),P.push(V.roughnessMapUv),P.push(V.anisotropyMapUv),P.push(V.clearcoatMapUv),P.push(V.clearcoatNormalMapUv),P.push(V.clearcoatRoughnessMapUv),P.push(V.iridescenceMapUv),P.push(V.iridescenceThicknessMapUv),P.push(V.sheenColorMapUv),P.push(V.sheenRoughnessMapUv),P.push(V.specularMapUv),P.push(V.specularColorMapUv),P.push(V.specularIntensityMapUv),P.push(V.transmissionMapUv),P.push(V.thicknessMapUv),P.push(V.combine),P.push(V.fogExp2),P.push(V.sizeAttenuation),P.push(V.morphTargetsCount),P.push(V.morphAttributeCount),P.push(V.numSunLights),P.push(V.numDirLights),P.push(V.numPointLights),P.push(V.numSpotLights),P.push(V.numSpotLightMaps),P.push(V.numHemiLights),P.push(V.numRectAreaLights),P.push(V.numSunLightShadows),P.push(V.numDirLightShadows),P.push(V.numPointLightShadows),P.push(V.numSpotLightShadows),P.push(V.numSpotLightShadowsWithMaps),P.push(V.numLightProbes),P.push(V.shadowMapType),P.push(V.toneMapping),P.push(V.numClippingPlanes),P.push(V.numClipIntersection),P.push(V.depthPacking)}function B(P,V){c.disableAll(),V.instancing&&c.enable(0),V.instancingColor&&c.enable(1),V.instancingMorph&&c.enable(2),V.matcap&&c.enable(3),V.envMap&&c.enable(4),V.normalMapObjectSpace&&c.enable(5),V.normalMapTangentSpace&&c.enable(6),V.clearcoat&&c.enable(7),V.iridescence&&c.enable(8),V.alphaTest&&c.enable(9),V.vertexColors&&c.enable(10),V.vertexAlphas&&c.enable(11),V.vertexUv1s&&c.enable(12),V.vertexUv2s&&c.enable(13),V.vertexUv3s&&c.enable(14),V.vertexTangents&&c.enable(15),V.anisotropy&&c.enable(16),V.alphaHash&&c.enable(17),V.batching&&c.enable(18),V.dispersion&&c.enable(19),V.retroreflection&&c.enable(24),V.batchingColor&&c.enable(20),V.gradientMap&&c.enable(21),V.packedNormalMap&&c.enable(22),V.vertexNormals&&c.enable(23),P.push(c.mask),c.disableAll(),V.fog&&c.enable(0),V.useFog&&c.enable(1),V.flatShading&&c.enable(2),V.logarithmicDepthBuffer&&c.enable(3),V.reversedDepthBuffer&&c.enable(4),V.skinning&&c.enable(5),V.morphTargets&&c.enable(6),V.morphNormals&&c.enable(7),V.morphColors&&c.enable(8),V.premultipliedAlpha&&c.enable(9),V.shadowMapEnabled&&c.enable(10),V.doubleSided&&c.enable(11),V.flipSided&&c.enable(12),V.useDepthPacking&&c.enable(13),V.dithering&&c.enable(14),V.transmission&&c.enable(15),V.sheen&&c.enable(16),V.opaque&&c.enable(17),V.pointsUvs&&c.enable(18),V.decodeVideoTexture&&c.enable(19),V.decodeVideoTextureEmissive&&c.enable(20),V.alphaToCoverage&&c.enable(21),V.numLightProbeGrids>0&&c.enable(22),V.hasPositionAttribute&&c.enable(23),P.push(c.mask)}function W(P){let V=b[P.type],j;if(V){let Q=Si[V];j=rd.clone(Q.uniforms)}else j=P.uniforms;return j}function N(P,V){let j=v.get(V);return j!==void 0?++j.usedTimes:(j=new fx(n,V,P,s),d.push(j),v.set(V,j)),j}function F(P){if(--P.usedTimes===0){let V=d.indexOf(P);d[V]=d[d.length-1],d.pop(),v.delete(P.cacheKey),P.destroy()}}function U(P){u.remove(P)}function Y(){u.dispose()}return{getParameters:C,getProgramCacheKey:M,getUniforms:W,acquireProgram:N,releaseProgram:F,releaseShaderCache:U,programs:d,dispose:Y}}function gx(){let n=new WeakMap;function t(c){return n.has(c)}function e(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function i(c){n.delete(c)}function s(c,u,f){n.get(c)[u]=f}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function _x(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function wd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ed(){let n=[],t=0,e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function c(g){let b=0;return g.isInstancedMesh&&(b+=2),g.isSkinnedMesh&&(b+=1),b}function u(g,b,E,C,M,x){let B=n[t];return B===void 0?(B={id:g.id,object:g,geometry:b,material:E,materialVariant:c(g),groupOrder:C,renderOrder:g.renderOrder,z:M,group:x},n[t]=B):(B.id=g.id,B.object=g,B.geometry=b,B.material=E,B.materialVariant=c(g),B.groupOrder=C,B.renderOrder=g.renderOrder,B.z=M,B.group=x),t++,B}function f(g,b,E,C,M,x,B){B.reversedDepth===!0&&(M=-M);let W=u(g,b,E,C,M,x);E.transmission>0?i.push(W):E.transparent===!0?s.push(W):e.push(W)}function d(g,b,E,C,M,x){let B=u(g,b,E,C,M,x);E.transmission>0?i.unshift(B):E.transparent===!0?s.unshift(B):e.unshift(B)}function v(g,b){e.length>1&&e.sort(g||_x),i.length>1&&i.sort(b||wd),s.length>1&&s.sort(b||wd)}function S(){for(let g=t,b=n.length;g<b;g++){let E=n[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:f,unshift:d,finish:S,sort:v}}function vx(){let n=new WeakMap;function t(i,s){let o=n.get(i),c;return o===void 0?(c=new Ed,n.set(i,[c])):s>=o.length?(c=new Ed,o.push(c)):c=o[s],c}function e(){n=new WeakMap}return{get:t,dispose:e}}function yx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new ot,color:new ye};break;case"SpotLight":e={position:new ot,direction:new ot,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new ot,color:new ye,distance:0,decay:0};break;case"HemisphereLight":e={direction:new ot,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":e={color:new ye,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return n[t.id]=e,e}}}function xx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}function Mx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function bx(n){let t=new yx,e=xx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new ot);let s=new ot,o=new We,c=new We;function u(d){let v=0,S=0,g=0;for(let nt=0;nt<9;nt++)i.probe[nt].set(0,0,0);let b=0,E=0,C=0,M=0,x=0,B=0,W=0,N=0,F=0,U=0,Y=0,P=0,V=0,j=0;d.sort(Mx);for(let nt=0,ct=d.length;nt<ct;nt++){let z=d[nt],q=z.color,st=z.intensity,G=z.distance,vt=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===or?vt=z.shadow.map.texture:vt=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)v+=q.r*st,S+=q.g*st,g+=q.b*st;else if(z.isLightProbe){for(let dt=0;dt<9;dt++)i.probe[dt].addScaledVector(z.sh.coefficients[dt],st);j++}else if(z.isSunLight){let dt=t.get(z);if(dt.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let St=z.shadow,_t=e.get(z);_t.shadowIntensity=St.intensity,_t.shadowBias=St.bias,_t.shadowNormalBias=St.normalBias,_t.shadowRadius=St.radius,_t.shadowMapSize.copy(St.mapSize).multiply(St.getFrameExtents()),i.sunShadow[E]=_t,i.sunShadowMap[E]=vt;let Xt=St.getViewportCount();for(let $t=0;$t<Xt;$t++)i.sunShadowMatrix[C+$t]=St.getMatrix($t),i.sunShadowCascade[C+$t]=St._cascadeData[$t];C+=Xt,E++}i.sun[b]=dt,b++}else if(z.isDirectionalLight){let dt=t.get(z);if(dt.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let St=z.shadow,_t=e.get(z);_t.shadowIntensity=St.intensity,_t.shadowBias=St.bias,_t.shadowNormalBias=St.normalBias,_t.shadowRadius=St.radius,_t.shadowMapSize=St.mapSize,i.directionalShadow[M]=_t,i.directionalShadowMap[M]=vt,i.directionalShadowMatrix[M]=z.shadow.matrix,F++}i.directional[M]=dt,M++}else if(z.isSpotLight){let dt=t.get(z);dt.position.setFromMatrixPosition(z.matrixWorld),dt.color.copy(q).multiplyScalar(st),dt.distance=G,dt.coneCos=Math.cos(z.angle),dt.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),dt.decay=z.decay,i.spot[B]=dt;let St=z.shadow;if(z.map&&(i.spotLightMap[P]=z.map,P++,St.updateMatrices(z),z.castShadow&&V++),i.spotLightMatrix[B]=St.matrix,z.castShadow){let _t=e.get(z);_t.shadowIntensity=St.intensity,_t.shadowBias=St.bias,_t.shadowNormalBias=St.normalBias,_t.shadowRadius=St.radius,_t.shadowMapSize=St.mapSize,i.spotShadow[B]=_t,i.spotShadowMap[B]=vt,Y++}B++}else if(z.isRectAreaLight){let dt=t.get(z);dt.color.copy(q).multiplyScalar(st),dt.halfWidth.set(z.width*.5,0,0),dt.halfHeight.set(0,z.height*.5,0),i.rectArea[W]=dt,W++}else if(z.isPointLight){let dt=t.get(z);if(dt.color.copy(z.color).multiplyScalar(z.intensity),dt.distance=z.distance,dt.decay=z.decay,z.castShadow){let St=z.shadow,_t=e.get(z);_t.shadowIntensity=St.intensity,_t.shadowBias=St.bias,_t.shadowNormalBias=St.normalBias,_t.shadowRadius=St.radius,_t.shadowMapSize=St.mapSize,_t.shadowCameraNear=St.camera.near,_t.shadowCameraFar=St.camera.far,i.pointShadow[x]=_t,i.pointShadowMap[x]=vt,i.pointShadowMatrix[x]=z.shadow.matrix,U++}i.point[x]=dt,x++}else if(z.isHemisphereLight){let dt=t.get(z);dt.skyColor.copy(z.color).multiplyScalar(st),dt.groundColor.copy(z.groundColor).multiplyScalar(st),i.hemi[N]=dt,N++}}W>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=qt.LTC_FLOAT_1,i.rectAreaLTC2=qt.LTC_FLOAT_2):(i.rectAreaLTC1=qt.LTC_HALF_1,i.rectAreaLTC2=qt.LTC_HALF_2)),i.ambient[0]=v,i.ambient[1]=S,i.ambient[2]=g;let Q=i.hash;(Q.sunLength!==b||Q.directionalLength!==M||Q.pointLength!==x||Q.spotLength!==B||Q.rectAreaLength!==W||Q.hemiLength!==N||Q.numSunShadows!==E||Q.numDirectionalShadows!==F||Q.numPointShadows!==U||Q.numSpotShadows!==Y||Q.numSpotMaps!==P||Q.numLightProbes!==j)&&(i.sun.length=b,i.directional.length=M,i.spot.length=B,i.rectArea.length=W,i.point.length=x,i.hemi.length=N,i.sunShadow.length=E,i.sunShadowMap.length=E,i.sunShadowMatrix.length=C,i.sunShadowCascade.length=C,i.directionalShadow.length=F,i.directionalShadowMap.length=F,i.directionalShadowMatrix.length=F,i.pointShadow.length=U,i.pointShadowMap.length=U,i.pointShadowMatrix.length=U,i.spotShadow.length=Y,i.spotShadowMap.length=Y,i.spotLightMatrix.length=Y+P-V,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=V,i.numLightProbes=j,Q.sunLength=b,Q.directionalLength=M,Q.pointLength=x,Q.spotLength=B,Q.rectAreaLength=W,Q.hemiLength=N,Q.numSunShadows=E,Q.numDirectionalShadows=F,Q.numPointShadows=U,Q.numSpotShadows=Y,Q.numSpotMaps=P,Q.numLightProbes=j,i.version=Sx++)}function f(d,v){let S=0,g=0,b=0,E=0,C=0,M=0,x=v.matrixWorldInverse;for(let B=0,W=d.length;B<W;B++){let N=d[B];if(N.isSunLight){let F=i.sun[S];F.direction.setFromMatrixPosition(N.matrixWorld),F.direction.transformDirection(x),S++}else if(N.isDirectionalLight){let F=i.directional[g];F.direction.setFromMatrixPosition(N.matrixWorld),s.setFromMatrixPosition(N.target.matrixWorld),F.direction.sub(s),F.direction.transformDirection(x),g++}else if(N.isSpotLight){let F=i.spot[E];F.position.setFromMatrixPosition(N.matrixWorld),F.position.applyMatrix4(x),F.direction.setFromMatrixPosition(N.matrixWorld),s.setFromMatrixPosition(N.target.matrixWorld),F.direction.sub(s),F.direction.transformDirection(x),E++}else if(N.isRectAreaLight){let F=i.rectArea[C];F.position.setFromMatrixPosition(N.matrixWorld),F.position.applyMatrix4(x),c.identity(),o.copy(N.matrixWorld),o.premultiply(x),c.extractRotation(o),F.halfWidth.set(N.width*.5,0,0),F.halfHeight.set(0,N.height*.5,0),F.halfWidth.applyMatrix4(c),F.halfHeight.applyMatrix4(c),C++}else if(N.isPointLight){let F=i.point[b];F.position.setFromMatrixPosition(N.matrixWorld),F.position.applyMatrix4(x),b++}else if(N.isHemisphereLight){let F=i.hemi[M];F.direction.setFromMatrixPosition(N.matrixWorld),F.direction.transformDirection(x),M++}}}return{setup:u,setupView:f,state:i}}function Td(n){let t=new bx(n),e=[],i=[],s=[];function o(g){S.camera=g,e.length=0,i.length=0,s.length=0}function c(g){e.push(g)}function u(g){i.push(g)}function f(g){s.push(g)}function d(){t.setup(e)}function v(g){t.setupView(e,g)}let S={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:S,setupLights:d,setupLightsView:v,pushLight:c,pushShadow:u,pushLightProbeGrid:f}}function wx(n){let t=new WeakMap;function e(s,o=0){let c=t.get(s),u;return c===void 0?(u=new Td(n),t.set(s,[u])):o>=c.length?(u=new Td(n),c.push(u)):u=c[o],u}function i(){t=new WeakMap}return{get:e,dispose:i}}function Cx(n,t,e){let i=new ms,s=new le,o=new le,c=new je,u=new Ga,f=new Xa,d={},v=e.maxTextureSize,S={[nr]:En,[En]:nr,[vn]:vn},g=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Ex,fragmentShader:Tx}),b=g.clone();b.defines.HORIZONTAL_PASS=1;let E=new Ze;E.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let C=new ze(E,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wo;let x=this.type;this.render=function(U,Y,P){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===Sf&&(fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wo);let V=n.getRenderTarget(),j=n.getActiveCubeFace(),Q=n.getActiveMipmapLevel(),nt=n.state;nt.setBlending(yi),nt.buffers.depth.getReversed()===!0?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);let ct=x!==this.type;ct&&Y.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(q=>q.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,q=U.length;z<q;z++){let st=U[z],G=st.shadow;if(G===void 0){fe("WebGLShadowMap:",st,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let vt=G.getFrameExtents();s.multiply(vt),o.copy(G.mapSize),(s.x>v||s.y>v)&&(s.x>v&&(o.x=Math.floor(v/vt.x),s.x=o.x*vt.x,G.mapSize.x=o.x),s.y>v&&(o.y=Math.floor(v/vt.y),s.y=o.y*vt.y,G.mapSize.y=o.y));let dt=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=dt,G.map===null||ct===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ss){if(st.isPointLight){fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new In(s.x,s.y,{format:or,type:li,minFilter:un,magFilter:un,generateMipmaps:!1}),G.map.texture.name=st.name+".shadowMap",G.map.depthTexture=new $i(s.x,s.y,ai),G.map.depthTexture.name=st.name+".shadowMapDepth",G.map.depthTexture.format=_i,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=ln,G.map.depthTexture.magFilter=ln}else st.isPointLight?(G.map=new Zl(s.x),G.map.depthTexture=new Va(s.x,oi)):(G.map=new In(s.x,s.y),G.map.depthTexture=new $i(s.x,s.y,oi)),G.map.depthTexture.name=st.name+".shadowMap",G.map.depthTexture.format=_i,this.type===wo?(G.map.depthTexture.compareFunction=dt?Wl:Xl,G.map.depthTexture.minFilter=un,G.map.depthTexture.magFilter=un):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=ln,G.map.depthTexture.magFilter=ln);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let St=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();st.isPointLight!==!0&&G.updateMatrices(st,P);for(let _t=0;_t<St;_t++){let Xt=G.getCamera(_t);if(st.isPointLight){let $t=G.camera,ue=G.matrix,xe=st.distance||$t.far;xe!==$t.far&&($t.far=xe,$t.updateProjectionMatrix()),Do.setFromMatrixPosition(st.matrixWorld),$t.position.copy(Do),Vh.copy($t.position),Vh.add(Ax[_t]),$t.up.copy(Px[_t]),$t.lookAt(Vh),$t.updateMatrixWorld(),ue.makeTranslation(-Do.x,-Do.y,-Do.z),Ad.multiplyMatrices($t.projectionMatrix,$t.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Ad,$t.coordinateSystem,$t.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,_t),n.clear();else{_t===0&&(n.setRenderTarget(G.map),n.clear());let $t=G.getViewport(_t);c.set(o.x*$t.x,o.y*$t.y,o.x*$t.z,o.y*$t.w),nt.viewport(c)}i=G.getFrustum(_t),N(Y,P,Xt,st,this.type)}G.isPointLightShadow!==!0&&this.type===Ss&&B(G,P),G.needsUpdate=!1}x=this.type,M.needsUpdate=!1,n.setRenderTarget(V,j,Q)};function B(U,Y){let P=t.update(C);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,b.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,b.needsUpdate=!0),U.mapPass===null?U.mapPass=new In(s.x,s.y,{format:or,type:li}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value.set(U.map.width,U.map.height),g.uniforms.radius.value=U.radius,n.setRenderTarget(U.mapPass),n.clear(),n.renderBufferDirect(Y,null,P,g,C,null),b.uniforms.shadow_pass.value=U.mapPass.texture,b.uniforms.resolution.value.set(U.map.width,U.map.height),b.uniforms.radius.value=U.radius,n.setRenderTarget(U.map),n.clear(),n.renderBufferDirect(Y,null,P,b,C,null)}function W(U,Y,P,V){let j=null,Q=P.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(Q!==void 0)j=Q;else if(j=P.isPointLight===!0?f:u,n.localClippingEnabled&&Y.clipShadows===!0&&Array.isArray(Y.clippingPlanes)&&Y.clippingPlanes.length!==0||Y.displacementMap&&Y.displacementScale!==0||Y.alphaMap&&Y.alphaTest>0||Y.map&&Y.alphaTest>0||Y.alphaToCoverage===!0){let nt=j.uuid,ct=Y.uuid,z=d[nt];z===void 0&&(z={},d[nt]=z);let q=z[ct];q===void 0&&(q=j.clone(),z[ct]=q,Y.addEventListener("dispose",F)),j=q}if(j.visible=Y.visible,j.wireframe=Y.wireframe,V===Ss?j.side=Y.shadowSide!==null?Y.shadowSide:Y.side:j.side=Y.shadowSide!==null?Y.shadowSide:S[Y.side],j.alphaMap=Y.alphaMap,j.alphaTest=Y.alphaToCoverage===!0?.5:Y.alphaTest,j.map=Y.map,j.clipShadows=Y.clipShadows,j.clippingPlanes=Y.clippingPlanes,j.clipIntersection=Y.clipIntersection,j.displacementMap=Y.displacementMap,j.displacementScale=Y.displacementScale,j.displacementBias=Y.displacementBias,j.wireframeLinewidth=Y.wireframeLinewidth,j.linewidth=Y.linewidth,P.isPointLight===!0&&j.isMeshDistanceMaterial===!0){let nt=n.properties.get(j);nt.light=P}return j}function N(U,Y,P,V,j){if(U.visible===!1)return;if(U.layers.test(Y.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&j===Ss)&&(!U.frustumCulled||U.intersectsFrustum(i))){U.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,U.matrixWorld);let ct=t.update(U),z=U.material;if(Array.isArray(z)){let q=ct.groups;for(let st=0,G=q.length;st<G;st++){let vt=q[st],dt=z[vt.materialIndex];if(dt&&dt.visible){let St=W(U,dt,V,j);U.onBeforeShadow(n,U,Y,P,ct,St,vt),n.renderBufferDirect(P,null,ct,St,U,vt),U.onAfterShadow(n,U,Y,P,ct,St,vt)}}}else if(z.visible){let q=W(U,z,V,j);U.onBeforeShadow(n,U,Y,P,ct,q,null),n.renderBufferDirect(P,null,ct,q,U,null),U.onAfterShadow(n,U,Y,P,ct,q,null)}}let nt=U.children;for(let ct=0,z=nt.length;ct<z;ct++)N(nt[ct],Y,P,V,j)}function F(U){U.target.removeEventListener("dispose",F);for(let P in d){let V=d[P],j=U.target.uuid;j in V&&(V[j].dispose(),delete V[j])}}}function Ix(n,t){function e(){let rt=!1,Bt=new je,Mt=null,kt=new je(0,0,0,0);return{setMask:function(Wt){Mt!==Wt&&!rt&&(n.colorMask(Wt,Wt,Wt,Wt),Mt=Wt)},setLocked:function(Wt){rt=Wt},setClear:function(Wt,At,Rt,ee,Fe){Fe===!0&&(Wt*=ee,At*=ee,Rt*=ee),Bt.set(Wt,At,Rt,ee),kt.equals(Bt)===!1&&(n.clearColor(Wt,At,Rt,ee),kt.copy(Bt))},reset:function(){rt=!1,Mt=null,kt.set(-1,0,0,0)}}}function i(){let rt=!1,Bt=!1,Mt=null,kt=null,Wt=null;return{setReversed:function(At){if(Bt!==At){let Rt=t.get("EXT_clip_control");At?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),Bt=At;let ee=Wt;Wt=null,this.setClear(ee)}},getReversed:function(){return Bt},setTest:function(At){At?wt(n.DEPTH_TEST):Zt(n.DEPTH_TEST)},setMask:function(At){Mt!==At&&!rt&&(n.depthMask(At),Mt=At)},setFunc:function(At){if(Bt&&(At=ed[At]),kt!==At){switch(At){case wa:n.depthFunc(n.NEVER);break;case Ea:n.depthFunc(n.ALWAYS);break;case Ta:n.depthFunc(n.LESS);break;case as:n.depthFunc(n.LEQUAL);break;case Aa:n.depthFunc(n.EQUAL);break;case Pa:n.depthFunc(n.GEQUAL);break;case Ca:n.depthFunc(n.GREATER);break;case Ia:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}kt=At}},setLocked:function(At){rt=At},setClear:function(At){Wt!==At&&(Wt=At,Bt&&(At=1-At),n.clearDepth(At))},reset:function(){rt=!1,Mt=null,kt=null,Wt=null,Bt=!1}}}function s(){let rt=!1,Bt=null,Mt=null,kt=null,Wt=null,At=null,Rt=null,ee=null,Fe=null;return{setTest:function(Le){rt||(Le?wt(n.STENCIL_TEST):Zt(n.STENCIL_TEST))},setMask:function(Le){Bt!==Le&&!rt&&(n.stencilMask(Le),Bt=Le)},setFunc:function(Le,xn,Tn){(Mt!==Le||kt!==xn||Wt!==Tn)&&(n.stencilFunc(Le,xn,Tn),Mt=Le,kt=xn,Wt=Tn)},setOp:function(Le,xn,Tn){(At!==Le||Rt!==xn||ee!==Tn)&&(n.stencilOp(Le,xn,Tn),At=Le,Rt=xn,ee=Tn)},setLocked:function(Le){rt=Le},setClear:function(Le){Fe!==Le&&(n.clearStencil(Le),Fe=Le)},reset:function(){rt=!1,Bt=null,Mt=null,kt=null,Wt=null,At=null,Rt=null,ee=null,Fe=null}}}let o=new e,c=new i,u=new s,f=new WeakMap,d=new WeakMap,v={},S={},g={},b=new WeakMap,E=[],C=null,M=!1,x=null,B=null,W=null,N=null,F=null,U=null,Y=null,P=new ye(0,0,0),V=0,j=!1,Q=null,nt=null,ct=null,z=null,q=null,st=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,vt=0,dt=n.getParameter(n.VERSION);dt.indexOf("WebGL")!==-1?(vt=parseFloat(/^WebGL (\d)/.exec(dt)[1]),G=vt>=1):dt.indexOf("OpenGL ES")!==-1&&(vt=parseFloat(/^OpenGL ES (\d)/.exec(dt)[1]),G=vt>=2);let St=null,_t={},Xt=n.getParameter(n.SCISSOR_BOX),$t=n.getParameter(n.VIEWPORT),ue=new je().fromArray(Xt),xe=new je().fromArray($t);function Ee(rt,Bt,Mt,kt){let Wt=new Uint8Array(4),At=n.createTexture();n.bindTexture(rt,At),n.texParameteri(rt,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(rt,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Rt=0;Rt<Mt;Rt++)rt===n.TEXTURE_3D||rt===n.TEXTURE_2D_ARRAY?n.texImage3D(Bt,0,n.RGBA,1,1,kt,0,n.RGBA,n.UNSIGNED_BYTE,Wt):n.texImage2D(Bt+Rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Wt);return At}let yt={};yt[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),yt[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),yt[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),wt(n.DEPTH_TEST),c.setFunc(as),be(!1),De(sh),wt(n.CULL_FACE),Me(yi);function wt(rt){v[rt]!==!0&&(n.enable(rt),v[rt]=!0)}function Zt(rt){v[rt]!==!1&&(n.disable(rt),v[rt]=!1)}function ae(rt,Bt){return g[rt]!==Bt?(n.bindFramebuffer(rt,Bt),g[rt]=Bt,rt===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Bt),rt===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Bt),!0):!1}function Ot(rt,Bt){let Mt=E,kt=!1;if(rt){Mt=b.get(Bt),Mt===void 0&&(Mt=[],b.set(Bt,Mt));let Wt=rt.textures;if(Mt.length!==Wt.length||Mt[0]!==n.COLOR_ATTACHMENT0){for(let At=0,Rt=Wt.length;At<Rt;At++)Mt[At]=n.COLOR_ATTACHMENT0+At;Mt.length=Wt.length,kt=!0}}else Mt[0]!==n.BACK&&(Mt[0]=n.BACK,kt=!0);kt&&n.drawBuffers(Mt)}function me(rt){return C!==rt?(n.useProgram(rt),C=rt,!0):!1}let Je={[Sr]:n.FUNC_ADD,[bf]:n.FUNC_SUBTRACT,[wf]:n.FUNC_REVERSE_SUBTRACT};Je[Ef]=n.MIN,Je[Tf]=n.MAX;let he={[Af]:n.ZERO,[Pf]:n.ONE,[Cf]:n.SRC_COLOR,[ch]:n.SRC_ALPHA,[Of]:n.SRC_ALPHA_SATURATE,[Nf]:n.DST_COLOR,[Rf]:n.DST_ALPHA,[If]:n.ONE_MINUS_SRC_COLOR,[hh]:n.ONE_MINUS_SRC_ALPHA,[Df]:n.ONE_MINUS_DST_COLOR,[Lf]:n.ONE_MINUS_DST_ALPHA,[Ff]:n.CONSTANT_COLOR,[Uf]:n.ONE_MINUS_CONSTANT_COLOR,[Bf]:n.CONSTANT_ALPHA,[kf]:n.ONE_MINUS_CONSTANT_ALPHA};function Me(rt,Bt,Mt,kt,Wt,At,Rt,ee,Fe,Le){if(rt===yi){M===!0&&(Zt(n.BLEND),M=!1);return}if(M===!1&&(wt(n.BLEND),M=!0),rt!==Mf){if(rt!==x||Le!==j){if((B!==Sr||F!==Sr)&&(n.blendEquation(n.FUNC_ADD),B=Sr,F=Sr),Le)switch(rt){case Ms:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oh:n.blendFunc(n.ONE,n.ONE);break;case ah:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:pe("WebGLState: Invalid blending: ",rt);break}else switch(rt){case Ms:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ah:pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lh:pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pe("WebGLState: Invalid blending: ",rt);break}W=null,N=null,U=null,Y=null,P.set(0,0,0),V=0,x=rt,j=Le}return}Wt=Wt||Bt,At=At||Mt,Rt=Rt||kt,(Bt!==B||Wt!==F)&&(n.blendEquationSeparate(Je[Bt],Je[Wt]),B=Bt,F=Wt),(Mt!==W||kt!==N||At!==U||Rt!==Y)&&(n.blendFuncSeparate(he[Mt],he[kt],he[At],he[Rt]),W=Mt,N=kt,U=At,Y=Rt),(ee.equals(P)===!1||Fe!==V)&&(n.blendColor(ee.r,ee.g,ee.b,Fe),P.copy(ee),V=Fe),x=rt,j=!1}function Ce(rt,Bt){rt.side===vn?Zt(n.CULL_FACE):wt(n.CULL_FACE);let Mt=rt.side===En;Bt&&(Mt=!Mt),be(Mt),rt.blending===Ms&&rt.transparent===!1?Me(yi):Me(rt.blending,rt.blendEquation,rt.blendSrc,rt.blendDst,rt.blendEquationAlpha,rt.blendSrcAlpha,rt.blendDstAlpha,rt.blendColor,rt.blendAlpha,rt.premultipliedAlpha),c.setFunc(rt.depthFunc),c.setTest(rt.depthTest),c.setMask(rt.depthWrite),o.setMask(rt.colorWrite);let kt=rt.stencilWrite;u.setTest(kt),kt&&(u.setMask(rt.stencilWriteMask),u.setFunc(rt.stencilFunc,rt.stencilRef,rt.stencilFuncMask),u.setOp(rt.stencilFail,rt.stencilZFail,rt.stencilZPass)),K(rt.polygonOffset,rt.polygonOffsetFactor,rt.polygonOffsetUnits),rt.alphaToCoverage===!0?wt(n.SAMPLE_ALPHA_TO_COVERAGE):Zt(n.SAMPLE_ALPHA_TO_COVERAGE)}function be(rt){Q!==rt&&(rt?n.frontFace(n.CW):n.frontFace(n.CCW),Q=rt)}function De(rt){rt!==yf?(wt(n.CULL_FACE),rt!==nt&&(rt===sh?n.cullFace(n.BACK):rt===xf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Zt(n.CULL_FACE),nt=rt}function He(rt){rt!==ct&&(G&&n.lineWidth(rt),ct=rt)}function K(rt,Bt,Mt){rt?(wt(n.POLYGON_OFFSET_FILL),(z!==Bt||q!==Mt)&&(z=Bt,q=Mt,c.getReversed()&&(Bt=-Bt),n.polygonOffset(Bt,Mt))):Zt(n.POLYGON_OFFSET_FILL)}function ht(rt){rt?wt(n.SCISSOR_TEST):Zt(n.SCISSOR_TEST)}function at(rt){rt===void 0&&(rt=n.TEXTURE0+st-1),St!==rt&&(n.activeTexture(rt),St=rt)}function k(rt,Bt,Mt){Mt===void 0&&(St===null?Mt=n.TEXTURE0+st-1:Mt=St);let kt=_t[Mt];kt===void 0&&(kt={type:void 0,texture:void 0},_t[Mt]=kt),(kt.type!==rt||kt.texture!==Bt)&&(St!==Mt&&(n.activeTexture(Mt),St=Mt),n.bindTexture(rt,Bt||yt[rt]),kt.type=rt,kt.texture=Bt)}function It(){let rt=_t[St];rt!==void 0&&rt.type!==void 0&&(n.bindTexture(rt.type,null),rt.type=void 0,rt.texture=void 0)}function Kt(){try{n.compressedTexImage2D(...arguments)}catch(rt){pe("WebGLState:",rt)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(rt){pe("WebGLState:",rt)}}function T(){try{n.texSubImage2D(...arguments)}catch(rt){pe("WebGLState:",rt)}}function H(){try{n.texSubImage3D(...arguments)}catch(rt){pe("WebGLState:",rt)}}function it(){try{n.compressedTexSubImage2D(...arguments)}catch(rt){pe("WebGLState:",rt)}}function pt(){try{n.compressedTexSubImage3D(...arguments)}catch(rt){pe("WebGLState:",rt)}}function Ct(){try{n.texStorage2D(...arguments)}catch(rt){pe("WebGLState:",rt)}}function Ft(){try{n.texStorage3D(...arguments)}catch(rt){pe("WebGLState:",rt)}}function mt(){try{n.texImage2D(...arguments)}catch(rt){pe("WebGLState:",rt)}}function Tt(){try{n.texImage3D(...arguments)}catch(rt){pe("WebGLState:",rt)}}function Ut(rt){return S[rt]!==void 0?S[rt]:n.getParameter(rt)}function jt(rt,Bt){S[rt]!==Bt&&(n.pixelStorei(rt,Bt),S[rt]=Bt)}function Vt(rt){ue.equals(rt)===!1&&(n.scissor(rt.x,rt.y,rt.z,rt.w),ue.copy(rt))}function Dt(rt){xe.equals(rt)===!1&&(n.viewport(rt.x,rt.y,rt.z,rt.w),xe.copy(rt))}function ne(rt,Bt){let Mt=d.get(Bt);Mt===void 0&&(Mt=new WeakMap,d.set(Bt,Mt));let kt=Mt.get(rt);kt===void 0&&(kt=n.getUniformBlockIndex(Bt,rt.name),Mt.set(rt,kt))}function oe(rt,Bt){let kt=d.get(Bt).get(rt);f.get(Bt)!==kt&&(n.uniformBlockBinding(Bt,kt,rt.__bindingPointIndex),f.set(Bt,kt))}function ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),v={},S={},St=null,_t={},g={},b=new WeakMap,E=[],C=null,M=!1,x=null,B=null,W=null,N=null,F=null,U=null,Y=null,P=new ye(0,0,0),V=0,j=!1,Q=null,nt=null,ct=null,z=null,q=null,ue.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:wt,disable:Zt,bindFramebuffer:ae,drawBuffers:Ot,useProgram:me,setBlending:Me,setMaterial:Ce,setFlipSided:be,setCullFace:De,setLineWidth:He,setPolygonOffset:K,setScissorTest:ht,activeTexture:at,bindTexture:k,unbindTexture:It,compressedTexImage2D:Kt,compressedTexImage3D:O,texImage2D:mt,texImage3D:Tt,pixelStorei:jt,getParameter:Ut,updateUBOMapping:ne,uniformBlockBinding:oe,texStorage2D:Ct,texStorage3D:Ft,texSubImage2D:T,texSubImage3D:H,compressedTexSubImage2D:it,compressedTexSubImage3D:pt,scissor:Vt,viewport:Dt,reset:ge}}function Rx(n,t,e,i,s,o,c){let u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new le,v=new WeakMap,S=new Set,g,b=new WeakMap,E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(O,T){return E?new OffscreenCanvas(O,T):no("canvas")}function M(O,T,H){let it=1,pt=Kt(O);if((pt.width>H||pt.height>H)&&(it=H/Math.max(pt.width,pt.height)),it<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let Ct=Math.floor(it*pt.width),Ft=Math.floor(it*pt.height);g===void 0&&(g=C(Ct,Ft));let mt=T?C(Ct,Ft):g;return mt.width=Ct,mt.height=Ft,mt.getContext("2d").drawImage(O,0,0,Ct,Ft),fe("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+Ct+"x"+Ft+")."),mt}else return"data"in O&&fe("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),O;return O}function x(O){return O.generateMipmaps}function B(O){n.generateMipmap(O)}function W(O){return O.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?n.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function N(O,T,H,it,pt,Ct=!1){if(O!==null){if(n[O]!==void 0)return n[O];fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Ft;it&&(Ft=t.get("EXT_texture_norm16"),Ft||fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let mt=T;if(T===n.RED&&(H===n.FLOAT&&(mt=n.R32F),H===n.HALF_FLOAT&&(mt=n.R16F),H===n.UNSIGNED_BYTE&&(mt=n.R8),H===n.UNSIGNED_SHORT&&Ft&&(mt=Ft.R16_EXT),H===n.SHORT&&Ft&&(mt=Ft.R16_SNORM_EXT)),T===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(mt=n.R8UI),H===n.UNSIGNED_SHORT&&(mt=n.R16UI),H===n.UNSIGNED_INT&&(mt=n.R32UI),H===n.BYTE&&(mt=n.R8I),H===n.SHORT&&(mt=n.R16I),H===n.INT&&(mt=n.R32I)),T===n.RG&&(H===n.FLOAT&&(mt=n.RG32F),H===n.HALF_FLOAT&&(mt=n.RG16F),H===n.UNSIGNED_BYTE&&(mt=n.RG8),H===n.UNSIGNED_SHORT&&Ft&&(mt=Ft.RG16_EXT),H===n.SHORT&&Ft&&(mt=Ft.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(mt=n.RG8UI),H===n.UNSIGNED_SHORT&&(mt=n.RG16UI),H===n.UNSIGNED_INT&&(mt=n.RG32UI),H===n.BYTE&&(mt=n.RG8I),H===n.SHORT&&(mt=n.RG16I),H===n.INT&&(mt=n.RG32I)),T===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(mt=n.RGB8UI),H===n.UNSIGNED_SHORT&&(mt=n.RGB16UI),H===n.UNSIGNED_INT&&(mt=n.RGB32UI),H===n.BYTE&&(mt=n.RGB8I),H===n.SHORT&&(mt=n.RGB16I),H===n.INT&&(mt=n.RGB32I)),T===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(mt=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(mt=n.RGBA16UI),H===n.UNSIGNED_INT&&(mt=n.RGBA32UI),H===n.BYTE&&(mt=n.RGBA8I),H===n.SHORT&&(mt=n.RGBA16I),H===n.INT&&(mt=n.RGBA32I)),T===n.RGB&&(H===n.UNSIGNED_SHORT&&Ft&&(mt=Ft.RGB16_EXT),H===n.SHORT&&Ft&&(mt=Ft.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(mt=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(mt=n.R11F_G11F_B10F)),T===n.RGBA){let Tt=Ct?eo:Ie.getTransfer(pt);H===n.FLOAT&&(mt=n.RGBA32F),H===n.HALF_FLOAT&&(mt=n.RGBA16F),H===n.UNSIGNED_BYTE&&(mt=Tt===Ue?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&Ft&&(mt=Ft.RGBA16_EXT),H===n.SHORT&&Ft&&(mt=Ft.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(mt=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(mt=n.RGB5_A1)}return(mt===n.R16F||mt===n.R32F||mt===n.RG16F||mt===n.RG32F||mt===n.RGBA16F||mt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function F(O,T){let H;return O?T===null||T===oi||T===ws?H=n.DEPTH24_STENCIL8:T===ai?H=n.DEPTH32F_STENCIL8:T===bs&&(H=n.DEPTH24_STENCIL8,fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===oi||T===ws?H=n.DEPTH_COMPONENT24:T===ai?H=n.DEPTH_COMPONENT32F:T===bs&&(H=n.DEPTH_COMPONENT16),H}function U(O,T){return x(O)===!0||O.isFramebufferTexture&&O.minFilter!==ln&&O.minFilter!==un?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function Y(O){let T=O.target;T.removeEventListener("dispose",Y),V(T),T.isVideoTexture&&v.delete(T),T.isHTMLTexture&&S.delete(T)}function P(O){let T=O.target;T.removeEventListener("dispose",P),Q(T)}function V(O){let T=i.get(O);if(T.__webglInit===void 0)return;let H=O.source,it=b.get(H);if(it){let pt=it[T.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&j(O),Object.keys(it).length===0&&b.delete(H)}i.remove(O)}function j(O){let T=i.get(O);n.deleteTexture(T.__webglTexture);let H=O.source,it=b.get(H);delete it[T.__cacheKey],c.memory.textures--}function Q(O){let T=i.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),i.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(T.__webglFramebuffer[it]))for(let pt=0;pt<T.__webglFramebuffer[it].length;pt++)n.deleteFramebuffer(T.__webglFramebuffer[it][pt]);else n.deleteFramebuffer(T.__webglFramebuffer[it]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[it])}else{if(Array.isArray(T.__webglFramebuffer))for(let it=0;it<T.__webglFramebuffer.length;it++)n.deleteFramebuffer(T.__webglFramebuffer[it]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let it=0;it<T.__webglColorRenderbuffer.length;it++)T.__webglColorRenderbuffer[it]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[it]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let H=O.textures;for(let it=0,pt=H.length;it<pt;it++){let Ct=i.get(H[it]);Ct.__webglTexture&&(n.deleteTexture(Ct.__webglTexture),c.memory.textures--),i.remove(H[it])}i.remove(O)}let nt=0;function ct(){nt=0}function z(){return nt}function q(O){nt=O}function st(){let O=nt;return O>=s.maxTextures&&fe("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),nt+=1,O}function G(O){let T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function vt(O,T){let H=i.get(O);if(O.isVideoTexture&&k(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&H.__version!==O.version){let it=O.image;if(it===null)fe("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Zt(H,O,T);return}}else O.isExternalTexture&&(H.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+T)}function dt(O,T){let H=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&H.__version!==O.version){Zt(H,O,T);return}else O.isExternalTexture&&(H.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+T)}function St(O,T){let H=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&H.__version!==O.version){Zt(H,O,T);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+T)}function _t(O,T){let H=i.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&H.__version!==O.version){ae(H,O,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+T)}let Xt={[Ra]:n.REPEAT,[gi]:n.CLAMP_TO_EDGE,[La]:n.MIRRORED_REPEAT},$t={[ln]:n.NEAREST,[Hf]:n.NEAREST_MIPMAP_NEAREST,[To]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[ol]:n.LINEAR_MIPMAP_NEAREST,[rr]:n.LINEAR_MIPMAP_LINEAR},ue={[Yf]:n.NEVER,[jf]:n.ALWAYS,[qf]:n.LESS,[Xl]:n.LEQUAL,[$f]:n.EQUAL,[Wl]:n.GEQUAL,[Zf]:n.GREATER,[Jf]:n.NOTEQUAL};function xe(O,T){if(T.type===ai&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===un||T.magFilter===ol||T.magFilter===To||T.magFilter===rr||T.minFilter===un||T.minFilter===ol||T.minFilter===To||T.minFilter===rr)&&fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(O,n.TEXTURE_WRAP_S,Xt[T.wrapS]),n.texParameteri(O,n.TEXTURE_WRAP_T,Xt[T.wrapT]),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,Xt[T.wrapR]),n.texParameteri(O,n.TEXTURE_MAG_FILTER,$t[T.magFilter]),n.texParameteri(O,n.TEXTURE_MIN_FILTER,$t[T.minFilter]),T.compareFunction&&(n.texParameteri(O,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(O,n.TEXTURE_COMPARE_FUNC,ue[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ln||T.minFilter!==To&&T.minFilter!==rr||T.type===ai&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(O,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Ee(O,T){let H=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",Y));let it=T.source,pt=b.get(it);pt===void 0&&(pt={},b.set(it,pt));let Ct=G(T);if(Ct!==O.__cacheKey){pt[Ct]===void 0&&(pt[Ct]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,H=!0),pt[Ct].usedTimes++;let Ft=pt[O.__cacheKey];Ft!==void 0&&(pt[O.__cacheKey].usedTimes--,Ft.usedTimes===0&&j(T)),O.__cacheKey=Ct,O.__webglTexture=pt[Ct].texture}return H}function yt(O,T,H){return Math.floor(Math.floor(O/H)/T)}function wt(O,T,H,it){let Ct=O.updateRanges;if(Ct.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,H,it,T.data);else{Ct.sort((jt,Vt)=>jt.start-Vt.start);let Ft=0;for(let jt=1;jt<Ct.length;jt++){let Vt=Ct[Ft],Dt=Ct[jt],ne=Vt.start+Vt.count,oe=yt(Dt.start,T.width,4),ge=yt(Vt.start,T.width,4);Dt.start<=ne+1&&oe===ge&&yt(Dt.start+Dt.count-1,T.width,4)===oe?Vt.count=Math.max(Vt.count,Dt.start+Dt.count-Vt.start):(++Ft,Ct[Ft]=Dt)}Ct.length=Ft+1;let mt=e.getParameter(n.UNPACK_ROW_LENGTH),Tt=e.getParameter(n.UNPACK_SKIP_PIXELS),Ut=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let jt=0,Vt=Ct.length;jt<Vt;jt++){let Dt=Ct[jt],ne=Math.floor(Dt.start/4),oe=Math.ceil(Dt.count/4),ge=ne%T.width,rt=Math.floor(ne/T.width),Bt=oe,Mt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),e.pixelStorei(n.UNPACK_SKIP_ROWS,rt),e.texSubImage2D(n.TEXTURE_2D,0,ge,rt,Bt,Mt,H,it,T.data)}O.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,mt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Tt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Ut)}}function Zt(O,T,H){let it=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(it=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(it=n.TEXTURE_3D);let pt=Ee(O,T),Ct=T.source;e.bindTexture(it,O.__webglTexture,n.TEXTURE0+H);let Ft=i.get(Ct);if(Ct.version!==Ft.__version||pt===!0){if(e.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let Mt=Ie.getPrimaries(Ie.workingColorSpace),kt=T.colorSpace===Di?null:Ie.getPrimaries(T.colorSpace),Wt=T.colorSpace===Di||Mt===kt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt)}e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let Tt=M(T.image,!1,s.maxTextureSize);Tt=It(T,Tt);let Ut=o.convert(T.format,T.colorSpace),jt=o.convert(T.type),Vt=N(T.internalFormat,Ut,jt,T.normalized,T.colorSpace,T.isVideoTexture);xe(it,T);let Dt,ne=T.mipmaps,oe=T.isVideoTexture!==!0,ge=Ft.__version===void 0||pt===!0,rt=Ct.dataReady,Bt=U(T,Tt);if(T.isDepthTexture)Vt=F(T.format===sr,T.type),ge&&(oe?e.texStorage2D(n.TEXTURE_2D,1,Vt,Tt.width,Tt.height):e.texImage2D(n.TEXTURE_2D,0,Vt,Tt.width,Tt.height,0,Ut,jt,null));else if(T.isDataTexture)if(ne.length>0){oe&&ge&&e.texStorage2D(n.TEXTURE_2D,Bt,Vt,ne[0].width,ne[0].height);for(let Mt=0,kt=ne.length;Mt<kt;Mt++)Dt=ne[Mt],oe?rt&&e.texSubImage2D(n.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Ut,jt,Dt.data):e.texImage2D(n.TEXTURE_2D,Mt,Vt,Dt.width,Dt.height,0,Ut,jt,Dt.data);T.generateMipmaps=!1}else oe?(ge&&e.texStorage2D(n.TEXTURE_2D,Bt,Vt,Tt.width,Tt.height),rt&&wt(T,Tt,Ut,jt)):e.texImage2D(n.TEXTURE_2D,0,Vt,Tt.width,Tt.height,0,Ut,jt,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){oe&&ge&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Bt,Vt,ne[0].width,ne[0].height,Tt.depth);for(let Mt=0,kt=ne.length;Mt<kt;Mt++)if(Dt=ne[Mt],T.format!==Yn)if(Ut!==null)if(oe){if(rt)if(T.layerUpdates.size>0){let Wt=Dh(Dt.width,Dt.height,T.format,T.type);for(let At of T.layerUpdates){let Rt=Dt.data.subarray(At*Wt/Dt.data.BYTES_PER_ELEMENT,(At+1)*Wt/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Mt,0,0,At,Dt.width,Dt.height,1,Ut,Rt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,Tt.depth,Ut,Dt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Mt,Vt,Dt.width,Dt.height,Tt.depth,0,Dt.data,0,0);else fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?rt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,Tt.depth,Ut,jt,Dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Mt,Vt,Dt.width,Dt.height,Tt.depth,0,Ut,jt,Dt.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{oe&&ge&&e.texStorage2D(n.TEXTURE_2D,Bt,Vt,ne[0].width,ne[0].height);for(let Mt=0,kt=ne.length;Mt<kt;Mt++)Dt=ne[Mt],T.format!==Yn?Ut!==null?oe?rt&&e.compressedTexSubImage2D(n.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Ut,Dt.data):e.compressedTexImage2D(n.TEXTURE_2D,Mt,Vt,Dt.width,Dt.height,0,Dt.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?rt&&e.texSubImage2D(n.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Ut,jt,Dt.data):e.texImage2D(n.TEXTURE_2D,Mt,Vt,Dt.width,Dt.height,0,Ut,jt,Dt.data)}else if(T.isDataArrayTexture)if(oe){if(ge&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Bt,Vt,Tt.width,Tt.height,Tt.depth),rt)if(T.layerUpdates.size>0){let Mt=Dh(Tt.width,Tt.height,T.format,T.type);for(let kt of T.layerUpdates){let Wt=Tt.data.subarray(kt*Mt/Tt.data.BYTES_PER_ELEMENT,(kt+1)*Mt/Tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,kt,Tt.width,Tt.height,1,Ut,jt,Wt)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ut,jt,Tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Vt,Tt.width,Tt.height,Tt.depth,0,Ut,jt,Tt.data);else if(T.isData3DTexture)oe?(ge&&e.texStorage3D(n.TEXTURE_3D,Bt,Vt,Tt.width,Tt.height,Tt.depth),rt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ut,jt,Tt.data)):e.texImage3D(n.TEXTURE_3D,0,Vt,Tt.width,Tt.height,Tt.depth,0,Ut,jt,Tt.data);else if(T.isFramebufferTexture){if(ge)if(oe)e.texStorage2D(n.TEXTURE_2D,Bt,Vt,Tt.width,Tt.height);else{let Mt=Tt.width,kt=Tt.height;for(let Wt=0;Wt<Bt;Wt++)e.texImage2D(n.TEXTURE_2D,Wt,Vt,Mt,kt,0,Ut,jt,null),Mt>>=1,kt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let Mt=n.canvas;if(Mt.hasAttribute("layoutsubtree")||Mt.setAttribute("layoutsubtree","true"),Tt.parentNode!==Mt){Mt.appendChild(Tt),S.add(T),Mt.onpaint=kt=>{let Wt=kt.changedElements;for(let At of S)Wt.includes(At.image)&&(At.needsUpdate=!0)},Mt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Tt);else{let Wt=n.RGBA,At=n.RGBA,Rt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Wt,At,Rt,Tt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ne.length>0){if(oe&&ge){let Mt=Kt(ne[0]);e.texStorage2D(n.TEXTURE_2D,Bt,Vt,Mt.width,Mt.height)}for(let Mt=0,kt=ne.length;Mt<kt;Mt++)Dt=ne[Mt],oe?rt&&e.texSubImage2D(n.TEXTURE_2D,Mt,0,0,Ut,jt,Dt):e.texImage2D(n.TEXTURE_2D,Mt,Vt,Ut,jt,Dt);T.generateMipmaps=!1}else if(oe){if(ge){let Mt=Kt(Tt);e.texStorage2D(n.TEXTURE_2D,Bt,Vt,Mt.width,Mt.height)}rt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ut,jt,Tt)}else e.texImage2D(n.TEXTURE_2D,0,Vt,Ut,jt,Tt);x(T)&&B(it),Ft.__version=Ct.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function ae(O,T,H){if(T.image.length!==6)return;let it=Ee(O,T),pt=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+H);let Ct=i.get(pt);if(pt.version!==Ct.__version||it===!0){e.activeTexture(n.TEXTURE0+H);let Ft=Ie.getPrimaries(Ie.workingColorSpace),mt=T.colorSpace===Di?null:Ie.getPrimaries(T.colorSpace),Tt=T.colorSpace===Di||Ft===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let Ut=T.isCompressedTexture||T.image[0].isCompressedTexture,jt=T.image[0]&&T.image[0].isDataTexture,Vt=[];for(let At=0;At<6;At++)!Ut&&!jt?Vt[At]=M(T.image[At],!0,s.maxCubemapSize):Vt[At]=jt?T.image[At].image:T.image[At],Vt[At]=It(T,Vt[At]);let Dt=Vt[0],ne=o.convert(T.format,T.colorSpace),oe=o.convert(T.type),ge=N(T.internalFormat,ne,oe,T.normalized,T.colorSpace),rt=T.isVideoTexture!==!0,Bt=Ct.__version===void 0||it===!0,Mt=pt.dataReady,kt=U(T,Dt);xe(n.TEXTURE_CUBE_MAP,T);let Wt;if(Ut){rt&&Bt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,kt,ge,Dt.width,Dt.height);for(let At=0;At<6;At++){Wt=Vt[At].mipmaps;for(let Rt=0;Rt<Wt.length;Rt++){let ee=Wt[Rt];T.format!==Yn?ne!==null?rt?Mt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Rt,0,0,ee.width,ee.height,ne,ee.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Rt,ge,ee.width,ee.height,0,ee.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?Mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Rt,0,0,ee.width,ee.height,ne,oe,ee.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Rt,ge,ee.width,ee.height,0,ne,oe,ee.data)}}}else{if(Wt=T.mipmaps,rt&&Bt){Wt.length>0&&kt++;let At=Kt(Vt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,kt,ge,At.width,At.height)}for(let At=0;At<6;At++)if(jt){rt?Mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,Vt[At].width,Vt[At].height,ne,oe,Vt[At].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,ge,Vt[At].width,Vt[At].height,0,ne,oe,Vt[At].data);for(let Rt=0;Rt<Wt.length;Rt++){let Fe=Wt[Rt].image[At].image;rt?Mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Rt+1,0,0,Fe.width,Fe.height,ne,oe,Fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Rt+1,ge,Fe.width,Fe.height,0,ne,oe,Fe.data)}}else{rt?Mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,ne,oe,Vt[At]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,ge,ne,oe,Vt[At]);for(let Rt=0;Rt<Wt.length;Rt++){let ee=Wt[Rt];rt?Mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Rt+1,0,0,ne,oe,ee.image[At]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Rt+1,ge,ne,oe,ee.image[At])}}}x(T)&&B(n.TEXTURE_CUBE_MAP),Ct.__version=pt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Ot(O,T,H,it,pt,Ct){let Ft=o.convert(H.format,H.colorSpace),mt=o.convert(H.type),Tt=N(H.internalFormat,Ft,mt,H.normalized,H.colorSpace),Ut=i.get(T),jt=i.get(H);if(jt.__renderTarget=T,!Ut.__hasExternalTextures){let Vt=Math.max(1,T.width>>Ct),Dt=Math.max(1,T.height>>Ct);pt===n.TEXTURE_3D||pt===n.TEXTURE_2D_ARRAY?e.texImage3D(pt,Ct,Tt,Vt,Dt,T.depth,0,Ft,mt,null):e.texImage2D(pt,Ct,Tt,Vt,Dt,0,Ft,mt,null)}e.bindFramebuffer(n.FRAMEBUFFER,O),at(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,pt,jt.__webglTexture,0,ht(T)):(pt===n.TEXTURE_2D||pt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,it,pt,jt.__webglTexture,Ct),e.bindFramebuffer(n.FRAMEBUFFER,null)}function me(O,T,H){if(n.bindRenderbuffer(n.RENDERBUFFER,O),T.depthBuffer){let it=T.depthTexture,pt=it&&it.isDepthTexture?it.type:null,Ct=F(T.stencilBuffer,pt),Ft=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;at(T)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht(T),Ct,T.width,T.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht(T),Ct,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Ct,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ft,n.RENDERBUFFER,O)}else{let it=T.textures;for(let pt=0;pt<it.length;pt++){let Ct=it[pt],Ft=o.convert(Ct.format,Ct.colorSpace),mt=o.convert(Ct.type),Tt=N(Ct.internalFormat,Ft,mt,Ct.normalized,Ct.colorSpace);at(T)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht(T),Tt,T.width,T.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht(T),Tt,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Tt,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Je(O,T,H){let it=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let pt=i.get(T.depthTexture);if(pt.__renderTarget=T,(!pt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),it){if(pt.__webglInit===void 0&&(pt.__webglInit=!0,T.depthTexture.addEventListener("dispose",Y)),pt.__webglTexture===void 0){pt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,pt.__webglTexture),xe(n.TEXTURE_CUBE_MAP,T.depthTexture);let Ut=o.convert(T.depthTexture.format),jt=o.convert(T.depthTexture.type),Vt;T.depthTexture.format===_i?Vt=n.DEPTH_COMPONENT24:T.depthTexture.format===sr&&(Vt=n.DEPTH24_STENCIL8);for(let Dt=0;Dt<6;Dt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Vt,T.width,T.height,0,Ut,jt,null)}}else vt(T.depthTexture,0);let Ct=pt.__webglTexture,Ft=ht(T),mt=it?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,Tt=T.depthTexture.format===sr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===_i)at(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Tt,mt,Ct,0,Ft):n.framebufferTexture2D(n.FRAMEBUFFER,Tt,mt,Ct,0);else if(T.depthTexture.format===sr)at(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Tt,mt,Ct,0,Ft):n.framebufferTexture2D(n.FRAMEBUFFER,Tt,mt,Ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function he(O){let T=i.get(O),H=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){let it=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),it){let pt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,it.removeEventListener("dispose",pt)};it.addEventListener("dispose",pt),T.__depthDisposeCallback=pt}T.__boundDepthTexture=it}if(O.depthTexture&&!T.__autoAllocateDepthBuffer)if(H)for(let it=0;it<6;it++)Je(T.__webglFramebuffer[it],O,it);else{let it=O.texture.mipmaps;it&&it.length>0?Je(T.__webglFramebuffer[0],O,0):Je(T.__webglFramebuffer,O,0)}else if(H){T.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[it]),T.__webglDepthbuffer[it]===void 0)T.__webglDepthbuffer[it]=n.createRenderbuffer(),me(T.__webglDepthbuffer[it],O,!1);else{let pt=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ct=T.__webglDepthbuffer[it];n.bindRenderbuffer(n.RENDERBUFFER,Ct),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,Ct)}}else{let it=O.texture.mipmaps;if(it&&it.length>0?e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),me(T.__webglDepthbuffer,O,!1);else{let pt=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ct=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ct),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,Ct)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(O,T,H){let it=i.get(O);T!==void 0&&Ot(it.__webglFramebuffer,O,O.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&he(O)}function Ce(O){let T=O.texture,H=i.get(O),it=i.get(T);O.addEventListener("dispose",P);let pt=O.textures,Ct=O.isWebGLCubeRenderTarget===!0,Ft=pt.length>1;if(Ft||(it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture()),it.__version=T.version,c.memory.textures++),Ct){H.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[mt]=[];for(let Tt=0;Tt<T.mipmaps.length;Tt++)H.__webglFramebuffer[mt][Tt]=n.createFramebuffer()}else H.__webglFramebuffer[mt]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let mt=0;mt<T.mipmaps.length;mt++)H.__webglFramebuffer[mt]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Ft)for(let mt=0,Tt=pt.length;mt<Tt;mt++){let Ut=i.get(pt[mt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=n.createTexture(),c.memory.textures++)}if(O.samples>0&&at(O)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let mt=0;mt<pt.length;mt++){let Tt=pt[mt];H.__webglColorRenderbuffer[mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[mt]);let Ut=o.convert(Tt.format,Tt.colorSpace),jt=o.convert(Tt.type),Vt=N(Tt.internalFormat,Ut,jt,Tt.normalized,Tt.colorSpace,O.isXRRenderTarget===!0),Dt=ht(O);n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,Vt,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,H.__webglColorRenderbuffer[mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),O.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),me(H.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ct){e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture),xe(n.TEXTURE_CUBE_MAP,T);for(let mt=0;mt<6;mt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Tt=0;Tt<T.mipmaps.length;Tt++)Ot(H.__webglFramebuffer[mt][Tt],O,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Tt);else Ot(H.__webglFramebuffer[mt],O,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);x(T)&&B(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let mt=0,Tt=pt.length;mt<Tt;mt++){let Ut=pt[mt],jt=i.get(Ut),Vt=n.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Vt=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Vt,jt.__webglTexture),xe(Vt,Ut),Ot(H.__webglFramebuffer,O,Ut,n.COLOR_ATTACHMENT0+mt,Vt,0),x(Ut)&&B(Vt)}e.unbindTexture()}else{let mt=n.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(mt=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(mt,it.__webglTexture),xe(mt,T),T.mipmaps&&T.mipmaps.length>0)for(let Tt=0;Tt<T.mipmaps.length;Tt++)Ot(H.__webglFramebuffer[Tt],O,T,n.COLOR_ATTACHMENT0,mt,Tt);else Ot(H.__webglFramebuffer,O,T,n.COLOR_ATTACHMENT0,mt,0);x(T)&&B(mt),e.unbindTexture()}O.depthBuffer&&he(O)}function be(O){let T=O.textures;for(let H=0,it=T.length;H<it;H++){let pt=T[H];if(x(pt)){let Ct=W(O),Ft=i.get(pt).__webglTexture;e.bindTexture(Ct,Ft),B(Ct),e.unbindTexture()}}}let De=[],He=[];function K(O){if(O.samples>0){if(at(O)===!1){let T=O.textures,H=O.width,it=O.height,pt=n.COLOR_BUFFER_BIT,Ct=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ft=i.get(O),mt=T.length>1;if(mt)for(let Ut=0;Ut<T.length;Ut++)e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);let Tt=O.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Ut=0;Ut<T.length;Ut++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(pt|=n.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(pt|=n.STENCIL_BUFFER_BIT)),mt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ft.__webglColorRenderbuffer[Ut]);let jt=i.get(T[Ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,jt,0)}n.blitFramebuffer(0,0,H,it,0,0,H,it,pt,n.NEAREST),f===!0&&(De.length=0,He.length=0,De.push(n.COLOR_ATTACHMENT0+Ut),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(De.push(Ct),He.push(Ct),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,He)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,De))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),mt)for(let Ut=0;Ut<T.length;Ut++){e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.RENDERBUFFER,Ft.__webglColorRenderbuffer[Ut]);let jt=i.get(T[Ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.TEXTURE_2D,jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&f){let T=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function ht(O){return Math.min(s.maxSamples,O.samples)}function at(O){let T=i.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function k(O){let T=c.render.frame;v.get(O)!==T&&(v.set(O,T),O.update())}function It(O,T){let H=O.colorSpace,it=O.format,pt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||H!==to&&H!==Di&&(Ie.getTransfer(H)===Ue?(it!==Yn||pt!==Ln)&&fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pe("WebGLTextures: Unsupported texture color space:",H)),T}function Kt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=st,this.resetTextureUnits=ct,this.getTextureUnits=z,this.setTextureUnits=q,this.setTexture2D=vt,this.setTexture2DArray=dt,this.setTexture3D=St,this.setTextureCube=_t,this.rebindTextures=Me,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=at,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Lx(n,t){function e(i,s=Di){let o,c=Ie.getTransfer(s);if(i===Ln)return n.UNSIGNED_BYTE;if(i===ll)return n.UNSIGNED_SHORT_4_4_4_4;if(i===cl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===xh)return n.BYTE;if(i===Sh)return n.SHORT;if(i===bs)return n.UNSIGNED_SHORT;if(i===al)return n.INT;if(i===oi)return n.UNSIGNED_INT;if(i===ai)return n.FLOAT;if(i===li)return n.HALF_FLOAT;if(i===wh)return n.ALPHA;if(i===Eh)return n.RGB;if(i===Yn)return n.RGBA;if(i===_i)return n.DEPTH_COMPONENT;if(i===sr)return n.DEPTH_STENCIL;if(i===Th)return n.RED;if(i===hl)return n.RED_INTEGER;if(i===or)return n.RG;if(i===ul)return n.RG_INTEGER;if(i===fl)return n.RGBA_INTEGER;if(i===Ao||i===Po||i===Co||i===Io)if(c===Ue)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Ao)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Io)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Ao)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Po)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Co)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Io)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dl||i===pl||i===ml||i===gl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===dl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ml)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_l||i===vl||i===yl||i===xl||i===Sl||i===Ro||i===Ml)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===_l||i===vl)return c===Ue?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===yl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===xl)return o.COMPRESSED_R11_EAC;if(i===Sl)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Ro)return o.COMPRESSED_RG11_EAC;if(i===Ml)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bl||i===wl||i===El||i===Tl||i===Al||i===Pl||i===Cl||i===Il||i===Rl||i===Ll||i===Nl||i===Dl||i===Ol||i===Fl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===bl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===El)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Al)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Il)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ll)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ol)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fl)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ul||i===Bl||i===kl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===Ul)return c===Ue?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zl||i===Vl||i===Lo||i===Hl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===zl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Vl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ws?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}function Fx(n,t){function e(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function i(M,x){x.color.getRGB(M.fogColor.value,Rh(n)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function s(M,x,B,W,N){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?o(M,x):x.isMeshLambertMaterial?(o(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(o(M,x),S(M,x)):x.isMeshPhongMaterial?(o(M,x),v(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(o(M,x),g(M,x),x.isMeshPhysicalMaterial&&b(M,x,N)):x.isMeshMatcapMaterial?(o(M,x),E(M,x)):x.isMeshDepthMaterial?o(M,x):x.isMeshDistanceMaterial?(o(M,x),C(M,x)):x.isMeshNormalMaterial?o(M,x):x.isLineBasicMaterial?(c(M,x),x.isLineDashedMaterial&&u(M,x)):x.isPointsMaterial?f(M,x,B,W):x.isSpriteMaterial?d(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function o(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,e(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,e(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,e(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===En&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,e(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===En&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,e(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,e(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);let B=t.get(x),W=B.envMap,N=B.envMapRotation;W&&(M.envMap.value=W,M.envMapRotation.value.setFromMatrix4(Ox.makeRotationFromEuler(N)).transpose(),W.isCubeTexture&&W.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Dd),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,M.aoMapTransform))}function c(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,e(x.map,M.mapTransform))}function u(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function f(M,x,B,W){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*B,M.scale.value=W*.5,x.map&&(M.map.value=x.map,e(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,e(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,e(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,e(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function S(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function g(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function b(M,x,B){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===En&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.retroreflectivity>0&&(M.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function C(M,x){let B=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ux(n,t,e,i){let s={},o={},c=[],u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(N,F){let U=F.program;i.uniformBlockBinding(N,U)}function d(N,F){let U=s[N.id];U===void 0&&(M(N),U=v(N),s[N.id]=U,N.addEventListener("dispose",B));let Y=F.program;i.updateUBOMapping(N,Y);let P=t.render.frame;o[N.id]!==P&&(g(N),o[N.id]=P)}function v(N){let F=S();N.__bindingPointIndex=F;let U=n.createBuffer(),Y=N.__size,P=N.usage;return n.bindBuffer(n.UNIFORM_BUFFER,U),n.bufferData(n.UNIFORM_BUFFER,Y,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,F,U),U}function S(){for(let N=0;N<u;N++)if(c.indexOf(N)===-1)return c.push(N),N;return pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(N){let F=s[N.id],U=N.uniforms,Y=N.__cache;n.bindBuffer(n.UNIFORM_BUFFER,F);for(let P=0,V=U.length;P<V;P++){let j=U[P];if(Array.isArray(j))for(let Q=0,nt=j.length;Q<nt;Q++)b(j[Q],P,Q,Y);else b(j,P,0,Y)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function b(N,F,U,Y){if(C(N,F,U,Y)===!0){let P=N.__offset,V=N.value;if(Array.isArray(V)){let j=0;for(let Q=0;Q<V.length;Q++){let nt=V[Q],ct=x(nt);E(nt,N.__data,j),typeof nt!="number"&&typeof nt!="boolean"&&!nt.isMatrix3&&!ArrayBuffer.isView(nt)&&(j+=ct.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(V,N.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,P,N.__data)}}function E(N,F,U){typeof N=="number"||typeof N=="boolean"?F[0]=N:N.isMatrix3?(F[0]=N.elements[0],F[1]=N.elements[1],F[2]=N.elements[2],F[3]=0,F[4]=N.elements[3],F[5]=N.elements[4],F[6]=N.elements[5],F[7]=0,F[8]=N.elements[6],F[9]=N.elements[7],F[10]=N.elements[8],F[11]=0):ArrayBuffer.isView(N)?F.set(new N.constructor(N.buffer,N.byteOffset,F.length)):N.toArray(F,U)}function C(N,F,U,Y){let P=N.value,V=F+"_"+U;if(Y[V]===void 0)return typeof P=="number"||typeof P=="boolean"?Y[V]=P:ArrayBuffer.isView(P)?Y[V]=P.slice():Y[V]=P.clone(),!0;{let j=Y[V];if(typeof P=="number"||typeof P=="boolean"){if(j!==P)return Y[V]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(j.equals(P)===!1)return j.copy(P),!0}}return!1}function M(N){let F=N.uniforms,U=0,Y=16;for(let V=0,j=F.length;V<j;V++){let Q=Array.isArray(F[V])?F[V]:[F[V]];for(let nt=0,ct=Q.length;nt<ct;nt++){let z=Q[nt],q=Array.isArray(z.value)?z.value:[z.value];for(let st=0,G=q.length;st<G;st++){let vt=q[st],dt=x(vt),St=U%Y,_t=St%dt.boundary,Xt=St+_t;U+=_t,Xt!==0&&Y-Xt<dt.storage&&(U+=Y-Xt),z.__data=new Float32Array(dt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=U,U+=dt.storage}}}let P=U%Y;return P>0&&(U+=Y-P),N.__size=U,N.__cache={},this}function x(N){let F={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(F.boundary=4,F.storage=4):N.isVector2?(F.boundary=8,F.storage=8):N.isVector3||N.isColor?(F.boundary=16,F.storage=12):N.isVector4?(F.boundary=16,F.storage=16):N.isMatrix3?(F.boundary=48,F.storage=48):N.isMatrix4?(F.boundary=64,F.storage=64):N.isTexture?fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(F.boundary=16,F.storage=N.byteLength):fe("WebGLRenderer: Unsupported uniform value type.",N),F}function B(N){let F=N.target;F.removeEventListener("dispose",B);let U=c.indexOf(F.__bindingPointIndex);c.splice(U,1),n.deleteBuffer(s[F.id]),delete s[F.id],delete o[F.id]}function W(){for(let N in s)n.deleteBuffer(s[N]);c=[],s={},o={}}return{bind:f,update:d,dispose:W}}function kx(){return xi===null&&(xi=new Ba(Bx,16,16,or,li),xi.name="DFG_LUT",xi.minFilter=un,xi.magFilter=un,xi.wrapS=gi,xi.wrapT=gi,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}var Kg,Qg,t0,e0,n0,i0,r0,s0,o0,a0,l0,c0,h0,u0,f0,d0,p0,m0,g0,_0,v0,y0,x0,S0,M0,b0,w0,E0,T0,A0,P0,C0,I0,R0,L0,N0,D0,O0,F0,U0,B0,k0,z0,V0,H0,G0,X0,W0,Y0,q0,$0,Z0,J0,j0,K0,Q0,t_,e_,n_,i_,r_,s_,o_,a_,l_,c_,h_,u_,f_,d_,p_,m_,g_,__,v_,y_,x_,S_,M_,b_,w_,E_,T_,A_,P_,C_,I_,R_,L_,N_,D_,O_,F_,U_,B_,k_,z_,V_,H_,G_,X_,W_,Y_,q_,$_,Z_,J_,j_,K_,Q_,tv,ev,nv,iv,rv,sv,ov,av,lv,cv,hv,uv,fv,dv,pv,mv,gv,_v,vv,yv,xv,Sv,Mv,bv,wv,Ev,Tv,Av,Pv,Cv,Iv,Rv,Te,qt,Si,Yl,Lv,Cd,As,Bv,kv,zv,No,ad,Fh,Uh,Bh,kh,Vv,wr,$l,Zl,Kv,Id,Hh,Rd,Ld,Nd,ud,fd,dd,pd,md,Gh,Xh,Wh,zh,Ps,Vy,Hy,vd,Yy,ql,Ky,Qy,ex,ix,sx,ax,cx,dx,qh,$h,Sx,Ex,Tx,Ax,Px,Ad,Do,Vh,Nx,Dx,Zh,Jh,Ox,Dd,Bx,xi,Jl,Ql=Pn(()=>{Oh();Oh();Kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qg=`#ifdef USE_ALPHAHASH
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
#endif`,t0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r0=`#ifdef USE_AOMAP
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
#endif`,s0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o0=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,a0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,u0=`#ifdef USE_IRIDESCENCE
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
#endif`,f0=`#ifdef USE_BUMPMAP
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
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,v0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,x0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,S0=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,M0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,b0=`vec3 transformedNormal = objectNormal;
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
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P0="gl_FragColor = linearToOutputTexel( gl_FragColor );",C0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,I0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,R0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,N0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k0=`#ifdef USE_GRADIENTMAP
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
}`,z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G0=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,X0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,W0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,J0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,j0=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,e_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,l_=`#if defined( USE_POINTS_UV )
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
#endif`,c_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,d_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p_=`#ifdef USE_MORPHTARGETS
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
#endif`,m_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,__=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,v_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,S_=`#ifdef USE_NORMALMAP
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
#endif`,M_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,w_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,P_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,O_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,F_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,U_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,B_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k_=`#ifdef USE_SKINNING
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
#endif`,z_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V_=`#ifdef USE_SKINNING
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
#endif`,H_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y_=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,q_=`#ifdef USE_TRANSMISSION
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
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,K_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q_=`uniform sampler2D t2D;
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
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ev=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rv=`#include <common>
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
}`,sv=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ov=`#define DISTANCE
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
}`,av=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hv=`uniform float scale;
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
}`,uv=`uniform vec3 diffuse;
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
}`,fv=`#include <common>
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
}`,dv=`uniform vec3 diffuse;
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
}`,pv=`#define LAMBERT
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
}`,mv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,gv=`#define MATCAP
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
}`,_v=`#define MATCAP
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
}`,vv=`#define NORMAL
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
}`,yv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xv=`#define PHONG
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
}`,Sv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Mv=`#define STANDARD
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
}`,bv=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,wv=`#define TOON
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
}`,Ev=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Tv=`uniform float size;
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
}`,Av=`uniform vec3 diffuse;
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
}`,Pv=`#include <common>
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
}`,Cv=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Iv=`uniform float rotation;
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
}`,Rv=`uniform vec3 diffuse;
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
}`,Te={alphahash_fragment:Kg,alphahash_pars_fragment:Qg,alphamap_fragment:t0,alphamap_pars_fragment:e0,alphatest_fragment:n0,alphatest_pars_fragment:i0,aomap_fragment:r0,aomap_pars_fragment:s0,batching_pars_vertex:o0,batching_vertex:a0,begin_vertex:l0,beginnormal_vertex:c0,bsdfs:h0,iridescence_fragment:u0,bumpmap_pars_fragment:f0,clipping_planes_fragment:d0,clipping_planes_pars_fragment:p0,clipping_planes_pars_vertex:m0,clipping_planes_vertex:g0,color_fragment:_0,color_pars_fragment:v0,color_pars_vertex:y0,color_vertex:x0,common:S0,cube_uv_reflection_fragment:M0,defaultnormal_vertex:b0,displacementmap_pars_vertex:w0,displacementmap_vertex:E0,emissivemap_fragment:T0,emissivemap_pars_fragment:A0,colorspace_fragment:P0,colorspace_pars_fragment:C0,envmap_fragment:I0,envmap_common_pars_fragment:R0,envmap_pars_fragment:L0,envmap_pars_vertex:N0,envmap_physical_pars_fragment:X0,envmap_vertex:D0,fog_vertex:O0,fog_pars_vertex:F0,fog_fragment:U0,fog_pars_fragment:B0,gradientmap_pars_fragment:k0,lightmap_pars_fragment:z0,lights_lambert_fragment:V0,lights_lambert_pars_fragment:H0,lights_pars_begin:G0,lights_toon_fragment:W0,lights_toon_pars_fragment:Y0,lights_phong_fragment:q0,lights_phong_pars_fragment:$0,lights_physical_fragment:Z0,lights_physical_pars_fragment:J0,lights_fragment_begin:j0,lights_fragment_maps:K0,lights_fragment_end:Q0,lightprobes_pars_fragment:t_,logdepthbuf_fragment:e_,logdepthbuf_pars_fragment:n_,logdepthbuf_pars_vertex:i_,logdepthbuf_vertex:r_,map_fragment:s_,map_pars_fragment:o_,map_particle_fragment:a_,map_particle_pars_fragment:l_,metalnessmap_fragment:c_,metalnessmap_pars_fragment:h_,morphinstance_vertex:u_,morphcolor_vertex:f_,morphnormal_vertex:d_,morphtarget_pars_vertex:p_,morphtarget_vertex:m_,normal_fragment_begin:g_,normal_fragment_maps:__,normal_pars_fragment:v_,normal_pars_vertex:y_,normal_vertex:x_,normalmap_pars_fragment:S_,clearcoat_normal_fragment_begin:M_,clearcoat_normal_fragment_maps:b_,clearcoat_pars_fragment:w_,iridescence_pars_fragment:E_,opaque_fragment:T_,packing:A_,premultiplied_alpha_fragment:P_,project_vertex:C_,dithering_fragment:I_,dithering_pars_fragment:R_,roughnessmap_fragment:L_,roughnessmap_pars_fragment:N_,shadowmap_pars_fragment:D_,shadowmap_pars_vertex:O_,shadowmap_vertex:F_,shadowmask_pars_fragment:U_,skinbase_vertex:B_,skinning_pars_vertex:k_,skinning_vertex:z_,skinnormal_vertex:V_,specularmap_fragment:H_,specularmap_pars_fragment:G_,tonemapping_fragment:X_,tonemapping_pars_fragment:W_,transmission_fragment:Y_,transmission_pars_fragment:q_,uv_pars_fragment:$_,uv_pars_vertex:Z_,uv_vertex:J_,worldpos_vertex:j_,background_vert:K_,background_frag:Q_,backgroundCube_vert:tv,backgroundCube_frag:ev,cube_vert:nv,cube_frag:iv,depth_vert:rv,depth_frag:sv,distance_vert:ov,distance_frag:av,equirect_vert:lv,equirect_frag:cv,linedashed_vert:hv,linedashed_frag:uv,meshbasic_vert:fv,meshbasic_frag:dv,meshlambert_vert:pv,meshlambert_frag:mv,meshmatcap_vert:gv,meshmatcap_frag:_v,meshnormal_vert:vv,meshnormal_frag:yv,meshphong_vert:xv,meshphong_frag:Sv,meshphysical_vert:Mv,meshphysical_frag:bv,meshtoon_vert:wv,meshtoon_frag:Ev,points_vert:Tv,points_frag:Av,shadow_vert:Pv,shadow_frag:Cv,sprite_vert:Iv,sprite_frag:Rv},qt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Se}},envmap:{envMap:{value:null},envMapRotation:{value:new Se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Se},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ot},probesMax:{value:new ot},probesResolution:{value:new ot}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}}},Si={basic:{uniforms:yn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:yn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:yn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:yn([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:yn([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new ye(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:yn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:yn([qt.points,qt.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:yn([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:yn([qt.common,qt.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:yn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:yn([qt.sprite,qt.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Se}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distance:{uniforms:yn([qt.common,qt.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distance_vert,fragmentShader:Te.distance_frag},shadow:{uniforms:yn([qt.lights,qt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Si.physical={uniforms:yn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Se},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Se},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Se},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Se},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Se},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Se},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Se}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};Yl={r:0,b:0,g:0},Lv=new We,Cd=new Se;Cd.set(-1,0,0,0,1,0,0,0,1);As=4,Bv=6,kv=20,zv=256,No=new vs,ad=new ye,Fh=null,Uh=0,Bh=0,kh=!1,Vv=new ot,wr=new ot,$l=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,o={}){let{size:c=256,position:u=Vv}=o;Fh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);let f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(t,i,s,f,u),e>0&&this._blur(f,0,0,e),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fh,Uh,Bh),this._renderer.xr.enabled=kh,t.scissorTest=!1,Ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ir||t.mapping===Mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:li,format:Yn,colorSpace:to,depthBuffer:!1},s=ld(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ld(t,e,i);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Hv(o)),this._blurMaterial=Xv(o,t,e),this._ggxMaterial=Gv(o,t,e)}return s}_compileMaterial(t){let e=new ze(new Ze,t);this._renderer.compile(e,No)}_sceneToCubeUV(t,e,i,s,o){let f=new _n(90,1,e,i),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,b=S.toneMapping;S.getClearColor(ad),S.toneMapping=si,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(s),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ze(new Zi,new ii({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));let C=this._backgroundBox,M=C.material,x=!1,B=t.background;B?B.isColor&&(M.color.copy(B),t.background=null,x=!0):(M.color.copy(ad),x=!0);for(let W=0;W<6;W++){let N=W%3;N===0?(f.up.set(0,d[W],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x+v[W],o.y,o.z)):N===1?(f.up.set(0,0,d[W]),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y+v[W],o.z)):(f.up.set(0,d[W],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y,o.z+v[W]));let F=this._cubeSize;Ts(s,N*F,W>2?F:0,F,F),S.setRenderTarget(s),x&&S.render(C,f),S.render(t,f)}S.toneMapping=b,S.autoClear=g,t.background=B}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ir||t.mapping===Mr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cd());let o=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;let u=o.uniforms;u.envMap.value=t;let f=this._cubeSize;Ts(e,0,0,3*f,2*f),i.setRenderTarget(e),i.render(c,No)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;let f=c.uniforms,d=i/(this._lodMeshes.length-1),v=e/(this._lodMeshes.length-1),S=Math.sqrt(d*d-v*v),g=d*1.25,b=S*g,{_lodMax:E}=this,C=this._sizeLods[i],M=3*C*(i>E-As?i-E+As:0),x=4*(this._cubeSize-C);f.envMap.value=t.texture,f.roughness.value=b,f.mipInt.value=E-e,Ts(o,M,x,3*C,2*C),s.setRenderTarget(o),s.render(u,No),f.envMap.value=o.texture,f.roughness.value=0,f.mipInt.value=E-i,Ts(t,M,x,3*C,2*C),s.setRenderTarget(t),s.render(u,No)}_blur(t,e,i,s){let o=this._pingPongRenderTarget,c=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,i,c),this._blurPass(o,t,i,i,c)}_blurPass(t,e,i,s,o){let c=this._renderer,u=this._blurMaterial,f=this._lodMeshes[s];f.material=u;let d=u.uniforms;d.envMap.value=t.texture,d.sigma.value=o,d.mipInt.value=this._lodMax-i;let v=this._sizeLods[s],S=3*v*(s>this._lodMax-As?s-this._lodMax+As:0),g=4*(this._cubeSize-v);Ts(e,S,g,3*v,2*v),c.setRenderTarget(e),c.render(f,No)}};Zl=class extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ho(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zi(5,5,5),o=new kn({name:"CubemapFromEquirect",uniforms:br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:yi});o.uniforms.tEquirect.value=e;let c=new ze(s,o),u=e.minFilter;return e.minFilter===rr&&(e.minFilter=un),new nl(1,10,this).update(t,c),e.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let o=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,s);t.setRenderTarget(o)}};Kv={[fh]:"LINEAR_TONE_MAPPING",[dh]:"REINHARD_TONE_MAPPING",[ph]:"CINEON_TONE_MAPPING",[mh]:"ACES_FILMIC_TONE_MAPPING",[_h]:"AGX_TONE_MAPPING",[vh]:"NEUTRAL_TONE_MAPPING",[gh]:"CUSTOM_TONE_MAPPING"};Id=new wn,Hh=new $i(1,1),Rd=new ro,Ld=new Fa,Nd=new ho,ud=[],fd=[],dd=new Float32Array(16),pd=new Float32Array(9),md=new Float32Array(4);Gh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=yy(e.type)}},Xh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ky(e.type)}},Wh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let o=0,c=s.length;o!==c;++o){let u=s[o];u.setValue(t,e[u.id],i)}}},zh=/(\w+)(\])?(\[|\.)?/g;Ps=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){let u=t.getActiveUniform(e,c),f=t.getUniformLocation(e,u.name);zy(u,f,this)}let s=[],o=[];for(let c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(c):o.push(c);s.length>0&&(this.seq=s.concat(o))}setValue(t,e,i,s){let o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,c=e.length;o!==c;++o){let u=e[o],f=i[u.id];f.needsUpdate!==!1&&u.setValue(t,f.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,o=t.length;s!==o;++s){let c=t[s];c.id in e&&i.push(c)}return i}};Vy=37297,Hy=0;vd=new Se;Yy={[fh]:"Linear",[dh]:"Reinhard",[ph]:"Cineon",[mh]:"ACESFilmic",[_h]:"AgX",[vh]:"Neutral",[gh]:"Custom"};ql=new ot;Ky=/^[ \t]*#include +<([\w\d./]+)>/gm;Qy=new Map;ex=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;ix={[wo]:"SHADOWMAP_TYPE_PCF",[Ss]:"SHADOWMAP_TYPE_VSM"};sx={[ir]:"ENVMAP_TYPE_CUBE",[Mr]:"ENVMAP_TYPE_CUBE",[Eo]:"ENVMAP_TYPE_CUBE_UV"};ax={[Mr]:"ENVMAP_MODE_REFRACTION"};cx={[uh]:"ENVMAP_BLENDING_MULTIPLY",[zf]:"ENVMAP_BLENDING_MIX",[Vf]:"ENVMAP_BLENDING_ADD"};dx=0,qh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new $h(t),e.set(t,i)),i}},$h=class{constructor(t){this.id=dx++,this.code=t,this.usedTimes=0}};Sx=0;Ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ax=[new ot(1,0,0),new ot(-1,0,0),new ot(0,1,0),new ot(0,-1,0),new ot(0,0,1),new ot(0,0,-1)],Px=[new ot(0,-1,0),new ot(0,-1,0),new ot(0,0,1),new ot(0,0,-1),new ot(0,-1,0),new ot(0,-1,0)],Ad=new We,Do=new ot,Vh=new ot;Nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dx=`
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

}`,Zh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new fo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new kn({vertexShader:Nx,fragmentShader:Dx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ze(new po(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jh=class extends ni{constructor(t,e){super();let i=this,s=null,o=1,c=null,u="local-floor",f=1,d=null,v=null,S=null,g=null,b=null,E=null,C=typeof XRWebGLBinding<"u",M=new Zh,x={},B=e.getContextAttributes(),W=null,N=null,F=[],U=[],Y=new le,P=null,V=null,j=new _n;j.viewport=new je;let Q=new _n;Q.viewport=new je;let nt=[j,Q],ct=new il,z=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(yt){let wt=F[yt];return wt===void 0&&(wt=new ds,F[yt]=wt),wt.getTargetRaySpace()},this.getControllerGrip=function(yt){let wt=F[yt];return wt===void 0&&(wt=new ds,F[yt]=wt),wt.getGripSpace()},this.getHand=function(yt){let wt=F[yt];return wt===void 0&&(wt=new ds,F[yt]=wt),wt.getHandSpace()};function st(yt){let wt=U.indexOf(yt.inputSource);if(wt===-1)return;let Zt=F[wt];Zt!==void 0&&(Zt.update(yt.inputSource,yt.frame,d||c),Zt.dispatchEvent({type:yt.type,data:yt.inputSource}))}function G(){s.removeEventListener("select",st),s.removeEventListener("selectstart",st),s.removeEventListener("selectend",st),s.removeEventListener("squeeze",st),s.removeEventListener("squeezestart",st),s.removeEventListener("squeezeend",st),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",vt);for(let yt=0;yt<F.length;yt++){let wt=U[yt];wt!==null&&(U[yt]=null,F[yt].disconnect(wt))}z=null,q=null,M.reset();for(let yt in x)delete x[yt];if(t.setRenderTarget(W),b=null,g=null,S=null,s=null,N=null,Ee.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(Y.width,Y.height,!1),V!==null){let yt=V.camera;yt.fov=V.fov,yt.zoom=V.zoom,yt.updateProjectionMatrix(),V=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(yt){o=yt,i.isPresenting===!0&&fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(yt){u=yt,i.isPresenting===!0&&fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(yt){d=yt},this.getBaseLayer=function(){return g!==null?g:b},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(s,e)),S},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(yt){if(s=yt,s!==null){if(W=t.getRenderTarget(),s.addEventListener("select",st),s.addEventListener("selectstart",st),s.addEventListener("selectend",st),s.addEventListener("squeeze",st),s.addEventListener("squeezestart",st),s.addEventListener("squeezeend",st),s.addEventListener("end",G),s.addEventListener("inputsourceschange",vt),B.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(Y),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Zt=null,ae=null,Ot=null;B.depth&&(Ot=B.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Zt=B.stencil?sr:_i,ae=B.stencil?ws:oi);let me={colorFormat:e.RGBA8,depthFormat:Ot,scaleFactor:o};S=this.getBinding(),g=S.createProjectionLayer(me),s.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),N=new In(g.textureWidth,g.textureHeight,{format:Yn,type:Ln,depthTexture:new $i(g.textureWidth,g.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Zt),stencilBuffer:B.stencil,colorSpace:t.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{let Zt={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:o};b=new XRWebGLLayer(s,e,Zt),s.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),N=new In(b.framebufferWidth,b.framebufferHeight,{format:Yn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(f),d=null,c=await s.requestReferenceSpace(u),Ee.setContext(s),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function vt(yt){for(let wt=0;wt<yt.removed.length;wt++){let Zt=yt.removed[wt],ae=U.indexOf(Zt);ae>=0&&(U[ae]=null,F[ae].disconnect(Zt))}for(let wt=0;wt<yt.added.length;wt++){let Zt=yt.added[wt],ae=U.indexOf(Zt);if(ae===-1){for(let me=0;me<F.length;me++)if(me>=U.length){U.push(Zt),ae=me;break}else if(U[me]===null){U[me]=Zt,ae=me;break}if(ae===-1)break}let Ot=F[ae];Ot&&Ot.connect(Zt)}}let dt=new ot,St=new ot;function _t(yt,wt,Zt){dt.setFromMatrixPosition(wt.matrixWorld),St.setFromMatrixPosition(Zt.matrixWorld);let ae=dt.distanceTo(St),Ot=wt.projectionMatrix.elements,me=Zt.projectionMatrix.elements,Je=Ot[14]/(Ot[10]-1),he=Ot[14]/(Ot[10]+1),Me=(Ot[9]+1)/Ot[5],Ce=(Ot[9]-1)/Ot[5],be=(Ot[8]-1)/Ot[0],De=(me[8]+1)/me[0],He=Je*be,K=Je*De,ht=ae/(-be+De),at=ht*-be;if(wt.matrixWorld.decompose(yt.position,yt.quaternion,yt.scale),yt.translateX(at),yt.translateZ(ht),yt.matrixWorld.compose(yt.position,yt.quaternion,yt.scale),yt.matrixWorldInverse.copy(yt.matrixWorld).invert(),Ot[10]===-1)yt.projectionMatrix.copy(wt.projectionMatrix),yt.projectionMatrixInverse.copy(wt.projectionMatrixInverse);else{let k=Je+ht,It=he+ht,Kt=He-at,O=K+(ae-at),T=Me*he/It*k,H=Ce*he/It*k;yt.projectionMatrix.makePerspective(Kt,O,T,H,k,It),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert()}}function Xt(yt,wt){wt===null?yt.matrixWorld.copy(yt.matrix):yt.matrixWorld.multiplyMatrices(wt.matrixWorld,yt.matrix),yt.matrixWorldInverse.copy(yt.matrixWorld).invert()}this.updateCamera=function(yt){if(s===null)return;let wt=yt.near,Zt=yt.far;M.texture!==null&&(M.depthNear>0&&(wt=M.depthNear),M.depthFar>0&&(Zt=M.depthFar)),ct.near=Q.near=j.near=wt,ct.far=Q.far=j.far=Zt,(z!==ct.near||q!==ct.far)&&(s.updateRenderState({depthNear:ct.near,depthFar:ct.far}),z=ct.near,q=ct.far),ct.layers.mask=yt.layers.mask|6,j.layers.mask=ct.layers.mask&-5,Q.layers.mask=ct.layers.mask&-3;let ae=yt.parent,Ot=ct.cameras;Xt(ct,ae);for(let me=0;me<Ot.length;me++)Xt(Ot[me],ae);Ot.length===2?_t(ct,j,Q):ct.projectionMatrix.copy(j.projectionMatrix),V===null&&yt.isPerspectiveCamera&&(V={camera:yt,fov:yt.fov,zoom:yt.zoom}),$t(yt,ct,ae)};function $t(yt,wt,Zt){Zt===null?yt.matrix.copy(wt.matrixWorld):(yt.matrix.copy(Zt.matrixWorld),yt.matrix.invert(),yt.matrix.multiply(wt.matrixWorld)),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.updateMatrixWorld(!0),yt.projectionMatrix.copy(wt.projectionMatrix),yt.projectionMatrixInverse.copy(wt.projectionMatrixInverse),yt.isPerspectiveCamera&&(yt.fov=hs*2*Math.atan(1/yt.projectionMatrix.elements[5]),yt.zoom=1)}this.getCamera=function(){return ct},this.getFoveation=function(){if(!(g===null&&b===null))return f},this.setFoveation=function(yt){f=yt,g!==null&&(g.fixedFoveation=yt),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=yt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(ct)},this.getCameraTexture=function(yt){return x[yt]};let ue=null;function xe(yt,wt){if(v=wt.getViewerPose(d||c),E=wt,v!==null){let Zt=v.views;b!==null&&(t.setRenderTargetFramebuffer(N,b.framebuffer),t.setRenderTarget(N));let ae=!1;Zt.length!==ct.cameras.length&&(ct.cameras.length=0,ae=!0);for(let he=0;he<Zt.length;he++){let Me=Zt[he],Ce=null;if(b!==null)Ce=b.getViewport(Me);else{let De=S.getViewSubImage(g,Me);Ce=De.viewport,he===0&&(t.setRenderTargetTextures(N,De.colorTexture,De.depthStencilTexture),t.setRenderTarget(N))}let be=nt[he];be===void 0&&(be=new _n,be.layers.enable(he),be.viewport=new je,nt[he]=be),be.matrix.fromArray(Me.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Me.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),he===0&&(ct.matrix.copy(be.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale)),ae===!0&&ct.cameras.push(be)}let Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&C){S=i.getBinding();let he=S.getDepthInformation(Zt[0]);he&&he.isValid&&he.texture&&M.init(he,s.renderState)}if(Ot&&Ot.includes("camera-access")&&C){t.state.unbindTexture(),S=i.getBinding();for(let he=0;he<Zt.length;he++){let Me=Zt[he].camera;if(Me){let Ce=x[Me];Ce||(Ce=new fo,x[Me]=Ce);let be=S.getCameraImage(Me);Ce.sourceTexture=be}}}}for(let Zt=0;Zt<F.length;Zt++){let ae=U[Zt],Ot=F[Zt];ae!==null&&Ot!==void 0&&Ot.update(ae,wt,d||c)}ue&&ue(yt,wt),wt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:wt}),E=null}let Ee=new Pd;Ee.setAnimationLoop(xe),this.setAnimationLoop=function(yt){ue=yt},this.dispose=function(){}}},Ox=new We,Dd=new Se;Dd.set(-1,0,0,0,1,0,0,0,1);Bx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xi=null;Jl=class{constructor(t={}){let{canvas:e=Kf(),context:i=null,depth:s=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:b=Ln}=t;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=c;let C=b,M=new Set([fl,ul,hl]),x=new Set([Ln,oi,bs,ws,ll,cl]),B=new Uint32Array(4),W=new Int32Array(4),N=new ot,F=null,U=null,Y=[],P=[],V=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,Q=!1,nt=null,ct=null,z=null,q=null;this._outputColorSpace=bn;let st=0,G=0,vt=null,dt=-1,St=null,_t=new je,Xt=new je,$t=null,ue=new ye(0),xe=0,Ee=e.width,yt=e.height,wt=1,Zt=null,ae=null,Ot=new je(0,0,Ee,yt),me=new je(0,0,Ee,yt),Je=!1,he=new ms,Me=!1,Ce=!1,be=new We,De=new ot,He=new je,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ht=!1;function at(){return vt===null?wt:1}let k=i;function It(L,tt){return e.getContext(L,tt)}let Kt,O,T,H,it,pt,Ct,Ft,mt,Tt,Ut,jt,Vt,Dt,ne,oe,ge,rt,Bt,Mt,kt,Wt,At;try{let L={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Fe,!1),e.addEventListener("webglcontextrestored",Le,!1),e.addEventListener("webglcontextcreationerror",xn,!1),k===null){let tt="webgl2";if(k=It(tt,L),k===null)throw It(tt)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Rt()}catch(L){throw e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",Le,!1),e.removeEventListener("webglcontextcreationerror",xn,!1),pe("WebGLRenderer: "+L.message),L}function Rt(){Kt=new Yv(k),Kt.init(),kt=new Lx(k,Kt),O=new Fv(k,Kt,t,kt),T=new Ix(k,Kt),O.reversedDepthBuffer&&g&&T.buffers.depth.setReversed(!0),ct=k.createFramebuffer(),z=k.createFramebuffer(),q=k.createFramebuffer(),H=new Zv(k),it=new gx,pt=new Rx(k,Kt,T,it,O,kt,H),Ct=new Wv(j),Ft=new jg(k),Wt=new Dv(k,Ft),mt=new qv(k,Ft,H,Wt),Tt=new jv(k,mt,Ft,Wt,H),rt=new Jv(k,O,pt),ne=new Uv(it),Ut=new mx(j,Ct,Kt,O,Wt,ne),jt=new Fx(j,it),Vt=new vx,Dt=new wx(Kt),ge=new Nv(j,Ct,T,Tt,E,f),oe=new Cx(j,Tt,O),At=new Ux(k,H,O,T),Bt=new Ov(k,Kt,H),Mt=new $v(k,Kt,H),H.programs=Ut.programs,j.capabilities=O,j.extensions=Kt,j.properties=it,j.renderLists=Vt,j.shadowMap=oe,j.state=T,j.info=H}C!==Ln&&(V=new Qv(C,e.width,e.height,u,s,o));let ee=new Jh(j,k);this.xr=ee,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let L=Kt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=Kt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return wt},this.setPixelRatio=function(L){L!==void 0&&(wt=L,this.setSize(Ee,yt,!1))},this.getSize=function(L){return L.set(Ee,yt)},this.setSize=function(L,tt,gt=!0){if(ee.isPresenting){fe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=L,yt=tt,e.width=Math.floor(L*wt),e.height=Math.floor(tt*wt),gt===!0&&(e.style.width=L+"px",e.style.height=tt+"px"),V!==null&&V.setSize(e.width,e.height),this.setViewport(0,0,L,tt)},this.getDrawingBufferSize=function(L){return L.set(Ee*wt,yt*wt).floor()},this.setDrawingBufferSize=function(L,tt,gt){Ee=L,yt=tt,wt=gt,e.width=Math.floor(L*gt),e.height=Math.floor(tt*gt),this.setViewport(0,0,L,tt)},this.setEffects=function(L){if(C===Ln){pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let tt=0;tt<L.length;tt++)if(L[tt].isOutputPass===!0){fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(_t)},this.getViewport=function(L){return L.copy(Ot)},this.setViewport=function(L,tt,gt,ut){L.isVector4?Ot.set(L.x,L.y,L.z,L.w):Ot.set(L,tt,gt,ut),T.viewport(_t.copy(Ot).multiplyScalar(wt).round())},this.getScissor=function(L){return L.copy(me)},this.setScissor=function(L,tt,gt,ut){L.isVector4?me.set(L.x,L.y,L.z,L.w):me.set(L,tt,gt,ut),T.scissor(Xt.copy(me).multiplyScalar(wt).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(L){T.setScissorTest(Je=L)},this.setOpaqueSort=function(L){Zt=L},this.setTransparentSort=function(L){ae=L},this.getClearColor=function(L){return L.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(L=!0,tt=!0,gt=!0){let ut=0;if(L){let ft=!1;if(vt!==null){let Gt=vt.texture.format;ft=M.has(Gt)}if(ft){let Gt=vt.texture.type,Nt=x.has(Gt),Ht=ge.getClearColor(),Qt=ge.getClearAlpha(),ie=Ht.r,zt=Ht.g,de=Ht.b;Nt?(B[0]=ie,B[1]=zt,B[2]=de,B[3]=Qt,k.clearBufferuiv(k.COLOR,0,B)):(W[0]=ie,W[1]=zt,W[2]=de,W[3]=Qt,k.clearBufferiv(k.COLOR,0,W))}else ut|=k.COLOR_BUFFER_BIT}tt&&(ut|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),gt&&(ut|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ut!==0&&k.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),nt=L},this.dispose=function(){e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",Le,!1),e.removeEventListener("webglcontextcreationerror",xn,!1),ge.dispose(),Vt.dispose(),Dt.dispose(),it.dispose(),Ct.dispose(),Tt.dispose(),Wt.dispose(),At.dispose(),Ut.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Er),ee.removeEventListener("sessionend",Tr),An.stop()};function Fe(L){L.preventDefault(),io("WebGLRenderer: Context Lost."),Q=!0}function Le(){io("WebGLRenderer: Context Restored."),Q=!1;let L=H.autoReset,tt=oe.enabled,gt=oe.autoUpdate,ut=oe.needsUpdate,ft=oe.type;Rt(),H.autoReset=L,oe.enabled=tt,oe.autoUpdate=gt,oe.needsUpdate=ut,oe.type=ft}function xn(L){pe("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Tn(L){let tt=L.target;tt.removeEventListener("dispose",Tn),Rs(tt)}function Rs(L){ar(L),it.remove(L)}function ar(L){let tt=it.get(L).programs;tt!==void 0&&(tt.forEach(function(gt){Ut.releaseProgram(gt)}),L.isShaderMaterial&&Ut.releaseShaderCache(L))}this.renderBufferDirect=function(L,tt,gt,ut,ft,Gt){tt===null&&(tt=K);let Nt=ft.isMesh&&ft.matrixWorld.determinantAffine()<0,Ht=hi(L,tt,gt,ut,ft);T.setMaterial(ut,Nt);let Qt=gt.index,ie=1;if(ut.wireframe===!0){if(Qt=mt.getWireframeAttribute(gt),Qt===void 0)return;ie=2}let zt=gt.drawRange,de=gt.attributes.position,Jt=zt.start*ie,Ne=(zt.start+zt.count)*ie;Gt!==null&&(Jt=Math.max(Jt,Gt.start*ie),Ne=Math.min(Ne,(Gt.start+Gt.count)*ie)),Qt!==null?(Jt=Math.max(Jt,0),Ne=Math.min(Ne,Qt.count)):de!=null&&(Jt=Math.max(Jt,0),Ne=Math.min(Ne,de.count));let Xe=Ne-Jt;if(Xe<0||Xe===1/0)return;Wt.setup(ft,ut,Ht,gt,Qt);let Pe,r=Bt;if(Qt!==null&&(Pe=Ft.get(Qt),r=Mt,r.setIndex(Pe)),ft.isMesh)ut.wireframe===!0?(T.setLineWidth(ut.wireframeLinewidth*at()),r.setMode(k.LINES)):r.setMode(k.TRIANGLES);else if(ft.isLine){let a=ut.linewidth;a===void 0&&(a=1),T.setLineWidth(a*at()),ft.isLineSegments?r.setMode(k.LINES):ft.isLineLoop?r.setMode(k.LINE_LOOP):r.setMode(k.LINE_STRIP)}else ft.isPoints?r.setMode(k.POINTS):ft.isSprite&&r.setMode(k.TRIANGLES);if(ft.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))r.renderMultiDraw(ft._multiDrawStarts,ft._multiDrawCounts,ft._multiDrawCount);else{let a=ft._multiDrawStarts,l=ft._multiDrawCounts,p=ft._multiDrawCount,_=Qt?Ft.get(Qt).bytesPerElement:1,A=it.get(ut).currentProgram.getUniforms();for(let D=0;D<p;D++)A.setValue(k,"_gl_DrawID",D),r.render(a[D]/_,l[D])}else if(ft.isInstancedMesh)r.renderInstances(Jt,Xe,ft.count);else if(gt.isInstancedBufferGeometry){let a=gt._maxInstanceCount!==void 0?gt._maxInstanceCount:1/0,l=Math.min(gt.instanceCount,a);r.renderInstances(Jt,Xe,l)}else r.render(Jt,Xe)};function I(L,tt,gt,ut){nt!==null&&L.isNodeMaterial&&nt.setObject(ut,L),Me===!0&&ne.setState(L,gt,!1),L.transparent===!0&&L.side===vn&&L.forceSinglePass===!1?(L.side=En,L.needsUpdate=!0,Oi(L,tt,ut),L.side=nr,L.needsUpdate=!0,Oi(L,tt,ut),L.side=vn):Oi(L,tt,ut)}this.compile=function(L,tt,gt=null){gt===null&&(gt=L),nt!==null&&nt.renderStart(L,tt,gt),U=Dt.get(gt),U.init(tt),P.push(U),gt.traverseVisible(function(ft){ft.isLight&&ft.layers.test(tt.layers)&&(U.pushLight(ft),ft.castShadow&&U.pushShadow(ft))}),L!==gt&&L.traverseVisible(function(ft){ft.isLight&&ft.layers.test(tt.layers)&&(U.pushLight(ft),ft.castShadow&&U.pushShadow(ft))}),U.setupLights(),nt!==null&&nt.updateLights(U.state.lightsArray),Ce=this.localClippingEnabled,Me=ne.init(this.clippingPlanes,Ce),Me===!0&&ne.setGlobalState(this.clippingPlanes,tt),nt!==null&&oe.render(U.state.shadowsArray,gt,tt);let ut=new Set;return L.traverse(function(ft){if(!(ft.isMesh||ft.isPoints||ft.isLine||ft.isSprite))return;let Gt=ft.material;if(Gt)if(Array.isArray(Gt))for(let Nt=0;Nt<Gt.length;Nt++){let Ht=Gt[Nt];I(Ht,gt,tt,ft),ut.add(Ht)}else I(Gt,gt,tt,ft),ut.add(Gt)}),U=P.pop(),nt!==null&&nt.renderEnd(),ut},this.compileAsync=function(L,tt,gt=null){let ut=this.compile(L,tt,gt);return new Promise(ft=>{function Gt(){if(ut.forEach(function(Nt){let Qt=it.get(Nt).currentProgram;(Qt===void 0||Qt.isReady())&&ut.delete(Nt)}),ut.size===0){ft(L);return}setTimeout(Gt,10)}Kt.get("KHR_parallel_shader_compile")!==null?Gt():setTimeout(Gt,10)})};let Mi=null;function Re(L){Mi&&Mi(L)}function Er(){An.stop()}function Tr(){An.start()}let An=new Pd;An.setAnimationLoop(Re),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(L){Mi=L,ee.setAnimationLoop(L),L===null?An.stop():An.start()},ee.addEventListener("sessionstart",Er),ee.addEventListener("sessionend",Tr),this.render=function(L,tt){if(tt!==void 0&&tt.isCamera!==!0){pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Q===!0)return;nt!==null&&nt.renderStart(L,tt);let gt=ee.enabled===!0&&ee.isPresenting===!0,ut=V!==null&&(vt===null||gt)&&V.begin(j,vt);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(tt),tt=ee.getCamera()),L.isScene===!0&&L.onBeforeRender(j,L,tt,vt),U=Dt.get(L,P.length),U.init(tt),U.state.textureUnits=pt.getTextureUnits(),P.push(U),be.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),he.setFromProjectionMatrix(be,ti,tt.reversedDepth),Ce=this.localClippingEnabled,Me=ne.init(this.clippingPlanes,Ce),F=Vt.get(L,Y.length),F.init(),Y.push(F),ee.enabled===!0&&ee.isPresenting===!0){let Nt=j.xr.getDepthSensingMesh();Nt!==null&&Vn(Nt,tt,-1/0,j.sortObjects)}Vn(L,tt,0,j.sortObjects),F.finish(),nt!==null&&nt.updateLights(U.state.lightsArray),j.sortObjects===!0&&F.sort(Zt,ae),ht=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,ht&&ge.addToRenderList(F,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Me===!0&&ne.beginShadows();let ft=U.state.shadowsArray;if(oe.render(ft,L,tt),Me===!0&&ne.endShadows(),(ut&&V.hasRenderPass())===!1){let Nt=F.opaque,Ht=F.transmissive;if(U.setupLights(),tt.isArrayCamera){let Qt=tt.cameras;if(Ht.length>0)for(let ie=0,zt=Qt.length;ie<zt;ie++){let de=Qt[ie];ci(Nt,Ht,L,de)}ht&&ge.render(L);for(let ie=0,zt=Qt.length;ie<zt;ie++){let de=Qt[ie];Ar(F,L,de,de.viewport)}}else Ht.length>0&&ci(Nt,Ht,L,tt),ht&&ge.render(L),Ar(F,L,tt)}vt!==null&&G===0&&(pt.updateMultisampleRenderTarget(vt),pt.updateRenderTargetMipmap(vt)),ut&&V.end(j),L.isScene===!0&&L.onAfterRender(j,L,tt),Wt.resetDefaultState(),dt=-1,St=null,P.pop(),P.length>0?(U=P[P.length-1],pt.setTextureUnits(U.state.textureUnits),Me===!0&&ne.setGlobalState(j.clippingPlanes,U.state.camera)):U=null,Y.pop(),Y.length>0?F=Y[Y.length-1]:F=null,nt!==null&&nt.renderEnd()};function Vn(L,tt,gt,ut){if(L.visible===!1)return;if(L.layers.test(tt.layers)){if(L.isGroup)gt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(tt);else if(L.isLightProbeGrid)U.pushLightProbeGrid(L);else if(L.isLight)U.pushLight(L),L.castShadow&&U.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(he)){ut&&He.setFromMatrixPosition(L.matrixWorld).applyMatrix4(be);let Nt=Tt.update(L),Ht=L.material;Ht.visible&&F.push(L,Nt,Ht,gt,He.z,null,tt)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(he))){let Nt=Tt.update(L),Ht=L.material;if(ut&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),He.copy(L.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),He.copy(Nt.boundingSphere.center)),He.applyMatrix4(L.matrixWorld).applyMatrix4(be)),Array.isArray(Ht)){let Qt=Nt.groups;for(let ie=0,zt=Qt.length;ie<zt;ie++){let de=Qt[ie],Jt=Ht[de.materialIndex];Jt&&Jt.visible&&F.push(L,Nt,Jt,gt,He.z,de,tt)}}else Ht.visible&&F.push(L,Nt,Ht,gt,He.z,null,tt)}}let Gt=L.children;for(let Nt=0,Ht=Gt.length;Nt<Ht;Nt++)Vn(Gt[Nt],tt,gt,ut)}function Ar(L,tt,gt,ut){let{opaque:ft,transmissive:Gt,transparent:Nt}=L;U.setupLightsView(gt),Me===!0&&ne.setGlobalState(j.clippingPlanes,gt),ut&&T.viewport(_t.copy(ut)),ft.length>0&&bi(ft,tt,gt),Gt.length>0&&bi(Gt,tt,gt),Nt.length>0&&bi(Nt,tt,gt),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function ci(L,tt,gt,ut){if((gt.isScene===!0?gt.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ut.id]===void 0){let Jt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ut.id]=new In(1,1,{generateMipmaps:!0,type:Jt?li:Ln,minFilter:rr,samples:Math.max(4,O.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ie.workingColorSpace})}let Gt=U.state.transmissionRenderTarget[ut.id],Nt=ut.viewport||_t;Gt.setSize(Nt.z*j.transmissionResolutionScale,Nt.w*j.transmissionResolutionScale);let Ht=j.getRenderTarget(),Qt=j.getActiveCubeFace(),ie=j.getActiveMipmapLevel();j.setRenderTarget(Gt),j.getClearColor(ue),xe=j.getClearAlpha(),xe<1&&j.setClearColor(16777215,.5),j.clear(),ht&&ge.render(gt);let zt=j.toneMapping;j.toneMapping=si;let de=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),U.setupLightsView(ut),Me===!0&&ne.setGlobalState(j.clippingPlanes,ut),bi(L,gt,ut),pt.updateMultisampleRenderTarget(Gt),pt.updateRenderTargetMipmap(Gt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Ne=0,Xe=tt.length;Ne<Xe;Ne++){let Pe=tt[Ne],{object:r,geometry:a,material:l,group:p}=Pe;if(l.side===vn&&r.layers.test(ut.layers)){let _=l.side;l.side=En,l.needsUpdate=!0,Pr(r,gt,ut,a,l,p),l.side=_,l.needsUpdate=!0,Jt=!0}}Jt===!0&&(pt.updateMultisampleRenderTarget(Gt),pt.updateRenderTargetMipmap(Gt))}j.setRenderTarget(Ht,Qt,ie),j.setClearColor(ue,xe),de!==void 0&&(ut.viewport=de),j.toneMapping=zt}function bi(L,tt,gt){let ut=tt.isScene===!0?tt.overrideMaterial:null;for(let ft=0,Gt=L.length;ft<Gt;ft++){let Nt=L[ft],{object:Ht,geometry:Qt,group:ie}=Nt,zt=Nt.material;zt.allowOverride===!0&&ut!==null&&(zt=ut),Ht.layers.test(gt.layers)&&Pr(Ht,tt,gt,Qt,zt,ie)}}function Pr(L,tt,gt,ut,ft,Gt){nt!==null&&ft.isNodeMaterial&&nt.setObject(L,ft),L.onBeforeRender(j,tt,gt,ut,ft,Gt),L.modelViewMatrix.multiplyMatrices(gt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ft.onBeforeRender(j,tt,gt,ut,L,Gt),ft.transparent===!0&&ft.side===vn&&ft.forceSinglePass===!1?(ft.side=En,ft.needsUpdate=!0,j.renderBufferDirect(gt,tt,ut,ft,L,Gt),ft.side=nr,ft.needsUpdate=!0,j.renderBufferDirect(gt,tt,ut,ft,L,Gt),ft.side=vn):j.renderBufferDirect(gt,tt,ut,ft,L,Gt),L.onAfterRender(j,tt,gt,ut,ft,Gt)}function Oi(L,tt,gt){tt.isScene!==!0&&(tt=K);let ut=it.get(L),ft=U.state.lights,Gt=U.state.shadowsArray,Nt=ft.state.version,Ht=Ut.getParameters(L,ft.state,Gt,tt,gt,U.state.lightProbeGridArray),Qt=Ut.getProgramCacheKey(Ht),ie=ut.programs;ut.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?tt.environment:null,ut.fog=tt.fog;let zt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;ut.envMap=Ct.get(L.envMap||ut.environment,zt),ut.envMapRotation=ut.environment!==null&&L.envMap===null?tt.environmentRotation:L.envMapRotation,ie===void 0&&(L.addEventListener("dispose",Tn),ie=new Map,ut.programs=ie);let de=ie.get(Qt);if(de!==void 0){if(ut.currentProgram===de&&ut.lightsStateVersion===Nt)return Ir(L,Ht),de}else Ht.uniforms=Ut.getUniforms(L),nt!==null&&L.isNodeMaterial&&nt.build(L,gt,Ht),L.onBeforeCompile(Ht,j),de=Ut.acquireProgram(Ht,Qt),ie.set(Qt,de),ut.uniforms=Ht.uniforms;let Jt=ut.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Jt.clippingPlanes=ne.uniform),Ir(L,Ht),ut.needsLights=Ds(L),ut.lightsStateVersion=Nt,ut.needsLights&&(Jt.ambientLightColor.value=ft.state.ambient,Jt.lightProbe.value=ft.state.probe,Jt.sunLights.value=ft.state.sun,Jt.sunLightShadows.value=ft.state.sunShadow,Jt.directionalLights.value=ft.state.directional,Jt.directionalLightShadows.value=ft.state.directionalShadow,Jt.spotLights.value=ft.state.spot,Jt.spotLightShadows.value=ft.state.spotShadow,Jt.rectAreaLights.value=ft.state.rectArea,Jt.ltc_1.value=ft.state.rectAreaLTC1,Jt.ltc_2.value=ft.state.rectAreaLTC2,Jt.pointLights.value=ft.state.point,Jt.pointLightShadows.value=ft.state.pointShadow,Jt.hemisphereLights.value=ft.state.hemi,Jt.sunShadowMatrix.value=ft.state.sunShadowMatrix,Jt.sunShadowCascade.value=ft.state.sunShadowCascade,Jt.directionalShadowMatrix.value=ft.state.directionalShadowMatrix,Jt.spotLightMatrix.value=ft.state.spotLightMatrix,Jt.spotLightMap.value=ft.state.spotLightMap,Jt.pointShadowMatrix.value=ft.state.pointShadowMatrix),ut.lightProbeGrid=U.state.lightProbeGridArray.length>0,ut.currentProgram=de,ut.uniformsList=null,de}function Cr(L){if(L.uniformsList===null){let tt=L.currentProgram.getUniforms();L.uniformsList=Ps.seqWithValue(tt.seq,L.uniforms)}return L.uniformsList}function Ir(L,tt){let gt=it.get(L);gt.outputColorSpace=tt.outputColorSpace,gt.batching=tt.batching,gt.batchingColor=tt.batchingColor,gt.instancing=tt.instancing,gt.instancingColor=tt.instancingColor,gt.instancingMorph=tt.instancingMorph,gt.skinning=tt.skinning,gt.morphTargets=tt.morphTargets,gt.morphNormals=tt.morphNormals,gt.morphColors=tt.morphColors,gt.morphTargetsCount=tt.morphTargetsCount,gt.numClippingPlanes=tt.numClippingPlanes,gt.numIntersection=tt.numClipIntersection,gt.vertexAlphas=tt.vertexAlphas,gt.vertexTangents=tt.vertexTangents,gt.toneMapping=tt.toneMapping}function Ls(L,tt){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;N.setFromMatrixPosition(tt.matrixWorld);for(let gt=0,ut=L.length;gt<ut;gt++){let ft=L[gt];if(ft.texture!==null&&ft.boundingBox.containsPoint(N))return ft}return null}function hi(L,tt,gt,ut,ft){tt.isScene!==!0&&(tt=K),pt.resetTextureUnits();let Gt=tt.fog,Nt=ut.isMeshStandardMaterial||ut.isMeshLambertMaterial||ut.isMeshPhongMaterial?tt.environment:null,Ht=vt===null?j.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Ie.workingColorSpace,Qt=ut.isMeshStandardMaterial||ut.isMeshLambertMaterial&&!ut.envMap||ut.isMeshPhongMaterial&&!ut.envMap,ie=Ct.get(ut.envMap||Nt,Qt),zt=ut.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,de=!!gt.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),Jt=!!gt.morphAttributes.position,Ne=!!gt.morphAttributes.normal,Xe=!!gt.morphAttributes.color,Pe=si;ut.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(Pe=j.toneMapping);let r=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,a=r!==void 0?r.length:0,l=it.get(ut),p=U.state.lights;if(Me===!0&&(Ce===!0||L!==St)){let Pt=L===St&&ut.id===dt;ne.setState(ut,L,Pt)}let _=!1;ut.version===l.__version?(l.needsLights&&l.lightsStateVersion!==p.state.version||l.outputColorSpace!==Ht||ft.isBatchedMesh&&l.batching===!1||!ft.isBatchedMesh&&l.batching===!0||ft.isBatchedMesh&&l.batchingColor===!0&&ft._colorsTexture===null||ft.isBatchedMesh&&l.batchingColor===!1&&ft._colorsTexture!==null||ft.isInstancedMesh&&l.instancing===!1||!ft.isInstancedMesh&&l.instancing===!0||ft.isSkinnedMesh&&l.skinning===!1||!ft.isSkinnedMesh&&l.skinning===!0||ft.isInstancedMesh&&l.instancingColor===!0&&ft.instanceColor===null||ft.isInstancedMesh&&l.instancingColor===!1&&ft.instanceColor!==null||ft.isInstancedMesh&&l.instancingMorph===!0&&ft.morphTexture===null||ft.isInstancedMesh&&l.instancingMorph===!1&&ft.morphTexture!==null||l.envMap!==ie||ut.fog===!0&&l.fog!==Gt||l.numClippingPlanes!==void 0&&(l.numClippingPlanes!==ne.numPlanes||l.numIntersection!==ne.numIntersection)||l.vertexAlphas!==zt||l.vertexTangents!==de||l.morphTargets!==Jt||l.morphNormals!==Ne||l.morphColors!==Xe||l.toneMapping!==Pe||l.morphTargetsCount!==a||!!l.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(_=!0):(_=!0,l.__version=ut.version);let A=l.currentProgram;_===!0&&(A=Oi(ut,tt,ft),nt&&ut.isNodeMaterial&&nt.onUpdateProgram(ut,A,l));let D=!1,$=!1,J=!1,lt=A.getUniforms(),Et=l.uniforms;if(T.useProgram(A.program)&&(D=!0,$=!0,J=!0),ut.id!==dt&&(dt=ut.id,$=!0),l.needsLights){let Pt=Ls(U.state.lightProbeGridArray,ft);l.lightProbeGrid!==Pt&&(l.lightProbeGrid=Pt,$=!0)}if(D||St!==L){T.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),lt.setValue(k,"projectionMatrix",L.projectionMatrix),lt.setValue(k,"viewMatrix",L.matrixWorldInverse);let re=lt.map.cameraPosition;re!==void 0&&re.setValue(k,De.setFromMatrixPosition(L.matrixWorld)),O.logarithmicDepthBuffer&&lt.setValue(k,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&lt.setValue(k,"isOrthographic",L.isOrthographicCamera===!0),St!==L&&(St=L,$=!0,J=!0)}if(l.needsLights&&(p.state.sunShadowMap.length>0&&lt.setValue(k,"sunShadowMap",p.state.sunShadowMap,pt),p.state.directionalShadowMap.length>0&&lt.setValue(k,"directionalShadowMap",p.state.directionalShadowMap,pt),p.state.spotShadowMap.length>0&&lt.setValue(k,"spotShadowMap",p.state.spotShadowMap,pt),p.state.pointShadowMap.length>0&&lt.setValue(k,"pointShadowMap",p.state.pointShadowMap,pt)),ft.isSkinnedMesh){lt.setOptional(k,ft,"bindMatrix"),lt.setOptional(k,ft,"bindMatrixInverse");let Pt=ft.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),lt.setValue(k,"boneTexture",Pt.boneTexture,pt))}ft.isBatchedMesh&&(lt.setOptional(k,ft,"batchingTexture"),lt.setValue(k,"batchingTexture",ft._matricesTexture,pt),lt.setOptional(k,ft,"batchingIdTexture"),lt.setValue(k,"batchingIdTexture",ft._indirectTexture,pt),lt.setOptional(k,ft,"batchingColorTexture"),ft._colorsTexture!==null&&lt.setValue(k,"batchingColorTexture",ft._colorsTexture,pt));let bt=gt.morphAttributes;if((bt.position!==void 0||bt.normal!==void 0||bt.color!==void 0)&&rt.update(ft,gt,A),($||l.receiveShadow!==ft.receiveShadow)&&(l.receiveShadow=ft.receiveShadow,lt.setValue(k,"receiveShadow",ft.receiveShadow)),(ut.isMeshStandardMaterial||ut.isMeshLambertMaterial||ut.isMeshPhongMaterial)&&ut.envMap===null&&tt.environment!==null&&(Et.envMapIntensity.value=tt.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=kx()),$){if(lt.setValue(k,"toneMappingExposure",j.toneMappingExposure),l.needsLights&&Ns(Et,J),Gt&&ut.fog===!0&&jt.refreshFogUniforms(Et,Gt),jt.refreshMaterialUniforms(Et,ut,wt,yt,U.state.transmissionRenderTarget[L.id]),l.needsLights&&l.lightProbeGrid){let Pt=l.lightProbeGrid;Et.probesSH.value=Pt.texture,Et.probesMin.value.copy(Pt.boundingBox.min),Et.probesMax.value.copy(Pt.boundingBox.max),Et.probesResolution.value.copy(Pt.resolution)}Ps.upload(k,Cr(l),Et,pt)}if(ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(Ps.upload(k,Cr(l),Et,pt),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&lt.setValue(k,"center",ft.center),lt.setValue(k,"modelViewMatrix",ft.modelViewMatrix),lt.setValue(k,"normalMatrix",ft.normalMatrix),lt.setValue(k,"modelMatrix",ft.matrixWorld),ut.uniformsGroups!==void 0){let Pt=ut.uniformsGroups;for(let re=0,_e=Pt.length;re<_e;re++){let we=Pt[re];At.update(we,A),At.bind(we,A)}}return A}function Ns(L,tt){L.ambientLightColor.needsUpdate=tt,L.lightProbe.needsUpdate=tt,L.sunLights.needsUpdate=tt,L.sunLightShadows.needsUpdate=tt,L.directionalLights.needsUpdate=tt,L.directionalLightShadows.needsUpdate=tt,L.pointLights.needsUpdate=tt,L.pointLightShadows.needsUpdate=tt,L.spotLights.needsUpdate=tt,L.spotLightShadows.needsUpdate=tt,L.rectAreaLights.needsUpdate=tt,L.hemisphereLights.needsUpdate=tt}function Ds(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return st},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return vt},this.setRenderTargetTextures=function(L,tt,gt){let ut=it.get(L);ut.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),it.get(L.texture).__webglTexture=tt,it.get(L.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:gt,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,tt){let gt=it.get(L);gt.__webglFramebuffer=tt,gt.__useDefaultFramebuffer=tt===void 0},this.setRenderTarget=function(L,tt=0,gt=0){vt=L,st=tt,G=gt;let ut=null,ft=!1,Gt=!1;if(L){let Ht=it.get(L);if(Ht.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(k.FRAMEBUFFER,Ht.__webglFramebuffer),_t.copy(L.viewport),Xt.copy(L.scissor),$t=L.scissorTest,T.viewport(_t),T.scissor(Xt),T.setScissorTest($t),dt=-1;return}else if(Ht.__webglFramebuffer===void 0)pt.setupRenderTarget(L);else if(Ht.__hasExternalTextures)pt.rebindTextures(L,it.get(L.texture).__webglTexture,it.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let zt=L.depthTexture;if(Ht.__boundDepthTexture!==zt){if(zt!==null&&it.has(zt)&&(L.width!==zt.image.width||L.height!==zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(L)}}let Qt=L.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Gt=!0);let ie=it.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ie[tt])?ut=ie[tt][gt]:ut=ie[tt],ft=!0):L.samples>0&&pt.useMultisampledRTT(L)===!1?ut=it.get(L).__webglMultisampledFramebuffer:Array.isArray(ie)?ut=ie[gt]:ut=ie,_t.copy(L.viewport),Xt.copy(L.scissor),$t=L.scissorTest}else _t.copy(Ot).multiplyScalar(wt).floor(),Xt.copy(me).multiplyScalar(wt).floor(),$t=Je;if(gt!==0&&(ut=ct),T.bindFramebuffer(k.FRAMEBUFFER,ut)&&T.drawBuffers(L,ut),T.viewport(_t),T.scissor(Xt),T.setScissorTest($t),ft){let Ht=it.get(L.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ht.__webglTexture,gt)}else if(Gt){let Ht=tt;for(let Qt=0;Qt<L.textures.length;Qt++){let ie=it.get(L.textures[Qt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Qt,ie.__webglTexture,gt,Ht)}}else if(L!==null&&gt!==0){let Ht=it.get(L.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ht.__webglTexture,gt)}dt=-1};function Rr(L){let tt=it.get(L);return(tt.__readFormat!==L.format||tt.__readType!==L.type)&&(tt.__readFormat=L.format,tt.__readType=L.type,tt.__formatReadable=O.textureFormatReadable(L.format),tt.__typeReadable=O.textureTypeReadable(L.type)),tt}this.readRenderTargetPixels=function(L,tt,gt,ut,ft,Gt,Nt,Ht=0){if(!(L&&L.isWebGLRenderTarget)){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=it.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Nt!==void 0&&(Qt=Qt[Nt]),Qt){T.bindFramebuffer(k.FRAMEBUFFER,Qt);try{let ie=L.textures[Ht],zt=ie.format,de=ie.type;L.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ht);let Jt=Rr(ie);if(Jt.__formatReadable===!1){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Jt.__typeReadable===!1){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=L.width-ut&&gt>=0&&gt<=L.height-ft&&k.readPixels(tt,gt,ut,ft,kt.convert(zt),kt.convert(de),Gt)}finally{let ie=vt!==null?it.get(vt).__webglFramebuffer:null;T.bindFramebuffer(k.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(L,tt,gt,ut,ft,Gt,Nt,Ht=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=it.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Nt!==void 0&&(Qt=Qt[Nt]),Qt)if(tt>=0&&tt<=L.width-ut&&gt>=0&&gt<=L.height-ft){T.bindFramebuffer(k.FRAMEBUFFER,Qt);let ie=L.textures[Ht],zt=ie.format,de=ie.type;L.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ht);let Jt=Rr(ie);if(Jt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Jt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ne=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ne),k.bufferData(k.PIXEL_PACK_BUFFER,Gt.byteLength,k.STREAM_READ),k.readPixels(tt,gt,ut,ft,kt.convert(zt),kt.convert(de),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Xe=vt!==null?it.get(vt).__webglFramebuffer:null;T.bindFramebuffer(k.FRAMEBUFFER,Xe);let Pe=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await td(k,Pe,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ne),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Gt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Ne),k.deleteSync(Pe),Gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,tt=null,gt=0){let ut=Math.pow(2,-gt),ft=Math.floor(L.image.width*ut),Gt=Math.floor(L.image.height*ut),Nt=tt!==null?tt.x:0,Ht=tt!==null?tt.y:0;pt.setTexture2D(L,0),k.copyTexSubImage2D(k.TEXTURE_2D,gt,0,0,Nt,Ht,ft,Gt),T.unbindTexture()},this.copyTextureToTexture=function(L,tt,gt=null,ut=null,ft=0,Gt=0){let Nt,Ht,Qt,ie,zt,de,Jt,Ne,Xe,Pe=L.isCompressedTexture?L.mipmaps[Gt]:L.image;if(gt!==null)Nt=gt.max.x-gt.min.x,Ht=gt.max.y-gt.min.y,Qt=gt.isBox3?gt.max.z-gt.min.z:1,ie=gt.min.x,zt=gt.min.y,de=gt.isBox3?gt.min.z:0;else{let Et=Math.pow(2,-ft);Nt=Math.floor(Pe.width*Et),Ht=Math.floor(Pe.height*Et),L.isDataArrayTexture?Qt=Pe.depth:L.isData3DTexture?Qt=Math.floor(Pe.depth*Et):Qt=1,ie=0,zt=0,de=0}ut!==null?(Jt=ut.x,Ne=ut.y,Xe=ut.z):(Jt=0,Ne=0,Xe=0);let r=kt.convert(tt.format),a=kt.convert(tt.type),l;tt.isData3DTexture?(pt.setTexture3D(tt,0),l=k.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(pt.setTexture2DArray(tt,0),l=k.TEXTURE_2D_ARRAY):(pt.setTexture2D(tt,0),l=k.TEXTURE_2D),T.activeTexture(k.TEXTURE0),T.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,tt.flipY),T.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),T.pixelStorei(k.UNPACK_ALIGNMENT,tt.unpackAlignment);let p=T.getParameter(k.UNPACK_ROW_LENGTH),_=T.getParameter(k.UNPACK_IMAGE_HEIGHT),A=T.getParameter(k.UNPACK_SKIP_PIXELS),D=T.getParameter(k.UNPACK_SKIP_ROWS),$=T.getParameter(k.UNPACK_SKIP_IMAGES);T.pixelStorei(k.UNPACK_ROW_LENGTH,Pe.width),T.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Pe.height),T.pixelStorei(k.UNPACK_SKIP_PIXELS,ie),T.pixelStorei(k.UNPACK_SKIP_ROWS,zt),T.pixelStorei(k.UNPACK_SKIP_IMAGES,de);let J=L.isDataArrayTexture||L.isData3DTexture,lt=tt.isDataArrayTexture||tt.isData3DTexture;if(L.isDepthTexture){let Et=it.get(L),bt=it.get(tt),Pt=it.get(Et.__renderTarget),re=it.get(bt.__renderTarget);T.bindFramebuffer(k.READ_FRAMEBUFFER,Pt.__webglFramebuffer),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let _e=0;_e<Qt;_e++)J&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,it.get(L).__webglTexture,ft,de+_e),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,it.get(tt).__webglTexture,Gt,Xe+_e)),k.blitFramebuffer(ie,zt,Nt,Ht,Jt,Ne,Nt,Ht,k.DEPTH_BUFFER_BIT,k.NEAREST);T.bindFramebuffer(k.READ_FRAMEBUFFER,null),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(ft!==0||L.isRenderTargetTexture||it.has(L)){let Et=it.get(L),bt=it.get(tt);T.bindFramebuffer(k.READ_FRAMEBUFFER,z),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,q);for(let Pt=0;Pt<Qt;Pt++)J?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Et.__webglTexture,ft,de+Pt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Et.__webglTexture,ft),lt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,bt.__webglTexture,Gt,Xe+Pt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,bt.__webglTexture,Gt),ft!==0?k.blitFramebuffer(ie,zt,Nt,Ht,Jt,Ne,Nt,Ht,k.COLOR_BUFFER_BIT,k.NEAREST):lt?k.copyTexSubImage3D(l,Gt,Jt,Ne,Xe+Pt,ie,zt,Nt,Ht):k.copyTexSubImage2D(l,Gt,Jt,Ne,ie,zt,Nt,Ht);T.bindFramebuffer(k.READ_FRAMEBUFFER,null),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else lt?L.isDataTexture||L.isData3DTexture?k.texSubImage3D(l,Gt,Jt,Ne,Xe,Nt,Ht,Qt,r,a,Pe.data):tt.isCompressedArrayTexture?k.compressedTexSubImage3D(l,Gt,Jt,Ne,Xe,Nt,Ht,Qt,r,Pe.data):k.texSubImage3D(l,Gt,Jt,Ne,Xe,Nt,Ht,Qt,r,a,Pe):L.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Gt,Jt,Ne,Nt,Ht,r,a,Pe.data):L.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Gt,Jt,Ne,Pe.width,Pe.height,r,Pe.data):k.texSubImage2D(k.TEXTURE_2D,Gt,Jt,Ne,Nt,Ht,r,a,Pe);T.pixelStorei(k.UNPACK_ROW_LENGTH,p),T.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_),T.pixelStorei(k.UNPACK_SKIP_PIXELS,A),T.pixelStorei(k.UNPACK_SKIP_ROWS,D),T.pixelStorei(k.UNPACK_SKIP_IMAGES,$),Gt===0&&tt.generateMipmaps&&k.generateMipmap(l),T.unbindTexture()},this.initRenderTarget=function(L){it.get(L).__webglFramebuffer===void 0&&pt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?pt.setTextureCube(L,0):L.isData3DTexture?pt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?pt.setTexture2DArray(L,0):pt.setTexture2D(L,0),T.unbindTexture()},this.resetState=function(){st=0,G=0,vt=null,T.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ie._getUnpackColorSpace()}}});function Hx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Gx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Xx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ud),this.state=Ve.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Wx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ve.DOLLY;break;case tr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ve.ROTATE}break;case tr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ve.PAN}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(Kh)}function Yx(n){switch(this.state){case Ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function qx(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ve.NONE||(n.preventDefault(),this.dispatchEvent(Kh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Ud))}function $x(n){this.enabled!==!1&&this._handleKeyDown(n)}function Zx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case er.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ve.TOUCH_ROTATE;break;case er.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ve.TOUCH_PAN;break;default:this.state=Ve.NONE}break;case 2:switch(this.touches.TWO){case er.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ve.TOUCH_DOLLY_PAN;break;case er.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ve.TOUCH_DOLLY_ROTATE;break;default:this.state=Ve.NONE}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(Kh)}function Jx(n){switch(this._trackPointer(n),this.state){case Ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ve.NONE}}function jx(n){this.enabled!==!1&&n.preventDefault()}function Kx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Od,Kh,Ud,tc,Fd,Vx,sn,Nn,Ve,jh,ec,Bd=Pn(()=>{Ql();Od={type:"change"},Kh={type:"start"},Ud={type:"end"},tc=new qi,Fd=new Un,Vx=Math.cos(70*Ih.DEG2RAD),sn=new ot,Nn=2*Math.PI,Ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jh=1e-6,ec=class extends bo{constructor(t,e=null){super(t,e),this.state=Ve.NONE,this.target=new ot,this.cursor=new ot,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:tr.ROTATE,MIDDLE:tr.DOLLY,RIGHT:tr.PAN},this.touches={ONE:er.ROTATE,TWO:er.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ot,this._lastQuaternion=new Bn,this._lastTargetPosition=new ot,this._quat=new Bn().setFromUnitVectors(t.up,new ot(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xs,this._sphericalDelta=new xs,this._scale=1,this._panOffset=new ot,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new ot,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Gx.bind(this),this._onPointerDown=Hx.bind(this),this._onPointerUp=Xx.bind(this),this._onContextMenu=jx.bind(this),this._onMouseWheel=qx.bind(this),this._onKeyDown=$x.bind(this),this._onTouchStart=Zx.bind(this),this._onTouchMove=Jx.bind(this),this._onMouseDown=Wx.bind(this),this._onMouseMove=Yx.bind(this),this._interceptControlDown=Kx.bind(this),this._interceptControlUp=Qx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ve.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Od),this.update(),this.state=Ve.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;sn.copy(e).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===Ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Nn:i>Math.PI&&(i-=Nn),s<-Math.PI?s+=Nn:s>Math.PI&&(s-=Nn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=c!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),e.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){let u=sn.length();c=this._clampDistance(u*this._scale);let f=u-c;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),o=!!f}else if(this.object.isOrthographicCamera){let u=new ot(this._mouse.x,this._mouse.y,0);u.unproject(this.object);let f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=f!==this.object.zoom;let d=new ot(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(u),this.object.updateMatrixWorld(),c=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(tc.origin.copy(this.object.position),tc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(tc.direction))<Vx?this.object.lookAt(this.target):(Fd.setFromNormalAndCoplanarPoint(this.object.up,this.target),tc.intersectPlane(Fd,this.target))))}else if(this.object.isOrthographicCamera){let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>jh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jh||this._lastTargetPosition.distanceToSquared(this.target)>jh?(this.dispatchEvent(Od),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Nn/60*this.autoRotateSpeed*t:Nn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){sn.setFromMatrixColumn(e,0),sn.multiplyScalar(-t),this._panOffset.add(sn)}_panUp(t,e){this.screenSpacePanning===!0?sn.setFromMatrixColumn(e,1):(sn.setFromMatrixColumn(e,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(t),this._panOffset.add(sn)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;sn.copy(s).sub(this.target);let o=sn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,o=e-i.top,c=i.width,u=i.height;this._mouse.x=s/c*2-1,this._mouse.y=-(o/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let c=(t.pageX+e.x)*.5,u=(t.pageY+e.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new le,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});function kd(n,t,e){n.onBeforeCompile=i=>{i.uniforms.uCut={value:t-.05},i.uniforms.uBottom={value:t},i.vertexShader=`varying float vZ;
uniform float uBottom;
`+i.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
`+(e?"objectNormal = vec3(0.0, 0.0, -1.0);":"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vZ = transformed.z;
`+(e?"transformed.z = uBottom;":"")),i.fragmentShader=`varying float vZ;
uniform float uCut;
`+i.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if (vZ < uCut) discard;`)},n.customProgramCacheKey=()=>`through-${e}`}function zd(n,t,e){let i=document.createElement("canvas");i.width=256,i.height=128;let s=i.getContext("2d");s.font="600 84px Inter, system-ui, sans-serif",s.fillStyle="#"+new ye(t).getHexString(),s.textAlign="center",s.textBaseline="middle",s.fillText(n,128,64);let o=new uo(i);o.colorSpace=bn;let c=new co(new ps({map:o,depthTest:!1,transparent:!0}));return c.scale.set(e*2,e,1),c.renderOrder=6,c}var qn,Is,tS,nc,Vd=Pn(()=>{Ql();Bd();qn={face:"#93a2b4",pocket:"#1abc9c",hole:"#4ea1ff",drill:"#4ea1ff",step:"#2ecc71",corners:"#48d1b4",cutout:"#a78bfa"},Is={softwood:"#d8b38a",hardwood:"#9c6b45",mdf:"#b59672",plastic:"#d9e2ea",aluminum:"#b9c1c9",foam:"#c7b8a5"};tS=(n,t)=>n.some(e=>e.key===t);nc=class{constructor(){this.el=document.createElement("div"),this.el.className="ncc-viewport",this.renderer=new Jl({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.el.appendChild(this.renderer.domElement),this.scene=new so,this.camera=new _n(35,1,.1,1e4),this.camera.up.set(0,0,1),this.controls=new ec(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.addEventListener("start",()=>{this.userMoved=!0}),this.scene.add(new yo(16777215,4478310,1.6));let t=new ys(16777215,1.6);t.position.set(-.6,-1,1.6),this.scene.add(t);let e=new ys(16777215,.5);e.position.set(1,.6,.4),this.scene.add(e),this.content=new ei,this.scene.add(this.content),this.onFrame=null,this.alive=!0,this.resize=new ResizeObserver(()=>this.fit()),this.resize.observe(this.el);let i=s=>{if(this.alive){if(!this.el.isConnected&&this.detachedSince&&s-this.detachedSince>3e3&&!document.querySelector(".ncc-wrapper")){this.dispose();return}this.el.isConnected?this.detachedSince=0:this.detachedSince||=s,this.onFrame&&this.onFrame(s),this.controls.update(),this.el.isConnected&&this.renderer.render(this.scene,this.camera),requestAnimationFrame(i)}};requestAnimationFrame(i),this.setupPicking()}fit(){let t=this.el.clientWidth,e=this.el.clientHeight;!t||!e||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.userMoved||this.refit())}clear(){for(let t of[...this.content.children])this.content.remove(t),t.traverse(e=>{e.geometry?.dispose(),e.material&&[].concat(e.material).forEach(i=>i.dispose())});this.pickMesh=null,this.markers=null}frame(t,e,i=.08){this.fitBox=[t,e,i],this.userMoved=!1,this.refit()}refit(){if(!this.fitBox)return;let[t,e,i]=this.fitBox,s=new ot((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),o=Math.max(e[0]-t[0],e[1]-t[1],e[2]-t[2],.001),c=new ot(-.45,-.8,.75).normalize(),u=[];for(let S of[t[0],e[0]])for(let g of[t[1],e[1]])for(let b of[t[2],e[2]])u.push(new ot(S,g,b));let f=s.clone(),d=o*2,v=()=>{this.camera.position.copy(f).addScaledVector(c,d),this.camera.near=d/100,this.camera.far=d*100,this.camera.lookAt(f),this.camera.updateMatrixWorld(),this.camera.updateProjectionMatrix()};for(let S=0;S<8;S++){v();let g=1/0,b=-1/0,E=1/0,C=-1/0;for(let F of u){let U=F.clone().project(this.camera);g=Math.min(g,U.x),b=Math.max(b,U.x),E=Math.min(E,U.y),C=Math.max(C,U.y)}let M=Math.max((b-g)/2,(C-E)/2);if(!(M>0))break;let x=d*Math.tan(this.camera.fov*Math.PI/360),B=x*this.camera.aspect,W=new ot().setFromMatrixColumn(this.camera.matrixWorld,0),N=new ot().setFromMatrixColumn(this.camera.matrixWorld,1);f.addScaledVector(W,(g+b)/2*B).addScaledVector(N,(E+C)/2*x),d*=M/(1-i)}v(),this.controls.target.copy(f),this.controls.update()}showPart(t,e=[]){this.clear();let i=new Ze;i.setAttribute("position",new $e(t.positions,3)),i.setIndex(new $e(t.indices,1)),i.computeVertexNormals();let s=new ze(i,new Rn({color:9348283,metalness:.15,roughness:.55,side:vn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));this.content.add(s),this.pickMesh=s;let o=new yr(new _s(i,25),new ri({color:2832972,transparent:!0,opacity:.55}));this.content.add(o);for(let u of e)this.addLoops(u.loops,u.z,u.color,u.dashed,u.opacity);i.computeBoundingBox();let c=i.boundingBox;this.keepCamera||this.frame(c.min.toArray(),c.max.toArray())}addLoops(t,e,i,s,o=.95){for(let c of t){let u=c.map(([S,g])=>new ot(S,g,e)),f=new Ze().setFromPoints([...u,u[0]]),d=s?new go({color:i,dashSize:2,gapSize:1.5,transparent:!0,opacity:o,depthTest:!1}):new ri({color:i,transparent:!0,opacity:o,depthTest:!1}),v=new vr(f,d);s&&v.computeLineDistances(),v.renderOrder=2,this.content.add(v)}}setupPicking(){let t=this.renderer.domElement,e=null;t.addEventListener("pointerdown",i=>{e=[i.clientX,i.clientY]}),t.addEventListener("pointerup",i=>{if(!e||Math.hypot(i.clientX-e[0],i.clientY-e[1])>4)return;let s=t.getBoundingClientRect(),o=new So;if(o.setFromCamera(new le((i.clientX-s.left)/s.width*2-1,-((i.clientY-s.top)/s.height)*2+1),this.camera),this.markers?.length&&this.onMarker){let f=o.intersectObjects(this.markers)[0];if(f){this.onMarker(f.object.userData.key);return}}if(!this.pickMesh||!this.onPick)return;let c=o.intersectObject(this.pickMesh)[0];if(!c||!c.face)return;let u=c.face.normal.clone();u.dot(o.ray.direction)>0&&u.negate(),this.onPick([u.x,u.y,u.z])})}showZero({stock:t,part:e,points:i,selected:s,zFace:o,color:c,accent:u="#4c6ef5"}){this.clear();let f=t.maxX-t.minX,d=t.maxY-t.minY,v=t.top-t.bottom,S=Math.max(f,d,v),g=new Zi(f,d,v);g.translate((t.minX+t.maxX)/2,(t.minY+t.maxY)/2,(t.top+t.bottom)/2);let b=new ze(g,new Rn({color:c,transparent:!0,opacity:.45,roughness:.9,depthWrite:!1}));if(b.renderOrder=2,this.content.add(b),this.content.add(new yr(new _s(g),new ri({color:new ye(c).multiplyScalar(.6)}))),e){let x=new Ze;x.setAttribute("position",new $e(e.positions,3)),x.setIndex(new $e(e.indices,1)),x.computeVertexNormals(),this.content.add(new ze(x,new Rn({color:9348283,metalness:.15,roughness:.55})))}let E=o==="bed"?t.bottom:t.top,C=S*.014;this.markers=[];for(let x of i){let B=x.key===s,W=new ze(new xr(B?C*1.3:C,24,16),new ii({color:B?u:16777215}));if(W.position.set(x.x,x.y,E),W.userData.key=x.key,W.renderOrder=4,W.material.depthTest=!1,!B){let F=new ze(new xr(C*1.25,24,16),new ii({color:6187893,depthTest:!1}));F.renderOrder=3,W.add(F)}let N=new ze(new xr(C*3.5,12,8),new ii({visible:!1}));if(N.userData.key=x.key,W.add(N),this.markers.push(N),this.content.add(W),B){let F=new ze(new mo(C*1.6,C*2,40),new ii({color:u,transparent:!0,depthTest:!1,side:vn}));F.position.copy(W.position),F.renderOrder=4,this.content.add(F),this.pulse=F;let U=S*.3;for(let[Y,P,V]of[[[1,0,0],15158332,"X"],[[0,1,0],3066993,"Y"],[[0,0,1],5147903,"Z"]]){let j=new Mo(new ot(...Y),W.position,U,P,U*.13,U*.055);j.line.material.depthTest=!1,j.cone.material.depthTest=!1,j.renderOrder=5,j.line.renderOrder=5,j.cone.renderOrder=5,this.content.add(j);let Q=zd(V,P,S*.05);Q.position.copy(W.position).add(new ot(...Y).multiplyScalar(U*1.18)),this.content.add(Q)}}}let M=zd("Front",9675444,S*.04);M.position.set((t.minX+t.maxX)/2,t.minY-S*.08,t.bottom),this.content.add(M),this.keepCamera||this.frame([t.minX,t.minY,t.bottom],[t.maxX,t.maxY,t.top]),tS(i,s)||(this.pulse=null),this.onFrame=x=>{if(!this.pulse)return;let B=x%1600/1600;this.pulse.scale.setScalar(1+B*1.6),this.pulse.material.opacity=.8*(1-B),this.pulse.lookAt(this.camera.position)}}showStock(t,e,i){this.clear(),this.keepCamera=!1;let s=t.nx,o=t.ny,c=s*o,u=new Float32Array(c*3),f=new Float32Array(c*3),d=new ye(e);for(let x=0;x<o;x++)for(let B=0;B<s;B++){let W=x*s+B;u[W*3]=t.x0+B*t.cell,u[W*3+1]=t.y0+x*t.cell,u[W*3+2]=t.h[W],f[W*3]=d.r,f[W*3+1]=d.g,f[W*3+2]=d.b}let v=new Uint32Array((s-1)*(o-1)*6),S=0;for(let x=0;x<o-1;x++)for(let B=0;B<s-1;B++){let W=x*s+B,N=W+1,F=W+s,U=F+1;v[S++]=W,v[S++]=N,v[S++]=U,v[S++]=W,v[S++]=U,v[S++]=F}let g=new Ze;g.setAttribute("position",new $e(u,3).setUsage(Es)),g.setAttribute("color",new $e(f,3).setUsage(Es));let b=new Float32Array(c*3);for(let x=0;x<c;x++)b[x*3+2]=1;g.setAttribute("normal",new $e(b,3).setUsage(Es)),g.setIndex(new $e(v,1));let E=new Rn({vertexColors:!0,flatShading:!1,roughness:.8,metalness:e===Is.aluminum?.5:.05,side:vn});kd(E,t.bottom,!1);let C=new ze(g,E);this.content.add(C),this.stock={hm:t,geo:g,base:d,sides:this.makeSides(t,d)};let M=new Rn({color:d.clone().multiplyScalar(.7),roughness:.9,side:vn});if(kd(M,t.bottom,!0),this.content.add(new ze(g,M)),i){let x=new Ze;x.setAttribute("position",new $e(i.positions,3)),x.setIndex(new $e(i.indices,1)),x.computeVertexNormals(),this.partGhost=new ze(x,new Rn({color:5153279,transparent:!0,opacity:.25,depthWrite:!1})),this.partGhost.visible=!1,this.content.add(this.partGhost)}this.tool=new ei,this.content.add(this.tool),this.frame([t.x0,t.y0,t.bottom],[t.x0+(s-1)*t.cell,t.y0+(o-1)*t.cell,t.top])}makeSides(t,e){let i=[];for(let f=0;f<t.nx;f++)i.push(f);for(let f=1;f<t.ny;f++)i.push(f*t.nx+t.nx-1);for(let f=t.nx-2;f>=0;f--)i.push((t.ny-1)*t.nx+f);for(let f=t.ny-2;f>=0;f--)i.push(f*t.nx);let s=new Float32Array(i.length*6),o=[];for(let f=0;f<i.length;f++){let d=i[f],v=t.x0+d%t.nx*t.cell,S=t.y0+Math.floor(d/t.nx)*t.cell;if(s.set([v,S,t.h[d],v,S,t.bottom],f*6),f<i.length-1){let g=f*2;o.push(g,g+1,g+3,g,g+3,g+2)}}let c=new Ze;c.setAttribute("position",new $e(s,3).setUsage(Es)),c.setIndex(o);let u=new ze(c,new Rn({color:e.clone().multiplyScalar(.85),flatShading:!0,roughness:.85,side:vn}));return this.content.add(u),{g:c,edge:i}}refreshStock(t,e,i){let s=this.stock;if(!s||e<t)return;let{hm:o,geo:c,base:u}=s,f=o.nx,d=o.ny,v=o.h,S=c.attributes.position,g=c.attributes.color,b=c.attributes.normal,E=new ye,C=Math.max(0,t-1),M=Math.min(d-1,e+1);for(let U=C;U<=M;U++)for(let Y=0;Y<f;Y++){let P=U*f+Y,V=0,j=0;for(let nt=-1;nt<=1;nt++){let ct=U+nt;if(!(ct<0||ct>=d))for(let z=-1;z<=1;z++){let q=Y+z;if(q<0||q>=f)continue;let st=(z?1:2)*(nt?1:2);V+=v[ct*f+q]*st,j+=st}}S.array[P*3+2]=V/j;let Q=o.op[P];Q?(E.copy(u).lerp(i[Q-1],.28),E.multiplyScalar(.82+.18*Math.max(0,Math.min(1,(v[P]-o.bottom)/Math.max(1,o.top-o.bottom))))):E.copy(u),g.array[P*3]=E.r,g.array[P*3+1]=E.g,g.array[P*3+2]=E.b}let x=(U,Y)=>S.array[(Y*f+U)*3+2],B=Math.max(0,C-1),W=Math.min(d-1,M+1),N=2*o.cell;for(let U=B;U<=W;U++)for(let Y=0;Y<f;Y++){let P=U*f+Y,V=(x(Math.min(f-1,Y+1),U)-x(Math.max(0,Y-1),U))/N,j=(x(Y,Math.min(d-1,U+1))-x(Y,Math.max(0,U-1)))/N,Q=Math.hypot(V,j,1);b.array[P*3]=-V/Q,b.array[P*3+1]=-j/Q,b.array[P*3+2]=1/Q}S.clearUpdateRanges(),g.clearUpdateRanges(),b.clearUpdateRanges(),S.addUpdateRange(C*f*3,(M-C+1)*f*3),g.addUpdateRange(C*f*3,(M-C+1)*f*3),b.addUpdateRange(B*f*3,(W-B+1)*f*3),S.needsUpdate=!0,g.needsUpdate=!0,b.needsUpdate=!0;let F=s.sides.g.attributes.position;s.sides.edge.forEach((U,Y)=>{F.array[Y*6+2]=v[U]}),F.needsUpdate=!0}setTool(t,e){for(let d of[...this.tool.children])this.tool.remove(d),d.geometry.dispose(),d.material.dispose();let i=t.diameter/2,s=Math.max(t.fluteLength||0,Math.min(40,Math.max(e+3,t.diameter*2))),o=new Rn({color:14015457,metalness:.85,roughness:.3}),c;if(t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"){let d=i/Math.tan((t.kind==="drill"?118:60)*Math.PI/360);c=new ze(new gs(i,d,32),o),c.rotation.x=-Math.PI/2,c.position.z=d/2}else c=new ze(new Ji(i,i,s,32),o),c.rotation.x=Math.PI/2,c.position.z=s/2;let u=new ze(new Ji(Math.max(i,3.175),Math.max(i,3.175),22,32),new Rn({color:11187132,metalness:.8,roughness:.35}));u.rotation.x=Math.PI/2,u.position.z=s+11;let f=new ze(new Ji(Math.max(i,3.175)*3.2,Math.max(i,3.175)*2.6,18,40),new Rn({color:3884629,metalness:.6,roughness:.4}));f.rotation.x=Math.PI/2,f.position.z=s+22+9,this.tool.add(c,u,f)}moveTool(t,e,i){this.tool.position.set(t,e,i)}showPaths(t){this.paths&&(this.content.remove(this.paths),this.paths.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()})),this.paths=new ei;for(let e of t){let i=e.track;if(!i)continue;let s=[],o=[];for(let u=4;u<i.length;u+=4)(i[u+3]>0?s:o).push(i[u-4],i[u-3],i[u-2]+.02,i[u],i[u+1],i[u+2]+.02);let c=(u,f,d)=>{if(!u.length)return;let v=new Ze;v.setAttribute("position",new Ge(u,3));let S=new yr(v,new ri({color:f,transparent:!0,opacity:d}));S.renderOrder=3,this.paths.add(S)};c(s,qn[e.kind]||"#1abc9c",.75),c(o,"#93a2b4",.3)}this.content.add(this.paths)}dispose(){this.alive=!1,this.resize.disconnect(),this.clear(),this.controls.dispose(),this.renderer.dispose()}}});function nS(){return new Promise((n,t)=>{let e=indexedDB.open(eS,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)})}async function Hd(n,t){let e=await nS();return new Promise((i,s)=>{let o=e.transaction("kv",n),c=t(o.objectStore("kv"));o.oncomplete=()=>{e.close(),i(c?.result)},o.onerror=o.onabort=()=>{e.close(),s(o.error)}})}var eS,Gd,Xd,Wd=Pn(()=>{eS="nccam";Gd=n=>Hd("readonly",t=>t.get(n)).catch(()=>null),Xd=(n,t)=>Hd("readwrite",e=>e.put(t,n)).catch(()=>{})});var $d={};bm($d,{mountApp:()=>aS});function aS(n,t,e){let i={get:async K=>{let ht=await fetch(t.base+K);if(!ht.ok)throw new Error(`${K}: ${ht.status}`);return ht.json()},post:(K,ht)=>fetch(t.base+K,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ht)})},s={step:1,maxStep:1,fileName:"",loading:"",error:"",up:"top",analysis:null,part:null,tools:[],numbering:"slot",safeZ:null,connected:!1,limits:{},travel:null,job:null,plan:null,planning:!1,result:null,simChecks:null,toast:""},o=new nc,c=0;(async()=>{let[K,ht,at,k]=await Promise.all([i.get("/api/settings").catch(()=>({})),i.get("/api/tools").catch(()=>[]),i.get("/api/firmware").catch(()=>null),i.get("/api/server-state").catch(()=>null)]);s.numbering=K?.tool?.numbering==="toolId"?"toolId":"slot";let It=Number(K?.safeZHeight);s.safeZ=Number.isFinite(It)?It:null,s.tools=Tu(Array.isArray(ht)?ht:ht?.tools);let Kt=at?.settings||{},O=H=>{let it=parseFloat(Kt[H]?.value);return Number.isFinite(it)&&it>0?it:null};s.limits={maxRpm:O("30")||void 0,minRpm:O("31")||void 0,maxFeed:Math.min(O("110")||1/0,O("111")||1/0,1/0)},Number.isFinite(s.limits.maxFeed)||delete s.limits.maxFeed,s.maxRapid=Math.min(O("110")||5e3,O("111")||5e3),O("130")&&O("131")&&(s.travel={x:O("130"),y:O("131"),z:O("132")}),s.connected=!!k?.machineState?.connected,g();let T=await Gd("last");T?.bytes&&!s.part&&!s.loading&&u(null,T)})();async function u(K,ht=null){if(!K&&!ht)return;let at=ht?ht.name:K.name;s.fileName=at,s.loading=`Reading ${at}\u2026`,s.error="",s.plan=null,s.result=null,s.analysis=null,s.part=null,s.step=1,s.maxStep=1,g();try{let k=ht?ht.bytes:await K.arrayBuffer();s.bytes=k.slice(0);let It=await e("load",{bytes:k},[k]);if(s.sides=It.sides,ht?.upPath?.length){s.job=null;for(let Kt of ht.upPath)await f(Kt,!0);s.job={...Sc(s.analysis),...ht.job},await d()}else await f(It.best);S()}catch(k){s.error=k.message||String(k),s.fileName=""}s.loading="",g()}async function f(K,ht=!1){s.loading="Turning the part\u2026",g();let at=await e(Array.isArray(K)?"tilt":"orient",Array.isArray(K)?{normal:K}:{up:K});if(s.up=Array.isArray(K)?"custom":K,s.upPath=Array.isArray(K)?[...s.upPath||[],K]:[K],ht){s.part={positions:at.positions,indices:at.indices},s.analysis=at.analysis,s.loading="";return}s.part={positions:at.positions,indices:at.indices},s.analysis=at.analysis;let k=s.job;s.job=Sc(at.analysis),k&&Object.assign(s.job,{material:k.material,finish:k.finish,zero:k.zero,tabs:k.tabs,stock:{...s.job.stock,fit:k.stock.fit,margin:k.stock.margin,extraTop:k.stock.extraTop}}),s.loading="",await d()}async function d(K=!1){if(!s.part)return;let ht=++c;s.planning=!0,K&&(s.result=null),g();try{let at=await e("plan",{tools:s.tools,job:s.job,limits:s.limits,paths:K,gcodeOptions:{name:s.fileName,numbering:s.numbering,safeZHeightMm:s.safeZ},timing:{maxRapid:s.maxRapid||5e3}});if(ht!==c)return;s.plan=at.plan,S(),K&&(s.result=at,s.simChecks=null)}catch(at){ht===c&&(s.error=at.message||String(at))}ht===c&&(s.planning=!1,g())}let v=null;function S(){!s.bytes||!s.job||(clearTimeout(v),v=setTimeout(()=>Xd("last",{name:s.fileName,bytes:s.bytes,upPath:s.upPath,job:s.job,savedAt:Date.now()}),400))}function g(){if(!n.isConnected)return;let K=n.querySelector("[data-keep-scroll]"),ht=K?K.scrollTop:0,at=s.step,k=["Drop a STEP file. ncCAM finds the pockets, holes and outline for you.","Pick the material. ncCAM sets the speeds, feeds and depth of each pass.","Tools are picked from your Tool Library. Change any of them, or just continue.","Watch the cut play through. When it looks right, load it."][at-1],It=[s.part?"Your part":"Open your part","What are you cutting it from?","Here\u2019s the plan",s.simChecks&&!s.simChecks.ok?"Check the warnings":"Ready to cut"][at-1];n.innerHTML=`
      <nav class="ncc-rail" aria-label="Steps">
        <div class="ncc-rail-head"><div class="ncc-eyebrow">Plugin</div><div class="ncc-rail-title">ncCAM<span class="ncc-beta">Beta</span></div><div class="ncc-rail-sub">STEP file to G-code</div></div>
        <div class="ncc-steps">${rS.map((T,H)=>{let it=H+1,pt=it===at?"on":it<s.maxStep||it<at?"done":"";return`<button class="ncc-step ${pt}" type="button" data-go="${it}" ${it<=s.maxStep?"":"disabled"}><span class="ncc-num">${pt==="done"?"\u2713":it}</span>${Ye(T)}</button>`}).join("")}</div>
        <button class="ncc-close" type="button" data-act="close">${cn.close}Close</button>
      </nav>
      <section class="ncc-main">
        <div class="ncc-top">
          <div><h1>${Ye(It)}</h1><p class="ncc-lede">${Ye(k)}</p></div>
          <div class="ncc-conn"><span class="ncc-dot ${s.connected?"ok":""}"></span>${s.connected?"Connected":"Not connected"}</div>
        </div>
        <div class="ncc-body ${at===3?"fixed":""}">${[E,F,Q,z][at-1]()}</div>
        <div class="ncc-foot">${b()}</div>
      </section>
      ${s.toast?`<div class="ncc-toast" role="status">${Ye(s.toast)}</div>`:""}`;let Kt=n.querySelector("[data-keep-scroll]");Kt&&(Kt.scrollTop=ht);let O=n.querySelector("[data-viewer]");if(O){O.replaceWith(o.el);let T=s.loading||at===4&&!s.result?`<div class="ncc-busy"><span class="ncc-spin"></span>${Ye(s.loading||"Making toolpaths\u2026")}</div>`:"";o.el.querySelectorAll(".ncc-busy, .ncc-overlay").forEach(H=>H.remove()),o.el.insertAdjacentHTML("beforeend",(at===1?B():at===4?dt():"")+T),o.fit(),at===1&&N(),at===2&&j(),at===3&&nt(),at===4&&s.result&&_t()}}function b(){let K=`<button class="ncc-back" type="button" data-go="${s.step-1}" ${s.step>1?"":"disabled"}>Back</button>`;if(s.step===1)return`${K}<button class="ncc-next" type="button" data-go="2" ${s.plan&&s.plan.ops.length&&!s.loading?"":"disabled"}>Next: Stock ${cn.next}</button>`;if(s.step===2)return`${K}<button class="ncc-next" type="button" data-go="3">Next: Operations ${cn.next}</button>`;if(s.step===3){let at=s.plan&&s.plan.ops.some(k=>k.enabled);return`${K}<button class="ncc-next" type="button" data-go="4" ${at&&!s.planning?"":"disabled"}>Make toolpaths ${cn.next}</button>`}let ht=s.simChecks&&!s.simChecks.ok;return`${K}${ht?'<span class="ncc-foot-note ncc-bad">Fix the problems above before loading.</span>':""}<button class="ncc-next" type="button" data-act="load" ${s.result&&s.simChecks&&!ht?"":"disabled"}>${cn.load}Load into ncSender</button>`}function E(){if(!s.part&&!s.loading)return`<div class="ncc-drop" data-drop>
        <div class="ncc-drop-icon">${cn.upload}</div>
        <h2>Drop a STEP file here</h2>
        <p>Export your part from Fusion, Onshape, FreeCAD or SolidWorks as <strong>.step</strong> or <strong>.stp</strong>. Millimetres or inches both work.</p>
        <label class="ncc-btn" style="display: inline-flex; align-items: center; gap: 8px">Open STEP file<input type="file" accept=".step,.stp,.STEP,.STP" data-file hidden></label>
        ${s.error?`<div class="ncc-hint bad" style="max-width: 520px">${cn.warn}<span>${Ye(s.error)}</span></div>`:""}
        ${s.tools.length?"":`<div class="ncc-hint" style="max-width: 520px">${cn.info}<span>Your Tool Library is empty. Add your end mills in Settings \u2192 Tool Library so ncCAM can pick them.</span></div>`}
      </div>`;let K=s.analysis;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div class="ncc-file">
          <div style="display: flex; align-items: center; gap: 12px; min-width: 0">
            <div class="ncc-drop-icon" style="width: 38px; height: 38px; border-radius: 10px">${cn.part}</div>
            <div style="min-width: 0"><div class="ncc-file-name">${Ye(s.fileName)}</div>
            <div class="ncc-file-sub ncc-mono">${K?`${Dn(K.size[0])} \xD7 ${Dn(K.size[1])} \xD7 ${Dn(K.size[2])} mm`:"&nbsp;"}</div></div>
          </div>
          <label class="ncc-btn muted" style="white-space: nowrap">Open another file<input type="file" accept=".step,.stp,.STEP,.STP" data-file hidden></label>
        </div>
        <div data-viewer></div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card">
          <div class="ncc-label">Which side faces up?</div>
          <div class="ncc-picks">${sS.map(([ht,at])=>{let k=!s.sides||s.sides[ht].reachable;return`<button class="ncc-pick ${s.up===ht?"sel":""}" type="button" data-up="${ht}" ${k?"":"disabled"} ${k?"":`title="With the ${at.toLowerCase()} up, some faces point down and the tool can\u2019t reach them"`}>${fn(oS[ht],24,'stroke-width="1.8"')}${at}${k?"":"<small>Can\u2019t reach</small>"}</button>`}).join("")}</div>
          <div class="ncc-row-sub">Or click a flat face on the model to put it on top.</div>
        </div>
        ${C()}
        ${x(!0)}
      </div>`}function C(){if(!s.plan)return`<div class="ncc-card"><div class="ncc-label">Found in this part</div><div class="ncc-row-sub">${s.planning?"Looking\u2026":""}</div></div>`;let K=new Map;for(let at of s.plan.ops.filter(k=>k.kind!=="face"&&k.kind!=="corners")){let k=M(at),It=K.get(k)||{o:at,name:k,n:0};It.n+=at.count||1,K.set(k,It)}let ht=at=>at.n<2?at.name:at.name.replace(/^(Pocket|Step), /,(k,It)=>`${at.n} ${It.toLowerCase()}s, `);return`<div class="ncc-card"><div class="ncc-label">Found in this part</div><div class="ncc-found">${[...K.values()].map(at=>`<div class="ncc-row"><span style="display: flex; align-items: center; gap: 8px"><span class="ncc-swatch" style="background: ${qn[at.o.kind]}"></span>${Ye(ht(at))}</span><span class="ncc-ok">\u2713</span></div>`).join("")||'<div class="ncc-row-sub">Nothing to cut from this side.</div>'}</div></div>`}function M(K){let ht=K.detail.replace(/ · spiral$/,"");return K.kind==="cutout"?`Outline, ${Dn(K.zTop)} mm cut-out`:K.kind==="hole"||K.kind==="drill"?`${K.centers.length>1?`${K.centers.length} holes`:"Hole"}, ${ht}`:K.kind==="step"?`Step, ${ht}`:`Pocket, ${ht.split(" \xB7 ").pop()}`}function x(K){if(!s.plan)return"";let ht=s.plan.warnings.filter(at=>!K||at.kind==="undercut"||at.kind==="sloped"||at.kind==="edges");return!ht.length&&K?`<div class="ncc-hint">${cn.info}<span>Everything can be cut from the top in one setup.</span></div>`:ht.map(at=>`<div class="ncc-hint ${at.kind==="undercut"||at.kind==="notool"?"bad":""}">${at.kind==="undercut"||at.kind==="notool"?cn.warn:cn.info}<span>${Ye(at.text)}</span></div>`).join("")}function B(){if(!s.plan)return"";let K=[...new Set(s.plan.ops.filter(at=>at.kind!=="face"&&at.kind!=="corners").map(at=>at.kind))],ht={pocket:"Pockets",hole:"Holes",drill:"Holes",step:"Steps",cutout:"Outline"};return`<div class="ncc-overlay tr">${K.map(at=>`<span class="ncc-chip"><span class="ncc-swatch" style="background: ${qn[at]}"></span>${ht[at]}</span>`).join("")}</div>
      <div class="ncc-overlay bl"><span class="ncc-chip">Drag to rotate</span><span class="ncc-chip">Scroll to zoom</span><span class="ncc-chip">Click a face to put it on top</span></div>`}let W=null;function N(){if(!s.part)return;St=null,V=null;let K=s.part.positions,ht=(s.plan?.ops||[]).filter(at=>at.kind!=="face"&&at.kind!=="corners").flatMap(at=>at.kind==="cutout"?[{loops:at.region,z:at.zTop+.05,color:qn.cutout,dashed:!0}]:at.centers&&!at.region?[{loops:at.centers.map(k=>qd(k)),z:at.zTop+.05,color:qn[at.kind]}]:[{loops:at.region,z:at.zTop+.05,color:qn[at.kind]}]);o.keepCamera=W===K,o.showPart(s.part,ht),W=K,o.onFrame=null,o.onPick=async at=>{if(s.loading)return;let k=s.up;try{await f(at),s.analysis.undercut&&k!=="custom"&&(!s.sides||s.sides[k]?.reachable)&&(await f(k),Me("With that face up, some of the part can\u2019t be reached from the top."))}catch(It){s.error=It.message,g()}}}function F(){let K=s.job,ht=s.plan?.stock||Yo(s.analysis,K),at=Object.entries(lr).map(([It,Kt])=>`<button class="ncc-pick ncc-mat ${K.material===It?"sel":""}" type="button" data-material="${It}"><span class="ncc-mat-swatch" style="background: ${Is[It]}"></span>${Ye(Kt.name)}<small>${Ye(Kt.note)}</small></button>`).join(""),k=(It,Kt,O)=>`<div class="ncc-field"><label for="ncc-${It}">${Kt}</label><input id="ncc-${It}" class="ncc-input ncc-mono" inputmode="decimal" data-stock="${It}" value="${Math.round(O*100)/100}" ${K.stock.fit?"disabled":""}></div>`;return`
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-mat-card"><div class="ncc-label">Material</div><div class="ncc-picks ncc-mats">${at}</div></div>
        <div class="ncc-card">
          ${U("fit","Size the stock to the part",`Adds ${Dn(K.stock.margin)} mm on every side and ${Dn(K.stock.extraTop)} mm on top`,K.stock.fit)}
          <div class="ncc-fields">${k("width","Width X (mm)",ht.width)}${k("depth","Depth Y (mm)",ht.depth)}${k("thickness","Thickness Z (mm)",ht.thickness)}</div>
        </div>
        <div class="ncc-card">
          ${U("tabs","Leave tabs to hold the part",K.tabs.enabled?`${Dn(K.tabs.height)} mm tall, so the part stays put until you cut it free`:"The part comes loose at the end",K.tabs.enabled)}
          ${K.tabs.enabled?`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">Number of tabs</span><div class="ncc-stepper"><button type="button" data-tabs="-1" aria-label="Fewer tabs" ${K.tabs.count<=1?"disabled":""}>\u2212</button><span class="ncc-mono">${K.tabs.count}</span><button type="button" data-tabs="1" aria-label="More tabs" ${K.tabs.count>=12?"disabled":""}>+</button></div></div>`:""}
        </div>
      </div>
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-zero-card"><div class="ncc-label">Where is zero?</div>${P(ht)}
          <div style="font-size: 14px">X Y zero: <strong>${Ye(Y(K.zero.xy))}</strong> of the stock</div>
          <div class="ncc-seg" role="group" aria-label="Z zero">
            <button type="button" class="${K.zero.z==="top"?"sel":""}" data-z="top">Z0 on top of stock</button>
            <button type="button" class="${K.zero.z==="bed"?"sel":""}" data-z="bed">Z0 on the bed</button>
          </div>
        </div>
      </div>`}let U=(K,ht,at,k)=>`<div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">${Ye(ht)}</div><div class="ncc-row-sub">${Ye(at)}</div></div><button class="ncc-toggle" type="button" role="switch" aria-checked="${k}" aria-label="${Ye(ht)}" data-toggle="${K}"></button></div>`;function Y(K){return{"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}[K]}function P(K){return`<div class="ncc-zero"><div data-viewer></div></div>
      <div class="ncc-row-sub ncc-mono" style="text-align: center; margin: 0">${Dn(K.width)} \xD7 ${Dn(K.depth)} \xD7 ${Dn(K.thickness)} mm stock \xB7 tap a point, drag to turn</div>`}let V=null;function j(){let K=s.plan?.stock||Yo(s.analysis,s.job),ht=Cu.map(It=>({key:It,...Mc(K,{xy:It,z:"top"})})),at=getComputedStyle(n).getPropertyValue("--color-accent").trim()||"#4c6ef5",k=`${s.part?.positions?.length}|${K.width}|${K.depth}|${K.thickness}`;o.keepCamera=V===k,o.showZero({stock:K,part:s.part,points:ht,selected:s.job.zero.xy,zFace:s.job.zero.z,color:Is[s.job.material],accent:at}),V=k,W=null,St=null,o.onPick=null,o.onMarker=It=>{It!==s.job.zero.xy&&(s.job.zero.xy=It,he())}}function Q(){let K=s.plan;if(!K)return'<div class="ncc-busy" style="position: static; flex: 1"><span class="ncc-spin"></span>Planning\u2026</div>';let ht=K.ops.map(H=>{let it=ct(H);return`<div class="ncc-op ${H.enabled?"":"off"} ${s.focusOp===H.id?"focus":""}" data-focus="${H.id}">
        <div class="ncc-op-icon" style="background: color-mix(in srgb, ${qn[H.kind]} 16%, transparent); color: ${qn[H.kind]}">${cn[H.kind]||cn.pocket}</div>
        <div class="ncc-op-text"><div class="ncc-op-title">${Ye(H.label)}</div><div class="ncc-op-sub ncc-mono">${Ye(H.detail)}</div></div>
        <select class="ncc-select" data-tool="${H.id}" aria-label="Tool for ${Ye(H.label)}">${it.map(pt=>`<option value="${pt.id}" ${pt.id===H.tool.id?"selected":""}>T${cr(pt,s.numbering)} \xB7 ${Ye(pt.name)}</option>`).join("")}</select>
        <button class="ncc-toggle" type="button" role="switch" aria-checked="${H.enabled}" aria-label="${Ye(H.label)}" data-op="${H.id}"></button>
      </div>`}).join(""),at=qo(K),k=new Map;for(let H of K.ops)H.enabled&&H.kind!=="face"&&k.set(H.tool.id,(k.get(H.tool.id)||0)+1);let It=[...k].sort((H,it)=>it[1]-H[1])[0]?.[0],Kt=K.ops.find(H=>H.enabled&&H.tool.id===It)||K.ops.find(H=>H.enabled),O=Kt?.feeds,T=`<div class="ncc-pair">
          <div class="ncc-card"><div class="ncc-label">Finish</div>
            <div class="ncc-seg" role="group" aria-label="Finish">${Object.entries(Xn).map(([H,it])=>`<button type="button" class="${s.job.finish===H?"sel":""}" data-finish="${H}">${it.name}</button>`).join("")}</div>
            <div class="ncc-row-sub">${{fast:"Bigger steps, no finishing pass.",balanced:"Leaves 0.2 mm on the walls, then a clean finishing pass.",smooth:"Lighter steps and a finishing pass, for the best walls."}[s.job.finish]}</div>
            ${O?`<div class="ncc-mono ncc-row-sub" style="line-height: 1.6">${Ye(Kt.tool.name)}<br>${Ye(lr[s.job.material].name)} \xB7 ${O.rpm.toLocaleString()} RPM<br>${O.feed.toLocaleString()} mm/min \xB7 ${Dn(O.stepdown,2)} mm per pass</div>`:""}
          </div>
          <div class="ncc-card"><div class="ncc-label">Tools for this job</div>
            ${at.map(H=>`<div class="ncc-row"><span style="min-width: 0"><span class="ncc-mono" style="color: var(--color-accent)">T${cr(H,s.numbering)}</span> ${Ye(H.name)}</span><span class="ncc-slot ${H.toolNumber?"":"hand"}">${H.toolNumber?`Slot ${H.toolNumber}`:"By hand"}</span></div>`).join("")||'<div class="ncc-row-sub">No operations switched on.</div>'}
            ${at.some(H=>!H.toolNumber)?'<div class="ncc-row-sub">By hand: not in the magazine, so you\u2019ll be asked to load it.</div>':""}
          </div>
        </div>`;return`<div class="ncc-plan">
        <div class="ncc-plan-list" data-keep-scroll="ops"><div class="ncc-ops">${ht}</div>${x(!1)}<div class="ncc-plan-pair-in">${T}</div></div>
        <div class="ncc-card ncc-viewcard ncc-plan-view"><div data-viewer></div></div>
        <div class="ncc-plan-pair">${T}</div>
      </div>`}function nt(){let ht=(s.plan?.ops||[]).filter(at=>at.enabled&&at.kind!=="face").map(at=>{let k=s.focusOp&&s.focusOp!==at.id;return{loops:at.region||(at.centers||[]).map(Kt=>qd(Kt)),z:at.kind==="cutout"?at.zTop+.05:Math.max(at.zBottom,0)+.05,color:qn[at.kind],dashed:at.kind==="cutout",opacity:k?.2:1,top:at.zTop}});o.keepCamera=W===s.part?.positions,o.showPart(s.part,ht),W=s.part?.positions,St=null,V=null,o.onFrame=null,o.onMarker=null,o.onPick=null}function ct(K){let ht=K.kind==="drill"?["drill"]:K.kind==="face"?["surfacing","flat"]:["flat"],at=s.tools.filter(k=>ht.includes(k.kind)).sort((k,It)=>It.diameter-k.diameter);return at.some(k=>k.id===K.tool.id)?at:[K.tool,...at]}function z(){let K=s.result,ht=K?.plan,at=ht?qo(ht):[],k=ht?ht.ops.filter(It=>It.enabled).reduce((It,Kt,O,T)=>It+(O>0&&T[O-1].tool.id!==Kt.tool.id?1:0),0):0;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div data-viewer></div>
        <div class="ncc-play" data-playbar>${vt()}</div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card ncc-stats">
          <div class="ncc-stat"><b class="ncc-mono">${ht?Math.max(1,Math.round(K.seconds/60)):"\u2013"}<span> min</span></b><span>Run time</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${at.length||"\u2013"}</b><span>Tools</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${ht?k:"\u2013"}</b><span>Tool changes</span></div>
        </div>
        <div class="ncc-card"><div class="ncc-label">Checked</div>${st()}</div>
        <div class="ncc-card">
          <div class="ncc-mono ncc-row-sub" style="margin: 0">${Ye(q())}${K?` \xB7 ${(K.gcode.split(`
`).length-1).toLocaleString()} lines`:""}</div>
          <button class="ncc-btn muted" type="button" data-act="save" ${K?"":"disabled"}>Save to File Manager</button>
        </div>
      </div>`}let q=()=>`${(s.fileName||"part").replace(/\.(step|stp)$/i,"")}.nc`;function st(){let K=s.simChecks;return K?K.items.map(ht=>`<div class="ncc-check"><span class="ncc-ck ${ht.state}">${ht.state==="bad"?cn.cross:ht.state==="info"?"!":cn.check}</span><span>${Ye(ht.text)}</span></div>`).join(""):`<div class="ncc-row-sub">${s.result?"Checking\u2026":"Waiting for the toolpaths\u2026"}</div>`}let G={ops:[],moves:null,opOf:null,cum:null,total:0,t:0,i:1,playing:!1,speed:20,hm:null,stamps:[],colors:[],cursor:null};function vt(){if(!s.result)return"";let ht=s.result.plan.ops.filter(It=>It.enabled&&It.track),at=G.total||1,k=ht[Math.max(0,G.opIndexAt?.(G.t)??0)];return`<button class="ncc-playbtn" type="button" data-act="play" aria-label="${G.playing?"Pause":"Play"}">${G.playing?cn.pause:cn.play}</button>
      <div class="ncc-track">
        <div class="ncc-bar" data-scrub role="slider" aria-label="Position in the program" aria-valuemin="0" aria-valuemax="${Math.round(at)}" aria-valuenow="${Math.round(G.t)}">
          ${ht.map(It=>`<i style="width: ${(It.seconds||0)/at*100}%; background: ${qn[It.kind]}"></i>`).join("")}
          <b style="width: ${G.t/at*100}%"></b><em style="left: ${G.t/at*100}%"></em>
        </div>
        <div class="ncc-row" style="font-size: 12px; color: var(--color-text-secondary)"><span>${k?`Step ${ht.indexOf(k)+1} of ${ht.length} \xB7 ${Ye(k.label)} \xB7 T${cr(k.tool,s.numbering)}`:""}</span><span class="ncc-mono">${Yd(G.t)} / ${Yd(at)}</span></div>
      </div>
      <div class="ncc-seg" style="padding: 3px" role="group" aria-label="Speed">${[[5,"Slow"],[20,"Normal"],[100,"Fast"]].map(([It,Kt])=>`<button type="button" style="padding: 6px 8px" class="${G.speed===It?"sel":""}" data-speed="${It}">${Kt}</button>`).join("")}</div>`}function dt(){return`<div class="ncc-overlay tr">
      <button class="ncc-chip ${o.paths?.visible!==!1&&s.showPaths?"on":""}" type="button" data-act="paths">Toolpaths</button>
      <button class="ncc-chip ${s.showPart?"on":""}" type="button" data-act="ghost">Part</button>
    </div>`}let St=null;function _t(){if(St===s.result){Xt();return}St=s.result,W=null,V=null,o.onMarker=null,o.onPick=null;let K=s.result.plan,ht=K.ops.filter(H=>H.enabled&&H.track),at=Bi.cellFor(K.stock,520*520);G.ops=ht,G.hm=new Bi(K.stock,at),G.colors=K.ops.map(H=>new ye(qn[H.kind])),G.stamps=K.ops.map(H=>fc(H.tool,at));let k=0;for(let H of ht)k+=H.track.length/4;G.moves=new Float32Array(k*4),G.opOf=new Uint16Array(k),G.cum=new Float64Array(k);let It=0,Kt=0,O=null,T=s.maxRapid||5e3;for(let H of ht){let it=K.ops.indexOf(H);for(let pt=0;pt<H.track.length;pt+=4,It++){if(G.moves.set(H.track.subarray(pt,pt+4),It*4),G.opOf[It]=it,O){let Ct=Math.hypot(H.track[pt]-O[0],H.track[pt+1]-O[1],H.track[pt+2]-O[2]);Kt+=Ct/(H.track[pt+3]>0?H.track[pt+3]:T)*60}O=[H.track[pt],H.track[pt+1],H.track[pt+2]],G.cum[It]=Kt}}G.total=Kt,G.opIndexAt=H=>{let it=Math.min(k-1,$t(G.cum,H));return ht.indexOf(K.ops[G.opOf[it]])},G.t=0,G.i=1,G.cursor=null,G.toolOp=-1,o.showStock(G.hm,Is[K.job.material]||Is.mdf,s.part),o.showPaths(ht),s.showPaths=s.showPaths??!1,Xt(),Ee(0),G.speed=20,G.rate=Math.max(1,G.total/40/20),o.onFrame=Zt,me(K),G.playing=!0,Ot()}function Xt(){o.paths&&(o.paths.visible=!!s.showPaths),o.partGhost&&(o.partGhost.visible=!!s.showPart)}function $t(K,ht){let at=0,k=K.length;for(;at<k;){let It=at+k>>1;K[It]<ht?at=It+1:k=It}return at}let ue=K=>({x:G.moves[K*4],y:G.moves[K*4+1],z:G.moves[K*4+2],r:G.moves[K*4+3]===0});function xe(K){let ht=G.hm,at=G.cum.length,k=1/0,It=-1,Kt=(O,T,H)=>{let it=s.result.plan.ops[H].tool.diameter/2/ht.cell+1,pt=Math.floor((Math.min(O.y,T.y)-ht.y0)/ht.cell-it),Ct=Math.ceil((Math.max(O.y,T.y)-ht.y0)/ht.cell+it);k=Math.min(k,Math.max(0,pt)),It=Math.max(It,Math.min(ht.ny-1,Ct))};for(;G.i<at&&G.cum[G.i]<=K;){let O=G.cursor||ue(G.i-1),T=ue(G.i),H=G.opOf[G.i];(!T.r||O.z<ht.top)&&(zo(ht,G.stamps[H],O,T,T.r,H),Kt(O,T,H)),G.cursor=null,G.i++}if(G.i<at&&K>G.cum[G.i-1]){let O=G.cursor||ue(G.i-1),T=ue(G.i),H=G.opOf[G.i],it=G.cum[G.i-1],pt=(K-it)/(G.cum[G.i]-it||1),Ct=ue(G.i-1),Ft={x:Ct.x+(T.x-Ct.x)*pt,y:Ct.y+(T.y-Ct.y)*pt,z:Ct.z+(T.z-Ct.z)*pt};T.r||(zo(ht,G.stamps[H],O,Ft,!1,H),Kt(O,Ft,H)),G.cursor=Ft}return[k,It]}function Ee(K){let ht=G.cum.length;if(!ht)return;let at=Math.min(ht-1,$t(G.cum,K)),k=G.opOf[at];if(k!==G.toolOp){let Kt=s.result.plan.ops[k];o.setTool(Kt.tool,Kt.zTop-Kt.zBottom),G.toolOp=k}let It=G.cursor||ue(Math.max(0,G.i-1));o.moveTool(It.x,It.y,It.z)}let yt=0,wt=0;function Zt(K){let ht=yt?Math.min(.1,(K-yt)/1e3):0;if(yt=K,!G.playing||!G.cum)return;G.t=Math.min(G.total,G.t+ht*G.speed*G.rate);let[at,k]=xe(G.t);o.refreshStock(at,k,G.colors),Ee(G.t),G.t>=G.total?(G.playing=!1,Ot()):K-wt>200&&(wt=K,Ot())}function ae(K){if(K=Math.max(0,Math.min(G.total,K)),K<G.t)G.hm.h.fill(G.hm.top),G.hm.op.fill(0),G.i=1,G.cursor=null,xe(K),o.refreshStock(0,G.hm.ny-1,G.colors);else{let[ht,at]=xe(K);o.refreshStock(ht,at,G.colors)}G.t=K,Ee(K),Ot()}function Ot(){let K=n.querySelector("[data-playbar]");K&&(K.innerHTML=vt())}function me(K){setTimeout(()=>{if(s.result?.plan!==K)return;let ht=K.ops.map(O=>({...O,moves:O.track?Array.from({length:O.track.length/4},(T,H)=>({x:O.track[H*4],y:O.track[H*4+1],z:O.track[H*4+2],r:O.track[H*4+3]===0,f:O.track[H*4+3]})):null})),{collisions:at}=_u({...K,ops:ht},Bi.cellFor(K.stock,300*300)),k=[];if(k.push(at.length?{state:"bad",text:`${at.length} fast move${at.length>1?"s go":" goes"} into the material (${[...new Set(at.map(O=>K.ops.find(T=>T.id===O.op)?.label))].join(", ")}).`}:{state:"ok",text:"No fast moves through the material"}),s.travel){let O=K.stock.width<=s.travel.x&&K.stock.depth<=s.travel.y;k.push(O?{state:"ok",text:"The stock fits inside your machine\u2019s travel"}:{state:"bad",text:`The stock is bigger than your machine\u2019s travel (${Dn(s.travel.x)} \xD7 ${Dn(s.travel.y)} mm).`})}let It=qo(K);k.push(It.every(O=>O.fluteLength)?{state:"ok",text:"Every tool is long enough for its depth"}:{state:"info",text:"Some tools have no cutting length in the Tool Library, so their depth isn\u2019t checked."}),K.ops.find(O=>O.kind==="cutout"&&O.enabled)&&k.push({state:"ok",text:`The cut-out goes ${Dn(K.job.throughDepth)} mm into the spoilboard${K.job.tabs.enabled?`, with ${K.job.tabs.count} tabs`:""}`}),K.warnings.some(O=>O.kind==="undercut")&&k.push({state:"bad",text:"Some of the part can\u2019t be reached from the top."}),s.simChecks={ok:!k.some(O=>O.state==="bad"),items:k},g()},50)}let Je=K=>{if(!(K<1||K>4||K>s.maxStep+1)){if(K===4&&s.step!==4){G.playing=!1,s.step=4,s.maxStep=4,g(),d(!0);return}s.step=K,s.maxStep=Math.max(s.maxStep,K),K!==4&&(G.playing=!1),g()}},he=()=>{s.maxStep=Math.min(s.maxStep,Math.max(s.step,3)),s.result=null,d(!1)};n.addEventListener("click",K=>{let ht=K.target.closest("[data-focus]");if(ht&&!K.target.closest("button, select")){s.focusOp=s.focusOp===ht.dataset.focus?null:ht.dataset.focus,g();return}let at=K.target.closest("button, [data-scrub]");if(!at||at.disabled)return;let k=at.dataset;if(k.go)return Je(+k.go);if(k.up)return f(k.up).catch(It=>{s.error=It.message,g()});if(k.material)return s.job.material=k.material,he();if(k.zero)return s.job.zero.xy=k.zero,he();if(k.z)return s.job.zero.z=k.z,he();if(k.finish)return s.job.finish=k.finish,he();if(k.tabs)return s.job.tabs.count=Math.max(1,Math.min(12,s.job.tabs.count+ +k.tabs)),he();if(k.toggle==="fit"){let It=s.plan?.stock;return s.job.stock.fit=!s.job.stock.fit,!s.job.stock.fit&&It&&Object.assign(s.job.stock,{width:It.width,depth:It.depth,thickness:It.thickness}),he()}if(k.toggle==="tabs")return s.job.tabs.enabled=!s.job.tabs.enabled,he();if(k.op)return s.job.disabled[k.op]=!s.job.disabled[k.op],he();if(k.speed)return G.speed=+k.speed,!G.playing&&G.t>=G.total&&ae(0),G.playing=!0,Ot();if(k.act==="play")return G.t>=G.total&&ae(0),G.playing=!G.playing,yt=0,Ot();if(k.act==="paths"){s.showPaths=!s.showPaths,Xt(),at.classList.toggle("on",s.showPaths);return}if(k.act==="ghost"){s.showPart=!s.showPart,Xt(),at.classList.toggle("on",s.showPart);return}if(k.act==="close")return He();if(k.act==="load")return Ce(at);if(k.act==="save")return be(at)}),n.addEventListener("pointerdown",K=>{let ht=K.target.closest("[data-scrub]");if(!ht||!G.cum)return;let at=G.playing;G.playing=!1;let k=O=>{let T=ht.getBoundingClientRect();ae((O.clientX-T.left)/T.width*G.total)};k(K);let It=O=>k(O),Kt=()=>{window.removeEventListener("pointermove",It),window.removeEventListener("pointerup",Kt),G.playing=at&&G.t<G.total,yt=0,Ot()};window.addEventListener("pointermove",It),window.addEventListener("pointerup",Kt)}),n.addEventListener("change",K=>{let ht=K.target;if(ht.matches("[data-file]"))return u(ht.files[0]);if(ht.dataset.tool)return s.job.toolOverride[ht.dataset.tool]=+ht.value||ht.value,he();if(ht.dataset.stock){let at=parseFloat(String(ht.value).replace(",","."));return Number.isFinite(at)&&at>0&&(s.job.stock[ht.dataset.stock]=at),he()}}),n.addEventListener("dragover",K=>{let ht=K.target.closest("[data-drop]");ht&&(K.preventDefault(),ht.classList.add("over"))}),n.addEventListener("dragleave",K=>{let ht=K.target.closest("[data-drop]");ht&&ht.classList.remove("over")}),n.addEventListener("drop",K=>{K.target.closest("[data-drop]")&&(K.preventDefault(),u(K.dataTransfer.files[0]))});function Me(K){s.toast=K,g(),setTimeout(()=>{s.toast===K&&(s.toast="",g())},2600)}async function Ce(K){K.disabled=!0;try{let ht=await i.post("/api/gcode-files/load-temp",{filename:q(),content:s.result.gcode});if(!ht.ok)throw new Error(`ncSender said ${ht.status}`);He()}catch(ht){K.disabled=!1,Me(`Couldn\u2019t load the program: ${ht.message}`)}}async function be(K){K.disabled=!0;try{let ht=await De(q()),at=await i.post("/api/gcode-files/file/save",{path:ht,content:s.result.gcode});if(!at.ok)throw new Error(`save failed (${at.status})`);Me(`Saved to File Manager: ${ht}`)}catch(ht){Me(`Couldn\u2019t save: ${ht.message}`)}K.disabled=!1}async function De(K){let ht=K.replace(/\.nc$/,"");for(let at=1;at<1e3;at++){let k=`ncCAM/${at<2?K:`${ht} (${at}).nc`}`,It=await fetch(`${t.base}/api/gcode-files/file?path=${encodeURIComponent(k)}`);if(It.status===404)return k;if(!It.ok)throw new Error(`could not check File Manager (${It.status})`)}throw new Error("too many saved copies")}function He(){G.playing=!1,window.postMessage({type:"close-plugin-dialog"},"*")}g(),window.__nccam={S:s,PLAY:G,viewer:o}}function qd(n,t=48){return Array.from({length:t},(e,i)=>[n.x+n.d/2*Math.cos(i/t*2*Math.PI),n.y+n.d/2*Math.sin(i/t*2*Math.PI)])}var rS,sS,Ye,Dn,Yd,fn,cn,oS,Zd=Pn(()=>{Ql();wc();Vd();Wd();rS=["Model","Stock & Zero","Operations","Preview & Load"],sS=[["top","Top"],["bottom","Bottom"],["front","Front"],["back","Back"],["left","Left"],["right","Right"]],Ye=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Dn=(n,t=1)=>`${(Math.round(n*10**t)/10**t).toLocaleString()}`,Yd=n=>{let t=Math.max(0,Math.round(n));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},fn=(n,t=18,e="")=>`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${e}>${n}</svg>`,cn={close:fn('<path d="M6 6l12 12M18 6L6 18"/>'),next:fn('<path d="M9 6l6 6-6 6"/>',16,'stroke-width="2.4"'),part:fn('<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 22V12M21 7l-9 5-9-5"/>',20),upload:fn('<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',28),info:fn('<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>'),warn:fn('<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17h.01"/>'),check:fn('<path d="M5 12l5 5 9-10"/>',12,'stroke-width="3.2"'),cross:fn('<path d="M6 6l12 12M18 6L6 18"/>',12,'stroke-width="3.2"'),play:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>',pause:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',load:fn('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',16,'stroke-width="2.4"'),face:fn('<path d="M3 9h18M3 15h18"/>'),pocket:fn('<rect x="4" y="6" width="16" height="12" rx="2"/>'),corners:fn('<path d="M4 10V6a2 2 0 012-2h4M20 14v4a2 2 0 01-2 2h-4"/>'),hole:fn('<circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/>'),drill:fn('<path d="M12 3v14M8 13l4 8 4-8"/>'),step:fn('<path d="M3 18h6v-6h6V6h6"/>'),cutout:fn('<rect x="3" y="5" width="18" height="14" rx="2" stroke-dasharray="3 2.5"/>')},oS={top:'<path d="M12 3l9 5-9 5-9-5z" fill="currentColor" fill-opacity=".35"/><path d="M3 8v8l9 5 9-5V8"/>',bottom:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M3 16l9-5 9 5" stroke-dasharray="2 2"/>',front:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5V13z" fill="currentColor" fill-opacity=".35"/><path d="M21 8v8l-9 5"/>',back:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 3v8" stroke-dasharray="2 2"/>',left:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5V13z" fill="currentColor" fill-opacity=".2"/><path d="M21 8v8l-9 5"/>',right:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5"/><path d="M21 8v8l-9 5V13z" fill="currentColor" fill-opacity=".35"/>'}});var zu=du(gu(),1);wc();var Qm={linearUnit:"millimeter",linearDeflectionType:"absolute_value",linearDeflection:.01,angularDeflection:.05};function Ec(){let n=null,t=null,e=null,i=null,s={async init({wasmBinary:o}){return i=o,!0},async load({bytes:o}){n||=await(0,zu.default)({wasmBinary:i});let c=n.ReadStepFile(new Uint8Array(o),Qm);if(!c.success||!c.meshes?.length)throw new Error("This file has no solid ncCAM can read. Export it again as STEP (AP214 or AP242).");return t=xu(c),{solids:t.solids,size:Us(t).size,...Mu(t)}},async orient({up:o}){e=Vo(t,o);let c=Or(e);return{positions:Float32Array.from(e.positions),indices:e.indices.slice(),faces:e.faces,analysis:c}},async tilt({normal:o}){e=Vo(e,o);let c=Or(e);return{positions:Float32Array.from(e.positions),indices:e.indices.slice(),faces:e.faces,analysis:c}},async plan({tools:o,job:c,limits:u,paths:f,gcodeOptions:d,timing:v}){let S=Iu(e,o,c,u);f&&Du(S);let g=f?Uu(S,v):0,b=f?Fu(S,d):"";for(let E of S.ops){if(!E.moves)continue;let C=new Float32Array(E.moves.length*4);E.moves.forEach((M,x)=>{C[x*4]=M.x,C[x*4+1]=M.y,C[x*4+2]=M.z,C[x*4+3]=M.r?0:M.f}),E.track=C,delete E.moves}return{plan:S,gcode:b,seconds:g}}};return async function(c){let u=s[c.type];if(!u)throw new Error(`unknown request ${c.type}`);return u(c)}}var lS="0.1.0-beta.1-mvtv9cwc";if(typeof document>"u"){let n=Ec();self.onmessage=async({data:t})=>{try{let e=await n(t),i=e&&e.positions?[e.positions.buffer,e.indices.buffer]:[];self.postMessage({id:t.id,ok:!0,result:e},i)}catch(e){self.postMessage({id:t.id,ok:!1,error:e.message||String(e)})}}}else{let n=window.NcCam=window.NcCam||{};n.build=lS,n.mount=async(i,s)=>{let{mountApp:o}=await Promise.resolve().then(()=>(Zd(),$d));try{o(i,s,await t(s))}catch(c){i.textContent=`ncCAM could not start: ${c.message||c}`}};let t=i=>n.engine||=e(i);async function e(i){let s=await fetch(i.file("lib/occt-import-js.wasm")).then(u=>{if(!u.ok)throw new Error(`lib/occt-import-js.wasm: ${u.status}`);return u.arrayBuffer()}),o=null;try{o=new Worker(URL.createObjectURL(new Blob([n.source||""],{type:"text/javascript"})))}catch{o=null}if(o){let u=0,f=new Map;o.onmessage=({data:S})=>{let g=f.get(S.id);g&&(f.delete(S.id),S.ok?g.resolve(S.result):g.reject(new Error(S.error)))};let d=(S,g={},b=[])=>new Promise((E,C)=>{let M=++u;f.set(M,{resolve:E,reject:C}),o.postMessage({...g,id:M,type:S},b)});if(await Promise.race([d("init",{wasmBinary:s}).then(()=>!0),new Promise(S=>setTimeout(()=>S(!1),5e3))]))return d;o.terminate()}let c=Ec();return await c({type:"init",wasmBinary:s}),(u,f={})=>c({...f,type:u})}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
