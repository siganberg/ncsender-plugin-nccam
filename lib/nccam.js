(()=>{var Fm=Object.create;var gc=Object.defineProperty;var Um=Object.getOwnPropertyDescriptor;var Bm=Object.getOwnPropertyNames;var km=Object.getPrototypeOf,zm=Object.prototype.hasOwnProperty;var _c=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')});var gn=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(i){throw e=[i],i}};var wu=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}},Eu=(n,t)=>{for(var e in t)gc(n,e,{get:t[e],enumerable:!0})},Vm=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Bm(t))!zm.call(n,r)&&r!==e&&gc(n,r,{get:()=>t[r],enumerable:!(i=Um(t,r))||i.enumerable});return n};var Tu=(n,t,e)=>(e=n!=null?Fm(km(n)):{},Vm(t||!n||!n.__esModule?gc(e,"default",{value:n,enumerable:!0}):e,n));var Pu=wu((Cu,vc)=>{var Au=(()=>{var n=typeof document<"u"?document.currentScript?.src:void 0;return typeof __filename<"u"&&(n=n||__filename),(function(t={}){var e,i=t,r,o,l=new Promise((h,m)=>{r=h,o=m}),u=typeof window=="object",f=typeof importScripts=="function",d=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer",_=Object.assign({},i),v=[],g="./this.program",b=(h,m)=>{throw m},w="";function T(h){return i.locateFile?i.locateFile(h,w):w+h}var S,x;if(d){var O=_c("fs"),H=_c("path");w=__dirname+"/",x=h=>{h=Le(h)?new URL(h):H.normalize(h);var m=O.readFileSync(h);return m},S=(h,m=!0)=>(h=Le(h)?new URL(h):H.normalize(h),new Promise((M,E)=>{O.readFile(h,m?void 0:"utf8",(N,G)=>{N?E(N):M(m?G.buffer:G)})})),!i.thisProgram&&process.argv.length>1&&(g=process.argv[1].replace(/\\/g,"/")),v=process.argv.slice(2),b=(h,m)=>{throw process.exitCode=h,m}}else(u||f)&&(f?w=self.location.href:typeof document<"u"&&document.currentScript&&(w=document.currentScript.src),n&&(w=n),w.startsWith("blob:")?w="":w=w.substr(0,w.replace(/[?#].*/,"").lastIndexOf("/")+1),f&&(x=h=>{var m=new XMLHttpRequest;return m.open("GET",h,!1),m.responseType="arraybuffer",m.send(null),new Uint8Array(m.response)}),S=h=>Le(h)?new Promise((m,M)=>{var E=new XMLHttpRequest;E.open("GET",h,!0),E.responseType="arraybuffer",E.onload=()=>{if(E.status==200||E.status==0&&E.response){m(E.response);return}M(E.status)},E.onerror=M,E.send(null)}):fetch(h,{credentials:"same-origin"}).then(m=>m.ok?m.arrayBuffer():Promise.reject(new Error(m.status+" : "+m.url))));var R=i.print||console.log.bind(console),U=i.printErr||console.error.bind(console);Object.assign(i,_),_=null,i.arguments&&(v=i.arguments),i.thisProgram&&(g=i.thisProgram);var B=i.wasmBinary,W,C=!1,k;function X(h,m){h||pe(m)}var et,st,$,q,Z,lt,dt,Mt;function pt(){var h=W.buffer;i.HEAP8=et=new Int8Array(h),i.HEAP16=$=new Int16Array(h),i.HEAPU8=st=new Uint8Array(h),i.HEAPU16=q=new Uint16Array(h),i.HEAP32=Z=new Int32Array(h),i.HEAPU32=lt=new Uint32Array(h),i.HEAPF32=dt=new Float32Array(h),i.HEAPF64=Mt=new Float64Array(h)}var wt=[],J=[],At=[],Lt=!1;function Ht(){var h=i.preRun;h&&(typeof h=="function"&&(h=[h]),h.forEach(yt)),Gt(wt)}function Bt(){Lt=!0,!i.noFSInit&&!I.initialized&&I.init(),I.ignorePermissions=!1,gt.init(),Gt(J)}function jt(){var h=i.postRun;h&&(typeof h=="function"&&(h=[h]),h.forEach(Xt)),Gt(At)}function yt(h){wt.unshift(h)}function z(h){J.unshift(h)}function Xt(h){At.unshift(h)}var te=0,kt=null,ce=null;function Re(h){return h}function fe(h){te++,i.monitorRunDependencies?.(te)}function Yt(h){if(te--,i.monitorRunDependencies?.(te),te==0&&(kt!==null&&(clearInterval(kt),kt=null),ce)){var m=ce;ce=null,m()}}function pe(h){i.onAbort?.(h),h="Aborted("+h+")",U(h),C=!0,h+=". Build with -sASSERTIONS for more info.",Lt&&Mu();var m=new WebAssembly.RuntimeError(h);throw o(m),m}var ue="data:application/octet-stream;base64,",we=h=>h.startsWith(ue),Le=h=>h.startsWith("file://");function je(){var h="occt-import-js.wasm";return we(h)?h:T(h)}var Ne;function He(h){if(h==Ne&&B)return new Uint8Array(B);if(x)return x(h);throw"both async and sync fetching of the wasm failed"}function ht(h){return B?Promise.resolve().then(()=>He(h)):S(h).then(m=>new Uint8Array(m),()=>He(h))}function Ze(h,m,M){return ht(h).then(E=>WebAssembly.instantiate(E,m)).then(M,E=>{U(`failed to asynchronously prepare wasm: ${E}`),pe(E)})}function be(h,m,M,E){return!h&&typeof WebAssembly.instantiateStreaming=="function"&&!we(m)&&!Le(m)&&!d&&typeof fetch=="function"?fetch(m,{credentials:"same-origin"}).then(N=>{var G=WebAssembly.instantiateStreaming(N,M);return G.then(E,function(tt){return U(`wasm streaming compile failed: ${tt}`),U("falling back to ArrayBuffer instantiation"),Ze(m,M,E)})}):Ze(m,M,E)}function Y(){return{a:Cm}}function P(){var h=Y();function m(E,N){return cn=E.exports,W=cn._,pt(),ko=cn.ba,z(cn.$),Yt("wasm-instantiate"),cn}fe("wasm-instantiate");function M(E){m(E.instance)}if(i.instantiateWasm)try{return i.instantiateWasm(h,m)}catch(E){U(`Module.instantiateWasm callback failed with error: ${E}`),o(E)}return Ne??=je(),be(B,Ne,h,M).catch(o),{}}var it,mt;function Et(h){this.name="ExitStatus",this.message=`Program terminated with exit(${h})`,this.status=h}var Gt=h=>{h.forEach(m=>m(i))},$t=i.noExitRuntime||!0,xt={isAbs:h=>h.charAt(0)==="/",splitPath:h=>{var m=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return m.exec(h).slice(1)},normalizeArray:(h,m)=>{for(var M=0,E=h.length-1;E>=0;E--){var N=h[E];N==="."?h.splice(E,1):N===".."?(h.splice(E,1),M++):M&&(h.splice(E,1),M--)}if(m)for(;M;M--)h.unshift("..");return h},normalize:h=>{var m=xt.isAbs(h),M=h.substr(-1)==="/";return h=xt.normalizeArray(h.split("/").filter(E=>!!E),!m).join("/"),!h&&!m&&(h="."),h&&M&&(h+="/"),(m?"/":"")+h},dirname:h=>{var m=xt.splitPath(h),M=m[0],E=m[1];return!M&&!E?".":(E&&(E=E.substr(0,E.length-1)),M+E)},basename:h=>{if(h==="/")return"/";h=xt.normalize(h),h=h.replace(/\/$/,"");var m=h.lastIndexOf("/");return m===-1?h:h.substr(m+1)},join:(...h)=>xt.normalize(h.join("/")),join2:(h,m)=>xt.normalize(h+"/"+m)},L=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return E=>crypto.getRandomValues(E);if(d)try{var h=_c("crypto"),m=h.randomFillSync;if(m)return E=>h.randomFillSync(E);var M=h.randomBytes;return E=>(E.set(M(E.byteLength)),E)}catch{}pe("initRandomDevice")},j=h=>(j=L())(h),K={resolve:(...h)=>{for(var m="",M=!1,E=h.length-1;E>=-1&&!M;E--){var N=E>=0?h[E]:I.cwd();if(typeof N!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!N)return"";m=N+"/"+m,M=xt.isAbs(N)}return m=xt.normalizeArray(m.split("/").filter(G=>!!G),!M).join("/"),(M?"/":"")+m||"."},relative:(h,m)=>{h=K.resolve(h).substr(1),m=K.resolve(m).substr(1);function M(Ut){for(var Kt=0;Kt<Ut.length&&Ut[Kt]==="";Kt++);for(var ie=Ut.length-1;ie>=0&&Ut[ie]==="";ie--);return Kt>ie?[]:Ut.slice(Kt,ie-Kt+1)}for(var E=M(h.split("/")),N=M(m.split("/")),G=Math.min(E.length,N.length),tt=G,at=0;at<G;at++)if(E[at]!==N[at]){tt=at;break}for(var bt=[],at=tt;at<E.length;at++)bt.push("..");return bt=bt.concat(N.slice(tt)),bt.join("/")}},rt=typeof TextDecoder<"u"?new TextDecoder:void 0,ut=(h,m=0,M=NaN)=>{for(var E=m+M,N=m;h[N]&&!(N>=E);)++N;if(N-m>16&&h.buffer&&rt)return rt.decode(h.subarray(m,N));for(var G="";m<N;){var tt=h[m++];if(!(tt&128)){G+=String.fromCharCode(tt);continue}var at=h[m++]&63;if((tt&224)==192){G+=String.fromCharCode((tt&31)<<6|at);continue}var bt=h[m++]&63;if((tt&240)==224?tt=(tt&15)<<12|at<<6|bt:tt=(tt&7)<<18|at<<12|bt<<6|h[m++]&63,tt<65536)G+=String.fromCharCode(tt);else{var Ut=tt-65536;G+=String.fromCharCode(55296|Ut>>10,56320|Ut&1023)}}return G},Nt=[],It=h=>{for(var m=0,M=0;M<h.length;++M){var E=h.charCodeAt(M);E<=127?m++:E<=2047?m+=2:E>=55296&&E<=57343?(m+=4,++M):m+=3}return m},Vt=(h,m,M,E)=>{if(!(E>0))return 0;for(var N=M,G=M+E-1,tt=0;tt<h.length;++tt){var at=h.charCodeAt(tt);if(at>=55296&&at<=57343){var bt=h.charCodeAt(++tt);at=65536+((at&1023)<<10)|bt&1023}if(at<=127){if(M>=G)break;m[M++]=at}else if(at<=2047){if(M+1>=G)break;m[M++]=192|at>>6,m[M++]=128|at&63}else if(at<=65535){if(M+2>=G)break;m[M++]=224|at>>12,m[M++]=128|at>>6&63,m[M++]=128|at&63}else{if(M+3>=G)break;m[M++]=240|at>>18,m[M++]=128|at>>12&63,m[M++]=128|at>>6&63,m[M++]=128|at&63}}return m[M]=0,M-N};function V(h,m,M){var E=M>0?M:It(h)+1,N=new Array(E),G=Vt(h,N,0,N.length);return m&&(N.length=G),N}var Pt=()=>{if(!Nt.length){var h=null;if(d){var m=256,M=Buffer.alloc(m),E=0,N=process.stdin.fd;try{E=O.readSync(N,M,0,m)}catch(G){if(G.toString().includes("EOF"))E=0;else throw G}E>0&&(h=M.slice(0,E).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(h=window.prompt("Input: "),h!==null&&(h+=`
`));if(!h)return null;Nt=V(h,!0)}return Nt.shift()},gt={ttys:[],init(){},shutdown(){},register(h,m){gt.ttys[h]={input:[],output:[],ops:m},I.registerDevice(h,gt.stream_ops)},stream_ops:{open(h){var m=gt.ttys[h.node.rdev];if(!m)throw new I.ErrnoError(43);h.tty=m,h.seekable=!1},close(h){h.tty.ops.fsync(h.tty)},fsync(h){h.tty.ops.fsync(h.tty)},read(h,m,M,E,N){if(!h.tty||!h.tty.ops.get_char)throw new I.ErrnoError(60);for(var G=0,tt=0;tt<E;tt++){var at;try{at=h.tty.ops.get_char(h.tty)}catch{throw new I.ErrnoError(29)}if(at===void 0&&G===0)throw new I.ErrnoError(6);if(at==null)break;G++,m[M+tt]=at}return G&&(h.node.timestamp=Date.now()),G},write(h,m,M,E,N){if(!h.tty||!h.tty.ops.put_char)throw new I.ErrnoError(60);try{for(var G=0;G<E;G++)h.tty.ops.put_char(h.tty,m[M+G])}catch{throw new I.ErrnoError(29)}return E&&(h.node.timestamp=Date.now()),G}},default_tty_ops:{get_char(h){return Pt()},put_char(h,m){m===null||m===10?(R(ut(h.output)),h.output=[]):m!=0&&h.output.push(m)},fsync(h){h.output&&h.output.length>0&&(R(ut(h.output)),h.output=[])},ioctl_tcgets(h){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(h,m,M){return 0},ioctl_tiocgwinsz(h){return[24,80]}},default_tty1_ops:{put_char(h,m){m===null||m===10?(U(ut(h.output)),h.output=[]):m!=0&&h.output.push(m)},fsync(h){h.output&&h.output.length>0&&(U(ut(h.output)),h.output=[])}}},Ot=(h,m)=>{st.fill(0,h,h+m)},Wt=(h,m)=>Math.ceil(h/m)*m,Rt=h=>{h=Wt(h,65536);var m=xu(65536,h);return m&&Ot(m,h),m},Ft={ops_table:null,mount(h){return Ft.createNode(null,"/",16895,0)},createNode(h,m,M,E){if(I.isBlkdev(M)||I.isFIFO(M))throw new I.ErrnoError(63);Ft.ops_table||={dir:{node:{getattr:Ft.node_ops.getattr,setattr:Ft.node_ops.setattr,lookup:Ft.node_ops.lookup,mknod:Ft.node_ops.mknod,rename:Ft.node_ops.rename,unlink:Ft.node_ops.unlink,rmdir:Ft.node_ops.rmdir,readdir:Ft.node_ops.readdir,symlink:Ft.node_ops.symlink},stream:{llseek:Ft.stream_ops.llseek}},file:{node:{getattr:Ft.node_ops.getattr,setattr:Ft.node_ops.setattr},stream:{llseek:Ft.stream_ops.llseek,read:Ft.stream_ops.read,write:Ft.stream_ops.write,allocate:Ft.stream_ops.allocate,mmap:Ft.stream_ops.mmap,msync:Ft.stream_ops.msync}},link:{node:{getattr:Ft.node_ops.getattr,setattr:Ft.node_ops.setattr,readlink:Ft.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Ft.node_ops.getattr,setattr:Ft.node_ops.setattr},stream:I.chrdev_stream_ops}};var N=I.createNode(h,m,M,E);return I.isDir(N.mode)?(N.node_ops=Ft.ops_table.dir.node,N.stream_ops=Ft.ops_table.dir.stream,N.contents={}):I.isFile(N.mode)?(N.node_ops=Ft.ops_table.file.node,N.stream_ops=Ft.ops_table.file.stream,N.usedBytes=0,N.contents=null):I.isLink(N.mode)?(N.node_ops=Ft.ops_table.link.node,N.stream_ops=Ft.ops_table.link.stream):I.isChrdev(N.mode)&&(N.node_ops=Ft.ops_table.chrdev.node,N.stream_ops=Ft.ops_table.chrdev.stream),N.timestamp=Date.now(),h&&(h.contents[m]=N,h.timestamp=N.timestamp),N},getFileDataAsTypedArray(h){return h.contents?h.contents.subarray?h.contents.subarray(0,h.usedBytes):new Uint8Array(h.contents):new Uint8Array(0)},expandFileStorage(h,m){var M=h.contents?h.contents.length:0;if(!(M>=m)){var E=1024*1024;m=Math.max(m,M*(M<E?2:1.125)>>>0),M!=0&&(m=Math.max(m,256));var N=h.contents;h.contents=new Uint8Array(m),h.usedBytes>0&&h.contents.set(N.subarray(0,h.usedBytes),0)}},resizeFileStorage(h,m){if(h.usedBytes!=m)if(m==0)h.contents=null,h.usedBytes=0;else{var M=h.contents;h.contents=new Uint8Array(m),M&&h.contents.set(M.subarray(0,Math.min(m,h.usedBytes))),h.usedBytes=m}},node_ops:{getattr(h){var m={};return m.dev=I.isChrdev(h.mode)?h.id:1,m.ino=h.id,m.mode=h.mode,m.nlink=1,m.uid=0,m.gid=0,m.rdev=h.rdev,I.isDir(h.mode)?m.size=4096:I.isFile(h.mode)?m.size=h.usedBytes:I.isLink(h.mode)?m.size=h.link.length:m.size=0,m.atime=new Date(h.timestamp),m.mtime=new Date(h.timestamp),m.ctime=new Date(h.timestamp),m.blksize=4096,m.blocks=Math.ceil(m.size/m.blksize),m},setattr(h,m){m.mode!==void 0&&(h.mode=m.mode),m.timestamp!==void 0&&(h.timestamp=m.timestamp),m.size!==void 0&&Ft.resizeFileStorage(h,m.size)},lookup(h,m){throw I.genericErrors[44]},mknod(h,m,M,E){return Ft.createNode(h,m,M,E)},rename(h,m,M){if(I.isDir(h.mode)){var E;try{E=I.lookupNode(m,M)}catch{}if(E)for(var N in E.contents)throw new I.ErrnoError(55)}delete h.parent.contents[h.name],h.parent.timestamp=Date.now(),h.name=M,m.contents[M]=h,m.timestamp=h.parent.timestamp},unlink(h,m){delete h.contents[m],h.timestamp=Date.now()},rmdir(h,m){var M=I.lookupNode(h,m);for(var E in M.contents)throw new I.ErrnoError(55);delete h.contents[m],h.timestamp=Date.now()},readdir(h){var m=[".",".."];for(var M of Object.keys(h.contents))m.push(M);return m},symlink(h,m,M){var E=Ft.createNode(h,m,41471,0);return E.link=M,E},readlink(h){if(!I.isLink(h.mode))throw new I.ErrnoError(28);return h.link}},stream_ops:{read(h,m,M,E,N){var G=h.node.contents;if(N>=h.node.usedBytes)return 0;var tt=Math.min(h.node.usedBytes-N,E);if(tt>8&&G.subarray)m.set(G.subarray(N,N+tt),M);else for(var at=0;at<tt;at++)m[M+at]=G[N+at];return tt},write(h,m,M,E,N,G){if(m.buffer===et.buffer&&(G=!1),!E)return 0;var tt=h.node;if(tt.timestamp=Date.now(),m.subarray&&(!tt.contents||tt.contents.subarray)){if(G)return tt.contents=m.subarray(M,M+E),tt.usedBytes=E,E;if(tt.usedBytes===0&&N===0)return tt.contents=m.slice(M,M+E),tt.usedBytes=E,E;if(N+E<=tt.usedBytes)return tt.contents.set(m.subarray(M,M+E),N),E}if(Ft.expandFileStorage(tt,N+E),tt.contents.subarray&&m.subarray)tt.contents.set(m.subarray(M,M+E),N);else for(var at=0;at<E;at++)tt.contents[N+at]=m[M+at];return tt.usedBytes=Math.max(tt.usedBytes,N+E),E},llseek(h,m,M){var E=m;if(M===1?E+=h.position:M===2&&I.isFile(h.node.mode)&&(E+=h.node.usedBytes),E<0)throw new I.ErrnoError(28);return E},allocate(h,m,M){Ft.expandFileStorage(h.node,m+M),h.node.usedBytes=Math.max(h.node.usedBytes,m+M)},mmap(h,m,M,E,N){if(!I.isFile(h.node.mode))throw new I.ErrnoError(43);var G,tt,at=h.node.contents;if(!(N&2)&&at&&at.buffer===et.buffer)tt=!1,G=at.byteOffset;else{if(tt=!0,G=Rt(m),!G)throw new I.ErrnoError(48);at&&((M>0||M+m<at.length)&&(at.subarray?at=at.subarray(M,M+m):at=Array.prototype.slice.call(at,M,M+m)),et.set(at,G))}return{ptr:G,allocated:tt}},msync(h,m,M,E,N){return Ft.stream_ops.write(h,m,0,E,M,!1),0}}},re=(h,m,M,E)=>{var N=E?"":`al ${h}`;S(h).then(G=>{m(new Uint8Array(G)),N&&Yt(N)},G=>{if(M)M();else throw`Loading data file "${h}" failed.`}),N&&fe(N)},Fe=(h,m,M,E,N,G)=>{I.createDataFile(h,m,M,E,N,G)},Pe=i.preloadPlugins||[],Sn=(h,m,M,E)=>{typeof Browser<"u"&&Browser.init();var N=!1;return Pe.forEach(G=>{N||G.canHandle(m)&&(G.handle(h,m,M,E),N=!0)}),N},An=(h,m,M,E,N,G,tt,at,bt,Ut)=>{var Kt=m?K.resolve(xt.join2(h,m)):h,ie=`cp ${Kt}`;function he(ae){function ve(Oe){Ut?.(),at||Fe(h,m,Oe,E,N,bt),G?.(),Yt(ie)}Sn(ae,Kt,ve,()=>{tt?.(),Yt(ie)})||ve(ae)}fe(ie),typeof M=="string"?re(M,he,tt):he(M)},Os=h=>{var m={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},M=m[h];if(typeof M>"u")throw new Error(`Unknown file open mode: ${h}`);return M},mr=(h,m)=>{var M=0;return h&&(M|=365),m&&(M|=146),M},I={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:class{constructor(h){this.name="ErrnoError",this.errno=h}},genericErrors:{},filesystems:null,syncFSRequests:0,readFiles:{},FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(h){this.node=h}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(h){this.shared.flags=h}get position(){return this.shared.position}set position(h){this.shared.position=h}},FSNode:class{constructor(h,m,M,E){h||(h=this),this.parent=h,this.mount=h.mount,this.mounted=null,this.id=I.nextInode++,this.name=m,this.mode=M,this.node_ops={},this.stream_ops={},this.rdev=E,this.readMode=365,this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(h){h?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(h){h?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return I.isDir(this.mode)}get isDevice(){return I.isChrdev(this.mode)}},lookupPath(h,m={}){if(h=K.resolve(h),!h)return{path:"",node:null};var M={follow_mount:!0,recurse_count:0};if(m=Object.assign(M,m),m.recurse_count>8)throw new I.ErrnoError(32);for(var E=h.split("/").filter(ie=>!!ie),N=I.root,G="/",tt=0;tt<E.length;tt++){var at=tt===E.length-1;if(at&&m.parent)break;if(N=I.lookupNode(N,E[tt]),G=xt.join2(G,E[tt]),I.isMountpoint(N)&&(!at||at&&m.follow_mount)&&(N=N.mounted.root),!at||m.follow)for(var bt=0;I.isLink(N.mode);){var Ut=I.readlink(G);G=K.resolve(xt.dirname(G),Ut);var Kt=I.lookupPath(G,{recurse_count:m.recurse_count+1});if(N=Kt.node,bt++>40)throw new I.ErrnoError(32)}}return{path:G,node:N}},getPath(h){for(var m;;){if(I.isRoot(h)){var M=h.mount.mountpoint;return m?M[M.length-1]!=="/"?`${M}/${m}`:M+m:M}m=m?`${h.name}/${m}`:h.name,h=h.parent}},hashName(h,m){for(var M=0,E=0;E<m.length;E++)M=(M<<5)-M+m.charCodeAt(E)|0;return(h+M>>>0)%I.nameTable.length},hashAddNode(h){var m=I.hashName(h.parent.id,h.name);h.name_next=I.nameTable[m],I.nameTable[m]=h},hashRemoveNode(h){var m=I.hashName(h.parent.id,h.name);if(I.nameTable[m]===h)I.nameTable[m]=h.name_next;else for(var M=I.nameTable[m];M;){if(M.name_next===h){M.name_next=h.name_next;break}M=M.name_next}},lookupNode(h,m){var M=I.mayLookup(h);if(M)throw new I.ErrnoError(M);for(var E=I.hashName(h.id,m),N=I.nameTable[E];N;N=N.name_next){var G=N.name;if(N.parent.id===h.id&&G===m)return N}return I.lookup(h,m)},createNode(h,m,M,E){var N=new I.FSNode(h,m,M,E);return I.hashAddNode(N),N},destroyNode(h){I.hashRemoveNode(h)},isRoot(h){return h===h.parent},isMountpoint(h){return!!h.mounted},isFile(h){return(h&61440)===32768},isDir(h){return(h&61440)===16384},isLink(h){return(h&61440)===40960},isChrdev(h){return(h&61440)===8192},isBlkdev(h){return(h&61440)===24576},isFIFO(h){return(h&61440)===4096},isSocket(h){return(h&49152)===49152},flagsToPermissionString(h){var m=["r","w","rw"][h&3];return h&512&&(m+="w"),m},nodePermissions(h,m){return I.ignorePermissions?0:m.includes("r")&&!(h.mode&292)||m.includes("w")&&!(h.mode&146)||m.includes("x")&&!(h.mode&73)?2:0},mayLookup(h){if(!I.isDir(h.mode))return 54;var m=I.nodePermissions(h,"x");return m||(h.node_ops.lookup?0:2)},mayCreate(h,m){try{var M=I.lookupNode(h,m);return 20}catch{}return I.nodePermissions(h,"wx")},mayDelete(h,m,M){var E;try{E=I.lookupNode(h,m)}catch(G){return G.errno}var N=I.nodePermissions(h,"wx");if(N)return N;if(M){if(!I.isDir(E.mode))return 54;if(I.isRoot(E)||I.getPath(E)===I.cwd())return 10}else if(I.isDir(E.mode))return 31;return 0},mayOpen(h,m){return h?I.isLink(h.mode)?32:I.isDir(h.mode)&&(I.flagsToPermissionString(m)!=="r"||m&512)?31:I.nodePermissions(h,I.flagsToPermissionString(m)):44},MAX_OPEN_FDS:4096,nextfd(){for(var h=0;h<=I.MAX_OPEN_FDS;h++)if(!I.streams[h])return h;throw new I.ErrnoError(33)},getStreamChecked(h){var m=I.getStream(h);if(!m)throw new I.ErrnoError(8);return m},getStream:h=>I.streams[h],createStream(h,m=-1){return h=Object.assign(new I.FSStream,h),m==-1&&(m=I.nextfd()),h.fd=m,I.streams[m]=h,h},closeStream(h){I.streams[h]=null},dupStream(h,m=-1){var M=I.createStream(h,m);return M.stream_ops?.dup?.(M),M},chrdev_stream_ops:{open(h){var m=I.getDevice(h.node.rdev);h.stream_ops=m.stream_ops,h.stream_ops.open?.(h)},llseek(){throw new I.ErrnoError(70)}},major:h=>h>>8,minor:h=>h&255,makedev:(h,m)=>h<<8|m,registerDevice(h,m){I.devices[h]={stream_ops:m}},getDevice:h=>I.devices[h],getMounts(h){for(var m=[],M=[h];M.length;){var E=M.pop();m.push(E),M.push(...E.mounts)}return m},syncfs(h,m){typeof h=="function"&&(m=h,h=!1),I.syncFSRequests++,I.syncFSRequests>1&&U(`warning: ${I.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var M=I.getMounts(I.root.mount),E=0;function N(tt){return I.syncFSRequests--,m(tt)}function G(tt){if(tt)return G.errored?void 0:(G.errored=!0,N(tt));++E>=M.length&&N(null)}M.forEach(tt=>{if(!tt.type.syncfs)return G(null);tt.type.syncfs(tt,h,G)})},mount(h,m,M){var E=M==="/",N=!M,G;if(E&&I.root)throw new I.ErrnoError(10);if(!E&&!N){var tt=I.lookupPath(M,{follow_mount:!1});if(M=tt.path,G=tt.node,I.isMountpoint(G))throw new I.ErrnoError(10);if(!I.isDir(G.mode))throw new I.ErrnoError(54)}var at={type:h,opts:m,mountpoint:M,mounts:[]},bt=h.mount(at);return bt.mount=at,at.root=bt,E?I.root=bt:G&&(G.mounted=at,G.mount&&G.mount.mounts.push(at)),bt},unmount(h){var m=I.lookupPath(h,{follow_mount:!1});if(!I.isMountpoint(m.node))throw new I.ErrnoError(28);var M=m.node,E=M.mounted,N=I.getMounts(E);Object.keys(I.nameTable).forEach(tt=>{for(var at=I.nameTable[tt];at;){var bt=at.name_next;N.includes(at.mount)&&I.destroyNode(at),at=bt}}),M.mounted=null;var G=M.mount.mounts.indexOf(E);M.mount.mounts.splice(G,1)},lookup(h,m){return h.node_ops.lookup(h,m)},mknod(h,m,M){var E=I.lookupPath(h,{parent:!0}),N=E.node,G=xt.basename(h);if(!G||G==="."||G==="..")throw new I.ErrnoError(28);var tt=I.mayCreate(N,G);if(tt)throw new I.ErrnoError(tt);if(!N.node_ops.mknod)throw new I.ErrnoError(63);return N.node_ops.mknod(N,G,m,M)},create(h,m){return m=m!==void 0?m:438,m&=4095,m|=32768,I.mknod(h,m,0)},mkdir(h,m){return m=m!==void 0?m:511,m&=1023,m|=16384,I.mknod(h,m,0)},mkdirTree(h,m){for(var M=h.split("/"),E="",N=0;N<M.length;++N)if(M[N]){E+="/"+M[N];try{I.mkdir(E,m)}catch(G){if(G.errno!=20)throw G}}},mkdev(h,m,M){return typeof M>"u"&&(M=m,m=438),m|=8192,I.mknod(h,m,M)},symlink(h,m){if(!K.resolve(h))throw new I.ErrnoError(44);var M=I.lookupPath(m,{parent:!0}),E=M.node;if(!E)throw new I.ErrnoError(44);var N=xt.basename(m),G=I.mayCreate(E,N);if(G)throw new I.ErrnoError(G);if(!E.node_ops.symlink)throw new I.ErrnoError(63);return E.node_ops.symlink(E,N,h)},rename(h,m){var M=xt.dirname(h),E=xt.dirname(m),N=xt.basename(h),G=xt.basename(m),tt,at,bt;if(tt=I.lookupPath(h,{parent:!0}),at=tt.node,tt=I.lookupPath(m,{parent:!0}),bt=tt.node,!at||!bt)throw new I.ErrnoError(44);if(at.mount!==bt.mount)throw new I.ErrnoError(75);var Ut=I.lookupNode(at,N),Kt=K.relative(h,E);if(Kt.charAt(0)!==".")throw new I.ErrnoError(28);if(Kt=K.relative(m,M),Kt.charAt(0)!==".")throw new I.ErrnoError(55);var ie;try{ie=I.lookupNode(bt,G)}catch{}if(Ut!==ie){var he=I.isDir(Ut.mode),ae=I.mayDelete(at,N,he);if(ae)throw new I.ErrnoError(ae);if(ae=ie?I.mayDelete(bt,G,he):I.mayCreate(bt,G),ae)throw new I.ErrnoError(ae);if(!at.node_ops.rename)throw new I.ErrnoError(63);if(I.isMountpoint(Ut)||ie&&I.isMountpoint(ie))throw new I.ErrnoError(10);if(bt!==at&&(ae=I.nodePermissions(at,"w"),ae))throw new I.ErrnoError(ae);I.hashRemoveNode(Ut);try{at.node_ops.rename(Ut,bt,G),Ut.parent=bt}catch(ve){throw ve}finally{I.hashAddNode(Ut)}}},rmdir(h){var m=I.lookupPath(h,{parent:!0}),M=m.node,E=xt.basename(h),N=I.lookupNode(M,E),G=I.mayDelete(M,E,!0);if(G)throw new I.ErrnoError(G);if(!M.node_ops.rmdir)throw new I.ErrnoError(63);if(I.isMountpoint(N))throw new I.ErrnoError(10);M.node_ops.rmdir(M,E),I.destroyNode(N)},readdir(h){var m=I.lookupPath(h,{follow:!0}),M=m.node;if(!M.node_ops.readdir)throw new I.ErrnoError(54);return M.node_ops.readdir(M)},unlink(h){var m=I.lookupPath(h,{parent:!0}),M=m.node;if(!M)throw new I.ErrnoError(44);var E=xt.basename(h),N=I.lookupNode(M,E),G=I.mayDelete(M,E,!1);if(G)throw new I.ErrnoError(G);if(!M.node_ops.unlink)throw new I.ErrnoError(63);if(I.isMountpoint(N))throw new I.ErrnoError(10);M.node_ops.unlink(M,E),I.destroyNode(N)},readlink(h){var m=I.lookupPath(h),M=m.node;if(!M)throw new I.ErrnoError(44);if(!M.node_ops.readlink)throw new I.ErrnoError(28);return K.resolve(I.getPath(M.parent),M.node_ops.readlink(M))},stat(h,m){var M=I.lookupPath(h,{follow:!m}),E=M.node;if(!E)throw new I.ErrnoError(44);if(!E.node_ops.getattr)throw new I.ErrnoError(63);return E.node_ops.getattr(E)},lstat(h){return I.stat(h,!0)},chmod(h,m,M){var E;if(typeof h=="string"){var N=I.lookupPath(h,{follow:!M});E=N.node}else E=h;if(!E.node_ops.setattr)throw new I.ErrnoError(63);E.node_ops.setattr(E,{mode:m&4095|E.mode&-4096,timestamp:Date.now()})},lchmod(h,m){I.chmod(h,m,!0)},fchmod(h,m){var M=I.getStreamChecked(h);I.chmod(M.node,m)},chown(h,m,M,E){var N;if(typeof h=="string"){var G=I.lookupPath(h,{follow:!E});N=G.node}else N=h;if(!N.node_ops.setattr)throw new I.ErrnoError(63);N.node_ops.setattr(N,{timestamp:Date.now()})},lchown(h,m,M){I.chown(h,m,M,!0)},fchown(h,m,M){var E=I.getStreamChecked(h);I.chown(E.node,m,M)},truncate(h,m){if(m<0)throw new I.ErrnoError(28);var M;if(typeof h=="string"){var E=I.lookupPath(h,{follow:!0});M=E.node}else M=h;if(!M.node_ops.setattr)throw new I.ErrnoError(63);if(I.isDir(M.mode))throw new I.ErrnoError(31);if(!I.isFile(M.mode))throw new I.ErrnoError(28);var N=I.nodePermissions(M,"w");if(N)throw new I.ErrnoError(N);M.node_ops.setattr(M,{size:m,timestamp:Date.now()})},ftruncate(h,m){var M=I.getStreamChecked(h);if((M.flags&2097155)===0)throw new I.ErrnoError(28);I.truncate(M.node,m)},utime(h,m,M){var E=I.lookupPath(h,{follow:!0}),N=E.node;N.node_ops.setattr(N,{timestamp:Math.max(m,M)})},open(h,m,M){if(h==="")throw new I.ErrnoError(44);m=typeof m=="string"?Os(m):m,m&64?(M=typeof M>"u"?438:M,M=M&4095|32768):M=0;var E;if(typeof h=="object")E=h;else{h=xt.normalize(h);try{var N=I.lookupPath(h,{follow:!(m&131072)});E=N.node}catch{}}var G=!1;if(m&64)if(E){if(m&128)throw new I.ErrnoError(20)}else E=I.mknod(h,M,0),G=!0;if(!E)throw new I.ErrnoError(44);if(I.isChrdev(E.mode)&&(m&=-513),m&65536&&!I.isDir(E.mode))throw new I.ErrnoError(54);if(!G){var tt=I.mayOpen(E,m);if(tt)throw new I.ErrnoError(tt)}m&512&&!G&&I.truncate(E,0),m&=-131713;var at=I.createStream({node:E,path:I.getPath(E),flags:m,seekable:!0,position:0,stream_ops:E.stream_ops,ungotten:[],error:!1});return at.stream_ops.open&&at.stream_ops.open(at),i.logReadFiles&&!(m&1)&&(h in I.readFiles||(I.readFiles[h]=1)),at},close(h){if(I.isClosed(h))throw new I.ErrnoError(8);h.getdents&&(h.getdents=null);try{h.stream_ops.close&&h.stream_ops.close(h)}catch(m){throw m}finally{I.closeStream(h.fd)}h.fd=null},isClosed(h){return h.fd===null},llseek(h,m,M){if(I.isClosed(h))throw new I.ErrnoError(8);if(!h.seekable||!h.stream_ops.llseek)throw new I.ErrnoError(70);if(M!=0&&M!=1&&M!=2)throw new I.ErrnoError(28);return h.position=h.stream_ops.llseek(h,m,M),h.ungotten=[],h.position},read(h,m,M,E,N){if(E<0||N<0)throw new I.ErrnoError(28);if(I.isClosed(h))throw new I.ErrnoError(8);if((h.flags&2097155)===1)throw new I.ErrnoError(8);if(I.isDir(h.node.mode))throw new I.ErrnoError(31);if(!h.stream_ops.read)throw new I.ErrnoError(28);var G=typeof N<"u";if(!G)N=h.position;else if(!h.seekable)throw new I.ErrnoError(70);var tt=h.stream_ops.read(h,m,M,E,N);return G||(h.position+=tt),tt},write(h,m,M,E,N,G){if(E<0||N<0)throw new I.ErrnoError(28);if(I.isClosed(h))throw new I.ErrnoError(8);if((h.flags&2097155)===0)throw new I.ErrnoError(8);if(I.isDir(h.node.mode))throw new I.ErrnoError(31);if(!h.stream_ops.write)throw new I.ErrnoError(28);h.seekable&&h.flags&1024&&I.llseek(h,0,2);var tt=typeof N<"u";if(!tt)N=h.position;else if(!h.seekable)throw new I.ErrnoError(70);var at=h.stream_ops.write(h,m,M,E,N,G);return tt||(h.position+=at),at},allocate(h,m,M){if(I.isClosed(h))throw new I.ErrnoError(8);if(m<0||M<=0)throw new I.ErrnoError(28);if((h.flags&2097155)===0)throw new I.ErrnoError(8);if(!I.isFile(h.node.mode)&&!I.isDir(h.node.mode))throw new I.ErrnoError(43);if(!h.stream_ops.allocate)throw new I.ErrnoError(138);h.stream_ops.allocate(h,m,M)},mmap(h,m,M,E,N){if((E&2)!==0&&(N&2)===0&&(h.flags&2097155)!==2)throw new I.ErrnoError(2);if((h.flags&2097155)===1)throw new I.ErrnoError(2);if(!h.stream_ops.mmap)throw new I.ErrnoError(43);if(!m)throw new I.ErrnoError(28);return h.stream_ops.mmap(h,m,M,E,N)},msync(h,m,M,E,N){return h.stream_ops.msync?h.stream_ops.msync(h,m,M,E,N):0},ioctl(h,m,M){if(!h.stream_ops.ioctl)throw new I.ErrnoError(59);return h.stream_ops.ioctl(h,m,M)},readFile(h,m={}){if(m.flags=m.flags||0,m.encoding=m.encoding||"binary",m.encoding!=="utf8"&&m.encoding!=="binary")throw new Error(`Invalid encoding type "${m.encoding}"`);var M,E=I.open(h,m.flags),N=I.stat(h),G=N.size,tt=new Uint8Array(G);return I.read(E,tt,0,G,0),m.encoding==="utf8"?M=ut(tt):m.encoding==="binary"&&(M=tt),I.close(E),M},writeFile(h,m,M={}){M.flags=M.flags||577;var E=I.open(h,M.flags,M.mode);if(typeof m=="string"){var N=new Uint8Array(It(m)+1),G=Vt(m,N,0,N.length);I.write(E,N,0,G,void 0,M.canOwn)}else if(ArrayBuffer.isView(m))I.write(E,m,0,m.byteLength,void 0,M.canOwn);else throw new Error("Unsupported data type");I.close(E)},cwd:()=>I.currentPath,chdir(h){var m=I.lookupPath(h,{follow:!0});if(m.node===null)throw new I.ErrnoError(44);if(!I.isDir(m.node.mode))throw new I.ErrnoError(54);var M=I.nodePermissions(m.node,"x");if(M)throw new I.ErrnoError(M);I.currentPath=m.path},createDefaultDirectories(){I.mkdir("/tmp"),I.mkdir("/home"),I.mkdir("/home/web_user")},createDefaultDevices(){I.mkdir("/dev"),I.registerDevice(I.makedev(1,3),{read:()=>0,write:(E,N,G,tt,at)=>tt}),I.mkdev("/dev/null",I.makedev(1,3)),gt.register(I.makedev(5,0),gt.default_tty_ops),gt.register(I.makedev(6,0),gt.default_tty1_ops),I.mkdev("/dev/tty",I.makedev(5,0)),I.mkdev("/dev/tty1",I.makedev(6,0));var h=new Uint8Array(1024),m=0,M=()=>(m===0&&(m=j(h).byteLength),h[--m]);I.createDevice("/dev","random",M),I.createDevice("/dev","urandom",M),I.mkdir("/dev/shm"),I.mkdir("/dev/shm/tmp")},createSpecialDirectories(){I.mkdir("/proc");var h=I.mkdir("/proc/self");I.mkdir("/proc/self/fd"),I.mount({mount(){var m=I.createNode(h,"fd",16895,73);return m.node_ops={lookup(M,E){var N=+E,G=I.getStreamChecked(N),tt={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>G.path}};return tt.parent=tt,tt}},m}},{},"/proc/self/fd")},createStandardStreams(h,m,M){h?I.createDevice("/dev","stdin",h):I.symlink("/dev/tty","/dev/stdin"),m?I.createDevice("/dev","stdout",null,m):I.symlink("/dev/tty","/dev/stdout"),M?I.createDevice("/dev","stderr",null,M):I.symlink("/dev/tty1","/dev/stderr");var E=I.open("/dev/stdin",0),N=I.open("/dev/stdout",1),G=I.open("/dev/stderr",1)},staticInit(){[44].forEach(h=>{I.genericErrors[h]=new I.ErrnoError(h),I.genericErrors[h].stack="<generic error, no stack>"}),I.nameTable=new Array(4096),I.mount(Ft,{},"/"),I.createDefaultDirectories(),I.createDefaultDevices(),I.createSpecialDirectories(),I.filesystems={MEMFS:Ft}},init(h,m,M){I.initialized=!0,h??=i.stdin,m??=i.stdout,M??=i.stderr,I.createStandardStreams(h,m,M)},quit(){I.initialized=!1;for(var h=0;h<I.streams.length;h++){var m=I.streams[h];m&&I.close(m)}},findObject(h,m){var M=I.analyzePath(h,m);return M.exists?M.object:null},analyzePath(h,m){try{var M=I.lookupPath(h,{follow:!m});h=M.path}catch{}var E={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var M=I.lookupPath(h,{parent:!0});E.parentExists=!0,E.parentPath=M.path,E.parentObject=M.node,E.name=xt.basename(h),M=I.lookupPath(h,{follow:!m}),E.exists=!0,E.path=M.path,E.object=M.node,E.name=M.node.name,E.isRoot=M.path==="/"}catch(N){E.error=N.errno}return E},createPath(h,m,M,E){h=typeof h=="string"?h:I.getPath(h);for(var N=m.split("/").reverse();N.length;){var G=N.pop();if(G){var tt=xt.join2(h,G);try{I.mkdir(tt)}catch{}h=tt}}return tt},createFile(h,m,M,E,N){var G=xt.join2(typeof h=="string"?h:I.getPath(h),m),tt=mr(E,N);return I.create(G,tt)},createDataFile(h,m,M,E,N,G){var tt=m;h&&(h=typeof h=="string"?h:I.getPath(h),tt=m?xt.join2(h,m):h);var at=mr(E,N),bt=I.create(tt,at);if(M){if(typeof M=="string"){for(var Ut=new Array(M.length),Kt=0,ie=M.length;Kt<ie;++Kt)Ut[Kt]=M.charCodeAt(Kt);M=Ut}I.chmod(bt,at|146);var he=I.open(bt,577);I.write(he,M,0,M.length,0,G),I.close(he),I.chmod(bt,at)}},createDevice(h,m,M,E){var N=xt.join2(typeof h=="string"?h:I.getPath(h),m),G=mr(!!M,!!E);I.createDevice.major??=64;var tt=I.makedev(I.createDevice.major++,0);return I.registerDevice(tt,{open(at){at.seekable=!1},close(at){E?.buffer?.length&&E(10)},read(at,bt,Ut,Kt,ie){for(var he=0,ae=0;ae<Kt;ae++){var ve;try{ve=M()}catch{throw new I.ErrnoError(29)}if(ve===void 0&&he===0)throw new I.ErrnoError(6);if(ve==null)break;he++,bt[Ut+ae]=ve}return he&&(at.node.timestamp=Date.now()),he},write(at,bt,Ut,Kt,ie){for(var he=0;he<Kt;he++)try{E(bt[Ut+he])}catch{throw new I.ErrnoError(29)}return Kt&&(at.node.timestamp=Date.now()),he}}),I.mkdev(N,G,tt)},forceLoadFile(h){if(h.isDevice||h.isFolder||h.link||h.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{h.contents=x(h.url),h.usedBytes=h.contents.length}catch{throw new I.ErrnoError(29)}},createLazyFile(h,m,M,E,N){class G{constructor(){this.lengthKnown=!1,this.chunks=[]}get(ae){if(!(ae>this.length-1||ae<0)){var ve=ae%this.chunkSize,Oe=ae/this.chunkSize|0;return this.getter(Oe)[ve]}}setDataGetter(ae){this.getter=ae}cacheLength(){var ae=new XMLHttpRequest;if(ae.open("HEAD",M,!1),ae.send(null),!(ae.status>=200&&ae.status<300||ae.status===304))throw new Error("Couldn't load "+M+". Status: "+ae.status);var ve=Number(ae.getResponseHeader("Content-length")),Oe,mn=(Oe=ae.getResponseHeader("Accept-Ranges"))&&Oe==="bytes",Qe=(Oe=ae.getResponseHeader("Content-Encoding"))&&Oe==="gzip",jn=1024*1024;mn||(jn=ve);var Kn=(fi,Hr)=>{if(fi>Hr)throw new Error("invalid range ("+fi+", "+Hr+") or no bytes requested!");if(Hr>ve-1)throw new Error("only "+ve+" bytes available! programmer error!");var fn=new XMLHttpRequest;if(fn.open("GET",M,!1),ve!==jn&&fn.setRequestHeader("Range","bytes="+fi+"-"+Hr),fn.responseType="arraybuffer",fn.overrideMimeType&&fn.overrideMimeType("text/plain; charset=x-user-defined"),fn.send(null),!(fn.status>=200&&fn.status<300||fn.status===304))throw new Error("Couldn't load "+M+". Status: "+fn.status);return fn.response!==void 0?new Uint8Array(fn.response||[]):V(fn.responseText||"",!0)},zs=this;zs.setDataGetter(fi=>{var Hr=fi*jn,fn=(fi+1)*jn-1;if(fn=Math.min(fn,ve-1),typeof zs.chunks[fi]>"u"&&(zs.chunks[fi]=Kn(Hr,fn)),typeof zs.chunks[fi]>"u")throw new Error("doXHR failed!");return zs.chunks[fi]}),(Qe||!ve)&&(jn=ve=1,ve=this.getter(0).length,jn=ve,R("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=ve,this._chunkSize=jn,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!f)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var tt=new G,at={isDevice:!1,contents:tt}}else var at={isDevice:!1,url:M};var bt=I.createFile(h,m,at,E,N);at.contents?bt.contents=at.contents:at.url&&(bt.contents=null,bt.url=at.url),Object.defineProperties(bt,{usedBytes:{get:function(){return this.contents.length}}});var Ut={},Kt=Object.keys(bt.stream_ops);Kt.forEach(he=>{var ae=bt.stream_ops[he];Ut[he]=(...ve)=>(I.forceLoadFile(bt),ae(...ve))});function ie(he,ae,ve,Oe,mn){var Qe=he.node.contents;if(mn>=Qe.length)return 0;var jn=Math.min(Qe.length-mn,Oe);if(Qe.slice)for(var Kn=0;Kn<jn;Kn++)ae[ve+Kn]=Qe[mn+Kn];else for(var Kn=0;Kn<jn;Kn++)ae[ve+Kn]=Qe.get(mn+Kn);return jn}return Ut.read=(he,ae,ve,Oe,mn)=>(I.forceLoadFile(bt),ie(he,ae,ve,Oe,mn)),Ut.mmap=(he,ae,ve,Oe,mn)=>{I.forceLoadFile(bt);var Qe=Rt(ae);if(!Qe)throw new I.ErrnoError(48);return ie(he,et,Qe,ae,ve),{ptr:Qe,allocated:!0}},bt.stream_ops=Ut,bt}},bi=(h,m)=>h?ut(st,h,m):"",Ce={DEFAULT_POLLMASK:5,calculateAt(h,m,M){if(xt.isAbs(m))return m;var E;if(h===-100)E=I.cwd();else{var N=Ce.getStreamFromFD(h);E=N.path}if(m.length==0){if(!M)throw new I.ErrnoError(44);return E}return xt.join2(E,m)},doStat(h,m,M){var E=h(m);Z[M>>2]=E.dev,Z[M+4>>2]=E.mode,lt[M+8>>2]=E.nlink,Z[M+12>>2]=E.uid,Z[M+16>>2]=E.gid,Z[M+20>>2]=E.rdev,mt=[E.size>>>0,(it=E.size,+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],Z[M+24>>2]=mt[0],Z[M+28>>2]=mt[1],Z[M+32>>2]=4096,Z[M+36>>2]=E.blocks;var N=E.atime.getTime(),G=E.mtime.getTime(),tt=E.ctime.getTime();return mt=[Math.floor(N/1e3)>>>0,(it=Math.floor(N/1e3),+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],Z[M+40>>2]=mt[0],Z[M+44>>2]=mt[1],lt[M+48>>2]=N%1e3*1e3*1e3,mt=[Math.floor(G/1e3)>>>0,(it=Math.floor(G/1e3),+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],Z[M+56>>2]=mt[0],Z[M+60>>2]=mt[1],lt[M+64>>2]=G%1e3*1e3*1e3,mt=[Math.floor(tt/1e3)>>>0,(it=Math.floor(tt/1e3),+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],Z[M+72>>2]=mt[0],Z[M+76>>2]=mt[1],lt[M+80>>2]=tt%1e3*1e3*1e3,mt=[E.ino>>>0,(it=E.ino,+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],Z[M+88>>2]=mt[0],Z[M+92>>2]=mt[1],0},doMsync(h,m,M,E,N){if(!I.isFile(m.node.mode))throw new I.ErrnoError(43);if(E&2)return 0;var G=st.slice(h,h+M);I.msync(m,G,N,M,E)},getStreamFromFD(h){var m=I.getStreamChecked(h);return m},varargs:void 0,getStr(h){var m=bi(h);return m}};function Nr(h,m){try{return h=Ce.getStr(h),I.chmod(h,m),0}catch(M){if(typeof I>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}function Dr(h,m,M,E){try{if(m=Ce.getStr(m),m=Ce.calculateAt(h,m),M&-8)return-28;var N=I.lookupPath(m,{follow:!0}),G=N.node;if(!G)return-44;var tt="";return M&4&&(tt+="r"),M&2&&(tt+="w"),M&1&&(tt+="x"),tt&&I.nodePermissions(G,tt)?-2:0}catch(at){if(typeof I>"u"||at.name!=="ErrnoError")throw at;return-at.errno}}function Cn(){var h=Z[+Ce.varargs>>2];return Ce.varargs+=4,h}var Xn=Cn;function Or(h,m,M){Ce.varargs=M;try{var E=Ce.getStreamFromFD(h);switch(m){case 0:{var N=Cn();if(N<0)return-28;for(;I.streams[N];)N++;var G;return G=I.dupStream(E,N),G.fd}case 1:case 2:return 0;case 3:return E.flags;case 4:{var N=Cn();return E.flags|=N,0}case 12:{var N=Xn(),tt=0;return $[N+tt>>1]=2,0}case 13:case 14:return 0}return-28}catch(at){if(typeof I>"u"||at.name!=="ErrnoError")throw at;return-at.errno}}function hi(h,m){try{var M=Ce.getStreamFromFD(h);return Ce.doStat(I.stat,M.path,m)}catch(E){if(typeof I>"u"||E.name!=="ErrnoError")throw E;return-E.errno}}function wi(h,m,M){Ce.varargs=M;try{var E=Ce.getStreamFromFD(h);switch(m){case 21509:return E.tty?0:-59;case 21505:{if(!E.tty)return-59;if(E.tty.ops.ioctl_tcgets){var N=E.tty.ops.ioctl_tcgets(E),G=Xn();Z[G>>2]=N.c_iflag||0,Z[G+4>>2]=N.c_oflag||0,Z[G+8>>2]=N.c_cflag||0,Z[G+12>>2]=N.c_lflag||0;for(var tt=0;tt<32;tt++)et[G+tt+17]=N.c_cc[tt]||0;return 0}return 0}case 21510:case 21511:case 21512:return E.tty?0:-59;case 21506:case 21507:case 21508:{if(!E.tty)return-59;if(E.tty.ops.ioctl_tcsets){for(var G=Xn(),at=Z[G>>2],bt=Z[G+4>>2],Ut=Z[G+8>>2],Kt=Z[G+12>>2],ie=[],tt=0;tt<32;tt++)ie.push(et[G+tt+17]);return E.tty.ops.ioctl_tcsets(E.tty,m,{c_iflag:at,c_oflag:bt,c_cflag:Ut,c_lflag:Kt,c_cc:ie})}return 0}case 21519:{if(!E.tty)return-59;var G=Xn();return Z[G>>2]=0,0}case 21520:return E.tty?-28:-59;case 21531:{var G=Xn();return I.ioctl(E,m,G)}case 21523:{if(!E.tty)return-59;if(E.tty.ops.ioctl_tiocgwinsz){var he=E.tty.ops.ioctl_tiocgwinsz(E.tty),G=Xn();$[G>>1]=he[0],$[G+2>>1]=he[1]}return 0}case 21524:return E.tty?0:-59;case 21515:return E.tty?0:-59;default:return-28}}catch(ae){if(typeof I>"u"||ae.name!=="ErrnoError")throw ae;return-ae.errno}}function Fr(h,m){try{return h=Ce.getStr(h),Ce.doStat(I.lstat,h,m)}catch(M){if(typeof I>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}function Ui(h,m,M,E){try{m=Ce.getStr(m);var N=E&256,G=E&4096;return E=E&-6401,m=Ce.calculateAt(h,m,G),Ce.doStat(N?I.lstat:I.stat,m,M)}catch(tt){if(typeof I>"u"||tt.name!=="ErrnoError")throw tt;return-tt.errno}}function Ur(h,m,M,E){Ce.varargs=E;try{m=Ce.getStr(m),m=Ce.calculateAt(h,m);var N=E?Cn():0;return I.open(m,M,N).fd}catch(G){if(typeof I>"u"||G.name!=="ErrnoError")throw G;return-G.errno}}function Br(h){try{return h=Ce.getStr(h),I.rmdir(h),0}catch(m){if(typeof I>"u"||m.name!=="ErrnoError")throw m;return-m.errno}}function Fs(h,m){try{return h=Ce.getStr(h),Ce.doStat(I.stat,h,m)}catch(M){if(typeof I>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}function ui(h,m,M){try{return m=Ce.getStr(m),m=Ce.calculateAt(h,m),M===0?I.unlink(m):M===512?I.rmdir(m):pe("Invalid flags passed to unlinkat"),0}catch(E){if(typeof I>"u"||E.name!=="ErrnoError")throw E;return-E.errno}}var Us=()=>{pe("")},Bs=(h,m,M,E,N)=>{},kr=()=>{for(var h=new Array(256),m=0;m<256;++m)h[m]=String.fromCharCode(m);D=h},D,ot=h=>{for(var m="",M=h;st[M];)m+=D[st[M++]];return m},St={},_t={},vt={},Jt,zt=h=>{throw new Jt(h)},Zt,ne=h=>{throw new Zt(h)},se=(h,m,M)=>{h.forEach(at=>vt[at]=m);function E(at){var bt=M(at);bt.length!==h.length&&ne("Mismatched type converter count");for(var Ut=0;Ut<h.length;++Ut)me(h[Ut],bt[Ut])}var N=new Array(m.length),G=[],tt=0;m.forEach((at,bt)=>{_t.hasOwnProperty(at)?N[bt]=_t[at]:(G.push(at),St.hasOwnProperty(at)||(St[at]=[]),St[at].push(()=>{N[bt]=_t[at],++tt,tt===G.length&&E(N)}))}),G.length===0&&E(N)};function qt(h,m,M={}){var E=m.name;if(h||zt(`type "${E}" must have a positive integer typeid pointer`),_t.hasOwnProperty(h)){if(M.ignoreDuplicateRegistrations)return;zt(`Cannot register type '${E}' twice`)}if(_t[h]=m,delete vt[h],St.hasOwnProperty(h)){var N=St[h];delete St[h],N.forEach(G=>G())}}function me(h,m,M={}){return qt(h,m,M)}var ee=8,Ie=(h,m,M,E)=>{m=ot(m),me(h,{name:m,fromWireType:function(N){return!!N},toWireType:function(N,G){return G?M:E},argPackAdvance:ee,readValueFromPointer:function(N){return this.fromWireType(st[N])},destructorFunction:null})},We=[],Te=[],s=h=>{h>9&&--Te[h+1]===0&&(Te[h]=void 0,We.push(h))},a=()=>Te.length/2-5-We.length,c=()=>{Te.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=a},p={toValue:h=>(h||zt("Cannot use deleted val. handle = "+h),Te[h]),toHandle:h=>{switch(h){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let m=We.pop()||Te.length;return Te[m]=h,Te[m+1]=1,m}}}};function y(h){return this.fromWireType(lt[h>>2])}var A={name:"emscripten::val",fromWireType:h=>{var m=p.toValue(h);return s(h),m},toWireType:(h,m)=>p.toHandle(m),argPackAdvance:ee,readValueFromPointer:y,destructorFunction:null},F=h=>me(h,A),Q=(h,m)=>{switch(m){case 4:return function(M){return this.fromWireType(dt[M>>2])};case 8:return function(M){return this.fromWireType(Mt[M>>3])};default:throw new TypeError(`invalid float width (${m}): ${h}`)}},nt=(h,m,M)=>{m=ot(m),me(h,{name:m,fromWireType:E=>E,toWireType:(E,N)=>N,argPackAdvance:ee,readValueFromPointer:Q(m,M),destructorFunction:null})},ft=(h,m)=>Object.defineProperty(m,"name",{value:h}),Ct=h=>{for(;h.length;){var m=h.pop(),M=h.pop();M(m)}};function Tt(h){for(var m=1;m<h.length;++m)if(h[m]!==null&&h[m].destructorFunction===void 0)return!0;return!1}function Dt(h,m){if(!(h instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof h} which is not a function`);var M=ft(h.name||"unknownFunctionName",function(){});M.prototype=h.prototype;var E=new M,N=h.apply(E,m);return N instanceof Object?N:E}function oe(h,m,M,E){var N=Tt(h),G=h.length-2,tt=[],at=["fn"];m&&at.push("thisWired");for(var bt=0;bt<G;++bt)tt.push(`arg${bt}`),at.push(`arg${bt}Wired`);tt=tt.join(","),at=at.join(",");var Ut=`return function (${tt}) {
`;N&&(Ut+=`var destructors = [];
`);var Kt=N?"destructors":"null",ie=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];m&&(Ut+=`var thisWired = classParam['toWireType'](${Kt}, this);
`);for(var bt=0;bt<G;++bt)Ut+=`var arg${bt}Wired = argType${bt}['toWireType'](${Kt}, arg${bt});
`,ie.push(`argType${bt}`);if(Ut+=(M||E?"var rv = ":"")+`invoker(${at});
`,N)Ut+=`runDestructors(destructors);
`;else for(var bt=m?1:2;bt<h.length;++bt){var he=bt===1?"thisWired":"arg"+(bt-2)+"Wired";h[bt].destructorFunction!==null&&(Ut+=`${he}_dtor(${he});
`,ie.push(`${he}_dtor`))}return M&&(Ut+=`var ret = retType['fromWireType'](rv);
return ret;
`),Ut+=`}
`,[ie,Ut]}function _e(h,m,M,E,N,G){var tt=m.length;tt<2&&zt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var at=m[1]!==null&&M!==null,bt=Tt(m),Ut=m[0].name!=="void",Kt=[h,zt,E,N,Ct,m[0],m[1]],ie=0;ie<tt-2;++ie)Kt.push(m[ie+2]);if(!bt)for(var ie=at?1:2;ie<m.length;++ie)m[ie].destructorFunction!==null&&Kt.push(m[ie].destructorFunction);let[he,ae]=oe(m,at,Ut,G);he.push(ae);var ve=Dt(Function,he)(...Kt);return ft(h,ve)}var Me=(h,m,M)=>{if(h[m].overloadTable===void 0){var E=h[m];h[m]=function(...N){return h[m].overloadTable.hasOwnProperty(N.length)||zt(`Function '${M}' called with an invalid number of arguments (${N.length}) - expects one of (${h[m].overloadTable})!`),h[m].overloadTable[N.length].apply(this,N)},h[m].overloadTable=[],h[m].overloadTable[E.argCount]=E}},Be=(h,m,M)=>{i.hasOwnProperty(h)?((M===void 0||i[h].overloadTable!==void 0&&i[h].overloadTable[M]!==void 0)&&zt(`Cannot register public name '${h}' twice`),Me(i,h,h),i.hasOwnProperty(M)&&zt(`Cannot register multiple overloads of a function with the same number of arguments (${M})!`),i[h].overloadTable[M]=m):(i[h]=m,M!==void 0&&(i[h].numArguments=M))},pn=(h,m)=>{for(var M=[],E=0;E<h;E++)M.push(lt[m+E*4>>2]);return M},Wn=(h,m,M)=>{i.hasOwnProperty(h)||ne("Replacing nonexistent public symbol"),i[h].overloadTable!==void 0&&M!==void 0?i[h].overloadTable[M]=m:(i[h]=m,i[h].argCount=M)},Bi=(h,m,M)=>{h=h.replace(/p/g,"i");var E=i["dynCall_"+h];return E(m,...M)},zr=[],ko,Ei=h=>{var m=zr[h];return m||(h>=zr.length&&(zr.length=h+1),zr[h]=m=ko.get(h)),m},pp=(h,m,M=[])=>{if(h.includes("j"))return Bi(h,m,M);var E=Ei(m)(...M);return E},mp=(h,m)=>(...M)=>pp(h,m,M),gp=(h,m)=>{h=ot(h);function M(){return h.includes("j")?mp(h,m):Ei(m)}var E=M();return typeof E!="function"&&zt(`unknown function pointer with signature ${h}: ${m}`),E},_p=(h,m)=>{var M=ft(m,function(E){this.name=m,this.message=E;var N=new Error(E).stack;N!==void 0&&(this.stack=this.toString()+`
`+N.replace(/^Error(:[^\n]*)?\n/,""))});return M.prototype=Object.create(h.prototype),M.prototype.constructor=M,M.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},M},uu,fu=h=>{var m=vu(h),M=ot(m);return Ti(m),M},vp=(h,m)=>{var M=[],E={};function N(G){if(!E[G]&&!_t[G]){if(vt[G]){vt[G].forEach(N);return}M.push(G),E[G]=!0}}throw m.forEach(N),new uu(`${h}: `+M.map(fu).join([", "]))},yp=h=>{h=h.trim();let m=h.indexOf("(");return m!==-1?h.substr(0,m):h},xp=(h,m,M,E,N,G,tt,at)=>{var bt=pn(m,M);h=ot(h),h=yp(h),N=gp(E,N),Be(h,function(){vp(`Cannot call ${h} due to unbound types`,bt)},m-1),se([],bt,Ut=>{var Kt=[Ut[0],null].concat(Ut.slice(1));return Wn(h,_e(h,Kt,null,N,G,tt),m-1),[]})},Mp=(h,m,M)=>{switch(m){case 1:return M?E=>et[E]:E=>st[E];case 2:return M?E=>$[E>>1]:E=>q[E>>1];case 4:return M?E=>Z[E>>2]:E=>lt[E>>2];default:throw new TypeError(`invalid integer width (${m}): ${h}`)}},Sp=(h,m,M,E,N)=>{m=ot(m),N===-1&&(N=4294967295);var G=Kt=>Kt;if(E===0){var tt=32-8*M;G=Kt=>Kt<<tt>>>tt}var at=m.includes("unsigned"),bt=(Kt,ie)=>{},Ut;at?Ut=function(Kt,ie){return bt(ie,this.name),ie>>>0}:Ut=function(Kt,ie){return bt(ie,this.name),ie},me(h,{name:m,fromWireType:G,toWireType:Ut,argPackAdvance:ee,readValueFromPointer:Mp(m,M,E!==0),destructorFunction:null})},bp=(h,m,M)=>{var E=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],N=E[m];function G(tt){var at=lt[tt>>2],bt=lt[tt+4>>2];return new N(et.buffer,bt,at)}M=ot(M),me(h,{name:M,fromWireType:G,argPackAdvance:ee,readValueFromPointer:G},{ignoreDuplicateRegistrations:!0})},Vr=(h,m,M)=>Vt(h,st,m,M),wp=(h,m)=>{m=ot(m);var M=m==="std::string";me(h,{name:m,fromWireType(E){var N=lt[E>>2],G=E+4,tt;if(M)for(var at=G,bt=0;bt<=N;++bt){var Ut=G+bt;if(bt==N||st[Ut]==0){var Kt=Ut-at,ie=bi(at,Kt);tt===void 0?tt=ie:(tt+="\0",tt+=ie),at=Ut+1}}else{for(var he=new Array(N),bt=0;bt<N;++bt)he[bt]=String.fromCharCode(st[G+bt]);tt=he.join("")}return Ti(E),tt},toWireType(E,N){N instanceof ArrayBuffer&&(N=new Uint8Array(N));var G,tt=typeof N=="string";tt||N instanceof Uint8Array||N instanceof Uint8ClampedArray||N instanceof Int8Array||zt("Cannot pass non-string to std::string"),M&&tt?G=It(N):G=N.length;var at=mc(4+G+1),bt=at+4;if(lt[at>>2]=G,M&&tt)Vr(N,bt,G+1);else if(tt)for(var Ut=0;Ut<G;++Ut){var Kt=N.charCodeAt(Ut);Kt>255&&(Ti(bt),zt("String has UTF-16 code units that do not fit in 8 bits")),st[bt+Ut]=Kt}else for(var Ut=0;Ut<G;++Ut)st[bt+Ut]=N[Ut];return E!==null&&E.push(Ti,at),at},argPackAdvance:ee,readValueFromPointer:y,destructorFunction(E){Ti(E)}})},du=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Ep=(h,m)=>{for(var M=h,E=M>>1,N=E+m/2;!(E>=N)&&q[E];)++E;if(M=E<<1,M-h>32&&du)return du.decode(st.subarray(h,M));for(var G="",tt=0;!(tt>=m/2);++tt){var at=$[h+tt*2>>1];if(at==0)break;G+=String.fromCharCode(at)}return G},Tp=(h,m,M)=>{if(M??=2147483647,M<2)return 0;M-=2;for(var E=m,N=M<h.length*2?M/2:h.length,G=0;G<N;++G){var tt=h.charCodeAt(G);$[m>>1]=tt,m+=2}return $[m>>1]=0,m-E},Ap=h=>h.length*2,Cp=(h,m)=>{for(var M=0,E="";!(M>=m/4);){var N=Z[h+M*4>>2];if(N==0)break;if(++M,N>=65536){var G=N-65536;E+=String.fromCharCode(55296|G>>10,56320|G&1023)}else E+=String.fromCharCode(N)}return E},Pp=(h,m,M)=>{if(M??=2147483647,M<4)return 0;for(var E=m,N=E+M-4,G=0;G<h.length;++G){var tt=h.charCodeAt(G);if(tt>=55296&&tt<=57343){var at=h.charCodeAt(++G);tt=65536+((tt&1023)<<10)|at&1023}if(Z[m>>2]=tt,m+=4,m+4>N)break}return Z[m>>2]=0,m-E},Ip=h=>{for(var m=0,M=0;M<h.length;++M){var E=h.charCodeAt(M);E>=55296&&E<=57343&&++M,m+=4}return m},Rp=(h,m,M)=>{M=ot(M);var E,N,G,tt;m===2?(E=Ep,N=Tp,tt=Ap,G=at=>q[at>>1]):m===4&&(E=Cp,N=Pp,tt=Ip,G=at=>lt[at>>2]),me(h,{name:M,fromWireType:at=>{for(var bt=lt[at>>2],Ut,Kt=at+4,ie=0;ie<=bt;++ie){var he=at+4+ie*m;if(ie==bt||G(he)==0){var ae=he-Kt,ve=E(Kt,ae);Ut===void 0?Ut=ve:(Ut+="\0",Ut+=ve),Kt=he+m}}return Ti(at),Ut},toWireType:(at,bt)=>{typeof bt!="string"&&zt(`Cannot pass non-string to C++ string type ${M}`);var Ut=tt(bt),Kt=mc(4+Ut+m);return lt[Kt>>2]=Ut/m,N(bt,Kt+4,Ut+m),at!==null&&at.push(Ti,Kt),Kt},argPackAdvance:ee,readValueFromPointer:y,destructorFunction(at){Ti(at)}})},Lp=(h,m)=>{m=ot(m),me(h,{isVoid:!0,name:m,argPackAdvance:0,fromWireType:()=>{},toWireType:(M,E)=>{}})},Np=1,Dp=()=>Np,pu=h=>{for(var m=h.split("."),M=0;M<4;M++){var E=Number(m[M]);if(isNaN(E))return null;m[M]=E}return(m[0]|m[1]<<8|m[2]<<16|m[3]<<24)>>>0},zo=h=>parseInt(h),Op=h=>{var m,M,E,N,G=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,tt=[];if(!G.test(h))return null;if(h==="::")return[0,0,0,0,0,0,0,0];for(h.startsWith("::")?h=h.replace("::","Z:"):h=h.replace("::",":Z:"),h.indexOf(".")>0?(h=h.replace(new RegExp("[.]","g"),":"),m=h.split(":"),m[m.length-4]=zo(m[m.length-4])+zo(m[m.length-3])*256,m[m.length-3]=zo(m[m.length-2])+zo(m[m.length-1])*256,m=m.slice(0,m.length-2)):m=h.split(":"),E=0,N=0,M=0;M<m.length;M++)if(typeof m[M]=="string")if(m[M]==="Z"){for(N=0;N<8-m.length+1;N++)tt[M+N]=0;E=N-1}else tt[M+E]=yu(parseInt(m[M],16));else tt[M+E]=m[M];return[tt[1]<<16|tt[0],tt[3]<<16|tt[2],tt[5]<<16|tt[4],tt[7]<<16|tt[6]]},ki={address_map:{id:1,addrs:{},names:{}},lookup_name(h){var m=pu(h);if(m!==null||(m=Op(h),m!==null))return h;var M;if(ki.address_map.addrs[h])M=ki.address_map.addrs[h];else{var E=ki.address_map.id++;X(E<65535,"exceeded max address mappings of 65535"),M="172.29."+(E&255)+"."+(E&65280),ki.address_map.names[M]=h,ki.address_map.addrs[h]=M}return M},lookup_addr(h){return ki.address_map.names[h]?ki.address_map.names[h]:null}},Fp=h=>{var m=bi(h);return pu(ki.lookup_name(m))},Up=(h,m,M)=>st.copyWithin(h,m,m+M),hc=(h,m)=>{var M=_t[h];return M===void 0&&zt(`${m} has unknown type ${fu(h)}`),M},mu=(h,m,M)=>{var E=[],N=h.toWireType(E,M);return E.length&&(lt[m>>2]=p.toHandle(E)),N},Bp=(h,m,M)=>(h=p.toValue(h),m=hc(m,"emval::as"),mu(m,M,h)),kp={},uc=h=>{var m=kp[h];return m===void 0?ot(h):m},fc=[],zp=(h,m,M,E,N)=>(h=fc[h],m=p.toValue(m),M=uc(M),h(m,m[M],E,N)),gu=()=>typeof globalThis=="object"?globalThis:(function(){return Function})()("return this")(),Vp=h=>h===0?p.toHandle(gu()):(h=uc(h),p.toHandle(gu()[h])),Hp=h=>{var m=fc.length;return fc.push(h),m},Gp=(h,m)=>{for(var M=new Array(h),E=0;E<h;++E)M[E]=hc(lt[m+E*4>>2],"parameter "+E);return M},VM=Reflect.construct,Xp=(h,m,M)=>{var E=Gp(h,m),N=E.shift();h--;var G=`return function (obj, func, destructorsRef, args) {
`,tt=0,at=[];M===0&&at.push("obj");for(var bt=["retType"],Ut=[N],Kt=0;Kt<h;++Kt)at.push("arg"+Kt),bt.push("argType"+Kt),Ut.push(E[Kt]),G+=`  var arg${Kt} = argType${Kt}.readValueFromPointer(args${tt?"+"+tt:""});
`,tt+=E[Kt].argPackAdvance;var ie=M===1?"new func":"func.call";G+=`  var rv = ${ie}(${at.join(", ")});
`,N.isVoid||(bt.push("emval_returnValue"),Ut.push(mu),G+=`  return emval_returnValue(retType, destructorsRef, rv);
`),G+=`};
`,bt.push(G);var he=Dt(Function,bt)(...Ut),ae=`methodCaller<(${E.map(ve=>ve.name).join(", ")}) => ${N.name}>`;return Hp(ft(ae,he))},Wp=(h,m)=>(h=p.toValue(h),m=p.toValue(m),p.toHandle(h[m])),Yp=h=>{h>9&&(Te[h+1]+=1)},$p=()=>p.toHandle([]),qp=h=>p.toHandle(uc(h)),Zp=()=>p.toHandle({}),Jp=h=>{var m=p.toValue(h);Ct(m),s(h)},jp=(h,m,M)=>{h=p.toValue(h),m=p.toValue(m),M=p.toValue(M),h[m]=M},Kp=(h,m)=>{h=hc(h,"_emval_take_value");var M=h.readValueFromPointer(m);return p.toHandle(M)},Qp=h=>h%4===0&&(h%100!==0||h%400===0),tm=[0,31,60,91,121,152,182,213,244,274,305,335],em=[0,31,59,90,120,151,181,212,243,273,304,334],nm=h=>{var m=Qp(h.getFullYear()),M=m?tm:em,E=M[h.getMonth()]+h.getDate()-1;return E},dc=(h,m)=>m+2097152>>>0<4194305-!!h?(h>>>0)+m*4294967296:NaN;function im(h,m,M){var E=dc(h,m),N=new Date(E*1e3);Z[M>>2]=N.getSeconds(),Z[M+4>>2]=N.getMinutes(),Z[M+8>>2]=N.getHours(),Z[M+12>>2]=N.getDate(),Z[M+16>>2]=N.getMonth(),Z[M+20>>2]=N.getFullYear()-1900,Z[M+24>>2]=N.getDay();var G=nm(N)|0;Z[M+28>>2]=G,Z[M+36>>2]=-(N.getTimezoneOffset()*60);var tt=new Date(N.getFullYear(),0,1),at=new Date(N.getFullYear(),6,1).getTimezoneOffset(),bt=tt.getTimezoneOffset(),Ut=(at!=bt&&N.getTimezoneOffset()==Math.min(bt,at))|0;Z[M+32>>2]=Ut}function rm(h,m,M,E,N,G,tt){var at=dc(G,tt);try{var bt=Ce.getStreamFromFD(N);M&2&&Ce.doMsync(h,bt,m,E,at)}catch(Ut){if(typeof I>"u"||Ut.name!=="ErrnoError")throw Ut;return-Ut.errno}}var sm=(h,m,M,E)=>{var N=new Date().getFullYear(),G=new Date(N,0,1),tt=new Date(N,6,1),at=G.getTimezoneOffset(),bt=tt.getTimezoneOffset(),Ut=Math.max(at,bt);lt[h>>2]=Ut*60,Z[m>>2]=+(at!=bt);var Kt=ae=>{var ve=ae>=0?"-":"+",Oe=Math.abs(ae),mn=String(Math.floor(Oe/60)).padStart(2,"0"),Qe=String(Oe%60).padStart(2,"0");return`UTC${ve}${mn}${Qe}`},ie=Kt(at),he=Kt(bt);bt<at?(Vr(ie,M,17),Vr(he,E,17)):(Vr(ie,E,17),Vr(he,M,17))},om=()=>Date.now();function am(){return new Error().stack.toString()}var Vo=h=>{Vo.shown||={},Vo.shown[h]||(Vo.shown[h]=1,d&&(h="warning: "+h),U(h))};function lm(h){var m=am(),M=m.lastIndexOf("_emscripten_log"),E=m.lastIndexOf("_emscripten_get_callstack"),N=m.indexOf(`
`,Math.max(M,E))+1;m=m.slice(N),h&8&&typeof emscripten_source_map>"u"&&(Vo('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),h^=8,h|=16);var G=m.split(`
`);m="";var tt=new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),at=new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),bt=new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");for(var Ut in G){var Kt=G[Ut],ie="",he="",ae=0,ve=0,Oe=bt.exec(Kt);if(Oe&&Oe.length==5)ie=Oe[1],he=Oe[2],ae=Oe[3],ve=Oe[4];else if(Oe=tt.exec(Kt)||at.exec(Kt),Oe&&Oe.length>=4)ie=Oe[1],he=Oe[2],ae=Oe[3],ve=Oe[4]|0;else{m+=Kt+`
`;continue}var mn=!1;if(h&8){var Qe=emscripten_source_map.originalPositionFor({line:ae,column:ve});mn=Qe?.source,mn&&(h&64&&(Qe.source=Qe.source.substring(Qe.source.replace(/\\/g,"/").lastIndexOf("/")+1)),m+=`    at ${ie} (${Qe.source}:${Qe.line}:${Qe.column})
`)}(h&16||!mn)&&(h&64&&(he=he.substring(he.replace(/\\/g,"/").lastIndexOf("/")+1)),m+=(mn?`     = ${ie}`:`    at ${ie}`)+` (${he}:${ae}:${ve})
`)}return m=m.replace(/\s+$/,""),m}function cm(h,m,M){var E=lm(h);if(!m||M<=0)return It(E)+1;var N=Vr(E,m,M);return N+1}var _u=()=>2147483648,hm=()=>_u(),um=h=>{var m=W.buffer,M=(h-m.byteLength+65535)/65536|0;try{return W.grow(M),pt(),1}catch{}},fm=h=>{var m=st.length;h>>>=0;var M=_u();if(h>M)return!1;for(var E=1;E<=4;E*=2){var N=m*(1+.2/E);N=Math.min(N,h+100663296);var G=Math.min(M,Wt(Math.max(h,N),65536)),tt=um(G);if(tt)return!0}return!1},pc={},dm=()=>g||"./this.program",ks=()=>{if(!ks.strings){var h=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",m={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:h,_:dm()};for(var M in pc)pc[M]===void 0?delete m[M]:m[M]=pc[M];var E=[];for(var M in m)E.push(`${M}=${m[M]}`);ks.strings=E}return ks.strings},pm=(h,m)=>{for(var M=0;M<h.length;++M)et[m++]=h.charCodeAt(M);et[m]=0},mm=(h,m)=>{var M=0;return ks().forEach((E,N)=>{var G=m+M;lt[h+N*4>>2]=G,pm(E,G),M+=E.length+1}),0},gm=(h,m)=>{var M=ks();lt[h>>2]=M.length;var E=0;return M.forEach(N=>E+=N.length+1),lt[m>>2]=E,0},_m=0,vm=()=>$t||_m>0,ym=h=>{k=h,vm()||(i.onExit?.(h),C=!0),b(h,new Et(h))},xm=(h,m)=>{k=h,ym(h)},Mm=xm;function Sm(h){try{var m=Ce.getStreamFromFD(h);return I.close(m),0}catch(M){if(typeof I>"u"||M.name!=="ErrnoError")throw M;return M.errno}}var bm=(h,m,M,E)=>{for(var N=0,G=0;G<M;G++){var tt=lt[m>>2],at=lt[m+4>>2];m+=8;var bt=I.read(h,et,tt,at,E);if(bt<0)return-1;if(N+=bt,bt<at)break;typeof E<"u"&&(E+=bt)}return N};function wm(h,m,M,E){try{var N=Ce.getStreamFromFD(h),G=bm(N,m,M);return lt[E>>2]=G,0}catch(tt){if(typeof I>"u"||tt.name!=="ErrnoError")throw tt;return tt.errno}}function Em(h,m,M,E,N){var G=dc(m,M);try{if(isNaN(G))return 61;var tt=Ce.getStreamFromFD(h);return I.llseek(tt,G,E),mt=[tt.position>>>0,(it=tt.position,+Math.abs(it)>=1?it>0?+Math.floor(it/4294967296)>>>0:~~+Math.ceil((it-+(~~it>>>0))/4294967296)>>>0:0)],Z[N>>2]=mt[0],Z[N+4>>2]=mt[1],tt.getdents&&G===0&&E===0&&(tt.getdents=null),0}catch(at){if(typeof I>"u"||at.name!=="ErrnoError")throw at;return at.errno}}var Tm=(h,m,M,E)=>{for(var N=0,G=0;G<M;G++){var tt=lt[m>>2],at=lt[m+4>>2];m+=8;var bt=I.write(h,et,tt,at,E);if(bt<0)return-1;if(N+=bt,bt<at)break;typeof E<"u"&&(E+=bt)}return N};function Am(h,m,M,E){try{var N=Ce.getStreamFromFD(h),G=Tm(N,m,M);return lt[E>>2]=G,0}catch(tt){if(typeof I>"u"||tt.name!=="ErrnoError")throw tt;return tt.errno}}I.createPreloadedFile=An,I.staticInit(),kr(),Jt=i.BindingError=class extends Error{constructor(m){super(m),this.name="BindingError"}},Zt=i.InternalError=class extends Error{constructor(m){super(m),this.name="InternalError"}},c(),uu=i.UnboundTypeError=_p(Error,"UnboundTypeError");var Cm={M:Nr,N:Dr,h:Or,I:hi,Q:wi,F:Fr,G:Ui,j:Ur,B:Br,H:Fs,C:ui,A:Us,w:Bs,V:Ie,U:F,n:nt,f:xp,b:Sp,a:bp,m:wp,i:Rp,W:Lp,J:Dp,x:Fp,L:Up,e:Bp,q:zp,T:s,u:Vp,p:Xp,k:Wp,Y:Yp,X:$p,r:qp,Z:Zp,o:Jp,c:jp,d:Kp,t:im,s:rm,O:sm,K:om,R:cm,z:hm,y:fm,D:mm,E:gm,S:Mm,g:Sm,P:wm,v:Em,l:Am},cn=P(),Pm=()=>(Pm=cn.$)(),vu=h=>(vu=cn.aa)(h),mc=h=>(mc=cn.ca)(h),Ti=h=>(Ti=cn.da)(h),yu=h=>(yu=cn.ea)(h),xu=(h,m)=>(xu=cn.fa)(h,m),Mu=()=>(Mu=cn.ga)(),Im=i.dynCall_viijii=(h,m,M,E,N,G,tt)=>(Im=i.dynCall_viijii=cn.ha)(h,m,M,E,N,G,tt),Rm=i.dynCall_viiiiji=(h,m,M,E,N,G,tt,at)=>(Rm=i.dynCall_viiiiji=cn.ia)(h,m,M,E,N,G,tt,at),Lm=i.dynCall_jiji=(h,m,M,E,N)=>(Lm=i.dynCall_jiji=cn.ja)(h,m,M,E,N),Nm=i.dynCall_iiiiij=(h,m,M,E,N,G,tt)=>(Nm=i.dynCall_iiiiij=cn.ka)(h,m,M,E,N,G,tt),Dm=i.dynCall_iiiiijj=(h,m,M,E,N,G,tt,at,bt)=>(Dm=i.dynCall_iiiiijj=cn.la)(h,m,M,E,N,G,tt,at,bt),Om=i.dynCall_iiiiiijj=(h,m,M,E,N,G,tt,at,bt,Ut)=>(Om=i.dynCall_iiiiiijj=cn.ma)(h,m,M,E,N,G,tt,at,bt,Ut),Ho,Su;ce=function h(){Ho||bu(),Ho||(ce=h)};function bu(){if(te>0||!Su&&(Su=1,Ht(),te>0))return;function h(){Ho||(Ho=1,i.calledRun=1,!C&&(Bt(),r(i),i.onRuntimeInitialized?.(),jt()))}i.setStatus?(i.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>i.setStatus(""),1),h()},1)):h()}if(i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return bu(),e=l,e})})();typeof Cu=="object"&&typeof vc=="object"?vc.exports=Au:typeof define=="function"&&define.amd&&define([],()=>Au)});var Iu=wu((qM,Go)=>{(function(){"use strict";var n={};n.version="6.4.2.2",n.use_lines=!0,n.use_xyz=!1;var t=!1;typeof Go<"u"&&Go.exports?(Go.exports=n,t=!0):(typeof define=="function"&&define.amd&&define(n),typeof document<"u"?window.ClipperLib=n:self.ClipperLib=n);var e;if(t){var i="chrome";e="Netscape"}else{var i=navigator.userAgent.toString().toLowerCase();e=navigator.appName}var r={};i.indexOf("chrome")!=-1&&i.indexOf("chromium")==-1?r.chrome=1:r.chrome=0,i.indexOf("chromium")!=-1?r.chromium=1:r.chromium=0,i.indexOf("safari")!=-1&&i.indexOf("chrome")==-1&&i.indexOf("chromium")==-1?r.safari=1:r.safari=0,i.indexOf("firefox")!=-1?r.firefox=1:r.firefox=0,i.indexOf("firefox/17")!=-1?r.firefox17=1:r.firefox17=0,i.indexOf("firefox/15")!=-1?r.firefox15=1:r.firefox15=0,i.indexOf("firefox/3")!=-1?r.firefox3=1:r.firefox3=0,i.indexOf("opera")!=-1?r.opera=1:r.opera=0,i.indexOf("msie 10")!=-1?r.msie10=1:r.msie10=0,i.indexOf("msie 9")!=-1?r.msie9=1:r.msie9=0,i.indexOf("msie 8")!=-1?r.msie8=1:r.msie8=0,i.indexOf("msie 7")!=-1?r.msie7=1:r.msie7=0,i.indexOf("msie ")!=-1?r.msie=1:r.msie=0,n.biginteger_used=null;var o,l=0xdeadbeefcafe,u=(l&16777215)==15715070;function f(s,a,c){n.biginteger_used=1,s!=null&&(typeof s=="number"&&typeof a>"u"?this.fromInt(s):typeof s=="number"?this.fromNumber(s,a,c):a==null&&typeof s!="string"?this.fromString(s,256):this.fromString(s,a))}function d(){return new f(null,void 0,void 0)}function _(s,a,c,p,y,A){for(;--A>=0;){var F=a*this[s++]+c[p]+y;y=Math.floor(F/67108864),c[p++]=F&67108863}return y}function v(s,a,c,p,y,A){for(var F=a&32767,Q=a>>15;--A>=0;){var nt=this[s]&32767,ft=this[s++]>>15,Ct=Q*nt+ft*F;nt=F*nt+((Ct&32767)<<15)+c[p]+(y&1073741823),y=(nt>>>30)+(Ct>>>15)+Q*ft+(y>>>30),c[p++]=nt&1073741823}return y}function g(s,a,c,p,y,A){for(var F=a&16383,Q=a>>14;--A>=0;){var nt=this[s]&16383,ft=this[s++]>>14,Ct=Q*nt+ft*F;nt=F*nt+((Ct&16383)<<14)+c[p]+y,y=(nt>>28)+(Ct>>14)+Q*ft,c[p++]=nt&268435455}return y}u&&e=="Microsoft Internet Explorer"?(f.prototype.am=v,o=30):u&&e!="Netscape"?(f.prototype.am=_,o=26):(f.prototype.am=g,o=28),f.prototype.DB=o,f.prototype.DM=(1<<o)-1,f.prototype.DV=1<<o;var b=52;f.prototype.FV=Math.pow(2,b),f.prototype.F1=b-o,f.prototype.F2=2*o-b;var w="0123456789abcdefghijklmnopqrstuvwxyz",T=new Array,S,x;for(S=48,x=0;x<=9;++x)T[S++]=x;for(S=97,x=10;x<36;++x)T[S++]=x;for(S=65,x=10;x<36;++x)T[S++]=x;function O(s){return w.charAt(s)}function H(s,a){var c=T[s.charCodeAt(a)];return c??-1}function R(s){for(var a=this.t-1;a>=0;--a)s[a]=this[a];s.t=this.t,s.s=this.s}function U(s){this.t=1,this.s=s<0?-1:0,s>0?this[0]=s:s<-1?this[0]=s+this.DV:this.t=0}function B(s){var a=d();return a.fromInt(s),a}function W(s,a){var c;if(a==16)c=4;else if(a==8)c=3;else if(a==256)c=8;else if(a==2)c=1;else if(a==32)c=5;else if(a==4)c=2;else{this.fromRadix(s,a);return}this.t=0,this.s=0;for(var p=s.length,y=!1,A=0;--p>=0;){var F=c==8?s[p]&255:H(s,p);if(F<0){s.charAt(p)=="-"&&(y=!0);continue}y=!1,A==0?this[this.t++]=F:A+c>this.DB?(this[this.t-1]|=(F&(1<<this.DB-A)-1)<<A,this[this.t++]=F>>this.DB-A):this[this.t-1]|=F<<A,A+=c,A>=this.DB&&(A-=this.DB)}c==8&&(s[0]&128)!=0&&(this.s=-1,A>0&&(this[this.t-1]|=(1<<this.DB-A)-1<<A)),this.clamp(),y&&f.ZERO.subTo(this,this)}function C(){for(var s=this.s&this.DM;this.t>0&&this[this.t-1]==s;)--this.t}function k(s){if(this.s<0)return"-"+this.negate().toString(s);var a;if(s==16)a=4;else if(s==8)a=3;else if(s==2)a=1;else if(s==32)a=5;else if(s==4)a=2;else return this.toRadix(s);var c=(1<<a)-1,p,y=!1,A="",F=this.t,Q=this.DB-F*this.DB%a;if(F-- >0)for(Q<this.DB&&(p=this[F]>>Q)>0&&(y=!0,A=O(p));F>=0;)Q<a?(p=(this[F]&(1<<Q)-1)<<a-Q,p|=this[--F]>>(Q+=this.DB-a)):(p=this[F]>>(Q-=a)&c,Q<=0&&(Q+=this.DB,--F)),p>0&&(y=!0),y&&(A+=O(p));return y?A:"0"}function X(){var s=d();return f.ZERO.subTo(this,s),s}function et(){return this.s<0?this.negate():this}function st(s){var a=this.s-s.s;if(a!=0)return a;var c=this.t;if(a=c-s.t,a!=0)return this.s<0?-a:a;for(;--c>=0;)if((a=this[c]-s[c])!=0)return a;return 0}function $(s){var a=1,c;return(c=s>>>16)!=0&&(s=c,a+=16),(c=s>>8)!=0&&(s=c,a+=8),(c=s>>4)!=0&&(s=c,a+=4),(c=s>>2)!=0&&(s=c,a+=2),(c=s>>1)!=0&&(s=c,a+=1),a}function q(){return this.t<=0?0:this.DB*(this.t-1)+$(this[this.t-1]^this.s&this.DM)}function Z(s,a){var c;for(c=this.t-1;c>=0;--c)a[c+s]=this[c];for(c=s-1;c>=0;--c)a[c]=0;a.t=this.t+s,a.s=this.s}function lt(s,a){for(var c=s;c<this.t;++c)a[c-s]=this[c];a.t=Math.max(this.t-s,0),a.s=this.s}function dt(s,a){var c=s%this.DB,p=this.DB-c,y=(1<<p)-1,A=Math.floor(s/this.DB),F=this.s<<c&this.DM,Q;for(Q=this.t-1;Q>=0;--Q)a[Q+A+1]=this[Q]>>p|F,F=(this[Q]&y)<<c;for(Q=A-1;Q>=0;--Q)a[Q]=0;a[A]=F,a.t=this.t+A+1,a.s=this.s,a.clamp()}function Mt(s,a){a.s=this.s;var c=Math.floor(s/this.DB);if(c>=this.t){a.t=0;return}var p=s%this.DB,y=this.DB-p,A=(1<<p)-1;a[0]=this[c]>>p;for(var F=c+1;F<this.t;++F)a[F-c-1]|=(this[F]&A)<<y,a[F-c]=this[F]>>p;p>0&&(a[this.t-c-1]|=(this.s&A)<<y),a.t=this.t-c,a.clamp()}function pt(s,a){for(var c=0,p=0,y=Math.min(s.t,this.t);c<y;)p+=this[c]-s[c],a[c++]=p&this.DM,p>>=this.DB;if(s.t<this.t){for(p-=s.s;c<this.t;)p+=this[c],a[c++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;c<s.t;)p-=s[c],a[c++]=p&this.DM,p>>=this.DB;p-=s.s}a.s=p<0?-1:0,p<-1?a[c++]=this.DV+p:p>0&&(a[c++]=p),a.t=c,a.clamp()}function wt(s,a){var c=this.abs(),p=s.abs(),y=c.t;for(a.t=y+p.t;--y>=0;)a[y]=0;for(y=0;y<p.t;++y)a[y+c.t]=c.am(0,p[y],a,y,0,c.t);a.s=0,a.clamp(),this.s!=s.s&&f.ZERO.subTo(a,a)}function J(s){for(var a=this.abs(),c=s.t=2*a.t;--c>=0;)s[c]=0;for(c=0;c<a.t-1;++c){var p=a.am(c,a[c],s,2*c,0,1);(s[c+a.t]+=a.am(c+1,2*a[c],s,2*c+1,p,a.t-c-1))>=a.DV&&(s[c+a.t]-=a.DV,s[c+a.t+1]=1)}s.t>0&&(s[s.t-1]+=a.am(c,a[c],s,2*c,0,1)),s.s=0,s.clamp()}function At(s,a,c){var p=s.abs();if(!(p.t<=0)){var y=this.abs();if(y.t<p.t){a?.fromInt(0),c!=null&&this.copyTo(c);return}c==null&&(c=d());var A=d(),F=this.s,Q=s.s,nt=this.DB-$(p[p.t-1]);nt>0?(p.lShiftTo(nt,A),y.lShiftTo(nt,c)):(p.copyTo(A),y.copyTo(c));var ft=A.t,Ct=A[ft-1];if(Ct!=0){var Tt=Ct*(1<<this.F1)+(ft>1?A[ft-2]>>this.F2:0),Dt=this.FV/Tt,oe=(1<<this.F1)/Tt,_e=1<<this.F2,Me=c.t,Be=Me-ft,pn=a??d();for(A.dlShiftTo(Be,pn),c.compareTo(pn)>=0&&(c[c.t++]=1,c.subTo(pn,c)),f.ONE.dlShiftTo(ft,pn),pn.subTo(A,A);A.t<ft;)A[A.t++]=0;for(;--Be>=0;){var Wn=c[--Me]==Ct?this.DM:Math.floor(c[Me]*Dt+(c[Me-1]+_e)*oe);if((c[Me]+=A.am(0,Wn,c,Be,0,ft))<Wn)for(A.dlShiftTo(Be,pn),c.subTo(pn,c);c[Me]<--Wn;)c.subTo(pn,c)}a!=null&&(c.drShiftTo(ft,a),F!=Q&&f.ZERO.subTo(a,a)),c.t=ft,c.clamp(),nt>0&&c.rShiftTo(nt,c),F<0&&f.ZERO.subTo(c,c)}}}function Lt(s){var a=d();return this.abs().divRemTo(s,null,a),this.s<0&&a.compareTo(f.ZERO)>0&&s.subTo(a,a),a}function Ht(s){this.m=s}function Bt(s){return s.s<0||s.compareTo(this.m)>=0?s.mod(this.m):s}function jt(s){return s}function yt(s){s.divRemTo(this.m,null,s)}function z(s,a,c){s.multiplyTo(a,c),this.reduce(c)}function Xt(s,a){s.squareTo(a),this.reduce(a)}Ht.prototype.convert=Bt,Ht.prototype.revert=jt,Ht.prototype.reduce=yt,Ht.prototype.mulTo=z,Ht.prototype.sqrTo=Xt;function te(){if(this.t<1)return 0;var s=this[0];if((s&1)==0)return 0;var a=s&3;return a=a*(2-(s&15)*a)&15,a=a*(2-(s&255)*a)&255,a=a*(2-((s&65535)*a&65535))&65535,a=a*(2-s*a%this.DV)%this.DV,a>0?this.DV-a:-a}function kt(s){this.m=s,this.mp=s.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<s.DB-15)-1,this.mt2=2*s.t}function ce(s){var a=d();return s.abs().dlShiftTo(this.m.t,a),a.divRemTo(this.m,null,a),s.s<0&&a.compareTo(f.ZERO)>0&&this.m.subTo(a,a),a}function Re(s){var a=d();return s.copyTo(a),this.reduce(a),a}function fe(s){for(;s.t<=this.mt2;)s[s.t++]=0;for(var a=0;a<this.m.t;++a){var c=s[a]&32767,p=c*this.mpl+((c*this.mph+(s[a]>>15)*this.mpl&this.um)<<15)&s.DM;for(c=a+this.m.t,s[c]+=this.m.am(0,p,s,a,0,this.m.t);s[c]>=s.DV;)s[c]-=s.DV,s[++c]++}s.clamp(),s.drShiftTo(this.m.t,s),s.compareTo(this.m)>=0&&s.subTo(this.m,s)}function Yt(s,a){s.squareTo(a),this.reduce(a)}function pe(s,a,c){s.multiplyTo(a,c),this.reduce(c)}kt.prototype.convert=ce,kt.prototype.revert=Re,kt.prototype.reduce=fe,kt.prototype.mulTo=pe,kt.prototype.sqrTo=Yt;function ue(){return(this.t>0?this[0]&1:this.s)==0}function we(s,a){if(s>4294967295||s<1)return f.ONE;var c=d(),p=d(),y=a.convert(this),A=$(s)-1;for(y.copyTo(c);--A>=0;)if(a.sqrTo(c,p),(s&1<<A)>0)a.mulTo(p,y,c);else{var F=c;c=p,p=F}return a.revert(c)}function Le(s,a){var c;return s<256||a.isEven()?c=new Ht(a):c=new kt(a),this.exp(s,c)}f.prototype.copyTo=R,f.prototype.fromInt=U,f.prototype.fromString=W,f.prototype.clamp=C,f.prototype.dlShiftTo=Z,f.prototype.drShiftTo=lt,f.prototype.lShiftTo=dt,f.prototype.rShiftTo=Mt,f.prototype.subTo=pt,f.prototype.multiplyTo=wt,f.prototype.squareTo=J,f.prototype.divRemTo=At,f.prototype.invDigit=te,f.prototype.isEven=ue,f.prototype.exp=we,f.prototype.toString=k,f.prototype.negate=X,f.prototype.abs=et,f.prototype.compareTo=st,f.prototype.bitLength=q,f.prototype.mod=Lt,f.prototype.modPowInt=Le,f.ZERO=B(0),f.ONE=B(1);function je(){var s=d();return this.copyTo(s),s}function Ne(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function He(){return this.t==0?this.s:this[0]<<24>>24}function ht(){return this.t==0?this.s:this[0]<<16>>16}function Ze(s){return Math.floor(Math.LN2*this.DB/Math.log(s))}function be(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function Y(s){if(s==null&&(s=10),this.signum()==0||s<2||s>36)return"0";var a=this.chunkSize(s),c=Math.pow(s,a),p=B(c),y=d(),A=d(),F="";for(this.divRemTo(p,y,A);y.signum()>0;)F=(c+A.intValue()).toString(s).substr(1)+F,y.divRemTo(p,y,A);return A.intValue().toString(s)+F}function P(s,a){this.fromInt(0),a==null&&(a=10);for(var c=this.chunkSize(a),p=Math.pow(a,c),y=!1,A=0,F=0,Q=0;Q<s.length;++Q){var nt=H(s,Q);if(nt<0){s.charAt(Q)=="-"&&this.signum()==0&&(y=!0);continue}F=a*F+nt,++A>=c&&(this.dMultiply(p),this.dAddOffset(F,0),A=0,F=0)}A>0&&(this.dMultiply(Math.pow(a,A)),this.dAddOffset(F,0)),y&&f.ZERO.subTo(this,this)}function it(s,a,c){if(typeof a=="number")if(s<2)this.fromInt(1);else for(this.fromNumber(s,c),this.testBit(s-1)||this.bitwiseTo(f.ONE.shiftLeft(s-1),K,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(a);)this.dAddOffset(2,0),this.bitLength()>s&&this.subTo(f.ONE.shiftLeft(s-1),this);else{var p=new Array,y=s&7;p.length=(s>>3)+1,a.nextBytes(p),y>0?p[0]&=(1<<y)-1:p[0]=0,this.fromString(p,256)}}function mt(){var s=this.t,a=new Array;a[0]=this.s;var c=this.DB-s*this.DB%8,p,y=0;if(s-- >0)for(c<this.DB&&(p=this[s]>>c)!=(this.s&this.DM)>>c&&(a[y++]=p|this.s<<this.DB-c);s>=0;)c<8?(p=(this[s]&(1<<c)-1)<<8-c,p|=this[--s]>>(c+=this.DB-8)):(p=this[s]>>(c-=8)&255,c<=0&&(c+=this.DB,--s)),(p&128)!=0&&(p|=-256),y==0&&(this.s&128)!=(p&128)&&++y,(y>0||p!=this.s)&&(a[y++]=p);return a}function Et(s){return this.compareTo(s)==0}function Gt(s){return this.compareTo(s)<0?this:s}function $t(s){return this.compareTo(s)>0?this:s}function xt(s,a,c){var p,y,A=Math.min(s.t,this.t);for(p=0;p<A;++p)c[p]=a(this[p],s[p]);if(s.t<this.t){for(y=s.s&this.DM,p=A;p<this.t;++p)c[p]=a(this[p],y);c.t=this.t}else{for(y=this.s&this.DM,p=A;p<s.t;++p)c[p]=a(y,s[p]);c.t=s.t}c.s=a(this.s,s.s),c.clamp()}function L(s,a){return s&a}function j(s){var a=d();return this.bitwiseTo(s,L,a),a}function K(s,a){return s|a}function rt(s){var a=d();return this.bitwiseTo(s,K,a),a}function ut(s,a){return s^a}function Nt(s){var a=d();return this.bitwiseTo(s,ut,a),a}function It(s,a){return s&~a}function Vt(s){var a=d();return this.bitwiseTo(s,It,a),a}function V(){for(var s=d(),a=0;a<this.t;++a)s[a]=this.DM&~this[a];return s.t=this.t,s.s=~this.s,s}function Pt(s){var a=d();return s<0?this.rShiftTo(-s,a):this.lShiftTo(s,a),a}function gt(s){var a=d();return s<0?this.lShiftTo(-s,a):this.rShiftTo(s,a),a}function Ot(s){if(s==0)return-1;var a=0;return(s&65535)==0&&(s>>=16,a+=16),(s&255)==0&&(s>>=8,a+=8),(s&15)==0&&(s>>=4,a+=4),(s&3)==0&&(s>>=2,a+=2),(s&1)==0&&++a,a}function Wt(){for(var s=0;s<this.t;++s)if(this[s]!=0)return s*this.DB+Ot(this[s]);return this.s<0?this.t*this.DB:-1}function Rt(s){for(var a=0;s!=0;)s&=s-1,++a;return a}function Ft(){for(var s=0,a=this.s&this.DM,c=0;c<this.t;++c)s+=Rt(this[c]^a);return s}function re(s){var a=Math.floor(s/this.DB);return a>=this.t?this.s!=0:(this[a]&1<<s%this.DB)!=0}function Fe(s,a){var c=f.ONE.shiftLeft(s);return this.bitwiseTo(c,a,c),c}function Pe(s){return this.changeBit(s,K)}function Sn(s){return this.changeBit(s,It)}function An(s){return this.changeBit(s,ut)}function Os(s,a){for(var c=0,p=0,y=Math.min(s.t,this.t);c<y;)p+=this[c]+s[c],a[c++]=p&this.DM,p>>=this.DB;if(s.t<this.t){for(p+=s.s;c<this.t;)p+=this[c],a[c++]=p&this.DM,p>>=this.DB;p+=this.s}else{for(p+=this.s;c<s.t;)p+=s[c],a[c++]=p&this.DM,p>>=this.DB;p+=s.s}a.s=p<0?-1:0,p>0?a[c++]=p:p<-1&&(a[c++]=this.DV+p),a.t=c,a.clamp()}function mr(s){var a=d();return this.addTo(s,a),a}function I(s){var a=d();return this.subTo(s,a),a}function bi(s){var a=d();return this.multiplyTo(s,a),a}function Ce(){var s=d();return this.squareTo(s),s}function Nr(s){var a=d();return this.divRemTo(s,a,null),a}function Dr(s){var a=d();return this.divRemTo(s,null,a),a}function Cn(s){var a=d(),c=d();return this.divRemTo(s,a,c),new Array(a,c)}function Xn(s){this[this.t]=this.am(0,s-1,this,0,0,this.t),++this.t,this.clamp()}function Or(s,a){if(s!=0){for(;this.t<=a;)this[this.t++]=0;for(this[a]+=s;this[a]>=this.DV;)this[a]-=this.DV,++a>=this.t&&(this[this.t++]=0),++this[a]}}function hi(){}function wi(s){return s}function Fr(s,a,c){s.multiplyTo(a,c)}function Ui(s,a){s.squareTo(a)}hi.prototype.convert=wi,hi.prototype.revert=wi,hi.prototype.mulTo=Fr,hi.prototype.sqrTo=Ui;function Ur(s){return this.exp(s,new hi)}function Br(s,a,c){var p=Math.min(this.t+s.t,a);for(c.s=0,c.t=p;p>0;)c[--p]=0;var y;for(y=c.t-this.t;p<y;++p)c[p+this.t]=this.am(0,s[p],c,p,0,this.t);for(y=Math.min(s.t,a);p<y;++p)this.am(0,s[p],c,p,0,a-p);c.clamp()}function Fs(s,a,c){--a;var p=c.t=this.t+s.t-a;for(c.s=0;--p>=0;)c[p]=0;for(p=Math.max(a-this.t,0);p<s.t;++p)c[this.t+p-a]=this.am(a-p,s[p],c,0,0,this.t+p-a);c.clamp(),c.drShiftTo(1,c)}function ui(s){this.r2=d(),this.q3=d(),f.ONE.dlShiftTo(2*s.t,this.r2),this.mu=this.r2.divide(s),this.m=s}function Us(s){if(s.s<0||s.t>2*this.m.t)return s.mod(this.m);if(s.compareTo(this.m)<0)return s;var a=d();return s.copyTo(a),this.reduce(a),a}function Bs(s){return s}function kr(s){for(s.drShiftTo(this.m.t-1,this.r2),s.t>this.m.t+1&&(s.t=this.m.t+1,s.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);s.compareTo(this.r2)<0;)s.dAddOffset(1,this.m.t+1);for(s.subTo(this.r2,s);s.compareTo(this.m)>=0;)s.subTo(this.m,s)}function D(s,a){s.squareTo(a),this.reduce(a)}function ot(s,a,c){s.multiplyTo(a,c),this.reduce(c)}ui.prototype.convert=Us,ui.prototype.revert=Bs,ui.prototype.reduce=kr,ui.prototype.mulTo=ot,ui.prototype.sqrTo=D;function St(s,a){var c=s.bitLength(),p,y=B(1),A;if(c<=0)return y;c<18?p=1:c<48?p=3:c<144?p=4:c<768?p=5:p=6,c<8?A=new Ht(a):a.isEven()?A=new ui(a):A=new kt(a);var F=new Array,Q=3,nt=p-1,ft=(1<<p)-1;if(F[1]=A.convert(this),p>1){var Ct=d();for(A.sqrTo(F[1],Ct);Q<=ft;)F[Q]=d(),A.mulTo(Ct,F[Q-2],F[Q]),Q+=2}var Tt=s.t-1,Dt,oe=!0,_e=d(),Me;for(c=$(s[Tt])-1;Tt>=0;){for(c>=nt?Dt=s[Tt]>>c-nt&ft:(Dt=(s[Tt]&(1<<c+1)-1)<<nt-c,Tt>0&&(Dt|=s[Tt-1]>>this.DB+c-nt)),Q=p;(Dt&1)==0;)Dt>>=1,--Q;if((c-=Q)<0&&(c+=this.DB,--Tt),oe)F[Dt].copyTo(y),oe=!1;else{for(;Q>1;)A.sqrTo(y,_e),A.sqrTo(_e,y),Q-=2;Q>0?A.sqrTo(y,_e):(Me=y,y=_e,_e=Me),A.mulTo(_e,F[Dt],y)}for(;Tt>=0&&(s[Tt]&1<<c)==0;)A.sqrTo(y,_e),Me=y,y=_e,_e=Me,--c<0&&(c=this.DB-1,--Tt)}return A.revert(y)}function _t(s){var a=this.s<0?this.negate():this.clone(),c=s.s<0?s.negate():s.clone();if(a.compareTo(c)<0){var p=a;a=c,c=p}var y=a.getLowestSetBit(),A=c.getLowestSetBit();if(A<0)return a;for(y<A&&(A=y),A>0&&(a.rShiftTo(A,a),c.rShiftTo(A,c));a.signum()>0;)(y=a.getLowestSetBit())>0&&a.rShiftTo(y,a),(y=c.getLowestSetBit())>0&&c.rShiftTo(y,c),a.compareTo(c)>=0?(a.subTo(c,a),a.rShiftTo(1,a)):(c.subTo(a,c),c.rShiftTo(1,c));return A>0&&c.lShiftTo(A,c),c}function vt(s){if(s<=0)return 0;var a=this.DV%s,c=this.s<0?s-1:0;if(this.t>0)if(a==0)c=this[0]%s;else for(var p=this.t-1;p>=0;--p)c=(a*c+this[p])%s;return c}function Jt(s){var a=s.isEven();if(this.isEven()&&a||s.signum()==0)return f.ZERO;for(var c=s.clone(),p=this.clone(),y=B(1),A=B(0),F=B(0),Q=B(1);c.signum()!=0;){for(;c.isEven();)c.rShiftTo(1,c),a?((!y.isEven()||!A.isEven())&&(y.addTo(this,y),A.subTo(s,A)),y.rShiftTo(1,y)):A.isEven()||A.subTo(s,A),A.rShiftTo(1,A);for(;p.isEven();)p.rShiftTo(1,p),a?((!F.isEven()||!Q.isEven())&&(F.addTo(this,F),Q.subTo(s,Q)),F.rShiftTo(1,F)):Q.isEven()||Q.subTo(s,Q),Q.rShiftTo(1,Q);c.compareTo(p)>=0?(c.subTo(p,c),a&&y.subTo(F,y),A.subTo(Q,A)):(p.subTo(c,p),a&&F.subTo(y,F),Q.subTo(A,Q))}if(p.compareTo(f.ONE)!=0)return f.ZERO;if(Q.compareTo(s)>=0)return Q.subtract(s);if(Q.signum()<0)Q.addTo(s,Q);else return Q;return Q.signum()<0?Q.add(s):Q}var zt=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],Zt=(1<<26)/zt[zt.length-1];function ne(s){var a,c=this.abs();if(c.t==1&&c[0]<=zt[zt.length-1]){for(a=0;a<zt.length;++a)if(c[0]==zt[a])return!0;return!1}if(c.isEven())return!1;for(a=1;a<zt.length;){for(var p=zt[a],y=a+1;y<zt.length&&p<Zt;)p*=zt[y++];for(p=c.modInt(p);a<y;)if(p%zt[a++]==0)return!1}return c.millerRabin(s)}function se(s){var a=this.subtract(f.ONE),c=a.getLowestSetBit();if(c<=0)return!1;var p=a.shiftRight(c);s=s+1>>1,s>zt.length&&(s=zt.length);for(var y=d(),A=0;A<s;++A){y.fromInt(zt[Math.floor(Math.random()*zt.length)]);var F=y.modPow(p,this);if(F.compareTo(f.ONE)!=0&&F.compareTo(a)!=0){for(var Q=1;Q++<c&&F.compareTo(a)!=0;)if(F=F.modPowInt(2,this),F.compareTo(f.ONE)==0)return!1;if(F.compareTo(a)!=0)return!1}}return!0}f.prototype.chunkSize=Ze,f.prototype.toRadix=Y,f.prototype.fromRadix=P,f.prototype.fromNumber=it,f.prototype.bitwiseTo=xt,f.prototype.changeBit=Fe,f.prototype.addTo=Os,f.prototype.dMultiply=Xn,f.prototype.dAddOffset=Or,f.prototype.multiplyLowerTo=Br,f.prototype.multiplyUpperTo=Fs,f.prototype.modInt=vt,f.prototype.millerRabin=se,f.prototype.clone=je,f.prototype.intValue=Ne,f.prototype.byteValue=He,f.prototype.shortValue=ht,f.prototype.signum=be,f.prototype.toByteArray=mt,f.prototype.equals=Et,f.prototype.min=Gt,f.prototype.max=$t,f.prototype.and=j,f.prototype.or=rt,f.prototype.xor=Nt,f.prototype.andNot=Vt,f.prototype.not=V,f.prototype.shiftLeft=Pt,f.prototype.shiftRight=gt,f.prototype.getLowestSetBit=Wt,f.prototype.bitCount=Ft,f.prototype.testBit=re,f.prototype.setBit=Pe,f.prototype.clearBit=Sn,f.prototype.flipBit=An,f.prototype.add=mr,f.prototype.subtract=I,f.prototype.multiply=bi,f.prototype.divide=Nr,f.prototype.remainder=Dr,f.prototype.divideAndRemainder=Cn,f.prototype.modPow=St,f.prototype.modInverse=Jt,f.prototype.pow=Ur,f.prototype.gcd=_t,f.prototype.isProbablePrime=ne,f.prototype.square=Ce;var qt=f;qt.prototype.IsNegative=function(){return this.compareTo(qt.ZERO)==-1},qt.op_Equality=function(s,a){return s.compareTo(a)==0},qt.op_Inequality=function(s,a){return s.compareTo(a)!=0},qt.op_GreaterThan=function(s,a){return s.compareTo(a)>0},qt.op_LessThan=function(s,a){return s.compareTo(a)<0},qt.op_Addition=function(s,a){return new qt(s,void 0,void 0).add(new qt(a,void 0,void 0))},qt.op_Subtraction=function(s,a){return new qt(s,void 0,void 0).subtract(new qt(a,void 0,void 0))},qt.Int128Mul=function(s,a){return new qt(s,void 0,void 0).multiply(new qt(a,void 0,void 0))},qt.op_Division=function(s,a){return s.divide(a)},qt.prototype.ToDouble=function(){return parseFloat(this.toString())};var me=function(s,a){var c;if(typeof Object.getOwnPropertyNames>"u"){for(c in a.prototype)(typeof s.prototype[c]>"u"||s.prototype[c]===Object.prototype[c])&&(s.prototype[c]=a.prototype[c]);for(c in a)typeof s[c]>"u"&&(s[c]=a[c]);s.$baseCtor=a}else{for(var p=Object.getOwnPropertyNames(a.prototype),y=0;y<p.length;y++)typeof Object.getOwnPropertyDescriptor(s.prototype,p[y])>"u"&&Object.defineProperty(s.prototype,p[y],Object.getOwnPropertyDescriptor(a.prototype,p[y]));for(c in a)typeof s[c]>"u"&&(s[c]=a[c]);s.$baseCtor=a}};n.Path=function(){return[]},n.Path.prototype.push=Array.prototype.push,n.Paths=function(){return[]},n.Paths.prototype.push=Array.prototype.push,n.DoublePoint=function(){var s=arguments;this.X=0,this.Y=0,s.length===1?(this.X=s[0].X,this.Y=s[0].Y):s.length===2&&(this.X=s[0],this.Y=s[1])},n.DoublePoint0=function(){this.X=0,this.Y=0},n.DoublePoint0.prototype=n.DoublePoint.prototype,n.DoublePoint1=function(s){this.X=s.X,this.Y=s.Y},n.DoublePoint1.prototype=n.DoublePoint.prototype,n.DoublePoint2=function(s,a){this.X=s,this.Y=a},n.DoublePoint2.prototype=n.DoublePoint.prototype,n.PolyNode=function(){this.m_Parent=null,this.m_polygon=new n.Path,this.m_Index=0,this.m_jointype=0,this.m_endtype=0,this.m_Childs=[],this.IsOpen=!1},n.PolyNode.prototype.IsHoleNode=function(){for(var s=!0,a=this.m_Parent;a!==null;)s=!s,a=a.m_Parent;return s},n.PolyNode.prototype.ChildCount=function(){return this.m_Childs.length},n.PolyNode.prototype.Contour=function(){return this.m_polygon},n.PolyNode.prototype.AddChild=function(s){var a=this.m_Childs.length;this.m_Childs.push(s),s.m_Parent=this,s.m_Index=a},n.PolyNode.prototype.GetNext=function(){return this.m_Childs.length>0?this.m_Childs[0]:this.GetNextSiblingUp()},n.PolyNode.prototype.GetNextSiblingUp=function(){return this.m_Parent===null?null:this.m_Index===this.m_Parent.m_Childs.length-1?this.m_Parent.GetNextSiblingUp():this.m_Parent.m_Childs[this.m_Index+1]},n.PolyNode.prototype.Childs=function(){return this.m_Childs},n.PolyNode.prototype.Parent=function(){return this.m_Parent},n.PolyNode.prototype.IsHole=function(){return this.IsHoleNode()},n.PolyTree=function(){this.m_AllPolys=[],n.PolyNode.call(this)},n.PolyTree.prototype.Clear=function(){for(var s=0,a=this.m_AllPolys.length;s<a;s++)this.m_AllPolys[s]=null;this.m_AllPolys.length=0,this.m_Childs.length=0},n.PolyTree.prototype.GetFirst=function(){return this.m_Childs.length>0?this.m_Childs[0]:null},n.PolyTree.prototype.Total=function(){var s=this.m_AllPolys.length;return s>0&&this.m_Childs[0]!==this.m_AllPolys[0]&&s--,s},me(n.PolyTree,n.PolyNode),n.Math_Abs_Int64=n.Math_Abs_Int32=n.Math_Abs_Double=function(s){return Math.abs(s)},n.Math_Max_Int32_Int32=function(s,a){return Math.max(s,a)},r.msie||r.opera||r.safari?n.Cast_Int32=function(s){return s|0}:n.Cast_Int32=function(s){return~~s},typeof Number.toInteger>"u"&&(Number.toInteger=null),r.chrome?n.Cast_Int64=function(s){return s<-2147483648||s>2147483647?s<0?Math.ceil(s):Math.floor(s):~~s}:r.firefox&&typeof Number.toInteger=="function"?n.Cast_Int64=function(s){return Number.toInteger(s)}:r.msie7||r.msie8?n.Cast_Int64=function(s){return parseInt(s,10)}:r.msie?n.Cast_Int64=function(s){return s<-2147483648||s>2147483647?s<0?Math.ceil(s):Math.floor(s):s|0}:n.Cast_Int64=function(s){return s<0?Math.ceil(s):Math.floor(s)},n.Clear=function(s){s.length=0},n.PI=3.141592653589793,n.PI2=2*3.141592653589793,n.IntPoint=function(){var s=arguments,a=s.length;if(this.X=0,this.Y=0,n.use_xyz)if(this.Z=0,a===3)this.X=s[0],this.Y=s[1],this.Z=s[2];else if(a===2)this.X=s[0],this.Y=s[1],this.Z=0;else if(a===1)if(s[0]instanceof n.DoublePoint){var c=s[0];this.X=n.Clipper.Round(c.X),this.Y=n.Clipper.Round(c.Y),this.Z=0}else{var p=s[0];typeof p.Z>"u"&&(p.Z=0),this.X=p.X,this.Y=p.Y,this.Z=p.Z}else this.X=0,this.Y=0,this.Z=0;else if(a===2)this.X=s[0],this.Y=s[1];else if(a===1)if(s[0]instanceof n.DoublePoint){var c=s[0];this.X=n.Clipper.Round(c.X),this.Y=n.Clipper.Round(c.Y)}else{var p=s[0];this.X=p.X,this.Y=p.Y}else this.X=0,this.Y=0},n.IntPoint.op_Equality=function(s,a){return s.X===a.X&&s.Y===a.Y},n.IntPoint.op_Inequality=function(s,a){return s.X!==a.X||s.Y!==a.Y},n.IntPoint0=function(){this.X=0,this.Y=0,n.use_xyz&&(this.Z=0)},n.IntPoint0.prototype=n.IntPoint.prototype,n.IntPoint1=function(s){this.X=s.X,this.Y=s.Y,n.use_xyz&&(typeof s.Z>"u"?this.Z=0:this.Z=s.Z)},n.IntPoint1.prototype=n.IntPoint.prototype,n.IntPoint1dp=function(s){this.X=n.Clipper.Round(s.X),this.Y=n.Clipper.Round(s.Y),n.use_xyz&&(this.Z=0)},n.IntPoint1dp.prototype=n.IntPoint.prototype,n.IntPoint2=function(s,a,c){this.X=s,this.Y=a,n.use_xyz&&(typeof c>"u"?this.Z=0:this.Z=c)},n.IntPoint2.prototype=n.IntPoint.prototype,n.IntRect=function(){var s=arguments,a=s.length;if(a===4)this.left=s[0],this.top=s[1],this.right=s[2],this.bottom=s[3];else if(a===1){var c=s[0];this.left=c.left,this.top=c.top,this.right=c.right,this.bottom=c.bottom}else this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0=function(){this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0.prototype=n.IntRect.prototype,n.IntRect1=function(s){this.left=s.left,this.top=s.top,this.right=s.right,this.bottom=s.bottom},n.IntRect1.prototype=n.IntRect.prototype,n.IntRect4=function(s,a,c,p){this.left=s,this.top=a,this.right=c,this.bottom=p},n.IntRect4.prototype=n.IntRect.prototype,n.ClipType={ctIntersection:0,ctUnion:1,ctDifference:2,ctXor:3},n.PolyType={ptSubject:0,ptClip:1},n.PolyFillType={pftEvenOdd:0,pftNonZero:1,pftPositive:2,pftNegative:3},n.JoinType={jtSquare:0,jtRound:1,jtMiter:2},n.EndType={etOpenSquare:0,etOpenRound:1,etOpenButt:2,etClosedLine:3,etClosedPolygon:4},n.EdgeSide={esLeft:0,esRight:1},n.Direction={dRightToLeft:0,dLeftToRight:1},n.TEdge=function(){this.Bot=new n.IntPoint0,this.Curr=new n.IntPoint0,this.Top=new n.IntPoint0,this.Delta=new n.IntPoint0,this.Dx=0,this.PolyTyp=n.PolyType.ptSubject,this.Side=n.EdgeSide.esLeft,this.WindDelta=0,this.WindCnt=0,this.WindCnt2=0,this.OutIdx=0,this.Next=null,this.Prev=null,this.NextInLML=null,this.NextInAEL=null,this.PrevInAEL=null,this.NextInSEL=null,this.PrevInSEL=null},n.IntersectNode=function(){this.Edge1=null,this.Edge2=null,this.Pt=new n.IntPoint0},n.MyIntersectNodeSort=function(){},n.MyIntersectNodeSort.Compare=function(s,a){var c=a.Pt.Y-s.Pt.Y;return c>0?1:c<0?-1:0},n.LocalMinima=function(){this.Y=0,this.LeftBound=null,this.RightBound=null,this.Next=null},n.Scanbeam=function(){this.Y=0,this.Next=null},n.Maxima=function(){this.X=0,this.Next=null,this.Prev=null},n.OutRec=function(){this.Idx=0,this.IsHole=!1,this.IsOpen=!1,this.FirstLeft=null,this.Pts=null,this.BottomPt=null,this.PolyNode=null},n.OutPt=function(){this.Idx=0,this.Pt=new n.IntPoint0,this.Next=null,this.Prev=null},n.Join=function(){this.OutPt1=null,this.OutPt2=null,this.OffPt=new n.IntPoint0},n.ClipperBase=function(){this.m_MinimaList=null,this.m_CurrentLM=null,this.m_edges=new Array,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1,this.PreserveCollinear=!1,this.m_Scanbeam=null,this.m_PolyOuts=null,this.m_ActiveEdges=null},n.ClipperBase.horizontal=-9007199254740992,n.ClipperBase.Skip=-2,n.ClipperBase.Unassigned=-1,n.ClipperBase.tolerance=1e-20,n.ClipperBase.loRange=47453132,n.ClipperBase.hiRange=0xfffffffffffff,n.ClipperBase.near_zero=function(s){return s>-n.ClipperBase.tolerance&&s<n.ClipperBase.tolerance},n.ClipperBase.IsHorizontal=function(s){return s.Delta.Y===0},n.ClipperBase.prototype.PointIsVertex=function(s,a){var c=a;do{if(n.IntPoint.op_Equality(c.Pt,s))return!0;c=c.Next}while(c!==a);return!1},n.ClipperBase.prototype.PointOnLineSegment=function(s,a,c,p){return p?s.X===a.X&&s.Y===a.Y||s.X===c.X&&s.Y===c.Y||s.X>a.X==s.X<c.X&&s.Y>a.Y==s.Y<c.Y&&qt.op_Equality(qt.Int128Mul(s.X-a.X,c.Y-a.Y),qt.Int128Mul(c.X-a.X,s.Y-a.Y)):s.X===a.X&&s.Y===a.Y||s.X===c.X&&s.Y===c.Y||s.X>a.X==s.X<c.X&&s.Y>a.Y==s.Y<c.Y&&(s.X-a.X)*(c.Y-a.Y)===(c.X-a.X)*(s.Y-a.Y)},n.ClipperBase.prototype.PointOnPolygon=function(s,a,c){for(var p=a;;){if(this.PointOnLineSegment(s,p.Pt,p.Next.Pt,c))return!0;if(p=p.Next,p===a)break}return!1},n.ClipperBase.prototype.SlopesEqual=n.ClipperBase.SlopesEqual=function(){var s=arguments,a=s.length,c,p,y,A,F,Q,nt;return a===3?(c=s[0],p=s[1],nt=s[2],nt?qt.op_Equality(qt.Int128Mul(c.Delta.Y,p.Delta.X),qt.Int128Mul(c.Delta.X,p.Delta.Y)):n.Cast_Int64(c.Delta.Y*p.Delta.X)===n.Cast_Int64(c.Delta.X*p.Delta.Y)):a===4?(y=s[0],A=s[1],F=s[2],nt=s[3],nt?qt.op_Equality(qt.Int128Mul(y.Y-A.Y,A.X-F.X),qt.Int128Mul(y.X-A.X,A.Y-F.Y)):n.Cast_Int64((y.Y-A.Y)*(A.X-F.X))-n.Cast_Int64((y.X-A.X)*(A.Y-F.Y))===0):(y=s[0],A=s[1],F=s[2],Q=s[3],nt=s[4],nt?qt.op_Equality(qt.Int128Mul(y.Y-A.Y,F.X-Q.X),qt.Int128Mul(y.X-A.X,F.Y-Q.Y)):n.Cast_Int64((y.Y-A.Y)*(F.X-Q.X))-n.Cast_Int64((y.X-A.X)*(F.Y-Q.Y))===0)},n.ClipperBase.SlopesEqual3=function(s,a,c){return c?qt.op_Equality(qt.Int128Mul(s.Delta.Y,a.Delta.X),qt.Int128Mul(s.Delta.X,a.Delta.Y)):n.Cast_Int64(s.Delta.Y*a.Delta.X)===n.Cast_Int64(s.Delta.X*a.Delta.Y)},n.ClipperBase.SlopesEqual4=function(s,a,c,p){return p?qt.op_Equality(qt.Int128Mul(s.Y-a.Y,a.X-c.X),qt.Int128Mul(s.X-a.X,a.Y-c.Y)):n.Cast_Int64((s.Y-a.Y)*(a.X-c.X))-n.Cast_Int64((s.X-a.X)*(a.Y-c.Y))===0},n.ClipperBase.SlopesEqual5=function(s,a,c,p,y){return y?qt.op_Equality(qt.Int128Mul(s.Y-a.Y,c.X-p.X),qt.Int128Mul(s.X-a.X,c.Y-p.Y)):n.Cast_Int64((s.Y-a.Y)*(c.X-p.X))-n.Cast_Int64((s.X-a.X)*(c.Y-p.Y))===0},n.ClipperBase.prototype.Clear=function(){this.DisposeLocalMinimaList();for(var s=0,a=this.m_edges.length;s<a;++s){for(var c=0,p=this.m_edges[s].length;c<p;++c)this.m_edges[s][c]=null;n.Clear(this.m_edges[s])}n.Clear(this.m_edges),this.m_UseFullRange=!1,this.m_HasOpenPaths=!1},n.ClipperBase.prototype.DisposeLocalMinimaList=function(){for(;this.m_MinimaList!==null;){var s=this.m_MinimaList.Next;this.m_MinimaList=null,this.m_MinimaList=s}this.m_CurrentLM=null},n.ClipperBase.prototype.RangeTest=function(s,a){a.Value?(s.X>n.ClipperBase.hiRange||s.Y>n.ClipperBase.hiRange||-s.X>n.ClipperBase.hiRange||-s.Y>n.ClipperBase.hiRange)&&n.Error("Coordinate outside allowed range in RangeTest()."):(s.X>n.ClipperBase.loRange||s.Y>n.ClipperBase.loRange||-s.X>n.ClipperBase.loRange||-s.Y>n.ClipperBase.loRange)&&(a.Value=!0,this.RangeTest(s,a))},n.ClipperBase.prototype.InitEdge=function(s,a,c,p){s.Next=a,s.Prev=c,s.Curr.X=p.X,s.Curr.Y=p.Y,n.use_xyz&&(s.Curr.Z=p.Z),s.OutIdx=-1},n.ClipperBase.prototype.InitEdge2=function(s,a){s.Curr.Y>=s.Next.Curr.Y?(s.Bot.X=s.Curr.X,s.Bot.Y=s.Curr.Y,n.use_xyz&&(s.Bot.Z=s.Curr.Z),s.Top.X=s.Next.Curr.X,s.Top.Y=s.Next.Curr.Y,n.use_xyz&&(s.Top.Z=s.Next.Curr.Z)):(s.Top.X=s.Curr.X,s.Top.Y=s.Curr.Y,n.use_xyz&&(s.Top.Z=s.Curr.Z),s.Bot.X=s.Next.Curr.X,s.Bot.Y=s.Next.Curr.Y,n.use_xyz&&(s.Bot.Z=s.Next.Curr.Z)),this.SetDx(s),s.PolyTyp=a},n.ClipperBase.prototype.FindNextLocMin=function(s){for(var a;;){for(;n.IntPoint.op_Inequality(s.Bot,s.Prev.Bot)||n.IntPoint.op_Equality(s.Curr,s.Top);)s=s.Next;if(s.Dx!==n.ClipperBase.horizontal&&s.Prev.Dx!==n.ClipperBase.horizontal)break;for(;s.Prev.Dx===n.ClipperBase.horizontal;)s=s.Prev;for(a=s;s.Dx===n.ClipperBase.horizontal;)s=s.Next;if(s.Top.Y!==s.Prev.Bot.Y){a.Prev.Bot.X<s.Bot.X&&(s=a);break}}return s},n.ClipperBase.prototype.ProcessBound=function(s,a){var c,p=s,y;if(p.OutIdx===n.ClipperBase.Skip){if(s=p,a){for(;s.Top.Y===s.Next.Bot.Y;)s=s.Next;for(;s!==p&&s.Dx===n.ClipperBase.horizontal;)s=s.Prev}else{for(;s.Top.Y===s.Prev.Bot.Y;)s=s.Prev;for(;s!==p&&s.Dx===n.ClipperBase.horizontal;)s=s.Next}if(s===p)a?p=s.Next:p=s.Prev;else{a?s=p.Next:s=p.Prev;var A=new n.LocalMinima;A.Next=null,A.Y=s.Bot.Y,A.LeftBound=null,A.RightBound=s,s.WindDelta=0,p=this.ProcessBound(s,a),this.InsertLocalMinima(A)}return p}if(s.Dx===n.ClipperBase.horizontal&&(a?c=s.Prev:c=s.Next,c.Dx===n.ClipperBase.horizontal?c.Bot.X!==s.Bot.X&&c.Top.X!==s.Bot.X&&this.ReverseHorizontal(s):c.Bot.X!==s.Bot.X&&this.ReverseHorizontal(s)),c=s,a){for(;p.Top.Y===p.Next.Bot.Y&&p.Next.OutIdx!==n.ClipperBase.Skip;)p=p.Next;if(p.Dx===n.ClipperBase.horizontal&&p.Next.OutIdx!==n.ClipperBase.Skip){for(y=p;y.Prev.Dx===n.ClipperBase.horizontal;)y=y.Prev;y.Prev.Top.X>p.Next.Top.X&&(p=y.Prev)}for(;s!==p;)s.NextInLML=s.Next,s.Dx===n.ClipperBase.horizontal&&s!==c&&s.Bot.X!==s.Prev.Top.X&&this.ReverseHorizontal(s),s=s.Next;s.Dx===n.ClipperBase.horizontal&&s!==c&&s.Bot.X!==s.Prev.Top.X&&this.ReverseHorizontal(s),p=p.Next}else{for(;p.Top.Y===p.Prev.Bot.Y&&p.Prev.OutIdx!==n.ClipperBase.Skip;)p=p.Prev;if(p.Dx===n.ClipperBase.horizontal&&p.Prev.OutIdx!==n.ClipperBase.Skip){for(y=p;y.Next.Dx===n.ClipperBase.horizontal;)y=y.Next;(y.Next.Top.X===p.Prev.Top.X||y.Next.Top.X>p.Prev.Top.X)&&(p=y.Next)}for(;s!==p;)s.NextInLML=s.Prev,s.Dx===n.ClipperBase.horizontal&&s!==c&&s.Bot.X!==s.Next.Top.X&&this.ReverseHorizontal(s),s=s.Prev;s.Dx===n.ClipperBase.horizontal&&s!==c&&s.Bot.X!==s.Next.Top.X&&this.ReverseHorizontal(s),p=p.Prev}return p},n.ClipperBase.prototype.AddPath=function(s,a,c){n.use_lines?!c&&a===n.PolyType.ptClip&&n.Error("AddPath: Open paths must be subject."):c||n.Error("AddPath: Open paths have been disabled.");var p=s.length-1;if(c)for(;p>0&&n.IntPoint.op_Equality(s[p],s[0]);)--p;for(;p>0&&n.IntPoint.op_Equality(s[p],s[p-1]);)--p;if(c&&p<2||!c&&p<1)return!1;for(var y=new Array,A=0;A<=p;A++)y.push(new n.TEdge);var F=!0;y[1].Curr.X=s[1].X,y[1].Curr.Y=s[1].Y,n.use_xyz&&(y[1].Curr.Z=s[1].Z);var Q={Value:this.m_UseFullRange};this.RangeTest(s[0],Q),this.m_UseFullRange=Q.Value,Q.Value=this.m_UseFullRange,this.RangeTest(s[p],Q),this.m_UseFullRange=Q.Value,this.InitEdge(y[0],y[1],y[p],s[0]),this.InitEdge(y[p],y[0],y[p-1],s[p]);for(var A=p-1;A>=1;--A)Q.Value=this.m_UseFullRange,this.RangeTest(s[A],Q),this.m_UseFullRange=Q.Value,this.InitEdge(y[A],y[A+1],y[A-1],s[A]);for(var nt=y[0],ft=nt,Ct=nt;;){if(ft.Curr===ft.Next.Curr&&(c||ft.Next!==nt)){if(ft===ft.Next)break;ft===nt&&(nt=ft.Next),ft=this.RemoveEdge(ft),Ct=ft;continue}if(ft.Prev===ft.Next)break;if(c&&n.ClipperBase.SlopesEqual4(ft.Prev.Curr,ft.Curr,ft.Next.Curr,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3(ft.Prev.Curr,ft.Curr,ft.Next.Curr))){ft===nt&&(nt=ft.Next),ft=this.RemoveEdge(ft),ft=ft.Prev,Ct=ft;continue}if(ft=ft.Next,ft===Ct||!c&&ft.Next===nt)break}if(!c&&ft===ft.Next||c&&ft.Prev===ft.Next)return!1;c||(this.m_HasOpenPaths=!0,nt.Prev.OutIdx=n.ClipperBase.Skip),ft=nt;do this.InitEdge2(ft,a),ft=ft.Next,F&&ft.Curr.Y!==nt.Curr.Y&&(F=!1);while(ft!==nt);if(F){if(c)return!1;ft.Prev.OutIdx=n.ClipperBase.Skip;var Tt=new n.LocalMinima;for(Tt.Next=null,Tt.Y=ft.Bot.Y,Tt.LeftBound=null,Tt.RightBound=ft,Tt.RightBound.Side=n.EdgeSide.esRight,Tt.RightBound.WindDelta=0;ft.Bot.X!==ft.Prev.Top.X&&this.ReverseHorizontal(ft),ft.Next.OutIdx!==n.ClipperBase.Skip;)ft.NextInLML=ft.Next,ft=ft.Next;return this.InsertLocalMinima(Tt),this.m_edges.push(y),!0}this.m_edges.push(y);var Dt,oe=null;for(n.IntPoint.op_Equality(ft.Prev.Bot,ft.Prev.Top)&&(ft=ft.Next);ft=this.FindNextLocMin(ft),ft!==oe;){oe===null&&(oe=ft);var Tt=new n.LocalMinima;Tt.Next=null,Tt.Y=ft.Bot.Y,ft.Dx<ft.Prev.Dx?(Tt.LeftBound=ft.Prev,Tt.RightBound=ft,Dt=!1):(Tt.LeftBound=ft,Tt.RightBound=ft.Prev,Dt=!0),Tt.LeftBound.Side=n.EdgeSide.esLeft,Tt.RightBound.Side=n.EdgeSide.esRight,c?Tt.LeftBound.Next===Tt.RightBound?Tt.LeftBound.WindDelta=-1:Tt.LeftBound.WindDelta=1:Tt.LeftBound.WindDelta=0,Tt.RightBound.WindDelta=-Tt.LeftBound.WindDelta,ft=this.ProcessBound(Tt.LeftBound,Dt),ft.OutIdx===n.ClipperBase.Skip&&(ft=this.ProcessBound(ft,Dt));var _e=this.ProcessBound(Tt.RightBound,!Dt);_e.OutIdx===n.ClipperBase.Skip&&(_e=this.ProcessBound(_e,!Dt)),Tt.LeftBound.OutIdx===n.ClipperBase.Skip?Tt.LeftBound=null:Tt.RightBound.OutIdx===n.ClipperBase.Skip&&(Tt.RightBound=null),this.InsertLocalMinima(Tt),Dt||(ft=_e)}return!0},n.ClipperBase.prototype.AddPaths=function(s,a,c){for(var p=!1,y=0,A=s.length;y<A;++y)this.AddPath(s[y],a,c)&&(p=!0);return p},n.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3=function(s,a,c){return n.IntPoint.op_Equality(s,c)||n.IntPoint.op_Equality(s,a)||n.IntPoint.op_Equality(c,a)?!1:s.X!==c.X?a.X>s.X==a.X<c.X:a.Y>s.Y==a.Y<c.Y},n.ClipperBase.prototype.RemoveEdge=function(s){s.Prev.Next=s.Next,s.Next.Prev=s.Prev;var a=s.Next;return s.Prev=null,a},n.ClipperBase.prototype.SetDx=function(s){s.Delta.X=s.Top.X-s.Bot.X,s.Delta.Y=s.Top.Y-s.Bot.Y,s.Delta.Y===0?s.Dx=n.ClipperBase.horizontal:s.Dx=s.Delta.X/s.Delta.Y},n.ClipperBase.prototype.InsertLocalMinima=function(s){if(this.m_MinimaList===null)this.m_MinimaList=s;else if(s.Y>=this.m_MinimaList.Y)s.Next=this.m_MinimaList,this.m_MinimaList=s;else{for(var a=this.m_MinimaList;a.Next!==null&&s.Y<a.Next.Y;)a=a.Next;s.Next=a.Next,a.Next=s}},n.ClipperBase.prototype.PopLocalMinima=function(s,a){return a.v=this.m_CurrentLM,this.m_CurrentLM!==null&&this.m_CurrentLM.Y===s?(this.m_CurrentLM=this.m_CurrentLM.Next,!0):!1},n.ClipperBase.prototype.ReverseHorizontal=function(s){var a=s.Top.X;s.Top.X=s.Bot.X,s.Bot.X=a,n.use_xyz&&(a=s.Top.Z,s.Top.Z=s.Bot.Z,s.Bot.Z=a)},n.ClipperBase.prototype.Reset=function(){if(this.m_CurrentLM=this.m_MinimaList,this.m_CurrentLM!==null){this.m_Scanbeam=null;for(var s=this.m_MinimaList;s!==null;){this.InsertScanbeam(s.Y);var a=s.LeftBound;a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,n.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=n.ClipperBase.Unassigned),a=s.RightBound,a!==null&&(a.Curr.X=a.Bot.X,a.Curr.Y=a.Bot.Y,n.use_xyz&&(a.Curr.Z=a.Bot.Z),a.OutIdx=n.ClipperBase.Unassigned),s=s.Next}this.m_ActiveEdges=null}},n.ClipperBase.prototype.InsertScanbeam=function(s){if(this.m_Scanbeam===null)this.m_Scanbeam=new n.Scanbeam,this.m_Scanbeam.Next=null,this.m_Scanbeam.Y=s;else if(s>this.m_Scanbeam.Y){var a=new n.Scanbeam;a.Y=s,a.Next=this.m_Scanbeam,this.m_Scanbeam=a}else{for(var c=this.m_Scanbeam;c.Next!==null&&s<=c.Next.Y;)c=c.Next;if(s===c.Y)return;var p=new n.Scanbeam;p.Y=s,p.Next=c.Next,c.Next=p}},n.ClipperBase.prototype.PopScanbeam=function(s){return this.m_Scanbeam===null?(s.v=0,!1):(s.v=this.m_Scanbeam.Y,this.m_Scanbeam=this.m_Scanbeam.Next,!0)},n.ClipperBase.prototype.LocalMinimaPending=function(){return this.m_CurrentLM!==null},n.ClipperBase.prototype.CreateOutRec=function(){var s=new n.OutRec;return s.Idx=n.ClipperBase.Unassigned,s.IsHole=!1,s.IsOpen=!1,s.FirstLeft=null,s.Pts=null,s.BottomPt=null,s.PolyNode=null,this.m_PolyOuts.push(s),s.Idx=this.m_PolyOuts.length-1,s},n.ClipperBase.prototype.DisposeOutRec=function(s){var a=this.m_PolyOuts[s];a.Pts=null,a=null,this.m_PolyOuts[s]=null},n.ClipperBase.prototype.UpdateEdgeIntoAEL=function(s){s.NextInLML===null&&n.Error("UpdateEdgeIntoAEL: invalid call");var a=s.PrevInAEL,c=s.NextInAEL;return s.NextInLML.OutIdx=s.OutIdx,a!==null?a.NextInAEL=s.NextInLML:this.m_ActiveEdges=s.NextInLML,c!==null&&(c.PrevInAEL=s.NextInLML),s.NextInLML.Side=s.Side,s.NextInLML.WindDelta=s.WindDelta,s.NextInLML.WindCnt=s.WindCnt,s.NextInLML.WindCnt2=s.WindCnt2,s=s.NextInLML,s.Curr.X=s.Bot.X,s.Curr.Y=s.Bot.Y,s.PrevInAEL=a,s.NextInAEL=c,n.ClipperBase.IsHorizontal(s)||this.InsertScanbeam(s.Top.Y),s},n.ClipperBase.prototype.SwapPositionsInAEL=function(s,a){if(!(s.NextInAEL===s.PrevInAEL||a.NextInAEL===a.PrevInAEL)){if(s.NextInAEL===a){var c=a.NextInAEL;c!==null&&(c.PrevInAEL=s);var p=s.PrevInAEL;p!==null&&(p.NextInAEL=a),a.PrevInAEL=p,a.NextInAEL=s,s.PrevInAEL=a,s.NextInAEL=c}else if(a.NextInAEL===s){var y=s.NextInAEL;y!==null&&(y.PrevInAEL=a);var A=a.PrevInAEL;A!==null&&(A.NextInAEL=s),s.PrevInAEL=A,s.NextInAEL=a,a.PrevInAEL=s,a.NextInAEL=y}else{var F=s.NextInAEL,Q=s.PrevInAEL;s.NextInAEL=a.NextInAEL,s.NextInAEL!==null&&(s.NextInAEL.PrevInAEL=s),s.PrevInAEL=a.PrevInAEL,s.PrevInAEL!==null&&(s.PrevInAEL.NextInAEL=s),a.NextInAEL=F,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=a),a.PrevInAEL=Q,a.PrevInAEL!==null&&(a.PrevInAEL.NextInAEL=a)}s.PrevInAEL===null?this.m_ActiveEdges=s:a.PrevInAEL===null&&(this.m_ActiveEdges=a)}},n.ClipperBase.prototype.DeleteFromAEL=function(s){var a=s.PrevInAEL,c=s.NextInAEL;a===null&&c===null&&s!==this.m_ActiveEdges||(a!==null?a.NextInAEL=c:this.m_ActiveEdges=c,c!==null&&(c.PrevInAEL=a),s.NextInAEL=null,s.PrevInAEL=null)},n.Clipper=function(s){typeof s>"u"&&(s=0),this.m_PolyOuts=null,this.m_ClipType=n.ClipType.ctIntersection,this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=null,this.m_IntersectNodeComparer=null,this.m_ExecuteLocked=!1,this.m_ClipFillType=n.PolyFillType.pftEvenOdd,this.m_SubjFillType=n.PolyFillType.pftEvenOdd,this.m_Joins=null,this.m_GhostJoins=null,this.m_UsingPolyTree=!1,this.ReverseSolution=!1,this.StrictlySimple=!1,n.ClipperBase.call(this),this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=new Array,this.m_IntersectNodeComparer=n.MyIntersectNodeSort.Compare,this.m_ExecuteLocked=!1,this.m_UsingPolyTree=!1,this.m_PolyOuts=new Array,this.m_Joins=new Array,this.m_GhostJoins=new Array,this.ReverseSolution=(1&s)!==0,this.StrictlySimple=(2&s)!==0,this.PreserveCollinear=(4&s)!==0,n.use_xyz&&(this.ZFillFunction=null)},n.Clipper.ioReverseSolution=1,n.Clipper.ioStrictlySimple=2,n.Clipper.ioPreserveCollinear=4,n.Clipper.prototype.Clear=function(){this.m_edges.length!==0&&(this.DisposeAllPolyPts(),n.ClipperBase.prototype.Clear.call(this))},n.Clipper.prototype.InsertMaxima=function(s){var a=new n.Maxima;if(a.X=s,this.m_Maxima===null)this.m_Maxima=a,this.m_Maxima.Next=null,this.m_Maxima.Prev=null;else if(s<this.m_Maxima.X)a.Next=this.m_Maxima,a.Prev=null,this.m_Maxima=a;else{for(var c=this.m_Maxima;c.Next!==null&&s>=c.Next.X;)c=c.Next;if(s===c.X)return;a.Next=c.Next,a.Prev=c,c.Next!==null&&(c.Next.Prev=a),c.Next=a}},n.Clipper.prototype.Execute=function(){var s=arguments,a=s.length,c=s[1]instanceof n.PolyTree;if(a===4&&!c){var p=s[0],y=s[1],A=s[2],F=s[3];if(this.m_ExecuteLocked)return!1;this.m_HasOpenPaths&&n.Error("Error: PolyTree struct is needed for open path clipping."),this.m_ExecuteLocked=!0,n.Clear(y),this.m_SubjFillType=A,this.m_ClipFillType=F,this.m_ClipType=p,this.m_UsingPolyTree=!1;try{var Q=this.ExecuteInternal();Q&&this.BuildResult(y)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return Q}else if(a===4&&c){var p=s[0],nt=s[1],A=s[2],F=s[3];if(this.m_ExecuteLocked)return!1;this.m_ExecuteLocked=!0,this.m_SubjFillType=A,this.m_ClipFillType=F,this.m_ClipType=p,this.m_UsingPolyTree=!0;try{var Q=this.ExecuteInternal();Q&&this.BuildResult2(nt)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return Q}else if(a===2&&!c){var p=s[0],y=s[1];return this.Execute(p,y,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}else if(a===2&&c){var p=s[0],nt=s[1];return this.Execute(p,nt,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}},n.Clipper.prototype.FixHoleLinkage=function(s){if(!(s.FirstLeft===null||s.IsHole!==s.FirstLeft.IsHole&&s.FirstLeft.Pts!==null)){for(var a=s.FirstLeft;a!==null&&(a.IsHole===s.IsHole||a.Pts===null);)a=a.FirstLeft;s.FirstLeft=a}},n.Clipper.prototype.ExecuteInternal=function(){try{this.Reset(),this.m_SortedEdges=null,this.m_Maxima=null;var s={},a={};if(!this.PopScanbeam(s))return!1;for(this.InsertLocalMinimaIntoAEL(s.v);this.PopScanbeam(a)||this.LocalMinimaPending();){if(this.ProcessHorizontals(),this.m_GhostJoins.length=0,!this.ProcessIntersections(a.v))return!1;this.ProcessEdgesAtTopOfScanbeam(a.v),s.v=a.v,this.InsertLocalMinimaIntoAEL(s.v)}var c,p,y;for(p=0,y=this.m_PolyOuts.length;p<y;p++)c=this.m_PolyOuts[p],!(c.Pts===null||c.IsOpen)&&(c.IsHole^this.ReverseSolution)==this.Area$1(c)>0&&this.ReversePolyPtLinks(c.Pts);for(this.JoinCommonEdges(),p=0,y=this.m_PolyOuts.length;p<y;p++)c=this.m_PolyOuts[p],c.Pts!==null&&(c.IsOpen?this.FixupOutPolyline(c):this.FixupOutPolygon(c));return this.StrictlySimple&&this.DoSimplePolygons(),!0}finally{this.m_Joins.length=0,this.m_GhostJoins.length=0}},n.Clipper.prototype.DisposeAllPolyPts=function(){for(var s=0,a=this.m_PolyOuts.length;s<a;++s)this.DisposeOutRec(s);n.Clear(this.m_PolyOuts)},n.Clipper.prototype.AddJoin=function(s,a,c){var p=new n.Join;p.OutPt1=s,p.OutPt2=a,p.OffPt.X=c.X,p.OffPt.Y=c.Y,n.use_xyz&&(p.OffPt.Z=c.Z),this.m_Joins.push(p)},n.Clipper.prototype.AddGhostJoin=function(s,a){var c=new n.Join;c.OutPt1=s,c.OffPt.X=a.X,c.OffPt.Y=a.Y,n.use_xyz&&(c.OffPt.Z=a.Z),this.m_GhostJoins.push(c)},n.Clipper.prototype.SetZ=function(s,a,c){if(this.ZFillFunction!==null){if(s.Z!==0||this.ZFillFunction===null)return;n.IntPoint.op_Equality(s,a.Bot)?s.Z=a.Bot.Z:n.IntPoint.op_Equality(s,a.Top)?s.Z=a.Top.Z:n.IntPoint.op_Equality(s,c.Bot)?s.Z=c.Bot.Z:n.IntPoint.op_Equality(s,c.Top)?s.Z=c.Top.Z:this.ZFillFunction(a.Bot,a.Top,c.Bot,c.Top,s)}},n.Clipper.prototype.InsertLocalMinimaIntoAEL=function(s){for(var a={},c,p;this.PopLocalMinima(s,a);){c=a.v.LeftBound,p=a.v.RightBound;var y=null;if(c===null?(this.InsertEdgeIntoAEL(p,null),this.SetWindingCount(p),this.IsContributing(p)&&(y=this.AddOutPt(p,p.Bot))):p===null?(this.InsertEdgeIntoAEL(c,null),this.SetWindingCount(c),this.IsContributing(c)&&(y=this.AddOutPt(c,c.Bot)),this.InsertScanbeam(c.Top.Y)):(this.InsertEdgeIntoAEL(c,null),this.InsertEdgeIntoAEL(p,c),this.SetWindingCount(c),p.WindCnt=c.WindCnt,p.WindCnt2=c.WindCnt2,this.IsContributing(c)&&(y=this.AddLocalMinPoly(c,p,c.Bot)),this.InsertScanbeam(c.Top.Y)),p!==null&&(n.ClipperBase.IsHorizontal(p)?(p.NextInLML!==null&&this.InsertScanbeam(p.NextInLML.Top.Y),this.AddEdgeToSEL(p)):this.InsertScanbeam(p.Top.Y)),!(c===null||p===null)){if(y!==null&&n.ClipperBase.IsHorizontal(p)&&this.m_GhostJoins.length>0&&p.WindDelta!==0)for(var A=0,F=this.m_GhostJoins.length;A<F;A++){var Q=this.m_GhostJoins[A];this.HorzSegmentsOverlap(Q.OutPt1.Pt.X,Q.OffPt.X,p.Bot.X,p.Top.X)&&this.AddJoin(Q.OutPt1,y,Q.OffPt)}if(c.OutIdx>=0&&c.PrevInAEL!==null&&c.PrevInAEL.Curr.X===c.Bot.X&&c.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(c.PrevInAEL.Curr,c.PrevInAEL.Top,c.Curr,c.Top,this.m_UseFullRange)&&c.WindDelta!==0&&c.PrevInAEL.WindDelta!==0){var nt=this.AddOutPt(c.PrevInAEL,c.Bot);this.AddJoin(y,nt,c.Top)}if(c.NextInAEL!==p){if(p.OutIdx>=0&&p.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(p.PrevInAEL.Curr,p.PrevInAEL.Top,p.Curr,p.Top,this.m_UseFullRange)&&p.WindDelta!==0&&p.PrevInAEL.WindDelta!==0){var nt=this.AddOutPt(p.PrevInAEL,p.Bot);this.AddJoin(y,nt,p.Top)}var ft=c.NextInAEL;if(ft!==null)for(;ft!==p;)this.IntersectEdges(p,ft,c.Curr),ft=ft.NextInAEL}}}},n.Clipper.prototype.InsertEdgeIntoAEL=function(s,a){if(this.m_ActiveEdges===null)s.PrevInAEL=null,s.NextInAEL=null,this.m_ActiveEdges=s;else if(a===null&&this.E2InsertsBeforeE1(this.m_ActiveEdges,s))s.PrevInAEL=null,s.NextInAEL=this.m_ActiveEdges,this.m_ActiveEdges.PrevInAEL=s,this.m_ActiveEdges=s;else{for(a===null&&(a=this.m_ActiveEdges);a.NextInAEL!==null&&!this.E2InsertsBeforeE1(a.NextInAEL,s);)a=a.NextInAEL;s.NextInAEL=a.NextInAEL,a.NextInAEL!==null&&(a.NextInAEL.PrevInAEL=s),s.PrevInAEL=a,a.NextInAEL=s}},n.Clipper.prototype.E2InsertsBeforeE1=function(s,a){return a.Curr.X===s.Curr.X?a.Top.Y>s.Top.Y?a.Top.X<n.Clipper.TopX(s,a.Top.Y):s.Top.X>n.Clipper.TopX(a,s.Top.Y):a.Curr.X<s.Curr.X},n.Clipper.prototype.IsEvenOddFillType=function(s){return s.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType===n.PolyFillType.pftEvenOdd:this.m_ClipFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsEvenOddAltFillType=function(s){return s.PolyTyp===n.PolyType.ptSubject?this.m_ClipFillType===n.PolyFillType.pftEvenOdd:this.m_SubjFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsContributing=function(s){var a,c;switch(s.PolyTyp===n.PolyType.ptSubject?(a=this.m_SubjFillType,c=this.m_ClipFillType):(a=this.m_ClipFillType,c=this.m_SubjFillType),a){case n.PolyFillType.pftEvenOdd:if(s.WindDelta===0&&s.WindCnt!==1)return!1;break;case n.PolyFillType.pftNonZero:if(Math.abs(s.WindCnt)!==1)return!1;break;case n.PolyFillType.pftPositive:if(s.WindCnt!==1)return!1;break;default:if(s.WindCnt!==-1)return!1;break}switch(this.m_ClipType){case n.ClipType.ctIntersection:switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2!==0;case n.PolyFillType.pftPositive:return s.WindCnt2>0;default:return s.WindCnt2<0}case n.ClipType.ctUnion:switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}case n.ClipType.ctDifference:if(s.PolyTyp===n.PolyType.ptSubject)switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}else switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2!==0;case n.PolyFillType.pftPositive:return s.WindCnt2>0;default:return s.WindCnt2<0}case n.ClipType.ctXor:if(s.WindDelta===0)switch(c){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}else return!0}return!0},n.Clipper.prototype.SetWindingCount=function(s){for(var a=s.PrevInAEL;a!==null&&(a.PolyTyp!==s.PolyTyp||a.WindDelta===0);)a=a.PrevInAEL;if(a===null){var c=s.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType:this.m_ClipFillType;s.WindDelta===0?s.WindCnt=c===n.PolyFillType.pftNegative?-1:1:s.WindCnt=s.WindDelta,s.WindCnt2=0,a=this.m_ActiveEdges}else if(s.WindDelta===0&&this.m_ClipType!==n.ClipType.ctUnion)s.WindCnt=1,s.WindCnt2=a.WindCnt2,a=a.NextInAEL;else if(this.IsEvenOddFillType(s)){if(s.WindDelta===0){for(var p=!0,y=a.PrevInAEL;y!==null;)y.PolyTyp===a.PolyTyp&&y.WindDelta!==0&&(p=!p),y=y.PrevInAEL;s.WindCnt=p?0:1}else s.WindCnt=s.WindDelta;s.WindCnt2=a.WindCnt2,a=a.NextInAEL}else a.WindCnt*a.WindDelta<0?Math.abs(a.WindCnt)>1?a.WindDelta*s.WindDelta<0?s.WindCnt=a.WindCnt:s.WindCnt=a.WindCnt+s.WindDelta:s.WindCnt=s.WindDelta===0?1:s.WindDelta:s.WindDelta===0?s.WindCnt=a.WindCnt<0?a.WindCnt-1:a.WindCnt+1:a.WindDelta*s.WindDelta<0?s.WindCnt=a.WindCnt:s.WindCnt=a.WindCnt+s.WindDelta,s.WindCnt2=a.WindCnt2,a=a.NextInAEL;if(this.IsEvenOddAltFillType(s))for(;a!==s;)a.WindDelta!==0&&(s.WindCnt2=s.WindCnt2===0?1:0),a=a.NextInAEL;else for(;a!==s;)s.WindCnt2+=a.WindDelta,a=a.NextInAEL},n.Clipper.prototype.AddEdgeToSEL=function(s){this.m_SortedEdges===null?(this.m_SortedEdges=s,s.PrevInSEL=null,s.NextInSEL=null):(s.NextInSEL=this.m_SortedEdges,s.PrevInSEL=null,this.m_SortedEdges.PrevInSEL=s,this.m_SortedEdges=s)},n.Clipper.prototype.PopEdgeFromSEL=function(s){if(s.v=this.m_SortedEdges,s.v===null)return!1;var a=s.v;return this.m_SortedEdges=s.v.NextInSEL,this.m_SortedEdges!==null&&(this.m_SortedEdges.PrevInSEL=null),a.NextInSEL=null,a.PrevInSEL=null,!0},n.Clipper.prototype.CopyAELToSEL=function(){var s=this.m_ActiveEdges;for(this.m_SortedEdges=s;s!==null;)s.PrevInSEL=s.PrevInAEL,s.NextInSEL=s.NextInAEL,s=s.NextInAEL},n.Clipper.prototype.SwapPositionsInSEL=function(s,a){if(!(s.NextInSEL===null&&s.PrevInSEL===null)&&!(a.NextInSEL===null&&a.PrevInSEL===null)){if(s.NextInSEL===a){var c=a.NextInSEL;c!==null&&(c.PrevInSEL=s);var p=s.PrevInSEL;p!==null&&(p.NextInSEL=a),a.PrevInSEL=p,a.NextInSEL=s,s.PrevInSEL=a,s.NextInSEL=c}else if(a.NextInSEL===s){var c=s.NextInSEL;c!==null&&(c.PrevInSEL=a);var p=a.PrevInSEL;p!==null&&(p.NextInSEL=s),s.PrevInSEL=p,s.NextInSEL=a,a.PrevInSEL=s,a.NextInSEL=c}else{var c=s.NextInSEL,p=s.PrevInSEL;s.NextInSEL=a.NextInSEL,s.NextInSEL!==null&&(s.NextInSEL.PrevInSEL=s),s.PrevInSEL=a.PrevInSEL,s.PrevInSEL!==null&&(s.PrevInSEL.NextInSEL=s),a.NextInSEL=c,a.NextInSEL!==null&&(a.NextInSEL.PrevInSEL=a),a.PrevInSEL=p,a.PrevInSEL!==null&&(a.PrevInSEL.NextInSEL=a)}s.PrevInSEL===null?this.m_SortedEdges=s:a.PrevInSEL===null&&(this.m_SortedEdges=a)}},n.Clipper.prototype.AddLocalMaxPoly=function(s,a,c){this.AddOutPt(s,c),a.WindDelta===0&&this.AddOutPt(a,c),s.OutIdx===a.OutIdx?(s.OutIdx=-1,a.OutIdx=-1):s.OutIdx<a.OutIdx?this.AppendPolygon(s,a):this.AppendPolygon(a,s)},n.Clipper.prototype.AddLocalMinPoly=function(s,a,c){var p,y,A;if(n.ClipperBase.IsHorizontal(a)||s.Dx>a.Dx?(p=this.AddOutPt(s,c),a.OutIdx=s.OutIdx,s.Side=n.EdgeSide.esLeft,a.Side=n.EdgeSide.esRight,y=s,y.PrevInAEL===a?A=a.PrevInAEL:A=y.PrevInAEL):(p=this.AddOutPt(a,c),s.OutIdx=a.OutIdx,s.Side=n.EdgeSide.esRight,a.Side=n.EdgeSide.esLeft,y=a,y.PrevInAEL===s?A=s.PrevInAEL:A=y.PrevInAEL),A!==null&&A.OutIdx>=0&&A.Top.Y<c.Y&&y.Top.Y<c.Y){var F=n.Clipper.TopX(A,c.Y),Q=n.Clipper.TopX(y,c.Y);if(F===Q&&y.WindDelta!==0&&A.WindDelta!==0&&n.ClipperBase.SlopesEqual5(new n.IntPoint2(F,c.Y),A.Top,new n.IntPoint2(Q,c.Y),y.Top,this.m_UseFullRange)){var nt=this.AddOutPt(A,c);this.AddJoin(p,nt,y.Top)}}return p},n.Clipper.prototype.AddOutPt=function(s,a){if(s.OutIdx<0){var c=this.CreateOutRec();c.IsOpen=s.WindDelta===0;var p=new n.OutPt;return c.Pts=p,p.Idx=c.Idx,p.Pt.X=a.X,p.Pt.Y=a.Y,n.use_xyz&&(p.Pt.Z=a.Z),p.Next=p,p.Prev=p,c.IsOpen||this.SetHoleState(s,c),s.OutIdx=c.Idx,p}else{var c=this.m_PolyOuts[s.OutIdx],y=c.Pts,A=s.Side===n.EdgeSide.esLeft;if(A&&n.IntPoint.op_Equality(a,y.Pt))return y;if(!A&&n.IntPoint.op_Equality(a,y.Prev.Pt))return y.Prev;var p=new n.OutPt;return p.Idx=c.Idx,p.Pt.X=a.X,p.Pt.Y=a.Y,n.use_xyz&&(p.Pt.Z=a.Z),p.Next=y,p.Prev=y.Prev,p.Prev.Next=p,y.Prev=p,A&&(c.Pts=p),p}},n.Clipper.prototype.GetLastOutPt=function(s){var a=this.m_PolyOuts[s.OutIdx];return s.Side===n.EdgeSide.esLeft?a.Pts:a.Pts.Prev},n.Clipper.prototype.SwapPoints=function(s,a){var c=new n.IntPoint1(s.Value);s.Value.X=a.Value.X,s.Value.Y=a.Value.Y,n.use_xyz&&(s.Value.Z=a.Value.Z),a.Value.X=c.X,a.Value.Y=c.Y,n.use_xyz&&(a.Value.Z=c.Z)},n.Clipper.prototype.HorzSegmentsOverlap=function(s,a,c,p){var y;return s>a&&(y=s,s=a,a=y),c>p&&(y=c,c=p,p=y),s<p&&c<a},n.Clipper.prototype.SetHoleState=function(s,a){for(var c=s.PrevInAEL,p=null;c!==null;)c.OutIdx>=0&&c.WindDelta!==0&&(p===null?p=c:p.OutIdx===c.OutIdx&&(p=null)),c=c.PrevInAEL;p===null?(a.FirstLeft=null,a.IsHole=!1):(a.FirstLeft=this.m_PolyOuts[p.OutIdx],a.IsHole=!a.FirstLeft.IsHole)},n.Clipper.prototype.GetDx=function(s,a){return s.Y===a.Y?n.ClipperBase.horizontal:(a.X-s.X)/(a.Y-s.Y)},n.Clipper.prototype.FirstIsBottomPt=function(s,a){for(var c=s.Prev;n.IntPoint.op_Equality(c.Pt,s.Pt)&&c!==s;)c=c.Prev;var p=Math.abs(this.GetDx(s.Pt,c.Pt));for(c=s.Next;n.IntPoint.op_Equality(c.Pt,s.Pt)&&c!==s;)c=c.Next;var y=Math.abs(this.GetDx(s.Pt,c.Pt));for(c=a.Prev;n.IntPoint.op_Equality(c.Pt,a.Pt)&&c!==a;)c=c.Prev;var A=Math.abs(this.GetDx(a.Pt,c.Pt));for(c=a.Next;n.IntPoint.op_Equality(c.Pt,a.Pt)&&c!==a;)c=c.Next;var F=Math.abs(this.GetDx(a.Pt,c.Pt));return Math.max(p,y)===Math.max(A,F)&&Math.min(p,y)===Math.min(A,F)?this.Area(s)>0:p>=A&&p>=F||y>=A&&y>=F},n.Clipper.prototype.GetBottomPt=function(s){for(var a=null,c=s.Next;c!==s;)c.Pt.Y>s.Pt.Y?(s=c,a=null):c.Pt.Y===s.Pt.Y&&c.Pt.X<=s.Pt.X&&(c.Pt.X<s.Pt.X?(a=null,s=c):c.Next!==s&&c.Prev!==s&&(a=c)),c=c.Next;if(a!==null)for(;a!==c;)for(this.FirstIsBottomPt(c,a)||(s=a),a=a.Next;n.IntPoint.op_Inequality(a.Pt,s.Pt);)a=a.Next;return s},n.Clipper.prototype.GetLowermostRec=function(s,a){s.BottomPt===null&&(s.BottomPt=this.GetBottomPt(s.Pts)),a.BottomPt===null&&(a.BottomPt=this.GetBottomPt(a.Pts));var c=s.BottomPt,p=a.BottomPt;return c.Pt.Y>p.Pt.Y?s:c.Pt.Y<p.Pt.Y?a:c.Pt.X<p.Pt.X?s:c.Pt.X>p.Pt.X||c.Next===c?a:p.Next===p||this.FirstIsBottomPt(c,p)?s:a},n.Clipper.prototype.OutRec1RightOfOutRec2=function(s,a){do if(s=s.FirstLeft,s===a)return!0;while(s!==null);return!1},n.Clipper.prototype.GetOutRec=function(s){for(var a=this.m_PolyOuts[s];a!==this.m_PolyOuts[a.Idx];)a=this.m_PolyOuts[a.Idx];return a},n.Clipper.prototype.AppendPolygon=function(s,a){var c=this.m_PolyOuts[s.OutIdx],p=this.m_PolyOuts[a.OutIdx],y;this.OutRec1RightOfOutRec2(c,p)?y=p:this.OutRec1RightOfOutRec2(p,c)?y=c:y=this.GetLowermostRec(c,p);var A=c.Pts,F=A.Prev,Q=p.Pts,nt=Q.Prev;s.Side===n.EdgeSide.esLeft?a.Side===n.EdgeSide.esLeft?(this.ReversePolyPtLinks(Q),Q.Next=A,A.Prev=Q,F.Next=nt,nt.Prev=F,c.Pts=nt):(nt.Next=A,A.Prev=nt,Q.Prev=F,F.Next=Q,c.Pts=Q):a.Side===n.EdgeSide.esRight?(this.ReversePolyPtLinks(Q),F.Next=nt,nt.Prev=F,Q.Next=A,A.Prev=Q):(F.Next=Q,Q.Prev=F,A.Prev=nt,nt.Next=A),c.BottomPt=null,y===p&&(p.FirstLeft!==c&&(c.FirstLeft=p.FirstLeft),c.IsHole=p.IsHole),p.Pts=null,p.BottomPt=null,p.FirstLeft=c;var ft=s.OutIdx,Ct=a.OutIdx;s.OutIdx=-1,a.OutIdx=-1;for(var Tt=this.m_ActiveEdges;Tt!==null;){if(Tt.OutIdx===Ct){Tt.OutIdx=ft,Tt.Side=s.Side;break}Tt=Tt.NextInAEL}p.Idx=c.Idx},n.Clipper.prototype.ReversePolyPtLinks=function(s){if(s!==null){var a,c;a=s;do c=a.Next,a.Next=a.Prev,a.Prev=c,a=c;while(a!==s)}},n.Clipper.SwapSides=function(s,a){var c=s.Side;s.Side=a.Side,a.Side=c},n.Clipper.SwapPolyIndexes=function(s,a){var c=s.OutIdx;s.OutIdx=a.OutIdx,a.OutIdx=c},n.Clipper.prototype.IntersectEdges=function(s,a,c){var p=s.OutIdx>=0,y=a.OutIdx>=0;if(n.use_xyz&&this.SetZ(c,s,a),n.use_lines&&(s.WindDelta===0||a.WindDelta===0)){if(s.WindDelta===0&&a.WindDelta===0)return;s.PolyTyp===a.PolyTyp&&s.WindDelta!==a.WindDelta&&this.m_ClipType===n.ClipType.ctUnion?s.WindDelta===0?y&&(this.AddOutPt(s,c),p&&(s.OutIdx=-1)):p&&(this.AddOutPt(a,c),y&&(a.OutIdx=-1)):s.PolyTyp!==a.PolyTyp&&(s.WindDelta===0&&Math.abs(a.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||a.WindCnt2===0)?(this.AddOutPt(s,c),p&&(s.OutIdx=-1)):a.WindDelta===0&&Math.abs(s.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||s.WindCnt2===0)&&(this.AddOutPt(a,c),y&&(a.OutIdx=-1)));return}if(s.PolyTyp===a.PolyTyp)if(this.IsEvenOddFillType(s)){var A=s.WindCnt;s.WindCnt=a.WindCnt,a.WindCnt=A}else s.WindCnt+a.WindDelta===0?s.WindCnt=-s.WindCnt:s.WindCnt+=a.WindDelta,a.WindCnt-s.WindDelta===0?a.WindCnt=-a.WindCnt:a.WindCnt-=s.WindDelta;else this.IsEvenOddFillType(a)?s.WindCnt2=s.WindCnt2===0?1:0:s.WindCnt2+=a.WindDelta,this.IsEvenOddFillType(s)?a.WindCnt2=a.WindCnt2===0?1:0:a.WindCnt2-=s.WindDelta;var F,Q,nt,ft;s.PolyTyp===n.PolyType.ptSubject?(F=this.m_SubjFillType,nt=this.m_ClipFillType):(F=this.m_ClipFillType,nt=this.m_SubjFillType),a.PolyTyp===n.PolyType.ptSubject?(Q=this.m_SubjFillType,ft=this.m_ClipFillType):(Q=this.m_ClipFillType,ft=this.m_SubjFillType);var Ct,Tt;switch(F){case n.PolyFillType.pftPositive:Ct=s.WindCnt;break;case n.PolyFillType.pftNegative:Ct=-s.WindCnt;break;default:Ct=Math.abs(s.WindCnt);break}switch(Q){case n.PolyFillType.pftPositive:Tt=a.WindCnt;break;case n.PolyFillType.pftNegative:Tt=-a.WindCnt;break;default:Tt=Math.abs(a.WindCnt);break}if(p&&y)Ct!==0&&Ct!==1||Tt!==0&&Tt!==1||s.PolyTyp!==a.PolyTyp&&this.m_ClipType!==n.ClipType.ctXor?this.AddLocalMaxPoly(s,a,c):(this.AddOutPt(s,c),this.AddOutPt(a,c),n.Clipper.SwapSides(s,a),n.Clipper.SwapPolyIndexes(s,a));else if(p)(Tt===0||Tt===1)&&(this.AddOutPt(s,c),n.Clipper.SwapSides(s,a),n.Clipper.SwapPolyIndexes(s,a));else if(y)(Ct===0||Ct===1)&&(this.AddOutPt(a,c),n.Clipper.SwapSides(s,a),n.Clipper.SwapPolyIndexes(s,a));else if((Ct===0||Ct===1)&&(Tt===0||Tt===1)){var Dt,oe;switch(nt){case n.PolyFillType.pftPositive:Dt=s.WindCnt2;break;case n.PolyFillType.pftNegative:Dt=-s.WindCnt2;break;default:Dt=Math.abs(s.WindCnt2);break}switch(ft){case n.PolyFillType.pftPositive:oe=a.WindCnt2;break;case n.PolyFillType.pftNegative:oe=-a.WindCnt2;break;default:oe=Math.abs(a.WindCnt2);break}if(s.PolyTyp!==a.PolyTyp)this.AddLocalMinPoly(s,a,c);else if(Ct===1&&Tt===1)switch(this.m_ClipType){case n.ClipType.ctIntersection:Dt>0&&oe>0&&this.AddLocalMinPoly(s,a,c);break;case n.ClipType.ctUnion:Dt<=0&&oe<=0&&this.AddLocalMinPoly(s,a,c);break;case n.ClipType.ctDifference:(s.PolyTyp===n.PolyType.ptClip&&Dt>0&&oe>0||s.PolyTyp===n.PolyType.ptSubject&&Dt<=0&&oe<=0)&&this.AddLocalMinPoly(s,a,c);break;case n.ClipType.ctXor:this.AddLocalMinPoly(s,a,c);break}else n.Clipper.SwapSides(s,a)}},n.Clipper.prototype.DeleteFromSEL=function(s){var a=s.PrevInSEL,c=s.NextInSEL;a===null&&c===null&&s!==this.m_SortedEdges||(a!==null?a.NextInSEL=c:this.m_SortedEdges=c,c!==null&&(c.PrevInSEL=a),s.NextInSEL=null,s.PrevInSEL=null)},n.Clipper.prototype.ProcessHorizontals=function(){for(var s={};this.PopEdgeFromSEL(s);)this.ProcessHorizontal(s.v)},n.Clipper.prototype.GetHorzDirection=function(s,a){s.Bot.X<s.Top.X?(a.Left=s.Bot.X,a.Right=s.Top.X,a.Dir=n.Direction.dLeftToRight):(a.Left=s.Top.X,a.Right=s.Bot.X,a.Dir=n.Direction.dRightToLeft)},n.Clipper.prototype.ProcessHorizontal=function(s){var a={Dir:null,Left:null,Right:null};this.GetHorzDirection(s,a);for(var c=a.Dir,p=a.Left,y=a.Right,A=s.WindDelta===0,F=s,Q=null;F.NextInLML!==null&&n.ClipperBase.IsHorizontal(F.NextInLML);)F=F.NextInLML;F.NextInLML===null&&(Q=this.GetMaximaPair(F));var nt=this.m_Maxima;if(nt!==null)if(c===n.Direction.dLeftToRight){for(;nt!==null&&nt.X<=s.Bot.X;)nt=nt.Next;nt!==null&&nt.X>=F.Top.X&&(nt=null)}else{for(;nt.Next!==null&&nt.Next.X<s.Bot.X;)nt=nt.Next;nt.X<=F.Top.X&&(nt=null)}for(var ft=null;;){for(var Ct=s===F,Tt=this.GetNextInAEL(s,c);Tt!==null;){if(nt!==null)if(c===n.Direction.dLeftToRight)for(;nt!==null&&nt.X<Tt.Curr.X;)s.OutIdx>=0&&!A&&this.AddOutPt(s,new n.IntPoint2(nt.X,s.Bot.Y)),nt=nt.Next;else for(;nt!==null&&nt.X>Tt.Curr.X;)s.OutIdx>=0&&!A&&this.AddOutPt(s,new n.IntPoint2(nt.X,s.Bot.Y)),nt=nt.Prev;if(c===n.Direction.dLeftToRight&&Tt.Curr.X>y||c===n.Direction.dRightToLeft&&Tt.Curr.X<p||Tt.Curr.X===s.Top.X&&s.NextInLML!==null&&Tt.Dx<s.NextInLML.Dx)break;if(s.OutIdx>=0&&!A){n.use_xyz&&(c===n.Direction.dLeftToRight?this.SetZ(Tt.Curr,s,Tt):this.SetZ(Tt.Curr,Tt,s)),ft=this.AddOutPt(s,Tt.Curr);for(var Dt=this.m_SortedEdges;Dt!==null;){if(Dt.OutIdx>=0&&this.HorzSegmentsOverlap(s.Bot.X,s.Top.X,Dt.Bot.X,Dt.Top.X)){var oe=this.GetLastOutPt(Dt);this.AddJoin(oe,ft,Dt.Top)}Dt=Dt.NextInSEL}this.AddGhostJoin(ft,s.Bot)}if(Tt===Q&&Ct){s.OutIdx>=0&&this.AddLocalMaxPoly(s,Q,s.Top),this.DeleteFromAEL(s),this.DeleteFromAEL(Q);return}if(c===n.Direction.dLeftToRight){var _e=new n.IntPoint2(Tt.Curr.X,s.Curr.Y);this.IntersectEdges(s,Tt,_e)}else{var _e=new n.IntPoint2(Tt.Curr.X,s.Curr.Y);this.IntersectEdges(Tt,s,_e)}var Me=this.GetNextInAEL(Tt,c);this.SwapPositionsInAEL(s,Tt),Tt=Me}if(s.NextInLML===null||!n.ClipperBase.IsHorizontal(s.NextInLML))break;s=this.UpdateEdgeIntoAEL(s),s.OutIdx>=0&&this.AddOutPt(s,s.Bot),a={Dir:c,Left:p,Right:y},this.GetHorzDirection(s,a),c=a.Dir,p=a.Left,y=a.Right}if(s.OutIdx>=0&&ft===null){ft=this.GetLastOutPt(s);for(var Dt=this.m_SortedEdges;Dt!==null;){if(Dt.OutIdx>=0&&this.HorzSegmentsOverlap(s.Bot.X,s.Top.X,Dt.Bot.X,Dt.Top.X)){var oe=this.GetLastOutPt(Dt);this.AddJoin(oe,ft,Dt.Top)}Dt=Dt.NextInSEL}this.AddGhostJoin(ft,s.Top)}if(s.NextInLML!==null)if(s.OutIdx>=0){if(ft=this.AddOutPt(s,s.Top),s=this.UpdateEdgeIntoAEL(s),s.WindDelta===0)return;var Be=s.PrevInAEL,Me=s.NextInAEL;if(Be!==null&&Be.Curr.X===s.Bot.X&&Be.Curr.Y===s.Bot.Y&&Be.WindDelta===0&&Be.OutIdx>=0&&Be.Curr.Y>Be.Top.Y&&n.ClipperBase.SlopesEqual3(s,Be,this.m_UseFullRange)){var oe=this.AddOutPt(Be,s.Bot);this.AddJoin(ft,oe,s.Top)}else if(Me!==null&&Me.Curr.X===s.Bot.X&&Me.Curr.Y===s.Bot.Y&&Me.WindDelta!==0&&Me.OutIdx>=0&&Me.Curr.Y>Me.Top.Y&&n.ClipperBase.SlopesEqual3(s,Me,this.m_UseFullRange)){var oe=this.AddOutPt(Me,s.Bot);this.AddJoin(ft,oe,s.Top)}}else s=this.UpdateEdgeIntoAEL(s);else s.OutIdx>=0&&this.AddOutPt(s,s.Top),this.DeleteFromAEL(s)},n.Clipper.prototype.GetNextInAEL=function(s,a){return a===n.Direction.dLeftToRight?s.NextInAEL:s.PrevInAEL},n.Clipper.prototype.IsMinima=function(s){return s!==null&&s.Prev.NextInLML!==s&&s.Next.NextInLML!==s},n.Clipper.prototype.IsMaxima=function(s,a){return s!==null&&s.Top.Y===a&&s.NextInLML===null},n.Clipper.prototype.IsIntermediate=function(s,a){return s.Top.Y===a&&s.NextInLML!==null},n.Clipper.prototype.GetMaximaPair=function(s){return n.IntPoint.op_Equality(s.Next.Top,s.Top)&&s.Next.NextInLML===null?s.Next:n.IntPoint.op_Equality(s.Prev.Top,s.Top)&&s.Prev.NextInLML===null?s.Prev:null},n.Clipper.prototype.GetMaximaPairEx=function(s){var a=this.GetMaximaPair(s);return a===null||a.OutIdx===n.ClipperBase.Skip||a.NextInAEL===a.PrevInAEL&&!n.ClipperBase.IsHorizontal(a)?null:a},n.Clipper.prototype.ProcessIntersections=function(s){if(this.m_ActiveEdges===null)return!0;try{if(this.BuildIntersectList(s),this.m_IntersectList.length===0)return!0;if(this.m_IntersectList.length===1||this.FixupIntersectionOrder())this.ProcessIntersectList();else return!1}catch{this.m_SortedEdges=null,this.m_IntersectList.length=0,n.Error("ProcessIntersections error")}return this.m_SortedEdges=null,!0},n.Clipper.prototype.BuildIntersectList=function(s){if(this.m_ActiveEdges!==null){var a=this.m_ActiveEdges;for(this.m_SortedEdges=a;a!==null;)a.PrevInSEL=a.PrevInAEL,a.NextInSEL=a.NextInAEL,a.Curr.X=n.Clipper.TopX(a,s),a=a.NextInAEL;for(var c=!0;c&&this.m_SortedEdges!==null;){for(c=!1,a=this.m_SortedEdges;a.NextInSEL!==null;){var p=a.NextInSEL,y=new n.IntPoint0;if(a.Curr.X>p.Curr.X){this.IntersectPoint(a,p,y),y.Y<s&&(y=new n.IntPoint2(n.Clipper.TopX(a,s),s));var A=new n.IntersectNode;A.Edge1=a,A.Edge2=p,A.Pt.X=y.X,A.Pt.Y=y.Y,n.use_xyz&&(A.Pt.Z=y.Z),this.m_IntersectList.push(A),this.SwapPositionsInSEL(a,p),c=!0}else a=p}if(a.PrevInSEL!==null)a.PrevInSEL.NextInSEL=null;else break}this.m_SortedEdges=null}},n.Clipper.prototype.EdgesAdjacent=function(s){return s.Edge1.NextInSEL===s.Edge2||s.Edge1.PrevInSEL===s.Edge2},n.Clipper.IntersectNodeSort=function(s,a){return a.Pt.Y-s.Pt.Y},n.Clipper.prototype.FixupIntersectionOrder=function(){this.m_IntersectList.sort(this.m_IntersectNodeComparer),this.CopyAELToSEL();for(var s=this.m_IntersectList.length,a=0;a<s;a++){if(!this.EdgesAdjacent(this.m_IntersectList[a])){for(var c=a+1;c<s&&!this.EdgesAdjacent(this.m_IntersectList[c]);)c++;if(c===s)return!1;var p=this.m_IntersectList[a];this.m_IntersectList[a]=this.m_IntersectList[c],this.m_IntersectList[c]=p}this.SwapPositionsInSEL(this.m_IntersectList[a].Edge1,this.m_IntersectList[a].Edge2)}return!0},n.Clipper.prototype.ProcessIntersectList=function(){for(var s=0,a=this.m_IntersectList.length;s<a;s++){var c=this.m_IntersectList[s];this.IntersectEdges(c.Edge1,c.Edge2,c.Pt),this.SwapPositionsInAEL(c.Edge1,c.Edge2)}this.m_IntersectList.length=0};var ee=function(s){return s<0?Math.ceil(s-.5):Math.round(s)},Ie=function(s){return s<0?Math.ceil(s-.5):Math.floor(s+.5)},We=function(s){return s<0?-Math.round(Math.abs(s)):Math.round(s)},Te=function(s){return s<0?(s-=.5,s<-2147483648?Math.ceil(s):s|0):(s+=.5,s>2147483647?Math.floor(s):s|0)};r.msie?n.Clipper.Round=ee:r.chromium?n.Clipper.Round=We:r.safari?n.Clipper.Round=Te:n.Clipper.Round=Ie,n.Clipper.TopX=function(s,a){return a===s.Top.Y?s.Top.X:s.Bot.X+n.Clipper.Round(s.Dx*(a-s.Bot.Y))},n.Clipper.prototype.IntersectPoint=function(s,a,c){c.X=0,c.Y=0;var p,y;if(s.Dx===a.Dx){c.Y=s.Curr.Y,c.X=n.Clipper.TopX(s,c.Y);return}if(s.Delta.X===0)c.X=s.Bot.X,n.ClipperBase.IsHorizontal(a)?c.Y=a.Bot.Y:(y=a.Bot.Y-a.Bot.X/a.Dx,c.Y=n.Clipper.Round(c.X/a.Dx+y));else if(a.Delta.X===0)c.X=a.Bot.X,n.ClipperBase.IsHorizontal(s)?c.Y=s.Bot.Y:(p=s.Bot.Y-s.Bot.X/s.Dx,c.Y=n.Clipper.Round(c.X/s.Dx+p));else{p=s.Bot.X-s.Bot.Y*s.Dx,y=a.Bot.X-a.Bot.Y*a.Dx;var A=(y-p)/(s.Dx-a.Dx);c.Y=n.Clipper.Round(A),Math.abs(s.Dx)<Math.abs(a.Dx)?c.X=n.Clipper.Round(s.Dx*A+p):c.X=n.Clipper.Round(a.Dx*A+y)}if(c.Y<s.Top.Y||c.Y<a.Top.Y){if(s.Top.Y>a.Top.Y)return c.Y=s.Top.Y,c.X=n.Clipper.TopX(a,s.Top.Y),c.X<s.Top.X;c.Y=a.Top.Y,Math.abs(s.Dx)<Math.abs(a.Dx)?c.X=n.Clipper.TopX(s,c.Y):c.X=n.Clipper.TopX(a,c.Y)}c.Y>s.Curr.Y&&(c.Y=s.Curr.Y,Math.abs(s.Dx)>Math.abs(a.Dx)?c.X=n.Clipper.TopX(a,c.Y):c.X=n.Clipper.TopX(s,c.Y))},n.Clipper.prototype.ProcessEdgesAtTopOfScanbeam=function(s){for(var a=this.m_ActiveEdges;a!==null;){var c=this.IsMaxima(a,s);if(c){var p=this.GetMaximaPairEx(a);c=p===null||!n.ClipperBase.IsHorizontal(p)}if(c){this.StrictlySimple&&this.InsertMaxima(a.Top.X);var y=a.PrevInAEL;this.DoMaxima(a),y===null?a=this.m_ActiveEdges:a=y.NextInAEL}else{if(this.IsIntermediate(a,s)&&n.ClipperBase.IsHorizontal(a.NextInLML)?(a=this.UpdateEdgeIntoAEL(a),a.OutIdx>=0&&this.AddOutPt(a,a.Bot),this.AddEdgeToSEL(a)):(a.Curr.X=n.Clipper.TopX(a,s),a.Curr.Y=s),n.use_xyz&&(a.Top.Y===s?a.Curr.Z=a.Top.Z:a.Bot.Y===s?a.Curr.Z=a.Bot.Z:a.Curr.Z=0),this.StrictlySimple){var y=a.PrevInAEL;if(a.OutIdx>=0&&a.WindDelta!==0&&y!==null&&y.OutIdx>=0&&y.Curr.X===a.Curr.X&&y.WindDelta!==0){var A=new n.IntPoint1(a.Curr);n.use_xyz&&this.SetZ(A,y,a);var F=this.AddOutPt(y,A),Q=this.AddOutPt(a,A);this.AddJoin(F,Q,A)}}a=a.NextInAEL}}for(this.ProcessHorizontals(),this.m_Maxima=null,a=this.m_ActiveEdges;a!==null;){if(this.IsIntermediate(a,s)){var F=null;a.OutIdx>=0&&(F=this.AddOutPt(a,a.Top)),a=this.UpdateEdgeIntoAEL(a);var y=a.PrevInAEL,nt=a.NextInAEL;if(y!==null&&y.Curr.X===a.Bot.X&&y.Curr.Y===a.Bot.Y&&F!==null&&y.OutIdx>=0&&y.Curr.Y===y.Top.Y&&n.ClipperBase.SlopesEqual5(a.Curr,a.Top,y.Curr,y.Top,this.m_UseFullRange)&&a.WindDelta!==0&&y.WindDelta!==0){var Q=this.AddOutPt(ePrev2,a.Bot);this.AddJoin(F,Q,a.Top)}else if(nt!==null&&nt.Curr.X===a.Bot.X&&nt.Curr.Y===a.Bot.Y&&F!==null&&nt.OutIdx>=0&&nt.Curr.Y===nt.Top.Y&&n.ClipperBase.SlopesEqual5(a.Curr,a.Top,nt.Curr,nt.Top,this.m_UseFullRange)&&a.WindDelta!==0&&nt.WindDelta!==0){var Q=this.AddOutPt(nt,a.Bot);this.AddJoin(F,Q,a.Top)}}a=a.NextInAEL}},n.Clipper.prototype.DoMaxima=function(s){var a=this.GetMaximaPairEx(s);if(a===null){s.OutIdx>=0&&this.AddOutPt(s,s.Top),this.DeleteFromAEL(s);return}for(var c=s.NextInAEL;c!==null&&c!==a;)this.IntersectEdges(s,c,s.Top),this.SwapPositionsInAEL(s,c),c=s.NextInAEL;s.OutIdx===-1&&a.OutIdx===-1?(this.DeleteFromAEL(s),this.DeleteFromAEL(a)):s.OutIdx>=0&&a.OutIdx>=0?(s.OutIdx>=0&&this.AddLocalMaxPoly(s,a,s.Top),this.DeleteFromAEL(s),this.DeleteFromAEL(a)):n.use_lines&&s.WindDelta===0?(s.OutIdx>=0&&(this.AddOutPt(s,s.Top),s.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(s),a.OutIdx>=0&&(this.AddOutPt(a,s.Top),a.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(a)):n.Error("DoMaxima error")},n.Clipper.ReversePaths=function(s){for(var a=0,c=s.length;a<c;a++)s[a].reverse()},n.Clipper.Orientation=function(s){return n.Clipper.Area(s)>=0},n.Clipper.prototype.PointCount=function(s){if(s===null)return 0;var a=0,c=s;do a++,c=c.Next;while(c!==s);return a},n.Clipper.prototype.BuildResult=function(s){n.Clear(s);for(var a=0,c=this.m_PolyOuts.length;a<c;a++){var p=this.m_PolyOuts[a];if(p.Pts!==null){var y=p.Pts.Prev,A=this.PointCount(y);if(!(A<2)){for(var F=new Array(A),Q=0;Q<A;Q++)F[Q]=y.Pt,y=y.Prev;s.push(F)}}}},n.Clipper.prototype.BuildResult2=function(s){s.Clear();for(var a=0,c=this.m_PolyOuts.length;a<c;a++){var p=this.m_PolyOuts[a],y=this.PointCount(p.Pts);if(!(p.IsOpen&&y<2||!p.IsOpen&&y<3)){this.FixHoleLinkage(p);var A=new n.PolyNode;s.m_AllPolys.push(A),p.PolyNode=A,A.m_polygon.length=y;for(var F=p.Pts.Prev,Q=0;Q<y;Q++)A.m_polygon[Q]=F.Pt,F=F.Prev}}for(var a=0,c=this.m_PolyOuts.length;a<c;a++){var p=this.m_PolyOuts[a];p.PolyNode!==null&&(p.IsOpen?(p.PolyNode.IsOpen=!0,s.AddChild(p.PolyNode)):p.FirstLeft!==null&&p.FirstLeft.PolyNode!==null?p.FirstLeft.PolyNode.AddChild(p.PolyNode):s.AddChild(p.PolyNode))}},n.Clipper.prototype.FixupOutPolyline=function(s){for(var a=s.Pts,c=a.Prev;a!==c;)if(a=a.Next,n.IntPoint.op_Equality(a.Pt,a.Prev.Pt)){a===c&&(c=a.Prev);var p=a.Prev;p.Next=a.Next,a.Next.Prev=p,a=p}a===a.Prev&&(s.Pts=null)},n.Clipper.prototype.FixupOutPolygon=function(s){var a=null;s.BottomPt=null;for(var c=s.Pts,p=this.PreserveCollinear||this.StrictlySimple;;){if(c.Prev===c||c.Prev===c.Next){s.Pts=null;return}if(n.IntPoint.op_Equality(c.Pt,c.Next.Pt)||n.IntPoint.op_Equality(c.Pt,c.Prev.Pt)||n.ClipperBase.SlopesEqual4(c.Prev.Pt,c.Pt,c.Next.Pt,this.m_UseFullRange)&&(!p||!this.Pt2IsBetweenPt1AndPt3(c.Prev.Pt,c.Pt,c.Next.Pt)))a=null,c.Prev.Next=c.Next,c.Next.Prev=c.Prev,c=c.Prev;else{if(c===a)break;a===null&&(a=c),c=c.Next}}s.Pts=c},n.Clipper.prototype.DupOutPt=function(s,a){var c=new n.OutPt;return c.Pt.X=s.Pt.X,c.Pt.Y=s.Pt.Y,n.use_xyz&&(c.Pt.Z=s.Pt.Z),c.Idx=s.Idx,a?(c.Next=s.Next,c.Prev=s,s.Next.Prev=c,s.Next=c):(c.Prev=s.Prev,c.Next=s,s.Prev.Next=c,s.Prev=c),c},n.Clipper.prototype.GetOverlap=function(s,a,c,p,y){return s<a?c<p?(y.Left=Math.max(s,c),y.Right=Math.min(a,p)):(y.Left=Math.max(s,p),y.Right=Math.min(a,c)):c<p?(y.Left=Math.max(a,c),y.Right=Math.min(s,p)):(y.Left=Math.max(a,p),y.Right=Math.min(s,c)),y.Left<y.Right},n.Clipper.prototype.JoinHorz=function(s,a,c,p,y,A){var F=s.Pt.X>a.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight,Q=c.Pt.X>p.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight;if(F===Q)return!1;if(F===n.Direction.dLeftToRight){for(;s.Next.Pt.X<=y.X&&s.Next.Pt.X>=s.Pt.X&&s.Next.Pt.Y===y.Y;)s=s.Next;A&&s.Pt.X!==y.X&&(s=s.Next),a=this.DupOutPt(s,!A),n.IntPoint.op_Inequality(a.Pt,y)&&(s=a,s.Pt.X=y.X,s.Pt.Y=y.Y,n.use_xyz&&(s.Pt.Z=y.Z),a=this.DupOutPt(s,!A))}else{for(;s.Next.Pt.X>=y.X&&s.Next.Pt.X<=s.Pt.X&&s.Next.Pt.Y===y.Y;)s=s.Next;!A&&s.Pt.X!==y.X&&(s=s.Next),a=this.DupOutPt(s,A),n.IntPoint.op_Inequality(a.Pt,y)&&(s=a,s.Pt.X=y.X,s.Pt.Y=y.Y,n.use_xyz&&(s.Pt.Z=y.Z),a=this.DupOutPt(s,A))}if(Q===n.Direction.dLeftToRight){for(;c.Next.Pt.X<=y.X&&c.Next.Pt.X>=c.Pt.X&&c.Next.Pt.Y===y.Y;)c=c.Next;A&&c.Pt.X!==y.X&&(c=c.Next),p=this.DupOutPt(c,!A),n.IntPoint.op_Inequality(p.Pt,y)&&(c=p,c.Pt.X=y.X,c.Pt.Y=y.Y,n.use_xyz&&(c.Pt.Z=y.Z),p=this.DupOutPt(c,!A))}else{for(;c.Next.Pt.X>=y.X&&c.Next.Pt.X<=c.Pt.X&&c.Next.Pt.Y===y.Y;)c=c.Next;!A&&c.Pt.X!==y.X&&(c=c.Next),p=this.DupOutPt(c,A),n.IntPoint.op_Inequality(p.Pt,y)&&(c=p,c.Pt.X=y.X,c.Pt.Y=y.Y,n.use_xyz&&(c.Pt.Z=y.Z),p=this.DupOutPt(c,A))}return F===n.Direction.dLeftToRight===A?(s.Prev=c,c.Next=s,a.Next=p,p.Prev=a):(s.Next=c,c.Prev=s,a.Prev=p,p.Next=a),!0},n.Clipper.prototype.JoinPoints=function(s,a,c){var p=s.OutPt1,y=new n.OutPt,A=s.OutPt2,F=new n.OutPt,Q=s.OutPt1.Pt.Y===s.OffPt.Y;if(Q&&n.IntPoint.op_Equality(s.OffPt,s.OutPt1.Pt)&&n.IntPoint.op_Equality(s.OffPt,s.OutPt2.Pt)){if(a!==c)return!1;for(y=s.OutPt1.Next;y!==p&&n.IntPoint.op_Equality(y.Pt,s.OffPt);)y=y.Next;var nt=y.Pt.Y>s.OffPt.Y;for(F=s.OutPt2.Next;F!==A&&n.IntPoint.op_Equality(F.Pt,s.OffPt);)F=F.Next;var ft=F.Pt.Y>s.OffPt.Y;return nt===ft?!1:nt?(y=this.DupOutPt(p,!1),F=this.DupOutPt(A,!0),p.Prev=A,A.Next=p,y.Next=F,F.Prev=y,s.OutPt1=p,s.OutPt2=y,!0):(y=this.DupOutPt(p,!0),F=this.DupOutPt(A,!1),p.Next=A,A.Prev=p,y.Prev=F,F.Next=y,s.OutPt1=p,s.OutPt2=y,!0)}else if(Q){for(y=p;p.Prev.Pt.Y===p.Pt.Y&&p.Prev!==y&&p.Prev!==A;)p=p.Prev;for(;y.Next.Pt.Y===y.Pt.Y&&y.Next!==p&&y.Next!==A;)y=y.Next;if(y.Next===p||y.Next===A)return!1;for(F=A;A.Prev.Pt.Y===A.Pt.Y&&A.Prev!==F&&A.Prev!==y;)A=A.Prev;for(;F.Next.Pt.Y===F.Pt.Y&&F.Next!==A&&F.Next!==p;)F=F.Next;if(F.Next===A||F.Next===p)return!1;var Ct={Left:null,Right:null};if(!this.GetOverlap(p.Pt.X,y.Pt.X,A.Pt.X,F.Pt.X,Ct))return!1;var Tt=Ct.Left,Dt=Ct.Right,oe=new n.IntPoint0,_e;return p.Pt.X>=Tt&&p.Pt.X<=Dt?(oe.X=p.Pt.X,oe.Y=p.Pt.Y,n.use_xyz&&(oe.Z=p.Pt.Z),_e=p.Pt.X>y.Pt.X):A.Pt.X>=Tt&&A.Pt.X<=Dt?(oe.X=A.Pt.X,oe.Y=A.Pt.Y,n.use_xyz&&(oe.Z=A.Pt.Z),_e=A.Pt.X>F.Pt.X):y.Pt.X>=Tt&&y.Pt.X<=Dt?(oe.X=y.Pt.X,oe.Y=y.Pt.Y,n.use_xyz&&(oe.Z=y.Pt.Z),_e=y.Pt.X>p.Pt.X):(oe.X=F.Pt.X,oe.Y=F.Pt.Y,n.use_xyz&&(oe.Z=F.Pt.Z),_e=F.Pt.X>A.Pt.X),s.OutPt1=p,s.OutPt2=A,this.JoinHorz(p,y,A,F,oe,_e)}else{for(y=p.Next;n.IntPoint.op_Equality(y.Pt,p.Pt)&&y!==p;)y=y.Next;var Me=y.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,y.Pt,s.OffPt,this.m_UseFullRange);if(Me){for(y=p.Prev;n.IntPoint.op_Equality(y.Pt,p.Pt)&&y!==p;)y=y.Prev;if(y.Pt.Y>p.Pt.Y||!n.ClipperBase.SlopesEqual4(p.Pt,y.Pt,s.OffPt,this.m_UseFullRange))return!1}for(F=A.Next;n.IntPoint.op_Equality(F.Pt,A.Pt)&&F!==A;)F=F.Next;var Be=F.Pt.Y>A.Pt.Y||!n.ClipperBase.SlopesEqual4(A.Pt,F.Pt,s.OffPt,this.m_UseFullRange);if(Be){for(F=A.Prev;n.IntPoint.op_Equality(F.Pt,A.Pt)&&F!==A;)F=F.Prev;if(F.Pt.Y>A.Pt.Y||!n.ClipperBase.SlopesEqual4(A.Pt,F.Pt,s.OffPt,this.m_UseFullRange))return!1}return y===p||F===A||y===F||a===c&&Me===Be?!1:Me?(y=this.DupOutPt(p,!1),F=this.DupOutPt(A,!0),p.Prev=A,A.Next=p,y.Next=F,F.Prev=y,s.OutPt1=p,s.OutPt2=y,!0):(y=this.DupOutPt(p,!0),F=this.DupOutPt(A,!1),p.Next=A,A.Prev=p,y.Prev=F,F.Next=y,s.OutPt1=p,s.OutPt2=y,!0)}},n.Clipper.GetBounds=function(s){for(var a=0,c=s.length;a<c&&s[a].length===0;)a++;if(a===c)return new n.IntRect(0,0,0,0);var p=new n.IntRect;for(p.left=s[a][0].X,p.right=p.left,p.top=s[a][0].Y,p.bottom=p.top;a<c;a++)for(var y=0,A=s[a].length;y<A;y++)s[a][y].X<p.left?p.left=s[a][y].X:s[a][y].X>p.right&&(p.right=s[a][y].X),s[a][y].Y<p.top?p.top=s[a][y].Y:s[a][y].Y>p.bottom&&(p.bottom=s[a][y].Y);return p},n.Clipper.prototype.GetBounds2=function(s){var a=s,c=new n.IntRect;for(c.left=s.Pt.X,c.right=s.Pt.X,c.top=s.Pt.Y,c.bottom=s.Pt.Y,s=s.Next;s!==a;)s.Pt.X<c.left&&(c.left=s.Pt.X),s.Pt.X>c.right&&(c.right=s.Pt.X),s.Pt.Y<c.top&&(c.top=s.Pt.Y),s.Pt.Y>c.bottom&&(c.bottom=s.Pt.Y),s=s.Next;return c},n.Clipper.PointInPolygon=function(s,a){var c=0,p=a.length;if(p<3)return 0;for(var y=a[0],A=1;A<=p;++A){var F=A===p?a[0]:a[A];if(F.Y===s.Y&&(F.X===s.X||y.Y===s.Y&&F.X>s.X==y.X<s.X))return-1;if(y.Y<s.Y!=F.Y<s.Y){if(y.X>=s.X)if(F.X>s.X)c=1-c;else{var Q=(y.X-s.X)*(F.Y-s.Y)-(F.X-s.X)*(y.Y-s.Y);if(Q===0)return-1;Q>0==F.Y>y.Y&&(c=1-c)}else if(F.X>s.X){var Q=(y.X-s.X)*(F.Y-s.Y)-(F.X-s.X)*(y.Y-s.Y);if(Q===0)return-1;Q>0==F.Y>y.Y&&(c=1-c)}}y=F}return c},n.Clipper.prototype.PointInPolygon=function(s,a){var c=0,p=a,y=s.X,A=s.Y,F=a.Pt.X,Q=a.Pt.Y;do{a=a.Next;var nt=a.Pt.X,ft=a.Pt.Y;if(ft===A&&(nt===y||Q===A&&nt>y==F<y))return-1;if(Q<A!=ft<A){if(F>=y)if(nt>y)c=1-c;else{var Ct=(F-y)*(ft-A)-(nt-y)*(Q-A);if(Ct===0)return-1;Ct>0==ft>Q&&(c=1-c)}else if(nt>y){var Ct=(F-y)*(ft-A)-(nt-y)*(Q-A);if(Ct===0)return-1;Ct>0==ft>Q&&(c=1-c)}}F=nt,Q=ft}while(p!==a);return c},n.Clipper.prototype.Poly2ContainsPoly1=function(s,a){var c=s;do{var p=this.PointInPolygon(c.Pt,a);if(p>=0)return p>0;c=c.Next}while(c!==s);return!0},n.Clipper.prototype.FixupFirstLefts1=function(s,a){for(var c,p,y=0,A=this.m_PolyOuts.length;y<A;y++)c=this.m_PolyOuts[y],p=n.Clipper.ParseFirstLeft(c.FirstLeft),c.Pts!==null&&p===s&&this.Poly2ContainsPoly1(c.Pts,a.Pts)&&(c.FirstLeft=a)},n.Clipper.prototype.FixupFirstLefts2=function(s,a){for(var c=a.FirstLeft,p,y,A=0,F=this.m_PolyOuts.length;A<F;A++)p=this.m_PolyOuts[A],!(p.Pts===null||p===a||p===s)&&(y=n.Clipper.ParseFirstLeft(p.FirstLeft),!(y!==c&&y!==s&&y!==a)&&(this.Poly2ContainsPoly1(p.Pts,s.Pts)?p.FirstLeft=s:this.Poly2ContainsPoly1(p.Pts,a.Pts)?p.FirstLeft=a:(p.FirstLeft===s||p.FirstLeft===a)&&(p.FirstLeft=c)))},n.Clipper.prototype.FixupFirstLefts3=function(s,a){for(var c,p,y=0,A=this.m_PolyOuts.length;y<A;y++)c=this.m_PolyOuts[y],p=n.Clipper.ParseFirstLeft(c.FirstLeft),c.Pts!==null&&p===s&&(c.FirstLeft=a)},n.Clipper.ParseFirstLeft=function(s){for(;s!==null&&s.Pts===null;)s=s.FirstLeft;return s},n.Clipper.prototype.JoinCommonEdges=function(){for(var s=0,a=this.m_Joins.length;s<a;s++){var c=this.m_Joins[s],p=this.GetOutRec(c.OutPt1.Idx),y=this.GetOutRec(c.OutPt2.Idx);if(!(p.Pts===null||y.Pts===null)&&!(p.IsOpen||y.IsOpen)){var A;p===y?A=p:this.OutRec1RightOfOutRec2(p,y)?A=y:this.OutRec1RightOfOutRec2(y,p)?A=p:A=this.GetLowermostRec(p,y),this.JoinPoints(c,p,y)&&(p===y?(p.Pts=c.OutPt1,p.BottomPt=null,y=this.CreateOutRec(),y.Pts=c.OutPt2,this.UpdateOutPtIdxs(y),this.Poly2ContainsPoly1(y.Pts,p.Pts)?(y.IsHole=!p.IsHole,y.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts2(y,p),(y.IsHole^this.ReverseSolution)==this.Area$1(y)>0&&this.ReversePolyPtLinks(y.Pts)):this.Poly2ContainsPoly1(p.Pts,y.Pts)?(y.IsHole=p.IsHole,p.IsHole=!y.IsHole,y.FirstLeft=p.FirstLeft,p.FirstLeft=y,this.m_UsingPolyTree&&this.FixupFirstLefts2(p,y),(p.IsHole^this.ReverseSolution)==this.Area$1(p)>0&&this.ReversePolyPtLinks(p.Pts)):(y.IsHole=p.IsHole,y.FirstLeft=p.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(p,y))):(y.Pts=null,y.BottomPt=null,y.Idx=p.Idx,p.IsHole=A.IsHole,A===y&&(p.FirstLeft=y.FirstLeft),y.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts3(y,p)))}}},n.Clipper.prototype.UpdateOutPtIdxs=function(s){var a=s.Pts;do a.Idx=s.Idx,a=a.Prev;while(a!==s.Pts)},n.Clipper.prototype.DoSimplePolygons=function(){for(var s=0;s<this.m_PolyOuts.length;){var a=this.m_PolyOuts[s++],c=a.Pts;if(!(c===null||a.IsOpen))do{for(var p=c.Next;p!==a.Pts;){if(n.IntPoint.op_Equality(c.Pt,p.Pt)&&p.Next!==c&&p.Prev!==c){var y=c.Prev,A=p.Prev;c.Prev=A,A.Next=c,p.Prev=y,y.Next=p,a.Pts=c;var F=this.CreateOutRec();F.Pts=p,this.UpdateOutPtIdxs(F),this.Poly2ContainsPoly1(F.Pts,a.Pts)?(F.IsHole=!a.IsHole,F.FirstLeft=a,this.m_UsingPolyTree&&this.FixupFirstLefts2(F,a)):this.Poly2ContainsPoly1(a.Pts,F.Pts)?(F.IsHole=a.IsHole,a.IsHole=!F.IsHole,F.FirstLeft=a.FirstLeft,a.FirstLeft=F,this.m_UsingPolyTree&&this.FixupFirstLefts2(a,F)):(F.IsHole=a.IsHole,F.FirstLeft=a.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(a,F)),p=c}p=p.Next}c=c.Next}while(c!==a.Pts)}},n.Clipper.Area=function(s){if(!Array.isArray(s))return 0;var a=s.length;if(a<3)return 0;for(var c=0,p=0,y=a-1;p<a;++p)c+=(s[y].X+s[p].X)*(s[y].Y-s[p].Y),y=p;return-c*.5},n.Clipper.prototype.Area=function(s){var a=s;if(s===null)return 0;var c=0;do c=c+(s.Prev.Pt.X+s.Pt.X)*(s.Prev.Pt.Y-s.Pt.Y),s=s.Next;while(s!==a);return c*.5},n.Clipper.prototype.Area$1=function(s){return this.Area(s.Pts)},n.Clipper.SimplifyPolygon=function(s,a){var c=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPath(s,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,c,a,a),c},n.Clipper.SimplifyPolygons=function(s,a){typeof a>"u"&&(a=n.PolyFillType.pftEvenOdd);var c=new Array,p=new n.Clipper(0);return p.StrictlySimple=!0,p.AddPaths(s,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,c,a,a),c},n.Clipper.DistanceSqrd=function(s,a){var c=s.X-a.X,p=s.Y-a.Y;return c*c+p*p},n.Clipper.DistanceFromLineSqrd=function(s,a,c){var p=a.Y-c.Y,y=c.X-a.X,A=p*a.X+y*a.Y;return A=p*s.X+y*s.Y-A,A*A/(p*p+y*y)},n.Clipper.SlopesNearCollinear=function(s,a,c,p){return Math.abs(s.X-a.X)>Math.abs(s.Y-a.Y)?s.X>a.X==s.X<c.X?n.Clipper.DistanceFromLineSqrd(s,a,c)<p:a.X>s.X==a.X<c.X?n.Clipper.DistanceFromLineSqrd(a,s,c)<p:n.Clipper.DistanceFromLineSqrd(c,s,a)<p:s.Y>a.Y==s.Y<c.Y?n.Clipper.DistanceFromLineSqrd(s,a,c)<p:a.Y>s.Y==a.Y<c.Y?n.Clipper.DistanceFromLineSqrd(a,s,c)<p:n.Clipper.DistanceFromLineSqrd(c,s,a)<p},n.Clipper.PointsAreClose=function(s,a,c){var p=s.X-a.X,y=s.Y-a.Y;return p*p+y*y<=c},n.Clipper.ExcludeOp=function(s){var a=s.Prev;return a.Next=s.Next,s.Next.Prev=a,a.Idx=0,a},n.Clipper.CleanPolygon=function(s,a){typeof a>"u"&&(a=1.415);var c=s.length;if(c===0)return new Array;for(var p=new Array(c),y=0;y<c;++y)p[y]=new n.OutPt;for(var y=0;y<c;++y)p[y].Pt=s[y],p[y].Next=p[(y+1)%c],p[y].Next.Prev=p[y],p[y].Idx=0;for(var A=a*a,F=p[0];F.Idx===0&&F.Next!==F.Prev;)n.Clipper.PointsAreClose(F.Pt,F.Prev.Pt,A)?(F=n.Clipper.ExcludeOp(F),c--):n.Clipper.PointsAreClose(F.Prev.Pt,F.Next.Pt,A)?(n.Clipper.ExcludeOp(F.Next),F=n.Clipper.ExcludeOp(F),c-=2):n.Clipper.SlopesNearCollinear(F.Prev.Pt,F.Pt,F.Next.Pt,A)?(F=n.Clipper.ExcludeOp(F),c--):(F.Idx=1,F=F.Next);c<3&&(c=0);for(var Q=new Array(c),y=0;y<c;++y)Q[y]=new n.IntPoint1(F.Pt),F=F.Next;return p=null,Q},n.Clipper.CleanPolygons=function(s,a){for(var c=new Array(s.length),p=0,y=s.length;p<y;p++)c[p]=n.Clipper.CleanPolygon(s[p],a);return c},n.Clipper.Minkowski=function(s,a,c,p){var y=p?1:0,A=s.length,F=a.length,Q=new Array;if(c)for(var nt=0;nt<F;nt++){for(var ft=new Array(A),Ct=0,Tt=s.length,Dt=s[Ct];Ct<Tt;Ct++,Dt=s[Ct])ft[Ct]=new n.IntPoint2(a[nt].X+Dt.X,a[nt].Y+Dt.Y);Q.push(ft)}else for(var nt=0;nt<F;nt++){for(var ft=new Array(A),Ct=0,Tt=s.length,Dt=s[Ct];Ct<Tt;Ct++,Dt=s[Ct])ft[Ct]=new n.IntPoint2(a[nt].X-Dt.X,a[nt].Y-Dt.Y);Q.push(ft)}for(var oe=new Array,nt=0;nt<F-1+y;nt++)for(var Ct=0;Ct<A;Ct++){var _e=new Array;_e.push(Q[nt%F][Ct%A]),_e.push(Q[(nt+1)%F][Ct%A]),_e.push(Q[(nt+1)%F][(Ct+1)%A]),_e.push(Q[nt%F][(Ct+1)%A]),n.Clipper.Orientation(_e)||_e.reverse(),oe.push(_e)}return oe},n.Clipper.MinkowskiSum=function(s,a,c){if(a[0]instanceof Array){for(var y=a,F=new n.Paths,A=new n.Clipper,Q=0;Q<y.length;++Q){var nt=n.Clipper.Minkowski(s,y[Q],!0,c);if(A.AddPaths(nt,n.PolyType.ptSubject,!0),c){var p=n.Clipper.TranslatePath(y[Q],s[0]);A.AddPath(p,n.PolyType.ptClip,!0)}}return A.Execute(n.ClipType.ctUnion,F,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),F}else{var p=a,y=n.Clipper.Minkowski(s,p,!0,c),A=new n.Clipper;return A.AddPaths(y,n.PolyType.ptSubject,!0),A.Execute(n.ClipType.ctUnion,y,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),y}},n.Clipper.TranslatePath=function(s,a){for(var c=new n.Path,p=0;p<s.length;p++)c.push(new n.IntPoint2(s[p].X+a.X,s[p].Y+a.Y));return c},n.Clipper.MinkowskiDiff=function(s,a){var c=n.Clipper.Minkowski(s,a,!1,!0),p=new n.Clipper;return p.AddPaths(c,n.PolyType.ptSubject,!0),p.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),c},n.Clipper.PolyTreeToPaths=function(s){var a=new Array;return n.Clipper.AddPolyNodeToPaths(s,n.Clipper.NodeType.ntAny,a),a},n.Clipper.AddPolyNodeToPaths=function(s,a,c){var p=!0;switch(a){case n.Clipper.NodeType.ntOpen:return;case n.Clipper.NodeType.ntClosed:p=!s.IsOpen;break;default:break}s.m_polygon.length>0&&p&&c.push(s.m_polygon);for(var y=0,A=s.Childs(),F=A.length,Q=A[y];y<F;y++,Q=A[y])n.Clipper.AddPolyNodeToPaths(Q,a,c)},n.Clipper.OpenPathsFromPolyTree=function(s){for(var a=new n.Paths,c=0,p=s.ChildCount();c<p;c++)s.Childs()[c].IsOpen&&a.push(s.Childs()[c].m_polygon);return a},n.Clipper.ClosedPathsFromPolyTree=function(s){var a=new n.Paths;return n.Clipper.AddPolyNodeToPaths(s,n.Clipper.NodeType.ntClosed,a),a},me(n.Clipper,n.ClipperBase),n.Clipper.NodeType={ntAny:0,ntOpen:1,ntClosed:2},n.ClipperOffset=function(s,a){typeof s>"u"&&(s=2),typeof a>"u"&&(a=n.ClipperOffset.def_arc_tolerance),this.m_destPolys=new n.Paths,this.m_srcPoly=new n.Path,this.m_destPoly=new n.Path,this.m_normals=new Array,this.m_delta=0,this.m_sinA=0,this.m_sin=0,this.m_cos=0,this.m_miterLim=0,this.m_StepsPerRad=0,this.m_lowest=new n.IntPoint0,this.m_polyNodes=new n.PolyNode,this.MiterLimit=s,this.ArcTolerance=a,this.m_lowest.X=-1},n.ClipperOffset.two_pi=6.28318530717959,n.ClipperOffset.def_arc_tolerance=.25,n.ClipperOffset.prototype.Clear=function(){n.Clear(this.m_polyNodes.Childs()),this.m_lowest.X=-1},n.ClipperOffset.Round=n.Clipper.Round,n.ClipperOffset.prototype.AddPath=function(s,a,c){var p=s.length-1;if(!(p<0)){var y=new n.PolyNode;if(y.m_jointype=a,y.m_endtype=c,c===n.EndType.etClosedLine||c===n.EndType.etClosedPolygon)for(;p>0&&n.IntPoint.op_Equality(s[0],s[p]);)p--;y.m_polygon.push(s[0]);for(var A=0,F=0,Q=1;Q<=p;Q++)n.IntPoint.op_Inequality(y.m_polygon[A],s[Q])&&(A++,y.m_polygon.push(s[Q]),(s[Q].Y>y.m_polygon[F].Y||s[Q].Y===y.m_polygon[F].Y&&s[Q].X<y.m_polygon[F].X)&&(F=A));if(!(c===n.EndType.etClosedPolygon&&A<2)&&(this.m_polyNodes.AddChild(y),c===n.EndType.etClosedPolygon))if(this.m_lowest.X<0)this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,F);else{var nt=this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];(y.m_polygon[F].Y>nt.Y||y.m_polygon[F].Y===nt.Y&&y.m_polygon[F].X<nt.X)&&(this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,F))}}},n.ClipperOffset.prototype.AddPaths=function(s,a,c){for(var p=0,y=s.length;p<y;p++)this.AddPath(s[p],a,c)},n.ClipperOffset.prototype.FixOrientations=function(){if(this.m_lowest.X>=0&&!n.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))for(var s=0;s<this.m_polyNodes.ChildCount();s++){var a=this.m_polyNodes.Childs()[s];(a.m_endtype===n.EndType.etClosedPolygon||a.m_endtype===n.EndType.etClosedLine&&n.Clipper.Orientation(a.m_polygon))&&a.m_polygon.reverse()}else for(var s=0;s<this.m_polyNodes.ChildCount();s++){var a=this.m_polyNodes.Childs()[s];a.m_endtype===n.EndType.etClosedLine&&!n.Clipper.Orientation(a.m_polygon)&&a.m_polygon.reverse()}},n.ClipperOffset.GetUnitNormal=function(s,a){var c=a.X-s.X,p=a.Y-s.Y;if(c===0&&p===0)return new n.DoublePoint2(0,0);var y=1/Math.sqrt(c*c+p*p);return c*=y,p*=y,new n.DoublePoint2(p,-c)},n.ClipperOffset.prototype.DoOffset=function(s){if(this.m_destPolys=new Array,this.m_delta=s,n.ClipperBase.near_zero(s)){for(var a=0;a<this.m_polyNodes.ChildCount();a++){var c=this.m_polyNodes.Childs()[a];c.m_endtype===n.EndType.etClosedPolygon&&this.m_destPolys.push(c.m_polygon)}return}this.MiterLimit>2?this.m_miterLim=2/(this.MiterLimit*this.MiterLimit):this.m_miterLim=.5;var p;this.ArcTolerance<=0?p=n.ClipperOffset.def_arc_tolerance:this.ArcTolerance>Math.abs(s)*n.ClipperOffset.def_arc_tolerance?p=Math.abs(s)*n.ClipperOffset.def_arc_tolerance:p=this.ArcTolerance;var y=3.14159265358979/Math.acos(1-p/Math.abs(s));this.m_sin=Math.sin(n.ClipperOffset.two_pi/y),this.m_cos=Math.cos(n.ClipperOffset.two_pi/y),this.m_StepsPerRad=y/n.ClipperOffset.two_pi,s<0&&(this.m_sin=-this.m_sin);for(var a=0;a<this.m_polyNodes.ChildCount();a++){var c=this.m_polyNodes.Childs()[a];this.m_srcPoly=c.m_polygon;var A=this.m_srcPoly.length;if(!(A===0||s<=0&&(A<3||c.m_endtype!==n.EndType.etClosedPolygon))){if(this.m_destPoly=new Array,A===1){if(c.m_jointype===n.JoinType.jtRound)for(var F=1,Q=0,nt=1;nt<=y;nt++){this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+F*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+Q*s)));var ft=F;F=F*this.m_cos-this.m_sin*Q,Q=ft*this.m_sin+Q*this.m_cos}else for(var F=-1,Q=-1,nt=0;nt<4;++nt)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+F*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+Q*s))),F<0?F=1:Q<0?Q=1:F=-1;this.m_destPolys.push(this.m_destPoly);continue}this.m_normals.length=0;for(var nt=0;nt<A-1;nt++)this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[nt],this.m_srcPoly[nt+1]));if(c.m_endtype===n.EndType.etClosedLine||c.m_endtype===n.EndType.etClosedPolygon?this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[A-1],this.m_srcPoly[0])):this.m_normals.push(new n.DoublePoint1(this.m_normals[A-2])),c.m_endtype===n.EndType.etClosedPolygon){for(var Ct=A-1,nt=0;nt<A;nt++)Ct=this.OffsetPoint(nt,Ct,c.m_jointype);this.m_destPolys.push(this.m_destPoly)}else if(c.m_endtype===n.EndType.etClosedLine){for(var Ct=A-1,nt=0;nt<A;nt++)Ct=this.OffsetPoint(nt,Ct,c.m_jointype);this.m_destPolys.push(this.m_destPoly),this.m_destPoly=new Array;for(var Tt=this.m_normals[A-1],nt=A-1;nt>0;nt--)this.m_normals[nt]=new n.DoublePoint2(-this.m_normals[nt-1].X,-this.m_normals[nt-1].Y);this.m_normals[0]=new n.DoublePoint2(-Tt.X,-Tt.Y),Ct=0;for(var nt=A-1;nt>=0;nt--)Ct=this.OffsetPoint(nt,Ct,c.m_jointype);this.m_destPolys.push(this.m_destPoly)}else{for(var Ct=0,nt=1;nt<A-1;++nt)Ct=this.OffsetPoint(nt,Ct,c.m_jointype);var Dt;if(c.m_endtype===n.EndType.etOpenButt){var nt=A-1;Dt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[nt].X+this.m_normals[nt].X*s),n.ClipperOffset.Round(this.m_srcPoly[nt].Y+this.m_normals[nt].Y*s)),this.m_destPoly.push(Dt),Dt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[nt].X-this.m_normals[nt].X*s),n.ClipperOffset.Round(this.m_srcPoly[nt].Y-this.m_normals[nt].Y*s)),this.m_destPoly.push(Dt)}else{var nt=A-1;Ct=A-2,this.m_sinA=0,this.m_normals[nt]=new n.DoublePoint2(-this.m_normals[nt].X,-this.m_normals[nt].Y),c.m_endtype===n.EndType.etOpenSquare?this.DoSquare(nt,Ct):this.DoRound(nt,Ct)}for(var nt=A-1;nt>0;nt--)this.m_normals[nt]=new n.DoublePoint2(-this.m_normals[nt-1].X,-this.m_normals[nt-1].Y);this.m_normals[0]=new n.DoublePoint2(-this.m_normals[1].X,-this.m_normals[1].Y),Ct=A-1;for(var nt=Ct-1;nt>0;--nt)Ct=this.OffsetPoint(nt,Ct,c.m_jointype);c.m_endtype===n.EndType.etOpenButt?(Dt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X-this.m_normals[0].X*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y-this.m_normals[0].Y*s)),this.m_destPoly.push(Dt),Dt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+this.m_normals[0].X*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+this.m_normals[0].Y*s)),this.m_destPoly.push(Dt)):(Ct=1,this.m_sinA=0,c.m_endtype===n.EndType.etOpenSquare?this.DoSquare(0,1):this.DoRound(0,1)),this.m_destPolys.push(this.m_destPoly)}}}},n.ClipperOffset.prototype.Execute=function(){var s=arguments,a=s[0]instanceof n.PolyTree;if(a){var c=s[0],p=s[1];c.Clear(),this.FixOrientations(),this.DoOffset(p);var y=new n.Clipper(0);if(y.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)y.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var A=n.Clipper.GetBounds(this.m_destPolys),F=new n.Path;if(F.push(new n.IntPoint2(A.left-10,A.bottom+10)),F.push(new n.IntPoint2(A.right+10,A.bottom+10)),F.push(new n.IntPoint2(A.right+10,A.top-10)),F.push(new n.IntPoint2(A.left-10,A.top-10)),y.AddPath(F,n.PolyType.ptSubject,!0),y.ReverseSolution=!0,y.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),c.ChildCount()===1&&c.Childs()[0].ChildCount()>0){var Q=c.Childs()[0];c.Childs()[0]=Q.Childs()[0],c.Childs()[0].m_Parent=c;for(var nt=1;nt<Q.ChildCount();nt++)c.AddChild(Q.Childs()[nt])}else c.Clear()}}else{var c=s[0],p=s[1];n.Clear(c),this.FixOrientations(),this.DoOffset(p);var y=new n.Clipper(0);if(y.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),p>0)y.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var A=n.Clipper.GetBounds(this.m_destPolys),F=new n.Path;F.push(new n.IntPoint2(A.left-10,A.bottom+10)),F.push(new n.IntPoint2(A.right+10,A.bottom+10)),F.push(new n.IntPoint2(A.right+10,A.top-10)),F.push(new n.IntPoint2(A.left-10,A.top-10)),y.AddPath(F,n.PolyType.ptSubject,!0),y.ReverseSolution=!0,y.Execute(n.ClipType.ctUnion,c,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),c.length>0&&c.splice(0,1)}}},n.ClipperOffset.prototype.OffsetPoint=function(s,a,c){if(this.m_sinA=this.m_normals[a].X*this.m_normals[s].Y-this.m_normals[s].X*this.m_normals[a].Y,Math.abs(this.m_sinA*this.m_delta)<1){var p=this.m_normals[a].X*this.m_normals[s].X+this.m_normals[s].Y*this.m_normals[a].Y;if(p>0)return this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[a].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[a].Y*this.m_delta))),a}else this.m_sinA>1?this.m_sinA=1:this.m_sinA<-1&&(this.m_sinA=-1);if(this.m_sinA*this.m_delta<0)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[a].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[a].Y*this.m_delta))),this.m_destPoly.push(new n.IntPoint1(this.m_srcPoly[s])),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[s].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[s].Y*this.m_delta)));else switch(c){case n.JoinType.jtMiter:{var y=1+(this.m_normals[s].X*this.m_normals[a].X+this.m_normals[s].Y*this.m_normals[a].Y);y>=this.m_miterLim?this.DoMiter(s,a,y):this.DoSquare(s,a);break}case n.JoinType.jtSquare:this.DoSquare(s,a);break;case n.JoinType.jtRound:this.DoRound(s,a);break}return a=s,a},n.ClipperOffset.prototype.DoSquare=function(s,a){var c=Math.tan(Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[s].X+this.m_normals[a].Y*this.m_normals[s].Y)/4);this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_delta*(this.m_normals[a].X-this.m_normals[a].Y*c)),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_delta*(this.m_normals[a].Y+this.m_normals[a].X*c)))),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_delta*(this.m_normals[s].X+this.m_normals[s].Y*c)),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_delta*(this.m_normals[s].Y-this.m_normals[s].X*c))))},n.ClipperOffset.prototype.DoMiter=function(s,a,c){var p=this.m_delta/c;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+(this.m_normals[a].X+this.m_normals[s].X)*p),n.ClipperOffset.Round(this.m_srcPoly[s].Y+(this.m_normals[a].Y+this.m_normals[s].Y)*p)))},n.ClipperOffset.prototype.DoRound=function(s,a){for(var c=Math.atan2(this.m_sinA,this.m_normals[a].X*this.m_normals[s].X+this.m_normals[a].Y*this.m_normals[s].Y),p=Math.max(n.Cast_Int32(n.ClipperOffset.Round(this.m_StepsPerRad*Math.abs(c))),1),y=this.m_normals[a].X,A=this.m_normals[a].Y,F,Q=0;Q<p;++Q)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+y*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+A*this.m_delta))),F=y,y=y*this.m_cos-this.m_sin*A,A=F*this.m_sin+A*this.m_cos;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[s].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[s].Y*this.m_delta)))},n.Error=function(s){try{throw new Error(s)}catch(a){alert(a.message)}},n.JS={},n.JS.AreaOfPolygon=function(s,a){return a||(a=1),n.Clipper.Area(s)/(a*a)},n.JS.AreaOfPolygons=function(s,a){a||(a=1);for(var c=0,p=0;p<s.length;p++)c+=n.Clipper.Area(s[p]);return c/(a*a)},n.JS.BoundsOfPath=function(s,a){return n.JS.BoundsOfPaths([s],a)},n.JS.BoundsOfPaths=function(s,a){a||(a=1);var c=n.Clipper.GetBounds(s);return c.left/=a,c.bottom/=a,c.right/=a,c.top/=a,c},n.JS.Clean=function(p,a){if(!(p instanceof Array))return[];var c=p[0]instanceof Array,p=n.JS.Clone(p);if(typeof a!="number"||a===null)return n.Error("Delta is not a number in Clean()."),p;if(p.length===0||p.length===1&&p[0].length===0||a<0)return p;c||(p=[p]);for(var y=p.length,A,F,Q,nt,ft,Ct,Tt,Dt=[],oe=0;oe<y;oe++)if(F=p[oe],A=F.length,A!==0){if(A<3){Q=F,Dt.push(Q);continue}for(Q=F,nt=a*a,ft=F[0],Ct=1,Tt=1;Tt<A;Tt++)(F[Tt].X-ft.X)*(F[Tt].X-ft.X)+(F[Tt].Y-ft.Y)*(F[Tt].Y-ft.Y)<=nt||(Q[Ct]=F[Tt],ft=F[Tt],Ct++);ft=F[Ct-1],(F[0].X-ft.X)*(F[0].X-ft.X)+(F[0].Y-ft.Y)*(F[0].Y-ft.Y)<=nt&&Ct--,Ct<A&&Q.splice(Ct,A-Ct),Q.length&&Dt.push(Q)}return!c&&Dt.length?Dt=Dt[0]:!c&&Dt.length===0?Dt=[]:c&&Dt.length===0&&(Dt=[[]]),Dt},n.JS.Clone=function(s){if(!(s instanceof Array))return[];if(s.length===0)return[];if(s.length===1&&s[0].length===0)return[[]];var a=s[0]instanceof Array;a||(s=[s]);var c=s.length,p,y,A,F,Q=new Array(c);for(y=0;y<c;y++){for(p=s[y].length,F=new Array(p),A=0;A<p;A++)F[A]={X:s[y][A].X,Y:s[y][A].Y};Q[y]=F}return a||(Q=Q[0]),Q},n.JS.Lighten=function(s,a){if(!(s instanceof Array))return[];if(typeof a!="number"||a===null)return n.Error("Tolerance is not a number in Lighten()."),n.JS.Clone(s);if(s.length===0||s.length===1&&s[0].length===0||a<0)return n.JS.Clone(s);var c=s[0]instanceof Array;c||(s=[s]);var p,y,A,F,Q,nt,ft,Ct,Tt,Dt,oe,_e,Me,Be,pn,Wn,Bi,zr=s.length,ko=a*a,Ei=[];for(p=0;p<zr;p++)if(A=s[p],nt=A.length,nt!==0){for(F=0;F<1e6;F++){for(Q=[],nt=A.length,A[nt-1].X!==A[0].X||A[nt-1].Y!==A[0].Y?(_e=1,A.push({X:A[0].X,Y:A[0].Y}),nt=A.length):_e=0,oe=[],y=0;y<nt-2;y++)ft=A[y],Tt=A[y+1],Ct=A[y+2],Wn=ft.X,Bi=ft.Y,Me=Ct.X-Wn,Be=Ct.Y-Bi,(Me!==0||Be!==0)&&(pn=((Tt.X-Wn)*Me+(Tt.Y-Bi)*Be)/(Me*Me+Be*Be),pn>1?(Wn=Ct.X,Bi=Ct.Y):pn>0&&(Wn+=Me*pn,Bi+=Be*pn)),Me=Tt.X-Wn,Be=Tt.Y-Bi,Dt=Me*Me+Be*Be,Dt<=ko&&(oe[y+1]=1,y++);for(Q.push({X:A[0].X,Y:A[0].Y}),y=1;y<nt-1;y++)oe[y]||Q.push({X:A[y].X,Y:A[y].Y});if(Q.push({X:A[nt-1].X,Y:A[nt-1].Y}),_e&&A.pop(),oe.length)A=Q;else break}nt=Q.length,Q[nt-1].X===Q[0].X&&Q[nt-1].Y===Q[0].Y&&Q.pop(),Q.length>2&&Ei.push(Q)}return c||(Ei=Ei[0]),typeof Ei>"u"&&(Ei=[]),Ei},n.JS.PerimeterOfPath=function(s,a,c){if(typeof s>"u")return 0;var p=Math.sqrt,y=0,A,F,Q=0,nt=0,ft=0,Ct=0,Tt=s.length;if(Tt<2)return 0;for(a&&(s[Tt]=s[0],Tt++);--Tt;)A=s[Tt],Q=A.X,nt=A.Y,F=s[Tt-1],ft=F.X,Ct=F.Y,y+=p((Q-ft)*(Q-ft)+(nt-Ct)*(nt-Ct));return a&&s.pop(),y/c},n.JS.PerimeterOfPaths=function(s,a,c){c||(c=1);for(var p=0,y=0;y<s.length;y++)p+=n.JS.PerimeterOfPath(s[y],a,c);return p},n.JS.ScaleDownPath=function(s,a){var c,p;for(a||(a=1),c=s.length;c--;)p=s[c],p.X=p.X/a,p.Y=p.Y/a},n.JS.ScaleDownPaths=function(s,a){var c,p,y;for(a||(a=1),c=s.length;c--;)for(p=s[c].length;p--;)y=s[c][p],y.X=y.X/a,y.Y=y.Y/a},n.JS.ScaleUpPath=function(s,a){var c,p,y=Math.round;for(a||(a=1),c=s.length;c--;)p=s[c],p.X=y(p.X*a),p.Y=y(p.Y*a)},n.JS.ScaleUpPaths=function(s,a){var c,p,y,A=Math.round;for(a||(a=1),c=s.length;c--;)for(p=s[c].length;p--;)y=s[c][p],y.X=A(y.X*a),y.Y=A(y.Y*a)},n.ExPolygons=function(){return[]},n.ExPolygon=function(){this.outer=null,this.holes=null},n.JS.AddOuterPolyNodeToExPolygons=function(s,a){var c=new n.ExPolygon;c.outer=s.Contour();var p=s.Childs(),y=p.length;c.holes=new Array(y);var A,F,Q,nt,ft,Ct;for(Q=0;Q<y;Q++)for(A=p[Q],c.holes[Q]=A.Contour(),nt=0,ft=A.Childs(),Ct=ft.length;nt<Ct;nt++)F=ft[nt],n.JS.AddOuterPolyNodeToExPolygons(F,a);a.push(c)},n.JS.ExPolygonsToPaths=function(s){var a,c,p,y,A=new n.Paths;for(a=0,p=s.length;a<p;a++)for(A.push(s[a].outer),c=0,y=s[a].holes.length;c<y;c++)A.push(s[a].holes[c]);return A},n.JS.PolyTreeToExPolygons=function(s){var a=new n.ExPolygons,c,p,y,A;for(p=0,y=s.Childs(),A=y.length;p<A;p++)c=y[p],n.JS.AddOuterPolyNodeToExPolygons(c,a);return a}})()});function Wo(n,t,e,i=tn.default.PolyFillType.pftNonZero){let r=new tn.default.Clipper;r.AddPaths(Xo(t),tn.default.PolyType.ptSubject,!0),e&&r.AddPaths(Xo(e),tn.default.PolyType.ptClip,!0);let o=new tn.default.Paths;return r.Execute(n,o,i,i),yc(o)}function Ru(n,t=256){let e=n.length>t?Gm(n):n;for(;e.length>t;){let i=[];for(let o=0;o<e.length;o+=t)i.push(Vi(e.slice(o,o+t)));let r=i.flat();if(i.length===1)return r;if(r.length>e.length/2)return Vi(r);e=r}return Vi(e)}function Gm(n){let t=1/0,e=1/0,i=-1/0,r=-1/0,o=n.map(d=>{let _=0,v=0;for(let[b,w]of d)_+=b,v+=w;let g=[_/d.length,v/d.length];return t=Math.min(t,g[0]),e=Math.min(e,g[1]),i=Math.max(i,g[0]),r=Math.max(r,g[1]),g}),l=65535/Math.max(i-t,r-e,1e-9),u=d=>(d=(d|d<<8)&16711935,d=(d|d<<4)&252645135,d=(d|d<<2)&858993459,(d|d<<1)&1431655765),f=o.map(([d,_])=>(u(Math.round((d-t)*l))|u(Math.round((_-e)*l))<<1)>>>0);return n.map((d,_)=>_).sort((d,_)=>f[d]-f[_]).map(d=>n[d])}function Ke(n,t,e=Hm/zi){if(!n.length)return[];let i=new tn.default.ClipperOffset(2,e*zi);i.AddPaths(Xo(n),tn.default.JoinType.jtRound,tn.default.EndType.etClosedPolygon);let r=new tn.default.Paths;return i.Execute(r,t*zi),yc(r)}function Yn(n){let t=0;for(let e=0,i=n.length-1;e<n.length;i=e++)t+=(n[i][0]+n[e][0])*(n[i][1]-n[e][1]);return-t/2}function Gi(n){let t=1/0,e=1/0,i=-1/0,r=-1/0;for(let o of n)for(let[l,u]of o)l<t&&(t=l),l>i&&(i=l),u<e&&(e=u),u>r&&(r=u);return{minX:t,minY:e,maxX:i,maxY:r}}function di(n){if(!n.length)return[];let t=new tn.default.Clipper;t.AddPaths(Xo(n),tn.default.PolyType.ptSubject,!0);let e=new tn.default.PolyTree;t.Execute(tn.default.ClipType.ctUnion,e,tn.default.PolyFillType.pftNonZero,tn.default.PolyFillType.pftNonZero);let i=[],r=o=>{for(let l of o.Childs()){if(l.IsHole()){r(l);continue}let u=l.Childs().map(f=>f.Contour());i.push(yc([l.Contour(),...u]));for(let f of l.Childs())r(f)}};return r(e),i}function Vs([n,t],e){let i=!1;for(let r=0,o=e.length-1;r<e.length;o=r++){let[l,u]=e[r],[f,d]=e[o];u>t!=d>t&&n<(f-l)*(t-u)/(d-u)+l&&(i=!i)}return i}function Dn(n,t=1e-4){return n.filter(e=>e.length>=3&&Math.abs(Yn(e))>t)}function Xm(n,t=.005){if(n.length<8)return n;let e=0,i=-1;for(let u=1;u<n.length;u++){let f=(n[u][0]-n[0][0])**2+(n[u][1]-n[0][1])**2;f>i&&(i=f,e=u)}let r=u=>{let f=new Uint8Array(u.length);f[0]=f[u.length-1]=1;let d=[[0,u.length-1]];for(;d.length;){let[_,v]=d.pop(),[g,b]=u[_],[w,T]=u[v],S=Math.hypot(w-g,T-b)||1e-12,x=-1,O=t;for(let H=_+1;H<v;H++){let R=Math.abs((w-g)*(b-u[H][1])-(g-u[H][0])*(T-b))/S;R>O&&(O=R,x=H)}x>0&&(f[x]=1,d.push([_,x],[x,v]))}return u.filter((_,v)=>f[v])},o=r(n.slice(0,e+1)),l=r([...n.slice(e),n[0]]);return[...o,...l.slice(1,-1)]}var tn,zi,Hm,Xo,yc,Yo,Vi,Hi,Gr,Nn,Xi,Hs=gn(()=>{tn=Tu(Iu(),1),zi=1e3,Hm=.01*zi,Xo=n=>n.map(t=>t.map(([e,i])=>({X:Math.round(e*zi),Y:Math.round(i*zi)}))),yc=n=>n.map(t=>t.map(e=>[e.X/zi,e.Y/zi]));Yo=n=>Wo(tn.default.ClipType.ctUnion,n,null,tn.default.PolyFillType.pftEvenOdd),Vi=n=>Wo(tn.default.ClipType.ctUnion,n,null);Hi=(n,t)=>Wo(tn.default.ClipType.ctDifference,n,t),Gr=(n,t)=>Wo(tn.default.ClipType.ctIntersection,n,t);Nn=n=>n.reduce((t,e)=>t+Yn(e),0);Xi=(n,t)=>n.map(e=>Xm(e,t)).filter(e=>e.length>=3)});function Du(n){let t=[],e=[],i=[],r=[];for(let o of n.meshes||[]){let l=t.length/3,u=e.length/3,f=o.attributes.position.array;for(let _=0;_<f.length;_++)t.push(f[_]);let d=o.index.array;for(let _=0;_<d.length;_++)e.push(d[_]+l);for(let _ of o.brep_faces||[])i.push({first:_.first+u,last:_.last+u});o.name&&r.push(o.name)}return{positions:Float64Array.from(t),indices:Uint32Array.from(e),faces:i,solids:(n.meshes||[]).length,names:r}}function Gs(n){let t=n.positions,e=[1/0,1/0,1/0],i=[-1/0,-1/0,-1/0];for(let r=0;r<t.length;r+=3)for(let o=0;o<3;o++)t[r+o]<e[o]&&(e[o]=t[r+o]),t[r+o]>i[o]&&(i[o]=t[r+o]);return{min:e,max:i,size:[i[0]-e[0],i[1]-e[1],i[2]-e[2]]}}function Mc(n,t){let e=n.positions,i=n.indices,r=i[t*3]*3,o=i[t*3+1]*3,l=i[t*3+2]*3,u=e[o]-e[r],f=e[o+1]-e[r+1],d=e[o+2]-e[r+2],_=e[l]-e[r],v=e[l+1]-e[r+1],g=e[l+2]-e[r+2],b=f*g-d*v,w=d*_-u*g,T=u*v-f*_,S=Math.hypot(b,w,T);return S>0?[b/S,w/S,T/S]:[0,0,0]}function Wm(n){let[t,e,i]=n;if(i>.999999)return[1,0,0,0,1,0,0,0,1];if(i<-.999999)return[1,0,0,0,-1,0,0,0,-1];let r=e,o=-t,l=Math.hypot(r,o);r/=l,o/=l;let u=i,f=l,d=1-u;return[d*r*r+u,d*r*o,o*f,d*r*o,d*o*o+u,-r*f,-o*f,r*f,u]}function Sc(n,t){let e=n.positions,i=new Float64Array(e.length);for(let l=0;l<e.length;l+=3){let u=e[l],f=e[l+1],d=e[l+2];i[l]=t[0]*u+t[1]*f+t[2]*d,i[l+1]=t[3]*u+t[4]*f+t[5]*d,i[l+2]=t[6]*u+t[7]*f+t[8]*d}let r={positions:i,indices:n.indices,faces:n.faces},{min:o}=Gs(r);for(let l=0;l<i.length;l+=3)i[l]-=o[0],i[l+1]-=o[1],i[l+2]-=o[2];for(let l=0;l<i.length;l++)i[l]=Math.round(i[l]*1e6)/1e6;return r}function gr(n,t=.001){let{max:e,size:i}=Gs(n),r=e[2],o=new Map,l=0,u=0,f=0,d=n.positions,_=n.indices,v=_.length/3;for(let w=0;w<v;w++){let T=_[w*3]*3,S=_[w*3+1]*3,x=_[w*3+2]*3,O=Mc(n,w),H=d[S]-d[T],R=d[S+1]-d[T+1],U=d[S+2]-d[T+2],B=d[x]-d[T],W=d[x+1]-d[T+1],C=d[x+2]-d[T+2],k=Math.hypot(R*C-U*W,U*B-H*C,H*W-R*B)/2;f+=k;let X=(d[T+2]+d[S+2]+d[x+2])/3;if(O[2]>1-t){let et=Math.round(X*1e3)/1e3;o.set(et,(o.get(et)||0)+k)}else O[2]<-(1-t)?X>t&&(l+=k):Math.abs(O[2])>t&&(O[2]<0?l+=k:u+=k)}let g=l>.001*f,b=g?$m(n):{inside:0,total:0};return{size:i,top:r,floors:[...o.keys()].sort((w,T)=>T-w),floorAreas:Object.fromEntries(o),undercut:g&&b.inside>Lu,squareEdges:g&&b.inside<=Lu,sloped:u>.001*f,undercutArea:l,slopedArea:u,slopedShare:f>0?u/f:0,missed:b.inside,missedTotal:b.total}}function Ym(n){let t=n.positions,e=n.indices,i=0;for(let r=0;r<e.length;r+=3){let o=e[r]*3,l=e[r+1]*3,u=e[r+2]*3;i+=t[o]*(t[l+1]*t[u+2]-t[l+2]*t[u+1])-t[o+1]*(t[l]*t[u+2]-t[l+2]*t[u])+t[o+2]*(t[l]*t[u+1]-t[l+1]*t[u])}return Math.abs(i/6)}function $m(n){let{min:t,max:e}=Gs(n),i=e[0]-t[0],r=e[1]-t[1],o=Math.max(.05,Math.sqrt(i*r/25e4)),l={x0:t[0],y0:t[1],cell:o,nx:Math.ceil(i/o)+1,ny:Math.ceil(r/o)+1},{h:u,mat:f}=qm(n,l),d=Vi(di(Yo(bc(n,t[2]+.01))).map(S=>S[0])),_=Nu(d,l),v=Nu(Ke(d,Math.min(3,.15*Math.min(i,r))),l),g=0,b=0;for(let S=0;S<u.length;S++){if(!(u[S]>t[2]))continue;let x=Math.max(0,u[S]-t[2]-f[S]);g+=x,(_[S]||!v[S])&&(b+=x)}let w=Ym(n),T=o*o;return w>0?{inside:b*T/w,total:g*T/w}:{inside:0,total:0}}function qm(n,t){let e=t.nx*t.ny,i=new Float32Array(e).fill(-1/0),r=new Float32Array(e),o=n.positions,l=n.indices;for(let u=0;u<l.length;u+=3){let f=l[u]*3,d=l[u+1]*3,_=l[u+2]*3,v=o[f],g=o[f+1],b=o[f+2],w=o[d],T=o[d+1],S=o[d+2],x=o[_],O=o[_+1],H=o[_+2],R=(T-O)*(v-x)+(x-w)*(g-O);if(Math.abs(R)<1e-12)continue;let U=(w-v)*(O-g)-(T-g)*(x-v)>0?1:-1,B=Math.max(0,Math.ceil((Math.min(v,w,x)-t.x0)/t.cell)),W=Math.min(t.nx-1,Math.floor((Math.max(v,w,x)-t.x0)/t.cell)),C=Math.max(0,Math.ceil((Math.min(g,T,O)-t.y0)/t.cell)),k=Math.min(t.ny-1,Math.floor((Math.max(g,T,O)-t.y0)/t.cell));for(let X=C;X<=k;X++)for(let et=B;et<=W;et++){let st=t.x0+(et+5e-4)*t.cell,$=t.y0+(X+7e-4)*t.cell,q=((T-O)*(st-x)+(x-w)*($-O))/R,Z=((O-g)*(st-x)+(v-x)*($-O))/R,lt=1-q-Z;if(q<0||Z<0||lt<0)continue;let dt=q*b+Z*S+lt*H,Mt=X*t.nx+et;dt>i[Mt]&&(i[Mt]=dt),r[Mt]+=U*dt}}return{h:i,mat:r}}function Nu(n,t){let e=new Uint8Array(t.nx*t.ny);for(let i=0;i<t.ny;i++){let r=t.y0+i*t.cell,o=[];for(let l of n)for(let u=0;u<l.length;u++){let[f,d]=l[u],[_,v]=l[(u+1)%l.length];d<=r!=v<=r&&o.push(f+(r-d)/(v-d)*(_-f))}o.sort((l,u)=>l-u);for(let l=0;l+1<o.length;l+=2){let u=Math.max(0,Math.ceil((o[l]-t.x0)/t.cell)),f=Math.min(t.nx-1,Math.floor((o[l+1]-t.x0)/t.cell));for(let d=u;d<=f;d++)e[i*t.nx+d]=1}}return e}function bc(n,t){let e=n.positions,i=n.indices,r=[],o=i.length/3;for(let l=0;l<o;l++){let u=[i[l*3]*3,i[l*3+1]*3,i[l*3+2]*3],f=[];for(let d=0;d<3;d++){let _=u[d],v=u[(d+1)%3],g=e[_+2]-t,b=e[v+2]-t;if(g<0!=b<0){let w=g/(g-b);f.push([e[_]+(e[v]-e[_])*w,e[_+1]+(e[v+1]-e[_+1])*w])}}f.length===2&&r.push(f)}return Zm(r)}function Zm(n){let t=([o,l])=>`${Math.round(o*1e4)},${Math.round(l*1e4)}`,e=new Map;n.forEach((o,l)=>{for(let u of[0,1]){let f=t(o[u]);e.has(f)||e.set(f,[]),e.get(f).push(l)}});let i=new Uint8Array(n.length),r=[];for(let o=0;o<n.length;o++){if(i[o])continue;i[o]=1;let l=[n[o][0],n[o][1]],u=t(n[o][0]),f=n[o][1];for(let d=0;d<n.length;d++){let _=t(f);if(_===u)break;let v=(e.get(_)||[]).find(b=>!i[b]);if(v===void 0)break;i[v]=1;let g=n[v];f=t(g[0])===_?g[1]:g[0],t(f)!==u&&l.push(f)}l.length>=3&&r.push(l)}return r}function Ou(n){let t={};for(let r of Object.keys(xc)){let o=gr(qo(n,r));t[r]={reachable:!o.undercut,missed:o.missed,missedTotal:o.missedTotal,undercutArea:o.undercutArea,slopedArea:o.slopedArea,height:o.size[2]}}let e=Object.keys(xc),i=e.slice().sort((r,o)=>{let l=t[r],u=t[o];return(l.reachable===u.reachable?0:l.reachable?-1:1)||(Math.abs(l.missed-u.missed)>1e-4?l.missed-u.missed:0)||(Math.abs(l.missedTotal-u.missedTotal)>1e-4?l.missedTotal-u.missedTotal:0)||(Math.abs(l.slopedArea-u.slopedArea)>1e-6?l.slopedArea-u.slopedArea:0)||(Math.abs(l.height-u.height)>1e-6?l.height-u.height:0)||e.indexOf(r)-e.indexOf(o)});if(!i.some(r=>t[r].reachable))for(let r of e)t[r].reachable=!0;return{sides:t,best:i[0]}}var xc,qo,Lu,wc=gn(()=>{Hs();xc={top:[0,0,1],bottom:[0,0,-1],front:[0,-1,0],back:[0,1,0],left:[-1,0,0],right:[1,0,0]};qo=(n,t)=>Sc(n,Wm(typeof t=="string"?xc[t]:t));Lu=.05});function tg(n){let t=new Set;for(let e of n){let i=e.match(/CONVERSION_BASED_UNIT\s*\(\s*'([^']*)'/);if(i){let l=Qm[i[1].trim().toUpperCase()];if(!l)return null;t.add(l);continue}let r=e.match(/SI_UNIT\s*\(\s*(\$|\.(\w+)\.)\s*,\s*\.METRE\.\s*\)/);if(!r)return null;let o=r[2]?Km[r[2]]:1e3;if(!o)return null;t.add(o)}return t.size===1?[...t][0]:null}function*eg(n){let t=n.indexOf("DATA;");if(t<0)return;let e=t+5,i=e,r=!1;for(;e<n.length;e++){let o=n.charCodeAt(e);if(o===39)r=!r;else if(o===59&&!r){let l=n.slice(i,e).trim();if(i=e+1,l==="ENDSEC")return;let u=l.match(/^#(\d+)\s*=\s*([\s\S]*)$/);u&&(yield[+u[1],u[2]])}}}function Fu(n){let t=typeof n=="string"?n:new TextDecoder("latin1").decode(n);if(!t.startsWith("ISO-10303-21")||!t.includes("POLY_LOOP")||!t.includes("FACETED_BREP"))return null;let e=new Map,i=new Map,r=new Map,o=new Map,l=new Map,u=[],f=[];for(let[b,w]of eg(t)){if(w.startsWith("(")){/\bLENGTH_UNIT\s*\(/.test(w)&&f.push(w);continue}let T=w.match(/^([A-Z0-9_]+)\s*\(/);if(!T)continue;let S=T[1];if(jm.test(S))return null;if(!Jm.has(S))continue;let x=w.slice(T[0].length,w.lastIndexOf(")"));if(S==="CARTESIAN_POINT"){let O=x.match(/\(([^()]*)\)\s*$/),H=O?O[1].split(",").map(Number):[];if(H.length!==3||H.some(R=>!Number.isFinite(R)))return null;e.set(b,H)}else S==="POLY_LOOP"?i.set(b,Xs(x.slice(x.indexOf("(")))):S==="FACE_OUTER_BOUND"?r.set(b,{loop:Xs(x)[0],reversed:/\.F\.\s*$/.test(x)}):S==="FACE_SURFACE"||S==="FACE"?o.set(b,Xs(x.slice(x.indexOf("("),x.indexOf(")")+1))):S==="CLOSED_SHELL"||S==="OPEN_SHELL"?l.set(b,Xs(x)):S==="FACETED_BREP"&&u.push(Xs(x)[0])}let d=tg(f);if(!d||!u.length)return null;let _=[],v=[],g=[];for(let b of u){let w=l.get(b);if(!w)return null;for(let T of w){let S=o.get(T);if(!S||S.length!==1)return null;let x=r.get(S[0]),O=x&&i.get(x.loop);if(!O||O.length<3)return null;let H=x.reversed?O.slice().reverse():O,R=_.length/3,U=v.length/3;for(let B of H){let W=e.get(B);if(!W)return null;_.push(W[0]*d,W[1]*d,W[2]*d)}for(let B=1;B+1<H.length;B++)v.push(R,R+B,R+B+1);g.push({first:U,last:v.length/3-1})}}return{positions:Float64Array.from(_),indices:Uint32Array.from(v),faces:g,solids:u.length,names:[]}}var Jm,jm,Km,Qm,Xs,Uu=gn(()=>{Jm=new Set(["CARTESIAN_POINT","POLY_LOOP","FACE_OUTER_BOUND","FACE_SURFACE","FACE","PLANE","AXIS2_PLACEMENT_3D","DIRECTION","CLOSED_SHELL","OPEN_SHELL","FACETED_BREP","SHELL_BASED_SURFACE_MODEL"]),jm=/^(ADVANCED_FACE|EDGE_LOOP|FACE_BOUND|ORIENTED_FACE|ORIENTED_CLOSED_SHELL|BREP_WITH_VOIDS|MAPPED_ITEM|ITEM_DEFINED_TRANSFORMATION|NEXT_ASSEMBLY_USAGE_OCCURRENCE|MANIFOLD_SOLID_BREP)$/,Km={EXA:1e21,PETA:1e18,TERA:1e15,GIGA:1e12,MEGA:1e9,KILO:1e6,HECTO:1e5,DECA:1e4,DECI:100,CENTI:10,MILLI:1,MICRO:.001,NANO:1e-6},Qm={MILLIMETRE:1,MILLIMETER:1,MM:1,CENTIMETRE:10,CENTIMETER:10,METRE:1e3,METER:1e3,INCH:25.4,IN:25.4,FOOT:304.8,FT:304.8},Xs=n=>[...n.matchAll(/#(\d+)/g)].map(t=>+t[1])});function Ec(n,t){let e=n.diameter/2,i=Math.ceil(e/t),r=[];for(let o=-i;o<=i;o++)for(let l=-i;l<=i;l++){let u=Math.hypot(l,o)*t;if(u>e+1e-6)continue;let f=Math.min(u,e),d=0;if(n.kind==="ball")d=e-Math.sqrt(Math.max(0,e*e-f*f));else if(n.kind==="vbit"||n.kind==="chamfer"||n.kind==="drill"){let _=(n.angle||(n.kind==="drill"?118:60))*Math.PI/360;d=f/Math.tan(_)}r.push(l,o,d)}return Float32Array.from(r)}function ng(n,t,e,i,r,o){let l=Math.hypot(i.x-e.x,i.y-e.y),u=Math.max(1,Math.ceil(l/(n.cell*.5))),f=!1;for(let d=r?0:1;d<=u;d++){let _=d/u,v=(e.x+(i.x-e.x)*_-n.x0)/n.cell,g=(e.y+(i.y-e.y)*_-n.y0)/n.cell,b=e.z+(i.z-e.z)*_;if(b>=n.top)continue;let w=Math.round(v),T=Math.round(g);for(let S=0;S<t.length;S+=3){let x=w+t[S],O=T+t[S+1];if(x<0||O<0||x>=n.nx||O>=n.ny)continue;let H=O*n.nx+x,R=b+t[S+2];if(n.h[H]>R+1e-4){if(r){n.h[H]>R+.05&&(f=!0);continue}n.h[H]=R,n.op[H]=o+1}}}return f}function Bu(n){let t=n.nx*n.ny;return n.sx=new Float32Array(t),n.sy=new Float32Array(t),n.wx=new Float32Array(t),n.wy=new Float32Array(t),n.gap=new Float32Array(t).fill(1/0),n.deep=new Float32Array(t).fill(-1/0),n}function Tc(n,t,e,i,r){let o=t.diameter/2,l=n.cell,u=o/l,f=t.kind==="ball"?$=>o-Math.sqrt(Math.max(0,o*o-$*$)):t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"?($=>q=>q/$)(Math.tan((t.angle||(t.kind==="drill"?118:60))*Math.PI/360)):()=>0,d=!t.kind||t.kind==="flat"||t.kind==="surfacing",{h:_,sx:v,sy:g,wx:b,wy:w,gap:T,deep:S,nx:x,ny:O}=n,H=1.5*l,R=u+1.5,U=($,q,Z,lt)=>{let dt=Math.hypot(q,Z);if(dt>R)return;let Mt=dt*l;if(Mt<=o){let pt=lt+f(Mt);if(_[$]>pt+1e-4)_[$]=pt,n.op[$]=r+1,T[$]=1/0,S[$]=-1/0;else if(_[$]<pt-1e-4)return;o-Mt>S[$]&&(S[$]=o-Mt,d&&o-Mt<H&&dt>1e-6?(v[$]=q/dt*(o-Mt),g[$]=Z/dt*(o-Mt),b[$]=-q/dt,w[$]=-Z/dt):(v[$]=0,g[$]=0,b[$]=0,w[$]=0))}else d&&_[$]>lt+1e-4&&Mt-o<T[$]&&(T[$]=Mt-o,v[$]=q/dt*(o-Mt),g[$]=Z/dt*(o-Mt),b[$]=-q/dt,w[$]=-Z/dt)},B=(e.x-n.x0)/l,W=(e.y-n.y0)/l,C=(i.x-n.x0)/l,k=(i.y-n.y0)/l;if(Math.abs(i.z-e.z)<1e-9){if(e.z>=n.top)return;let $=C-B,q=k-W,Z=$*$+q*q,lt=Math.max(0,Math.floor(Math.min(B,C)-R)),dt=Math.min(x-1,Math.ceil(Math.max(B,C)+R)),Mt=Math.max(0,Math.floor(Math.min(W,k)-R)),pt=Math.min(O-1,Math.ceil(Math.max(W,k)+R));for(let wt=Mt;wt<=pt;wt++)for(let J=lt;J<=dt;J++){let At=Z>0?Math.max(0,Math.min(1,((J-B)*$+(wt-W)*q)/Z)):0;U(wt*x+J,J-(B+$*At),wt-(W+q*At),e.z)}return}let X=Math.hypot(i.x-e.x,i.y-e.y),et=Math.max(1,Math.ceil(X/(l*.5))),st=Math.ceil(R);for(let $=1;$<=et;$++){let q=$/et,Z=B+(C-B)*q,lt=W+(k-W)*q,dt=e.z+(i.z-e.z)*q;if(dt>=n.top)continue;let Mt=Math.max(0,Math.floor(Z-st)),pt=Math.min(x-1,Math.ceil(Z+st)),wt=Math.max(0,Math.floor(lt-st)),J=Math.min(O-1,Math.ceil(lt+st));for(let At=wt;At<=J;At++)for(let Lt=Mt;Lt<=pt;Lt++)U(At*x+Lt,Lt-Z,At-lt,dt)}}function ku(n,t){let e=new Wi(n.stock,t||Wi.cellFor(n.stock)),i=[];return n.ops.forEach((r,o)=>{if(!r.enabled||!r.moves)return;let l=Ec(r.tool,e.cell),u=null;for(let f of r.moves)u&&ng(e,l,u,f,!!f.r,o)&&i.push({op:r.id,at:f}),u=f}),{hm:e,collisions:i}}function zu(n,t){let e=new Float32Array(t.nx*t.ny).fill(-1/0),i=n.positions,r=n.indices;for(let o=0;o<r.length;o+=3){let l=r[o]*3,u=r[o+1]*3,f=r[o+2]*3,d=i[l],_=i[l+1],v=i[l+2],g=i[u],b=i[u+1],w=i[u+2],T=i[f],S=i[f+1],x=i[f+2],O=(b-S)*(d-T)+(T-g)*(_-S);if(Math.abs(O)<1e-12)continue;let H=Math.max(0,Math.floor((Math.min(d,g,T)-t.x0)/t.cell)),R=Math.min(t.nx-1,Math.ceil((Math.max(d,g,T)-t.x0)/t.cell)),U=Math.max(0,Math.floor((Math.min(_,b,S)-t.y0)/t.cell)),B=Math.min(t.ny-1,Math.ceil((Math.max(_,b,S)-t.y0)/t.cell));for(let W=U;W<=B;W++)for(let C=H;C<=R;C++){let k=t.x0+C*t.cell,X=t.y0+W*t.cell,et=((b-S)*(k-T)+(T-g)*(X-S))/O,st=((S-_)*(k-T)+(d-T)*(X-S))/O,$=1-et-st;if(et<-1e-9||st<-1e-9||$<-1e-9)continue;let q=et*v+st*w+$*x,Z=W*t.nx+C;q>e[Z]&&(e[Z]=q)}}return e}var Wi,Ac=gn(()=>{Wi=class{constructor(t,e){this.cell=e,this.x0=t.minX,this.y0=t.minY,this.nx=Math.max(2,Math.ceil((t.maxX-t.minX)/e)+1),this.ny=Math.max(2,Math.ceil((t.maxY-t.minY)/e)+1),this.h=new Float32Array(this.nx*this.ny).fill(t.top),this.op=new Uint8Array(this.nx*this.ny),this.top=t.top,this.bottom=t.bottom}static cellFor(t,e=600*600){let i=(t.maxX-t.minX)*(t.maxY-t.minY);return Math.max(.1,Math.sqrt(i/e))}}});function Vu(n){let t=String(n.type||"").toLowerCase().replace(/[-_]/g," ");return ig.has(t)||t.startsWith("flat")?"flat":t.startsWith("surfac")?"surfacing":t.startsWith("drill")?"drill":t.startsWith("ball")?"ball":t.startsWith("v")?"vbit":t.startsWith("chamfer")?"chamfer":t||"flat"}function vr(n,t){return(typeof t=="string"?t:t?.mode)==="toolId"?n.toolId??n.id:n.toolNumber?n.toolNumber:t?.manual?.get(n.id)??n.toolId??n.id}function Hu(n,t,e=0,i=null){if(n==="toolId")return{mode:n};let r=new Set(t.filter(f=>f.toolNumber).map(f=>f.toolNumber));for(let f=1;f<=e;f++)r.add(f);i&&r.add(i);let o=new Map,l=t.filter(f=>!f.toolNumber);for(let f of l){let d=f.toolId??f.id;d>e&&!r.has(d)&&(o.set(f.id,d),r.add(d))}let u=e+1;for(let f of l)if(!o.has(f.id)){for(;r.has(u);)u++;o.set(f.id,u),r.add(u)}return{mode:n,manual:o}}function Gu(n){return(n||[]).filter(t=>t&&t.diameter>0).map(t=>({id:t.id,toolId:t.toolId??t.id,toolNumber:t.toolNumber??null,name:t.name||`${t.diameter} mm ${Vu(t)}`,kind:Vu(t),diameter:Number(t.diameter),fluteLength:Number(t.dimensions?.flute_length)||null,flutes:Number(t.metadata?.flutes)||2}))}function Xu(n,t,e,i={}){let r=_r[t]||_r.mdf,o=$n[e]||$n.balanced,l=i.maxRpm||24e3,u=i.minRpm||0,f=Math.round(Math.min(l,Math.max(u,r.rpm))),d=Math.min(r.maxChip,r.chip*n.diameter),_=Math.min(i.maxFeed||4e3,4e3),v=Math.round(Math.min(_,Math.max(150,f*n.flutes*d*o.feed)));return{rpm:f,feed:v,plunge:Math.round(Math.max(60,v*.3)),stepdown:Math.max(.05,n.diameter*r.stepdown*o.stepdown),stepover:Math.max(.05,n.diameter*Math.min(.9,r.stepover*o.stepover)),rampAngle:r.ramp}}var _r,$n,ig,Yi,Ws=gn(()=>{_r={softwood:{name:"Softwood",note:"Pine, cedar",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},hardwood:{name:"Hardwood",note:"Oak, maple, walnut",rpm:18e3,chip:.009,maxChip:.2,stepdown:.35,stepover:.4,ramp:4},mdf:{name:"MDF / Plywood",note:"Sheet goods",rpm:18e3,chip:.012,maxChip:.25,stepdown:.5,stepover:.45,ramp:5},plastic:{name:"Plastic",note:"Acrylic, HDPE",rpm:16e3,chip:.01,maxChip:.2,stepdown:.3,stepover:.4,ramp:3},aluminum:{name:"Aluminum",note:"6061",rpm:18e3,chip:.003,maxChip:.05,stepdown:.1,stepover:.25,ramp:2},foam:{name:"Foam",note:"Tooling board",rpm:12e3,chip:.02,maxChip:.4,stepdown:1,stepover:.6,ramp:10}},$n={fast:{name:"Fast",feed:1.15,stepdown:1.2,stepover:1.1,allowance:0},balanced:{name:"Balanced",feed:1,stepdown:1,stepover:1,allowance:.2},smooth:{name:"Smooth",feed:.85,stepdown:.8,stepover:.7,allowance:.25}},ig=new Set(["flat","flat end mill","endmill","end mill","flat_end_mill"]);Yi=n=>n==="aluminum"?{height:1,length:1}:{height:2,length:2}});var $i={};Eu($i,{INCH:()=>rg,len:()=>Jo,num:()=>Zo,toMm:()=>og,unitsFrom:()=>sg});function Zo(n,t="mm",e=t==="in"?3:1){let i=t==="in"?n/25.4:n;return(Math.round(i*10**e)/10**e).toLocaleString("en-US",{maximumFractionDigits:e})}var rg,sg,Jo,og,Cc=gn(()=>{rg=25.4,sg=n=>n==="imperial"?"in":"mm";Jo=(n,t="mm",e)=>`${Zo(n,t,e)} ${t}`,og=(n,t="mm")=>t==="in"?n*25.4:n});function Rc(n){return{material:"mdf",finish:"balanced",stock:{fit:!0,margin:2,extraTop:1,width:n.size[0]+4,depth:n.size[1]+4,thickness:n.size[2]+1},zero:{xy:"front-left",z:"top"},tabs:{enabled:!0,count:4,...Yi("mdf")},throughDepth:.3,disabled:{},toolOverride:{}}}function Ko(n,t){let[e,i,r]=n.size,o=t.stock,l=o.fit?e+2*o.margin:Math.max(e,o.width),u=o.fit?i+2*o.margin:Math.max(i,o.depth),f=o.fit?r+o.extraTop:Math.max(r,o.thickness);return{minX:(e-l)/2,minY:(i-u)/2,maxX:(e+l)/2,maxY:(i+u)/2,bottom:0,top:f,width:l,depth:u,thickness:f}}function Lc(n,t){let e=t.xy.split("-"),i=(n.minX+n.maxX)/2,r=(n.minY+n.maxY)/2;return e.includes("left")&&(i=n.minX),e.includes("right")&&(i=n.maxX),e.includes("front")&&(r=n.minY),e.includes("back")&&(r=n.maxY),{x:i,y:r,z:t.z==="bed"?n.bottom:n.top}}function hg(n){let t=n.positions,e=n.indices,i=[];for(let r=0;r<e.length/3;r++){if(Mc(n,r)[2]>-.001)continue;let l=[e[r*3]*3,e[r*3+1]*3,e[r*3+2]*3],u=l.map(f=>[t[f],t[f+1]]);Math.abs(Yn(u))<1e-6||i.push({loop:Yn(u)>0?u:u.reverse(),maxZ:Math.max(...l.map(f=>t[f+2]))})}return i}function fg(n){if(n.length!==1)return null;let t=n[0];if(t.length<12)return null;let e=Gi([t]),i=(e.minX+e.maxX)/2,r=(e.minY+e.maxY)/2,o=t.map(([u,f])=>Math.hypot(u-i,f-r)),l=o.reduce((u,f)=>u+f,0)/o.length;return o.every(u=>Math.abs(u-l)<Math.max(.03,l*.01))?{x:i,y:r,d:2*l}:null}function qu(n,t,e,i={}){let r=J=>Jo(J,e.units),o=J=>Zo(J,e.units),l=gr(n),u=Ko(l,e),f=$n[e.finish]||$n.balanced,d=[],_=e.surface3d??l.slopedShare>ag;l.squareEdges&&d.push({kind:"edges",text:"Chamfers or rounded edges face down on this side, so they are left square."}),l.undercut&&d.push({kind:"undercut",text:"Some features face the other side, so they can\u2019t be reached from the top. Cut this side, then turn the part over for a second setup."}),l.sloped&&!_&&d.push({kind:"sloped",text:"Sloped or curved faces (chamfers, fillets) aren\u2019t cut in 3D yet, so they are left square."});let v=t.filter(J=>J.kind==="flat").sort((J,At)=>At.diameter-J.diameter),g=t.filter(J=>J.kind==="drill"),b=t.filter(J=>J.kind==="surfacing").sort((J,At)=>At.diameter-J.diameter),w=new Map,T=J=>(J&&w.set(J.id,(w.get(J.id)||0)+1),J),S=e.material==="aluminum"?8:12.8,x=l.undercutArea>0?hg(n).sort((J,At)=>At.maxZ-J.maxZ):[],O=[],H=J=>{let At=0,Lt=x.length;for(;At<Lt;){let z=At+Lt>>1;x[z].maxZ>J+Ai?At=z+1:Lt=z}let Ht=At;if(!Ht)return[];let Bt=null;for(let z of O)z.k<=Ht&&(!Bt||z.k>Bt.k)&&(Bt=z);if(Bt?.k===Ht)return Bt.loops;let jt=x.slice(Bt?Bt.k:0,Ht).map(z=>z.loop),yt=Ru(Bt?[...Bt.loops,...jt]:jt);return O.push({k:Ht,loops:yt}),yt},R=new Map,U=J=>{if(R.has(J))return R.get(J);let At=Yo(bc(n,J+Ai)),Lt=H(J),Ht=Lt.length?Ke(Ke(Vi([...At,...Lt]),.002),-.002):At;return R.set(J,Ht),Ht},B=U(0),W=Vi(di(B).map(J=>J[0])),C=[],k=1,X=J=>(J.id=J.id||`op${k++}`,C.push(J),J);function et(J,At,Lt){let Ht=v.filter(z=>z.diameter<=S&&Xr(z,At)&&Ke(J,-(z.diameter/2+Lt)).length);if(!Ht.length)return null;let Bt=Ht.map(z=>({t:z,c:dg(J,z.diameter/2)})),jt=Bt.find(z=>z.c>=.85)||Bt.reduce((z,Xt)=>Xt.c>z.c?Xt:z);return(Bt.find(z=>w.has(z.t.id)&&z.c>=Math.min(.85,jt.c*.98))||jt).t}function st(J,At,Lt){let Ht=Dn(Hi(J,Ic(J,At.diameter/2)),On);if(Nn(Ht)<On)return null;let Bt=v.filter(z=>z.diameter<At.diameter-1e-6&&Xr(z,Lt));if(!Bt.length)return{tool:null,left:Ht};let jt=Nn(Ht);return{tool:Bt.find(z=>Nn(Dn(Hi(J,Ic(J,z.diameter/2)),On))<jt*.25)||Bt[Bt.length-1],left:Ht}}let $=J=>Xu(J,e.material,e.finish,i);if(u.top>l.top+Ai){let J=b[0]||v[0];J&&X({id:"face",kind:"face",label:"Flatten the top",tool:T(J),zTop:u.top,zBottom:l.top,region:Yu(u),detail:`${r(u.top-l.top)} off the top`})}_&&q();function q(){let J=l.top+e.throughDepth,At=Yt=>Yt.diameter<=S&&Xr(Yt,J),Lt=v.find(Yt=>w.has(Yt.id)&&At(Yt))||v.find(At);if(!Lt){d.push({kind:"notool",text:`No end mill is long enough to rough the 3D shape (${r(J)}).`});return}let Ht=t.filter(Yt=>Yt.kind==="ball"&&At(Yt)).sort((Yt,pe)=>Math.abs(Yt.diameter-6.35)-Math.abs(pe.diameter-6.35)),Bt=Ht[0]||Lt;Ht.length||d.push({kind:"noball",text:`No ball end mill in your Tool Library is long enough, so ${Lt.name} finishes the 3D surface. A ball end mill leaves it much smoother.`});let jt=Math.min($(Lt).stepdown,lg),yt=[l.top,...l.floors.filter(Yt=>Yt<l.top-Ai&&Yt>Ai&&(l.floorAreas[Yt]||0)>=cg),0],z=[];for(let Yt=1;Yt<yt.length;Yt++){let pe=Math.max(1,Math.ceil((yt[Yt-1]-yt[Yt])/jt-1e-6));for(let ue=1;ue<=pe;ue++)z.push(ue===pe?yt[Yt]:yt[Yt-1]-ue*(yt[Yt-1]-yt[Yt])/pe)}let Xt=Ke(W,Math.max(Lt.diameter,Bt.diameter)+1),te=[],kt=l.top,ce=null;for(let Yt of z){let pe=Yt<=Ai,ue=Dn(Hi(pe?W:Xt,U(pe?0:Yt)),On),we=ce?Dn(Gr(ue,ce),On):ue,Le=ce?Dn(Hi(ue,ce),On):[],je={zFrom:kt,z:pe?-e.throughDepth:Yt,region:Xi(we,.05),fresh:Nn(Le)>=On&&Ke(Le,-.5).length?Xi(Le,.05):[]};(Nn(we)>=On||je.fresh.length)&&te.push(je),ce=ue,kt=Yt}if(!te.length)return;let Re=jo[e.finish]??jo.balanced,fe=X({kind:"rough3d",label:"Rough the 3D shape",tool:T(Lt),zTop:l.top,zBottom:te[te.length-1].z,region:Xt,layers:te,allowance:Wu,detail:`${te.length} layers \xB7 ${r(Wu)} left`});X({kind:"finish3d",label:"Finish the 3D surface",tool:T(Bt),zTop:l.top,zBottom:0,region:W,after:fe.id,ridge:Re,detail:`Parallel passes \xB7 ${Jo(Re,e.units,e.units==="in"?4:2)} ridges`}),d.push({kind:"surface3d",text:`Curved faces are cut in 3D: roughed in ${te.length} layers, then ${Bt.name} follows the surface.`})}let Z=_?[]:[l.top,...l.floors.filter(J=>J<l.top-Ai&&J>Ai),0],lt=[],dt=(J,At)=>{let Lt=Nn(J),Ht=Nn(At);if(Math.abs(Lt-Ht)>Math.max(On,Lt*.005))return!1;let Bt=Gi(J),jt=Gi(At);return Math.abs(Bt.minX-jt.minX)<.01&&Math.abs(Bt.maxX-jt.maxX)<.01&&Math.abs(Bt.minY-jt.minY)<.01&&Math.abs(Bt.maxY-jt.maxY)<.01};for(let J=1;J<Z.length;J++){let At=Z[J-1],Lt=Z[J],Ht=Hi(Yu(u),U(Lt));for(let Bt of di(Ht)){if(Nn(Bt)<On||!Ke(Bt,-.05).length)continue;let jt=Gi([Bt[0]]),yt=jt.minX<=u.minX+.001||jt.maxX>=u.maxX-.001||jt.minY<=u.minY+.001||jt.maxY>=u.maxY-.001,z=null;if(yt&&(Lt===0||(z=Dn(Gr(Bt,W),On),Nn(z)<On)))continue;let Xt=yt?z:Bt,te=lt.find(kt=>kt.zFloor===At&&kt.outer===yt&&dt(kt.shape,Xt));te?(te.zFloor=Lt,te.region=Bt):lt.push({outer:yt,region:Bt,over:z,shape:Xt,zTop:At,zFloor:Lt})}}let Mt=new Map;for(let{outer:J,region:At,over:Lt,zTop:Ht,zFloor:Bt}of lt){let jt=Bt===0,yt=jt?-e.throughDepth:Bt,z=Ht-yt;{if(J){let Yt=et(Gr(At,Ke(Lt,13)),z,f.allowance);if(!Yt){d.push({kind:"notool",text:`A step ${r(Ht-Bt)} deep has no end mill that fits.`});continue}let pe=Gr(At,Ke(Lt,Yt.diameter+.5));X({kind:"step",label:"Cut the step",tool:T(Yt),zTop:Ht,zBottom:yt,region:pe,walls:At,detail:`${r(Ht-Bt)} deep`});continue}let Xt=fg(At);if(Xt){let Yt=`${Pc(Xt.d)}|${Pc(Ht)}|${Pc(yt)}`;Mt.has(Yt)||Mt.set(Yt,{d:Xt.d,zTop:Ht,zBottom:yt,through:jt,centers:[],regions:[]}),Mt.get(Yt).centers.push(Xt),Mt.get(Yt).regions.push(At);continue}let te=Gi([At[0]]),kt=et(At,z,f.allowance),ce=`${o(te.maxX-te.minX)} \xD7 ${r(te.maxY-te.minY)} \xB7 ${jt?"through":`${r(Ht-Bt)} deep`}`;if(!kt){d.push({kind:"notool",text:`No end mill fits the pocket ${ce}.`});continue}let Re=X({kind:"pocket",label:jt?"Cut the opening":"Clear the pocket",tool:T(kt),zTop:Ht,zBottom:yt,region:At,detail:ce}),fe=st(At,kt,z);fe&&fe.tool?X({kind:"corners",label:"Clean the corners",tool:T(fe.tool),zTop:Ht,zBottom:yt,region:At,after:Re.id,detail:`Corners too tight for ${kt.name}`}):fe&&d.push({kind:"corners",text:`Pocket corners stay rounded to ${r(kt.diameter/2)}: no smaller end mill in your library.`})}}for(let J of Mt.values()){let At=J.centers.length,Lt=J.zTop-J.zBottom,Ht=`\xD8${r(J.d)} ${J.through?"through":`${r(J.zTop-J.zBottom)} deep`}`,Bt=g.find(z=>ug(z.diameter,J.d)&&Xr(z,Lt));if(Bt){X({kind:"drill",label:At>1?`Drill ${At} holes`:"Drill the hole",tool:T(Bt),zTop:J.zTop,zBottom:J.zBottom,centers:J.centers,detail:Ht});continue}let jt=J.regions.flat().length?J.regions.flatMap(z=>z):[],yt=et(jt,Lt,0)||null;if(!yt||yt.diameter>J.d-.4){let z=v.find(Xt=>Xt.diameter<=J.d-.4&&Xr(Xt,Lt));if(!z){d.push({kind:"notool",text:`No drill or end mill fits the ${Ht} hole${At>1?"s":""}.`});continue}X({kind:"hole",label:At>1?`Cut ${At} holes`:"Cut the hole",tool:T(z),zTop:J.zTop,zBottom:J.zBottom,region:jt,centers:J.centers,detail:`${Ht} \xB7 spiral`});continue}X({kind:"hole",label:At>1?`Cut ${At} holes`:"Cut the hole",tool:T(yt),zTop:J.zTop,zBottom:J.zBottom,region:jt,centers:J.centers,detail:`${Ht} \xB7 spiral`})}if(W.length){let J=l.top+e.throughDepth,At=v.filter(Bt=>Xr(Bt,J)&&Bt.diameter<=S),Lt=At.find(Bt=>w.has(Bt.id))||At.slice().sort((Bt,jt)=>Math.abs(Bt.diameter-6.35)-Math.abs(jt.diameter-6.35))[0],Ht=e.tabs.enabled?`${e.tabs.count} tabs`:"no tabs";Lt?X({id:"cutout",kind:"cutout",label:"Cut out the part",tool:T(Lt),zTop:l.top,zBottom:-e.throughDepth,region:W,detail:`${r(l.top)} \xB7 ${Ht}`}):d.push({kind:"notool",text:`No end mill is long enough to cut out the part (${r(J)}).`})}let pt=[],wt=new Map;for(let J of C){if(J.kind!=="pocket"&&J.kind!=="corners"){pt.push(J);continue}let At=J.after&&wt.has(J.after)?wt.get(J.after):J.after,Lt=pt.find(Ht=>Ht.kind===J.kind&&Ht.detail===J.detail&&Ht.zTop===J.zTop&&Ht.zBottom===J.zBottom&&Ht.tool.id===J.tool.id&&(Ht.after||null)===(At||null));Lt?(Lt.region=[...Lt.region,...J.region],Lt.count=(Lt.count||1)+1,wt.set(J.id,Lt.id)):pt.push({...J,after:At})}for(let J of pt)J.count>1&&(J.kind==="pocket"&&(J.label=J.label==="Cut the opening"?`Cut ${J.count} openings`:`Clear ${J.count} pockets`),J.kind==="corners"&&(J.label=`Clean the corners of ${J.count} pockets`));C.length=0,C.push(...pt);for(let J of C){let At=e.toolOverride?.[J.id];if(At){let Lt=t.find(Ht=>Ht.id===At);Lt&&(J.tool=Lt)}J.enabled=!e.disabled?.[J.id],J.feeds=$(J.tool),J.kind==="finish3d"&&(J.surface=mg(n,u,Math.min(.2,J.tool.diameter/16)))}return{analysis:l,stock:u,zero:Lc(u,e.zero),ops:pg(C),warnings:d,job:e}}function pg(n){let t=n.filter(d=>d.kind==="face"),e=n.filter(d=>d.kind==="cutout"),i=n.filter(d=>d.kind!=="face"&&d.kind!=="cutout"),r=d=>d.region||(d.centers||[]).map(_=>gg(_)),o=new Map(i.map(d=>[d,i.filter(_=>_!==d&&(d.after===_.id||_.zTop>d.zTop+Ai&&Nn(Gr(r(d),r(_)))>On))])),l=new Set,u=[...t],f=t.length?t[t.length-1].tool:null;for(;l.size<i.length;){let d=i.filter(v=>!l.has(v)&&o.get(v).every(g=>l.has(g))),_=d.find(v=>f&&v.tool.id===f.id)||d[0];l.add(_),u.push(_),f=_.tool}return[...u,...e]}function mg(n,t,e){let i={x0:t.minX,y0:t.minY,cell:e,nx:Math.ceil((t.maxX-t.minX)/e)+1,ny:Math.ceil((t.maxY-t.minY)/e)+1};return i.h=zu(n,i),i}function gg(n,t=32){return Array.from({length:t},(e,i)=>[n.x+n.d/2*Math.cos(i/t*2*Math.PI),n.y+n.d/2*Math.sin(i/t*2*Math.PI)])}function Qo(n){let t=[];for(let e of n.ops)e.enabled&&!t.some(i=>i.id===e.tool.id)&&t.push(e.tool);return t}var Ai,On,ag,lg,Wu,cg,jo,$u,Yu,ug,Ic,dg,Xr,Pc,Zu=gn(()=>{wc();Ac();Hs();Ws();Cc();Ai=.01,On=.05,ag=.2,lg=2,Wu=.3,cg=25,jo={fast:.1,balanced:.05,smooth:.02},$u=["back-left","back-center","back-right","left-center","center","right-center","front-left","front-center","front-right"];Yu=n=>[[[n.minX,n.minY],[n.maxX,n.minY],[n.maxX,n.maxY],[n.minX,n.maxY]]],ug=(n,t)=>Math.abs(n-t)<.05;Ic=(n,t)=>Ke(Ke(n,-t),t),dg=(n,t)=>{let e=Nn(n);return e>0?Nn(Ic(n,t))/e:0},Xr=(n,t)=>!n.fluteLength||n.fluteLength+1e-6>=t,Pc=n=>(Math.round(n*10)/10).toString()});function Wr(n,t,e){let i=Math.max(1,Math.ceil((n-t)/e-1e-6));return Array.from({length:i},(r,o)=>n-(o+1)*(n-t)/i)}function Ys(n,t,e,i,r,o,l){let u=[...t.breaks(e,i),i];if(l)for(let d of l.edges(e,i))u.push(d);u.sort((d,_)=>d-_);let f=e;for(let d of u){if(d-f<1e-9)continue;let _=(f+d)/2,v=l&&l.inside(_)?l.top:-1/0,[g,b]=t.at(f),w=Math.max(r(f),v),T=n.at;T&&(Math.abs(T.z-w)>1e-6||Math.abs(T.x-g)>1e-6||Math.abs(T.y-b)>1e-6)&&n.feed(g,b,w,o);let[S,x]=t.at(d);n.feed(S,x,Math.max(r(d),v),o),f=d}}function Ju(n,t,e,i,r,o,l){let u=Math.max(0,(i-r)/Math.tan(o.rampAngle*Math.PI/180));if(t.length<1||u<1e-6){let[d,_]=t.at(e);return n.feed(d,_,l&&l.inside(e)?Math.max(r,l.top):r,o.plunge),Ys(n,t,e,e+t.length,()=>r,o.feed,l),e}let f=e+u;return Ys(n,t,e,f,d=>i-(d-e)/u*(i-r),Math.min(o.feed,o.plunge*2),l),Ys(n,t,f,f+t.length,()=>r,o.feed,l),f}function yg(n,t,e,i){let r=[];for(let o=t,l=0;l<500;o+=e,l++){let u=Xi(Dn(Ke(n,-o,i),.001),.005);if(!u.length)break;r.push(u)}return r}function xg(n){let t=n.map((r,o)=>r.map(l=>({loop:l,depth:o,kids:[]})));for(let r=1;r<t.length;r++)for(let o of t[r])(t[r-1].find(u=>Vs(o.loop[0],u.loop)&&Math.sign(Yn(u.loop))===Math.sign(Yn(o.loop)))||t[r-1].find(u=>Vs(o.loop[0],u.loop))||t[0][0]).kids.push(o);let e=[],i=r=>{if(!r.kids.length){e.push([r.loop]);return}for(let o of r.kids)i(o);e[e.length-1].push(r.loop)};for(let r of t[0]||[])Yn(r.loop)>0&&i(r);for(let r of t[0]||[])Yn(r.loop)<=0&&!t[0].some(o=>o.kids.includes(r))&&i(r);return e}function Mg(n,t){let e=0;for(let i of t)Vs(n,i)&&(e+=Yn(i)>0?1:-1);return e>0}function Sg(n,t,e){let i=Math.max(2,Math.ceil(Math.hypot(t[0]-n[0],t[1]-n[1])/.2));for(let r=1;r<i;r++){let o=r/i;if(!Mg([n[0]+(t[0]-n[0])*o,n[1]+(t[1]-n[1])*o],e))return!1}return!0}function Nc(n,t,e,i,r,o,l,u=null){let f=Math.min(i.stepover,e*.95),d=yg(t,e+l,f,l>=.2?.05:void 0);if(!d.length)return;let _=Ke(t,-(e+l)+.01),v=xg(d),g=r;for(let b of Wr(r,o,i.stepdown)){for(let w of v){let T=new yr(w[0]),[S,x]=T.at(0);n.goTo(S,x,g),n.feed(S,x,g,i.plunge);let O=Ju(n,T,0,g,b,i);for(let H=1;H<w.length;H++){let R=T.at(O),U=new yr(w[H]),B=U.nearest(R);if(!Sg(R,U.at(B),_)){[S,x]=U.at(B);let W=u??g+1;n.rapid(R[0],R[1],W),n.rapid(S,x,W),W>g+1&&n.rapid(S,x,g+1),n.feed(S,x,b,i.plunge)}Ys(n,U,B,B+U.length,()=>b,i.feed),T=U,O=B}}g=b}n.retract()}function ju(n,t,e,i,r,o,l){let u=Xi(Dn(Ke(t,-e),.001),.005);for(let f of u){let d=new yr(f),[_,v]=d.at(0);n.goTo(_,v,r);for(let g of Wr(r,o,l))n.feed(_,v,g,i.plunge),Ys(n,d,0,d.length,()=>g,i.feed*.9);n.retract()}}function bg(n,t,e,i,r,o,l){let u=Dn(Hi(t,Ke(Ke(t,-i),i)),.01);if(!u.length)return;let f=Ke(u,e+.5);for(let d of Xi(Dn(Ke(t,-e),.001),.005)){let _=new yr(d),v=Math.max(8,Math.ceil(_.length/.25)),g=Array.from({length:v},(w,T)=>f.some(S=>Vs(_.at(T/v*_.length),S)));if(g.every(Boolean)){ju(n,t,e,r,o,l,r.stepdown);return}let b=g.indexOf(!1);for(let w=0;w<v;w++){let T=(b+w)%v;if(!g[T]||g[(T-1+v)%v])continue;let S=T;for(;g[(S+1)%v]&&S-T<v;)S++;let x=T/v*_.length,O=(S+1)/v*_.length,[H,R]=_.at(x);n.goTo(H,R,o);let U=!0;for(let B of Wr(o,l,r.stepdown)){let W=[..._.breaks(x,O),O],C=U?W:[...W.slice(0,-1).reverse(),x],[k,X]=_.at(U?x:O);n.feed(k,X,B,r.plunge);for(let et of C){let[st,$]=_.at(et);n.feed(st,$,B,r.feed)}U=!U}n.retract()}}}function wg(n,t,e,i,r,o){let l=Math.min(i.stepover,e*1.6),u=t.minX-e-2,f=t.maxX+e+2;for(let d of Wr(r,o,i.stepdown)){let _=t.minY+e*.6;n.goTo(u,_,r),n.feed(u,_,d,i.plunge);let v=1;for(;n.feed(v>0?f:u,_,d,i.feed),!(_>=t.maxY-e*.6-1e-6);)_=Math.min(_+l,t.maxY-e*.6),n.feed(v>0?f:u,_,d,i.feed),v=-v}n.retract()}function Eg(n,t,e,i,r,o){let l=Math.max(.5,o*1.5);for(let u of t){n.goTo(u.x,u.y,i);let f=i;for(;f>r+1e-6;){let d=Math.max(r,f-l);f<i&&n.rapid(u.x,u.y,f+.5),n.feed(u.x,u.y,d,e.plunge),n.rapid(u.x,u.y,i+1),f=d}n.retract()}}function Tg(n,t,e,i){let r=Math.max(0,Math.round(t.tabs.count));if(!t.tabs.enabled||!r)return null;let o=t.tabs.length??Yi(t.material).length,l=2*e+o,u=Array.from({length:r},(d,_)=>{let v=(_+.5)/r*n;return[v-l/2,v+l/2]}),f=n;return{top:i+(t.tabs.height??Yi(t.material).height),inside:d=>{let _=(d%f+f)%f;return u.some(([v,g])=>_>v&&_<g)},edges:(d,_)=>{let v=[];for(let g=Math.floor(d/f);g*f<=_;g++)for(let[b,w]of u)for(let T of[b,w]){let S=g*f+T;S>d&&S<_&&v.push(S)}return v}}}function Ag(n,t,e,i,r,o,l,u){let f=[{off:e+u,fd:i}];u>0&&f.push({off:e,fd:{...i,feed:Math.round(i.feed*.9)},finish:!0});for(let d of f)for(let _ of di(t).map(v=>v[0])){let v=Xi(Dn(Ke([_],d.off),.001),.005).filter(g=>Yn(g)>0);for(let g of v){let b=new yr(g.slice().reverse()),w=Tg(b.length,l,e,0),[T,S]=b.at(0);n.goTo(T,S,r),n.feed(T,S,r,i.plunge);let x=0,O=r,H=d.finish?Wr(r,o,Math.max(i.stepdown,Math.min(6*e,r-o))):Wr(r,o,i.stepdown);for(let R of H)x=Ju(n,b,x,O,R,d.fd,w),O=R;n.retract()}}}function Cg(n,t,e,i,r,o,l){let u=e.diameter/2,f=t.cell,d=e.kind==="ball",_=f*Math.SQRT1_2,v=Math.ceil((u+_)/f),g=[];for(let $=-v;$<=v;$++)for(let q=-v;q<=v;q++){let Z=Math.max(0,Math.hypot(q,$)*f-_);Z<=u+1e-9&&g.push(q,$,d?u-Math.sqrt(Math.max(0,u*u-Z*Z)):0)}let{nx:b,ny:w,h:T}=t,S=($,q)=>{let Z=o;for(let lt=0;lt<g.length;lt+=3){let dt=$+g[lt],Mt=q+g[lt+1];dt>=0&&Mt>=0&&dt<b&&Mt<w&&T[Mt*b+dt]>Z&&(Z=T[Mt*b+dt])}return Z},x=($,q)=>{let Z=-1/0;for(let lt=0;lt<g.length;lt+=3){let dt=$+g[lt],Mt=q+g[lt+1];if(dt<0||Mt<0||dt>=b||Mt>=w)continue;let pt=T[Mt*b+dt]-g[lt+2];pt>Z&&(Z=pt)}return Z===-1/0?null:Math.max(Z,o)},O=1/0,H=-1,R=1/0,U=-1;for(let $=0;$<w;$++)for(let q=0;q<b;q++)T[$*b+q]!==-1/0&&(q<O&&(O=q),q>H&&(H=q),$<R&&(R=$),$>U&&(U=$));if(H<0)return;O=Math.max(0,O-v),H=Math.min(b-1,H+v),R=Math.max(0,R-v),U=Math.min(w-1,U+v);let B=d?2*Math.sqrt(Math.max(0,2*u*r-r*r)):i.stepover*.5,W=Math.max(1,Math.floor(Math.min(B,u)/f+1e-9)),C=[];for(let $=R;$<=U;$+=W)C.push($);C[C.length-1]!==U&&C.push(U);let k=($,q,Z)=>({x:t.x0+$*f,y:t.y0+q*f,z:Z,i:$,j:q}),X=($,q)=>{let Z=Math.max(1,Math.ceil(Math.hypot(q.i-$.i,q.j-$.j)*2)),lt=Math.max($.z,q.z);for(let dt=1;dt<Z;dt++){let Mt=dt/Z,pt=x(Math.round($.i+(q.i-$.i)*Mt),Math.round($.j+(q.j-$.j)*Mt))??o;pt>$.z+(q.z-$.z)*Mt+.001&&(lt=Math.max(lt,pt))}return lt},et=null,st=3*W*f+1e-6;C.forEach(($,q)=>{let Z=[],lt=[];for(let dt=O;dt<=H;dt++){let Mt=x(dt,$);if(Mt===null){lt.length&&Z.push(lt),lt=[];continue}lt.push(k(dt,$,Mt))}lt.length&&Z.push(lt),q%2&&(Z.reverse(),Z.forEach(dt=>dt.reverse()));for(let dt of Z){let Mt=Pg(dt,.005),pt=Mt[0];if(et&&Math.hypot(pt.x-et.x,pt.y-et.y)<=st){let J=X(et,pt);J>Math.max(et.z,pt.z)+1e-6&&(n.feed(et.x,et.y,J+.5,i.feed),n.feed(pt.x,pt.y,J+.5,i.feed)),n.feed(pt.x,pt.y,pt.z,i.plunge)}else n.goTo(pt.x,pt.y,S(pt.i,pt.j)+l),n.feed(pt.x,pt.y,pt.z,i.plunge);let wt=pt;for(let J of Mt.slice(1))n.feed(J.x,J.y,J.z,wt.z-J.z>Math.hypot(J.x-wt.x,J.y-wt.y)?i.plunge:i.feed),wt=J;et=wt}}),n.retract()}function Pg(n,t){if(n.length<3)return n;let e=new Uint8Array(n.length);e[0]=e[n.length-1]=1;let i=[[0,n.length-1]];for(;i.length;){let[r,o]=i.pop(),l=n[r],u=n[o],f=u.x-l.x,d=u.y-l.y,_=u.z-l.z,v=f*f+d*d+_*_,g=-1,b=t;for(let w=r+1;w<o;w++){let T=n[w],S=v>0?((T.x-l.x)*f+(T.y-l.y)*d+(T.z-l.z)*_)/v:0,x=Math.hypot(l.x+f*S-T.x,l.y+d*S-T.y,l.z+_*S-T.z);x>b&&(b=x,g=w)}g>=0&&(e[g]=1,i.push([r,g],[g,o]))}return n.filter((r,o)=>e[o])}function Dc(n,t){let e=l=>{let u=Gi([l[0]]);return[(u.minX+u.maxX)/2,(u.minY+u.maxY)/2]},i=n.map(l=>({a:l,m:e(l)})),r=[],o=t?[t.x,t.y]:i[0]?.m;for(;i.length;){let l=0;for(let f=1;f<i.length;f++)Math.hypot(i[f].m[0]-o[0],i[f].m[1]-o[1])<Math.hypot(i[l].m[0]-o[0],i[l].m[1]-o[1])&&(l=f);let[u]=i.splice(l,1);r.push(u.a),o=u.m}return r}function Ku(n){let t=n.stock.top+_g,e=($n[n.job.finish]||$n.balanced).allowance,r=n.ops.some(o=>o.kind==="face"&&o.enabled)?n.analysis.top:n.stock.top;for(let o of n.ops){let l=new Oc(t),u=o.kind!=="face"&&o.zTop>=n.analysis.top-1e-6?Math.max(o.zTop,r):o.zTop,f=o.tool.diameter/2,d=o.feeds,_=Math.min(o.tool.fluteLength||1/0,3*o.tool.diameter);switch(o.kind){case"face":wg(l,n.stock,f,d,u,o.zBottom);break;case"pocket":case"step":case"hole":for(let v of Dc(di(o.region),l.at))Nc(l,v,f,d,u,o.zBottom,e),e>0&&ju(l,v,f,d,u,o.zBottom,_);break;case"corners":{let v=n.ops.find(g=>g.id===o.after);bg(l,o.region,f,v?v.tool.diameter/2:f*2,d,u,o.zBottom);break}case"rough3d":for(let v of o.layers){let g=v.zFrom>=n.analysis.top-1e-6?u:v.zFrom;for(let b of Dc(di(v.region),l.at))Nc(l,b,f,d,g,v.z,o.allowance,u+1);for(let b of Dc(di(v.fresh||[]),l.at))Nc(l,b,f,d,u,v.z,o.allowance,u+1)}break;case"finish3d":Cg(l,o.surface,o.tool,d,o.ridge,0,vg);break;case"drill":Eg(l,o.centers,d,u,o.zBottom,o.tool.diameter);break;case"cutout":Ag(l,o.region,f,d,u,o.zBottom,n.job,e);break}o.moves=l.moves}return n}var _g,vg,Oc,yr,Qu=gn(()=>{Hs();Ws();_g=3,vg=3.5;Oc=class{constructor(t){this.moves=[],this.clearZ=t,this.at=null}rapid(t,e,i){this.push({r:!0,x:t,y:e,z:i})}feed(t,e,i,r){this.push({x:t,y:e,z:i,f:r})}push(t){let e=this.at;e&&Math.abs(e.x-t.x)<1e-6&&Math.abs(e.y-t.y)<1e-6&&Math.abs(e.z-t.z)<1e-6||(this.moves.push(t),this.at=t)}goTo(t,e,i){this.at&&this.rapid(this.at.x,this.at.y,this.clearZ),this.rapid(t,e,this.clearZ),this.rapid(t,e,i+1)}retract(){this.at&&this.rapid(this.at.x,this.at.y,this.clearZ)}},yr=class{constructor(t){this.p=t,this.s=[0];for(let e=1;e<=t.length;e++){let i=t[e-1],r=t[e%t.length];this.s.push(this.s[e-1]+Math.hypot(r[0]-i[0],r[1]-i[1]))}this.length=this.s[t.length]}at(t){let e=this.length,i=(t%e+e)%e,r=1;for(;r<this.s.length-1&&this.s[r]<i;)r++;let o=this.p[r-1],l=this.p[r%this.p.length],u=this.s[r]-this.s[r-1]||1,f=(i-this.s[r-1])/u;return[o[0]+(l[0]-o[0])*f,o[1]+(l[1]-o[1])*f]}breaks(t,e){let i=[],r=this.length;for(let o=Math.floor(t/r);o*r<=e;o++)for(let l=0;l<this.p.length;l++){let u=o*r+this.s[l];u>t+1e-9&&u<e-1e-9&&i.push(u)}return i}nearest([t,e]){let i=0,r=1/0;for(let o=0;o<this.p.length;o++){let l=(this.p[o][0]-t)**2+(this.p[o][1]-e)**2;l<r&&(r=l,i=this.s[o])}return i}}});function tf(n,t={}){let{name:e="part",numbering:i="slot",safeZHeightMm:r=null,spindleDelay:o=3}=t,l=Number.isFinite(r)?`G53 G0 Z${qi(r)}`:"G53 G0 Z0",u=n.zero,f=n.stock,d=[Yr(`ncCAM: ${e}`),Yr(`Stock ${qi(f.width)} x ${qi(f.depth)} x ${qi(f.thickness)} mm, ${(_r[n.job.material]||{}).name||n.job.material}, ${($n[n.job.finish]||{}).name||n.job.finish}`),Yr(`Zero: X Y at the ${Rg[n.job.zero.xy]||n.job.zero.xy}, Z on ${n.job.zero.z==="bed"?"the bed":"top of the stock"}`)],_=n.ops.filter(T=>T.enabled&&T.moves&&T.moves.length);for(let T of[...new Map(_.map(S=>[S.tool.id,S.tool])).values()])d.push(Yr(`T${vr(T,i)}: ${T.name}, ${qi(T.diameter)} mm`));d.push("G21 G90 G94 G17");let v=null,g={},b=null,w=null;for(let T of _){(!v||T.tool.id!==v.id)&&(v&&d.push("M5"),d.push(l,`M6 T${vr(T.tool,i)}`,Yr(T.tool.name)),v=T.tool,d.push(`M3 S${T.feeds.rpm}`),o>0&&d.push(`G4 P${o}`),g={},b=null,w=null),d.push(Yr(`${T.label}${T.detail?": "+T.detail:""}`));for(let S of T.moves){let x=qi(S.x-u.x),O=qi(S.y-u.y),H=qi(S.z-u.z);if(S.r&&(x!==g.x||O!==g.y)&&H!==g.z){let W=g.z===void 0||+H<+g.z?[`X${x} Y${O}`,`Z${H}`]:[`Z${H}`,`X${x} Y${O}`];for(let C of W)d.push(`${w==="G0"?"":"G0 "}${C}`),w="G0";g={x,y:O,z:H};continue}let R=S.r?"G0":"G1",U=R===w?"":R;x!==g.x&&(U+=` X${x}`),O!==g.y&&(U+=` Y${O}`),H!==g.z&&(U+=` Z${H}`),!S.r&&S.f!==b&&(U+=` F${Math.round(S.f)}`,b=S.f),U=U.trim(),!(!U||U===R)&&(d.push(U),w=R,g={x,y:O,z:H})}}return d.push("M5",l,"M30",""),d.join(`
`)}function ef(n,{maxRapid:t=5e3,spindleDelay:e=3,toolChange:i=30}={}){let r=0,o=null,l=null;for(let u of n.ops){if(!u.enabled||!u.moves)continue;(!l||u.tool.id!==l.id)&&(r+=e+(l?i:0),l=u.tool);let f=0;for(let d of u.moves){if(o){let _=Math.hypot(d.x-o.x,d.y-o.y,d.z-o.z);f+=_/(d.r?t:d.f)*60}o=d}u.seconds=f,r+=f}return r}var qi,Ig,Yr,Rg,nf=gn(()=>{Ws();qi=n=>{let t=(Math.round(n*1e3)/1e3).toFixed(3).replace(/\.?0+$/,"");return t==="-0"?"0":t},Ig={"\xD7":"x","\xB7":"-",\u00D8:"D","\xB0":" deg","\u2019":"'","\u2026":"..."},Yr=n=>`(${String(n).replace(/\(/g,"[").replace(/\)/g,"]").replace(/[^\x20-\x7e]/g,t=>Ig[t]??"")})`,Rg={"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}});var Fc=gn(()=>{wc();Uu();Zu();Qu();nf();Ac();Ws();Cc();Hs()});function Ng(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Dg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function so(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function gd(){let n=so("canvas");return n.style.display="block",n}function oo(...n){let t="THREE."+n.shift();ps?ps("log",t,...n):console.log(t,...n)}function _d(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function de(...n){n=_d(n);let t="THREE."+n.shift();if(ps)ps("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ge(...n){n=_d(n);let t="THREE."+n.shift();if(ps)ps("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function wr(...n){let t=n.join(" ");t in of||(of[t]=!0,de(...n))}function vd(n,t,e){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function Ni(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[e&63|128]+_n[e>>8&255]+"-"+_n[e>>16&255]+_n[e>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function Ee(n,t,e){return Math.max(t,Math.min(e,n))}function Vh(n,t){return(n%t+t)%t}function Og(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function Fg(n,t,e){return n!==t?(e-n)/(t-n):0}function eo(n,t,e){return(1-e)*n+e*t}function Ug(n,t,e,i){return eo(n,t,1-Math.exp(-e*i))}function Bg(n,t=1){return t-Math.abs(Vh(n,t*2)-t)}function kg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function zg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Vg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Hg(n,t){return n+Math.random()*(t-n)}function Gg(n){return n*(.5-Math.random())}function Xg(n){n!==void 0&&(af=n);let t=af+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wg(n){return n*hs}function Yg(n){return n*ms}function $g(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function qg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Zg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Jg(n,t,e,i,r){let o=Math.cos,l=Math.sin,u=o(e/2),f=l(e/2),d=o((t+i)/2),_=l((t+i)/2),v=o((t-i)/2),g=l((t-i)/2),b=o((i-t)/2),w=l((i-t)/2);switch(r){case"XYX":n.set(u*_,f*v,f*g,u*d);break;case"YZY":n.set(f*g,u*_,f*v,u*d);break;case"ZXZ":n.set(f*v,f*g,u*_,u*d);break;case"XZX":n.set(u*_,f*w,f*b,u*d);break;case"YXY":n.set(f*b,u*_,f*w,u*d);break;case"ZYZ":n.set(f*w,f*b,u*_,u*d);break;default:de("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ni(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ke(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function jg(){let n={enabled:!0,workingColorSpace:io,spaces:{},convert:function(r,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Ue&&(r.r=Di(r.r),r.g=Di(r.g),r.b=Di(r.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Ue&&(r.r=us(r.r),r.g=us(r.g),r.b=us(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Fi?ro:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,l){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return wr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return wr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[io]:{primaries:t,whitePoint:i,transfer:ro,toXYZ:cf,fromXYZ:hf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:t,whitePoint:i,transfer:Ue,toXYZ:cf,fromXYZ:hf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),n}function Di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function us(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function zc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?za.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}function Gc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function jc(n,t,e,i,r){for(let o=0,l=n.length-3;o<=l;o+=3){Mr.fromArray(n,o);let u=r.x*Math.abs(Mr.x)+r.y*Math.abs(Mr.y)+r.z*Math.abs(Mr.z),f=t.dot(Mr),d=e.dot(Mr),_=i.dot(Mr);if(Math.max(-Math.max(f,d,_),Math.min(f,d,_))>u)return!1}return!0}function ca(n,t,e,i,r,o){os.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(Ks.x=o*os.x-r*os.y,Ks.y=r*os.x+o*os.y):Ks.copy(os),n.copy(t),n.x+=Ks.x,n.y+=Ks.y,n.applyMatrix4(Md)}function d0(n,t,e,i,r,o,l,u){let f;if(t.side===Tn?f=i.intersectTriangle(l,o,r,!0,u):f=i.intersectTriangle(r,o,l,t.side===hr,u),f===null)return null;_a.copy(u),_a.applyMatrix4(n.matrixWorld);let d=e.ray.origin.distanceTo(_a);return d<e.near||d>e.far?null:{distance:d,point:_a.clone(),object:n}}function va(n,t,e,i,r,o,l,u,f,d){n.getVertexPosition(u,da),n.getVertexPosition(f,pa),n.getVertexPosition(d,ma);let _=d0(n,t,e,i,da,pa,ma,bf);if(_){let v=new ct;mi.getBarycoord(bf,da,pa,ma,v),r&&(_.uv=mi.getInterpolatedAttribute(r,u,f,d,v,new le)),o&&(_.uv1=mi.getInterpolatedAttribute(o,u,f,d,v,new le)),l&&(_.normal=mi.getInterpolatedAttribute(l,u,f,d,v,new ct),_.normal.dot(i.direction)>0&&_.normal.multiplyScalar(-1));let g={a:u,b:f,c:d,normal:new ct,materialIndex:0};mi.getNormal(da,pa,ma,g.normal),_.face=g,_.barycoord=v}return _}function Ma(n,t,e,i,r,o,l){let u=n.geometry.attributes.position;if(Wa.fromBufferAttribute(u,r),Ya.fromBufferAttribute(u,o),e.distanceSqToSegment(Wa,Ya,rh,Ef)>i)return;rh.applyMatrix4(n.matrixWorld);let d=t.ray.origin.distanceTo(rh);if(!(d<t.near||d>t.far))return{distance:d,point:Ef.clone().applyMatrix4(n.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:n}}function Rr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];if(Cf(r))r.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(Cf(r[0])){let o=[];for(let l=0,u=r.length;l<u;l++)o[l]=r[l].clone();t[e][i]=o}else t[e][i]=r.slice();else t[e][i]=r}}return t}function Mn(n){let t={};for(let e=0;e<n.length;e++){let i=Rr(n[e]);for(let r in i)t[r]=i[r]}return t}function Cf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function m0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Gh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}function as(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function oh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function bd(n,t,e,i,r){let o=1-n;return o*o*o*t+3*o*o*n*e+3*o*n*n*i+n*n*n*r}function v0(n,t,e,i,r){let o=1-n;return 3*o*o*(e-t)+6*o*n*(i-e)+3*n*n*(r-i)}function y0(n,t,e,i,r){let o=(n-t)/(r-t);for(let l=0;l<8;l++){let u=bd(o,t,e,i,r)-n;if(Math.abs(u)<1e-10)break;let f=v0(o,t,e,i,r);if(Math.abs(f)<1e-10)break;o=Math.max(0,Math.min(1,o-u/f))}return o}function Pf(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}function Of(n,t){return n.distance-t.distance}function mh(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){let o=n.children;for(let l=0,u=o.length;l<u;l++)mh(o[l],t,e,!0)}}function Yh(n,t,e,i){let r=C0(i);switch(e){case Fh:return n*t;case Bh:return n*t/r.components*r.byteLength;case gl:return n*t/r.components*r.byteLength;case pr:return n*t*2/r.components*r.byteLength;case _l:return n*t*2/r.components*r.byteLength;case Uh:return n*t*3/r.components*r.byteLength;case Jn:return n*t*4/r.components*r.byteLength;case vl:return n*t*4/r.components*r.byteLength;case Io:case Ro:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Lo:case No:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xl:case Sl:return Math.max(n,16)*Math.max(t,8)/4;case yl:case Ml:return Math.max(n,8)*Math.max(t,8)/2;case bl:case wl:case Tl:case Al:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case El:case Do:case Cl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Il:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case kl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case zl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Hl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Gl:case Xl:case Wl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Yl:case $l:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Oo:case ql:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function C0(n){switch(n){case In:case Lh:return{byteLength:1,components:1};case Cs:case Nh:case ci:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case ai:case dl:case li:return{byteLength:4,components:1};case Dh:case Oh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var lr,cr,Uf,_h,Bf,Ao,kf,Ts,hr,Tn,xn,xi,As,vh,yh,xh,zf,Cr,Vf,Hf,Gf,Xf,Wf,Yf,$f,qf,Mh,Sh,Zf,Jf,jf,Kf,Qf,td,ed,nd,id,Ia,Ra,La,fs,Na,Da,Oa,Fa,bh,rd,sd,oi,wh,Eh,Th,Ah,Ch,Ph,Ih,Rh,ur,Pr,hl,ul,Co,Ua,gi,Ba,un,od,Po,dn,fl,fr,In,Lh,Nh,Cs,dl,ai,li,ci,pl,ml,Ps,Dh,Oh,Fh,Uh,Jn,_i,dr,Bh,gl,pr,_l,vl,Io,Ro,Lo,No,yl,xl,Ml,Sl,bl,wl,El,Tl,Al,Do,Cl,Pl,Il,Rl,Ll,Nl,Dl,Ol,Fl,Ul,Bl,kl,zl,Vl,Hl,Gl,Xl,Wl,Yl,$l,Oo,ql,no,ka,Ca,ch,hh,uh,fh,ad,Zl,ld,Fi,wn,io,ro,Ue,Pa,cd,hd,ud,fd,Jl,dd,pd,jl,md,kh,Ir,zh,ii,ds,of,ps,yd,ri,_n,af,hs,ms,Hh,le,kn,ct,Bc,lf,xe,kc,cf,hf,Ae,$r,za,Kg,gs,Qg,Vc,En,Je,Va,Pn,ao,Ha,ze,qr,Qn,t0,e0,Zi,ta,Fn,uf,ff,Oi,_s,n0,df,Zr,Ci,ea,$s,i0,r0,pf,mf,gf,_f,s0,Jr,Hc,rn,Zn,o0,vs,xd,Ji,na,ye,vn,lo,ti,Pi,Xc,Ii,jr,Kr,vf,Wc,Yc,$c,qc,Zc,Jc,mi,tr,Ri,ei,ia,Qr,ts,es,ji,Ki,xr,qs,ra,sa,Mr,nn,oa,a0,Ge,co,ho,Xe,l0,Zs,Kc,Er,c0,qn,Qc,ns,Un,Js,hn,qe,Ga,bn,uo,th,h0,u0,Bn,f0,vi,ys,is,js,rs,ss,os,Ks,Md,aa,Qs,la,yf,eh,xf,fo,Li,nh,ha,ua,er,zn,Mf,Sr,fa,Sf,da,pa,ma,ih,ga,bf,_a,De,Xa,br,p0,ya,xs,si,Wa,Ya,wf,to,xa,rh,Ef,Tr,Tf,Af,Ar,po,mo,nr,$a,go,ir,yi,Ms,Sa,ba,sh,wa,Ss,_o,vo,rr,Sd,g0,_0,Vn,qa,Hn,Za,Ja,yo,sr,ja,Ka,Qa,tl,Gn,or,el,nl,il,xo,ar,rl,sl,wd,ol,Mo,So,ah,If,Rf,al,Ea,Ta,pi,bo,Qi,Lf,Nf,yn,bs,dh,ws,ls,cs,ll,cl,Xh,x0,Wh,M0,S0,b0,w0,E0,T0,A0,ph,$e,gS,Df,wo,Es,gh,Ff,Aa,lh,Eo,To,$h=gn(()=>{lr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uf=0,_h=1,Bf=2,Ao=1,kf=2,Ts=3,hr=0,Tn=1,xn=2,xi=0,As=1,vh=2,yh=3,xh=4,zf=5,Cr=100,Vf=101,Hf=102,Gf=103,Xf=104,Wf=200,Yf=201,$f=202,qf=203,Mh=204,Sh=205,Zf=206,Jf=207,jf=208,Kf=209,Qf=210,td=211,ed=212,nd=213,id=214,Ia=0,Ra=1,La=2,fs=3,Na=4,Da=5,Oa=6,Fa=7,bh=0,rd=1,sd=2,oi=0,wh=1,Eh=2,Th=3,Ah=4,Ch=5,Ph=6,Ih=7,Rh=300,ur=301,Pr=302,hl=303,ul=304,Co=306,Ua=1e3,gi=1001,Ba=1002,un=1003,od=1004,Po=1005,dn=1006,fl=1007,fr=1008,In=1009,Lh=1010,Nh=1011,Cs=1012,dl=1013,ai=1014,li=1015,ci=1016,pl=1017,ml=1018,Ps=1020,Dh=35902,Oh=35899,Fh=1021,Uh=1022,Jn=1023,_i=1026,dr=1027,Bh=1028,gl=1029,pr=1030,_l=1031,vl=1033,Io=33776,Ro=33777,Lo=33778,No=33779,yl=35840,xl=35841,Ml=35842,Sl=35843,bl=36196,wl=37492,El=37496,Tl=37488,Al=37489,Do=37490,Cl=37491,Pl=37808,Il=37809,Rl=37810,Ll=37811,Nl=37812,Dl=37813,Ol=37814,Fl=37815,Ul=37816,Bl=37817,kl=37818,zl=37819,Vl=37820,Hl=37821,Gl=36492,Xl=36494,Wl=36495,Yl=36283,$l=36284,Oo=36285,ql=36286,no=2300,ka=2301,Ca=2302,ch=2303,hh=2400,uh=2401,fh=2402,ad=3200,Zl=0,ld=1,Fi="",wn="srgb",io="srgb-linear",ro="linear",Ue="srgb",Pa=7680,cd=519,hd=512,ud=513,fd=514,Jl=515,dd=516,pd=517,jl=518,md=519,kh=35044,Ir=35048,zh="300 es",ii=2e3,ds=2001;of={},ps=null;yd={[Ia]:Ra,[La]:Oa,[Na]:Fa,[fs]:Da,[Ra]:Ia,[Oa]:La,[Fa]:Na,[Da]:fs},ri=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let r=i[t];if(r!==void 0){let o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,t);t.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],af=1234567,hs=Math.PI/180,ms=180/Math.PI;Hh={DEG2RAD:hs,RAD2DEG:ms,generateUUID:Ni,clamp:Ee,euclideanModulo:Vh,mapLinear:Og,inverseLerp:Fg,lerp:eo,damp:Ug,pingpong:Bg,smoothstep:kg,smootherstep:zg,randInt:Vg,randFloat:Hg,randFloatSpread:Gg,seededRandom:Xg,degToRad:Wg,radToDeg:Yg,isPowerOfTwo:$g,ceilPowerOfTwo:qg,floorPowerOfTwo:Zg,setQuaternionFromProperEuler:Jg,normalize:ke,denormalize:ni},le=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),o=this.x-t.x,l=this.y-t.y;return this.x=o*i-l*r+t.x,this.y=o*r+l*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kn=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,o,l,u){let f=i[r+0],d=i[r+1],_=i[r+2],v=i[r+3],g=o[l+0],b=o[l+1],w=o[l+2],T=o[l+3];if(v!==T||f!==g||d!==b||_!==w){let S=f*g+d*b+_*w+v*T;S<0&&(g=-g,b=-b,w=-w,T=-T,S=-S);let x=1-u;if(S<.9995){let O=Math.acos(S),H=Math.sin(O);x=Math.sin(x*O)/H,u=Math.sin(u*O)/H,f=f*x+g*u,d=d*x+b*u,_=_*x+w*u,v=v*x+T*u}else{f=f*x+g*u,d=d*x+b*u,_=_*x+w*u,v=v*x+T*u;let O=1/Math.sqrt(f*f+d*d+_*_+v*v);f*=O,d*=O,_*=O,v*=O}}t[e]=f,t[e+1]=d,t[e+2]=_,t[e+3]=v}static multiplyQuaternionsFlat(t,e,i,r,o,l){let u=i[r],f=i[r+1],d=i[r+2],_=i[r+3],v=o[l],g=o[l+1],b=o[l+2],w=o[l+3];return t[e]=u*w+_*v+f*b-d*g,t[e+1]=f*w+_*g+d*v-u*b,t[e+2]=d*w+_*b+u*g-f*v,t[e+3]=_*w-u*v-f*g-d*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,o=t._z,l=t._order,u=Math.cos,f=Math.sin,d=u(i/2),_=u(r/2),v=u(o/2),g=f(i/2),b=f(r/2),w=f(o/2);switch(l){case"XYZ":this._x=g*_*v+d*b*w,this._y=d*b*v-g*_*w,this._z=d*_*w+g*b*v,this._w=d*_*v-g*b*w;break;case"YXZ":this._x=g*_*v+d*b*w,this._y=d*b*v-g*_*w,this._z=d*_*w-g*b*v,this._w=d*_*v+g*b*w;break;case"ZXY":this._x=g*_*v-d*b*w,this._y=d*b*v+g*_*w,this._z=d*_*w+g*b*v,this._w=d*_*v-g*b*w;break;case"ZYX":this._x=g*_*v-d*b*w,this._y=d*b*v+g*_*w,this._z=d*_*w-g*b*v,this._w=d*_*v+g*b*w;break;case"YZX":this._x=g*_*v+d*b*w,this._y=d*b*v+g*_*w,this._z=d*_*w-g*b*v,this._w=d*_*v-g*b*w;break;case"XZY":this._x=g*_*v-d*b*w,this._y=d*b*v-g*_*w,this._z=d*_*w+g*b*v,this._w=d*_*v+g*b*w;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],o=e[8],l=e[1],u=e[5],f=e[9],d=e[2],_=e[6],v=e[10],g=i+u+v;if(g>0){let b=.5/Math.sqrt(g+1);this._w=.25/b,this._x=(_-f)*b,this._y=(o-d)*b,this._z=(l-r)*b}else if(i>u&&i>v){let b=2*Math.sqrt(1+i-u-v);this._w=(_-f)/b,this._x=.25*b,this._y=(r+l)/b,this._z=(o+d)/b}else if(u>v){let b=2*Math.sqrt(1+u-i-v);this._w=(o-d)/b,this._x=(r+l)/b,this._y=.25*b,this._z=(f+_)/b}else{let b=2*Math.sqrt(1+v-i-u);this._w=(l-r)/b,this._x=(o+d)/b,this._y=(f+_)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,o=t._z,l=t._w,u=e._x,f=e._y,d=e._z,_=e._w;return this._x=i*_+l*u+r*d-o*f,this._y=r*_+l*f+o*u-i*d,this._z=o*_+l*d+i*f-r*u,this._w=l*_-i*u-r*f-o*d,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,o=t._z,l=t._w,u=this.dot(t);u<0&&(i=-i,r=-r,o=-o,l=-l,u=-u);let f=1-e;if(u<.9995){let d=Math.acos(u),_=Math.sin(d);f=Math.sin(f*d)/_,e=Math.sin(e*d)/_,this._x=this._x*f+i*e,this._y=this._y*f+r*e,this._z=this._z*f+o*e,this._w=this._w*f+l*e,this._onChangeCallback()}else this._x=this._x*f+i*e,this._y=this._y*f+r*e,this._z=this._z*f+o*e,this._w=this._w*f+l*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ct=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*r,this.y=o[1]*e+o[4]*i+o[7]*r,this.z=o[2]*e+o[5]*i+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,o=t.elements,l=1/(o[3]*e+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*r+o[12])*l,this.y=(o[1]*e+o[5]*i+o[9]*r+o[13])*l,this.z=(o[2]*e+o[6]*i+o[10]*r+o[14])*l,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,o=t.x,l=t.y,u=t.z,f=t.w,d=2*(l*r-u*i),_=2*(u*e-o*r),v=2*(o*i-l*e);return this.x=e+f*d+l*v-u*_,this.y=i+f*_+u*d-o*v,this.z=r+f*v+o*_-l*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r,this.y=o[1]*e+o[5]*i+o[9]*r,this.z=o[2]*e+o[6]*i+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this.z=Ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this.z=Ee(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,o=t.z,l=e.x,u=e.y,f=e.z;return this.x=r*f-o*u,this.y=o*l-i*f,this.z=i*u-r*l,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Bc.copy(this).projectOnVector(t),this.sub(Bc)}reflect(t){return this.sub(Bc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bc=new ct,lf=new kn,xe=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,r,o,l,u,f,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,o,l,u,f,d)}set(t,e,i,r,o,l,u,f,d){let _=this.elements;return _[0]=t,_[1]=r,_[2]=u,_[3]=e,_[4]=o,_[5]=f,_[6]=i,_[7]=l,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,o=this.elements,l=i[0],u=i[3],f=i[6],d=i[1],_=i[4],v=i[7],g=i[2],b=i[5],w=i[8],T=r[0],S=r[3],x=r[6],O=r[1],H=r[4],R=r[7],U=r[2],B=r[5],W=r[8];return o[0]=l*T+u*O+f*U,o[3]=l*S+u*H+f*B,o[6]=l*x+u*R+f*W,o[1]=d*T+_*O+v*U,o[4]=d*S+_*H+v*B,o[7]=d*x+_*R+v*W,o[2]=g*T+b*O+w*U,o[5]=g*S+b*H+w*B,o[8]=g*x+b*R+w*W,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],l=t[4],u=t[5],f=t[6],d=t[7],_=t[8];return e*l*_-e*u*d-i*o*_+i*u*f+r*o*d-r*l*f}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],l=t[4],u=t[5],f=t[6],d=t[7],_=t[8],v=_*l-u*d,g=u*f-_*o,b=d*o-l*f,w=e*v+i*g+r*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/w;return t[0]=v*T,t[1]=(r*d-_*i)*T,t[2]=(u*i-r*l)*T,t[3]=g*T,t[4]=(_*e-r*f)*T,t[5]=(r*o-u*e)*T,t[6]=b*T,t[7]=(i*f-d*e)*T,t[8]=(l*e-i*o)*T,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,o,l,u){let f=Math.cos(o),d=Math.sin(o);return this.set(i*f,i*d,-i*(f*l+d*u)+l+t,-r*d,r*f,-r*(-d*l+f*u)+u+e,0,0,1),this}scale(t,e){return wr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kc.makeScale(t,e)),this}rotate(t){return wr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kc.makeRotation(-t)),this}translate(t,e){return wr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},kc=new xe,cf=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hf=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ae=jg();za=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{$r===void 0&&($r=so("canvas")),$r.width=t.width,$r.height=t.height;let r=$r.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=$r}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=so("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=Di(o[l]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Di(e[i]/255)*255):e[i]=Di(e[i]);return{data:e,width:t.width,height:t.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Kg=0,gs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=Ni(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,u=r.length;l<u;l++)r[l].isDataTexture?o.push(zc(r[l].image)):o.push(zc(r[l]))}else o=zc(r);i.url=o}return e||(t.images[this.uuid]=i),i}};Qg=0,Vc=new ct,En=class n extends ri{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=gi,r=gi,o=dn,l=fr,u=Jn,f=In,d=n.DEFAULT_ANISOTROPY,_=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Ni(),this.name="",this.source=new gs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vc).x}get height(){return this.source.getSize(Vc).y}get depth(){return this.source.getSize(Vc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){de(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){de(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ua:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case Ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ua:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case Ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Rh;En.DEFAULT_ANISOTROPY=1;Je=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,o=this.w,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*r+l[12]*o,this.y=l[1]*e+l[5]*i+l[9]*r+l[13]*o,this.z=l[2]*e+l[6]*i+l[10]*r+l[14]*o,this.w=l[3]*e+l[7]*i+l[11]*r+l[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,o,f=t.elements,d=f[0],_=f[4],v=f[8],g=f[1],b=f[5],w=f[9],T=f[2],S=f[6],x=f[10];if(Math.abs(_-g)<.01&&Math.abs(v-T)<.01&&Math.abs(w-S)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+T)<.1&&Math.abs(w+S)<.1&&Math.abs(d+b+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let H=(d+1)/2,R=(b+1)/2,U=(x+1)/2,B=(_+g)/4,W=(v+T)/4,C=(w+S)/4;return H>R&&H>U?H<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(H),r=B/i,o=W/i):R>U?R<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(R),i=B/r,o=C/r):U<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(U),i=W/o,r=C/o),this.set(i,r,o,e),this}let O=Math.sqrt((S-w)*(S-w)+(v-T)*(v-T)+(g-_)*(g-_));return Math.abs(O)<.001&&(O=1),this.x=(S-w)/O,this.y=(v-T)/O,this.z=(g-_)/O,this.w=Math.acos((d+b+x-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this.z=Ee(this.z,t.z,e.z),this.w=Ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this.z=Ee(this.z,t,e),this.w=Ee(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Va=class extends ri{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Je(0,0,t,e),this.scissorTest=!1,this.viewport=new Je(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:i.depth},o=new En(r),l=i.count;for(let u=0;u<l;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new gs(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends Va{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ao=class extends En{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Ha=class extends En{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},ze=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,r,o,l,u,f,d,_,v,g,b,w,T,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,o,l,u,f,d,_,v,g,b,w,T,S)}set(t,e,i,r,o,l,u,f,d,_,v,g,b,w,T,S){let x=this.elements;return x[0]=t,x[4]=e,x[8]=i,x[12]=r,x[1]=o,x[5]=l,x[9]=u,x[13]=f,x[2]=d,x[6]=_,x[10]=v,x[14]=g,x[3]=b,x[7]=w,x[11]=T,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,r=1/qr.setFromMatrixColumn(t,0).length(),o=1/qr.setFromMatrixColumn(t,1).length(),l=1/qr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*l,e[9]=i[9]*l,e[10]=i[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,o=t.z,l=Math.cos(i),u=Math.sin(i),f=Math.cos(r),d=Math.sin(r),_=Math.cos(o),v=Math.sin(o);if(t.order==="XYZ"){let g=l*_,b=l*v,w=u*_,T=u*v;e[0]=f*_,e[4]=-f*v,e[8]=d,e[1]=b+w*d,e[5]=g-T*d,e[9]=-u*f,e[2]=T-g*d,e[6]=w+b*d,e[10]=l*f}else if(t.order==="YXZ"){let g=f*_,b=f*v,w=d*_,T=d*v;e[0]=g+T*u,e[4]=w*u-b,e[8]=l*d,e[1]=l*v,e[5]=l*_,e[9]=-u,e[2]=b*u-w,e[6]=T+g*u,e[10]=l*f}else if(t.order==="ZXY"){let g=f*_,b=f*v,w=d*_,T=d*v;e[0]=g-T*u,e[4]=-l*v,e[8]=w+b*u,e[1]=b+w*u,e[5]=l*_,e[9]=T-g*u,e[2]=-l*d,e[6]=u,e[10]=l*f}else if(t.order==="ZYX"){let g=l*_,b=l*v,w=u*_,T=u*v;e[0]=f*_,e[4]=w*d-b,e[8]=g*d+T,e[1]=f*v,e[5]=T*d+g,e[9]=b*d-w,e[2]=-d,e[6]=u*f,e[10]=l*f}else if(t.order==="YZX"){let g=l*f,b=l*d,w=u*f,T=u*d;e[0]=f*_,e[4]=T-g*v,e[8]=w*v+b,e[1]=v,e[5]=l*_,e[9]=-u*_,e[2]=-d*_,e[6]=b*v+w,e[10]=g-T*v}else if(t.order==="XZY"){let g=l*f,b=l*d,w=u*f,T=u*d;e[0]=f*_,e[4]=-v,e[8]=d*_,e[1]=g*v+T,e[5]=l*_,e[9]=b*v-w,e[2]=w*v-b,e[6]=u*_,e[10]=T*v+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(t0,t,e0)}lookAt(t,e,i){let r=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Zi.crossVectors(i,Fn),Zi.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Zi.crossVectors(i,Fn)),Zi.normalize(),ta.crossVectors(Fn,Zi),r[0]=Zi.x,r[4]=ta.x,r[8]=Fn.x,r[1]=Zi.y,r[5]=ta.y,r[9]=Fn.y,r[2]=Zi.z,r[6]=ta.z,r[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,o=this.elements,l=i[0],u=i[4],f=i[8],d=i[12],_=i[1],v=i[5],g=i[9],b=i[13],w=i[2],T=i[6],S=i[10],x=i[14],O=i[3],H=i[7],R=i[11],U=i[15],B=r[0],W=r[4],C=r[8],k=r[12],X=r[1],et=r[5],st=r[9],$=r[13],q=r[2],Z=r[6],lt=r[10],dt=r[14],Mt=r[3],pt=r[7],wt=r[11],J=r[15];return o[0]=l*B+u*X+f*q+d*Mt,o[4]=l*W+u*et+f*Z+d*pt,o[8]=l*C+u*st+f*lt+d*wt,o[12]=l*k+u*$+f*dt+d*J,o[1]=_*B+v*X+g*q+b*Mt,o[5]=_*W+v*et+g*Z+b*pt,o[9]=_*C+v*st+g*lt+b*wt,o[13]=_*k+v*$+g*dt+b*J,o[2]=w*B+T*X+S*q+x*Mt,o[6]=w*W+T*et+S*Z+x*pt,o[10]=w*C+T*st+S*lt+x*wt,o[14]=w*k+T*$+S*dt+x*J,o[3]=O*B+H*X+R*q+U*Mt,o[7]=O*W+H*et+R*Z+U*pt,o[11]=O*C+H*st+R*lt+U*wt,o[15]=O*k+H*$+R*dt+U*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],o=t[12],l=t[1],u=t[5],f=t[9],d=t[13],_=t[2],v=t[6],g=t[10],b=t[14],w=t[3],T=t[7],S=t[11],x=t[15],O=f*b-d*g,H=u*b-d*v,R=u*g-f*v,U=l*b-d*_,B=l*g-f*_,W=l*v-u*_;return e*(T*O-S*H+x*R)-i*(w*O-S*U+x*B)+r*(w*H-T*U+x*W)-o*(w*R-T*B+S*W)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],r=t[8],o=t[1],l=t[5],u=t[9],f=t[2],d=t[6],_=t[10];return e*(l*_-u*d)-i*(o*_-u*f)+r*(o*d-l*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],l=t[4],u=t[5],f=t[6],d=t[7],_=t[8],v=t[9],g=t[10],b=t[11],w=t[12],T=t[13],S=t[14],x=t[15],O=e*u-i*l,H=e*f-r*l,R=e*d-o*l,U=i*f-r*u,B=i*d-o*u,W=r*d-o*f,C=_*T-v*w,k=_*S-g*w,X=_*x-b*w,et=v*S-g*T,st=v*x-b*T,$=g*x-b*S,q=O*$-H*st+R*et+U*X-B*k+W*C;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/q;return t[0]=(u*$-f*st+d*et)*Z,t[1]=(r*st-i*$-o*et)*Z,t[2]=(T*W-S*B+x*U)*Z,t[3]=(g*B-v*W-b*U)*Z,t[4]=(f*X-l*$-d*k)*Z,t[5]=(e*$-r*X+o*k)*Z,t[6]=(S*R-w*W-x*H)*Z,t[7]=(_*W-g*R+b*H)*Z,t[8]=(l*st-u*X+d*C)*Z,t[9]=(i*X-e*st-o*C)*Z,t[10]=(w*B-T*R+x*O)*Z,t[11]=(v*R-_*B-b*O)*Z,t[12]=(u*k-l*et-f*C)*Z,t[13]=(e*et-i*k+r*C)*Z,t[14]=(T*H-w*U-S*O)*Z,t[15]=(_*U-v*H+g*O)*Z,this}scale(t){let e=this.elements,i=t.x,r=t.y,o=t.z;return e[0]*=i,e[4]*=r,e[8]*=o,e[1]*=i,e[5]*=r,e[9]*=o,e[2]*=i,e[6]*=r,e[10]*=o,e[3]*=i,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),o=1-i,l=t.x,u=t.y,f=t.z,d=o*l,_=o*u;return this.set(d*l+i,d*u-r*f,d*f+r*u,0,d*u+r*f,_*u+i,_*f-r*l,0,d*f-r*u,_*f+r*l,o*f*f+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,o,l){return this.set(1,i,o,0,t,1,l,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,o=e._x,l=e._y,u=e._z,f=e._w,d=o+o,_=l+l,v=u+u,g=o*d,b=o*_,w=o*v,T=l*_,S=l*v,x=u*v,O=f*d,H=f*_,R=f*v,U=i.x,B=i.y,W=i.z;return r[0]=(1-(T+x))*U,r[1]=(b+R)*U,r[2]=(w-H)*U,r[3]=0,r[4]=(b-R)*B,r[5]=(1-(g+x))*B,r[6]=(S+O)*B,r[7]=0,r[8]=(w+H)*W,r[9]=(S-O)*W,r[10]=(1-(g+T))*W,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let o=this.determinantAffine();if(o===0)return i.set(1,1,1),e.identity(),this;let l=qr.set(r[0],r[1],r[2]).length(),u=qr.set(r[4],r[5],r[6]).length(),f=qr.set(r[8],r[9],r[10]).length();o<0&&(l=-l),Qn.copy(this);let d=1/l,_=1/u,v=1/f;return Qn.elements[0]*=d,Qn.elements[1]*=d,Qn.elements[2]*=d,Qn.elements[4]*=_,Qn.elements[5]*=_,Qn.elements[6]*=_,Qn.elements[8]*=v,Qn.elements[9]*=v,Qn.elements[10]*=v,e.setFromRotationMatrix(Qn),i.x=l,i.y=u,i.z=f,this}makePerspective(t,e,i,r,o,l,u=ii,f=!1){let d=this.elements,_=2*o/(e-t),v=2*o/(i-r),g=(e+t)/(e-t),b=(i+r)/(i-r),w,T;if(f)w=o/(l-o),T=l*o/(l-o);else if(u===ii)w=-(l+o)/(l-o),T=-2*l*o/(l-o);else if(u===ds)w=-l/(l-o),T=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=v,d[9]=b,d[13]=0,d[2]=0,d[6]=0,d[10]=w,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,r,o,l,u=ii,f=!1){let d=this.elements,_=2/(e-t),v=2/(i-r),g=-(e+t)/(e-t),b=-(i+r)/(i-r),w,T;if(f)w=1/(l-o),T=l/(l-o);else if(u===ii)w=-2/(l-o),T=-(l+o)/(l-o);else if(u===ds)w=-1/(l-o),T=-o/(l-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=v,d[9]=0,d[13]=b,d[2]=0,d[6]=0,d[10]=w,d[14]=T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},qr=new ct,Qn=new ze,t0=new ct(0,0,0),e0=new ct(1,1,1),Zi=new ct,ta=new ct,Fn=new ct,uf=new ze,ff=new kn,Oi=class n{constructor(t=0,e=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,o=r[0],l=r[4],u=r[8],f=r[1],d=r[5],_=r[9],v=r[2],g=r[6],b=r[10];switch(e){case"XYZ":this._y=Math.asin(Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-_,b),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(u,b),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-v,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,b),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-Ee(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,b),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(Ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-v,o)):(this._x=0,this._y=Math.atan2(u,b));break;case"XZY":this._z=Math.asin(-Ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-_,b),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return uf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ff.setFromEuler(this),this.setFromQuaternion(ff,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Oi.DEFAULT_ORDER="XYZ";_s=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},n0=0,df=new ct,Zr=new kn,Ci=new ze,ea=new ct,$s=new ct,i0=new ct,r0=new kn,pf=new ct(1,0,0),mf=new ct(0,1,0),gf=new ct(0,0,1),_f={type:"added"},s0={type:"removed"},Jr={type:"childadded",child:null},Hc={type:"childremoved",child:null},rn=class n extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new ct,e=new Oi,i=new kn,r=new ct(1,1,1);function o(){i.setFromEuler(e,!1)}function l(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ze},normalMatrix:{value:new xe}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zr.setFromAxisAngle(t,e),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(t,e){return Zr.setFromAxisAngle(t,e),this.quaternion.premultiply(Zr),this}rotateX(t){return this.rotateOnAxis(pf,t)}rotateY(t){return this.rotateOnAxis(mf,t)}rotateZ(t){return this.rotateOnAxis(gf,t)}translateOnAxis(t,e){return df.copy(t).applyQuaternion(this.quaternion),this.position.add(df.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pf,t)}translateY(t){return this.translateOnAxis(mf,t)}translateZ(t){return this.translateOnAxis(gf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ea.copy(t):ea.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt($s,ea,this.up):Ci.lookAt(ea,$s,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(Ci),this.quaternion.premultiply(Zr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_f),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null):ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(s0),Hc.child=t,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_f),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let l=this.children[i].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,i0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,r0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,r=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*i-o[8]*r,o[13]+=i-o[1]*e-o[5]*i-o[9]*r,o[14]+=r-o[2]*e-o[6]*i-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(u=>({...u})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(t)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);let u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){let f=u.shapes;if(Array.isArray(f))for(let d=0,_=f.length;d<_;d++){let v=f[d];o(t.shapes,v)}else o(t.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(o(t.materials,this.material[f]));r.material=u}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){let f=this.animations[u];r.animations.push(o(t.animations,f))}}if(e){let u=l(t.geometries),f=l(t.materials),d=l(t.textures),_=l(t.images),v=l(t.shapes),g=l(t.skeletons),b=l(t.animations),w=l(t.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),_.length>0&&(i.images=_),v.length>0&&(i.shapes=v),g.length>0&&(i.skeletons=g),b.length>0&&(i.animations=b),w.length>0&&(i.nodes=w)}return i.object=r,i;function l(u){let f=[];for(let d in u){let _=u[d];delete _.metadata,f.push(_)}return f}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rn.DEFAULT_UP=new ct(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Zn=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},o0={type:"move"},vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ct,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ct),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ct,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ct,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,o=null,l=null,u=this._targetRay,f=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){l=!0;for(let T of t.hand.values()){let S=e.getJointPose(T,i),x=this._getHandJoint(d,T);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}let _=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],g=_.position.distanceTo(v.position),b=.02,w=.005;d.inputState.pinching&&g>b+w?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=b-w&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else f!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:t,target:this})));u!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(o0)))}return u!==null&&(u.visible=r!==null),f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Zn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},na={h:0,s:0,l:0};ye=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ae.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Ae.workingColorSpace){if(t=Vh(t,1),e=Ee(e,0,1),i=Ee(i,0,1),e===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+e):i+e-i*e,l=2*i-o;this.r=Gc(l,o,t+1/3),this.g=Gc(l,o,t),this.b=Gc(l,o,t-1/3)}return Ae.colorSpaceToWorking(this,r),this}setStyle(t,e=wn){function i(o){o!==void 0&&parseFloat(o)<1&&de("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,l=r[1],u=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:de("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(o,16),e);de("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=wn){let i=xd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):de("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wn){return Ae.workingToColorSpace(vn.copy(this),t),Math.round(Ee(vn.r*255,0,255))*65536+Math.round(Ee(vn.g*255,0,255))*256+Math.round(Ee(vn.b*255,0,255))}getHexString(t=wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.workingToColorSpace(vn.copy(this),e);let i=vn.r,r=vn.g,o=vn.b,l=Math.max(i,r,o),u=Math.min(i,r,o),f,d,_=(u+l)/2;if(u===l)f=0,d=0;else{let v=l-u;switch(d=_<=.5?v/(l+u):v/(2-l-u),l){case i:f=(r-o)/v+(r<o?6:0);break;case r:f=(o-i)/v+2;break;case o:f=(i-r)/v+4;break}f/=6}return t.h=f,t.s=d,t.l=_,t}getRGB(t,e=Ae.workingColorSpace){return Ae.workingToColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=wn){Ae.workingToColorSpace(vn.copy(this),t);let e=vn.r,i=vn.g,r=vn.b;return t!==wn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(na);let i=eo(Ji.h,na.h,e),r=eo(Ji.s,na.s,e),o=eo(Ji.l,na.l,e);return this.setHSL(i,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*r,this.g=o[1]*e+o[4]*i+o[7]*r,this.b=o[2]*e+o[5]*i+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new ye;ye.NAMES=xd;lo=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ti=new ct,Pi=new ct,Xc=new ct,Ii=new ct,jr=new ct,Kr=new ct,vf=new ct,Wc=new ct,Yc=new ct,$c=new ct,qc=new Je,Zc=new Je,Jc=new Je,mi=class n{constructor(t=new ct,e=new ct,i=new ct){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),ti.subVectors(t,e),r.cross(ti);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,i,r,o){ti.subVectors(r,e),Pi.subVectors(i,e),Xc.subVectors(t,e);let l=ti.dot(ti),u=ti.dot(Pi),f=ti.dot(Xc),d=Pi.dot(Pi),_=Pi.dot(Xc),v=l*d-u*u;if(v===0)return o.set(0,0,0),null;let g=1/v,b=(d*f-u*_)*g,w=(l*_-u*f)*g;return o.set(1-b-w,w,b)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,e,i,r,o,l,u,f){return this.getBarycoord(t,e,i,r,Ii)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,Ii.x),f.addScaledVector(l,Ii.y),f.addScaledVector(u,Ii.z),f)}static getInterpolatedAttribute(t,e,i,r,o,l){return qc.setScalar(0),Zc.setScalar(0),Jc.setScalar(0),qc.fromBufferAttribute(t,e),Zc.fromBufferAttribute(t,i),Jc.fromBufferAttribute(t,r),l.setScalar(0),l.addScaledVector(qc,o.x),l.addScaledVector(Zc,o.y),l.addScaledVector(Jc,o.z),l}static isFrontFacing(t,e,i,r){return ti.subVectors(i,e),Pi.subVectors(t,e),ti.cross(Pi).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ti.cross(Pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,o){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,o)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,o=this.c,l,u;jr.subVectors(r,i),Kr.subVectors(o,i),Wc.subVectors(t,i);let f=jr.dot(Wc),d=Kr.dot(Wc);if(f<=0&&d<=0)return e.copy(i);Yc.subVectors(t,r);let _=jr.dot(Yc),v=Kr.dot(Yc);if(_>=0&&v<=_)return e.copy(r);let g=f*v-_*d;if(g<=0&&f>=0&&_<=0)return l=f/(f-_),e.copy(i).addScaledVector(jr,l);$c.subVectors(t,o);let b=jr.dot($c),w=Kr.dot($c);if(w>=0&&b<=w)return e.copy(o);let T=b*d-f*w;if(T<=0&&d>=0&&w<=0)return u=d/(d-w),e.copy(i).addScaledVector(Kr,u);let S=_*w-b*v;if(S<=0&&v-_>=0&&b-w>=0)return vf.subVectors(o,r),u=(v-_)/(v-_+(b-w)),e.copy(r).addScaledVector(vf,u);let x=1/(S+T+g);return l=T*x,u=g*x,e.copy(i).addScaledVector(jr,l).addScaledVector(Kr,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},tr=class{constructor(t=new ct(1/0,1/0,1/0),e=new ct(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let l=0,u=o.count;l<u;l++)t.isMesh===!0?t.getVertexPosition(l,ei):ei.fromBufferAttribute(o,l),ei.applyMatrix4(t.matrixWorld),this.expandByPoint(ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ia.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ia.copy(i.boundingBox)),ia.applyMatrix4(t.matrixWorld),this.union(ia)}let r=t.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ei),ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qs),ra.subVectors(this.max,qs),Qr.subVectors(t.a,qs),ts.subVectors(t.b,qs),es.subVectors(t.c,qs),ji.subVectors(ts,Qr),Ki.subVectors(es,ts),xr.subVectors(Qr,es);let e=[0,-ji.z,ji.y,0,-Ki.z,Ki.y,0,-xr.z,xr.y,ji.z,0,-ji.x,Ki.z,0,-Ki.x,xr.z,0,-xr.x,-ji.y,ji.x,0,-Ki.y,Ki.x,0,-xr.y,xr.x,0];return!jc(e,Qr,ts,es,ra)||(e=[1,0,0,0,1,0,0,0,1],!jc(e,Qr,ts,es,ra))?!1:(sa.crossVectors(ji,Ki),e=[sa.x,sa.y,sa.z],jc(e,Qr,ts,es,ra))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ri=[new ct,new ct,new ct,new ct,new ct,new ct,new ct,new ct],ei=new ct,ia=new tr,Qr=new ct,ts=new ct,es=new ct,ji=new ct,Ki=new ct,xr=new ct,qs=new ct,ra=new ct,sa=new ct,Mr=new ct;nn=new ct,oa=new le,a0=0,Ge=class extends ri{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:a0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=kh,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)oa.fromBufferAttribute(this,e),oa.applyMatrix3(t),this.setXY(e,oa.x,oa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ni(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,o){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),r=ke(r,this.array),o=ke(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},co=class extends Ge{constructor(t,e,i){super(new Uint16Array(t),e,i)}},ho=class extends Ge{constructor(t,e,i){super(new Uint32Array(t),e,i)}},Xe=class extends Ge{constructor(t,e,i){super(new Float32Array(t),e,i)}},l0=new tr,Zs=new ct,Kc=new ct,Er=class{constructor(t=new ct,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):l0.setFromPoints(t).getCenter(i);let r=0;for(let o=0,l=t.length;o<l;o++)r=Math.max(r,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);let e=Zs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Zs,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(Kc)),this.expandByPoint(Zs.copy(t.center).sub(Kc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},c0=0,qn=new ze,Qc=new rn,ns=new ct,Un=new tr,Js=new tr,hn=new ct,qe=class n extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ng(t)?ho:co)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new xe().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,i){return qn.makeTranslation(t,e,i),this.applyMatrix4(qn),this}scale(t,e,i){return qn.makeScale(t,e,i),this.applyMatrix4(qn),this}lookAt(t){return Qc.lookAt(t),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let r=0,o=t.length;r<o;r++){let l=t[r];i.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Xe(i,3))}else{let i=Math.min(t.length,e.count);for(let r=0;r<i;r++){let o=t[r];e.setXYZ(r,o.x,o.y,o.z||0)}t.length>e.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ct(-1/0,-1/0,-1/0),new ct(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let o=e[i];Un.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Er);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ct,1/0);return}if(t){let i=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let o=0,l=e.length;o<l;o++){let u=e[o];Js.setFromBufferAttribute(u),this.morphTargetsRelative?(hn.addVectors(Un.min,Js.min),Un.expandByPoint(hn),hn.addVectors(Un.max,Js.max),Un.expandByPoint(hn)):(Un.expandByPoint(Js.min),Un.expandByPoint(Js.max))}Un.getCenter(i);let r=0;for(let o=0,l=t.count;o<l;o++)hn.fromBufferAttribute(t,o),r=Math.max(r,i.distanceToSquared(hn));if(e)for(let o=0,l=e.length;o<l;o++){let u=e[o],f=this.morphTargetsRelative;for(let d=0,_=u.count;d<_;d++)hn.fromBufferAttribute(u,d),f&&(ns.fromBufferAttribute(t,d),hn.add(ns)),r=Math.max(r,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,r=e.normal,o=e.uv,l=this.getAttribute("tangent");(l===void 0||l.count!==i.count)&&(l=new Ge(new Float32Array(4*i.count),4),this.setAttribute("tangent",l));let u=[],f=[];for(let C=0;C<i.count;C++)u[C]=new ct,f[C]=new ct;let d=new ct,_=new ct,v=new ct,g=new le,b=new le,w=new le,T=new ct,S=new ct;function x(C,k,X){d.fromBufferAttribute(i,C),_.fromBufferAttribute(i,k),v.fromBufferAttribute(i,X),g.fromBufferAttribute(o,C),b.fromBufferAttribute(o,k),w.fromBufferAttribute(o,X),_.sub(d),v.sub(d),b.sub(g),w.sub(g);let et=1/(b.x*w.y-w.x*b.y);isFinite(et)&&(T.copy(_).multiplyScalar(w.y).addScaledVector(v,-b.y).multiplyScalar(et),S.copy(v).multiplyScalar(b.x).addScaledVector(_,-w.x).multiplyScalar(et),u[C].add(T),u[k].add(T),u[X].add(T),f[C].add(S),f[k].add(S),f[X].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let C=0,k=O.length;C<k;++C){let X=O[C],et=X.start,st=X.count;for(let $=et,q=et+st;$<q;$+=3)x(t.getX($+0),t.getX($+1),t.getX($+2))}let H=new ct,R=new ct,U=new ct,B=new ct;function W(C){U.fromBufferAttribute(r,C),B.copy(U);let k=u[C];H.copy(k),H.sub(U.multiplyScalar(U.dot(k))).normalize(),R.crossVectors(B,k);let et=R.dot(f[C])<0?-1:1;l.setXYZW(C,H.x,H.y,H.z,et)}for(let C=0,k=O.length;C<k;++C){let X=O[C],et=X.start,st=X.count;for(let $=et,q=et+st;$<q;$+=3)W(t.getX($+0)),W(t.getX($+1)),W(t.getX($+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let g=0,b=i.count;g<b;g++)i.setXYZ(g,0,0,0);let r=new ct,o=new ct,l=new ct,u=new ct,f=new ct,d=new ct,_=new ct,v=new ct;if(t)for(let g=0,b=t.count;g<b;g+=3){let w=t.getX(g+0),T=t.getX(g+1),S=t.getX(g+2);r.fromBufferAttribute(e,w),o.fromBufferAttribute(e,T),l.fromBufferAttribute(e,S),_.subVectors(l,o),v.subVectors(r,o),_.cross(v),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),u.add(_),f.add(_),d.add(_),i.setXYZ(w,u.x,u.y,u.z),i.setXYZ(T,f.x,f.y,f.z),i.setXYZ(S,d.x,d.y,d.z)}else for(let g=0,b=e.count;g<b;g+=3)r.fromBufferAttribute(e,g+0),o.fromBufferAttribute(e,g+1),l.fromBufferAttribute(e,g+2),_.subVectors(l,o),v.subVectors(r,o),_.cross(v),i.setXYZ(g+0,_.x,_.y,_.z),i.setXYZ(g+1,_.x,_.y,_.z),i.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(u,f){let d=u.array,_=u.itemSize,v=u.normalized,g=new d.constructor(f.length*_),b=0,w=0;for(let T=0,S=f.length;T<S;T++){u.isInterleavedBufferAttribute?b=f[T]*u.data.stride+u.offset:b=f[T]*_;for(let x=0;x<_;x++)g[w++]=d[b++]}return new Ge(g,_,v)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let u in r){let f=r[u],d=t(f,i);e.setAttribute(u,d)}let o=this.morphAttributes;for(let u in o){let f=[],d=o[u];for(let _=0,v=d.length;_<v;_++){let g=d[_],b=t(g,i);f.push(b)}e.morphAttributes[u]=f}e.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let u=0,f=l.length;u<f;u++){let d=l[u];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let f=this.parameters;for(let d in f)f[d]!==void 0&&(t[d]=f[d]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let f in i){let d=i[f];t.data.attributes[f]=d.toJSON(t.data)}let r={},o=!1;for(let f in this.morphAttributes){let d=this.morphAttributes[f],_=[];for(let v=0,g=d.length;v<g;v++){let b=d[v];_.push(b.toJSON(t.data))}_.length>0&&(r[f]=_,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));let u=this.boundingSphere;return u!==null&&(t.data.boundingSphere=u.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let r=t.attributes;for(let d in r){let _=r[d];this.setAttribute(d,_.clone(e))}let o=t.morphAttributes;for(let d in o){let _=[],v=o[d];for(let g=0,b=v.length;g<b;g++)_.push(v[g].clone(e));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;let l=t.groups;for(let d=0,_=l.length;d<_;d++){let v=l[d];this.addGroup(v.start,v.count,v.materialIndex)}let u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());let f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ga=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=kh,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,o=this.stride;r<o;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},bn=new ct,uo=class n{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ni(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ni(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ni(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ni(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ni(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),r=ke(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),r=ke(r,this.array),o=ke(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=o,this}clone(t){if(t===void 0){oo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return new Ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){oo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},th=new ct,h0=new ct,u0=new xe,Bn=class{constructor(t=new ct(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=th.subVectors(i,e).cross(h0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let r=t.delta(th),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let l=-(t.start.dot(this.normal)+this.constant)/o;return i===!0&&(l<0||l>1)?null:e.copy(t.start).addScaledVector(r,l)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||u0.getNormalMatrix(t),r=this.coplanarPoint(th).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},f0=0,vi=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=As,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mh,this.blendDst=Sh,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pa,this.stencilZFail=Pa,this.stencilZPass=Pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){de(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){de(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){let l=[];for(let u in o){let f=o[u];delete f.metadata,l.push(f)}return l}if(e){let o=r(t.textures),l=r(t.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ye().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Bn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new le().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ys=class extends vi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},js=new ct,rs=new ct,ss=new ct,os=new le,Ks=new le,Md=new ze,aa=new ct,Qs=new ct,la=new ct,yf=new le,eh=new le,xf=new le,fo=class extends rn{constructor(t=new ys){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new qe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ga(e,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new uo(i,3,0,!1)),is.setAttribute("uv",new uo(i,2,3,!1))}this.geometry=is,this.material=t,this.center=new le(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),Md.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-ss.z);let i=this.material.rotation,r,o;i!==0&&(o=Math.cos(i),r=Math.sin(i));let l=this.center;ca(aa.set(-.5,-.5,0),ss,l,rs,r,o),ca(Qs.set(.5,-.5,0),ss,l,rs,r,o),ca(la.set(.5,.5,0),ss,l,rs,r,o),yf.set(0,0),eh.set(1,0),xf.set(1,1);let u=t.ray.intersectTriangle(aa,Qs,la,!1,js);if(u===null&&(ca(Qs.set(-.5,.5,0),ss,l,rs,r,o),eh.set(0,1),u=t.ray.intersectTriangle(aa,la,Qs,!1,js),u===null))return;let f=t.ray.origin.distanceTo(js);f<t.near||f>t.far||e.push({distance:f,point:js.clone(),uv:mi.getInterpolation(js,aa,Qs,la,yf,eh,xf,new le),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};Li=new ct,nh=new ct,ha=new ct,ua=new ct,er=class{constructor(t=new ct,e=new ct(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){nh.copy(t).add(e).multiplyScalar(.5),ha.copy(e).sub(t).normalize(),ua.copy(this.origin).sub(nh);let o=t.distanceTo(e)*.5,l=-this.direction.dot(ha),u=ua.dot(this.direction),f=-ua.dot(ha),d=ua.lengthSq(),_=Math.abs(1-l*l),v,g,b,w;if(_>0)if(v=l*f-u,g=l*u-f,w=o*_,v>=0)if(g>=-w)if(g<=w){let T=1/_;v*=T,g*=T,b=v*(v+l*g+2*u)+g*(l*v+g+2*f)+d}else g=o,v=Math.max(0,-(l*g+u)),b=-v*v+g*(g+2*f)+d;else g=-o,v=Math.max(0,-(l*g+u)),b=-v*v+g*(g+2*f)+d;else g<=-w?(v=Math.max(0,-(-l*o+u)),g=v>0?-o:Math.min(Math.max(-o,-f),o),b=-v*v+g*(g+2*f)+d):g<=w?(v=0,g=Math.min(Math.max(-o,-f),o),b=g*(g+2*f)+d):(v=Math.max(0,-(l*o+u)),g=v>0?o:Math.min(Math.max(-o,-f),o),b=-v*v+g*(g+2*f)+d);else g=l>0?-o:o,v=Math.max(0,-(l*g+u)),b=-v*v+g*(g+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(nh).addScaledVector(ha,g),b}intersectSphere(t,e){if(t.radius<0)return null;Li.subVectors(t.center,this.origin);let i=Li.dot(this.direction),r=Li.dot(Li)-i*i,o=t.radius*t.radius;if(r>o)return null;let l=Math.sqrt(o-r),u=i-l,f=i+l;return f<0?null:u<0?this.at(f,e):this.at(u,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,o,l,u,f,d=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return d>=0?(i=(t.min.x-g.x)*d,r=(t.max.x-g.x)*d):(i=(t.max.x-g.x)*d,r=(t.min.x-g.x)*d),_>=0?(o=(t.min.y-g.y)*_,l=(t.max.y-g.y)*_):(o=(t.max.y-g.y)*_,l=(t.min.y-g.y)*_),i>l||o>r||((o>i||isNaN(i))&&(i=o),(l<r||isNaN(r))&&(r=l),v>=0?(u=(t.min.z-g.z)*v,f=(t.max.z-g.z)*v):(u=(t.max.z-g.z)*v,f=(t.min.z-g.z)*v),i>f||u>r)||((u>i||i!==i)&&(i=u),(f<r||r!==r)&&(r=f),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,i,r,o){let l=this.origin,u=this.direction,f=u.x,d=u.y,_=u.z,v=t.x-l.x,g=t.y-l.y,b=t.z-l.z,w=e.x-l.x,T=e.y-l.y,S=e.z-l.z,x=i.x-l.x,O=i.y-l.y,H=i.z-l.z,R=Math.abs(f),U=Math.abs(d),B=Math.abs(_),W,C,k,X,et,st,$,q,Z,lt,dt,Mt;if(R>=U&&R>=B?(k=f,st=v,Z=w,Mt=x,f>=0?(W=d,C=_,X=g,et=b,$=T,q=S,lt=O,dt=H):(W=_,C=d,X=b,et=g,$=S,q=T,lt=H,dt=O)):U>=B?(k=d,st=g,Z=T,Mt=O,d>=0?(W=_,C=f,X=b,et=v,$=S,q=w,lt=H,dt=x):(W=f,C=_,X=v,et=b,$=w,q=S,lt=x,dt=H)):(k=_,st=b,Z=S,Mt=H,_>=0?(W=f,C=d,X=v,et=g,$=w,q=T,lt=x,dt=O):(W=d,C=f,X=g,et=v,$=T,q=w,lt=O,dt=x)),k===0)return null;let pt=W/k,wt=C/k,J=1/k,At=X-pt*st,Lt=et-wt*st,Ht=$-pt*Z,Bt=q-wt*Z,jt=lt-pt*Mt,yt=dt-wt*Mt,z=jt*Bt-yt*Ht,Xt=At*yt-Lt*jt,te=Ht*Lt-Bt*At;if(r){if(z<0||Xt<0||te<0)return null}else if((z<0||Xt<0||te<0)&&(z>0||Xt>0||te>0))return null;let kt=z+Xt+te;if(kt===0)return null;let ce=J*(z*st+Xt*Z+te*Mt);return(kt>0?ce<0:ce>0)?null:this.at(ce/kt,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zn=class extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Mf=new ze,Sr=new er,fa=new Er,Sf=new ct,da=new ct,pa=new ct,ma=new ct,ih=new ct,ga=new ct,bf=new ct,_a=new ct,De=class extends rn{constructor(t=new qe,e=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){let u=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let u=this.morphTargetInfluences;if(o&&u){ga.set(0,0,0);for(let f=0,d=o.length;f<d;f++){let _=u[f],v=o[f];_!==0&&(ih.fromBufferAttribute(v,t),l?ga.addScaledVector(ih,_):ga.addScaledVector(ih.sub(e),_))}e.add(ga)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(o),Sr.copy(t.ray).recast(t.near),!(fa.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(fa,Sf)===null||Sr.origin.distanceToSquared(Sf)>(t.far-t.near)**2))&&(Mf.copy(o).invert(),Sr.copy(t.ray).applyMatrix4(Mf),!(i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Sr)))}_computeIntersections(t,e,i){let r,o=this.geometry,l=this.material,u=o.index,f=o.attributes.position,d=o.attributes.uv,_=o.attributes.uv1,v=o.attributes.normal,g=o.groups,b=o.drawRange;if(u!==null)if(Array.isArray(l))for(let w=0,T=g.length;w<T;w++){let S=g[w],x=l[S.materialIndex],O=Math.max(S.start,b.start),H=Math.min(u.count,Math.min(S.start+S.count,b.start+b.count));for(let R=O,U=H;R<U;R+=3){let B=u.getX(R),W=u.getX(R+1),C=u.getX(R+2);r=va(this,x,t,i,d,_,v,B,W,C),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=S.materialIndex,e.push(r))}}else{let w=Math.max(0,b.start),T=Math.min(u.count,b.start+b.count);for(let S=w,x=T;S<x;S+=3){let O=u.getX(S),H=u.getX(S+1),R=u.getX(S+2);r=va(this,l,t,i,d,_,v,O,H,R),r&&(r.faceIndex=Math.floor(S/3),e.push(r))}}else if(f!==void 0)if(Array.isArray(l))for(let w=0,T=g.length;w<T;w++){let S=g[w],x=l[S.materialIndex],O=Math.max(S.start,b.start),H=Math.min(f.count,Math.min(S.start+S.count,b.start+b.count));for(let R=O,U=H;R<U;R+=3){let B=R,W=R+1,C=R+2;r=va(this,x,t,i,d,_,v,B,W,C),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=S.materialIndex,e.push(r))}}else{let w=Math.max(0,b.start),T=Math.min(f.count,b.start+b.count);for(let S=w,x=T;S<x;S+=3){let O=S,H=S+1,R=S+2;r=va(this,l,t,i,d,_,v,O,H,R),r&&(r.faceIndex=Math.floor(S/3),e.push(r))}}}};Xa=class extends En{constructor(t=null,e=1,i=1,r,o,l,u,f,d=un,_=un,v,g){super(null,l,u,f,d,_,r,o,v,g),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},br=new Er,p0=new le(.5,.5),ya=new ct,xs=class{constructor(t=new Bn,e=new Bn,i=new Bn,r=new Bn,o=new Bn,l=new Bn){this.planes=[t,e,i,r,o,l]}set(t,e,i,r,o,l){let u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(i),u[3].copy(r),u[4].copy(o),u[5].copy(l),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ii,i=!1){let r=this.planes,o=t.elements,l=o[0],u=o[1],f=o[2],d=o[3],_=o[4],v=o[5],g=o[6],b=o[7],w=o[8],T=o[9],S=o[10],x=o[11],O=o[12],H=o[13],R=o[14],U=o[15];if(r[0].setComponents(d-l,b-_,x-w,U-O).normalize(),r[1].setComponents(d+l,b+_,x+w,U+O).normalize(),r[2].setComponents(d+u,b+v,x+T,U+H).normalize(),r[3].setComponents(d-u,b-v,x-T,U-H).normalize(),i)r[4].setComponents(f,g,S,R).normalize(),r[5].setComponents(d-f,b-g,x-S,U-R).normalize();else if(r[4].setComponents(d-f,b-g,x-S,U-R).normalize(),e===ii)r[5].setComponents(d+f,b+g,x+S,U+R).normalize();else if(e===ds)r[5].setComponents(f,g,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(t){br.center.set(0,0,0);let e=p0.distanceTo(t.center);return br.radius=.7071067811865476+e,br.applyMatrix4(t.matrixWorld),this.intersectsSphere(br)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(ya.x=r.normal.x>0?t.max.x:t.min.x,ya.y=r.normal.y>0?t.max.y:t.min.y,ya.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ya)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},si=class extends vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Wa=new ct,Ya=new ct,wf=new ze,to=new er,xa=new Er,rh=new ct,Ef=new ct,Tr=class extends rn{constructor(t=new qe,e=new si){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,o=e.count;r<o;r++)Wa.fromBufferAttribute(e,r-1),Ya.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Wa.distanceTo(Ya);t.setAttribute("lineDistance",new Xe(i,1))}else de("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xa.copy(i.boundingSphere),xa.applyMatrix4(r),xa.radius+=o,t.ray.intersectsSphere(xa)===!1)return;wf.copy(r).invert(),to.copy(t.ray).applyMatrix4(wf);let u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=this.isLineSegments?2:1,_=i.index,g=i.attributes.position;if(_!==null){let b=Math.max(0,l.start),w=Math.min(_.count,l.start+l.count);for(let T=b,S=w-1;T<S;T+=d){let x=_.getX(T),O=_.getX(T+1),H=Ma(this,t,to,f,x,O,T);H&&e.push(H)}if(this.isLineLoop){let T=_.getX(w-1),S=_.getX(b),x=Ma(this,t,to,f,T,S,w-1);x&&e.push(x)}}else{let b=Math.max(0,l.start),w=Math.min(g.count,l.start+l.count);for(let T=b,S=w-1;T<S;T+=d){let x=Ma(this,t,to,f,T,T+1,T);x&&e.push(x)}if(this.isLineLoop){let T=Ma(this,t,to,f,w-1,b,w-1);T&&e.push(T)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){let u=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}};Tf=new ct,Af=new ct,Ar=class extends Tr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let r=0,o=e.count;r<o;r+=2)Tf.fromBufferAttribute(e,r),Af.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Tf.distanceTo(Af);t.setAttribute("lineDistance",new Xe(i,1))}else de("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},po=class extends En{constructor(t=[],e=ur,i,r,o,l,u,f,d,_){super(t,e,i,r,o,l,u,f,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},mo=class extends En{constructor(t,e,i,r,o,l,u,f,d){super(t,e,i,r,o,l,u,f,d),this.isCanvasTexture=!0,this.needsUpdate=!0}},nr=class extends En{constructor(t,e,i=ai,r,o,l,u=un,f=un,d,_=_i,v=1){if(_!==_i&&_!==dr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let g={width:t,height:e,depth:v};super(g,r,o,l,u,f,_,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},$a=class extends nr{constructor(t,e=ai,i=ur,r,o,l=un,u=un,f,d=_i){let _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,e,i,r,o,l,u,f,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},go=class extends En{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ir=class n extends qe{constructor(t=1,e=1,i=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:o,depthSegments:l};let u=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);let f=[],d=[],_=[],v=[],g=0,b=0;w("z","y","x",-1,-1,i,e,t,l,o,0),w("z","y","x",1,-1,i,e,-t,l,o,1),w("x","z","y",1,1,t,i,e,r,l,2),w("x","z","y",1,-1,t,i,-e,r,l,3),w("x","y","z",1,-1,t,e,i,r,o,4),w("x","y","z",-1,-1,t,e,-i,r,o,5),this.setIndex(f),this.setAttribute("position",new Xe(d,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(v,2));function w(T,S,x,O,H,R,U,B,W,C,k){let X=R/W,et=U/C,st=R/2,$=U/2,q=B/2,Z=W+1,lt=C+1,dt=0,Mt=0,pt=new ct;for(let wt=0;wt<lt;wt++){let J=wt*et-$;for(let At=0;At<Z;At++){let Lt=At*X-st;pt[T]=Lt*O,pt[S]=J*H,pt[x]=q,d.push(pt.x,pt.y,pt.z),pt[T]=0,pt[S]=0,pt[x]=B>0?1:-1,_.push(pt.x,pt.y,pt.z),v.push(At/W),v.push(1-wt/C),dt+=1}}for(let wt=0;wt<C;wt++)for(let J=0;J<W;J++){let At=g+J+Z*wt,Lt=g+J+Z*(wt+1),Ht=g+(J+1)+Z*(wt+1),Bt=g+(J+1)+Z*wt;f.push(At,Lt,Bt),f.push(Lt,Ht,Bt),Mt+=6}u.addGroup(b,Mt,k),b+=Mt,g+=dt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},yi=class n extends qe{constructor(t=1,e=1,i=1,r=32,o=1,l=!1,u=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f};let d=this;r=Math.floor(r),o=Math.floor(o);let _=[],v=[],g=[],b=[],w=0,T=[],S=i/2,x=0;O(),l===!1&&(t>0&&H(!0),e>0&&H(!1)),this.setIndex(_),this.setAttribute("position",new Xe(v,3)),this.setAttribute("normal",new Xe(g,3)),this.setAttribute("uv",new Xe(b,2));function O(){let R=new ct,U=new ct,B=0,W=(e-t)/i;for(let C=0;C<=o;C++){let k=[],X=C/o,et=X*(e-t)+t;for(let st=0;st<=r;st++){let $=st/r,q=$*f+u,Z=Math.sin(q),lt=Math.cos(q);U.x=et*Z,U.y=-X*i+S,U.z=et*lt,v.push(U.x,U.y,U.z),R.set(Z,W,lt).normalize(),g.push(R.x,R.y,R.z),b.push($,1-X),k.push(w++)}T.push(k)}for(let C=0;C<r;C++)for(let k=0;k<o;k++){let X=T[k][C],et=T[k+1][C],st=T[k+1][C+1],$=T[k][C+1];(t>0||k!==0)&&(_.push(X,et,$),B+=3),(e>0||k!==o-1)&&(_.push(et,st,$),B+=3)}d.addGroup(x,B,0),x+=B}function H(R){let U=w,B=new le,W=new ct,C=0,k=R===!0?t:e,X=R===!0?1:-1;for(let st=1;st<=r;st++)v.push(0,S*X,0),g.push(0,X,0),b.push(.5,.5),w++;let et=w;for(let st=0;st<=r;st++){let q=st/r*f+u,Z=Math.cos(q),lt=Math.sin(q);W.x=k*lt,W.y=S*X,W.z=k*Z,v.push(W.x,W.y,W.z),g.push(0,X,0),B.x=Z*.5+.5,B.y=lt*.5*X+.5,b.push(B.x,B.y),w++}for(let st=0;st<r;st++){let $=U+st,q=et+st;R===!0?_.push(q,q+1,$):_.push(q+1,q,$),C+=3}d.addGroup(x,C,R===!0?1:2),x+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ms=class n extends yi{constructor(t=1,e=1,i=32,r=1,o=!1,l=0,u=Math.PI*2){super(0,t,e,i,r,o,l,u),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:u}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Sa=new ct,ba=new ct,sh=new ct,wa=new mi,Ss=class extends qe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let r=Math.pow(10,4),o=Math.cos(hs*e),l=t.getIndex(),u=t.getAttribute("position"),f=l?l.count:u.count,d=[0,0,0],_=["a","b","c"],v=new Array(3),g={},b=[];for(let w=0;w<f;w+=3){l?(d[0]=l.getX(w),d[1]=l.getX(w+1),d[2]=l.getX(w+2)):(d[0]=w,d[1]=w+1,d[2]=w+2);let{a:T,b:S,c:x}=wa;if(T.fromBufferAttribute(u,d[0]),S.fromBufferAttribute(u,d[1]),x.fromBufferAttribute(u,d[2]),wa.getNormal(sh),v[0]=`${Math.round(T.x*r)},${Math.round(T.y*r)},${Math.round(T.z*r)}`,v[1]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,v[2]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let O=0;O<3;O++){let H=(O+1)%3,R=v[O],U=v[H],B=wa[_[O]],W=wa[_[H]],C=`${R}_${U}`,k=`${U}_${R}`;k in g&&g[k]?(sh.dot(g[k].normal)<=o&&(b.push(B.x,B.y,B.z),b.push(W.x,W.y,W.z)),g[k]=null):C in g||(g[C]={index0:d[O],index1:d[H],normal:sh.clone()})}}for(let w in g)if(g[w]){let{index0:T,index1:S}=g[w];Sa.fromBufferAttribute(u,T),ba.fromBufferAttribute(u,S),b.push(Sa.x,Sa.y,Sa.z),b.push(ba.x,ba.y,ba.z)}this.setAttribute("position",new Xe(b,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},_o=class n extends qe{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let o=t/2,l=e/2,u=Math.floor(i),f=Math.floor(r),d=u+1,_=f+1,v=t/u,g=e/f,b=[],w=[],T=[],S=[];for(let x=0;x<_;x++){let O=x*g-l;for(let H=0;H<d;H++){let R=H*v-o;w.push(R,-O,0),T.push(0,0,1),S.push(H/u),S.push(1-x/f)}}for(let x=0;x<f;x++)for(let O=0;O<u;O++){let H=O+d*x,R=O+d*(x+1),U=O+1+d*(x+1),B=O+1+d*x;b.push(H,R,B),b.push(R,U,B)}this.setIndex(b),this.setAttribute("position",new Xe(w,3)),this.setAttribute("normal",new Xe(T,3)),this.setAttribute("uv",new Xe(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},vo=class n extends qe{constructor(t=.5,e=1,i=32,r=1,o=0,l=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:o,thetaLength:l},i=Math.max(3,i),r=Math.max(1,r);let u=[],f=[],d=[],_=[],v=t,g=(e-t)/r,b=new ct,w=new le;for(let T=0;T<=r;T++){for(let S=0;S<=i;S++){let x=o+S/i*l;b.x=v*Math.cos(x),b.y=v*Math.sin(x),f.push(b.x,b.y,b.z),d.push(0,0,1),w.x=(b.x/e+1)/2,w.y=(b.y/e+1)/2,_.push(w.x,w.y)}v+=g}for(let T=0;T<r;T++){let S=T*(i+1);for(let x=0;x<i;x++){let O=x+S,H=O,R=O+i+1,U=O+i+2,B=O+1;u.push(H,R,B),u.push(R,U,B)}}this.setIndex(u),this.setAttribute("position",new Xe(f,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},rr=class n extends qe{constructor(t=1,e=32,i=16,r=0,o=Math.PI*2,l=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:o,thetaStart:l,thetaLength:u},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let f=Math.min(l+u,Math.PI),d=0,_=[],v=new ct,g=new ct,b=[],w=[],T=[],S=[];for(let x=0;x<=i;x++){let O=[],H=x/i,R=l+H*u,U=t*Math.cos(R),B=Math.sqrt(t*t-U*U),W=0;x===0&&l===0?W=.5/e:x===i&&f===Math.PI&&(W=-.5/e);for(let C=0;C<=e;C++){let k=C/e,X=r+k*o;v.x=-B*Math.cos(X),v.y=U,v.z=B*Math.sin(X),w.push(v.x,v.y,v.z),g.copy(v).normalize(),T.push(g.x,g.y,g.z),S.push(k+W,1-H),O.push(d++)}_.push(O)}for(let x=0;x<i;x++)for(let O=0;O<e;O++){let H=_[x][O+1],R=_[x][O],U=_[x+1][O],B=_[x+1][O+1];(x!==0||l>0)&&b.push(H,R,B),(x!==i-1||f<Math.PI)&&b.push(R,U,B)}this.setIndex(b),this.setAttribute("position",new Xe(w,3)),this.setAttribute("normal",new Xe(T,3)),this.setAttribute("uv",new Xe(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};Sd={clone:Rr,merge:Mn},g0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vn=class extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g0,this.fragmentShader=_0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rr(t.uniforms),this.uniformsGroups=m0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let l=this.uniforms[r].value;l&&l.isTexture?e.uniforms[r]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[r]={type:"m4",value:l.toArray()}:e.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new ye().setHex(r.value);break;case"v2":this.uniforms[i].value=new le().fromArray(r.value);break;case"v3":this.uniforms[i].value=new ct().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Je().fromArray(r.value);break;case"m3":this.uniforms[i].value=new xe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ze().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},qa=class extends Vn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Hn=class extends vi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Za=class extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ja=class extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},yo=class extends si{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};sr=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],o=e[i-1];n:{t:{let l;e:{i:if(!(t<r)){for(let u=i+2;;){if(r===void 0){if(t<o)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(o=r,r=e[++i],t<r)break t}l=e.length;break e}if(!(t>=o)){let u=e[1];t<u&&(i=2,o=u);for(let f=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(r=o,o=e[--i-1],t>=o)break t}l=i,i=0;break e}break n}for(;i<l;){let u=i+l>>>1;t<e[u]?l=u:i=u+1}if(r=e[i],o=e[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=t*r;for(let l=0;l!==r;++l)e[l]=i[o+l];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ja=class extends sr{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hh,endingEnd:hh}}intervalChanged_(t,e,i){let r=this.parameterPositions,o=t-2,l=t+1,u=r[o],f=r[l];if(u===void 0)switch(this.getSettings_().endingStart){case uh:o=t,u=2*e-i;break;case fh:o=r.length-2,u=e+r[o]-r[o+1];break;default:o=t,u=i}if(f===void 0)switch(this.getSettings_().endingEnd){case uh:l=t,f=2*i-e;break;case fh:l=1,f=i+r[1]-r[0];break;default:l=t-1,f=e}let d=(i-e)*.5,_=this.valueSize;this._weightPrev=d/(e-u),this._weightNext=d/(f-i),this._offsetPrev=o*_,this._offsetNext=l*_}interpolate_(t,e,i,r){let o=this.resultBuffer,l=this.sampleValues,u=this.valueSize,f=t*u,d=f-u,_=this._offsetPrev,v=this._offsetNext,g=this._weightPrev,b=this._weightNext,w=(i-e)/(r-e),T=w*w,S=T*w,x=-g*S+2*g*T-g*w,O=(1+g)*S+(-1.5-2*g)*T+(-.5+g)*w+1,H=(-1-b)*S+(1.5+b)*T+.5*w,R=b*S-b*T;for(let U=0;U!==u;++U)o[U]=x*l[_+U]+O*l[d+U]+H*l[f+U]+R*l[v+U];return o}},Ka=class extends sr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let o=this.resultBuffer,l=this.sampleValues,u=this.valueSize,f=t*u,d=f-u,_=(i-e)/(r-e),v=1-_;for(let g=0;g!==u;++g)o[g]=l[d+g]*v+l[f+g]*_;return o}},Qa=class extends sr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},tl=class extends sr{interpolate_(t,e,i,r){let o=this.resultBuffer,l=this.sampleValues,u=this.valueSize,f=t*u,d=f-u,_=this.inTangents,v=this.outTangents;if(!_||!v){let w=(i-e)/(r-e),T=1-w;for(let S=0;S!==u;++S)o[S]=l[d+S]*T+l[f+S]*w;return o}let g=u*2,b=t-1;for(let w=0;w!==u;++w){let T=l[d+w],S=l[f+w],x=b*g+w*2,O=v[x],H=v[x+1],R=t*g+w*2,U=_[R],B=_[R+1],W=y0(i,e,O,U,r);o[w]=bd(W,T,H,B,S)}return o}};Gn=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=as(e,this.TimeBufferType),this.values=as(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:as(t.times,Array),values:as(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r),oh(t.settings)&&(i.settings={inTangents:as(t.settings.inTangents,Array),outTangents:as(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new tl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case no:e=this.InterpolantFactoryMethodDiscrete;break;case ka:e=this.InterpolantFactoryMethodLinear;break;case Ca:e=this.InterpolantFactoryMethodSmooth;break;case ch:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return de("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return no;case this.InterpolantFactoryMethodLinear:return ka;case this.InterpolantFactoryMethodSmooth:return Ca;case this.InterpolantFactoryMethodBezier:return ch}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t;oh(this.settings)&&(Pf(this.settings.inTangents,t),Pf(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,r=i.length,o=0,l=r-1;for(;o!==r&&i[o]<t;)++o;for(;l!==-1&&i[l]>e;)--l;if(++l,o!==0||l!==r){o>=l&&(l=Math.max(l,1),o=l-1);let u=this.getValueSize();this.times=i.slice(o,l),this.values=this.values.slice(o*u,l*u)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ge("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,o=i.length;o===0&&(ge("KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let u=0;u!==o;u++){let f=i[u];if(typeof f=="number"&&isNaN(f)){ge("KeyframeTrack: Time is not a valid number.",this,u,f),t=!1;break}if(l!==null&&l>f){ge("KeyframeTrack: Out of order keys.",this,u,f,l),t=!1;break}l=f}if(r!==void 0&&Dg(r))for(let u=0,f=r.length;u!==f;++u){let d=r[u];if(isNaN(d)){ge("KeyframeTrack: Value is not a valid number.",this,u,d),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ca,o=t.length-1,l=1;for(let u=1;u<o;++u){let f=!1,d=t[u],_=t[u+1];if(d!==_&&(u!==1||d!==t[0]))if(r)f=!0;else{let v=u*i,g=v-i,b=v+i;for(let w=0;w!==i;++w){let T=e[v+w];if(T!==e[g+w]||T!==e[b+w]){f=!0;break}}}if(f){if(u!==l){t[l]=t[u];let v=u*i,g=l*i;for(let b=0;b!==i;++b)e[g+b]=e[v+b]}++l}}if(o>0){t[l]=t[o];for(let u=o*i,f=l*i,d=0;d!==i;++d)e[f+d]=e[u+d];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,oh(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=ka;or=class extends Gn{constructor(t,e,i){super(t,e,i)}};or.prototype.ValueTypeName="bool";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=no;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;el=class extends Gn{constructor(t,e,i,r){super(t,e,i,r)}};el.prototype.ValueTypeName="color";nl=class extends Gn{constructor(t,e,i,r){super(t,e,i,r)}};nl.prototype.ValueTypeName="number";il=class extends sr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let o=this.resultBuffer,l=this.sampleValues,u=this.valueSize,f=(i-e)/(r-e),d=t*u;for(let _=d+u;d!==_;d+=4)kn.slerpFlat(o,0,l,d-u,l,d,f);return o}},xo=class extends Gn{constructor(t,e,i,r){super(t,e,i,r)}InterpolantFactoryMethodLinear(t){return new il(this.times,this.values,this.getValueSize(),t)}};xo.prototype.ValueTypeName="quaternion";xo.prototype.InterpolantFactoryMethodSmooth=void 0;ar=class extends Gn{constructor(t,e,i){super(t,e,i)}};ar.prototype.ValueTypeName="string";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=no;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;rl=class extends Gn{constructor(t,e,i,r){super(t,e,i,r)}};rl.prototype.ValueTypeName="vector";sl=class{constructor(t,e,i){let r=this,o=!1,l=0,u=0,f,d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(_){u++,o===!1&&r.onStart!==void 0&&r.onStart(_,l,u),o=!0},this.itemEnd=function(_){l++,r.onProgress!==void 0&&r.onProgress(_,l,u),l===u&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(_){r.onError!==void 0&&r.onError(_)},this.resolveURL=function(_){return _=_.normalize("NFC"),f?f(_):_},this.setURLModifier=function(_){return f=_,this},this.addHandler=function(_,v){return d.push(_,v),this},this.removeHandler=function(_){let v=d.indexOf(_);return v!==-1&&d.splice(v,2),this},this.getHandler=function(_){for(let v=0,g=d.length;v<g;v+=2){let b=d[v],w=d[v+1];if(b.global&&(b.lastIndex=0),b.test(_))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wd=new sl,ol=class{constructor(t){this.manager=t!==void 0?t:wd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,o){i.load(t,r,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ol.DEFAULT_MATERIAL_NAME="__DEFAULT";Mo=class extends rn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},So=class extends Mo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ah=new ze,If=new ct,Rf=new ct,al=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xs,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;If.setFromMatrixPosition(t.matrixWorld),e.position.copy(If),Rf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){ah.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ah,t.coordinateSystem,t.reversedDepth);let o=this._frameExtents,l=r?r.z/o.x:1,u=r?r.w/o.y:1,f=r?r.x/o.x:0,d=r?r.y/o.y:0;t.coordinateSystem===ds||t.reversedDepth?e.set(.5*l,0,0,.5*l+f,0,.5*u,0,.5*u+d,0,0,1,0,0,0,0,1):e.set(.5*l,0,0,.5*l+f,0,.5*u,0,.5*u+d,0,0,.5,.5,0,0,0,1),e.multiply(ah)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ea=new ct,Ta=new kn,pi=new ct,bo=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ea,Ta,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,Ta,pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ea,Ta,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,Ta,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qi=new ct,Lf=new le,Nf=new le,yn=class extends bo{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z)}getViewSize(t,e){return this.getViewBounds(t,Lf,Nf),e.subVectors(Nf,Lf)}setViewOffset(t,e,i,r,o,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(hs*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,o=-.5*r,l=this.view;if(this.view!==null&&this.view.enabled){let f=l.fullWidth,d=l.fullHeight;o+=l.offsetX*r/f,e-=l.offsetY*i/d,r*=l.width/f,i*=l.height/d}let u=this.filmOffset;u!==0&&(o+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},bs=class extends bo{constructor(t=-1,e=1,i=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=i-t,l=i+t,u=r+e,f=r-e;if(this.view!==null&&this.view.enabled){let d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,l=o+d*this.view.width,u-=_*this.view.offsetY,f=u-_*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},dh=class extends al{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ws=class extends Mo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new dh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},ls=-90,cs=1,ll=class extends rn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new yn(ls,cs,t,e);r.layers=this.layers,this.add(r);let o=new yn(ls,cs,t,e);o.layers=this.layers,this.add(o);let l=new yn(ls,cs,t,e);l.layers=this.layers,this.add(l);let u=new yn(ls,cs,t,e);u.layers=this.layers,this.add(u);let f=new yn(ls,cs,t,e);f.layers=this.layers,this.add(f);let d=new yn(ls,cs,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,o,l,u,f]=e;for(let d of e)this.remove(d);if(t===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(t===ds)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,l,u,f,d,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;let T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,1,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,2,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(i,3,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(i,4,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),i.texture.generateMipmaps=T,t.setRenderTarget(i,5,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,_),t.setRenderTarget(v,g,b),t.xr.enabled=w,i.texture.needsPMREMUpdate=!0}},cl=class extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Xh="\\[\\]\\.:\\/",x0=new RegExp("["+Xh+"]","g"),Wh="[^"+Xh+"]",M0="[^"+Xh.replace("\\.","")+"]",S0=/((?:WC+[\/:])*)/.source.replace("WC",Wh),b0=/(WCOD+)?/.source.replace("WCOD",M0),w0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wh),E0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wh),T0=new RegExp("^"+S0+b0+w0+E0+"$"),A0=["material","materials","bones","map"],ph=class{constructor(t,e,i){let r=i||$e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},$e=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(x0,"")}static parseTrackName(t){let e=T0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=i.nodeName.substring(r+1);A0.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(o){for(let l=0;l<o.length;l++){let u=o[l];if(u.name===e||u.uuid===e)return u;let f=i(u.children);if(f)return f}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,o=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){de("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=e.objectIndex;switch(i){case"materials":if(!t.material){ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let _=0;_<t.length;_++)if(t[_].name===d){d=_;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(d!==void 0){if(t[d]===void 0){ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}let l=t[r];if(l===void 0){let d=e.nodeName;ge("PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",t);return}let u=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?u=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}f=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=o}else l.fromArray!==void 0&&l.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(f=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=r;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$e.Composite=ph;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];gS=new Float32Array(1),Df=new ze,wo=class{constructor(t,e,i=0,r=1/0){this.ray=new er(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new _s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ge("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Df.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Df),this}intersectObject(t,e=!0,i=[]){return mh(t,this,i,e),i.sort(Of),i}intersectObjects(t,e=!0,i=[]){for(let r=0,o=t.length;r<o;r++)mh(t[r],this,i,e);return i.sort(Of),i}};Es=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},gh=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){let o=this.elements;return o[0]=t,o[2]=e,o[1]=i,o[3]=r,this}},Ff=new ct,Eo=class extends rn{constructor(t=new ct(0,0,1),e=new ct(0,0,0),i=1,r=16776960,o=i*.2,l=o*.2){super(),this.type="ArrowHelper",Aa===void 0&&(Aa=new qe,Aa.setAttribute("position",new Xe([0,0,0,0,1,0],3)),lh=new Ms(.5,1,5,1),lh.translate(0,-.5,0)),this.position.copy(e),this.line=new Tr(Aa,new si({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new De(lh,new zn({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,o,l)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Ff.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Ff,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},To=class extends ri{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function Yd(){let n=null,t=!1,e=null,i=null;function r(o,l){i=n.requestAnimationFrame(r),e(o,l)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function I0(n){let t=new WeakMap;function e(u,f){let d=u.array,_=u.usage,v=d.byteLength,g=n.createBuffer();n.bindBuffer(f,g),n.bufferData(f,d,_),u.onUploadCallback();let b;if(d instanceof Float32Array)b=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)b=n.HALF_FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?b=n.HALF_FLOAT:b=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)b=n.SHORT;else if(d instanceof Uint32Array)b=n.UNSIGNED_INT;else if(d instanceof Int32Array)b=n.INT;else if(d instanceof Int8Array)b=n.BYTE;else if(d instanceof Uint8Array)b=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)b=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:b,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:v}}function i(u,f,d){let _=f.array,v=f.updateRanges;if(n.bindBuffer(d,u),v.length===0)n.bufferSubData(d,0,_);else{v.sort((b,w)=>b.start-w.start);let g=0;for(let b=1;b<v.length;b++){let w=v[g],T=v[b];T.start<=w.start+w.count+1?w.count=Math.max(w.count,T.start+T.count-w.start):(++g,v[g]=T)}v.length=g+1;for(let b=0,w=v.length;b<w;b++){let T=v[b];n.bufferSubData(d,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);let f=t.get(u);f&&(n.deleteBuffer(f.buffer),t.delete(u))}function l(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){let _=t.get(u);(!_||_.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}let d=t.get(u);if(d===void 0)t.set(u,e(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,f),d.version=u.version}}return{get:r,remove:o,update:l}}function fy(n,t,e,i,r,o){let l=new ye(0),u=r===!0?0:1,f,d,_=null,v=0,g=null;function b(O){let H=O.isScene===!0?O.background:null;if(H&&H.isTexture){let R=O.backgroundBlurriness>0;H=t.get(H,R)}return H}function w(O){let H=!1,R=b(O);R===null?S(l,u):R&&R.isColor&&(S(R,1),H=!0);let U=n.xr.getEnvironmentBlendMode();U==="additive"?e.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(n.autoClear||H)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function T(O,H){let R=b(H);R&&(R.isCubeTexture||R.mapping===Co)?(d===void 0&&(d=new De(new ir(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Rr(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(U,B,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=R,d.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(uy.makeRotationFromEuler(H.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply($d),d.material.toneMapped=Ae.getTransfer(R.colorSpace)!==Ue,(_!==R||v!==R.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,_=R,v=R.version,g=n.toneMapping),d.layers.enableAll(),O.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(f===void 0&&(f=new De(new _o(2,2),new Vn({name:"BackgroundMaterial",uniforms:Rr(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=R,f.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,f.material.toneMapped=Ae.getTransfer(R.colorSpace)!==Ue,R.matrixAutoUpdate===!0&&R.updateMatrix(),f.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||v!==R.version||g!==n.toneMapping)&&(f.material.needsUpdate=!0,_=R,v=R.version,g=n.toneMapping),f.layers.enableAll(),O.unshift(f,f.geometry,f.material,0,0,null))}function S(O,H){O.getRGB(Kl,Gh(n)),e.buffers.color.setClear(Kl.r,Kl.g,Kl.b,H,o)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return l},setClearColor:function(O,H=1){l.set(O),u=H,S(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(O){u=O,S(l,u)},render:w,addToRenderList:T,dispose:x}}function dy(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=g(null),o=r,l=!1;function u(et,st,$,q,Z){let lt=!1,dt=v(et,q,$,st);o!==dt&&(o=dt,d(o.object)),lt=b(et,q,$,Z),lt&&w(et,q,$,Z),Z!==null&&t.update(Z,n.ELEMENT_ARRAY_BUFFER),(lt||l)&&(l=!1,R(et,st,$,q),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function f(){return n.createVertexArray()}function d(et){return n.bindVertexArray(et)}function _(et){return n.deleteVertexArray(et)}function v(et,st,$,q){let Z=q.wireframe===!0,lt=i[st.id];lt===void 0&&(lt={},i[st.id]=lt);let dt=et.isInstancedMesh===!0?et.id:0,Mt=lt[dt];Mt===void 0&&(Mt={},lt[dt]=Mt);let pt=Mt[$.id];pt===void 0&&(pt={},Mt[$.id]=pt);let wt=pt[Z];return wt===void 0&&(wt=g(f()),pt[Z]=wt),wt}function g(et){let st=[],$=[],q=[];for(let Z=0;Z<e;Z++)st[Z]=0,$[Z]=0,q[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:st,enabledAttributes:$,attributeDivisors:q,object:et,attributes:{},index:null}}function b(et,st,$,q){let Z=o.attributes,lt=st.attributes,dt=0,Mt=$.getAttributes();for(let pt in Mt)if(Mt[pt].location>=0){let J=Z[pt],At=lt[pt];if(At===void 0&&(pt==="instanceMatrix"&&et.instanceMatrix&&(At=et.instanceMatrix),pt==="instanceColor"&&et.instanceColor&&(At=et.instanceColor)),J===void 0||J.attribute!==At||At&&J.data!==At.data)return!0;dt++}return o.attributesNum!==dt||o.index!==q}function w(et,st,$,q){let Z={},lt=st.attributes,dt=0,Mt=$.getAttributes();for(let pt in Mt)if(Mt[pt].location>=0){let J=lt[pt];J===void 0&&(pt==="instanceMatrix"&&et.instanceMatrix&&(J=et.instanceMatrix),pt==="instanceColor"&&et.instanceColor&&(J=et.instanceColor));let At={};At.attribute=J,J&&J.data&&(At.data=J.data),Z[pt]=At,dt++}o.attributes=Z,o.attributesNum=dt,o.index=q}function T(){let et=o.newAttributes;for(let st=0,$=et.length;st<$;st++)et[st]=0}function S(et){x(et,0)}function x(et,st){let $=o.newAttributes,q=o.enabledAttributes,Z=o.attributeDivisors;$[et]=1,q[et]===0&&(n.enableVertexAttribArray(et),q[et]=1),Z[et]!==st&&(n.vertexAttribDivisor(et,st),Z[et]=st)}function O(){let et=o.newAttributes,st=o.enabledAttributes;for(let $=0,q=st.length;$<q;$++)st[$]!==et[$]&&(n.disableVertexAttribArray($),st[$]=0)}function H(et,st,$,q,Z,lt,dt){dt===!0?n.vertexAttribIPointer(et,st,$,Z,lt):n.vertexAttribPointer(et,st,$,q,Z,lt)}function R(et,st,$,q){T();let Z=q.attributes,lt=$.getAttributes(),dt=st.defaultAttributeValues;for(let Mt in lt){let pt=lt[Mt];if(pt.location>=0){let wt=Z[Mt];if(wt===void 0&&(Mt==="instanceMatrix"&&et.instanceMatrix&&(wt=et.instanceMatrix),Mt==="instanceColor"&&et.instanceColor&&(wt=et.instanceColor)),wt!==void 0){let J=wt.normalized,At=wt.itemSize,Lt=t.get(wt);if(Lt===void 0)continue;let Ht=Lt.buffer,Bt=Lt.type,jt=Lt.bytesPerElement,yt=Bt===n.INT||Bt===n.UNSIGNED_INT||wt.gpuType===dl;if(wt.isInterleavedBufferAttribute){let z=wt.data,Xt=z.stride,te=wt.offset;if(z.isInstancedInterleavedBuffer){for(let kt=0;kt<pt.locationSize;kt++)x(pt.location+kt,z.meshPerAttribute);et.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let kt=0;kt<pt.locationSize;kt++)S(pt.location+kt);n.bindBuffer(n.ARRAY_BUFFER,Ht);for(let kt=0;kt<pt.locationSize;kt++)H(pt.location+kt,At/pt.locationSize,Bt,J,Xt*jt,(te+At/pt.locationSize*kt)*jt,yt)}else{if(wt.isInstancedBufferAttribute){for(let z=0;z<pt.locationSize;z++)x(pt.location+z,wt.meshPerAttribute);et.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let z=0;z<pt.locationSize;z++)S(pt.location+z);n.bindBuffer(n.ARRAY_BUFFER,Ht);for(let z=0;z<pt.locationSize;z++)H(pt.location+z,At/pt.locationSize,Bt,J,At*jt,At/pt.locationSize*z*jt,yt)}}else if(dt!==void 0){let J=dt[Mt];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(pt.location,J);break;case 3:n.vertexAttrib3fv(pt.location,J);break;case 4:n.vertexAttrib4fv(pt.location,J);break;default:n.vertexAttrib1fv(pt.location,J)}}}}O()}function U(){k();for(let et in i){let st=i[et];for(let $ in st){let q=st[$];for(let Z in q){let lt=q[Z];for(let dt in lt)_(lt[dt].object),delete lt[dt];delete q[Z]}}delete i[et]}}function B(et){if(i[et.id]===void 0)return;let st=i[et.id];for(let $ in st){let q=st[$];for(let Z in q){let lt=q[Z];for(let dt in lt)_(lt[dt].object),delete lt[dt];delete q[Z]}}delete i[et.id]}function W(et){for(let st in i){let $=i[st];for(let q in $){let Z=$[q];if(Z[et.id]===void 0)continue;let lt=Z[et.id];for(let dt in lt)_(lt[dt].object),delete lt[dt];delete Z[et.id]}}}function C(et){for(let st in i){let $=i[st],q=et.isInstancedMesh===!0?et.id:0,Z=$[q];if(Z!==void 0){for(let lt in Z){let dt=Z[lt];for(let Mt in dt)_(dt[Mt].object),delete dt[Mt];delete Z[lt]}delete $[q],Object.keys($).length===0&&delete i[st]}}}function k(){X(),l=!0,o!==r&&(o=r,d(o.object))}function X(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:u,reset:k,resetDefaultState:X,dispose:U,releaseStatesOfGeometry:B,releaseStatesOfObject:C,releaseStatesOfProgram:W,initAttributes:T,enableAttribute:S,disableUnusedAttributes:O}}function py(n,t,e){let i;function r(f){i=f}function o(f,d){n.drawArrays(i,f,d),e.update(d,i,1)}function l(f,d,_){_!==0&&(n.drawArraysInstanced(i,f,d,_),e.update(d,i,_))}function u(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,d,0,_);let g=0;for(let b=0;b<_;b++)g+=d[b];e.update(g,i,1)}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function my(n,t,e,i){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let W=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(W.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(W){return!(W!==Jn&&i.convert(W)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(W){let C=W===ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(W!==In&&W!==li&&!C&&i.convert(W)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(W){if(W==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";W="mediump"}return W==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp",_=f(d);_!==d&&(de("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);let v=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&g===!1&&de("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let b=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),O=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),H=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=n.getParameter(n.MAX_SAMPLES),B=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:b,maxVertexTextures:w,maxTextureSize:T,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:O,maxVaryings:H,maxFragmentUniforms:R,maxSamples:U,samples:B}}function gy(n){let t=this,e=null,i=0,r=!1,o=!1,l=new Bn,u=new xe,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){let b=v.length!==0||g||i!==0||r;return r=g,i=v.length,b},this.beginShadows=function(){o=!0,_(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(v,g){e=_(v,g,0)},this.setState=function(v,g,b){let w=v.clippingPlanes,T=v.clipIntersection,S=v.clipShadows,x=n.get(v);if(!r||w===null||w.length===0||o&&!S)o?_(null):d();else{let O=o?0:i,H=O*4,R=x.clippingState||null;f.value=R,R=_(w,g,H,b);for(let U=0;U!==H;++U)R[U]=e[U];x.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function d(){f.value!==e&&(f.value=e,f.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function _(v,g,b,w){let T=v!==null?v.length:0,S=null;if(T!==0){if(S=f.value,w!==!0||S===null){let x=b+T*4,O=g.matrixWorldInverse;u.getNormalMatrix(O),(S===null||S.length<x)&&(S=new Float32Array(x));for(let H=0,R=b;H!==T;++H,R+=4)l.copy(v[H]).applyMatrix4(O,u),l.normal.toArray(S,R),S[R+3]=l.constant}f.value=S,f.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,S}}function My(n){let t=[],e=[],i=n,r=n-Rs+1+_y;for(let o=0;o<r;o++){let l=Math.pow(2,i);t.push(l);let u=1/(l-2),f=-u,d=1+u,_=[f,f,d,f,d,d,f,f,d,d,f,d],v=6,g=6,b=3,w=new Float32Array(b*g*v),T=new Float32Array(b*g*v);for(let x=0;x<v;x++){let O=x%3*2/3-1,H=x>2?0:-1,R=[O,H,0,O+2/3,H,0,O+2/3,H+1,0,O,H,0,O+2/3,H+1,0,O,H+1,0];w.set(R,b*g*x);for(let U=0;U<g;U++){let B=_[U*2]*2-1,W=_[U*2+1]*2-1;x===0?Lr.set(1,W,B):x===1?Lr.set(-B,1,-W):x===2?Lr.set(-B,W,1):x===3?Lr.set(-1,W,-B):x===4?Lr.set(-B,-1,W):Lr.set(B,W,-1),Lr.toArray(T,(x*g+U)*b)}}let S=new qe;S.setAttribute("position",new Ge(w,b)),S.setAttribute("outputDirection",new Ge(T,b)),e.push(new De(S,null)),i>Rs&&i--}return{lodMeshes:e,sizeLods:t}}function Td(n,t,e){let i=new Pn(n,t,e);return i.texture.mapping=Co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Sy(n,t,e){return new Vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ic(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function by(n,t,e){return new Vn({name:"SphericalGaussianBlur",defines:{SAMPLES:vy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ic(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Ad(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Cd(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function ic(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function wy(n){let t=new WeakMap,e=new WeakMap,i=null;function r(g,b=!1){return g==null?null:b?l(g):o(g)}function o(g){if(g&&g.isTexture){let b=g.mapping;if(b===hl||b===ul)if(t.has(g)){let w=t.get(g).texture;return u(w,g.mapping)}else{let w=g.image;if(w&&w.height>0){let T=new ec(w.height);return T.fromEquirectangularTexture(n,g),t.set(g,T),g.addEventListener("dispose",d),u(T.texture,g.mapping)}else return null}}return g}function l(g){if(g&&g.isTexture){let b=g.mapping,w=b===hl||b===ul,T=b===ur||b===Pr;if(w||T){let S=e.get(g),x=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return i===null&&(i=new tc(n)),S=w?i.fromEquirectangular(g,S):i.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,e.set(g,S),S.texture;if(S!==void 0)return S.texture;{let O=g.image;return w&&O&&O.height>0||T&&O&&f(O)?(i===null&&(i=new tc(n)),S=w?i.fromEquirectangular(g):i.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,e.set(g,S),g.addEventListener("dispose",_),S.texture):null}}}return g}function u(g,b){return b===hl?g.mapping=ur:b===ul&&(g.mapping=Pr),g}function f(g){let b=0,w=6;for(let T=0;T<w;T++)g[T]!==void 0&&b++;return b===w}function d(g){let b=g.target;b.removeEventListener("dispose",d);let w=t.get(b);w!==void 0&&(t.delete(b),w.dispose())}function _(g){let b=g.target;b.removeEventListener("dispose",_);let w=e.get(b);w!==void 0&&(e.delete(b),w.dispose())}function v(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:v}}function Ey(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let r=e(i);return r===null&&wr("WebGLRenderer: "+i+" extension not supported."),r}}}function Ty(n,t,e,i){let r={},o=new WeakMap;function l(v){let g=v.target;g.index!==null&&t.remove(g.index);for(let w in g.attributes)t.remove(g.attributes[w]);g.removeEventListener("dispose",l),delete r[g.id];let b=o.get(g);b&&(t.remove(b),o.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function u(v,g){return r[g.id]===!0||(g.addEventListener("dispose",l),r[g.id]=!0,e.memory.geometries++),g}function f(v){let g=v.attributes;for(let b in g)t.update(g[b],n.ARRAY_BUFFER)}function d(v){let g=[],b=v.index,w=v.attributes.position,T=0;if(w===void 0)return;if(b!==null){let O=b.array;T=b.version;for(let H=0,R=O.length;H<R;H+=3){let U=O[H+0],B=O[H+1],W=O[H+2];g.push(U,B,B,W,W,U)}}else{let O=w.array;T=w.version;for(let H=0,R=O.length/3-1;H<R;H+=3){let U=H+0,B=H+1,W=H+2;g.push(U,B,B,W,W,U)}}let S=new(w.count>=65535?ho:co)(g,1);S.version=T;let x=o.get(v);x&&t.remove(x),o.set(v,S)}function _(v){let g=o.get(v);if(g){let b=v.index;b!==null&&g.version<b.version&&d(v)}else d(v);return o.get(v)}return{get:u,update:f,getWireframeAttribute:_}}function Ay(n,t,e){let i;function r(v){i=v}let o,l;function u(v){o=v.type,l=v.bytesPerElement}function f(v,g){n.drawElements(i,g,o,v*l),e.update(g,i,1)}function d(v,g,b){b!==0&&(n.drawElementsInstanced(i,g,o,v*l,b),e.update(g,i,b))}function _(v,g,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,o,v,0,b);let T=0;for(let S=0;S<b;S++)T+=g[S];e.update(T,i,1)}this.setMode=r,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=_}function Cy(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,u){switch(e.calls++,l){case n.TRIANGLES:e.triangles+=u*(o/3);break;case n.LINES:e.lines+=u*(o/2);break;case n.LINE_STRIP:e.lines+=u*(o-1);break;case n.LINE_LOOP:e.lines+=u*o;break;case n.POINTS:e.points+=u*o;break;default:ge("WebGLInfo: Unknown draw mode:",l);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Py(n,t,e){let i=new WeakMap,r=new Je;function o(l,u,f){let d=l.morphTargetInfluences,_=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=_!==void 0?_.length:0,g=i.get(u);if(g===void 0||g.count!==v){let k=function(){W.dispose(),i.delete(u),u.removeEventListener("dispose",k)};g!==void 0&&g.texture.dispose();let b=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],O=u.morphAttributes.color||[],H=0;b===!0&&(H=1),w===!0&&(H=2),T===!0&&(H=3);let R=u.attributes.position.count*H,U=1;R>t.maxTextureSize&&(U=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);let B=new Float32Array(R*U*4*v),W=new ao(B,R,U,v);W.type=li,W.needsUpdate=!0;let C=H*4;for(let X=0;X<v;X++){let et=S[X],st=x[X],$=O[X],q=R*U*4*X;for(let Z=0;Z<et.count;Z++){let lt=Z*C;b===!0&&(r.fromBufferAttribute(et,Z),B[q+lt+0]=r.x,B[q+lt+1]=r.y,B[q+lt+2]=r.z,B[q+lt+3]=0),w===!0&&(r.fromBufferAttribute(st,Z),B[q+lt+4]=r.x,B[q+lt+5]=r.y,B[q+lt+6]=r.z,B[q+lt+7]=0),T===!0&&(r.fromBufferAttribute($,Z),B[q+lt+8]=r.x,B[q+lt+9]=r.y,B[q+lt+10]=r.z,B[q+lt+11]=$.itemSize===4?r.w:1)}}g={count:v,texture:W,size:new le(R,U)},i.set(u,g),u.addEventListener("dispose",k)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",l.morphTexture,e);else{let b=0;for(let T=0;T<d.length;T++)b+=d[T];let w=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(n,"morphTargetBaseInfluence",w),f.getUniforms().setValue(n,"morphTargetInfluences",d)}f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:o}}function Iy(n,t,e,i,r){let o=new WeakMap;function l(d){let _=r.render.frame,v=d.geometry,g=t.get(d,v);if(o.get(g)!==_&&(t.update(g),o.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),o.get(d)!==_&&(e.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,_))),d.isSkinnedMesh){let b=d.skeleton;o.get(b)!==_&&(b.update(),o.set(b,_))}return g}function u(){o=new WeakMap}function f(d){let _=d.target;_.removeEventListener("dispose",f),i.releaseStatesOfObject(_),e.remove(_.instanceMatrix),_.instanceColor!==null&&e.remove(_.instanceColor)}return{update:l,dispose:u}}function Ly(n,t,e,i,r,o){let l=new Pn(t,e,{type:n,depthBuffer:r,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),u=null,f=null,d=new qe;d.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Xe([0,2,0,0,2,0],2));let _=new qa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new De(d,_),g=new bs(-1,1,1,-1,0,1),b=null,w=null,T=!1,S,x=null,O=[],H=!1;this.setSize=function(R,U){l.setSize(R,U),u!==null&&u.setSize(R,U),f!==null&&f.setSize(R,U);for(let B=0;B<O.length;B++){let W=O[B];W.setSize&&W.setSize(R,U)}},this.setEffects=function(R){O=R,H=O.length>0&&O[0].isRenderPass===!0;let U=l.width,B=l.height;O.length>0&&u===null&&(u=new Pn(U,B,{type:ci,depthBuffer:!1,stencilBuffer:!1}),f=new Pn(U,B,{type:ci,depthBuffer:!1,stencilBuffer:!1}));for(let W=0;W<O.length;W++){let C=O[W];C.setSize&&C.setSize(U,B)}},this.begin=function(R,U){if(T||R.toneMapping===oi&&O.length===0)return!1;if(x=U,U!==null){let B=U.width,W=U.height;(l.width!==B||l.height!==W)&&this.setSize(B,W)}return H===!1&&R.setRenderTarget(l),S=R.toneMapping,R.toneMapping=oi,!0},this.hasRenderPass=function(){return H},this.end=function(R,U){R.toneMapping=S,T=!0;let B=l,W=u;for(let C=0;C<O.length;C++){let k=O[C];k.enabled!==!1&&(k.render(R,W,B,U),k.needsSwap!==!1&&(B=W,W=W===u?f:u))}if(b!==R.outputColorSpace||w!==R.toneMapping){b=R.outputColorSpace,w=R.toneMapping,_.defines={},Ae.getTransfer(b)===Ue&&(_.defines.SRGB_TRANSFER="");let C=Ry[w];C&&(_.defines[C]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=B.texture,R.setRenderTarget(x),R.render(v,g),x=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){l.dispose(),u!==null&&u.dispose(),f!==null&&f.dispose(),d.dispose(),_.dispose()}}function Ns(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,o=Pd[r];if(o===void 0&&(o=new Float32Array(r),Pd[r]=o),t!==0){i.toArray(o,0);for(let l=1,u=0;l!==t;++l)u+=e,n[l].toArray(o,u)}return o}function sn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function on(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function rc(n,t){let e=Id[t];e===void 0&&(e=new Int32Array(t),Id[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ny(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Dy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;n.uniform2fv(this.addr,t),on(e,t)}}function Oy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;n.uniform3fv(this.addr,t),on(e,t)}}function Fy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;n.uniform4fv(this.addr,t),on(e,t)}}function Uy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(sn(e,i))return;Nd.set(i),n.uniformMatrix2fv(this.addr,!1,Nd),on(e,i)}}function By(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(sn(e,i))return;Ld.set(i),n.uniformMatrix3fv(this.addr,!1,Ld),on(e,i)}}function ky(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(sn(e,i))return;Rd.set(i),n.uniformMatrix4fv(this.addr,!1,Rd),on(e,i)}}function zy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Vy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;n.uniform2iv(this.addr,t),on(e,t)}}function Hy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;n.uniform3iv(this.addr,t),on(e,t)}}function Gy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;n.uniform4iv(this.addr,t),on(e,t)}}function Xy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Wy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;n.uniform2uiv(this.addr,t),on(e,t)}}function Yy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;n.uniform3uiv(this.addr,t),on(e,t)}}function $y(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;n.uniform4uiv(this.addr,t),on(e,t)}}function qy(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(tu.compareFunction=e.isReversedDepthBuffer()?jl:Jl,o=tu):o=qd,e.setTexture2D(t||o,r)}function Zy(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Jd,r)}function Jy(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||jd,r)}function jy(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Zd,r)}function Ky(n){switch(n){case 5126:return Ny;case 35664:return Dy;case 35665:return Oy;case 35666:return Fy;case 35674:return Uy;case 35675:return By;case 35676:return ky;case 5124:case 35670:return zy;case 35667:case 35671:return Vy;case 35668:case 35672:return Hy;case 35669:case 35673:return Gy;case 5125:return Xy;case 36294:return Wy;case 36295:return Yy;case 36296:return $y;case 35678:case 36198:case 36298:case 36306:case 35682:return qy;case 35679:case 36299:case 36307:return Zy;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return jy}}function Qy(n,t){n.uniform1fv(this.addr,t)}function tx(n,t){let e=Ns(t,this.size,2);n.uniform2fv(this.addr,e)}function ex(n,t){let e=Ns(t,this.size,3);n.uniform3fv(this.addr,e)}function nx(n,t){let e=Ns(t,this.size,4);n.uniform4fv(this.addr,e)}function ix(n,t){let e=Ns(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function rx(n,t){let e=Ns(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function sx(n,t){let e=Ns(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ox(n,t){n.uniform1iv(this.addr,t)}function ax(n,t){n.uniform2iv(this.addr,t)}function lx(n,t){n.uniform3iv(this.addr,t)}function cx(n,t){n.uniform4iv(this.addr,t)}function hx(n,t){n.uniform1uiv(this.addr,t)}function ux(n,t){n.uniform2uiv(this.addr,t)}function fx(n,t){n.uniform3uiv(this.addr,t)}function dx(n,t){n.uniform4uiv(this.addr,t)}function px(n,t,e){let i=this.cache,r=t.length,o=rc(e,r);sn(i,o)||(n.uniform1iv(this.addr,o),on(i,o));let l;this.type===n.SAMPLER_2D_SHADOW?l=tu:l=qd;for(let u=0;u!==r;++u)e.setTexture2D(t[u]||l,o[u])}function mx(n,t,e){let i=this.cache,r=t.length,o=rc(e,r);sn(i,o)||(n.uniform1iv(this.addr,o),on(i,o));for(let l=0;l!==r;++l)e.setTexture3D(t[l]||Jd,o[l])}function gx(n,t,e){let i=this.cache,r=t.length,o=rc(e,r);sn(i,o)||(n.uniform1iv(this.addr,o),on(i,o));for(let l=0;l!==r;++l)e.setTextureCube(t[l]||jd,o[l])}function _x(n,t,e){let i=this.cache,r=t.length,o=rc(e,r);sn(i,o)||(n.uniform1iv(this.addr,o),on(i,o));for(let l=0;l!==r;++l)e.setTexture2DArray(t[l]||Zd,o[l])}function vx(n){switch(n){case 5126:return Qy;case 35664:return tx;case 35665:return ex;case 35666:return nx;case 35674:return ix;case 35675:return rx;case 35676:return sx;case 5124:case 35670:return ox;case 35667:case 35671:return ax;case 35668:case 35672:return lx;case 35669:case 35673:return cx;case 5125:return hx;case 36294:return ux;case 36295:return fx;case 36296:return dx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return gx;case 36289:case 36303:case 36311:case 36292:return _x}}function Dd(n,t){n.seq.push(t),n.map[t.id]=t}function yx(n,t,e){let i=n.name,r=i.length;for(Kh.lastIndex=0;;){let o=Kh.exec(i),l=Kh.lastIndex,u=o[1],f=o[2]==="]",d=o[3];if(f&&(u=u|0),d===void 0||d==="["&&l+2===r){Dd(e,d===void 0?new eu(u,n,t):new nu(u,n,t));break}else{let v=e.map[u];v===void 0&&(v=new iu(u),Dd(e,v)),e=v}}}function Od(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}function Sx(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let l=r;l<o;l++){let u=l+1;i.push(`${u===t?">":" "} ${u}: ${e[l]}`)}return i.join(`
`)}function bx(n){Ae._getMatrix(Fd,Ae.workingColorSpace,n);let t=`mat3( ${Fd.elements.map(e=>e.toFixed(4))} )`;switch(Ae.getTransfer(n)){case ro:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ud(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),o=(n.getShaderInfoLog(t)||"").trim();if(i&&o==="")return"";let l=/ERROR: 0:(\d+)/.exec(o);if(l){let u=parseInt(l[1]);return e.toUpperCase()+`

`+o+`

`+Sx(n.getShaderSource(t),u)}else return o}function wx(n,t){let e=bx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Tx(n,t){let e=Ex[t];return e===void 0?(de("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ax(){Ae.getLuminanceCoefficients(Ql);let n=Ql.x.toFixed(4),t=Ql.y.toFixed(4),e=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function Px(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ix(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let o=n.getActiveAttrib(t,r),l=o.name,u=1;o.type===n.FLOAT_MAT2&&(u=2),o.type===n.FLOAT_MAT3&&(u=3),o.type===n.FLOAT_MAT4&&(u=4),e[l]={type:o.type,location:n.getAttribLocation(t,l),locationSize:u}}return e}function Bo(n){return n!==""}function Bd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function ru(n){return n.replace(Rx,Nx)}function Nx(n,t){let e=Se[t];if(e===void 0){let i=Lx.get(t);if(i!==void 0)e=Se[i],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ru(e)}function zd(n){return n.replace(Dx,Ox)}function Ox(n,t,e,i){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Vd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Ux(n){return Fx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function kx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Bx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}function Vx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":zx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Gx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Hx[n.combine]||"ENVMAP_BLENDING_NONE"}function Xx(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Wx(n,t,e,i){let r=n.getContext(),o=e.defines,l=e.vertexShader,u=e.fragmentShader,f=Ux(e),d=kx(e),_=Vx(e),v=Gx(e),g=Xx(e),b=Cx(e),w=Px(o),T=r.createProgram(),S,x,O=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Bo).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Bo).join(`
`),x.length>0&&(x+=`
`)):(S=[Vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+_:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),x=[Vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+_:"",e.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?Se.tonemapping_pars_fragment:"",e.toneMapping!==oi?Tx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,wx("linearToOutputTexel",e.outputColorSpace),Ax(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bo).join(`
`)),l=ru(l),l=Bd(l,e),l=kd(l,e),u=ru(u),u=Bd(u,e),u=kd(u,e),l=zd(l),u=zd(u),e.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",e.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let H=O+S+l,R=O+x+u,U=Od(r,r.VERTEX_SHADER,H),B=Od(r,r.FRAGMENT_SHADER,R);r.attachShader(T,U),r.attachShader(T,B),e.index0AttributeName!==void 0?r.bindAttribLocation(T,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function W(et){if(n.debug.checkShaderErrors){let st=r.getProgramInfoLog(T)||"",$=r.getShaderInfoLog(U)||"",q=r.getShaderInfoLog(B)||"",Z=st.trim(),lt=$.trim(),dt=q.trim(),Mt=!0,pt=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(Mt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,T,U,B);else{let wt=Ud(r,U,"vertex"),J=Ud(r,B,"fragment");ge("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+et.name+`
Material Type: `+et.type+`

Program Info Log: `+Z+`
`+wt+`
`+J)}else Z!==""?de("WebGLProgram: Program Info Log:",Z):(lt===""||dt==="")&&(pt=!1);pt&&(et.diagnostics={runnable:Mt,programLog:Z,vertexShader:{log:lt,prefix:S},fragmentShader:{log:dt,prefix:x}})}r.deleteShader(U),r.deleteShader(B),C=new Ls(r,T),k=Ix(r,T)}let C;this.getUniforms=function(){return C===void 0&&W(this),C};let k;this.getAttributes=function(){return k===void 0&&W(this),k};let X=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=r.getProgramParameter(T,xx)),X},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mx++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=U,this.fragmentShader=B,this}function $x(n){return n===pr||n===Do||n===Oo}function qx(n,t,e,i,r,o){let l=new _s,u=new su,f=new Set,d=[],_=new Map,v=i.logarithmicDepthBuffer,g=i.precision,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return f.add(C),C===0?"uv":`uv${C}`}function T(C,k,X,et,st,$){let q=et.fog,Z=st.geometry,lt=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?et.environment:null,dt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap,Mt=t.get(C.envMap||lt,dt),pt=Mt&&Mt.mapping===Co?Mt.image.height:null,wt=b[C.type];C.precision!==null&&(g=i.getMaxPrecision(C.precision),g!==C.precision&&de("WebGLProgram.getParameters:",C.precision,"not supported, using",g,"instead."));let J=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,At=J!==void 0?J.length:0,Lt=0;Z.morphAttributes.position!==void 0&&(Lt=1),Z.morphAttributes.normal!==void 0&&(Lt=2),Z.morphAttributes.color!==void 0&&(Lt=3);let Ht,Bt,jt,yt;if(wt){let Fe=Si[wt];Ht=Fe.vertexShader,Bt=Fe.fragmentShader}else{Ht=C.vertexShader,Bt=C.fragmentShader;let Fe=u.getVertexShaderStage(C),Pe=u.getFragmentShaderStage(C);u.update(C,Fe,Pe),jt=Fe.id,yt=Pe.id}let z=n.getRenderTarget(),Xt=n.state.buffers.depth.getReversed(),te=st.isInstancedMesh===!0,kt=st.isBatchedMesh===!0,ce=!!C.map,Re=!!C.matcap,fe=!!Mt,Yt=!!C.aoMap,pe=!!C.lightMap,ue=!!C.bumpMap&&C.wireframe===!1,we=!!C.normalMap,Le=!!C.displacementMap,je=!!C.emissiveMap,Ne=!!C.metalnessMap,He=!!C.roughnessMap,ht=C.anisotropy>0,Ze=C.clearcoat>0,be=C.dispersion>0,Y=C.retroreflectivity>0,P=C.iridescence>0,it=C.sheen>0,mt=C.transmission>0,Et=ht&&!!C.anisotropyMap,Gt=Ze&&!!C.clearcoatMap,$t=Ze&&!!C.clearcoatNormalMap,xt=Ze&&!!C.clearcoatRoughnessMap,L=P&&!!C.iridescenceMap,j=P&&!!C.iridescenceThicknessMap,K=it&&!!C.sheenColorMap,rt=it&&!!C.sheenRoughnessMap,ut=!!C.specularMap,Nt=!!C.specularColorMap,It=!!C.specularIntensityMap,Vt=mt&&!!C.transmissionMap,V=mt&&!!C.thicknessMap,Pt=!!C.gradientMap,gt=!!C.alphaMap,Ot=C.alphaTest>0,Wt=!!C.alphaHash,Rt=!!C.extensions,Ft=oi;C.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ft=n.toneMapping);let re={shaderID:wt,shaderType:C.type,shaderName:C.name,vertexShader:Ht,fragmentShader:Bt,defines:C.defines,customVertexShaderID:jt,customFragmentShaderID:yt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:g,batching:kt,batchingColor:kt&&st._colorsTexture!==null,instancing:te,instancingColor:te&&st.instanceColor!==null,instancingMorph:te&&st.morphTexture!==null,outputColorSpace:z===null?n.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ae.workingColorSpace,alphaToCoverage:!!C.alphaToCoverage,map:ce,matcap:Re,envMap:fe,envMapMode:fe&&Mt.mapping,envMapCubeUVHeight:pt,aoMap:Yt,lightMap:pe,bumpMap:ue,normalMap:we,displacementMap:Le,emissiveMap:je,normalMapObjectSpace:we&&C.normalMapType===ld,normalMapTangentSpace:we&&C.normalMapType===Zl,packedNormalMap:we&&C.normalMapType===Zl&&$x(C.normalMap.format),metalnessMap:Ne,roughnessMap:He,anisotropy:ht,anisotropyMap:Et,clearcoat:Ze,clearcoatMap:Gt,clearcoatNormalMap:$t,clearcoatRoughnessMap:xt,dispersion:be,retroreflection:Y,iridescence:P,iridescenceMap:L,iridescenceThicknessMap:j,sheen:it,sheenColorMap:K,sheenRoughnessMap:rt,specularMap:ut,specularColorMap:Nt,specularIntensityMap:It,transmission:mt,transmissionMap:Vt,thicknessMap:V,gradientMap:Pt,opaque:C.transparent===!1&&C.blending===As&&C.alphaToCoverage===!1,alphaMap:gt,alphaTest:Ot,alphaHash:Wt,combine:C.combine,mapUv:ce&&w(C.map.channel),aoMapUv:Yt&&w(C.aoMap.channel),lightMapUv:pe&&w(C.lightMap.channel),bumpMapUv:ue&&w(C.bumpMap.channel),normalMapUv:we&&w(C.normalMap.channel),displacementMapUv:Le&&w(C.displacementMap.channel),emissiveMapUv:je&&w(C.emissiveMap.channel),metalnessMapUv:Ne&&w(C.metalnessMap.channel),roughnessMapUv:He&&w(C.roughnessMap.channel),anisotropyMapUv:Et&&w(C.anisotropyMap.channel),clearcoatMapUv:Gt&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:$t&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:L&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:j&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:K&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:rt&&w(C.sheenRoughnessMap.channel),specularMapUv:ut&&w(C.specularMap.channel),specularColorMapUv:Nt&&w(C.specularColorMap.channel),specularIntensityMapUv:It&&w(C.specularIntensityMap.channel),transmissionMapUv:Vt&&w(C.transmissionMap.channel),thicknessMapUv:V&&w(C.thicknessMap.channel),alphaMapUv:gt&&w(C.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(we||ht),vertexNormals:!!Z.attributes.normal,vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!Z.attributes.uv&&(ce||gt),fog:!!q,useFog:C.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:C.wireframe===!1&&(C.flatShading===!0||Z.attributes.normal===void 0&&we===!1&&(C.isMeshLambertMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isMeshPhysicalMaterial)),sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Xt,skinning:st.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Lt,numSunLights:k.sun.length,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numSunLightShadows:k.sunShadowMap.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&X.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ft,decodeVideoTexture:ce&&C.map.isVideoTexture===!0&&Ae.getTransfer(C.map.colorSpace)===Ue,decodeVideoTextureEmissive:je&&C.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(C.emissiveMap.colorSpace)===Ue,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===xn,flipSided:C.side===Tn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Rt&&C.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&C.extensions.multiDraw===!0||kt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return re.vertexUv1s=f.has(1),re.vertexUv2s=f.has(2),re.vertexUv3s=f.has(3),f.clear(),re}function S(C){let k=[];if(C.shaderID?k.push(C.shaderID):(k.push(C.customVertexShaderID),k.push(C.customFragmentShaderID)),C.defines!==void 0)for(let X in C.defines)k.push(X),k.push(C.defines[X]);return C.isRawShaderMaterial===!1&&(x(k,C),O(k,C),k.push(n.outputColorSpace)),k.push(C.customProgramCacheKey),k.join()}function x(C,k){C.push(k.precision),C.push(k.outputColorSpace),C.push(k.envMapMode),C.push(k.envMapCubeUVHeight),C.push(k.mapUv),C.push(k.alphaMapUv),C.push(k.lightMapUv),C.push(k.aoMapUv),C.push(k.bumpMapUv),C.push(k.normalMapUv),C.push(k.displacementMapUv),C.push(k.emissiveMapUv),C.push(k.metalnessMapUv),C.push(k.roughnessMapUv),C.push(k.anisotropyMapUv),C.push(k.clearcoatMapUv),C.push(k.clearcoatNormalMapUv),C.push(k.clearcoatRoughnessMapUv),C.push(k.iridescenceMapUv),C.push(k.iridescenceThicknessMapUv),C.push(k.sheenColorMapUv),C.push(k.sheenRoughnessMapUv),C.push(k.specularMapUv),C.push(k.specularColorMapUv),C.push(k.specularIntensityMapUv),C.push(k.transmissionMapUv),C.push(k.thicknessMapUv),C.push(k.combine),C.push(k.fogExp2),C.push(k.sizeAttenuation),C.push(k.morphTargetsCount),C.push(k.morphAttributeCount),C.push(k.numSunLights),C.push(k.numDirLights),C.push(k.numPointLights),C.push(k.numSpotLights),C.push(k.numSpotLightMaps),C.push(k.numHemiLights),C.push(k.numRectAreaLights),C.push(k.numSunLightShadows),C.push(k.numDirLightShadows),C.push(k.numPointLightShadows),C.push(k.numSpotLightShadows),C.push(k.numSpotLightShadowsWithMaps),C.push(k.numLightProbes),C.push(k.shadowMapType),C.push(k.toneMapping),C.push(k.numClippingPlanes),C.push(k.numClipIntersection),C.push(k.depthPacking)}function O(C,k){l.disableAll(),k.instancing&&l.enable(0),k.instancingColor&&l.enable(1),k.instancingMorph&&l.enable(2),k.matcap&&l.enable(3),k.envMap&&l.enable(4),k.normalMapObjectSpace&&l.enable(5),k.normalMapTangentSpace&&l.enable(6),k.clearcoat&&l.enable(7),k.iridescence&&l.enable(8),k.alphaTest&&l.enable(9),k.vertexColors&&l.enable(10),k.vertexAlphas&&l.enable(11),k.vertexUv1s&&l.enable(12),k.vertexUv2s&&l.enable(13),k.vertexUv3s&&l.enable(14),k.vertexTangents&&l.enable(15),k.anisotropy&&l.enable(16),k.alphaHash&&l.enable(17),k.batching&&l.enable(18),k.dispersion&&l.enable(19),k.retroreflection&&l.enable(24),k.batchingColor&&l.enable(20),k.gradientMap&&l.enable(21),k.packedNormalMap&&l.enable(22),k.vertexNormals&&l.enable(23),C.push(l.mask),l.disableAll(),k.fog&&l.enable(0),k.useFog&&l.enable(1),k.flatShading&&l.enable(2),k.logarithmicDepthBuffer&&l.enable(3),k.reversedDepthBuffer&&l.enable(4),k.skinning&&l.enable(5),k.morphTargets&&l.enable(6),k.morphNormals&&l.enable(7),k.morphColors&&l.enable(8),k.premultipliedAlpha&&l.enable(9),k.shadowMapEnabled&&l.enable(10),k.doubleSided&&l.enable(11),k.flipSided&&l.enable(12),k.useDepthPacking&&l.enable(13),k.dithering&&l.enable(14),k.transmission&&l.enable(15),k.sheen&&l.enable(16),k.opaque&&l.enable(17),k.pointsUvs&&l.enable(18),k.decodeVideoTexture&&l.enable(19),k.decodeVideoTextureEmissive&&l.enable(20),k.alphaToCoverage&&l.enable(21),k.numLightProbeGrids>0&&l.enable(22),k.hasPositionAttribute&&l.enable(23),C.push(l.mask)}function H(C){let k=b[C.type],X;if(k){let et=Si[k];X=Sd.clone(et.uniforms)}else X=C.uniforms;return X}function R(C,k){let X=_.get(k);return X!==void 0?++X.usedTimes:(X=new Wx(n,k,C,r),d.push(X),_.set(k,X)),X}function U(C){if(--C.usedTimes===0){let k=d.indexOf(C);d[k]=d[d.length-1],d.pop(),_.delete(C.cacheKey),C.destroy()}}function B(C){u.remove(C)}function W(){u.dispose()}return{getParameters:T,getProgramCacheKey:S,getUniforms:H,acquireProgram:R,releaseProgram:U,releaseShaderCache:B,programs:d,dispose:W}}function Zx(){let n=new WeakMap;function t(l){return n.has(l)}function e(l){let u=n.get(l);return u===void 0&&(u={},n.set(l,u)),u}function i(l){n.delete(l)}function r(l,u,f){n.get(l)[u]=f}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:o}}function Jx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Hd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Gd(){let n=[],t=0,e=[],i=[],r=[];function o(){t=0,e.length=0,i.length=0,r.length=0}function l(g){let b=0;return g.isInstancedMesh&&(b+=2),g.isSkinnedMesh&&(b+=1),b}function u(g,b,w,T,S,x){let O=n[t];return O===void 0?(O={id:g.id,object:g,geometry:b,material:w,materialVariant:l(g),groupOrder:T,renderOrder:g.renderOrder,z:S,group:x},n[t]=O):(O.id=g.id,O.object=g,O.geometry=b,O.material=w,O.materialVariant=l(g),O.groupOrder=T,O.renderOrder=g.renderOrder,O.z=S,O.group=x),t++,O}function f(g,b,w,T,S,x,O){O.reversedDepth===!0&&(S=-S);let H=u(g,b,w,T,S,x);w.transmission>0?i.push(H):w.transparent===!0?r.push(H):e.push(H)}function d(g,b,w,T,S,x){let O=u(g,b,w,T,S,x);w.transmission>0?i.unshift(O):w.transparent===!0?r.unshift(O):e.unshift(O)}function _(g,b){e.length>1&&e.sort(g||Jx),i.length>1&&i.sort(b||Hd),r.length>1&&r.sort(b||Hd)}function v(){for(let g=t,b=n.length;g<b;g++){let w=n[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:i,transparent:r,init:o,push:f,unshift:d,finish:v,sort:_}}function jx(){let n=new WeakMap;function t(i,r){let o=n.get(i),l;return o===void 0?(l=new Gd,n.set(i,[l])):r>=o.length?(l=new Gd,o.push(l)):l=o[r],l}function e(){n=new WeakMap}return{get:t,dispose:e}}function Kx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new ct,color:new ye};break;case"SpotLight":e={position:new ct,direction:new ct,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new ct,color:new ye,distance:0,decay:0};break;case"HemisphereLight":e={direction:new ct,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":e={color:new ye,position:new ct,halfWidth:new ct,halfHeight:new ct};break}return n[t.id]=e,e}}}function Qx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}function eM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function nM(n){let t=new Kx,e=Qx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new ct);let r=new ct,o=new ze,l=new ze;function u(d){let _=0,v=0,g=0;for(let st=0;st<9;st++)i.probe[st].set(0,0,0);let b=0,w=0,T=0,S=0,x=0,O=0,H=0,R=0,U=0,B=0,W=0,C=0,k=0,X=0;d.sort(eM);for(let st=0,$=d.length;st<$;st++){let q=d[st],Z=q.color,lt=q.intensity,dt=q.distance,Mt=null;if(q.shadow&&q.shadow.map&&(q.shadow.map.texture.format===pr?Mt=q.shadow.map.texture:Mt=q.shadow.map.depthTexture||q.shadow.map.texture),q.isAmbientLight)_+=Z.r*lt,v+=Z.g*lt,g+=Z.b*lt;else if(q.isLightProbe){for(let pt=0;pt<9;pt++)i.probe[pt].addScaledVector(q.sh.coefficients[pt],lt);X++}else if(q.isSunLight){let pt=t.get(q);if(pt.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){let wt=q.shadow,J=e.get(q);J.shadowIntensity=wt.intensity,J.shadowBias=wt.bias,J.shadowNormalBias=wt.normalBias,J.shadowRadius=wt.radius,J.shadowMapSize.copy(wt.mapSize).multiply(wt.getFrameExtents()),i.sunShadow[w]=J,i.sunShadowMap[w]=Mt;let At=wt.getViewportCount();for(let Lt=0;Lt<At;Lt++)i.sunShadowMatrix[T+Lt]=wt.getMatrix(Lt),i.sunShadowCascade[T+Lt]=wt._cascadeData[Lt];T+=At,w++}i.sun[b]=pt,b++}else if(q.isDirectionalLight){let pt=t.get(q);if(pt.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){let wt=q.shadow,J=e.get(q);J.shadowIntensity=wt.intensity,J.shadowBias=wt.bias,J.shadowNormalBias=wt.normalBias,J.shadowRadius=wt.radius,J.shadowMapSize=wt.mapSize,i.directionalShadow[S]=J,i.directionalShadowMap[S]=Mt,i.directionalShadowMatrix[S]=q.shadow.matrix,U++}i.directional[S]=pt,S++}else if(q.isSpotLight){let pt=t.get(q);pt.position.setFromMatrixPosition(q.matrixWorld),pt.color.copy(Z).multiplyScalar(lt),pt.distance=dt,pt.coneCos=Math.cos(q.angle),pt.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),pt.decay=q.decay,i.spot[O]=pt;let wt=q.shadow;if(q.map&&(i.spotLightMap[C]=q.map,C++,wt.updateMatrices(q),q.castShadow&&k++),i.spotLightMatrix[O]=wt.matrix,q.castShadow){let J=e.get(q);J.shadowIntensity=wt.intensity,J.shadowBias=wt.bias,J.shadowNormalBias=wt.normalBias,J.shadowRadius=wt.radius,J.shadowMapSize=wt.mapSize,i.spotShadow[O]=J,i.spotShadowMap[O]=Mt,W++}O++}else if(q.isRectAreaLight){let pt=t.get(q);pt.color.copy(Z).multiplyScalar(lt),pt.halfWidth.set(q.width*.5,0,0),pt.halfHeight.set(0,q.height*.5,0),i.rectArea[H]=pt,H++}else if(q.isPointLight){let pt=t.get(q);if(pt.color.copy(q.color).multiplyScalar(q.intensity),pt.distance=q.distance,pt.decay=q.decay,q.castShadow){let wt=q.shadow,J=e.get(q);J.shadowIntensity=wt.intensity,J.shadowBias=wt.bias,J.shadowNormalBias=wt.normalBias,J.shadowRadius=wt.radius,J.shadowMapSize=wt.mapSize,J.shadowCameraNear=wt.camera.near,J.shadowCameraFar=wt.camera.far,i.pointShadow[x]=J,i.pointShadowMap[x]=Mt,i.pointShadowMatrix[x]=q.shadow.matrix,B++}i.point[x]=pt,x++}else if(q.isHemisphereLight){let pt=t.get(q);pt.skyColor.copy(q.color).multiplyScalar(lt),pt.groundColor.copy(q.groundColor).multiplyScalar(lt),i.hemi[R]=pt,R++}}H>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Qt.LTC_FLOAT_1,i.rectAreaLTC2=Qt.LTC_FLOAT_2):(i.rectAreaLTC1=Qt.LTC_HALF_1,i.rectAreaLTC2=Qt.LTC_HALF_2)),i.ambient[0]=_,i.ambient[1]=v,i.ambient[2]=g;let et=i.hash;(et.sunLength!==b||et.directionalLength!==S||et.pointLength!==x||et.spotLength!==O||et.rectAreaLength!==H||et.hemiLength!==R||et.numSunShadows!==w||et.numDirectionalShadows!==U||et.numPointShadows!==B||et.numSpotShadows!==W||et.numSpotMaps!==C||et.numLightProbes!==X)&&(i.sun.length=b,i.directional.length=S,i.spot.length=O,i.rectArea.length=H,i.point.length=x,i.hemi.length=R,i.sunShadow.length=w,i.sunShadowMap.length=w,i.sunShadowMatrix.length=T,i.sunShadowCascade.length=T,i.directionalShadow.length=U,i.directionalShadowMap.length=U,i.directionalShadowMatrix.length=U,i.pointShadow.length=B,i.pointShadowMap.length=B,i.pointShadowMatrix.length=B,i.spotShadow.length=W,i.spotShadowMap.length=W,i.spotLightMatrix.length=W+C-k,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=X,et.sunLength=b,et.directionalLength=S,et.pointLength=x,et.spotLength=O,et.rectAreaLength=H,et.hemiLength=R,et.numSunShadows=w,et.numDirectionalShadows=U,et.numPointShadows=B,et.numSpotShadows=W,et.numSpotMaps=C,et.numLightProbes=X,i.version=tM++)}function f(d,_){let v=0,g=0,b=0,w=0,T=0,S=0,x=_.matrixWorldInverse;for(let O=0,H=d.length;O<H;O++){let R=d[O];if(R.isSunLight){let U=i.sun[v];U.direction.setFromMatrixPosition(R.matrixWorld),U.direction.transformDirection(x),v++}else if(R.isDirectionalLight){let U=i.directional[g];U.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(x),g++}else if(R.isSpotLight){let U=i.spot[w];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(x),w++}else if(R.isRectAreaLight){let U=i.rectArea[T];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(x),l.identity(),o.copy(R.matrixWorld),o.premultiply(x),l.extractRotation(o),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),U.halfWidth.applyMatrix4(l),U.halfHeight.applyMatrix4(l),T++}else if(R.isPointLight){let U=i.point[b];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(x),b++}else if(R.isHemisphereLight){let U=i.hemi[S];U.direction.setFromMatrixPosition(R.matrixWorld),U.direction.transformDirection(x),S++}}}return{setup:u,setupView:f,state:i}}function Xd(n){let t=new nM(n),e=[],i=[],r=[];function o(g){v.camera=g,e.length=0,i.length=0,r.length=0}function l(g){e.push(g)}function u(g){i.push(g)}function f(g){r.push(g)}function d(){t.setup(e)}function _(g){t.setupView(e,g)}let v={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:v,setupLights:d,setupLightsView:_,pushLight:l,pushShadow:u,pushLightProbeGrid:f}}function iM(n){let t=new WeakMap;function e(r,o=0){let l=t.get(r),u;return l===void 0?(u=new Xd(n),t.set(r,[u])):o>=l.length?(u=new Xd(n),l.push(u)):u=l[o],u}function i(){t=new WeakMap}return{get:e,dispose:i}}function lM(n,t,e){let i=new xs,r=new le,o=new le,l=new Je,u=new Za,f=new Ja,d={},_=e.maxTextureSize,v={[hr]:Tn,[Tn]:hr,[xn]:xn},g=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:rM,fragmentShader:sM}),b=g.clone();b.defines.HORIZONTAL_PASS=1;let w=new qe;w.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new De(w,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ao;let x=this.type;this.render=function(B,W,C){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;this.type===kf&&(de("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ao);let k=n.getRenderTarget(),X=n.getActiveCubeFace(),et=n.getActiveMipmapLevel(),st=n.state;st.setBlending(xi),st.buffers.depth.getReversed()===!0?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);let $=x!==this.type;$&&W.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(Z=>Z.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,Z=B.length;q<Z;q++){let lt=B[q],dt=lt.shadow;if(dt===void 0){de("WebGLShadowMap:",lt,"has no shadow.");continue}if(dt.autoUpdate===!1&&dt.needsUpdate===!1)continue;r.copy(dt.mapSize);let Mt=dt.getFrameExtents();r.multiply(Mt),o.copy(dt.mapSize),(r.x>_||r.y>_)&&(r.x>_&&(o.x=Math.floor(_/Mt.x),r.x=o.x*Mt.x,dt.mapSize.x=o.x),r.y>_&&(o.y=Math.floor(_/Mt.y),r.y=o.y*Mt.y,dt.mapSize.y=o.y));let pt=n.state.buffers.depth.getReversed();if(dt.camera._reversedDepth=pt,dt.map===null||$===!0){if(dt.map!==null&&(dt.map.depthTexture!==null&&(dt.map.depthTexture.dispose(),dt.map.depthTexture=null),dt.map.dispose()),this.type===Ts){if(lt.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}dt.map=new Pn(r.x,r.y,{format:pr,type:ci,minFilter:dn,magFilter:dn,generateMipmaps:!1}),dt.map.texture.name=lt.name+".shadowMap",dt.map.depthTexture=new nr(r.x,r.y,li),dt.map.depthTexture.name=lt.name+".shadowMapDepth",dt.map.depthTexture.format=_i,dt.map.depthTexture.compareFunction=null,dt.map.depthTexture.minFilter=un,dt.map.depthTexture.magFilter=un}else lt.isPointLight?(dt.map=new ec(r.x),dt.map.depthTexture=new $a(r.x,ai)):(dt.map=new Pn(r.x,r.y),dt.map.depthTexture=new nr(r.x,r.y,ai)),dt.map.depthTexture.name=lt.name+".shadowMap",dt.map.depthTexture.format=_i,this.type===Ao?(dt.map.depthTexture.compareFunction=pt?jl:Jl,dt.map.depthTexture.minFilter=dn,dt.map.depthTexture.magFilter=dn):(dt.map.depthTexture.compareFunction=null,dt.map.depthTexture.minFilter=un,dt.map.depthTexture.magFilter=un);dt.camera.updateProjectionMatrix()}dt.map.isWebGLCubeRenderTarget!==!0&&(dt.map.width!==r.x||dt.map.height!==r.y)&&dt.map.setSize(r.x,r.y);let wt=dt.map.isWebGLCubeRenderTarget?6:dt.getViewportCount();lt.isPointLight!==!0&&dt.updateMatrices(lt,C);for(let J=0;J<wt;J++){let At=dt.getCamera(J);if(lt.isPointLight){let Lt=dt.camera,Ht=dt.matrix,Bt=lt.distance||Lt.far;Bt!==Lt.far&&(Lt.far=Bt,Lt.updateProjectionMatrix()),Uo.setFromMatrixPosition(lt.matrixWorld),Lt.position.copy(Uo),Qh.copy(Lt.position),Qh.add(oM[J]),Lt.up.copy(aM[J]),Lt.lookAt(Qh),Lt.updateMatrixWorld(),Ht.makeTranslation(-Uo.x,-Uo.y,-Uo.z),Wd.multiplyMatrices(Lt.projectionMatrix,Lt.matrixWorldInverse),dt._frustum.setFromProjectionMatrix(Wd,Lt.coordinateSystem,Lt.reversedDepth)}if(dt.map.isWebGLCubeRenderTarget)n.setRenderTarget(dt.map,J),n.clear();else{J===0&&(n.setRenderTarget(dt.map),n.clear());let Lt=dt.getViewport(J);l.set(o.x*Lt.x,o.y*Lt.y,o.x*Lt.z,o.y*Lt.w),st.viewport(l)}i=dt.getFrustum(J),R(W,C,At,lt,this.type)}dt.isPointLightShadow!==!0&&this.type===Ts&&O(dt,C),dt.needsUpdate=!1}x=this.type,S.needsUpdate=!1,n.setRenderTarget(k,X,et)};function O(B,W){let C=t.update(T);g.defines.VSM_SAMPLES!==B.blurSamples&&(g.defines.VSM_SAMPLES=B.blurSamples,b.defines.VSM_SAMPLES=B.blurSamples,g.needsUpdate=!0,b.needsUpdate=!0),B.mapPass===null?B.mapPass=new Pn(r.x,r.y,{format:pr,type:ci}):(B.mapPass.width!==B.map.width||B.mapPass.height!==B.map.height)&&B.mapPass.setSize(B.map.width,B.map.height),g.uniforms.shadow_pass.value=B.map.depthTexture,g.uniforms.resolution.value.set(B.map.width,B.map.height),g.uniforms.radius.value=B.radius,n.setRenderTarget(B.mapPass),n.clear(),n.renderBufferDirect(W,null,C,g,T,null),b.uniforms.shadow_pass.value=B.mapPass.texture,b.uniforms.resolution.value.set(B.map.width,B.map.height),b.uniforms.radius.value=B.radius,n.setRenderTarget(B.map),n.clear(),n.renderBufferDirect(W,null,C,b,T,null)}function H(B,W,C,k){let X=null,et=C.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(et!==void 0)X=et;else if(X=C.isPointLight===!0?f:u,n.localClippingEnabled&&W.clipShadows===!0&&Array.isArray(W.clippingPlanes)&&W.clippingPlanes.length!==0||W.displacementMap&&W.displacementScale!==0||W.alphaMap&&W.alphaTest>0||W.map&&W.alphaTest>0||W.alphaToCoverage===!0){let st=X.uuid,$=W.uuid,q=d[st];q===void 0&&(q={},d[st]=q);let Z=q[$];Z===void 0&&(Z=X.clone(),q[$]=Z,W.addEventListener("dispose",U)),X=Z}if(X.visible=W.visible,X.wireframe=W.wireframe,k===Ts?X.side=W.shadowSide!==null?W.shadowSide:W.side:X.side=W.shadowSide!==null?W.shadowSide:v[W.side],X.alphaMap=W.alphaMap,X.alphaTest=W.alphaToCoverage===!0?.5:W.alphaTest,X.map=W.map,X.clipShadows=W.clipShadows,X.clippingPlanes=W.clippingPlanes,X.clipIntersection=W.clipIntersection,X.displacementMap=W.displacementMap,X.displacementScale=W.displacementScale,X.displacementBias=W.displacementBias,X.wireframeLinewidth=W.wireframeLinewidth,X.linewidth=W.linewidth,C.isPointLight===!0&&X.isMeshDistanceMaterial===!0){let st=n.properties.get(X);st.light=C}return X}function R(B,W,C,k,X){if(B.visible===!1)return;if(B.layers.test(W.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&X===Ts)&&(!B.frustumCulled||B.intersectsFrustum(i))){B.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,B.matrixWorld);let $=t.update(B),q=B.material;if(Array.isArray(q)){let Z=$.groups;for(let lt=0,dt=Z.length;lt<dt;lt++){let Mt=Z[lt],pt=q[Mt.materialIndex];if(pt&&pt.visible){let wt=H(B,pt,k,X);B.onBeforeShadow(n,B,W,C,$,wt,Mt),n.renderBufferDirect(C,null,$,wt,B,Mt),B.onAfterShadow(n,B,W,C,$,wt,Mt)}}}else if(q.visible){let Z=H(B,q,k,X);B.onBeforeShadow(n,B,W,C,$,Z,null),n.renderBufferDirect(C,null,$,Z,B,null),B.onAfterShadow(n,B,W,C,$,Z,null)}}let st=B.children;for(let $=0,q=st.length;$<q;$++)R(st[$],W,C,k,X)}function U(B){B.target.removeEventListener("dispose",U);for(let C in d){let k=d[C],X=B.target.uuid;X in k&&(k[X].dispose(),delete k[X])}}}function cM(n,t){function e(){let V=!1,Pt=new Je,gt=null,Ot=new Je(0,0,0,0);return{setMask:function(Wt){gt!==Wt&&!V&&(n.colorMask(Wt,Wt,Wt,Wt),gt=Wt)},setLocked:function(Wt){V=Wt},setClear:function(Wt,Rt,Ft,re,Fe){Fe===!0&&(Wt*=re,Rt*=re,Ft*=re),Pt.set(Wt,Rt,Ft,re),Ot.equals(Pt)===!1&&(n.clearColor(Wt,Rt,Ft,re),Ot.copy(Pt))},reset:function(){V=!1,gt=null,Ot.set(-1,0,0,0)}}}function i(){let V=!1,Pt=!1,gt=null,Ot=null,Wt=null;return{setReversed:function(Rt){if(Pt!==Rt){let Ft=t.get("EXT_clip_control");Rt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Pt=Rt;let re=Wt;Wt=null,this.setClear(re)}},getReversed:function(){return Pt},setTest:function(Rt){Rt?z(n.DEPTH_TEST):Xt(n.DEPTH_TEST)},setMask:function(Rt){gt!==Rt&&!V&&(n.depthMask(Rt),gt=Rt)},setFunc:function(Rt){if(Pt&&(Rt=yd[Rt]),Ot!==Rt){switch(Rt){case Ia:n.depthFunc(n.NEVER);break;case Ra:n.depthFunc(n.ALWAYS);break;case La:n.depthFunc(n.LESS);break;case fs:n.depthFunc(n.LEQUAL);break;case Na:n.depthFunc(n.EQUAL);break;case Da:n.depthFunc(n.GEQUAL);break;case Oa:n.depthFunc(n.GREATER);break;case Fa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ot=Rt}},setLocked:function(Rt){V=Rt},setClear:function(Rt){Wt!==Rt&&(Wt=Rt,Pt&&(Rt=1-Rt),n.clearDepth(Rt))},reset:function(){V=!1,gt=null,Ot=null,Wt=null,Pt=!1}}}function r(){let V=!1,Pt=null,gt=null,Ot=null,Wt=null,Rt=null,Ft=null,re=null,Fe=null;return{setTest:function(Pe){V||(Pe?z(n.STENCIL_TEST):Xt(n.STENCIL_TEST))},setMask:function(Pe){Pt!==Pe&&!V&&(n.stencilMask(Pe),Pt=Pe)},setFunc:function(Pe,Sn,An){(gt!==Pe||Ot!==Sn||Wt!==An)&&(n.stencilFunc(Pe,Sn,An),gt=Pe,Ot=Sn,Wt=An)},setOp:function(Pe,Sn,An){(Rt!==Pe||Ft!==Sn||re!==An)&&(n.stencilOp(Pe,Sn,An),Rt=Pe,Ft=Sn,re=An)},setLocked:function(Pe){V=Pe},setClear:function(Pe){Fe!==Pe&&(n.clearStencil(Pe),Fe=Pe)},reset:function(){V=!1,Pt=null,gt=null,Ot=null,Wt=null,Rt=null,Ft=null,re=null,Fe=null}}}let o=new e,l=new i,u=new r,f=new WeakMap,d=new WeakMap,_={},v={},g={},b=new WeakMap,w=[],T=null,S=!1,x=null,O=null,H=null,R=null,U=null,B=null,W=null,C=new ye(0,0,0),k=0,X=!1,et=null,st=null,$=null,q=null,Z=null,lt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),dt=!1,Mt=0,pt=n.getParameter(n.VERSION);pt.indexOf("WebGL")!==-1?(Mt=parseFloat(/^WebGL (\d)/.exec(pt)[1]),dt=Mt>=1):pt.indexOf("OpenGL ES")!==-1&&(Mt=parseFloat(/^OpenGL ES (\d)/.exec(pt)[1]),dt=Mt>=2);let wt=null,J={},At=n.getParameter(n.SCISSOR_BOX),Lt=n.getParameter(n.VIEWPORT),Ht=new Je().fromArray(At),Bt=new Je().fromArray(Lt);function jt(V,Pt,gt,Ot){let Wt=new Uint8Array(4),Rt=n.createTexture();n.bindTexture(V,Rt),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ft=0;Ft<gt;Ft++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(Pt,0,n.RGBA,1,1,Ot,0,n.RGBA,n.UNSIGNED_BYTE,Wt):n.texImage2D(Pt+Ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Wt);return Rt}let yt={};yt[n.TEXTURE_2D]=jt(n.TEXTURE_2D,n.TEXTURE_2D,1),yt[n.TEXTURE_CUBE_MAP]=jt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[n.TEXTURE_2D_ARRAY]=jt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),yt[n.TEXTURE_3D]=jt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),z(n.DEPTH_TEST),l.setFunc(fs),ue(!1),we(_h),z(n.CULL_FACE),Yt(xi);function z(V){_[V]!==!0&&(n.enable(V),_[V]=!0)}function Xt(V){_[V]!==!1&&(n.disable(V),_[V]=!1)}function te(V,Pt){return g[V]!==Pt?(n.bindFramebuffer(V,Pt),g[V]=Pt,V===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Pt),V===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Pt),!0):!1}function kt(V,Pt){let gt=w,Ot=!1;if(V){gt=b.get(Pt),gt===void 0&&(gt=[],b.set(Pt,gt));let Wt=V.textures;if(gt.length!==Wt.length||gt[0]!==n.COLOR_ATTACHMENT0){for(let Rt=0,Ft=Wt.length;Rt<Ft;Rt++)gt[Rt]=n.COLOR_ATTACHMENT0+Rt;gt.length=Wt.length,Ot=!0}}else gt[0]!==n.BACK&&(gt[0]=n.BACK,Ot=!0);Ot&&n.drawBuffers(gt)}function ce(V){return T!==V?(n.useProgram(V),T=V,!0):!1}let Re={[Cr]:n.FUNC_ADD,[Vf]:n.FUNC_SUBTRACT,[Hf]:n.FUNC_REVERSE_SUBTRACT};Re[Gf]=n.MIN,Re[Xf]=n.MAX;let fe={[Wf]:n.ZERO,[Yf]:n.ONE,[$f]:n.SRC_COLOR,[Mh]:n.SRC_ALPHA,[Qf]:n.SRC_ALPHA_SATURATE,[jf]:n.DST_COLOR,[Zf]:n.DST_ALPHA,[qf]:n.ONE_MINUS_SRC_COLOR,[Sh]:n.ONE_MINUS_SRC_ALPHA,[Kf]:n.ONE_MINUS_DST_COLOR,[Jf]:n.ONE_MINUS_DST_ALPHA,[td]:n.CONSTANT_COLOR,[ed]:n.ONE_MINUS_CONSTANT_COLOR,[nd]:n.CONSTANT_ALPHA,[id]:n.ONE_MINUS_CONSTANT_ALPHA};function Yt(V,Pt,gt,Ot,Wt,Rt,Ft,re,Fe,Pe){if(V===xi){S===!0&&(Xt(n.BLEND),S=!1);return}if(S===!1&&(z(n.BLEND),S=!0),V!==zf){if(V!==x||Pe!==X){if((O!==Cr||U!==Cr)&&(n.blendEquation(n.FUNC_ADD),O=Cr,U=Cr),Pe)switch(V){case As:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vh:n.blendFunc(n.ONE,n.ONE);break;case yh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ge("WebGLState: Invalid blending: ",V);break}else switch(V){case As:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case yh:ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xh:ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ge("WebGLState: Invalid blending: ",V);break}H=null,R=null,B=null,W=null,C.set(0,0,0),k=0,x=V,X=Pe}return}Wt=Wt||Pt,Rt=Rt||gt,Ft=Ft||Ot,(Pt!==O||Wt!==U)&&(n.blendEquationSeparate(Re[Pt],Re[Wt]),O=Pt,U=Wt),(gt!==H||Ot!==R||Rt!==B||Ft!==W)&&(n.blendFuncSeparate(fe[gt],fe[Ot],fe[Rt],fe[Ft]),H=gt,R=Ot,B=Rt,W=Ft),(re.equals(C)===!1||Fe!==k)&&(n.blendColor(re.r,re.g,re.b,Fe),C.copy(re),k=Fe),x=V,X=!1}function pe(V,Pt){V.side===xn?Xt(n.CULL_FACE):z(n.CULL_FACE);let gt=V.side===Tn;Pt&&(gt=!gt),ue(gt),V.blending===As&&V.transparent===!1?Yt(xi):Yt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),o.setMask(V.colorWrite);let Ot=V.stencilWrite;u.setTest(Ot),Ot&&(u.setMask(V.stencilWriteMask),u.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),u.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),je(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?z(n.SAMPLE_ALPHA_TO_COVERAGE):Xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ue(V){et!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),et=V)}function we(V){V!==Uf?(z(n.CULL_FACE),V!==st&&(V===_h?n.cullFace(n.BACK):V===Bf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Xt(n.CULL_FACE),st=V}function Le(V){V!==$&&(dt&&n.lineWidth(V),$=V)}function je(V,Pt,gt){V?(z(n.POLYGON_OFFSET_FILL),(q!==Pt||Z!==gt)&&(q=Pt,Z=gt,l.getReversed()&&(Pt=-Pt),n.polygonOffset(Pt,gt))):Xt(n.POLYGON_OFFSET_FILL)}function Ne(V){V?z(n.SCISSOR_TEST):Xt(n.SCISSOR_TEST)}function He(V){V===void 0&&(V=n.TEXTURE0+lt-1),wt!==V&&(n.activeTexture(V),wt=V)}function ht(V,Pt,gt){gt===void 0&&(wt===null?gt=n.TEXTURE0+lt-1:gt=wt);let Ot=J[gt];Ot===void 0&&(Ot={type:void 0,texture:void 0},J[gt]=Ot),(Ot.type!==V||Ot.texture!==Pt)&&(wt!==gt&&(n.activeTexture(gt),wt=gt),n.bindTexture(V,Pt||yt[V]),Ot.type=V,Ot.texture=Pt)}function Ze(){let V=J[wt];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function be(){try{n.compressedTexImage2D(...arguments)}catch(V){ge("WebGLState:",V)}}function Y(){try{n.compressedTexImage3D(...arguments)}catch(V){ge("WebGLState:",V)}}function P(){try{n.texSubImage2D(...arguments)}catch(V){ge("WebGLState:",V)}}function it(){try{n.texSubImage3D(...arguments)}catch(V){ge("WebGLState:",V)}}function mt(){try{n.compressedTexSubImage2D(...arguments)}catch(V){ge("WebGLState:",V)}}function Et(){try{n.compressedTexSubImage3D(...arguments)}catch(V){ge("WebGLState:",V)}}function Gt(){try{n.texStorage2D(...arguments)}catch(V){ge("WebGLState:",V)}}function $t(){try{n.texStorage3D(...arguments)}catch(V){ge("WebGLState:",V)}}function xt(){try{n.texImage2D(...arguments)}catch(V){ge("WebGLState:",V)}}function L(){try{n.texImage3D(...arguments)}catch(V){ge("WebGLState:",V)}}function j(V){return v[V]!==void 0?v[V]:n.getParameter(V)}function K(V,Pt){v[V]!==Pt&&(n.pixelStorei(V,Pt),v[V]=Pt)}function rt(V){Ht.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Ht.copy(V))}function ut(V){Bt.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Bt.copy(V))}function Nt(V,Pt){let gt=d.get(Pt);gt===void 0&&(gt=new WeakMap,d.set(Pt,gt));let Ot=gt.get(V);Ot===void 0&&(Ot=n.getUniformBlockIndex(Pt,V.name),gt.set(V,Ot))}function It(V,Pt){let Ot=d.get(Pt).get(V);f.get(Pt)!==Ot&&(n.uniformBlockBinding(Pt,Ot,V.__bindingPointIndex),f.set(Pt,Ot))}function Vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),l.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),_={},v={},wt=null,J={},g={},b=new WeakMap,w=[],T=null,S=!1,x=null,O=null,H=null,R=null,U=null,B=null,W=null,C=new ye(0,0,0),k=0,X=!1,et=null,st=null,$=null,q=null,Z=null,Ht.set(0,0,n.canvas.width,n.canvas.height),Bt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:z,disable:Xt,bindFramebuffer:te,drawBuffers:kt,useProgram:ce,setBlending:Yt,setMaterial:pe,setFlipSided:ue,setCullFace:we,setLineWidth:Le,setPolygonOffset:je,setScissorTest:Ne,activeTexture:He,bindTexture:ht,unbindTexture:Ze,compressedTexImage2D:be,compressedTexImage3D:Y,texImage2D:xt,texImage3D:L,pixelStorei:K,getParameter:j,updateUBOMapping:Nt,uniformBlockBinding:It,texStorage2D:Gt,texStorage3D:$t,texSubImage2D:P,texSubImage3D:it,compressedTexSubImage2D:mt,compressedTexSubImage3D:Et,scissor:rt,viewport:ut,reset:Vt}}function hM(n,t,e,i,r,o,l){let u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new le,_=new WeakMap,v=new Set,g,b=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(Y,P){return w?new OffscreenCanvas(Y,P):so("canvas")}function S(Y,P,it){let mt=1,Et=be(Y);if((Et.width>it||Et.height>it)&&(mt=it/Math.max(Et.width,Et.height)),mt<1)if(typeof HTMLImageElement<"u"&&Y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Y instanceof ImageBitmap||typeof VideoFrame<"u"&&Y instanceof VideoFrame){let Gt=Math.floor(mt*Et.width),$t=Math.floor(mt*Et.height);g===void 0&&(g=T(Gt,$t));let xt=P?T(Gt,$t):g;return xt.width=Gt,xt.height=$t,xt.getContext("2d").drawImage(Y,0,0,Gt,$t),de("WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+Gt+"x"+$t+")."),xt}else return"data"in Y&&de("WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),Y;return Y}function x(Y){return Y.generateMipmaps}function O(Y){n.generateMipmap(Y)}function H(Y){return Y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:Y.isWebGL3DRenderTarget?n.TEXTURE_3D:Y.isWebGLArrayRenderTarget||Y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(Y,P,it,mt,Et,Gt=!1){if(Y!==null){if(n[Y]!==void 0)return n[Y];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+Y+"'")}let $t;mt&&($t=t.get("EXT_texture_norm16"),$t||de("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xt=P;if(P===n.RED&&(it===n.FLOAT&&(xt=n.R32F),it===n.HALF_FLOAT&&(xt=n.R16F),it===n.UNSIGNED_BYTE&&(xt=n.R8),it===n.UNSIGNED_SHORT&&$t&&(xt=$t.R16_EXT),it===n.SHORT&&$t&&(xt=$t.R16_SNORM_EXT)),P===n.RED_INTEGER&&(it===n.UNSIGNED_BYTE&&(xt=n.R8UI),it===n.UNSIGNED_SHORT&&(xt=n.R16UI),it===n.UNSIGNED_INT&&(xt=n.R32UI),it===n.BYTE&&(xt=n.R8I),it===n.SHORT&&(xt=n.R16I),it===n.INT&&(xt=n.R32I)),P===n.RG&&(it===n.FLOAT&&(xt=n.RG32F),it===n.HALF_FLOAT&&(xt=n.RG16F),it===n.UNSIGNED_BYTE&&(xt=n.RG8),it===n.UNSIGNED_SHORT&&$t&&(xt=$t.RG16_EXT),it===n.SHORT&&$t&&(xt=$t.RG16_SNORM_EXT)),P===n.RG_INTEGER&&(it===n.UNSIGNED_BYTE&&(xt=n.RG8UI),it===n.UNSIGNED_SHORT&&(xt=n.RG16UI),it===n.UNSIGNED_INT&&(xt=n.RG32UI),it===n.BYTE&&(xt=n.RG8I),it===n.SHORT&&(xt=n.RG16I),it===n.INT&&(xt=n.RG32I)),P===n.RGB_INTEGER&&(it===n.UNSIGNED_BYTE&&(xt=n.RGB8UI),it===n.UNSIGNED_SHORT&&(xt=n.RGB16UI),it===n.UNSIGNED_INT&&(xt=n.RGB32UI),it===n.BYTE&&(xt=n.RGB8I),it===n.SHORT&&(xt=n.RGB16I),it===n.INT&&(xt=n.RGB32I)),P===n.RGBA_INTEGER&&(it===n.UNSIGNED_BYTE&&(xt=n.RGBA8UI),it===n.UNSIGNED_SHORT&&(xt=n.RGBA16UI),it===n.UNSIGNED_INT&&(xt=n.RGBA32UI),it===n.BYTE&&(xt=n.RGBA8I),it===n.SHORT&&(xt=n.RGBA16I),it===n.INT&&(xt=n.RGBA32I)),P===n.RGB&&(it===n.UNSIGNED_SHORT&&$t&&(xt=$t.RGB16_EXT),it===n.SHORT&&$t&&(xt=$t.RGB16_SNORM_EXT),it===n.UNSIGNED_INT_5_9_9_9_REV&&(xt=n.RGB9_E5),it===n.UNSIGNED_INT_10F_11F_11F_REV&&(xt=n.R11F_G11F_B10F)),P===n.RGBA){let L=Gt?ro:Ae.getTransfer(Et);it===n.FLOAT&&(xt=n.RGBA32F),it===n.HALF_FLOAT&&(xt=n.RGBA16F),it===n.UNSIGNED_BYTE&&(xt=L===Ue?n.SRGB8_ALPHA8:n.RGBA8),it===n.UNSIGNED_SHORT&&$t&&(xt=$t.RGBA16_EXT),it===n.SHORT&&$t&&(xt=$t.RGBA16_SNORM_EXT),it===n.UNSIGNED_SHORT_4_4_4_4&&(xt=n.RGBA4),it===n.UNSIGNED_SHORT_5_5_5_1&&(xt=n.RGB5_A1)}return(xt===n.R16F||xt===n.R32F||xt===n.RG16F||xt===n.RG32F||xt===n.RGBA16F||xt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function U(Y,P){let it;return Y?P===null||P===ai||P===Ps?it=n.DEPTH24_STENCIL8:P===li?it=n.DEPTH32F_STENCIL8:P===Cs&&(it=n.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===ai||P===Ps?it=n.DEPTH_COMPONENT24:P===li?it=n.DEPTH_COMPONENT32F:P===Cs&&(it=n.DEPTH_COMPONENT16),it}function B(Y,P){return x(Y)===!0||Y.isFramebufferTexture&&Y.minFilter!==un&&Y.minFilter!==dn?Math.log2(Math.max(P.width,P.height))+1:Y.mipmaps!==void 0&&Y.mipmaps.length>0?Y.mipmaps.length:Y.isCompressedTexture&&Array.isArray(Y.image)?P.mipmaps.length:1}function W(Y){let P=Y.target;P.removeEventListener("dispose",W),k(P),P.isVideoTexture&&_.delete(P),P.isHTMLTexture&&v.delete(P)}function C(Y){let P=Y.target;P.removeEventListener("dispose",C),et(P)}function k(Y){let P=i.get(Y);if(P.__webglInit===void 0)return;let it=Y.source,mt=b.get(it);if(mt){let Et=mt[P.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&X(Y),Object.keys(mt).length===0&&b.delete(it)}i.remove(Y)}function X(Y){let P=i.get(Y);n.deleteTexture(P.__webglTexture);let it=Y.source,mt=b.get(it);delete mt[P.__cacheKey],l.memory.textures--}function et(Y){let P=i.get(Y);if(Y.depthTexture&&(Y.depthTexture.dispose(),i.remove(Y.depthTexture)),Y.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(P.__webglFramebuffer[mt]))for(let Et=0;Et<P.__webglFramebuffer[mt].length;Et++)n.deleteFramebuffer(P.__webglFramebuffer[mt][Et]);else n.deleteFramebuffer(P.__webglFramebuffer[mt]);P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[mt])}else{if(Array.isArray(P.__webglFramebuffer))for(let mt=0;mt<P.__webglFramebuffer.length;mt++)n.deleteFramebuffer(P.__webglFramebuffer[mt]);else n.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let mt=0;mt<P.__webglColorRenderbuffer.length;mt++)P.__webglColorRenderbuffer[mt]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[mt]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let it=Y.textures;for(let mt=0,Et=it.length;mt<Et;mt++){let Gt=i.get(it[mt]);Gt.__webglTexture&&(n.deleteTexture(Gt.__webglTexture),l.memory.textures--),i.remove(it[mt])}i.remove(Y)}let st=0;function $(){st=0}function q(){return st}function Z(Y){st=Y}function lt(){let Y=st;return Y>=r.maxTextures&&de("WebGLTextures: Trying to use "+(Y+1)+" texture units while this GPU supports only "+r.maxTextures),st+=1,Y}function dt(Y){let P=[];return P.push(Y.wrapS),P.push(Y.wrapT),P.push(Y.wrapR||0),P.push(Y.magFilter),P.push(Y.minFilter),P.push(Y.anisotropy),P.push(Y.internalFormat),P.push(Y.format),P.push(Y.type),P.push(Y.generateMipmaps),P.push(Y.premultiplyAlpha),P.push(Y.flipY),P.push(Y.unpackAlignment),P.push(Y.colorSpace),P.join()}function Mt(Y,P){let it=i.get(Y);if(Y.isVideoTexture&&ht(Y),Y.isRenderTargetTexture===!1&&Y.isExternalTexture!==!0&&Y.version>0&&it.__version!==Y.version){let mt=Y.image;if(mt===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{Xt(it,Y,P);return}}else Y.isExternalTexture&&(it.__webglTexture=Y.sourceTexture?Y.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,it.__webglTexture,n.TEXTURE0+P)}function pt(Y,P){let it=i.get(Y);if(Y.isRenderTargetTexture===!1&&Y.version>0&&it.__version!==Y.version){Xt(it,Y,P);return}else Y.isExternalTexture&&(it.__webglTexture=Y.sourceTexture?Y.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,it.__webglTexture,n.TEXTURE0+P)}function wt(Y,P){let it=i.get(Y);if(Y.isRenderTargetTexture===!1&&Y.version>0&&it.__version!==Y.version){Xt(it,Y,P);return}e.bindTexture(n.TEXTURE_3D,it.__webglTexture,n.TEXTURE0+P)}function J(Y,P){let it=i.get(Y);if(Y.isCubeDepthTexture!==!0&&Y.version>0&&it.__version!==Y.version){te(it,Y,P);return}e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture,n.TEXTURE0+P)}let At={[Ua]:n.REPEAT,[gi]:n.CLAMP_TO_EDGE,[Ba]:n.MIRRORED_REPEAT},Lt={[un]:n.NEAREST,[od]:n.NEAREST_MIPMAP_NEAREST,[Po]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[fl]:n.LINEAR_MIPMAP_NEAREST,[fr]:n.LINEAR_MIPMAP_LINEAR},Ht={[hd]:n.NEVER,[md]:n.ALWAYS,[ud]:n.LESS,[Jl]:n.LEQUAL,[fd]:n.EQUAL,[jl]:n.GEQUAL,[dd]:n.GREATER,[pd]:n.NOTEQUAL};function Bt(Y,P){if(P.type===li&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===dn||P.magFilter===fl||P.magFilter===Po||P.magFilter===fr||P.minFilter===dn||P.minFilter===fl||P.minFilter===Po||P.minFilter===fr)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(Y,n.TEXTURE_WRAP_S,At[P.wrapS]),n.texParameteri(Y,n.TEXTURE_WRAP_T,At[P.wrapT]),(Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(Y,n.TEXTURE_WRAP_R,At[P.wrapR]),n.texParameteri(Y,n.TEXTURE_MAG_FILTER,Lt[P.magFilter]),n.texParameteri(Y,n.TEXTURE_MIN_FILTER,Lt[P.minFilter]),P.compareFunction&&(n.texParameteri(Y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(Y,n.TEXTURE_COMPARE_FUNC,Ht[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===un||P.minFilter!==Po&&P.minFilter!==fr||P.type===li&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||i.get(P).__currentAnisotropy){let it=t.get("EXT_texture_filter_anisotropic");n.texParameterf(Y,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy}}}function jt(Y,P){let it=!1;Y.__webglInit===void 0&&(Y.__webglInit=!0,P.addEventListener("dispose",W));let mt=P.source,Et=b.get(mt);Et===void 0&&(Et={},b.set(mt,Et));let Gt=dt(P);if(Gt!==Y.__cacheKey){Et[Gt]===void 0&&(Et[Gt]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,it=!0),Et[Gt].usedTimes++;let $t=Et[Y.__cacheKey];$t!==void 0&&(Et[Y.__cacheKey].usedTimes--,$t.usedTimes===0&&X(P)),Y.__cacheKey=Gt,Y.__webglTexture=Et[Gt].texture}return it}function yt(Y,P,it){return Math.floor(Math.floor(Y/it)/P)}function z(Y,P,it,mt){let Gt=Y.updateRanges;if(Gt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,P.width,P.height,it,mt,P.data);else{Gt.sort((K,rt)=>K.start-rt.start);let $t=0;for(let K=1;K<Gt.length;K++){let rt=Gt[$t],ut=Gt[K],Nt=rt.start+rt.count,It=yt(ut.start,P.width,4),Vt=yt(rt.start,P.width,4);ut.start<=Nt+1&&It===Vt&&yt(ut.start+ut.count-1,P.width,4)===It?rt.count=Math.max(rt.count,ut.start+ut.count-rt.start):(++$t,Gt[$t]=ut)}Gt.length=$t+1;let xt=e.getParameter(n.UNPACK_ROW_LENGTH),L=e.getParameter(n.UNPACK_SKIP_PIXELS),j=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,P.width);for(let K=0,rt=Gt.length;K<rt;K++){let ut=Gt[K],Nt=Math.floor(ut.start/4),It=Math.ceil(ut.count/4),Vt=Nt%P.width,V=Math.floor(Nt/P.width),Pt=It,gt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Vt),e.pixelStorei(n.UNPACK_SKIP_ROWS,V),e.texSubImage2D(n.TEXTURE_2D,0,Vt,V,Pt,gt,it,mt,P.data)}Y.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,xt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,L),e.pixelStorei(n.UNPACK_SKIP_ROWS,j)}}function Xt(Y,P,it){let mt=n.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(mt=n.TEXTURE_2D_ARRAY),P.isData3DTexture&&(mt=n.TEXTURE_3D);let Et=jt(Y,P),Gt=P.source;e.bindTexture(mt,Y.__webglTexture,n.TEXTURE0+it);let $t=i.get(Gt);if(Gt.version!==$t.__version||Et===!0){if(e.activeTexture(n.TEXTURE0+it),(typeof ImageBitmap<"u"&&P.image instanceof ImageBitmap)===!1){let gt=Ae.getPrimaries(Ae.workingColorSpace),Ot=P.colorSpace===Fi?null:Ae.getPrimaries(P.colorSpace),Wt=P.colorSpace===Fi||gt===Ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt)}e.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment);let L=S(P.image,!1,r.maxTextureSize);L=Ze(P,L);let j=o.convert(P.format,P.colorSpace),K=o.convert(P.type),rt=R(P.internalFormat,j,K,P.normalized,P.colorSpace,P.isVideoTexture);Bt(mt,P);let ut,Nt=P.mipmaps,It=P.isVideoTexture!==!0,Vt=$t.__version===void 0||Et===!0,V=Gt.dataReady,Pt=B(P,L);if(P.isDepthTexture)rt=U(P.format===dr,P.type),Vt&&(It?e.texStorage2D(n.TEXTURE_2D,1,rt,L.width,L.height):e.texImage2D(n.TEXTURE_2D,0,rt,L.width,L.height,0,j,K,null));else if(P.isDataTexture)if(Nt.length>0){It&&Vt&&e.texStorage2D(n.TEXTURE_2D,Pt,rt,Nt[0].width,Nt[0].height);for(let gt=0,Ot=Nt.length;gt<Ot;gt++)ut=Nt[gt],It?V&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,ut.width,ut.height,j,K,ut.data):e.texImage2D(n.TEXTURE_2D,gt,rt,ut.width,ut.height,0,j,K,ut.data);P.generateMipmaps=!1}else It?(Vt&&e.texStorage2D(n.TEXTURE_2D,Pt,rt,L.width,L.height),V&&z(P,L,j,K)):e.texImage2D(n.TEXTURE_2D,0,rt,L.width,L.height,0,j,K,L.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){It&&Vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Pt,rt,Nt[0].width,Nt[0].height,L.depth);for(let gt=0,Ot=Nt.length;gt<Ot;gt++)if(ut=Nt[gt],P.format!==Jn)if(j!==null)if(It){if(V)if(P.layerUpdates.size>0){let Wt=Yh(ut.width,ut.height,P.format,P.type);for(let Rt of P.layerUpdates){let Ft=ut.data.subarray(Rt*Wt/ut.data.BYTES_PER_ELEMENT,(Rt+1)*Wt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,Rt,ut.width,ut.height,1,j,Ft)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,0,ut.width,ut.height,L.depth,j,ut.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,gt,rt,ut.width,ut.height,L.depth,0,ut.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,0,ut.width,ut.height,L.depth,j,K,ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,gt,rt,ut.width,ut.height,L.depth,0,j,K,ut.data);P.layerUpdates.size>0&&P.clearLayerUpdates()}else{It&&Vt&&e.texStorage2D(n.TEXTURE_2D,Pt,rt,Nt[0].width,Nt[0].height);for(let gt=0,Ot=Nt.length;gt<Ot;gt++)ut=Nt[gt],P.format!==Jn?j!==null?It?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,gt,0,0,ut.width,ut.height,j,ut.data):e.compressedTexImage2D(n.TEXTURE_2D,gt,rt,ut.width,ut.height,0,ut.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?V&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,ut.width,ut.height,j,K,ut.data):e.texImage2D(n.TEXTURE_2D,gt,rt,ut.width,ut.height,0,j,K,ut.data)}else if(P.isDataArrayTexture)if(It){if(Vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Pt,rt,L.width,L.height,L.depth),V)if(P.layerUpdates.size>0){let gt=Yh(L.width,L.height,P.format,P.type);for(let Ot of P.layerUpdates){let Wt=L.data.subarray(Ot*gt/L.data.BYTES_PER_ELEMENT,(Ot+1)*gt/L.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ot,L.width,L.height,1,j,K,Wt)}P.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,L.width,L.height,L.depth,j,K,L.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,rt,L.width,L.height,L.depth,0,j,K,L.data);else if(P.isData3DTexture)It?(Vt&&e.texStorage3D(n.TEXTURE_3D,Pt,rt,L.width,L.height,L.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,L.width,L.height,L.depth,j,K,L.data)):e.texImage3D(n.TEXTURE_3D,0,rt,L.width,L.height,L.depth,0,j,K,L.data);else if(P.isFramebufferTexture){if(Vt)if(It)e.texStorage2D(n.TEXTURE_2D,Pt,rt,L.width,L.height);else{let gt=L.width,Ot=L.height;for(let Wt=0;Wt<Pt;Wt++)e.texImage2D(n.TEXTURE_2D,Wt,rt,gt,Ot,0,j,K,null),gt>>=1,Ot>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in n){let gt=n.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),L.parentNode!==gt){gt.appendChild(L),v.add(P),gt.onpaint=Ot=>{let Wt=Ot.changedElements;for(let Rt of v)Wt.includes(Rt.image)&&(Rt.needsUpdate=!0)},gt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,L);else{let Wt=n.RGBA,Rt=n.RGBA,Ft=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Wt,Rt,Ft,L)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(It&&Vt){let gt=be(Nt[0]);e.texStorage2D(n.TEXTURE_2D,Pt,rt,gt.width,gt.height)}for(let gt=0,Ot=Nt.length;gt<Ot;gt++)ut=Nt[gt],It?V&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,j,K,ut):e.texImage2D(n.TEXTURE_2D,gt,rt,j,K,ut);P.generateMipmaps=!1}else if(It){if(Vt){let gt=be(L);e.texStorage2D(n.TEXTURE_2D,Pt,rt,gt.width,gt.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,j,K,L)}else e.texImage2D(n.TEXTURE_2D,0,rt,j,K,L);x(P)&&O(mt),$t.__version=Gt.version,P.onUpdate&&P.onUpdate(P)}Y.__version=P.version}function te(Y,P,it){if(P.image.length!==6)return;let mt=jt(Y,P),Et=P.source;e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+it);let Gt=i.get(Et);if(Et.version!==Gt.__version||mt===!0){e.activeTexture(n.TEXTURE0+it);let $t=Ae.getPrimaries(Ae.workingColorSpace),xt=P.colorSpace===Fi?null:Ae.getPrimaries(P.colorSpace),L=P.colorSpace===Fi||$t===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,L);let j=P.isCompressedTexture||P.image[0].isCompressedTexture,K=P.image[0]&&P.image[0].isDataTexture,rt=[];for(let Rt=0;Rt<6;Rt++)!j&&!K?rt[Rt]=S(P.image[Rt],!0,r.maxCubemapSize):rt[Rt]=K?P.image[Rt].image:P.image[Rt],rt[Rt]=Ze(P,rt[Rt]);let ut=rt[0],Nt=o.convert(P.format,P.colorSpace),It=o.convert(P.type),Vt=R(P.internalFormat,Nt,It,P.normalized,P.colorSpace),V=P.isVideoTexture!==!0,Pt=Gt.__version===void 0||mt===!0,gt=Et.dataReady,Ot=B(P,ut);Bt(n.TEXTURE_CUBE_MAP,P);let Wt;if(j){V&&Pt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ot,Vt,ut.width,ut.height);for(let Rt=0;Rt<6;Rt++){Wt=rt[Rt].mipmaps;for(let Ft=0;Ft<Wt.length;Ft++){let re=Wt[Ft];P.format!==Jn?Nt!==null?V?gt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ft,0,0,re.width,re.height,Nt,re.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ft,Vt,re.width,re.height,0,re.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ft,0,0,re.width,re.height,Nt,It,re.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ft,Vt,re.width,re.height,0,Nt,It,re.data)}}}else{if(Wt=P.mipmaps,V&&Pt){Wt.length>0&&Ot++;let Rt=be(rt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ot,Vt,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(K){V?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,rt[Rt].width,rt[Rt].height,Nt,It,rt[Rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Vt,rt[Rt].width,rt[Rt].height,0,Nt,It,rt[Rt].data);for(let Ft=0;Ft<Wt.length;Ft++){let Fe=Wt[Ft].image[Rt].image;V?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ft+1,0,0,Fe.width,Fe.height,Nt,It,Fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ft+1,Vt,Fe.width,Fe.height,0,Nt,It,Fe.data)}}else{V?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Nt,It,rt[Rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Vt,Nt,It,rt[Rt]);for(let Ft=0;Ft<Wt.length;Ft++){let re=Wt[Ft];V?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ft+1,0,0,Nt,It,re.image[Rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ft+1,Vt,Nt,It,re.image[Rt])}}}x(P)&&O(n.TEXTURE_CUBE_MAP),Gt.__version=Et.version,P.onUpdate&&P.onUpdate(P)}Y.__version=P.version}function kt(Y,P,it,mt,Et,Gt){let $t=o.convert(it.format,it.colorSpace),xt=o.convert(it.type),L=R(it.internalFormat,$t,xt,it.normalized,it.colorSpace),j=i.get(P),K=i.get(it);if(K.__renderTarget=P,!j.__hasExternalTextures){let rt=Math.max(1,P.width>>Gt),ut=Math.max(1,P.height>>Gt);Et===n.TEXTURE_3D||Et===n.TEXTURE_2D_ARRAY?e.texImage3D(Et,Gt,L,rt,ut,P.depth,0,$t,xt,null):e.texImage2D(Et,Gt,L,rt,ut,0,$t,xt,null)}e.bindFramebuffer(n.FRAMEBUFFER,Y),He(P)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,mt,Et,K.__webglTexture,0,Ne(P)):(Et===n.TEXTURE_2D||Et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,mt,Et,K.__webglTexture,Gt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(Y,P,it){if(n.bindRenderbuffer(n.RENDERBUFFER,Y),P.depthBuffer){let mt=P.depthTexture,Et=mt&&mt.isDepthTexture?mt.type:null,Gt=U(P.stencilBuffer,Et),$t=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;He(P)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne(P),Gt,P.width,P.height):it?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne(P),Gt,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,Gt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,$t,n.RENDERBUFFER,Y)}else{let mt=P.textures;for(let Et=0;Et<mt.length;Et++){let Gt=mt[Et],$t=o.convert(Gt.format,Gt.colorSpace),xt=o.convert(Gt.type),L=R(Gt.internalFormat,$t,xt,Gt.normalized,Gt.colorSpace);He(P)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne(P),L,P.width,P.height):it?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne(P),L,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,L,P.width,P.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(Y,P,it){let mt=P.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,Y),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Et=i.get(P.depthTexture);if(Et.__renderTarget=P,(!Et.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),mt){if(Et.__webglInit===void 0&&(Et.__webglInit=!0,P.depthTexture.addEventListener("dispose",W)),Et.__webglTexture===void 0){Et.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Et.__webglTexture),Bt(n.TEXTURE_CUBE_MAP,P.depthTexture);let j=o.convert(P.depthTexture.format),K=o.convert(P.depthTexture.type),rt;P.depthTexture.format===_i?rt=n.DEPTH_COMPONENT24:P.depthTexture.format===dr&&(rt=n.DEPTH24_STENCIL8);for(let ut=0;ut<6;ut++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,rt,P.width,P.height,0,j,K,null)}}else Mt(P.depthTexture,0);let Gt=Et.__webglTexture,$t=Ne(P),xt=mt?n.TEXTURE_CUBE_MAP_POSITIVE_X+it:n.TEXTURE_2D,L=P.depthTexture.format===dr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(P.depthTexture.format===_i)He(P)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,L,xt,Gt,0,$t):n.framebufferTexture2D(n.FRAMEBUFFER,L,xt,Gt,0);else if(P.depthTexture.format===dr)He(P)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,L,xt,Gt,0,$t):n.framebufferTexture2D(n.FRAMEBUFFER,L,xt,Gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fe(Y){let P=i.get(Y),it=Y.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==Y.depthTexture){let mt=Y.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),mt){let Et=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,mt.removeEventListener("dispose",Et)};mt.addEventListener("dispose",Et),P.__depthDisposeCallback=Et}P.__boundDepthTexture=mt}if(Y.depthTexture&&!P.__autoAllocateDepthBuffer)if(it)for(let mt=0;mt<6;mt++)Re(P.__webglFramebuffer[mt],Y,mt);else{let mt=Y.texture.mipmaps;mt&&mt.length>0?Re(P.__webglFramebuffer[0],Y,0):Re(P.__webglFramebuffer,Y,0)}else if(it){P.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[mt]),P.__webglDepthbuffer[mt]===void 0)P.__webglDepthbuffer[mt]=n.createRenderbuffer(),ce(P.__webglDepthbuffer[mt],Y,!1);else{let Et=Y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Gt=P.__webglDepthbuffer[mt];n.bindRenderbuffer(n.RENDERBUFFER,Gt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,Gt)}}else{let mt=Y.texture.mipmaps;if(mt&&mt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=n.createRenderbuffer(),ce(P.__webglDepthbuffer,Y,!1);else{let Et=Y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Gt=P.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Gt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,Gt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Yt(Y,P,it){let mt=i.get(Y);P!==void 0&&kt(mt.__webglFramebuffer,Y,Y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),it!==void 0&&fe(Y)}function pe(Y){let P=Y.texture,it=i.get(Y),mt=i.get(P);Y.addEventListener("dispose",C);let Et=Y.textures,Gt=Y.isWebGLCubeRenderTarget===!0,$t=Et.length>1;if($t||(mt.__webglTexture===void 0&&(mt.__webglTexture=n.createTexture()),mt.__version=P.version,l.memory.textures++),Gt){it.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(P.mipmaps&&P.mipmaps.length>0){it.__webglFramebuffer[xt]=[];for(let L=0;L<P.mipmaps.length;L++)it.__webglFramebuffer[xt][L]=n.createFramebuffer()}else it.__webglFramebuffer[xt]=n.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){it.__webglFramebuffer=[];for(let xt=0;xt<P.mipmaps.length;xt++)it.__webglFramebuffer[xt]=n.createFramebuffer()}else it.__webglFramebuffer=n.createFramebuffer();if($t)for(let xt=0,L=Et.length;xt<L;xt++){let j=i.get(Et[xt]);j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture(),l.memory.textures++)}if(Y.samples>0&&He(Y)===!1){it.__webglMultisampledFramebuffer=n.createFramebuffer(),it.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let xt=0;xt<Et.length;xt++){let L=Et[xt];it.__webglColorRenderbuffer[xt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,it.__webglColorRenderbuffer[xt]);let j=o.convert(L.format,L.colorSpace),K=o.convert(L.type),rt=R(L.internalFormat,j,K,L.normalized,L.colorSpace,Y.isXRRenderTarget===!0),ut=Ne(Y);n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,rt,Y.width,Y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,it.__webglColorRenderbuffer[xt])}n.bindRenderbuffer(n.RENDERBUFFER,null),Y.depthBuffer&&(it.__webglDepthRenderbuffer=n.createRenderbuffer(),ce(it.__webglDepthRenderbuffer,Y,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Gt){e.bindTexture(n.TEXTURE_CUBE_MAP,mt.__webglTexture),Bt(n.TEXTURE_CUBE_MAP,P);for(let xt=0;xt<6;xt++)if(P.mipmaps&&P.mipmaps.length>0)for(let L=0;L<P.mipmaps.length;L++)kt(it.__webglFramebuffer[xt][L],Y,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,L);else kt(it.__webglFramebuffer[xt],Y,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);x(P)&&O(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if($t){for(let xt=0,L=Et.length;xt<L;xt++){let j=Et[xt],K=i.get(j),rt=n.TEXTURE_2D;(Y.isWebGL3DRenderTarget||Y.isWebGLArrayRenderTarget)&&(rt=Y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,K.__webglTexture),Bt(rt,j),kt(it.__webglFramebuffer,Y,j,n.COLOR_ATTACHMENT0+xt,rt,0),x(j)&&O(rt)}e.unbindTexture()}else{let xt=n.TEXTURE_2D;if((Y.isWebGL3DRenderTarget||Y.isWebGLArrayRenderTarget)&&(xt=Y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(xt,mt.__webglTexture),Bt(xt,P),P.mipmaps&&P.mipmaps.length>0)for(let L=0;L<P.mipmaps.length;L++)kt(it.__webglFramebuffer[L],Y,P,n.COLOR_ATTACHMENT0,xt,L);else kt(it.__webglFramebuffer,Y,P,n.COLOR_ATTACHMENT0,xt,0);x(P)&&O(xt),e.unbindTexture()}Y.depthBuffer&&fe(Y)}function ue(Y){let P=Y.textures;for(let it=0,mt=P.length;it<mt;it++){let Et=P[it];if(x(Et)){let Gt=H(Y),$t=i.get(Et).__webglTexture;e.bindTexture(Gt,$t),O(Gt),e.unbindTexture()}}}let we=[],Le=[];function je(Y){if(Y.samples>0){if(He(Y)===!1){let P=Y.textures,it=Y.width,mt=Y.height,Et=n.COLOR_BUFFER_BIT,Gt=Y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$t=i.get(Y),xt=P.length>1;if(xt)for(let j=0;j<P.length;j++)e.bindFramebuffer(n.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,$t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,$t.__webglMultisampledFramebuffer);let L=Y.texture.mipmaps;L&&L.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,$t.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,$t.__webglFramebuffer);for(let j=0;j<P.length;j++){if(Y.resolveDepthBuffer&&(Y.depthBuffer&&(Et|=n.DEPTH_BUFFER_BIT),Y.stencilBuffer&&Y.resolveStencilBuffer&&(Et|=n.STENCIL_BUFFER_BIT)),xt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,$t.__webglColorRenderbuffer[j]);let K=i.get(P[j]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,K,0)}n.blitFramebuffer(0,0,it,mt,0,0,it,mt,Et,n.NEAREST),f===!0&&(we.length=0,Le.length=0,we.push(n.COLOR_ATTACHMENT0+j),Y.depthBuffer&&Y.storeMultisampledDepthBuffer===!1&&(we.push(Gt),Le.push(Gt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Le)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,we))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xt)for(let j=0;j<P.length;j++){e.bindFramebuffer(n.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,$t.__webglColorRenderbuffer[j]);let K=i.get(P[j]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,$t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.TEXTURE_2D,K,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,$t.__webglMultisampledFramebuffer)}else if(Y.depthBuffer&&Y.storeMultisampledDepthBuffer===!1&&f){let P=Y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[P])}}}function Ne(Y){return Math.min(r.maxSamples,Y.samples)}function He(Y){let P=i.get(Y);return Y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function ht(Y){let P=l.render.frame;_.get(Y)!==P&&(_.set(Y,P),Y.update())}function Ze(Y,P){let it=Y.colorSpace,mt=Y.format,Et=Y.type;return Y.isCompressedTexture===!0||Y.isVideoTexture===!0||it!==io&&it!==Fi&&(Ae.getTransfer(it)===Ue?(mt!==Jn||Et!==In)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ge("WebGLTextures: Unsupported texture color space:",it)),P}function be(Y){return typeof HTMLImageElement<"u"&&Y instanceof HTMLImageElement?(d.width=Y.naturalWidth||Y.width,d.height=Y.naturalHeight||Y.height):typeof VideoFrame<"u"&&Y instanceof VideoFrame?(d.width=Y.displayWidth,d.height=Y.displayHeight):(d.width=Y.width,d.height=Y.height),d}this.allocateTextureUnit=lt,this.resetTextureUnits=$,this.getTextureUnits=q,this.setTextureUnits=Z,this.setTexture2D=Mt,this.setTexture2DArray=pt,this.setTexture3D=wt,this.setTextureCube=J,this.rebindTextures=Yt,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=kt,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function uM(n,t){function e(i,r=Fi){let o,l=Ae.getTransfer(r);if(i===In)return n.UNSIGNED_BYTE;if(i===pl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ml)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Dh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Oh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Lh)return n.BYTE;if(i===Nh)return n.SHORT;if(i===Cs)return n.UNSIGNED_SHORT;if(i===dl)return n.INT;if(i===ai)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===ci)return n.HALF_FLOAT;if(i===Fh)return n.ALPHA;if(i===Uh)return n.RGB;if(i===Jn)return n.RGBA;if(i===_i)return n.DEPTH_COMPONENT;if(i===dr)return n.DEPTH_STENCIL;if(i===Bh)return n.RED;if(i===gl)return n.RED_INTEGER;if(i===pr)return n.RG;if(i===_l)return n.RG_INTEGER;if(i===vl)return n.RGBA_INTEGER;if(i===Io||i===Ro||i===Lo||i===No)if(l===Ue)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Io)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===No)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Io)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ro)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===No)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yl||i===xl||i===Ml||i===Sl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===yl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ml)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bl||i===wl||i===El||i===Tl||i===Al||i===Do||i===Cl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===bl||i===wl)return l===Ue?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===El)return l===Ue?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Tl)return o.COMPRESSED_R11_EAC;if(i===Al)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Do)return o.COMPRESSED_RG11_EAC;if(i===Cl)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Pl||i===Il||i===Rl||i===Ll||i===Nl||i===Dl||i===Ol||i===Fl||i===Ul||i===Bl||i===kl||i===zl||i===Vl||i===Hl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Pl)return l===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Il)return l===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rl)return l===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ll)return l===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nl)return l===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dl)return l===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ol)return l===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fl)return l===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ul)return l===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bl)return l===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kl)return l===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zl)return l===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vl)return l===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hl)return l===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gl||i===Xl||i===Wl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===Gl)return l===Ue?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yl||i===$l||i===Oo||i===ql)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===Yl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===$l)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ql)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ps?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}function mM(n,t){function e(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function i(S,x){x.color.getRGB(S.fogColor.value,Gh(n)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function r(S,x,O,H,R){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?o(S,x):x.isMeshLambertMaterial?(o(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(o(S,x),v(S,x)):x.isMeshPhongMaterial?(o(S,x),_(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(o(S,x),g(S,x),x.isMeshPhysicalMaterial&&b(S,x,R)):x.isMeshMatcapMaterial?(o(S,x),w(S,x)):x.isMeshDepthMaterial?o(S,x):x.isMeshDistanceMaterial?(o(S,x),T(S,x)):x.isMeshNormalMaterial?o(S,x):x.isLineBasicMaterial?(l(S,x),x.isLineDashedMaterial&&u(S,x)):x.isPointsMaterial?f(S,x,O,H):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function o(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,e(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,e(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,e(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Tn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,e(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Tn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,e(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,e(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);let O=t.get(x),H=O.envMap,R=O.envMapRotation;H&&(S.envMap.value=H,S.envMapRotation.value.setFromMatrix4(pM.makeRotationFromEuler(R)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Kd),S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,S.aoMapTransform))}function l(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,e(x.map,S.mapTransform))}function u(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function f(S,x,O,H){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*O,S.scale.value=H*.5,x.map&&(S.map.value=x.map,e(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,e(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,e(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,e(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function _(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function v(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function g(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function b(S,x,O){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Tn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.retroreflectivity>0&&(S.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,x){x.matcap&&(S.matcap.value=x.matcap)}function T(S,x){let O=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gM(n,t,e,i){let r={},o={},l=[],u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(R,U){let B=U.program;i.uniformBlockBinding(R,B)}function d(R,U){let B=r[R.id];B===void 0&&(S(R),B=_(R),r[R.id]=B,R.addEventListener("dispose",O));let W=U.program;i.updateUBOMapping(R,W);let C=t.render.frame;o[R.id]!==C&&(g(R),o[R.id]=C)}function _(R){let U=v();R.__bindingPointIndex=U;let B=n.createBuffer(),W=R.__size,C=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,B),n.bufferData(n.UNIFORM_BUFFER,W,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,U,B),B}function v(){for(let R=0;R<u;R++)if(l.indexOf(R)===-1)return l.push(R),R;return ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){let U=r[R.id],B=R.uniforms,W=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,U);for(let C=0,k=B.length;C<k;C++){let X=B[C];if(Array.isArray(X))for(let et=0,st=X.length;et<st;et++)b(X[et],C,et,W);else b(X,C,0,W)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function b(R,U,B,W){if(T(R,U,B,W)===!0){let C=R.__offset,k=R.value;if(Array.isArray(k)){let X=0;for(let et=0;et<k.length;et++){let st=k[et],$=x(st);w(st,R.__data,X),typeof st!="number"&&typeof st!="boolean"&&!st.isMatrix3&&!ArrayBuffer.isView(st)&&(X+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(k,R.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,C,R.__data)}}function w(R,U,B){typeof R=="number"||typeof R=="boolean"?U[0]=R:R.isMatrix3?(U[0]=R.elements[0],U[1]=R.elements[1],U[2]=R.elements[2],U[3]=0,U[4]=R.elements[3],U[5]=R.elements[4],U[6]=R.elements[5],U[7]=0,U[8]=R.elements[6],U[9]=R.elements[7],U[10]=R.elements[8],U[11]=0):ArrayBuffer.isView(R)?U.set(new R.constructor(R.buffer,R.byteOffset,U.length)):R.toArray(U,B)}function T(R,U,B,W){let C=R.value,k=U+"_"+B;if(W[k]===void 0)return typeof C=="number"||typeof C=="boolean"?W[k]=C:ArrayBuffer.isView(C)?W[k]=C.slice():W[k]=C.clone(),!0;{let X=W[k];if(typeof C=="number"||typeof C=="boolean"){if(X!==C)return W[k]=C,!0}else{if(ArrayBuffer.isView(C))return!0;if(X.equals(C)===!1)return X.copy(C),!0}}return!1}function S(R){let U=R.uniforms,B=0,W=16;for(let k=0,X=U.length;k<X;k++){let et=Array.isArray(U[k])?U[k]:[U[k]];for(let st=0,$=et.length;st<$;st++){let q=et[st],Z=Array.isArray(q.value)?q.value:[q.value];for(let lt=0,dt=Z.length;lt<dt;lt++){let Mt=Z[lt],pt=x(Mt),wt=B%W,J=wt%pt.boundary,At=wt+J;B+=J,At!==0&&W-At<pt.storage&&(B+=W-At),q.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=B,B+=pt.storage}}}let C=B%W;return C>0&&(B+=W-C),R.__size=B,R.__cache={},this}function x(R){let U={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(U.boundary=4,U.storage=4):R.isVector2?(U.boundary=8,U.storage=8):R.isVector3||R.isColor?(U.boundary=16,U.storage=12):R.isVector4?(U.boundary=16,U.storage=16):R.isMatrix3?(U.boundary=48,U.storage=48):R.isMatrix4?(U.boundary=64,U.storage=64):R.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(U.boundary=16,U.storage=R.byteLength):de("WebGLRenderer: Unsupported uniform value type.",R),U}function O(R){let U=R.target;U.removeEventListener("dispose",O);let B=l.indexOf(U.__bindingPointIndex);l.splice(B,1),n.deleteBuffer(r[U.id]),delete r[U.id],delete o[U.id]}function H(){for(let R in r)n.deleteBuffer(r[R]);l=[],r={},o={}}return{bind:f,update:d,dispose:H}}function vM(){return Mi===null&&(Mi=new Xa(_M,16,16,pr,ci),Mi.name="DFG_LUT",Mi.minFilter=dn,Mi.magFilter=dn,Mi.wrapS=gi,Mi.wrapT=gi,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}var R0,L0,N0,D0,O0,F0,U0,B0,k0,z0,V0,H0,G0,X0,W0,Y0,$0,q0,Z0,J0,j0,K0,Q0,t_,e_,n_,i_,r_,s_,o_,a_,l_,c_,h_,u_,f_,d_,p_,m_,g_,__,v_,y_,x_,M_,S_,b_,w_,E_,T_,A_,C_,P_,I_,R_,L_,N_,D_,O_,F_,U_,B_,k_,z_,V_,H_,G_,X_,W_,Y_,$_,q_,Z_,J_,j_,K_,Q_,tv,ev,nv,iv,rv,sv,ov,av,lv,cv,hv,uv,fv,dv,pv,mv,gv,_v,vv,yv,xv,Mv,Sv,bv,wv,Ev,Tv,Av,Cv,Pv,Iv,Rv,Lv,Nv,Dv,Ov,Fv,Uv,Bv,kv,zv,Vv,Hv,Gv,Xv,Wv,Yv,$v,qv,Zv,Jv,jv,Kv,Qv,ty,ey,ny,iy,ry,sy,oy,ay,ly,cy,hy,Se,Qt,Si,Kl,uy,$d,Rs,_y,vy,yy,Fo,Ed,qh,Zh,Jh,jh,xy,Lr,tc,ec,Ry,qd,tu,Zd,Jd,jd,Pd,Id,Rd,Ld,Nd,eu,nu,iu,Kh,Ls,xx,Mx,Fd,Ex,Ql,Rx,Lx,Dx,Fx,Bx,zx,Hx,Yx,su,ou,tM,rM,sM,oM,aM,Wd,Uo,Qh,fM,dM,au,lu,pM,Kd,_M,Mi,nc,sc=gn(()=>{$h();$h();R0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L0=`#ifdef USE_ALPHAHASH
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
#endif`,N0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U0=`#ifdef USE_AOMAP
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
#endif`,B0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k0=`#ifdef USE_BATCHING
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
#endif`,z0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,X0=`#ifdef USE_IRIDESCENCE
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
#endif`,W0=`#ifdef USE_BUMPMAP
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
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,t_=`#define PI 3.141592653589793
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
} // validated`,e_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,n_=`vec3 transformedNormal = objectNormal;
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
#endif`,i_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a_="gl_FragColor = linearToOutputTexel( gl_FragColor );",l_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c_=`#ifdef USE_ENVMAP
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
#endif`,h_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,u_=`#ifdef USE_ENVMAP
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
#endif`,f_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d_=`#ifdef USE_ENVMAP
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
#endif`,p_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,__=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v_=`#ifdef USE_GRADIENTMAP
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
}`,y_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,b_=`#ifdef USE_ENVMAP
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
#endif`,w_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C_=`PhysicalMaterial material;
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
#endif`,P_=`uniform sampler2D dfgLUT;
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
}`,I_=`
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
#endif`,R_=`#if defined( RE_IndirectDiffuse )
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
#endif`,L_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,D_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,V_=`#if defined( USE_POINTS_UV )
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
#endif`,H_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,X_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$_=`#ifdef USE_MORPHTARGETS
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
#endif`,q_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,J_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,j_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tv=`#ifdef USE_NORMALMAP
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
#endif`,ev=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ov=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,av=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gv=`float getShadowMask() {
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
}`,_v=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vv=`#ifdef USE_SKINNING
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
#endif`,yv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xv=`#ifdef USE_SKINNING
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
#endif`,Mv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ev=`#ifdef USE_TRANSMISSION
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
#endif`,Tv=`#ifdef USE_TRANSMISSION
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
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lv=`uniform sampler2D t2D;
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
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`#include <common>
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
}`,Bv=`#if DEPTH_PACKING == 3200
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
}`,kv=`#define DISTANCE
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
}`,zv=`#define DISTANCE
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
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`uniform float scale;
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
}`,Xv=`uniform vec3 diffuse;
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
}`,Wv=`#include <common>
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
}`,Yv=`uniform vec3 diffuse;
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
}`,$v=`#define LAMBERT
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
}`,qv=`#define LAMBERT
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
}`,Zv=`#define MATCAP
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
}`,Jv=`#define MATCAP
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
}`,jv=`#define NORMAL
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
}`,Kv=`#define NORMAL
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
}`,Qv=`#define PHONG
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
}`,ty=`#define PHONG
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
}`,ey=`#define STANDARD
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
}`,ny=`#define STANDARD
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
}`,iy=`#define TOON
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
}`,ry=`#define TOON
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
}`,sy=`uniform float size;
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
}`,oy=`uniform vec3 diffuse;
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
}`,ay=`#include <common>
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
}`,ly=`uniform vec3 color;
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
}`,cy=`uniform float rotation;
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
}`,hy=`uniform vec3 diffuse;
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
}`,Se={alphahash_fragment:R0,alphahash_pars_fragment:L0,alphamap_fragment:N0,alphamap_pars_fragment:D0,alphatest_fragment:O0,alphatest_pars_fragment:F0,aomap_fragment:U0,aomap_pars_fragment:B0,batching_pars_vertex:k0,batching_vertex:z0,begin_vertex:V0,beginnormal_vertex:H0,bsdfs:G0,iridescence_fragment:X0,bumpmap_pars_fragment:W0,clipping_planes_fragment:Y0,clipping_planes_pars_fragment:$0,clipping_planes_pars_vertex:q0,clipping_planes_vertex:Z0,color_fragment:J0,color_pars_fragment:j0,color_pars_vertex:K0,color_vertex:Q0,common:t_,cube_uv_reflection_fragment:e_,defaultnormal_vertex:n_,displacementmap_pars_vertex:i_,displacementmap_vertex:r_,emissivemap_fragment:s_,emissivemap_pars_fragment:o_,colorspace_fragment:a_,colorspace_pars_fragment:l_,envmap_fragment:c_,envmap_common_pars_fragment:h_,envmap_pars_fragment:u_,envmap_pars_vertex:f_,envmap_physical_pars_fragment:b_,envmap_vertex:d_,fog_vertex:p_,fog_pars_vertex:m_,fog_fragment:g_,fog_pars_fragment:__,gradientmap_pars_fragment:v_,lightmap_pars_fragment:y_,lights_lambert_fragment:x_,lights_lambert_pars_fragment:M_,lights_pars_begin:S_,lights_toon_fragment:w_,lights_toon_pars_fragment:E_,lights_phong_fragment:T_,lights_phong_pars_fragment:A_,lights_physical_fragment:C_,lights_physical_pars_fragment:P_,lights_fragment_begin:I_,lights_fragment_maps:R_,lights_fragment_end:L_,lightprobes_pars_fragment:N_,logdepthbuf_fragment:D_,logdepthbuf_pars_fragment:O_,logdepthbuf_pars_vertex:F_,logdepthbuf_vertex:U_,map_fragment:B_,map_pars_fragment:k_,map_particle_fragment:z_,map_particle_pars_fragment:V_,metalnessmap_fragment:H_,metalnessmap_pars_fragment:G_,morphinstance_vertex:X_,morphcolor_vertex:W_,morphnormal_vertex:Y_,morphtarget_pars_vertex:$_,morphtarget_vertex:q_,normal_fragment_begin:Z_,normal_fragment_maps:J_,normal_pars_fragment:j_,normal_pars_vertex:K_,normal_vertex:Q_,normalmap_pars_fragment:tv,clearcoat_normal_fragment_begin:ev,clearcoat_normal_fragment_maps:nv,clearcoat_pars_fragment:iv,iridescence_pars_fragment:rv,opaque_fragment:sv,packing:ov,premultiplied_alpha_fragment:av,project_vertex:lv,dithering_fragment:cv,dithering_pars_fragment:hv,roughnessmap_fragment:uv,roughnessmap_pars_fragment:fv,shadowmap_pars_fragment:dv,shadowmap_pars_vertex:pv,shadowmap_vertex:mv,shadowmask_pars_fragment:gv,skinbase_vertex:_v,skinning_pars_vertex:vv,skinning_vertex:yv,skinnormal_vertex:xv,specularmap_fragment:Mv,specularmap_pars_fragment:Sv,tonemapping_fragment:bv,tonemapping_pars_fragment:wv,transmission_fragment:Ev,transmission_pars_fragment:Tv,uv_pars_fragment:Av,uv_pars_vertex:Cv,uv_vertex:Pv,worldpos_vertex:Iv,background_vert:Rv,background_frag:Lv,backgroundCube_vert:Nv,backgroundCube_frag:Dv,cube_vert:Ov,cube_frag:Fv,depth_vert:Uv,depth_frag:Bv,distance_vert:kv,distance_frag:zv,equirect_vert:Vv,equirect_frag:Hv,linedashed_vert:Gv,linedashed_frag:Xv,meshbasic_vert:Wv,meshbasic_frag:Yv,meshlambert_vert:$v,meshlambert_frag:qv,meshmatcap_vert:Zv,meshmatcap_frag:Jv,meshnormal_vert:jv,meshnormal_frag:Kv,meshphong_vert:Qv,meshphong_frag:ty,meshphysical_vert:ey,meshphysical_frag:ny,meshtoon_vert:iy,meshtoon_frag:ry,points_vert:sy,points_frag:oy,shadow_vert:ay,shadow_frag:ly,sprite_vert:cy,sprite_frag:hy},Qt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ct},probesMax:{value:new ct},probesResolution:{value:new ct}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},Si={basic:{uniforms:Mn([Qt.common,Qt.specularmap,Qt.envmap,Qt.aomap,Qt.lightmap,Qt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Mn([Qt.common,Qt.specularmap,Qt.envmap,Qt.aomap,Qt.lightmap,Qt.emissivemap,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.fog,Qt.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Mn([Qt.common,Qt.specularmap,Qt.envmap,Qt.aomap,Qt.lightmap,Qt.emissivemap,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.fog,Qt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Mn([Qt.common,Qt.envmap,Qt.aomap,Qt.lightmap,Qt.emissivemap,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.roughnessmap,Qt.metalnessmap,Qt.fog,Qt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Mn([Qt.common,Qt.aomap,Qt.lightmap,Qt.emissivemap,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.gradientmap,Qt.fog,Qt.lights,{emissive:{value:new ye(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Mn([Qt.common,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Mn([Qt.points,Qt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Mn([Qt.common,Qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Mn([Qt.common,Qt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Mn([Qt.common,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Mn([Qt.sprite,Qt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:Mn([Qt.common,Qt.displacementmap,{referencePosition:{value:new ct},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:Mn([Qt.lights,Qt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Si.physical={uniforms:Mn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};Kl={r:0,b:0,g:0},uy=new ze,$d=new xe;$d.set(-1,0,0,0,1,0,0,0,1);Rs=4,_y=6,vy=20,yy=256,Fo=new bs,Ed=new ye,qh=null,Zh=0,Jh=0,jh=!1,xy=new ct,Lr=new ct,tc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,o={}){let{size:l=256,position:u=xy}=o;qh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);let f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(t,i,r,f,u),e>0&&this._blur(f,0,0,e),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(qh,Zh,Jh),this._renderer.xr.enabled=jh,t.scissorTest=!1,Is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ur||t.mapping===Pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:ci,format:Jn,colorSpace:io,depthBuffer:!1},r=Td(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Td(t,e,i);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=My(o)),this._blurMaterial=by(o,t,e),this._ggxMaterial=Sy(o,t,e)}return r}_compileMaterial(t){let e=new De(new qe,t);this._renderer.compile(e,Fo)}_sceneToCubeUV(t,e,i,r,o){let f=new yn(90,1,e,i),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,b=v.toneMapping;v.getClearColor(Ed),v.toneMapping=oi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(r),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new De(new ir,new zn({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));let T=this._backgroundBox,S=T.material,x=!1,O=t.background;O?O.isColor&&(S.color.copy(O),t.background=null,x=!0):(S.color.copy(Ed),x=!0);for(let H=0;H<6;H++){let R=H%3;R===0?(f.up.set(0,d[H],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x+_[H],o.y,o.z)):R===1?(f.up.set(0,0,d[H]),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y+_[H],o.z)):(f.up.set(0,d[H],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y,o.z+_[H]));let U=this._cubeSize;Is(r,R*U,H>2?U:0,U,U),v.setRenderTarget(r),x&&v.render(T,f),v.render(t,f)}v.toneMapping=b,v.autoClear=g,t.background=O}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===ur||t.mapping===Pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ad());let o=r?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=o;let u=o.uniforms;u.envMap.value=t;let f=this._cubeSize;Is(e,0,0,3*f,2*f),i.setRenderTarget(e),i.render(l,Fo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=i}_applyGGXFilter(t,e,i){let r=this._renderer,o=this._pingPongRenderTarget,l=this._ggxMaterial,u=this._lodMeshes[i];u.material=l;let f=l.uniforms,d=i/(this._lodMeshes.length-1),_=e/(this._lodMeshes.length-1),v=Math.sqrt(d*d-_*_),g=d*1.25,b=v*g,{_lodMax:w}=this,T=this._sizeLods[i],S=3*T*(i>w-Rs?i-w+Rs:0),x=4*(this._cubeSize-T);f.envMap.value=t.texture,f.roughness.value=b,f.mipInt.value=w-e,Is(o,S,x,3*T,2*T),r.setRenderTarget(o),r.render(u,Fo),f.envMap.value=o.texture,f.roughness.value=0,f.mipInt.value=w-i,Is(t,S,x,3*T,2*T),r.setRenderTarget(t),r.render(u,Fo)}_blur(t,e,i,r){let o=this._pingPongRenderTarget,l=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,i,l),this._blurPass(o,t,i,i,l)}_blurPass(t,e,i,r,o){let l=this._renderer,u=this._blurMaterial,f=this._lodMeshes[r];f.material=u;let d=u.uniforms;d.envMap.value=t.texture,d.sigma.value=o,d.mipInt.value=this._lodMax-i;let _=this._sizeLods[r],v=3*_*(r>this._lodMax-Rs?r-this._lodMax+Rs:0),g=4*(this._cubeSize-_);Is(e,v,g,3*_,2*_),l.setRenderTarget(e),l.render(f,Fo)}};ec=class extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new po(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ir(5,5,5),o=new Vn({name:"CubemapFromEquirect",uniforms:Rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:xi});o.uniforms.tEquirect.value=e;let l=new De(r,o),u=e.minFilter;return e.minFilter===fr&&(e.minFilter=dn),new ll(1,10,this).update(t,l),e.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){let o=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,i,r);t.setRenderTarget(o)}};Ry={[wh]:"LINEAR_TONE_MAPPING",[Eh]:"REINHARD_TONE_MAPPING",[Th]:"CINEON_TONE_MAPPING",[Ah]:"ACES_FILMIC_TONE_MAPPING",[Ph]:"AGX_TONE_MAPPING",[Ih]:"NEUTRAL_TONE_MAPPING",[Ch]:"CUSTOM_TONE_MAPPING"};qd=new En,tu=new nr(1,1),Zd=new ao,Jd=new Ha,jd=new po,Pd=[],Id=[],Rd=new Float32Array(16),Ld=new Float32Array(9),Nd=new Float32Array(4);eu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ky(e.type)}},nu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vx(e.type)}},iu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let o=0,l=r.length;o!==l;++o){let u=r[o];u.setValue(t,e[u.id],i)}}},Kh=/(\w+)(\])?(\[|\.)?/g;Ls=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let l=0;l<i;++l){let u=t.getActiveUniform(e,l),f=t.getUniformLocation(e,u.name);yx(u,f,this)}let r=[],o=[];for(let l of this.seq)l.type===t.SAMPLER_2D_SHADOW||l.type===t.SAMPLER_CUBE_SHADOW||l.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(l):o.push(l);r.length>0&&(this.seq=r.concat(o))}setValue(t,e,i,r){let o=this.map[e];o!==void 0&&o.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let o=0,l=e.length;o!==l;++o){let u=e[o],f=i[u.id];f.needsUpdate!==!1&&u.setValue(t,f.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,o=t.length;r!==o;++r){let l=t[r];l.id in e&&i.push(l)}return i}};xx=37297,Mx=0;Fd=new xe;Ex={[wh]:"Linear",[Eh]:"Reinhard",[Th]:"Cineon",[Ah]:"ACESFilmic",[Ph]:"AgX",[Ih]:"Neutral",[Ch]:"Custom"};Ql=new ct;Rx=/^[ \t]*#include +<([\w\d./]+)>/gm;Lx=new Map;Dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Fx={[Ao]:"SHADOWMAP_TYPE_PCF",[Ts]:"SHADOWMAP_TYPE_VSM"};Bx={[ur]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[Co]:"ENVMAP_TYPE_CUBE_UV"};zx={[Pr]:"ENVMAP_MODE_REFRACTION"};Hx={[bh]:"ENVMAP_BLENDING_MULTIPLY",[rd]:"ENVMAP_BLENDING_MIX",[sd]:"ENVMAP_BLENDING_ADD"};Yx=0,su=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ou(t),e.set(t,i)),i}},ou=class{constructor(t){this.id=Yx++,this.code=t,this.usedTimes=0}};tM=0;rM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sM=`uniform sampler2D shadow_pass;
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
}`,oM=[new ct(1,0,0),new ct(-1,0,0),new ct(0,1,0),new ct(0,-1,0),new ct(0,0,1),new ct(0,0,-1)],aM=[new ct(0,-1,0),new ct(0,-1,0),new ct(0,0,1),new ct(0,0,-1),new ct(0,-1,0),new ct(0,-1,0)],Wd=new ze,Uo=new ct,Qh=new ct;fM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dM=`
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

}`,au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new go(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Vn({vertexShader:fM,fragmentShader:dM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new De(new _o(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lu=class extends ri{constructor(t,e){super();let i=this,r=null,o=1,l=null,u="local-floor",f=1,d=null,_=null,v=null,g=null,b=null,w=null,T=typeof XRWebGLBinding<"u",S=new au,x={},O=e.getContextAttributes(),H=null,R=null,U=[],B=[],W=new le,C=null,k=null,X=new yn;X.viewport=new Je;let et=new yn;et.viewport=new Je;let st=[X,et],$=new cl,q=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(yt){let z=U[yt];return z===void 0&&(z=new vs,U[yt]=z),z.getTargetRaySpace()},this.getControllerGrip=function(yt){let z=U[yt];return z===void 0&&(z=new vs,U[yt]=z),z.getGripSpace()},this.getHand=function(yt){let z=U[yt];return z===void 0&&(z=new vs,U[yt]=z),z.getHandSpace()};function lt(yt){let z=B.indexOf(yt.inputSource);if(z===-1)return;let Xt=U[z];Xt!==void 0&&(Xt.update(yt.inputSource,yt.frame,d||l),Xt.dispatchEvent({type:yt.type,data:yt.inputSource}))}function dt(){r.removeEventListener("select",lt),r.removeEventListener("selectstart",lt),r.removeEventListener("selectend",lt),r.removeEventListener("squeeze",lt),r.removeEventListener("squeezestart",lt),r.removeEventListener("squeezeend",lt),r.removeEventListener("end",dt),r.removeEventListener("inputsourceschange",Mt);for(let yt=0;yt<U.length;yt++){let z=B[yt];z!==null&&(B[yt]=null,U[yt].disconnect(z))}q=null,Z=null,S.reset();for(let yt in x)delete x[yt];if(t.setRenderTarget(H),b=null,g=null,v=null,r=null,R=null,jt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(W.width,W.height,!1),k!==null){let yt=k.camera;yt.fov=k.fov,yt.zoom=k.zoom,yt.updateProjectionMatrix(),k=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(yt){o=yt,i.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(yt){u=yt,i.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(yt){d=yt},this.getBaseLayer=function(){return g!==null?g:b},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(r,e)),v},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function(yt){if(r=yt,r!==null){if(H=t.getRenderTarget(),r.addEventListener("select",lt),r.addEventListener("selectstart",lt),r.addEventListener("selectend",lt),r.addEventListener("squeeze",lt),r.addEventListener("squeezestart",lt),r.addEventListener("squeezeend",lt),r.addEventListener("end",dt),r.addEventListener("inputsourceschange",Mt),O.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(W),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Xt=null,te=null,kt=null;O.depth&&(kt=O.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Xt=O.stencil?dr:_i,te=O.stencil?Ps:ai);let ce={colorFormat:e.RGBA8,depthFormat:kt,scaleFactor:o};v=this.getBinding(),g=v.createProjectionLayer(ce),r.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),R=new Pn(g.textureWidth,g.textureHeight,{format:Jn,type:In,depthTexture:new nr(g.textureWidth,g.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Xt),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{let Xt={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:o};b=new XRWebGLLayer(r,e,Xt),r.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),R=new Pn(b.framebufferWidth,b.framebufferHeight,{format:Jn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(f),d=null,l=await r.requestReferenceSpace(u),jt.setContext(r),jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Mt(yt){for(let z=0;z<yt.removed.length;z++){let Xt=yt.removed[z],te=B.indexOf(Xt);te>=0&&(B[te]=null,U[te].disconnect(Xt))}for(let z=0;z<yt.added.length;z++){let Xt=yt.added[z],te=B.indexOf(Xt);if(te===-1){for(let ce=0;ce<U.length;ce++)if(ce>=B.length){B.push(Xt),te=ce;break}else if(B[ce]===null){B[ce]=Xt,te=ce;break}if(te===-1)break}let kt=U[te];kt&&kt.connect(Xt)}}let pt=new ct,wt=new ct;function J(yt,z,Xt){pt.setFromMatrixPosition(z.matrixWorld),wt.setFromMatrixPosition(Xt.matrixWorld);let te=pt.distanceTo(wt),kt=z.projectionMatrix.elements,ce=Xt.projectionMatrix.elements,Re=kt[14]/(kt[10]-1),fe=kt[14]/(kt[10]+1),Yt=(kt[9]+1)/kt[5],pe=(kt[9]-1)/kt[5],ue=(kt[8]-1)/kt[0],we=(ce[8]+1)/ce[0],Le=Re*ue,je=Re*we,Ne=te/(-ue+we),He=Ne*-ue;if(z.matrixWorld.decompose(yt.position,yt.quaternion,yt.scale),yt.translateX(He),yt.translateZ(Ne),yt.matrixWorld.compose(yt.position,yt.quaternion,yt.scale),yt.matrixWorldInverse.copy(yt.matrixWorld).invert(),kt[10]===-1)yt.projectionMatrix.copy(z.projectionMatrix),yt.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{let ht=Re+Ne,Ze=fe+Ne,be=Le-He,Y=je+(te-He),P=Yt*fe/Ze*ht,it=pe*fe/Ze*ht;yt.projectionMatrix.makePerspective(be,Y,P,it,ht,Ze),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert()}}function At(yt,z){z===null?yt.matrixWorld.copy(yt.matrix):yt.matrixWorld.multiplyMatrices(z.matrixWorld,yt.matrix),yt.matrixWorldInverse.copy(yt.matrixWorld).invert()}this.updateCamera=function(yt){if(r===null)return;let z=yt.near,Xt=yt.far;S.texture!==null&&(S.depthNear>0&&(z=S.depthNear),S.depthFar>0&&(Xt=S.depthFar)),$.near=et.near=X.near=z,$.far=et.far=X.far=Xt,(q!==$.near||Z!==$.far)&&(r.updateRenderState({depthNear:$.near,depthFar:$.far}),q=$.near,Z=$.far),$.layers.mask=yt.layers.mask|6,X.layers.mask=$.layers.mask&-5,et.layers.mask=$.layers.mask&-3;let te=yt.parent,kt=$.cameras;At($,te);for(let ce=0;ce<kt.length;ce++)At(kt[ce],te);kt.length===2?J($,X,et):$.projectionMatrix.copy(X.projectionMatrix),k===null&&yt.isPerspectiveCamera&&(k={camera:yt,fov:yt.fov,zoom:yt.zoom}),Lt(yt,$,te)};function Lt(yt,z,Xt){Xt===null?yt.matrix.copy(z.matrixWorld):(yt.matrix.copy(Xt.matrixWorld),yt.matrix.invert(),yt.matrix.multiply(z.matrixWorld)),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.updateMatrixWorld(!0),yt.projectionMatrix.copy(z.projectionMatrix),yt.projectionMatrixInverse.copy(z.projectionMatrixInverse),yt.isPerspectiveCamera&&(yt.fov=ms*2*Math.atan(1/yt.projectionMatrix.elements[5]),yt.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(g===null&&b===null))return f},this.setFoveation=function(yt){f=yt,g!==null&&(g.fixedFoveation=yt),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=yt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh($)},this.getCameraTexture=function(yt){return x[yt]};let Ht=null;function Bt(yt,z){if(_=z.getViewerPose(d||l),w=z,_!==null){let Xt=_.views;b!==null&&(t.setRenderTargetFramebuffer(R,b.framebuffer),t.setRenderTarget(R));let te=!1;Xt.length!==$.cameras.length&&($.cameras.length=0,te=!0);for(let fe=0;fe<Xt.length;fe++){let Yt=Xt[fe],pe=null;if(b!==null)pe=b.getViewport(Yt);else{let we=v.getViewSubImage(g,Yt);pe=we.viewport,fe===0&&(t.setRenderTargetTextures(R,we.colorTexture,we.depthStencilTexture),t.setRenderTarget(R))}let ue=st[fe];ue===void 0&&(ue=new yn,ue.layers.enable(fe),ue.viewport=new Je,st[fe]=ue),ue.matrix.fromArray(Yt.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Yt.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(pe.x,pe.y,pe.width,pe.height),fe===0&&($.matrix.copy(ue.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),te===!0&&$.cameras.push(ue)}let kt=r.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){v=i.getBinding();let fe=v.getDepthInformation(Xt[0]);fe&&fe.isValid&&fe.texture&&S.init(fe,r.renderState)}if(kt&&kt.includes("camera-access")&&T){t.state.unbindTexture(),v=i.getBinding();for(let fe=0;fe<Xt.length;fe++){let Yt=Xt[fe].camera;if(Yt){let pe=x[Yt];pe||(pe=new go,x[Yt]=pe);let ue=v.getCameraImage(Yt);pe.sourceTexture=ue}}}}for(let Xt=0;Xt<U.length;Xt++){let te=B[Xt],kt=U[Xt];te!==null&&kt!==void 0&&kt.update(te,z,d||l)}Ht&&Ht(yt,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),w=null}let jt=new Yd;jt.setAnimationLoop(Bt),this.setAnimationLoop=function(yt){Ht=yt},this.dispose=function(){}}},pM=new ze,Kd=new xe;Kd.set(-1,0,0,0,1,0,0,0,1);_M=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mi=null;nc=class{constructor(t={}){let{canvas:e=gd(),context:i=null,depth:r=!0,stencil:o=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:b=In}=t;this.isWebGLRenderer=!0;let w;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=i.getContextAttributes().alpha}else w=l;let T=b,S=new Set([vl,_l,gl]),x=new Set([In,ai,Cs,Ps,pl,ml]),O=new Uint32Array(4),H=new Int32Array(4),R=new ct,U=null,B=null,W=[],C=[],k=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let X=this,et=!1,st=null,$=null,q=null,Z=null;this._outputColorSpace=wn;let lt=0,dt=0,Mt=null,pt=-1,wt=null,J=new Je,At=new Je,Lt=null,Ht=new ye(0),Bt=0,jt=e.width,yt=e.height,z=1,Xt=null,te=null,kt=new Je(0,0,jt,yt),ce=new Je(0,0,jt,yt),Re=!1,fe=new xs,Yt=!1,pe=!1,ue=new ze,we=new ct,Le=new Je,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function He(){return Mt===null?z:1}let ht=i;function Ze(D,ot){return e.getContext(D,ot)}let be,Y,P,it,mt,Et,Gt,$t,xt,L,j,K,rt,ut,Nt,It,Vt,V,Pt,gt,Ot,Wt,Rt;try{let D={alpha:!0,depth:r,stencil:o,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Fe,!1),e.addEventListener("webglcontextrestored",Pe,!1),e.addEventListener("webglcontextcreationerror",Sn,!1),ht===null){let ot="webgl2";if(ht=Ze(ot,D),ht===null)throw Ze(ot)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(D){throw e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",Pe,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),ge("WebGLRenderer: "+D.message),D}function Ft(){be=new Ey(ht),be.init(),Ot=new uM(ht,be),Y=new my(ht,be,t,Ot),P=new cM(ht,be),Y.reversedDepthBuffer&&g&&P.buffers.depth.setReversed(!0),$=ht.createFramebuffer(),q=ht.createFramebuffer(),Z=ht.createFramebuffer(),it=new Cy(ht),mt=new Zx,Et=new hM(ht,be,P,mt,Y,Ot,it),Gt=new wy(X),$t=new I0(ht),Wt=new dy(ht,$t),xt=new Ty(ht,$t,it,Wt),L=new Iy(ht,xt,$t,Wt,it),V=new Py(ht,Y,Et),Nt=new gy(mt),j=new qx(X,Gt,be,Y,Wt,Nt),K=new mM(X,mt),rt=new jx,ut=new iM(be),Vt=new fy(X,Gt,P,L,w,f),It=new lM(X,L,Y),Rt=new gM(ht,it,Y,P),Pt=new py(ht,be,it),gt=new Ay(ht,be,it),it.programs=j.programs,X.capabilities=Y,X.extensions=be,X.properties=mt,X.renderLists=rt,X.shadowMap=It,X.state=P,X.info=it}T!==In&&(k=new Ly(T,e.width,e.height,u,r,o));let re=new lu(X,ht);this.xr=re,this.getContext=function(){return ht},this.getContextAttributes=function(){return ht.getContextAttributes()},this.forceContextLoss=function(){let D=be.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=be.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(D){D!==void 0&&(z=D,this.setSize(jt,yt,!1))},this.getSize=function(D){return D.set(jt,yt)},this.setSize=function(D,ot,St=!0){if(re.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}jt=D,yt=ot,e.width=Math.floor(D*z),e.height=Math.floor(ot*z),St===!0&&(e.style.width=D+"px",e.style.height=ot+"px"),k!==null&&k.setSize(e.width,e.height),this.setViewport(0,0,D,ot)},this.getDrawingBufferSize=function(D){return D.set(jt*z,yt*z).floor()},this.setDrawingBufferSize=function(D,ot,St){jt=D,yt=ot,z=St,e.width=Math.floor(D*St),e.height=Math.floor(ot*St),this.setViewport(0,0,D,ot)},this.setEffects=function(D){if(T===In){ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let ot=0;ot<D.length;ot++)if(D[ot].isOutputPass===!0){de("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(J)},this.getViewport=function(D){return D.copy(kt)},this.setViewport=function(D,ot,St,_t){D.isVector4?kt.set(D.x,D.y,D.z,D.w):kt.set(D,ot,St,_t),P.viewport(J.copy(kt).multiplyScalar(z).round())},this.getScissor=function(D){return D.copy(ce)},this.setScissor=function(D,ot,St,_t){D.isVector4?ce.set(D.x,D.y,D.z,D.w):ce.set(D,ot,St,_t),P.scissor(At.copy(ce).multiplyScalar(z).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(D){P.setScissorTest(Re=D)},this.setOpaqueSort=function(D){Xt=D},this.setTransparentSort=function(D){te=D},this.getClearColor=function(D){return D.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(D=!0,ot=!0,St=!0){let _t=0;if(D){let vt=!1;if(Mt!==null){let Jt=Mt.texture.format;vt=S.has(Jt)}if(vt){let Jt=Mt.texture.type,zt=x.has(Jt),Zt=Vt.getClearColor(),ne=Vt.getClearAlpha(),se=Zt.r,qt=Zt.g,me=Zt.b;zt?(O[0]=se,O[1]=qt,O[2]=me,O[3]=ne,ht.clearBufferuiv(ht.COLOR,0,O)):(H[0]=se,H[1]=qt,H[2]=me,H[3]=ne,ht.clearBufferiv(ht.COLOR,0,H))}else _t|=ht.COLOR_BUFFER_BIT}ot&&(_t|=ht.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),St&&(_t|=ht.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_t!==0&&ht.clear(_t)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),st=D},this.dispose=function(){e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",Pe,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),Vt.dispose(),rt.dispose(),ut.dispose(),mt.dispose(),Gt.dispose(),L.dispose(),Wt.dispose(),Rt.dispose(),j.dispose(),re.dispose(),re.removeEventListener("sessionstart",Nr),re.removeEventListener("sessionend",Dr),Cn.stop()};function Fe(D){D.preventDefault(),oo("WebGLRenderer: Context Lost."),et=!0}function Pe(){oo("WebGLRenderer: Context Restored."),et=!1;let D=it.autoReset,ot=It.enabled,St=It.autoUpdate,_t=It.needsUpdate,vt=It.type;Ft(),it.autoReset=D,It.enabled=ot,It.autoUpdate=St,It.needsUpdate=_t,It.type=vt}function Sn(D){ge("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function An(D){let ot=D.target;ot.removeEventListener("dispose",An),Os(ot)}function Os(D){mr(D),mt.remove(D)}function mr(D){let ot=mt.get(D).programs;ot!==void 0&&(ot.forEach(function(St){j.releaseProgram(St)}),D.isShaderMaterial&&j.releaseShaderCache(D))}this.renderBufferDirect=function(D,ot,St,_t,vt,Jt){ot===null&&(ot=je);let zt=vt.isMesh&&vt.matrixWorld.determinantAffine()<0,Zt=ui(D,ot,St,_t,vt);P.setMaterial(_t,zt);let ne=St.index,se=1;if(_t.wireframe===!0){if(ne=xt.getWireframeAttribute(St),ne===void 0)return;se=2}let qt=St.drawRange,me=St.attributes.position,ee=qt.start*se,Ie=(qt.start+qt.count)*se;Jt!==null&&(ee=Math.max(ee,Jt.start*se),Ie=Math.min(Ie,(Jt.start+Jt.count)*se)),ne!==null?(ee=Math.max(ee,0),Ie=Math.min(Ie,ne.count)):me!=null&&(ee=Math.max(ee,0),Ie=Math.min(Ie,me.count));let We=Ie-ee;if(We<0||We===1/0)return;Wt.setup(vt,_t,Zt,St,ne);let Te,s=Pt;if(ne!==null&&(Te=$t.get(ne),s=gt,s.setIndex(Te)),vt.isMesh)_t.wireframe===!0?(P.setLineWidth(_t.wireframeLinewidth*He()),s.setMode(ht.LINES)):s.setMode(ht.TRIANGLES);else if(vt.isLine){let a=_t.linewidth;a===void 0&&(a=1),P.setLineWidth(a*He()),vt.isLineSegments?s.setMode(ht.LINES):vt.isLineLoop?s.setMode(ht.LINE_LOOP):s.setMode(ht.LINE_STRIP)}else vt.isPoints?s.setMode(ht.POINTS):vt.isSprite&&s.setMode(ht.TRIANGLES);if(vt.isBatchedMesh)if(be.get("WEBGL_multi_draw"))s.renderMultiDraw(vt._multiDrawStarts,vt._multiDrawCounts,vt._multiDrawCount);else{let a=vt._multiDrawStarts,c=vt._multiDrawCounts,p=vt._multiDrawCount,y=ne?$t.get(ne).bytesPerElement:1,A=mt.get(_t).currentProgram.getUniforms();for(let F=0;F<p;F++)A.setValue(ht,"_gl_DrawID",F),s.render(a[F]/y,c[F])}else if(vt.isInstancedMesh)s.renderInstances(ee,We,vt.count);else if(St.isInstancedBufferGeometry){let a=St._maxInstanceCount!==void 0?St._maxInstanceCount:1/0,c=Math.min(St.instanceCount,a);s.renderInstances(ee,We,c)}else s.render(ee,We)};function I(D,ot,St,_t){st!==null&&D.isNodeMaterial&&st.setObject(_t,D),Yt===!0&&Nt.setState(D,St,!1),D.transparent===!0&&D.side===xn&&D.forceSinglePass===!1?(D.side=Tn,D.needsUpdate=!0,Ui(D,ot,_t),D.side=hr,D.needsUpdate=!0,Ui(D,ot,_t),D.side=xn):Ui(D,ot,_t)}this.compile=function(D,ot,St=null){St===null&&(St=D),st!==null&&st.renderStart(D,ot,St),B=ut.get(St),B.init(ot),C.push(B),St.traverseVisible(function(vt){vt.isLight&&vt.layers.test(ot.layers)&&(B.pushLight(vt),vt.castShadow&&B.pushShadow(vt))}),D!==St&&D.traverseVisible(function(vt){vt.isLight&&vt.layers.test(ot.layers)&&(B.pushLight(vt),vt.castShadow&&B.pushShadow(vt))}),B.setupLights(),st!==null&&st.updateLights(B.state.lightsArray),pe=this.localClippingEnabled,Yt=Nt.init(this.clippingPlanes,pe),Yt===!0&&Nt.setGlobalState(this.clippingPlanes,ot),st!==null&&It.render(B.state.shadowsArray,St,ot);let _t=new Set;return D.traverse(function(vt){if(!(vt.isMesh||vt.isPoints||vt.isLine||vt.isSprite))return;let Jt=vt.material;if(Jt)if(Array.isArray(Jt))for(let zt=0;zt<Jt.length;zt++){let Zt=Jt[zt];I(Zt,St,ot,vt),_t.add(Zt)}else I(Jt,St,ot,vt),_t.add(Jt)}),B=C.pop(),st!==null&&st.renderEnd(),_t},this.compileAsync=function(D,ot,St=null){let _t=this.compile(D,ot,St);return new Promise(vt=>{function Jt(){if(_t.forEach(function(zt){let ne=mt.get(zt).currentProgram;(ne===void 0||ne.isReady())&&_t.delete(zt)}),_t.size===0){vt(D);return}setTimeout(Jt,10)}be.get("KHR_parallel_shader_compile")!==null?Jt():setTimeout(Jt,10)})};let bi=null;function Ce(D){bi&&bi(D)}function Nr(){Cn.stop()}function Dr(){Cn.start()}let Cn=new Yd;Cn.setAnimationLoop(Ce),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(D){bi=D,re.setAnimationLoop(D),D===null?Cn.stop():Cn.start()},re.addEventListener("sessionstart",Nr),re.addEventListener("sessionend",Dr),this.render=function(D,ot){if(ot!==void 0&&ot.isCamera!==!0){ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(et===!0)return;st!==null&&st.renderStart(D,ot);let St=re.enabled===!0&&re.isPresenting===!0,_t=k!==null&&(Mt===null||St)&&k.begin(X,Mt);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ot.parent===null&&ot.matrixWorldAutoUpdate===!0&&ot.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(ot),ot=re.getCamera()),D.isScene===!0&&D.onBeforeRender(X,D,ot,Mt),B=ut.get(D,C.length),B.init(ot),B.state.textureUnits=Et.getTextureUnits(),C.push(B),ue.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),fe.setFromProjectionMatrix(ue,ii,ot.reversedDepth),pe=this.localClippingEnabled,Yt=Nt.init(this.clippingPlanes,pe),U=rt.get(D,W.length),U.init(),W.push(U),re.enabled===!0&&re.isPresenting===!0){let zt=X.xr.getDepthSensingMesh();zt!==null&&Xn(zt,ot,-1/0,X.sortObjects)}Xn(D,ot,0,X.sortObjects),U.finish(),st!==null&&st.updateLights(B.state.lightsArray),X.sortObjects===!0&&U.sort(Xt,te),Ne=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ne&&Vt.addToRenderList(U,D),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Yt===!0&&Nt.beginShadows();let vt=B.state.shadowsArray;if(It.render(vt,D,ot),Yt===!0&&Nt.endShadows(),(_t&&k.hasRenderPass())===!1){let zt=U.opaque,Zt=U.transmissive;if(B.setupLights(),ot.isArrayCamera){let ne=ot.cameras;if(Zt.length>0)for(let se=0,qt=ne.length;se<qt;se++){let me=ne[se];hi(zt,Zt,D,me)}Ne&&Vt.render(D);for(let se=0,qt=ne.length;se<qt;se++){let me=ne[se];Or(U,D,me,me.viewport)}}else Zt.length>0&&hi(zt,Zt,D,ot),Ne&&Vt.render(D),Or(U,D,ot)}Mt!==null&&dt===0&&(Et.updateMultisampleRenderTarget(Mt),Et.updateRenderTargetMipmap(Mt)),_t&&k.end(X),D.isScene===!0&&D.onAfterRender(X,D,ot),Wt.resetDefaultState(),pt=-1,wt=null,C.pop(),C.length>0?(B=C[C.length-1],Et.setTextureUnits(B.state.textureUnits),Yt===!0&&Nt.setGlobalState(X.clippingPlanes,B.state.camera)):B=null,W.pop(),W.length>0?U=W[W.length-1]:U=null,st!==null&&st.renderEnd()};function Xn(D,ot,St,_t){if(D.visible===!1)return;if(D.layers.test(ot.layers)){if(D.isGroup)St=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(ot);else if(D.isLightProbeGrid)B.pushLightProbeGrid(D);else if(D.isLight)B.pushLight(D),D.castShadow&&B.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||D.intersectsFrustum(fe)){_t&&Le.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ue);let zt=L.update(D),Zt=D.material;Zt.visible&&U.push(D,zt,Zt,St,Le.z,null,ot)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||D.intersectsFrustum(fe))){let zt=L.update(D),Zt=D.material;if(_t&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Le.copy(D.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Le.copy(zt.boundingSphere.center)),Le.applyMatrix4(D.matrixWorld).applyMatrix4(ue)),Array.isArray(Zt)){let ne=zt.groups;for(let se=0,qt=ne.length;se<qt;se++){let me=ne[se],ee=Zt[me.materialIndex];ee&&ee.visible&&U.push(D,zt,ee,St,Le.z,me,ot)}}else Zt.visible&&U.push(D,zt,Zt,St,Le.z,null,ot)}}let Jt=D.children;for(let zt=0,Zt=Jt.length;zt<Zt;zt++)Xn(Jt[zt],ot,St,_t)}function Or(D,ot,St,_t){let{opaque:vt,transmissive:Jt,transparent:zt}=D;B.setupLightsView(St),Yt===!0&&Nt.setGlobalState(X.clippingPlanes,St),_t&&P.viewport(J.copy(_t)),vt.length>0&&wi(vt,ot,St),Jt.length>0&&wi(Jt,ot,St),zt.length>0&&wi(zt,ot,St),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function hi(D,ot,St,_t){if((St.isScene===!0?St.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[_t.id]===void 0){let ee=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[_t.id]=new Pn(1,1,{generateMipmaps:!0,type:ee?ci:In,minFilter:fr,samples:Math.max(4,Y.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ae.workingColorSpace})}let Jt=B.state.transmissionRenderTarget[_t.id],zt=_t.viewport||J;Jt.setSize(zt.z*X.transmissionResolutionScale,zt.w*X.transmissionResolutionScale);let Zt=X.getRenderTarget(),ne=X.getActiveCubeFace(),se=X.getActiveMipmapLevel();X.setRenderTarget(Jt),X.getClearColor(Ht),Bt=X.getClearAlpha(),Bt<1&&X.setClearColor(16777215,.5),X.clear(),Ne&&Vt.render(St);let qt=X.toneMapping;X.toneMapping=oi;let me=_t.viewport;if(_t.viewport!==void 0&&(_t.viewport=void 0),B.setupLightsView(_t),Yt===!0&&Nt.setGlobalState(X.clippingPlanes,_t),wi(D,St,_t),Et.updateMultisampleRenderTarget(Jt),Et.updateRenderTargetMipmap(Jt),be.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Ie=0,We=ot.length;Ie<We;Ie++){let Te=ot[Ie],{object:s,geometry:a,material:c,group:p}=Te;if(c.side===xn&&s.layers.test(_t.layers)){let y=c.side;c.side=Tn,c.needsUpdate=!0,Fr(s,St,_t,a,c,p),c.side=y,c.needsUpdate=!0,ee=!0}}ee===!0&&(Et.updateMultisampleRenderTarget(Jt),Et.updateRenderTargetMipmap(Jt))}X.setRenderTarget(Zt,ne,se),X.setClearColor(Ht,Bt),me!==void 0&&(_t.viewport=me),X.toneMapping=qt}function wi(D,ot,St){let _t=ot.isScene===!0?ot.overrideMaterial:null;for(let vt=0,Jt=D.length;vt<Jt;vt++){let zt=D[vt],{object:Zt,geometry:ne,group:se}=zt,qt=zt.material;qt.allowOverride===!0&&_t!==null&&(qt=_t),Zt.layers.test(St.layers)&&Fr(Zt,ot,St,ne,qt,se)}}function Fr(D,ot,St,_t,vt,Jt){st!==null&&vt.isNodeMaterial&&st.setObject(D,vt),D.onBeforeRender(X,ot,St,_t,vt,Jt),D.modelViewMatrix.multiplyMatrices(St.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),vt.onBeforeRender(X,ot,St,_t,D,Jt),vt.transparent===!0&&vt.side===xn&&vt.forceSinglePass===!1?(vt.side=Tn,vt.needsUpdate=!0,X.renderBufferDirect(St,ot,_t,vt,D,Jt),vt.side=hr,vt.needsUpdate=!0,X.renderBufferDirect(St,ot,_t,vt,D,Jt),vt.side=xn):X.renderBufferDirect(St,ot,_t,vt,D,Jt),D.onAfterRender(X,ot,St,_t,vt,Jt)}function Ui(D,ot,St){ot.isScene!==!0&&(ot=je);let _t=mt.get(D),vt=B.state.lights,Jt=B.state.shadowsArray,zt=vt.state.version,Zt=j.getParameters(D,vt.state,Jt,ot,St,B.state.lightProbeGridArray),ne=j.getProgramCacheKey(Zt),se=_t.programs;_t.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?ot.environment:null,_t.fog=ot.fog;let qt=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;_t.envMap=Gt.get(D.envMap||_t.environment,qt),_t.envMapRotation=_t.environment!==null&&D.envMap===null?ot.environmentRotation:D.envMapRotation,se===void 0&&(D.addEventListener("dispose",An),se=new Map,_t.programs=se);let me=se.get(ne);if(me!==void 0){if(_t.currentProgram===me&&_t.lightsStateVersion===zt)return Br(D,Zt),me}else Zt.uniforms=j.getUniforms(D),st!==null&&D.isNodeMaterial&&st.build(D,St,Zt),D.onBeforeCompile(Zt,X),me=j.acquireProgram(Zt,ne),se.set(ne,me),_t.uniforms=Zt.uniforms;let ee=_t.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ee.clippingPlanes=Nt.uniform),Br(D,Zt),_t.needsLights=Bs(D),_t.lightsStateVersion=zt,_t.needsLights&&(ee.ambientLightColor.value=vt.state.ambient,ee.lightProbe.value=vt.state.probe,ee.sunLights.value=vt.state.sun,ee.sunLightShadows.value=vt.state.sunShadow,ee.directionalLights.value=vt.state.directional,ee.directionalLightShadows.value=vt.state.directionalShadow,ee.spotLights.value=vt.state.spot,ee.spotLightShadows.value=vt.state.spotShadow,ee.rectAreaLights.value=vt.state.rectArea,ee.ltc_1.value=vt.state.rectAreaLTC1,ee.ltc_2.value=vt.state.rectAreaLTC2,ee.pointLights.value=vt.state.point,ee.pointLightShadows.value=vt.state.pointShadow,ee.hemisphereLights.value=vt.state.hemi,ee.sunShadowMatrix.value=vt.state.sunShadowMatrix,ee.sunShadowCascade.value=vt.state.sunShadowCascade,ee.directionalShadowMatrix.value=vt.state.directionalShadowMatrix,ee.spotLightMatrix.value=vt.state.spotLightMatrix,ee.spotLightMap.value=vt.state.spotLightMap,ee.pointShadowMatrix.value=vt.state.pointShadowMatrix),_t.lightProbeGrid=B.state.lightProbeGridArray.length>0,_t.currentProgram=me,_t.uniformsList=null,me}function Ur(D){if(D.uniformsList===null){let ot=D.currentProgram.getUniforms();D.uniformsList=Ls.seqWithValue(ot.seq,D.uniforms)}return D.uniformsList}function Br(D,ot){let St=mt.get(D);St.outputColorSpace=ot.outputColorSpace,St.batching=ot.batching,St.batchingColor=ot.batchingColor,St.instancing=ot.instancing,St.instancingColor=ot.instancingColor,St.instancingMorph=ot.instancingMorph,St.skinning=ot.skinning,St.morphTargets=ot.morphTargets,St.morphNormals=ot.morphNormals,St.morphColors=ot.morphColors,St.morphTargetsCount=ot.morphTargetsCount,St.numClippingPlanes=ot.numClippingPlanes,St.numIntersection=ot.numClipIntersection,St.vertexAlphas=ot.vertexAlphas,St.vertexTangents=ot.vertexTangents,St.toneMapping=ot.toneMapping}function Fs(D,ot){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;R.setFromMatrixPosition(ot.matrixWorld);for(let St=0,_t=D.length;St<_t;St++){let vt=D[St];if(vt.texture!==null&&vt.boundingBox.containsPoint(R))return vt}return null}function ui(D,ot,St,_t,vt){ot.isScene!==!0&&(ot=je),Et.resetTextureUnits();let Jt=ot.fog,zt=_t.isMeshStandardMaterial||_t.isMeshLambertMaterial||_t.isMeshPhongMaterial?ot.environment:null,Zt=Mt===null?X.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Ae.workingColorSpace,ne=_t.isMeshStandardMaterial||_t.isMeshLambertMaterial&&!_t.envMap||_t.isMeshPhongMaterial&&!_t.envMap,se=Gt.get(_t.envMap||zt,ne),qt=_t.vertexColors===!0&&!!St.attributes.color&&St.attributes.color.itemSize===4,me=!!St.attributes.tangent&&(!!_t.normalMap||_t.anisotropy>0),ee=!!St.morphAttributes.position,Ie=!!St.morphAttributes.normal,We=!!St.morphAttributes.color,Te=oi;_t.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Te=X.toneMapping);let s=St.morphAttributes.position||St.morphAttributes.normal||St.morphAttributes.color,a=s!==void 0?s.length:0,c=mt.get(_t),p=B.state.lights;if(Yt===!0&&(pe===!0||D!==wt)){let Dt=D===wt&&_t.id===pt;Nt.setState(_t,D,Dt)}let y=!1;_t.version===c.__version?(c.needsLights&&c.lightsStateVersion!==p.state.version||c.outputColorSpace!==Zt||vt.isBatchedMesh&&c.batching===!1||!vt.isBatchedMesh&&c.batching===!0||vt.isBatchedMesh&&c.batchingColor===!0&&vt._colorsTexture===null||vt.isBatchedMesh&&c.batchingColor===!1&&vt._colorsTexture!==null||vt.isInstancedMesh&&c.instancing===!1||!vt.isInstancedMesh&&c.instancing===!0||vt.isSkinnedMesh&&c.skinning===!1||!vt.isSkinnedMesh&&c.skinning===!0||vt.isInstancedMesh&&c.instancingColor===!0&&vt.instanceColor===null||vt.isInstancedMesh&&c.instancingColor===!1&&vt.instanceColor!==null||vt.isInstancedMesh&&c.instancingMorph===!0&&vt.morphTexture===null||vt.isInstancedMesh&&c.instancingMorph===!1&&vt.morphTexture!==null||c.envMap!==se||_t.fog===!0&&c.fog!==Jt||c.numClippingPlanes!==void 0&&(c.numClippingPlanes!==Nt.numPlanes||c.numIntersection!==Nt.numIntersection)||c.vertexAlphas!==qt||c.vertexTangents!==me||c.morphTargets!==ee||c.morphNormals!==Ie||c.morphColors!==We||c.toneMapping!==Te||c.morphTargetsCount!==a||!!c.lightProbeGrid!=B.state.lightProbeGridArray.length>0)&&(y=!0):(y=!0,c.__version=_t.version);let A=c.currentProgram;y===!0&&(A=Ui(_t,ot,vt),st&&_t.isNodeMaterial&&st.onUpdateProgram(_t,A,c));let F=!1,Q=!1,nt=!1,ft=A.getUniforms(),Ct=c.uniforms;if(P.useProgram(A.program)&&(F=!0,Q=!0,nt=!0),_t.id!==pt&&(pt=_t.id,Q=!0),c.needsLights){let Dt=Fs(B.state.lightProbeGridArray,vt);c.lightProbeGrid!==Dt&&(c.lightProbeGrid=Dt,Q=!0)}if(F||wt!==D){P.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),ft.setValue(ht,"projectionMatrix",D.projectionMatrix),ft.setValue(ht,"viewMatrix",D.matrixWorldInverse);let oe=ft.map.cameraPosition;oe!==void 0&&oe.setValue(ht,we.setFromMatrixPosition(D.matrixWorld)),Y.logarithmicDepthBuffer&&ft.setValue(ht,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(_t.isMeshPhongMaterial||_t.isMeshToonMaterial||_t.isMeshLambertMaterial||_t.isMeshBasicMaterial||_t.isMeshStandardMaterial||_t.isShaderMaterial)&&ft.setValue(ht,"isOrthographic",D.isOrthographicCamera===!0),wt!==D&&(wt=D,Q=!0,nt=!0)}if(c.needsLights&&(p.state.sunShadowMap.length>0&&ft.setValue(ht,"sunShadowMap",p.state.sunShadowMap,Et),p.state.directionalShadowMap.length>0&&ft.setValue(ht,"directionalShadowMap",p.state.directionalShadowMap,Et),p.state.spotShadowMap.length>0&&ft.setValue(ht,"spotShadowMap",p.state.spotShadowMap,Et),p.state.pointShadowMap.length>0&&ft.setValue(ht,"pointShadowMap",p.state.pointShadowMap,Et)),vt.isSkinnedMesh){ft.setOptional(ht,vt,"bindMatrix"),ft.setOptional(ht,vt,"bindMatrixInverse");let Dt=vt.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),ft.setValue(ht,"boneTexture",Dt.boneTexture,Et))}vt.isBatchedMesh&&(ft.setOptional(ht,vt,"batchingTexture"),ft.setValue(ht,"batchingTexture",vt._matricesTexture,Et),ft.setOptional(ht,vt,"batchingIdTexture"),ft.setValue(ht,"batchingIdTexture",vt._indirectTexture,Et),ft.setOptional(ht,vt,"batchingColorTexture"),vt._colorsTexture!==null&&ft.setValue(ht,"batchingColorTexture",vt._colorsTexture,Et));let Tt=St.morphAttributes;if((Tt.position!==void 0||Tt.normal!==void 0||Tt.color!==void 0)&&V.update(vt,St,A),(Q||c.receiveShadow!==vt.receiveShadow)&&(c.receiveShadow=vt.receiveShadow,ft.setValue(ht,"receiveShadow",vt.receiveShadow)),(_t.isMeshStandardMaterial||_t.isMeshLambertMaterial||_t.isMeshPhongMaterial)&&_t.envMap===null&&ot.environment!==null&&(Ct.envMapIntensity.value=ot.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=vM()),Q){if(ft.setValue(ht,"toneMappingExposure",X.toneMappingExposure),c.needsLights&&Us(Ct,nt),Jt&&_t.fog===!0&&K.refreshFogUniforms(Ct,Jt),K.refreshMaterialUniforms(Ct,_t,z,yt,B.state.transmissionRenderTarget[D.id]),c.needsLights&&c.lightProbeGrid){let Dt=c.lightProbeGrid;Ct.probesSH.value=Dt.texture,Ct.probesMin.value.copy(Dt.boundingBox.min),Ct.probesMax.value.copy(Dt.boundingBox.max),Ct.probesResolution.value.copy(Dt.resolution)}Ls.upload(ht,Ur(c),Ct,Et)}if(_t.isShaderMaterial&&_t.uniformsNeedUpdate===!0&&(Ls.upload(ht,Ur(c),Ct,Et),_t.uniformsNeedUpdate=!1),_t.isSpriteMaterial&&ft.setValue(ht,"center",vt.center),ft.setValue(ht,"modelViewMatrix",vt.modelViewMatrix),ft.setValue(ht,"normalMatrix",vt.normalMatrix),ft.setValue(ht,"modelMatrix",vt.matrixWorld),_t.uniformsGroups!==void 0){let Dt=_t.uniformsGroups;for(let oe=0,_e=Dt.length;oe<_e;oe++){let Me=Dt[oe];Rt.update(Me,A),Rt.bind(Me,A)}}return A}function Us(D,ot){D.ambientLightColor.needsUpdate=ot,D.lightProbe.needsUpdate=ot,D.sunLights.needsUpdate=ot,D.sunLightShadows.needsUpdate=ot,D.directionalLights.needsUpdate=ot,D.directionalLightShadows.needsUpdate=ot,D.pointLights.needsUpdate=ot,D.pointLightShadows.needsUpdate=ot,D.spotLights.needsUpdate=ot,D.spotLightShadows.needsUpdate=ot,D.rectAreaLights.needsUpdate=ot,D.hemisphereLights.needsUpdate=ot}function Bs(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return lt},this.getActiveMipmapLevel=function(){return dt},this.getRenderTarget=function(){return Mt},this.setRenderTargetTextures=function(D,ot,St){let _t=mt.get(D);_t.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,_t.__autoAllocateDepthBuffer===!1&&(_t.__useRenderToTexture=!1),mt.get(D.texture).__webglTexture=ot,mt.get(D.depthTexture).__webglTexture=_t.__autoAllocateDepthBuffer?void 0:St,_t.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,ot){let St=mt.get(D);St.__webglFramebuffer=ot,St.__useDefaultFramebuffer=ot===void 0},this.setRenderTarget=function(D,ot=0,St=0){Mt=D,lt=ot,dt=St;let _t=null,vt=!1,Jt=!1;if(D){let Zt=mt.get(D);if(Zt.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(ht.FRAMEBUFFER,Zt.__webglFramebuffer),J.copy(D.viewport),At.copy(D.scissor),Lt=D.scissorTest,P.viewport(J),P.scissor(At),P.setScissorTest(Lt),pt=-1;return}else if(Zt.__webglFramebuffer===void 0)Et.setupRenderTarget(D);else if(Zt.__hasExternalTextures)Et.rebindTextures(D,mt.get(D.texture).__webglTexture,mt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let qt=D.depthTexture;if(Zt.__boundDepthTexture!==qt){if(qt!==null&&mt.has(qt)&&(D.width!==qt.image.width||D.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Et.setupDepthRenderbuffer(D)}}let ne=D.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Jt=!0);let se=mt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(se[ot])?_t=se[ot][St]:_t=se[ot],vt=!0):D.samples>0&&Et.useMultisampledRTT(D)===!1?_t=mt.get(D).__webglMultisampledFramebuffer:Array.isArray(se)?_t=se[St]:_t=se,J.copy(D.viewport),At.copy(D.scissor),Lt=D.scissorTest}else J.copy(kt).multiplyScalar(z).floor(),At.copy(ce).multiplyScalar(z).floor(),Lt=Re;if(St!==0&&(_t=$),P.bindFramebuffer(ht.FRAMEBUFFER,_t)&&P.drawBuffers(D,_t),P.viewport(J),P.scissor(At),P.setScissorTest(Lt),vt){let Zt=mt.get(D.texture);ht.framebufferTexture2D(ht.FRAMEBUFFER,ht.COLOR_ATTACHMENT0,ht.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Zt.__webglTexture,St)}else if(Jt){let Zt=ot;for(let ne=0;ne<D.textures.length;ne++){let se=mt.get(D.textures[ne]);ht.framebufferTextureLayer(ht.FRAMEBUFFER,ht.COLOR_ATTACHMENT0+ne,se.__webglTexture,St,Zt)}}else if(D!==null&&St!==0){let Zt=mt.get(D.texture);ht.framebufferTexture2D(ht.FRAMEBUFFER,ht.COLOR_ATTACHMENT0,ht.TEXTURE_2D,Zt.__webglTexture,St)}pt=-1};function kr(D){let ot=mt.get(D);return(ot.__readFormat!==D.format||ot.__readType!==D.type)&&(ot.__readFormat=D.format,ot.__readType=D.type,ot.__formatReadable=Y.textureFormatReadable(D.format),ot.__typeReadable=Y.textureTypeReadable(D.type)),ot}this.readRenderTargetPixels=function(D,ot,St,_t,vt,Jt,zt,Zt=0){if(!(D&&D.isWebGLRenderTarget)){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ne=mt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&zt!==void 0&&(ne=ne[zt]),ne){P.bindFramebuffer(ht.FRAMEBUFFER,ne);try{let se=D.textures[Zt],qt=se.format,me=se.type;D.textures.length>1&&ht.readBuffer(ht.COLOR_ATTACHMENT0+Zt);let ee=kr(se);if(ee.__formatReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ee.__typeReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ot>=0&&ot<=D.width-_t&&St>=0&&St<=D.height-vt&&ht.readPixels(ot,St,_t,vt,Ot.convert(qt),Ot.convert(me),Jt)}finally{let se=Mt!==null?mt.get(Mt).__webglFramebuffer:null;P.bindFramebuffer(ht.FRAMEBUFFER,se)}}},this.readRenderTargetPixelsAsync=async function(D,ot,St,_t,vt,Jt,zt,Zt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ne=mt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&zt!==void 0&&(ne=ne[zt]),ne)if(ot>=0&&ot<=D.width-_t&&St>=0&&St<=D.height-vt){P.bindFramebuffer(ht.FRAMEBUFFER,ne);let se=D.textures[Zt],qt=se.format,me=se.type;D.textures.length>1&&ht.readBuffer(ht.COLOR_ATTACHMENT0+Zt);let ee=kr(se);if(ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=ht.createBuffer();ht.bindBuffer(ht.PIXEL_PACK_BUFFER,Ie),ht.bufferData(ht.PIXEL_PACK_BUFFER,Jt.byteLength,ht.STREAM_READ),ht.readPixels(ot,St,_t,vt,Ot.convert(qt),Ot.convert(me),0),ht.bindBuffer(ht.PIXEL_PACK_BUFFER,null);let We=Mt!==null?mt.get(Mt).__webglFramebuffer:null;P.bindFramebuffer(ht.FRAMEBUFFER,We);let Te=ht.fenceSync(ht.SYNC_GPU_COMMANDS_COMPLETE,0);return ht.flush(),await vd(ht,Te,4),ht.bindBuffer(ht.PIXEL_PACK_BUFFER,Ie),ht.getBufferSubData(ht.PIXEL_PACK_BUFFER,0,Jt),ht.bindBuffer(ht.PIXEL_PACK_BUFFER,null),ht.deleteBuffer(Ie),ht.deleteSync(Te),Jt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,ot=null,St=0){let _t=Math.pow(2,-St),vt=Math.floor(D.image.width*_t),Jt=Math.floor(D.image.height*_t),zt=ot!==null?ot.x:0,Zt=ot!==null?ot.y:0;Et.setTexture2D(D,0),ht.copyTexSubImage2D(ht.TEXTURE_2D,St,0,0,zt,Zt,vt,Jt),P.unbindTexture()},this.copyTextureToTexture=function(D,ot,St=null,_t=null,vt=0,Jt=0){let zt,Zt,ne,se,qt,me,ee,Ie,We,Te=D.isCompressedTexture?D.mipmaps[Jt]:D.image;if(St!==null)zt=St.max.x-St.min.x,Zt=St.max.y-St.min.y,ne=St.isBox3?St.max.z-St.min.z:1,se=St.min.x,qt=St.min.y,me=St.isBox3?St.min.z:0;else{let Ct=Math.pow(2,-vt);zt=Math.floor(Te.width*Ct),Zt=Math.floor(Te.height*Ct),D.isDataArrayTexture?ne=Te.depth:D.isData3DTexture?ne=Math.floor(Te.depth*Ct):ne=1,se=0,qt=0,me=0}_t!==null?(ee=_t.x,Ie=_t.y,We=_t.z):(ee=0,Ie=0,We=0);let s=Ot.convert(ot.format),a=Ot.convert(ot.type),c;ot.isData3DTexture?(Et.setTexture3D(ot,0),c=ht.TEXTURE_3D):ot.isDataArrayTexture||ot.isCompressedArrayTexture?(Et.setTexture2DArray(ot,0),c=ht.TEXTURE_2D_ARRAY):(Et.setTexture2D(ot,0),c=ht.TEXTURE_2D),P.activeTexture(ht.TEXTURE0),P.pixelStorei(ht.UNPACK_FLIP_Y_WEBGL,ot.flipY),P.pixelStorei(ht.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),P.pixelStorei(ht.UNPACK_ALIGNMENT,ot.unpackAlignment);let p=P.getParameter(ht.UNPACK_ROW_LENGTH),y=P.getParameter(ht.UNPACK_IMAGE_HEIGHT),A=P.getParameter(ht.UNPACK_SKIP_PIXELS),F=P.getParameter(ht.UNPACK_SKIP_ROWS),Q=P.getParameter(ht.UNPACK_SKIP_IMAGES);P.pixelStorei(ht.UNPACK_ROW_LENGTH,Te.width),P.pixelStorei(ht.UNPACK_IMAGE_HEIGHT,Te.height),P.pixelStorei(ht.UNPACK_SKIP_PIXELS,se),P.pixelStorei(ht.UNPACK_SKIP_ROWS,qt),P.pixelStorei(ht.UNPACK_SKIP_IMAGES,me);let nt=D.isDataArrayTexture||D.isData3DTexture,ft=ot.isDataArrayTexture||ot.isData3DTexture;if(D.isDepthTexture){let Ct=mt.get(D),Tt=mt.get(ot),Dt=mt.get(Ct.__renderTarget),oe=mt.get(Tt.__renderTarget);P.bindFramebuffer(ht.READ_FRAMEBUFFER,Dt.__webglFramebuffer),P.bindFramebuffer(ht.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let _e=0;_e<ne;_e++)nt&&(ht.framebufferTextureLayer(ht.READ_FRAMEBUFFER,ht.COLOR_ATTACHMENT0,mt.get(D).__webglTexture,vt,me+_e),ht.framebufferTextureLayer(ht.DRAW_FRAMEBUFFER,ht.COLOR_ATTACHMENT0,mt.get(ot).__webglTexture,Jt,We+_e)),ht.blitFramebuffer(se,qt,zt,Zt,ee,Ie,zt,Zt,ht.DEPTH_BUFFER_BIT,ht.NEAREST);P.bindFramebuffer(ht.READ_FRAMEBUFFER,null),P.bindFramebuffer(ht.DRAW_FRAMEBUFFER,null)}else if(vt!==0||D.isRenderTargetTexture||mt.has(D)){let Ct=mt.get(D),Tt=mt.get(ot);P.bindFramebuffer(ht.READ_FRAMEBUFFER,q),P.bindFramebuffer(ht.DRAW_FRAMEBUFFER,Z);for(let Dt=0;Dt<ne;Dt++)nt?ht.framebufferTextureLayer(ht.READ_FRAMEBUFFER,ht.COLOR_ATTACHMENT0,Ct.__webglTexture,vt,me+Dt):ht.framebufferTexture2D(ht.READ_FRAMEBUFFER,ht.COLOR_ATTACHMENT0,ht.TEXTURE_2D,Ct.__webglTexture,vt),ft?ht.framebufferTextureLayer(ht.DRAW_FRAMEBUFFER,ht.COLOR_ATTACHMENT0,Tt.__webglTexture,Jt,We+Dt):ht.framebufferTexture2D(ht.DRAW_FRAMEBUFFER,ht.COLOR_ATTACHMENT0,ht.TEXTURE_2D,Tt.__webglTexture,Jt),vt!==0?ht.blitFramebuffer(se,qt,zt,Zt,ee,Ie,zt,Zt,ht.COLOR_BUFFER_BIT,ht.NEAREST):ft?ht.copyTexSubImage3D(c,Jt,ee,Ie,We+Dt,se,qt,zt,Zt):ht.copyTexSubImage2D(c,Jt,ee,Ie,se,qt,zt,Zt);P.bindFramebuffer(ht.READ_FRAMEBUFFER,null),P.bindFramebuffer(ht.DRAW_FRAMEBUFFER,null)}else ft?D.isDataTexture||D.isData3DTexture?ht.texSubImage3D(c,Jt,ee,Ie,We,zt,Zt,ne,s,a,Te.data):ot.isCompressedArrayTexture?ht.compressedTexSubImage3D(c,Jt,ee,Ie,We,zt,Zt,ne,s,Te.data):ht.texSubImage3D(c,Jt,ee,Ie,We,zt,Zt,ne,s,a,Te):D.isDataTexture?ht.texSubImage2D(ht.TEXTURE_2D,Jt,ee,Ie,zt,Zt,s,a,Te.data):D.isCompressedTexture?ht.compressedTexSubImage2D(ht.TEXTURE_2D,Jt,ee,Ie,Te.width,Te.height,s,Te.data):ht.texSubImage2D(ht.TEXTURE_2D,Jt,ee,Ie,zt,Zt,s,a,Te);P.pixelStorei(ht.UNPACK_ROW_LENGTH,p),P.pixelStorei(ht.UNPACK_IMAGE_HEIGHT,y),P.pixelStorei(ht.UNPACK_SKIP_PIXELS,A),P.pixelStorei(ht.UNPACK_SKIP_ROWS,F),P.pixelStorei(ht.UNPACK_SKIP_IMAGES,Q),Jt===0&&ot.generateMipmaps&&ht.generateMipmap(c),P.unbindTexture()},this.initRenderTarget=function(D){mt.get(D).__webglFramebuffer===void 0&&Et.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Et.setTextureCube(D,0):D.isData3DTexture?Et.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Et.setTexture2DArray(D,0):Et.setTexture2D(D,0),P.unbindTexture()},this.resetState=function(){lt=0,dt=0,Mt=null,P.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ae._getUnpackColorSpace()}}});function MM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function SM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function bM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ep),this.state=Ve.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function wM(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case lr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ve.DOLLY;break;case lr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ve.ROTATE}break;case lr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ve.PAN}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(hu)}function EM(n){switch(this.state){case Ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function TM(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ve.NONE||(n.preventDefault(),this.dispatchEvent(hu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ep))}function AM(n){this.enabled!==!1&&this._handleKeyDown(n)}function CM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case cr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ve.TOUCH_ROTATE;break;case cr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ve.TOUCH_PAN;break;default:this.state=Ve.NONE}break;case 2:switch(this.touches.TWO){case cr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ve.TOUCH_DOLLY_PAN;break;case cr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ve.TOUCH_DOLLY_ROTATE;break;default:this.state=Ve.NONE}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(hu)}function PM(n){switch(this._trackPointer(n),this.state){case Ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ve.NONE}}function IM(n){this.enabled!==!1&&n.preventDefault()}function RM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function LM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Qd,hu,ep,oc,tp,xM,an,Rn,Ve,cu,ac,np=gn(()=>{sc();Qd={type:"change"},hu={type:"start"},ep={type:"end"},oc=new er,tp=new Bn,xM=Math.cos(70*Hh.DEG2RAD),an=new ct,Rn=2*Math.PI,Ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},cu=1e-6,ac=class extends To{constructor(t,e=null){super(t,e),this.state=Ve.NONE,this.target=new ct,this.cursor=new ct,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:lr.ROTATE,MIDDLE:lr.DOLLY,RIGHT:lr.PAN},this.touches={ONE:cr.ROTATE,TWO:cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ct,this._lastQuaternion=new kn,this._lastTargetPosition=new ct,this._quat=new kn().setFromUnitVectors(t.up,new ct(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Es,this._sphericalDelta=new Es,this._scale=1,this._panOffset=new ct,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new ct,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=SM.bind(this),this._onPointerDown=MM.bind(this),this._onPointerUp=bM.bind(this),this._onContextMenu=IM.bind(this),this._onMouseWheel=TM.bind(this),this._onKeyDown=AM.bind(this),this._onTouchStart=CM.bind(this),this._onTouchMove=PM.bind(this),this._onMouseDown=wM.bind(this),this._onMouseMove=EM.bind(this),this._interceptControlDown=RM.bind(this),this._interceptControlUp=LM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ve.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Qd),this.update(),this.state=Ve.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;an.copy(e).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===Ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Rn:i>Math.PI&&(i-=Rn),r<-Math.PI?r+=Rn:r>Math.PI&&(r-=Rn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=l!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),e.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){let u=an.length();l=this._clampDistance(u*this._scale);let f=u-l;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),o=!!f}else if(this.object.isOrthographicCamera){let u=new ct(this._mouse.x,this._mouse.y,0);u.unproject(this.object);let f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=f!==this.object.zoom;let d=new ct(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(u),this.object.updateMatrixWorld(),l=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(oc.origin.copy(this.object.position),oc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(oc.direction))<xM?this.object.lookAt(this.target):(tp.setFromNormalAndCoplanarPoint(this.object.up,this.target),oc.intersectPlane(tp,this.target))))}else if(this.object.isOrthographicCamera){let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>cu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>cu||this._lastTargetPosition.distanceToSquared(this.target)>cu?(this.dispatchEvent(Qd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Rn/60*this.autoRotateSpeed*t:Rn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){an.setFromMatrixColumn(e,0),an.multiplyScalar(-t),this._panOffset.add(an)}_panUp(t,e){this.screenSpacePanning===!0?an.setFromMatrixColumn(e,1):(an.setFromMatrixColumn(e,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(t),this._panOffset.add(an)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;an.copy(r).sub(this.target);let o=an.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=t-i.left,o=e-i.top,l=i.width,u=i.height;this._mouse.x=r/l*2-1,this._mouse.y=-(o/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let l=(t.pageX+e.x)*.5,u=(t.pageY+e.y)*.5;this._updateZoomParameters(l,u)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new le,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});function ip(n,t,e,i){n.onBeforeCompile=r=>{r.uniforms.uCut={value:t-.05},r.uniforms.uBase={value:i||new ye(1,1,1)},r.uniforms.uBottom={value:t},r.vertexShader=`varying float vZ;
uniform float uBottom;
`+(e?"":`attribute vec4 wall;
varying vec4 vWall;
`)+r.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
`+(e?"objectNormal = vec3(0.0, 0.0, -1.0);":"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vZ = transformed.z;
`+(e?"transformed.z = uBottom;":"vWall = wall;")),r.fragmentShader=`varying float vZ;
uniform float uCut;
`+r.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if (vZ < uCut) discard;`),e||(r.fragmentShader=`varying vec4 vWall;
uniform vec3 uBase;
`+r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
float onWall = dot(vWall.xy, vWall.xy) > 1e-6 ? smoothstep(0.0, 0.03, vZ - vWall.z) * smoothstep(0.0, 0.03, vWall.w - vZ) : 0.0;
diffuseColor.rgb = mix(diffuseColor.rgb, uBase, onWall);`).replace("#include <normal_fragment_begin>",Se.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")+`
if (onWall > 0.0) normal = normalize(mix(normal, (viewMatrix * vec4(normalize(vWall.xy), 0.0, 0.0)).xyz, onWall));`))},n.customProgramCacheKey=()=>`through-${e}`}function rp(n,t,e){let i=document.createElement("canvas");i.width=256,i.height=128;let r=i.getContext("2d");r.font="600 84px Inter, system-ui, sans-serif",r.fillStyle="#"+new ye(t).getHexString(),r.textAlign="center",r.textBaseline="middle",r.fillText(n,128,64);let o=new mo(i);o.colorSpace=wn;let l=new fo(new ys({map:o,depthTest:!1,transparent:!0}));return l.scale.set(e*2,e,1),l.renderOrder=6,l}var Ln,Ds,NM,lc,sp=gn(()=>{sc();np();Ln={face:"#93a2b4",pocket:"#1abc9c",hole:"#4ea1ff",drill:"#4ea1ff",step:"#2ecc71",corners:"#48d1b4",cutout:"#a78bfa",rough3d:"#f5a524",finish3d:"#ff7a59"},Ds={softwood:"#d8b38a",hardwood:"#9c6b45",mdf:"#b59672",plastic:"#d9e2ea",aluminum:"#b9c1c9",foam:"#c7b8a5"};NM=(n,t)=>n.some(e=>e.key===t);lc=class{constructor(){this.el=document.createElement("div"),this.el.className="ncc-viewport",this.renderer=new nc({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.el.appendChild(this.renderer.domElement),this.scene=new lo,this.camera=new yn(35,1,.1,1e4),this.camera.up.set(0,0,1),this.controls=new ac(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.addEventListener("start",()=>{this.userMoved=!0}),this.scene.add(new So(16777215,4478310,1.6));let t=new ws(16777215,1.6);t.position.set(-.6,-1,1.6),this.scene.add(t);let e=new ws(16777215,.5);e.position.set(1,.6,.4),this.scene.add(e),this.content=new Zn,this.scene.add(this.content),this.onFrame=null,this.alive=!0,this.resize=new ResizeObserver(()=>this.fit()),this.resize.observe(this.el);let i=r=>{if(this.alive){if(!this.el.isConnected&&this.detachedSince&&r-this.detachedSince>3e3&&!document.querySelector(".ncc-wrapper")){this.dispose();return}this.el.isConnected?this.detachedSince=0:this.detachedSince||=r,this.onFrame&&this.onFrame(r),this.controls.update(),this.el.isConnected&&this.renderer.render(this.scene,this.camera),requestAnimationFrame(i)}};requestAnimationFrame(i),this.setupPicking()}fit(){let t=this.el.clientWidth,e=this.el.clientHeight;!t||!e||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.userMoved||this.refit())}clear(){for(let t of[...this.content.children])this.content.remove(t),t.traverse(e=>{e.geometry?.dispose(),e.material&&[].concat(e.material).forEach(i=>i.dispose())});this.pickMesh=null,this.markers=null}frame(t,e,i=.08){this.fitBox=[t,e,i],this.userMoved=!1,this.refit()}refit(){if(!this.fitBox)return;let[t,e,i]=this.fitBox,r=new ct((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),o=Math.max(e[0]-t[0],e[1]-t[1],e[2]-t[2],.001),l=new ct(-.45,-.8,.75).normalize(),u=[];for(let v of[t[0],e[0]])for(let g of[t[1],e[1]])for(let b of[t[2],e[2]])u.push(new ct(v,g,b));let f=r.clone(),d=o*2,_=()=>{this.camera.position.copy(f).addScaledVector(l,d),this.camera.near=d/100,this.camera.far=d*100,this.camera.lookAt(f),this.camera.updateMatrixWorld(),this.camera.updateProjectionMatrix()};for(let v=0;v<8;v++){_();let g=1/0,b=-1/0,w=1/0,T=-1/0;for(let U of u){let B=U.clone().project(this.camera);g=Math.min(g,B.x),b=Math.max(b,B.x),w=Math.min(w,B.y),T=Math.max(T,B.y)}let S=Math.max((b-g)/2,(T-w)/2);if(!(S>0))break;let x=d*Math.tan(this.camera.fov*Math.PI/360),O=x*this.camera.aspect,H=new ct().setFromMatrixColumn(this.camera.matrixWorld,0),R=new ct().setFromMatrixColumn(this.camera.matrixWorld,1);f.addScaledVector(H,(g+b)/2*O).addScaledVector(R,(w+T)/2*x),d*=S/(1-i)}_(),this.controls.target.copy(f),this.controls.update()}showPart(t,e=[]){this.clear();let i=new qe;i.setAttribute("position",new Ge(t.positions,3)),i.setIndex(new Ge(t.indices,1)),i.computeVertexNormals();let r=new De(i,new Hn({color:9348283,metalness:.15,roughness:.55,side:xn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));this.content.add(r),this.pickMesh=r;let o=new Ar(new Ss(i,25),new si({color:2832972,transparent:!0,opacity:.55}));this.content.add(o);for(let u of e)this.addLoops(u.loops,u.z,u.color,u.dashed,u.opacity);i.computeBoundingBox();let l=i.boundingBox;this.keepCamera||this.frame(l.min.toArray(),l.max.toArray())}addLoops(t,e,i,r,o=.95){for(let l of t){let u=l.map(([v,g])=>new ct(v,g,e)),f=new qe().setFromPoints([...u,u[0]]),d=r?new yo({color:i,dashSize:2,gapSize:1.5,transparent:!0,opacity:o,depthTest:!1}):new si({color:i,transparent:!0,opacity:o,depthTest:!1}),_=new Tr(f,d);r&&_.computeLineDistances(),_.renderOrder=2,this.content.add(_)}}setupPicking(){let t=this.renderer.domElement,e=null;t.addEventListener("pointerdown",i=>{e=[i.clientX,i.clientY]}),t.addEventListener("pointerup",i=>{if(!e||Math.hypot(i.clientX-e[0],i.clientY-e[1])>4)return;let r=t.getBoundingClientRect(),o=new wo;if(o.setFromCamera(new le((i.clientX-r.left)/r.width*2-1,-((i.clientY-r.top)/r.height)*2+1),this.camera),this.markers?.length&&this.onMarker){let f=o.intersectObjects(this.markers)[0];if(f?.object.userData.axis){this.onAxis?.(f.object.userData.axis);return}if(f){this.onMarker(f.object.userData.key);return}}if(!this.pickMesh||!this.onPick)return;let l=o.intersectObject(this.pickMesh)[0];if(!l||!l.face)return;let u=l.face.normal.clone();u.dot(o.ray.direction)>0&&u.negate(),this.onPick([u.x,u.y,u.z])})}showZero({stock:t,part:e,points:i,selected:r,zFace:o,color:l,accent:u="#4c6ef5"}){this.clear();let f=t.maxX-t.minX,d=t.maxY-t.minY,_=t.top-t.bottom,v=Math.max(f,d,_),g=new ir(f,d,_);g.translate((t.minX+t.maxX)/2,(t.minY+t.maxY)/2,(t.top+t.bottom)/2);let b=new De(g,new Hn({color:l,transparent:!0,opacity:.45,roughness:.9,depthWrite:!1}));if(b.renderOrder=2,this.content.add(b),this.content.add(new Ar(new Ss(g),new si({color:new ye(l).multiplyScalar(.6)}))),e){let x=new qe;x.setAttribute("position",new Ge(e.positions,3)),x.setIndex(new Ge(e.indices,1)),x.computeVertexNormals(),this.partMesh=new De(x,new Hn({color:9348283,metalness:.15,roughness:.55})),this.content.add(this.partMesh)}else this.partMesh=null;let w=o==="bed"?t.bottom:t.top,T=v*.014;this.markers=[];for(let x of i){let O=x.key===r,H=new De(new rr(O?T*1.3:T,24,16),new zn({color:O?u:16777215}));if(H.position.set(x.x,x.y,w),H.userData.key=x.key,H.renderOrder=4,H.material.depthTest=!1,!O){let U=new De(new rr(T*1.25,24,16),new zn({color:6187893,depthTest:!1}));U.renderOrder=3,H.add(U)}let R=new De(new rr(T*3.5,12,8),new zn({visible:!1}));if(R.userData.key=x.key,H.add(R),this.markers.push(R),this.content.add(H),O){let U=new De(new vo(T*1.6,T*2,40),new zn({color:u,transparent:!0,depthTest:!1,side:xn}));U.position.copy(H.position),U.renderOrder=4,this.content.add(U),this.pulse=U;let B=v*.24;for(let[W,C,k]of[[[1,0,0],15158332,"X"],[[0,1,0],3066993,"Y"],[[0,0,1],5147903,"Z"]]){let X=new Eo(new ct(...W),H.position,B,C,B*.15,B*.065);X.line.visible=!1;let et=new De(new yi(v*.0028,v*.0028,B*.86,12),new zn({color:C,depthTest:!1}));et.position.y=B*.43,et.renderOrder=5,X.add(et),X.cone.material.depthTest=!1,X.renderOrder=5,X.cone.renderOrder=5,this.content.add(X);let st=rp(k,C,v*.05);st.position.copy(H.position).add(new ct(...W).multiplyScalar(B*1.18)),this.content.add(st);let $=new De(new yi(B*.1,B*.1,B*1.3,10),new zn({visible:!1}));$.quaternion.setFromUnitVectors(new ct(0,1,0),new ct(...W)),$.position.copy(H.position).add(new ct(...W).multiplyScalar(B*.65)),$.userData.axis=k.toLowerCase(),this.content.add($),this.markers.unshift($)}}}let S=rp("Front",9675444,v*.04);S.position.set((t.minX+t.maxX)/2,t.minY-v*.08,t.bottom),this.content.add(S),this.keepCamera||this.frame([t.minX,t.minY,t.bottom],[t.maxX,t.maxY,t.top]),NM(i,r)||(this.pulse=null),this.onFrame=x=>{if(!this.pulse)return;let O=x%1600/1600;this.pulse.scale.setScalar(1+O*1.6),this.pulse.material.opacity=.8*(1-O),this.pulse.lookAt(this.camera.position)}}spin(t,e=700){let i=this.partMesh;if(!i)return Promise.resolve();i.geometry.computeBoundingBox();let r=i.geometry.boundingBox.getCenter(new ct),o=t==="x"?new ct(1,0,0):new ct(0,0,1);i.matrixAutoUpdate=!1;let l=performance.now();return new Promise(u=>{let f=d=>{let _=Math.min(1,(d-l)/e),v=_<.5?2*_*_:1-(-2*_+2)**2/2;i.matrix.makeTranslation(r.x,r.y,r.z).multiply(new ze().makeRotationAxis(o,Math.PI*v)).multiply(new ze().makeTranslation(-r.x,-r.y,-r.z)),i.matrixWorldNeedsUpdate=!0,_<1&&i.parent?requestAnimationFrame(f):u()};requestAnimationFrame(f)})}showStock(t,e,i){this.clear(),this.keepCamera=!1;let r=t.nx,o=t.ny,l=r*o,u=new Float32Array(l*3),f=new Float32Array(l*3),d=new ye(e);for(let O=0;O<o;O++)for(let H=0;H<r;H++){let R=O*r+H;u[R*3]=t.x0+H*t.cell,u[R*3+1]=t.y0+O*t.cell,u[R*3+2]=t.h[R],f[R*3]=d.r,f[R*3+1]=d.g,f[R*3+2]=d.b}let _=new Uint32Array((r-1)*(o-1)*6),v=0;for(let O=0;O<o-1;O++)for(let H=0;H<r-1;H++){let R=O*r+H,U=R+1,B=R+r,W=B+1;_[v++]=R,_[v++]=U,_[v++]=W,_[v++]=R,_[v++]=W,_[v++]=B}let g=new qe;g.setAttribute("position",new Ge(u,3).setUsage(Ir)),g.setAttribute("color",new Ge(f,3).setUsage(Ir));let b=new Float32Array(l*3);for(let O=0;O<l;O++)b[O*3+2]=1;g.setAttribute("normal",new Ge(b,3).setUsage(Ir));let w=new Float32Array(l*4);for(let O=0;O<l;O++)w[O*4+2]=t.h[O],w[O*4+3]=t.h[O];g.setAttribute("wall",new Ge(w,4).setUsage(Ir)),g.setIndex(new Ge(_,1));let T=new Hn({vertexColors:!0,flatShading:!1,roughness:.8,metalness:e===Ds.aluminum?.5:.05,side:xn});ip(T,t.bottom,!1,d);let S=new De(g,T);this.content.add(S),this.stock={hm:t,geo:g,base:d,sides:this.makeSides(t,d)};let x=new Hn({color:d.clone().multiplyScalar(.7),roughness:.9,side:xn});if(ip(x,t.bottom,!0),this.content.add(new De(g,x)),i){let O=new qe;O.setAttribute("position",new Ge(i.positions,3)),O.setIndex(new Ge(i.indices,1)),O.computeVertexNormals(),this.partGhost=new De(O,new Hn({color:5153279,transparent:!0,opacity:.25,depthWrite:!1})),this.partGhost.visible=!1,this.content.add(this.partGhost)}this.tool=new Zn,this.content.add(this.tool),this.frame([t.x0,t.y0,t.bottom],[t.x0+(r-1)*t.cell,t.y0+(o-1)*t.cell,t.top])}makeSides(t,e){let i=[];for(let v=0;v<t.nx;v++)i.push(v);for(let v=1;v<t.ny;v++)i.push(v*t.nx+t.nx-1);for(let v=t.nx-2;v>=0;v--)i.push((t.ny-1)*t.nx+v);for(let v=t.ny-2;v>=0;v--)i.push(v*t.nx);let r=new Float32Array(i.length*6),o=new Float32Array(i.length*6),l=[],u=[[0,-1],[1,0],[0,1],[-1,0]],f=[t.nx,t.nx+t.ny-1,2*t.nx+t.ny-2];for(let v=0;v<i.length;v++){let g=i[v],b=t.x0+g%t.nx*t.cell,w=t.y0+Math.floor(g/t.nx)*t.cell;r.set([b,w,t.h[g],b,w,t.bottom],v*6);let[T,S]=u[v<f[0]?0:v<f[1]?1:v<f[2]?2:3];if(o.set([T,S,0,T,S,0],v*6),v<i.length-1){let x=v*2;l.push(x,x+1,x+3,x,x+3,x+2)}}let d=new qe;d.setAttribute("position",new Ge(r,3).setUsage(Ir)),d.setAttribute("normal",new Ge(o,3)),d.setIndex(l);let _=new De(d,new Hn({color:e.clone().multiplyScalar(.85),roughness:.85,side:xn}));return this.content.add(_),{g:d,edge:i}}refreshStock(t,e,i){let r=this.stock;if(!r||e<t)return;let{hm:o,geo:l,base:u}=r,f=o.nx,d=o.ny,_=o.h,v=l.attributes.position,g=l.attributes.color,b=l.attributes.normal,w=l.attributes.wall,T=new ye,S=Math.max(0,t),x=Math.min(d-1,e),O=o.cell*1.5,H=(C,k,X)=>{let et=_[k*f+C],st=0;for(let $=-1;$<=1;$++)for(let q=-1;q<=1;q++){let Z=C+q,lt=k+$;(q||$)&&Z>=0&&lt>=0&&Z<f&&lt<d&&(st=Math.max(st,X*(_[lt*f+Z]-et)))}return st};for(let C=S;C<=x;C++)for(let k=0;k<f;k++){let X=C*f+k;v.array[X*3]=o.x0+k*o.cell+(o.sx?o.sx[X]:0),v.array[X*3+1]=o.y0+C*o.cell+(o.sy?o.sy[X]:0),v.array[X*3+2]=_[X];let et=o.op[X];et?(T.copy(u).lerp(i[et-1],.28),T.multiplyScalar(.82+.18*Math.max(0,Math.min(1,(_[X]-o.bottom)/Math.max(1,o.top-o.bottom))))):T.copy(u),g.array[X*3]=T.r,g.array[X*3+1]=T.g,g.array[X*3+2]=T.b}let R=v.array,U=Math.max(0,S-1),B=Math.min(d-1,x+1);for(let C=U;C<=B;C++)for(let k=0;k<f;k++){let X=C*f+k,et=w.array,st=H(k,C,1),$=H(k,C,-1);if(et[X*4]=0,et[X*4+1]=0,et[X*4+2]=_[X],et[X*4+3]=_[X],o.wx&&(o.wx[X]||o.wy[X])&&(st>O||$>O)){et[X*4]=o.wx[X],et[X*4+1]=o.wy[X],et[X*4+2]=_[X]-$,et[X*4+3]=_[X]+st,b.array[X*3]=0,b.array[X*3+1]=0,b.array[X*3+2]=1;continue}let q=(C*f+Math.max(0,k-1))*3,Z=(C*f+Math.min(f-1,k+1))*3,lt=(Math.max(0,C-1)*f+k)*3,dt=(Math.min(d-1,C+1)*f+k)*3,Mt=R[Z]-R[q],pt=R[Z+1]-R[q+1],wt=R[Z+2]-R[q+2],J=R[dt]-R[lt],At=R[dt+1]-R[lt+1],Lt=R[dt+2]-R[lt+2],Ht=pt*Lt-wt*At,Bt=wt*J-Mt*Lt,jt=Mt*At-pt*J,yt=Math.hypot(Ht,Bt,jt)||1;jt<0&&(Ht=-Ht,Bt=-Bt,jt=-jt),b.array[X*3]=Ht/yt,b.array[X*3+1]=Bt/yt,b.array[X*3+2]=jt/yt}v.addUpdateRange(S*f*3,(x-S+1)*f*3),g.addUpdateRange(S*f*3,(x-S+1)*f*3),b.addUpdateRange(U*f*3,(B-U+1)*f*3),w.addUpdateRange(U*f*4,(B-U+1)*f*4),v.needsUpdate=!0,g.needsUpdate=!0,b.needsUpdate=!0,w.needsUpdate=!0;let W=r.sides.g.attributes.position;r.sides.edge.forEach((C,k)=>{W.array[k*6+2]=_[C]}),W.needsUpdate=!0}setTool(t,e){for(let v of[...this.tool.children])this.tool.remove(v),v.traverse(g=>{g.geometry?.dispose(),g.material?.dispose()});let i=t.diameter/2,r=t.kind==="surfacing"||i>6.35,o=r?Math.max(e+1,Math.min(8,i*.5)):Math.max(t.fluteLength||0,Math.min(25,Math.max(e+3,t.diameter*2))),l=new Hn({color:14015457,metalness:.85,roughness:.3}),u;if(t.kind==="vbit"||t.kind==="chamfer"||t.kind==="drill"){let v=i/Math.tan((t.kind==="drill"?118:60)*Math.PI/360);u=new De(new Ms(i,v,48),l),u.rotation.x=-Math.PI/2,u.position.z=v/2}else if(t.kind==="ball"){u=new Zn;let v=new De(new yi(i,i,o-i,64),l);v.rotation.x=Math.PI/2,v.position.z=i+(o-i)/2;let g=new De(new rr(i,48,24,0,Math.PI*2,Math.PI/2,Math.PI/2),l);g.rotation.x=Math.PI/2,g.position.z=i,u.add(v,g)}else u=new De(new yi(i,i,o,64),l),u.rotation.x=Math.PI/2,u.position.z=o/2;let f=r?3.175:Math.max(i,Math.min(3.175,i*1.5)),d=20,_=new De(new yi(f,f,d,32),new Hn({color:11187132,metalness:.8,roughness:.35}));_.rotation.x=Math.PI/2,_.position.z=o+d/2,this.tool.add(u,_)}moveTool(t,e,i){this.tool.position.set(t,e,i)}showPaths(t){this.paths&&(this.content.remove(this.paths),this.paths.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()})),this.paths=new Zn;for(let e of t){let i=e.track;if(!i)continue;let r=[],o=[];for(let u=4;u<i.length;u+=4)(i[u+3]>0?r:o).push(i[u-4],i[u-3],i[u-2]+.02,i[u],i[u+1],i[u+2]+.02);let l=(u,f,d)=>{if(!u.length)return;let _=new qe;_.setAttribute("position",new Xe(u,3));let v=new Ar(_,new si({color:f,transparent:!0,opacity:d}));v.renderOrder=3,this.paths.add(v)};l(r,Ln[e.kind]||"#1abc9c",.75),l(o,"#93a2b4",.3)}this.content.add(this.paths)}dispose(){this.alive=!1,this.resize.disconnect(),this.clear(),this.controls.dispose(),this.renderer.dispose()}}});function OM(){return new Promise((n,t)=>{let e=indexedDB.open(DM,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)})}async function op(n,t){let e=await OM();return new Promise((i,r)=>{let o=e.transaction("kv",n),l=t(o.objectStore("kv"));o.oncomplete=()=>{e.close(),i(l?.result)},o.onerror=o.onabort=()=>{e.close(),r(o.error)}})}var DM,ap,lp,cp=gn(()=>{DM="nccam";ap=n=>op("readonly",t=>t.get(n)).catch(()=>null),lp=(n,t)=>op("readwrite",e=>e.put(t,n)).catch(()=>{})});var up={};Eu(up,{mountApp:()=>zM});function zM(n,t,e){let i={get:async L=>{let j=await fetch(t.base+L);if(!j.ok)throw new Error(`${L}: ${j.status}`);return j.json()},post:(L,j)=>fetch(t.base+L,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(j)})},r={step:1,maxStep:1,fileName:"",loading:"",error:"",up:"top",analysis:null,part:null,tools:[],numbering:"slot",safeZ:null,connected:!1,units:"mm",limits:{},travel:null,job:null,plan:null,planning:!1,result:null,simChecks:null,toast:""},o=new lc,l=L=>!!L.toolNumber&&(!r.slots||L.toolNumber<=r.slots),u=(L,j)=>$i.num(L,r.units,j),f=(L,j)=>$i.len(L,r.units,j),d=0;(async()=>{let[L,j,K,rt]=await Promise.all([i.get("/api/settings").catch(()=>({})),i.get("/api/tools").catch(()=>[]),i.get("/api/firmware").catch(()=>null),i.get("/api/server-state").catch(()=>null)]);r.units=$i.unitsFrom(L?.unitsPreference),r.numbering=L?.tool?.numbering==="toolId"?"toolId":"slot",r.slots=Math.max(0,Number(L?.tool?.count)||0);let ut=L?.tool?.probe?Number(L?.tool?.probeToolNumber)||99:null,Nt=Number(L?.safeZHeight);r.safeZ=Number.isFinite(Nt)?Nt:null,r.tools=Gu(Array.isArray(j)?j:j?.tools),r.numbering=Hu(r.numbering,r.tools,r.slots,ut);let It=K?.settings||{},Vt=Pt=>{let gt=parseFloat(It[Pt]?.value);return Number.isFinite(gt)&&gt>0?gt:null};r.limits={maxRpm:Vt("30")||void 0,minRpm:Vt("31")||void 0,maxFeed:Math.min(Vt("110")||1/0,Vt("111")||1/0,1/0)},Number.isFinite(r.limits.maxFeed)||delete r.limits.maxFeed,r.maxRapid=Math.min(Vt("110")||5e3,Vt("111")||5e3),Vt("130")&&Vt("131")&&(r.travel={x:Vt("130"),y:Vt("131"),z:Vt("132")}),r.connected=!!rt?.machineState?.connected,H();let V=await ap("last");V?.bytes&&!r.part&&!r.loading&&_(null,V)})();async function _(L,j=null){if(!L&&!j)return;let K=j?j.name:L.name;r.fileName=K,r.loading=`Reading ${K}\u2026`,r.error="",r.plan=null,r.result=null,r.analysis=null,r.part=null,r.step=1,r.maxStep=1,H();try{let rt=j?j.bytes:await L.arrayBuffer();r.bytes=rt.slice(0);let ut=await e("load",{bytes:rt},[rt]);if(r.sides=ut.sides,j?.upPath?.length){r.job=null;for(let Nt of j.upPath)await g(Nt,!0);r.job={...Rc(r.analysis),...j.job},await S()}else await g(ut.best);O()}catch(rt){r.error=rt.message||String(rt),r.fileName=""}r.loading="",H()}let v={top:"bottom",bottom:"top",front:"back",back:"front",left:"right",right:"left"};async function g(L,j=!1,K=!1){K||(r.loading="Turning the part\u2026",H());let ut=await(L&&!Array.isArray(L)&&typeof L=="object"?e("turn",{how:L.turn}):e(Array.isArray(L)?"tilt":"orient",Array.isArray(L)?{normal:L}:{up:L}));return b(L,ut,j)}function b(L,j,K){let rt=L&&!Array.isArray(L)&&typeof L=="object";if(rt?r.up=L.turn==="over"?v[r.up]||"custom":r.up:r.up=Array.isArray(L)?"custom":L,r.upPath=rt||Array.isArray(L)?[...r.upPath||[],L]:[L],K){r.part={positions:j.positions,indices:j.indices},r.analysis=j.analysis,r.loading="";return}r.part={positions:j.positions,indices:j.indices},r.analysis=j.analysis;let ut=r.job;return r.job=Rc(j.analysis),ut&&Object.assign(r.job,{material:ut.material,finish:ut.finish,zero:ut.zero,tabs:ut.tabs,stock:{...r.job.stock,fit:ut.stock.fit,margin:ut.stock.margin,extraTop:ut.stock.extraTop}}),r.loading="",S()}let w=!1;async function T(L){if(w||!r.part)return;w=!0;let j={turn:L==="z"?"over":"around"};try{let[K]=await Promise.all([e("turn",{how:j.turn}),o.spin(L==="z"?"x":"z")]);await b(j,K,!1)}catch(K){r.error=K.message||String(K),H()}w=!1}async function S(L=!1){if(!r.part)return;let j=++d;r.planning=!0,L&&(r.result=null),H();try{let K=await e("plan",{tools:r.tools,job:{...r.job,units:r.units},limits:r.limits,paths:L,gcodeOptions:{name:r.fileName,numbering:r.numbering,safeZHeightMm:r.safeZ},timing:{maxRapid:r.maxRapid||5e3}});if(j!==d)return;r.plan=K.plan,O(),L&&(r.result=K,r.simChecks=null)}catch(K){j===d&&(r.error=K.message||String(K))}j===d&&(r.planning=!1,H())}let x=null;function O(){!r.bytes||!r.job||(clearTimeout(x),x=setTimeout(()=>lp("last",{name:r.fileName,bytes:r.bytes,upPath:r.upPath,job:r.job,savedAt:Date.now()}),400))}function H(){if(!n.isConnected)return;let L=n.querySelector("[data-keep-scroll]"),j=L?L.scrollTop:0,K=r.step,rt=["Drop a STEP file. ncCAM finds the pockets, holes and outline for you.","Pick the material. ncCAM sets the speeds, feeds and depth of each pass.","Tools are picked from your Tool Library. Change any of them, or just continue.","Watch the cut play through. When it looks right, load it."][K-1],ut=[r.part?"Your part":"Open your part","What are you cutting it from?","Here\u2019s the plan",r.simChecks&&!r.simChecks.ok?"Check the warnings":"Ready to cut"][K-1];n.innerHTML=`
      <nav class="ncc-rail" aria-label="Steps">
        <div class="ncc-rail-head"><div class="ncc-eyebrow">Plugin</div><div class="ncc-rail-title">ncCAM<span class="ncc-beta">Beta</span></div><div class="ncc-rail-sub">STEP file to G-code</div></div>
        <div class="ncc-steps">${UM.map((Vt,V)=>{let Pt=V+1,gt=Pt===K?"on":Pt<r.maxStep||Pt<K?"done":"";return`<button class="ncc-step ${gt}" type="button" data-go="${Pt}" ${Pt<=r.maxStep?"":"disabled"}><span class="ncc-num">${gt==="done"?"\u2713":Pt}</span>${Ye(Vt)}</button>`}).join("")}</div>
        <button class="ncc-close" type="button" data-act="close">${en.close}Close</button>
      </nav>
      <section class="ncc-main">
        <div class="ncc-top">
          <div><h1>${Ye(ut)}</h1><p class="ncc-lede">${Ye(rt)}</p></div>
          <div class="ncc-conn"><span class="ncc-dot ${r.connected?"ok":""}"></span>${r.connected?"Connected":"Not connected"}</div>
        </div>
        <div class="ncc-body ${K===3?"fixed":""}">${[U,st,J,Bt][K-1]()}</div>
        <div class="ncc-foot">${R()}</div>
      </section>
      ${r.toast?`<div class="ncc-toast" role="status">${Ye(r.toast)}</div>`:""}`;let Nt=n.querySelector("[data-keep-scroll]");Nt&&(Nt.scrollTop=j);let It=n.querySelector("[data-viewer]");if(It){It.replaceWith(o.el);let Vt=r.loading||K===4&&!r.result?`<div class="ncc-busy"><span class="ncc-spin"></span>${Ye(r.loading||"Making toolpaths\u2026")}</div>`:"";o.el.querySelectorAll(".ncc-busy, .ncc-overlay").forEach(V=>V.remove()),o.el.insertAdjacentHTML("beforeend",(K===1?k():K===4?te():"")+Vt),o.fit(),K===1&&et(),K===2&&wt(),K===3&&Lt(),K===4&&r.result&&ce()}}function R(){let L=`<button class="ncc-back" type="button" data-go="${r.step-1}" ${r.step>1?"":"disabled"}>Back</button>`;if(r.step===1)return`${L}<button class="ncc-next" type="button" data-go="2" ${r.plan&&r.plan.ops.length&&!r.loading?"":"disabled"}>Next: Stock ${en.next}</button>`;if(r.step===2)return`${L}<button class="ncc-next" type="button" data-go="3">Next: Operations ${en.next}</button>`;if(r.step===3){let K=r.plan&&r.plan.ops.some(rt=>rt.enabled);return`${L}<button class="ncc-next" type="button" data-go="4" ${K&&!r.planning?"":"disabled"}>Make toolpaths ${en.next}</button>`}let j=r.simChecks&&!r.simChecks.ok;return`${L}${j?'<span class="ncc-foot-note ncc-bad">Fix the problems above before loading.</span>':""}<button class="ncc-next" type="button" data-act="load" ${r.result&&r.simChecks&&!j?"":"disabled"}>${en.load}Load into ncSender</button>`}function U(){if(!r.part&&!r.loading)return`<div class="ncc-drop" data-drop>
        <div class="ncc-drop-icon">${en.upload}</div>
        <h2>Drop a STEP file here</h2>
        <p>Export your part from Fusion, Onshape, FreeCAD or SolidWorks as <strong>.step</strong> or <strong>.stp</strong>. Millimetres or inches both work.</p>
        <label class="ncc-btn" style="display: inline-flex; align-items: center; gap: 8px">Open STEP file<input type="file" accept=".step,.stp,.STEP,.STP" data-file hidden></label>
        ${r.error?`<div class="ncc-hint bad" style="max-width: 520px">${en.warn}<span>${Ye(r.error)}</span></div>`:""}
        ${r.tools.length?"":`<div class="ncc-hint" style="max-width: 520px">${en.info}<span>Your Tool Library is empty. Add your end mills in Settings \u2192 Tool Library so ncCAM can pick them.</span></div>`}
      </div>`;let L=r.analysis;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div class="ncc-file">
          <div style="display: flex; align-items: center; gap: 12px; min-width: 0">
            <div class="ncc-drop-icon" style="width: 38px; height: 38px; border-radius: 10px">${en.part}</div>
            <div style="min-width: 0"><div class="ncc-file-name">${Ye(r.fileName)}</div>
            <div class="ncc-file-sub ncc-mono">${L?`${u(L.size[0])} \xD7 ${u(L.size[1])} \xD7 ${f(L.size[2])}`:"&nbsp;"}</div></div>
          </div>
          <label class="ncc-btn muted" style="white-space: nowrap">Open another file<input type="file" accept=".step,.stp,.STEP,.STP" data-file hidden></label>
        </div>
        <div data-viewer></div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card">
          <div class="ncc-label">Which side faces up?</div>
          <div class="ncc-picks">${BM.map(([j,K])=>{let rt=!r.sides||r.sides[j].reachable;return`<button class="ncc-pick ${r.up===j?"sel":""}" type="button" data-up="${j}" ${rt?"":"disabled"} ${rt?"":`title="With the ${K.toLowerCase()} up, some faces point down and the tool can\u2019t reach them"`}>${ln(kM[j],24,'stroke-width="1.8"')}${K}${rt?"":"<small>Can\u2019t reach</small>"}</button>`}).join("")}</div>
          <div class="ncc-row-sub">Or click a flat face on the model to put it on top.</div>
        </div>
        ${B()}
        ${C(!0)}
      </div>`}function B(){if(!r.plan)return`<div class="ncc-card"><div class="ncc-label">Found in this part</div><div class="ncc-row-sub">${r.planning?"Looking\u2026":""}</div></div>`;let L=new Map;for(let K of r.plan.ops.filter(rt=>rt.kind!=="face"&&rt.kind!=="corners"&&rt.kind!=="finish3d")){let rt=W(K),ut=L.get(rt)||{o:K,name:rt,n:0};ut.n+=K.count||1,L.set(rt,ut)}let j=K=>K.n<2?K.name:K.name.replace(/^(Pocket|Step), /,(rt,ut)=>`${K.n} ${ut.toLowerCase()}s, `);return`<div class="ncc-card"><div class="ncc-label">Found in this part</div><div class="ncc-found">${[...L.values()].map(K=>`<div class="ncc-row"><span style="display: flex; align-items: center; gap: 8px"><span class="ncc-swatch" style="background: ${Ln[K.o.kind]}"></span>${Ye(j(K))}</span><span class="ncc-ok">\u2713</span></div>`).join("")||'<div class="ncc-row-sub">Nothing to cut from this side.</div>'}</div></div>`}function W(L){let j=L.detail.replace(/ · spiral$/,"");return L.kind==="cutout"?`Outline, ${f(L.zTop)} cut-out`:L.kind==="rough3d"?`3D surface, ${f(L.zTop)} tall`:L.kind==="hole"||L.kind==="drill"?`${L.centers.length>1?`${L.centers.length} holes`:"Hole"}, ${j}`:L.kind==="step"?`Step, ${j}`:`Pocket, ${j.split(" \xB7 ").pop()}`}function C(L){if(!r.plan)return"";let j=r.plan.warnings.filter(K=>!L||K.kind==="undercut"||K.kind==="sloped"||K.kind==="edges"||K.kind==="surface3d");return!j.length&&L?`<div class="ncc-hint">${en.info}<span>Everything can be cut from the top in one setup.</span></div>`:j.map(K=>`<div class="ncc-hint ${K.kind==="notool"||K.kind==="noball"?"bad":""}">${K.kind==="notool"||K.kind==="noball"?en.warn:en.info}<span>${Ye(K.text)}</span></div>`).join("")}function k(){if(!r.plan)return"";let L=[...new Set(r.plan.ops.filter(K=>K.kind!=="face"&&K.kind!=="corners"&&K.kind!=="finish3d").map(K=>K.kind))],j={pocket:"Pockets",hole:"Holes",drill:"Holes",step:"Steps",cutout:"Outline",rough3d:"3D surface"};return`<div class="ncc-overlay tr">${L.map(K=>`<span class="ncc-chip"><span class="ncc-swatch" style="background: ${Ln[K]}"></span>${j[K]}</span>`).join("")}</div>
      <div class="ncc-overlay bl"><span class="ncc-chip">Drag to rotate</span><span class="ncc-chip">Scroll to zoom</span><span class="ncc-chip">Click a face to put it on top</span></div>`}let X=null;function et(){if(!r.part)return;kt=null,pt=null;let L=r.part.positions,j=(r.plan?.ops||[]).filter(K=>K.kind!=="face"&&K.kind!=="corners").flatMap(K=>K.kind==="cutout"?[{loops:K.region,z:K.zTop+.05,color:Ln.cutout,dashed:!0}]:K.centers&&!K.region?[{loops:K.centers.map(rt=>hp(rt)),z:K.zTop+.05,color:Ln[K.kind]}]:[{loops:K.region,z:K.zTop+.05,color:Ln[K.kind]}]);o.keepCamera=X===L,o.showPart(r.part,j),X=L,o.onFrame=null,o.onPick=async K=>{if(r.loading)return;let rt=r.up;try{await g(K),r.analysis.undercut&&rt!=="custom"&&(!r.sides||r.sides[rt]?.reachable)&&(await g(rt),mt("With that face up, some of the part can\u2019t be reached from the top."))}catch(ut){r.error=ut.message,H()}}}function st(){let L=r.job,j=r.plan?.stock||Ko(r.analysis,L),K=Object.entries(_r).map(([ut,Nt])=>`<button class="ncc-pick ncc-mat ${L.material===ut?"sel":""}" type="button" data-material="${ut}"><span class="ncc-mat-swatch" style="background: ${Ds[ut]}"></span>${Ye(Nt.name)}<small>${Ye(Nt.note)}</small></button>`).join(""),rt=(ut,Nt,It)=>`<div class="ncc-field"><label for="ncc-${ut}">${Nt}</label><input id="ncc-${ut}" class="ncc-input ncc-mono" inputmode="decimal" data-stock="${ut}" value="${r.units==="in"?Math.round(It/$i.INCH*1e3)/1e3:Math.round(It*100)/100}" ${L.stock.fit?"disabled":""}></div>`;return`
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-mat-card"><div class="ncc-label">Material</div><div class="ncc-picks ncc-mats">${K}</div></div>
        <div class="ncc-card">
          ${$("fit","Size the stock to the part",`Adds ${f(L.stock.margin)} on every side and ${f(L.stock.extraTop)} on top`,L.stock.fit)}
          <div class="ncc-fields">${rt("width",`Width X (${r.units})`,j.width)}${rt("depth",`Depth Y (${r.units})`,j.depth)}${rt("thickness",`Thickness Z (${r.units})`,j.thickness)}</div>
        </div>
        <div class="ncc-card">
          ${$("tabs","Leave tabs to hold the part",L.tabs.enabled?`${u(Z().height)} \xD7 ${f(Z().length)}, so the part stays put until you cut it free`:"The part comes loose at the end",L.tabs.enabled)}
          ${L.tabs.enabled?`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">Number of tabs</span><div class="ncc-stepper"><button type="button" data-tabs="-1" aria-label="Fewer tabs" ${L.tabs.count<=1?"disabled":""}>\u2212</button><span class="ncc-mono">${L.tabs.count}</span><button type="button" data-tabs="1" aria-label="More tabs" ${L.tabs.count>=12?"disabled":""}>+</button></div></div>
          ${dt("height","Tab thickness","Thinner tabs","Thicker tabs")}
          ${dt("length","Tab length","Shorter tabs","Longer tabs")}`:""}
        </div>
      </div>
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-zero-card"><div class="ncc-label">Where is zero?</div>${Mt(j)}
          <div style="font-size: 14px">X Y zero: <strong>${Ye(q(L.zero.xy))}</strong> of the stock</div>
          <div class="ncc-seg" role="group" aria-label="Z zero">
            <button type="button" class="${L.zero.z==="top"?"sel":""}" data-z="top">Z0 on top of stock</button>
            <button type="button" class="${L.zero.z==="bed"?"sel":""}" data-z="bed">Z0 on the bed</button>
          </div>
        </div>
      </div>`}let $=(L,j,K,rt)=>`<div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">${Ye(j)}</div><div class="ncc-row-sub">${Ye(K)}</div></div><button class="ncc-toggle" type="button" role="switch" aria-checked="${rt}" aria-label="${Ye(j)}" data-toggle="${L}"></button></div>`;function q(L){return{"back-left":"back left corner","back-center":"back edge, middle","back-right":"back right corner","left-center":"left edge, middle",center:"center","right-center":"right edge, middle","front-left":"front left corner","front-center":"front edge, middle","front-right":"front right corner"}[L]}let Z=()=>({...Yi(r.job.material),...Object.fromEntries(["height","length"].filter(L=>r.job.tabs[L]!=null).map(L=>[L,r.job.tabs[L]]))}),lt=()=>r.units==="in"?{min:.508,max:10.16,step:.508,grid:.254}:{min:.5,max:10,step:.5,grid:.1};function dt(L,j,K,rt){let ut=Z()[L];return`<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">${j}</span><div class="ncc-stepper"><button type="button" data-tabsize="${L}" data-by="-1" aria-label="${K}" ${ut<=lt().min+1e-6?"disabled":""}>\u2212</button><span class="ncc-mono">${f(ut,r.units==="in"?2:1)}</span><button type="button" data-tabsize="${L}" data-by="1" aria-label="${rt}" ${ut>=lt().max-1e-6?"disabled":""}>+</button></div></div>`}function Mt(L){return`<div class="ncc-zero"><div data-viewer></div></div>
      <div class="ncc-row-sub ncc-mono" style="text-align: center; margin: 0">${u(L.width)} \xD7 ${u(L.depth)} \xD7 ${f(L.thickness)} stock \xB7 tap a point for zero, an arrow to turn the part</div>`}let pt=null;function wt(){let L=r.plan?.stock||Ko(r.analysis,r.job),j=$u.map(ut=>({key:ut,...Lc(L,{xy:ut,z:"top"})})),K=getComputedStyle(n).getPropertyValue("--color-accent").trim()||"#4c6ef5",rt=`${r.part?.positions?.length}|${L.width}|${L.depth}|${L.thickness}`;o.keepCamera=pt===rt,o.showZero({stock:L,part:r.part,points:j,selected:r.job.zero.xy,zFace:r.job.zero.z,color:Ds[r.job.material],accent:K}),pt=rt,X=null,kt=null,o.onPick=null,o.onMarker=ut=>{ut!==r.job.zero.xy&&(r.job.zero.xy=ut,it())},o.onAxis=ut=>T(ut)}function J(){let L=r.plan;if(!L)return'<div class="ncc-busy" style="position: static; flex: 1"><span class="ncc-spin"></span>Planning\u2026</div>';let j=L.ops.map(V=>{let Pt=Ht(V);return`<div class="ncc-op ${V.enabled?"":"off"} ${r.focusOp===V.id?"focus":""}" data-focus="${V.id}">
        <div class="ncc-op-icon" style="background: color-mix(in srgb, ${Ln[V.kind]} 16%, transparent); color: ${Ln[V.kind]}">${en[V.kind]||en.pocket}</div>
        <div class="ncc-op-text"><div class="ncc-op-title">${Ye(V.label)}</div><div class="ncc-op-sub ncc-mono">${Ye(V.detail)}</div></div>
        <select class="ncc-select" data-tool="${V.id}" aria-label="Tool for ${Ye(V.label)}">${Pt.map(gt=>`<option value="${gt.id}" ${gt.id===V.tool.id?"selected":""}>T${vr(gt,r.numbering)} \xB7 ${Ye(gt.name)}</option>`).join("")}</select>
        <button class="ncc-toggle" type="button" role="switch" aria-checked="${V.enabled}" aria-label="${Ye(V.label)}" data-op="${V.id}"></button>
      </div>`}).join(""),K=Qo(L),rt=new Map;for(let V of L.ops)V.enabled&&V.kind!=="face"&&rt.set(V.tool.id,(rt.get(V.tool.id)||0)+1);let ut=[...rt].sort((V,Pt)=>Pt[1]-V[1])[0]?.[0],Nt=L.ops.find(V=>V.enabled&&V.tool.id===ut)||L.ops.find(V=>V.enabled),It=Nt?.feeds,Vt=`<div class="ncc-pair">
          <div class="ncc-card"><div class="ncc-label">Finish</div>
            <div class="ncc-seg" role="group" aria-label="Finish">${Object.entries($n).map(([V,Pt])=>`<button type="button" class="${r.job.finish===V?"sel":""}" data-finish="${V}">${Pt.name}</button>`).join("")}</div>
            <div class="ncc-row-sub">${L.ops.some(V=>V.kind==="finish3d")?`3D: passes spaced for ${f(jo[r.job.finish],r.units==="in"?4:2)} ridges${r.job.finish==="fast"?"; flat walls without a finishing pass":""}.`:""} ${{fast:"Bigger steps, no finishing pass.",balanced:`Leaves ${f(.2,r.units==="in"?3:1)} on the walls, then a clean finishing pass.`,smooth:"Lighter steps and a finishing pass, for the best walls."}[r.job.finish]}</div>
            ${It?`<div class="ncc-mono ncc-row-sub" style="line-height: 1.6">${Ye(Nt.tool.name)}<br>${Ye(_r[r.job.material].name)} \xB7 ${It.rpm.toLocaleString()} RPM<br>${r.units==="in"?`${u(It.feed,1)} in/min`:`${It.feed.toLocaleString()} mm/min`} \xB7 ${f(It.stepdown,r.units==="in"?3:2)} per pass</div>`:""}
          </div>
          <div class="ncc-card"><div class="ncc-label">Tools for this job</div>
            ${K.map(V=>`<div class="ncc-row"><span style="min-width: 0"><span class="ncc-mono" style="color: var(--color-accent)">T${vr(V,r.numbering)}</span> ${Ye(V.name)}</span><span class="ncc-slot ${l(V)?"":"hand"}">${l(V)?`Slot ${V.toolNumber}`:"By hand"}</span></div>`).join("")||'<div class="ncc-row-sub">No operations switched on.</div>'}
            ${K.some(V=>!V.toolNumber)?'<div class="ncc-row-sub">By hand: not in the magazine, so you\u2019ll be asked to load it.</div>':""}
          </div>
        </div>`;return`<div class="ncc-plan">
        <div class="ncc-plan-list" data-keep-scroll="ops">${At()}<div class="ncc-ops">${j}</div>${C(!1)}<div class="ncc-plan-pair-in">${Vt}</div></div>
        <div class="ncc-card ncc-viewcard ncc-plan-view"><div data-viewer></div></div>
        <div class="ncc-plan-pair">${Vt}</div>
      </div>`}function At(){let L=r.plan.ops.some(j=>j.kind==="rough3d");return!L&&!r.plan.analysis.sloped?"":`<div class="ncc-op" style="margin-bottom: 10px">
        <div class="ncc-op-icon" style="background: color-mix(in srgb, ${Ln.finish3d} 16%, transparent); color: ${Ln.finish3d}">${en.finish3d}</div>
        <div class="ncc-op-text"><div class="ncc-op-title">Cut curved faces in 3D</div><div class="ncc-op-sub">${L?"Roughed in layers, then a ball end mill follows the surface.":"Off: sloped and curved faces are left square."}</div></div>
        <button class="ncc-toggle" type="button" role="switch" aria-checked="${L}" aria-label="Cut curved faces in 3D" data-toggle="3d"></button>
      </div>`}function Lt(){let j=(r.plan?.ops||[]).filter(K=>K.enabled&&K.kind!=="face").map(K=>{let rt=r.focusOp&&r.focusOp!==K.id;return{loops:K.region||(K.centers||[]).map(Nt=>hp(Nt)),z:K.kind==="cutout"?K.zTop+.05:Math.max(K.zBottom,0)+.05,color:Ln[K.kind],dashed:K.kind==="cutout",opacity:rt?.2:1,top:K.zTop}});o.keepCamera=X===r.part?.positions,o.showPart(r.part,j),X=r.part?.positions,kt=null,pt=null,o.onFrame=null,o.onMarker=null,o.onPick=null}function Ht(L){let j=L.kind==="drill"?["drill"]:L.kind==="face"?["surfacing","flat"]:L.kind==="finish3d"?["ball","flat"]:["flat"],K=r.tools.filter(rt=>j.includes(rt.kind)).sort((rt,ut)=>ut.diameter-rt.diameter);return K.some(rt=>rt.id===L.tool.id)?K:[L.tool,...K]}function Bt(){let L=r.result,j=L?.plan,K=j?Qo(j):[],rt=j?j.ops.filter(ut=>ut.enabled).reduce((ut,Nt,It,Vt)=>ut+(It>0&&Vt[It-1].tool.id!==Nt.tool.id?1:0),0):0;return`
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div data-viewer></div>
        <div class="ncc-play" data-playbar>${Xt()}</div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card ncc-stats">
          <div class="ncc-stat"><b class="ncc-mono">${j?Math.max(1,Math.round(L.seconds/60)):"\u2013"}<span> min</span></b><span>Run time</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${K.length||"\u2013"}</b><span>Tools</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${j?rt:"\u2013"}</b><span>Tool changes</span></div>
        </div>
        <div class="ncc-card"><div class="ncc-label">Checked</div>${yt()}</div>
        <div class="ncc-card">
          <div class="ncc-mono ncc-row-sub" style="margin: 0">${Ye(jt())}${L?` \xB7 ${(L.gcode.split(`
`).length-1).toLocaleString()} lines`:""}</div>
          <button class="ncc-btn muted" type="button" data-act="save" ${L?"":"disabled"}>Save to File Manager</button>
        </div>
      </div>`}let jt=()=>`${(r.fileName||"part").replace(/\.(step|stp)$/i,"")}.nc`;function yt(){let L=r.simChecks;return L?L.items.map(j=>`<div class="ncc-check"><span class="ncc-ck ${j.state}">${j.state==="bad"?en.cross:j.state==="info"?"!":en.check}</span><span>${Ye(j.text)}</span></div>`).join(""):`<div class="ncc-row-sub">${r.result?"Checking\u2026":"Waiting for the toolpaths\u2026"}</div>`}let z={ops:[],moves:null,opOf:null,cum:null,total:0,t:0,i:1,playing:!1,speed:5,hm:null,stamps:[],colors:[],cursor:null};function Xt(){if(!r.result)return"";let j=r.result.plan.ops.filter(ut=>ut.enabled&&ut.track),K=z.total||1,rt=j[Math.max(0,z.opIndexAt?.(z.t)??0)];return`<button class="ncc-playbtn" type="button" data-act="play" aria-label="${z.playing?"Pause":"Play"}">${z.playing?en.pause:en.play}</button>
      <div class="ncc-track">
        <div class="ncc-bar" data-scrub role="slider" aria-label="Position in the program" aria-valuemin="0" aria-valuemax="${Math.round(K)}" aria-valuenow="${Math.round(z.t)}">
          ${j.map(ut=>`<i style="width: ${(ut.seconds||0)/K*100}%; background: ${Ln[ut.kind]}"></i>`).join("")}
          <b style="width: ${z.t/K*100}%"></b><em style="left: ${z.t/K*100}%"></em>
        </div>
        <div class="ncc-row" style="font-size: 12px; color: var(--color-text-secondary)"><span data-pb="step">${Ze(j,rt)}</span><span class="ncc-mono" data-pb="clock">${cc(z.t)} / ${cc(K)}</span></div>
      </div>
      <div class="ncc-seg" style="padding: 3px" role="group" aria-label="Speed">${[[1,"Slow"],[5,"Normal"],[25,"Fast"]].map(([ut,Nt])=>`<button type="button" style="padding: 6px 8px" class="${z.speed===ut?"sel":""}" data-speed="${ut}">${Nt}</button>`).join("")}</div>`}function te(){return`<div class="ncc-overlay tr">
      <button class="ncc-chip ${o.paths?.visible!==!1&&r.showPaths?"on":""}" type="button" data-act="paths">Toolpaths</button>
      <button class="ncc-chip ${r.showPart?"on":""}" type="button" data-act="ghost">Part</button>
    </div>`}let kt=null;function ce(){if(kt===r.result){Re();return}kt=r.result,X=null,pt=null,o.onMarker=null,o.onPick=null;let L=r.result.plan,j=L.ops.filter(V=>V.enabled&&V.track),K=Wi.cellFor(L.stock,520*520);z.ops=j,z.hm=Bu(new Wi(L.stock,K)),z.colors=L.ops.map(V=>new ye(Ln[V.kind])),z.stamps=L.ops.map(V=>Ec(V.tool,K));let rt=0;for(let V of j)rt+=V.track.length/4;z.moves=new Float32Array(rt*4),z.opOf=new Uint16Array(rt),z.cum=new Float64Array(rt);let ut=0,Nt=0,It=null,Vt=r.maxRapid||5e3;for(let V of j){let Pt=L.ops.indexOf(V);for(let gt=0;gt<V.track.length;gt+=4,ut++){if(z.moves.set(V.track.subarray(gt,gt+4),ut*4),z.opOf[ut]=Pt,It){let Ot=Math.hypot(V.track[gt]-It[0],V.track[gt+1]-It[1],V.track[gt+2]-It[2]);Nt+=Ot/(V.track[gt+3]>0?V.track[gt+3]:Vt)*60}It=[V.track[gt],V.track[gt+1],V.track[gt+2]],z.cum[ut]=Nt}}z.total=Nt,z.opIndexAt=V=>{let Pt=Math.min(rt-1,fe(z.cum,V));return j.indexOf(L.ops[z.opOf[Pt]])},z.t=0,z.i=1,z.cursor=null,z.toolOp=-1,z.snaps=[],o.showStock(z.hm,Ds[L.job.material]||Ds.mdf,r.part);{let V=z.hm,Pt=[V.x0,V.y0,V.bottom],gt=[V.x0+(V.nx-1)*V.cell,V.y0+(V.ny-1)*V.cell,V.top];for(let Ot of j){let Wt=Ot.tool.diameter/2;for(let Rt=0;Rt<Ot.track.length;Rt+=4)Ot.track[Rt+3]!==0&&(Pt[0]=Math.min(Pt[0],Ot.track[Rt]-Wt),gt[0]=Math.max(gt[0],Ot.track[Rt]+Wt),Pt[1]=Math.min(Pt[1],Ot.track[Rt+1]-Wt),gt[1]=Math.max(gt[1],Ot.track[Rt+1]+Wt))}o.frame(Pt,gt)}o.showPaths(j),r.showPaths=r.showPaths??!1,Re(),ue(0),z.speed=5,z.rate=Math.max(1,z.total/600/5),o.onFrame=je,Y(L),z.playing=!1,be()}function Re(){o.paths&&(o.paths.visible=!!r.showPaths),o.partGhost&&(o.partGhost.visible=!!r.showPart)}function fe(L,j){let K=0,rt=L.length;for(;K<rt;){let ut=K+rt>>1;L[ut]<j?K=ut+1:rt=ut}return K}let Yt=L=>({x:z.moves[L*4],y:z.moves[L*4+1],z:z.moves[L*4+2],r:z.moves[L*4+3]===0});function pe(L){let j=z.hm,K=z.cum.length,rt=1/0,ut=-1,Nt=(It,Vt,V)=>{let Pt=r.result.plan.ops[V].tool.diameter/2/j.cell+3,gt=Math.floor((Math.min(It.y,Vt.y)-j.y0)/j.cell-Pt),Ot=Math.ceil((Math.max(It.y,Vt.y)-j.y0)/j.cell+Pt);rt=Math.min(rt,Math.max(0,gt)),ut=Math.max(ut,Math.min(j.ny-1,Ot))};for(;z.i<K&&z.cum[z.i]<=L;){z.opOf[z.i]!==z.opOf[z.i-1]&&!z.cursor&&He();let It=z.cursor||Yt(z.i-1),Vt=Yt(z.i),V=z.opOf[z.i];Vt.r||(Tc(j,r.result.plan.ops[V].tool,It,Vt,V),Nt(It,Vt,V)),z.cursor=null,z.i++}if(z.i<K&&L>z.cum[z.i-1]){let It=z.cursor||Yt(z.i-1),Vt=Yt(z.i),V=z.opOf[z.i],Pt=z.cum[z.i-1],gt=(L-Pt)/(z.cum[z.i]-Pt||1),Ot=Yt(z.i-1),Wt={x:Ot.x+(Vt.x-Ot.x)*gt,y:Ot.y+(Vt.y-Ot.y)*gt,z:Ot.z+(Vt.z-Ot.z)*gt};Vt.r||(Tc(j,r.result.plan.ops[V].tool,It,Wt,V),Nt(It,Wt,V)),z.cursor=Wt}return[rt,ut]}function ue(L){let j=z.cum.length;if(!j)return;let K=Math.min(j-1,fe(z.cum,L)),rt=z.opOf[K];if(rt!==z.toolOp){let Nt=r.result.plan.ops[rt];o.setTool(Nt.tool,Nt.zTop-Nt.zBottom),z.toolOp=rt}let ut=z.cursor||Yt(Math.max(0,z.i-1));o.moveTool(ut.x,ut.y,ut.z)}let we=0,Le=0;function je(L){let j=we?Math.min(.1,(L-we)/1e3):0;if(we=L,!z.playing||!z.cum)return;z.t=Math.min(z.total,z.t+j*z.speed*z.rate);let[K,rt]=pe(z.t);o.refreshStock(K,rt,z.colors),ue(z.t),z.t>=z.total?(z.playing=!1,be()):L-Le>200&&(Le=L,be())}let Ne=["h","op","sx","sy","wx","wy","gap","deep"];function He(){z.snaps.some(L=>L.i===z.i)||z.snaps.push({i:z.i,data:Ne.map(L=>z.hm[L].slice())})}function ht(L){if(L=Math.max(0,Math.min(z.total,L)),L<z.t){let j=z.snaps.filter(K=>z.cum[K.i-1]<=L).sort((K,rt)=>rt.i-K.i)[0];j?(Ne.forEach((K,rt)=>z.hm[K].set(j.data[rt])),z.i=j.i):(z.hm.h.fill(z.hm.top),z.hm.op.fill(0),z.hm.sx.fill(0),z.hm.sy.fill(0),z.hm.wx.fill(0),z.hm.wy.fill(0),z.hm.gap.fill(1/0),z.hm.deep.fill(-1/0),z.i=1),z.cursor=null,pe(L),o.refreshStock(0,z.hm.ny-1,z.colors)}else{let[j,K]=pe(L);o.refreshStock(j,K,z.colors)}z.t=L,ue(L),be()}let Ze=(L,j)=>j?`Step ${L.indexOf(j)+1} of ${L.length} \xB7 ${Ye(j.label)} \xB7 T${vr(j.tool,r.numbering)}`:"";function be(){let L=n.querySelector("[data-playbar]");if(!L)return;if(L._result!==r.result||L._total!==z.total||!L.querySelector("[data-scrub]")){L.innerHTML=Xt(),L._result=r.result,L._total=z.total;return}let j=r.result.plan.ops.filter(Pt=>Pt.enabled&&Pt.track),K=z.total||1,rt=`${z.t/K*100}%`,ut=j[Math.max(0,z.opIndexAt?.(z.t)??0)],Nt=L.querySelector("[data-scrub]");Nt.querySelector("b").style.width=rt,Nt.querySelector("em").style.left=rt,Nt.setAttribute("aria-valuenow",String(Math.round(z.t)));let It=(Pt,gt)=>{Pt&&Pt.innerHTML!==gt&&(Pt.innerHTML=gt)};It(L.querySelector('[data-pb="step"]'),Ze(j,ut)),It(L.querySelector('[data-pb="clock"]'),`${cc(z.t)} / ${cc(K)}`);let Vt=L.querySelector('[data-act="play"]'),V=z.playing?"Pause":"Play";Vt.getAttribute("aria-label")!==V&&(Vt.setAttribute("aria-label",V),Vt.innerHTML=z.playing?en.pause:en.play);for(let Pt of L.querySelectorAll("[data-speed]"))Pt.classList.toggle("sel",+Pt.dataset.speed===z.speed)}function Y(L){setTimeout(()=>{if(r.result?.plan!==L)return;let j=L.ops.map(It=>({...It,moves:It.track?Array.from({length:It.track.length/4},(Vt,V)=>({x:It.track[V*4],y:It.track[V*4+1],z:It.track[V*4+2],r:It.track[V*4+3]===0,f:It.track[V*4+3]})):null})),{collisions:K}=ku({...L,ops:j},Wi.cellFor(L.stock,300*300)),rt=[];if(rt.push(K.length?{state:"bad",text:`${K.length} fast move${K.length>1?"s go":" goes"} into the material (${[...new Set(K.map(It=>L.ops.find(Vt=>Vt.id===It.op)?.label))].join(", ")}).`}:{state:"ok",text:"No fast moves through the material"}),r.travel){let It=L.stock.width<=r.travel.x&&L.stock.depth<=r.travel.y;rt.push(It?{state:"ok",text:"The stock fits inside your machine\u2019s travel"}:{state:"bad",text:`The stock is bigger than your machine\u2019s travel (${u(r.travel.x)} \xD7 ${f(r.travel.y)}).`})}let ut=Qo(L);rt.push(ut.every(It=>It.fluteLength)?{state:"ok",text:"Every tool is long enough for its depth"}:{state:"info",text:"Some tools have no cutting length in the Tool Library, so their depth isn\u2019t checked."}),L.ops.find(It=>It.kind==="cutout"&&It.enabled)&&rt.push({state:"ok",text:`The cut-out goes ${f(L.job.throughDepth,r.units==="in"?3:1)} into the spoilboard${L.job.tabs.enabled?`, with ${L.job.tabs.count} tabs`:""}`}),L.warnings.some(It=>It.kind==="undercut")&&rt.push({state:"info",text:"Some features are on the other side. Cut this side, then turn the part over and make a program for that side. Pins (the Spoilboard Toolbox plugin can set them up) put it back in the same place."}),r.simChecks={ok:!rt.some(It=>It.state==="bad"),items:rt},H()},50)}let P=L=>{if(!(L<1||L>4||L>r.maxStep+1)){if(L===4&&r.step!==4){z.playing=!1,r.step=4,r.maxStep=4,H(),S(!0);return}r.step=L,r.maxStep=Math.max(r.maxStep,L),L!==4&&(z.playing=!1),H()}},it=()=>{r.maxStep=Math.min(r.maxStep,Math.max(r.step,3)),r.result=null,S(!1)};n.addEventListener("click",L=>{let j=L.target.closest("[data-focus]");if(j&&!L.target.closest("button, select")){r.focusOp=r.focusOp===j.dataset.focus?null:j.dataset.focus,H();return}let K=L.target.closest("button, [data-scrub]");if(!K||K.disabled)return;let rt=K.dataset;if(rt.go)return P(+rt.go);if(rt.up)return g(rt.up).catch(ut=>{r.error=ut.message,H()});if(rt.material)return r.job.material=rt.material,Object.assign(r.job.tabs,Yi(rt.material)),it();if(rt.tabsize){let ut=Z(),Nt=lt();return r.job.tabs[rt.tabsize]=Math.max(Nt.min,Math.min(Nt.max,Math.round((ut[rt.tabsize]+ +rt.by*Nt.step)/Nt.grid)*Nt.grid)),it()}if(rt.zero)return r.job.zero.xy=rt.zero,it();if(rt.z)return r.job.zero.z=rt.z,it();if(rt.finish)return r.job.finish=rt.finish,it();if(rt.tabs)return r.job.tabs.count=Math.max(1,Math.min(12,r.job.tabs.count+ +rt.tabs)),it();if(rt.toggle==="fit"){let ut=r.plan?.stock;return r.job.stock.fit=!r.job.stock.fit,!r.job.stock.fit&&ut&&Object.assign(r.job.stock,{width:ut.width,depth:ut.depth,thickness:ut.thickness}),it()}if(rt.toggle==="tabs")return r.job.tabs.enabled=!r.job.tabs.enabled,it();if(rt.toggle==="3d")return r.job.surface3d=!r.plan?.ops.some(ut=>ut.kind==="rough3d"),r.job.disabled={},r.job.toolOverride={},it();if(rt.op)return r.job.disabled[rt.op]=!r.job.disabled[rt.op],it();if(rt.speed)return z.speed=+rt.speed,be();if(rt.act==="play")return z.t>=z.total&&ht(0),z.playing=!z.playing,we=0,be();if(rt.act==="paths"){r.showPaths=!r.showPaths,Re(),K.classList.toggle("on",r.showPaths);return}if(rt.act==="ghost"){r.showPart=!r.showPart,Re(),K.classList.toggle("on",r.showPart);return}if(rt.act==="close")return xt();if(rt.act==="load")return Et(K);if(rt.act==="save")return Gt(K)}),n.addEventListener("pointerdown",L=>{if(!L.target.closest("[data-scrub]")||!z.cum)return;let K=z.playing;z.playing=!1;let rt=Vt=>{let V=n.querySelector("[data-scrub]").getBoundingClientRect();V.width>0&&ht((Vt-V.left)/V.width*z.total)};rt(L.clientX);let ut=null,Nt=Vt=>{ut===null&&requestAnimationFrame(()=>{let V=ut;ut=null,rt(V)}),ut=Vt.clientX},It=()=>{window.removeEventListener("pointermove",Nt),window.removeEventListener("pointerup",It),z.playing=K&&z.t<z.total,we=0,be()};window.addEventListener("pointermove",Nt),window.addEventListener("pointerup",It)}),n.addEventListener("change",L=>{let j=L.target;if(j.matches("[data-file]"))return _(j.files[0]);if(j.dataset.tool)return r.job.toolOverride[j.dataset.tool]=+j.value||j.value,it();if(j.dataset.stock){let K=parseFloat(String(j.value).replace(",","."));return Number.isFinite(K)&&K>0&&(r.job.stock[j.dataset.stock]=$i.toMm(K,r.units)),it()}}),n.addEventListener("dragover",L=>{let j=L.target.closest("[data-drop]");j&&(L.preventDefault(),j.classList.add("over"))}),n.addEventListener("dragleave",L=>{let j=L.target.closest("[data-drop]");j&&j.classList.remove("over")}),n.addEventListener("drop",L=>{L.target.closest("[data-drop]")&&(L.preventDefault(),_(L.dataTransfer.files[0]))});function mt(L){r.toast=L,H(),setTimeout(()=>{r.toast===L&&(r.toast="",H())},2600)}async function Et(L){L.disabled=!0;try{let j=await i.post("/api/gcode-files/load-temp",{filename:jt(),content:r.result.gcode});if(!j.ok)throw new Error(`ncSender said ${j.status}`);xt()}catch(j){L.disabled=!1,mt(`Couldn\u2019t load the program: ${j.message}`)}}async function Gt(L){L.disabled=!0;try{let j=await $t(jt()),K=await i.post("/api/gcode-files/file/save",{path:j,content:r.result.gcode});if(!K.ok)throw new Error(`save failed (${K.status})`);mt(`Saved to File Manager: ${j}`)}catch(j){mt(`Couldn\u2019t save: ${j.message}`)}L.disabled=!1}async function $t(L){let j=L.replace(/\.nc$/,""),K=new Set,rt=ut=>{for(let Nt of ut||[])Nt.type==="folder"?rt(Nt.children):K.add(Nt.path)};rt((await i.get("/api/gcode-files"))?.tree);for(let ut=1;ut<1e3;ut++){let Nt=`ncCAM/${ut<2?L:`${j} (${ut}).nc`}`;if(!K.has(Nt))return Nt}throw new Error("too many saved copies")}function xt(){z.playing=!1,window.postMessage({type:"close-plugin-dialog"},"*")}H(),window.__nccam={S:r,PLAY:z,viewer:o,seek:L=>ht(L)}}function hp(n,t=48){return Array.from({length:t},(e,i)=>[n.x+n.d/2*Math.cos(i/t*2*Math.PI),n.y+n.d/2*Math.sin(i/t*2*Math.PI)])}var UM,BM,Ye,cc,ln,en,kM,fp=gn(()=>{sc();Fc();sp();cp();UM=["Model","Stock & Zero","Operations","Preview & Load"],BM=[["top","Top"],["bottom","Bottom"],["front","Front"],["back","Back"],["left","Left"],["right","Right"]],Ye=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),cc=n=>{let t=Math.max(0,Math.round(n));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},ln=(n,t=18,e="")=>`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${e}>${n}</svg>`,en={close:ln('<path d="M6 6l12 12M18 6L6 18"/>'),next:ln('<path d="M9 6l6 6-6 6"/>',16,'stroke-width="2.4"'),part:ln('<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 22V12M21 7l-9 5-9-5"/>',20),upload:ln('<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',28),info:ln('<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>'),warn:ln('<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17h.01"/>'),check:ln('<path d="M5 12l5 5 9-10"/>',12,'stroke-width="3.2"'),cross:ln('<path d="M6 6l12 12M18 6L6 18"/>',12,'stroke-width="3.2"'),play:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>',pause:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',load:ln('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',16,'stroke-width="2.4"'),face:ln('<path d="M3 9h18M3 15h18"/>'),pocket:ln('<rect x="4" y="6" width="16" height="12" rx="2"/>'),corners:ln('<path d="M4 10V6a2 2 0 012-2h4M20 14v4a2 2 0 01-2 2h-4"/>'),hole:ln('<circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/>'),drill:ln('<path d="M12 3v14M8 13l4 8 4-8"/>'),step:ln('<path d="M3 18h6v-6h6V6h6"/>'),cutout:ln('<rect x="3" y="5" width="18" height="14" rx="2" stroke-dasharray="3 2.5"/>'),rough3d:ln('<path d="M3 19h4v-4h3v-4h4v4h3v4h4"/>'),finish3d:ln('<path d="M3 18c3 0 4-9 9-9s6 9 9 9"/>')},kM={top:'<path d="M12 3l9 5-9 5-9-5z" fill="currentColor" fill-opacity=".35"/><path d="M3 8v8l9 5 9-5V8"/>',bottom:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M3 16l9-5 9 5" stroke-dasharray="2 2"/>',front:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5V13z" fill="currentColor" fill-opacity=".35"/><path d="M21 8v8l-9 5"/>',back:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 3v8" stroke-dasharray="2 2"/>',left:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5V13z" fill="currentColor" fill-opacity=".2"/><path d="M21 8v8l-9 5"/>',right:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5"/><path d="M21 8v8l-9 5V13z" fill="currentColor" fill-opacity=".35"/>'}});var sf=Tu(Pu(),1);Fc();var Lg={linearUnit:"millimeter",linearDeflectionType:"absolute_value",linearDeflection:.02,angularDeflection:.1};function Uc(){let n=null,t=null,e=null,i=null,r={async init({wasmBinary:o}){return i=o,!0},async load({bytes:o}){if(t=Fu(new Uint8Array(o)),!t){n||=await(0,sf.default)({wasmBinary:i});let l=n.ReadStepFile(new Uint8Array(o),Lg);if(!l.success||!l.meshes?.length)throw new Error("This file has no solid ncCAM can read. Export it again as STEP (AP214 or AP242).");t=Du(l)}return{solids:t.solids,size:Gs(t).size,...Ou(t)}},async orient({up:o}){e=qo(t,o);let l=gr(e);return{positions:Float32Array.from(e.positions),indices:e.indices.slice(),faces:e.faces,analysis:l}},async tilt({normal:o}){e=qo(e,o);let l=gr(e);return{positions:Float32Array.from(e.positions),indices:e.indices.slice(),faces:e.faces,analysis:l}},async turn({how:o}){e=Sc(e,o==="over"?[1,0,0,0,-1,0,0,0,-1]:[-1,0,0,0,-1,0,0,0,1]);let l=gr(e);return{positions:Float32Array.from(e.positions),indices:e.indices.slice(),faces:e.faces,analysis:l}},async plan({tools:o,job:l,limits:u,paths:f,gcodeOptions:d,timing:_}){let v=qu(e,o,l,u);f&&Ku(v);let g=f?ef(v,_):0,b=f?tf(v,d):"";for(let w of v.ops)delete w.surface;for(let w of v.ops){if(!w.moves)continue;let T=new Float32Array(w.moves.length*4);w.moves.forEach((S,x)=>{T[x*4]=S.x,T[x*4+1]=S.y,T[x*4+2]=S.z,T[x*4+3]=S.r?0:S.f}),w.track=T,delete w.moves}return{plan:v,gcode:b,seconds:g}}};return async function(l){let u=r[l.type];if(!u)throw new Error(`unknown request ${l.type}`);return u(l)}}var dp="0.1.4-mvyr7m6v";if(typeof document>"u"){let n=Uc();self.onmessage=async({data:t})=>{try{let e=await n(t),i=e&&e.positions?[e.positions.buffer,e.indices.buffer]:[];self.postMessage({id:t.id,ok:!0,result:e},i)}catch(e){self.postMessage({id:t.id,ok:!1,error:e.message||String(e)})}}}else{let n=window.NcCam=window.NcCam||{};n.build!==dp&&n.engine&&(n.engine.then(i=>i.worker?.terminate(),()=>{}),n.engine=null),n.build=dp,n.mount=async(i,r)=>{let{mountApp:o}=await Promise.resolve().then(()=>(fp(),up));try{o(i,r,await t(r))}catch(l){i.textContent=`ncCAM could not start: ${l.message||l}`}};let t=i=>n.engine||=e(i);async function e(i){let r=await fetch(i.file("lib/occt-import-js.wasm")).then(u=>{if(!u.ok)throw new Error(`lib/occt-import-js.wasm: ${u.status}`);return u.arrayBuffer()}),o=null;try{o=new Worker(URL.createObjectURL(new Blob([n.source||""],{type:"text/javascript"})))}catch{o=null}if(o){let u=0,f=new Map;o.onmessage=({data:v})=>{let g=f.get(v.id);g&&(f.delete(v.id),v.ok?g.resolve(v.result):g.reject(new Error(v.error)))};let d=(v,g={},b=[])=>new Promise((w,T)=>{let S=++u;f.set(S,{resolve:w,reject:T}),o.postMessage({...g,id:S,type:v},b)});if(await Promise.race([d("init",{wasmBinary:r}).then(()=>!0),new Promise(v=>setTimeout(()=>v(!1),5e3))]))return d.worker=o,d;o.terminate()}let l=Uc();return await l({type:"init",wasmBinary:r}),(u,f={})=>l({...f,type:u})}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
